// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"eCF1U":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "138b6a135baa4167";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"igcvL":[function(require,module,exports,__globalThis) {
var _motion = require("motion");
var _mini = require("motion/mini");
const duration = 2;
// phrases animation
const phrase_first = document.querySelectorAll('.phrase.first');
const phrase_second = document.querySelectorAll('.phrase.second');
const phrase_third = document.querySelectorAll('.phrase.third');
const img = document.querySelectorAll('.img');
const sequence_phrases = [
    [
        phrase_first,
        {
            opacity: [
                0,
                1
            ],
            y: [
                50,
                0
            ]
        },
        {}
    ],
    [
        phrase_second,
        {
            opacity: [
                0,
                1
            ],
            y: [
                50,
                0
            ]
        },
        {
            delay: 0.1
        }
    ],
    [
        phrase_third,
        {
            opacity: [
                0,
                1
            ],
            y: [
                50,
                0
            ]
        },
        {
            delay: 0.1
        }
    ]
];
(0, _motion.inView)(".phrase", (target)=>{
    const animation = (0, _motion.animate)(sequence_phrases, {
        duration: duration
    });
    return ()=>{
        animation.stop();
        (0, _motion.animate)(target, animation);
    };
});
// number animation
const number = document.querySelector(".number");
(0, _motion.inView)(".numwrapper", (target)=>{
    const animation = (0, _motion.animate)(0, 8200000000, {
        duration: duration,
        onUpdate: (latest)=>{
            number.textContent = Math.round(latest);
        }
    });
    const animationP = (0, _motion.animate)(".p", {
        opacity: [
            0,
            1
        ],
        y: [
            -50,
            0
        ]
    }, {
        duration: 0.5
    });
    return ()=>{
        animation.stop();
        animationP.stop();
        (0, _motion.animate)(target, animation);
        (0, _motion.animate)(".p", animationP);
    };
});
// img-phrases animation
const sequence_img = [
    [
        img,
        {
            opacity: [
                0,
                1
            ]
        },
        {
            delay: 0.3
        }
    ],
    [
        phrase_first,
        {
            opacity: [
                0,
                1
            ],
            y: [
                50,
                0
            ]
        },
        {}
    ],
    [
        phrase_second,
        {
            opacity: [
                0,
                1
            ],
            y: [
                50,
                0
            ]
        },
        {
            delay: 0.1
        }
    ]
];
(0, _motion.inView)("img", (target)=>{
    const animation = (0, _motion.animate)(sequence_img, {
        duration: duration
    });
    return ()=>{
        animation.stop();
        (0, _motion.animate)(target, animation);
    };
});

},{"motion":"6j6YU","motion/mini":"5EnB6"}],"6j6YU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hover", ()=>(0, _hoverMjs.hover));
parcelHelpers.export(exports, "isDragActive", ()=>(0, _isActiveMjs.isDragActive));
parcelHelpers.export(exports, "press", ()=>(0, _indexMjs.press));
parcelHelpers.export(exports, "invariant", ()=>(0, _errorsMjs.invariant));
parcelHelpers.export(exports, "noop", ()=>(0, _noopMjs.noop));
parcelHelpers.export(exports, "progress", ()=>(0, _progressMjs.progress));
parcelHelpers.export(exports, "animate", ()=>(0, _indexMjs1.animate));
parcelHelpers.export(exports, "createScopedAnimate", ()=>(0, _indexMjs1.createScopedAnimate));
parcelHelpers.export(exports, "animateMini", ()=>(0, _animateStyleMjs.animateMini));
parcelHelpers.export(exports, "scroll", ()=>(0, _indexMjs2.scroll));
parcelHelpers.export(exports, "scrollInfo", ()=>(0, _trackMjs.scrollInfo));
parcelHelpers.export(exports, "inView", ()=>(0, _indexMjs3.inView));
parcelHelpers.export(exports, "MotionValue", ()=>(0, _indexMjs4.MotionValue));
parcelHelpers.export(exports, "motionValue", ()=>(0, _indexMjs4.motionValue));
parcelHelpers.export(exports, "anticipate", ()=>(0, _anticipateMjs.anticipate));
parcelHelpers.export(exports, "backIn", ()=>(0, _backMjs.backIn));
parcelHelpers.export(exports, "backInOut", ()=>(0, _backMjs.backInOut));
parcelHelpers.export(exports, "backOut", ()=>(0, _backMjs.backOut));
parcelHelpers.export(exports, "circIn", ()=>(0, _circMjs.circIn));
parcelHelpers.export(exports, "circInOut", ()=>(0, _circMjs.circInOut));
parcelHelpers.export(exports, "circOut", ()=>(0, _circMjs.circOut));
parcelHelpers.export(exports, "cubicBezier", ()=>(0, _cubicBezierMjs.cubicBezier));
parcelHelpers.export(exports, "easeIn", ()=>(0, _easeMjs.easeIn));
parcelHelpers.export(exports, "easeInOut", ()=>(0, _easeMjs.easeInOut));
parcelHelpers.export(exports, "easeOut", ()=>(0, _easeMjs.easeOut));
parcelHelpers.export(exports, "mirrorEasing", ()=>(0, _mirrorMjs.mirrorEasing));
parcelHelpers.export(exports, "reverseEasing", ()=>(0, _reverseMjs.reverseEasing));
parcelHelpers.export(exports, "steps", ()=>(0, _stepsMjs.steps));
parcelHelpers.export(exports, "inertia", ()=>(0, _inertiaMjs.inertia));
parcelHelpers.export(exports, "keyframes", ()=>(0, _keyframesMjs.keyframes));
parcelHelpers.export(exports, "spring", ()=>(0, _indexMjs5.spring));
parcelHelpers.export(exports, "stagger", ()=>(0, _staggerMjs.stagger));
parcelHelpers.export(exports, "time", ()=>(0, _syncTimeMjs.time));
parcelHelpers.export(exports, "clamp", ()=>(0, _clampMjs.clamp));
parcelHelpers.export(exports, "delay", ()=>(0, _delayMjs.delayInSeconds));
parcelHelpers.export(exports, "distance", ()=>(0, _distanceMjs.distance));
parcelHelpers.export(exports, "distance2D", ()=>(0, _distanceMjs.distance2D));
parcelHelpers.export(exports, "interpolate", ()=>(0, _interpolateMjs.interpolate));
parcelHelpers.export(exports, "mix", ()=>(0, _indexMjs6.mix));
parcelHelpers.export(exports, "pipe", ()=>(0, _pipeMjs.pipe));
parcelHelpers.export(exports, "transform", ()=>(0, _transformMjs.transform));
parcelHelpers.export(exports, "wrap", ()=>(0, _wrapMjs.wrap));
parcelHelpers.export(exports, "cancelSync", ()=>(0, _indexLegacyMjs.cancelSync));
parcelHelpers.export(exports, "sync", ()=>(0, _indexLegacyMjs.sync));
parcelHelpers.export(exports, "cancelFrame", ()=>(0, _frameMjs.cancelFrame));
parcelHelpers.export(exports, "frame", ()=>(0, _frameMjs.frame));
parcelHelpers.export(exports, "frameData", ()=>(0, _frameMjs.frameData));
parcelHelpers.export(exports, "frameSteps", ()=>(0, _frameMjs.frameSteps));
var _hoverMjs = require("../../motion-dom/dist/es/gestures/hover.mjs");
var _isActiveMjs = require("../../motion-dom/dist/es/gestures/drag/state/is-active.mjs");
var _indexMjs = require("../../motion-dom/dist/es/gestures/press/index.mjs");
var _errorsMjs = require("../../motion-utils/dist/es/errors.mjs");
var _noopMjs = require("../../motion-utils/dist/es/noop.mjs");
var _progressMjs = require("../../motion-utils/dist/es/progress.mjs");
var _indexMjs1 = require("../../framer-motion/dist/es/animation/animate/index.mjs");
var _animateStyleMjs = require("../../framer-motion/dist/es/animation/animators/waapi/animate-style.mjs");
var _indexMjs2 = require("../../framer-motion/dist/es/render/dom/scroll/index.mjs");
var _trackMjs = require("../../framer-motion/dist/es/render/dom/scroll/track.mjs");
var _indexMjs3 = require("../../framer-motion/dist/es/render/dom/viewport/index.mjs");
var _indexMjs4 = require("../../framer-motion/dist/es/value/index.mjs");
var _anticipateMjs = require("../../framer-motion/dist/es/easing/anticipate.mjs");
var _backMjs = require("../../framer-motion/dist/es/easing/back.mjs");
var _circMjs = require("../../framer-motion/dist/es/easing/circ.mjs");
var _cubicBezierMjs = require("../../framer-motion/dist/es/easing/cubic-bezier.mjs");
var _easeMjs = require("../../framer-motion/dist/es/easing/ease.mjs");
var _mirrorMjs = require("../../framer-motion/dist/es/easing/modifiers/mirror.mjs");
var _reverseMjs = require("../../framer-motion/dist/es/easing/modifiers/reverse.mjs");
var _stepsMjs = require("../../framer-motion/dist/es/easing/steps.mjs");
var _inertiaMjs = require("../../framer-motion/dist/es/animation/generators/inertia.mjs");
var _keyframesMjs = require("../../framer-motion/dist/es/animation/generators/keyframes.mjs");
var _indexMjs5 = require("../../framer-motion/dist/es/animation/generators/spring/index.mjs");
var _staggerMjs = require("../../framer-motion/dist/es/animation/utils/stagger.mjs");
var _syncTimeMjs = require("../../framer-motion/dist/es/frameloop/sync-time.mjs");
var _clampMjs = require("../../framer-motion/dist/es/utils/clamp.mjs");
var _delayMjs = require("../../framer-motion/dist/es/utils/delay.mjs");
var _distanceMjs = require("../../framer-motion/dist/es/utils/distance.mjs");
var _interpolateMjs = require("../../framer-motion/dist/es/utils/interpolate.mjs");
var _indexMjs6 = require("../../framer-motion/dist/es/utils/mix/index.mjs");
var _pipeMjs = require("../../framer-motion/dist/es/utils/pipe.mjs");
var _transformMjs = require("../../framer-motion/dist/es/utils/transform.mjs");
var _wrapMjs = require("../../framer-motion/dist/es/utils/wrap.mjs");
var _indexLegacyMjs = require("../../framer-motion/dist/es/frameloop/index-legacy.mjs");
var _frameMjs = require("../../framer-motion/dist/es/frameloop/frame.mjs");

},{"../../motion-dom/dist/es/gestures/hover.mjs":false,"../../motion-dom/dist/es/gestures/drag/state/is-active.mjs":false,"../../motion-dom/dist/es/gestures/press/index.mjs":false,"../../motion-utils/dist/es/errors.mjs":false,"../../motion-utils/dist/es/noop.mjs":false,"../../motion-utils/dist/es/progress.mjs":false,"../../framer-motion/dist/es/animation/animate/index.mjs":"kTvnl","../../framer-motion/dist/es/animation/animators/waapi/animate-style.mjs":false,"../../framer-motion/dist/es/render/dom/scroll/index.mjs":false,"../../framer-motion/dist/es/render/dom/scroll/track.mjs":false,"../../framer-motion/dist/es/render/dom/viewport/index.mjs":"goHgh","../../framer-motion/dist/es/value/index.mjs":false,"../../framer-motion/dist/es/easing/anticipate.mjs":false,"../../framer-motion/dist/es/easing/back.mjs":false,"../../framer-motion/dist/es/easing/circ.mjs":false,"../../framer-motion/dist/es/easing/cubic-bezier.mjs":false,"../../framer-motion/dist/es/easing/ease.mjs":false,"../../framer-motion/dist/es/easing/modifiers/mirror.mjs":false,"../../framer-motion/dist/es/easing/modifiers/reverse.mjs":false,"../../framer-motion/dist/es/easing/steps.mjs":false,"../../framer-motion/dist/es/animation/generators/inertia.mjs":false,"../../framer-motion/dist/es/animation/generators/keyframes.mjs":false,"../../framer-motion/dist/es/animation/generators/spring/index.mjs":false,"../../framer-motion/dist/es/animation/utils/stagger.mjs":false,"../../framer-motion/dist/es/frameloop/sync-time.mjs":false,"../../framer-motion/dist/es/utils/clamp.mjs":false,"../../framer-motion/dist/es/utils/delay.mjs":false,"../../framer-motion/dist/es/utils/distance.mjs":false,"../../framer-motion/dist/es/utils/interpolate.mjs":false,"../../framer-motion/dist/es/utils/mix/index.mjs":false,"../../framer-motion/dist/es/utils/pipe.mjs":false,"../../framer-motion/dist/es/utils/transform.mjs":false,"../../framer-motion/dist/es/utils/wrap.mjs":false,"../../framer-motion/dist/es/frameloop/index-legacy.mjs":false,"../../framer-motion/dist/es/frameloop/frame.mjs":false,"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dlaJf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invariant", ()=>invariant);
parcelHelpers.export(exports, "warning", ()=>warning);
var _noopMjs = require("./noop.mjs");
let warning = (0, _noopMjs.noop);
let invariant = (0, _noopMjs.noop);
warning = (check, message)=>{
    if (!check && typeof console !== "undefined") console.warn(message);
};
invariant = (check, message)=>{
    if (!check) throw new Error(message);
};

},{"./noop.mjs":"dgfzh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dgfzh":[function(require,module,exports,__globalThis) {
/*#__NO_SIDE_EFFECTS__*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "noop", ()=>noop);
const noop = (any)=>any;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lOsdJ":[function(require,module,exports,__globalThis) {
/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "progress", ()=>progress);
const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kTvnl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animate", ()=>animate);
parcelHelpers.export(exports, "createScopedAnimate", ()=>createScopedAnimate);
var _groupMjs = require("../../../../../motion-dom/dist/es/animation/controls/Group.mjs");
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _sequenceMjs = require("./sequence.mjs");
var _subjectMjs = require("./subject.mjs");
function isSequence(value) {
    return Array.isArray(value) && value.some(Array.isArray);
}
/**
 * Creates an animation function that is optionally scoped
 * to a specific element.
 */ function createScopedAnimate(scope) {
    /**
     * Implementation
     */ function scopedAnimate(subjectOrSequence, optionsOrKeyframes, options) {
        let animations = [];
        if (isSequence(subjectOrSequence)) animations = (0, _sequenceMjs.animateSequence)(subjectOrSequence, optionsOrKeyframes, scope);
        else animations = (0, _subjectMjs.animateSubject)(subjectOrSequence, optionsOrKeyframes, options, scope);
        const animation = new (0, _groupMjs.GroupPlaybackControls)(animations);
        if (scope) scope.animations.push(animation);
        return animation;
    }
    return scopedAnimate;
}
const animate = createScopedAnimate();

},{"../../../../../motion-dom/dist/es/animation/controls/Group.mjs":"acj7e","../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","./sequence.mjs":"2nhoh","./subject.mjs":"3FgVz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"acj7e":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GroupPlaybackControls", ()=>GroupPlaybackControls);
var _baseGroupMjs = require("./BaseGroup.mjs");
/**
 * TODO: This is a temporary class to support the legacy
 * thennable API
 */ class GroupPlaybackControls extends (0, _baseGroupMjs.BaseGroupPlaybackControls) {
    then(onResolve, onReject) {
        return Promise.all(this.animations).then(onResolve).catch(onReject);
    }
}

},{"./BaseGroup.mjs":"jtX5m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jtX5m":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseGroupPlaybackControls", ()=>BaseGroupPlaybackControls);
var _scrollTimelineMjs = require("../../utils/supports/scroll-timeline.mjs");
class BaseGroupPlaybackControls {
    constructor(animations){
        // Bound to accomodate common `return animation.stop` pattern
        this.stop = ()=>this.runAll("stop");
        this.animations = animations.filter(Boolean);
    }
    get finished() {
        // Support for new finished Promise and legacy thennable API
        return Promise.all(this.animations.map((animation)=>"finished" in animation ? animation.finished : animation));
    }
    /**
     * TODO: Filter out cancelled or stopped animations before returning
     */ getAll(propName) {
        return this.animations[0][propName];
    }
    setAll(propName, newValue) {
        for(let i = 0; i < this.animations.length; i++)this.animations[i][propName] = newValue;
    }
    attachTimeline(timeline, fallback) {
        const subscriptions = this.animations.map((animation)=>{
            if ((0, _scrollTimelineMjs.supportsScrollTimeline)() && animation.attachTimeline) return animation.attachTimeline(timeline);
            else if (typeof fallback === "function") return fallback(animation);
        });
        return ()=>{
            subscriptions.forEach((cancel, i)=>{
                cancel && cancel();
                this.animations[i].stop();
            });
        };
    }
    get time() {
        return this.getAll("time");
    }
    set time(time) {
        this.setAll("time", time);
    }
    get speed() {
        return this.getAll("speed");
    }
    set speed(speed) {
        this.setAll("speed", speed);
    }
    get startTime() {
        return this.getAll("startTime");
    }
    get duration() {
        let max = 0;
        for(let i = 0; i < this.animations.length; i++)max = Math.max(max, this.animations[i].duration);
        return max;
    }
    runAll(methodName) {
        this.animations.forEach((controls)=>controls[methodName]());
    }
    flatten() {
        this.runAll("flatten");
    }
    play() {
        this.runAll("play");
    }
    pause() {
        this.runAll("pause");
    }
    cancel() {
        this.runAll("cancel");
    }
    complete() {
        this.runAll("complete");
    }
}

},{"../../utils/supports/scroll-timeline.mjs":"9AQ9Z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9AQ9Z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsScrollTimeline", ()=>supportsScrollTimeline);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _memoMjs = require("../../../../../motion-utils/dist/es/memo.mjs");
const supportsScrollTimeline = (0, _memoMjs.memo)(()=>window.ScrollTimeline !== undefined);

},{"../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../motion-utils/dist/es/memo.mjs":"9brTq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9brTq":[function(require,module,exports,__globalThis) {
/*#__NO_SIDE_EFFECTS__*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "memo", ()=>memo);
function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2nhoh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateSequence", ()=>animateSequence);
var _indexMjs = require("../generators/spring/index.mjs");
var _createMjs = require("../sequence/create.mjs");
var _subjectMjs = require("./subject.mjs");
function animateSequence(sequence, options, scope) {
    const animations = [];
    const animationDefinitions = (0, _createMjs.createAnimationsFromSequence)(sequence, options, scope, {
        spring: (0, _indexMjs.spring)
    });
    animationDefinitions.forEach(({ keyframes, transition }, subject)=>{
        animations.push(...(0, _subjectMjs.animateSubject)(subject, keyframes, transition));
    });
    return animations;
}

},{"../generators/spring/index.mjs":"dL8lv","../sequence/create.mjs":"1ZblQ","./subject.mjs":"3FgVz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dL8lv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "spring", ()=>spring);
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _timeConversionMjs = require("../../../../../../motion-utils/dist/es/time-conversion.mjs");
var _calcDurationMjs = require("../../../../../../motion-dom/dist/es/animation/generators/utils/calc-duration.mjs");
var _linearMjs = require("../../../../../../motion-dom/dist/es/animation/waapi/utils/linear.mjs");
var _clampMjs = require("../../../utils/clamp.mjs");
var _velocityMjs = require("../utils/velocity.mjs");
var _defaultsMjs = require("./defaults.mjs");
var _findMjs = require("./find.mjs");
const durationKeys = [
    "duration",
    "bounce"
];
const physicsKeys = [
    "stiffness",
    "damping",
    "mass"
];
function isSpringType(options, keys) {
    return keys.some((key)=>options[key] !== undefined);
}
function getSpringOptions(options) {
    let springOptions = {
        velocity: (0, _defaultsMjs.springDefaults).velocity,
        stiffness: (0, _defaultsMjs.springDefaults).stiffness,
        damping: (0, _defaultsMjs.springDefaults).damping,
        mass: (0, _defaultsMjs.springDefaults).mass,
        isResolvedFromDuration: false,
        ...options
    };
    // stiffness/damping/mass overrides duration/bounce
    if (!isSpringType(options, physicsKeys) && isSpringType(options, durationKeys)) {
        if (options.visualDuration) {
            const visualDuration = options.visualDuration;
            const root = 2 * Math.PI / (visualDuration * 1.2);
            const stiffness = root * root;
            const damping = 2 * (0, _clampMjs.clamp)(0.05, 1, 1 - (options.bounce || 0)) * Math.sqrt(stiffness);
            springOptions = {
                ...springOptions,
                mass: (0, _defaultsMjs.springDefaults).mass,
                stiffness,
                damping
            };
        } else {
            const derived = (0, _findMjs.findSpring)(options);
            springOptions = {
                ...springOptions,
                ...derived,
                mass: (0, _defaultsMjs.springDefaults).mass
            };
            springOptions.isResolvedFromDuration = true;
        }
    }
    return springOptions;
}
function spring(optionsOrVisualDuration = (0, _defaultsMjs.springDefaults).visualDuration, bounce = (0, _defaultsMjs.springDefaults).bounce) {
    const options = typeof optionsOrVisualDuration !== "object" ? {
        visualDuration: optionsOrVisualDuration,
        keyframes: [
            0,
            1
        ],
        bounce
    } : optionsOrVisualDuration;
    let { restSpeed, restDelta } = options;
    const origin = options.keyframes[0];
    const target = options.keyframes[options.keyframes.length - 1];
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */ const state = {
        done: false,
        value: origin
    };
    const { stiffness, damping, mass, duration, velocity, isResolvedFromDuration } = getSpringOptions({
        ...options,
        velocity: -(0, _timeConversionMjs.millisecondsToSeconds)(options.velocity || 0)
    });
    const initialVelocity = velocity || 0.0;
    const dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
    const initialDelta = target - origin;
    const undampedAngularFreq = (0, _timeConversionMjs.millisecondsToSeconds)(Math.sqrt(stiffness / mass));
    /**
     * If we're working on a granular scale, use smaller defaults for determining
     * when the spring is finished.
     *
     * These defaults have been selected emprically based on what strikes a good
     * ratio between feeling good and finishing as soon as changes are imperceptible.
     */ const isGranularScale = Math.abs(initialDelta) < 5;
    restSpeed || (restSpeed = isGranularScale ? (0, _defaultsMjs.springDefaults).restSpeed.granular : (0, _defaultsMjs.springDefaults).restSpeed.default);
    restDelta || (restDelta = isGranularScale ? (0, _defaultsMjs.springDefaults).restDelta.granular : (0, _defaultsMjs.springDefaults).restDelta.default);
    let resolveSpring;
    if (dampingRatio < 1) {
        const angularFreq = (0, _findMjs.calcAngularFreq)(undampedAngularFreq, dampingRatio);
        // Underdamped spring
        resolveSpring = (t)=>{
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) / angularFreq * Math.sin(angularFreq * t) + initialDelta * Math.cos(angularFreq * t));
        };
    } else if (dampingRatio === 1) // Critically damped spring
    resolveSpring = (t)=>target - Math.exp(-undampedAngularFreq * t) * (initialDelta + (initialVelocity + undampedAngularFreq * initialDelta) * t);
    else {
        // Overdamped spring
        const dampedAngularFreq = undampedAngularFreq * Math.sqrt(dampingRatio * dampingRatio - 1);
        resolveSpring = (t)=>{
            const envelope = Math.exp(-dampingRatio * undampedAngularFreq * t);
            // When performing sinh or cosh values can hit Infinity so we cap them here
            const freqForT = Math.min(dampedAngularFreq * t, 300);
            return target - envelope * ((initialVelocity + dampingRatio * undampedAngularFreq * initialDelta) * Math.sinh(freqForT) + dampedAngularFreq * initialDelta * Math.cosh(freqForT)) / dampedAngularFreq;
        };
    }
    const generator = {
        calculatedDuration: isResolvedFromDuration ? duration || null : null,
        next: (t)=>{
            const current = resolveSpring(t);
            if (!isResolvedFromDuration) {
                let currentVelocity = 0.0;
                /**
                 * We only need to calculate velocity for under-damped springs
                 * as over- and critically-damped springs can't overshoot, so
                 * checking only for displacement is enough.
                 */ if (dampingRatio < 1) currentVelocity = t === 0 ? (0, _timeConversionMjs.secondsToMilliseconds)(initialVelocity) : (0, _velocityMjs.calcGeneratorVelocity)(resolveSpring, t, current);
                const isBelowVelocityThreshold = Math.abs(currentVelocity) <= restSpeed;
                const isBelowDisplacementThreshold = Math.abs(target - current) <= restDelta;
                state.done = isBelowVelocityThreshold && isBelowDisplacementThreshold;
            } else state.done = t >= duration;
            state.value = state.done ? target : current;
            return state;
        },
        toString: ()=>{
            const calculatedDuration = Math.min((0, _calcDurationMjs.calcGeneratorDuration)(generator), (0, _calcDurationMjs.maxGeneratorDuration));
            const easing = (0, _linearMjs.generateLinearEasing)((progress)=>generator.next(calculatedDuration * progress).value, calculatedDuration, 30);
            return calculatedDuration + "ms " + easing;
        }
    };
    return generator;
}

},{"../../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../../motion-utils/dist/es/time-conversion.mjs":"1wf1y","../../../../../../motion-dom/dist/es/animation/generators/utils/calc-duration.mjs":"5s6BJ","../../../../../../motion-dom/dist/es/animation/waapi/utils/linear.mjs":"eKwws","../../../utils/clamp.mjs":"6850m","../utils/velocity.mjs":"nIjPY","./defaults.mjs":"bHn4z","./find.mjs":"5JHhm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1wf1y":[function(require,module,exports,__globalThis) {
/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "millisecondsToSeconds", ()=>millisecondsToSeconds);
parcelHelpers.export(exports, "secondsToMilliseconds", ()=>secondsToMilliseconds);
const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5s6BJ":[function(require,module,exports,__globalThis) {
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcGeneratorDuration", ()=>calcGeneratorDuration);
parcelHelpers.export(exports, "maxGeneratorDuration", ()=>maxGeneratorDuration);
const maxGeneratorDuration = 20000;
function calcGeneratorDuration(generator) {
    let duration = 0;
    const timeStep = 50;
    let state = generator.next(duration);
    while(!state.done && duration < maxGeneratorDuration){
        duration += timeStep;
        state = generator.next(duration);
    }
    return duration >= maxGeneratorDuration ? Infinity : duration;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eKwws":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generateLinearEasing", ()=>generateLinearEasing);
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _progressMjs = require("../../../../../../motion-utils/dist/es/progress.mjs");
const generateLinearEasing = (easing, duration, resolution = 10 // as milliseconds
)=>{
    let points = "";
    const numPoints = Math.max(Math.round(duration / resolution), 2);
    for(let i = 0; i < numPoints; i++)points += easing((0, _progressMjs.progress)(0, numPoints - 1, i)) + ", ";
    return `linear(${points.substring(0, points.length - 2)})`;
};

},{"../../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../../motion-utils/dist/es/progress.mjs":"lOsdJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6850m":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clamp", ()=>clamp);
const clamp = (min, max, v)=>{
    if (v > max) return max;
    if (v < min) return min;
    return v;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"nIjPY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcGeneratorVelocity", ()=>calcGeneratorVelocity);
var _velocityPerSecondMjs = require("../../../utils/velocity-per-second.mjs");
const velocitySampleDuration = 5; // ms
function calcGeneratorVelocity(resolveValue, t, current) {
    const prevT = Math.max(t - velocitySampleDuration, 0);
    return (0, _velocityPerSecondMjs.velocityPerSecond)(current - resolveValue(prevT), t - prevT);
}

},{"../../../utils/velocity-per-second.mjs":"kKo4B","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kKo4B":[function(require,module,exports,__globalThis) {
/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "velocityPerSecond", ()=>velocityPerSecond);
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bHn4z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "springDefaults", ()=>springDefaults);
const springDefaults = {
    // Default spring physics
    stiffness: 100,
    damping: 10,
    mass: 1.0,
    velocity: 0.0,
    // Default duration/bounce-based options
    duration: 800,
    bounce: 0.3,
    visualDuration: 0.3,
    // Rest thresholds
    restSpeed: {
        granular: 0.01,
        default: 2
    },
    restDelta: {
        granular: 0.005,
        default: 0.5
    },
    // Limits
    minDuration: 0.01,
    maxDuration: 10.0,
    minDamping: 0.05,
    maxDamping: 1
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5JHhm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcAngularFreq", ()=>calcAngularFreq);
parcelHelpers.export(exports, "findSpring", ()=>findSpring);
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _timeConversionMjs = require("../../../../../../motion-utils/dist/es/time-conversion.mjs");
var _clampMjs = require("../../../utils/clamp.mjs");
var _defaultsMjs = require("./defaults.mjs");
const safeMin = 0.001;
function findSpring({ duration = (0, _defaultsMjs.springDefaults).duration, bounce = (0, _defaultsMjs.springDefaults).bounce, velocity = (0, _defaultsMjs.springDefaults).velocity, mass = (0, _defaultsMjs.springDefaults).mass }) {
    let envelope;
    let derivative;
    (0, _errorsMjs.warning)(duration <= (0, _timeConversionMjs.secondsToMilliseconds)((0, _defaultsMjs.springDefaults).maxDuration), "Spring duration must be 10 seconds or less");
    let dampingRatio = 1 - bounce;
    /**
     * Restrict dampingRatio and duration to within acceptable ranges.
     */ dampingRatio = (0, _clampMjs.clamp)((0, _defaultsMjs.springDefaults).minDamping, (0, _defaultsMjs.springDefaults).maxDamping, dampingRatio);
    duration = (0, _clampMjs.clamp)((0, _defaultsMjs.springDefaults).minDuration, (0, _defaultsMjs.springDefaults).maxDuration, (0, _timeConversionMjs.millisecondsToSeconds)(duration));
    if (dampingRatio < 1) {
        /**
         * Underdamped spring
         */ envelope = (undampedFreq)=>{
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const a = exponentialDecay - velocity;
            const b = calcAngularFreq(undampedFreq, dampingRatio);
            const c = Math.exp(-delta);
            return safeMin - a / b * c;
        };
        derivative = (undampedFreq)=>{
            const exponentialDecay = undampedFreq * dampingRatio;
            const delta = exponentialDecay * duration;
            const d = delta * velocity + velocity;
            const e = Math.pow(dampingRatio, 2) * Math.pow(undampedFreq, 2) * duration;
            const f = Math.exp(-delta);
            const g = calcAngularFreq(Math.pow(undampedFreq, 2), dampingRatio);
            const factor = -envelope(undampedFreq) + safeMin > 0 ? -1 : 1;
            return factor * ((d - e) * f) / g;
        };
    } else {
        /**
         * Critically-damped spring
         */ envelope = (undampedFreq)=>{
            const a = Math.exp(-undampedFreq * duration);
            const b = (undampedFreq - velocity) * duration + 1;
            return -safeMin + a * b;
        };
        derivative = (undampedFreq)=>{
            const a = Math.exp(-undampedFreq * duration);
            const b = (velocity - undampedFreq) * (duration * duration);
            return a * b;
        };
    }
    const initialGuess = 5 / duration;
    const undampedFreq = approximateRoot(envelope, derivative, initialGuess);
    duration = (0, _timeConversionMjs.secondsToMilliseconds)(duration);
    if (isNaN(undampedFreq)) return {
        stiffness: (0, _defaultsMjs.springDefaults).stiffness,
        damping: (0, _defaultsMjs.springDefaults).damping,
        duration
    };
    else {
        const stiffness = Math.pow(undampedFreq, 2) * mass;
        return {
            stiffness,
            damping: dampingRatio * 2 * Math.sqrt(mass * stiffness),
            duration
        };
    }
}
const rootIterations = 12;
function approximateRoot(envelope, derivative, initialGuess) {
    let result = initialGuess;
    for(let i = 1; i < rootIterations; i++)result = result - envelope(result) / derivative(result);
    return result;
}
function calcAngularFreq(undampedFreq, dampingRatio) {
    return undampedFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
}

},{"../../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../../motion-utils/dist/es/time-conversion.mjs":"1wf1y","../../../utils/clamp.mjs":"6850m","./defaults.mjs":"bHn4z","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ZblQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAnimationsFromSequence", ()=>createAnimationsFromSequence);
parcelHelpers.export(exports, "getValueTransition", ()=>getValueTransition);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _progressMjs = require("../../../../../motion-utils/dist/es/progress.mjs");
var _timeConversionMjs = require("../../../../../motion-utils/dist/es/time-conversion.mjs");
var _createGeneratorEasingMjs = require("../../../../../motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs");
var _isGeneratorMjs = require("../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs");
var _getEasingForSegmentMjs = require("../../easing/utils/get-easing-for-segment.mjs");
var _defaultMjs = require("../../utils/offsets/default.mjs");
var _fillMjs = require("../../utils/offsets/fill.mjs");
var _isMotionValueMjs = require("../../value/utils/is-motion-value.mjs");
var _resolveSubjectsMjs = require("../animate/resolve-subjects.mjs");
var _calcRepeatDurationMjs = require("./utils/calc-repeat-duration.mjs");
var _calcTimeMjs = require("./utils/calc-time.mjs");
var _editMjs = require("./utils/edit.mjs");
var _normalizeTimesMjs = require("./utils/normalize-times.mjs");
var _sortMjs = require("./utils/sort.mjs");
const defaultSegmentEasing = "easeInOut";
const MAX_REPEAT = 20;
function createAnimationsFromSequence(sequence, { defaultTransition = {}, ...sequenceTransition } = {}, scope, generators) {
    const defaultDuration = defaultTransition.duration || 0.3;
    const animationDefinitions = new Map();
    const sequences = new Map();
    const elementCache = {};
    const timeLabels = new Map();
    let prevTime = 0;
    let currentTime = 0;
    let totalDuration = 0;
    /**
     * Build the timeline by mapping over the sequence array and converting
     * the definitions into keyframes and offsets with absolute time values.
     * These will later get converted into relative offsets in a second pass.
     */ for(let i = 0; i < sequence.length; i++){
        const segment = sequence[i];
        /**
         * If this is a timeline label, mark it and skip the rest of this iteration.
         */ if (typeof segment === "string") {
            timeLabels.set(segment, currentTime);
            continue;
        } else if (!Array.isArray(segment)) {
            timeLabels.set(segment.name, (0, _calcTimeMjs.calcNextTime)(currentTime, segment.at, prevTime, timeLabels));
            continue;
        }
        let [subject, keyframes, transition = {}] = segment;
        /**
         * If a relative or absolute time value has been specified we need to resolve
         * it in relation to the currentTime.
         */ if (transition.at !== undefined) currentTime = (0, _calcTimeMjs.calcNextTime)(currentTime, transition.at, prevTime, timeLabels);
        /**
         * Keep track of the maximum duration in this definition. This will be
         * applied to currentTime once the definition has been parsed.
         */ let maxDuration = 0;
        const resolveValueSequence = (valueKeyframes, valueTransition, valueSequence, elementIndex = 0, numSubjects = 0)=>{
            const valueKeyframesAsList = keyframesAsList(valueKeyframes);
            const { delay = 0, times = (0, _defaultMjs.defaultOffset)(valueKeyframesAsList), type = "keyframes", repeat, repeatType, repeatDelay = 0, ...remainingTransition } = valueTransition;
            let { ease = defaultTransition.ease || "easeOut", duration } = valueTransition;
            /**
             * Resolve stagger() if defined.
             */ const calculatedDelay = typeof delay === "function" ? delay(elementIndex, numSubjects) : delay;
            /**
             * If this animation should and can use a spring, generate a spring easing function.
             */ const numKeyframes = valueKeyframesAsList.length;
            const createGenerator = (0, _isGeneratorMjs.isGenerator)(type) ? type : generators === null || generators === void 0 ? void 0 : generators[type];
            if (numKeyframes <= 2 && createGenerator) {
                /**
                 * As we're creating an easing function from a spring,
                 * ideally we want to generate it using the real distance
                 * between the two keyframes. However this isn't always
                 * possible - in these situations we use 0-100.
                 */ let absoluteDelta = 100;
                if (numKeyframes === 2 && isNumberKeyframesArray(valueKeyframesAsList)) {
                    const delta = valueKeyframesAsList[1] - valueKeyframesAsList[0];
                    absoluteDelta = Math.abs(delta);
                }
                const springTransition = {
                    ...remainingTransition
                };
                if (duration !== undefined) springTransition.duration = (0, _timeConversionMjs.secondsToMilliseconds)(duration);
                const springEasing = (0, _createGeneratorEasingMjs.createGeneratorEasing)(springTransition, absoluteDelta, createGenerator);
                ease = springEasing.ease;
                duration = springEasing.duration;
            }
            duration !== null && duration !== void 0 ? duration : duration = defaultDuration;
            const startTime = currentTime + calculatedDelay;
            /**
             * If there's only one time offset of 0, fill in a second with length 1
             */ if (times.length === 1 && times[0] === 0) times[1] = 1;
            /**
             * Fill out if offset if fewer offsets than keyframes
             */ const remainder = times.length - valueKeyframesAsList.length;
            remainder > 0 && (0, _fillMjs.fillOffset)(times, remainder);
            /**
             * If only one value has been set, ie [1], push a null to the start of
             * the keyframe array. This will let us mark a keyframe at this point
             * that will later be hydrated with the previous value.
             */ valueKeyframesAsList.length === 1 && valueKeyframesAsList.unshift(null);
            /**
             * Handle repeat options
             */ if (repeat) {
                (0, _errorsMjs.invariant)(repeat < MAX_REPEAT, "Repeat count too high, must be less than 20");
                duration = (0, _calcRepeatDurationMjs.calculateRepeatDuration)(duration, repeat);
                const originalKeyframes = [
                    ...valueKeyframesAsList
                ];
                const originalTimes = [
                    ...times
                ];
                ease = Array.isArray(ease) ? [
                    ...ease
                ] : [
                    ease
                ];
                const originalEase = [
                    ...ease
                ];
                for(let repeatIndex = 0; repeatIndex < repeat; repeatIndex++){
                    valueKeyframesAsList.push(...originalKeyframes);
                    for(let keyframeIndex = 0; keyframeIndex < originalKeyframes.length; keyframeIndex++){
                        times.push(originalTimes[keyframeIndex] + (repeatIndex + 1));
                        ease.push(keyframeIndex === 0 ? "linear" : (0, _getEasingForSegmentMjs.getEasingForSegment)(originalEase, keyframeIndex - 1));
                    }
                }
                (0, _normalizeTimesMjs.normalizeTimes)(times, repeat);
            }
            const targetTime = startTime + duration;
            /**
             * Add keyframes, mapping offsets to absolute time.
             */ (0, _editMjs.addKeyframes)(valueSequence, valueKeyframesAsList, ease, times, startTime, targetTime);
            maxDuration = Math.max(calculatedDelay + duration, maxDuration);
            totalDuration = Math.max(targetTime, totalDuration);
        };
        if ((0, _isMotionValueMjs.isMotionValue)(subject)) {
            const subjectSequence = getSubjectSequence(subject, sequences);
            resolveValueSequence(keyframes, transition, getValueSequence("default", subjectSequence));
        } else {
            const subjects = (0, _resolveSubjectsMjs.resolveSubjects)(subject, keyframes, scope, elementCache);
            const numSubjects = subjects.length;
            /**
             * For every element in this segment, process the defined values.
             */ for(let subjectIndex = 0; subjectIndex < numSubjects; subjectIndex++){
                /**
                 * Cast necessary, but we know these are of this type
                 */ keyframes;
                transition;
                const thisSubject = subjects[subjectIndex];
                const subjectSequence = getSubjectSequence(thisSubject, sequences);
                for(const key in keyframes)resolveValueSequence(keyframes[key], getValueTransition(transition, key), getValueSequence(key, subjectSequence), subjectIndex, numSubjects);
            }
        }
        prevTime = currentTime;
        currentTime += maxDuration;
    }
    /**
     * For every element and value combination create a new animation.
     */ sequences.forEach((valueSequences, element)=>{
        for(const key in valueSequences){
            const valueSequence = valueSequences[key];
            /**
             * Arrange all the keyframes in ascending time order.
             */ valueSequence.sort((0, _sortMjs.compareByTime));
            const keyframes = [];
            const valueOffset = [];
            const valueEasing = [];
            /**
             * For each keyframe, translate absolute times into
             * relative offsets based on the total duration of the timeline.
             */ for(let i = 0; i < valueSequence.length; i++){
                const { at, value, easing } = valueSequence[i];
                keyframes.push(value);
                valueOffset.push((0, _progressMjs.progress)(0, totalDuration, at));
                valueEasing.push(easing || "easeOut");
            }
            /**
             * If the first keyframe doesn't land on offset: 0
             * provide one by duplicating the initial keyframe. This ensures
             * it snaps to the first keyframe when the animation starts.
             */ if (valueOffset[0] !== 0) {
                valueOffset.unshift(0);
                keyframes.unshift(keyframes[0]);
                valueEasing.unshift(defaultSegmentEasing);
            }
            /**
             * If the last keyframe doesn't land on offset: 1
             * provide one with a null wildcard value. This will ensure it
             * stays static until the end of the animation.
             */ if (valueOffset[valueOffset.length - 1] !== 1) {
                valueOffset.push(1);
                keyframes.push(null);
            }
            if (!animationDefinitions.has(element)) animationDefinitions.set(element, {
                keyframes: {},
                transition: {}
            });
            const definition = animationDefinitions.get(element);
            definition.keyframes[key] = keyframes;
            definition.transition[key] = {
                ...defaultTransition,
                duration: totalDuration,
                ease: valueEasing,
                times: valueOffset,
                ...sequenceTransition
            };
        }
    });
    return animationDefinitions;
}
function getSubjectSequence(subject, sequences) {
    !sequences.has(subject) && sequences.set(subject, {});
    return sequences.get(subject);
}
function getValueSequence(name, sequences) {
    if (!sequences[name]) sequences[name] = [];
    return sequences[name];
}
function keyframesAsList(keyframes) {
    return Array.isArray(keyframes) ? keyframes : [
        keyframes
    ];
}
function getValueTransition(transition, key) {
    return transition && transition[key] ? {
        ...transition,
        ...transition[key]
    } : {
        ...transition
    };
}
const isNumber = (keyframe)=>typeof keyframe === "number";
const isNumberKeyframesArray = (keyframes)=>keyframes.every(isNumber);

},{"../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../motion-utils/dist/es/progress.mjs":"lOsdJ","../../../../../motion-utils/dist/es/time-conversion.mjs":"1wf1y","../../../../../motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs":"g5eNK","../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs":"fcH7M","../../easing/utils/get-easing-for-segment.mjs":"cg3ao","../../utils/offsets/default.mjs":"8go8U","../../utils/offsets/fill.mjs":"cBXG9","../../value/utils/is-motion-value.mjs":"fTAlC","../animate/resolve-subjects.mjs":"cLK67","./utils/calc-repeat-duration.mjs":"821lB","./utils/calc-time.mjs":"csoM8","./utils/edit.mjs":"31gE6","./utils/normalize-times.mjs":"fJqYE","./utils/sort.mjs":"kZEnk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g5eNK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createGeneratorEasing", ()=>createGeneratorEasing);
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _timeConversionMjs = require("../../../../../../motion-utils/dist/es/time-conversion.mjs");
var _calcDurationMjs = require("./calc-duration.mjs");
/**
 * Create a progress => progress easing function from a generator.
 */ function createGeneratorEasing(options, scale = 100, createGenerator) {
    const generator = createGenerator({
        ...options,
        keyframes: [
            0,
            scale
        ]
    });
    const duration = Math.min((0, _calcDurationMjs.calcGeneratorDuration)(generator), (0, _calcDurationMjs.maxGeneratorDuration));
    return {
        type: "keyframes",
        ease: (progress)=>{
            return generator.next(duration * progress).value / scale;
        },
        duration: (0, _timeConversionMjs.millisecondsToSeconds)(duration)
    };
}

},{"../../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../../motion-utils/dist/es/time-conversion.mjs":"1wf1y","./calc-duration.mjs":"5s6BJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fcH7M":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isGenerator", ()=>isGenerator);
function isGenerator(type) {
    return typeof type === "function";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cg3ao":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getEasingForSegment", ()=>getEasingForSegment);
var _wrapMjs = require("../../utils/wrap.mjs");
var _isEasingArrayMjs = require("./is-easing-array.mjs");
function getEasingForSegment(easing, i) {
    return (0, _isEasingArrayMjs.isEasingArray)(easing) ? easing[(0, _wrapMjs.wrap)(0, easing.length, i)] : easing;
}

},{"../../utils/wrap.mjs":"7m3Kw","./is-easing-array.mjs":"ebEFF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7m3Kw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wrap", ()=>wrap);
const wrap = (min, max, v)=>{
    const rangeSize = max - min;
    return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ebEFF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isEasingArray", ()=>isEasingArray);
const isEasingArray = (ease)=>{
    return Array.isArray(ease) && typeof ease[0] !== "number";
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8go8U":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultOffset", ()=>defaultOffset);
var _fillMjs = require("./fill.mjs");
function defaultOffset(arr) {
    const offset = [
        0
    ];
    (0, _fillMjs.fillOffset)(offset, arr.length - 1);
    return offset;
}

},{"./fill.mjs":"cBXG9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cBXG9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fillOffset", ()=>fillOffset);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _progressMjs = require("../../../../../motion-utils/dist/es/progress.mjs");
var _numberMjs = require("../mix/number.mjs");
function fillOffset(offset, remaining) {
    const min = offset[offset.length - 1];
    for(let i = 1; i <= remaining; i++){
        const offsetProgress = (0, _progressMjs.progress)(0, remaining, i);
        offset.push((0, _numberMjs.mixNumber)(min, 1, offsetProgress));
    }
}

},{"../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../motion-utils/dist/es/progress.mjs":"lOsdJ","../mix/number.mjs":"eTqUz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eTqUz":[function(require,module,exports,__globalThis) {
/*
  Value in range from progress

  Given a lower limit and an upper limit, we return the value within
  that range as expressed by progress (usually a number from 0 to 1)

  So progress = 0.5 would change

  from -------- to

  to

  from ---- to

  E.g. from = 10, to = 20, progress = 0.5 => 15

  @param [number]: Lower limit of range
  @param [number]: Upper limit of range
  @param [number]: The progress between lower and upper limits expressed 0-1
  @return [number]: Value as calculated from progress within range (not limited within range)
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mixNumber", ()=>mixNumber);
const mixNumber = (from, to, progress)=>{
    return from + (to - from) * progress;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fTAlC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isMotionValue", ()=>isMotionValue);
const isMotionValue = (value)=>Boolean(value && value.getVelocity);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cLK67":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveSubjects", ()=>resolveSubjects);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _resolveElementsMjs = require("../../../../../motion-dom/dist/es/utils/resolve-elements.mjs");
var _isDomKeyframesMjs = require("../utils/is-dom-keyframes.mjs");
function resolveSubjects(subject, keyframes, scope, selectorCache) {
    if (typeof subject === "string" && (0, _isDomKeyframesMjs.isDOMKeyframes)(keyframes)) return (0, _resolveElementsMjs.resolveElements)(subject, scope, selectorCache);
    else if (subject instanceof NodeList) return Array.from(subject);
    else if (Array.isArray(subject)) return subject;
    else return [
        subject
    ];
}

},{"../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../motion-dom/dist/es/utils/resolve-elements.mjs":"2nFRq","../utils/is-dom-keyframes.mjs":"jiAsj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2nFRq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveElements", ()=>resolveElements);
function resolveElements(elementOrSelector, scope, selectorCache) {
    var _a;
    if (elementOrSelector instanceof Element) return [
        elementOrSelector
    ];
    else if (typeof elementOrSelector === "string") {
        let root = document;
        if (scope) // TODO: Refactor to utils package
        // invariant(
        //     Boolean(scope.current),
        //     "Scope provided, but no element detected."
        // )
        root = scope.current;
        const elements = (_a = selectorCache === null || selectorCache === void 0 ? void 0 : selectorCache[elementOrSelector]) !== null && _a !== void 0 ? _a : root.querySelectorAll(elementOrSelector);
        return elements ? Array.from(elements) : [];
    }
    return Array.from(elementOrSelector);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jiAsj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isDOMKeyframes", ()=>isDOMKeyframes);
function isDOMKeyframes(keyframes) {
    return typeof keyframes === "object" && !Array.isArray(keyframes);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"821lB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calculateRepeatDuration", ()=>calculateRepeatDuration);
function calculateRepeatDuration(duration, repeat, _repeatDelay) {
    return duration * (repeat + 1);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"csoM8":[function(require,module,exports,__globalThis) {
/**
 * Given a absolute or relative time definition and current/prev time state of the sequence,
 * calculate an absolute time for the next keyframes.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcNextTime", ()=>calcNextTime);
function calcNextTime(current, next, prev, labels) {
    var _a;
    if (typeof next === "number") return next;
    else if (next.startsWith("-") || next.startsWith("+")) return Math.max(0, current + parseFloat(next));
    else if (next === "<") return prev;
    else return (_a = labels.get(next)) !== null && _a !== void 0 ? _a : current;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"31gE6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addKeyframes", ()=>addKeyframes);
parcelHelpers.export(exports, "eraseKeyframes", ()=>eraseKeyframes);
var _getEasingForSegmentMjs = require("../../../easing/utils/get-easing-for-segment.mjs");
var _arrayMjs = require("../../../utils/array.mjs");
var _numberMjs = require("../../../utils/mix/number.mjs");
function eraseKeyframes(sequence, startTime, endTime) {
    for(let i = 0; i < sequence.length; i++){
        const keyframe = sequence[i];
        if (keyframe.at > startTime && keyframe.at < endTime) {
            (0, _arrayMjs.removeItem)(sequence, keyframe);
            // If we remove this item we have to push the pointer back one
            i--;
        }
    }
}
function addKeyframes(sequence, keyframes, easing, offset, startTime, endTime) {
    /**
     * Erase every existing value between currentTime and targetTime,
     * this will essentially splice this timeline into any currently
     * defined ones.
     */ eraseKeyframes(sequence, startTime, endTime);
    for(let i = 0; i < keyframes.length; i++)sequence.push({
        value: keyframes[i],
        at: (0, _numberMjs.mixNumber)(startTime, endTime, offset[i]),
        easing: (0, _getEasingForSegmentMjs.getEasingForSegment)(easing, i)
    });
}

},{"../../../easing/utils/get-easing-for-segment.mjs":"cg3ao","../../../utils/array.mjs":"cyaPX","../../../utils/mix/number.mjs":"eTqUz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cyaPX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addUniqueItem", ()=>addUniqueItem);
parcelHelpers.export(exports, "moveItem", ()=>moveItem);
parcelHelpers.export(exports, "removeItem", ()=>removeItem);
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fJqYE":[function(require,module,exports,__globalThis) {
/**
 * Take an array of times that represent repeated keyframes. For instance
 * if we have original times of [0, 0.5, 1] then our repeated times will
 * be [0, 0.5, 1, 1, 1.5, 2]. Loop over the times and scale them back
 * down to a 0-1 scale.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "normalizeTimes", ()=>normalizeTimes);
function normalizeTimes(times, repeat) {
    for(let i = 0; i < times.length; i++)times[i] = times[i] / (repeat + 1);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kZEnk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "compareByTime", ()=>compareByTime);
function compareByTime(a, b) {
    if (a.at === b.at) {
        if (a.value === null) return 1;
        if (b.value === null) return -1;
        return 0;
    } else return a.at - b.at;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3FgVz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateSubject", ()=>animateSubject);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _storeMjs = require("../../render/store.mjs");
var _isMotionValueMjs = require("../../value/utils/is-motion-value.mjs");
var _visualElementTargetMjs = require("../interfaces/visual-element-target.mjs");
var _createVisualElementMjs = require("../utils/create-visual-element.mjs");
var _isDomKeyframesMjs = require("../utils/is-dom-keyframes.mjs");
var _resolveSubjectsMjs = require("./resolve-subjects.mjs");
var _singleValueMjs = require("./single-value.mjs");
function isSingleValue(subject, keyframes) {
    return (0, _isMotionValueMjs.isMotionValue)(subject) || typeof subject === "number" || typeof subject === "string" && !(0, _isDomKeyframesMjs.isDOMKeyframes)(keyframes);
}
/**
 * Implementation
 */ function animateSubject(subject, keyframes, options, scope) {
    const animations = [];
    if (isSingleValue(subject, keyframes)) animations.push((0, _singleValueMjs.animateSingleValue)(subject, (0, _isDomKeyframesMjs.isDOMKeyframes)(keyframes) ? keyframes.default || keyframes : keyframes, options ? options.default || options : options));
    else {
        const subjects = (0, _resolveSubjectsMjs.resolveSubjects)(subject, keyframes, scope);
        const numSubjects = subjects.length;
        (0, _errorsMjs.invariant)(Boolean(numSubjects), "No valid elements provided.");
        for(let i = 0; i < numSubjects; i++){
            const thisSubject = subjects[i];
            const createVisualElement = thisSubject instanceof Element ? (0, _createVisualElementMjs.createDOMVisualElement) : (0, _createVisualElementMjs.createObjectVisualElement);
            if (!(0, _storeMjs.visualElementStore).has(thisSubject)) createVisualElement(thisSubject);
            const visualElement = (0, _storeMjs.visualElementStore).get(thisSubject);
            const transition = {
                ...options
            };
            /**
             * Resolve stagger function if provided.
             */ if ("delay" in transition && typeof transition.delay === "function") transition.delay = transition.delay(i, numSubjects);
            animations.push(...(0, _visualElementTargetMjs.animateTarget)(visualElement, {
                ...keyframes,
                transition
            }, {}));
        }
    }
    return animations;
}

},{"../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../render/store.mjs":"f7Acv","../../value/utils/is-motion-value.mjs":"fTAlC","../interfaces/visual-element-target.mjs":"1SPcL","../utils/create-visual-element.mjs":"6MvVM","../utils/is-dom-keyframes.mjs":"jiAsj","./resolve-subjects.mjs":"cLK67","./single-value.mjs":"3UTyV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f7Acv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "visualElementStore", ()=>visualElementStore);
const visualElementStore = new WeakMap();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1SPcL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateTarget", ()=>animateTarget);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _getValueTransitionMjs = require("../../../../../motion-dom/dist/es/animation/utils/get-value-transition.mjs");
var _keysPositionMjs = require("../../render/html/utils/keys-position.mjs");
var _settersMjs = require("../../render/utils/setters.mjs");
var _addWillChangeMjs = require("../../value/use-will-change/add-will-change.mjs");
var _getAppearIdMjs = require("../optimized-appear/get-appear-id.mjs");
var _motionValueMjs = require("./motion-value.mjs");
var _frameMjs = require("../../frameloop/frame.mjs");
/**
 * Decide whether we should block this animation. Previously, we achieved this
 * just by checking whether the key was listed in protectedKeys, but this
 * posed problems if an animation was triggered by afterChildren and protectedKeys
 * had been set to true in the meantime.
 */ function shouldBlockAnimation({ protectedKeys, needsAnimating }, key) {
    const shouldBlock = protectedKeys.hasOwnProperty(key) && needsAnimating[key] !== true;
    needsAnimating[key] = false;
    return shouldBlock;
}
function animateTarget(visualElement, targetAndTransition, { delay = 0, transitionOverride, type } = {}) {
    var _a;
    let { transition = visualElement.getDefaultTransition(), transitionEnd, ...target } = targetAndTransition;
    if (transitionOverride) transition = transitionOverride;
    const animations = [];
    const animationTypeState = type && visualElement.animationState && visualElement.animationState.getState()[type];
    for(const key in target){
        const value = visualElement.getValue(key, (_a = visualElement.latestValues[key]) !== null && _a !== void 0 ? _a : null);
        const valueTarget = target[key];
        if (valueTarget === undefined || animationTypeState && shouldBlockAnimation(animationTypeState, key)) continue;
        const valueTransition = {
            delay,
            ...(0, _getValueTransitionMjs.getValueTransition)(transition || {}, key)
        };
        /**
         * If this is the first time a value is being animated, check
         * to see if we're handling off from an existing animation.
         */ let isHandoff = false;
        if (window.MotionHandoffAnimation) {
            const appearId = (0, _getAppearIdMjs.getOptimisedAppearId)(visualElement);
            if (appearId) {
                const startTime = window.MotionHandoffAnimation(appearId, key, (0, _frameMjs.frame));
                if (startTime !== null) {
                    valueTransition.startTime = startTime;
                    isHandoff = true;
                }
            }
        }
        (0, _addWillChangeMjs.addValueToWillChange)(visualElement, key);
        value.start((0, _motionValueMjs.animateMotionValue)(key, value, valueTarget, visualElement.shouldReduceMotion && (0, _keysPositionMjs.positionalKeys).has(key) ? {
            type: false
        } : valueTransition, visualElement, isHandoff));
        const animation = value.animation;
        if (animation) animations.push(animation);
    }
    if (transitionEnd) Promise.all(animations).then(()=>{
        (0, _frameMjs.frame).update(()=>{
            transitionEnd && (0, _settersMjs.setTarget)(visualElement, transitionEnd);
        });
    });
    return animations;
}

},{"../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../motion-dom/dist/es/animation/utils/get-value-transition.mjs":"ati6m","../../render/html/utils/keys-position.mjs":"eyLzl","../../render/utils/setters.mjs":"ifXQk","../../value/use-will-change/add-will-change.mjs":"hhPXy","../optimized-appear/get-appear-id.mjs":"bMGg3","./motion-value.mjs":"4gNQx","../../frameloop/frame.mjs":"ioJ38","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ati6m":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getValueTransition", ()=>getValueTransition);
function getValueTransition(transition, key) {
    return transition ? transition[key] || transition["default"] || transition : undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eyLzl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "positionalKeys", ()=>positionalKeys);
var _keysTransformMjs = require("./keys-transform.mjs");
const positionalKeys = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...(0, _keysTransformMjs.transformPropOrder)
]);

},{"./keys-transform.mjs":"hFNpd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hFNpd":[function(require,module,exports,__globalThis) {
/**
 * Generate a list of every possible transform key.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transformPropOrder", ()=>transformPropOrder);
parcelHelpers.export(exports, "transformProps", ()=>transformProps);
const transformPropOrder = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY"
];
/**
 * A quick lookup for transform props.
 */ const transformProps = new Set(transformPropOrder);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ifXQk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setTarget", ()=>setTarget);
var _resolveValueMjs = require("../../utils/resolve-value.mjs");
var _indexMjs = require("../../value/index.mjs");
var _resolveDynamicVariantsMjs = require("./resolve-dynamic-variants.mjs");
/**
 * Set VisualElement's MotionValue, creating a new MotionValue for it if
 * it doesn't exist.
 */ function setMotionValue(visualElement, key, value) {
    if (visualElement.hasValue(key)) visualElement.getValue(key).set(value);
    else visualElement.addValue(key, (0, _indexMjs.motionValue)(value));
}
function setTarget(visualElement, definition) {
    const resolved = (0, _resolveDynamicVariantsMjs.resolveVariant)(visualElement, definition);
    let { transitionEnd = {}, transition = {}, ...target } = resolved || {};
    target = {
        ...target,
        ...transitionEnd
    };
    for(const key in target){
        const value = (0, _resolveValueMjs.resolveFinalValueInKeyframes)(target[key]);
        setMotionValue(visualElement, key, value);
    }
}

},{"../../utils/resolve-value.mjs":"3f1Cv","../../value/index.mjs":"795y8","./resolve-dynamic-variants.mjs":"kKGjo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3f1Cv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCustomValue", ()=>isCustomValue);
parcelHelpers.export(exports, "resolveFinalValueInKeyframes", ()=>resolveFinalValueInKeyframes);
var _isKeyframesTargetMjs = require("../animation/utils/is-keyframes-target.mjs");
const isCustomValue = (v)=>{
    return Boolean(v && typeof v === "object" && v.mix && v.toValue);
};
const resolveFinalValueInKeyframes = (v)=>{
    // TODO maybe throw if v.length - 1 is placeholder token?
    return (0, _isKeyframesTargetMjs.isKeyframesTarget)(v) ? v[v.length - 1] || 0 : v;
};

},{"../animation/utils/is-keyframes-target.mjs":"4TvD3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4TvD3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isKeyframesTarget", ()=>isKeyframesTarget);
const isKeyframesTarget = (v)=>{
    return Array.isArray(v);
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"795y8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionValue", ()=>MotionValue);
parcelHelpers.export(exports, "collectMotionValues", ()=>collectMotionValues);
parcelHelpers.export(exports, "motionValue", ()=>motionValue);
var _syncTimeMjs = require("../frameloop/sync-time.mjs");
var _subscriptionManagerMjs = require("../utils/subscription-manager.mjs");
var _velocityPerSecondMjs = require("../utils/velocity-per-second.mjs");
var _warnOnceMjs = require("../utils/warn-once.mjs");
var _frameMjs = require("../frameloop/frame.mjs");
/**
 * Maximum time between the value of two frames, beyond which we
 * assume the velocity has since been 0.
 */ const MAX_VELOCITY_DELTA = 30;
const isFloat = (value)=>{
    return !isNaN(parseFloat(value));
};
const collectMotionValues = {
    current: undefined
};
/**
 * `MotionValue` is used to track the state and velocity of motion values.
 *
 * @public
 */ class MotionValue {
    /**
     * @param init - The initiating value
     * @param config - Optional configuration options
     *
     * -  `transformer`: A function to transform incoming values with.
     *
     * @internal
     */ constructor(init, options = {}){
        /**
         * This will be replaced by the build step with the latest version number.
         * When MotionValues are provided to motion components, warn if versions are mixed.
         */ this.version = "12.0.11";
        /**
         * Tracks whether this value can output a velocity. Currently this is only true
         * if the value is numerical, but we might be able to widen the scope here and support
         * other value types.
         *
         * @internal
         */ this.canTrackVelocity = null;
        /**
         * An object containing a SubscriptionManager for each active event.
         */ this.events = {};
        this.updateAndNotify = (v, render = true)=>{
            const currentTime = (0, _syncTimeMjs.time).now();
            /**
             * If we're updating the value during another frame or eventloop
             * than the previous frame, then the we set the previous frame value
             * to current.
             */ if (this.updatedAt !== currentTime) this.setPrevFrameValue();
            this.prev = this.current;
            this.setCurrent(v);
            // Update update subscribers
            if (this.current !== this.prev && this.events.change) this.events.change.notify(this.current);
            // Update render subscribers
            if (render && this.events.renderRequest) this.events.renderRequest.notify(this.current);
        };
        this.hasAnimated = false;
        this.setCurrent(init);
        this.owner = options.owner;
    }
    setCurrent(current) {
        this.current = current;
        this.updatedAt = (0, _syncTimeMjs.time).now();
        if (this.canTrackVelocity === null && current !== undefined) this.canTrackVelocity = isFloat(this.current);
    }
    setPrevFrameValue(prevFrameValue = this.current) {
        this.prevFrameValue = prevFrameValue;
        this.prevUpdatedAt = this.updatedAt;
    }
    /**
     * Adds a function that will be notified when the `MotionValue` is updated.
     *
     * It returns a function that, when called, will cancel the subscription.
     *
     * When calling `onChange` inside a React component, it should be wrapped with the
     * `useEffect` hook. As it returns an unsubscribe function, this should be returned
     * from the `useEffect` function to ensure you don't add duplicate subscribers..
     *
     * ```jsx
     * export const MyComponent = () => {
     *   const x = useMotionValue(0)
     *   const y = useMotionValue(0)
     *   const opacity = useMotionValue(1)
     *
     *   useEffect(() => {
     *     function updateOpacity() {
     *       const maxXY = Math.max(x.get(), y.get())
     *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
     *       opacity.set(newOpacity)
     *     }
     *
     *     const unsubscribeX = x.on("change", updateOpacity)
     *     const unsubscribeY = y.on("change", updateOpacity)
     *
     *     return () => {
     *       unsubscribeX()
     *       unsubscribeY()
     *     }
     *   }, [])
     *
     *   return <motion.div style={{ x }} />
     * }
     * ```
     *
     * @param subscriber - A function that receives the latest value.
     * @returns A function that, when called, will cancel this subscription.
     *
     * @deprecated
     */ onChange(subscription) {
        (0, _warnOnceMjs.warnOnce)(false, `value.onChange(callback) is deprecated. Switch to value.on("change", callback).`);
        return this.on("change", subscription);
    }
    on(eventName, callback) {
        if (!this.events[eventName]) this.events[eventName] = new (0, _subscriptionManagerMjs.SubscriptionManager)();
        const unsubscribe = this.events[eventName].add(callback);
        if (eventName === "change") return ()=>{
            unsubscribe();
            /**
                 * If we have no more change listeners by the start
                 * of the next frame, stop active animations.
                 */ (0, _frameMjs.frame).read(()=>{
                if (!this.events.change.getSize()) this.stop();
            });
        };
        return unsubscribe;
    }
    clearListeners() {
        for(const eventManagers in this.events)this.events[eventManagers].clear();
    }
    /**
     * Attaches a passive effect to the `MotionValue`.
     *
     * @internal
     */ attach(passiveEffect, stopPassiveEffect) {
        this.passiveEffect = passiveEffect;
        this.stopPassiveEffect = stopPassiveEffect;
    }
    /**
     * Sets the state of the `MotionValue`.
     *
     * @remarks
     *
     * ```jsx
     * const x = useMotionValue(0)
     * x.set(10)
     * ```
     *
     * @param latest - Latest value to set.
     * @param render - Whether to notify render subscribers. Defaults to `true`
     *
     * @public
     */ set(v, render = true) {
        if (!render || !this.passiveEffect) this.updateAndNotify(v, render);
        else this.passiveEffect(v, this.updateAndNotify);
    }
    setWithVelocity(prev, current, delta) {
        this.set(current);
        this.prev = undefined;
        this.prevFrameValue = prev;
        this.prevUpdatedAt = this.updatedAt - delta;
    }
    /**
     * Set the state of the `MotionValue`, stopping any active animations,
     * effects, and resets velocity to `0`.
     */ jump(v, endAnimation = true) {
        this.updateAndNotify(v);
        this.prev = v;
        this.prevUpdatedAt = this.prevFrameValue = undefined;
        endAnimation && this.stop();
        if (this.stopPassiveEffect) this.stopPassiveEffect();
    }
    /**
     * Returns the latest state of `MotionValue`
     *
     * @returns - The latest state of `MotionValue`
     *
     * @public
     */ get() {
        if (collectMotionValues.current) collectMotionValues.current.push(this);
        return this.current;
    }
    /**
     * @public
     */ getPrevious() {
        return this.prev;
    }
    /**
     * Returns the latest velocity of `MotionValue`
     *
     * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
     *
     * @public
     */ getVelocity() {
        const currentTime = (0, _syncTimeMjs.time).now();
        if (!this.canTrackVelocity || this.prevFrameValue === undefined || currentTime - this.updatedAt > MAX_VELOCITY_DELTA) return 0;
        const delta = Math.min(this.updatedAt - this.prevUpdatedAt, MAX_VELOCITY_DELTA);
        // Casts because of parseFloat's poor typing
        return (0, _velocityPerSecondMjs.velocityPerSecond)(parseFloat(this.current) - parseFloat(this.prevFrameValue), delta);
    }
    /**
     * Registers a new animation to control this `MotionValue`. Only one
     * animation can drive a `MotionValue` at one time.
     *
     * ```jsx
     * value.start()
     * ```
     *
     * @param animation - A function that starts the provided animation
     *
     * @internal
     */ start(startAnimation) {
        this.stop();
        return new Promise((resolve)=>{
            this.hasAnimated = true;
            this.animation = startAnimation(resolve);
            if (this.events.animationStart) this.events.animationStart.notify();
        }).then(()=>{
            if (this.events.animationComplete) this.events.animationComplete.notify();
            this.clearAnimation();
        });
    }
    /**
     * Stop the currently active animation.
     *
     * @public
     */ stop() {
        if (this.animation) {
            this.animation.stop();
            if (this.events.animationCancel) this.events.animationCancel.notify();
        }
        this.clearAnimation();
    }
    /**
     * Returns `true` if this value is currently animating.
     *
     * @public
     */ isAnimating() {
        return !!this.animation;
    }
    clearAnimation() {
        delete this.animation;
    }
    /**
     * Destroy and clean up subscribers to this `MotionValue`.
     *
     * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
     * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
     * created a `MotionValue` via the `motionValue` function.
     *
     * @public
     */ destroy() {
        this.clearListeners();
        this.stop();
        if (this.stopPassiveEffect) this.stopPassiveEffect();
    }
}
function motionValue(init, options) {
    return new MotionValue(init, options);
}

},{"../frameloop/sync-time.mjs":"fXWE4","../utils/subscription-manager.mjs":"5CIec","../utils/velocity-per-second.mjs":"kKo4B","../utils/warn-once.mjs":"a4lpg","../frameloop/frame.mjs":"ioJ38","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fXWE4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "time", ()=>time);
var _globalConfigMjs = require("../utils/GlobalConfig.mjs");
var _frameMjs = require("./frame.mjs");
let now;
function clearTime() {
    now = undefined;
}
/**
 * An eventloop-synchronous alternative to performance.now().
 *
 * Ensures that time measurements remain consistent within a synchronous context.
 * Usually calling performance.now() twice within the same synchronous context
 * will return different values which isn't useful for animations when we're usually
 * trying to sync animations to the same frame.
 */ const time = {
    now: ()=>{
        if (now === undefined) time.set((0, _frameMjs.frameData).isProcessing || (0, _globalConfigMjs.MotionGlobalConfig).useManualTiming ? (0, _frameMjs.frameData).timestamp : performance.now());
        return now;
    },
    set: (newTime)=>{
        now = newTime;
        queueMicrotask(clearTime);
    }
};

},{"../utils/GlobalConfig.mjs":"bR19K","./frame.mjs":"ioJ38","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bR19K":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MotionGlobalConfig", ()=>MotionGlobalConfig);
const MotionGlobalConfig = {
    skipAnimations: false,
    useManualTiming: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ioJ38":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cancelFrame", ()=>cancelFrame);
parcelHelpers.export(exports, "frame", ()=>frame);
parcelHelpers.export(exports, "frameData", ()=>frameData);
parcelHelpers.export(exports, "frameSteps", ()=>frameSteps);
var _errorsMjs = require("../../../../motion-utils/dist/es/errors.mjs");
var _noopMjs = require("../../../../motion-utils/dist/es/noop.mjs");
var _batcherMjs = require("./batcher.mjs");
const { schedule: frame, cancel: cancelFrame, state: frameData, steps: frameSteps } = (0, _batcherMjs.createRenderBatcher)(typeof requestAnimationFrame !== "undefined" ? requestAnimationFrame : (0, _noopMjs.noop), true);

},{"../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../motion-utils/dist/es/noop.mjs":"dgfzh","./batcher.mjs":"bZhx4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bZhx4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRenderBatcher", ()=>createRenderBatcher);
parcelHelpers.export(exports, "stepsOrder", ()=>stepsOrder);
var _globalConfigMjs = require("../utils/GlobalConfig.mjs");
var _renderStepMjs = require("./render-step.mjs");
const stepsOrder = [
    "read",
    "resolveKeyframes",
    "update",
    "preRender",
    "render",
    "postRender"
];
const maxElapsed = 40;
function createRenderBatcher(scheduleNextBatch, allowKeepAlive) {
    let runNextFrame = false;
    let useDefaultElapsed = true;
    const state = {
        delta: 0.0,
        timestamp: 0.0,
        isProcessing: false
    };
    const flagRunNextFrame = ()=>runNextFrame = true;
    const steps = stepsOrder.reduce((acc, key)=>{
        acc[key] = (0, _renderStepMjs.createRenderStep)(flagRunNextFrame);
        return acc;
    }, {});
    const { read, resolveKeyframes, update, preRender, render, postRender } = steps;
    const processBatch = ()=>{
        const timestamp = (0, _globalConfigMjs.MotionGlobalConfig).useManualTiming ? state.timestamp : performance.now();
        runNextFrame = false;
        state.delta = useDefaultElapsed ? 1000 / 60 : Math.max(Math.min(timestamp - state.timestamp, maxElapsed), 1);
        state.timestamp = timestamp;
        state.isProcessing = true;
        // Unrolled render loop for better per-frame performance
        read.process(state);
        resolveKeyframes.process(state);
        update.process(state);
        preRender.process(state);
        render.process(state);
        postRender.process(state);
        state.isProcessing = false;
        if (runNextFrame && allowKeepAlive) {
            useDefaultElapsed = false;
            scheduleNextBatch(processBatch);
        }
    };
    const wake = ()=>{
        runNextFrame = true;
        useDefaultElapsed = true;
        if (!state.isProcessing) scheduleNextBatch(processBatch);
    };
    const schedule = stepsOrder.reduce((acc, key)=>{
        const step = steps[key];
        acc[key] = (process, keepAlive = false, immediate = false)=>{
            if (!runNextFrame) wake();
            return step.schedule(process, keepAlive, immediate);
        };
        return acc;
    }, {});
    const cancel = (process)=>{
        for(let i = 0; i < stepsOrder.length; i++)steps[stepsOrder[i]].cancel(process);
    };
    return {
        schedule,
        cancel,
        state,
        steps
    };
}

},{"../utils/GlobalConfig.mjs":"bR19K","./render-step.mjs":"gASc6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gASc6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createRenderStep", ()=>createRenderStep);
function createRenderStep(runNextFrame) {
    /**
     * We create and reuse two queues, one to queue jobs for the current frame
     * and one for the next. We reuse to avoid triggering GC after x frames.
     */ let thisFrame = new Set();
    let nextFrame = new Set();
    /**
     * Track whether we're currently processing jobs in this step. This way
     * we can decide whether to schedule new jobs for this frame or next.
     */ let isProcessing = false;
    let flushNextFrame = false;
    /**
     * A set of processes which were marked keepAlive when scheduled.
     */ const toKeepAlive = new WeakSet();
    let latestFrameData = {
        delta: 0.0,
        timestamp: 0.0,
        isProcessing: false
    };
    function triggerCallback(callback) {
        if (toKeepAlive.has(callback)) {
            step.schedule(callback);
            runNextFrame();
        }
        callback(latestFrameData);
    }
    const step = {
        /**
         * Schedule a process to run on the next frame.
         */ schedule: (callback, keepAlive = false, immediate = false)=>{
            const addToCurrentFrame = immediate && isProcessing;
            const queue = addToCurrentFrame ? thisFrame : nextFrame;
            if (keepAlive) toKeepAlive.add(callback);
            if (!queue.has(callback)) queue.add(callback);
            return callback;
        },
        /**
         * Cancel the provided callback from running on the next frame.
         */ cancel: (callback)=>{
            nextFrame.delete(callback);
            toKeepAlive.delete(callback);
        },
        /**
         * Execute all schedule callbacks.
         */ process: (frameData)=>{
            latestFrameData = frameData;
            /**
             * If we're already processing we've probably been triggered by a flushSync
             * inside an existing process. Instead of executing, mark flushNextFrame
             * as true and ensure we flush the following frame at the end of this one.
             */ if (isProcessing) {
                flushNextFrame = true;
                return;
            }
            isProcessing = true;
            [thisFrame, nextFrame] = [
                nextFrame,
                thisFrame
            ];
            // Execute this frame
            thisFrame.forEach(triggerCallback);
            // Clear the frame so no callbacks remain. This is to avoid
            // memory leaks should this render step not run for a while.
            thisFrame.clear();
            isProcessing = false;
            if (flushNextFrame) {
                flushNextFrame = false;
                step.process(frameData);
            }
        }
    };
    return step;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5CIec":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SubscriptionManager", ()=>SubscriptionManager);
var _arrayMjs = require("./array.mjs");
class SubscriptionManager {
    constructor(){
        this.subscriptions = [];
    }
    add(handler) {
        (0, _arrayMjs.addUniqueItem)(this.subscriptions, handler);
        return ()=>(0, _arrayMjs.removeItem)(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions) return;
        if (numSubscriptions === 1) /**
             * If there's only a single handler we can just call it without invoking a loop.
             */ this.subscriptions[0](a, b, c);
        else for(let i = 0; i < numSubscriptions; i++){
            /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */ const handler = this.subscriptions[i];
            handler && handler(a, b, c);
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}

},{"./array.mjs":"cyaPX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a4lpg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "warnOnce", ()=>warnOnce);
const warned = new Set();
function warnOnce(condition, message, element) {
    if (condition || warned.has(message)) return;
    console.warn(message);
    if (element) console.warn(element);
    warned.add(message);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kKGjo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveVariant", ()=>resolveVariant);
var _resolveVariantsMjs = require("./resolve-variants.mjs");
function resolveVariant(visualElement, definition, custom) {
    const props = visualElement.getProps();
    return (0, _resolveVariantsMjs.resolveVariantFromProps)(props, definition, custom !== undefined ? custom : props.custom, visualElement);
}

},{"./resolve-variants.mjs":"5HZuK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5HZuK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveVariantFromProps", ()=>resolveVariantFromProps);
function getValueState(visualElement) {
    const state = [
        {},
        {}
    ];
    visualElement === null || visualElement === void 0 || visualElement.values.forEach((value, key)=>{
        state[0][key] = value.get();
        state[1][key] = value.getVelocity();
    });
    return state;
}
function resolveVariantFromProps(props, definition, custom, visualElement) {
    /**
     * If the variant definition is a function, resolve.
     */ if (typeof definition === "function") {
        const [current, velocity] = getValueState(visualElement);
        definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
    }
    /**
     * If the variant definition is a variant label, or
     * the function returned a variant label, resolve.
     */ if (typeof definition === "string") definition = props.variants && props.variants[definition];
    /**
     * At this point we've resolved both functions and variant labels,
     * but the resolved variant label might itself have been a function.
     * If so, resolve. This can only have returned a valid target object.
     */ if (typeof definition === "function") {
        const [current, velocity] = getValueState(visualElement);
        definition = definition(custom !== undefined ? custom : props.custom, current, velocity);
    }
    return definition;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hhPXy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addValueToWillChange", ()=>addValueToWillChange);
var _isMjs = require("./is.mjs");
function addValueToWillChange(visualElement, key) {
    const willChange = visualElement.getValue("willChange");
    /**
     * It could be that a user has set willChange to a regular MotionValue,
     * in which case we can't add the value to it.
     */ if ((0, _isMjs.isWillChangeMotionValue)(willChange)) return willChange.add(key);
}

},{"./is.mjs":"c4Sx0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c4Sx0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isWillChangeMotionValue", ()=>isWillChangeMotionValue);
var _isMotionValueMjs = require("../utils/is-motion-value.mjs");
function isWillChangeMotionValue(value) {
    return Boolean((0, _isMotionValueMjs.isMotionValue)(value) && value.add);
}

},{"../utils/is-motion-value.mjs":"fTAlC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bMGg3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getOptimisedAppearId", ()=>getOptimisedAppearId);
var _dataIdMjs = require("./data-id.mjs");
function getOptimisedAppearId(visualElement) {
    return visualElement.props[0, _dataIdMjs.optimizedAppearDataAttribute];
}

},{"./data-id.mjs":"2FwaS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2FwaS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "optimizedAppearDataAttribute", ()=>optimizedAppearDataAttribute);
parcelHelpers.export(exports, "optimizedAppearDataId", ()=>optimizedAppearDataId);
var _camelToDashMjs = require("../../render/dom/utils/camel-to-dash.mjs");
const optimizedAppearDataId = "framerAppearId";
const optimizedAppearDataAttribute = "data-" + (0, _camelToDashMjs.camelToDash)(optimizedAppearDataId);

},{"../../render/dom/utils/camel-to-dash.mjs":"bQQC2","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bQQC2":[function(require,module,exports,__globalThis) {
/**
 * Convert camelCase to dash-case properties.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "camelToDash", ()=>camelToDash);
const camelToDash = (str)=>str.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase();

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4gNQx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateMotionValue", ()=>animateMotionValue);
var _groupMjs = require("../../../../../motion-dom/dist/es/animation/controls/Group.mjs");
var _getValueTransitionMjs = require("../../../../../motion-dom/dist/es/animation/utils/get-value-transition.mjs");
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _timeConversionMjs = require("../../../../../motion-utils/dist/es/time-conversion.mjs");
var _frameMjs = require("../../frameloop/frame.mjs");
var _globalConfigMjs = require("../../utils/GlobalConfig.mjs");
var _useInstantTransitionStateMjs = require("../../utils/use-instant-transition-state.mjs");
var _acceleratedAnimationMjs = require("../animators/AcceleratedAnimation.mjs");
var _mainThreadAnimationMjs = require("../animators/MainThreadAnimation.mjs");
var _getFinalKeyframeMjs = require("../animators/waapi/utils/get-final-keyframe.mjs");
var _defaultTransitionsMjs = require("../utils/default-transitions.mjs");
var _isTransitionDefinedMjs = require("../utils/is-transition-defined.mjs");
const animateMotionValue = (name, value, target, transition = {}, element, isHandoff)=>(onComplete)=>{
        const valueTransition = (0, _getValueTransitionMjs.getValueTransition)(transition, name) || {};
        /**
     * Most transition values are currently completely overwritten by value-specific
     * transitions. In the future it'd be nicer to blend these transitions. But for now
     * delay actually does inherit from the root transition if not value-specific.
     */ const delay = valueTransition.delay || transition.delay || 0;
        /**
     * Elapsed isn't a public transition option but can be passed through from
     * optimized appear effects in milliseconds.
     */ let { elapsed = 0 } = transition;
        elapsed = elapsed - (0, _timeConversionMjs.secondsToMilliseconds)(delay);
        let options = {
            keyframes: Array.isArray(target) ? target : [
                null,
                target
            ],
            ease: "easeOut",
            velocity: value.getVelocity(),
            ...valueTransition,
            delay: -elapsed,
            onUpdate: (v)=>{
                value.set(v);
                valueTransition.onUpdate && valueTransition.onUpdate(v);
            },
            onComplete: ()=>{
                onComplete();
                valueTransition.onComplete && valueTransition.onComplete();
            },
            name,
            motionValue: value,
            element: isHandoff ? undefined : element
        };
        /**
     * If there's no transition defined for this value, we can generate
     * unqiue transition settings for this value.
     */ if (!(0, _isTransitionDefinedMjs.isTransitionDefined)(valueTransition)) options = {
            ...options,
            ...(0, _defaultTransitionsMjs.getDefaultTransition)(name, options)
        };
        /**
     * Both WAAPI and our internal animation functions use durations
     * as defined by milliseconds, while our external API defines them
     * as seconds.
     */ if (options.duration) options.duration = (0, _timeConversionMjs.secondsToMilliseconds)(options.duration);
        if (options.repeatDelay) options.repeatDelay = (0, _timeConversionMjs.secondsToMilliseconds)(options.repeatDelay);
        if (options.from !== undefined) options.keyframes[0] = options.from;
        let shouldSkip = false;
        if (options.type === false || options.duration === 0 && !options.repeatDelay) {
            options.duration = 0;
            if (options.delay === 0) shouldSkip = true;
        }
        if ((0, _useInstantTransitionStateMjs.instantAnimationState).current || (0, _globalConfigMjs.MotionGlobalConfig).skipAnimations) {
            shouldSkip = true;
            options.duration = 0;
            options.delay = 0;
        }
        /**
     * If we can or must skip creating the animation, and apply only
     * the final keyframe, do so. We also check once keyframes are resolved but
     * this early check prevents the need to create an animation at all.
     */ if (shouldSkip && !isHandoff && value.get() !== undefined) {
            const finalKeyframe = (0, _getFinalKeyframeMjs.getFinalKeyframe)(options.keyframes, valueTransition);
            if (finalKeyframe !== undefined) {
                (0, _frameMjs.frame).update(()=>{
                    options.onUpdate(finalKeyframe);
                    options.onComplete();
                });
                // We still want to return some animation controls here rather
                // than returning undefined
                return new (0, _groupMjs.GroupPlaybackControls)([]);
            }
        }
        /**
     * Animate via WAAPI if possible. If this is a handoff animation, the optimised animation will be running via
     * WAAPI. Therefore, this animation must be JS to ensure it runs "under" the
     * optimised animation.
     */ if (!isHandoff && (0, _acceleratedAnimationMjs.AcceleratedAnimation).supports(options)) return new (0, _acceleratedAnimationMjs.AcceleratedAnimation)(options);
        else return new (0, _mainThreadAnimationMjs.MainThreadAnimation)(options);
    };

},{"../../../../../motion-dom/dist/es/animation/controls/Group.mjs":"acj7e","../../../../../motion-dom/dist/es/animation/utils/get-value-transition.mjs":"ati6m","../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../motion-utils/dist/es/time-conversion.mjs":"1wf1y","../../frameloop/frame.mjs":"ioJ38","../../utils/GlobalConfig.mjs":"bR19K","../../utils/use-instant-transition-state.mjs":"7g0Ue","../animators/AcceleratedAnimation.mjs":"lBPg8","../animators/MainThreadAnimation.mjs":"lg49T","../animators/waapi/utils/get-final-keyframe.mjs":"5doYD","../utils/default-transitions.mjs":"7XbUR","../utils/is-transition-defined.mjs":"2lPLR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7g0Ue":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "instantAnimationState", ()=>instantAnimationState);
const instantAnimationState = {
    current: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lBPg8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AcceleratedAnimation", ()=>AcceleratedAnimation);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _noopMjs = require("../../../../../motion-utils/dist/es/noop.mjs");
var _timeConversionMjs = require("../../../../../motion-utils/dist/es/time-conversion.mjs");
var _isGeneratorMjs = require("../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs");
var _attachTimelineMjs = require("../../../../../motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs");
var _easingMjs = require("../../../../../motion-dom/dist/es/animation/waapi/utils/easing.mjs");
var _linearEasingMjs = require("../../../../../motion-dom/dist/es/utils/supports/linear-easing.mjs");
var _anticipateMjs = require("../../easing/anticipate.mjs");
var _backMjs = require("../../easing/back.mjs");
var _circMjs = require("../../easing/circ.mjs");
var _domkeyframesResolverMjs = require("../../render/dom/DOMKeyframesResolver.mjs");
var _baseAnimationMjs = require("./BaseAnimation.mjs");
var _mainThreadAnimationMjs = require("./MainThreadAnimation.mjs");
var _acceleratedValuesMjs = require("./utils/accelerated-values.mjs");
var _indexMjs = require("./waapi/index.mjs");
var _getFinalKeyframeMjs = require("./waapi/utils/get-final-keyframe.mjs");
var _supportsWaapiMjs = require("./waapi/utils/supports-waapi.mjs");
/**
 * 10ms is chosen here as it strikes a balance between smooth
 * results (more than one keyframe per frame at 60fps) and
 * keyframe quantity.
 */ const sampleDelta = 10; //ms
/**
 * Implement a practical max duration for keyframe generation
 * to prevent infinite loops
 */ const maxDuration = 20000;
/**
 * Check if an animation can run natively via WAAPI or requires pregenerated keyframes.
 * WAAPI doesn't support spring or function easings so we run these as JS animation before
 * handing off.
 */ function requiresPregeneratedKeyframes(options) {
    return (0, _isGeneratorMjs.isGenerator)(options.type) || options.type === "spring" || !(0, _easingMjs.isWaapiSupportedEasing)(options.ease);
}
function pregenerateKeyframes(keyframes, options) {
    /**
     * Create a main-thread animation to pregenerate keyframes.
     * We sample this at regular intervals to generate keyframes that we then
     * linearly interpolate between.
     */ const sampleAnimation = new (0, _mainThreadAnimationMjs.MainThreadAnimation)({
        ...options,
        keyframes,
        repeat: 0,
        delay: 0,
        isGenerator: true
    });
    let state = {
        done: false,
        value: keyframes[0]
    };
    const pregeneratedKeyframes = [];
    /**
     * Bail after 20 seconds of pre-generated keyframes as it's likely
     * we're heading for an infinite loop.
     */ let t = 0;
    while(!state.done && t < maxDuration){
        state = sampleAnimation.sample(t);
        pregeneratedKeyframes.push(state.value);
        t += sampleDelta;
    }
    return {
        times: undefined,
        keyframes: pregeneratedKeyframes,
        duration: t - sampleDelta,
        ease: "linear"
    };
}
const unsupportedEasingFunctions = {
    anticipate: (0, _anticipateMjs.anticipate),
    backInOut: (0, _backMjs.backInOut),
    circInOut: (0, _circMjs.circInOut)
};
function isUnsupportedEase(key) {
    return key in unsupportedEasingFunctions;
}
class AcceleratedAnimation extends (0, _baseAnimationMjs.BaseAnimation) {
    constructor(options){
        super(options);
        const { name, motionValue, element, keyframes } = this.options;
        this.resolver = new (0, _domkeyframesResolverMjs.DOMKeyframesResolver)(keyframes, (resolvedKeyframes, finalKeyframe)=>this.onKeyframesResolved(resolvedKeyframes, finalKeyframe), name, motionValue, element);
        this.resolver.scheduleResolve();
    }
    initPlayback(keyframes, finalKeyframe) {
        let { duration = 300, times, ease, type, motionValue, name, startTime } = this.options;
        /**
         * If element has since been unmounted, return false to indicate
         * the animation failed to initialised.
         */ if (!motionValue.owner || !motionValue.owner.current) return false;
        /**
         * If the user has provided an easing function name that isn't supported
         * by WAAPI (like "anticipate"), we need to provide the corressponding
         * function. This will later get converted to a linear() easing function.
         */ if (typeof ease === "string" && (0, _linearEasingMjs.supportsLinearEasing)() && isUnsupportedEase(ease)) ease = unsupportedEasingFunctions[ease];
        /**
         * If this animation needs pre-generated keyframes then generate.
         */ if (requiresPregeneratedKeyframes(this.options)) {
            const { onComplete, onUpdate, motionValue, element, ...options } = this.options;
            const pregeneratedAnimation = pregenerateKeyframes(keyframes, options);
            keyframes = pregeneratedAnimation.keyframes;
            // If this is a very short animation, ensure we have
            // at least two keyframes to animate between as older browsers
            // can't animate between a single keyframe.
            if (keyframes.length === 1) keyframes[1] = keyframes[0];
            duration = pregeneratedAnimation.duration;
            times = pregeneratedAnimation.times;
            ease = pregeneratedAnimation.ease;
            type = "keyframes";
        }
        const animation = (0, _indexMjs.startWaapiAnimation)(motionValue.owner.current, name, keyframes, {
            ...this.options,
            duration,
            times,
            ease
        });
        // Override the browser calculated startTime with one synchronised to other JS
        // and WAAPI animations starting this event loop.
        animation.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
        if (this.pendingTimeline) {
            (0, _attachTimelineMjs.attachTimeline)(animation, this.pendingTimeline);
            this.pendingTimeline = undefined;
        } else /**
             * Prefer the `onfinish` prop as it's more widely supported than
             * the `finished` promise.
             *
             * Here, we synchronously set the provided MotionValue to the end
             * keyframe. If we didn't, when the WAAPI animation is finished it would
             * be removed from the element which would then revert to its old styles.
             */ animation.onfinish = ()=>{
            const { onComplete } = this.options;
            motionValue.set((0, _getFinalKeyframeMjs.getFinalKeyframe)(keyframes, this.options, finalKeyframe));
            onComplete && onComplete();
            this.cancel();
            this.resolveFinishedPromise();
        };
        return {
            animation,
            duration,
            times,
            type,
            ease,
            keyframes: keyframes
        };
    }
    get duration() {
        const { resolved } = this;
        if (!resolved) return 0;
        const { duration } = resolved;
        return (0, _timeConversionMjs.millisecondsToSeconds)(duration);
    }
    get time() {
        const { resolved } = this;
        if (!resolved) return 0;
        const { animation } = resolved;
        return (0, _timeConversionMjs.millisecondsToSeconds)(animation.currentTime || 0);
    }
    set time(newTime) {
        const { resolved } = this;
        if (!resolved) return;
        const { animation } = resolved;
        animation.currentTime = (0, _timeConversionMjs.secondsToMilliseconds)(newTime);
    }
    get speed() {
        const { resolved } = this;
        if (!resolved) return 1;
        const { animation } = resolved;
        return animation.playbackRate;
    }
    set speed(newSpeed) {
        const { resolved } = this;
        if (!resolved) return;
        const { animation } = resolved;
        animation.playbackRate = newSpeed;
    }
    get state() {
        const { resolved } = this;
        if (!resolved) return "idle";
        const { animation } = resolved;
        return animation.playState;
    }
    get startTime() {
        const { resolved } = this;
        if (!resolved) return null;
        const { animation } = resolved;
        // Coerce to number as TypeScript incorrectly types this
        // as CSSNumberish
        return animation.startTime;
    }
    /**
     * Replace the default DocumentTimeline with another AnimationTimeline.
     * Currently used for scroll animations.
     */ attachTimeline(timeline) {
        if (!this._resolved) this.pendingTimeline = timeline;
        else {
            const { resolved } = this;
            if (!resolved) return 0, _noopMjs.noop;
            const { animation } = resolved;
            (0, _attachTimelineMjs.attachTimeline)(animation, timeline);
        }
        return 0, _noopMjs.noop;
    }
    play() {
        if (this.isStopped) return;
        const { resolved } = this;
        if (!resolved) return;
        const { animation } = resolved;
        if (animation.playState === "finished") this.updateFinishedPromise();
        animation.play();
    }
    pause() {
        const { resolved } = this;
        if (!resolved) return;
        const { animation } = resolved;
        animation.pause();
    }
    stop() {
        this.resolver.cancel();
        this.isStopped = true;
        if (this.state === "idle") return;
        this.resolveFinishedPromise();
        this.updateFinishedPromise();
        const { resolved } = this;
        if (!resolved) return;
        const { animation, keyframes, duration, type, ease, times } = resolved;
        if (animation.playState === "idle" || animation.playState === "finished") return;
        /**
         * WAAPI doesn't natively have any interruption capabilities.
         *
         * Rather than read commited styles back out of the DOM, we can
         * create a renderless JS animation and sample it twice to calculate
         * its current value, "previous" value, and therefore allow
         * Motion to calculate velocity for any subsequent animation.
         */ if (this.time) {
            const { motionValue, onUpdate, onComplete, element, ...options } = this.options;
            const sampleAnimation = new (0, _mainThreadAnimationMjs.MainThreadAnimation)({
                ...options,
                keyframes,
                duration,
                type,
                ease,
                times,
                isGenerator: true
            });
            const sampleTime = (0, _timeConversionMjs.secondsToMilliseconds)(this.time);
            motionValue.setWithVelocity(sampleAnimation.sample(sampleTime - sampleDelta).value, sampleAnimation.sample(sampleTime).value, sampleDelta);
        }
        const { onStop } = this.options;
        onStop && onStop();
        this.cancel();
    }
    complete() {
        const { resolved } = this;
        if (!resolved) return;
        resolved.animation.finish();
    }
    cancel() {
        const { resolved } = this;
        if (!resolved) return;
        resolved.animation.cancel();
    }
    static supports(options) {
        const { motionValue, name, repeatDelay, repeatType, damping, type } = options;
        if (!motionValue || !motionValue.owner || !(motionValue.owner.current instanceof HTMLElement)) return false;
        const { onUpdate, transformTemplate } = motionValue.owner.getProps();
        return (0, _supportsWaapiMjs.supportsWaapi)() && name && (0, _acceleratedValuesMjs.acceleratedValues).has(name) && /**
             * If we're outputting values to onUpdate then we can't use WAAPI as there's
             * no way to read the value from WAAPI every frame.
             */ !onUpdate && !transformTemplate && !repeatDelay && repeatType !== "mirror" && damping !== 0 && type !== "inertia";
    }
}

},{"../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../motion-utils/dist/es/noop.mjs":"dgfzh","../../../../../motion-utils/dist/es/time-conversion.mjs":"1wf1y","../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs":"fcH7M","../../../../../motion-dom/dist/es/animation/waapi/utils/attach-timeline.mjs":"jX2fN","../../../../../motion-dom/dist/es/animation/waapi/utils/easing.mjs":"k5tqx","../../../../../motion-dom/dist/es/utils/supports/linear-easing.mjs":"jhNTV","../../easing/anticipate.mjs":"jDHo0","../../easing/back.mjs":"ef8eT","../../easing/circ.mjs":"fNYPu","../../render/dom/DOMKeyframesResolver.mjs":"bPMBr","./BaseAnimation.mjs":"6AYL7","./MainThreadAnimation.mjs":"lg49T","./utils/accelerated-values.mjs":"eAB7X","./waapi/index.mjs":"6XvMk","./waapi/utils/get-final-keyframe.mjs":"5doYD","./waapi/utils/supports-waapi.mjs":"bT0BF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jX2fN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "attachTimeline", ()=>attachTimeline);
function attachTimeline(animation, timeline) {
    animation.timeline = timeline;
    animation.onfinish = null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k5tqx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicBezierAsString", ()=>cubicBezierAsString);
parcelHelpers.export(exports, "isWaapiSupportedEasing", ()=>isWaapiSupportedEasing);
parcelHelpers.export(exports, "mapEasingToNativeEasing", ()=>mapEasingToNativeEasing);
parcelHelpers.export(exports, "supportedWaapiEasing", ()=>supportedWaapiEasing);
var _isBezierDefinitionMjs = require("../../../utils/is-bezier-definition.mjs");
var _linearEasingMjs = require("../../../utils/supports/linear-easing.mjs");
var _linearMjs = require("./linear.mjs");
function isWaapiSupportedEasing(easing) {
    return Boolean(typeof easing === "function" && (0, _linearEasingMjs.supportsLinearEasing)() || !easing || typeof easing === "string" && (easing in supportedWaapiEasing || (0, _linearEasingMjs.supportsLinearEasing)()) || (0, _isBezierDefinitionMjs.isBezierDefinition)(easing) || Array.isArray(easing) && easing.every(isWaapiSupportedEasing));
}
const cubicBezierAsString = ([a, b, c, d])=>`cubic-bezier(${a}, ${b}, ${c}, ${d})`;
const supportedWaapiEasing = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: /*@__PURE__*/ cubicBezierAsString([
        0,
        0.65,
        0.55,
        1
    ]),
    circOut: /*@__PURE__*/ cubicBezierAsString([
        0.55,
        0,
        1,
        0.45
    ]),
    backIn: /*@__PURE__*/ cubicBezierAsString([
        0.31,
        0.01,
        0.66,
        -0.59
    ]),
    backOut: /*@__PURE__*/ cubicBezierAsString([
        0.33,
        1.53,
        0.69,
        0.99
    ])
};
function mapEasingToNativeEasing(easing, duration) {
    if (!easing) return undefined;
    else if (typeof easing === "function" && (0, _linearEasingMjs.supportsLinearEasing)()) return (0, _linearMjs.generateLinearEasing)(easing, duration);
    else if ((0, _isBezierDefinitionMjs.isBezierDefinition)(easing)) return cubicBezierAsString(easing);
    else if (Array.isArray(easing)) return easing.map((segmentEasing)=>mapEasingToNativeEasing(segmentEasing, duration) || supportedWaapiEasing.easeOut);
    else return supportedWaapiEasing[easing];
}

},{"../../../utils/is-bezier-definition.mjs":"hXCaz","../../../utils/supports/linear-easing.mjs":"jhNTV","./linear.mjs":"eKwws","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hXCaz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isBezierDefinition", ()=>isBezierDefinition);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jhNTV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsLinearEasing", ()=>supportsLinearEasing);
var _memoMjs = require("./memo.mjs");
const supportsLinearEasing = /*@__PURE__*/ (0, _memoMjs.memoSupports)(()=>{
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        });
    } catch (e) {
        return false;
    }
    return true;
}, "linearEasing");

},{"./memo.mjs":"IdM71","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"IdM71":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "memoSupports", ()=>memoSupports);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _memoMjs = require("../../../../../motion-utils/dist/es/memo.mjs");
var _flagsMjs = require("./flags.mjs");
function memoSupports(callback, supportsFlag) {
    const memoized = (0, _memoMjs.memo)(callback);
    return ()=>{
        var _a;
        return (_a = (0, _flagsMjs.supportsFlags)[supportsFlag]) !== null && _a !== void 0 ? _a : memoized();
    };
}

},{"../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../motion-utils/dist/es/memo.mjs":"9brTq","./flags.mjs":"2YnGL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2YnGL":[function(require,module,exports,__globalThis) {
/**
 * Add the ability for test suites to manually set support flags
 * to better test more environments.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsFlags", ()=>supportsFlags);
const supportsFlags = {
    linearEasing: undefined
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jDHo0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "anticipate", ()=>anticipate);
var _backMjs = require("./back.mjs");
const anticipate = (p)=>(p *= 2) < 1 ? 0.5 * (0, _backMjs.backIn)(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));

},{"./back.mjs":"ef8eT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ef8eT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "backIn", ()=>backIn);
parcelHelpers.export(exports, "backInOut", ()=>backInOut);
parcelHelpers.export(exports, "backOut", ()=>backOut);
var _cubicBezierMjs = require("./cubic-bezier.mjs");
var _mirrorMjs = require("./modifiers/mirror.mjs");
var _reverseMjs = require("./modifiers/reverse.mjs");
const backOut = /*@__PURE__*/ (0, _cubicBezierMjs.cubicBezier)(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0, _reverseMjs.reverseEasing)(backOut);
const backInOut = /*@__PURE__*/ (0, _mirrorMjs.mirrorEasing)(backIn);

},{"./cubic-bezier.mjs":"iZzhX","./modifiers/mirror.mjs":"kzFgV","./modifiers/reverse.mjs":"pwmuc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iZzhX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cubicBezier", ()=>cubicBezier);
var _errorsMjs = require("../../../../motion-utils/dist/es/errors.mjs");
var _noopMjs = require("../../../../motion-utils/dist/es/noop.mjs");
/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticiably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) upperBound = currentT;
        else lowerBound = currentT;
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations);
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return 0, _noopMjs.noop;
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}

},{"../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../motion-utils/dist/es/noop.mjs":"dgfzh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kzFgV":[function(require,module,exports,__globalThis) {
// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mirrorEasing", ()=>mirrorEasing);
const mirrorEasing = (easing)=>(p)=>p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"pwmuc":[function(require,module,exports,__globalThis) {
// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "reverseEasing", ()=>reverseEasing);
const reverseEasing = (easing)=>(p)=>1 - easing(1 - p);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNYPu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "circIn", ()=>circIn);
parcelHelpers.export(exports, "circInOut", ()=>circInOut);
parcelHelpers.export(exports, "circOut", ()=>circOut);
var _mirrorMjs = require("./modifiers/mirror.mjs");
var _reverseMjs = require("./modifiers/reverse.mjs");
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, _reverseMjs.reverseEasing)(circIn);
const circInOut = (0, _mirrorMjs.mirrorEasing)(circIn);

},{"./modifiers/mirror.mjs":"kzFgV","./modifiers/reverse.mjs":"pwmuc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bPMBr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DOMKeyframesResolver", ()=>DOMKeyframesResolver);
var _isNoneMjs = require("../../animation/utils/is-none.mjs");
var _keysPositionMjs = require("../html/utils/keys-position.mjs");
var _makeNoneAnimatableMjs = require("../html/utils/make-none-animatable.mjs");
var _keyframesResolverMjs = require("../utils/KeyframesResolver.mjs");
var _cssVariablesConversionMjs = require("./utils/css-variables-conversion.mjs");
var _isCssVariableMjs = require("./utils/is-css-variable.mjs");
var _unitConversionMjs = require("./utils/unit-conversion.mjs");
var _dimensionsMjs = require("./value-types/dimensions.mjs");
class DOMKeyframesResolver extends (0, _keyframesResolverMjs.KeyframeResolver) {
    constructor(unresolvedKeyframes, onComplete, name, motionValue, element){
        super(unresolvedKeyframes, onComplete, name, motionValue, element, true);
    }
    readKeyframes() {
        const { unresolvedKeyframes, element, name } = this;
        if (!element || !element.current) return;
        super.readKeyframes();
        /**
         * If any keyframe is a CSS variable, we need to find its value by sampling the element
         */ for(let i = 0; i < unresolvedKeyframes.length; i++){
            let keyframe = unresolvedKeyframes[i];
            if (typeof keyframe === "string") {
                keyframe = keyframe.trim();
                if ((0, _isCssVariableMjs.isCSSVariableToken)(keyframe)) {
                    const resolved = (0, _cssVariablesConversionMjs.getVariableValue)(keyframe, element.current);
                    if (resolved !== undefined) unresolvedKeyframes[i] = resolved;
                    if (i === unresolvedKeyframes.length - 1) this.finalKeyframe = keyframe;
                }
            }
        }
        /**
         * Resolve "none" values. We do this potentially twice - once before and once after measuring keyframes.
         * This could be seen as inefficient but it's a trade-off to avoid measurements in more situations, which
         * have a far bigger performance impact.
         */ this.resolveNoneKeyframes();
        /**
         * Check to see if unit type has changed. If so schedule jobs that will
         * temporarily set styles to the destination keyframes.
         * Skip if we have more than two keyframes or this isn't a positional value.
         * TODO: We can throw if there are multiple keyframes and the value type changes.
         */ if (!(0, _keysPositionMjs.positionalKeys).has(name) || unresolvedKeyframes.length !== 2) return;
        const [origin, target] = unresolvedKeyframes;
        const originType = (0, _dimensionsMjs.findDimensionValueType)(origin);
        const targetType = (0, _dimensionsMjs.findDimensionValueType)(target);
        /**
         * Either we don't recognise these value types or we can animate between them.
         */ if (originType === targetType) return;
        /**
         * If both values are numbers or pixels, we can animate between them by
         * converting them to numbers.
         */ if ((0, _unitConversionMjs.isNumOrPxType)(originType) && (0, _unitConversionMjs.isNumOrPxType)(targetType)) for(let i = 0; i < unresolvedKeyframes.length; i++){
            const value = unresolvedKeyframes[i];
            if (typeof value === "string") unresolvedKeyframes[i] = parseFloat(value);
        }
        else /**
             * Else, the only way to resolve this is by measuring the element.
             */ this.needsMeasurement = true;
    }
    resolveNoneKeyframes() {
        const { unresolvedKeyframes, name } = this;
        const noneKeyframeIndexes = [];
        for(let i = 0; i < unresolvedKeyframes.length; i++)if ((0, _isNoneMjs.isNone)(unresolvedKeyframes[i])) noneKeyframeIndexes.push(i);
        if (noneKeyframeIndexes.length) (0, _makeNoneAnimatableMjs.makeNoneKeyframesAnimatable)(unresolvedKeyframes, noneKeyframeIndexes, name);
    }
    measureInitialState() {
        const { element, unresolvedKeyframes, name } = this;
        if (!element || !element.current) return;
        if (name === "height") this.suspendedScrollY = window.pageYOffset;
        this.measuredOrigin = (0, _unitConversionMjs.positionalValues)[name](element.measureViewportBox(), window.getComputedStyle(element.current));
        unresolvedKeyframes[0] = this.measuredOrigin;
        // Set final key frame to measure after next render
        const measureKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
        if (measureKeyframe !== undefined) element.getValue(name, measureKeyframe).jump(measureKeyframe, false);
    }
    measureEndState() {
        var _a;
        const { element, name, unresolvedKeyframes } = this;
        if (!element || !element.current) return;
        const value = element.getValue(name);
        value && value.jump(this.measuredOrigin, false);
        const finalKeyframeIndex = unresolvedKeyframes.length - 1;
        const finalKeyframe = unresolvedKeyframes[finalKeyframeIndex];
        unresolvedKeyframes[finalKeyframeIndex] = (0, _unitConversionMjs.positionalValues)[name](element.measureViewportBox(), window.getComputedStyle(element.current));
        if (finalKeyframe !== null && this.finalKeyframe === undefined) this.finalKeyframe = finalKeyframe;
        // If we removed transform values, reapply them before the next render
        if ((_a = this.removedTransforms) === null || _a === void 0 ? void 0 : _a.length) this.removedTransforms.forEach(([unsetTransformName, unsetTransformValue])=>{
            element.getValue(unsetTransformName).set(unsetTransformValue);
        });
        this.resolveNoneKeyframes();
    }
}

},{"../../animation/utils/is-none.mjs":"6LRUN","../html/utils/keys-position.mjs":"eyLzl","../html/utils/make-none-animatable.mjs":"4xYSv","../utils/KeyframesResolver.mjs":"drDqi","./utils/css-variables-conversion.mjs":"jM91C","./utils/is-css-variable.mjs":"6ZbRI","./utils/unit-conversion.mjs":"eo7gU","./value-types/dimensions.mjs":"beMU3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6LRUN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNone", ()=>isNone);
var _isZeroValueStringMjs = require("../../utils/is-zero-value-string.mjs");
function isNone(value) {
    if (typeof value === "number") return value === 0;
    else if (value !== null) return value === "none" || value === "0" || (0, _isZeroValueStringMjs.isZeroValueString)(value);
    else return true;
}

},{"../../utils/is-zero-value-string.mjs":"1zaoQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1zaoQ":[function(require,module,exports,__globalThis) {
/**
 * Check if the value is a zero value string like "0px" or "0%"
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isZeroValueString", ()=>isZeroValueString);
const isZeroValueString = (v)=>/^0[^.\s]+$/u.test(v);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4xYSv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "makeNoneKeyframesAnimatable", ()=>makeNoneKeyframesAnimatable);
var _indexMjs = require("../../../value/types/complex/index.mjs");
var _animatableNoneMjs = require("../../dom/value-types/animatable-none.mjs");
/**
 * If we encounter keyframes like "none" or "0" and we also have keyframes like
 * "#fff" or "200px 200px" we want to find a keyframe to serve as a template for
 * the "none" keyframes. In this case "#fff" or "200px 200px" - then these get turned into
 * zero equivalents, i.e. "#fff0" or "0px 0px".
 */ const invalidTemplates = new Set([
    "auto",
    "none",
    "0"
]);
function makeNoneKeyframesAnimatable(unresolvedKeyframes, noneKeyframeIndexes, name) {
    let i = 0;
    let animatableTemplate = undefined;
    while(i < unresolvedKeyframes.length && !animatableTemplate){
        const keyframe = unresolvedKeyframes[i];
        if (typeof keyframe === "string" && !invalidTemplates.has(keyframe) && (0, _indexMjs.analyseComplexValue)(keyframe).values.length) animatableTemplate = unresolvedKeyframes[i];
        i++;
    }
    if (animatableTemplate && name) for (const noneIndex of noneKeyframeIndexes)unresolvedKeyframes[noneIndex] = (0, _animatableNoneMjs.getAnimatableNone)(name, animatableTemplate);
}

},{"../../../value/types/complex/index.mjs":"4Wy2N","../../dom/value-types/animatable-none.mjs":"gBN5M","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4Wy2N":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "analyseComplexValue", ()=>analyseComplexValue);
parcelHelpers.export(exports, "complex", ()=>complex);
var _indexMjs = require("../color/index.mjs");
var _colorRegexMjs = require("../utils/color-regex.mjs");
var _floatRegexMjs = require("../utils/float-regex.mjs");
var _sanitizeMjs = require("../utils/sanitize.mjs");
function test(v) {
    var _a, _b;
    return isNaN(v) && typeof v === "string" && (((_a = v.match((0, _floatRegexMjs.floatRegex))) === null || _a === void 0 ? void 0 : _a.length) || 0) + (((_b = v.match((0, _colorRegexMjs.colorRegex))) === null || _b === void 0 ? void 0 : _b.length) || 0) > 0;
}
const NUMBER_TOKEN = "number";
const COLOR_TOKEN = "color";
const VAR_TOKEN = "var";
const VAR_FUNCTION_TOKEN = "var(";
const SPLIT_TOKEN = "${}";
// this regex consists of the `singleCssVariableRegex|rgbHSLValueRegex|digitRegex`
const complexRegex = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function analyseComplexValue(value) {
    const originalValue = value.toString();
    const values = [];
    const indexes = {
        color: [],
        number: [],
        var: []
    };
    const types = [];
    let i = 0;
    const tokenised = originalValue.replace(complexRegex, (parsedValue)=>{
        if ((0, _indexMjs.color).test(parsedValue)) {
            indexes.color.push(i);
            types.push(COLOR_TOKEN);
            values.push((0, _indexMjs.color).parse(parsedValue));
        } else if (parsedValue.startsWith(VAR_FUNCTION_TOKEN)) {
            indexes.var.push(i);
            types.push(VAR_TOKEN);
            values.push(parsedValue);
        } else {
            indexes.number.push(i);
            types.push(NUMBER_TOKEN);
            values.push(parseFloat(parsedValue));
        }
        ++i;
        return SPLIT_TOKEN;
    });
    const split = tokenised.split(SPLIT_TOKEN);
    return {
        values,
        split,
        indexes,
        types
    };
}
function parseComplexValue(v) {
    return analyseComplexValue(v).values;
}
function createTransformer(source) {
    const { split, types } = analyseComplexValue(source);
    const numSections = split.length;
    return (v)=>{
        let output = "";
        for(let i = 0; i < numSections; i++){
            output += split[i];
            if (v[i] !== undefined) {
                const type = types[i];
                if (type === NUMBER_TOKEN) output += (0, _sanitizeMjs.sanitize)(v[i]);
                else if (type === COLOR_TOKEN) output += (0, _indexMjs.color).transform(v[i]);
                else output += v[i];
            }
        }
        return output;
    };
}
const convertNumbersToZero = (v)=>typeof v === "number" ? 0 : v;
function getAnimatableNone(v) {
    const parsed = parseComplexValue(v);
    const transformer = createTransformer(v);
    return transformer(parsed.map(convertNumbersToZero));
}
const complex = {
    test,
    parse: parseComplexValue,
    createTransformer,
    getAnimatableNone
};

},{"../color/index.mjs":"cHA3X","../utils/color-regex.mjs":"4rtdl","../utils/float-regex.mjs":"aKIyV","../utils/sanitize.mjs":"4LiuS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cHA3X":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "color", ()=>color);
var _hexMjs = require("./hex.mjs");
var _hslaMjs = require("./hsla.mjs");
var _rgbaMjs = require("./rgba.mjs");
const color = {
    test: (v)=>(0, _rgbaMjs.rgba).test(v) || (0, _hexMjs.hex).test(v) || (0, _hslaMjs.hsla).test(v),
    parse: (v)=>{
        if ((0, _rgbaMjs.rgba).test(v)) return (0, _rgbaMjs.rgba).parse(v);
        else if ((0, _hslaMjs.hsla).test(v)) return (0, _hslaMjs.hsla).parse(v);
        else return (0, _hexMjs.hex).parse(v);
    },
    transform: (v)=>{
        return typeof v === "string" ? v : v.hasOwnProperty("red") ? (0, _rgbaMjs.rgba).transform(v) : (0, _hslaMjs.hsla).transform(v);
    }
};

},{"./hex.mjs":"dQ3Wi","./hsla.mjs":"5mOcn","./rgba.mjs":"6hWKD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dQ3Wi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hex", ()=>hex);
var _rgbaMjs = require("./rgba.mjs");
var _utilsMjs = require("./utils.mjs");
function parseHex(v) {
    let r = "";
    let g = "";
    let b = "";
    let a = "";
    // If we have 6 characters, ie #FF0000
    if (v.length > 5) {
        r = v.substring(1, 3);
        g = v.substring(3, 5);
        b = v.substring(5, 7);
        a = v.substring(7, 9);
    // Or we have 3 characters, ie #F00
    } else {
        r = v.substring(1, 2);
        g = v.substring(2, 3);
        b = v.substring(3, 4);
        a = v.substring(4, 5);
        r += r;
        g += g;
        b += b;
        a += a;
    }
    return {
        red: parseInt(r, 16),
        green: parseInt(g, 16),
        blue: parseInt(b, 16),
        alpha: a ? parseInt(a, 16) / 255 : 1
    };
}
const hex = {
    test: /*@__PURE__*/ (0, _utilsMjs.isColorString)("#"),
    parse: parseHex,
    transform: (0, _rgbaMjs.rgba).transform
};

},{"./rgba.mjs":"6hWKD","./utils.mjs":"7fL4R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6hWKD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rgbUnit", ()=>rgbUnit);
parcelHelpers.export(exports, "rgba", ()=>rgba);
var _clampMjs = require("../../../utils/clamp.mjs");
var _indexMjs = require("../numbers/index.mjs");
var _sanitizeMjs = require("../utils/sanitize.mjs");
var _utilsMjs = require("./utils.mjs");
const clampRgbUnit = (v)=>(0, _clampMjs.clamp)(0, 255, v);
const rgbUnit = {
    ...(0, _indexMjs.number),
    transform: (v)=>Math.round(clampRgbUnit(v))
};
const rgba = {
    test: /*@__PURE__*/ (0, _utilsMjs.isColorString)("rgb", "red"),
    parse: /*@__PURE__*/ (0, _utilsMjs.splitColor)("red", "green", "blue"),
    transform: ({ red, green, blue, alpha: alpha$1 = 1 })=>"rgba(" + rgbUnit.transform(red) + ", " + rgbUnit.transform(green) + ", " + rgbUnit.transform(blue) + ", " + (0, _sanitizeMjs.sanitize)((0, _indexMjs.alpha).transform(alpha$1)) + ")"
};

},{"../../../utils/clamp.mjs":"6850m","../numbers/index.mjs":"dvu2t","../utils/sanitize.mjs":"4LiuS","./utils.mjs":"7fL4R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dvu2t":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "alpha", ()=>alpha);
parcelHelpers.export(exports, "number", ()=>number);
parcelHelpers.export(exports, "scale", ()=>scale);
var _clampMjs = require("../../../utils/clamp.mjs");
const number = {
    test: (v)=>typeof v === "number",
    parse: parseFloat,
    transform: (v)=>v
};
const alpha = {
    ...number,
    transform: (v)=>(0, _clampMjs.clamp)(0, 1, v)
};
const scale = {
    ...number,
    default: 1
};

},{"../../../utils/clamp.mjs":"6850m","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4LiuS":[function(require,module,exports,__globalThis) {
// If this number is a decimal, make it just five decimal places
// to avoid exponents
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "sanitize", ()=>sanitize);
const sanitize = (v)=>Math.round(v * 100000) / 100000;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7fL4R":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isColorString", ()=>isColorString);
parcelHelpers.export(exports, "splitColor", ()=>splitColor);
var _floatRegexMjs = require("../utils/float-regex.mjs");
var _isNullishMjs = require("../utils/is-nullish.mjs");
var _singleColorRegexMjs = require("../utils/single-color-regex.mjs");
/**
 * Returns true if the provided string is a color, ie rgba(0,0,0,0) or #000,
 * but false if a number or multiple colors
 */ const isColorString = (type, testProp)=>(v)=>{
        return Boolean(typeof v === "string" && (0, _singleColorRegexMjs.singleColorRegex).test(v) && v.startsWith(type) || testProp && !(0, _isNullishMjs.isNullish)(v) && Object.prototype.hasOwnProperty.call(v, testProp));
    };
const splitColor = (aName, bName, cName)=>(v)=>{
        if (typeof v !== "string") return v;
        const [a, b, c, alpha] = v.match((0, _floatRegexMjs.floatRegex));
        return {
            [aName]: parseFloat(a),
            [bName]: parseFloat(b),
            [cName]: parseFloat(c),
            alpha: alpha !== undefined ? parseFloat(alpha) : 1
        };
    };

},{"../utils/float-regex.mjs":"aKIyV","../utils/is-nullish.mjs":"bBDWj","../utils/single-color-regex.mjs":"9XLhZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aKIyV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "floatRegex", ()=>floatRegex);
const floatRegex = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bBDWj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNullish", ()=>isNullish);
function isNullish(v) {
    return v == null;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9XLhZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "singleColorRegex", ()=>singleColorRegex);
const singleColorRegex = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5mOcn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hsla", ()=>hsla);
var _indexMjs = require("../numbers/index.mjs");
var _unitsMjs = require("../numbers/units.mjs");
var _sanitizeMjs = require("../utils/sanitize.mjs");
var _utilsMjs = require("./utils.mjs");
const hsla = {
    test: /*@__PURE__*/ (0, _utilsMjs.isColorString)("hsl", "hue"),
    parse: /*@__PURE__*/ (0, _utilsMjs.splitColor)("hue", "saturation", "lightness"),
    transform: ({ hue, saturation, lightness, alpha: alpha$1 = 1 })=>{
        return "hsla(" + Math.round(hue) + ", " + (0, _unitsMjs.percent).transform((0, _sanitizeMjs.sanitize)(saturation)) + ", " + (0, _unitsMjs.percent).transform((0, _sanitizeMjs.sanitize)(lightness)) + ", " + (0, _sanitizeMjs.sanitize)((0, _indexMjs.alpha).transform(alpha$1)) + ")";
    }
};

},{"../numbers/index.mjs":"dvu2t","../numbers/units.mjs":"h2wSa","../utils/sanitize.mjs":"4LiuS","./utils.mjs":"7fL4R","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h2wSa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "degrees", ()=>degrees);
parcelHelpers.export(exports, "percent", ()=>percent);
parcelHelpers.export(exports, "progressPercentage", ()=>progressPercentage);
parcelHelpers.export(exports, "px", ()=>px);
parcelHelpers.export(exports, "vh", ()=>vh);
parcelHelpers.export(exports, "vw", ()=>vw);
const createUnitType = (unit)=>({
        test: (v)=>typeof v === "string" && v.endsWith(unit) && v.split(" ").length === 1,
        parse: parseFloat,
        transform: (v)=>`${v}${unit}`
    });
const degrees = /*@__PURE__*/ createUnitType("deg");
const percent = /*@__PURE__*/ createUnitType("%");
const px = /*@__PURE__*/ createUnitType("px");
const vh = /*@__PURE__*/ createUnitType("vh");
const vw = /*@__PURE__*/ createUnitType("vw");
const progressPercentage = {
    ...percent,
    parse: (v)=>percent.parse(v) / 100,
    transform: (v)=>percent.transform(v * 100)
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4rtdl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "colorRegex", ()=>colorRegex);
const colorRegex = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gBN5M":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getAnimatableNone", ()=>getAnimatableNone);
var _indexMjs = require("../../../value/types/complex/index.mjs");
var _filterMjs = require("../../../value/types/complex/filter.mjs");
var _defaultsMjs = require("./defaults.mjs");
function getAnimatableNone(key, value) {
    let defaultValueType = (0, _defaultsMjs.getDefaultValueType)(key);
    if (defaultValueType !== (0, _filterMjs.filter)) defaultValueType = (0, _indexMjs.complex);
    // If value is not recognised as animatable, ie "none", create an animatable version origin based on the target
    return defaultValueType.getAnimatableNone ? defaultValueType.getAnimatableNone(value) : undefined;
}

},{"../../../value/types/complex/index.mjs":"4Wy2N","../../../value/types/complex/filter.mjs":"67k67","./defaults.mjs":"bGiYG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"67k67":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "filter", ()=>filter);
var _indexMjs = require("./index.mjs");
var _floatRegexMjs = require("../utils/float-regex.mjs");
/**
 * Properties that should default to 1 or 100%
 */ const maxDefaults = new Set([
    "brightness",
    "contrast",
    "saturate",
    "opacity"
]);
function applyDefaultFilter(v) {
    const [name, value] = v.slice(0, -1).split("(");
    if (name === "drop-shadow") return v;
    const [number] = value.match((0, _floatRegexMjs.floatRegex)) || [];
    if (!number) return v;
    const unit = value.replace(number, "");
    let defaultValue = maxDefaults.has(name) ? 1 : 0;
    if (number !== value) defaultValue *= 100;
    return name + "(" + defaultValue + unit + ")";
}
const functionRegex = /\b([a-z-]*)\(.*?\)/gu;
const filter = {
    ...(0, _indexMjs.complex),
    getAnimatableNone: (v)=>{
        const functions = v.match(functionRegex);
        return functions ? functions.map(applyDefaultFilter).join(" ") : v;
    }
};

},{"./index.mjs":"4Wy2N","../utils/float-regex.mjs":"aKIyV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bGiYG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultValueTypes", ()=>defaultValueTypes);
parcelHelpers.export(exports, "getDefaultValueType", ()=>getDefaultValueType);
var _indexMjs = require("../../../value/types/color/index.mjs");
var _filterMjs = require("../../../value/types/complex/filter.mjs");
var _numberMjs = require("./number.mjs");
/**
 * A map of default value types for common values
 */ const defaultValueTypes = {
    ...(0, _numberMjs.numberValueTypes),
    color: // Color props
    (0, _indexMjs.color),
    backgroundColor: (0, _indexMjs.color),
    outlineColor: (0, _indexMjs.color),
    fill: (0, _indexMjs.color),
    stroke: (0, _indexMjs.color),
    // Border props
    borderColor: (0, _indexMjs.color),
    borderTopColor: (0, _indexMjs.color),
    borderRightColor: (0, _indexMjs.color),
    borderBottomColor: (0, _indexMjs.color),
    borderLeftColor: (0, _indexMjs.color),
    filter: (0, _filterMjs.filter),
    WebkitFilter: (0, _filterMjs.filter)
};
/**
 * Gets the default ValueType for the provided value key
 */ const getDefaultValueType = (key)=>defaultValueTypes[key];

},{"../../../value/types/color/index.mjs":"cHA3X","../../../value/types/complex/filter.mjs":"67k67","./number.mjs":"5lYaO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5lYaO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "numberValueTypes", ()=>numberValueTypes);
var _indexMjs = require("../../../value/types/numbers/index.mjs");
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
var _numberBrowserMjs = require("./number-browser.mjs");
var _transformMjs = require("./transform.mjs");
var _typeIntMjs = require("./type-int.mjs");
const numberValueTypes = {
    ...(0, _numberBrowserMjs.browserNumberValueTypes),
    ...(0, _transformMjs.transformValueTypes),
    zIndex: (0, _typeIntMjs.int),
    size: (0, _unitsMjs.px),
    // SVG
    fillOpacity: (0, _indexMjs.alpha),
    strokeOpacity: (0, _indexMjs.alpha),
    numOctaves: (0, _typeIntMjs.int)
};

},{"../../../value/types/numbers/index.mjs":"dvu2t","../../../value/types/numbers/units.mjs":"h2wSa","./number-browser.mjs":"fNtz2","./transform.mjs":"gdkmi","./type-int.mjs":"d29xv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fNtz2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "browserNumberValueTypes", ()=>browserNumberValueTypes);
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
const browserNumberValueTypes = {
    // Border props
    borderWidth: (0, _unitsMjs.px),
    borderTopWidth: (0, _unitsMjs.px),
    borderRightWidth: (0, _unitsMjs.px),
    borderBottomWidth: (0, _unitsMjs.px),
    borderLeftWidth: (0, _unitsMjs.px),
    borderRadius: (0, _unitsMjs.px),
    radius: (0, _unitsMjs.px),
    borderTopLeftRadius: (0, _unitsMjs.px),
    borderTopRightRadius: (0, _unitsMjs.px),
    borderBottomRightRadius: (0, _unitsMjs.px),
    borderBottomLeftRadius: (0, _unitsMjs.px),
    // Positioning props
    width: (0, _unitsMjs.px),
    maxWidth: (0, _unitsMjs.px),
    height: (0, _unitsMjs.px),
    maxHeight: (0, _unitsMjs.px),
    top: (0, _unitsMjs.px),
    right: (0, _unitsMjs.px),
    bottom: (0, _unitsMjs.px),
    left: (0, _unitsMjs.px),
    // Spacing props
    padding: (0, _unitsMjs.px),
    paddingTop: (0, _unitsMjs.px),
    paddingRight: (0, _unitsMjs.px),
    paddingBottom: (0, _unitsMjs.px),
    paddingLeft: (0, _unitsMjs.px),
    margin: (0, _unitsMjs.px),
    marginTop: (0, _unitsMjs.px),
    marginRight: (0, _unitsMjs.px),
    marginBottom: (0, _unitsMjs.px),
    marginLeft: (0, _unitsMjs.px),
    // Misc
    backgroundPositionX: (0, _unitsMjs.px),
    backgroundPositionY: (0, _unitsMjs.px)
};

},{"../../../value/types/numbers/units.mjs":"h2wSa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gdkmi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "transformValueTypes", ()=>transformValueTypes);
var _indexMjs = require("../../../value/types/numbers/index.mjs");
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
const transformValueTypes = {
    rotate: (0, _unitsMjs.degrees),
    rotateX: (0, _unitsMjs.degrees),
    rotateY: (0, _unitsMjs.degrees),
    rotateZ: (0, _unitsMjs.degrees),
    scale: (0, _indexMjs.scale),
    scaleX: (0, _indexMjs.scale),
    scaleY: (0, _indexMjs.scale),
    scaleZ: (0, _indexMjs.scale),
    skew: (0, _unitsMjs.degrees),
    skewX: (0, _unitsMjs.degrees),
    skewY: (0, _unitsMjs.degrees),
    distance: (0, _unitsMjs.px),
    translateX: (0, _unitsMjs.px),
    translateY: (0, _unitsMjs.px),
    translateZ: (0, _unitsMjs.px),
    x: (0, _unitsMjs.px),
    y: (0, _unitsMjs.px),
    z: (0, _unitsMjs.px),
    perspective: (0, _unitsMjs.px),
    transformPerspective: (0, _unitsMjs.px),
    opacity: (0, _indexMjs.alpha),
    originX: (0, _unitsMjs.progressPercentage),
    originY: (0, _unitsMjs.progressPercentage),
    originZ: (0, _unitsMjs.px)
};

},{"../../../value/types/numbers/index.mjs":"dvu2t","../../../value/types/numbers/units.mjs":"h2wSa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d29xv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "int", ()=>int);
var _indexMjs = require("../../../value/types/numbers/index.mjs");
const int = {
    ...(0, _indexMjs.number),
    transform: Math.round
};

},{"../../../value/types/numbers/index.mjs":"dvu2t","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"drDqi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "KeyframeResolver", ()=>KeyframeResolver);
parcelHelpers.export(exports, "flushKeyframeResolvers", ()=>flushKeyframeResolvers);
var _unitConversionMjs = require("../dom/utils/unit-conversion.mjs");
var _frameMjs = require("../../frameloop/frame.mjs");
const toResolve = new Set();
let isScheduled = false;
let anyNeedsMeasurement = false;
function measureAllKeyframes() {
    if (anyNeedsMeasurement) {
        const resolversToMeasure = Array.from(toResolve).filter((resolver)=>resolver.needsMeasurement);
        const elementsToMeasure = new Set(resolversToMeasure.map((resolver)=>resolver.element));
        const transformsToRestore = new Map();
        /**
         * Write pass
         * If we're measuring elements we want to remove bounding box-changing transforms.
         */ elementsToMeasure.forEach((element)=>{
            const removedTransforms = (0, _unitConversionMjs.removeNonTranslationalTransform)(element);
            if (!removedTransforms.length) return;
            transformsToRestore.set(element, removedTransforms);
            element.render();
        });
        // Read
        resolversToMeasure.forEach((resolver)=>resolver.measureInitialState());
        // Write
        elementsToMeasure.forEach((element)=>{
            element.render();
            const restore = transformsToRestore.get(element);
            if (restore) restore.forEach(([key, value])=>{
                var _a;
                (_a = element.getValue(key)) === null || _a === void 0 || _a.set(value);
            });
        });
        // Read
        resolversToMeasure.forEach((resolver)=>resolver.measureEndState());
        // Write
        resolversToMeasure.forEach((resolver)=>{
            if (resolver.suspendedScrollY !== undefined) window.scrollTo(0, resolver.suspendedScrollY);
        });
    }
    anyNeedsMeasurement = false;
    isScheduled = false;
    toResolve.forEach((resolver)=>resolver.complete());
    toResolve.clear();
}
function readAllKeyframes() {
    toResolve.forEach((resolver)=>{
        resolver.readKeyframes();
        if (resolver.needsMeasurement) anyNeedsMeasurement = true;
    });
}
function flushKeyframeResolvers() {
    readAllKeyframes();
    measureAllKeyframes();
}
class KeyframeResolver {
    constructor(unresolvedKeyframes, onComplete, name, motionValue, element, isAsync = false){
        /**
         * Track whether this resolver has completed. Once complete, it never
         * needs to attempt keyframe resolution again.
         */ this.isComplete = false;
        /**
         * Track whether this resolver is async. If it is, it'll be added to the
         * resolver queue and flushed in the next frame. Resolvers that aren't going
         * to trigger read/write thrashing don't need to be async.
         */ this.isAsync = false;
        /**
         * Track whether this resolver needs to perform a measurement
         * to resolve its keyframes.
         */ this.needsMeasurement = false;
        /**
         * Track whether this resolver is currently scheduled to resolve
         * to allow it to be cancelled and resumed externally.
         */ this.isScheduled = false;
        this.unresolvedKeyframes = [
            ...unresolvedKeyframes
        ];
        this.onComplete = onComplete;
        this.name = name;
        this.motionValue = motionValue;
        this.element = element;
        this.isAsync = isAsync;
    }
    scheduleResolve() {
        this.isScheduled = true;
        if (this.isAsync) {
            toResolve.add(this);
            if (!isScheduled) {
                isScheduled = true;
                (0, _frameMjs.frame).read(readAllKeyframes);
                (0, _frameMjs.frame).resolveKeyframes(measureAllKeyframes);
            }
        } else {
            this.readKeyframes();
            this.complete();
        }
    }
    readKeyframes() {
        const { unresolvedKeyframes, name, element, motionValue } = this;
        /**
         * If a keyframe is null, we hydrate it either by reading it from
         * the instance, or propagating from previous keyframes.
         */ for(let i = 0; i < unresolvedKeyframes.length; i++)if (unresolvedKeyframes[i] === null) {
            /**
                 * If the first keyframe is null, we need to find its value by sampling the element
                 */ if (i === 0) {
                const currentValue = motionValue === null || motionValue === void 0 ? void 0 : motionValue.get();
                const finalKeyframe = unresolvedKeyframes[unresolvedKeyframes.length - 1];
                if (currentValue !== undefined) unresolvedKeyframes[0] = currentValue;
                else if (element && name) {
                    const valueAsRead = element.readValue(name, finalKeyframe);
                    if (valueAsRead !== undefined && valueAsRead !== null) unresolvedKeyframes[0] = valueAsRead;
                }
                if (unresolvedKeyframes[0] === undefined) unresolvedKeyframes[0] = finalKeyframe;
                if (motionValue && currentValue === undefined) motionValue.set(unresolvedKeyframes[0]);
            } else unresolvedKeyframes[i] = unresolvedKeyframes[i - 1];
        }
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = true;
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe);
        toResolve.delete(this);
    }
    cancel() {
        if (!this.isComplete) {
            this.isScheduled = false;
            toResolve.delete(this);
        }
    }
    resume() {
        if (!this.isComplete) this.scheduleResolve();
    }
}

},{"../dom/utils/unit-conversion.mjs":"eo7gU","../../frameloop/frame.mjs":"ioJ38","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eo7gU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumOrPxType", ()=>isNumOrPxType);
parcelHelpers.export(exports, "positionalValues", ()=>positionalValues);
parcelHelpers.export(exports, "removeNonTranslationalTransform", ()=>removeNonTranslationalTransform);
var _indexMjs = require("../../../value/types/numbers/index.mjs");
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
var _keysTransformMjs = require("../../html/utils/keys-transform.mjs");
const isNumOrPxType = (v)=>v === (0, _indexMjs.number) || v === (0, _unitsMjs.px);
const getPosFromMatrix = (matrix, pos)=>parseFloat(matrix.split(", ")[pos]);
const getTranslateFromMatrix = (pos2, pos3)=>(_bbox, { transform })=>{
        if (transform === "none" || !transform) return 0;
        const matrix3d = transform.match(/^matrix3d\((.+)\)$/u);
        if (matrix3d) return getPosFromMatrix(matrix3d[1], pos3);
        else {
            const matrix = transform.match(/^matrix\((.+)\)$/u);
            if (matrix) return getPosFromMatrix(matrix[1], pos2);
            else return 0;
        }
    };
const transformKeys = new Set([
    "x",
    "y",
    "z"
]);
const nonTranslationalTransformKeys = (0, _keysTransformMjs.transformPropOrder).filter((key)=>!transformKeys.has(key));
function removeNonTranslationalTransform(visualElement) {
    const removedTransforms = [];
    nonTranslationalTransformKeys.forEach((key)=>{
        const value = visualElement.getValue(key);
        if (value !== undefined) {
            removedTransforms.push([
                key,
                value.get()
            ]);
            value.set(key.startsWith("scale") ? 1 : 0);
        }
    });
    return removedTransforms;
}
const positionalValues = {
    // Dimensions
    width: ({ x }, { paddingLeft = "0", paddingRight = "0" })=>x.max - x.min - parseFloat(paddingLeft) - parseFloat(paddingRight),
    height: ({ y }, { paddingTop = "0", paddingBottom = "0" })=>y.max - y.min - parseFloat(paddingTop) - parseFloat(paddingBottom),
    top: (_bbox, { top })=>parseFloat(top),
    left: (_bbox, { left })=>parseFloat(left),
    bottom: ({ y }, { top })=>parseFloat(top) + (y.max - y.min),
    right: ({ x }, { left })=>parseFloat(left) + (x.max - x.min),
    // Transform
    x: getTranslateFromMatrix(4, 13),
    y: getTranslateFromMatrix(5, 14)
};
// Alias translate longform names
positionalValues.translateX = positionalValues.x;
positionalValues.translateY = positionalValues.y;

},{"../../../value/types/numbers/index.mjs":"dvu2t","../../../value/types/numbers/units.mjs":"h2wSa","../../html/utils/keys-transform.mjs":"hFNpd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jM91C":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getVariableValue", ()=>getVariableValue);
parcelHelpers.export(exports, "parseCSSVariable", ()=>parseCSSVariable);
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _isNumericalStringMjs = require("../../../utils/is-numerical-string.mjs");
var _isCssVariableMjs = require("./is-css-variable.mjs");
/**
 * Parse Framer's special CSS variable format into a CSS token and a fallback.
 *
 * ```
 * `var(--foo, #fff)` => [`--foo`, '#fff']
 * ```
 *
 * @param current
 */ const splitCSSVariableRegex = // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function parseCSSVariable(current) {
    const match = splitCSSVariableRegex.exec(current);
    if (!match) return [
        , 
    ];
    const [, token1, token2, fallback] = match;
    return [
        `--${token1 !== null && token1 !== void 0 ? token1 : token2}`,
        fallback
    ];
}
const maxDepth = 4;
function getVariableValue(current, element, depth = 1) {
    (0, _errorsMjs.invariant)(depth <= maxDepth, `Max CSS variable fallback depth detected in property "${current}". This may indicate a circular fallback dependency.`);
    const [token, fallback] = parseCSSVariable(current);
    // No CSS variable detected
    if (!token) return;
    // Attempt to read this CSS variable off the element
    const resolved = window.getComputedStyle(element).getPropertyValue(token);
    if (resolved) {
        const trimmed = resolved.trim();
        return (0, _isNumericalStringMjs.isNumericalString)(trimmed) ? parseFloat(trimmed) : trimmed;
    }
    return (0, _isCssVariableMjs.isCSSVariableToken)(fallback) ? getVariableValue(fallback, element, depth + 1) : fallback;
}

},{"../../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../utils/is-numerical-string.mjs":"5t2Gr","./is-css-variable.mjs":"6ZbRI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5t2Gr":[function(require,module,exports,__globalThis) {
/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isNumericalString", ()=>isNumericalString);
const isNumericalString = (v)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6ZbRI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isCSSVariableName", ()=>isCSSVariableName);
parcelHelpers.export(exports, "isCSSVariableToken", ()=>isCSSVariableToken);
const checkStringStartsWith = (token)=>(key)=>typeof key === "string" && key.startsWith(token);
const isCSSVariableName = /*@__PURE__*/ checkStringStartsWith("--");
const startsAsVariableToken = /*@__PURE__*/ checkStringStartsWith("var(--");
const isCSSVariableToken = (value)=>{
    const startsWithToken = startsAsVariableToken(value);
    if (!startsWithToken) return false;
    // Ensure any comments are stripped from the value as this can harm performance of the regex.
    return singleCssVariableRegex.test(value.split("/*")[0].trim());
};
const singleCssVariableRegex = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"beMU3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "dimensionValueTypes", ()=>dimensionValueTypes);
parcelHelpers.export(exports, "findDimensionValueType", ()=>findDimensionValueType);
var _indexMjs = require("../../../value/types/numbers/index.mjs");
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
var _testMjs = require("./test.mjs");
var _typeAutoMjs = require("./type-auto.mjs");
/**
 * A list of value types commonly used for dimensions
 */ const dimensionValueTypes = [
    (0, _indexMjs.number),
    (0, _unitsMjs.px),
    (0, _unitsMjs.percent),
    (0, _unitsMjs.degrees),
    (0, _unitsMjs.vw),
    (0, _unitsMjs.vh),
    (0, _typeAutoMjs.auto)
];
/**
 * Tests a dimensional value against the list of dimension ValueTypes
 */ const findDimensionValueType = (v)=>dimensionValueTypes.find((0, _testMjs.testValueType)(v));

},{"../../../value/types/numbers/index.mjs":"dvu2t","../../../value/types/numbers/units.mjs":"h2wSa","./test.mjs":"b83qL","./type-auto.mjs":"1LuhX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b83qL":[function(require,module,exports,__globalThis) {
/**
 * Tests a provided value against a ValueType
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "testValueType", ()=>testValueType);
const testValueType = (v)=>(type)=>type.test(v);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1LuhX":[function(require,module,exports,__globalThis) {
/**
 * ValueType for "auto"
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "auto", ()=>auto);
const auto = {
    test: (v)=>v === "auto",
    parse: (v)=>v
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6AYL7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseAnimation", ()=>BaseAnimation);
var _syncTimeMjs = require("../../frameloop/sync-time.mjs");
var _keyframesResolverMjs = require("../../render/utils/KeyframesResolver.mjs");
var _useInstantTransitionStateMjs = require("../../utils/use-instant-transition-state.mjs");
var _canAnimateMjs = require("./utils/can-animate.mjs");
var _getFinalKeyframeMjs = require("./waapi/utils/get-final-keyframe.mjs");
/**
 * Maximum time allowed between an animation being created and it being
 * resolved for us to use the latter as the start time.
 *
 * This is to ensure that while we prefer to "start" an animation as soon
 * as it's triggered, we also want to avoid a visual jump if there's a big delay
 * between these two moments.
 */ const MAX_RESOLVE_DELAY = 40;
class BaseAnimation {
    constructor({ autoplay = true, delay = 0, type = "keyframes", repeat = 0, repeatDelay = 0, repeatType = "loop", ...options }){
        // Track whether the animation has been stopped. Stopped animations won't restart.
        this.isStopped = false;
        this.hasAttemptedResolve = false;
        this.createdAt = (0, _syncTimeMjs.time).now();
        this.options = {
            autoplay,
            delay,
            type,
            repeat,
            repeatDelay,
            repeatType,
            ...options
        };
        this.updateFinishedPromise();
    }
    /**
     * This method uses the createdAt and resolvedAt to calculate the
     * animation startTime. *Ideally*, we would use the createdAt time as t=0
     * as the following frame would then be the first frame of the animation in
     * progress, which would feel snappier.
     *
     * However, if there's a delay (main thread work) between the creation of
     * the animation and the first commited frame, we prefer to use resolvedAt
     * to avoid a sudden jump into the animation.
     */ calcStartTime() {
        if (!this.resolvedAt) return this.createdAt;
        return this.resolvedAt - this.createdAt > MAX_RESOLVE_DELAY ? this.resolvedAt : this.createdAt;
    }
    /**
     * A getter for resolved data. If keyframes are not yet resolved, accessing
     * this.resolved will synchronously flush all pending keyframe resolvers.
     * This is a deoptimisation, but at its worst still batches read/writes.
     */ get resolved() {
        if (!this._resolved && !this.hasAttemptedResolve) (0, _keyframesResolverMjs.flushKeyframeResolvers)();
        return this._resolved;
    }
    /**
     * A method to be called when the keyframes resolver completes. This method
     * will check if its possible to run the animation and, if not, skip it.
     * Otherwise, it will call initPlayback on the implementing class.
     */ onKeyframesResolved(keyframes, finalKeyframe) {
        this.resolvedAt = (0, _syncTimeMjs.time).now();
        this.hasAttemptedResolve = true;
        const { name, type, velocity, delay, onComplete, onUpdate, isGenerator } = this.options;
        /**
         * If we can't animate this value with the resolved keyframes
         * then we should complete it immediately.
         */ if (!isGenerator && !(0, _canAnimateMjs.canAnimate)(keyframes, name, type, velocity)) {
            // Finish immediately
            if ((0, _useInstantTransitionStateMjs.instantAnimationState).current || !delay) {
                onUpdate && onUpdate((0, _getFinalKeyframeMjs.getFinalKeyframe)(keyframes, this.options, finalKeyframe));
                onComplete && onComplete();
                this.resolveFinishedPromise();
                return;
            } else this.options.duration = 0;
        }
        const resolvedAnimation = this.initPlayback(keyframes, finalKeyframe);
        if (resolvedAnimation === false) return;
        this._resolved = {
            keyframes,
            finalKeyframe,
            ...resolvedAnimation
        };
        this.onPostResolved();
    }
    onPostResolved() {}
    /**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */ then(resolve, reject) {
        return this.currentFinishedPromise.then(resolve, reject);
    }
    flatten() {
        this.options.type = "keyframes";
        this.options.ease = "linear";
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise((resolve)=>{
            this.resolveFinishedPromise = resolve;
        });
    }
}

},{"../../frameloop/sync-time.mjs":"fXWE4","../../render/utils/KeyframesResolver.mjs":"drDqi","../../utils/use-instant-transition-state.mjs":"7g0Ue","./utils/can-animate.mjs":"bQDvy","./waapi/utils/get-final-keyframe.mjs":"5doYD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bQDvy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "canAnimate", ()=>canAnimate);
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _isGeneratorMjs = require("../../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs");
var _isAnimatableMjs = require("../../utils/is-animatable.mjs");
function hasKeyframesChanged(keyframes) {
    const current = keyframes[0];
    if (keyframes.length === 1) return true;
    for(let i = 0; i < keyframes.length; i++){
        if (keyframes[i] !== current) return true;
    }
}
function canAnimate(keyframes, name, type, velocity) {
    /**
     * Check if we're able to animate between the start and end keyframes,
     * and throw a warning if we're attempting to animate between one that's
     * animatable and another that isn't.
     */ const originKeyframe = keyframes[0];
    if (originKeyframe === null) return false;
    /**
     * These aren't traditionally animatable but we do support them.
     * In future we could look into making this more generic or replacing
     * this function with mix() === mixImmediate
     */ if (name === "display" || name === "visibility") return true;
    const targetKeyframe = keyframes[keyframes.length - 1];
    const isOriginAnimatable = (0, _isAnimatableMjs.isAnimatable)(originKeyframe, name);
    const isTargetAnimatable = (0, _isAnimatableMjs.isAnimatable)(targetKeyframe, name);
    (0, _errorsMjs.warning)(isOriginAnimatable === isTargetAnimatable, `You are trying to animate ${name} from "${originKeyframe}" to "${targetKeyframe}". ${originKeyframe} is not an animatable value - to enable this animation set ${originKeyframe} to a value animatable to ${targetKeyframe} via the \`style\` property.`);
    // Always skip if any of these are true
    if (!isOriginAnimatable || !isTargetAnimatable) return false;
    return hasKeyframesChanged(keyframes) || (type === "spring" || (0, _isGeneratorMjs.isGenerator)(type)) && velocity;
}

},{"../../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs":"fcH7M","../../utils/is-animatable.mjs":"6Pzfu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6Pzfu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isAnimatable", ()=>isAnimatable);
var _indexMjs = require("../../value/types/complex/index.mjs");
/**
 * Check if a value is animatable. Examples:
 *
 * ✅: 100, "100px", "#fff"
 * ❌: "block", "url(2.jpg)"
 * @param value
 *
 * @internal
 */ const isAnimatable = (value, name)=>{
    // If the list of keys tat might be non-animatable grows, replace with Set
    if (name === "zIndex") return false;
    // If it's a number or a keyframes array, we can animate it. We might at some point
    // need to do a deep isAnimatable check of keyframes, or let Popmotion handle this,
    // but for now lets leave it like this for performance reasons
    if (typeof value === "number" || Array.isArray(value)) return true;
    if (typeof value === "string" && // It's animatable if we have a string
    ((0, _indexMjs.complex).test(value) || value === "0") && // And it contains numbers and/or colors
    !value.startsWith("url(") // Unless it starts with "url("
    ) return true;
    return false;
};

},{"../../value/types/complex/index.mjs":"4Wy2N","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5doYD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFinalKeyframe", ()=>getFinalKeyframe);
const isNotNull = (value)=>value !== null;
function getFinalKeyframe(keyframes, { repeat, repeatType = "loop" }, finalKeyframe) {
    const resolvedKeyframes = keyframes.filter(isNotNull);
    const index = repeat && repeatType !== "loop" && repeat % 2 === 1 ? 0 : resolvedKeyframes.length - 1;
    return !index || finalKeyframe === undefined ? resolvedKeyframes[index] : finalKeyframe;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lg49T":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MainThreadAnimation", ()=>MainThreadAnimation);
parcelHelpers.export(exports, "animateValue", ()=>animateValue);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _timeConversionMjs = require("../../../../../motion-utils/dist/es/time-conversion.mjs");
var _calcDurationMjs = require("../../../../../motion-dom/dist/es/animation/generators/utils/calc-duration.mjs");
var _isGeneratorMjs = require("../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs");
var _keyframesResolverMjs = require("../../render/utils/KeyframesResolver.mjs");
var _clampMjs = require("../../utils/clamp.mjs");
var _indexMjs = require("../../utils/mix/index.mjs");
var _pipeMjs = require("../../utils/pipe.mjs");
var _inertiaMjs = require("../generators/inertia.mjs");
var _keyframesMjs = require("../generators/keyframes.mjs");
var _indexMjs1 = require("../generators/spring/index.mjs");
var _baseAnimationMjs = require("./BaseAnimation.mjs");
var _driverFrameloopMjs = require("./drivers/driver-frameloop.mjs");
var _getFinalKeyframeMjs = require("./waapi/utils/get-final-keyframe.mjs");
const generators = {
    decay: (0, _inertiaMjs.inertia),
    inertia: (0, _inertiaMjs.inertia),
    tween: (0, _keyframesMjs.keyframes),
    keyframes: (0, _keyframesMjs.keyframes),
    spring: (0, _indexMjs1.spring)
};
const percentToProgress = (percent)=>percent / 100;
/**
 * Animation that runs on the main thread. Designed to be WAAPI-spec in the subset of
 * features we expose publically. Mostly the compatibility is to ensure visual identity
 * between both WAAPI and main thread animations.
 */ class MainThreadAnimation extends (0, _baseAnimationMjs.BaseAnimation) {
    constructor(options){
        super(options);
        /**
         * The time at which the animation was paused.
         */ this.holdTime = null;
        /**
         * The time at which the animation was cancelled.
         */ this.cancelTime = null;
        /**
         * The current time of the animation.
         */ this.currentTime = 0;
        /**
         * Playback speed as a factor. 0 would be stopped, -1 reverse and 2 double speed.
         */ this.playbackSpeed = 1;
        /**
         * The state of the animation to apply when the animation is resolved. This
         * allows calls to the public API to control the animation before it is resolved,
         * without us having to resolve it first.
         */ this.pendingPlayState = "running";
        /**
         * The time at which the animation was started.
         */ this.startTime = null;
        this.state = "idle";
        /**
         * This method is bound to the instance to fix a pattern where
         * animation.stop is returned as a reference from a useEffect.
         */ this.stop = ()=>{
            this.resolver.cancel();
            this.isStopped = true;
            if (this.state === "idle") return;
            this.teardown();
            const { onStop } = this.options;
            onStop && onStop();
        };
        const { name, motionValue, element, keyframes } = this.options;
        const KeyframeResolver$1 = (element === null || element === void 0 ? void 0 : element.KeyframeResolver) || (0, _keyframesResolverMjs.KeyframeResolver);
        const onResolved = (resolvedKeyframes, finalKeyframe)=>this.onKeyframesResolved(resolvedKeyframes, finalKeyframe);
        this.resolver = new KeyframeResolver$1(keyframes, onResolved, name, motionValue, element);
        this.resolver.scheduleResolve();
    }
    flatten() {
        super.flatten();
        // If we've already resolved the animation, re-initialise it
        if (this._resolved) Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes));
    }
    initPlayback(keyframes$1) {
        const { type = "keyframes", repeat = 0, repeatDelay = 0, repeatType, velocity = 0 } = this.options;
        const generatorFactory = (0, _isGeneratorMjs.isGenerator)(type) ? type : generators[type] || (0, _keyframesMjs.keyframes);
        /**
         * If our generator doesn't support mixing numbers, we need to replace keyframes with
         * [0, 100] and then make a function that maps that to the actual keyframes.
         *
         * 100 is chosen instead of 1 as it works nicer with spring animations.
         */ let mapPercentToKeyframes;
        let mirroredGenerator;
        if (generatorFactory !== (0, _keyframesMjs.keyframes) && typeof keyframes$1[0] !== "number") {
            (0, _errorsMjs.invariant)(keyframes$1.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${keyframes$1}`);
            mapPercentToKeyframes = (0, _pipeMjs.pipe)(percentToProgress, (0, _indexMjs.mix)(keyframes$1[0], keyframes$1[1]));
            keyframes$1 = [
                0,
                100
            ];
        }
        const generator = generatorFactory({
            ...this.options,
            keyframes: keyframes$1
        });
        /**
         * If we have a mirror repeat type we need to create a second generator that outputs the
         * mirrored (not reversed) animation and later ping pong between the two generators.
         */ if (repeatType === "mirror") mirroredGenerator = generatorFactory({
            ...this.options,
            keyframes: [
                ...keyframes$1
            ].reverse(),
            velocity: -velocity
        });
        /**
         * If duration is undefined and we have repeat options,
         * we need to calculate a duration from the generator.
         *
         * We set it to the generator itself to cache the duration.
         * Any timeline resolver will need to have already precalculated
         * the duration by this step.
         */ if (generator.calculatedDuration === null) generator.calculatedDuration = (0, _calcDurationMjs.calcGeneratorDuration)(generator);
        const { calculatedDuration } = generator;
        const resolvedDuration = calculatedDuration + repeatDelay;
        const totalDuration = resolvedDuration * (repeat + 1) - repeatDelay;
        return {
            generator,
            mirroredGenerator,
            mapPercentToKeyframes,
            calculatedDuration,
            resolvedDuration,
            totalDuration
        };
    }
    onPostResolved() {
        const { autoplay = true } = this.options;
        this.play();
        if (this.pendingPlayState === "paused" || !autoplay) this.pause();
        else this.state = this.pendingPlayState;
    }
    tick(timestamp, sample = false) {
        const { resolved } = this;
        // If the animations has failed to resolve, return the final keyframe.
        if (!resolved) {
            const { keyframes } = this.options;
            return {
                done: true,
                value: keyframes[keyframes.length - 1]
            };
        }
        const { finalKeyframe, generator, mirroredGenerator, mapPercentToKeyframes, keyframes, calculatedDuration, totalDuration, resolvedDuration } = resolved;
        if (this.startTime === null) return generator.next(0);
        const { delay, repeat, repeatType, repeatDelay, onUpdate } = this.options;
        /**
         * requestAnimationFrame timestamps can come through as lower than
         * the startTime as set by performance.now(). Here we prevent this,
         * though in the future it could be possible to make setting startTime
         * a pending operation that gets resolved here.
         */ if (this.speed > 0) this.startTime = Math.min(this.startTime, timestamp);
        else if (this.speed < 0) this.startTime = Math.min(timestamp - totalDuration / this.speed, this.startTime);
        // Update currentTime
        if (sample) this.currentTime = timestamp;
        else if (this.holdTime !== null) this.currentTime = this.holdTime;
        else // Rounding the time because floating point arithmetic is not always accurate, e.g. 3000.367 - 1000.367 =
        // 2000.0000000000002. This is a problem when we are comparing the currentTime with the duration, for
        // example.
        this.currentTime = Math.round(timestamp - this.startTime) * this.speed;
        // Rebase on delay
        const timeWithoutDelay = this.currentTime - delay * (this.speed >= 0 ? 1 : -1);
        const isInDelayPhase = this.speed >= 0 ? timeWithoutDelay < 0 : timeWithoutDelay > totalDuration;
        this.currentTime = Math.max(timeWithoutDelay, 0);
        // If this animation has finished, set the current time  to the total duration.
        if (this.state === "finished" && this.holdTime === null) this.currentTime = totalDuration;
        let elapsed = this.currentTime;
        let frameGenerator = generator;
        if (repeat) {
            /**
             * Get the current progress (0-1) of the animation. If t is >
             * than duration we'll get values like 2.5 (midway through the
             * third iteration)
             */ const progress = Math.min(this.currentTime, totalDuration) / resolvedDuration;
            /**
             * Get the current iteration (0 indexed). For instance the floor of
             * 2.5 is 2.
             */ let currentIteration = Math.floor(progress);
            /**
             * Get the current progress of the iteration by taking the remainder
             * so 2.5 is 0.5 through iteration 2
             */ let iterationProgress = progress % 1.0;
            /**
             * If iteration progress is 1 we count that as the end
             * of the previous iteration.
             */ if (!iterationProgress && progress >= 1) iterationProgress = 1;
            iterationProgress === 1 && currentIteration--;
            currentIteration = Math.min(currentIteration, repeat + 1);
            /**
             * Reverse progress if we're not running in "normal" direction
             */ const isOddIteration = Boolean(currentIteration % 2);
            if (isOddIteration) {
                if (repeatType === "reverse") {
                    iterationProgress = 1 - iterationProgress;
                    if (repeatDelay) iterationProgress -= repeatDelay / resolvedDuration;
                } else if (repeatType === "mirror") frameGenerator = mirroredGenerator;
            }
            elapsed = (0, _clampMjs.clamp)(0, 1, iterationProgress) * resolvedDuration;
        }
        /**
         * If we're in negative time, set state as the initial keyframe.
         * This prevents delay: x, duration: 0 animations from finishing
         * instantly.
         */ const state = isInDelayPhase ? {
            done: false,
            value: keyframes[0]
        } : frameGenerator.next(elapsed);
        if (mapPercentToKeyframes) state.value = mapPercentToKeyframes(state.value);
        let { done } = state;
        if (!isInDelayPhase && calculatedDuration !== null) done = this.speed >= 0 ? this.currentTime >= totalDuration : this.currentTime <= 0;
        const isAnimationFinished = this.holdTime === null && (this.state === "finished" || this.state === "running" && done);
        if (isAnimationFinished && finalKeyframe !== undefined) state.value = (0, _getFinalKeyframeMjs.getFinalKeyframe)(keyframes, this.options, finalKeyframe);
        if (onUpdate) onUpdate(state.value);
        if (isAnimationFinished) this.finish();
        return state;
    }
    get duration() {
        const { resolved } = this;
        return resolved ? (0, _timeConversionMjs.millisecondsToSeconds)(resolved.calculatedDuration) : 0;
    }
    get time() {
        return (0, _timeConversionMjs.millisecondsToSeconds)(this.currentTime);
    }
    set time(newTime) {
        newTime = (0, _timeConversionMjs.secondsToMilliseconds)(newTime);
        this.currentTime = newTime;
        if (this.holdTime !== null || this.speed === 0) this.holdTime = newTime;
        else if (this.driver) this.startTime = this.driver.now() - newTime / this.speed;
    }
    get speed() {
        return this.playbackSpeed;
    }
    set speed(newSpeed) {
        const hasChanged = this.playbackSpeed !== newSpeed;
        this.playbackSpeed = newSpeed;
        if (hasChanged) this.time = (0, _timeConversionMjs.millisecondsToSeconds)(this.currentTime);
    }
    play() {
        if (!this.resolver.isScheduled) this.resolver.resume();
        if (!this._resolved) {
            this.pendingPlayState = "running";
            return;
        }
        if (this.isStopped) return;
        const { driver = (0, _driverFrameloopMjs.frameloopDriver), onPlay, startTime } = this.options;
        if (!this.driver) this.driver = driver((timestamp)=>this.tick(timestamp));
        onPlay && onPlay();
        const now = this.driver.now();
        if (this.holdTime !== null) this.startTime = now - this.holdTime;
        else if (!this.startTime) this.startTime = startTime !== null && startTime !== void 0 ? startTime : this.calcStartTime();
        else if (this.state === "finished") this.startTime = now;
        if (this.state === "finished") this.updateFinishedPromise();
        this.cancelTime = this.startTime;
        this.holdTime = null;
        /**
         * Set playState to running only after we've used it in
         * the previous logic.
         */ this.state = "running";
        this.driver.start();
    }
    pause() {
        var _a;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return;
        }
        this.state = "paused";
        this.holdTime = (_a = this.currentTime) !== null && _a !== void 0 ? _a : 0;
    }
    complete() {
        if (this.state !== "running") this.play();
        this.pendingPlayState = this.state = "finished";
        this.holdTime = null;
    }
    finish() {
        this.teardown();
        this.state = "finished";
        const { onComplete } = this.options;
        onComplete && onComplete();
    }
    cancel() {
        if (this.cancelTime !== null) this.tick(this.cancelTime);
        this.teardown();
        this.updateFinishedPromise();
    }
    teardown() {
        this.state = "idle";
        this.stopDriver();
        this.resolveFinishedPromise();
        this.updateFinishedPromise();
        this.startTime = this.cancelTime = null;
        this.resolver.cancel();
    }
    stopDriver() {
        if (!this.driver) return;
        this.driver.stop();
        this.driver = undefined;
    }
    sample(time) {
        this.startTime = 0;
        return this.tick(time, true);
    }
}
// Legacy interface
function animateValue(options) {
    return new MainThreadAnimation(options);
}

},{"../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../motion-utils/dist/es/time-conversion.mjs":"1wf1y","../../../../../motion-dom/dist/es/animation/generators/utils/calc-duration.mjs":"5s6BJ","../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs":"fcH7M","../../render/utils/KeyframesResolver.mjs":"drDqi","../../utils/clamp.mjs":"6850m","../../utils/mix/index.mjs":"jvTPs","../../utils/pipe.mjs":"g7oUq","../generators/inertia.mjs":"lyRWZ","../generators/keyframes.mjs":"d4ec4","../generators/spring/index.mjs":"dL8lv","./BaseAnimation.mjs":"6AYL7","./drivers/driver-frameloop.mjs":"6n6MU","./waapi/utils/get-final-keyframe.mjs":"5doYD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jvTPs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mix", ()=>mix);
var _complexMjs = require("./complex.mjs");
var _numberMjs = require("./number.mjs");
function mix(from, to, p) {
    if (typeof from === "number" && typeof to === "number" && typeof p === "number") return (0, _numberMjs.mixNumber)(from, to, p);
    const mixer = (0, _complexMjs.getMixer)(from);
    return mixer(from, to);
}

},{"./complex.mjs":"2oOlx","./number.mjs":"eTqUz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2oOlx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getMixer", ()=>getMixer);
parcelHelpers.export(exports, "mixArray", ()=>mixArray);
parcelHelpers.export(exports, "mixComplex", ()=>mixComplex);
parcelHelpers.export(exports, "mixObject", ()=>mixObject);
var _numberMjs = require("./number.mjs");
var _colorMjs = require("./color.mjs");
var _pipeMjs = require("../pipe.mjs");
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _indexMjs = require("../../value/types/color/index.mjs");
var _indexMjs1 = require("../../value/types/complex/index.mjs");
var _isCssVariableMjs = require("../../render/dom/utils/is-css-variable.mjs");
var _visibilityMjs = require("./visibility.mjs");
var _immediateMjs = require("./immediate.mjs");
function mixNumber(a, b) {
    return (p)=>(0, _numberMjs.mixNumber)(a, b, p);
}
function getMixer(a) {
    if (typeof a === "number") return mixNumber;
    else if (typeof a === "string") return (0, _isCssVariableMjs.isCSSVariableToken)(a) ? (0, _immediateMjs.mixImmediate) : (0, _indexMjs.color).test(a) ? (0, _colorMjs.mixColor) : mixComplex;
    else if (Array.isArray(a)) return mixArray;
    else if (typeof a === "object") return (0, _indexMjs.color).test(a) ? (0, _colorMjs.mixColor) : mixObject;
    return 0, _immediateMjs.mixImmediate;
}
function mixArray(a, b) {
    const output = [
        ...a
    ];
    const numValues = output.length;
    const blendValue = a.map((v, i)=>getMixer(v)(v, b[i]));
    return (p)=>{
        for(let i = 0; i < numValues; i++)output[i] = blendValue[i](p);
        return output;
    };
}
function mixObject(a, b) {
    const output = {
        ...a,
        ...b
    };
    const blendValue = {};
    for(const key in output)if (a[key] !== undefined && b[key] !== undefined) blendValue[key] = getMixer(a[key])(a[key], b[key]);
    return (v)=>{
        for(const key in blendValue)output[key] = blendValue[key](v);
        return output;
    };
}
function matchOrder(origin, target) {
    var _a;
    const orderedOrigin = [];
    const pointers = {
        color: 0,
        var: 0,
        number: 0
    };
    for(let i = 0; i < target.values.length; i++){
        const type = target.types[i];
        const originIndex = origin.indexes[type][pointers[type]];
        const originValue = (_a = origin.values[originIndex]) !== null && _a !== void 0 ? _a : 0;
        orderedOrigin[i] = originValue;
        pointers[type]++;
    }
    return orderedOrigin;
}
const mixComplex = (origin, target)=>{
    const template = (0, _indexMjs1.complex).createTransformer(target);
    const originStats = (0, _indexMjs1.analyseComplexValue)(origin);
    const targetStats = (0, _indexMjs1.analyseComplexValue)(target);
    const canInterpolate = originStats.indexes.var.length === targetStats.indexes.var.length && originStats.indexes.color.length === targetStats.indexes.color.length && originStats.indexes.number.length >= targetStats.indexes.number.length;
    if (canInterpolate) {
        if ((0, _visibilityMjs.invisibleValues).has(origin) && !targetStats.values.length || (0, _visibilityMjs.invisibleValues).has(target) && !originStats.values.length) return (0, _visibilityMjs.mixVisibility)(origin, target);
        return (0, _pipeMjs.pipe)(mixArray(matchOrder(originStats, targetStats), targetStats.values), template);
    } else {
        (0, _errorsMjs.warning)(true, `Complex values '${origin}' and '${target}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`);
        return (0, _immediateMjs.mixImmediate)(origin, target);
    }
};

},{"./number.mjs":"eTqUz","./color.mjs":"aAC4u","../pipe.mjs":"g7oUq","../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../value/types/color/index.mjs":"cHA3X","../../value/types/complex/index.mjs":"4Wy2N","../../render/dom/utils/is-css-variable.mjs":"6ZbRI","./visibility.mjs":"5ZSPC","./immediate.mjs":"0nWzV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aAC4u":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mixColor", ()=>mixColor);
parcelHelpers.export(exports, "mixLinearColor", ()=>mixLinearColor);
var _numberMjs = require("./number.mjs");
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _hslaToRgbaMjs = require("../hsla-to-rgba.mjs");
var _hexMjs = require("../../value/types/color/hex.mjs");
var _rgbaMjs = require("../../value/types/color/rgba.mjs");
var _hslaMjs = require("../../value/types/color/hsla.mjs");
var _immediateMjs = require("./immediate.mjs");
// Linear color space blending
// Explained https://www.youtube.com/watch?v=LKnqECcg6Gw
// Demonstrated http://codepen.io/osublake/pen/xGVVaN
const mixLinearColor = (from, to, v)=>{
    const fromExpo = from * from;
    const expo = v * (to * to - fromExpo) + fromExpo;
    return expo < 0 ? 0 : Math.sqrt(expo);
};
const colorTypes = [
    (0, _hexMjs.hex),
    (0, _rgbaMjs.rgba),
    (0, _hslaMjs.hsla)
];
const getColorType = (v)=>colorTypes.find((type)=>type.test(v));
function asRGBA(color) {
    const type = getColorType(color);
    (0, _errorsMjs.warning)(Boolean(type), `'${color}' is not an animatable color. Use the equivalent color code instead.`);
    if (!Boolean(type)) return false;
    let model = type.parse(color);
    if (type === (0, _hslaMjs.hsla)) // TODO Remove this cast - needed since Motion's stricter typing
    model = (0, _hslaToRgbaMjs.hslaToRgba)(model);
    return model;
}
const mixColor = (from, to)=>{
    const fromRGBA = asRGBA(from);
    const toRGBA = asRGBA(to);
    if (!fromRGBA || !toRGBA) return (0, _immediateMjs.mixImmediate)(from, to);
    const blended = {
        ...fromRGBA
    };
    return (v)=>{
        blended.red = mixLinearColor(fromRGBA.red, toRGBA.red, v);
        blended.green = mixLinearColor(fromRGBA.green, toRGBA.green, v);
        blended.blue = mixLinearColor(fromRGBA.blue, toRGBA.blue, v);
        blended.alpha = (0, _numberMjs.mixNumber)(fromRGBA.alpha, toRGBA.alpha, v);
        return (0, _rgbaMjs.rgba).transform(blended);
    };
};

},{"./number.mjs":"eTqUz","../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../hsla-to-rgba.mjs":"jT6y4","../../value/types/color/hex.mjs":"dQ3Wi","../../value/types/color/rgba.mjs":"6hWKD","../../value/types/color/hsla.mjs":"5mOcn","./immediate.mjs":"0nWzV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jT6y4":[function(require,module,exports,__globalThis) {
// Adapted from https://gist.github.com/mjackson/5311256
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hslaToRgba", ()=>hslaToRgba);
function hueToRgb(p, q, t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 0.5) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
}
function hslaToRgba({ hue, saturation, lightness, alpha }) {
    hue /= 360;
    saturation /= 100;
    lightness /= 100;
    let red = 0;
    let green = 0;
    let blue = 0;
    if (!saturation) red = green = blue = lightness;
    else {
        const q = lightness < 0.5 ? lightness * (1 + saturation) : lightness + saturation - lightness * saturation;
        const p = 2 * lightness - q;
        red = hueToRgb(p, q, hue + 1 / 3);
        green = hueToRgb(p, q, hue);
        blue = hueToRgb(p, q, hue - 1 / 3);
    }
    return {
        red: Math.round(red * 255),
        green: Math.round(green * 255),
        blue: Math.round(blue * 255),
        alpha
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"0nWzV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "mixImmediate", ()=>mixImmediate);
function mixImmediate(a, b) {
    return (p)=>p > 0 ? b : a;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g7oUq":[function(require,module,exports,__globalThis) {
/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pipe", ()=>pipe);
const combineFunctions = (a, b)=>(v)=>b(a(v));
const pipe = (...transformers)=>transformers.reduce(combineFunctions);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5ZSPC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "invisibleValues", ()=>invisibleValues);
parcelHelpers.export(exports, "mixVisibility", ()=>mixVisibility);
const invisibleValues = new Set([
    "none",
    "hidden"
]);
/**
 * Returns a function that, when provided a progress value between 0 and 1,
 * will return the "none" or "hidden" string only when the progress is that of
 * the origin or target.
 */ function mixVisibility(origin, target) {
    if (invisibleValues.has(origin)) return (p)=>p <= 0 ? origin : target;
    else return (p)=>p >= 1 ? target : origin;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lyRWZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inertia", ()=>inertia);
var _indexMjs = require("./spring/index.mjs");
var _velocityMjs = require("./utils/velocity.mjs");
function inertia({ keyframes, velocity = 0.0, power = 0.8, timeConstant = 325, bounceDamping = 10, bounceStiffness = 500, modifyTarget, min, max, restDelta = 0.5, restSpeed }) {
    const origin = keyframes[0];
    const state = {
        done: false,
        value: origin
    };
    const isOutOfBounds = (v)=>min !== undefined && v < min || max !== undefined && v > max;
    const nearestBoundary = (v)=>{
        if (min === undefined) return max;
        if (max === undefined) return min;
        return Math.abs(min - v) < Math.abs(max - v) ? min : max;
    };
    let amplitude = power * velocity;
    const ideal = origin + amplitude;
    const target = modifyTarget === undefined ? ideal : modifyTarget(ideal);
    /**
     * If the target has changed we need to re-calculate the amplitude, otherwise
     * the animation will start from the wrong position.
     */ if (target !== ideal) amplitude = target - origin;
    const calcDelta = (t)=>-amplitude * Math.exp(-t / timeConstant);
    const calcLatest = (t)=>target + calcDelta(t);
    const applyFriction = (t)=>{
        const delta = calcDelta(t);
        const latest = calcLatest(t);
        state.done = Math.abs(delta) <= restDelta;
        state.value = state.done ? target : latest;
    };
    /**
     * Ideally this would resolve for t in a stateless way, we could
     * do that by always precalculating the animation but as we know
     * this will be done anyway we can assume that spring will
     * be discovered during that.
     */ let timeReachedBoundary;
    let spring$1;
    const checkCatchBoundary = (t)=>{
        if (!isOutOfBounds(state.value)) return;
        timeReachedBoundary = t;
        spring$1 = (0, _indexMjs.spring)({
            keyframes: [
                state.value,
                nearestBoundary(state.value)
            ],
            velocity: (0, _velocityMjs.calcGeneratorVelocity)(calcLatest, t, state.value),
            damping: bounceDamping,
            stiffness: bounceStiffness,
            restDelta,
            restSpeed
        });
    };
    checkCatchBoundary(0);
    return {
        calculatedDuration: null,
        next: (t)=>{
            /**
             * We need to resolve the friction to figure out if we need a
             * spring but we don't want to do this twice per frame. So here
             * we flag if we updated for this frame and later if we did
             * we can skip doing it again.
             */ let hasUpdatedFrame = false;
            if (!spring$1 && timeReachedBoundary === undefined) {
                hasUpdatedFrame = true;
                applyFriction(t);
                checkCatchBoundary(t);
            }
            /**
             * If we have a spring and the provided t is beyond the moment the friction
             * animation crossed the min/max boundary, use the spring.
             */ if (timeReachedBoundary !== undefined && t >= timeReachedBoundary) return spring$1.next(t - timeReachedBoundary);
            else {
                !hasUpdatedFrame && applyFriction(t);
                return state;
            }
        }
    };
}

},{"./spring/index.mjs":"dL8lv","./utils/velocity.mjs":"nIjPY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d4ec4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultEasing", ()=>defaultEasing);
parcelHelpers.export(exports, "keyframes", ()=>keyframes);
var _easeMjs = require("../../easing/ease.mjs");
var _isEasingArrayMjs = require("../../easing/utils/is-easing-array.mjs");
var _mapMjs = require("../../easing/utils/map.mjs");
var _interpolateMjs = require("../../utils/interpolate.mjs");
var _defaultMjs = require("../../utils/offsets/default.mjs");
var _timeMjs = require("../../utils/offsets/time.mjs");
function defaultEasing(values, easing) {
    return values.map(()=>easing || (0, _easeMjs.easeInOut)).splice(0, values.length - 1);
}
function keyframes({ duration = 300, keyframes: keyframeValues, times, ease = "easeInOut" }) {
    /**
     * Easing functions can be externally defined as strings. Here we convert them
     * into actual functions.
     */ const easingFunctions = (0, _isEasingArrayMjs.isEasingArray)(ease) ? ease.map((0, _mapMjs.easingDefinitionToFunction)) : (0, _mapMjs.easingDefinitionToFunction)(ease);
    /**
     * This is the Iterator-spec return value. We ensure it's mutable rather than using a generator
     * to reduce GC during animation.
     */ const state = {
        done: false,
        value: keyframeValues[0]
    };
    /**
     * Create a times array based on the provided 0-1 offsets
     */ const absoluteTimes = (0, _timeMjs.convertOffsetToTimes)(// Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    times && times.length === keyframeValues.length ? times : (0, _defaultMjs.defaultOffset)(keyframeValues), duration);
    const mapTimeToKeyframe = (0, _interpolateMjs.interpolate)(absoluteTimes, keyframeValues, {
        ease: Array.isArray(easingFunctions) ? easingFunctions : defaultEasing(keyframeValues, easingFunctions)
    });
    return {
        calculatedDuration: duration,
        next: (t)=>{
            state.value = mapTimeToKeyframe(t);
            state.done = t >= duration;
            return state;
        }
    };
}

},{"../../easing/ease.mjs":"4HhqJ","../../easing/utils/is-easing-array.mjs":"ebEFF","../../easing/utils/map.mjs":"aGdcx","../../utils/interpolate.mjs":"88umT","../../utils/offsets/default.mjs":"8go8U","../../utils/offsets/time.mjs":"5iCbl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4HhqJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "easeIn", ()=>easeIn);
parcelHelpers.export(exports, "easeInOut", ()=>easeInOut);
parcelHelpers.export(exports, "easeOut", ()=>easeOut);
var _cubicBezierMjs = require("./cubic-bezier.mjs");
const easeIn = /*@__PURE__*/ (0, _cubicBezierMjs.cubicBezier)(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0, _cubicBezierMjs.cubicBezier)(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0, _cubicBezierMjs.cubicBezier)(0.42, 0, 0.58, 1);

},{"./cubic-bezier.mjs":"iZzhX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aGdcx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "easingDefinitionToFunction", ()=>easingDefinitionToFunction);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _noopMjs = require("../../../../../motion-utils/dist/es/noop.mjs");
var _isBezierDefinitionMjs = require("../../../../../motion-dom/dist/es/utils/is-bezier-definition.mjs");
var _anticipateMjs = require("../anticipate.mjs");
var _backMjs = require("../back.mjs");
var _circMjs = require("../circ.mjs");
var _cubicBezierMjs = require("../cubic-bezier.mjs");
var _easeMjs = require("../ease.mjs");
const easingLookup = {
    linear: (0, _noopMjs.noop),
    easeIn: (0, _easeMjs.easeIn),
    easeInOut: (0, _easeMjs.easeInOut),
    easeOut: (0, _easeMjs.easeOut),
    circIn: (0, _circMjs.circIn),
    circInOut: (0, _circMjs.circInOut),
    circOut: (0, _circMjs.circOut),
    backIn: (0, _backMjs.backIn),
    backInOut: (0, _backMjs.backInOut),
    backOut: (0, _backMjs.backOut),
    anticipate: (0, _anticipateMjs.anticipate)
};
const easingDefinitionToFunction = (definition)=>{
    if ((0, _isBezierDefinitionMjs.isBezierDefinition)(definition)) {
        // If cubic bezier definition, create bezier curve
        (0, _errorsMjs.invariant)(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`);
        const [x1, y1, x2, y2] = definition;
        return (0, _cubicBezierMjs.cubicBezier)(x1, y1, x2, y2);
    } else if (typeof definition === "string") {
        // Else lookup from table
        (0, _errorsMjs.invariant)(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`);
        return easingLookup[definition];
    }
    return definition;
};

},{"../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../motion-utils/dist/es/noop.mjs":"dgfzh","../../../../../motion-dom/dist/es/utils/is-bezier-definition.mjs":"hXCaz","../anticipate.mjs":"jDHo0","../back.mjs":"ef8eT","../circ.mjs":"fNYPu","../cubic-bezier.mjs":"iZzhX","../ease.mjs":"4HhqJ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"88umT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "interpolate", ()=>interpolate);
var _errorsMjs = require("../../../../motion-utils/dist/es/errors.mjs");
var _noopMjs = require("../../../../motion-utils/dist/es/noop.mjs");
var _progressMjs = require("../../../../motion-utils/dist/es/progress.mjs");
var _clampMjs = require("./clamp.mjs");
var _indexMjs = require("./mix/index.mjs");
var _pipeMjs = require("./pipe.mjs");
function createMixers(output, ease, customMixer) {
    const mixers = [];
    const mixerFactory = customMixer || (0, _indexMjs.mix);
    const numMixers = output.length - 1;
    for(let i = 0; i < numMixers; i++){
        let mixer = mixerFactory(output[i], output[i + 1]);
        if (ease) {
            const easingFunction = Array.isArray(ease) ? ease[i] || (0, _noopMjs.noop) : ease;
            mixer = (0, _pipeMjs.pipe)(easingFunction, mixer);
        }
        mixers.push(mixer);
    }
    return mixers;
}
/**
 * Create a function that maps from a numerical input array to a generic output array.
 *
 * Accepts:
 *   - Numbers
 *   - Colors (hex, hsl, hsla, rgb, rgba)
 *   - Complex (combinations of one or more numbers or strings)
 *
 * ```jsx
 * const mixColor = interpolate([0, 1], ['#fff', '#000'])
 *
 * mixColor(0.5) // 'rgba(128, 128, 128, 1)'
 * ```
 *
 * TODO Revist this approach once we've moved to data models for values,
 * probably not needed to pregenerate mixer functions.
 *
 * @public
 */ function interpolate(input, output, { clamp: isClamp = true, ease, mixer } = {}) {
    const inputLength = input.length;
    (0, _errorsMjs.invariant)(inputLength === output.length, "Both input and output ranges must be the same length");
    /**
     * If we're only provided a single input, we can just make a function
     * that returns the output.
     */ if (inputLength === 1) return ()=>output[0];
    if (inputLength === 2 && output[0] === output[1]) return ()=>output[1];
    const isZeroDeltaRange = input[0] === input[1];
    // If input runs highest -> lowest, reverse both arrays
    if (input[0] > input[inputLength - 1]) {
        input = [
            ...input
        ].reverse();
        output = [
            ...output
        ].reverse();
    }
    const mixers = createMixers(output, ease, mixer);
    const numMixers = mixers.length;
    const interpolator = (v)=>{
        if (isZeroDeltaRange && v < input[0]) return output[0];
        let i = 0;
        if (numMixers > 1) for(; i < input.length - 2; i++){
            if (v < input[i + 1]) break;
        }
        const progressInRange = (0, _progressMjs.progress)(input[i], input[i + 1], v);
        return mixers[i](progressInRange);
    };
    return isClamp ? (v)=>interpolator((0, _clampMjs.clamp)(input[0], input[inputLength - 1], v)) : interpolator;
}

},{"../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../motion-utils/dist/es/noop.mjs":"dgfzh","../../../../motion-utils/dist/es/progress.mjs":"lOsdJ","./clamp.mjs":"6850m","./mix/index.mjs":"jvTPs","./pipe.mjs":"g7oUq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5iCbl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertOffsetToTimes", ()=>convertOffsetToTimes);
function convertOffsetToTimes(offset, duration) {
    return offset.map((o)=>o * duration);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6n6MU":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "frameloopDriver", ()=>frameloopDriver);
var _syncTimeMjs = require("../../../frameloop/sync-time.mjs");
var _frameMjs = require("../../../frameloop/frame.mjs");
const frameloopDriver = (update)=>{
    const passTimestamp = ({ timestamp })=>update(timestamp);
    return {
        start: ()=>(0, _frameMjs.frame).update(passTimestamp, true),
        stop: ()=>(0, _frameMjs.cancelFrame)(passTimestamp),
        /**
         * If we're processing this frame we can use the
         * framelocked timestamp to keep things in sync.
         */ now: ()=>(0, _frameMjs.frameData).isProcessing ? (0, _frameMjs.frameData).timestamp : (0, _syncTimeMjs.time).now()
    };
};

},{"../../../frameloop/sync-time.mjs":"fXWE4","../../../frameloop/frame.mjs":"ioJ38","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eAB7X":[function(require,module,exports,__globalThis) {
/**
 * A list of values that can be hardware-accelerated.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "acceleratedValues", ()=>acceleratedValues);
const acceleratedValues = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform"
]);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6XvMk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "startWaapiAnimation", ()=>startWaapiAnimation);
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _easingMjs = require("../../../../../../motion-dom/dist/es/animation/waapi/utils/easing.mjs");
function startWaapiAnimation(element, valueName, keyframes, { delay = 0, duration = 300, repeat = 0, repeatType = "loop", ease = "easeInOut", times } = {}) {
    const keyframeOptions = {
        [valueName]: keyframes
    };
    if (times) keyframeOptions.offset = times;
    const easing = (0, _easingMjs.mapEasingToNativeEasing)(ease, duration);
    /**
     * If this is an easing array, apply to keyframes, not animation as a whole
     */ if (Array.isArray(easing)) keyframeOptions.easing = easing;
    return element.animate(keyframeOptions, {
        delay,
        duration,
        easing: !Array.isArray(easing) ? easing : "linear",
        fill: "both",
        iterations: repeat + 1,
        direction: repeatType === "reverse" ? "alternate" : "normal"
    });
}

},{"../../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../../motion-dom/dist/es/animation/waapi/utils/easing.mjs":"k5tqx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bT0BF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsWaapi", ()=>supportsWaapi);
var _errorsMjs = require("../../../../../../../motion-utils/dist/es/errors.mjs");
var _memoMjs = require("../../../../../../../motion-utils/dist/es/memo.mjs");
const supportsWaapi = /*@__PURE__*/ (0, _memoMjs.memo)(()=>Object.hasOwnProperty.call(Element.prototype, "animate"));

},{"../../../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../../../motion-utils/dist/es/memo.mjs":"9brTq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7XbUR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getDefaultTransition", ()=>getDefaultTransition);
var _keysTransformMjs = require("../../render/html/utils/keys-transform.mjs");
const underDampedSpring = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
};
const criticallyDampedSpring = (target)=>({
        type: "spring",
        stiffness: 550,
        damping: target === 0 ? 2 * Math.sqrt(550) : 30,
        restSpeed: 10
    });
const keyframesTransition = {
    type: "keyframes",
    duration: 0.8
};
/**
 * Default easing curve is a slightly shallower version of
 * the default browser easing curve.
 */ const ease = {
    type: "keyframes",
    ease: [
        0.25,
        0.1,
        0.35,
        1
    ],
    duration: 0.3
};
const getDefaultTransition = (valueKey, { keyframes })=>{
    if (keyframes.length > 2) return keyframesTransition;
    else if ((0, _keysTransformMjs.transformProps).has(valueKey)) return valueKey.startsWith("scale") ? criticallyDampedSpring(keyframes[1]) : underDampedSpring;
    return ease;
};

},{"../../render/html/utils/keys-transform.mjs":"hFNpd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2lPLR":[function(require,module,exports,__globalThis) {
/**
 * Decide whether a transition is defined on a given Transition.
 * This filters out orchestration options and returns true
 * if any options are left.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isTransitionDefined", ()=>isTransitionDefined);
function isTransitionDefined({ when, delay: _delay, delayChildren, staggerChildren, staggerDirection, repeat, repeatType, repeatDelay, from, elapsed, ...transition }) {
    return !!Object.keys(transition).length;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6MvVM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDOMVisualElement", ()=>createDOMVisualElement);
parcelHelpers.export(exports, "createObjectVisualElement", ()=>createObjectVisualElement);
var _isSvgElementMjs = require("../../render/dom/utils/is-svg-element.mjs");
var _svgvisualElementMjs = require("../../render/svg/SVGVisualElement.mjs");
var _htmlvisualElementMjs = require("../../render/html/HTMLVisualElement.mjs");
var _storeMjs = require("../../render/store.mjs");
var _objectVisualElementMjs = require("../../render/object/ObjectVisualElement.mjs");
function createDOMVisualElement(element) {
    const options = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                transform: {},
                transformOrigin: {},
                style: {},
                vars: {},
                attrs: {}
            },
            latestValues: {}
        }
    };
    const node = (0, _isSvgElementMjs.isSVGElement)(element) ? new (0, _svgvisualElementMjs.SVGVisualElement)(options) : new (0, _htmlvisualElementMjs.HTMLVisualElement)(options);
    node.mount(element);
    (0, _storeMjs.visualElementStore).set(element, node);
}
function createObjectVisualElement(subject) {
    const options = {
        presenceContext: null,
        props: {},
        visualState: {
            renderState: {
                output: {}
            },
            latestValues: {}
        }
    };
    const node = new (0, _objectVisualElementMjs.ObjectVisualElement)(options);
    node.mount(subject);
    (0, _storeMjs.visualElementStore).set(subject, node);
}

},{"../../render/dom/utils/is-svg-element.mjs":"lz3yt","../../render/svg/SVGVisualElement.mjs":"f88VW","../../render/html/HTMLVisualElement.mjs":"gs88C","../../render/store.mjs":"f7Acv","../../render/object/ObjectVisualElement.mjs":"YZgDM","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lz3yt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSVGElement", ()=>isSVGElement);
function isSVGElement(element) {
    return element instanceof SVGElement && element.tagName !== "svg";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f88VW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SVGVisualElement", ()=>SVGVisualElement);
var _frameMjs = require("../../frameloop/frame.mjs");
var _modelsMjs = require("../../projection/geometry/models.mjs");
var _domvisualElementMjs = require("../dom/DOMVisualElement.mjs");
var _camelToDashMjs = require("../dom/utils/camel-to-dash.mjs");
var _defaultsMjs = require("../dom/value-types/defaults.mjs");
var _keysTransformMjs = require("../html/utils/keys-transform.mjs");
var _buildAttrsMjs = require("./utils/build-attrs.mjs");
var _camelCaseAttrsMjs = require("./utils/camel-case-attrs.mjs");
var _isSvgTagMjs = require("./utils/is-svg-tag.mjs");
var _measureMjs = require("./utils/measure.mjs");
var _renderMjs = require("./utils/render.mjs");
var _scrapeMotionValuesMjs = require("./utils/scrape-motion-values.mjs");
class SVGVisualElement extends (0, _domvisualElementMjs.DOMVisualElement) {
    constructor(){
        super(...arguments);
        this.type = "svg";
        this.isSVGTag = false;
        this.measureInstanceViewportBox = (0, _modelsMjs.createBox);
        this.updateDimensions = ()=>{
            if (this.current && !this.renderState.dimensions) (0, _measureMjs.updateSVGDimensions)(this.current, this.renderState);
        };
    }
    getBaseTargetFromProps(props, key) {
        return props[key];
    }
    readValueFromInstance(instance, key) {
        if ((0, _keysTransformMjs.transformProps).has(key)) {
            const defaultType = (0, _defaultsMjs.getDefaultValueType)(key);
            return defaultType ? defaultType.default || 0 : 0;
        }
        key = !(0, _camelCaseAttrsMjs.camelCaseAttributes).has(key) ? (0, _camelToDashMjs.camelToDash)(key) : key;
        return instance.getAttribute(key);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
        return (0, _scrapeMotionValuesMjs.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    }
    onBindTransform() {
        if (this.current && !this.renderState.dimensions) (0, _frameMjs.frame).postRender(this.updateDimensions);
    }
    build(renderState, latestValues, props) {
        (0, _buildAttrsMjs.buildSVGAttrs)(renderState, latestValues, this.isSVGTag, props.transformTemplate);
    }
    renderInstance(instance, renderState, styleProp, projection) {
        (0, _renderMjs.renderSVG)(instance, renderState, styleProp, projection);
    }
    mount(instance) {
        this.isSVGTag = (0, _isSvgTagMjs.isSVGTag)(instance.tagName);
        super.mount(instance);
    }
}

},{"../../frameloop/frame.mjs":"ioJ38","../../projection/geometry/models.mjs":"dqfGO","../dom/DOMVisualElement.mjs":"dULes","../dom/utils/camel-to-dash.mjs":"bQQC2","../dom/value-types/defaults.mjs":"bGiYG","../html/utils/keys-transform.mjs":"hFNpd","./utils/build-attrs.mjs":"dN9dN","./utils/camel-case-attrs.mjs":"hxaG9","./utils/is-svg-tag.mjs":"eqmuR","./utils/measure.mjs":"2Rkzy","./utils/render.mjs":"ciLyB","./utils/scrape-motion-values.mjs":"lmVtx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dqfGO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createAxis", ()=>createAxis);
parcelHelpers.export(exports, "createAxisDelta", ()=>createAxisDelta);
parcelHelpers.export(exports, "createBox", ()=>createBox);
parcelHelpers.export(exports, "createDelta", ()=>createDelta);
const createAxisDelta = ()=>({
        translate: 0,
        scale: 1,
        origin: 0,
        originPoint: 0
    });
const createDelta = ()=>({
        x: createAxisDelta(),
        y: createAxisDelta()
    });
const createAxis = ()=>({
        min: 0,
        max: 0
    });
const createBox = ()=>({
        x: createAxis(),
        y: createAxis()
    });

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dULes":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DOMVisualElement", ()=>DOMVisualElement);
var _visualElementMjs = require("../VisualElement.mjs");
var _domkeyframesResolverMjs = require("./DOMKeyframesResolver.mjs");
var _isMotionValueMjs = require("../../value/utils/is-motion-value.mjs");
class DOMVisualElement extends (0, _visualElementMjs.VisualElement) {
    constructor(){
        super(...arguments);
        this.KeyframeResolver = (0, _domkeyframesResolverMjs.DOMKeyframesResolver);
    }
    sortInstanceNodePosition(a, b) {
        /**
         * compareDocumentPosition returns a bitmask, by using the bitwise &
         * we're returning true if 2 in that bitmask is set to true. 2 is set
         * to true if b preceeds a.
         */ return a.compareDocumentPosition(b) & 2 ? 1 : -1;
    }
    getBaseTargetFromProps(props, key) {
        return props.style ? props.style[key] : undefined;
    }
    removeValueFromRenderState(key, { vars, style }) {
        delete vars[key];
        delete style[key];
    }
    handleChildMotionValue() {
        if (this.childSubscription) {
            this.childSubscription();
            delete this.childSubscription;
        }
        const { children } = this.props;
        if ((0, _isMotionValueMjs.isMotionValue)(children)) this.childSubscription = children.on("change", (latest)=>{
            if (this.current) this.current.textContent = `${latest}`;
        });
    }
}

},{"../VisualElement.mjs":"52q4L","./DOMKeyframesResolver.mjs":"bPMBr","../../value/utils/is-motion-value.mjs":"fTAlC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"52q4L":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "VisualElement", ()=>VisualElement);
var _syncTimeMjs = require("../frameloop/sync-time.mjs");
var _definitionsMjs = require("../motion/features/definitions.mjs");
var _modelsMjs = require("../projection/geometry/models.mjs");
var _isNumericalStringMjs = require("../utils/is-numerical-string.mjs");
var _isZeroValueStringMjs = require("../utils/is-zero-value-string.mjs");
var _indexMjs = require("../utils/reduced-motion/index.mjs");
var _stateMjs = require("../utils/reduced-motion/state.mjs");
var _subscriptionManagerMjs = require("../utils/subscription-manager.mjs");
var _warnOnceMjs = require("../utils/warn-once.mjs");
var _indexMjs1 = require("../value/index.mjs");
var _indexMjs2 = require("../value/types/complex/index.mjs");
var _isMotionValueMjs = require("../value/utils/is-motion-value.mjs");
var _animatableNoneMjs = require("./dom/value-types/animatable-none.mjs");
var _findMjs = require("./dom/value-types/find.mjs");
var _keysTransformMjs = require("./html/utils/keys-transform.mjs");
var _storeMjs = require("./store.mjs");
var _isControllingVariantsMjs = require("./utils/is-controlling-variants.mjs");
var _keyframesResolverMjs = require("./utils/KeyframesResolver.mjs");
var _motionValuesMjs = require("./utils/motion-values.mjs");
var _resolveVariantsMjs = require("./utils/resolve-variants.mjs");
var _frameMjs = require("../frameloop/frame.mjs");
const propEventHandlers = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete"
];
/**
 * A VisualElement is an imperative abstraction around UI elements such as
 * HTMLElement, SVGElement, Three.Object3D etc.
 */ class VisualElement {
    /**
     * This method takes React props and returns found MotionValues. For example, HTML
     * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
     *
     * This isn't an abstract method as it needs calling in the constructor, but it is
     * intended to be one.
     */ scrapeMotionValuesFromProps(_props, _prevProps, _visualElement) {
        return {};
    }
    constructor({ parent, props, presenceContext, reducedMotionConfig, blockInitialAnimation, visualState }, options = {}){
        /**
         * A reference to the current underlying Instance, e.g. a HTMLElement
         * or Three.Mesh etc.
         */ this.current = null;
        /**
         * A set containing references to this VisualElement's children.
         */ this.children = new Set();
        /**
         * Determine what role this visual element should take in the variant tree.
         */ this.isVariantNode = false;
        this.isControllingVariants = false;
        /**
         * Decides whether this VisualElement should animate in reduced motion
         * mode.
         *
         * TODO: This is currently set on every individual VisualElement but feels
         * like it could be set globally.
         */ this.shouldReduceMotion = null;
        /**
         * A map of all motion values attached to this visual element. Motion
         * values are source of truth for any given animated value. A motion
         * value might be provided externally by the component via props.
         */ this.values = new Map();
        this.KeyframeResolver = (0, _keyframesResolverMjs.KeyframeResolver);
        /**
         * Cleanup functions for active features (hover/tap/exit etc)
         */ this.features = {};
        /**
         * A map of every subscription that binds the provided or generated
         * motion values onChange listeners to this visual element.
         */ this.valueSubscriptions = new Map();
        /**
         * A reference to the previously-provided motion values as returned
         * from scrapeMotionValuesFromProps. We use the keys in here to determine
         * if any motion values need to be removed after props are updated.
         */ this.prevMotionValues = {};
        /**
         * An object containing a SubscriptionManager for each active event.
         */ this.events = {};
        /**
         * An object containing an unsubscribe function for each prop event subscription.
         * For example, every "Update" event can have multiple subscribers via
         * VisualElement.on(), but only one of those can be defined via the onUpdate prop.
         */ this.propEventSubscriptions = {};
        this.notifyUpdate = ()=>this.notify("Update", this.latestValues);
        this.render = ()=>{
            if (!this.current) return;
            this.triggerBuild();
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
        };
        this.renderScheduledAt = 0.0;
        this.scheduleRender = ()=>{
            const now = (0, _syncTimeMjs.time).now();
            if (this.renderScheduledAt < now) {
                this.renderScheduledAt = now;
                (0, _frameMjs.frame).render(this.render, false, true);
            }
        };
        const { latestValues, renderState, onUpdate } = visualState;
        this.onUpdate = onUpdate;
        this.latestValues = latestValues;
        this.baseTarget = {
            ...latestValues
        };
        this.initialValues = props.initial ? {
            ...latestValues
        } : {};
        this.renderState = renderState;
        this.parent = parent;
        this.props = props;
        this.presenceContext = presenceContext;
        this.depth = parent ? parent.depth + 1 : 0;
        this.reducedMotionConfig = reducedMotionConfig;
        this.options = options;
        this.blockInitialAnimation = Boolean(blockInitialAnimation);
        this.isControllingVariants = (0, _isControllingVariantsMjs.isControllingVariants)(props);
        this.isVariantNode = (0, _isControllingVariantsMjs.isVariantNode)(props);
        if (this.isVariantNode) this.variantChildren = new Set();
        this.manuallyAnimateOnMount = Boolean(parent && parent.current);
        /**
         * Any motion values that are provided to the element when created
         * aren't yet bound to the element, as this would technically be impure.
         * However, we iterate through the motion values and set them to the
         * initial values for this component.
         *
         * TODO: This is impure and we should look at changing this to run on mount.
         * Doing so will break some tests but this isn't necessarily a breaking change,
         * more a reflection of the test.
         */ const { willChange, ...initialMotionValues } = this.scrapeMotionValuesFromProps(props, {}, this);
        for(const key in initialMotionValues){
            const value = initialMotionValues[key];
            if (latestValues[key] !== undefined && (0, _isMotionValueMjs.isMotionValue)(value)) value.set(latestValues[key], false);
        }
    }
    mount(instance) {
        this.current = instance;
        (0, _storeMjs.visualElementStore).set(instance, this);
        if (this.projection && !this.projection.instance) this.projection.mount(instance);
        if (this.parent && this.isVariantNode && !this.isControllingVariants) this.removeFromVariantTree = this.parent.addVariantChild(this);
        this.values.forEach((value, key)=>this.bindToMotionValue(key, value));
        if (!(0, _stateMjs.hasReducedMotionListener).current) (0, _indexMjs.initPrefersReducedMotion)();
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? false : this.reducedMotionConfig === "always" ? true : (0, _stateMjs.prefersReducedMotion).current;
        (0, _warnOnceMjs.warnOnce)(this.shouldReduceMotion !== true, "You have Reduced Motion enabled on your device. Animations may not appear as expected.");
        if (this.parent) this.parent.children.add(this);
        this.update(this.props, this.presenceContext);
    }
    unmount() {
        (0, _storeMjs.visualElementStore).delete(this.current);
        this.projection && this.projection.unmount();
        (0, _frameMjs.cancelFrame)(this.notifyUpdate);
        (0, _frameMjs.cancelFrame)(this.render);
        this.valueSubscriptions.forEach((remove)=>remove());
        this.valueSubscriptions.clear();
        this.removeFromVariantTree && this.removeFromVariantTree();
        this.parent && this.parent.children.delete(this);
        for(const key in this.events)this.events[key].clear();
        for(const key in this.features){
            const feature = this.features[key];
            if (feature) {
                feature.unmount();
                feature.isMounted = false;
            }
        }
        this.current = null;
    }
    bindToMotionValue(key, value) {
        if (this.valueSubscriptions.has(key)) this.valueSubscriptions.get(key)();
        const valueIsTransform = (0, _keysTransformMjs.transformProps).has(key);
        if (valueIsTransform && this.onBindTransform) this.onBindTransform();
        const removeOnChange = value.on("change", (latestValue)=>{
            this.latestValues[key] = latestValue;
            this.props.onUpdate && (0, _frameMjs.frame).preRender(this.notifyUpdate);
            if (valueIsTransform && this.projection) this.projection.isTransformDirty = true;
        });
        const removeOnRenderRequest = value.on("renderRequest", this.scheduleRender);
        let removeSyncCheck;
        if (window.MotionCheckAppearSync) removeSyncCheck = window.MotionCheckAppearSync(this, key, value);
        this.valueSubscriptions.set(key, ()=>{
            removeOnChange();
            removeOnRenderRequest();
            if (removeSyncCheck) removeSyncCheck();
            if (value.owner) value.stop();
        });
    }
    sortNodePosition(other) {
        /**
         * If these nodes aren't even of the same type we can't compare their depth.
         */ if (!this.current || !this.sortInstanceNodePosition || this.type !== other.type) return 0;
        return this.sortInstanceNodePosition(this.current, other.current);
    }
    updateFeatures() {
        let key = "animation";
        for(key in 0, _definitionsMjs.featureDefinitions){
            const featureDefinition = (0, _definitionsMjs.featureDefinitions)[key];
            if (!featureDefinition) continue;
            const { isEnabled, Feature: FeatureConstructor } = featureDefinition;
            /**
             * If this feature is enabled but not active, make a new instance.
             */ if (!this.features[key] && FeatureConstructor && isEnabled(this.props)) this.features[key] = new FeatureConstructor(this);
            /**
             * If we have a feature, mount or update it.
             */ if (this.features[key]) {
                const feature = this.features[key];
                if (feature.isMounted) feature.update();
                else {
                    feature.mount();
                    feature.isMounted = true;
                }
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props);
    }
    /**
     * Measure the current viewport box with or without transforms.
     * Only measures axis-aligned boxes, rotate and skew must be manually
     * removed with a re-render to work.
     */ measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, _modelsMjs.createBox)();
    }
    getStaticValue(key) {
        return this.latestValues[key];
    }
    setStaticValue(key, value) {
        this.latestValues[key] = value;
    }
    /**
     * Update the provided props. Ensure any newly-added motion values are
     * added to our map, old ones removed, and listeners updated.
     */ update(props, presenceContext) {
        if (props.transformTemplate || this.props.transformTemplate) this.scheduleRender();
        this.prevProps = this.props;
        this.props = props;
        this.prevPresenceContext = this.presenceContext;
        this.presenceContext = presenceContext;
        /**
         * Update prop event handlers ie onAnimationStart, onAnimationComplete
         */ for(let i = 0; i < propEventHandlers.length; i++){
            const key = propEventHandlers[i];
            if (this.propEventSubscriptions[key]) {
                this.propEventSubscriptions[key]();
                delete this.propEventSubscriptions[key];
            }
            const listenerName = "on" + key;
            const listener = props[listenerName];
            if (listener) this.propEventSubscriptions[key] = this.on(key, listener);
        }
        this.prevMotionValues = (0, _motionValuesMjs.updateMotionValuesFromProps)(this, this.scrapeMotionValuesFromProps(props, this.prevProps, this), this.prevMotionValues);
        if (this.handleChildMotionValue) this.handleChildMotionValue();
        this.onUpdate && this.onUpdate(this);
    }
    getProps() {
        return this.props;
    }
    /**
     * Returns the variant definition with a given name.
     */ getVariant(name) {
        return this.props.variants ? this.props.variants[name] : undefined;
    }
    /**
     * Returns the defined default transition on this component.
     */ getDefaultTransition() {
        return this.props.transition;
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint;
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : undefined;
    }
    /**
     * Add a child visual element to our set of children.
     */ addVariantChild(child) {
        const closestVariantNode = this.getClosestVariantNode();
        if (closestVariantNode) {
            closestVariantNode.variantChildren && closestVariantNode.variantChildren.add(child);
            return ()=>closestVariantNode.variantChildren.delete(child);
        }
    }
    /**
     * Add a motion value and bind it to this visual element.
     */ addValue(key, value) {
        // Remove existing value if it exists
        const existingValue = this.values.get(key);
        if (value !== existingValue) {
            if (existingValue) this.removeValue(key);
            this.bindToMotionValue(key, value);
            this.values.set(key, value);
            this.latestValues[key] = value.get();
        }
    }
    /**
     * Remove a motion value and unbind any active subscriptions.
     */ removeValue(key) {
        this.values.delete(key);
        const unsubscribe = this.valueSubscriptions.get(key);
        if (unsubscribe) {
            unsubscribe();
            this.valueSubscriptions.delete(key);
        }
        delete this.latestValues[key];
        this.removeValueFromRenderState(key, this.renderState);
    }
    /**
     * Check whether we have a motion value for this key
     */ hasValue(key) {
        return this.values.has(key);
    }
    getValue(key, defaultValue) {
        if (this.props.values && this.props.values[key]) return this.props.values[key];
        let value = this.values.get(key);
        if (value === undefined && defaultValue !== undefined) {
            value = (0, _indexMjs1.motionValue)(defaultValue === null ? undefined : defaultValue, {
                owner: this
            });
            this.addValue(key, value);
        }
        return value;
    }
    /**
     * If we're trying to animate to a previously unencountered value,
     * we need to check for it in our state and as a last resort read it
     * directly from the instance (which might have performance implications).
     */ readValue(key, target) {
        var _a;
        let value = this.latestValues[key] !== undefined || !this.current ? this.latestValues[key] : (_a = this.getBaseTargetFromProps(this.props, key)) !== null && _a !== void 0 ? _a : this.readValueFromInstance(this.current, key, this.options);
        if (value !== undefined && value !== null) {
            if (typeof value === "string" && ((0, _isNumericalStringMjs.isNumericalString)(value) || (0, _isZeroValueStringMjs.isZeroValueString)(value))) // If this is a number read as a string, ie "0" or "200", convert it to a number
            value = parseFloat(value);
            else if (!(0, _findMjs.findValueType)(value) && (0, _indexMjs2.complex).test(target)) value = (0, _animatableNoneMjs.getAnimatableNone)(key, target);
            this.setBaseTarget(key, (0, _isMotionValueMjs.isMotionValue)(value) ? value.get() : value);
        }
        return (0, _isMotionValueMjs.isMotionValue)(value) ? value.get() : value;
    }
    /**
     * Set the base target to later animate back to. This is currently
     * only hydrated on creation and when we first read a value.
     */ setBaseTarget(key, value) {
        this.baseTarget[key] = value;
    }
    /**
     * Find the base target for a value thats been removed from all animation
     * props.
     */ getBaseTarget(key) {
        var _a;
        const { initial } = this.props;
        let valueFromInitial;
        if (typeof initial === "string" || typeof initial === "object") {
            const variant = (0, _resolveVariantsMjs.resolveVariantFromProps)(this.props, initial, (_a = this.presenceContext) === null || _a === void 0 ? void 0 : _a.custom);
            if (variant) valueFromInitial = variant[key];
        }
        /**
         * If this value still exists in the current initial variant, read that.
         */ if (initial && valueFromInitial !== undefined) return valueFromInitial;
        /**
         * Alternatively, if this VisualElement config has defined a getBaseTarget
         * so we can read the value from an alternative source, try that.
         */ const target = this.getBaseTargetFromProps(this.props, key);
        if (target !== undefined && !(0, _isMotionValueMjs.isMotionValue)(target)) return target;
        /**
         * If the value was initially defined on initial, but it doesn't any more,
         * return undefined. Otherwise return the value as initially read from the DOM.
         */ return this.initialValues[key] !== undefined && valueFromInitial === undefined ? undefined : this.baseTarget[key];
    }
    on(eventName, callback) {
        if (!this.events[eventName]) this.events[eventName] = new (0, _subscriptionManagerMjs.SubscriptionManager)();
        return this.events[eventName].add(callback);
    }
    notify(eventName, ...args) {
        if (this.events[eventName]) this.events[eventName].notify(...args);
    }
}

},{"../frameloop/sync-time.mjs":"fXWE4","../motion/features/definitions.mjs":"3vmXl","../projection/geometry/models.mjs":"dqfGO","../utils/is-numerical-string.mjs":"5t2Gr","../utils/is-zero-value-string.mjs":"1zaoQ","../utils/reduced-motion/index.mjs":"1R84h","../utils/reduced-motion/state.mjs":"85Qpu","../utils/subscription-manager.mjs":"5CIec","../utils/warn-once.mjs":"a4lpg","../value/index.mjs":"795y8","../value/types/complex/index.mjs":"4Wy2N","../value/utils/is-motion-value.mjs":"fTAlC","./dom/value-types/animatable-none.mjs":"gBN5M","./dom/value-types/find.mjs":"giQRm","./html/utils/keys-transform.mjs":"hFNpd","./store.mjs":"f7Acv","./utils/is-controlling-variants.mjs":"d9JKn","./utils/KeyframesResolver.mjs":"drDqi","./utils/motion-values.mjs":"8hG9P","./utils/resolve-variants.mjs":"5HZuK","../frameloop/frame.mjs":"ioJ38","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3vmXl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "featureDefinitions", ()=>featureDefinitions);
const featureProps = {
    animation: [
        "animate",
        "variants",
        "whileHover",
        "whileTap",
        "exit",
        "whileInView",
        "whileFocus",
        "whileDrag"
    ],
    exit: [
        "exit"
    ],
    drag: [
        "drag",
        "dragControls"
    ],
    focus: [
        "whileFocus"
    ],
    hover: [
        "whileHover",
        "onHoverStart",
        "onHoverEnd"
    ],
    tap: [
        "whileTap",
        "onTap",
        "onTapStart",
        "onTapCancel"
    ],
    pan: [
        "onPan",
        "onPanStart",
        "onPanSessionStart",
        "onPanEnd"
    ],
    inView: [
        "whileInView",
        "onViewportEnter",
        "onViewportLeave"
    ],
    layout: [
        "layout",
        "layoutId"
    ]
};
const featureDefinitions = {};
for(const key in featureProps)featureDefinitions[key] = {
    isEnabled: (props)=>featureProps[key].some((name)=>!!props[name])
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1R84h":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initPrefersReducedMotion", ()=>initPrefersReducedMotion);
var _isBrowserMjs = require("../is-browser.mjs");
var _stateMjs = require("./state.mjs");
function initPrefersReducedMotion() {
    (0, _stateMjs.hasReducedMotionListener).current = true;
    if (!(0, _isBrowserMjs.isBrowser)) return;
    if (window.matchMedia) {
        const motionMediaQuery = window.matchMedia("(prefers-reduced-motion)");
        const setReducedMotionPreferences = ()=>(0, _stateMjs.prefersReducedMotion).current = motionMediaQuery.matches;
        motionMediaQuery.addListener(setReducedMotionPreferences);
        setReducedMotionPreferences();
    } else (0, _stateMjs.prefersReducedMotion).current = false;
}

},{"../is-browser.mjs":"4x4SM","./state.mjs":"85Qpu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4x4SM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isBrowser", ()=>isBrowser);
const isBrowser = typeof window !== "undefined";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"85Qpu":[function(require,module,exports,__globalThis) {
// Does this device prefer reduced motion? Returns `null` server-side.
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "hasReducedMotionListener", ()=>hasReducedMotionListener);
parcelHelpers.export(exports, "prefersReducedMotion", ()=>prefersReducedMotion);
const prefersReducedMotion = {
    current: null
};
const hasReducedMotionListener = {
    current: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"giQRm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "findValueType", ()=>findValueType);
var _indexMjs = require("../../../value/types/color/index.mjs");
var _indexMjs1 = require("../../../value/types/complex/index.mjs");
var _dimensionsMjs = require("./dimensions.mjs");
var _testMjs = require("./test.mjs");
/**
 * A list of all ValueTypes
 */ const valueTypes = [
    ...(0, _dimensionsMjs.dimensionValueTypes),
    (0, _indexMjs.color),
    (0, _indexMjs1.complex)
];
/**
 * Tests a value against the list of ValueTypes
 */ const findValueType = (v)=>valueTypes.find((0, _testMjs.testValueType)(v));

},{"../../../value/types/color/index.mjs":"cHA3X","../../../value/types/complex/index.mjs":"4Wy2N","./dimensions.mjs":"beMU3","./test.mjs":"b83qL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d9JKn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isControllingVariants", ()=>isControllingVariants);
parcelHelpers.export(exports, "isVariantNode", ()=>isVariantNode);
var _isAnimationControlsMjs = require("../../animation/utils/is-animation-controls.mjs");
var _isVariantLabelMjs = require("./is-variant-label.mjs");
var _variantPropsMjs = require("./variant-props.mjs");
function isControllingVariants(props) {
    return (0, _isAnimationControlsMjs.isAnimationControls)(props.animate) || (0, _variantPropsMjs.variantProps).some((name)=>(0, _isVariantLabelMjs.isVariantLabel)(props[name]));
}
function isVariantNode(props) {
    return Boolean(isControllingVariants(props) || props.variants);
}

},{"../../animation/utils/is-animation-controls.mjs":"hB41z","./is-variant-label.mjs":"5OVf4","./variant-props.mjs":"6HWdD","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hB41z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isAnimationControls", ()=>isAnimationControls);
function isAnimationControls(v) {
    return v !== null && typeof v === "object" && typeof v.start === "function";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5OVf4":[function(require,module,exports,__globalThis) {
/**
 * Decides if the supplied variable is variant label
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isVariantLabel", ()=>isVariantLabel);
function isVariantLabel(v) {
    return typeof v === "string" || Array.isArray(v);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6HWdD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "variantPriorityOrder", ()=>variantPriorityOrder);
parcelHelpers.export(exports, "variantProps", ()=>variantProps);
const variantPriorityOrder = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit"
];
const variantProps = [
    "initial",
    ...variantPriorityOrder
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8hG9P":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateMotionValuesFromProps", ()=>updateMotionValuesFromProps);
var _warnOnceMjs = require("../../utils/warn-once.mjs");
var _indexMjs = require("../../value/index.mjs");
var _isMotionValueMjs = require("../../value/utils/is-motion-value.mjs");
function updateMotionValuesFromProps(element, next, prev) {
    for(const key in next){
        const nextValue = next[key];
        const prevValue = prev[key];
        if ((0, _isMotionValueMjs.isMotionValue)(nextValue)) {
            /**
             * If this is a motion value found in props or style, we want to add it
             * to our visual element's motion value map.
             */ element.addValue(key, nextValue);
            (0, _warnOnceMjs.warnOnce)(nextValue.version === "12.0.11", `Attempting to mix Motion versions ${nextValue.version} with 12.0.11 may not work as expected.`);
        } else if ((0, _isMotionValueMjs.isMotionValue)(prevValue)) /**
             * If we're swapping from a motion value to a static value,
             * create a new motion value from that
             */ element.addValue(key, (0, _indexMjs.motionValue)(nextValue, {
            owner: element
        }));
        else if (prevValue !== nextValue) {
            /**
             * If this is a flat value that has changed, update the motion value
             * or create one if it doesn't exist. We only want to do this if we're
             * not handling the value with our animation state.
             */ if (element.hasValue(key)) {
                const existingValue = element.getValue(key);
                if (existingValue.liveStyle === true) existingValue.jump(nextValue);
                else if (!existingValue.hasAnimated) existingValue.set(nextValue);
            } else {
                const latestValue = element.getStaticValue(key);
                element.addValue(key, (0, _indexMjs.motionValue)(latestValue !== undefined ? latestValue : nextValue, {
                    owner: element
                }));
            }
        }
    }
    // Handle removed values
    for(const key in prev)if (next[key] === undefined) element.removeValue(key);
    return next;
}

},{"../../utils/warn-once.mjs":"a4lpg","../../value/index.mjs":"795y8","../../value/utils/is-motion-value.mjs":"fTAlC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dN9dN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildSVGAttrs", ()=>buildSVGAttrs);
var _buildStylesMjs = require("../../html/utils/build-styles.mjs");
var _pathMjs = require("./path.mjs");
var _transformOriginMjs = require("./transform-origin.mjs");
/**
 * Build SVG visual attrbutes, like cx and style.transform
 */ function buildSVGAttrs(state, { attrX, attrY, attrScale, originX, originY, pathLength, pathSpacing = 1, pathOffset = 0, // This is object creation, which we try to avoid per-frame.
...latest }, isSVGTag, transformTemplate) {
    (0, _buildStylesMjs.buildHTMLStyles)(state, latest, transformTemplate);
    /**
     * For svg tags we just want to make sure viewBox is animatable and treat all the styles
     * as normal HTML tags.
     */ if (isSVGTag) {
        if (state.style.viewBox) state.attrs.viewBox = state.style.viewBox;
        return;
    }
    state.attrs = state.style;
    state.style = {};
    const { attrs, style, dimensions } = state;
    /**
     * However, we apply transforms as CSS transforms. So if we detect a transform we take it from attrs
     * and copy it into style.
     */ if (attrs.transform) {
        if (dimensions) style.transform = attrs.transform;
        delete attrs.transform;
    }
    // Parse transformOrigin
    if (dimensions && (originX !== undefined || originY !== undefined || style.transform)) style.transformOrigin = (0, _transformOriginMjs.calcSVGTransformOrigin)(dimensions, originX !== undefined ? originX : 0.5, originY !== undefined ? originY : 0.5);
    // Render attrX/attrY/attrScale as attributes
    if (attrX !== undefined) attrs.x = attrX;
    if (attrY !== undefined) attrs.y = attrY;
    if (attrScale !== undefined) attrs.scale = attrScale;
    // Build SVG path if one has been defined
    if (pathLength !== undefined) (0, _pathMjs.buildSVGPath)(attrs, pathLength, pathSpacing, pathOffset, false);
}

},{"../../html/utils/build-styles.mjs":"bibvp","./path.mjs":"leoez","./transform-origin.mjs":"gK2q9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bibvp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildHTMLStyles", ()=>buildHTMLStyles);
var _isCssVariableMjs = require("../../dom/utils/is-css-variable.mjs");
var _getAsTypeMjs = require("../../dom/value-types/get-as-type.mjs");
var _numberMjs = require("../../dom/value-types/number.mjs");
var _buildTransformMjs = require("./build-transform.mjs");
var _keysTransformMjs = require("./keys-transform.mjs");
function buildHTMLStyles(state, latestValues, transformTemplate) {
    const { style, vars, transformOrigin } = state;
    // Track whether we encounter any transform or transformOrigin values.
    let hasTransform = false;
    let hasTransformOrigin = false;
    /**
     * Loop over all our latest animated values and decide whether to handle them
     * as a style or CSS variable.
     *
     * Transforms and transform origins are kept separately for further processing.
     */ for(const key in latestValues){
        const value = latestValues[key];
        if ((0, _keysTransformMjs.transformProps).has(key)) {
            // If this is a transform, flag to enable further transform processing
            hasTransform = true;
            continue;
        } else if ((0, _isCssVariableMjs.isCSSVariableName)(key)) {
            vars[key] = value;
            continue;
        } else {
            // Convert the value to its default value type, ie 0 -> "0px"
            const valueAsType = (0, _getAsTypeMjs.getValueAsType)(value, (0, _numberMjs.numberValueTypes)[key]);
            if (key.startsWith("origin")) {
                // If this is a transform origin, flag and enable further transform-origin processing
                hasTransformOrigin = true;
                transformOrigin[key] = valueAsType;
            } else style[key] = valueAsType;
        }
    }
    if (!latestValues.transform) {
        if (hasTransform || transformTemplate) style.transform = (0, _buildTransformMjs.buildTransform)(latestValues, state.transform, transformTemplate);
        else if (style.transform) /**
             * If we have previously created a transform but currently don't have any,
             * reset transform style to none.
             */ style.transform = "none";
    }
    /**
     * Build a transformOrigin style. Uses the same defaults as the browser for
     * undefined origins.
     */ if (hasTransformOrigin) {
        const { originX = "50%", originY = "50%", originZ = 0 } = transformOrigin;
        style.transformOrigin = `${originX} ${originY} ${originZ}`;
    }
}

},{"../../dom/utils/is-css-variable.mjs":"6ZbRI","../../dom/value-types/get-as-type.mjs":"2OSOr","../../dom/value-types/number.mjs":"5lYaO","./build-transform.mjs":"89g8G","./keys-transform.mjs":"hFNpd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2OSOr":[function(require,module,exports,__globalThis) {
/**
 * Provided a value and a ValueType, returns the value as that value type.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getValueAsType", ()=>getValueAsType);
const getValueAsType = (value, type)=>{
    return type && typeof value === "number" ? type.transform(value) : value;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"89g8G":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildTransform", ()=>buildTransform);
var _getAsTypeMjs = require("../../dom/value-types/get-as-type.mjs");
var _numberMjs = require("../../dom/value-types/number.mjs");
var _keysTransformMjs = require("./keys-transform.mjs");
const translateAlias = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
};
const numTransforms = (0, _keysTransformMjs.transformPropOrder).length;
/**
 * Build a CSS transform style from individual x/y/scale etc properties.
 *
 * This outputs with a default order of transforms/scales/rotations, this can be customised by
 * providing a transformTemplate function.
 */ function buildTransform(latestValues, transform, transformTemplate) {
    // The transform string we're going to build into.
    let transformString = "";
    let transformIsDefault = true;
    /**
     * Loop over all possible transforms in order, adding the ones that
     * are present to the transform string.
     */ for(let i = 0; i < numTransforms; i++){
        const key = (0, _keysTransformMjs.transformPropOrder)[i];
        const value = latestValues[key];
        if (value === undefined) continue;
        let valueIsDefault = true;
        if (typeof value === "number") valueIsDefault = value === (key.startsWith("scale") ? 1 : 0);
        else valueIsDefault = parseFloat(value) === 0;
        if (!valueIsDefault || transformTemplate) {
            const valueAsType = (0, _getAsTypeMjs.getValueAsType)(value, (0, _numberMjs.numberValueTypes)[key]);
            if (!valueIsDefault) {
                transformIsDefault = false;
                const transformName = translateAlias[key] || key;
                transformString += `${transformName}(${valueAsType}) `;
            }
            if (transformTemplate) transform[key] = valueAsType;
        }
    }
    transformString = transformString.trim();
    // If we have a custom `transform` template, pass our transform values and
    // generated transformString to that before returning
    if (transformTemplate) transformString = transformTemplate(transform, transformIsDefault ? "" : transformString);
    else if (transformIsDefault) transformString = "none";
    return transformString;
}

},{"../../dom/value-types/get-as-type.mjs":"2OSOr","../../dom/value-types/number.mjs":"5lYaO","./keys-transform.mjs":"hFNpd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"leoez":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "buildSVGPath", ()=>buildSVGPath);
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
const dashKeys = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
};
const camelKeys = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
/**
 * Build SVG path properties. Uses the path's measured length to convert
 * our custom pathLength, pathSpacing and pathOffset into stroke-dashoffset
 * and stroke-dasharray attributes.
 *
 * This function is mutative to reduce per-frame GC.
 */ function buildSVGPath(attrs, length, spacing = 1, offset = 0, useDashCase = true) {
    // Normalise path length by setting SVG attribute pathLength to 1
    attrs.pathLength = 1;
    // We use dash case when setting attributes directly to the DOM node and camel case
    // when defining props on a React component.
    const keys = useDashCase ? dashKeys : camelKeys;
    // Build the dash offset
    attrs[keys.offset] = (0, _unitsMjs.px).transform(-offset);
    // Build the dash array
    const pathLength = (0, _unitsMjs.px).transform(length);
    const pathSpacing = (0, _unitsMjs.px).transform(spacing);
    attrs[keys.array] = `${pathLength} ${pathSpacing}`;
}

},{"../../../value/types/numbers/units.mjs":"h2wSa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gK2q9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calcSVGTransformOrigin", ()=>calcSVGTransformOrigin);
var _unitsMjs = require("../../../value/types/numbers/units.mjs");
function calcOrigin(origin, offset, size) {
    return typeof origin === "string" ? origin : (0, _unitsMjs.px).transform(offset + size * origin);
}
/**
 * The SVG transform origin defaults are different to CSS and is less intuitive,
 * so we use the measured dimensions of the SVG to reconcile these.
 */ function calcSVGTransformOrigin(dimensions, originX, originY) {
    const pxOriginX = calcOrigin(originX, dimensions.x, dimensions.width);
    const pxOriginY = calcOrigin(originY, dimensions.y, dimensions.height);
    return `${pxOriginX} ${pxOriginY}`;
}

},{"../../../value/types/numbers/units.mjs":"h2wSa","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hxaG9":[function(require,module,exports,__globalThis) {
/**
 * A set of attribute names that are always read/written as camel case.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "camelCaseAttributes", ()=>camelCaseAttributes);
const camelCaseAttributes = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust"
]);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eqmuR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isSVGTag", ()=>isSVGTag);
const isSVGTag = (tag)=>typeof tag === "string" && tag.toLowerCase() === "svg";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Rkzy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateSVGDimensions", ()=>updateSVGDimensions);
function updateSVGDimensions(instance, renderState) {
    try {
        renderState.dimensions = typeof instance.getBBox === "function" ? instance.getBBox() : instance.getBoundingClientRect();
    } catch (e) {
        // Most likely trying to measure an unrendered element under Firefox
        renderState.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        };
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ciLyB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderSVG", ()=>renderSVG);
var _camelToDashMjs = require("../../dom/utils/camel-to-dash.mjs");
var _renderMjs = require("../../html/utils/render.mjs");
var _camelCaseAttrsMjs = require("./camel-case-attrs.mjs");
function renderSVG(element, renderState, _styleProp, projection) {
    (0, _renderMjs.renderHTML)(element, renderState, undefined, projection);
    for(const key in renderState.attrs)element.setAttribute(!(0, _camelCaseAttrsMjs.camelCaseAttributes).has(key) ? (0, _camelToDashMjs.camelToDash)(key) : key, renderState.attrs[key]);
}

},{"../../dom/utils/camel-to-dash.mjs":"bQQC2","../../html/utils/render.mjs":"bAfUz","./camel-case-attrs.mjs":"hxaG9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bAfUz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderHTML", ()=>renderHTML);
function renderHTML(element, { style, vars }, styleProp, projection) {
    Object.assign(element.style, style, projection && projection.getProjectionStyles(styleProp));
    // Loop over any CSS variables and assign those.
    for(const key in vars)element.style.setProperty(key, vars[key]);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lmVtx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scrapeMotionValuesFromProps", ()=>scrapeMotionValuesFromProps);
var _isMotionValueMjs = require("../../../value/utils/is-motion-value.mjs");
var _keysTransformMjs = require("../../html/utils/keys-transform.mjs");
var _scrapeMotionValuesMjs = require("../../html/utils/scrape-motion-values.mjs");
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    const newValues = (0, _scrapeMotionValuesMjs.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    for(const key in props)if ((0, _isMotionValueMjs.isMotionValue)(props[key]) || (0, _isMotionValueMjs.isMotionValue)(prevProps[key])) {
        const targetKey = (0, _keysTransformMjs.transformPropOrder).indexOf(key) !== -1 ? "attr" + key.charAt(0).toUpperCase() + key.substring(1) : key;
        newValues[targetKey] = props[key];
    }
    return newValues;
}

},{"../../../value/utils/is-motion-value.mjs":"fTAlC","../../html/utils/keys-transform.mjs":"hFNpd","../../html/utils/scrape-motion-values.mjs":"lGnej","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lGnej":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "scrapeMotionValuesFromProps", ()=>scrapeMotionValuesFromProps);
var _isForcedMotionValueMjs = require("../../../motion/utils/is-forced-motion-value.mjs");
var _isMotionValueMjs = require("../../../value/utils/is-motion-value.mjs");
function scrapeMotionValuesFromProps(props, prevProps, visualElement) {
    var _a;
    const { style } = props;
    const newValues = {};
    for(const key in style)if ((0, _isMotionValueMjs.isMotionValue)(style[key]) || prevProps.style && (0, _isMotionValueMjs.isMotionValue)(prevProps.style[key]) || (0, _isForcedMotionValueMjs.isForcedMotionValue)(key, props) || ((_a = visualElement === null || visualElement === void 0 ? void 0 : visualElement.getValue(key)) === null || _a === void 0 ? void 0 : _a.liveStyle) !== undefined) newValues[key] = style[key];
    return newValues;
}

},{"../../../motion/utils/is-forced-motion-value.mjs":"dLiAE","../../../value/utils/is-motion-value.mjs":"fTAlC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dLiAE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isForcedMotionValue", ()=>isForcedMotionValue);
var _scaleCorrectionMjs = require("../../projection/styles/scale-correction.mjs");
var _keysTransformMjs = require("../../render/html/utils/keys-transform.mjs");
function isForcedMotionValue(key, { layout, layoutId }) {
    return (0, _keysTransformMjs.transformProps).has(key) || key.startsWith("origin") || (layout || layoutId !== undefined) && (!!(0, _scaleCorrectionMjs.scaleCorrectors)[key] || key === "opacity");
}

},{"../../projection/styles/scale-correction.mjs":"h1VsH","../../render/html/utils/keys-transform.mjs":"hFNpd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h1VsH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addScaleCorrector", ()=>addScaleCorrector);
parcelHelpers.export(exports, "scaleCorrectors", ()=>scaleCorrectors);
var _isCssVariableMjs = require("../../render/dom/utils/is-css-variable.mjs");
const scaleCorrectors = {};
function addScaleCorrector(correctors) {
    for(const key in correctors){
        scaleCorrectors[key] = correctors[key];
        if ((0, _isCssVariableMjs.isCSSVariableName)(key)) scaleCorrectors[key].isCSSVariable = true;
    }
}

},{"../../render/dom/utils/is-css-variable.mjs":"6ZbRI","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gs88C":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HTMLVisualElement", ()=>HTMLVisualElement);
parcelHelpers.export(exports, "getComputedStyle", ()=>getComputedStyle);
var _measureMjs = require("../../projection/utils/measure.mjs");
var _domvisualElementMjs = require("../dom/DOMVisualElement.mjs");
var _isCssVariableMjs = require("../dom/utils/is-css-variable.mjs");
var _defaultsMjs = require("../dom/value-types/defaults.mjs");
var _buildStylesMjs = require("./utils/build-styles.mjs");
var _keysTransformMjs = require("./utils/keys-transform.mjs");
var _renderMjs = require("./utils/render.mjs");
var _scrapeMotionValuesMjs = require("./utils/scrape-motion-values.mjs");
function getComputedStyle(element) {
    return window.getComputedStyle(element);
}
class HTMLVisualElement extends (0, _domvisualElementMjs.DOMVisualElement) {
    constructor(){
        super(...arguments);
        this.type = "html";
        this.renderInstance = (0, _renderMjs.renderHTML);
    }
    readValueFromInstance(instance, key) {
        if ((0, _keysTransformMjs.transformProps).has(key)) {
            const defaultType = (0, _defaultsMjs.getDefaultValueType)(key);
            return defaultType ? defaultType.default || 0 : 0;
        } else {
            const computedStyle = getComputedStyle(instance);
            const value = ((0, _isCssVariableMjs.isCSSVariableName)(key) ? computedStyle.getPropertyValue(key) : computedStyle[key]) || 0;
            return typeof value === "string" ? value.trim() : value;
        }
    }
    measureInstanceViewportBox(instance, { transformPagePoint }) {
        return (0, _measureMjs.measureViewportBox)(instance, transformPagePoint);
    }
    build(renderState, latestValues, props) {
        (0, _buildStylesMjs.buildHTMLStyles)(renderState, latestValues, props.transformTemplate);
    }
    scrapeMotionValuesFromProps(props, prevProps, visualElement) {
        return (0, _scrapeMotionValuesMjs.scrapeMotionValuesFromProps)(props, prevProps, visualElement);
    }
}

},{"../../projection/utils/measure.mjs":"hNWlD","../dom/DOMVisualElement.mjs":"dULes","../dom/utils/is-css-variable.mjs":"6ZbRI","../dom/value-types/defaults.mjs":"bGiYG","./utils/build-styles.mjs":"bibvp","./utils/keys-transform.mjs":"hFNpd","./utils/render.mjs":"bAfUz","./utils/scrape-motion-values.mjs":"lGnej","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hNWlD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "measurePageBox", ()=>measurePageBox);
parcelHelpers.export(exports, "measureViewportBox", ()=>measureViewportBox);
var _conversionMjs = require("../geometry/conversion.mjs");
var _deltaApplyMjs = require("../geometry/delta-apply.mjs");
function measureViewportBox(instance, transformPoint) {
    return (0, _conversionMjs.convertBoundingBoxToBox)((0, _conversionMjs.transformBoxPoints)(instance.getBoundingClientRect(), transformPoint));
}
function measurePageBox(element, rootProjectionNode, transformPagePoint) {
    const viewportBox = measureViewportBox(element, transformPagePoint);
    const { scroll } = rootProjectionNode;
    if (scroll) {
        (0, _deltaApplyMjs.translateAxis)(viewportBox.x, scroll.offset.x);
        (0, _deltaApplyMjs.translateAxis)(viewportBox.y, scroll.offset.y);
    }
    return viewportBox;
}

},{"../geometry/conversion.mjs":"6wRC5","../geometry/delta-apply.mjs":"61I2D","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6wRC5":[function(require,module,exports,__globalThis) {
/**
 * Bounding boxes tend to be defined as top, left, right, bottom. For various operations
 * it's easier to consider each axis individually. This function returns a bounding box
 * as a map of single-axis min/max values.
 */ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "convertBoundingBoxToBox", ()=>convertBoundingBoxToBox);
parcelHelpers.export(exports, "convertBoxToBoundingBox", ()=>convertBoxToBoundingBox);
parcelHelpers.export(exports, "transformBoxPoints", ()=>transformBoxPoints);
function convertBoundingBoxToBox({ top, left, right, bottom }) {
    return {
        x: {
            min: left,
            max: right
        },
        y: {
            min: top,
            max: bottom
        }
    };
}
function convertBoxToBoundingBox({ x, y }) {
    return {
        top: y.min,
        right: x.max,
        bottom: y.max,
        left: x.min
    };
}
/**
 * Applies a TransformPoint function to a bounding box. TransformPoint is usually a function
 * provided by Framer to allow measured points to be corrected for device scaling. This is used
 * when measuring DOM elements and DOM event points.
 */ function transformBoxPoints(point, transformPoint) {
    if (!transformPoint) return point;
    const topLeft = transformPoint({
        x: point.left,
        y: point.top
    });
    const bottomRight = transformPoint({
        x: point.right,
        y: point.bottom
    });
    return {
        top: topLeft.y,
        left: topLeft.x,
        bottom: bottomRight.y,
        right: bottomRight.x
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"61I2D":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyAxisDelta", ()=>applyAxisDelta);
parcelHelpers.export(exports, "applyBoxDelta", ()=>applyBoxDelta);
parcelHelpers.export(exports, "applyPointDelta", ()=>applyPointDelta);
parcelHelpers.export(exports, "applyTreeDeltas", ()=>applyTreeDeltas);
parcelHelpers.export(exports, "scalePoint", ()=>scalePoint);
parcelHelpers.export(exports, "transformAxis", ()=>transformAxis);
parcelHelpers.export(exports, "transformBox", ()=>transformBox);
parcelHelpers.export(exports, "translateAxis", ()=>translateAxis);
var _numberMjs = require("../../utils/mix/number.mjs");
var _hasTransformMjs = require("../utils/has-transform.mjs");
/**
 * Scales a point based on a factor and an originPoint
 */ function scalePoint(point, scale, originPoint) {
    const distanceFromOrigin = point - originPoint;
    const scaled = scale * distanceFromOrigin;
    return originPoint + scaled;
}
/**
 * Applies a translate/scale delta to a point
 */ function applyPointDelta(point, translate, scale, originPoint, boxScale) {
    if (boxScale !== undefined) point = scalePoint(point, boxScale, originPoint);
    return scalePoint(point, scale, originPoint) + translate;
}
/**
 * Applies a translate/scale delta to an axis
 */ function applyAxisDelta(axis, translate = 0, scale = 1, originPoint, boxScale) {
    axis.min = applyPointDelta(axis.min, translate, scale, originPoint, boxScale);
    axis.max = applyPointDelta(axis.max, translate, scale, originPoint, boxScale);
}
/**
 * Applies a translate/scale delta to a box
 */ function applyBoxDelta(box, { x, y }) {
    applyAxisDelta(box.x, x.translate, x.scale, x.originPoint);
    applyAxisDelta(box.y, y.translate, y.scale, y.originPoint);
}
const TREE_SCALE_SNAP_MIN = 0.999999999999;
const TREE_SCALE_SNAP_MAX = 1.0000000000001;
/**
 * Apply a tree of deltas to a box. We do this to calculate the effect of all the transforms
 * in a tree upon our box before then calculating how to project it into our desired viewport-relative box
 *
 * This is the final nested loop within updateLayoutDelta for future refactoring
 */ function applyTreeDeltas(box, treeScale, treePath, isSharedTransition = false) {
    const treeLength = treePath.length;
    if (!treeLength) return;
    // Reset the treeScale
    treeScale.x = treeScale.y = 1;
    let node;
    let delta;
    for(let i = 0; i < treeLength; i++){
        node = treePath[i];
        delta = node.projectionDelta;
        /**
         * TODO: Prefer to remove this, but currently we have motion components with
         * display: contents in Framer.
         */ const { visualElement } = node.options;
        if (visualElement && visualElement.props.style && visualElement.props.style.display === "contents") continue;
        if (isSharedTransition && node.options.layoutScroll && node.scroll && node !== node.root) transformBox(box, {
            x: -node.scroll.offset.x,
            y: -node.scroll.offset.y
        });
        if (delta) {
            // Incoporate each ancestor's scale into a culmulative treeScale for this component
            treeScale.x *= delta.x.scale;
            treeScale.y *= delta.y.scale;
            // Apply each ancestor's calculated delta into this component's recorded layout box
            applyBoxDelta(box, delta);
        }
        if (isSharedTransition && (0, _hasTransformMjs.hasTransform)(node.latestValues)) transformBox(box, node.latestValues);
    }
    /**
     * Snap tree scale back to 1 if it's within a non-perceivable threshold.
     * This will help reduce useless scales getting rendered.
     */ if (treeScale.x < TREE_SCALE_SNAP_MAX && treeScale.x > TREE_SCALE_SNAP_MIN) treeScale.x = 1.0;
    if (treeScale.y < TREE_SCALE_SNAP_MAX && treeScale.y > TREE_SCALE_SNAP_MIN) treeScale.y = 1.0;
}
function translateAxis(axis, distance) {
    axis.min = axis.min + distance;
    axis.max = axis.max + distance;
}
/**
 * Apply a transform to an axis from the latest resolved motion values.
 * This function basically acts as a bridge between a flat motion value map
 * and applyAxisDelta
 */ function transformAxis(axis, axisTranslate, axisScale, boxScale, axisOrigin = 0.5) {
    const originPoint = (0, _numberMjs.mixNumber)(axis.min, axis.max, axisOrigin);
    // Apply the axis delta to the final axis
    applyAxisDelta(axis, axisTranslate, axisScale, originPoint, boxScale);
}
/**
 * Apply a transform to a box from the latest resolved motion values.
 */ function transformBox(box, transform) {
    transformAxis(box.x, transform.x, transform.scaleX, transform.scale, transform.originX);
    transformAxis(box.y, transform.y, transform.scaleY, transform.scale, transform.originY);
}

},{"../../utils/mix/number.mjs":"eTqUz","../utils/has-transform.mjs":"gBPx9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gBPx9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "has2DTranslate", ()=>has2DTranslate);
parcelHelpers.export(exports, "hasScale", ()=>hasScale);
parcelHelpers.export(exports, "hasTransform", ()=>hasTransform);
function isIdentityScale(scale) {
    return scale === undefined || scale === 1;
}
function hasScale({ scale, scaleX, scaleY }) {
    return !isIdentityScale(scale) || !isIdentityScale(scaleX) || !isIdentityScale(scaleY);
}
function hasTransform(values) {
    return hasScale(values) || has2DTranslate(values) || values.z || values.rotate || values.rotateX || values.rotateY || values.skewX || values.skewY;
}
function has2DTranslate(values) {
    return is2DTranslate(values.x) || is2DTranslate(values.y);
}
function is2DTranslate(value) {
    return value && value !== "0%";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"YZgDM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ObjectVisualElement", ()=>ObjectVisualElement);
var _modelsMjs = require("../../projection/geometry/models.mjs");
var _visualElementMjs = require("../VisualElement.mjs");
function isObjectKey(key, object) {
    return key in object;
}
class ObjectVisualElement extends (0, _visualElementMjs.VisualElement) {
    constructor(){
        super(...arguments);
        this.type = "object";
    }
    readValueFromInstance(instance, key) {
        if (isObjectKey(key, instance)) {
            const value = instance[key];
            if (typeof value === "string" || typeof value === "number") return value;
        }
        return undefined;
    }
    getBaseTargetFromProps() {
        return undefined;
    }
    removeValueFromRenderState(key, renderState) {
        delete renderState.output[key];
    }
    measureInstanceViewportBox() {
        return (0, _modelsMjs.createBox)();
    }
    build(renderState, latestValues) {
        Object.assign(renderState.output, latestValues);
    }
    renderInstance(instance, { output }) {
        Object.assign(instance, output);
    }
    sortInstanceNodePosition() {
        return 0;
    }
}

},{"../../projection/geometry/models.mjs":"dqfGO","../VisualElement.mjs":"52q4L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3UTyV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateSingleValue", ()=>animateSingleValue);
var _indexMjs = require("../../value/index.mjs");
var _isMotionValueMjs = require("../../value/utils/is-motion-value.mjs");
var _motionValueMjs = require("../interfaces/motion-value.mjs");
function animateSingleValue(value, keyframes, options) {
    const motionValue$1 = (0, _isMotionValueMjs.isMotionValue)(value) ? value : (0, _indexMjs.motionValue)(value);
    motionValue$1.start((0, _motionValueMjs.animateMotionValue)("", motionValue$1, keyframes, options));
    return motionValue$1.animation;
}

},{"../../value/index.mjs":"795y8","../../value/utils/is-motion-value.mjs":"fTAlC","../interfaces/motion-value.mjs":"4gNQx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aPVKP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateMini", ()=>animateMini);
parcelHelpers.export(exports, "createScopedWaapiAnimate", ()=>createScopedWaapiAnimate);
var _groupMjs = require("../../../../../../motion-dom/dist/es/animation/controls/Group.mjs");
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _animateElementsMjs = require("./animate-elements.mjs");
const createScopedWaapiAnimate = (scope)=>{
    function scopedAnimate(elementOrSelector, keyframes, options) {
        return new (0, _groupMjs.GroupPlaybackControls)((0, _animateElementsMjs.animateElements)(elementOrSelector, keyframes, options, scope));
    }
    return scopedAnimate;
};
const animateMini = /*@__PURE__*/ createScopedWaapiAnimate();

},{"../../../../../../motion-dom/dist/es/animation/controls/Group.mjs":"acj7e","../../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","./animate-elements.mjs":"OgMQo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"OgMQo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateElements", ()=>animateElements);
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _timeConversionMjs = require("../../../../../../motion-utils/dist/es/time-conversion.mjs");
var _getValueTransitionMjs = require("../../../../../../motion-dom/dist/es/animation/utils/get-value-transition.mjs");
var _resolveElementsMjs = require("../../../../../../motion-dom/dist/es/utils/resolve-elements.mjs");
var _nativeAnimationMjs = require("./NativeAnimation.mjs");
function animateElements(elementOrSelector, keyframes, options, scope) {
    const elements = (0, _resolveElementsMjs.resolveElements)(elementOrSelector, scope);
    const numElements = elements.length;
    (0, _errorsMjs.invariant)(Boolean(numElements), "No valid element provided.");
    const animations = [];
    for(let i = 0; i < numElements; i++){
        const element = elements[i];
        const elementTransition = {
            ...options
        };
        /**
         * Resolve stagger function if provided.
         */ if (typeof elementTransition.delay === "function") elementTransition.delay = elementTransition.delay(i, numElements);
        for(const valueName in keyframes){
            const valueKeyframes = keyframes[valueName];
            const valueOptions = {
                ...(0, _getValueTransitionMjs.getValueTransition)(elementTransition, valueName)
            };
            valueOptions.duration = valueOptions.duration ? (0, _timeConversionMjs.secondsToMilliseconds)(valueOptions.duration) : valueOptions.duration;
            valueOptions.delay = (0, _timeConversionMjs.secondsToMilliseconds)(valueOptions.delay || 0);
            animations.push(new (0, _nativeAnimationMjs.NativeAnimation)(element, valueName, valueKeyframes, valueOptions));
        }
    }
    return animations;
}

},{"../../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../../motion-utils/dist/es/time-conversion.mjs":"1wf1y","../../../../../../motion-dom/dist/es/animation/utils/get-value-transition.mjs":"ati6m","../../../../../../motion-dom/dist/es/utils/resolve-elements.mjs":"2nFRq","./NativeAnimation.mjs":"lmruN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lmruN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NativeAnimation", ()=>NativeAnimation);
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _timeConversionMjs = require("../../../../../../motion-utils/dist/es/time-conversion.mjs");
var _createGeneratorEasingMjs = require("../../../../../../motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs");
var _isGeneratorMjs = require("../../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs");
var _nativeAnimationControlsMjs = require("../../../../../../motion-dom/dist/es/animation/waapi/NativeAnimationControls.mjs");
var _linearEasingMjs = require("../../../../../../motion-dom/dist/es/utils/supports/linear-easing.mjs");
var _indexMjs = require("./index.mjs");
var _numberBrowserMjs = require("../../../render/dom/value-types/number-browser.mjs");
var _getFinalKeyframeMjs = require("./utils/get-final-keyframe.mjs");
var _styleMjs = require("./utils/style.mjs");
var _supportsPartialKeyframesMjs = require("./utils/supports-partial-keyframes.mjs");
var _supportsWaapiMjs = require("./utils/supports-waapi.mjs");
const state = new WeakMap();
function hydrateKeyframes(valueName, keyframes, read) {
    for(let i = 0; i < keyframes.length; i++){
        if (keyframes[i] === null) keyframes[i] = i === 0 ? read() : keyframes[i - 1];
        if (typeof keyframes[i] === "number" && (0, _numberBrowserMjs.browserNumberValueTypes)[valueName]) keyframes[i] = (0, _numberBrowserMjs.browserNumberValueTypes)[valueName].transform(keyframes[i]);
    }
    if (!(0, _supportsPartialKeyframesMjs.supportsPartialKeyframes)() && keyframes.length < 2) keyframes.unshift(read());
}
const defaultEasing = "easeOut";
function getElementAnimationState(element) {
    const animationState = state.get(element) || new Map();
    state.set(element, animationState);
    return state.get(element);
}
class NativeAnimation extends (0, _nativeAnimationControlsMjs.NativeAnimationControls) {
    constructor(element, valueName, valueKeyframes, options){
        const isCSSVar = valueName.startsWith("--");
        (0, _errorsMjs.invariant)(typeof options.type !== "string", `animateMini doesn't support "type" as a string. Did you mean to import { spring } from "framer-motion"?`);
        const existingAnimation = getElementAnimationState(element).get(valueName);
        existingAnimation && existingAnimation.stop();
        const readInitialKeyframe = ()=>{
            return valueName.startsWith("--") ? element.style.getPropertyValue(valueName) : window.getComputedStyle(element)[valueName];
        };
        if (!Array.isArray(valueKeyframes)) valueKeyframes = [
            valueKeyframes
        ];
        hydrateKeyframes(valueName, valueKeyframes, readInitialKeyframe);
        // TODO: Replace this with toString()?
        if ((0, _isGeneratorMjs.isGenerator)(options.type)) {
            const generatorOptions = (0, _createGeneratorEasingMjs.createGeneratorEasing)(options, 100, options.type);
            options.ease = (0, _linearEasingMjs.supportsLinearEasing)() ? generatorOptions.ease : defaultEasing;
            options.duration = (0, _timeConversionMjs.secondsToMilliseconds)(generatorOptions.duration);
            options.type = "keyframes";
        } else options.ease = options.ease || defaultEasing;
        const onFinish = ()=>{
            this.setValue(element, valueName, (0, _getFinalKeyframeMjs.getFinalKeyframe)(valueKeyframes, options));
            this.cancel();
            this.resolveFinishedPromise();
        };
        const init = ()=>{
            this.setValue = isCSSVar ? (0, _styleMjs.setCSSVar) : (0, _styleMjs.setStyle);
            this.options = options;
            this.updateFinishedPromise();
            this.removeAnimation = ()=>{
                const elementState = state.get(element);
                elementState && elementState.delete(valueName);
            };
        };
        if (!(0, _supportsWaapiMjs.supportsWaapi)()) {
            super();
            init();
            onFinish();
        } else {
            super((0, _indexMjs.startWaapiAnimation)(element, valueName, valueKeyframes, options));
            init();
            if (options.autoplay === false) this.animation.pause();
            this.animation.onfinish = onFinish;
            getElementAnimationState(element).set(valueName, this);
        }
    }
    /**
     * Allows the returned animation to be awaited or promise-chained. Currently
     * resolves when the animation finishes at all but in a future update could/should
     * reject if its cancels.
     */ then(resolve, reject) {
        return this.currentFinishedPromise.then(resolve, reject);
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise((resolve)=>{
            this.resolveFinishedPromise = resolve;
        });
    }
    play() {
        if (this.state === "finished") this.updateFinishedPromise();
        super.play();
    }
    cancel() {
        this.removeAnimation();
        super.cancel();
    }
}

},{"../../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../../motion-utils/dist/es/time-conversion.mjs":"1wf1y","../../../../../../motion-dom/dist/es/animation/generators/utils/create-generator-easing.mjs":"g5eNK","../../../../../../motion-dom/dist/es/animation/generators/utils/is-generator.mjs":"fcH7M","../../../../../../motion-dom/dist/es/animation/waapi/NativeAnimationControls.mjs":"67oSb","../../../../../../motion-dom/dist/es/utils/supports/linear-easing.mjs":"jhNTV","./index.mjs":"6XvMk","../../../render/dom/value-types/number-browser.mjs":"fNtz2","./utils/get-final-keyframe.mjs":"5doYD","./utils/style.mjs":"5yVZa","./utils/supports-partial-keyframes.mjs":"aqqr1","./utils/supports-waapi.mjs":"bT0BF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"67oSb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NativeAnimationControls", ()=>NativeAnimationControls);
var _errorsMjs = require("../../../../../motion-utils/dist/es/errors.mjs");
var _noopMjs = require("../../../../../motion-utils/dist/es/noop.mjs");
var _timeConversionMjs = require("../../../../../motion-utils/dist/es/time-conversion.mjs");
var _attachTimelineMjs = require("./utils/attach-timeline.mjs");
class NativeAnimationControls {
    constructor(animation){
        this.animation = animation;
    }
    get duration() {
        var _a, _b, _c;
        const durationInMs = ((_b = (_a = this.animation) === null || _a === void 0 ? void 0 : _a.effect) === null || _b === void 0 ? void 0 : _b.getComputedTiming().duration) || ((_c = this.options) === null || _c === void 0 ? void 0 : _c.duration) || 300;
        return (0, _timeConversionMjs.millisecondsToSeconds)(Number(durationInMs));
    }
    get time() {
        var _a;
        if (this.animation) return (0, _timeConversionMjs.millisecondsToSeconds)(((_a = this.animation) === null || _a === void 0 ? void 0 : _a.currentTime) || 0);
        return 0;
    }
    set time(newTime) {
        if (this.animation) this.animation.currentTime = (0, _timeConversionMjs.secondsToMilliseconds)(newTime);
    }
    get speed() {
        return this.animation ? this.animation.playbackRate : 1;
    }
    set speed(newSpeed) {
        if (this.animation) this.animation.playbackRate = newSpeed;
    }
    get state() {
        return this.animation ? this.animation.playState : "finished";
    }
    get startTime() {
        return this.animation ? this.animation.startTime : null;
    }
    get finished() {
        return this.animation ? this.animation.finished : Promise.resolve();
    }
    play() {
        this.animation && this.animation.play();
    }
    pause() {
        this.animation && this.animation.pause();
    }
    stop() {
        if (!this.animation || this.state === "idle" || this.state === "finished") return;
        if (this.animation.commitStyles) this.animation.commitStyles();
        this.cancel();
    }
    flatten() {
        var _a;
        if (!this.animation) return;
        (_a = this.animation.effect) === null || _a === void 0 || _a.updateTiming({
            easing: "linear"
        });
    }
    attachTimeline(timeline) {
        if (this.animation) (0, _attachTimelineMjs.attachTimeline)(this.animation, timeline);
        return 0, _noopMjs.noop;
    }
    complete() {
        this.animation && this.animation.finish();
    }
    cancel() {
        try {
            this.animation && this.animation.cancel();
        } catch (e) {}
    }
}

},{"../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../motion-utils/dist/es/noop.mjs":"dgfzh","../../../../../motion-utils/dist/es/time-conversion.mjs":"1wf1y","./utils/attach-timeline.mjs":"jX2fN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5yVZa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setCSSVar", ()=>setCSSVar);
parcelHelpers.export(exports, "setStyle", ()=>setStyle);
function setCSSVar(element, name, value) {
    element.style.setProperty(`--${name}`, value);
}
function setStyle(element, name, value) {
    element.style[name] = value;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aqqr1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "supportsPartialKeyframes", ()=>supportsPartialKeyframes);
var _errorsMjs = require("../../../../../../../motion-utils/dist/es/errors.mjs");
var _memoMjs = require("../../../../../../../motion-utils/dist/es/memo.mjs");
const supportsPartialKeyframes = /*@__PURE__*/ (0, _memoMjs.memo)(()=>{
    try {
        document.createElement("div").animate({
            opacity: [
                1
            ]
        });
    } catch (e) {
        return false;
    }
    return true;
});

},{"../../../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../../../motion-utils/dist/es/memo.mjs":"9brTq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"goHgh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "inView", ()=>inView);
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _resolveElementsMjs = require("../../../../../../motion-dom/dist/es/utils/resolve-elements.mjs");
const thresholds = {
    some: 0,
    all: 1
};
function inView(elementOrSelector, onStart, { root, margin: rootMargin, amount = "some" } = {}) {
    const elements = (0, _resolveElementsMjs.resolveElements)(elementOrSelector);
    const activeIntersections = new WeakMap();
    const onIntersectionChange = (entries)=>{
        entries.forEach((entry)=>{
            const onEnd = activeIntersections.get(entry.target);
            /**
             * If there's no change to the intersection, we don't need to
             * do anything here.
             */ if (entry.isIntersecting === Boolean(onEnd)) return;
            if (entry.isIntersecting) {
                const newOnEnd = onStart(entry.target, entry);
                if (typeof newOnEnd === "function") activeIntersections.set(entry.target, newOnEnd);
                else observer.unobserve(entry.target);
            } else if (typeof onEnd === "function") {
                onEnd(entry);
                activeIntersections.delete(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(onIntersectionChange, {
        root,
        rootMargin,
        threshold: typeof amount === "number" ? amount : thresholds[amount]
    });
    elements.forEach((element)=>observer.observe(element));
    return ()=>observer.disconnect();
}

},{"../../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../../../../../motion-dom/dist/es/utils/resolve-elements.mjs":"2nFRq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5EnB6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateSequence", ()=>(0, _animateSequenceMjs.animateSequence));
parcelHelpers.export(exports, "animate", ()=>(0, _animateStyleMjs.animateMini));
var _animateSequenceMjs = require("../../framer-motion/dist/es/animation/animators/waapi/animate-sequence.mjs");
var _animateStyleMjs = require("../../framer-motion/dist/es/animation/animators/waapi/animate-style.mjs");

},{"../../framer-motion/dist/es/animation/animators/waapi/animate-sequence.mjs":"5iNki","../../framer-motion/dist/es/animation/animators/waapi/animate-style.mjs":"aPVKP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5iNki":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "animateSequence", ()=>animateSequence);
var _groupMjs = require("../../../../../../motion-dom/dist/es/animation/controls/Group.mjs");
var _errorsMjs = require("../../../../../../motion-utils/dist/es/errors.mjs");
var _createMjs = require("../../sequence/create.mjs");
var _animateElementsMjs = require("./animate-elements.mjs");
function animateSequence(definition, options) {
    const animations = [];
    (0, _createMjs.createAnimationsFromSequence)(definition, options).forEach(({ keyframes, transition }, element)=>{
        animations.push(...(0, _animateElementsMjs.animateElements)(element, keyframes, transition));
    });
    return new (0, _groupMjs.GroupPlaybackControls)(animations);
}

},{"../../../../../../motion-dom/dist/es/animation/controls/Group.mjs":"acj7e","../../../../../../motion-utils/dist/es/errors.mjs":"dlaJf","../../sequence/create.mjs":"1ZblQ","./animate-elements.mjs":"OgMQo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["eCF1U","igcvL"], "igcvL", "parcelRequire94c2")

//# sourceMappingURL=test.5baa4167.js.map
