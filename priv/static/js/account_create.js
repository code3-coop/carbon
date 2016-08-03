/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _jquery = __webpack_require__(1);

	var _jquery2 = _interopRequireDefault(_jquery);

	__webpack_require__(4);

	__webpack_require__(5);

	__webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _jquery2.default)('.ui.selection.dropdown').dropdown();

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["$"] = __webpack_require__(2);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["jQuery"] = __webpack_require__(3);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*eslint-disable no-unused-vars*/
	/*!
	 * jQuery JavaScript Library v3.1.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-07-07T21:44Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}
	/* global Symbol */
	// Defining this global in .eslintrc would create a danger of using the global
	// unguarded in another place, it seems safer to define global only for this module



	var
		version = "3.1.0",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {

			/* eslint-disable no-unused-vars */
			// See https://github.com/eslint/eslint/issues/6125
			var name;

			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.0
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-04
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true;
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
		// Known :disabled false positives:
		// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
		// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Check form elements and option elements for explicit disabling
			return "label" in elem && elem.disabled === disabled ||
				"form" in elem && elem.disabled === disabled ||

				// Check non-disabled form elements for fieldset[disabled] ancestors
				"form" in elem && elem.disabled === false && (
					// Support: IE6-11+
					// Ancestry is covered for us
					elem.isDisabled === disabled ||

					// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						("label" in elem || !disabledAncestor( elem )) !== disabled
				);
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;




	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	jQuery.readyException = function( error ) {
		window.setTimeout( function() {
			throw error;
		} );
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList
			.then( fn )

			// Wrap jQuery.readyException in a function so that the lookup
			// happens at the time of error handling instead of callback
			// registration.
			.catch( function( error ) {
				jQuery.readyException( error );
			} );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnotwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? JSON.parse( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() {
					return tween.cur();
				} :
				function() {
					return jQuery.css( elem, prop, "" );
				},
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) ),
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support: IE <=9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox <=42
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				return ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var

		/* eslint-disable max-len */

		// See https://github.com/eslint/eslint/issues/3229
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		/* eslint-enable */

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* eslint-disable no-loop-func */

				anim.done( function() {

				/* eslint-enable no-loop-func */

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;

		} else {
			opt.duration = typeof opt.duration === "number" ?
				opt.duration : opt.duration in jQuery.fx.speeds ?
					jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];

						/* eslint-disable no-cond-assign */

						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}

						/* eslint-enable no-cond-assign */
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",

			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in uncached url if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rts, "" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win, rect, doc,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;

				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}

			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.parseJSON = JSON.parse;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}





	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}


	return jQuery;
	} );


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*!
	 * # Semantic UI 2.2.2 - Form Validation
	 * http://github.com/semantic-org/semantic-ui/
	 *
	 *
	 * Released under the MIT license
	 * http://opensource.org/licenses/MIT
	 *
	 */

	;(function ($, window, document, undefined) {

	"use strict";

	window = (typeof window != 'undefined' && window.Math == Math)
	  ? window
	  : (typeof self != 'undefined' && self.Math == Math)
	    ? self
	    : Function('return this')()
	;

	$.fn.form = function(parameters) {
	  var
	    $allModules      = $(this),
	    moduleSelector   = $allModules.selector || '',

	    time             = new Date().getTime(),
	    performance      = [],

	    query            = arguments[0],
	    legacyParameters = arguments[1],
	    methodInvoked    = (typeof query == 'string'),
	    queryArguments   = [].slice.call(arguments, 1),
	    returnedValue
	  ;
	  $allModules
	    .each(function() {
	      var
	        $module     = $(this),
	        element     = this,

	        formErrors  = [],
	        keyHeldDown = false,

	        // set at run-time
	        $field,
	        $group,
	        $message,
	        $prompt,
	        $submit,
	        $clear,
	        $reset,

	        settings,
	        validation,

	        metadata,
	        selector,
	        className,
	        error,

	        namespace,
	        moduleNamespace,
	        eventNamespace,

	        instance,
	        module
	      ;

	      module      = {

	        initialize: function() {

	          // settings grabbed at run time
	          module.get.settings();
	          if(methodInvoked) {
	            if(instance === undefined) {
	              module.instantiate();
	            }
	            module.invoke(query);
	          }
	          else {
	            if(instance !== undefined) {
	              instance.invoke('destroy');
	            }
	            module.verbose('Initializing form validation', $module, settings);
	            module.bindEvents();
	            module.set.defaults();
	            module.instantiate();
	          }
	        },

	        instantiate: function() {
	          module.verbose('Storing instance of module', module);
	          instance = module;
	          $module
	            .data(moduleNamespace, module)
	          ;
	        },

	        destroy: function() {
	          module.verbose('Destroying previous module', instance);
	          module.removeEvents();
	          $module
	            .removeData(moduleNamespace)
	          ;
	        },

	        refresh: function() {
	          module.verbose('Refreshing selector cache');
	          $field      = $module.find(selector.field);
	          $group      = $module.find(selector.group);
	          $message    = $module.find(selector.message);
	          $prompt     = $module.find(selector.prompt);

	          $submit     = $module.find(selector.submit);
	          $clear      = $module.find(selector.clear);
	          $reset      = $module.find(selector.reset);
	        },

	        submit: function() {
	          module.verbose('Submitting form', $module);
	          $module
	            .submit()
	          ;
	        },

	        attachEvents: function(selector, action) {
	          action = action || 'submit';
	          $(selector)
	            .on('click' + eventNamespace, function(event) {
	              module[action]();
	              event.preventDefault();
	            })
	          ;
	        },

	        bindEvents: function() {
	          module.verbose('Attaching form events');
	          $module
	            .on('submit' + eventNamespace, module.validate.form)
	            .on('blur'   + eventNamespace, selector.field, module.event.field.blur)
	            .on('click'  + eventNamespace, selector.submit, module.submit)
	            .on('click'  + eventNamespace, selector.reset, module.reset)
	            .on('click'  + eventNamespace, selector.clear, module.clear)
	          ;
	          if(settings.keyboardShortcuts) {
	            $module
	              .on('keydown' + eventNamespace, selector.field, module.event.field.keydown)
	            ;
	          }
	          $field
	            .each(function() {
	              var
	                $input     = $(this),
	                type       = $input.prop('type'),
	                inputEvent = module.get.changeEvent(type, $input)
	              ;
	              $(this)
	                .on(inputEvent + eventNamespace, module.event.field.change)
	              ;
	            })
	          ;
	        },

	        clear: function() {
	          $field
	            .each(function () {
	              var
	                $field       = $(this),
	                $element     = $field.parent(),
	                $fieldGroup  = $field.closest($group),
	                $prompt      = $fieldGroup.find(selector.prompt),
	                defaultValue = $field.data(metadata.defaultValue) || '',
	                isCheckbox   = $element.is(selector.uiCheckbox),
	                isDropdown   = $element.is(selector.uiDropdown),
	                isErrored    = $fieldGroup.hasClass(className.error)
	              ;
	              if(isErrored) {
	                module.verbose('Resetting error on field', $fieldGroup);
	                $fieldGroup.removeClass(className.error);
	                $prompt.remove();
	              }
	              if(isDropdown) {
	                module.verbose('Resetting dropdown value', $element, defaultValue);
	                $element.dropdown('clear');
	              }
	              else if(isCheckbox) {
	                $field.prop('checked', false);
	              }
	              else {
	                module.verbose('Resetting field value', $field, defaultValue);
	                $field.val('');
	              }
	            })
	          ;
	        },

	        reset: function() {
	          $field
	            .each(function () {
	              var
	                $field       = $(this),
	                $element     = $field.parent(),
	                $fieldGroup  = $field.closest($group),
	                $prompt      = $fieldGroup.find(selector.prompt),
	                defaultValue = $field.data(metadata.defaultValue),
	                isCheckbox   = $element.is(selector.uiCheckbox),
	                isDropdown   = $element.is(selector.uiDropdown),
	                isErrored    = $fieldGroup.hasClass(className.error)
	              ;
	              if(defaultValue === undefined) {
	                return;
	              }
	              if(isErrored) {
	                module.verbose('Resetting error on field', $fieldGroup);
	                $fieldGroup.removeClass(className.error);
	                $prompt.remove();
	              }
	              if(isDropdown) {
	                module.verbose('Resetting dropdown value', $element, defaultValue);
	                $element.dropdown('restore defaults');
	              }
	              else if(isCheckbox) {
	                module.verbose('Resetting checkbox value', $element, defaultValue);
	                $field.prop('checked', defaultValue);
	              }
	              else {
	                module.verbose('Resetting field value', $field, defaultValue);
	                $field.val(defaultValue);
	              }
	            })
	          ;
	        },

	        is: {
	          bracketedRule: function(rule) {
	            return (rule.type && rule.type.match(settings.regExp.bracket));
	          },
	          empty: function($field) {
	            if(!$field || $field.length === 0) {
	              return true;
	            }
	            else if($field.is('input[type="checkbox"]')) {
	              return !$field.is(':checked');
	            }
	            else {
	              return module.is.blank($field);
	            }
	          },
	          blank: function($field) {
	            return $.trim($field.val()) === '';
	          },
	          valid: function() {
	            var
	              allValid = true
	            ;
	            module.verbose('Checking if form is valid');
	            $.each(validation, function(fieldName, field) {
	              if( !( module.validate.field(field, fieldName) ) ) {
	                allValid = false;
	              }
	            });
	            return allValid;
	          }
	        },

	        removeEvents: function() {
	          $module
	            .off(eventNamespace)
	          ;
	          $field
	            .off(eventNamespace)
	          ;
	          $submit
	            .off(eventNamespace)
	          ;
	          $field
	            .off(eventNamespace)
	          ;
	        },

	        event: {
	          field: {
	            keydown: function(event) {
	              var
	                $field       = $(this),
	                key          = event.which,
	                isInput      = $field.is(selector.input),
	                isCheckbox   = $field.is(selector.checkbox),
	                isInDropdown = ($field.closest(selector.uiDropdown).length > 0),
	                keyCode      = {
	                  enter  : 13,
	                  escape : 27
	                }
	              ;
	              if( key == keyCode.escape) {
	                module.verbose('Escape key pressed blurring field');
	                $field
	                  .blur()
	                ;
	              }
	              if(!event.ctrlKey && key == keyCode.enter && isInput && !isInDropdown && !isCheckbox) {
	                if(!keyHeldDown) {
	                  $field
	                    .one('keyup' + eventNamespace, module.event.field.keyup)
	                  ;
	                  module.submit();
	                  module.debug('Enter pressed on input submitting form');
	                }
	                keyHeldDown = true;
	              }
	            },
	            keyup: function() {
	              keyHeldDown = false;
	            },
	            blur: function(event) {
	              var
	                $field          = $(this),
	                $fieldGroup     = $field.closest($group),
	                validationRules = module.get.validation($field)
	              ;
	              if( $fieldGroup.hasClass(className.error) ) {
	                module.debug('Revalidating field', $field, validationRules);
	                if(validationRules) {
	                  module.validate.field( validationRules );
	                }
	              }
	              else if(settings.on == 'blur' || settings.on == 'change') {
	                if(validationRules) {
	                  module.validate.field( validationRules );
	                }
	              }
	            },
	            change: function(event) {
	              var
	                $field      = $(this),
	                $fieldGroup = $field.closest($group),
	                validationRules = module.get.validation($field)
	              ;
	              if(settings.on == 'change' || ( $fieldGroup.hasClass(className.error) && settings.revalidate) ) {
	                clearTimeout(module.timer);
	                module.timer = setTimeout(function() {
	                  module.debug('Revalidating field', $field,  module.get.validation($field));
	                  module.validate.field( validationRules );
	                }, settings.delay);
	              }
	            }
	          }

	        },

	        get: {
	          ancillaryValue: function(rule) {
	            if(!rule.type || !module.is.bracketedRule(rule)) {
	              return false;
	            }
	            return rule.type.match(settings.regExp.bracket)[1] + '';
	          },
	          ruleName: function(rule) {
	            if( module.is.bracketedRule(rule) ) {
	              return rule.type.replace(rule.type.match(settings.regExp.bracket)[0], '');
	            }
	            return rule.type;
	          },
	          changeEvent: function(type, $input) {
	            if(type == 'checkbox' || type == 'radio' || type == 'hidden' || $input.is('select')) {
	              return 'change';
	            }
	            else {
	              return module.get.inputEvent();
	            }
	          },
	          inputEvent: function() {
	            return (document.createElement('input').oninput !== undefined)
	              ? 'input'
	              : (document.createElement('input').onpropertychange !== undefined)
	                ? 'propertychange'
	                : 'keyup'
	            ;
	          },
	          prompt: function(rule, field) {
	            var
	              ruleName      = module.get.ruleName(rule),
	              ancillary     = module.get.ancillaryValue(rule),
	              prompt        = rule.prompt || settings.prompt[ruleName] || settings.text.unspecifiedRule,
	              requiresValue = (prompt.search('{value}') !== -1),
	              requiresName  = (prompt.search('{name}') !== -1),
	              $label,
	              $field,
	              name
	            ;
	            if(requiresName || requiresValue) {
	              $field = module.get.field(field.identifier);
	            }
	            if(requiresValue) {
	              prompt = prompt.replace('{value}', $field.val());
	            }
	            if(requiresName) {
	              $label = $field.closest(selector.group).find('label').eq(0);
	              name = ($label.length == 1)
	                ? $label.text()
	                : $field.prop('placeholder') || settings.text.unspecifiedField
	              ;
	              prompt = prompt.replace('{name}', name);
	            }
	            prompt = prompt.replace('{identifier}', field.identifier);
	            prompt = prompt.replace('{ruleValue}', ancillary);
	            if(!rule.prompt) {
	              module.verbose('Using default validation prompt for type', prompt, ruleName);
	            }
	            return prompt;
	          },
	          settings: function() {
	            if($.isPlainObject(parameters)) {
	              var
	                keys     = Object.keys(parameters),
	                isLegacySettings = (keys.length > 0)
	                  ? (parameters[keys[0]].identifier !== undefined && parameters[keys[0]].rules !== undefined)
	                  : false,
	                ruleKeys
	              ;
	              if(isLegacySettings) {
	                // 1.x (ducktyped)
	                settings   = $.extend(true, {}, $.fn.form.settings, legacyParameters);
	                validation = $.extend({}, $.fn.form.settings.defaults, parameters);
	                module.error(settings.error.oldSyntax, element);
	                module.verbose('Extending settings from legacy parameters', validation, settings);
	              }
	              else {
	                // 2.x
	                if(parameters.fields) {
	                  ruleKeys = Object.keys(parameters.fields);
	                  if( typeof parameters.fields[ruleKeys[0]] == 'string' || $.isArray(parameters.fields[ruleKeys[0]]) ) {
	                    $.each(parameters.fields, function(name, rules) {
	                      if(typeof rules == 'string') {
	                        rules = [rules];
	                      }
	                      parameters.fields[name] = {
	                        rules: []
	                      };
	                      $.each(rules, function(index, rule) {
	                        parameters.fields[name].rules.push({ type: rule });
	                      });
	                    });
	                  }
	                }

	                settings   = $.extend(true, {}, $.fn.form.settings, parameters);
	                validation = $.extend({}, $.fn.form.settings.defaults, settings.fields);
	                module.verbose('Extending settings', validation, settings);
	              }
	            }
	            else {
	              settings   = $.fn.form.settings;
	              validation = $.fn.form.settings.defaults;
	              module.verbose('Using default form validation', validation, settings);
	            }

	            // shorthand
	            namespace       = settings.namespace;
	            metadata        = settings.metadata;
	            selector        = settings.selector;
	            className       = settings.className;
	            error           = settings.error;
	            moduleNamespace = 'module-' + namespace;
	            eventNamespace  = '.' + namespace;

	            // grab instance
	            instance = $module.data(moduleNamespace);

	            // refresh selector cache
	            module.refresh();
	          },
	          field: function(identifier) {
	            module.verbose('Finding field with identifier', identifier);
	            if( $field.filter('#' + identifier).length > 0 ) {
	              return $field.filter('#' + identifier);
	            }
	            else if( $field.filter('[name="' + identifier +'"]').length > 0 ) {
	              return $field.filter('[name="' + identifier +'"]');
	            }
	            else if( $field.filter('[name="' + identifier +'[]"]').length > 0 ) {
	              return $field.filter('[name="' + identifier +'[]"]');
	            }
	            else if( $field.filter('[data-' + metadata.validate + '="'+ identifier +'"]').length > 0 ) {
	              return $field.filter('[data-' + metadata.validate + '="'+ identifier +'"]');
	            }
	            return $('<input/>');
	          },
	          fields: function(fields) {
	            var
	              $fields = $()
	            ;
	            $.each(fields, function(index, name) {
	              $fields = $fields.add( module.get.field(name) );
	            });
	            return $fields;
	          },
	          validation: function($field) {
	            var
	              fieldValidation,
	              identifier
	            ;
	            if(!validation) {
	              return false;
	            }
	            $.each(validation, function(fieldName, field) {
	              identifier = field.identifier || fieldName;
	              if( module.get.field(identifier)[0] == $field[0] ) {
	                field.identifier = identifier;
	                fieldValidation = field;
	              }
	            });
	            return fieldValidation || false;
	          },
	          value: function (field) {
	            var
	              fields = [],
	              results
	            ;
	            fields.push(field);
	            results = module.get.values.call(element, fields);
	            return results[field];
	          },
	          values: function (fields) {
	            var
	              $fields = $.isArray(fields)
	                ? module.get.fields(fields)
	                : $field,
	              values = {}
	            ;
	            $fields.each(function(index, field) {
	              var
	                $field     = $(field),
	                type       = $field.prop('type'),
	                name       = $field.prop('name'),
	                value      = $field.val(),
	                isCheckbox = $field.is(selector.checkbox),
	                isRadio    = $field.is(selector.radio),
	                isMultiple = (name.indexOf('[]') !== -1),
	                isChecked  = (isCheckbox)
	                  ? $field.is(':checked')
	                  : false
	              ;
	              if(name) {
	                if(isMultiple) {
	                  name = name.replace('[]', '');
	                  if(!values[name]) {
	                    values[name] = [];
	                  }
	                  if(isCheckbox) {
	                    if(isChecked) {
	                      values[name].push(value || true);
	                    }
	                    else {
	                      values[name].push(false);
	                    }
	                  }
	                  else {
	                    values[name].push(value);
	                  }
	                }
	                else {
	                  if(isRadio) {
	                    if(isChecked) {
	                      values[name] = value;
	                    }
	                  }
	                  else if(isCheckbox) {
	                    if(isChecked) {
	                      values[name] = value || true;
	                    }
	                    else {
	                      values[name] = false;
	                    }
	                  }
	                  else {
	                    values[name] = value;
	                  }
	                }
	              }
	            });
	            return values;
	          }
	        },

	        has: {

	          field: function(identifier) {
	            module.verbose('Checking for existence of a field with identifier', identifier);
	            if(typeof identifier !== 'string') {
	              module.error(error.identifier, identifier);
	            }
	            if( $field.filter('#' + identifier).length > 0 ) {
	              return true;
	            }
	            else if( $field.filter('[name="' + identifier +'"]').length > 0 ) {
	              return true;
	            }
	            else if( $field.filter('[data-' + metadata.validate + '="'+ identifier +'"]').length > 0 ) {
	              return true;
	            }
	            return false;
	          }

	        },

	        add: {
	          prompt: function(identifier, errors) {
	            var
	              $field       = module.get.field(identifier),
	              $fieldGroup  = $field.closest($group),
	              $prompt      = $fieldGroup.children(selector.prompt),
	              promptExists = ($prompt.length !== 0)
	            ;
	            errors = (typeof errors == 'string')
	              ? [errors]
	              : errors
	            ;
	            module.verbose('Adding field error state', identifier);
	            $fieldGroup
	              .addClass(className.error)
	            ;
	            if(settings.inline) {
	              if(!promptExists) {
	                $prompt = settings.templates.prompt(errors);
	                $prompt
	                  .appendTo($fieldGroup)
	                ;
	              }
	              $prompt
	                .html(errors[0])
	              ;
	              if(!promptExists) {
	                if(settings.transition && $.fn.transition !== undefined && $module.transition('is supported')) {
	                  module.verbose('Displaying error with css transition', settings.transition);
	                  $prompt.transition(settings.transition + ' in', settings.duration);
	                }
	                else {
	                  module.verbose('Displaying error with fallback javascript animation');
	                  $prompt
	                    .fadeIn(settings.duration)
	                  ;
	                }
	              }
	              else {
	                module.verbose('Inline errors are disabled, no inline error added', identifier);
	              }
	            }
	          },
	          errors: function(errors) {
	            module.debug('Adding form error messages', errors);
	            module.set.error();
	            $message
	              .html( settings.templates.error(errors) )
	            ;
	          }
	        },

	        remove: {
	          prompt: function(identifier) {
	            var
	              $field      = module.get.field(identifier),
	              $fieldGroup = $field.closest($group),
	              $prompt     = $fieldGroup.children(selector.prompt)
	            ;
	            $fieldGroup
	              .removeClass(className.error)
	            ;
	            if(settings.inline && $prompt.is(':visible')) {
	              module.verbose('Removing prompt for field', identifier);
	              if(settings.transition && $.fn.transition !== undefined && $module.transition('is supported')) {
	                $prompt.transition(settings.transition + ' out', settings.duration, function() {
	                  $prompt.remove();
	                });
	              }
	              else {
	                $prompt
	                  .fadeOut(settings.duration, function(){
	                    $prompt.remove();
	                  })
	                ;
	              }
	            }
	          }
	        },

	        set: {
	          success: function() {
	            $module
	              .removeClass(className.error)
	              .addClass(className.success)
	            ;
	          },
	          defaults: function () {
	            $field
	              .each(function () {
	                var
	                  $field     = $(this),
	                  isCheckbox = ($field.filter(selector.checkbox).length > 0),
	                  value      = (isCheckbox)
	                    ? $field.is(':checked')
	                    : $field.val()
	                ;
	                $field.data(metadata.defaultValue, value);
	              })
	            ;
	          },
	          error: function() {
	            $module
	              .removeClass(className.success)
	              .addClass(className.error)
	            ;
	          },
	          value: function (field, value) {
	            var
	              fields = {}
	            ;
	            fields[field] = value;
	            return module.set.values.call(element, fields);
	          },
	          values: function (fields) {
	            if($.isEmptyObject(fields)) {
	              return;
	            }
	            $.each(fields, function(key, value) {
	              var
	                $field      = module.get.field(key),
	                $element    = $field.parent(),
	                isMultiple  = $.isArray(value),
	                isCheckbox  = $element.is(selector.uiCheckbox),
	                isDropdown  = $element.is(selector.uiDropdown),
	                isRadio     = ($field.is(selector.radio) && isCheckbox),
	                fieldExists = ($field.length > 0),
	                $multipleField
	              ;
	              if(fieldExists) {
	                if(isMultiple && isCheckbox) {
	                  module.verbose('Selecting multiple', value, $field);
	                  $element.checkbox('uncheck');
	                  $.each(value, function(index, value) {
	                    $multipleField = $field.filter('[value="' + value + '"]');
	                    $element       = $multipleField.parent();
	                    if($multipleField.length > 0) {
	                      $element.checkbox('check');
	                    }
	                  });
	                }
	                else if(isRadio) {
	                  module.verbose('Selecting radio value', value, $field);
	                  $field.filter('[value="' + value + '"]')
	                    .parent(selector.uiCheckbox)
	                      .checkbox('check')
	                  ;
	                }
	                else if(isCheckbox) {
	                  module.verbose('Setting checkbox value', value, $element);
	                  if(value === true) {
	                    $element.checkbox('check');
	                  }
	                  else {
	                    $element.checkbox('uncheck');
	                  }
	                }
	                else if(isDropdown) {
	                  module.verbose('Setting dropdown value', value, $element);
	                  $element.dropdown('set selected', value);
	                }
	                else {
	                  module.verbose('Setting field value', value, $field);
	                  $field.val(value);
	                }
	              }
	            });
	          }
	        },

	        validate: {

	          form: function(event, ignoreCallbacks) {
	            var
	              values = module.get.values(),
	              apiRequest
	            ;

	            // input keydown event will fire submit repeatedly by browser default
	            if(keyHeldDown) {
	              return false;
	            }

	            // reset errors
	            formErrors = [];
	            if( module.is.valid() ) {
	              module.debug('Form has no validation errors, submitting');
	              module.set.success();
	              if(ignoreCallbacks !== true) {
	                return settings.onSuccess.call(element, event, values);
	              }
	            }
	            else {
	              module.debug('Form has errors');
	              module.set.error();
	              if(!settings.inline) {
	                module.add.errors(formErrors);
	              }
	              // prevent ajax submit
	              if($module.data('moduleApi') !== undefined) {
	                event.stopImmediatePropagation();
	              }
	              if(ignoreCallbacks !== true) {
	                return settings.onFailure.call(element, formErrors, values);
	              }
	            }
	          },

	          // takes a validation object and returns whether field passes validation
	          field: function(field, fieldName) {
	            var
	              identifier    = field.identifier || fieldName,
	              $field        = module.get.field(identifier),
	              $dependsField = (field.depends)
	                ? module.get.field(field.depends)
	                : false,
	              fieldValid  = true,
	              fieldErrors = []
	            ;
	            if(!field.identifier) {
	              module.debug('Using field name as identifier', identifier);
	              field.identifier = identifier;
	            }
	            if($field.prop('disabled')) {
	              module.debug('Field is disabled. Skipping', identifier);
	              fieldValid = true;
	            }
	            else if(field.optional && module.is.blank($field)){
	              module.debug('Field is optional and blank. Skipping', identifier);
	              fieldValid = true;
	            }
	            else if(field.depends && module.is.empty($dependsField)) {
	              module.debug('Field depends on another value that is not present or empty. Skipping', $dependsField);
	              fieldValid = true;
	            }
	            else if(field.rules !== undefined) {
	              $.each(field.rules, function(index, rule) {
	                if( module.has.field(identifier) && !( module.validate.rule(field, rule) ) ) {
	                  module.debug('Field is invalid', identifier, rule.type);
	                  fieldErrors.push(module.get.prompt(rule, field));
	                  fieldValid = false;
	                }
	              });
	            }
	            if(fieldValid) {
	              module.remove.prompt(identifier, fieldErrors);
	              settings.onValid.call($field);
	            }
	            else {
	              formErrors = formErrors.concat(fieldErrors);
	              module.add.prompt(identifier, fieldErrors);
	              settings.onInvalid.call($field, fieldErrors);
	              return false;
	            }
	            return true;
	          },

	          // takes validation rule and returns whether field passes rule
	          rule: function(field, rule) {
	            var
	              $field       = module.get.field(field.identifier),
	              type         = rule.type,
	              value        = $field.val(),
	              isValid      = true,
	              ancillary    = module.get.ancillaryValue(rule),
	              ruleName     = module.get.ruleName(rule),
	              ruleFunction = settings.rules[ruleName]
	            ;
	            if( !$.isFunction(ruleFunction) ) {
	              module.error(error.noRule, ruleName);
	              return;
	            }
	            // cast to string avoiding encoding special values
	            value = (value === undefined || value === '' || value === null)
	              ? ''
	              : $.trim(value + '')
	            ;
	            return ruleFunction.call($field, value, ancillary);
	          }
	        },

	        setting: function(name, value) {
	          if( $.isPlainObject(name) ) {
	            $.extend(true, settings, name);
	          }
	          else if(value !== undefined) {
	            settings[name] = value;
	          }
	          else {
	            return settings[name];
	          }
	        },
	        internal: function(name, value) {
	          if( $.isPlainObject(name) ) {
	            $.extend(true, module, name);
	          }
	          else if(value !== undefined) {
	            module[name] = value;
	          }
	          else {
	            return module[name];
	          }
	        },
	        debug: function() {
	          if(!settings.silent && settings.debug) {
	            if(settings.performance) {
	              module.performance.log(arguments);
	            }
	            else {
	              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
	              module.debug.apply(console, arguments);
	            }
	          }
	        },
	        verbose: function() {
	          if(!settings.silent && settings.verbose && settings.debug) {
	            if(settings.performance) {
	              module.performance.log(arguments);
	            }
	            else {
	              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
	              module.verbose.apply(console, arguments);
	            }
	          }
	        },
	        error: function() {
	          if(!settings.silent) {
	            module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
	            module.error.apply(console, arguments);
	          }
	        },
	        performance: {
	          log: function(message) {
	            var
	              currentTime,
	              executionTime,
	              previousTime
	            ;
	            if(settings.performance) {
	              currentTime   = new Date().getTime();
	              previousTime  = time || currentTime;
	              executionTime = currentTime - previousTime;
	              time          = currentTime;
	              performance.push({
	                'Name'           : message[0],
	                'Arguments'      : [].slice.call(message, 1) || '',
	                'Element'        : element,
	                'Execution Time' : executionTime
	              });
	            }
	            clearTimeout(module.performance.timer);
	            module.performance.timer = setTimeout(module.performance.display, 500);
	          },
	          display: function() {
	            var
	              title = settings.name + ':',
	              totalTime = 0
	            ;
	            time = false;
	            clearTimeout(module.performance.timer);
	            $.each(performance, function(index, data) {
	              totalTime += data['Execution Time'];
	            });
	            title += ' ' + totalTime + 'ms';
	            if(moduleSelector) {
	              title += ' \'' + moduleSelector + '\'';
	            }
	            if($allModules.length > 1) {
	              title += ' ' + '(' + $allModules.length + ')';
	            }
	            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
	              console.groupCollapsed(title);
	              if(console.table) {
	                console.table(performance);
	              }
	              else {
	                $.each(performance, function(index, data) {
	                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
	                });
	              }
	              console.groupEnd();
	            }
	            performance = [];
	          }
	        },
	        invoke: function(query, passedArguments, context) {
	          var
	            object = instance,
	            maxDepth,
	            found,
	            response
	          ;
	          passedArguments = passedArguments || queryArguments;
	          context         = element         || context;
	          if(typeof query == 'string' && object !== undefined) {
	            query    = query.split(/[\. ]/);
	            maxDepth = query.length - 1;
	            $.each(query, function(depth, value) {
	              var camelCaseValue = (depth != maxDepth)
	                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
	                : query
	              ;
	              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
	                object = object[camelCaseValue];
	              }
	              else if( object[camelCaseValue] !== undefined ) {
	                found = object[camelCaseValue];
	                return false;
	              }
	              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
	                object = object[value];
	              }
	              else if( object[value] !== undefined ) {
	                found = object[value];
	                return false;
	              }
	              else {
	                return false;
	              }
	            });
	          }
	          if( $.isFunction( found ) ) {
	            response = found.apply(context, passedArguments);
	          }
	          else if(found !== undefined) {
	            response = found;
	          }
	          if($.isArray(returnedValue)) {
	            returnedValue.push(response);
	          }
	          else if(returnedValue !== undefined) {
	            returnedValue = [returnedValue, response];
	          }
	          else if(response !== undefined) {
	            returnedValue = response;
	          }
	          return found;
	        }
	      };
	      module.initialize();
	    })
	  ;

	  return (returnedValue !== undefined)
	    ? returnedValue
	    : this
	  ;
	};

	$.fn.form.settings = {

	  name              : 'Form',
	  namespace         : 'form',

	  debug             : false,
	  verbose           : false,
	  performance       : true,

	  fields            : false,

	  keyboardShortcuts : true,
	  on                : 'submit',
	  inline            : false,

	  delay             : 200,
	  revalidate        : true,

	  transition        : 'scale',
	  duration          : 200,

	  onValid           : function() {},
	  onInvalid         : function() {},
	  onSuccess         : function() { return true; },
	  onFailure         : function() { return false; },

	  metadata : {
	    defaultValue : 'default',
	    validate     : 'validate'
	  },

	  regExp: {
	    bracket : /\[(.*)\]/i,
	    decimal : /^\d*(\.)\d+/,
	    email   : /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,
	    escape  : /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
	    flags   : /^\/(.*)\/(.*)?/,
	    integer : /^\-?\d+$/,
	    number  : /^\-?\d*(\.\d+)?$/,
	    url     : /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/i
	  },

	  text: {
	    unspecifiedRule  : 'Please enter a valid value',
	    unspecifiedField : 'This field'
	  },

	  prompt: {
	    empty                : '{name} must have a value',
	    checked              : '{name} must be checked',
	    email                : '{name} must be a valid e-mail',
	    url                  : '{name} must be a valid url',
	    regExp               : '{name} is not formatted correctly',
	    integer              : '{name} must be an integer',
	    decimal              : '{name} must be a decimal number',
	    number               : '{name} must be set to a number',
	    is                   : '{name} must be "{ruleValue}"',
	    isExactly            : '{name} must be exactly "{ruleValue}"',
	    not                  : '{name} cannot be set to "{ruleValue}"',
	    notExactly           : '{name} cannot be set to exactly "{ruleValue}"',
	    contain              : '{name} cannot contain "{ruleValue}"',
	    containExactly       : '{name} cannot contain exactly "{ruleValue}"',
	    doesntContain        : '{name} must contain  "{ruleValue}"',
	    doesntContainExactly : '{name} must contain exactly "{ruleValue}"',
	    minLength            : '{name} must be at least {ruleValue} characters',
	    length               : '{name} must be at least {ruleValue} characters',
	    exactLength          : '{name} must be exactly {ruleValue} characters',
	    maxLength            : '{name} cannot be longer than {ruleValue} characters',
	    match                : '{name} must match {ruleValue} field',
	    different            : '{name} must have a different value than {ruleValue} field',
	    creditCard           : '{name} must be a valid credit card number',
	    minCount             : '{name} must have at least {ruleValue} choices',
	    exactCount           : '{name} must have exactly {ruleValue} choices',
	    maxCount             : '{name} must have {ruleValue} or less choices'
	  },

	  selector : {
	    checkbox   : 'input[type="checkbox"], input[type="radio"]',
	    clear      : '.clear',
	    field      : 'input, textarea, select',
	    group      : '.field',
	    input      : 'input',
	    message    : '.error.message',
	    prompt     : '.prompt.label',
	    radio      : 'input[type="radio"]',
	    reset      : '.reset:not([type="reset"])',
	    submit     : '.submit:not([type="submit"])',
	    uiCheckbox : '.ui.checkbox',
	    uiDropdown : '.ui.dropdown'
	  },

	  className : {
	    error   : 'error',
	    label   : 'ui prompt label',
	    pressed : 'down',
	    success : 'success'
	  },

	  error: {
	    identifier : 'You must specify a string identifier for each field',
	    method     : 'The method you called is not defined.',
	    noRule     : 'There is no rule matching the one you specified',
	    oldSyntax  : 'Starting in 2.0 forms now only take a single settings object. Validation settings converted to new syntax automatically.'
	  },

	  templates: {

	    // template that produces error message
	    error: function(errors) {
	      var
	        html = '<ul class="list">'
	      ;
	      $.each(errors, function(index, value) {
	        html += '<li>' + value + '</li>';
	      });
	      html += '</ul>';
	      return $(html);
	    },

	    // template that produces label
	    prompt: function(errors) {
	      return $('<div/>')
	        .addClass('ui basic red pointing prompt label')
	        .html(errors[0])
	      ;
	    }
	  },

	  rules: {

	    // is not empty or blank string
	    empty: function(value) {
	      return !(value === undefined || '' === value || $.isArray(value) && value.length === 0);
	    },

	    // checkbox checked
	    checked: function() {
	      return ($(this).filter(':checked').length > 0);
	    },

	    // is most likely an email
	    email: function(value){
	      return $.fn.form.settings.regExp.email.test(value);
	    },

	    // value is most likely url
	    url: function(value) {
	      return $.fn.form.settings.regExp.url.test(value);
	    },

	    // matches specified regExp
	    regExp: function(value, regExp) {
	      var
	        regExpParts = regExp.match($.fn.form.settings.regExp.flags),
	        flags
	      ;
	      // regular expression specified as /baz/gi (flags)
	      if(regExpParts) {
	        regExp = (regExpParts.length >= 2)
	          ? regExpParts[1]
	          : regExp
	        ;
	        flags = (regExpParts.length >= 3)
	          ? regExpParts[2]
	          : ''
	        ;
	      }
	      return value.match( new RegExp(regExp, flags) );
	    },

	    // is valid integer or matches range
	    integer: function(value, range) {
	      var
	        intRegExp = $.fn.form.settings.regExp.integer,
	        min,
	        max,
	        parts
	      ;
	      if( !range || ['', '..'].indexOf(range) !== -1) {
	        // do nothing
	      }
	      else if(range.indexOf('..') == -1) {
	        if(intRegExp.test(range)) {
	          min = max = range - 0;
	        }
	      }
	      else {
	        parts = range.split('..', 2);
	        if(intRegExp.test(parts[0])) {
	          min = parts[0] - 0;
	        }
	        if(intRegExp.test(parts[1])) {
	          max = parts[1] - 0;
	        }
	      }
	      return (
	        intRegExp.test(value) &&
	        (min === undefined || value >= min) &&
	        (max === undefined || value <= max)
	      );
	    },

	    // is valid number (with decimal)
	    decimal: function(value) {
	      return $.fn.form.settings.regExp.decimal.test(value);
	    },

	    // is valid number
	    number: function(value) {
	      return $.fn.form.settings.regExp.number.test(value);
	    },

	    // is value (case insensitive)
	    is: function(value, text) {
	      text = (typeof text == 'string')
	        ? text.toLowerCase()
	        : text
	      ;
	      value = (typeof value == 'string')
	        ? value.toLowerCase()
	        : value
	      ;
	      return (value == text);
	    },

	    // is value
	    isExactly: function(value, text) {
	      return (value == text);
	    },

	    // value is not another value (case insensitive)
	    not: function(value, notValue) {
	      value = (typeof value == 'string')
	        ? value.toLowerCase()
	        : value
	      ;
	      notValue = (typeof notValue == 'string')
	        ? notValue.toLowerCase()
	        : notValue
	      ;
	      return (value != notValue);
	    },

	    // value is not another value (case sensitive)
	    notExactly: function(value, notValue) {
	      return (value != notValue);
	    },

	    // value contains text (insensitive)
	    contains: function(value, text) {
	      // escape regex characters
	      text = text.replace($.fn.form.settings.regExp.escape, "\\$&");
	      return (value.search( new RegExp(text, 'i') ) !== -1);
	    },

	    // value contains text (case sensitive)
	    containsExactly: function(value, text) {
	      // escape regex characters
	      text = text.replace($.fn.form.settings.regExp.escape, "\\$&");
	      return (value.search( new RegExp(text) ) !== -1);
	    },

	    // value contains text (insensitive)
	    doesntContain: function(value, text) {
	      // escape regex characters
	      text = text.replace($.fn.form.settings.regExp.escape, "\\$&");
	      return (value.search( new RegExp(text, 'i') ) === -1);
	    },

	    // value contains text (case sensitive)
	    doesntContainExactly: function(value, text) {
	      // escape regex characters
	      text = text.replace($.fn.form.settings.regExp.escape, "\\$&");
	      return (value.search( new RegExp(text) ) === -1);
	    },

	    // is at least string length
	    minLength: function(value, requiredLength) {
	      return (value !== undefined)
	        ? (value.length >= requiredLength)
	        : false
	      ;
	    },

	    // see rls notes for 2.0.6 (this is a duplicate of minLength)
	    length: function(value, requiredLength) {
	      return (value !== undefined)
	        ? (value.length >= requiredLength)
	        : false
	      ;
	    },

	    // is exactly length
	    exactLength: function(value, requiredLength) {
	      return (value !== undefined)
	        ? (value.length == requiredLength)
	        : false
	      ;
	    },

	    // is less than length
	    maxLength: function(value, maxLength) {
	      return (value !== undefined)
	        ? (value.length <= maxLength)
	        : false
	      ;
	    },

	    // matches another field
	    match: function(value, identifier) {
	      var
	        $form = $(this),
	        matchingValue
	      ;
	      if( $('[data-validate="'+ identifier +'"]').length > 0 ) {
	        matchingValue = $('[data-validate="'+ identifier +'"]').val();
	      }
	      else if($('#' + identifier).length > 0) {
	        matchingValue = $('#' + identifier).val();
	      }
	      else if($('[name="' + identifier +'"]').length > 0) {
	        matchingValue = $('[name="' + identifier + '"]').val();
	      }
	      else if( $('[name="' + identifier +'[]"]').length > 0 ) {
	        matchingValue = $('[name="' + identifier +'[]"]');
	      }
	      return (matchingValue !== undefined)
	        ? ( value.toString() == matchingValue.toString() )
	        : false
	      ;
	    },

	    // different than another field
	    different: function(value, identifier) {
	      // use either id or name of field
	      var
	        $form = $(this),
	        matchingValue
	      ;
	      if( $('[data-validate="'+ identifier +'"]').length > 0 ) {
	        matchingValue = $('[data-validate="'+ identifier +'"]').val();
	      }
	      else if($('#' + identifier).length > 0) {
	        matchingValue = $('#' + identifier).val();
	      }
	      else if($('[name="' + identifier +'"]').length > 0) {
	        matchingValue = $('[name="' + identifier + '"]').val();
	      }
	      else if( $('[name="' + identifier +'[]"]').length > 0 ) {
	        matchingValue = $('[name="' + identifier +'[]"]');
	      }
	      return (matchingValue !== undefined)
	        ? ( value.toString() !== matchingValue.toString() )
	        : false
	      ;
	    },

	    creditCard: function(cardNumber, cardTypes) {
	      var
	        cards = {
	          visa: {
	            pattern : /^4/,
	            length  : [16]
	          },
	          amex: {
	            pattern : /^3[47]/,
	            length  : [15]
	          },
	          mastercard: {
	            pattern : /^5[1-5]/,
	            length  : [16]
	          },
	          discover: {
	            pattern : /^(6011|622(12[6-9]|1[3-9][0-9]|[2-8][0-9]{2}|9[0-1][0-9]|92[0-5]|64[4-9])|65)/,
	            length  : [16]
	          },
	          unionPay: {
	            pattern : /^(62|88)/,
	            length  : [16, 17, 18, 19]
	          },
	          jcb: {
	            pattern : /^35(2[89]|[3-8][0-9])/,
	            length  : [16]
	          },
	          maestro: {
	            pattern : /^(5018|5020|5038|6304|6759|676[1-3])/,
	            length  : [12, 13, 14, 15, 16, 17, 18, 19]
	          },
	          dinersClub: {
	            pattern : /^(30[0-5]|^36)/,
	            length  : [14]
	          },
	          laser: {
	            pattern : /^(6304|670[69]|6771)/,
	            length  : [16, 17, 18, 19]
	          },
	          visaElectron: {
	            pattern : /^(4026|417500|4508|4844|491(3|7))/,
	            length  : [16]
	          }
	        },
	        valid         = {},
	        validCard     = false,
	        requiredTypes = (typeof cardTypes == 'string')
	          ? cardTypes.split(',')
	          : false,
	        unionPay,
	        validation
	      ;

	      if(typeof cardNumber !== 'string' || cardNumber.length === 0) {
	        return;
	      }

	      // verify card types
	      if(requiredTypes) {
	        $.each(requiredTypes, function(index, type){
	          // verify each card type
	          validation = cards[type];
	          if(validation) {
	            valid = {
	              length  : ($.inArray(cardNumber.length, validation.length) !== -1),
	              pattern : (cardNumber.search(validation.pattern) !== -1)
	            };
	            if(valid.length && valid.pattern) {
	              validCard = true;
	            }
	          }
	        });

	        if(!validCard) {
	          return false;
	        }
	      }

	      // skip luhn for UnionPay
	      unionPay = {
	        number  : ($.inArray(cardNumber.length, cards.unionPay.length) !== -1),
	        pattern : (cardNumber.search(cards.unionPay.pattern) !== -1)
	      };
	      if(unionPay.number && unionPay.pattern) {
	        return true;
	      }

	      // verify luhn, adapted from  <https://gist.github.com/2134376>
	      var
	        length        = cardNumber.length,
	        multiple      = 0,
	        producedValue = [
	          [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
	          [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
	        ],
	        sum           = 0
	      ;
	      while (length--) {
	        sum += producedValue[multiple][parseInt(cardNumber.charAt(length), 10)];
	        multiple ^= 1;
	      }
	      return (sum % 10 === 0 && sum > 0);
	    },

	    minCount: function(value, minCount) {
	      if(minCount == 0) {
	        return true;
	      }
	      if(minCount == 1) {
	        return (value !== '');
	      }
	      return (value.split(',').length >= minCount);
	    },

	    exactCount: function(value, exactCount) {
	      if(exactCount == 0) {
	        return (value === '');
	      }
	      if(exactCount == 1) {
	        return (value !== '' && value.search(',') === -1);
	      }
	      return (value.split(',').length == exactCount);
	    },

	    maxCount: function(value, maxCount) {
	      if(maxCount == 0) {
	        return false;
	      }
	      if(maxCount == 1) {
	        return (value.search(',') === -1);
	      }
	      return (value.split(',').length <= maxCount);
	    }
	  }

	};

	})( jQuery, window, document );


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*!
	 * # Semantic UI 2.2.2 - Dropdown
	 * http://github.com/semantic-org/semantic-ui/
	 *
	 *
	 * Released under the MIT license
	 * http://opensource.org/licenses/MIT
	 *
	 */

	;(function ($, window, document, undefined) {

	"use strict";

	window = (typeof window != 'undefined' && window.Math == Math)
	  ? window
	  : (typeof self != 'undefined' && self.Math == Math)
	    ? self
	    : Function('return this')()
	;

	$.fn.dropdown = function(parameters) {
	  var
	    $allModules    = $(this),
	    $document      = $(document),

	    moduleSelector = $allModules.selector || '',

	    hasTouch       = ('ontouchstart' in document.documentElement),
	    time           = new Date().getTime(),
	    performance    = [],

	    query          = arguments[0],
	    methodInvoked  = (typeof query == 'string'),
	    queryArguments = [].slice.call(arguments, 1),
	    returnedValue
	  ;

	  $allModules
	    .each(function(elementIndex) {
	      var
	        settings          = ( $.isPlainObject(parameters) )
	          ? $.extend(true, {}, $.fn.dropdown.settings, parameters)
	          : $.extend({}, $.fn.dropdown.settings),

	        className       = settings.className,
	        message         = settings.message,
	        fields          = settings.fields,
	        keys            = settings.keys,
	        metadata        = settings.metadata,
	        namespace       = settings.namespace,
	        regExp          = settings.regExp,
	        selector        = settings.selector,
	        error           = settings.error,
	        templates       = settings.templates,

	        eventNamespace  = '.' + namespace,
	        moduleNamespace = 'module-' + namespace,

	        $module         = $(this),
	        $context        = $(settings.context),
	        $text           = $module.find(selector.text),
	        $search         = $module.find(selector.search),
	        $sizer          = $module.find(selector.sizer),
	        $input          = $module.find(selector.input),
	        $icon           = $module.find(selector.icon),

	        $combo = ($module.prev().find(selector.text).length > 0)
	          ? $module.prev().find(selector.text)
	          : $module.prev(),

	        $menu           = $module.children(selector.menu),
	        $item           = $menu.find(selector.item),

	        activated       = false,
	        itemActivated   = false,
	        internalChange  = false,
	        element         = this,
	        instance        = $module.data(moduleNamespace),

	        initialLoad,
	        pageLostFocus,
	        willRefocus,
	        elementNamespace,
	        id,
	        selectObserver,
	        menuObserver,
	        module
	      ;

	      module = {

	        initialize: function() {
	          module.debug('Initializing dropdown', settings);

	          if( module.is.alreadySetup() ) {
	            module.setup.reference();
	          }
	          else {
	            module.setup.layout();
	            module.refreshData();

	            module.save.defaults();
	            module.restore.selected();

	            module.create.id();
	            module.bind.events();

	            module.observeChanges();
	            module.instantiate();
	          }

	        },

	        instantiate: function() {
	          module.verbose('Storing instance of dropdown', module);
	          instance = module;
	          $module
	            .data(moduleNamespace, module)
	          ;
	        },

	        destroy: function() {
	          module.verbose('Destroying previous dropdown', $module);
	          module.remove.tabbable();
	          $module
	            .off(eventNamespace)
	            .removeData(moduleNamespace)
	          ;
	          $menu
	            .off(eventNamespace)
	          ;
	          $document
	            .off(elementNamespace)
	          ;
	          module.disconnect.menuObserver();
	          module.disconnect.selectObserver();
	        },

	        observeChanges: function() {
	          if('MutationObserver' in window) {
	            selectObserver = new MutationObserver(module.event.select.mutation);
	            menuObserver   = new MutationObserver(module.event.menu.mutation);
	            module.debug('Setting up mutation observer', selectObserver, menuObserver);
	            module.observe.select();
	            module.observe.menu();
	          }
	        },

	        disconnect: {
	          menuObserver: function() {
	            if(menuObserver) {
	              menuObserver.disconnect();
	            }
	          },
	          selectObserver: function() {
	            if(menuObserver) {
	              menuObserver.disconnect();
	            }
	          }
	        },
	        observe: {
	          select: function() {
	            if(module.has.input()) {
	              selectObserver.observe($input[0], {
	                childList : true,
	                subtree   : true
	              });
	            }
	          },
	          menu: function() {
	            if(module.has.menu()) {
	              menuObserver.observe($menu[0], {
	                childList : true,
	                subtree   : true
	              });
	            }
	          }
	        },

	        create: {
	          id: function() {
	            id = (Math.random().toString(16) + '000000000').substr(2, 8);
	            elementNamespace = '.' + id;
	            module.verbose('Creating unique id for element', id);
	          },
	          userChoice: function(values) {
	            var
	              $userChoices,
	              $userChoice,
	              isUserValue,
	              html
	            ;
	            values = values || module.get.userValues();
	            if(!values) {
	              return false;
	            }
	            values = $.isArray(values)
	              ? values
	              : [values]
	            ;
	            $.each(values, function(index, value) {
	              if(module.get.item(value) === false) {
	                html         = settings.templates.addition( module.add.variables(message.addResult, value) );
	                $userChoice  = $('<div />')
	                  .html(html)
	                  .attr('data-' + metadata.value, value)
	                  .attr('data-' + metadata.text, value)
	                  .addClass(className.addition)
	                  .addClass(className.item)
	                ;
	                if(settings.hideAdditions) {
	                  $userChoice.addClass(className.hidden);
	                }
	                $userChoices = ($userChoices === undefined)
	                  ? $userChoice
	                  : $userChoices.add($userChoice)
	                ;
	                module.verbose('Creating user choices for value', value, $userChoice);
	              }
	            });
	            return $userChoices;
	          },
	          userLabels: function(value) {
	            var
	              userValues = module.get.userValues()
	            ;
	            if(userValues) {
	              module.debug('Adding user labels', userValues);
	              $.each(userValues, function(index, value) {
	                module.verbose('Adding custom user value');
	                module.add.label(value, value);
	              });
	            }
	          },
	          menu: function() {
	            $menu = $('<div />')
	              .addClass(className.menu)
	              .appendTo($module)
	            ;
	          },
	          sizer: function() {
	            $sizer = $('<span />')
	              .addClass(className.sizer)
	              .insertAfter($search)
	            ;
	          }
	        },

	        search: function(query) {
	          query = (query !== undefined)
	            ? query
	            : module.get.query()
	          ;
	          module.verbose('Searching for query', query);
	          if(module.has.minCharacters(query)) {
	            module.filter(query);
	          }
	          else {
	            module.hide();
	          }
	        },

	        select: {
	          firstUnfiltered: function() {
	            module.verbose('Selecting first non-filtered element');
	            module.remove.selectedItem();
	            $item
	              .not(selector.unselectable)
	              .not(selector.addition + selector.hidden)
	                .eq(0)
	                .addClass(className.selected)
	            ;
	          },
	          nextAvailable: function($selected) {
	            $selected = $selected.eq(0);
	            var
	              $nextAvailable = $selected.nextAll(selector.item).not(selector.unselectable).eq(0),
	              $prevAvailable = $selected.prevAll(selector.item).not(selector.unselectable).eq(0),
	              hasNext        = ($nextAvailable.length > 0)
	            ;
	            if(hasNext) {
	              module.verbose('Moving selection to', $nextAvailable);
	              $nextAvailable.addClass(className.selected);
	            }
	            else {
	              module.verbose('Moving selection to', $prevAvailable);
	              $prevAvailable.addClass(className.selected);
	            }
	          }
	        },

	        setup: {
	          api: function() {
	            var
	              apiSettings = {
	                debug   : settings.debug,
	                urlData : {
	                  value : module.get.value(),
	                  query : module.get.query()
	                },
	                on    : false
	              }
	            ;
	            module.verbose('First request, initializing API');
	            $module
	              .api(apiSettings)
	            ;
	          },
	          layout: function() {
	            if( $module.is('select') ) {
	              module.setup.select();
	              module.setup.returnedObject();
	            }
	            if( !module.has.menu() ) {
	              module.create.menu();
	            }
	            if( module.is.search() && !module.has.search() ) {
	              module.verbose('Adding search input');
	              $search = $('<input />')
	                .addClass(className.search)
	                .prop('autocomplete', 'off')
	                .insertBefore($text)
	              ;
	            }
	            if( module.is.multiple() && module.is.searchSelection() && !module.has.sizer()) {
	              module.create.sizer();
	            }
	            if(settings.allowTab) {
	              module.set.tabbable();
	            }
	          },
	          select: function() {
	            var
	              selectValues  = module.get.selectValues()
	            ;
	            module.debug('Dropdown initialized on a select', selectValues);
	            if( $module.is('select') ) {
	              $input = $module;
	            }
	            // see if select is placed correctly already
	            if($input.parent(selector.dropdown).length > 0) {
	              module.debug('UI dropdown already exists. Creating dropdown menu only');
	              $module = $input.closest(selector.dropdown);
	              if( !module.has.menu() ) {
	                module.create.menu();
	              }
	              $menu = $module.children(selector.menu);
	              module.setup.menu(selectValues);
	            }
	            else {
	              module.debug('Creating entire dropdown from select');
	              $module = $('<div />')
	                .attr('class', $input.attr('class') )
	                .addClass(className.selection)
	                .addClass(className.dropdown)
	                .html( templates.dropdown(selectValues) )
	                .insertBefore($input)
	              ;
	              if($input.hasClass(className.multiple) && $input.prop('multiple') === false) {
	                module.error(error.missingMultiple);
	                $input.prop('multiple', true);
	              }
	              if($input.is('[multiple]')) {
	                module.set.multiple();
	              }
	              if ($input.prop('disabled')) {
	                module.debug('Disabling dropdown');
	                $module.addClass(className.disabled);
	              }
	              $input
	                .removeAttr('class')
	                .detach()
	                .prependTo($module)
	              ;
	            }
	            module.refresh();
	          },
	          menu: function(values) {
	            $menu.html( templates.menu(values, fields));
	            $item = $menu.find(selector.item);
	          },
	          reference: function() {
	            module.debug('Dropdown behavior was called on select, replacing with closest dropdown');
	            // replace module reference
	            $module = $module.parent(selector.dropdown);
	            module.refresh();
	            module.setup.returnedObject();
	            // invoke method in context of current instance
	            if(methodInvoked) {
	              instance = module;
	              module.invoke(query);
	            }
	          },
	          returnedObject: function() {
	            var
	              $firstModules = $allModules.slice(0, elementIndex),
	              $lastModules = $allModules.slice(elementIndex + 1)
	            ;
	            // adjust all modules to use correct reference
	            $allModules = $firstModules.add($module).add($lastModules);
	          }
	        },

	        refresh: function() {
	          module.refreshSelectors();
	          module.refreshData();
	        },

	        refreshItems: function() {
	          $item = $menu.find(selector.item);
	        },

	        refreshSelectors: function() {
	          module.verbose('Refreshing selector cache');
	          $text   = $module.find(selector.text);
	          $search = $module.find(selector.search);
	          $input  = $module.find(selector.input);
	          $icon   = $module.find(selector.icon);
	          $combo  = ($module.prev().find(selector.text).length > 0)
	            ? $module.prev().find(selector.text)
	            : $module.prev()
	          ;
	          $menu    = $module.children(selector.menu);
	          $item    = $menu.find(selector.item);
	        },

	        refreshData: function() {
	          module.verbose('Refreshing cached metadata');
	          $item
	            .removeData(metadata.text)
	            .removeData(metadata.value)
	          ;
	        },

	        clearData: function() {
	          module.verbose('Clearing metadata');
	          $item
	            .removeData(metadata.text)
	            .removeData(metadata.value)
	          ;
	          $module
	            .removeData(metadata.defaultText)
	            .removeData(metadata.defaultValue)
	            .removeData(metadata.placeholderText)
	          ;
	        },

	        toggle: function() {
	          module.verbose('Toggling menu visibility');
	          if( !module.is.active() ) {
	            module.show();
	          }
	          else {
	            module.hide();
	          }
	        },

	        show: function(callback) {
	          callback = $.isFunction(callback)
	            ? callback
	            : function(){}
	          ;
	          if( module.can.show() && !module.is.active() ) {
	            module.debug('Showing dropdown');
	            if(module.has.message() && !(module.has.maxSelections() || module.has.allResultsFiltered()) ) {
	              module.remove.message();
	            }
	            if(module.is.allFiltered()) {
	              return true;
	            }
	            if(settings.onShow.call(element) !== false) {
	              module.animate.show(function() {
	                if( module.can.click() ) {
	                  module.bind.intent();
	                }
	                if(module.has.menuSearch()) {
	                  module.focusSearch();
	                }
	                module.set.visible();
	                callback.call(element);
	              });
	            }
	          }
	        },

	        hide: function(callback) {
	          callback = $.isFunction(callback)
	            ? callback
	            : function(){}
	          ;
	          if( module.is.active() ) {
	            module.debug('Hiding dropdown');
	            if(settings.onHide.call(element) !== false) {
	              module.animate.hide(function() {
	                module.remove.visible();
	                callback.call(element);
	              });
	            }
	          }
	        },

	        hideOthers: function() {
	          module.verbose('Finding other dropdowns to hide');
	          $allModules
	            .not($module)
	              .has(selector.menu + '.' + className.visible)
	                .dropdown('hide')
	          ;
	        },

	        hideMenu: function() {
	          module.verbose('Hiding menu  instantaneously');
	          module.remove.active();
	          module.remove.visible();
	          $menu.transition('hide');
	        },

	        hideSubMenus: function() {
	          var
	            $subMenus = $menu.children(selector.item).find(selector.menu)
	          ;
	          module.verbose('Hiding sub menus', $subMenus);
	          $subMenus.transition('hide');
	        },

	        bind: {
	          events: function() {
	            if(hasTouch) {
	              module.bind.touchEvents();
	            }
	            module.bind.keyboardEvents();
	            module.bind.inputEvents();
	            module.bind.mouseEvents();
	          },
	          touchEvents: function() {
	            module.debug('Touch device detected binding additional touch events');
	            if( module.is.searchSelection() ) {
	              // do nothing special yet
	            }
	            else if( module.is.single() ) {
	              $module
	                .on('touchstart' + eventNamespace, module.event.test.toggle)
	              ;
	            }
	            $menu
	              .on('touchstart' + eventNamespace, selector.item, module.event.item.mouseenter)
	            ;
	          },
	          keyboardEvents: function() {
	            module.verbose('Binding keyboard events');
	            $module
	              .on('keydown' + eventNamespace, module.event.keydown)
	            ;
	            if( module.has.search() ) {
	              $module
	                .on(module.get.inputEvent() + eventNamespace, selector.search, module.event.input)
	              ;
	            }
	            if( module.is.multiple() ) {
	              $document
	                .on('keydown' + elementNamespace, module.event.document.keydown)
	              ;
	            }
	          },
	          inputEvents: function() {
	            module.verbose('Binding input change events');
	            $module
	              .on('change' + eventNamespace, selector.input, module.event.change)
	            ;
	          },
	          mouseEvents: function() {
	            module.verbose('Binding mouse events');
	            if(module.is.multiple()) {
	              $module
	                .on('click'   + eventNamespace, selector.label,  module.event.label.click)
	                .on('click'   + eventNamespace, selector.remove, module.event.remove.click)
	              ;
	            }
	            if( module.is.searchSelection() ) {
	              $module
	                .on('mousedown' + eventNamespace, module.event.mousedown)
	                .on('mouseup'   + eventNamespace, module.event.mouseup)
	                .on('mousedown' + eventNamespace, selector.menu,   module.event.menu.mousedown)
	                .on('mouseup'   + eventNamespace, selector.menu,   module.event.menu.mouseup)
	                .on('click'     + eventNamespace, selector.icon,   module.event.icon.click)
	                .on('focus'     + eventNamespace, selector.search, module.event.search.focus)
	                .on('click'     + eventNamespace, selector.search, module.event.search.focus)
	                .on('blur'      + eventNamespace, selector.search, module.event.search.blur)
	                .on('click'     + eventNamespace, selector.text,   module.event.text.focus)
	              ;
	              if(module.is.multiple()) {
	                $module
	                  .on('click' + eventNamespace, module.event.click)
	                ;
	              }
	            }
	            else {
	              if(settings.on == 'click') {
	                $module
	                  .on('click' + eventNamespace, selector.icon, module.event.icon.click)
	                  .on('click' + eventNamespace, module.event.test.toggle)
	                ;
	              }
	              else if(settings.on == 'hover') {
	                $module
	                  .on('mouseenter' + eventNamespace, module.delay.show)
	                  .on('mouseleave' + eventNamespace, module.delay.hide)
	                ;
	              }
	              else {
	                $module
	                  .on(settings.on + eventNamespace, module.toggle)
	                ;
	              }
	              $module
	                .on('mousedown' + eventNamespace, module.event.mousedown)
	                .on('mouseup'   + eventNamespace, module.event.mouseup)
	                .on('focus'     + eventNamespace, module.event.focus)
	                .on('blur'      + eventNamespace, module.event.blur)
	              ;
	            }
	            $menu
	              .on('mouseenter' + eventNamespace, selector.item, module.event.item.mouseenter)
	              .on('mouseleave' + eventNamespace, selector.item, module.event.item.mouseleave)
	              .on('click'      + eventNamespace, selector.item, module.event.item.click)
	            ;
	          },
	          intent: function() {
	            module.verbose('Binding hide intent event to document');
	            if(hasTouch) {
	              $document
	                .on('touchstart' + elementNamespace, module.event.test.touch)
	                .on('touchmove'  + elementNamespace, module.event.test.touch)
	              ;
	            }
	            $document
	              .on('click' + elementNamespace, module.event.test.hide)
	            ;
	          }
	        },

	        unbind: {
	          intent: function() {
	            module.verbose('Removing hide intent event from document');
	            if(hasTouch) {
	              $document
	                .off('touchstart' + elementNamespace)
	                .off('touchmove' + elementNamespace)
	              ;
	            }
	            $document
	              .off('click' + elementNamespace)
	            ;
	          }
	        },

	        filter: function(query) {
	          var
	            searchTerm = (query !== undefined)
	              ? query
	              : module.get.query(),
	            afterFiltered = function() {
	              if(module.is.multiple()) {
	                module.filterActive();
	              }
	              module.select.firstUnfiltered();
	              if( module.has.allResultsFiltered() ) {
	                if( settings.onNoResults.call(element, searchTerm) ) {
	                  if(settings.allowAdditions) {
	                    if(settings.hideAdditions) {
	                      module.verbose('User addition with no menu, setting empty style');
	                      module.set.empty();
	                      module.hideMenu();
	                    }
	                  }
	                  else {
	                    module.verbose('All items filtered, showing message', searchTerm);
	                    module.add.message(message.noResults);
	                  }
	                }
	                else {
	                  module.verbose('All items filtered, hiding dropdown', searchTerm);
	                  module.hideMenu();
	                }
	              }
	              else {
	                module.remove.empty();
	                module.remove.message();
	              }
	              if(settings.allowAdditions) {
	                module.add.userSuggestion(query);
	              }
	              if(module.is.searchSelection() && module.can.show() && module.is.focusedOnSearch() ) {
	                module.show();
	              }
	            }
	          ;
	          if(settings.useLabels && module.has.maxSelections()) {
	            return;
	          }
	          if(settings.apiSettings) {
	            if( module.can.useAPI() ) {
	              module.queryRemote(searchTerm, function() {
	                afterFiltered();
	              });
	            }
	            else {
	              module.error(error.noAPI);
	            }
	          }
	          else {
	            module.filterItems(searchTerm);
	            afterFiltered();
	          }
	        },

	        queryRemote: function(query, callback) {
	          var
	            apiSettings = {
	              errorDuration : false,
	              cache         : 'local',
	              throttle      : settings.throttle,
	              urlData       : {
	                query: query
	              },
	              onError: function() {
	                module.add.message(message.serverError);
	                callback();
	              },
	              onFailure: function() {
	                module.add.message(message.serverError);
	                callback();
	              },
	              onSuccess : function(response) {
	                module.remove.message();
	                module.setup.menu({
	                  values: response[fields.remoteValues]
	                });
	                callback();
	              }
	            }
	          ;
	          if( !$module.api('get request') ) {
	            module.setup.api();
	          }
	          apiSettings = $.extend(true, {}, apiSettings, settings.apiSettings);
	          $module
	            .api('setting', apiSettings)
	            .api('query')
	          ;
	        },

	        filterItems: function(query) {
	          var
	            searchTerm = (query !== undefined)
	              ? query
	              : module.get.query(),
	            results          =  null,
	            escapedTerm      = module.escape.regExp(searchTerm),
	            beginsWithRegExp = new RegExp('^' + escapedTerm, 'igm')
	          ;
	          // avoid loop if we're matching nothing
	          if( module.has.query() ) {
	            results = [];

	            module.verbose('Searching for matching values', searchTerm);
	            $item
	              .each(function(){
	                var
	                  $choice = $(this),
	                  text,
	                  value
	                ;
	                if(settings.match == 'both' || settings.match == 'text') {
	                  text = String(module.get.choiceText($choice, false));
	                  if(text.search(beginsWithRegExp) !== -1) {
	                    results.push(this);
	                    return true;
	                  }
	                  else if (settings.fullTextSearch === 'exact' && module.exactSearch(searchTerm, text)) {
	                    results.push(this);
	                    return true;
	                  }
	                  else if (settings.fullTextSearch === true && module.fuzzySearch(searchTerm, text)) {
	                    results.push(this);
	                    return true;
	                  }
	                }
	                if(settings.match == 'both' || settings.match == 'value') {
	                  value = String(module.get.choiceValue($choice, text));

	                  if(value.search(beginsWithRegExp) !== -1) {
	                    results.push(this);
	                    return true;
	                  }
	                  else if(settings.fullTextSearch && module.fuzzySearch(searchTerm, value)) {
	                    results.push(this);
	                    return true;
	                  }
	                }
	              })
	            ;
	          }
	          module.debug('Showing only matched items', searchTerm);
	          module.remove.filteredItem();
	          if(results) {
	            $item
	              .not(results)
	              .addClass(className.filtered)
	            ;
	          }
	        },

	        fuzzySearch: function(query, term) {
	          var
	            termLength  = term.length,
	            queryLength = query.length
	          ;
	          query = query.toLowerCase();
	          term  = term.toLowerCase();
	          if(queryLength > termLength) {
	            return false;
	          }
	          if(queryLength === termLength) {
	            return (query === term);
	          }
	          search: for (var characterIndex = 0, nextCharacterIndex = 0; characterIndex < queryLength; characterIndex++) {
	            var
	              queryCharacter = query.charCodeAt(characterIndex)
	            ;
	            while(nextCharacterIndex < termLength) {
	              if(term.charCodeAt(nextCharacterIndex++) === queryCharacter) {
	                continue search;
	              }
	            }
	            return false;
	          }
	          return true;
	        },
	        exactSearch: function (query, term) {
	          query = query.toLowerCase();
	          term  = term.toLowerCase();
	          if(term.indexOf(query) > -1) {
	             return true;
	          }
	          return false;
	        },
	        filterActive: function() {
	          if(settings.useLabels) {
	            $item.filter('.' + className.active)
	              .addClass(className.filtered)
	            ;
	          }
	        },

	        focusSearch: function(skipHandler) {
	          if( module.has.search() && !module.is.focusedOnSearch() ) {
	            if(skipHandler) {
	              $module.off('focus' + eventNamespace, selector.search);
	              $search.focus();
	              $module.on('focus'  + eventNamespace, selector.search, module.event.search.focus);
	            }
	            else {
	              $search.focus();
	            }
	          }
	        },

	        forceSelection: function() {
	          var
	            $currentlySelected = $item.not(className.filtered).filter('.' + className.selected).eq(0),
	            $activeItem        = $item.not(className.filtered).filter('.' + className.active).eq(0),
	            $selectedItem      = ($currentlySelected.length > 0)
	              ? $currentlySelected
	              : $activeItem,
	            hasSelected = ($selectedItem.length > 0)
	          ;
	          if(hasSelected) {
	            module.debug('Forcing partial selection to selected item', $selectedItem);
	            module.event.item.click.call($selectedItem, {}, true);
	            return;
	          }
	          else {
	            if(settings.allowAdditions) {
	              module.set.selected(module.get.query());
	              module.remove.searchTerm();
	            }
	            else {
	              module.remove.searchTerm();
	            }
	          }
	        },

	        event: {
	          change: function() {
	            if(!internalChange) {
	              module.debug('Input changed, updating selection');
	              module.set.selected();
	            }
	          },
	          focus: function() {
	            if(settings.showOnFocus && !activated && module.is.hidden() && !pageLostFocus) {
	              module.show();
	            }
	          },
	          blur: function(event) {
	            pageLostFocus = (document.activeElement === this);
	            if(!activated && !pageLostFocus) {
	              module.remove.activeLabel();
	              module.hide();
	            }
	          },
	          mousedown: function() {
	            if(module.is.searchSelection()) {
	              // prevent menu hiding on immediate re-focus
	              willRefocus = true;
	            }
	            else {
	              // prevents focus callback from occurring on mousedown
	              activated = true;
	            }
	          },
	          mouseup: function() {
	            if(module.is.searchSelection()) {
	              // prevent menu hiding on immediate re-focus
	              willRefocus = false;
	            }
	            else {
	              activated = false;
	            }
	          },
	          click: function(event) {
	            var
	              $target = $(event.target)
	            ;
	            // focus search
	            if($target.is($module)) {
	              if(!module.is.focusedOnSearch()) {
	                module.focusSearch();
	              }
	              else {
	                module.show();
	              }
	            }
	          },
	          search: {
	            focus: function() {
	              activated = true;
	              if(module.is.multiple()) {
	                module.remove.activeLabel();
	              }
	              if(settings.showOnFocus) {
	                module.search();
	              }
	            },
	            blur: function(event) {
	              pageLostFocus = (document.activeElement === this);
	              if(!willRefocus) {
	                if(!itemActivated && !pageLostFocus) {
	                  if(settings.forceSelection && module.has.query()) {
	                    module.forceSelection();
	                  }
	                  module.hide();
	                }
	              }
	              willRefocus = false;
	            }
	          },
	          icon: {
	            click: function(event) {
	              module.toggle();
	              event.stopPropagation();
	            }
	          },
	          text: {
	            focus: function(event) {
	              activated = true;
	              module.focusSearch();
	            }
	          },
	          input: function(event) {
	            if(module.is.multiple() || module.is.searchSelection()) {
	              module.set.filtered();
	            }
	            clearTimeout(module.timer);
	            module.timer = setTimeout(module.search, settings.delay.search);
	          },
	          label: {
	            click: function(event) {
	              var
	                $label        = $(this),
	                $labels       = $module.find(selector.label),
	                $activeLabels = $labels.filter('.' + className.active),
	                $nextActive   = $label.nextAll('.' + className.active),
	                $prevActive   = $label.prevAll('.' + className.active),
	                $range = ($nextActive.length > 0)
	                  ? $label.nextUntil($nextActive).add($activeLabels).add($label)
	                  : $label.prevUntil($prevActive).add($activeLabels).add($label)
	              ;
	              if(event.shiftKey) {
	                $activeLabels.removeClass(className.active);
	                $range.addClass(className.active);
	              }
	              else if(event.ctrlKey) {
	                $label.toggleClass(className.active);
	              }
	              else {
	                $activeLabels.removeClass(className.active);
	                $label.addClass(className.active);
	              }
	              settings.onLabelSelect.apply(this, $labels.filter('.' + className.active));
	            }
	          },
	          remove: {
	            click: function() {
	              var
	                $label = $(this).parent()
	              ;
	              if( $label.hasClass(className.active) ) {
	                // remove all selected labels
	                module.remove.activeLabels();
	              }
	              else {
	                // remove this label only
	                module.remove.activeLabels( $label );
	              }
	            }
	          },
	          test: {
	            toggle: function(event) {
	              var
	                toggleBehavior = (module.is.multiple())
	                  ? module.show
	                  : module.toggle
	              ;
	              if(module.is.bubbledLabelClick(event)) {
	                return;
	              }
	              if( module.determine.eventOnElement(event, toggleBehavior) ) {
	                event.preventDefault();
	              }
	            },
	            touch: function(event) {
	              module.determine.eventOnElement(event, function() {
	                if(event.type == 'touchstart') {
	                  module.timer = setTimeout(function() {
	                    module.hide();
	                  }, settings.delay.touch);
	                }
	                else if(event.type == 'touchmove') {
	                  clearTimeout(module.timer);
	                }
	              });
	              event.stopPropagation();
	            },
	            hide: function(event) {
	              module.determine.eventInModule(event, module.hide);
	            }
	          },
	          select: {
	            mutation: function(mutations) {
	              module.debug('<select> modified, recreating menu');
	              module.setup.select();
	            }
	          },
	          menu: {
	            mutation: function(mutations) {
	              var
	                mutation   = mutations[0],
	                $addedNode = mutation.addedNodes
	                  ? $(mutation.addedNodes[0])
	                  : $(false),
	                $removedNode = mutation.removedNodes
	                  ? $(mutation.removedNodes[0])
	                  : $(false),
	                $changedNodes  = $addedNode.add($removedNode),
	                isUserAddition = $changedNodes.is(selector.addition) || $changedNodes.closest(selector.addition).length > 0,
	                isMessage      = $changedNodes.is(selector.message)  || $changedNodes.closest(selector.message).length > 0
	              ;
	              if(isUserAddition || isMessage) {
	                module.debug('Updating item selector cache');
	                module.refreshItems();
	              }
	              else {
	                module.debug('Menu modified, updating selector cache');
	                module.refresh();
	              }
	            },
	            mousedown: function() {
	              itemActivated = true;
	            },
	            mouseup: function() {
	              itemActivated = false;
	            }
	          },
	          item: {
	            mouseenter: function(event) {
	              var
	                $target        = $(event.target),
	                $item          = $(this),
	                $subMenu       = $item.children(selector.menu),
	                $otherMenus    = $item.siblings(selector.item).children(selector.menu),
	                hasSubMenu     = ($subMenu.length > 0),
	                isBubbledEvent = ($subMenu.find($target).length > 0)
	              ;
	              if( !isBubbledEvent && hasSubMenu ) {
	                clearTimeout(module.itemTimer);
	                module.itemTimer = setTimeout(function() {
	                  module.verbose('Showing sub-menu', $subMenu);
	                  $.each($otherMenus, function() {
	                    module.animate.hide(false, $(this));
	                  });
	                  module.animate.show(false, $subMenu);
	                }, settings.delay.show);
	                event.preventDefault();
	              }
	            },
	            mouseleave: function(event) {
	              var
	                $subMenu = $(this).children(selector.menu)
	              ;
	              if($subMenu.length > 0) {
	                clearTimeout(module.itemTimer);
	                module.itemTimer = setTimeout(function() {
	                  module.verbose('Hiding sub-menu', $subMenu);
	                  module.animate.hide(false, $subMenu);
	                }, settings.delay.hide);
	              }
	            },
	            click: function (event, skipRefocus) {
	              var
	                $choice        = $(this),
	                $target        = (event)
	                  ? $(event.target)
	                  : $(''),
	                $subMenu       = $choice.find(selector.menu),
	                text           = module.get.choiceText($choice),
	                value          = module.get.choiceValue($choice, text),
	                hasSubMenu     = ($subMenu.length > 0),
	                isBubbledEvent = ($subMenu.find($target).length > 0)
	              ;
	              if(!isBubbledEvent && (!hasSubMenu || settings.allowCategorySelection)) {
	                if(module.is.searchSelection()) {
	                  if(settings.allowAdditions) {
	                    module.remove.userAddition();
	                  }
	                  module.remove.searchTerm();
	                  if(!module.is.focusedOnSearch() && !(skipRefocus == true)) {
	                    module.focusSearch(true);
	                  }
	                }
	                if(!settings.useLabels) {
	                  module.remove.filteredItem();
	                  module.set.scrollPosition($choice);
	                }
	                module.determine.selectAction.call(this, text, value);
	              }
	            }
	          },

	          document: {
	            // label selection should occur even when element has no focus
	            keydown: function(event) {
	              var
	                pressedKey    = event.which,
	                isShortcutKey = module.is.inObject(pressedKey, keys)
	              ;
	              if(isShortcutKey) {
	                var
	                  $label            = $module.find(selector.label),
	                  $activeLabel      = $label.filter('.' + className.active),
	                  activeValue       = $activeLabel.data(metadata.value),
	                  labelIndex        = $label.index($activeLabel),
	                  labelCount        = $label.length,
	                  hasActiveLabel    = ($activeLabel.length > 0),
	                  hasMultipleActive = ($activeLabel.length > 1),
	                  isFirstLabel      = (labelIndex === 0),
	                  isLastLabel       = (labelIndex + 1 == labelCount),
	                  isSearch          = module.is.searchSelection(),
	                  isFocusedOnSearch = module.is.focusedOnSearch(),
	                  isFocused         = module.is.focused(),
	                  caretAtStart      = (isFocusedOnSearch && module.get.caretPosition() === 0),
	                  $nextLabel
	                ;
	                if(isSearch && !hasActiveLabel && !isFocusedOnSearch) {
	                  return;
	                }

	                if(pressedKey == keys.leftArrow) {
	                  // activate previous label
	                  if((isFocused || caretAtStart) && !hasActiveLabel) {
	                    module.verbose('Selecting previous label');
	                    $label.last().addClass(className.active);
	                  }
	                  else if(hasActiveLabel) {
	                    if(!event.shiftKey) {
	                      module.verbose('Selecting previous label');
	                      $label.removeClass(className.active);
	                    }
	                    else {
	                      module.verbose('Adding previous label to selection');
	                    }
	                    if(isFirstLabel && !hasMultipleActive) {
	                      $activeLabel.addClass(className.active);
	                    }
	                    else {
	                      $activeLabel.prev(selector.siblingLabel)
	                        .addClass(className.active)
	                        .end()
	                      ;
	                    }
	                    event.preventDefault();
	                  }
	                }
	                else if(pressedKey == keys.rightArrow) {
	                  // activate first label
	                  if(isFocused && !hasActiveLabel) {
	                    $label.first().addClass(className.active);
	                  }
	                  // activate next label
	                  if(hasActiveLabel) {
	                    if(!event.shiftKey) {
	                      module.verbose('Selecting next label');
	                      $label.removeClass(className.active);
	                    }
	                    else {
	                      module.verbose('Adding next label to selection');
	                    }
	                    if(isLastLabel) {
	                      if(isSearch) {
	                        if(!isFocusedOnSearch) {
	                          module.focusSearch();
	                        }
	                        else {
	                          $label.removeClass(className.active);
	                        }
	                      }
	                      else if(hasMultipleActive) {
	                        $activeLabel.next(selector.siblingLabel).addClass(className.active);
	                      }
	                      else {
	                        $activeLabel.addClass(className.active);
	                      }
	                    }
	                    else {
	                      $activeLabel.next(selector.siblingLabel).addClass(className.active);
	                    }
	                    event.preventDefault();
	                  }
	                }
	                else if(pressedKey == keys.deleteKey || pressedKey == keys.backspace) {
	                  if(hasActiveLabel) {
	                    module.verbose('Removing active labels');
	                    if(isLastLabel) {
	                      if(isSearch && !isFocusedOnSearch) {
	                        module.focusSearch();
	                      }
	                    }
	                    $activeLabel.last().next(selector.siblingLabel).addClass(className.active);
	                    module.remove.activeLabels($activeLabel);
	                    event.preventDefault();
	                  }
	                  else if(caretAtStart && !hasActiveLabel && pressedKey == keys.backspace) {
	                    module.verbose('Removing last label on input backspace');
	                    $activeLabel = $label.last().addClass(className.active);
	                    module.remove.activeLabels($activeLabel);
	                  }
	                }
	                else {
	                  $activeLabel.removeClass(className.active);
	                }
	              }
	            }
	          },

	          keydown: function(event) {
	            var
	              pressedKey    = event.which,
	              isShortcutKey = module.is.inObject(pressedKey, keys)
	            ;
	            if(isShortcutKey) {
	              var
	                $currentlySelected = $item.not(selector.unselectable).filter('.' + className.selected).eq(0),
	                $activeItem        = $menu.children('.' + className.active).eq(0),
	                $selectedItem      = ($currentlySelected.length > 0)
	                  ? $currentlySelected
	                  : $activeItem,
	                $visibleItems = ($selectedItem.length > 0)
	                  ? $selectedItem.siblings(':not(.' + className.filtered +')').addBack()
	                  : $menu.children(':not(.' + className.filtered +')'),
	                $subMenu              = $selectedItem.children(selector.menu),
	                $parentMenu           = $selectedItem.closest(selector.menu),
	                inVisibleMenu         = ($parentMenu.hasClass(className.visible) || $parentMenu.hasClass(className.animating) || $parentMenu.parent(selector.menu).length > 0),
	                hasSubMenu            = ($subMenu.length> 0),
	                hasSelectedItem       = ($selectedItem.length > 0),
	                selectedIsSelectable  = ($selectedItem.not(selector.unselectable).length > 0),
	                delimiterPressed      = (pressedKey == keys.delimiter && settings.allowAdditions && module.is.multiple()),
	                isAdditionWithoutMenu = (settings.allowAdditions && settings.hideAdditions && (pressedKey == keys.enter || delimiterPressed) && selectedIsSelectable),
	                $nextItem,
	                isSubMenuItem,
	                newIndex
	              ;
	              // allow selection with menu closed
	              if(isAdditionWithoutMenu) {
	                module.verbose('Selecting item from keyboard shortcut', $selectedItem);
	                module.event.item.click.call($selectedItem, event);
	                if(module.is.searchSelection()) {
	                  module.remove.searchTerm();
	                }
	              }

	              // visible menu keyboard shortcuts
	              if( module.is.visible() ) {

	                // enter (select or open sub-menu)
	                if(pressedKey == keys.enter || delimiterPressed) {
	                  if(pressedKey == keys.enter && hasSelectedItem && hasSubMenu && !settings.allowCategorySelection) {
	                    module.verbose('Pressed enter on unselectable category, opening sub menu');
	                    pressedKey = keys.rightArrow;
	                  }
	                  else if(selectedIsSelectable) {
	                    module.verbose('Selecting item from keyboard shortcut', $selectedItem);
	                    module.event.item.click.call($selectedItem, event);
	                    if(module.is.searchSelection()) {
	                      module.remove.searchTerm();
	                    }
	                  }
	                  event.preventDefault();
	                }

	                // sub-menu actions
	                if(hasSelectedItem) {

	                  if(pressedKey == keys.leftArrow) {

	                    isSubMenuItem = ($parentMenu[0] !== $menu[0]);

	                    if(isSubMenuItem) {
	                      module.verbose('Left key pressed, closing sub-menu');
	                      module.animate.hide(false, $parentMenu);
	                      $selectedItem
	                        .removeClass(className.selected)
	                      ;
	                      $parentMenu
	                        .closest(selector.item)
	                          .addClass(className.selected)
	                      ;
	                      event.preventDefault();
	                    }
	                  }

	                  // right arrow (show sub-menu)
	                  if(pressedKey == keys.rightArrow) {
	                    if(hasSubMenu) {
	                      module.verbose('Right key pressed, opening sub-menu');
	                      module.animate.show(false, $subMenu);
	                      $selectedItem
	                        .removeClass(className.selected)
	                      ;
	                      $subMenu
	                        .find(selector.item).eq(0)
	                          .addClass(className.selected)
	                      ;
	                      event.preventDefault();
	                    }
	                  }
	                }

	                // up arrow (traverse menu up)
	                if(pressedKey == keys.upArrow) {
	                  $nextItem = (hasSelectedItem && inVisibleMenu)
	                    ? $selectedItem.prevAll(selector.item + ':not(' + selector.unselectable + ')').eq(0)
	                    : $item.eq(0)
	                  ;
	                  if($visibleItems.index( $nextItem ) < 0) {
	                    module.verbose('Up key pressed but reached top of current menu');
	                    event.preventDefault();
	                    return;
	                  }
	                  else {
	                    module.verbose('Up key pressed, changing active item');
	                    $selectedItem
	                      .removeClass(className.selected)
	                    ;
	                    $nextItem
	                      .addClass(className.selected)
	                    ;
	                    module.set.scrollPosition($nextItem);
	                    if(settings.selectOnKeydown && module.is.single()) {
	                      module.set.selectedItem($nextItem);
	                    }
	                  }
	                  event.preventDefault();
	                }

	                // down arrow (traverse menu down)
	                if(pressedKey == keys.downArrow) {
	                  $nextItem = (hasSelectedItem && inVisibleMenu)
	                    ? $nextItem = $selectedItem.nextAll(selector.item + ':not(' + selector.unselectable + ')').eq(0)
	                    : $item.eq(0)
	                  ;
	                  if($nextItem.length === 0) {
	                    module.verbose('Down key pressed but reached bottom of current menu');
	                    event.preventDefault();
	                    return;
	                  }
	                  else {
	                    module.verbose('Down key pressed, changing active item');
	                    $item
	                      .removeClass(className.selected)
	                    ;
	                    $nextItem
	                      .addClass(className.selected)
	                    ;
	                    module.set.scrollPosition($nextItem);
	                    if(settings.selectOnKeydown && module.is.single()) {
	                      module.set.activeItem($nextItem);
	                      module.set.selected(module.get.choiceValue($nextItem), $nextItem);
	                    }
	                  }
	                  event.preventDefault();
	                }

	                // page down (show next page)
	                if(pressedKey == keys.pageUp) {
	                  module.scrollPage('up');
	                  event.preventDefault();
	                }
	                if(pressedKey == keys.pageDown) {
	                  module.scrollPage('down');
	                  event.preventDefault();
	                }

	                // escape (close menu)
	                if(pressedKey == keys.escape) {
	                  module.verbose('Escape key pressed, closing dropdown');
	                  module.hide();
	                }

	              }
	              else {
	                // delimiter key
	                if(delimiterPressed) {
	                  event.preventDefault();
	                }
	                // down arrow (open menu)
	                if(pressedKey == keys.downArrow && !module.is.visible()) {
	                  module.verbose('Down key pressed, showing dropdown');
	                  module.select.firstUnfiltered();
	                  module.show();
	                  event.preventDefault();
	                }
	              }
	            }
	            else {
	              if( !module.has.search() ) {
	                module.set.selectedLetter( String.fromCharCode(pressedKey) );
	              }
	            }
	          }
	        },

	        trigger: {
	          change: function() {
	            var
	              events       = document.createEvent('HTMLEvents'),
	              inputElement = $input[0]
	            ;
	            if(inputElement) {
	              module.verbose('Triggering native change event');
	              events.initEvent('change', true, false);
	              inputElement.dispatchEvent(events);
	            }
	          }
	        },

	        determine: {
	          selectAction: function(text, value) {
	            module.verbose('Determining action', settings.action);
	            if( $.isFunction( module.action[settings.action] ) ) {
	              module.verbose('Triggering preset action', settings.action, text, value);
	              module.action[ settings.action ].call(element, text, value, this);
	            }
	            else if( $.isFunction(settings.action) ) {
	              module.verbose('Triggering user action', settings.action, text, value);
	              settings.action.call(element, text, value, this);
	            }
	            else {
	              module.error(error.action, settings.action);
	            }
	          },
	          eventInModule: function(event, callback) {
	            var
	              $target    = $(event.target),
	              inDocument = ($target.closest(document.documentElement).length > 0),
	              inModule   = ($target.closest($module).length > 0)
	            ;
	            callback = $.isFunction(callback)
	              ? callback
	              : function(){}
	            ;
	            if(inDocument && !inModule) {
	              module.verbose('Triggering event', callback);
	              callback();
	              return true;
	            }
	            else {
	              module.verbose('Event occurred in dropdown, canceling callback');
	              return false;
	            }
	          },
	          eventOnElement: function(event, callback) {
	            var
	              $target      = $(event.target),
	              $label       = $target.closest(selector.siblingLabel),
	              inVisibleDOM = document.body.contains(event.target),
	              notOnLabel   = ($module.find($label).length === 0),
	              notInMenu    = ($target.closest($menu).length === 0)
	            ;
	            callback = $.isFunction(callback)
	              ? callback
	              : function(){}
	            ;
	            if(inVisibleDOM && notOnLabel && notInMenu) {
	              module.verbose('Triggering event', callback);
	              callback();
	              return true;
	            }
	            else {
	              module.verbose('Event occurred in dropdown menu, canceling callback');
	              return false;
	            }
	          }
	        },

	        action: {

	          nothing: function() {},

	          activate: function(text, value, element) {
	            value = (value !== undefined)
	              ? value
	              : text
	            ;
	            if( module.can.activate( $(element) ) ) {
	              module.set.selected(value, $(element));
	              if(module.is.multiple() && !module.is.allFiltered()) {
	                return;
	              }
	              else {
	                module.hideAndClear();
	              }
	            }
	          },

	          select: function(text, value, element) {
	            // mimics action.activate but does not select text
	            module.action.activate.call(element);
	          },

	          combo: function(text, value, element) {
	            value = (value !== undefined)
	              ? value
	              : text
	            ;
	            module.set.selected(value, $(element));
	            module.hideAndClear();
	          },

	          hide: function(text, value, element) {
	            module.set.value(value, text);
	            module.hideAndClear();
	          }

	        },

	        get: {
	          id: function() {
	            return id;
	          },
	          defaultText: function() {
	            return $module.data(metadata.defaultText);
	          },
	          defaultValue: function() {
	            return $module.data(metadata.defaultValue);
	          },
	          placeholderText: function() {
	            return $module.data(metadata.placeholderText) || '';
	          },
	          text: function() {
	            return $text.text();
	          },
	          query: function() {
	            return $.trim($search.val());
	          },
	          searchWidth: function(value) {
	            value = (value !== undefined)
	              ? value
	              : $search.val()
	            ;
	            $sizer.text(value);
	            // prevent rounding issues
	            return Math.ceil( $sizer.width() + 1);
	          },
	          selectionCount: function() {
	            var
	              values = module.get.values(),
	              count
	            ;
	            count = ( module.is.multiple() )
	              ? $.isArray(values)
	                ? values.length
	                : 0
	              : (module.get.value() !== '')
	                ? 1
	                : 0
	            ;
	            return count;
	          },
	          transition: function($subMenu) {
	            return (settings.transition == 'auto')
	              ? module.is.upward($subMenu)
	                ? 'slide up'
	                : 'slide down'
	              : settings.transition
	            ;
	          },
	          userValues: function() {
	            var
	              values = module.get.values()
	            ;
	            if(!values) {
	              return false;
	            }
	            values = $.isArray(values)
	              ? values
	              : [values]
	            ;
	            return $.grep(values, function(value) {
	              return (module.get.item(value) === false);
	            });
	          },
	          uniqueArray: function(array) {
	            return $.grep(array, function (value, index) {
	                return $.inArray(value, array) === index;
	            });
	          },
	          caretPosition: function() {
	            var
	              input = $search.get(0),
	              range,
	              rangeLength
	            ;
	            if('selectionStart' in input) {
	              return input.selectionStart;
	            }
	            else if (document.selection) {
	              input.focus();
	              range       = document.selection.createRange();
	              rangeLength = range.text.length;
	              range.moveStart('character', -input.value.length);
	              return range.text.length - rangeLength;
	            }
	          },
	          value: function() {
	            var
	              value = ($input.length > 0)
	                ? $input.val()
	                : $module.data(metadata.value),
	              isEmptyMultiselect = ($.isArray(value) && value.length === 1 && value[0] === '')
	            ;
	            // prevents placeholder element from being selected when multiple
	            return (value === undefined || isEmptyMultiselect)
	              ? ''
	              : value
	            ;
	          },
	          values: function() {
	            var
	              value = module.get.value()
	            ;
	            if(value === '') {
	              return '';
	            }
	            return ( !module.has.selectInput() && module.is.multiple() )
	              ? (typeof value == 'string') // delimited string
	                ? value.split(settings.delimiter)
	                : ''
	              : value
	            ;
	          },
	          remoteValues: function() {
	            var
	              values = module.get.values(),
	              remoteValues = false
	            ;
	            if(values) {
	              if(typeof values == 'string') {
	                values = [values];
	              }
	              $.each(values, function(index, value) {
	                var
	                  name = module.read.remoteData(value)
	                ;
	                module.verbose('Restoring value from session data', name, value);
	                if(name) {
	                  if(!remoteValues) {
	                    remoteValues = {};
	                  }
	                  remoteValues[value] = name;
	                }
	              });
	            }
	            return remoteValues;
	          },
	          choiceText: function($choice, preserveHTML) {
	            preserveHTML = (preserveHTML !== undefined)
	              ? preserveHTML
	              : settings.preserveHTML
	            ;
	            if($choice) {
	              if($choice.find(selector.menu).length > 0) {
	                module.verbose('Retrieving text of element with sub-menu');
	                $choice = $choice.clone();
	                $choice.find(selector.menu).remove();
	                $choice.find(selector.menuIcon).remove();
	              }
	              return ($choice.data(metadata.text) !== undefined)
	                ? $choice.data(metadata.text)
	                : (preserveHTML)
	                  ? $.trim($choice.html())
	                  : $.trim($choice.text())
	              ;
	            }
	          },
	          choiceValue: function($choice, choiceText) {
	            choiceText = choiceText || module.get.choiceText($choice);
	            if(!$choice) {
	              return false;
	            }
	            return ($choice.data(metadata.value) !== undefined)
	              ? String( $choice.data(metadata.value) )
	              : (typeof choiceText === 'string')
	                ? $.trim(choiceText.toLowerCase())
	                : String(choiceText)
	            ;
	          },
	          inputEvent: function() {
	            var
	              input = $search[0]
	            ;
	            if(input) {
	              return (input.oninput !== undefined)
	                ? 'input'
	                : (input.onpropertychange !== undefined)
	                  ? 'propertychange'
	                  : 'keyup'
	              ;
	            }
	            return false;
	          },
	          selectValues: function() {
	            var
	              select = {}
	            ;
	            select.values = [];
	            $module
	              .find('option')
	                .each(function() {
	                  var
	                    $option  = $(this),
	                    name     = $option.html(),
	                    disabled = $option.attr('disabled'),
	                    value    = ( $option.attr('value') !== undefined )
	                      ? $option.attr('value')
	                      : name
	                  ;
	                  if(settings.placeholder === 'auto' && value === '') {
	                    select.placeholder = name;
	                  }
	                  else {
	                    select.values.push({
	                      name     : name,
	                      value    : value,
	                      disabled : disabled
	                    });
	                  }
	                })
	            ;
	            if(settings.placeholder && settings.placeholder !== 'auto') {
	              module.debug('Setting placeholder value to', settings.placeholder);
	              select.placeholder = settings.placeholder;
	            }
	            if(settings.sortSelect) {
	              select.values.sort(function(a, b) {
	                return (a.name > b.name)
	                  ? 1
	                  : -1
	                ;
	              });
	              module.debug('Retrieved and sorted values from select', select);
	            }
	            else {
	              module.debug('Retrieved values from select', select);
	            }
	            return select;
	          },
	          activeItem: function() {
	            return $item.filter('.'  + className.active);
	          },
	          selectedItem: function() {
	            var
	              $selectedItem = $item.not(selector.unselectable).filter('.'  + className.selected)
	            ;
	            return ($selectedItem.length > 0)
	              ? $selectedItem
	              : $item.eq(0)
	            ;
	          },
	          itemWithAdditions: function(value) {
	            var
	              $items       = module.get.item(value),
	              $userItems   = module.create.userChoice(value),
	              hasUserItems = ($userItems && $userItems.length > 0)
	            ;
	            if(hasUserItems) {
	              $items = ($items.length > 0)
	                ? $items.add($userItems)
	                : $userItems
	              ;
	            }
	            return $items;
	          },
	          item: function(value, strict) {
	            var
	              $selectedItem = false,
	              shouldSearch,
	              isMultiple
	            ;
	            value = (value !== undefined)
	              ? value
	              : ( module.get.values() !== undefined)
	                ? module.get.values()
	                : module.get.text()
	            ;
	            shouldSearch = (isMultiple)
	              ? (value.length > 0)
	              : (value !== undefined && value !== null)
	            ;
	            isMultiple = (module.is.multiple() && $.isArray(value));
	            strict     = (value === '' || value === 0)
	              ? true
	              : strict || false
	            ;
	            if(shouldSearch) {
	              $item
	                .each(function() {
	                  var
	                    $choice       = $(this),
	                    optionText    = module.get.choiceText($choice),
	                    optionValue   = module.get.choiceValue($choice, optionText)
	                  ;
	                  // safe early exit
	                  if(optionValue === null || optionValue === undefined) {
	                    return;
	                  }
	                  if(isMultiple) {
	                    if($.inArray( String(optionValue), value) !== -1 || $.inArray(optionText, value) !== -1) {
	                      $selectedItem = ($selectedItem)
	                        ? $selectedItem.add($choice)
	                        : $choice
	                      ;
	                    }
	                  }
	                  else if(strict) {
	                    module.verbose('Ambiguous dropdown value using strict type check', $choice, value);
	                    if( optionValue === value || optionText === value) {
	                      $selectedItem = $choice;
	                      return true;
	                    }
	                  }
	                  else {
	                    if( String(optionValue) == String(value) || optionText == value) {
	                      module.verbose('Found select item by value', optionValue, value);
	                      $selectedItem = $choice;
	                      return true;
	                    }
	                  }
	                })
	              ;
	            }
	            return $selectedItem;
	          }
	        },

	        check: {
	          maxSelections: function(selectionCount) {
	            if(settings.maxSelections) {
	              selectionCount = (selectionCount !== undefined)
	                ? selectionCount
	                : module.get.selectionCount()
	              ;
	              if(selectionCount >= settings.maxSelections) {
	                module.debug('Maximum selection count reached');
	                if(settings.useLabels) {
	                  $item.addClass(className.filtered);
	                  module.add.message(message.maxSelections);
	                }
	                return true;
	              }
	              else {
	                module.verbose('No longer at maximum selection count');
	                module.remove.message();
	                module.remove.filteredItem();
	                if(module.is.searchSelection()) {
	                  module.filterItems();
	                }
	                return false;
	              }
	            }
	            return true;
	          }
	        },

	        restore: {
	          defaults: function() {
	            module.clear();
	            module.restore.defaultText();
	            module.restore.defaultValue();
	          },
	          defaultText: function() {
	            var
	              defaultText     = module.get.defaultText(),
	              placeholderText = module.get.placeholderText
	            ;
	            if(defaultText === placeholderText) {
	              module.debug('Restoring default placeholder text', defaultText);
	              module.set.placeholderText(defaultText);
	            }
	            else {
	              module.debug('Restoring default text', defaultText);
	              module.set.text(defaultText);
	            }
	          },
	          placeholderText: function() {
	            module.set.placeholderText();
	          },
	          defaultValue: function() {
	            var
	              defaultValue = module.get.defaultValue()
	            ;
	            if(defaultValue !== undefined) {
	              module.debug('Restoring default value', defaultValue);
	              if(defaultValue !== '') {
	                module.set.value(defaultValue);
	                module.set.selected();
	              }
	              else {
	                module.remove.activeItem();
	                module.remove.selectedItem();
	              }
	            }
	          },
	          labels: function() {
	            if(settings.allowAdditions) {
	              if(!settings.useLabels) {
	                module.error(error.labels);
	                settings.useLabels = true;
	              }
	              module.debug('Restoring selected values');
	              module.create.userLabels();
	            }
	            module.check.maxSelections();
	          },
	          selected: function() {
	            module.restore.values();
	            if(module.is.multiple()) {
	              module.debug('Restoring previously selected values and labels');
	              module.restore.labels();
	            }
	            else {
	              module.debug('Restoring previously selected values');
	            }
	          },
	          values: function() {
	            // prevents callbacks from occurring on initial load
	            module.set.initialLoad();
	            if(settings.apiSettings && settings.saveRemoteData && module.get.remoteValues()) {
	              module.restore.remoteValues();
	            }
	            else {
	              module.set.selected();
	            }
	            module.remove.initialLoad();
	          },
	          remoteValues: function() {
	            var
	              values = module.get.remoteValues()
	            ;
	            module.debug('Recreating selected from session data', values);
	            if(values) {
	              if( module.is.single() ) {
	                $.each(values, function(value, name) {
	                  module.set.text(name);
	                });
	              }
	              else {
	                $.each(values, function(value, name) {
	                  module.add.label(value, name);
	                });
	              }
	            }
	          }
	        },

	        read: {
	          remoteData: function(value) {
	            var
	              name
	            ;
	            if(window.Storage === undefined) {
	              module.error(error.noStorage);
	              return;
	            }
	            name = sessionStorage.getItem(value);
	            return (name !== undefined)
	              ? name
	              : false
	            ;
	          }
	        },

	        save: {
	          defaults: function() {
	            module.save.defaultText();
	            module.save.placeholderText();
	            module.save.defaultValue();
	          },
	          defaultValue: function() {
	            var
	              value = module.get.value()
	            ;
	            module.verbose('Saving default value as', value);
	            $module.data(metadata.defaultValue, value);
	          },
	          defaultText: function() {
	            var
	              text = module.get.text()
	            ;
	            module.verbose('Saving default text as', text);
	            $module.data(metadata.defaultText, text);
	          },
	          placeholderText: function() {
	            var
	              text
	            ;
	            if(settings.placeholder !== false && $text.hasClass(className.placeholder)) {
	              text = module.get.text();
	              module.verbose('Saving placeholder text as', text);
	              $module.data(metadata.placeholderText, text);
	            }
	          },
	          remoteData: function(name, value) {
	            if(window.Storage === undefined) {
	              module.error(error.noStorage);
	              return;
	            }
	            module.verbose('Saving remote data to session storage', value, name);
	            sessionStorage.setItem(value, name);
	          }
	        },

	        clear: function() {
	          if(module.is.multiple()) {
	            module.remove.labels();
	          }
	          else {
	            module.remove.activeItem();
	            module.remove.selectedItem();
	          }
	          module.set.placeholderText();
	          module.clearValue();
	        },

	        clearValue: function() {
	          module.set.value('');
	        },

	        scrollPage: function(direction, $selectedItem) {
	          var
	            $currentItem  = $selectedItem || module.get.selectedItem(),
	            $menu         = $currentItem.closest(selector.menu),
	            menuHeight    = $menu.outerHeight(),
	            currentScroll = $menu.scrollTop(),
	            itemHeight    = $item.eq(0).outerHeight(),
	            itemsPerPage  = Math.floor(menuHeight / itemHeight),
	            maxScroll     = $menu.prop('scrollHeight'),
	            newScroll     = (direction == 'up')
	              ? currentScroll - (itemHeight * itemsPerPage)
	              : currentScroll + (itemHeight * itemsPerPage),
	            $selectableItem = $item.not(selector.unselectable),
	            isWithinRange,
	            $nextSelectedItem,
	            elementIndex
	          ;
	          elementIndex      = (direction == 'up')
	            ? $selectableItem.index($currentItem) - itemsPerPage
	            : $selectableItem.index($currentItem) + itemsPerPage
	          ;
	          isWithinRange = (direction == 'up')
	            ? (elementIndex >= 0)
	            : (elementIndex < $selectableItem.length)
	          ;
	          $nextSelectedItem = (isWithinRange)
	            ? $selectableItem.eq(elementIndex)
	            : (direction == 'up')
	              ? $selectableItem.first()
	              : $selectableItem.last()
	          ;
	          if($nextSelectedItem.length > 0) {
	            module.debug('Scrolling page', direction, $nextSelectedItem);
	            $currentItem
	              .removeClass(className.selected)
	            ;
	            $nextSelectedItem
	              .addClass(className.selected)
	            ;
	            if(settings.selectOnKeydown && module.is.single()) {
	              module.set.selectedItem($nextSelectedItem);
	            }
	            $menu
	              .scrollTop(newScroll)
	            ;
	          }
	        },

	        set: {
	          filtered: function() {
	            var
	              isMultiple       = module.is.multiple(),
	              isSearch         = module.is.searchSelection(),
	              isSearchMultiple = (isMultiple && isSearch),
	              searchValue      = (isSearch)
	                ? module.get.query()
	                : '',
	              hasSearchValue   = (typeof searchValue === 'string' && searchValue.length > 0),
	              searchWidth      = module.get.searchWidth(),
	              valueIsSet       = searchValue !== ''
	            ;
	            if(isMultiple && hasSearchValue) {
	              module.verbose('Adjusting input width', searchWidth, settings.glyphWidth);
	              $search.css('width', searchWidth);
	            }
	            if(hasSearchValue || (isSearchMultiple && valueIsSet)) {
	              module.verbose('Hiding placeholder text');
	              $text.addClass(className.filtered);
	            }
	            else if(!isMultiple || (isSearchMultiple && !valueIsSet)) {
	              module.verbose('Showing placeholder text');
	              $text.removeClass(className.filtered);
	            }
	          },
	          empty: function() {
	            $module.addClass(className.empty);
	          },
	          loading: function() {
	            $module.addClass(className.loading);
	          },
	          placeholderText: function(text) {
	            text = text || module.get.placeholderText();
	            module.debug('Setting placeholder text', text);
	            module.set.text(text);
	            $text.addClass(className.placeholder);
	          },
	          tabbable: function() {
	            if( module.has.search() ) {
	              module.debug('Added tabindex to searchable dropdown');
	              $search
	                .val('')
	                .attr('tabindex', 0)
	              ;
	              $menu
	                .attr('tabindex', -1)
	              ;
	            }
	            else {
	              module.debug('Added tabindex to dropdown');
	              if( $module.attr('tabindex') === undefined) {
	                $module
	                  .attr('tabindex', 0)
	                ;
	                $menu
	                  .attr('tabindex', -1)
	                ;
	              }
	            }
	          },
	          initialLoad: function() {
	            module.verbose('Setting initial load');
	            initialLoad = true;
	          },
	          activeItem: function($item) {
	            if( settings.allowAdditions && $item.filter(selector.addition).length > 0 ) {
	              $item.addClass(className.filtered);
	            }
	            else {
	              $item.addClass(className.active);
	            }
	          },
	          scrollPosition: function($item, forceScroll) {
	            var
	              edgeTolerance = 5,
	              $menu,
	              hasActive,
	              offset,
	              itemHeight,
	              itemOffset,
	              menuOffset,
	              menuScroll,
	              menuHeight,
	              abovePage,
	              belowPage
	            ;

	            $item       = $item || module.get.selectedItem();
	            $menu       = $item.closest(selector.menu);
	            hasActive   = ($item && $item.length > 0);
	            forceScroll = (forceScroll !== undefined)
	              ? forceScroll
	              : false
	            ;
	            if($item && $menu.length > 0 && hasActive) {
	              itemOffset = $item.position().top;

	              $menu.addClass(className.loading);
	              menuScroll = $menu.scrollTop();
	              menuOffset = $menu.offset().top;
	              itemOffset = $item.offset().top;
	              offset     = menuScroll - menuOffset + itemOffset;
	              if(!forceScroll) {
	                menuHeight = $menu.height();
	                belowPage  = menuScroll + menuHeight < (offset + edgeTolerance);
	                abovePage  = ((offset - edgeTolerance) < menuScroll);
	              }
	              module.debug('Scrolling to active item', offset);
	              if(forceScroll || abovePage || belowPage) {
	                $menu.scrollTop(offset);
	              }
	              $menu.removeClass(className.loading);
	            }
	          },
	          text: function(text) {
	            if(settings.action !== 'select') {
	              if(settings.action == 'combo') {
	                module.debug('Changing combo button text', text, $combo);
	                if(settings.preserveHTML) {
	                  $combo.html(text);
	                }
	                else {
	                  $combo.text(text);
	                }
	              }
	              else {
	                if(text !== module.get.placeholderText()) {
	                  $text.removeClass(className.placeholder);
	                }
	                module.debug('Changing text', text, $text);
	                $text
	                  .removeClass(className.filtered)
	                ;
	                if(settings.preserveHTML) {
	                  $text.html(text);
	                }
	                else {
	                  $text.text(text);
	                }
	              }
	            }
	          },
	          selectedItem: function($item) {
	            module.debug('Setting user selection to item', $item);
	            module.remove.activeItem();
	            module.set.activeItem($item);
	            module.set.selected(module.get.choiceValue($item), $item);
	          },
	          selectedLetter: function(letter) {
	            var
	              $selectedItem         = $item.filter('.' + className.selected),
	              alreadySelectedLetter = $selectedItem.length > 0 && module.has.firstLetter($selectedItem, letter),
	              $nextValue            = false,
	              $nextItem
	            ;
	            // check next of same letter
	            if(alreadySelectedLetter) {
	              $nextItem = $selectedItem.nextAll($item).eq(0);
	              if( module.has.firstLetter($nextItem, letter) ) {
	                $nextValue  = $nextItem;
	              }
	            }
	            // check all values
	            if(!$nextValue) {
	              $item
	                .each(function(){
	                  if(module.has.firstLetter($(this), letter)) {
	                    $nextValue = $(this);
	                    return false;
	                  }
	                })
	              ;
	            }
	            // set next value
	            if($nextValue) {
	              module.verbose('Scrolling to next value with letter', letter);
	              module.set.scrollPosition($nextValue);
	              $selectedItem.removeClass(className.selected);
	              $nextValue.addClass(className.selected);
	              if(settings.selectOnKeydown && module.is.single()) {
	                module.set.selectedItem($nextValue);
	              }
	            }
	          },
	          direction: function($menu) {
	            if(settings.direction == 'auto') {
	              if(module.is.onScreen($menu)) {
	                module.remove.upward($menu);
	              }
	              else {
	                module.set.upward($menu);
	              }
	            }
	            else if(settings.direction == 'upward') {
	              module.set.upward($menu);
	            }
	          },
	          upward: function($menu) {
	            var $element = $menu || $module;
	            $element.addClass(className.upward);
	          },
	          value: function(value, text, $selected) {
	            var
	              escapedValue = module.escape.value(value),
	              hasInput     = ($input.length > 0),
	              isAddition   = !module.has.value(value),
	              currentValue = module.get.values(),
	              stringValue  = (value !== undefined)
	                ? String(value)
	                : value,
	              newValue
	            ;
	            if(hasInput) {
	              if(!settings.allowReselection && stringValue == currentValue) {
	                module.verbose('Skipping value update already same value', value, currentValue);
	                if(!module.is.initialLoad()) {
	                  return;
	                }
	              }

	              if( module.is.single() && module.has.selectInput() && module.can.extendSelect() ) {
	                module.debug('Adding user option', value);
	                module.add.optionValue(value);
	              }
	              module.debug('Updating input value', escapedValue, currentValue);
	              internalChange = true;
	              $input
	                .val(escapedValue)
	              ;
	              if(settings.fireOnInit === false && module.is.initialLoad()) {
	                module.debug('Input native change event ignored on initial load');
	              }
	              else {
	                module.trigger.change();
	              }
	              internalChange = false;
	            }
	            else {
	              module.verbose('Storing value in metadata', escapedValue, $input);
	              if(escapedValue !== currentValue) {
	                $module.data(metadata.value, stringValue);
	              }
	            }
	            if(settings.fireOnInit === false && module.is.initialLoad()) {
	              module.verbose('No callback on initial load', settings.onChange);
	            }
	            else {
	              settings.onChange.call(element, value, text, $selected);
	            }
	          },
	          active: function() {
	            $module
	              .addClass(className.active)
	            ;
	          },
	          multiple: function() {
	            $module.addClass(className.multiple);
	          },
	          visible: function() {
	            $module.addClass(className.visible);
	          },
	          exactly: function(value, $selectedItem) {
	            module.debug('Setting selected to exact values');
	            module.clear();
	            module.set.selected(value, $selectedItem);
	          },
	          selected: function(value, $selectedItem) {
	            var
	              isMultiple = module.is.multiple(),
	              $userSelectedItem
	            ;
	            $selectedItem = (settings.allowAdditions)
	              ? $selectedItem || module.get.itemWithAdditions(value)
	              : $selectedItem || module.get.item(value)
	            ;
	            if(!$selectedItem) {
	              return;
	            }
	            module.debug('Setting selected menu item to', $selectedItem);
	            if(module.is.multiple()) {
	              module.remove.searchWidth();
	            }
	            if(module.is.single()) {
	              module.remove.activeItem();
	              module.remove.selectedItem();
	            }
	            else if(settings.useLabels) {
	              module.remove.selectedItem();
	            }
	            // select each item
	            $selectedItem
	              .each(function() {
	                var
	                  $selected      = $(this),
	                  selectedText   = module.get.choiceText($selected),
	                  selectedValue  = module.get.choiceValue($selected, selectedText),

	                  isFiltered     = $selected.hasClass(className.filtered),
	                  isActive       = $selected.hasClass(className.active),
	                  isUserValue    = $selected.hasClass(className.addition),
	                  shouldAnimate  = (isMultiple && $selectedItem.length == 1)
	                ;
	                if(isMultiple) {
	                  if(!isActive || isUserValue) {
	                    if(settings.apiSettings && settings.saveRemoteData) {
	                      module.save.remoteData(selectedText, selectedValue);
	                    }
	                    if(settings.useLabels) {
	                      module.add.value(selectedValue, selectedText, $selected);
	                      module.add.label(selectedValue, selectedText, shouldAnimate);
	                      module.set.activeItem($selected);
	                      module.filterActive();
	                      module.select.nextAvailable($selectedItem);
	                    }
	                    else {
	                      module.add.value(selectedValue, selectedText, $selected);
	                      module.set.text(module.add.variables(message.count));
	                      module.set.activeItem($selected);
	                    }
	                  }
	                  else if(!isFiltered) {
	                    module.debug('Selected active value, removing label');
	                    module.remove.selected(selectedValue);
	                  }
	                }
	                else {
	                  if(settings.apiSettings && settings.saveRemoteData) {
	                    module.save.remoteData(selectedText, selectedValue);
	                  }
	                  module.set.text(selectedText);
	                  module.set.value(selectedValue, selectedText, $selected);
	                  $selected
	                    .addClass(className.active)
	                    .addClass(className.selected)
	                  ;
	                }
	              })
	            ;
	          }
	        },

	        add: {
	          label: function(value, text, shouldAnimate) {
	            var
	              $next  = module.is.searchSelection()
	                ? $search
	                : $text,
	              escapedValue = module.escape.value(value),
	              $label
	            ;
	            $label =  $('<a />')
	              .addClass(className.label)
	              .attr('data-value', escapedValue)
	              .html(templates.label(escapedValue, text))
	            ;
	            $label = settings.onLabelCreate.call($label, escapedValue, text);

	            if(module.has.label(value)) {
	              module.debug('Label already exists, skipping', escapedValue);
	              return;
	            }
	            if(settings.label.variation) {
	              $label.addClass(settings.label.variation);
	            }
	            if(shouldAnimate === true) {
	              module.debug('Animating in label', $label);
	              $label
	                .addClass(className.hidden)
	                .insertBefore($next)
	                .transition(settings.label.transition, settings.label.duration)
	              ;
	            }
	            else {
	              module.debug('Adding selection label', $label);
	              $label
	                .insertBefore($next)
	              ;
	            }
	          },
	          message: function(message) {
	            var
	              $message = $menu.children(selector.message),
	              html     = settings.templates.message(module.add.variables(message))
	            ;
	            if($message.length > 0) {
	              $message
	                .html(html)
	              ;
	            }
	            else {
	              $message = $('<div/>')
	                .html(html)
	                .addClass(className.message)
	                .appendTo($menu)
	              ;
	            }
	          },
	          optionValue: function(value) {
	            var
	              escapedValue = module.escape.value(value),
	              $option      = $input.find('option[value="' + escapedValue + '"]'),
	              hasOption    = ($option.length > 0)
	            ;
	            if(hasOption) {
	              return;
	            }
	            // temporarily disconnect observer
	            module.disconnect.selectObserver();
	            if( module.is.single() ) {
	              module.verbose('Removing previous user addition');
	              $input.find('option.' + className.addition).remove();
	            }
	            $('<option/>')
	              .prop('value', escapedValue)
	              .addClass(className.addition)
	              .html(value)
	              .appendTo($input)
	            ;
	            module.verbose('Adding user addition as an <option>', value);
	            module.observe.select();
	          },
	          userSuggestion: function(value) {
	            var
	              $addition         = $menu.children(selector.addition),
	              $existingItem     = module.get.item(value),
	              alreadyHasValue   = $existingItem && $existingItem.not(selector.addition).length,
	              hasUserSuggestion = $addition.length > 0,
	              html
	            ;
	            if(settings.useLabels && module.has.maxSelections()) {
	              return;
	            }
	            if(value === '' || alreadyHasValue) {
	              $addition.remove();
	              return;
	            }
	            if(hasUserSuggestion) {
	              $addition
	                .data(metadata.value, value)
	                .data(metadata.text, value)
	                .attr('data-' + metadata.value, value)
	                .attr('data-' + metadata.text, value)
	                .removeClass(className.filtered)
	              ;
	              if(!settings.hideAdditions) {
	                html = settings.templates.addition( module.add.variables(message.addResult, value) );
	                $addition
	                  .html(html)
	                ;
	              }
	              module.verbose('Replacing user suggestion with new value', $addition);
	            }
	            else {
	              $addition = module.create.userChoice(value);
	              $addition
	                .prependTo($menu)
	              ;
	              module.verbose('Adding item choice to menu corresponding with user choice addition', $addition);
	            }
	            if(!settings.hideAdditions || module.is.allFiltered()) {
	              $addition
	                .addClass(className.selected)
	                .siblings()
	                .removeClass(className.selected)
	              ;
	            }
	            module.refreshItems();
	          },
	          variables: function(message, term) {
	            var
	              hasCount    = (message.search('{count}') !== -1),
	              hasMaxCount = (message.search('{maxCount}') !== -1),
	              hasTerm     = (message.search('{term}') !== -1),
	              values,
	              count,
	              query
	            ;
	            module.verbose('Adding templated variables to message', message);
	            if(hasCount) {
	              count  = module.get.selectionCount();
	              message = message.replace('{count}', count);
	            }
	            if(hasMaxCount) {
	              count  = module.get.selectionCount();
	              message = message.replace('{maxCount}', settings.maxSelections);
	            }
	            if(hasTerm) {
	              query   = term || module.get.query();
	              message = message.replace('{term}', query);
	            }
	            return message;
	          },
	          value: function(addedValue, addedText, $selectedItem) {
	            var
	              currentValue = module.get.values(),
	              newValue
	            ;
	            if(addedValue === '') {
	              module.debug('Cannot select blank values from multiselect');
	              return;
	            }
	            // extend current array
	            if($.isArray(currentValue)) {
	              newValue = currentValue.concat([addedValue]);
	              newValue = module.get.uniqueArray(newValue);
	            }
	            else {
	              newValue = [addedValue];
	            }
	            // add values
	            if( module.has.selectInput() ) {
	              if(module.can.extendSelect()) {
	                module.debug('Adding value to select', addedValue, newValue, $input);
	                module.add.optionValue(addedValue);
	              }
	            }
	            else {
	              newValue = newValue.join(settings.delimiter);
	              module.debug('Setting hidden input to delimited value', newValue, $input);
	            }

	            if(settings.fireOnInit === false && module.is.initialLoad()) {
	              module.verbose('Skipping onadd callback on initial load', settings.onAdd);
	            }
	            else {
	              settings.onAdd.call(element, addedValue, addedText, $selectedItem);
	            }
	            module.set.value(newValue, addedValue, addedText, $selectedItem);
	            module.check.maxSelections();
	          }
	        },

	        remove: {
	          active: function() {
	            $module.removeClass(className.active);
	          },
	          activeLabel: function() {
	            $module.find(selector.label).removeClass(className.active);
	          },
	          empty: function() {
	            $module.removeClass(className.empty);
	          },
	          loading: function() {
	            $module.removeClass(className.loading);
	          },
	          initialLoad: function() {
	            initialLoad = false;
	          },
	          upward: function($menu) {
	            var $element = $menu || $module;
	            $element.removeClass(className.upward);
	          },
	          visible: function() {
	            $module.removeClass(className.visible);
	          },
	          activeItem: function() {
	            $item.removeClass(className.active);
	          },
	          filteredItem: function() {
	            if(settings.useLabels && module.has.maxSelections() ) {
	              return;
	            }
	            if(settings.useLabels && module.is.multiple()) {
	              $item.not('.' + className.active).removeClass(className.filtered);
	            }
	            else {
	              $item.removeClass(className.filtered);
	            }
	            module.remove.empty();
	          },
	          optionValue: function(value) {
	            var
	              escapedValue = module.escape.value(value),
	              $option      = $input.find('option[value="' + escapedValue + '"]'),
	              hasOption    = ($option.length > 0)
	            ;
	            if(!hasOption || !$option.hasClass(className.addition)) {
	              return;
	            }
	            // temporarily disconnect observer
	            if(selectObserver) {
	              selectObserver.disconnect();
	              module.verbose('Temporarily disconnecting mutation observer');
	            }
	            $option.remove();
	            module.verbose('Removing user addition as an <option>', escapedValue);
	            if(selectObserver) {
	              selectObserver.observe($input[0], {
	                childList : true,
	                subtree   : true
	              });
	            }
	          },
	          message: function() {
	            $menu.children(selector.message).remove();
	          },
	          searchWidth: function() {
	            $search.css('width', '');
	          },
	          searchTerm: function() {
	            module.verbose('Cleared search term');
	            $search.val('');
	            module.set.filtered();
	          },
	          userAddition: function() {
	            $item.filter(selector.addition).remove();
	          },
	          selected: function(value, $selectedItem) {
	            $selectedItem = (settings.allowAdditions)
	              ? $selectedItem || module.get.itemWithAdditions(value)
	              : $selectedItem || module.get.item(value)
	            ;

	            if(!$selectedItem) {
	              return false;
	            }

	            $selectedItem
	              .each(function() {
	                var
	                  $selected     = $(this),
	                  selectedText  = module.get.choiceText($selected),
	                  selectedValue = module.get.choiceValue($selected, selectedText)
	                ;
	                if(module.is.multiple()) {
	                  if(settings.useLabels) {
	                    module.remove.value(selectedValue, selectedText, $selected);
	                    module.remove.label(selectedValue);
	                  }
	                  else {
	                    module.remove.value(selectedValue, selectedText, $selected);
	                    if(module.get.selectionCount() === 0) {
	                      module.set.placeholderText();
	                    }
	                    else {
	                      module.set.text(module.add.variables(message.count));
	                    }
	                  }
	                }
	                else {
	                  module.remove.value(selectedValue, selectedText, $selected);
	                }
	                $selected
	                  .removeClass(className.filtered)
	                  .removeClass(className.active)
	                ;
	                if(settings.useLabels) {
	                  $selected.removeClass(className.selected);
	                }
	              })
	            ;
	          },
	          selectedItem: function() {
	            $item.removeClass(className.selected);
	          },
	          value: function(removedValue, removedText, $removedItem) {
	            var
	              values = module.get.values(),
	              newValue
	            ;
	            if( module.has.selectInput() ) {
	              module.verbose('Input is <select> removing selected option', removedValue);
	              newValue = module.remove.arrayValue(removedValue, values);
	              module.remove.optionValue(removedValue);
	            }
	            else {
	              module.verbose('Removing from delimited values', removedValue);
	              newValue = module.remove.arrayValue(removedValue, values);
	              newValue = newValue.join(settings.delimiter);
	            }
	            if(settings.fireOnInit === false && module.is.initialLoad()) {
	              module.verbose('No callback on initial load', settings.onRemove);
	            }
	            else {
	              settings.onRemove.call(element, removedValue, removedText, $removedItem);
	            }
	            module.set.value(newValue, removedText, $removedItem);
	            module.check.maxSelections();
	          },
	          arrayValue: function(removedValue, values) {
	            if( !$.isArray(values) ) {
	              values = [values];
	            }
	            values = $.grep(values, function(value){
	              return (removedValue != value);
	            });
	            module.verbose('Removed value from delimited string', removedValue, values);
	            return values;
	          },
	          label: function(value, shouldAnimate) {
	            var
	              $labels       = $module.find(selector.label),
	              $removedLabel = $labels.filter('[data-value="' + value +'"]')
	            ;
	            module.verbose('Removing label', $removedLabel);
	            $removedLabel.remove();
	          },
	          activeLabels: function($activeLabels) {
	            $activeLabels = $activeLabels || $module.find(selector.label).filter('.' + className.active);
	            module.verbose('Removing active label selections', $activeLabels);
	            module.remove.labels($activeLabels);
	          },
	          labels: function($labels) {
	            $labels = $labels || $module.find(selector.label);
	            module.verbose('Removing labels', $labels);
	            $labels
	              .each(function(){
	                var
	                  $label      = $(this),
	                  value       = $label.data(metadata.value),
	                  stringValue = (value !== undefined)
	                    ? String(value)
	                    : value,
	                  isUserValue = module.is.userValue(stringValue)
	                ;
	                if(settings.onLabelRemove.call($label, value) === false) {
	                  module.debug('Label remove callback cancelled removal');
	                  return;
	                }
	                module.remove.message();
	                if(isUserValue) {
	                  module.remove.value(stringValue);
	                  module.remove.label(stringValue);
	                }
	                else {
	                  // selected will also remove label
	                  module.remove.selected(stringValue);
	                }
	              })
	            ;
	          },
	          tabbable: function() {
	            if( module.has.search() ) {
	              module.debug('Searchable dropdown initialized');
	              $search
	                .removeAttr('tabindex')
	              ;
	              $menu
	                .removeAttr('tabindex')
	              ;
	            }
	            else {
	              module.debug('Simple selection dropdown initialized');
	              $module
	                .removeAttr('tabindex')
	              ;
	              $menu
	                .removeAttr('tabindex')
	              ;
	            }
	          }
	        },

	        has: {
	          menuSearch: function() {
	            return (module.has.search() && $search.closest($menu).length > 0);
	          },
	          search: function() {
	            return ($search.length > 0);
	          },
	          sizer: function() {
	            return ($sizer.length > 0);
	          },
	          selectInput: function() {
	            return ( $input.is('select') );
	          },
	          minCharacters: function(searchTerm) {
	            if(settings.minCharacters) {
	              searchTerm = (searchTerm !== undefined)
	                ? String(searchTerm)
	                : String(module.get.query())
	              ;
	              return (searchTerm.length >= settings.minCharacters);
	            }
	            return true;
	          },
	          firstLetter: function($item, letter) {
	            var
	              text,
	              firstLetter
	            ;
	            if(!$item || $item.length === 0 || typeof letter !== 'string') {
	              return false;
	            }
	            text        = module.get.choiceText($item, false);
	            letter      = letter.toLowerCase();
	            firstLetter = String(text).charAt(0).toLowerCase();
	            return (letter == firstLetter);
	          },
	          input: function() {
	            return ($input.length > 0);
	          },
	          items: function() {
	            return ($item.length > 0);
	          },
	          menu: function() {
	            return ($menu.length > 0);
	          },
	          message: function() {
	            return ($menu.children(selector.message).length !== 0);
	          },
	          label: function(value) {
	            var
	              escapedValue = module.escape.value(value),
	              $labels      = $module.find(selector.label)
	            ;
	            return ($labels.filter('[data-value="' + escapedValue +'"]').length > 0);
	          },
	          maxSelections: function() {
	            return (settings.maxSelections && module.get.selectionCount() >= settings.maxSelections);
	          },
	          allResultsFiltered: function() {
	            var
	              $normalResults = $item.not(selector.addition)
	            ;
	            return ($normalResults.filter(selector.unselectable).length === $normalResults.length);
	          },
	          userSuggestion: function() {
	            return ($menu.children(selector.addition).length > 0);
	          },
	          query: function() {
	            return (module.get.query() !== '');
	          },
	          value: function(value) {
	            var
	              values   = module.get.values(),
	              hasValue = $.isArray(values)
	               ? values && ($.inArray(value, values) !== -1)
	               : (values == value)
	            ;
	            return (hasValue)
	              ? true
	              : false
	            ;
	          }
	        },

	        is: {
	          active: function() {
	            return $module.hasClass(className.active);
	          },
	          bubbledLabelClick: function(event) {
	            return $(event.target).is('select, input') && $module.closest('label').length > 0;
	          },
	          alreadySetup: function() {
	            return ($module.is('select') && $module.parent(selector.dropdown).length > 0  && $module.prev().length === 0);
	          },
	          animating: function($subMenu) {
	            return ($subMenu)
	              ? $subMenu.transition && $subMenu.transition('is animating')
	              : $menu.transition    && $menu.transition('is animating')
	            ;
	          },
	          disabled: function() {
	            return $module.hasClass(className.disabled);
	          },
	          focused: function() {
	            return (document.activeElement === $module[0]);
	          },
	          focusedOnSearch: function() {
	            return (document.activeElement === $search[0]);
	          },
	          allFiltered: function() {
	            return( (module.is.multiple() || module.has.search()) && !(settings.hideAdditions == false && module.has.userSuggestion()) && !module.has.message() && module.has.allResultsFiltered() );
	          },
	          hidden: function($subMenu) {
	            return !module.is.visible($subMenu);
	          },
	          initialLoad: function() {
	            return initialLoad;
	          },
	          onScreen: function($subMenu) {
	            var
	              $currentMenu   = $subMenu || $menu,
	              canOpenDownward = true,
	              onScreen = {},
	              calculations
	            ;
	            $currentMenu.addClass(className.loading);
	            calculations = {
	              context: {
	                scrollTop : $context.scrollTop(),
	                height    : $context.outerHeight()
	              },
	              menu : {
	                offset: $currentMenu.offset(),
	                height: $currentMenu.outerHeight()
	              }
	            };
	            onScreen = {
	              above : (calculations.context.scrollTop) <= calculations.menu.offset.top - calculations.menu.height,
	              below : (calculations.context.scrollTop + calculations.context.height) >= calculations.menu.offset.top + calculations.menu.height
	            };
	            if(onScreen.below) {
	              module.verbose('Dropdown can fit in context downward', onScreen);
	              canOpenDownward = true;
	            }
	            else if(!onScreen.below && !onScreen.above) {
	              module.verbose('Dropdown cannot fit in either direction, favoring downward', onScreen);
	              canOpenDownward = true;
	            }
	            else {
	              module.verbose('Dropdown cannot fit below, opening upward', onScreen);
	              canOpenDownward = false;
	            }
	            $currentMenu.removeClass(className.loading);
	            return canOpenDownward;
	          },
	          inObject: function(needle, object) {
	            var
	              found = false
	            ;
	            $.each(object, function(index, property) {
	              if(property == needle) {
	                found = true;
	                return true;
	              }
	            });
	            return found;
	          },
	          multiple: function() {
	            return $module.hasClass(className.multiple);
	          },
	          single: function() {
	            return !module.is.multiple();
	          },
	          selectMutation: function(mutations) {
	            var
	              selectChanged = false
	            ;
	            $.each(mutations, function(index, mutation) {
	              if(mutation.target && $(mutation.target).is('select')) {
	                selectChanged = true;
	                return true;
	              }
	            });
	            return selectChanged;
	          },
	          search: function() {
	            return $module.hasClass(className.search);
	          },
	          searchSelection: function() {
	            return ( module.has.search() && $search.parent(selector.dropdown).length === 1 );
	          },
	          selection: function() {
	            return $module.hasClass(className.selection);
	          },
	          userValue: function(value) {
	            return ($.inArray(value, module.get.userValues()) !== -1);
	          },
	          upward: function($menu) {
	            var $element = $menu || $module;
	            return $element.hasClass(className.upward);
	          },
	          visible: function($subMenu) {
	            return ($subMenu)
	              ? $subMenu.hasClass(className.visible)
	              : $menu.hasClass(className.visible)
	            ;
	          }
	        },

	        can: {
	          activate: function($item) {
	            if(settings.useLabels) {
	              return true;
	            }
	            if(!module.has.maxSelections()) {
	              return true;
	            }
	            if(module.has.maxSelections() && $item.hasClass(className.active)) {
	              return true;
	            }
	            return false;
	          },
	          click: function() {
	            return (hasTouch || settings.on == 'click');
	          },
	          extendSelect: function() {
	            return settings.allowAdditions || settings.apiSettings;
	          },
	          show: function() {
	            return !module.is.disabled() && (module.has.items() || module.has.message());
	          },
	          useAPI: function() {
	            return $.fn.api !== undefined;
	          }
	        },

	        animate: {
	          show: function(callback, $subMenu) {
	            var
	              $currentMenu = $subMenu || $menu,
	              start = ($subMenu)
	                ? function() {}
	                : function() {
	                  module.hideSubMenus();
	                  module.hideOthers();
	                  module.set.active();
	                },
	              transition
	            ;
	            callback = $.isFunction(callback)
	              ? callback
	              : function(){}
	            ;
	            module.verbose('Doing menu show animation', $currentMenu);
	            module.set.direction($subMenu);
	            transition = module.get.transition($subMenu);
	            if( module.is.selection() ) {
	              module.set.scrollPosition(module.get.selectedItem(), true);
	            }
	            if( module.is.hidden($currentMenu) || module.is.animating($currentMenu) ) {
	              if(transition == 'none') {
	                start();
	                $currentMenu.transition('show');
	                callback.call(element);
	              }
	              else if($.fn.transition !== undefined && $module.transition('is supported')) {
	                $currentMenu
	                  .transition({
	                    animation  : transition + ' in',
	                    debug      : settings.debug,
	                    verbose    : settings.verbose,
	                    duration   : settings.duration,
	                    queue      : true,
	                    onStart    : start,
	                    onComplete : function() {
	                      callback.call(element);
	                    }
	                  })
	                ;
	              }
	              else {
	                module.error(error.noTransition, transition);
	              }
	            }
	          },
	          hide: function(callback, $subMenu) {
	            var
	              $currentMenu = $subMenu || $menu,
	              duration = ($subMenu)
	                ? (settings.duration * 0.9)
	                : settings.duration,
	              start = ($subMenu)
	                ? function() {}
	                : function() {
	                  if( module.can.click() ) {
	                    module.unbind.intent();
	                  }
	                  module.remove.active();
	                },
	              transition = module.get.transition($subMenu)
	            ;
	            callback = $.isFunction(callback)
	              ? callback
	              : function(){}
	            ;
	            if( module.is.visible($currentMenu) || module.is.animating($currentMenu) ) {
	              module.verbose('Doing menu hide animation', $currentMenu);

	              if(transition == 'none') {
	                start();
	                $currentMenu.transition('hide');
	                callback.call(element);
	              }
	              else if($.fn.transition !== undefined && $module.transition('is supported')) {
	                $currentMenu
	                  .transition({
	                    animation  : transition + ' out',
	                    duration   : settings.duration,
	                    debug      : settings.debug,
	                    verbose    : settings.verbose,
	                    queue      : true,
	                    onStart    : start,
	                    onComplete : function() {
	                      if(settings.direction == 'auto') {
	                        module.remove.upward($subMenu);
	                      }
	                      callback.call(element);
	                    }
	                  })
	                ;
	              }
	              else {
	                module.error(error.transition);
	              }
	            }
	          }
	        },

	        hideAndClear: function() {
	          module.remove.searchTerm();
	          if( module.has.maxSelections() ) {
	            return;
	          }
	          if(module.has.search()) {
	            module.hide(function() {
	              module.remove.filteredItem();
	            });
	          }
	          else {
	            module.hide();
	          }
	        },

	        delay: {
	          show: function() {
	            module.verbose('Delaying show event to ensure user intent');
	            clearTimeout(module.timer);
	            module.timer = setTimeout(module.show, settings.delay.show);
	          },
	          hide: function() {
	            module.verbose('Delaying hide event to ensure user intent');
	            clearTimeout(module.timer);
	            module.timer = setTimeout(module.hide, settings.delay.hide);
	          }
	        },

	        escape: {
	          value: function(value) {
	            var
	              multipleValues = $.isArray(value),
	              stringValue    = (typeof value === 'string'),
	              isUnparsable   = (!stringValue && !multipleValues),
	              hasQuotes      = (stringValue && value.search(regExp.quote) !== -1),
	              values         = []
	            ;
	            if(!module.has.selectInput() || isUnparsable || !hasQuotes) {
	              return value;
	            }
	            module.debug('Encoding quote values for use in select', value);
	            if(multipleValues) {
	              $.each(value, function(index, value){
	                values.push(value.replace(regExp.quote, '&quot;'));
	              });
	              return values;
	            }
	            return value.replace(regExp.quote, '&quot;');
	          },
	          regExp: function(text) {
	            text =  String(text);
	            return text.replace(regExp.escape, '\\$&');
	          }
	        },

	        setting: function(name, value) {
	          module.debug('Changing setting', name, value);
	          if( $.isPlainObject(name) ) {
	            $.extend(true, settings, name);
	          }
	          else if(value !== undefined) {
	            if($.isPlainObject(settings[name])) {
	              $.extend(true, settings[name], value);
	            }
	            else {
	              settings[name] = value;
	            }
	          }
	          else {
	            return settings[name];
	          }
	        },
	        internal: function(name, value) {
	          if( $.isPlainObject(name) ) {
	            $.extend(true, module, name);
	          }
	          else if(value !== undefined) {
	            module[name] = value;
	          }
	          else {
	            return module[name];
	          }
	        },
	        debug: function() {
	          if(!settings.silent && settings.debug) {
	            if(settings.performance) {
	              module.performance.log(arguments);
	            }
	            else {
	              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
	              module.debug.apply(console, arguments);
	            }
	          }
	        },
	        verbose: function() {
	          if(!settings.silent && settings.verbose && settings.debug) {
	            if(settings.performance) {
	              module.performance.log(arguments);
	            }
	            else {
	              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
	              module.verbose.apply(console, arguments);
	            }
	          }
	        },
	        error: function() {
	          if(!settings.silent) {
	            module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
	            module.error.apply(console, arguments);
	          }
	        },
	        performance: {
	          log: function(message) {
	            var
	              currentTime,
	              executionTime,
	              previousTime
	            ;
	            if(settings.performance) {
	              currentTime   = new Date().getTime();
	              previousTime  = time || currentTime;
	              executionTime = currentTime - previousTime;
	              time          = currentTime;
	              performance.push({
	                'Name'           : message[0],
	                'Arguments'      : [].slice.call(message, 1) || '',
	                'Element'        : element,
	                'Execution Time' : executionTime
	              });
	            }
	            clearTimeout(module.performance.timer);
	            module.performance.timer = setTimeout(module.performance.display, 500);
	          },
	          display: function() {
	            var
	              title = settings.name + ':',
	              totalTime = 0
	            ;
	            time = false;
	            clearTimeout(module.performance.timer);
	            $.each(performance, function(index, data) {
	              totalTime += data['Execution Time'];
	            });
	            title += ' ' + totalTime + 'ms';
	            if(moduleSelector) {
	              title += ' \'' + moduleSelector + '\'';
	            }
	            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
	              console.groupCollapsed(title);
	              if(console.table) {
	                console.table(performance);
	              }
	              else {
	                $.each(performance, function(index, data) {
	                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
	                });
	              }
	              console.groupEnd();
	            }
	            performance = [];
	          }
	        },
	        invoke: function(query, passedArguments, context) {
	          var
	            object = instance,
	            maxDepth,
	            found,
	            response
	          ;
	          passedArguments = passedArguments || queryArguments;
	          context         = element         || context;
	          if(typeof query == 'string' && object !== undefined) {
	            query    = query.split(/[\. ]/);
	            maxDepth = query.length - 1;
	            $.each(query, function(depth, value) {
	              var camelCaseValue = (depth != maxDepth)
	                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
	                : query
	              ;
	              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
	                object = object[camelCaseValue];
	              }
	              else if( object[camelCaseValue] !== undefined ) {
	                found = object[camelCaseValue];
	                return false;
	              }
	              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
	                object = object[value];
	              }
	              else if( object[value] !== undefined ) {
	                found = object[value];
	                return false;
	              }
	              else {
	                module.error(error.method, query);
	                return false;
	              }
	            });
	          }
	          if ( $.isFunction( found ) ) {
	            response = found.apply(context, passedArguments);
	          }
	          else if(found !== undefined) {
	            response = found;
	          }
	          if($.isArray(returnedValue)) {
	            returnedValue.push(response);
	          }
	          else if(returnedValue !== undefined) {
	            returnedValue = [returnedValue, response];
	          }
	          else if(response !== undefined) {
	            returnedValue = response;
	          }
	          return found;
	        }
	      };

	      if(methodInvoked) {
	        if(instance === undefined) {
	          module.initialize();
	        }
	        module.invoke(query);
	      }
	      else {
	        if(instance !== undefined) {
	          instance.invoke('destroy');
	        }
	        module.initialize();
	      }
	    })
	  ;
	  return (returnedValue !== undefined)
	    ? returnedValue
	    : $allModules
	  ;
	};

	$.fn.dropdown.settings = {

	  silent                 : false,
	  debug                  : false,
	  verbose                : false,
	  performance            : true,

	  on                     : 'click',    // what event should show menu action on item selection
	  action                 : 'activate', // action on item selection (nothing, activate, select, combo, hide, function(){})


	  apiSettings            : false,
	  selectOnKeydown        : true,       // Whether selection should occur automatically when keyboard shortcuts used
	  minCharacters          : 0,          // Minimum characters required to trigger API call
	  saveRemoteData         : true,       // Whether remote name/value pairs should be stored in sessionStorage to allow remote data to be restored on page refresh
	  throttle               : 200,        // How long to wait after last user input to search remotely

	  context                : window,     // Context to use when determining if on screen
	  direction              : 'auto',     // Whether dropdown should always open in one direction
	  keepOnScreen           : true,       // Whether dropdown should check whether it is on screen before showing

	  match                  : 'both',     // what to match against with search selection (both, text, or label)
	  fullTextSearch         : false,      // search anywhere in value (set to 'exact' to require exact matches)

	  placeholder            : 'auto',     // whether to convert blank <select> values to placeholder text
	  preserveHTML           : true,       // preserve html when selecting value
	  sortSelect             : false,      // sort selection on init

	  forceSelection         : true,       // force a choice on blur with search selection

	  allowAdditions         : false,      // whether multiple select should allow user added values
	  hideAdditions          : true,      // whether or not to hide special message prompting a user they can enter a value

	  maxSelections          : false,      // When set to a number limits the number of selections to this count
	  useLabels              : true,       // whether multiple select should filter currently active selections from choices
	  delimiter              : ',',        // when multiselect uses normal <input> the values will be delimited with this character

	  showOnFocus            : true,       // show menu on focus
	  allowReselection       : false,      // whether current value should trigger callbacks when reselected
	  allowTab               : true,       // add tabindex to element
	  allowCategorySelection : false,      // allow elements with sub-menus to be selected

	  fireOnInit             : false,      // Whether callbacks should fire when initializing dropdown values

	  transition             : 'auto',     // auto transition will slide down or up based on direction
	  duration               : 200,        // duration of transition

	  glyphWidth             : 1.037,      // widest glyph width in em (W is 1.037 em) used to calculate multiselect input width

	  // label settings on multi-select
	  label: {
	    transition : 'scale',
	    duration   : 200,
	    variation  : false
	  },

	  // delay before event
	  delay : {
	    hide   : 300,
	    show   : 200,
	    search : 20,
	    touch  : 50
	  },

	  /* Callbacks */
	  onChange      : function(value, text, $selected){},
	  onAdd         : function(value, text, $selected){},
	  onRemove      : function(value, text, $selected){},

	  onLabelSelect : function($selectedLabels){},
	  onLabelCreate : function(value, text) { return $(this); },
	  onLabelRemove : function(value) { return true; },
	  onNoResults   : function(searchTerm) { return true; },
	  onShow        : function(){},
	  onHide        : function(){},

	  /* Component */
	  name           : 'Dropdown',
	  namespace      : 'dropdown',

	  message: {
	    addResult     : 'Add <b>{term}</b>',
	    count         : '{count} selected',
	    maxSelections : 'Max {maxCount} selections',
	    noResults     : 'No results found.',
	    serverError   : 'There was an error contacting the server'
	  },

	  error : {
	    action          : 'You called a dropdown action that was not defined',
	    alreadySetup    : 'Once a select has been initialized behaviors must be called on the created ui dropdown',
	    labels          : 'Allowing user additions currently requires the use of labels.',
	    missingMultiple : '<select> requires multiple property to be set to correctly preserve multiple values',
	    method          : 'The method you called is not defined.',
	    noAPI           : 'The API module is required to load resources remotely',
	    noStorage       : 'Saving remote data requires session storage',
	    noTransition    : 'This module requires ui transitions <https://github.com/Semantic-Org/UI-Transition>'
	  },

	  regExp : {
	    escape   : /[-[\]{}()*+?.,\\^$|#\s]/g,
	    quote    : /"/g
	  },

	  metadata : {
	    defaultText     : 'defaultText',
	    defaultValue    : 'defaultValue',
	    placeholderText : 'placeholder',
	    text            : 'text',
	    value           : 'value'
	  },

	  // property names for remote query
	  fields: {
	    remoteValues : 'results',  // grouping for api results
	    values       : 'values',   // grouping for all dropdown values
	    disabled     : 'disabled', // whether value should be disabled
	    name         : 'name',     // displayed dropdown text
	    value        : 'value',    // actual dropdown value
	    text         : 'text'      // displayed text when selected
	  },

	  keys : {
	    backspace  : 8,
	    delimiter  : 188, // comma
	    deleteKey  : 46,
	    enter      : 13,
	    escape     : 27,
	    pageUp     : 33,
	    pageDown   : 34,
	    leftArrow  : 37,
	    upArrow    : 38,
	    rightArrow : 39,
	    downArrow  : 40
	  },

	  selector : {
	    addition     : '.addition',
	    dropdown     : '.ui.dropdown',
	    hidden       : '.hidden',
	    icon         : '> .dropdown.icon',
	    input        : '> input[type="hidden"], > select',
	    item         : '.item',
	    label        : '> .label',
	    remove       : '> .label > .delete.icon',
	    siblingLabel : '.label',
	    menu         : '.menu',
	    message      : '.message',
	    menuIcon     : '.dropdown.icon',
	    search       : 'input.search, .menu > .search > input, .menu input.search',
	    sizer        : '> input.sizer',
	    text         : '> .text:not(.icon)',
	    unselectable : '.disabled, .filtered'
	  },

	  className : {
	    active      : 'active',
	    addition    : 'addition',
	    animating   : 'animating',
	    disabled    : 'disabled',
	    empty       : 'empty',
	    dropdown    : 'ui dropdown',
	    filtered    : 'filtered',
	    hidden      : 'hidden transition',
	    item        : 'item',
	    label       : 'ui label',
	    loading     : 'loading',
	    menu        : 'menu',
	    message     : 'message',
	    multiple    : 'multiple',
	    placeholder : 'default',
	    sizer       : 'sizer',
	    search      : 'search',
	    selected    : 'selected',
	    selection   : 'selection',
	    upward      : 'upward',
	    visible     : 'visible'
	  }

	};

	/* Templates */
	$.fn.dropdown.settings.templates = {

	  // generates dropdown from select values
	  dropdown: function(select) {
	    var
	      placeholder = select.placeholder || false,
	      values      = select.values || {},
	      html        = ''
	    ;
	    html +=  '<i class="dropdown icon"></i>';
	    if(select.placeholder) {
	      html += '<div class="default text">' + placeholder + '</div>';
	    }
	    else {
	      html += '<div class="text"></div>';
	    }
	    html += '<div class="menu">';
	    $.each(select.values, function(index, option) {
	      html += (option.disabled)
	        ? '<div class="disabled item" data-value="' + option.value + '">' + option.name + '</div>'
	        : '<div class="item" data-value="' + option.value + '">' + option.name + '</div>'
	      ;
	    });
	    html += '</div>';
	    return html;
	  },

	  // generates just menu from select
	  menu: function(response, fields) {
	    var
	      values = response[fields.values] || {},
	      html   = ''
	    ;
	    $.each(values, function(index, option) {
	      var
	        maybeText = (option[fields.text])
	          ? 'data-text="' + option[fields.text] + '"'
	          : '',
	        maybeDisabled = (option[fields.disabled])
	          ? 'disabled '
	          : ''
	      ;
	      html += '<div class="'+ maybeDisabled +'item" data-value="' + option[fields.value] + '"' + maybeText + '>'
	      html +=   option[fields.name];
	      html += '</div>';
	    });
	    return html;
	  },

	  // generates label for multiselect
	  label: function(value, text) {
	    return text + '<i class="delete icon"></i>';
	  },


	  // generates messages like "No results"
	  message: function(message) {
	    return message;
	  },

	  // generates user addition to selection menu
	  addition: function(choice) {
	    return choice;
	  }

	};

	})( jQuery, window, document );


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*!
	 * # Semantic UI 2.2.2 - Transition
	 * http://github.com/semantic-org/semantic-ui/
	 *
	 *
	 * Released under the MIT license
	 * http://opensource.org/licenses/MIT
	 *
	 */

	;(function ($, window, document, undefined) {

	"use strict";

	window = (typeof window != 'undefined' && window.Math == Math)
	  ? window
	  : (typeof self != 'undefined' && self.Math == Math)
	    ? self
	    : Function('return this')()
	;

	$.fn.transition = function() {
	  var
	    $allModules     = $(this),
	    moduleSelector  = $allModules.selector || '',

	    time            = new Date().getTime(),
	    performance     = [],

	    moduleArguments = arguments,
	    query           = moduleArguments[0],
	    queryArguments  = [].slice.call(arguments, 1),
	    methodInvoked   = (typeof query === 'string'),

	    requestAnimationFrame = window.requestAnimationFrame
	      || window.mozRequestAnimationFrame
	      || window.webkitRequestAnimationFrame
	      || window.msRequestAnimationFrame
	      || function(callback) { setTimeout(callback, 0); },

	    returnedValue
	  ;
	  $allModules
	    .each(function(index) {
	      var
	        $module  = $(this),
	        element  = this,

	        // set at run time
	        settings,
	        instance,

	        error,
	        className,
	        metadata,
	        animationEnd,
	        animationName,

	        namespace,
	        moduleNamespace,
	        eventNamespace,
	        module
	      ;

	      module = {

	        initialize: function() {

	          // get full settings
	          settings        = module.get.settings.apply(element, moduleArguments);

	          // shorthand
	          className       = settings.className;
	          error           = settings.error;
	          metadata        = settings.metadata;

	          // define namespace
	          eventNamespace  = '.' + settings.namespace;
	          moduleNamespace = 'module-' + settings.namespace;
	          instance        = $module.data(moduleNamespace) || module;

	          // get vendor specific events
	          animationEnd    = module.get.animationEndEvent();

	          if(methodInvoked) {
	            methodInvoked = module.invoke(query);
	          }

	          // method not invoked, lets run an animation
	          if(methodInvoked === false) {
	            module.verbose('Converted arguments into settings object', settings);
	            if(settings.interval) {
	              module.delay(settings.animate);
	            }
	            else  {
	              module.animate();
	            }
	            module.instantiate();
	          }
	        },

	        instantiate: function() {
	          module.verbose('Storing instance of module', module);
	          instance = module;
	          $module
	            .data(moduleNamespace, instance)
	          ;
	        },

	        destroy: function() {
	          module.verbose('Destroying previous module for', element);
	          $module
	            .removeData(moduleNamespace)
	          ;
	        },

	        refresh: function() {
	          module.verbose('Refreshing display type on next animation');
	          delete module.displayType;
	        },

	        forceRepaint: function() {
	          module.verbose('Forcing element repaint');
	          var
	            $parentElement = $module.parent(),
	            $nextElement = $module.next()
	          ;
	          if($nextElement.length === 0) {
	            $module.detach().appendTo($parentElement);
	          }
	          else {
	            $module.detach().insertBefore($nextElement);
	          }
	        },

	        repaint: function() {
	          module.verbose('Repainting element');
	          var
	            fakeAssignment = element.offsetWidth
	          ;
	        },

	        delay: function(interval) {
	          var
	            direction = module.get.animationDirection(),
	            shouldReverse,
	            delay
	          ;
	          if(!direction) {
	            direction = module.can.transition()
	              ? module.get.direction()
	              : 'static'
	            ;
	          }
	          interval = (interval !== undefined)
	            ? interval
	            : settings.interval
	          ;
	          shouldReverse = (settings.reverse == 'auto' && direction == className.outward);
	          delay = (shouldReverse || settings.reverse == true)
	            ? ($allModules.length - index) * settings.interval
	            : index * settings.interval
	          ;
	          module.debug('Delaying animation by', delay);
	          setTimeout(module.animate, delay);
	        },

	        animate: function(overrideSettings) {
	          settings = overrideSettings || settings;
	          if(!module.is.supported()) {
	            module.error(error.support);
	            return false;
	          }
	          module.debug('Preparing animation', settings.animation);
	          if(module.is.animating()) {
	            if(settings.queue) {
	              if(!settings.allowRepeats && module.has.direction() && module.is.occurring() && module.queuing !== true) {
	                module.debug('Animation is currently occurring, preventing queueing same animation', settings.animation);
	              }
	              else {
	                module.queue(settings.animation);
	              }
	              return false;
	            }
	            else if(!settings.allowRepeats && module.is.occurring()) {
	              module.debug('Animation is already occurring, will not execute repeated animation', settings.animation);
	              return false;
	            }
	            else {
	              module.debug('New animation started, completing previous early', settings.animation);
	              instance.complete();
	            }
	          }
	          if( module.can.animate() ) {
	            module.set.animating(settings.animation);
	          }
	          else {
	            module.error(error.noAnimation, settings.animation, element);
	          }
	        },

	        reset: function() {
	          module.debug('Resetting animation to beginning conditions');
	          module.remove.animationCallbacks();
	          module.restore.conditions();
	          module.remove.animating();
	        },

	        queue: function(animation) {
	          module.debug('Queueing animation of', animation);
	          module.queuing = true;
	          $module
	            .one(animationEnd + '.queue' + eventNamespace, function() {
	              module.queuing = false;
	              module.repaint();
	              module.animate.apply(this, settings);
	            })
	          ;
	        },

	        complete: function (event) {
	          module.debug('Animation complete', settings.animation);
	          module.remove.completeCallback();
	          module.remove.failSafe();
	          if(!module.is.looping()) {
	            if( module.is.outward() ) {
	              module.verbose('Animation is outward, hiding element');
	              module.restore.conditions();
	              module.hide();
	            }
	            else if( module.is.inward() ) {
	              module.verbose('Animation is outward, showing element');
	              module.restore.conditions();
	              module.show();
	            }
	            else {
	              module.verbose('Static animation completed');
	              module.restore.conditions();
	              settings.onComplete.call(element);
	            }
	          }
	        },

	        force: {
	          visible: function() {
	            var
	              style          = $module.attr('style'),
	              userStyle      = module.get.userStyle(),
	              displayType    = module.get.displayType(),
	              overrideStyle  = userStyle + 'display: ' + displayType + ' !important;',
	              currentDisplay = $module.css('display'),
	              emptyStyle     = (style === undefined || style === '')
	            ;
	            if(currentDisplay !== displayType) {
	              module.verbose('Overriding default display to show element', displayType);
	              $module
	                .attr('style', overrideStyle)
	              ;
	            }
	            else if(emptyStyle) {
	              $module.removeAttr('style');
	            }
	          },
	          hidden: function() {
	            var
	              style          = $module.attr('style'),
	              currentDisplay = $module.css('display'),
	              emptyStyle     = (style === undefined || style === '')
	            ;
	            if(currentDisplay !== 'none' && !module.is.hidden()) {
	              module.verbose('Overriding default display to hide element');
	              $module
	                .css('display', 'none')
	              ;
	            }
	            else if(emptyStyle) {
	              $module
	                .removeAttr('style')
	              ;
	            }
	          }
	        },

	        has: {
	          direction: function(animation) {
	            var
	              hasDirection = false
	            ;
	            animation = animation || settings.animation;
	            if(typeof animation === 'string') {
	              animation = animation.split(' ');
	              $.each(animation, function(index, word){
	                if(word === className.inward || word === className.outward) {
	                  hasDirection = true;
	                }
	              });
	            }
	            return hasDirection;
	          },
	          inlineDisplay: function() {
	            var
	              style = $module.attr('style') || ''
	            ;
	            return $.isArray(style.match(/display.*?;/, ''));
	          }
	        },

	        set: {
	          animating: function(animation) {
	            var
	              animationClass,
	              direction
	            ;
	            // remove previous callbacks
	            module.remove.completeCallback();

	            // determine exact animation
	            animation      = animation || settings.animation;
	            animationClass = module.get.animationClass(animation);

	            // save animation class in cache to restore class names
	            module.save.animation(animationClass);

	            // override display if necessary so animation appears visibly
	            module.force.visible();

	            module.remove.hidden();
	            module.remove.direction();

	            module.start.animation(animationClass);

	          },
	          duration: function(animationName, duration) {
	            duration = duration || settings.duration;
	            duration = (typeof duration == 'number')
	              ? duration + 'ms'
	              : duration
	            ;
	            if(duration || duration === 0) {
	              module.verbose('Setting animation duration', duration);
	              $module
	                .css({
	                  'animation-duration':  duration
	                })
	              ;
	            }
	          },
	          direction: function(direction) {
	            direction = direction || module.get.direction();
	            if(direction == className.inward) {
	              module.set.inward();
	            }
	            else {
	              module.set.outward();
	            }
	          },
	          looping: function() {
	            module.debug('Transition set to loop');
	            $module
	              .addClass(className.looping)
	            ;
	          },
	          hidden: function() {
	            $module
	              .addClass(className.transition)
	              .addClass(className.hidden)
	            ;
	          },
	          inward: function() {
	            module.debug('Setting direction to inward');
	            $module
	              .removeClass(className.outward)
	              .addClass(className.inward)
	            ;
	          },
	          outward: function() {
	            module.debug('Setting direction to outward');
	            $module
	              .removeClass(className.inward)
	              .addClass(className.outward)
	            ;
	          },
	          visible: function() {
	            $module
	              .addClass(className.transition)
	              .addClass(className.visible)
	            ;
	          }
	        },

	        start: {
	          animation: function(animationClass) {
	            animationClass = animationClass || module.get.animationClass();
	            module.debug('Starting tween', animationClass);
	            $module
	              .addClass(animationClass)
	              .one(animationEnd + '.complete' + eventNamespace, module.complete)
	            ;
	            if(settings.useFailSafe) {
	              module.add.failSafe();
	            }
	            module.set.duration(settings.duration);
	            settings.onStart.call(element);
	          }
	        },

	        save: {
	          animation: function(animation) {
	            if(!module.cache) {
	              module.cache = {};
	            }
	            module.cache.animation = animation;
	          },
	          displayType: function(displayType) {
	            if(displayType !== 'none') {
	              $module.data(metadata.displayType, displayType);
	            }
	          },
	          transitionExists: function(animation, exists) {
	            $.fn.transition.exists[animation] = exists;
	            module.verbose('Saving existence of transition', animation, exists);
	          }
	        },

	        restore: {
	          conditions: function() {
	            var
	              animation = module.get.currentAnimation()
	            ;
	            if(animation) {
	              $module
	                .removeClass(animation)
	              ;
	              module.verbose('Removing animation class', module.cache);
	            }
	            module.remove.duration();
	          }
	        },

	        add: {
	          failSafe: function() {
	            var
	              duration = module.get.duration()
	            ;
	            module.timer = setTimeout(function() {
	              $module.triggerHandler(animationEnd);
	            }, duration + settings.failSafeDelay);
	            module.verbose('Adding fail safe timer', module.timer);
	          }
	        },

	        remove: {
	          animating: function() {
	            $module.removeClass(className.animating);
	          },
	          animationCallbacks: function() {
	            module.remove.queueCallback();
	            module.remove.completeCallback();
	          },
	          queueCallback: function() {
	            $module.off('.queue' + eventNamespace);
	          },
	          completeCallback: function() {
	            $module.off('.complete' + eventNamespace);
	          },
	          display: function() {
	            $module.css('display', '');
	          },
	          direction: function() {
	            $module
	              .removeClass(className.inward)
	              .removeClass(className.outward)
	            ;
	          },
	          duration: function() {
	            $module
	              .css('animation-duration', '')
	            ;
	          },
	          failSafe: function() {
	            module.verbose('Removing fail safe timer', module.timer);
	            if(module.timer) {
	              clearTimeout(module.timer);
	            }
	          },
	          hidden: function() {
	            $module.removeClass(className.hidden);
	          },
	          visible: function() {
	            $module.removeClass(className.visible);
	          },
	          looping: function() {
	            module.debug('Transitions are no longer looping');
	            if( module.is.looping() ) {
	              module.reset();
	              $module
	                .removeClass(className.looping)
	              ;
	            }
	          },
	          transition: function() {
	            $module
	              .removeClass(className.visible)
	              .removeClass(className.hidden)
	            ;
	          }
	        },
	        get: {
	          settings: function(animation, duration, onComplete) {
	            // single settings object
	            if(typeof animation == 'object') {
	              return $.extend(true, {}, $.fn.transition.settings, animation);
	            }
	            // all arguments provided
	            else if(typeof onComplete == 'function') {
	              return $.extend({}, $.fn.transition.settings, {
	                animation  : animation,
	                onComplete : onComplete,
	                duration   : duration
	              });
	            }
	            // only duration provided
	            else if(typeof duration == 'string' || typeof duration == 'number') {
	              return $.extend({}, $.fn.transition.settings, {
	                animation : animation,
	                duration  : duration
	              });
	            }
	            // duration is actually settings object
	            else if(typeof duration == 'object') {
	              return $.extend({}, $.fn.transition.settings, duration, {
	                animation : animation
	              });
	            }
	            // duration is actually callback
	            else if(typeof duration == 'function') {
	              return $.extend({}, $.fn.transition.settings, {
	                animation  : animation,
	                onComplete : duration
	              });
	            }
	            // only animation provided
	            else {
	              return $.extend({}, $.fn.transition.settings, {
	                animation : animation
	              });
	            }
	            return $.fn.transition.settings;
	          },
	          animationClass: function(animation) {
	            var
	              animationClass = animation || settings.animation,
	              directionClass = (module.can.transition() && !module.has.direction())
	                ? module.get.direction() + ' '
	                : ''
	            ;
	            return className.animating + ' '
	              + className.transition + ' '
	              + directionClass
	              + animationClass
	            ;
	          },
	          currentAnimation: function() {
	            return (module.cache && module.cache.animation !== undefined)
	              ? module.cache.animation
	              : false
	            ;
	          },
	          currentDirection: function() {
	            return module.is.inward()
	              ? className.inward
	              : className.outward
	            ;
	          },
	          direction: function() {
	            return module.is.hidden() || !module.is.visible()
	              ? className.inward
	              : className.outward
	            ;
	          },
	          animationDirection: function(animation) {
	            var
	              direction
	            ;
	            animation = animation || settings.animation;
	            if(typeof animation === 'string') {
	              animation = animation.split(' ');
	              // search animation name for out/in class
	              $.each(animation, function(index, word){
	                if(word === className.inward) {
	                  direction = className.inward;
	                }
	                else if(word === className.outward) {
	                  direction = className.outward;
	                }
	              });
	            }
	            // return found direction
	            if(direction) {
	              return direction;
	            }
	            return false;
	          },
	          duration: function(duration) {
	            duration = duration || settings.duration;
	            if(duration === false) {
	              duration = $module.css('animation-duration') || 0;
	            }
	            return (typeof duration === 'string')
	              ? (duration.indexOf('ms') > -1)
	                ? parseFloat(duration)
	                : parseFloat(duration) * 1000
	              : duration
	            ;
	          },
	          displayType: function() {
	            if(settings.displayType) {
	              return settings.displayType;
	            }
	            if($module.data(metadata.displayType) === undefined) {
	              // create fake element to determine display state
	              module.can.transition(true);
	            }
	            return $module.data(metadata.displayType);
	          },
	          userStyle: function(style) {
	            style = style || $module.attr('style') || '';
	            return style.replace(/display.*?;/, '');
	          },
	          transitionExists: function(animation) {
	            return $.fn.transition.exists[animation];
	          },
	          animationStartEvent: function() {
	            var
	              element     = document.createElement('div'),
	              animations  = {
	                'animation'       :'animationstart',
	                'OAnimation'      :'oAnimationStart',
	                'MozAnimation'    :'mozAnimationStart',
	                'WebkitAnimation' :'webkitAnimationStart'
	              },
	              animation
	            ;
	            for(animation in animations){
	              if( element.style[animation] !== undefined ){
	                return animations[animation];
	              }
	            }
	            return false;
	          },
	          animationEndEvent: function() {
	            var
	              element     = document.createElement('div'),
	              animations  = {
	                'animation'       :'animationend',
	                'OAnimation'      :'oAnimationEnd',
	                'MozAnimation'    :'mozAnimationEnd',
	                'WebkitAnimation' :'webkitAnimationEnd'
	              },
	              animation
	            ;
	            for(animation in animations){
	              if( element.style[animation] !== undefined ){
	                return animations[animation];
	              }
	            }
	            return false;
	          }

	        },

	        can: {
	          transition: function(forced) {
	            var
	              animation         = settings.animation,
	              transitionExists  = module.get.transitionExists(animation),
	              elementClass,
	              tagName,
	              $clone,
	              currentAnimation,
	              inAnimation,
	              directionExists,
	              displayType
	            ;
	            if( transitionExists === undefined || forced) {
	              module.verbose('Determining whether animation exists');
	              elementClass = $module.attr('class');
	              tagName      = $module.prop('tagName');

	              $clone = $('<' + tagName + ' />').addClass( elementClass ).insertAfter($module);
	              currentAnimation = $clone
	                .addClass(animation)
	                .removeClass(className.inward)
	                .removeClass(className.outward)
	                .addClass(className.animating)
	                .addClass(className.transition)
	                .css('animationName')
	              ;
	              inAnimation = $clone
	                .addClass(className.inward)
	                .css('animationName')
	              ;
	              displayType = $clone
	                .attr('class', elementClass)
	                .removeAttr('style')
	                .removeClass(className.hidden)
	                .removeClass(className.visible)
	                .show()
	                .css('display')
	              ;
	              module.verbose('Determining final display state', displayType);
	              module.save.displayType(displayType);

	              $clone.remove();
	              if(currentAnimation != inAnimation) {
	                module.debug('Direction exists for animation', animation);
	                directionExists = true;
	              }
	              else if(currentAnimation == 'none' || !currentAnimation) {
	                module.debug('No animation defined in css', animation);
	                return;
	              }
	              else {
	                module.debug('Static animation found', animation, displayType);
	                directionExists = false;
	              }
	              module.save.transitionExists(animation, directionExists);
	            }
	            return (transitionExists !== undefined)
	              ? transitionExists
	              : directionExists
	            ;
	          },
	          animate: function() {
	            // can transition does not return a value if animation does not exist
	            return (module.can.transition() !== undefined);
	          }
	        },

	        is: {
	          animating: function() {
	            return $module.hasClass(className.animating);
	          },
	          inward: function() {
	            return $module.hasClass(className.inward);
	          },
	          outward: function() {
	            return $module.hasClass(className.outward);
	          },
	          looping: function() {
	            return $module.hasClass(className.looping);
	          },
	          occurring: function(animation) {
	            animation = animation || settings.animation;
	            animation = '.' + animation.replace(' ', '.');
	            return ( $module.filter(animation).length > 0 );
	          },
	          visible: function() {
	            return $module.is(':visible');
	          },
	          hidden: function() {
	            return $module.css('visibility') === 'hidden';
	          },
	          supported: function() {
	            return(animationEnd !== false);
	          }
	        },

	        hide: function() {
	          module.verbose('Hiding element');
	          if( module.is.animating() ) {
	            module.reset();
	          }
	          element.blur(); // IE will trigger focus change if element is not blurred before hiding
	          module.remove.display();
	          module.remove.visible();
	          module.set.hidden();
	          module.force.hidden();
	          settings.onHide.call(element);
	          settings.onComplete.call(element);
	          // module.repaint();
	        },

	        show: function(display) {
	          module.verbose('Showing element', display);
	          module.remove.hidden();
	          module.set.visible();
	          module.force.visible();
	          settings.onShow.call(element);
	          settings.onComplete.call(element);
	          // module.repaint();
	        },

	        toggle: function() {
	          if( module.is.visible() ) {
	            module.hide();
	          }
	          else {
	            module.show();
	          }
	        },

	        stop: function() {
	          module.debug('Stopping current animation');
	          $module.triggerHandler(animationEnd);
	        },

	        stopAll: function() {
	          module.debug('Stopping all animation');
	          module.remove.queueCallback();
	          $module.triggerHandler(animationEnd);
	        },

	        clear: {
	          queue: function() {
	            module.debug('Clearing animation queue');
	            module.remove.queueCallback();
	          }
	        },

	        enable: function() {
	          module.verbose('Starting animation');
	          $module.removeClass(className.disabled);
	        },

	        disable: function() {
	          module.debug('Stopping animation');
	          $module.addClass(className.disabled);
	        },

	        setting: function(name, value) {
	          module.debug('Changing setting', name, value);
	          if( $.isPlainObject(name) ) {
	            $.extend(true, settings, name);
	          }
	          else if(value !== undefined) {
	            if($.isPlainObject(settings[name])) {
	              $.extend(true, settings[name], value);
	            }
	            else {
	              settings[name] = value;
	            }
	          }
	          else {
	            return settings[name];
	          }
	        },
	        internal: function(name, value) {
	          if( $.isPlainObject(name) ) {
	            $.extend(true, module, name);
	          }
	          else if(value !== undefined) {
	            module[name] = value;
	          }
	          else {
	            return module[name];
	          }
	        },
	        debug: function() {
	          if(!settings.silent && settings.debug) {
	            if(settings.performance) {
	              module.performance.log(arguments);
	            }
	            else {
	              module.debug = Function.prototype.bind.call(console.info, console, settings.name + ':');
	              module.debug.apply(console, arguments);
	            }
	          }
	        },
	        verbose: function() {
	          if(!settings.silent && settings.verbose && settings.debug) {
	            if(settings.performance) {
	              module.performance.log(arguments);
	            }
	            else {
	              module.verbose = Function.prototype.bind.call(console.info, console, settings.name + ':');
	              module.verbose.apply(console, arguments);
	            }
	          }
	        },
	        error: function() {
	          if(!settings.silent) {
	            module.error = Function.prototype.bind.call(console.error, console, settings.name + ':');
	            module.error.apply(console, arguments);
	          }
	        },
	        performance: {
	          log: function(message) {
	            var
	              currentTime,
	              executionTime,
	              previousTime
	            ;
	            if(settings.performance) {
	              currentTime   = new Date().getTime();
	              previousTime  = time || currentTime;
	              executionTime = currentTime - previousTime;
	              time          = currentTime;
	              performance.push({
	                'Name'           : message[0],
	                'Arguments'      : [].slice.call(message, 1) || '',
	                'Element'        : element,
	                'Execution Time' : executionTime
	              });
	            }
	            clearTimeout(module.performance.timer);
	            module.performance.timer = setTimeout(module.performance.display, 500);
	          },
	          display: function() {
	            var
	              title = settings.name + ':',
	              totalTime = 0
	            ;
	            time = false;
	            clearTimeout(module.performance.timer);
	            $.each(performance, function(index, data) {
	              totalTime += data['Execution Time'];
	            });
	            title += ' ' + totalTime + 'ms';
	            if(moduleSelector) {
	              title += ' \'' + moduleSelector + '\'';
	            }
	            if($allModules.length > 1) {
	              title += ' ' + '(' + $allModules.length + ')';
	            }
	            if( (console.group !== undefined || console.table !== undefined) && performance.length > 0) {
	              console.groupCollapsed(title);
	              if(console.table) {
	                console.table(performance);
	              }
	              else {
	                $.each(performance, function(index, data) {
	                  console.log(data['Name'] + ': ' + data['Execution Time']+'ms');
	                });
	              }
	              console.groupEnd();
	            }
	            performance = [];
	          }
	        },
	        // modified for transition to return invoke success
	        invoke: function(query, passedArguments, context) {
	          var
	            object = instance,
	            maxDepth,
	            found,
	            response
	          ;
	          passedArguments = passedArguments || queryArguments;
	          context         = element         || context;
	          if(typeof query == 'string' && object !== undefined) {
	            query    = query.split(/[\. ]/);
	            maxDepth = query.length - 1;
	            $.each(query, function(depth, value) {
	              var camelCaseValue = (depth != maxDepth)
	                ? value + query[depth + 1].charAt(0).toUpperCase() + query[depth + 1].slice(1)
	                : query
	              ;
	              if( $.isPlainObject( object[camelCaseValue] ) && (depth != maxDepth) ) {
	                object = object[camelCaseValue];
	              }
	              else if( object[camelCaseValue] !== undefined ) {
	                found = object[camelCaseValue];
	                return false;
	              }
	              else if( $.isPlainObject( object[value] ) && (depth != maxDepth) ) {
	                object = object[value];
	              }
	              else if( object[value] !== undefined ) {
	                found = object[value];
	                return false;
	              }
	              else {
	                return false;
	              }
	            });
	          }
	          if ( $.isFunction( found ) ) {
	            response = found.apply(context, passedArguments);
	          }
	          else if(found !== undefined) {
	            response = found;
	          }

	          if($.isArray(returnedValue)) {
	            returnedValue.push(response);
	          }
	          else if(returnedValue !== undefined) {
	            returnedValue = [returnedValue, response];
	          }
	          else if(response !== undefined) {
	            returnedValue = response;
	          }
	          return (found !== undefined)
	            ? found
	            : false
	          ;
	        }
	      };
	      module.initialize();
	    })
	  ;
	  return (returnedValue !== undefined)
	    ? returnedValue
	    : this
	  ;
	};

	// Records if CSS transition is available
	$.fn.transition.exists = {};

	$.fn.transition.settings = {

	  // module info
	  name          : 'Transition',

	  // hide all output from this component regardless of other settings
	  silent        : false,

	  // debug content outputted to console
	  debug         : false,

	  // verbose debug output
	  verbose       : false,

	  // performance data output
	  performance   : true,

	  // event namespace
	  namespace     : 'transition',

	  // delay between animations in group
	  interval      : 0,

	  // whether group animations should be reversed
	  reverse       : 'auto',

	  // animation callback event
	  onStart       : function() {},
	  onComplete    : function() {},
	  onShow        : function() {},
	  onHide        : function() {},

	  // whether timeout should be used to ensure callback fires in cases animationend does not
	  useFailSafe   : true,

	  // delay in ms for fail safe
	  failSafeDelay : 100,

	  // whether EXACT animation can occur twice in a row
	  allowRepeats  : false,

	  // Override final display type on visible
	  displayType   : false,

	  // animation duration
	  animation     : 'fade',
	  duration      : false,

	  // new animations will occur after previous ones
	  queue         : true,

	  metadata : {
	    displayType: 'display'
	  },

	  className   : {
	    animating  : 'animating',
	    disabled   : 'disabled',
	    hidden     : 'hidden',
	    inward     : 'in',
	    loading    : 'loading',
	    looping    : 'looping',
	    outward    : 'out',
	    transition : 'transition',
	    visible    : 'visible'
	  },

	  // possible errors
	  error: {
	    noAnimation : 'Element is no longer attached to DOM. Unable to animate.  Use silent setting to surpress this warning in production.',
	    repeated    : 'That animation is already occurring, cancelling repeated animation',
	    method      : 'The method you called is not defined',
	    support     : 'This browser does not support CSS animations'
	  }

	};


	})( jQuery, window, document );


/***/ }
/******/ ]);