create materialized view search_index as (

  select
      a.id as id
    , 'account' as matched_table
    , 'name' as matched_column
    , setweight(to_tsvector(a.name), 'A') as search_vector
  from accounts as a

  union

  select
      a.id as id
    , 'account' as matched_table
    , 'status' as matched_column
    , setweight(to_tsvector(s.key), 'C') as search_vector
  from accounts as a
    left join account_statuses as s on a.status_id = s.id

  union

  select
      a.id as id
    , 'account' as matched_table
    , 'tags' as matched_columns
    , setweight(to_tsvector(string_agg(at.description, ' ')), 'B') as search_vector
  from accounts as a
    left join j_accounts_tags as jat on jat.account_id = a.id
    left join account_tags as at on at.id = jat.account_tag_id
  group by a.id

  union

  select
      a.id as id
    , 'contact' as matched_table
    , 'name' as matched_column
    , setweight(to_tsvector(string_agg(c.full_name, ' ')), 'A') as search_vector
  from accounts as a
    left join contacts as c on c.account_id = a.id
  group by a.id

);

create index idx_fts_search on search_words using gin(search_vector);

-- search for matching term 'account'
select
    s.id
  , s.matched_table
  , s.matched_column
from search_index as s
where s.search_vector @@ to_tsquery('account')
order by ts_rank(s.search_vector, to_tsquery('account')) desc;

-- run on insert, update or delete
refresh materialized view search_index;

create extension pg_trgm;

create materialized view search_words as 
select word from ts_stat ('

  select
    to_tsvector(a.name) as search_vector
  from accounts as a

  union

  select
    to_tsvector(s.key) as search_vector
  from accounts as a
    left join account_statuses as s on a.status_id = s.id

  union

  select
    to_tsvector(string_agg(at.description, '' '')) as search_vector
  from accounts as a
    left join j_accounts_tags as jat on jat.account_id = a.id
    left join account_tags as at on at.id = jat.account_tag_id

  union

  select
    to_tsvector(string_agg(c.full_name, '' '')) as search_vector
  from accounts as a
    left join contacts as c on c.account_id = a.id

');

create index words_idx on search_words using gin(word gin_trgm_ops);

-- run on insert, update or delete
refresh materialized view search_words;


-- did you mean?
select word 
from search_words
where similarity(word, 'acount') > 0.5 
order by word <-> 'acount'
limit 1;
