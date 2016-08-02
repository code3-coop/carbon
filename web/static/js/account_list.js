import $ from 'jquery'

import 'semantic-ui-css/components/reset.css'
import 'semantic-ui-css/components/container.css'
import 'semantic-ui-css/components/search.css'
import 'semantic-ui-css/components/icon.css'
import 'semantic-ui-css/components/input.css'
import 'semantic-ui-css/components/table.css'
import '../css/account_list.css'

import 'semantic-ui-css/components/search.js'

$('.ui.search')
  .search({
    type: 'category'
  })
;
