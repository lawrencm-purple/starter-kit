module.exports = {

"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/lib/trace/constants.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * Contains predefined constants for the trace span name in next/server.
 *
 * Currently, next/server/tracer is internal implementation only for tracking
 * next.js's implementation only with known span names defined here.
 **/ // eslint typescript has a bug with TS enums
/* eslint-disable no-shadow */ __turbopack_esm__({
    "AppRenderSpan": (()=>AppRenderSpan),
    "AppRouteRouteHandlersSpan": (()=>AppRouteRouteHandlersSpan),
    "BaseServerSpan": (()=>BaseServerSpan),
    "LoadComponentsSpan": (()=>LoadComponentsSpan),
    "LogSpanAllowList": (()=>LogSpanAllowList),
    "MiddlewareSpan": (()=>MiddlewareSpan),
    "NextNodeServerSpan": (()=>NextNodeServerSpan),
    "NextServerSpan": (()=>NextServerSpan),
    "NextVanillaSpanAllowlist": (()=>NextVanillaSpanAllowlist),
    "NodeSpan": (()=>NodeSpan),
    "RenderSpan": (()=>RenderSpan),
    "ResolveMetadataSpan": (()=>ResolveMetadataSpan),
    "RouterSpan": (()=>RouterSpan),
    "StartServerSpan": (()=>StartServerSpan)
});
var BaseServerSpan;
(function(BaseServerSpan) {
    BaseServerSpan["handleRequest"] = "BaseServer.handleRequest";
    BaseServerSpan["run"] = "BaseServer.run";
    BaseServerSpan["pipe"] = "BaseServer.pipe";
    BaseServerSpan["getStaticHTML"] = "BaseServer.getStaticHTML";
    BaseServerSpan["render"] = "BaseServer.render";
    BaseServerSpan["renderToResponseWithComponents"] = "BaseServer.renderToResponseWithComponents";
    BaseServerSpan["renderToResponse"] = "BaseServer.renderToResponse";
    BaseServerSpan["renderToHTML"] = "BaseServer.renderToHTML";
    BaseServerSpan["renderError"] = "BaseServer.renderError";
    BaseServerSpan["renderErrorToResponse"] = "BaseServer.renderErrorToResponse";
    BaseServerSpan["renderErrorToHTML"] = "BaseServer.renderErrorToHTML";
    BaseServerSpan["render404"] = "BaseServer.render404";
})(BaseServerSpan || (BaseServerSpan = {}));
var LoadComponentsSpan;
(function(LoadComponentsSpan) {
    LoadComponentsSpan["loadDefaultErrorComponents"] = "LoadComponents.loadDefaultErrorComponents";
    LoadComponentsSpan["loadComponents"] = "LoadComponents.loadComponents";
})(LoadComponentsSpan || (LoadComponentsSpan = {}));
var NextServerSpan;
(function(NextServerSpan) {
    NextServerSpan["getRequestHandler"] = "NextServer.getRequestHandler";
    NextServerSpan["getServer"] = "NextServer.getServer";
    NextServerSpan["getServerRequestHandler"] = "NextServer.getServerRequestHandler";
    NextServerSpan["createServer"] = "createServer.createServer";
})(NextServerSpan || (NextServerSpan = {}));
var NextNodeServerSpan;
(function(NextNodeServerSpan) {
    NextNodeServerSpan["compression"] = "NextNodeServer.compression";
    NextNodeServerSpan["getBuildId"] = "NextNodeServer.getBuildId";
    NextNodeServerSpan["createComponentTree"] = "NextNodeServer.createComponentTree";
    NextNodeServerSpan["clientComponentLoading"] = "NextNodeServer.clientComponentLoading";
    NextNodeServerSpan["getLayoutOrPageModule"] = "NextNodeServer.getLayoutOrPageModule";
    NextNodeServerSpan["generateStaticRoutes"] = "NextNodeServer.generateStaticRoutes";
    NextNodeServerSpan["generateFsStaticRoutes"] = "NextNodeServer.generateFsStaticRoutes";
    NextNodeServerSpan["generatePublicRoutes"] = "NextNodeServer.generatePublicRoutes";
    NextNodeServerSpan["generateImageRoutes"] = "NextNodeServer.generateImageRoutes.route";
    NextNodeServerSpan["sendRenderResult"] = "NextNodeServer.sendRenderResult";
    NextNodeServerSpan["proxyRequest"] = "NextNodeServer.proxyRequest";
    NextNodeServerSpan["runApi"] = "NextNodeServer.runApi";
    NextNodeServerSpan["render"] = "NextNodeServer.render";
    NextNodeServerSpan["renderHTML"] = "NextNodeServer.renderHTML";
    NextNodeServerSpan["imageOptimizer"] = "NextNodeServer.imageOptimizer";
    NextNodeServerSpan["getPagePath"] = "NextNodeServer.getPagePath";
    NextNodeServerSpan["getRoutesManifest"] = "NextNodeServer.getRoutesManifest";
    NextNodeServerSpan["findPageComponents"] = "NextNodeServer.findPageComponents";
    NextNodeServerSpan["getFontManifest"] = "NextNodeServer.getFontManifest";
    NextNodeServerSpan["getServerComponentManifest"] = "NextNodeServer.getServerComponentManifest";
    NextNodeServerSpan["getRequestHandler"] = "NextNodeServer.getRequestHandler";
    NextNodeServerSpan["renderToHTML"] = "NextNodeServer.renderToHTML";
    NextNodeServerSpan["renderError"] = "NextNodeServer.renderError";
    NextNodeServerSpan["renderErrorToHTML"] = "NextNodeServer.renderErrorToHTML";
    NextNodeServerSpan["render404"] = "NextNodeServer.render404";
    NextNodeServerSpan["startResponse"] = "NextNodeServer.startResponse";
    // nested inner span, does not require parent scope name
    NextNodeServerSpan["route"] = "route";
    NextNodeServerSpan["onProxyReq"] = "onProxyReq";
    NextNodeServerSpan["apiResolver"] = "apiResolver";
    NextNodeServerSpan["internalFetch"] = "internalFetch";
})(NextNodeServerSpan || (NextNodeServerSpan = {}));
var StartServerSpan;
(function(StartServerSpan) {
    StartServerSpan["startServer"] = "startServer.startServer";
})(StartServerSpan || (StartServerSpan = {}));
var RenderSpan;
(function(RenderSpan) {
    RenderSpan["getServerSideProps"] = "Render.getServerSideProps";
    RenderSpan["getStaticProps"] = "Render.getStaticProps";
    RenderSpan["renderToString"] = "Render.renderToString";
    RenderSpan["renderDocument"] = "Render.renderDocument";
    RenderSpan["createBodyResult"] = "Render.createBodyResult";
})(RenderSpan || (RenderSpan = {}));
var AppRenderSpan;
(function(AppRenderSpan) {
    AppRenderSpan["renderToString"] = "AppRender.renderToString";
    AppRenderSpan["renderToReadableStream"] = "AppRender.renderToReadableStream";
    AppRenderSpan["getBodyResult"] = "AppRender.getBodyResult";
    AppRenderSpan["fetch"] = "AppRender.fetch";
})(AppRenderSpan || (AppRenderSpan = {}));
var RouterSpan;
(function(RouterSpan) {
    RouterSpan["executeRoute"] = "Router.executeRoute";
})(RouterSpan || (RouterSpan = {}));
var NodeSpan;
(function(NodeSpan) {
    NodeSpan["runHandler"] = "Node.runHandler";
})(NodeSpan || (NodeSpan = {}));
var AppRouteRouteHandlersSpan;
(function(AppRouteRouteHandlersSpan) {
    AppRouteRouteHandlersSpan["runHandler"] = "AppRouteRouteHandlers.runHandler";
})(AppRouteRouteHandlersSpan || (AppRouteRouteHandlersSpan = {}));
var ResolveMetadataSpan;
(function(ResolveMetadataSpan) {
    ResolveMetadataSpan["generateMetadata"] = "ResolveMetadata.generateMetadata";
    ResolveMetadataSpan["generateViewport"] = "ResolveMetadata.generateViewport";
})(ResolveMetadataSpan || (ResolveMetadataSpan = {}));
var MiddlewareSpan;
(function(MiddlewareSpan) {
    MiddlewareSpan["execute"] = "Middleware.execute";
})(MiddlewareSpan || (MiddlewareSpan = {}));
const NextVanillaSpanAllowlist = [
    "Middleware.execute",
    "BaseServer.handleRequest",
    "Render.getServerSideProps",
    "Render.getStaticProps",
    "AppRender.fetch",
    "AppRender.getBodyResult",
    "Render.renderDocument",
    "Node.runHandler",
    "AppRouteRouteHandlers.runHandler",
    "ResolveMetadata.generateMetadata",
    "ResolveMetadata.generateViewport",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.findPageComponents",
    "NextNodeServer.getLayoutOrPageModule",
    "NextNodeServer.startResponse",
    "NextNodeServer.clientComponentLoading"
];
const LogSpanAllowList = [
    "NextNodeServer.findPageComponents",
    "NextNodeServer.createComponentTree",
    "NextNodeServer.clientComponentLoading"
];
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/is-thenable.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * Check to see if a value is Thenable.
 *
 * @param promise the maybe-thenable value
 * @returns true if the value is thenable
 */ __turbopack_esm__({
    "isThenable": (()=>isThenable)
});
function isThenable(promise) {
    return promise !== null && typeof promise === 'object' && 'then' in promise && typeof promise.then === 'function';
} //# sourceMappingURL=is-thenable.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@opentelemetry/api/index.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
(()=>{
    "use strict";
    var e = {
        491: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ContextAPI = void 0;
            const n = r(223);
            const a = r(172);
            const o = r(930);
            const i = "context";
            const c = new n.NoopContextManager;
            class ContextAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new ContextAPI;
                    }
                    return this._instance;
                }
                setGlobalContextManager(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                active() {
                    return this._getContextManager().active();
                }
                with(e, t, r, ...n) {
                    return this._getContextManager().with(e, t, r, ...n);
                }
                bind(e, t) {
                    return this._getContextManager().bind(e, t);
                }
                _getContextManager() {
                    return (0, a.getGlobal)(i) || c;
                }
                disable() {
                    this._getContextManager().disable();
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.ContextAPI = ContextAPI;
        },
        930: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagAPI = void 0;
            const n = r(56);
            const a = r(912);
            const o = r(957);
            const i = r(172);
            const c = "diag";
            class DiagAPI {
                constructor(){
                    function _logProxy(e) {
                        return function(...t) {
                            const r = (0, i.getGlobal)("diag");
                            if (!r) return;
                            return r[e](...t);
                        };
                    }
                    const e = this;
                    const setLogger = (t, r = {
                        logLevel: o.DiagLogLevel.INFO
                    })=>{
                        var n, c, s;
                        if (t === e) {
                            const t = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
                            e.error((n = t.stack) !== null && n !== void 0 ? n : t.message);
                            return false;
                        }
                        if (typeof r === "number") {
                            r = {
                                logLevel: r
                            };
                        }
                        const u = (0, i.getGlobal)("diag");
                        const l = (0, a.createLogLevelDiagLogger)((c = r.logLevel) !== null && c !== void 0 ? c : o.DiagLogLevel.INFO, t);
                        if (u && !r.suppressOverrideMessage) {
                            const e = (s = (new Error).stack) !== null && s !== void 0 ? s : "<failed to generate stacktrace>";
                            u.warn(`Current logger will be overwritten from ${e}`);
                            l.warn(`Current logger will overwrite one already registered from ${e}`);
                        }
                        return (0, i.registerGlobal)("diag", l, e, true);
                    };
                    e.setLogger = setLogger;
                    e.disable = ()=>{
                        (0, i.unregisterGlobal)(c, e);
                    };
                    e.createComponentLogger = (e)=>new n.DiagComponentLogger(e);
                    e.verbose = _logProxy("verbose");
                    e.debug = _logProxy("debug");
                    e.info = _logProxy("info");
                    e.warn = _logProxy("warn");
                    e.error = _logProxy("error");
                }
                static instance() {
                    if (!this._instance) {
                        this._instance = new DiagAPI;
                    }
                    return this._instance;
                }
            }
            t.DiagAPI = DiagAPI;
        },
        653: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.MetricsAPI = void 0;
            const n = r(660);
            const a = r(172);
            const o = r(930);
            const i = "metrics";
            class MetricsAPI {
                constructor(){}
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new MetricsAPI;
                    }
                    return this._instance;
                }
                setGlobalMeterProvider(e) {
                    return (0, a.registerGlobal)(i, e, o.DiagAPI.instance());
                }
                getMeterProvider() {
                    return (0, a.getGlobal)(i) || n.NOOP_METER_PROVIDER;
                }
                getMeter(e, t, r) {
                    return this.getMeterProvider().getMeter(e, t, r);
                }
                disable() {
                    (0, a.unregisterGlobal)(i, o.DiagAPI.instance());
                }
            }
            t.MetricsAPI = MetricsAPI;
        },
        181: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.PropagationAPI = void 0;
            const n = r(172);
            const a = r(874);
            const o = r(194);
            const i = r(277);
            const c = r(369);
            const s = r(930);
            const u = "propagation";
            const l = new a.NoopTextMapPropagator;
            class PropagationAPI {
                constructor(){
                    this.createBaggage = c.createBaggage;
                    this.getBaggage = i.getBaggage;
                    this.getActiveBaggage = i.getActiveBaggage;
                    this.setBaggage = i.setBaggage;
                    this.deleteBaggage = i.deleteBaggage;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new PropagationAPI;
                    }
                    return this._instance;
                }
                setGlobalPropagator(e) {
                    return (0, n.registerGlobal)(u, e, s.DiagAPI.instance());
                }
                inject(e, t, r = o.defaultTextMapSetter) {
                    return this._getGlobalPropagator().inject(e, t, r);
                }
                extract(e, t, r = o.defaultTextMapGetter) {
                    return this._getGlobalPropagator().extract(e, t, r);
                }
                fields() {
                    return this._getGlobalPropagator().fields();
                }
                disable() {
                    (0, n.unregisterGlobal)(u, s.DiagAPI.instance());
                }
                _getGlobalPropagator() {
                    return (0, n.getGlobal)(u) || l;
                }
            }
            t.PropagationAPI = PropagationAPI;
        },
        997: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceAPI = void 0;
            const n = r(172);
            const a = r(846);
            const o = r(139);
            const i = r(607);
            const c = r(930);
            const s = "trace";
            class TraceAPI {
                constructor(){
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                    this.wrapSpanContext = o.wrapSpanContext;
                    this.isSpanContextValid = o.isSpanContextValid;
                    this.deleteSpan = i.deleteSpan;
                    this.getSpan = i.getSpan;
                    this.getActiveSpan = i.getActiveSpan;
                    this.getSpanContext = i.getSpanContext;
                    this.setSpan = i.setSpan;
                    this.setSpanContext = i.setSpanContext;
                }
                static getInstance() {
                    if (!this._instance) {
                        this._instance = new TraceAPI;
                    }
                    return this._instance;
                }
                setGlobalTracerProvider(e) {
                    const t = (0, n.registerGlobal)(s, this._proxyTracerProvider, c.DiagAPI.instance());
                    if (t) {
                        this._proxyTracerProvider.setDelegate(e);
                    }
                    return t;
                }
                getTracerProvider() {
                    return (0, n.getGlobal)(s) || this._proxyTracerProvider;
                }
                getTracer(e, t) {
                    return this.getTracerProvider().getTracer(e, t);
                }
                disable() {
                    (0, n.unregisterGlobal)(s, c.DiagAPI.instance());
                    this._proxyTracerProvider = new a.ProxyTracerProvider;
                }
            }
            t.TraceAPI = TraceAPI;
        },
        277: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.deleteBaggage = t.setBaggage = t.getActiveBaggage = t.getBaggage = void 0;
            const n = r(491);
            const a = r(780);
            const o = (0, a.createContextKey)("OpenTelemetry Baggage Key");
            function getBaggage(e) {
                return e.getValue(o) || undefined;
            }
            t.getBaggage = getBaggage;
            function getActiveBaggage() {
                return getBaggage(n.ContextAPI.getInstance().active());
            }
            t.getActiveBaggage = getActiveBaggage;
            function setBaggage(e, t) {
                return e.setValue(o, t);
            }
            t.setBaggage = setBaggage;
            function deleteBaggage(e) {
                return e.deleteValue(o);
            }
            t.deleteBaggage = deleteBaggage;
        },
        993: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.BaggageImpl = void 0;
            class BaggageImpl {
                constructor(e){
                    this._entries = e ? new Map(e) : new Map;
                }
                getEntry(e) {
                    const t = this._entries.get(e);
                    if (!t) {
                        return undefined;
                    }
                    return Object.assign({}, t);
                }
                getAllEntries() {
                    return Array.from(this._entries.entries()).map(([e, t])=>[
                            e,
                            t
                        ]);
                }
                setEntry(e, t) {
                    const r = new BaggageImpl(this._entries);
                    r._entries.set(e, t);
                    return r;
                }
                removeEntry(e) {
                    const t = new BaggageImpl(this._entries);
                    t._entries.delete(e);
                    return t;
                }
                removeEntries(...e) {
                    const t = new BaggageImpl(this._entries);
                    for (const r of e){
                        t._entries.delete(r);
                    }
                    return t;
                }
                clear() {
                    return new BaggageImpl;
                }
            }
            t.BaggageImpl = BaggageImpl;
        },
        830: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataSymbol = void 0;
            t.baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
        },
        369: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.baggageEntryMetadataFromString = t.createBaggage = void 0;
            const n = r(930);
            const a = r(993);
            const o = r(830);
            const i = n.DiagAPI.instance();
            function createBaggage(e = {}) {
                return new a.BaggageImpl(new Map(Object.entries(e)));
            }
            t.createBaggage = createBaggage;
            function baggageEntryMetadataFromString(e) {
                if (typeof e !== "string") {
                    i.error(`Cannot create baggage metadata from unknown type: ${typeof e}`);
                    e = "";
                }
                return {
                    __TYPE__: o.baggageEntryMetadataSymbol,
                    toString () {
                        return e;
                    }
                };
            }
            t.baggageEntryMetadataFromString = baggageEntryMetadataFromString;
        },
        67: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.context = void 0;
            const n = r(491);
            t.context = n.ContextAPI.getInstance();
        },
        223: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopContextManager = void 0;
            const n = r(780);
            class NoopContextManager {
                active() {
                    return n.ROOT_CONTEXT;
                }
                with(e, t, r, ...n) {
                    return t.call(r, ...n);
                }
                bind(e, t) {
                    return t;
                }
                enable() {
                    return this;
                }
                disable() {
                    return this;
                }
            }
            t.NoopContextManager = NoopContextManager;
        },
        780: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ROOT_CONTEXT = t.createContextKey = void 0;
            function createContextKey(e) {
                return Symbol.for(e);
            }
            t.createContextKey = createContextKey;
            class BaseContext {
                constructor(e){
                    const t = this;
                    t._currentContext = e ? new Map(e) : new Map;
                    t.getValue = (e)=>t._currentContext.get(e);
                    t.setValue = (e, r)=>{
                        const n = new BaseContext(t._currentContext);
                        n._currentContext.set(e, r);
                        return n;
                    };
                    t.deleteValue = (e)=>{
                        const r = new BaseContext(t._currentContext);
                        r._currentContext.delete(e);
                        return r;
                    };
                }
            }
            t.ROOT_CONTEXT = new BaseContext;
        },
        506: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.diag = void 0;
            const n = r(930);
            t.diag = n.DiagAPI.instance();
        },
        56: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagComponentLogger = void 0;
            const n = r(172);
            class DiagComponentLogger {
                constructor(e){
                    this._namespace = e.namespace || "DiagComponentLogger";
                }
                debug(...e) {
                    return logProxy("debug", this._namespace, e);
                }
                error(...e) {
                    return logProxy("error", this._namespace, e);
                }
                info(...e) {
                    return logProxy("info", this._namespace, e);
                }
                warn(...e) {
                    return logProxy("warn", this._namespace, e);
                }
                verbose(...e) {
                    return logProxy("verbose", this._namespace, e);
                }
            }
            t.DiagComponentLogger = DiagComponentLogger;
            function logProxy(e, t, r) {
                const a = (0, n.getGlobal)("diag");
                if (!a) {
                    return;
                }
                r.unshift(t);
                return a[e](...r);
            }
        },
        972: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagConsoleLogger = void 0;
            const r = [
                {
                    n: "error",
                    c: "error"
                },
                {
                    n: "warn",
                    c: "warn"
                },
                {
                    n: "info",
                    c: "info"
                },
                {
                    n: "debug",
                    c: "debug"
                },
                {
                    n: "verbose",
                    c: "trace"
                }
            ];
            class DiagConsoleLogger {
                constructor(){
                    function _consoleFunc(e) {
                        return function(...t) {
                            if (console) {
                                let r = console[e];
                                if (typeof r !== "function") {
                                    r = console.log;
                                }
                                if (typeof r === "function") {
                                    return r.apply(console, t);
                                }
                            }
                        };
                    }
                    for(let e = 0; e < r.length; e++){
                        this[r[e].n] = _consoleFunc(r[e].c);
                    }
                }
            }
            t.DiagConsoleLogger = DiagConsoleLogger;
        },
        912: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createLogLevelDiagLogger = void 0;
            const n = r(957);
            function createLogLevelDiagLogger(e, t) {
                if (e < n.DiagLogLevel.NONE) {
                    e = n.DiagLogLevel.NONE;
                } else if (e > n.DiagLogLevel.ALL) {
                    e = n.DiagLogLevel.ALL;
                }
                t = t || {};
                function _filterFunc(r, n) {
                    const a = t[r];
                    if (typeof a === "function" && e >= n) {
                        return a.bind(t);
                    }
                    return function() {};
                }
                return {
                    error: _filterFunc("error", n.DiagLogLevel.ERROR),
                    warn: _filterFunc("warn", n.DiagLogLevel.WARN),
                    info: _filterFunc("info", n.DiagLogLevel.INFO),
                    debug: _filterFunc("debug", n.DiagLogLevel.DEBUG),
                    verbose: _filterFunc("verbose", n.DiagLogLevel.VERBOSE)
                };
            }
            t.createLogLevelDiagLogger = createLogLevelDiagLogger;
        },
        957: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.DiagLogLevel = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["ERROR"] = 30] = "ERROR";
                e[e["WARN"] = 50] = "WARN";
                e[e["INFO"] = 60] = "INFO";
                e[e["DEBUG"] = 70] = "DEBUG";
                e[e["VERBOSE"] = 80] = "VERBOSE";
                e[e["ALL"] = 9999] = "ALL";
            })(r = t.DiagLogLevel || (t.DiagLogLevel = {}));
        },
        172: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.unregisterGlobal = t.getGlobal = t.registerGlobal = void 0;
            const n = r(200);
            const a = r(521);
            const o = r(130);
            const i = a.VERSION.split(".")[0];
            const c = Symbol.for(`opentelemetry.js.api.${i}`);
            const s = n._globalThis;
            function registerGlobal(e, t, r, n = false) {
                var o;
                const i = s[c] = (o = s[c]) !== null && o !== void 0 ? o : {
                    version: a.VERSION
                };
                if (!n && i[e]) {
                    const t = new Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                if (i.version !== a.VERSION) {
                    const t = new Error(`@opentelemetry/api: Registration of version v${i.version} for ${e} does not match previously registered API v${a.VERSION}`);
                    r.error(t.stack || t.message);
                    return false;
                }
                i[e] = t;
                r.debug(`@opentelemetry/api: Registered a global for ${e} v${a.VERSION}.`);
                return true;
            }
            t.registerGlobal = registerGlobal;
            function getGlobal(e) {
                var t, r;
                const n = (t = s[c]) === null || t === void 0 ? void 0 : t.version;
                if (!n || !(0, o.isCompatible)(n)) {
                    return;
                }
                return (r = s[c]) === null || r === void 0 ? void 0 : r[e];
            }
            t.getGlobal = getGlobal;
            function unregisterGlobal(e, t) {
                t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${a.VERSION}.`);
                const r = s[c];
                if (r) {
                    delete r[e];
                }
            }
            t.unregisterGlobal = unregisterGlobal;
        },
        130: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.isCompatible = t._makeCompatibilityCheck = void 0;
            const n = r(521);
            const a = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
            function _makeCompatibilityCheck(e) {
                const t = new Set([
                    e
                ]);
                const r = new Set;
                const n = e.match(a);
                if (!n) {
                    return ()=>false;
                }
                const o = {
                    major: +n[1],
                    minor: +n[2],
                    patch: +n[3],
                    prerelease: n[4]
                };
                if (o.prerelease != null) {
                    return function isExactmatch(t) {
                        return t === e;
                    };
                }
                function _reject(e) {
                    r.add(e);
                    return false;
                }
                function _accept(e) {
                    t.add(e);
                    return true;
                }
                return function isCompatible(e) {
                    if (t.has(e)) {
                        return true;
                    }
                    if (r.has(e)) {
                        return false;
                    }
                    const n = e.match(a);
                    if (!n) {
                        return _reject(e);
                    }
                    const i = {
                        major: +n[1],
                        minor: +n[2],
                        patch: +n[3],
                        prerelease: n[4]
                    };
                    if (i.prerelease != null) {
                        return _reject(e);
                    }
                    if (o.major !== i.major) {
                        return _reject(e);
                    }
                    if (o.major === 0) {
                        if (o.minor === i.minor && o.patch <= i.patch) {
                            return _accept(e);
                        }
                        return _reject(e);
                    }
                    if (o.minor <= i.minor) {
                        return _accept(e);
                    }
                    return _reject(e);
                };
            }
            t._makeCompatibilityCheck = _makeCompatibilityCheck;
            t.isCompatible = _makeCompatibilityCheck(n.VERSION);
        },
        886: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.metrics = void 0;
            const n = r(653);
            t.metrics = n.MetricsAPI.getInstance();
        },
        901: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ValueType = void 0;
            var r;
            (function(e) {
                e[e["INT"] = 0] = "INT";
                e[e["DOUBLE"] = 1] = "DOUBLE";
            })(r = t.ValueType || (t.ValueType = {}));
        },
        102: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createNoopMeter = t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = t.NOOP_OBSERVABLE_GAUGE_METRIC = t.NOOP_OBSERVABLE_COUNTER_METRIC = t.NOOP_UP_DOWN_COUNTER_METRIC = t.NOOP_HISTOGRAM_METRIC = t.NOOP_COUNTER_METRIC = t.NOOP_METER = t.NoopObservableUpDownCounterMetric = t.NoopObservableGaugeMetric = t.NoopObservableCounterMetric = t.NoopObservableMetric = t.NoopHistogramMetric = t.NoopUpDownCounterMetric = t.NoopCounterMetric = t.NoopMetric = t.NoopMeter = void 0;
            class NoopMeter {
                constructor(){}
                createHistogram(e, r) {
                    return t.NOOP_HISTOGRAM_METRIC;
                }
                createCounter(e, r) {
                    return t.NOOP_COUNTER_METRIC;
                }
                createUpDownCounter(e, r) {
                    return t.NOOP_UP_DOWN_COUNTER_METRIC;
                }
                createObservableGauge(e, r) {
                    return t.NOOP_OBSERVABLE_GAUGE_METRIC;
                }
                createObservableCounter(e, r) {
                    return t.NOOP_OBSERVABLE_COUNTER_METRIC;
                }
                createObservableUpDownCounter(e, r) {
                    return t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
                }
                addBatchObservableCallback(e, t) {}
                removeBatchObservableCallback(e) {}
            }
            t.NoopMeter = NoopMeter;
            class NoopMetric {
            }
            t.NoopMetric = NoopMetric;
            class NoopCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopCounterMetric = NoopCounterMetric;
            class NoopUpDownCounterMetric extends NoopMetric {
                add(e, t) {}
            }
            t.NoopUpDownCounterMetric = NoopUpDownCounterMetric;
            class NoopHistogramMetric extends NoopMetric {
                record(e, t) {}
            }
            t.NoopHistogramMetric = NoopHistogramMetric;
            class NoopObservableMetric {
                addCallback(e) {}
                removeCallback(e) {}
            }
            t.NoopObservableMetric = NoopObservableMetric;
            class NoopObservableCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableCounterMetric = NoopObservableCounterMetric;
            class NoopObservableGaugeMetric extends NoopObservableMetric {
            }
            t.NoopObservableGaugeMetric = NoopObservableGaugeMetric;
            class NoopObservableUpDownCounterMetric extends NoopObservableMetric {
            }
            t.NoopObservableUpDownCounterMetric = NoopObservableUpDownCounterMetric;
            t.NOOP_METER = new NoopMeter;
            t.NOOP_COUNTER_METRIC = new NoopCounterMetric;
            t.NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric;
            t.NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric;
            t.NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric;
            t.NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric;
            t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric;
            function createNoopMeter() {
                return t.NOOP_METER;
            }
            t.createNoopMeter = createNoopMeter;
        },
        660: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NOOP_METER_PROVIDER = t.NoopMeterProvider = void 0;
            const n = r(102);
            class NoopMeterProvider {
                getMeter(e, t, r) {
                    return n.NOOP_METER;
                }
            }
            t.NoopMeterProvider = NoopMeterProvider;
            t.NOOP_METER_PROVIDER = new NoopMeterProvider;
        },
        200: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(46), t);
        },
        651: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t._globalThis = void 0;
            t._globalThis = typeof globalThis === "object" ? globalThis : global;
        },
        46: function(e, t, r) {
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                if (n === undefined) n = r;
                Object.defineProperty(e, n, {
                    enumerable: true,
                    get: function() {
                        return t[r];
                    }
                });
            } : function(e, t, r, n) {
                if (n === undefined) n = r;
                e[n] = t[r];
            });
            var a = this && this.__exportStar || function(e, t) {
                for(var r in e)if (r !== "default" && !Object.prototype.hasOwnProperty.call(t, r)) n(t, e, r);
            };
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            a(r(651), t);
        },
        939: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.propagation = void 0;
            const n = r(181);
            t.propagation = n.PropagationAPI.getInstance();
        },
        874: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTextMapPropagator = void 0;
            class NoopTextMapPropagator {
                inject(e, t) {}
                extract(e, t) {
                    return e;
                }
                fields() {
                    return [];
                }
            }
            t.NoopTextMapPropagator = NoopTextMapPropagator;
        },
        194: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.defaultTextMapSetter = t.defaultTextMapGetter = void 0;
            t.defaultTextMapGetter = {
                get (e, t) {
                    if (e == null) {
                        return undefined;
                    }
                    return e[t];
                },
                keys (e) {
                    if (e == null) {
                        return [];
                    }
                    return Object.keys(e);
                }
            };
            t.defaultTextMapSetter = {
                set (e, t, r) {
                    if (e == null) {
                        return;
                    }
                    e[t] = r;
                }
            };
        },
        845: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.trace = void 0;
            const n = r(997);
            t.trace = n.TraceAPI.getInstance();
        },
        403: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NonRecordingSpan = void 0;
            const n = r(476);
            class NonRecordingSpan {
                constructor(e = n.INVALID_SPAN_CONTEXT){
                    this._spanContext = e;
                }
                spanContext() {
                    return this._spanContext;
                }
                setAttribute(e, t) {
                    return this;
                }
                setAttributes(e) {
                    return this;
                }
                addEvent(e, t) {
                    return this;
                }
                setStatus(e) {
                    return this;
                }
                updateName(e) {
                    return this;
                }
                end(e) {}
                isRecording() {
                    return false;
                }
                recordException(e, t) {}
            }
            t.NonRecordingSpan = NonRecordingSpan;
        },
        614: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracer = void 0;
            const n = r(491);
            const a = r(607);
            const o = r(403);
            const i = r(139);
            const c = n.ContextAPI.getInstance();
            class NoopTracer {
                startSpan(e, t, r = c.active()) {
                    const n = Boolean(t === null || t === void 0 ? void 0 : t.root);
                    if (n) {
                        return new o.NonRecordingSpan;
                    }
                    const s = r && (0, a.getSpanContext)(r);
                    if (isSpanContext(s) && (0, i.isSpanContextValid)(s)) {
                        return new o.NonRecordingSpan(s);
                    } else {
                        return new o.NonRecordingSpan;
                    }
                }
                startActiveSpan(e, t, r, n) {
                    let o;
                    let i;
                    let s;
                    if (arguments.length < 2) {
                        return;
                    } else if (arguments.length === 2) {
                        s = t;
                    } else if (arguments.length === 3) {
                        o = t;
                        s = r;
                    } else {
                        o = t;
                        i = r;
                        s = n;
                    }
                    const u = i !== null && i !== void 0 ? i : c.active();
                    const l = this.startSpan(e, o, u);
                    const g = (0, a.setSpan)(u, l);
                    return c.with(g, s, undefined, l);
                }
            }
            t.NoopTracer = NoopTracer;
            function isSpanContext(e) {
                return typeof e === "object" && typeof e["spanId"] === "string" && typeof e["traceId"] === "string" && typeof e["traceFlags"] === "number";
            }
        },
        124: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.NoopTracerProvider = void 0;
            const n = r(614);
            class NoopTracerProvider {
                getTracer(e, t, r) {
                    return new n.NoopTracer;
                }
            }
            t.NoopTracerProvider = NoopTracerProvider;
        },
        125: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracer = void 0;
            const n = r(614);
            const a = new n.NoopTracer;
            class ProxyTracer {
                constructor(e, t, r, n){
                    this._provider = e;
                    this.name = t;
                    this.version = r;
                    this.options = n;
                }
                startSpan(e, t, r) {
                    return this._getTracer().startSpan(e, t, r);
                }
                startActiveSpan(e, t, r, n) {
                    const a = this._getTracer();
                    return Reflect.apply(a.startActiveSpan, a, arguments);
                }
                _getTracer() {
                    if (this._delegate) {
                        return this._delegate;
                    }
                    const e = this._provider.getDelegateTracer(this.name, this.version, this.options);
                    if (!e) {
                        return a;
                    }
                    this._delegate = e;
                    return this._delegate;
                }
            }
            t.ProxyTracer = ProxyTracer;
        },
        846: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.ProxyTracerProvider = void 0;
            const n = r(125);
            const a = r(124);
            const o = new a.NoopTracerProvider;
            class ProxyTracerProvider {
                getTracer(e, t, r) {
                    var a;
                    return (a = this.getDelegateTracer(e, t, r)) !== null && a !== void 0 ? a : new n.ProxyTracer(this, e, t, r);
                }
                getDelegate() {
                    var e;
                    return (e = this._delegate) !== null && e !== void 0 ? e : o;
                }
                setDelegate(e) {
                    this._delegate = e;
                }
                getDelegateTracer(e, t, r) {
                    var n;
                    return (n = this._delegate) === null || n === void 0 ? void 0 : n.getTracer(e, t, r);
                }
            }
            t.ProxyTracerProvider = ProxyTracerProvider;
        },
        996: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SamplingDecision = void 0;
            var r;
            (function(e) {
                e[e["NOT_RECORD"] = 0] = "NOT_RECORD";
                e[e["RECORD"] = 1] = "RECORD";
                e[e["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
            })(r = t.SamplingDecision || (t.SamplingDecision = {}));
        },
        607: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.getSpanContext = t.setSpanContext = t.deleteSpan = t.setSpan = t.getActiveSpan = t.getSpan = void 0;
            const n = r(780);
            const a = r(403);
            const o = r(491);
            const i = (0, n.createContextKey)("OpenTelemetry Context Key SPAN");
            function getSpan(e) {
                return e.getValue(i) || undefined;
            }
            t.getSpan = getSpan;
            function getActiveSpan() {
                return getSpan(o.ContextAPI.getInstance().active());
            }
            t.getActiveSpan = getActiveSpan;
            function setSpan(e, t) {
                return e.setValue(i, t);
            }
            t.setSpan = setSpan;
            function deleteSpan(e) {
                return e.deleteValue(i);
            }
            t.deleteSpan = deleteSpan;
            function setSpanContext(e, t) {
                return setSpan(e, new a.NonRecordingSpan(t));
            }
            t.setSpanContext = setSpanContext;
            function getSpanContext(e) {
                var t;
                return (t = getSpan(e)) === null || t === void 0 ? void 0 : t.spanContext();
            }
            t.getSpanContext = getSpanContext;
        },
        325: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceStateImpl = void 0;
            const n = r(564);
            const a = 32;
            const o = 512;
            const i = ",";
            const c = "=";
            class TraceStateImpl {
                constructor(e){
                    this._internalState = new Map;
                    if (e) this._parse(e);
                }
                set(e, t) {
                    const r = this._clone();
                    if (r._internalState.has(e)) {
                        r._internalState.delete(e);
                    }
                    r._internalState.set(e, t);
                    return r;
                }
                unset(e) {
                    const t = this._clone();
                    t._internalState.delete(e);
                    return t;
                }
                get(e) {
                    return this._internalState.get(e);
                }
                serialize() {
                    return this._keys().reduce((e, t)=>{
                        e.push(t + c + this.get(t));
                        return e;
                    }, []).join(i);
                }
                _parse(e) {
                    if (e.length > o) return;
                    this._internalState = e.split(i).reverse().reduce((e, t)=>{
                        const r = t.trim();
                        const a = r.indexOf(c);
                        if (a !== -1) {
                            const o = r.slice(0, a);
                            const i = r.slice(a + 1, t.length);
                            if ((0, n.validateKey)(o) && (0, n.validateValue)(i)) {
                                e.set(o, i);
                            } else {}
                        }
                        return e;
                    }, new Map);
                    if (this._internalState.size > a) {
                        this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, a));
                    }
                }
                _keys() {
                    return Array.from(this._internalState.keys()).reverse();
                }
                _clone() {
                    const e = new TraceStateImpl;
                    e._internalState = new Map(this._internalState);
                    return e;
                }
            }
            t.TraceStateImpl = TraceStateImpl;
        },
        564: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.validateValue = t.validateKey = void 0;
            const r = "[_0-9a-z-*/]";
            const n = `[a-z]${r}{0,255}`;
            const a = `[a-z0-9]${r}{0,240}@[a-z]${r}{0,13}`;
            const o = new RegExp(`^(?:${n}|${a})$`);
            const i = /^[ -~]{0,255}[!-~]$/;
            const c = /,|=/;
            function validateKey(e) {
                return o.test(e);
            }
            t.validateKey = validateKey;
            function validateValue(e) {
                return i.test(e) && !c.test(e);
            }
            t.validateValue = validateValue;
        },
        98: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.createTraceState = void 0;
            const n = r(325);
            function createTraceState(e) {
                return new n.TraceStateImpl(e);
            }
            t.createTraceState = createTraceState;
        },
        476: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.INVALID_SPAN_CONTEXT = t.INVALID_TRACEID = t.INVALID_SPANID = void 0;
            const n = r(475);
            t.INVALID_SPANID = "0000000000000000";
            t.INVALID_TRACEID = "00000000000000000000000000000000";
            t.INVALID_SPAN_CONTEXT = {
                traceId: t.INVALID_TRACEID,
                spanId: t.INVALID_SPANID,
                traceFlags: n.TraceFlags.NONE
            };
        },
        357: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanKind = void 0;
            var r;
            (function(e) {
                e[e["INTERNAL"] = 0] = "INTERNAL";
                e[e["SERVER"] = 1] = "SERVER";
                e[e["CLIENT"] = 2] = "CLIENT";
                e[e["PRODUCER"] = 3] = "PRODUCER";
                e[e["CONSUMER"] = 4] = "CONSUMER";
            })(r = t.SpanKind || (t.SpanKind = {}));
        },
        139: (e, t, r)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.wrapSpanContext = t.isSpanContextValid = t.isValidSpanId = t.isValidTraceId = void 0;
            const n = r(476);
            const a = r(403);
            const o = /^([0-9a-f]{32})$/i;
            const i = /^[0-9a-f]{16}$/i;
            function isValidTraceId(e) {
                return o.test(e) && e !== n.INVALID_TRACEID;
            }
            t.isValidTraceId = isValidTraceId;
            function isValidSpanId(e) {
                return i.test(e) && e !== n.INVALID_SPANID;
            }
            t.isValidSpanId = isValidSpanId;
            function isSpanContextValid(e) {
                return isValidTraceId(e.traceId) && isValidSpanId(e.spanId);
            }
            t.isSpanContextValid = isSpanContextValid;
            function wrapSpanContext(e) {
                return new a.NonRecordingSpan(e);
            }
            t.wrapSpanContext = wrapSpanContext;
        },
        847: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.SpanStatusCode = void 0;
            var r;
            (function(e) {
                e[e["UNSET"] = 0] = "UNSET";
                e[e["OK"] = 1] = "OK";
                e[e["ERROR"] = 2] = "ERROR";
            })(r = t.SpanStatusCode || (t.SpanStatusCode = {}));
        },
        475: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.TraceFlags = void 0;
            var r;
            (function(e) {
                e[e["NONE"] = 0] = "NONE";
                e[e["SAMPLED"] = 1] = "SAMPLED";
            })(r = t.TraceFlags || (t.TraceFlags = {}));
        },
        521: (e, t)=>{
            Object.defineProperty(t, "__esModule", {
                value: true
            });
            t.VERSION = void 0;
            t.VERSION = "1.6.0";
        }
    };
    var t = {};
    function __nccwpck_require__(r) {
        var n = t[r];
        if (n !== undefined) {
            return n.exports;
        }
        var a = t[r] = {
            exports: {}
        };
        var o = true;
        try {
            e[r].call(a.exports, a, a.exports, __nccwpck_require__);
            o = false;
        } finally{
            if (o) delete t[r];
        }
        return a.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    var r = {};
    (()=>{
        var e = r;
        Object.defineProperty(e, "__esModule", {
            value: true
        });
        e.trace = e.propagation = e.metrics = e.diag = e.context = e.INVALID_SPAN_CONTEXT = e.INVALID_TRACEID = e.INVALID_SPANID = e.isValidSpanId = e.isValidTraceId = e.isSpanContextValid = e.createTraceState = e.TraceFlags = e.SpanStatusCode = e.SpanKind = e.SamplingDecision = e.ProxyTracerProvider = e.ProxyTracer = e.defaultTextMapSetter = e.defaultTextMapGetter = e.ValueType = e.createNoopMeter = e.DiagLogLevel = e.DiagConsoleLogger = e.ROOT_CONTEXT = e.createContextKey = e.baggageEntryMetadataFromString = void 0;
        var t = __nccwpck_require__(369);
        Object.defineProperty(e, "baggageEntryMetadataFromString", {
            enumerable: true,
            get: function() {
                return t.baggageEntryMetadataFromString;
            }
        });
        var n = __nccwpck_require__(780);
        Object.defineProperty(e, "createContextKey", {
            enumerable: true,
            get: function() {
                return n.createContextKey;
            }
        });
        Object.defineProperty(e, "ROOT_CONTEXT", {
            enumerable: true,
            get: function() {
                return n.ROOT_CONTEXT;
            }
        });
        var a = __nccwpck_require__(972);
        Object.defineProperty(e, "DiagConsoleLogger", {
            enumerable: true,
            get: function() {
                return a.DiagConsoleLogger;
            }
        });
        var o = __nccwpck_require__(957);
        Object.defineProperty(e, "DiagLogLevel", {
            enumerable: true,
            get: function() {
                return o.DiagLogLevel;
            }
        });
        var i = __nccwpck_require__(102);
        Object.defineProperty(e, "createNoopMeter", {
            enumerable: true,
            get: function() {
                return i.createNoopMeter;
            }
        });
        var c = __nccwpck_require__(901);
        Object.defineProperty(e, "ValueType", {
            enumerable: true,
            get: function() {
                return c.ValueType;
            }
        });
        var s = __nccwpck_require__(194);
        Object.defineProperty(e, "defaultTextMapGetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapGetter;
            }
        });
        Object.defineProperty(e, "defaultTextMapSetter", {
            enumerable: true,
            get: function() {
                return s.defaultTextMapSetter;
            }
        });
        var u = __nccwpck_require__(125);
        Object.defineProperty(e, "ProxyTracer", {
            enumerable: true,
            get: function() {
                return u.ProxyTracer;
            }
        });
        var l = __nccwpck_require__(846);
        Object.defineProperty(e, "ProxyTracerProvider", {
            enumerable: true,
            get: function() {
                return l.ProxyTracerProvider;
            }
        });
        var g = __nccwpck_require__(996);
        Object.defineProperty(e, "SamplingDecision", {
            enumerable: true,
            get: function() {
                return g.SamplingDecision;
            }
        });
        var p = __nccwpck_require__(357);
        Object.defineProperty(e, "SpanKind", {
            enumerable: true,
            get: function() {
                return p.SpanKind;
            }
        });
        var d = __nccwpck_require__(847);
        Object.defineProperty(e, "SpanStatusCode", {
            enumerable: true,
            get: function() {
                return d.SpanStatusCode;
            }
        });
        var _ = __nccwpck_require__(475);
        Object.defineProperty(e, "TraceFlags", {
            enumerable: true,
            get: function() {
                return _.TraceFlags;
            }
        });
        var f = __nccwpck_require__(98);
        Object.defineProperty(e, "createTraceState", {
            enumerable: true,
            get: function() {
                return f.createTraceState;
            }
        });
        var b = __nccwpck_require__(139);
        Object.defineProperty(e, "isSpanContextValid", {
            enumerable: true,
            get: function() {
                return b.isSpanContextValid;
            }
        });
        Object.defineProperty(e, "isValidTraceId", {
            enumerable: true,
            get: function() {
                return b.isValidTraceId;
            }
        });
        Object.defineProperty(e, "isValidSpanId", {
            enumerable: true,
            get: function() {
                return b.isValidSpanId;
            }
        });
        var v = __nccwpck_require__(476);
        Object.defineProperty(e, "INVALID_SPANID", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPANID;
            }
        });
        Object.defineProperty(e, "INVALID_TRACEID", {
            enumerable: true,
            get: function() {
                return v.INVALID_TRACEID;
            }
        });
        Object.defineProperty(e, "INVALID_SPAN_CONTEXT", {
            enumerable: true,
            get: function() {
                return v.INVALID_SPAN_CONTEXT;
            }
        });
        const O = __nccwpck_require__(67);
        Object.defineProperty(e, "context", {
            enumerable: true,
            get: function() {
                return O.context;
            }
        });
        const P = __nccwpck_require__(506);
        Object.defineProperty(e, "diag", {
            enumerable: true,
            get: function() {
                return P.diag;
            }
        });
        const N = __nccwpck_require__(886);
        Object.defineProperty(e, "metrics", {
            enumerable: true,
            get: function() {
                return N.metrics;
            }
        });
        const S = __nccwpck_require__(939);
        Object.defineProperty(e, "propagation", {
            enumerable: true,
            get: function() {
                return S.propagation;
            }
        });
        const C = __nccwpck_require__(845);
        Object.defineProperty(e, "trace", {
            enumerable: true,
            get: function() {
                return C.trace;
            }
        });
        e["default"] = {
            context: O.context,
            diag: P.diag,
            metrics: N.metrics,
            propagation: S.propagation,
            trace: C.trace
        };
    })();
    module.exports = r;
})();
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "BubbledError": (()=>BubbledError),
    "SpanKind": (()=>SpanKind),
    "SpanStatusCode": (()=>SpanStatusCode),
    "getTracer": (()=>getTracer),
    "isBubbledError": (()=>isBubbledError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/lib/trace/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/is-thenable.js [app-route] (ecmascript)");
;
;
let api;
// we want to allow users to use their own version of @opentelemetry/api if they
// want to, so we try to require it first, and if it fails we fall back to the
// version that is bundled with Next.js
// this is because @opentelemetry/api has to be synced with the version of
// @opentelemetry/tracing that is used, and we don't want to force users to use
// the version that is bundled with Next.js.
// the API is ~stable, so this should be fine
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    try {
        api = __turbopack_require__("[externals]/ [external] (@opentelemetry/api, cjs)");
    } catch (err) {
        api = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@opentelemetry/api/index.js [app-route] (ecmascript)");
    }
}
const { context, propagation, trace, SpanStatusCode, SpanKind, ROOT_CONTEXT } = api;
class BubbledError extends Error {
    constructor(bubble, result){
        super();
        this.bubble = bubble;
        this.result = result;
    }
}
function isBubbledError(error) {
    if (typeof error !== 'object' || error === null) return false;
    return error instanceof BubbledError;
}
const closeSpanWithError = (span, error)=>{
    if (isBubbledError(error) && error.bubble) {
        span.setAttribute('next.bubble', true);
    } else {
        if (error) {
            span.recordException(error);
        }
        span.setStatus({
            code: SpanStatusCode.ERROR,
            message: error == null ? void 0 : error.message
        });
    }
    span.end();
};
/** we use this map to propagate attributes from nested spans to the top span */ const rootSpanAttributesStore = new Map();
const rootSpanIdKey = api.createContextKey('next.rootSpanId');
let lastSpanId = 0;
const getSpanId = ()=>lastSpanId++;
const clientTraceDataSetter = {
    set (carrier, key, value) {
        carrier.push({
            key,
            value
        });
    }
};
class NextTracerImpl {
    /**
   * Returns an instance to the trace with configured name.
   * Since wrap / trace can be defined in any place prior to actual trace subscriber initialization,
   * This should be lazily evaluated.
   */ getTracerInstance() {
        return trace.getTracer('next.js', '0.0.1');
    }
    getContext() {
        return context;
    }
    getTracePropagationData() {
        const activeContext = context.active();
        const entries = [];
        propagation.inject(activeContext, entries, clientTraceDataSetter);
        return entries;
    }
    getActiveScopeSpan() {
        return trace.getSpan(context == null ? void 0 : context.active());
    }
    withPropagatedContext(carrier, fn, getter) {
        const activeContext = context.active();
        if (trace.getSpanContext(activeContext)) {
            // Active span is already set, too late to propagate.
            return fn();
        }
        const remoteContext = propagation.extract(activeContext, carrier, getter);
        return context.with(remoteContext, fn);
    }
    trace(...args) {
        var _trace_getSpanContext;
        const [type, fnOrOptions, fnOrEmpty] = args;
        // coerce options form overload
        const { fn, options } = typeof fnOrOptions === 'function' ? {
            fn: fnOrOptions,
            options: {}
        } : {
            fn: fnOrEmpty,
            options: {
                ...fnOrOptions
            }
        };
        const spanName = options.spanName ?? type;
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].includes(type) && process.env.NEXT_OTEL_VERBOSE !== '1' || options.hideSpan) {
            return fn();
        }
        // Trying to get active scoped span to assign parent. If option specifies parent span manually, will try to use it.
        let spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        let isRootSpan = false;
        if (!spanContext) {
            spanContext = (context == null ? void 0 : context.active()) ?? ROOT_CONTEXT;
            isRootSpan = true;
        } else if ((_trace_getSpanContext = trace.getSpanContext(spanContext)) == null ? void 0 : _trace_getSpanContext.isRemote) {
            isRootSpan = true;
        }
        const spanId = getSpanId();
        options.attributes = {
            'next.span_name': spanName,
            'next.span_type': type,
            ...options.attributes
        };
        return context.with(spanContext.setValue(rootSpanIdKey, spanId), ()=>this.getTracerInstance().startActiveSpan(spanName, options, (span)=>{
                const startTime = 'performance' in globalThis && 'measure' in performance ? globalThis.performance.now() : undefined;
                const onCleanup = ()=>{
                    rootSpanAttributesStore.delete(spanId);
                    if (startTime && process.env.NEXT_OTEL_PERFORMANCE_PREFIX && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["LogSpanAllowList"].includes(type || '')) {
                        performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-${(type.split('.').pop() || '').replace(/[A-Z]/g, (match)=>'-' + match.toLowerCase())}`, {
                            start: startTime,
                            end: performance.now()
                        });
                    }
                };
                if (isRootSpan) {
                    rootSpanAttributesStore.set(spanId, new Map(Object.entries(options.attributes ?? {})));
                }
                try {
                    if (fn.length > 1) {
                        return fn(span, (err)=>closeSpanWithError(span, err));
                    }
                    const result = fn(span);
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$is$2d$thenable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isThenable"])(result)) {
                        // If there's error make sure it throws
                        return result.then((res)=>{
                            span.end();
                            // Need to pass down the promise result,
                            // it could be react stream response with error { error, stream }
                            return res;
                        }).catch((err)=>{
                            closeSpanWithError(span, err);
                            throw err;
                        }).finally(onCleanup);
                    } else {
                        span.end();
                        onCleanup();
                    }
                    return result;
                } catch (err) {
                    closeSpanWithError(span, err);
                    onCleanup();
                    throw err;
                }
            }));
    }
    wrap(...args) {
        const tracer = this;
        const [name, options, fn] = args.length === 3 ? args : [
            args[0],
            {},
            args[1]
        ];
        if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextVanillaSpanAllowlist"].includes(name) && process.env.NEXT_OTEL_VERBOSE !== '1') {
            return fn;
        }
        return function() {
            let optionsObj = options;
            if (typeof optionsObj === 'function' && typeof fn === 'function') {
                optionsObj = optionsObj.apply(this, arguments);
            }
            const lastArgId = arguments.length - 1;
            const cb = arguments[lastArgId];
            if (typeof cb === 'function') {
                const scopeBoundCb = tracer.getContext().bind(context.active(), cb);
                return tracer.trace(name, optionsObj, (_span, done)=>{
                    arguments[lastArgId] = function(err) {
                        done == null ? void 0 : done(err);
                        return scopeBoundCb.apply(this, arguments);
                    };
                    return fn.apply(this, arguments);
                });
            } else {
                return tracer.trace(name, optionsObj, ()=>fn.apply(this, arguments));
            }
        };
    }
    startSpan(...args) {
        const [type, options] = args;
        const spanContext = this.getSpanContext((options == null ? void 0 : options.parentSpan) ?? this.getActiveScopeSpan());
        return this.getTracerInstance().startSpan(type, options, spanContext);
    }
    getSpanContext(parentSpan) {
        const spanContext = parentSpan ? trace.setSpan(context.active(), parentSpan) : undefined;
        return spanContext;
    }
    getRootSpanAttributes() {
        const spanId = context.active().getValue(rootSpanIdKey);
        return rootSpanAttributesStore.get(spanId);
    }
    setRootSpanAttribute(key, value) {
        const spanId = context.active().getValue(rootSpanIdKey);
        const attributes = rootSpanAttributesStore.get(spanId);
        if (attributes) {
            attributes.set(key, value);
        }
    }
}
const getTracer = (()=>{
    const tracer = new NextTracerImpl();
    return ()=>tracer;
})();
;
 //# sourceMappingURL=tracer.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/constants.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ACTION_SUFFIX": (()=>ACTION_SUFFIX),
    "APP_DIR_ALIAS": (()=>APP_DIR_ALIAS),
    "CACHE_ONE_YEAR": (()=>CACHE_ONE_YEAR),
    "DOT_NEXT_ALIAS": (()=>DOT_NEXT_ALIAS),
    "ESLINT_DEFAULT_DIRS": (()=>ESLINT_DEFAULT_DIRS),
    "GSP_NO_RETURNED_VALUE": (()=>GSP_NO_RETURNED_VALUE),
    "GSSP_COMPONENT_MEMBER_ERROR": (()=>GSSP_COMPONENT_MEMBER_ERROR),
    "GSSP_NO_RETURNED_VALUE": (()=>GSSP_NO_RETURNED_VALUE),
    "INFINITE_CACHE": (()=>INFINITE_CACHE),
    "INSTRUMENTATION_HOOK_FILENAME": (()=>INSTRUMENTATION_HOOK_FILENAME),
    "MATCHED_PATH_HEADER": (()=>MATCHED_PATH_HEADER),
    "MIDDLEWARE_FILENAME": (()=>MIDDLEWARE_FILENAME),
    "MIDDLEWARE_LOCATION_REGEXP": (()=>MIDDLEWARE_LOCATION_REGEXP),
    "NEXT_BODY_SUFFIX": (()=>NEXT_BODY_SUFFIX),
    "NEXT_CACHE_IMPLICIT_TAG_ID": (()=>NEXT_CACHE_IMPLICIT_TAG_ID),
    "NEXT_CACHE_REVALIDATED_TAGS_HEADER": (()=>NEXT_CACHE_REVALIDATED_TAGS_HEADER),
    "NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER": (()=>NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER),
    "NEXT_CACHE_SOFT_TAGS_HEADER": (()=>NEXT_CACHE_SOFT_TAGS_HEADER),
    "NEXT_CACHE_SOFT_TAG_MAX_LENGTH": (()=>NEXT_CACHE_SOFT_TAG_MAX_LENGTH),
    "NEXT_CACHE_TAGS_HEADER": (()=>NEXT_CACHE_TAGS_HEADER),
    "NEXT_CACHE_TAG_MAX_ITEMS": (()=>NEXT_CACHE_TAG_MAX_ITEMS),
    "NEXT_CACHE_TAG_MAX_LENGTH": (()=>NEXT_CACHE_TAG_MAX_LENGTH),
    "NEXT_DATA_SUFFIX": (()=>NEXT_DATA_SUFFIX),
    "NEXT_INTERCEPTION_MARKER_PREFIX": (()=>NEXT_INTERCEPTION_MARKER_PREFIX),
    "NEXT_META_SUFFIX": (()=>NEXT_META_SUFFIX),
    "NEXT_QUERY_PARAM_PREFIX": (()=>NEXT_QUERY_PARAM_PREFIX),
    "NEXT_RESUME_HEADER": (()=>NEXT_RESUME_HEADER),
    "NON_STANDARD_NODE_ENV": (()=>NON_STANDARD_NODE_ENV),
    "PAGES_DIR_ALIAS": (()=>PAGES_DIR_ALIAS),
    "PRERENDER_REVALIDATE_HEADER": (()=>PRERENDER_REVALIDATE_HEADER),
    "PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER": (()=>PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER),
    "PUBLIC_DIR_MIDDLEWARE_CONFLICT": (()=>PUBLIC_DIR_MIDDLEWARE_CONFLICT),
    "ROOT_DIR_ALIAS": (()=>ROOT_DIR_ALIAS),
    "RSC_ACTION_CLIENT_WRAPPER_ALIAS": (()=>RSC_ACTION_CLIENT_WRAPPER_ALIAS),
    "RSC_ACTION_ENCRYPTION_ALIAS": (()=>RSC_ACTION_ENCRYPTION_ALIAS),
    "RSC_ACTION_PROXY_ALIAS": (()=>RSC_ACTION_PROXY_ALIAS),
    "RSC_ACTION_VALIDATE_ALIAS": (()=>RSC_ACTION_VALIDATE_ALIAS),
    "RSC_CACHE_WRAPPER_ALIAS": (()=>RSC_CACHE_WRAPPER_ALIAS),
    "RSC_MOD_REF_PROXY_ALIAS": (()=>RSC_MOD_REF_PROXY_ALIAS),
    "RSC_PREFETCH_SUFFIX": (()=>RSC_PREFETCH_SUFFIX),
    "RSC_SEGMENTS_DIR_SUFFIX": (()=>RSC_SEGMENTS_DIR_SUFFIX),
    "RSC_SEGMENT_SUFFIX": (()=>RSC_SEGMENT_SUFFIX),
    "RSC_SUFFIX": (()=>RSC_SUFFIX),
    "SERVER_PROPS_EXPORT_ERROR": (()=>SERVER_PROPS_EXPORT_ERROR),
    "SERVER_PROPS_GET_INIT_PROPS_CONFLICT": (()=>SERVER_PROPS_GET_INIT_PROPS_CONFLICT),
    "SERVER_PROPS_SSG_CONFLICT": (()=>SERVER_PROPS_SSG_CONFLICT),
    "SERVER_RUNTIME": (()=>SERVER_RUNTIME),
    "SSG_FALLBACK_EXPORT_ERROR": (()=>SSG_FALLBACK_EXPORT_ERROR),
    "SSG_GET_INITIAL_PROPS_CONFLICT": (()=>SSG_GET_INITIAL_PROPS_CONFLICT),
    "STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR": (()=>STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR),
    "UNSTABLE_REVALIDATE_RENAME_ERROR": (()=>UNSTABLE_REVALIDATE_RENAME_ERROR),
    "WEBPACK_LAYERS": (()=>WEBPACK_LAYERS),
    "WEBPACK_RESOURCE_QUERIES": (()=>WEBPACK_RESOURCE_QUERIES)
});
const NEXT_QUERY_PARAM_PREFIX = 'nxtP';
const NEXT_INTERCEPTION_MARKER_PREFIX = 'nxtI';
const MATCHED_PATH_HEADER = 'x-matched-path';
const PRERENDER_REVALIDATE_HEADER = 'x-prerender-revalidate';
const PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER = 'x-prerender-revalidate-if-generated';
const RSC_PREFETCH_SUFFIX = '.prefetch.rsc';
const RSC_SEGMENTS_DIR_SUFFIX = '.segments';
const RSC_SEGMENT_SUFFIX = '.segment.rsc';
const RSC_SUFFIX = '.rsc';
const ACTION_SUFFIX = '.action';
const NEXT_DATA_SUFFIX = '.json';
const NEXT_META_SUFFIX = '.meta';
const NEXT_BODY_SUFFIX = '.body';
const NEXT_CACHE_TAGS_HEADER = 'x-next-cache-tags';
const NEXT_CACHE_SOFT_TAGS_HEADER = 'x-next-cache-soft-tags';
const NEXT_CACHE_REVALIDATED_TAGS_HEADER = 'x-next-revalidated-tags';
const NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER = 'x-next-revalidate-tag-token';
const NEXT_RESUME_HEADER = 'next-resume';
const NEXT_CACHE_TAG_MAX_ITEMS = 64;
const NEXT_CACHE_TAG_MAX_LENGTH = 256;
const NEXT_CACHE_SOFT_TAG_MAX_LENGTH = 1024;
const NEXT_CACHE_IMPLICIT_TAG_ID = '_N_T_';
const CACHE_ONE_YEAR = 31536000;
const INFINITE_CACHE = 0xfffffffe;
const MIDDLEWARE_FILENAME = 'middleware';
const MIDDLEWARE_LOCATION_REGEXP = `(?:src/)?${MIDDLEWARE_FILENAME}`;
const INSTRUMENTATION_HOOK_FILENAME = 'instrumentation';
const PAGES_DIR_ALIAS = 'private-next-pages';
const DOT_NEXT_ALIAS = 'private-dot-next';
const ROOT_DIR_ALIAS = 'private-next-root-dir';
const APP_DIR_ALIAS = 'private-next-app-dir';
const RSC_MOD_REF_PROXY_ALIAS = 'private-next-rsc-mod-ref-proxy';
const RSC_ACTION_VALIDATE_ALIAS = 'private-next-rsc-action-validate';
const RSC_ACTION_PROXY_ALIAS = 'private-next-rsc-server-reference';
const RSC_CACHE_WRAPPER_ALIAS = 'private-next-rsc-cache-wrapper';
const RSC_ACTION_ENCRYPTION_ALIAS = 'private-next-rsc-action-encryption';
const RSC_ACTION_CLIENT_WRAPPER_ALIAS = 'private-next-rsc-action-client-wrapper';
const PUBLIC_DIR_MIDDLEWARE_CONFLICT = `You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict`;
const SSG_GET_INITIAL_PROPS_CONFLICT = `You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps`;
const SERVER_PROPS_GET_INIT_PROPS_CONFLICT = `You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.`;
const SERVER_PROPS_SSG_CONFLICT = `You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps`;
const STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR = `can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props`;
const SERVER_PROPS_EXPORT_ERROR = `pages with \`getServerSideProps\` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export`;
const GSP_NO_RETURNED_VALUE = 'Your `getStaticProps` function did not return an object. Did you forget to add a `return`?';
const GSSP_NO_RETURNED_VALUE = 'Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?';
const UNSTABLE_REVALIDATE_RENAME_ERROR = 'The `unstable_revalidate` property is available for general use.\n' + 'Please use `revalidate` instead.';
const GSSP_COMPONENT_MEMBER_ERROR = `can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member`;
const NON_STANDARD_NODE_ENV = `You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env`;
const SSG_FALLBACK_EXPORT_ERROR = `Pages with \`fallback\` enabled in \`getStaticPaths\` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export`;
const ESLINT_DEFAULT_DIRS = [
    'app',
    'pages',
    'components',
    'lib',
    'src'
];
const SERVER_RUNTIME = {
    edge: 'edge',
    experimentalEdge: 'experimental-edge',
    nodejs: 'nodejs'
};
/**
 * The names of the webpack layers. These layers are the primitives for the
 * webpack chunks.
 */ const WEBPACK_LAYERS_NAMES = {
    /**
   * The layer for the shared code between the client and server bundles.
   */ shared: 'shared',
    /**
   * The layer for server-only runtime and picking up `react-server` export conditions.
   * Including app router RSC pages and app router custom routes and metadata routes.
   */ reactServerComponents: 'rsc',
    /**
   * Server Side Rendering layer for app (ssr).
   */ serverSideRendering: 'ssr',
    /**
   * The browser client bundle layer for actions.
   */ actionBrowser: 'action-browser',
    /**
   * The layer for the API routes.
   */ api: 'api',
    /**
   * The layer for the middleware code.
   */ middleware: 'middleware',
    /**
   * The layer for the instrumentation hooks.
   */ instrument: 'instrument',
    /**
   * The layer for assets on the edge.
   */ edgeAsset: 'edge-asset',
    /**
   * The browser client bundle layer for App directory.
   */ appPagesBrowser: 'app-pages-browser'
};
const WEBPACK_LAYERS = {
    ...WEBPACK_LAYERS_NAMES,
    GROUP: {
        builtinReact: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ],
        serverOnly: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.instrument,
            WEBPACK_LAYERS_NAMES.middleware
        ],
        neutralTarget: [
            // pages api
            WEBPACK_LAYERS_NAMES.api
        ],
        clientOnly: [
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser
        ],
        bundled: [
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.actionBrowser,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.shared,
            WEBPACK_LAYERS_NAMES.instrument
        ],
        appPages: [
            // app router pages and layouts
            WEBPACK_LAYERS_NAMES.reactServerComponents,
            WEBPACK_LAYERS_NAMES.serverSideRendering,
            WEBPACK_LAYERS_NAMES.appPagesBrowser,
            WEBPACK_LAYERS_NAMES.actionBrowser
        ]
    }
};
const WEBPACK_RESOURCE_QUERIES = {
    edgeSSREntry: '__next_edge_ssr_entry__',
    metadata: '__next_metadata__',
    metadataRoute: '__next_metadata_route__',
    metadataImageMeta: '__next_metadata_image_meta__'
};
;
 //# sourceMappingURL=constants.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_require__("[externals]/ [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_require__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-route] (ecmascript)").vendored['react-rsc'].React; //# sourceMappingURL=react.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/hooks-server-context.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DynamicServerError": (()=>DynamicServerError),
    "isDynamicServerError": (()=>isDynamicServerError)
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super("Dynamic server usage: " + description);
        this.description = description;
        this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
} //# sourceMappingURL=hooks-server-context.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/static-generation-bailout.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "StaticGenBailoutError": (()=>StaticGenBailoutError),
    "isStaticGenBailoutError": (()=>isStaticGenBailoutError)
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args);
        this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
} //# sourceMappingURL=static-generation-bailout.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * This function constructs a promise that will never resolve. This is primarily
 * useful for dynamicIO where we use promise resolution timing to determine which
 * parts of a render can be included in a prerender.
 *
 * @internal
 */ __turbopack_esm__({
    "makeHangingPromise": (()=>makeHangingPromise)
});
function makeHangingPromise(signal, expression) {
    const hangingPromise = new Promise((_, reject)=>{
        signal.addEventListener('abort', ()=>{
            reject(new Error(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`unstable_after\`, or similar functions you may observe this error and you should handle it in that context.`));
        }, {
            once: true
        });
    });
    // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
    // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
    // your own promise out of it you'll need to ensure you handle the error when it rejects.
    hangingPromise.catch(ignoreReject);
    return hangingPromise;
}
function ignoreReject() {} //# sourceMappingURL=dynamic-rendering-utils.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/metadata/metadata-constants.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "METADATA_BOUNDARY_NAME": (()=>METADATA_BOUNDARY_NAME),
    "OUTLET_BOUNDARY_NAME": (()=>OUTLET_BOUNDARY_NAME),
    "VIEWPORT_BOUNDARY_NAME": (()=>VIEWPORT_BOUNDARY_NAME)
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__'; //# sourceMappingURL=metadata-constants.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ // Once postpone is in stable we should switch to importing the postpone export directly
__turbopack_esm__({
    "Postpone": (()=>Postpone),
    "abortAndThrowOnSynchronousRequestDataAccess": (()=>abortAndThrowOnSynchronousRequestDataAccess),
    "abortOnSynchronousPlatformIOAccess": (()=>abortOnSynchronousPlatformIOAccess),
    "accessedDynamicData": (()=>accessedDynamicData),
    "annotateDynamicAccess": (()=>annotateDynamicAccess),
    "consumeDynamicAccess": (()=>consumeDynamicAccess),
    "createDynamicTrackingState": (()=>createDynamicTrackingState),
    "createDynamicValidationState": (()=>createDynamicValidationState),
    "createPostponedAbortSignal": (()=>createPostponedAbortSignal),
    "formatDynamicAPIAccesses": (()=>formatDynamicAPIAccesses),
    "getFirstDynamicReason": (()=>getFirstDynamicReason),
    "isDynamicPostpone": (()=>isDynamicPostpone),
    "isPrerenderInterruptedError": (()=>isPrerenderInterruptedError),
    "markCurrentScopeAsDynamic": (()=>markCurrentScopeAsDynamic),
    "postponeWithTracking": (()=>postponeWithTracking),
    "throwIfDisallowedDynamic": (()=>throwIfDisallowedDynamic),
    "throwToInterruptStaticGeneration": (()=>throwToInterruptStaticGeneration),
    "trackAllowedDynamicAccess": (()=>trackAllowedDynamicAccess),
    "trackDynamicDataInDynamicRender": (()=>trackDynamicDataInDynamicRender),
    "trackFallbackParamAccessed": (()=>trackFallbackParamAccessed),
    "trackSynchronousPlatformIOAccessInDev": (()=>trackSynchronousPlatformIOAccessInDev),
    "trackSynchronousRequestDataAccessInDev": (()=>trackSynchronousRequestDataAccessInDev),
    "useDynamicRouteParams": (()=>useDynamicRouteParams)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/hooks-server-context.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/client/components/static-generation-bailout.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/metadata/metadata-constants.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
const hasPostpone = typeof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicExpression: undefined,
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspendedDynamic: false,
        hasDynamicMetadata: false,
        hasDynamicViewport: false,
        hasSyncDynamicErrors: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
            // forbidden inside a cache scope.
            return;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`);
    }
    if (workUnitStore) {
        if (workUnitStore.type === 'prerender-ppr') {
            postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
        } else if (workUnitStore.type === 'prerender-legacy') {
            workUnitStore.revalidate = 0;
            // We aren't prerendering but we are generating a static page. We need to bail out of static generation
            const err = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DynamicServerError"](`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
            store.dynamicUsageDescription = expression;
            store.dynamicUsageStack = err.stack;
            throw err;
        } else if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore && workUnitStore.type === 'request') {
            workUnitStore.usedDynamic = true;
        }
    }
}
function trackFallbackParamAccessed(store, expression) {
    const prerenderStore = __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
    if (!prerenderStore || prerenderStore.type !== 'prerender-ppr') return;
    postponeWithTracking(store.route, expression, prerenderStore.dynamicTracking);
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$hooks$2d$server$2d$context$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DynamicServerError"](`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`);
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(_store, workUnitStore) {
    if (workUnitStore) {
        if (workUnitStore.type === 'cache' || workUnitStore.type === 'unstable-cache') {
            // inside cache scopes marking a scope as dynamic has no effect because the outer cache scope
            // creates a cache boundary. This is subtly different from reading a dynamic data source which is
            // forbidden inside a cache scope.
            return;
        }
        if (workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-legacy') {
            workUnitStore.revalidate = 0;
        }
        if (("TURBOPACK compile-time value", "development") === 'development' && workUnitStore.type === 'request') {
            workUnitStore.usedDynamic = true;
        }
    }
}
// Despite it's name we don't actually abort unless we have a controller to call abort on
// There are times when we let a prerender run long to discover caches where we want the semantics
// of tracking dynamic access without terminating the prerender early
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicExpression = expression;
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
    return abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
}
function trackSynchronousPlatformIOAccessInDev(requestStore) {
    // We don't actually have a controller to abort but we do the semantic equivalent by
    // advancing the request store out of prerender mode
    requestStore.prerenderPhase = false;
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicExpression = expression;
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            if (prerenderStore.validating === true) {
                // We always log Request Access in dev at the point of calling the function
                // So we mark the dynamic validation as not requiring it to be printed
                dynamicTracking.syncDynamicLogged = true;
            }
        }
    }
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
const trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
function Postpone({ reason, route }) {
    const prerenderStore = __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js');
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = new Error(message);
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`);
    }
}
function createPostponedAbortSignal(reason) {
    assertPostpone();
    const controller = new AbortController();
    // We get our hands on a postpone instance by calling postpone and catching the throw
    try {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].unstable_postpone(reason);
    } catch (x) {
        controller.abort(x);
    }
    return controller.signal;
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    if ("TURBOPACK compile-time truthy", 1) {
        const workStore = __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workAsyncStorage"].getStore();
        if (workStore && workStore.isStaticGeneration && workStore.fallbackRouteParams && workStore.fallbackRouteParams.size > 0) {
            // There are fallback route params, we should track these as dynamic
            // accesses.
            const workUnitStore = __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$next$2f$dist$2f$server$2f$app$2d$render$2f$work$2d$unit$2d$async$2d$storage$2e$external$2e$js$2c$__cjs$29$__["workUnitAsyncStorage"].getStore();
            if (workUnitStore) {
                // We're prerendering with dynamicIO or PPR or both
                if (workUnitStore.type === 'prerender') {
                    // We are in a prerender with dynamicIO semantics
                    // We are going to hang here and never resolve. This will cause the currently
                    // rendering component to effectively be a dynamic hole
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].use((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, expression));
                } else if (workUnitStore.type === 'prerender-ppr') {
                    // We're prerendering with PPR
                    postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
                } else if (workUnitStore.type === 'prerender-legacy') {
                    throwToInterruptStaticGeneration(expression, workStore, workUnitStore);
                }
            }
        }
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
const hasMetadataRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["METADATA_BOUNDARY_NAME"]}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["VIEWPORT_BOUNDARY_NAME"]}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$metadata$2f$metadata$2d$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["OUTLET_BOUNDARY_NAME"]}[\\n\\s]`);
function trackAllowedDynamicAccess(route, componentStack, dynamicValidation, serverDynamic, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        dynamicValidation.hasSuspendedDynamic = true;
        return;
    } else if (serverDynamic.syncDynamicErrorWithStack || clientDynamic.syncDynamicErrorWithStack) {
        dynamicValidation.hasSyncDynamicErrors = true;
        return;
    } else {
        const message = `Route "${route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. We don't have the exact line number added to error messages yet but you can see which component in the stack below. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
        const error = createErrorWithComponentStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
function createErrorWithComponentStack(message, componentStack) {
    const error = new Error(message);
    error.stack = 'Error: ' + message + componentStack;
    return error;
}
function throwIfDisallowedDynamic(route, dynamicValidation, serverDynamic, clientDynamic) {
    let syncError;
    let syncExpression;
    let syncLogged;
    if (serverDynamic.syncDynamicErrorWithStack) {
        syncError = serverDynamic.syncDynamicErrorWithStack;
        syncExpression = serverDynamic.syncDynamicExpression;
        syncLogged = serverDynamic.syncDynamicLogged === true;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        syncError = clientDynamic.syncDynamicErrorWithStack;
        syncExpression = clientDynamic.syncDynamicExpression;
        syncLogged = clientDynamic.syncDynamicLogged === true;
    } else {
        syncError = null;
        syncExpression = undefined;
        syncLogged = false;
    }
    if (dynamicValidation.hasSyncDynamicErrors && syncError) {
        if (!syncLogged) {
            // In dev we already log errors about sync dynamic access. But during builds we need to ensure
            // the offending sync error is logged before we exit the build
            console.error(syncError);
        }
        // The actual error should have been logged when the sync access ocurred
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StaticGenBailoutError"]();
    }
    const dynamicErrors = dynamicValidation.dynamicErrors;
    if (dynamicErrors.length) {
        for(let i = 0; i < dynamicErrors.length; i++){
            console.error(dynamicErrors[i]);
        }
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StaticGenBailoutError"]();
    }
    if (!dynamicValidation.hasSuspendedDynamic) {
        if (dynamicValidation.hasDynamicMetadata) {
            if (syncError) {
                console.error(syncError);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route "${route}" has a \`generateMetadata\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`);
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route "${route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateMetadata\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`);
        } else if (dynamicValidation.hasDynamicViewport) {
            if (syncError) {
                console.error(syncError);
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route "${route}" has a \`generateViewport\` that could not finish rendering before ${syncExpression} was used. Follow the instructions in the error for this expression to resolve.`);
            }
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$client$2f$components$2f$static$2d$generation$2d$bailout$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StaticGenBailoutError"](`Route "${route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or external data (\`fetch(...)\`, etc...) but the rest of the route was static or only used cached data (\`"use cache"\`). If you expected this route to be prerenderable update your \`generateViewport\` to not use Request data and only use cached external data. Otherwise, add \`await connection()\` somewhere within this route to indicate explicitly it should not be prerendered.`);
        }
    }
} //# sourceMappingURL=dynamic-rendering.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/lib/dedupe-fetch.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * Based on https://github.com/facebook/react/blob/d4e78c42a94be027b4dc7ed2659a5fddfbf9bd4e/packages/react/src/ReactFetch.js
 */ __turbopack_esm__({
    "createDedupeFetch": (()=>createDedupeFetch)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-route] (ecmascript)");
;
const simpleCacheKey = '["GET",[],null,"follow",null,null,null,null]' // generateCacheKey(new Request('https://blank'));
;
function generateCacheKey(request) {
    // We pick the fields that goes into the key used to dedupe requests.
    // We don't include the `cache` field, because we end up using whatever
    // caching resulted from the first request.
    // Notably we currently don't consider non-standard (or future) options.
    // This might not be safe. TODO: warn for non-standard extensions differing.
    // IF YOU CHANGE THIS UPDATE THE simpleCacheKey ABOVE.
    return JSON.stringify([
        request.method,
        Array.from(request.headers.entries()),
        request.mode,
        request.redirect,
        request.credentials,
        request.referrer,
        request.referrerPolicy,
        request.integrity
    ]);
}
function createDedupeFetch(originalFetch) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars -- url is the cache key
    const getCacheEntries = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__.cache((url)=>[]);
    return function dedupeFetch(resource, options) {
        if (options && options.signal) {
            // If we're passed a signal, then we assume that
            // someone else controls the lifetime of this object and opts out of
            // caching. It's effectively the opt-out mechanism.
            // Ideally we should be able to check this on the Request but
            // it always gets initialized with its own signal so we don't
            // know if it's supposed to override - unless we also override the
            // Request constructor.
            return originalFetch(resource, options);
        }
        // Normalize the Request
        let url;
        let cacheKey;
        if (typeof resource === 'string' && !options) {
            // Fast path.
            cacheKey = simpleCacheKey;
            url = resource;
        } else {
            // Normalize the request.
            // if resource is not a string or a URL (its an instance of Request)
            // then do not instantiate a new Request but instead
            // reuse the request as to not disturb the body in the event it's a ReadableStream.
            const request = typeof resource === 'string' || resource instanceof URL ? new Request(resource, options) : resource;
            if (request.method !== 'GET' && request.method !== 'HEAD' || // $FlowFixMe[prop-missing]: keepalive is real
            request.keepalive) {
                // We currently don't dedupe requests that might have side-effects. Those
                // have to be explicitly cached. We assume that the request doesn't have a
                // body if it's GET or HEAD.
                // keepalive gets treated the same as if you passed a custom cache signal.
                return originalFetch(resource, options);
            }
            cacheKey = generateCacheKey(request);
            url = request.url;
        }
        const cacheEntries = getCacheEntries(url);
        let match;
        if (cacheEntries.length === 0) {
            // We pass the original arguments here in case normalizing the Request
            // doesn't include all the options in this environment.
            match = originalFetch(resource, options);
            cacheEntries.push(cacheKey, match);
        } else {
            // We use an array as the inner data structure since it's lighter and
            // we typically only expect to see one or two entries here.
            for(let i = 0, l = cacheEntries.length; i < l; i += 2){
                const key = cacheEntries[i];
                const value = cacheEntries[i + 1];
                if (key === cacheKey) {
                    match = value;
                    // I would've preferred a labelled break but lint says no.
                    return match.then((response)=>response.clone());
                }
            }
            match = originalFetch(resource, options);
            cacheEntries.push(cacheKey, match);
        }
        // We clone the response so that each time you call this you get a new read
        // of the body so that it can be read multiple times.
        return match.then((response)=>response.clone());
    };
} //# sourceMappingURL=dedupe-fetch.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/response-cache/types.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "CachedRouteKind": (()=>CachedRouteKind),
    "IncrementalCacheKind": (()=>IncrementalCacheKind)
});
var CachedRouteKind;
(function(CachedRouteKind) {
    CachedRouteKind["APP_PAGE"] = "APP_PAGE";
    CachedRouteKind["APP_ROUTE"] = "APP_ROUTE";
    CachedRouteKind["PAGES"] = "PAGES";
    CachedRouteKind["FETCH"] = "FETCH";
    CachedRouteKind["REDIRECT"] = "REDIRECT";
    CachedRouteKind["IMAGE"] = "IMAGE";
})(CachedRouteKind || (CachedRouteKind = {}));
var IncrementalCacheKind;
(function(IncrementalCacheKind) {
    IncrementalCacheKind["APP_PAGE"] = "APP_PAGE";
    IncrementalCacheKind["APP_ROUTE"] = "APP_ROUTE";
    IncrementalCacheKind["PAGES"] = "PAGES";
    IncrementalCacheKind["FETCH"] = "FETCH";
    IncrementalCacheKind["IMAGE"] = "IMAGE";
})(IncrementalCacheKind || (IncrementalCacheKind = {})); //# sourceMappingURL=types.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/detached-promise.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * A `Promise.withResolvers` implementation that exposes the `resolve` and
 * `reject` functions on a `Promise`.
 *
 * @see https://tc39.es/proposal-promise-with-resolvers/
 */ __turbopack_esm__({
    "DetachedPromise": (()=>DetachedPromise)
});
class DetachedPromise {
    constructor(){
        let resolve;
        let reject;
        // Create the promise and assign the resolvers to the object.
        this.promise = new Promise((res, rej)=>{
            resolve = res;
            reject = rej;
        });
        // We know that resolvers is defined because the Promise constructor runs
        // synchronously.
        this.resolve = resolve;
        this.reject = reject;
    }
} //# sourceMappingURL=detached-promise.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/batcher.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Batcher": (()=>Batcher)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/detached-promise.js [app-route] (ecmascript)");
;
class Batcher {
    constructor(cacheKeyFn, /**
     * A function that will be called to schedule the wrapped function to be
     * executed. This defaults to a function that will execute the function
     * immediately.
     */ schedulerFn = (fn)=>fn()){
        this.cacheKeyFn = cacheKeyFn;
        this.schedulerFn = schedulerFn;
        this.pending = new Map();
    }
    static create(options) {
        return new Batcher(options == null ? void 0 : options.cacheKeyFn, options == null ? void 0 : options.schedulerFn);
    }
    /**
   * Wraps a function in a promise that will be resolved or rejected only once
   * for a given key. This will allow multiple calls to the function to be
   * made, but only one will be executed at a time. The result of the first
   * call will be returned to all callers.
   *
   * @param key the key to use for the cache
   * @param fn the function to wrap
   * @returns a promise that resolves to the result of the function
   */ async batch(key, fn) {
        const cacheKey = this.cacheKeyFn ? await this.cacheKeyFn(key) : key;
        if (cacheKey === null) {
            return fn(cacheKey, Promise.resolve);
        }
        const pending = this.pending.get(cacheKey);
        if (pending) return pending;
        const { promise, resolve, reject } = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DetachedPromise"]();
        this.pending.set(cacheKey, promise);
        this.schedulerFn(async ()=>{
            try {
                const result = await fn(cacheKey, resolve);
                // Resolving a promise multiple times is a no-op, so we can safely
                // resolve all pending promises with the same result.
                resolve(result);
            } catch (err) {
                reject(err);
            } finally{
                this.pending.delete(cacheKey);
            }
        });
        return promise;
    }
} //# sourceMappingURL=batcher.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/scheduler.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * Schedules a function to be called on the next tick after the other promises
 * have been resolved.
 *
 * @param cb the function to schedule
 */ __turbopack_esm__({
    "atLeastOneTask": (()=>atLeastOneTask),
    "scheduleImmediate": (()=>scheduleImmediate),
    "scheduleOnNextTick": (()=>scheduleOnNextTick),
    "waitAtLeastOneReactRenderTask": (()=>waitAtLeastOneReactRenderTask)
});
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        } else {
            process.nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        return new Promise((r)=>setImmediate(r));
    }
} //# sourceMappingURL=scheduler.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/stream-utils/encodedTags.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ENCODED_TAGS": (()=>ENCODED_TAGS)
});
const ENCODED_TAGS = {
    // opening tags do not have the closing `>` since they can contain other attributes such as `<body className=''>`
    OPENING: {
        // <html
        HTML: new Uint8Array([
            60,
            104,
            116,
            109,
            108
        ]),
        // <body
        BODY: new Uint8Array([
            60,
            98,
            111,
            100,
            121
        ])
    },
    CLOSED: {
        // </head>
        HEAD: new Uint8Array([
            60,
            47,
            104,
            101,
            97,
            100,
            62
        ]),
        // </body>
        BODY: new Uint8Array([
            60,
            47,
            98,
            111,
            100,
            121,
            62
        ]),
        // </html>
        HTML: new Uint8Array([
            60,
            47,
            104,
            116,
            109,
            108,
            62
        ]),
        // </body></html>
        BODY_AND_HTML: new Uint8Array([
            60,
            47,
            98,
            111,
            100,
            121,
            62,
            60,
            47,
            104,
            116,
            109,
            108,
            62
        ])
    }
}; //# sourceMappingURL=encodedTags.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/stream-utils/uint8array-helpers.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * Find the starting index of Uint8Array `b` within Uint8Array `a`.
 */ __turbopack_esm__({
    "indexOfUint8Array": (()=>indexOfUint8Array),
    "isEquivalentUint8Arrays": (()=>isEquivalentUint8Arrays),
    "removeFromUint8Array": (()=>removeFromUint8Array)
});
function indexOfUint8Array(a, b) {
    if (b.length === 0) return 0;
    if (a.length === 0 || b.length > a.length) return -1;
    // start iterating through `a`
    for(let i = 0; i <= a.length - b.length; i++){
        let completeMatch = true;
        // from index `i`, iterate through `b` and check for mismatch
        for(let j = 0; j < b.length; j++){
            // if the values do not match, then this isn't a complete match, exit `b` iteration early and iterate to next index of `a`.
            if (a[i + j] !== b[j]) {
                completeMatch = false;
                break;
            }
        }
        if (completeMatch) {
            return i;
        }
    }
    return -1;
}
function isEquivalentUint8Arrays(a, b) {
    if (a.length !== b.length) return false;
    for(let i = 0; i < a.length; i++){
        if (a[i] !== b[i]) return false;
    }
    return true;
}
function removeFromUint8Array(a, b) {
    const tagIndex = indexOfUint8Array(a, b);
    if (tagIndex === 0) return a.subarray(b.length);
    if (tagIndex > -1) {
        const removed = new Uint8Array(a.length - b.length);
        removed.set(a.slice(0, tagIndex));
        removed.set(a.slice(tagIndex + b.length), tagIndex);
        return removed;
    } else {
        return a;
    }
} //# sourceMappingURL=uint8array-helpers.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/stream-utils/node-web-streams-helper.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "chainStreams": (()=>chainStreams),
    "continueDynamicHTMLResume": (()=>continueDynamicHTMLResume),
    "continueDynamicPrerender": (()=>continueDynamicPrerender),
    "continueFizzStream": (()=>continueFizzStream),
    "continueStaticPrerender": (()=>continueStaticPrerender),
    "createBufferedTransformStream": (()=>createBufferedTransformStream),
    "createDocumentClosingStream": (()=>createDocumentClosingStream),
    "createRootLayoutValidatorStream": (()=>createRootLayoutValidatorStream),
    "renderToInitialFizzStream": (()=>renderToInitialFizzStream),
    "streamFromBuffer": (()=>streamFromBuffer),
    "streamFromString": (()=>streamFromString),
    "streamToBuffer": (()=>streamToBuffer),
    "streamToString": (()=>streamToString)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/lib/trace/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/detached-promise.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/scheduler.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/stream-utils/encodedTags.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/stream-utils/uint8array-helpers.js [app-route] (ecmascript)");
;
;
;
;
;
;
function voidCatch() {
// this catcher is designed to be used with pipeTo where we expect the underlying
// pipe implementation to forward errors but we don't want the pipeTo promise to reject
// and be unhandled
}
// We can share the same encoder instance everywhere
// Notably we cannot do the same for TextDecoder because it is stateful
// when handling streaming data
const encoder = new TextEncoder();
function chainStreams(...streams) {
    // We could encode this invariant in the arguments but current uses of this function pass
    // use spread so it would be missed by
    if (streams.length === 0) {
        throw new Error('Invariant: chainStreams requires at least one stream');
    }
    // If we only have 1 stream we fast path it by returning just this stream
    if (streams.length === 1) {
        return streams[0];
    }
    const { readable, writable } = new TransformStream();
    // We always initiate pipeTo immediately. We know we have at least 2 streams
    // so we need to avoid closing the writable when this one finishes.
    let promise = streams[0].pipeTo(writable, {
        preventClose: true
    });
    let i = 1;
    for(; i < streams.length - 1; i++){
        const nextStream = streams[i];
        promise = promise.then(()=>nextStream.pipeTo(writable, {
                preventClose: true
            }));
    }
    // We can omit the length check because we halted before the last stream and there
    // is at least two streams so the lastStream here will always be defined
    const lastStream = streams[i];
    promise = promise.then(()=>lastStream.pipeTo(writable));
    // Catch any errors from the streams and ignore them, they will be handled
    // by whatever is consuming the readable stream.
    promise.catch(voidCatch);
    return readable;
}
function streamFromString(str) {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(encoder.encode(str));
            controller.close();
        }
    });
}
function streamFromBuffer(chunk) {
    return new ReadableStream({
        start (controller) {
            controller.enqueue(chunk);
            controller.close();
        }
    });
}
async function streamToBuffer(stream) {
    const reader = stream.getReader();
    const chunks = [];
    while(true){
        const { done, value } = await reader.read();
        if (done) {
            break;
        }
        chunks.push(value);
    }
    return Buffer.concat(chunks);
}
async function streamToString(stream) {
    const decoder = new TextDecoder('utf-8', {
        fatal: true
    });
    let string = '';
    for await (const chunk of stream){
        string += decoder.decode(chunk, {
            stream: true
        });
    }
    string += decoder.decode();
    return string;
}
function createBufferedTransformStream() {
    let bufferedChunks = [];
    let bufferByteLength = 0;
    let pending;
    const flush = (controller)=>{
        // If we already have a pending flush, then return early.
        if (pending) return;
        const detached = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DetachedPromise"]();
        pending = detached;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scheduleImmediate"])(()=>{
            try {
                const chunk = new Uint8Array(bufferByteLength);
                let copiedBytes = 0;
                for(let i = 0; i < bufferedChunks.length; i++){
                    const bufferedChunk = bufferedChunks[i];
                    chunk.set(bufferedChunk, copiedBytes);
                    copiedBytes += bufferedChunk.byteLength;
                }
                // We just wrote all the buffered chunks so we need to reset the bufferedChunks array
                // and our bufferByteLength to prepare for the next round of buffered chunks
                bufferedChunks.length = 0;
                bufferByteLength = 0;
                controller.enqueue(chunk);
            } catch  {
            // If an error occurs while enqueuing it can't be due to this
            // transformers fault. It's likely due to the controller being
            // errored due to the stream being cancelled.
            } finally{
                pending = undefined;
                detached.resolve();
            }
        });
    };
    return new TransformStream({
        transform (chunk, controller) {
            // Combine the previous buffer with the new chunk.
            bufferedChunks.push(chunk);
            bufferByteLength += chunk.byteLength;
            // Flush the buffer to the controller.
            flush(controller);
        },
        flush () {
            if (!pending) return;
            return pending.promise;
        }
    });
}
function createInsertedHTMLStream(getServerInsertedHTML) {
    return new TransformStream({
        transform: async (chunk, controller)=>{
            const html = await getServerInsertedHTML();
            if (html) {
                controller.enqueue(encoder.encode(html));
            }
            controller.enqueue(chunk);
        }
    });
}
function renderToInitialFizzStream({ ReactDOMServer, element, streamOptions }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppRenderSpan"].renderToReadableStream, async ()=>ReactDOMServer.renderToReadableStream(element, streamOptions));
}
function createHeadInsertionTransformStream(insert) {
    let inserted = false;
    let freezing = false;
    // We need to track if this transform saw any bytes because if it didn't
    // we won't want to insert any server HTML at all
    let hasBytes = false;
    return new TransformStream({
        async transform (chunk, controller) {
            hasBytes = true;
            // While react is flushing chunks, we don't apply insertions
            if (freezing) {
                controller.enqueue(chunk);
                return;
            }
            const insertion = await insert();
            if (inserted) {
                if (insertion) {
                    const encodedInsertion = encoder.encode(insertion);
                    controller.enqueue(encodedInsertion);
                }
                controller.enqueue(chunk);
                freezing = true;
            } else {
                // TODO (@Ethan-Arrowood): Replace the generic `indexOfUint8Array` method with something finely tuned for the subset of things actually being checked for.
                const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HEAD);
                if (index !== -1) {
                    if (insertion) {
                        const encodedInsertion = encoder.encode(insertion);
                        const insertedHeadContent = new Uint8Array(chunk.length + encodedInsertion.length);
                        insertedHeadContent.set(chunk.slice(0, index));
                        insertedHeadContent.set(encodedInsertion, index);
                        insertedHeadContent.set(chunk.slice(index), index + encodedInsertion.length);
                        controller.enqueue(insertedHeadContent);
                    } else {
                        controller.enqueue(chunk);
                    }
                    freezing = true;
                    inserted = true;
                }
            }
            if (!inserted) {
                controller.enqueue(chunk);
            } else {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scheduleImmediate"])(()=>{
                    freezing = false;
                });
            }
        },
        async flush (controller) {
            // Check before closing if there's anything remaining to insert.
            if (hasBytes) {
                const insertion = await insert();
                if (insertion) {
                    controller.enqueue(encoder.encode(insertion));
                }
            }
        }
    });
}
// Suffix after main body content - scripts before </body>,
// but wait for the major chunks to be enqueued.
function createDeferredSuffixStream(suffix) {
    let flushed = false;
    let pending;
    const flush = (controller)=>{
        const detached = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DetachedPromise"]();
        pending = detached;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scheduleImmediate"])(()=>{
            try {
                controller.enqueue(encoder.encode(suffix));
            } catch  {
            // If an error occurs while enqueuing it can't be due to this
            // transformers fault. It's likely due to the controller being
            // errored due to the stream being cancelled.
            } finally{
                pending = undefined;
                detached.resolve();
            }
        });
    };
    return new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(chunk);
            // If we've already flushed, we're done.
            if (flushed) return;
            // Schedule the flush to happen.
            flushed = true;
            flush(controller);
        },
        flush (controller) {
            if (pending) return pending.promise;
            if (flushed) return;
            // Flush now.
            controller.enqueue(encoder.encode(suffix));
        }
    });
}
// Merge two streams into one. Ensure the final transform stream is closed
// when both are finished.
function createMergedTransformStream(stream) {
    let pull = null;
    let donePulling = false;
    async function startPulling(controller) {
        if (pull) {
            return;
        }
        const reader = stream.getReader();
        // NOTE: streaming flush
        // We are buffering here for the inlined data stream because the
        // "shell" stream might be chunkenized again by the underlying stream
        // implementation, e.g. with a specific high-water mark. To ensure it's
        // the safe timing to pipe the data stream, this extra tick is
        // necessary.
        // We don't start reading until we've left the current Task to ensure
        // that it's inserted after flushing the shell. Note that this implementation
        // might get stale if impl details of Fizz change in the future.
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["atLeastOneTask"])();
        try {
            while(true){
                const { done, value } = await reader.read();
                if (done) {
                    donePulling = true;
                    return;
                }
                controller.enqueue(value);
            }
        } catch (err) {
            controller.error(err);
        }
    }
    return new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(chunk);
            // Start the streaming if it hasn't already been started yet.
            if (!pull) {
                pull = startPulling(controller);
            }
        },
        flush (controller) {
            if (donePulling) {
                return;
            }
            return pull || startPulling(controller);
        }
    });
}
const CLOSE_TAG = '</body></html>';
/**
 * This transform stream moves the suffix to the end of the stream, so results
 * like `</body></html><script>...</script>` will be transformed to
 * `<script>...</script></body></html>`.
 */ function createMoveSuffixStream() {
    let foundSuffix = false;
    return new TransformStream({
        transform (chunk, controller) {
            if (foundSuffix) {
                return controller.enqueue(chunk);
            }
            const index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
            if (index > -1) {
                foundSuffix = true;
                // If the whole chunk is the suffix, then don't write anything, it will
                // be written in the flush.
                if (chunk.length === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML.length) {
                    return;
                }
                // Write out the part before the suffix.
                const before = chunk.slice(0, index);
                controller.enqueue(before);
                // In the case where the suffix is in the middle of the chunk, we need
                // to split the chunk into two parts.
                if (chunk.length > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML.length + index) {
                    // Write out the part after the suffix.
                    const after = chunk.slice(index + __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML.length);
                    controller.enqueue(after);
                }
            } else {
                controller.enqueue(chunk);
            }
        },
        flush (controller) {
            // Even if we didn't find the suffix, the HTML is not valid if we don't
            // add it, so insert it at the end.
            controller.enqueue(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML);
        }
    });
}
function createStripDocumentClosingTagsTransform() {
    return new TransformStream({
        transform (chunk, controller) {
            // We rely on the assumption that chunks will never break across a code unit.
            // This is reasonable because we currently concat all of React's output from a single
            // flush into one chunk before streaming it forward which means the chunk will represent
            // a single coherent utf-8 string. This is not safe to use if we change our streaming to no
            // longer do this large buffered chunk
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEquivalentUint8Arrays"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY_AND_HTML) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEquivalentUint8Arrays"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isEquivalentUint8Arrays"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HTML)) {
                // the entire chunk is the closing tags; return without enqueueing anything.
                return;
            }
            // We assume these tags will go at together at the end of the document and that
            // they won't appear anywhere else in the document. This is not really a safe assumption
            // but until we revamp our streaming infra this is a performant way to string the tags
            chunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["removeFromUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.BODY);
            chunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["removeFromUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].CLOSED.HTML);
            controller.enqueue(chunk);
        }
    });
}
function createRootLayoutValidatorStream() {
    let foundHtml = false;
    let foundBody = false;
    return new TransformStream({
        async transform (chunk, controller) {
            // Peek into the streamed chunk to see if the tags are present.
            if (!foundHtml && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].OPENING.HTML) > -1) {
                foundHtml = true;
            }
            if (!foundBody && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$uint8array$2d$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["indexOfUint8Array"])(chunk, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$encodedTags$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ENCODED_TAGS"].OPENING.BODY) > -1) {
                foundBody = true;
            }
            controller.enqueue(chunk);
        },
        flush (controller) {
            const missingTags = [];
            if (!foundHtml) missingTags.push('html');
            if (!foundBody) missingTags.push('body');
            if (!missingTags.length) return;
            controller.enqueue(encoder.encode(`<script>self.__next_root_layout_missing_tags=${JSON.stringify(missingTags)}</script>`));
        }
    });
}
function chainTransformers(readable, transformers) {
    let stream = readable;
    for (const transformer of transformers){
        if (!transformer) continue;
        stream = stream.pipeThrough(transformer);
    }
    return stream;
}
async function continueFizzStream(renderStream, { suffix, inlinedDataStream, isStaticGeneration, getServerInsertedHTML, serverInsertedHTMLToHead, validateRootLayout }) {
    // Suffix itself might contain close tags at the end, so we need to split it.
    const suffixUnclosed = suffix ? suffix.split(CLOSE_TAG, 1)[0] : null;
    // If we're generating static HTML and there's an `allReady` promise on the
    // stream, we need to wait for it to resolve before continuing.
    if (isStaticGeneration && 'allReady' in renderStream) {
        await renderStream.allReady;
    }
    return chainTransformers(renderStream, [
        // Buffer everything to avoid flushing too frequently
        createBufferedTransformStream(),
        // Insert generated tags to head
        getServerInsertedHTML && !serverInsertedHTMLToHead ? createInsertedHTMLStream(getServerInsertedHTML) : null,
        // Insert suffix content
        suffixUnclosed != null && suffixUnclosed.length > 0 ? createDeferredSuffixStream(suffixUnclosed) : null,
        // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
        inlinedDataStream ? createMergedTransformStream(inlinedDataStream) : null,
        // Validate the root layout for missing html or body tags
        validateRootLayout ? createRootLayoutValidatorStream() : null,
        // Close tags should always be deferred to the end
        createMoveSuffixStream(),
        // Special head insertions
        // TODO-APP: Insert server side html to end of head in app layout rendering, to avoid
        // hydration errors. Remove this once it's ready to be handled by react itself.
        getServerInsertedHTML && serverInsertedHTMLToHead ? createHeadInsertionTransformStream(getServerInsertedHTML) : null
    ]);
}
async function continueDynamicPrerender(prerenderStream, { getServerInsertedHTML }) {
    return prerenderStream // Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()).pipeThrough(createStripDocumentClosingTagsTransform()) // Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML));
}
async function continueStaticPrerender(prerenderStream, { inlinedDataStream, getServerInsertedHTML }) {
    return prerenderStream // Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()) // Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)) // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
    .pipeThrough(createMergedTransformStream(inlinedDataStream)) // Close tags should always be deferred to the end
    .pipeThrough(createMoveSuffixStream());
}
async function continueDynamicHTMLResume(renderStream, { inlinedDataStream, getServerInsertedHTML }) {
    return renderStream // Buffer everything to avoid flushing too frequently
    .pipeThrough(createBufferedTransformStream()) // Insert generated tags to head
    .pipeThrough(createHeadInsertionTransformStream(getServerInsertedHTML)) // Insert the inlined data (Flight data, form state, etc.) stream into the HTML
    .pipeThrough(createMergedTransformStream(inlinedDataStream)) // Close tags should always be deferred to the end
    .pipeThrough(createMoveSuffixStream());
}
function createDocumentClosingStream() {
    return streamFromString(CLOSE_TAG);
} //# sourceMappingURL=node-web-streams-helper.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/request-meta.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/* eslint-disable no-redeclare */ // FIXME: (wyattjoh) this is a temporary solution to allow us to pass data between bundled modules
__turbopack_esm__({
    "NEXT_REQUEST_META": (()=>NEXT_REQUEST_META),
    "addRequestMeta": (()=>addRequestMeta),
    "getNextInternalQuery": (()=>getNextInternalQuery),
    "getRequestMeta": (()=>getRequestMeta),
    "removeRequestMeta": (()=>removeRequestMeta),
    "setRequestMeta": (()=>setRequestMeta)
});
const NEXT_REQUEST_META = Symbol.for('NextInternalRequestMeta');
function getRequestMeta(req, key) {
    const meta = req[NEXT_REQUEST_META] || {};
    return typeof key === 'string' ? meta[key] : meta;
}
function setRequestMeta(req, meta) {
    req[NEXT_REQUEST_META] = meta;
    return meta;
}
function addRequestMeta(request, key, value) {
    const meta = getRequestMeta(request);
    meta[key] = value;
    return setRequestMeta(request, meta);
}
function removeRequestMeta(request, key) {
    const meta = getRequestMeta(request);
    delete meta[key];
    return setRequestMeta(request, meta);
}
function getNextInternalQuery(query) {
    const keysToInclude = [
        '__nextDefaultLocale',
        '__nextFallback',
        '__nextLocale',
        '__nextSsgPath',
        '_nextBubbleNoFallback',
        '__nextDataReq',
        '__nextInferredLocaleFromDefault'
    ];
    const nextInternalQuery = {};
    for (const key of keysToInclude){
        if (key in query) {
            // @ts-ignore this can't be typed correctly
            nextInternalQuery[key] = query[key];
        }
    }
    return nextInternalQuery;
} //# sourceMappingURL=request-meta.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/utils.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "fromNodeOutgoingHttpHeaders": (()=>fromNodeOutgoingHttpHeaders),
    "normalizeNextQueryParam": (()=>normalizeNextQueryParam),
    "splitCookiesString": (()=>splitCookiesString),
    "toNodeOutgoingHttpHeaders": (()=>toNodeOutgoingHttpHeaders),
    "validateURL": (()=>validateURL)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/constants.js [app-route] (ecmascript)");
;
function fromNodeOutgoingHttpHeaders(nodeHeaders) {
    const headers = new Headers();
    for (let [key, value] of Object.entries(nodeHeaders)){
        const values = Array.isArray(value) ? value : [
            value
        ];
        for (let v of values){
            if (typeof v === 'undefined') continue;
            if (typeof v === 'number') {
                v = v.toString();
            }
            headers.append(key, v);
        }
    }
    return headers;
}
function splitCookiesString(cookiesString) {
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== '=' && ch !== ';' && ch !== ',';
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ',') {
                // ',' is a cookie separator if we have later first '=', not ';' or ','
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                // currently special character
                if (pos < cookiesString.length && cookiesString.charAt(pos) === '=') {
                    // we found cookies separator
                    cookiesSeparatorFound = true;
                    // pos is inside the next cookie, so back up and return it.
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    // in param ',' or param separator ';',
                    // we continue from that comma
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
function toNodeOutgoingHttpHeaders(headers) {
    const nodeHeaders = {};
    const cookies = [];
    if (headers) {
        for (const [key, value] of headers.entries()){
            if (key.toLowerCase() === 'set-cookie') {
                // We may have gotten a comma joined string of cookies, or multiple
                // set-cookie headers. We need to merge them into one header array
                // to represent all the cookies.
                cookies.push(...splitCookiesString(value));
                nodeHeaders[key] = cookies.length === 1 ? cookies[0] : cookies;
            } else {
                nodeHeaders[key] = value;
            }
        }
    }
    return nodeHeaders;
}
function validateURL(url) {
    try {
        return String(new URL(String(url)));
    } catch (error) {
        throw new Error(`URL is malformed "${String(url)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`, {
            cause: error
        });
    }
}
function normalizeNextQueryParam(key, onKeyNormalized) {
    const prefixes = [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NEXT_QUERY_PARAM_PREFIX"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NEXT_INTERCEPTION_MARKER_PREFIX"]
    ];
    for (const prefix of prefixes){
        if (key !== prefix && key.startsWith(prefix)) {
            const normalizedKey = key.substring(prefix.length);
            onKeyNormalized(normalizedKey);
        }
    }
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "detectDomainLocale": (()=>detectDomainLocale)
});
function detectDomainLocale(domainItems, hostname, detectedLocale) {
    if (!domainItems) return;
    if (detectedLocale) {
        detectedLocale = detectedLocale.toLowerCase();
    }
    for (const item of domainItems){
        var _item_domain, _item_locales;
        // remove port if present
        const domainHostname = (_item_domain = item.domain) == null ? void 0 : _item_domain.split(':', 1)[0].toLowerCase();
        if (hostname === domainHostname || detectedLocale === item.defaultLocale.toLowerCase() || ((_item_locales = item.locales) == null ? void 0 : _item_locales.some((locale)=>locale.toLowerCase() === detectedLocale))) {
            return item;
        }
    }
} //# sourceMappingURL=detect-domain-locale.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * Removes the trailing slash for a given route or page path. Preserves the
 * root page. Examples:
 *   - `/foo/bar/` -> `/foo/bar`
 *   - `/foo/bar` -> `/foo/bar`
 *   - `/` -> `/`
 */ __turbopack_esm__({
    "removeTrailingSlash": (()=>removeTrailingSlash)
});
function removeTrailingSlash(route) {
    return route.replace(/\/$/, '') || '/';
} //# sourceMappingURL=remove-trailing-slash.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * Given a path this function will find the pathname, query and hash and return
 * them. This is useful to parse full paths on the client side.
 * @param path A path to parse e.g. /foo/bar?id=1#hash
 */ __turbopack_esm__({
    "parsePath": (()=>parsePath)
});
function parsePath(path) {
    const hashIndex = path.indexOf('#');
    const queryIndex = path.indexOf('?');
    const hasQuery = queryIndex > -1 && (hashIndex < 0 || queryIndex < hashIndex);
    if (hasQuery || hashIndex > -1) {
        return {
            pathname: path.substring(0, hasQuery ? queryIndex : hashIndex),
            query: hasQuery ? path.substring(queryIndex, hashIndex > -1 ? hashIndex : undefined) : '',
            hash: hashIndex > -1 ? path.slice(hashIndex) : ''
        };
    }
    return {
        pathname: path,
        query: '',
        hash: ''
    };
} //# sourceMappingURL=parse-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "addPathPrefix": (()=>addPathPrefix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [app-route] (ecmascript)");
;
function addPathPrefix(path, prefix) {
    if (!path.startsWith('/') || !prefix) {
        return path;
    }
    const { pathname, query, hash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return "" + prefix + pathname + query + hash;
} //# sourceMappingURL=add-path-prefix.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "addPathSuffix": (()=>addPathSuffix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [app-route] (ecmascript)");
;
function addPathSuffix(path, suffix) {
    if (!path.startsWith('/') || !suffix) {
        return path;
    }
    const { pathname, query, hash } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return "" + pathname + suffix + query + hash;
} //# sourceMappingURL=add-path-suffix.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "pathHasPrefix": (()=>pathHasPrefix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/parse-path.js [app-route] (ecmascript)");
;
function pathHasPrefix(path, prefix) {
    if (typeof path !== 'string') {
        return false;
    }
    const { pathname } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$parse$2d$path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parsePath"])(path);
    return pathname === prefix || pathname.startsWith(prefix + '/');
} //# sourceMappingURL=path-has-prefix.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "addLocale": (()=>addLocale)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-route] (ecmascript)");
;
;
function addLocale(path, locale, defaultLocale, ignorePrefix) {
    // If no locale was given or the locale is the default locale, we don't need
    // to prefix the path.
    if (!locale || locale === defaultLocale) return path;
    const lower = path.toLowerCase();
    // If the path is an API path or the path already has the locale prefix, we
    // don't need to prefix the path.
    if (!ignorePrefix) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathHasPrefix"])(lower, '/api')) return path;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathHasPrefix"])(lower, "/" + locale.toLowerCase())) return path;
    }
    // Add the locale prefix to the path.
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addPathPrefix"])(path, "/" + locale);
} //# sourceMappingURL=add-locale.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "formatNextPathnameInfo": (()=>formatNextPathnameInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/remove-trailing-slash.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/add-path-prefix.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/add-path-suffix.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$locale$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/add-locale.js [app-route] (ecmascript)");
;
;
;
;
function formatNextPathnameInfo(info) {
    let pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$locale$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addLocale"])(info.pathname, info.locale, info.buildId ? undefined : info.defaultLocale, info.ignorePrefix);
    if (info.buildId || !info.trailingSlash) {
        pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(pathname);
    }
    if (info.buildId) {
        pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addPathSuffix"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addPathPrefix"])(pathname, "/_next/data/" + info.buildId), info.pathname === '/' ? 'index.json' : '.json');
    }
    pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$prefix$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addPathPrefix"])(pathname, info.basePath);
    return !info.buildId && info.trailingSlash ? !pathname.endsWith('/') ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$add$2d$path$2d$suffix$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["addPathSuffix"])(pathname, '/') : pathname : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$trailing$2d$slash$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["removeTrailingSlash"])(pathname);
} //# sourceMappingURL=format-next-pathname-info.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/get-hostname.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * Takes an object with a hostname property (like a parsed URL) and some
 * headers that may contain Host and returns the preferred hostname.
 * @param parsed An object containing a hostname property.
 * @param headers A dictionary with headers containing a `host`.
 */ __turbopack_esm__({
    "getHostname": (()=>getHostname)
});
function getHostname(parsed, headers) {
    // Get the hostname from the headers if it exists, otherwise use the parsed
    // hostname.
    let hostname;
    if ((headers == null ? void 0 : headers.host) && !Array.isArray(headers.host)) {
        hostname = headers.host.toString().split(':', 1)[0];
    } else if (parsed.hostname) {
        hostname = parsed.hostname;
    } else return;
    return hostname.toLowerCase();
} //# sourceMappingURL=get-hostname.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * For a pathname that may include a locale from a list of locales, it
 * removes the locale from the pathname returning it alongside with the
 * detected locale.
 *
 * @param pathname A pathname that may include a locale.
 * @param locales A list of locales.
 * @returns The detected locale and pathname without locale
 */ __turbopack_esm__({
    "normalizeLocalePath": (()=>normalizeLocalePath)
});
function normalizeLocalePath(pathname, locales) {
    let detectedLocale;
    // first item will be empty string from splitting at first char
    const pathnameParts = pathname.split('/');
    (locales || []).some((locale)=>{
        if (pathnameParts[1] && pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
            detectedLocale = locale;
            pathnameParts.splice(1, 1);
            pathname = pathnameParts.join('/') || '/';
            return true;
        }
        return false;
    });
    return {
        pathname,
        detectedLocale
    };
} //# sourceMappingURL=normalize-locale-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "removePathPrefix": (()=>removePathPrefix)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-route] (ecmascript)");
;
function removePathPrefix(path, prefix) {
    // If the path doesn't start with the prefix we can return it as is. This
    // protects us from situations where the prefix is a substring of the path
    // prefix such as:
    //
    // For prefix: /blog
    //
    //   /blog -> true
    //   /blog/ -> true
    //   /blog/1 -> true
    //   /blogging -> false
    //   /blogging/ -> false
    //   /blogging/1 -> false
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathHasPrefix"])(path, prefix)) {
        return path;
    }
    // Remove the prefix from the path via slicing.
    const withoutPrefix = path.slice(prefix.length);
    // If the path without the prefix starts with a `/` we can return it as is.
    if (withoutPrefix.startsWith('/')) {
        return withoutPrefix;
    }
    // If the path without the prefix doesn't start with a `/` we need to add it
    // back to the path to make sure it's a valid path.
    return "/" + withoutPrefix;
} //# sourceMappingURL=remove-path-prefix.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getNextPathnameInfo": (()=>getNextPathnameInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/i18n/normalize-locale-path.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/remove-path-prefix.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/path-has-prefix.js [app-route] (ecmascript)");
;
;
;
function getNextPathnameInfo(pathname, options) {
    var _options_nextConfig;
    const { basePath, i18n, trailingSlash } = (_options_nextConfig = options.nextConfig) != null ? _options_nextConfig : {};
    const info = {
        pathname,
        trailingSlash: pathname !== '/' ? pathname.endsWith('/') : trailingSlash
    };
    if (basePath && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$path$2d$has$2d$prefix$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pathHasPrefix"])(info.pathname, basePath)) {
        info.pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$remove$2d$path$2d$prefix$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["removePathPrefix"])(info.pathname, basePath);
        info.basePath = basePath;
    }
    let pathnameNoDataPrefix = info.pathname;
    if (info.pathname.startsWith('/_next/data/') && info.pathname.endsWith('.json')) {
        const paths = info.pathname.replace(/^\/_next\/data\//, '').replace(/\.json$/, '').split('/');
        const buildId = paths[0];
        info.buildId = buildId;
        pathnameNoDataPrefix = paths[1] !== 'index' ? "/" + paths.slice(1).join('/') : '/';
        // update pathname with normalized if enabled although
        // we use normalized to populate locale info still
        if (options.parseData === true) {
            info.pathname = pathnameNoDataPrefix;
        }
    }
    // If provided, use the locale route normalizer to detect the locale instead
    // of the function below.
    if (i18n) {
        let result = options.i18nProvider ? options.i18nProvider.analyze(info.pathname) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeLocalePath"])(info.pathname, i18n.locales);
        info.locale = result.detectedLocale;
        var _result_pathname;
        info.pathname = (_result_pathname = result.pathname) != null ? _result_pathname : info.pathname;
        if (!result.detectedLocale && info.buildId) {
            result = options.i18nProvider ? options.i18nProvider.analyze(pathnameNoDataPrefix) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$normalize$2d$locale$2d$path$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeLocalePath"])(pathnameNoDataPrefix, i18n.locales);
            if (result.detectedLocale) {
                info.locale = result.detectedLocale;
            }
        }
    }
    return info;
} //# sourceMappingURL=get-next-pathname-info.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/next-url.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "NextURL": (()=>NextURL)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$detect$2d$domain$2d$locale$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/i18n/detect-domain-locale.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$format$2d$next$2d$pathname$2d$info$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/format-next-pathname-info.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$get$2d$hostname$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/get-hostname.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$next$2d$pathname$2d$info$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/shared/lib/router/utils/get-next-pathname-info.js [app-route] (ecmascript)");
;
;
;
;
const REGEX_LOCALHOST_HOSTNAME = /(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;
function parseURL(url, base) {
    return new URL(String(url).replace(REGEX_LOCALHOST_HOSTNAME, 'localhost'), base && String(base).replace(REGEX_LOCALHOST_HOSTNAME, 'localhost'));
}
const Internal = Symbol('NextURLInternal');
class NextURL {
    constructor(input, baseOrOpts, opts){
        let base;
        let options;
        if (typeof baseOrOpts === 'object' && 'pathname' in baseOrOpts || typeof baseOrOpts === 'string') {
            base = baseOrOpts;
            options = opts || {};
        } else {
            options = opts || baseOrOpts || {};
        }
        this[Internal] = {
            url: parseURL(input, base ?? options.base),
            options: options,
            basePath: ''
        };
        this.analyze();
    }
    analyze() {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig, _this_Internal_domainLocale, _this_Internal_options_nextConfig_i18n1, _this_Internal_options_nextConfig1;
        const info = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$get$2d$next$2d$pathname$2d$info$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getNextPathnameInfo"])(this[Internal].url.pathname, {
            nextConfig: this[Internal].options.nextConfig,
            parseData: !process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE,
            i18nProvider: this[Internal].options.i18nProvider
        });
        const hostname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$get$2d$hostname$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHostname"])(this[Internal].url, this[Internal].options.headers);
        this[Internal].domainLocale = this[Internal].options.i18nProvider ? this[Internal].options.i18nProvider.detectDomainLocale(hostname) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$i18n$2f$detect$2d$domain$2d$locale$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["detectDomainLocale"])((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.domains, hostname);
        const defaultLocale = ((_this_Internal_domainLocale = this[Internal].domainLocale) == null ? void 0 : _this_Internal_domainLocale.defaultLocale) || ((_this_Internal_options_nextConfig1 = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n1 = _this_Internal_options_nextConfig1.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n1.defaultLocale);
        this[Internal].url.pathname = info.pathname;
        this[Internal].defaultLocale = defaultLocale;
        this[Internal].basePath = info.basePath ?? '';
        this[Internal].buildId = info.buildId;
        this[Internal].locale = info.locale ?? defaultLocale;
        this[Internal].trailingSlash = info.trailingSlash;
    }
    formatPathname() {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$shared$2f$lib$2f$router$2f$utils$2f$format$2d$next$2d$pathname$2d$info$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["formatNextPathnameInfo"])({
            basePath: this[Internal].basePath,
            buildId: this[Internal].buildId,
            defaultLocale: !this[Internal].options.forceLocale ? this[Internal].defaultLocale : undefined,
            locale: this[Internal].locale,
            pathname: this[Internal].url.pathname,
            trailingSlash: this[Internal].trailingSlash
        });
    }
    formatSearch() {
        return this[Internal].url.search;
    }
    get buildId() {
        return this[Internal].buildId;
    }
    set buildId(buildId) {
        this[Internal].buildId = buildId;
    }
    get locale() {
        return this[Internal].locale ?? '';
    }
    set locale(locale) {
        var _this_Internal_options_nextConfig_i18n, _this_Internal_options_nextConfig;
        if (!this[Internal].locale || !((_this_Internal_options_nextConfig = this[Internal].options.nextConfig) == null ? void 0 : (_this_Internal_options_nextConfig_i18n = _this_Internal_options_nextConfig.i18n) == null ? void 0 : _this_Internal_options_nextConfig_i18n.locales.includes(locale))) {
            throw new TypeError(`The NextURL configuration includes no locale "${locale}"`);
        }
        this[Internal].locale = locale;
    }
    get defaultLocale() {
        return this[Internal].defaultLocale;
    }
    get domainLocale() {
        return this[Internal].domainLocale;
    }
    get searchParams() {
        return this[Internal].url.searchParams;
    }
    get host() {
        return this[Internal].url.host;
    }
    set host(value) {
        this[Internal].url.host = value;
    }
    get hostname() {
        return this[Internal].url.hostname;
    }
    set hostname(value) {
        this[Internal].url.hostname = value;
    }
    get port() {
        return this[Internal].url.port;
    }
    set port(value) {
        this[Internal].url.port = value;
    }
    get protocol() {
        return this[Internal].url.protocol;
    }
    set protocol(value) {
        this[Internal].url.protocol = value;
    }
    get href() {
        const pathname = this.formatPathname();
        const search = this.formatSearch();
        return `${this.protocol}//${this.host}${pathname}${search}${this.hash}`;
    }
    set href(url) {
        this[Internal].url = parseURL(url);
        this.analyze();
    }
    get origin() {
        return this[Internal].url.origin;
    }
    get pathname() {
        return this[Internal].url.pathname;
    }
    set pathname(value) {
        this[Internal].url.pathname = value;
    }
    get hash() {
        return this[Internal].url.hash;
    }
    set hash(value) {
        this[Internal].url.hash = value;
    }
    get search() {
        return this[Internal].url.search;
    }
    set search(value) {
        this[Internal].url.search = value;
    }
    get password() {
        return this[Internal].url.password;
    }
    set password(value) {
        this[Internal].url.password = value;
    }
    get username() {
        return this[Internal].url.username;
    }
    set username(value) {
        this[Internal].url.username = value;
    }
    get basePath() {
        return this[Internal].basePath;
    }
    set basePath(value) {
        this[Internal].basePath = value.startsWith('/') ? value : `/${value}`;
    }
    toString() {
        return this.href;
    }
    toJSON() {
        return this.href;
    }
    [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
            href: this.href,
            origin: this.origin,
            protocol: this.protocol,
            username: this.username,
            password: this.password,
            host: this.host,
            hostname: this.hostname,
            port: this.port,
            pathname: this.pathname,
            search: this.search,
            searchParams: this.searchParams,
            hash: this.hash
        };
    }
    clone() {
        return new NextURL(String(this), this[Internal].options);
    }
} //# sourceMappingURL=next-url.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/error.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "PageSignatureError": (()=>PageSignatureError),
    "RemovedPageError": (()=>RemovedPageError),
    "RemovedUAError": (()=>RemovedUAError)
});
class PageSignatureError extends Error {
    constructor({ page }){
        super(`The middleware "${page}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `);
    }
}
class RemovedPageError extends Error {
    constructor(){
        super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `);
    }
}
class RemovedUAError extends Error {
    constructor(){
        super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `);
    }
} //# sourceMappingURL=error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
var __copyProps = (to, from, except, desc)=>{
    if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
            get: ()=>from[key],
            enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
    }
    return to;
};
var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
        value: true
    }), mod);
// src/index.ts
var src_exports = {};
__export(src_exports, {
    RequestCookies: ()=>RequestCookies,
    ResponseCookies: ()=>ResponseCookies,
    parseCookie: ()=>parseCookie,
    parseSetCookie: ()=>parseSetCookie,
    stringifyCookie: ()=>stringifyCookie
});
module.exports = __toCommonJS(src_exports);
// src/serialize.ts
function stringifyCookie(c) {
    var _a;
    const attrs = [
        "path" in c && c.path && `Path=${c.path}`,
        "expires" in c && (c.expires || c.expires === 0) && `Expires=${(typeof c.expires === "number" ? new Date(c.expires) : c.expires).toUTCString()}`,
        "maxAge" in c && typeof c.maxAge === "number" && `Max-Age=${c.maxAge}`,
        "domain" in c && c.domain && `Domain=${c.domain}`,
        "secure" in c && c.secure && "Secure",
        "httpOnly" in c && c.httpOnly && "HttpOnly",
        "sameSite" in c && c.sameSite && `SameSite=${c.sameSite}`,
        "partitioned" in c && c.partitioned && "Partitioned",
        "priority" in c && c.priority && `Priority=${c.priority}`
    ].filter(Boolean);
    const stringified = `${c.name}=${encodeURIComponent((_a = c.value) != null ? _a : "")}`;
    return attrs.length === 0 ? stringified : `${stringified}; ${attrs.join("; ")}`;
}
function parseCookie(cookie) {
    const map = /* @__PURE__ */ new Map();
    for (const pair of cookie.split(/; */)){
        if (!pair) continue;
        const splitAt = pair.indexOf("=");
        if (splitAt === -1) {
            map.set(pair, "true");
            continue;
        }
        const [key, value] = [
            pair.slice(0, splitAt),
            pair.slice(splitAt + 1)
        ];
        try {
            map.set(key, decodeURIComponent(value != null ? value : "true"));
        } catch  {}
    }
    return map;
}
function parseSetCookie(setCookie) {
    if (!setCookie) {
        return void 0;
    }
    const [[name, value], ...attributes] = parseCookie(setCookie);
    const { domain, expires, httponly, maxage, path, samesite, secure, partitioned, priority } = Object.fromEntries(attributes.map(([key, value2])=>[
            key.toLowerCase(),
            value2
        ]));
    const cookie = {
        name,
        value: decodeURIComponent(value),
        domain,
        ...expires && {
            expires: new Date(expires)
        },
        ...httponly && {
            httpOnly: true
        },
        ...typeof maxage === "string" && {
            maxAge: Number(maxage)
        },
        path,
        ...samesite && {
            sameSite: parseSameSite(samesite)
        },
        ...secure && {
            secure: true
        },
        ...priority && {
            priority: parsePriority(priority)
        },
        ...partitioned && {
            partitioned: true
        }
    };
    return compact(cookie);
}
function compact(t) {
    const newT = {};
    for(const key in t){
        if (t[key]) {
            newT[key] = t[key];
        }
    }
    return newT;
}
var SAME_SITE = [
    "strict",
    "lax",
    "none"
];
function parseSameSite(string) {
    string = string.toLowerCase();
    return SAME_SITE.includes(string) ? string : void 0;
}
var PRIORITY = [
    "low",
    "medium",
    "high"
];
function parsePriority(string) {
    string = string.toLowerCase();
    return PRIORITY.includes(string) ? string : void 0;
}
function splitCookiesString(cookiesString) {
    if (!cookiesString) return [];
    var cookiesStrings = [];
    var pos = 0;
    var start;
    var ch;
    var lastComma;
    var nextStart;
    var cookiesSeparatorFound;
    function skipWhitespace() {
        while(pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))){
            pos += 1;
        }
        return pos < cookiesString.length;
    }
    function notSpecialChar() {
        ch = cookiesString.charAt(pos);
        return ch !== "=" && ch !== ";" && ch !== ",";
    }
    while(pos < cookiesString.length){
        start = pos;
        cookiesSeparatorFound = false;
        while(skipWhitespace()){
            ch = cookiesString.charAt(pos);
            if (ch === ",") {
                lastComma = pos;
                pos += 1;
                skipWhitespace();
                nextStart = pos;
                while(pos < cookiesString.length && notSpecialChar()){
                    pos += 1;
                }
                if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
                    cookiesSeparatorFound = true;
                    pos = nextStart;
                    cookiesStrings.push(cookiesString.substring(start, lastComma));
                    start = pos;
                } else {
                    pos = lastComma + 1;
                }
            } else {
                pos += 1;
            }
        }
        if (!cookiesSeparatorFound || pos >= cookiesString.length) {
            cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
        }
    }
    return cookiesStrings;
}
// src/request-cookies.ts
var RequestCookies = class {
    constructor(requestHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        this._headers = requestHeaders;
        const header = requestHeaders.get("cookie");
        if (header) {
            const parsed = parseCookie(header);
            for (const [name, value] of parsed){
                this._parsed.set(name, {
                    name,
                    value
                });
            }
        }
    }
    [Symbol.iterator]() {
        return this._parsed[Symbol.iterator]();
    }
    /**
   * The amount of cookies received from the client
   */ get size() {
        return this._parsed.size;
    }
    get(...args) {
        const name = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(name);
    }
    getAll(...args) {
        var _a;
        const all = Array.from(this._parsed);
        if (!args.length) {
            return all.map(([_, value])=>value);
        }
        const name = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter(([n])=>n === name).map(([_, value])=>value);
    }
    has(name) {
        return this._parsed.has(name);
    }
    set(...args) {
        const [name, value] = args.length === 1 ? [
            args[0].name,
            args[0].value
        ] : args;
        const map = this._parsed;
        map.set(name, {
            name,
            value
        });
        this._headers.set("cookie", Array.from(map).map(([_, value2])=>stringifyCookie(value2)).join("; "));
        return this;
    }
    /**
   * Delete the cookies matching the passed name or names in the request.
   */ delete(names) {
        const map = this._parsed;
        const result = !Array.isArray(names) ? map.delete(names) : names.map((name)=>map.delete(name));
        this._headers.set("cookie", Array.from(map).map(([_, value])=>stringifyCookie(value)).join("; "));
        return result;
    }
    /**
   * Delete all the cookies in the cookies in the request.
   */ clear() {
        this.delete(Array.from(this._parsed.keys()));
        return this;
    }
    /**
   * Format the cookies in the request as a string for logging
   */ [Symbol.for("edge-runtime.inspect.custom")]() {
        return `RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map((v)=>`${v.name}=${encodeURIComponent(v.value)}`).join("; ");
    }
};
// src/response-cookies.ts
var ResponseCookies = class {
    constructor(responseHeaders){
        /** @internal */ this._parsed = /* @__PURE__ */ new Map();
        var _a, _b, _c;
        this._headers = responseHeaders;
        const setCookie = (_c = (_b = (_a = responseHeaders.getSetCookie) == null ? void 0 : _a.call(responseHeaders)) != null ? _b : responseHeaders.get("set-cookie")) != null ? _c : [];
        const cookieStrings = Array.isArray(setCookie) ? setCookie : splitCookiesString(setCookie);
        for (const cookieString of cookieStrings){
            const parsed = parseSetCookie(cookieString);
            if (parsed) this._parsed.set(parsed.name, parsed);
        }
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-get CookieStore#get} without the Promise.
   */ get(...args) {
        const key = typeof args[0] === "string" ? args[0] : args[0].name;
        return this._parsed.get(key);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-getAll CookieStore#getAll} without the Promise.
   */ getAll(...args) {
        var _a;
        const all = Array.from(this._parsed.values());
        if (!args.length) {
            return all;
        }
        const key = typeof args[0] === "string" ? args[0] : (_a = args[0]) == null ? void 0 : _a.name;
        return all.filter((c)=>c.name === key);
    }
    has(name) {
        return this._parsed.has(name);
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-set CookieStore#set} without the Promise.
   */ set(...args) {
        const [name, value, cookie] = args.length === 1 ? [
            args[0].name,
            args[0].value,
            args[0]
        ] : args;
        const map = this._parsed;
        map.set(name, normalizeCookie({
            name,
            value,
            ...cookie
        }));
        replace(map, this._headers);
        return this;
    }
    /**
   * {@link https://wicg.github.io/cookie-store/#CookieStore-delete CookieStore#delete} without the Promise.
   */ delete(...args) {
        const [name, path, domain] = typeof args[0] === "string" ? [
            args[0]
        ] : [
            args[0].name,
            args[0].path,
            args[0].domain
        ];
        return this.set({
            name,
            path,
            domain,
            value: "",
            expires: /* @__PURE__ */ new Date(0)
        });
    }
    [Symbol.for("edge-runtime.inspect.custom")]() {
        return `ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`;
    }
    toString() {
        return [
            ...this._parsed.values()
        ].map(stringifyCookie).join("; ");
    }
};
function replace(bag, headers) {
    headers.delete("set-cookie");
    for (const [, value] of bag){
        const serialized = stringifyCookie(value);
        headers.append("set-cookie", serialized);
    }
}
function normalizeCookie(cookie = {
    name: "",
    value: ""
}) {
    if (typeof cookie.expires === "number") {
        cookie.expires = new Date(cookie.expires);
    }
    if (cookie.maxAge) {
        cookie.expires = new Date(Date.now() + cookie.maxAge * 1e3);
    }
    if (cookie.path === null || cookie.path === void 0) {
        cookie.path = "/";
    }
    return cookie;
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
    RequestCookies,
    ResponseCookies,
    parseCookie,
    parseSetCookie,
    stringifyCookie
});
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
 //# sourceMappingURL=cookies.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [app-route] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/spec-extension/request.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "INTERNALS": (()=>INTERNALS),
    "NextRequest": (()=>NextRequest)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/next-url.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/error.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$cookies$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/spec-extension/cookies.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/@edge-runtime/cookies/index.js [app-route] (ecmascript)");
;
;
;
;
const INTERNALS = Symbol('internal request');
class NextRequest extends Request {
    constructor(input, init = {}){
        const url = typeof input !== 'string' && 'url' in input ? input.url : String(input);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["validateURL"])(url);
        if (input instanceof Request) super(input, init);
        else super(url, init);
        const nextUrl = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$next$2d$url$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextURL"](url, {
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toNodeOutgoingHttpHeaders"])(this.headers),
            nextConfig: init.nextConfig
        });
        this[INTERNALS] = {
            cookies: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$compiled$2f40$edge$2d$runtime$2f$cookies$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RequestCookies"](this.headers),
            nextUrl,
            url: process.env.__NEXT_NO_MIDDLEWARE_URL_NORMALIZE ? url : nextUrl.toString()
        };
    }
    [Symbol.for('edge-runtime.inspect.custom')]() {
        return {
            cookies: this.cookies,
            nextUrl: this.nextUrl,
            url: this.url,
            // rest of props come from Request
            bodyUsed: this.bodyUsed,
            cache: this.cache,
            credentials: this.credentials,
            destination: this.destination,
            headers: Object.fromEntries(this.headers),
            integrity: this.integrity,
            keepalive: this.keepalive,
            method: this.method,
            mode: this.mode,
            redirect: this.redirect,
            referrer: this.referrer,
            referrerPolicy: this.referrerPolicy,
            signal: this.signal
        };
    }
    get cookies() {
        return this[INTERNALS].cookies;
    }
    get nextUrl() {
        return this[INTERNALS].nextUrl;
    }
    /**
   * @deprecated
   * `page` has been deprecated in favour of `URLPattern`.
   * Read more: https://nextjs.org/docs/messages/middleware-request-page
   */ get page() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RemovedPageError"]();
    }
    /**
   * @deprecated
   * `ua` has been removed in favour of \`userAgent\` function.
   * Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
   */ get ua() {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$error$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RemovedUAError"]();
    }
    get url() {
        return this[INTERNALS].url;
    }
} //# sourceMappingURL=request.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/base-http/helpers.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * This file provides some helpers that should be used in conjunction with
 * explicit environment checks. When combined with the environment checks, it
 * will ensure that the correct typings are used as well as enable code
 * elimination.
 */ /**
 * Type guard to determine if a request is a WebNextRequest. This does not
 * actually check the type of the request, but rather the runtime environment.
 * It's expected that when the runtime environment is the edge runtime, that any
 * base request is a WebNextRequest.
 */ __turbopack_esm__({
    "isNodeNextRequest": (()=>isNodeNextRequest),
    "isNodeNextResponse": (()=>isNodeNextResponse),
    "isWebNextRequest": (()=>isWebNextRequest),
    "isWebNextResponse": (()=>isWebNextResponse)
});
const isWebNextRequest = (req)=>("TURBOPACK compile-time value", "nodejs") === 'edge';
const isWebNextResponse = (res)=>("TURBOPACK compile-time value", "nodejs") === 'edge';
const isNodeNextRequest = (req)=>("TURBOPACK compile-time value", "nodejs") !== 'edge';
const isNodeNextResponse = (res)=>("TURBOPACK compile-time value", "nodejs") !== 'edge'; //# sourceMappingURL=helpers.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/spec-extension/adapters/next-request.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "NextRequestAdapter": (()=>NextRequestAdapter),
    "ResponseAborted": (()=>ResponseAborted),
    "ResponseAbortedName": (()=>ResponseAbortedName),
    "createAbortController": (()=>createAbortController),
    "signalFromNodeResponse": (()=>signalFromNodeResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/request-meta.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/spec-extension/request.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/base-http/helpers.js [app-route] (ecmascript)");
;
;
;
;
const ResponseAbortedName = 'ResponseAborted';
class ResponseAborted extends Error {
    constructor(...args){
        super(...args);
        this.name = ResponseAbortedName;
    }
}
function createAbortController(response) {
    const controller = new AbortController();
    // If `finish` fires first, then `res.end()` has been called and the close is
    // just us finishing the stream on our side. If `close` fires first, then we
    // know the client disconnected before we finished.
    response.once('close', ()=>{
        if (response.writableFinished) return;
        controller.abort(new ResponseAborted());
    });
    return controller;
}
function signalFromNodeResponse(response) {
    const { errored, destroyed } = response;
    if (errored || destroyed) {
        return AbortSignal.abort(errored ?? new ResponseAborted());
    }
    const { signal } = createAbortController(response);
    return signal;
}
class NextRequestAdapter {
    static fromBaseNextRequest(request, signal) {
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        } else if (// environment variable check provides dead code elimination.
        ("TURBOPACK compile-time value", "nodejs") !== 'edge' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$base$2d$http$2f$helpers$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNodeNextRequest"])(request)) {
            return NextRequestAdapter.fromNodeNextRequest(request, signal);
        } else {
            throw new Error('Invariant: Unsupported NextRequest type');
        }
    }
    static fromNodeNextRequest(request, signal) {
        // HEAD and GET requests can not have a body.
        let body = null;
        if (request.method !== 'GET' && request.method !== 'HEAD' && request.body) {
            // @ts-expect-error - this is handled by undici, when streams/web land use it instead
            body = request.body;
        }
        let url;
        if (request.url.startsWith('http')) {
            url = new URL(request.url);
        } else {
            // Grab the full URL from the request metadata.
            const base = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$request$2d$meta$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRequestMeta"])(request, 'initURL');
            if (!base || !base.startsWith('http')) {
                // Because the URL construction relies on the fact that the URL provided
                // is absolute, we need to provide a base URL. We can't use the request
                // URL because it's relative, so we use a dummy URL instead.
                url = new URL(request.url, 'http://n');
            } else {
                url = new URL(request.url, base);
            }
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextRequest"](url, {
            method: request.method,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromNodeOutgoingHttpHeaders"])(request.headers),
            // @ts-expect-error - see https://github.com/whatwg/fetch/pull/1457
            duplex: 'half',
            signal,
            // geo
            // ip
            // nextConfig
            // body can not be passed if request was aborted
            // or we get a Request body was disturbed error
            ...signal.aborted ? {} : {
                body
            }
        });
    }
    static fromWebNextRequest(request) {
        // HEAD and GET requests can not have a body.
        let body = null;
        if (request.method !== 'GET' && request.method !== 'HEAD') {
            body = request.body;
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$request$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextRequest"](request.url, {
            method: request.method,
            headers: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromNodeOutgoingHttpHeaders"])(request.headers),
            // @ts-expect-error - see https://github.com/whatwg/fetch/pull/1457
            duplex: 'half',
            signal: request.request.signal,
            // geo
            // ip
            // nextConfig
            // body can not be passed if request was aborted
            // or we get a Request body was disturbed error
            ...request.request.signal.aborted ? {} : {
                body
            }
        });
    }
} //# sourceMappingURL=next-request.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/client-component-renderer-logger.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// Combined load times for loading client components
__turbopack_esm__({
    "getClientComponentLoaderMetrics": (()=>getClientComponentLoaderMetrics),
    "wrapClientComponentLoader": (()=>wrapClientComponentLoader)
});
let clientComponentLoadStart = 0;
let clientComponentLoadTimes = 0;
let clientComponentLoadCount = 0;
function wrapClientComponentLoader(ComponentMod) {
    if (!('performance' in globalThis)) {
        return ComponentMod.__next_app__;
    }
    return {
        require: (...args)=>{
            const startTime = performance.now();
            if (clientComponentLoadStart === 0) {
                clientComponentLoadStart = startTime;
            }
            try {
                clientComponentLoadCount += 1;
                return ComponentMod.__next_app__.require(...args);
            } finally{
                clientComponentLoadTimes += performance.now() - startTime;
            }
        },
        loadChunk: (...args)=>{
            const startTime = performance.now();
            try {
                clientComponentLoadCount += 1;
                return ComponentMod.__next_app__.loadChunk(...args);
            } finally{
                clientComponentLoadTimes += performance.now() - startTime;
            }
        }
    };
}
function getClientComponentLoaderMetrics(options = {}) {
    const metrics = clientComponentLoadStart === 0 ? undefined : {
        clientComponentLoadStart,
        clientComponentLoadTimes,
        clientComponentLoadCount
    };
    if (options.reset) {
        clientComponentLoadStart = 0;
        clientComponentLoadTimes = 0;
        clientComponentLoadCount = 0;
    }
    return metrics;
} //# sourceMappingURL=client-component-renderer-logger.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/pipe-readable.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "isAbortError": (()=>isAbortError),
    "pipeToNodeResponse": (()=>pipeToNodeResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$next$2d$request$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/web/spec-extension/adapters/next-request.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/detached-promise.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/lib/trace/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$client$2d$component$2d$renderer$2d$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/client-component-renderer-logger.js [app-route] (ecmascript)");
;
;
;
;
;
function isAbortError(e) {
    return (e == null ? void 0 : e.name) === 'AbortError' || (e == null ? void 0 : e.name) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$next$2d$request$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["ResponseAbortedName"];
}
function createWriterFromResponse(res, waitUntilForEnd) {
    let started = false;
    // Create a promise that will resolve once the response has drained. See
    // https://nodejs.org/api/stream.html#stream_event_drain
    let drained = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DetachedPromise"]();
    function onDrain() {
        drained.resolve();
    }
    res.on('drain', onDrain);
    // If the finish event fires, it means we shouldn't block and wait for the
    // drain event.
    res.once('close', ()=>{
        res.off('drain', onDrain);
        drained.resolve();
    });
    // Create a promise that will resolve once the response has finished. See
    // https://nodejs.org/api/http.html#event-finish_1
    const finished = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DetachedPromise"]();
    res.once('finish', ()=>{
        finished.resolve();
    });
    // Create a writable stream that will write to the response.
    return new WritableStream({
        write: async (chunk)=>{
            // You'd think we'd want to use `start` instead of placing this in `write`
            // but this ensures that we don't actually flush the headers until we've
            // started writing chunks.
            if (!started) {
                started = true;
                if ('performance' in globalThis && process.env.NEXT_OTEL_PERFORMANCE_PREFIX) {
                    const metrics = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$client$2d$component$2d$renderer$2d$logger$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getClientComponentLoaderMetrics"])();
                    if (metrics) {
                        performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-client-component-loading`, {
                            start: metrics.clientComponentLoadStart,
                            end: metrics.clientComponentLoadStart + metrics.clientComponentLoadTimes
                        });
                    }
                }
                res.flushHeaders();
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTracer"])().trace(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextNodeServerSpan"].startResponse, {
                    spanName: 'start response'
                }, ()=>undefined);
            }
            try {
                const ok = res.write(chunk);
                // Added by the `compression` middleware, this is a function that will
                // flush the partially-compressed response to the client.
                if ('flush' in res && typeof res.flush === 'function') {
                    res.flush();
                }
                // If the write returns false, it means there's some backpressure, so
                // wait until it's streamed before continuing.
                if (!ok) {
                    await drained.promise;
                    // Reset the drained promise so that we can wait for the next drain event.
                    drained = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$detached$2d$promise$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["DetachedPromise"]();
                }
            } catch (err) {
                res.end();
                throw new Error('failed to write chunk to response', {
                    cause: err
                });
            }
        },
        abort: (err)=>{
            if (res.writableFinished) return;
            res.destroy(err);
        },
        close: async ()=>{
            // if a waitUntil promise was passed, wait for it to resolve before
            // ending the response.
            if (waitUntilForEnd) {
                await waitUntilForEnd;
            }
            if (res.writableFinished) return;
            res.end();
            return finished.promise;
        }
    });
}
async function pipeToNodeResponse(readable, res, waitUntilForEnd) {
    try {
        // If the response has already errored, then just return now.
        const { errored, destroyed } = res;
        if (errored || destroyed) return;
        // Create a new AbortController so that we can abort the readable if the
        // client disconnects.
        const controller = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$spec$2d$extension$2f$adapters$2f$next$2d$request$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createAbortController"])(res);
        const writer = createWriterFromResponse(res, waitUntilForEnd);
        await readable.pipeTo(writer, {
            signal: controller.signal
        });
    } catch (err) {
        // If this isn't related to an abort error, re-throw it.
        if (isAbortError(err)) return;
        throw new Error('failed to pipe response', {
            cause: err
        });
    }
} //# sourceMappingURL=pipe-readable.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/render-result.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>RenderResult)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/stream-utils/node-web-streams-helper.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/pipe-readable.js [app-route] (ecmascript)");
;
;
class RenderResult {
    /**
   * Creates a new RenderResult instance from a static response.
   *
   * @param value the static response value
   * @returns a new RenderResult instance
   */ static fromStatic(value) {
        return new RenderResult(value, {
            metadata: {}
        });
    }
    constructor(response, { contentType, waitUntil, metadata }){
        this.response = response;
        this.contentType = contentType;
        this.metadata = metadata;
        this.waitUntil = waitUntil;
    }
    assignMetadata(metadata) {
        Object.assign(this.metadata, metadata);
    }
    /**
   * Returns true if the response is null. It can be null if the response was
   * not found or was already sent.
   */ get isNull() {
        return this.response === null;
    }
    /**
   * Returns false if the response is a string. It can be a string if the page
   * was prerendered. If it's not, then it was generated dynamically.
   */ get isDynamic() {
        return typeof this.response !== 'string';
    }
    toUnchunkedBuffer(stream = false) {
        if (this.response === null) {
            throw new Error('Invariant: null responses cannot be unchunked');
        }
        if (typeof this.response !== 'string') {
            if (!stream) {
                throw new Error('Invariant: dynamic responses cannot be unchunked. This is a bug in Next.js');
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["streamToBuffer"])(this.readable);
        }
        return Buffer.from(this.response);
    }
    toUnchunkedString(stream = false) {
        if (this.response === null) {
            throw new Error('Invariant: null responses cannot be unchunked');
        }
        if (typeof this.response !== 'string') {
            if (!stream) {
                throw new Error('Invariant: dynamic responses cannot be unchunked. This is a bug in Next.js');
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["streamToString"])(this.readable);
        }
        return this.response;
    }
    /**
   * Returns the response if it is a stream, or throws an error if it is a
   * string.
   */ get readable() {
        if (this.response === null) {
            throw new Error('Invariant: null responses cannot be streamed');
        }
        if (typeof this.response === 'string') {
            throw new Error('Invariant: static responses cannot be streamed');
        }
        if (Buffer.isBuffer(this.response)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["streamFromBuffer"])(this.response);
        }
        // If the response is an array of streams, then chain them together.
        if (Array.isArray(this.response)) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["chainStreams"])(...this.response);
        }
        return this.response;
    }
    /**
   * Chains a new stream to the response. This will convert the response to an
   * array of streams if it is not already one and will add the new stream to
   * the end. When this response is piped, all of the streams will be piped
   * one after the other.
   *
   * @param readable The new stream to chain
   */ chain(readable) {
        if (this.response === null) {
            throw new Error('Invariant: response is null. This is a bug in Next.js');
        }
        // If the response is not an array of streams already, make it one.
        let responses;
        if (typeof this.response === 'string') {
            responses = [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["streamFromString"])(this.response)
            ];
        } else if (Array.isArray(this.response)) {
            responses = this.response;
        } else if (Buffer.isBuffer(this.response)) {
            responses = [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$stream$2d$utils$2f$node$2d$web$2d$streams$2d$helper$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["streamFromBuffer"])(this.response)
            ];
        } else {
            responses = [
                this.response
            ];
        }
        // Add the new stream to the array.
        responses.push(readable);
        // Update the response.
        this.response = responses;
    }
    /**
   * Pipes the response to a writable stream. This will close/cancel the
   * writable stream if an error is encountered. If this doesn't throw, then
   * the writable stream will be closed or aborted.
   *
   * @param writable Writable stream to pipe the response to
   */ async pipeTo(writable) {
        try {
            await this.readable.pipeTo(writable, {
                // We want to close the writable stream ourselves so that we can wait
                // for the waitUntil promise to resolve before closing it. If an error
                // is encountered, we'll abort the writable stream if we swallowed the
                // error.
                preventClose: true
            });
            // If there is a waitUntil promise, wait for it to resolve before
            // closing the writable stream.
            if (this.waitUntil) await this.waitUntil;
            // Close the writable stream.
            await writable.close();
        } catch (err) {
            // If this is an abort error, we should abort the writable stream (as we
            // took ownership of it when we started piping). We don't need to re-throw
            // because we handled the error.
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAbortError"])(err)) {
                // Abort the writable stream if an error is encountered.
                await writable.abort(err);
                return;
            }
            // We're not aborting the writer here as when this method throws it's not
            // clear as to how so the caller should assume it's their responsibility
            // to clean up the writer.
            throw err;
        }
    }
    /**
   * Pipes the response to a node response. This will close/cancel the node
   * response if an error is encountered.
   *
   * @param res
   */ async pipeToNodeResponse(res) {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$pipe$2d$readable$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["pipeToNodeResponse"])(this.readable, res, this.waitUntil);
    }
} //# sourceMappingURL=render-result.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/route-kind.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "RouteKind": (()=>RouteKind)
});
var RouteKind;
(function(RouteKind) {
    /**
   * `PAGES` represents all the React pages that are under `pages/`.
   */ RouteKind["PAGES"] = "PAGES";
    /**
   * `PAGES_API` represents all the API routes under `pages/api/`.
   */ RouteKind["PAGES_API"] = "PAGES_API";
    /**
   * `APP_PAGE` represents all the React pages that are under `app/` with the
   * filename of `page.{j,t}s{,x}`.
   */ RouteKind["APP_PAGE"] = "APP_PAGE";
    /**
   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the
   * filename of `route.{j,t}s{,x}`.
   */ RouteKind["APP_ROUTE"] = "APP_ROUTE";
    /**
   * `IMAGE` represents all the images that are generated by `next/image`.
   */ RouteKind["IMAGE"] = "IMAGE";
})(RouteKind || (RouteKind = {})); //# sourceMappingURL=route-kind.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/response-cache/utils.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "fromResponseCacheEntry": (()=>fromResponseCacheEntry),
    "routeKindToIncrementalCacheKind": (()=>routeKindToIncrementalCacheKind),
    "toResponseCacheEntry": (()=>toResponseCacheEntry)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/response-cache/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/render-result.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/route-kind.js [app-route] (ecmascript)");
;
;
;
async function fromResponseCacheEntry(cacheEntry) {
    var _cacheEntry_value, _cacheEntry_value1;
    return {
        ...cacheEntry,
        value: ((_cacheEntry_value = cacheEntry.value) == null ? void 0 : _cacheEntry_value.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES ? {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES,
            html: await cacheEntry.value.html.toUnchunkedString(true),
            pageData: cacheEntry.value.pageData,
            headers: cacheEntry.value.headers,
            status: cacheEntry.value.status
        } : ((_cacheEntry_value1 = cacheEntry.value) == null ? void 0 : _cacheEntry_value1.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE ? {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE,
            html: await cacheEntry.value.html.toUnchunkedString(true),
            postponed: cacheEntry.value.postponed,
            rscData: cacheEntry.value.rscData,
            headers: cacheEntry.value.headers,
            status: cacheEntry.value.status,
            segmentData: cacheEntry.value.segmentData
        } : cacheEntry.value
    };
}
async function toResponseCacheEntry(response) {
    var _response_value, _response_value1, _response_value2;
    if (!response) return null;
    if (((_response_value = response.value) == null ? void 0 : _response_value.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH) {
        throw new Error('Invariant: unexpected cachedResponse of kind fetch in response cache');
    }
    return {
        isMiss: response.isMiss,
        isStale: response.isStale,
        revalidate: response.revalidate,
        isFallback: response.isFallback,
        value: ((_response_value1 = response.value) == null ? void 0 : _response_value1.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES ? {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CachedRouteKind"].PAGES,
            html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].fromStatic(response.value.html),
            pageData: response.value.pageData,
            headers: response.value.headers,
            status: response.value.status
        } : ((_response_value2 = response.value) == null ? void 0 : _response_value2.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE ? {
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CachedRouteKind"].APP_PAGE,
            html: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$render$2d$result$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].fromStatic(response.value.html),
            rscData: response.value.rscData,
            headers: response.value.headers,
            status: response.value.status,
            postponed: response.value.postponed,
            segmentData: response.value.segmentData
        } : response.value
    };
}
function routeKindToIncrementalCacheKind(routeKind) {
    switch(routeKind){
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RouteKind"].PAGES:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].PAGES;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RouteKind"].APP_PAGE:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_PAGE;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RouteKind"].IMAGE:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].IMAGE;
        case __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["RouteKind"].APP_ROUTE:
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].APP_ROUTE;
        default:
            throw new Error(`Unexpected route kind ${routeKind}`);
    }
} //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/response-cache/index.js [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ResponseCache)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$batcher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/batcher.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/scheduler.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/response-cache/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/response-cache/types.js [app-route] (ecmascript)");
;
;
;
;
;
class ResponseCache {
    constructor(minimalMode){
        this.batcher = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$batcher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Batcher"].create({
            // Ensure on-demand revalidate doesn't block normal requests, it should be
            // safe to run an on-demand revalidate for the same key as a normal request.
            cacheKeyFn: ({ key, isOnDemandRevalidate })=>`${key}-${isOnDemandRevalidate ? '1' : '0'}`,
            // We wait to do any async work until after we've added our promise to
            // `pendingResponses` to ensure that any any other calls will reuse the
            // same promise until we've fully finished our work.
            schedulerFn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scheduleOnNextTick"]
        });
        // this is a hack to avoid Webpack knowing this is equal to this.minimalMode
        // because we replace this.minimalMode to true in production bundles.
        const minimalModeKey = 'minimalMode';
        this[minimalModeKey] = minimalMode;
    }
    async get(key, responseGenerator, context) {
        // If there is no key for the cache, we can't possibly look this up in the
        // cache so just return the result of the response generator.
        if (!key) {
            return responseGenerator({
                hasResolved: false,
                previousCacheEntry: null
            });
        }
        const { incrementalCache, isOnDemandRevalidate = false, isFallback = false, isRoutePPREnabled = false } = context;
        const response = await this.batcher.batch({
            key,
            isOnDemandRevalidate
        }, async (cacheKey, resolve)=>{
            var _this_previousCacheItem;
            // We keep the previous cache entry around to leverage when the
            // incremental cache is disabled in minimal mode.
            if (this.minimalMode && ((_this_previousCacheItem = this.previousCacheItem) == null ? void 0 : _this_previousCacheItem.key) === cacheKey && this.previousCacheItem.expiresAt > Date.now()) {
                return this.previousCacheItem.entry;
            }
            // Coerce the kindHint into a given kind for the incremental cache.
            const kind = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["routeKindToIncrementalCacheKind"])(context.routeKind);
            let resolved = false;
            let cachedResponse = null;
            try {
                cachedResponse = !this.minimalMode ? await incrementalCache.get(key, {
                    kind,
                    isRoutePPREnabled: context.isRoutePPREnabled,
                    isFallback
                }) : null;
                if (cachedResponse && !isOnDemandRevalidate) {
                    var _cachedResponse_value;
                    if (((_cachedResponse_value = cachedResponse.value) == null ? void 0 : _cachedResponse_value.kind) === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH) {
                        throw new Error(`invariant: unexpected cachedResponse of kind fetch in response cache`);
                    }
                    resolve({
                        ...cachedResponse,
                        revalidate: cachedResponse.curRevalidate
                    });
                    resolved = true;
                    if (!cachedResponse.isStale || context.isPrefetch) {
                        // The cached value is still valid, so we don't need
                        // to update it yet.
                        return null;
                    }
                }
                const cacheEntry = await responseGenerator({
                    hasResolved: resolved,
                    previousCacheEntry: cachedResponse,
                    isRevalidating: true
                });
                // If the cache entry couldn't be generated, we don't want to cache
                // the result.
                if (!cacheEntry) {
                    // Unset the previous cache item if it was set.
                    if (this.minimalMode) this.previousCacheItem = undefined;
                    return null;
                }
                const resolveValue = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fromResponseCacheEntry"])({
                    ...cacheEntry,
                    isMiss: !cachedResponse
                });
                if (!resolveValue) {
                    // Unset the previous cache item if it was set.
                    if (this.minimalMode) this.previousCacheItem = undefined;
                    return null;
                }
                // For on-demand revalidate wait to resolve until cache is set.
                // Otherwise resolve now.
                if (!isOnDemandRevalidate && !resolved) {
                    resolve(resolveValue);
                    resolved = true;
                }
                // We want to persist the result only if it has a revalidate value
                // defined.
                if (typeof resolveValue.revalidate !== 'undefined') {
                    if (this.minimalMode) {
                        this.previousCacheItem = {
                            key: cacheKey,
                            entry: resolveValue,
                            expiresAt: Date.now() + 1000
                        };
                    } else {
                        await incrementalCache.set(key, resolveValue.value, {
                            revalidate: resolveValue.revalidate,
                            isRoutePPREnabled,
                            isFallback
                        });
                    }
                }
                return resolveValue;
            } catch (err) {
                // When a getStaticProps path is erroring we automatically re-set the
                // existing cache under a new expiration to prevent non-stop retrying.
                if (cachedResponse) {
                    await incrementalCache.set(key, cachedResponse.value, {
                        revalidate: Math.min(Math.max(cachedResponse.revalidate || 3, 3), 30),
                        isRoutePPREnabled,
                        isFallback
                    });
                }
                // While revalidating in the background we can't reject as we already
                // resolved the cache entry so log the error here.
                if (resolved) {
                    console.error(err);
                    return null;
                }
                // We haven't resolved yet, so let's throw to indicate an error.
                throw err;
            }
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["toResponseCacheEntry"])(response);
    }
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/response-cache/index.js [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/response-cache/types.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$batcher$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/batcher.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/scheduler.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/response-cache/utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/response-cache/index.js [app-route] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/observable/observable.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/** @public */ __turbopack_esm__({
    "isObservable": (()=>isObservable),
    "observable": (()=>observable),
    "observableToAsyncIterable": (()=>observableToAsyncIterable),
    "observableToPromise": (()=>observableToPromise)
});
function isObservable(x) {
    return typeof x === 'object' && x !== null && 'subscribe' in x;
}
/** @public */ function observable(subscribe) {
    const self = {
        subscribe (observer) {
            let teardownRef = null;
            let isDone = false;
            let unsubscribed = false;
            let teardownImmediately = false;
            function unsubscribe() {
                if (teardownRef === null) {
                    teardownImmediately = true;
                    return;
                }
                if (unsubscribed) {
                    return;
                }
                unsubscribed = true;
                if (typeof teardownRef === 'function') {
                    teardownRef();
                } else if (teardownRef) {
                    teardownRef.unsubscribe();
                }
            }
            teardownRef = subscribe({
                next (value) {
                    if (isDone) {
                        return;
                    }
                    observer.next?.(value);
                },
                error (err) {
                    if (isDone) {
                        return;
                    }
                    isDone = true;
                    observer.error?.(err);
                    unsubscribe();
                },
                complete () {
                    if (isDone) {
                        return;
                    }
                    isDone = true;
                    observer.complete?.();
                    unsubscribe();
                }
            });
            if (teardownImmediately) {
                unsubscribe();
            }
            return {
                unsubscribe
            };
        },
        pipe (...operations) {
            return operations.reduce(pipeReducer, self);
        }
    };
    return self;
}
function pipeReducer(prev, fn) {
    return fn(prev);
}
/** @internal */ function observableToPromise(observable) {
    const ac = new AbortController();
    const promise = new Promise((resolve, reject)=>{
        let isDone = false;
        function onDone() {
            if (isDone) {
                return;
            }
            isDone = true;
            obs$.unsubscribe();
        }
        ac.signal.addEventListener('abort', ()=>{
            reject(ac.signal.reason);
        });
        const obs$ = observable.subscribe({
            next (data) {
                isDone = true;
                resolve(data);
                onDone();
            },
            error (data) {
                reject(data);
            },
            complete () {
                ac.abort();
                onDone();
            }
        });
    });
    return promise;
}
/**
 * @internal
 */ function observableToReadableStream(observable, signal) {
    let unsub = null;
    const onAbort = ()=>{
        unsub?.unsubscribe();
        unsub = null;
        signal.removeEventListener('abort', onAbort);
    };
    return new ReadableStream({
        start (controller) {
            unsub = observable.subscribe({
                next (data) {
                    controller.enqueue({
                        ok: true,
                        value: data
                    });
                },
                error (error) {
                    controller.enqueue({
                        ok: false,
                        error
                    });
                    controller.close();
                },
                complete () {
                    controller.close();
                }
            });
            if (signal.aborted) {
                onAbort();
            } else {
                signal.addEventListener('abort', onAbort, {
                    once: true
                });
            }
        },
        cancel () {
            onAbort();
        }
    });
}
/** @internal */ function observableToAsyncIterable(observable, signal) {
    const stream = observableToReadableStream(observable, signal);
    const reader = stream.getReader();
    const iterator = {
        async next () {
            const value = await reader.read();
            if (value.done) {
                return {
                    value: undefined,
                    done: true
                };
            }
            const { value: result } = value;
            if (!result.ok) {
                throw result.error;
            }
            return {
                value: result.value,
                done: false
            };
        },
        async return () {
            await reader.cancel();
            return {
                value: undefined,
                done: true
            };
        }
    };
    return {
        [Symbol.asyncIterator] () {
            return iterator;
        }
    };
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/rpc/codes.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// reference: https://www.jsonrpc.org/specification
/**
 * JSON-RPC 2.0 Error codes
 *
 * `-32000` to `-32099` are reserved for implementation-defined server-errors.
 * For tRPC we're copying the last digits of HTTP 4XX errors.
 */ __turbopack_esm__({
    "TRPC_ERROR_CODES_BY_KEY": (()=>TRPC_ERROR_CODES_BY_KEY),
    "TRPC_ERROR_CODES_BY_NUMBER": (()=>TRPC_ERROR_CODES_BY_NUMBER)
});
const TRPC_ERROR_CODES_BY_KEY = {
    /**
   * Invalid JSON was received by the server.
   * An error occurred on the server while parsing the JSON text.
   */ PARSE_ERROR: -32700,
    /**
   * The JSON sent is not a valid Request object.
   */ BAD_REQUEST: -32600,
    // Internal JSON-RPC error
    INTERNAL_SERVER_ERROR: -32603,
    NOT_IMPLEMENTED: -32603,
    BAD_GATEWAY: -32603,
    SERVICE_UNAVAILABLE: -32603,
    GATEWAY_TIMEOUT: -32603,
    // Implementation specific errors
    UNAUTHORIZED: -32001,
    FORBIDDEN: -32003,
    NOT_FOUND: -32004,
    METHOD_NOT_SUPPORTED: -32005,
    TIMEOUT: -32008,
    CONFLICT: -32009,
    PRECONDITION_FAILED: -32012,
    PAYLOAD_TOO_LARGE: -32013,
    UNSUPPORTED_MEDIA_TYPE: -32015,
    UNPROCESSABLE_CONTENT: -32022,
    TOO_MANY_REQUESTS: -32029,
    CLIENT_CLOSED_REQUEST: -32099
};
// pure
const TRPC_ERROR_CODES_BY_NUMBER = {
    [-32700]: 'PARSE_ERROR',
    [-32600]: 'BAD_REQUEST',
    [-32603]: 'INTERNAL_SERVER_ERROR',
    [-32001]: 'UNAUTHORIZED',
    [-32003]: 'FORBIDDEN',
    [-32004]: 'NOT_FOUND',
    [-32005]: 'METHOD_NOT_SUPPORTED',
    [-32008]: 'TIMEOUT',
    [-32009]: 'CONFLICT',
    [-32012]: 'PRECONDITION_FAILED',
    [-32013]: 'PAYLOAD_TOO_LARGE',
    [-32015]: 'UNSUPPORTED_MEDIA_TYPE',
    [-32022]: 'UNPROCESSABLE_CONTENT',
    [-32029]: 'TOO_MANY_REQUESTS',
    [-32099]: 'CLIENT_CLOSED_REQUEST'
};
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/** @internal */ __turbopack_esm__({
    "abortSignalsAnyPonyfill": (()=>abortSignalsAnyPonyfill),
    "assert": (()=>assert),
    "identity": (()=>identity),
    "isAsyncIterable": (()=>isAsyncIterable),
    "isFunction": (()=>isFunction),
    "isObject": (()=>isObject),
    "mergeWithoutOverrides": (()=>mergeWithoutOverrides),
    "noop": (()=>noop),
    "omitPrototype": (()=>omitPrototype),
    "run": (()=>run),
    "sleep": (()=>sleep),
    "unsetMarker": (()=>unsetMarker)
});
const unsetMarker = Symbol();
/**
 * Ensures there are no duplicate keys when building a procedure.
 * @internal
 */ function mergeWithoutOverrides(obj1, ...objs) {
    const newObj = Object.assign(Object.create(null), obj1);
    for (const overrides of objs){
        for(const key in overrides){
            if (key in newObj && newObj[key] !== overrides[key]) {
                throw new Error(`Duplicate key ${key}`);
            }
            newObj[key] = overrides[key];
        }
    }
    return newObj;
}
/**
 * Check that value is object
 * @internal
 */ function isObject(value) {
    return !!value && !Array.isArray(value) && typeof value === 'object';
}
function isFunction(fn) {
    return typeof fn === 'function';
}
/**
 * Create an object without inheriting anything from `Object.prototype`
 * @internal
 */ function omitPrototype(obj) {
    return Object.assign(Object.create(null), obj);
}
const asyncIteratorsSupported = typeof Symbol === 'function' && !!Symbol.asyncIterator;
function isAsyncIterable(value) {
    return asyncIteratorsSupported && isObject(value) && Symbol.asyncIterator in value;
}
/**
 * Run an IIFE
 */ const run = (fn)=>fn();
// eslint-disable-next-line @typescript-eslint/no-empty-function
function noop() {}
function identity(it) {
    return it;
}
/**
 * Generic runtime assertion function. Throws, if the condition is not `true`.
 *
 * Can be used as a slightly less dangerous variant of type assertions. Code
 * mistakes would be revealed at runtime then (hopefully during testing).
 */ function assert(condition, msg = 'no additional info') {
    if (!condition) {
        throw new Error(`AssertionError: ${msg}`);
    }
}
function sleep(ms = 0) {
    return new Promise((res)=>setTimeout(res, ms));
}
/**
 * Ponyfill for
 * [`AbortSignal.any`](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/any_static).
 */ function abortSignalsAnyPonyfill(signals) {
    if (typeof AbortSignal.any === 'function') {
        return AbortSignal.any(signals);
    }
    const ac = new AbortController();
    for (const signal of signals){
        if (signal.aborted) {
            trigger();
            break;
        }
        signal.addEventListener('abort', trigger, {
            once: true
        });
    }
    return ac.signal;
    "TURBOPACK unreachable";
    function trigger() {
        ac.abort();
        for (const signal of signals){
            signal.removeEventListener('abort', trigger);
        }
    }
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/getHTTPStatusCode.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "HTTP_CODE_TO_JSONRPC2": (()=>HTTP_CODE_TO_JSONRPC2),
    "JSONRPC2_TO_HTTP_CODE": (()=>JSONRPC2_TO_HTTP_CODE),
    "getHTTPStatusCode": (()=>getHTTPStatusCode),
    "getHTTPStatusCodeFromError": (()=>getHTTPStatusCodeFromError),
    "getStatusCodeFromKey": (()=>getStatusCodeFromKey),
    "getStatusKeyFromCode": (()=>getStatusKeyFromCode)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rpc$2f$codes$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/rpc/codes.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-route] (ecmascript)");
;
;
const JSONRPC2_TO_HTTP_CODE = {
    PARSE_ERROR: 400,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    METHOD_NOT_SUPPORTED: 405,
    TIMEOUT: 408,
    CONFLICT: 409,
    PRECONDITION_FAILED: 412,
    PAYLOAD_TOO_LARGE: 413,
    UNSUPPORTED_MEDIA_TYPE: 415,
    UNPROCESSABLE_CONTENT: 422,
    TOO_MANY_REQUESTS: 429,
    CLIENT_CLOSED_REQUEST: 499,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504
};
const HTTP_CODE_TO_JSONRPC2 = {
    400: 'BAD_REQUEST',
    401: 'UNAUTHORIZED',
    403: 'FORBIDDEN',
    404: 'NOT_FOUND',
    405: 'METHOD_NOT_SUPPORTED',
    408: 'TIMEOUT',
    409: 'CONFLICT',
    412: 'PRECONDITION_FAILED',
    413: 'PAYLOAD_TOO_LARGE',
    415: 'UNSUPPORTED_MEDIA_TYPE',
    422: 'UNPROCESSABLE_CONTENT',
    429: 'TOO_MANY_REQUESTS',
    499: 'CLIENT_CLOSED_REQUEST',
    500: 'INTERNAL_SERVER_ERROR',
    501: 'NOT_IMPLEMENTED',
    502: 'BAD_GATEWAY',
    503: 'SERVICE_UNAVAILABLE',
    504: 'GATEWAY_TIMEOUT'
};
function getStatusCodeFromKey(code) {
    return JSONRPC2_TO_HTTP_CODE[code] ?? 500;
}
function getStatusKeyFromCode(code) {
    return HTTP_CODE_TO_JSONRPC2[code] ?? 'INTERNAL_SERVER_ERROR';
}
function getHTTPStatusCode(json) {
    const arr = Array.isArray(json) ? json : [
        json
    ];
    const httpStatuses = new Set(arr.map((res)=>{
        if ('error' in res && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(res.error.data)) {
            if (typeof res.error.data?.['httpStatus'] === 'number') {
                return res.error.data['httpStatus'];
            }
            const code = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rpc$2f$codes$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPC_ERROR_CODES_BY_NUMBER"][res.error.code];
            return getStatusCodeFromKey(code);
        }
        return 200;
    }));
    if (httpStatuses.size !== 1) {
        return 207;
    }
    const httpStatus = httpStatuses.values().next().value;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return httpStatus;
}
function getHTTPStatusCodeFromError(error) {
    return getStatusCodeFromKey(error.code);
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/getErrorShape.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getErrorShape": (()=>getErrorShape)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$getHTTPStatusCode$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/getHTTPStatusCode.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rpc$2f$codes$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/rpc/codes.mjs [app-route] (ecmascript)");
;
;
/**
 * @internal
 */ function getErrorShape(opts) {
    const { path, error, config } = opts;
    const { code } = opts.error;
    const shape = {
        message: error.message,
        code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rpc$2f$codes$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPC_ERROR_CODES_BY_KEY"][code],
        data: {
            code,
            httpStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$getHTTPStatusCode$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHTTPStatusCodeFromError"])(error)
        }
    };
    if (config.isDev && typeof opts.error.stack === 'string') {
        shape.data.stack = opts.error.stack;
    }
    if (typeof path === 'string') {
        shape.data.path = path;
    }
    return config.errorFormatter({
        ...opts,
        shape
    });
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "TRPCError": (()=>TRPCError),
    "getCauseFromUnknown": (()=>getCauseFromUnknown),
    "getTRPCErrorFromUnknown": (()=>getTRPCErrorFromUnknown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-route] (ecmascript)");
;
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
class UnknownCauseError extends Error {
}
function getCauseFromUnknown(cause) {
    if (cause instanceof Error) {
        return cause;
    }
    const type = typeof cause;
    if (type === 'undefined' || type === 'function' || cause === null) {
        return undefined;
    }
    // Primitive types just get wrapped in an error
    if (type !== 'object') {
        return new Error(String(cause));
    }
    // If it's an object, we'll create a synthetic error
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(cause)) {
        const err = new UnknownCauseError();
        for(const key in cause){
            err[key] = cause[key];
        }
        return err;
    }
    return undefined;
}
function getTRPCErrorFromUnknown(cause) {
    if (cause instanceof TRPCError) {
        return cause;
    }
    if (cause instanceof Error && cause.name === 'TRPCError') {
        // https://github.com/trpc/trpc/pull/4848
        return cause;
    }
    const trpcError = new TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        cause
    });
    // Inherit stack from error
    if (cause instanceof Error && cause.stack) {
        trpcError.stack = cause.stack;
    }
    return trpcError;
}
class TRPCError extends Error {
    constructor(opts){
        const cause = getCauseFromUnknown(opts.cause);
        const message = opts.message ?? cause?.message ?? opts.code;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore https://github.com/tc39/proposal-error-cause
        super(message, {
            cause
        }), // @ts-ignore override doesn't work in all environments due to "This member cannot have an 'override' modifier because it is not declared in the base class 'Error'"
        _define_property(this, "cause", void 0), _define_property(this, "code", void 0);
        this.code = opts.code;
        this.name = 'TRPCError';
        if (!this.cause) {
            // < ES2022 / < Node 16.9.0 compatability
            this.cause = cause;
        }
    }
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/vendor/unpromise/unpromise.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/unbound-method */ __turbopack_esm__({
    "Unpromise": (()=>Unpromise),
    "resolveSelfTuple": (()=>resolveSelfTuple)
});
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
var _computedKey;
/** Memory safe (weakmapped) cache of the ProxyPromise for each Promise,
 * which is retained for the lifetime of the original Promise.
 */ const subscribableCache = new WeakMap();
/** A NOOP function allowing a consistent interface for settled
 * SubscribedPromises (settled promises are not subscribed - they resolve
 * immediately). */ const NOOP = ()=>{
// noop
};
_computedKey = Symbol.toStringTag;
let _computedKey1 = _computedKey;
/**
 * Every `Promise<T>` can be shadowed by a single `ProxyPromise<T>`. It is
 * created once, cached and reused throughout the lifetime of the Promise. Get a
 * Promise's ProxyPromise using `Unpromise.proxy(promise)`.
 *
 * The `ProxyPromise<T>` attaches handlers to the original `Promise<T>`
 * `.then()` and `.catch()` just once. Promises derived from it use a
 * subscription- (and unsubscription-) based mechanism that monitors these
 * handlers.
 *
 * Every time you call `.subscribe()`, `.then()` `.catch()` or `.finally()` on a
 * `ProxyPromise<T>` it returns a `SubscribedPromise<T>` having an additional
 * `unsubscribe()` method. Calling `unsubscribe()` detaches reference chains
 * from the original, potentially long-lived Promise, eliminating memory leaks.
 *
 * This approach can eliminate the memory leaks that otherwise come about from
 * repeated `race()` or `any()` calls invoking `.then()` and `.catch()` multiple
 * times on the same long-lived native Promise (subscriptions which can never be
 * cleaned up).
 *
 * `Unpromise.race(promises)` is a reference implementation of `Promise.race`
 * avoiding memory leaks when using long-lived unsettled Promises.
 *
 * `Unpromise.any(promises)` is a reference implementation of `Promise.any`
 * avoiding memory leaks when using long-lived unsettled Promises.
 *
 * `Unpromise.resolve(promise)` returns an ephemeral `SubscribedPromise<T>` for
 * any given `Promise<T>` facilitating arbitrary async/await patterns. Behind
 * the scenes, `resolve` is implemented simply as
 * `Unpromise.proxy(promise).subscribe()`. Don't forget to call `.unsubscribe()`
 * to tidy up!
 *
 */ class Unpromise {
    /** Create a promise that mitigates uncontrolled subscription to a long-lived
   * Promise via .then() and .catch() - otherwise a source of memory leaks.
   *
   * The returned promise has an `unsubscribe()` method which can be called when
   * the Promise is no longer being tracked by application logic, and which
   * ensures that there is no reference chain from the original promise to the
   * new one, and therefore no memory leak.
   *
   * If original promise has not yet settled, this adds a new unique promise
   * that listens to then/catch events, along with an `unsubscribe()` method to
   * detach it.
   *
   * If original promise has settled, then creates a new Promise.resolve() or
   * Promise.reject() and provided unsubscribe is a noop.
   *
   * If you call `unsubscribe()` before the returned Promise has settled, it
   * will never settle.
   */ subscribe() {
        // in all cases we will combine some promise with its unsubscribe function
        let promise;
        let unsubscribe;
        const { settlement } = this;
        if (settlement === null) {
            // not yet settled - subscribe new promise. Expect eventual settlement
            if (this.subscribers === null) {
                // invariant - it is not settled, so it must have subscribers
                throw new Error("Unpromise settled but still has subscribers");
            }
            const subscriber = withResolvers();
            this.subscribers = listWithMember(this.subscribers, subscriber);
            promise = subscriber.promise;
            unsubscribe = ()=>{
                if (this.subscribers !== null) {
                    this.subscribers = listWithoutMember(this.subscribers, subscriber);
                }
            };
        } else {
            // settled - don't create subscribed promise. Just resolve or reject
            const { status } = settlement;
            if (status === "fulfilled") {
                promise = Promise.resolve(settlement.value);
            } else {
                promise = Promise.reject(settlement.reason);
            }
            unsubscribe = NOOP;
        }
        // extend promise signature with the extra method
        return Object.assign(promise, {
            unsubscribe
        });
    }
    /** STANDARD PROMISE METHODS (but returning a SubscribedPromise) */ then(onfulfilled, onrejected) {
        const subscribed = this.subscribe();
        const { unsubscribe } = subscribed;
        return Object.assign(subscribed.then(onfulfilled, onrejected), {
            unsubscribe
        });
    }
    catch(onrejected) {
        const subscribed = this.subscribe();
        const { unsubscribe } = subscribed;
        return Object.assign(subscribed.catch(onrejected), {
            unsubscribe
        });
    }
    finally(onfinally) {
        const subscribed = this.subscribe();
        const { unsubscribe } = subscribed;
        return Object.assign(subscribed.finally(onfinally), {
            unsubscribe
        });
    }
    /** Unpromise STATIC METHODS */ /** Create or Retrieve the proxy Unpromise (a re-used Unpromise for the VM lifetime
   * of the provided Promise reference) */ static proxy(promise) {
        const cached = Unpromise.getSubscribablePromise(promise);
        return typeof cached !== "undefined" ? cached : Unpromise.createSubscribablePromise(promise);
    }
    /** Create and store an Unpromise keyed by an original Promise. */ static createSubscribablePromise(promise) {
        const created = new Unpromise(promise);
        subscribableCache.set(promise, created); // resolve promise to unpromise
        subscribableCache.set(created, created); // resolve the unpromise to itself
        return created;
    }
    /** Retrieve a previously-created Unpromise keyed by an original Promise. */ static getSubscribablePromise(promise) {
        return subscribableCache.get(promise);
    }
    /** Promise STATIC METHODS */ /** Lookup the Unpromise for this promise, and derive a SubscribedPromise from
   * it (that can be later unsubscribed to eliminate Memory leaks) */ static resolve(value) {
        const promise = typeof value === "object" && value !== null && "then" in value && typeof value.then === "function" ? value : Promise.resolve(value);
        return Unpromise.proxy(promise).subscribe();
    }
    static async any(values) {
        const valuesArray = Array.isArray(values) ? values : [
            ...values
        ];
        const subscribedPromises = valuesArray.map(Unpromise.resolve);
        try {
            return await Promise.any(subscribedPromises);
        } finally{
            subscribedPromises.forEach(({ unsubscribe })=>{
                unsubscribe();
            });
        }
    }
    static async race(values) {
        const valuesArray = Array.isArray(values) ? values : [
            ...values
        ];
        const subscribedPromises = valuesArray.map(Unpromise.resolve);
        try {
            return await Promise.race(subscribedPromises);
        } finally{
            subscribedPromises.forEach(({ unsubscribe })=>{
                unsubscribe();
            });
        }
    }
    /** Create a race of SubscribedPromises that will fulfil to a single winning
   * Promise (in a 1-Tuple). Eliminates memory leaks from long-lived promises
   * accumulating .then() and .catch() subscribers. Allows simple logic to
   * consume the result, like...
   * ```ts
   * const [ winner ] = await Unpromise.race([ promiseA, promiseB ]);
   * if(winner === promiseB){
   *   const result = await promiseB;
   *   // do the thing
   * }
   * ```
   * */ static async raceReferences(promises) {
        // map each promise to an eventual 1-tuple containing itself
        const selfPromises = promises.map(resolveSelfTuple);
        // now race them. They will fulfil to a readonly [P] or reject.
        try {
            return await Promise.race(selfPromises);
        } finally{
            for (const promise of selfPromises){
                // unsubscribe proxy promises when the race is over to mitigate memory leaks
                promise.unsubscribe();
            }
        }
    }
    constructor(arg){
        /** INSTANCE IMPLEMENTATION */ /** The promise shadowed by this Unpromise<T>  */ _define_property(this, "promise", void 0);
        /** Promises expecting eventual settlement (unless unsubscribed first). This list is deleted
   * after the original promise settles - no further notifications will be issued. */ _define_property(this, "subscribers", []);
        /** The Promise's settlement (recorded when it fulfils or rejects). This is consulted when
   * calling .subscribe() .then() .catch() .finally() to see if an immediately-resolving Promise
   * can be returned, and therefore subscription can be bypassed. */ _define_property(this, "settlement", null);
        /** TOSTRING SUPPORT */ _define_property(this, _computedKey1, "Unpromise");
        // handle either a Promise or a Promise executor function
        if (typeof arg === "function") {
            this.promise = new Promise(arg);
        } else {
            this.promise = arg;
        }
        // subscribe for eventual fulfilment and rejection
        // handle PromiseLike objects (that at least have .then)
        const thenReturn = this.promise.then((value)=>{
            // atomically record fulfilment and detach subscriber list
            const { subscribers } = this;
            this.subscribers = null;
            this.settlement = {
                status: "fulfilled",
                value
            };
            // notify fulfilment to subscriber list
            subscribers?.forEach(({ resolve })=>{
                resolve(value);
            });
        });
        // handle Promise (that also have a .catch behaviour)
        if ("catch" in thenReturn) {
            thenReturn.catch((reason)=>{
                // atomically record rejection and detach subscriber list
                const { subscribers } = this;
                this.subscribers = null;
                this.settlement = {
                    status: "rejected",
                    reason
                };
                // notify rejection to subscriber list
                subscribers?.forEach(({ reject })=>{
                    reject(reason);
                });
            });
        }
    }
}
/** Promises a 1-tuple containing the original promise when it resolves. Allows
 * awaiting the eventual Promise ***reference*** (easy to destructure and
 * exactly compare with ===). Avoids resolving to the Promise ***value*** (which
 * may be ambiguous and therefore hard to identify as the winner of a race).
 * You can call unsubscribe on the Promise to mitigate memory leaks.
 * */ function resolveSelfTuple(promise) {
    return Unpromise.proxy(promise).then(()=>[
            promise
        ]);
}
/** VENDORED (Future) PROMISE UTILITIES */ /** Reference implementation of https://github.com/tc39/proposal-promise-with-resolvers */ function withResolvers() {
    let resolve;
    let reject;
    const promise = new Promise((_resolve, _reject)=>{
        resolve = _resolve;
        reject = _reject;
    });
    return {
        promise,
        resolve,
        reject
    };
}
/** IMMUTABLE LIST OPERATIONS */ function listWithMember(arr, member) {
    return [
        ...arr,
        member
    ];
}
function listWithoutIndex(arr, index) {
    return [
        ...arr.slice(0, index),
        ...arr.slice(index + 1)
    ];
}
function listWithoutMember(arr, member) {
    const index = arr.indexOf(member);
    if (index !== -1) {
        return listWithoutIndex(arr, index);
    }
    return arr;
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/disposable.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// @ts-expect-error - polyfilling symbol
// eslint-disable-next-line no-restricted-syntax
__turbopack_esm__({
    "makeAsyncResource": (()=>makeAsyncResource),
    "makeResource": (()=>makeResource)
});
var _Symbol, // eslint-disable-next-line no-restricted-syntax
_Symbol1;
(_Symbol = Symbol).dispose ?? (_Symbol.dispose = Symbol());
(_Symbol1 = Symbol).asyncDispose ?? (_Symbol1.asyncDispose = Symbol());
/**
 * Takes a value and a dispose function and returns a new object that implements the Disposable interface.
 * The returned object is the original value augmented with a Symbol.dispose method.
 * @param thing The value to make disposable
 * @param dispose Function to call when disposing the resource
 * @returns The original value with Symbol.dispose method added
 */ function makeResource(thing, dispose) {
    const it = thing;
    // eslint-disable-next-line no-restricted-syntax
    if (it[Symbol.dispose]) {
        throw new Error('Symbol.dispose already exists');
    }
    // eslint-disable-next-line no-restricted-syntax
    it[Symbol.dispose] = dispose;
    return it;
}
/**
 * Takes a value and an async dispose function and returns a new object that implements the AsyncDisposable interface.
 * The returned object is the original value augmented with a Symbol.asyncDispose method.
 * @param thing The value to make async disposable
 * @param dispose Async function to call when disposing the resource
 * @returns The original value with Symbol.asyncDispose method added
 */ function makeAsyncResource(thing, dispose) {
    const it = thing;
    // eslint-disable-next-line no-restricted-syntax
    if (it[Symbol.asyncDispose]) {
        throw new Error('Symbol.asyncDispose already exists');
    }
    // eslint-disable-next-line no-restricted-syntax
    it[Symbol.asyncDispose] = dispose;
    return it;
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/timerResource.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "disposablePromiseTimerResult": (()=>disposablePromiseTimerResult),
    "timerResource": (()=>timerResource)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/disposable.mjs [app-route] (ecmascript)");
;
const disposablePromiseTimerResult = Symbol();
function timerResource(ms) {
    let timer = null;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeResource"])({
        start () {
            if (timer) {
                throw new Error('Timer already started');
            }
            const promise = new Promise((resolve)=>{
                timer = setTimeout(()=>resolve(disposablePromiseTimerResult), ms);
            });
            return promise;
        }
    }, ()=>{
        if (timer) {
            clearTimeout(timer);
        }
    });
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/asyncIterable.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "iteratorResource": (()=>iteratorResource),
    "takeWithGrace": (()=>takeWithGrace),
    "withMaxDuration": (()=>withMaxDuration)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$unpromise$2f$unpromise$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/vendor/unpromise/unpromise.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/disposable.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/timerResource.mjs [app-route] (ecmascript)");
;
;
;
function _ts_add_disposable_resource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
function _ts_dispose_resources(env) {
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    return (_ts_dispose_resources = function _ts_dispose_resources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                            fail(e);
                            return next();
                        });
                    } else s |= 1;
                } catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    })(env);
}
function iteratorResource(iterable) {
    const iterator = iterable[Symbol.asyncIterator]();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeAsyncResource"])(iterator, async ()=>{
        await iterator.return?.();
    });
}
/**
 * Derives a new {@link AsyncGenerator} based on {@link iterable}, that automatically stops after the specified duration.
 */ async function* withMaxDuration(iterable, opts) {
    const env = {
        stack: [],
        error: void 0,
        hasError: false
    };
    try {
        const iterator = _ts_add_disposable_resource(env, iteratorResource(iterable), true);
        ;
        const timer = _ts_add_disposable_resource(env, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timerResource"])(opts.maxDurationMs), false);
        ;
        const timerPromise = timer.start();
        // declaration outside the loop for garbage collection reasons
        let result;
        while(true){
            result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$unpromise$2f$unpromise$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Unpromise"].race([
                iterator.next(),
                timerPromise
            ]);
            if (result === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["disposablePromiseTimerResult"]) {
                // cancelled due to timeout
                const res = await iterator.return?.();
                return res?.value;
            }
            if (result.done) {
                return result;
            }
            yield result.value;
            // free up reference for garbage collection
            result = null;
        }
    } catch (e) {
        env.error = e;
        env.hasError = true;
    } finally{
        const result = _ts_dispose_resources(env);
        if (result) await result;
    }
}
/**
 * Derives a new {@link AsyncGenerator} based of {@link iterable}, that yields its first
 * {@link count} values. Then, a grace period of {@link gracePeriodMs} is started in which further
 * values may still come through. After this period, the generator stops.
 */ async function* takeWithGrace(iterable, opts) {
    const env = {
        stack: [],
        error: void 0,
        hasError: false
    };
    try {
        const iterator = _ts_add_disposable_resource(env, iteratorResource(iterable), true);
        ;
        // declaration outside the loop for garbage collection reasons
        let result;
        const timer = _ts_add_disposable_resource(env, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timerResource"])(opts.gracePeriodMs), false);
        ;
        let count = opts.count;
        let timerPromise = new Promise(()=>{
        // never resolves
        });
        while(true){
            result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$unpromise$2f$unpromise$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Unpromise"].race([
                iterator.next(),
                timerPromise
            ]);
            if (result === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["disposablePromiseTimerResult"]) {
                // cancelled
                const res = await iterator.return?.();
                return res?.value;
            }
            if (result.done) {
                return result.value;
            }
            yield result.value;
            if (--count === 0) {
                timerPromise = timer.start();
            }
            // free up reference for garbage collection
            result = null;
        }
    } catch (e) {
        env.error = e;
        env.hasError = true;
    } finally{
        const result = _ts_dispose_resources(env);
        if (result) await result;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/createDeferred.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-non-null-assertion */ __turbopack_esm__({
    "createDeferred": (()=>createDeferred)
});
function createDeferred() {
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        promise,
        resolve: resolve,
        reject: reject
    };
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/readableStreamFrom.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * Creates a ReadableStream from an AsyncIterable.
 *
 * @param iterable - The source AsyncIterable to stream from
 * @returns A ReadableStream that yields values from the AsyncIterable
 */ __turbopack_esm__({
    "readableStreamFrom": (()=>readableStreamFrom)
});
function readableStreamFrom(iterable) {
    const iterator = iterable[Symbol.asyncIterator]();
    return new ReadableStream({
        async cancel () {
            await iterator.return?.();
        },
        async pull (controller) {
            const result = await iterator.next();
            if (result.done) {
                controller.close();
                return;
            }
            controller.enqueue(result.value);
        }
    });
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/jsonl.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "isPromise": (()=>isPromise),
    "jsonlStreamConsumer": (()=>jsonlStreamConsumer),
    "jsonlStreamProducer": (()=>jsonlStreamProducer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$unpromise$2f$unpromise$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/vendor/unpromise/unpromise.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$asyncIterable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/asyncIterable.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$createDeferred$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/createDeferred.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/disposable.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$readableStreamFrom$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/readableStreamFrom.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _ts_add_disposable_resource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
function _ts_dispose_resources(env) {
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    return (_ts_dispose_resources = function _ts_dispose_resources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                            fail(e);
                            return next();
                        });
                    } else s |= 1;
                } catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    })(env);
}
// ---------- types
// ---------- types
const CHUNK_VALUE_TYPE_PROMISE = 0;
const CHUNK_VALUE_TYPE_ASYNC_ITERABLE = 1;
const PROMISE_STATUS_FULFILLED = 0;
const PROMISE_STATUS_REJECTED = 1;
const ASYNC_ITERABLE_STATUS_RETURN = 0;
const ASYNC_ITERABLE_STATUS_YIELD = 1;
const ASYNC_ITERABLE_STATUS_ERROR = 2;
function isPromise(value) {
    return ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(value) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isFunction"])(value)) && typeof value?.['then'] === 'function' && typeof value?.['catch'] === 'function';
}
class MaxDepthError extends Error {
    constructor(path){
        super('Max depth reached at path: ' + path.join('.')), _define_property(this, "path", void 0), this.path = path;
    }
}
async function* createBatchStreamProducer(opts) {
    const env = {
        stack: [],
        error: void 0,
        hasError: false
    };
    try {
        const { data } = opts;
        let counter = 0;
        const placeholder = 0;
        const queue = _ts_add_disposable_resource(env, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeAsyncResource"])(new Set(), async ()=>{
            await Promise.all(Array.from(queue).map((it)=>it.iterator.return?.()));
        }), true);
        ;
        function registerAsync(callback) {
            const idx = counter++;
            const iterator = callback(idx)[Symbol.asyncIterator]();
            const nextPromise = iterator.next();
            nextPromise.catch(()=>{
            // prevent unhandled promise rejection
            });
            queue.add({
                iterator,
                nextPromise
            });
            return idx;
        }
        function encodePromise(promise, path) {
            return registerAsync(async function*(idx) {
                const error = checkMaxDepth(path);
                if (error) {
                    // Catch any errors from the original promise to ensure they're reported
                    promise.catch((cause)=>{
                        opts.onError?.({
                            error: cause,
                            path
                        });
                    });
                    // Replace the promise with a rejected one containing the max depth error
                    promise = Promise.reject(error);
                }
                try {
                    const next = await promise;
                    return [
                        idx,
                        PROMISE_STATUS_FULFILLED,
                        encode(next, path)
                    ];
                } catch (cause) {
                    opts.onError?.({
                        error: cause,
                        path
                    });
                    return [
                        idx,
                        PROMISE_STATUS_REJECTED,
                        opts.formatError?.({
                            error: cause,
                            path
                        })
                    ];
                }
            });
        }
        function encodeAsyncIterable(iterable, path) {
            return registerAsync(async function*(idx) {
                const env = {
                    stack: [],
                    error: void 0,
                    hasError: false
                };
                try {
                    const error = checkMaxDepth(path);
                    if (error) {
                        throw error;
                    }
                    const iterator = _ts_add_disposable_resource(env, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$asyncIterable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iteratorResource"])(iterable), true);
                    ;
                    try {
                        while(true){
                            const next = await iterator.next();
                            if (next.done) {
                                return [
                                    idx,
                                    ASYNC_ITERABLE_STATUS_RETURN,
                                    encode(next.value, path)
                                ];
                            }
                            yield [
                                idx,
                                ASYNC_ITERABLE_STATUS_YIELD,
                                encode(next.value, path)
                            ];
                        }
                    } catch (cause) {
                        opts.onError?.({
                            error: cause,
                            path
                        });
                        return [
                            idx,
                            ASYNC_ITERABLE_STATUS_ERROR,
                            opts.formatError?.({
                                error: cause,
                                path
                            })
                        ];
                    }
                } catch (e) {
                    env.error = e;
                    env.hasError = true;
                } finally{
                    const result = _ts_dispose_resources(env);
                    if (result) await result;
                }
            });
        }
        function checkMaxDepth(path) {
            if (opts.maxDepth && path.length > opts.maxDepth) {
                return new MaxDepthError(path);
            }
            return null;
        }
        function encodeAsync(value, path) {
            if (isPromise(value)) {
                return [
                    CHUNK_VALUE_TYPE_PROMISE,
                    encodePromise(value, path)
                ];
            }
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAsyncIterable"])(value)) {
                if (opts.maxDepth && path.length >= opts.maxDepth) {
                    throw new Error('Max depth reached');
                }
                return [
                    CHUNK_VALUE_TYPE_ASYNC_ITERABLE,
                    encodeAsyncIterable(value, path)
                ];
            }
            return null;
        }
        function encode(value, path) {
            if (value === undefined) {
                return [
                    []
                ];
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(value)) {
                return [
                    [
                        value
                    ]
                ];
            }
            const reg = encodeAsync(value, path);
            if (reg) {
                return [
                    [
                        placeholder
                    ],
                    [
                        null,
                        ...reg
                    ]
                ];
            }
            const newObj = {};
            const asyncValues = [];
            for (const [key, item] of Object.entries(value)){
                const transformed = encodeAsync(item, [
                    ...path,
                    key
                ]);
                if (!transformed) {
                    newObj[key] = item;
                    continue;
                }
                newObj[key] = placeholder;
                asyncValues.push([
                    key,
                    ...transformed
                ]);
            }
            return [
                [
                    newObj
                ],
                ...asyncValues
            ];
        }
        const newHead = {};
        for (const [key, item] of Object.entries(data)){
            newHead[key] = encode(item, [
                key
            ]);
        }
        yield newHead;
        // Process all async iterables in parallel by racing their next values
        while(queue.size > 0){
            // Race all iterators to get the next value from any of them
            const [entry, res] = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$unpromise$2f$unpromise$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Unpromise"].race(Array.from(queue).map(async (it)=>[
                    it,
                    await it.nextPromise
                ]));
            yield res.value;
            // Remove current iterator and re-add if not done
            queue.delete(entry);
            if (!res.done) {
                entry.nextPromise = entry.iterator.next();
                queue.add(entry);
            }
        }
    } catch (e) {
        env.error = e;
        env.hasError = true;
    } finally{
        const result = _ts_dispose_resources(env);
        if (result) await result;
    }
}
/**
 * JSON Lines stream producer
 * @see https://jsonlines.org/
 */ function jsonlStreamProducer(opts) {
    let stream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$readableStreamFrom$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readableStreamFrom"])(createBatchStreamProducer(opts));
    const { serialize } = opts;
    if (serialize) {
        stream = stream.pipeThrough(new TransformStream({
            transform (chunk, controller) {
                controller.enqueue(serialize(chunk));
            }
        }));
    }
    return stream.pipeThrough(new TransformStream({
        transform (chunk, controller) {
            controller.enqueue(JSON.stringify(chunk) + '\n');
        }
    })).pipeThrough(new TextEncoderStream());
}
class StreamInterruptedError extends Error {
    constructor(cause){
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore https://github.com/tc39/proposal-error-cause
        super('Invalid response or stream interrupted', {
            cause
        });
    }
}
class AsyncError extends Error {
    constructor(data){
        super('Received error from server'), _define_property(this, "data", void 0), this.data = data;
    }
}
const nodeJsStreamToReaderEsque = (source)=>{
    return {
        getReader () {
            const stream = new ReadableStream({
                start (controller) {
                    source.on('data', (chunk)=>{
                        controller.enqueue(chunk);
                    });
                    source.on('end', ()=>{
                        controller.close();
                    });
                    source.on('error', (error)=>{
                        controller.error(error);
                    });
                }
            });
            return stream.getReader();
        }
    };
};
function createLineAccumulator(from) {
    const reader = 'getReader' in from ? from.getReader() : nodeJsStreamToReaderEsque(from).getReader();
    let lineAggregate = '';
    return new ReadableStream({
        async pull (controller) {
            const { done, value } = await reader.read();
            if (done) {
                controller.close();
            } else {
                controller.enqueue(value);
            }
        },
        cancel () {
            return reader.cancel();
        }
    }).pipeThrough(new TextDecoderStream()).pipeThrough(new TransformStream({
        transform (chunk, controller) {
            lineAggregate += chunk;
            const parts = lineAggregate.split('\n');
            lineAggregate = parts.pop() ?? '';
            for (const part of parts){
                controller.enqueue(part);
            }
        }
    }));
}
function createConsumerStream(from) {
    const stream = createLineAccumulator(from);
    let sentHead = false;
    return stream.pipeThrough(new TransformStream({
        transform (line, controller) {
            if (!sentHead) {
                const head = JSON.parse(line);
                controller.enqueue(head);
                sentHead = true;
            } else {
                const chunk = JSON.parse(line);
                controller.enqueue(chunk);
            }
        }
    }));
}
/**
 * Creates a handler for managing stream controllers and their lifecycle
 */ function createStreamsManager(abortController) {
    const controllerMap = new Map();
    /**
   * Checks if there are no pending controllers or deferred promises
   */ function isEmpty() {
        return Array.from(controllerMap.values()).every((c)=>c.closed);
    }
    /**
   * Creates a stream controller
   */ function createStreamController() {
        let originalController;
        const stream = new ReadableStream({
            start (controller) {
                originalController = controller;
            }
        });
        const streamController = {
            enqueue: (v)=>originalController.enqueue(v),
            close: ()=>{
                originalController.close();
                // mark as closed and remove methods
                Object.assign(streamController, {
                    closed: true,
                    close: ()=>{
                    // noop
                    },
                    enqueue: ()=>{
                    // noop
                    },
                    getReaderResource: null
                });
                if (isEmpty()) {
                    abortController.abort();
                }
            },
            closed: false,
            getReaderResource: ()=>{
                const reader = stream.getReader();
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeResource"])(reader, ()=>{
                    reader.releaseLock();
                    streamController.close();
                });
            }
        };
        return streamController;
    }
    /**
   * Gets or creates a stream controller
   */ function getOrCreate(chunkId) {
        let c = controllerMap.get(chunkId);
        if (!c) {
            c = createStreamController();
            controllerMap.set(chunkId, c);
        }
        return c;
    }
    /**
   * Cancels all pending controllers and rejects deferred promises
   */ function cancelAll(reason) {
        const error = new StreamInterruptedError(reason);
        for (const controller of controllerMap.values()){
            controller.enqueue(error);
            controller.close();
        }
    }
    return {
        getOrCreate,
        isEmpty,
        cancelAll
    };
}
/**
 * JSON Lines stream consumer
 * @see https://jsonlines.org/
 */ async function jsonlStreamConsumer(opts) {
    const { deserialize = (v)=>v } = opts;
    let source = createConsumerStream(opts.from);
    if (deserialize) {
        source = source.pipeThrough(new TransformStream({
            transform (chunk, controller) {
                controller.enqueue(deserialize(chunk));
            }
        }));
    }
    let headDeferred = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$createDeferred$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDeferred"])();
    const streamManager = createStreamsManager(opts.abortController);
    function decodeChunkDefinition(value) {
        const [_path, type, chunkId] = value;
        const controller = streamManager.getOrCreate(chunkId);
        switch(type){
            case CHUNK_VALUE_TYPE_PROMISE:
                {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["run"])(async ()=>{
                        const env = {
                            stack: [],
                            error: void 0,
                            hasError: false
                        };
                        try {
                            const reader = _ts_add_disposable_resource(env, controller.getReaderResource(), false);
                            ;
                            const { value } = await reader.read();
                            if (value instanceof StreamInterruptedError) {
                                throw value;
                            }
                            const [_chunkId, status, data] = value;
                            switch(status){
                                case PROMISE_STATUS_FULFILLED:
                                    return decode(data);
                                case PROMISE_STATUS_REJECTED:
                                    throw opts.formatError?.({
                                        error: data
                                    }) ?? new AsyncError(data);
                            }
                        } catch (e) {
                            env.error = e;
                            env.hasError = true;
                        } finally{
                            _ts_dispose_resources(env);
                        }
                    });
                }
            case CHUNK_VALUE_TYPE_ASYNC_ITERABLE:
                {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["run"])(async function*() {
                        const env = {
                            stack: [],
                            error: void 0,
                            hasError: false
                        };
                        try {
                            const reader = _ts_add_disposable_resource(env, controller.getReaderResource(), false);
                            ;
                            while(true){
                                const { value } = await reader.read();
                                if (value instanceof StreamInterruptedError) {
                                    throw value;
                                }
                                const [_chunkId, status, data] = value;
                                switch(status){
                                    case ASYNC_ITERABLE_STATUS_YIELD:
                                        yield decode(data);
                                        break;
                                    case ASYNC_ITERABLE_STATUS_RETURN:
                                        return decode(data);
                                    case ASYNC_ITERABLE_STATUS_ERROR:
                                        throw opts.formatError?.({
                                            error: data
                                        }) ?? new AsyncError(data);
                                }
                            }
                        } catch (e) {
                            env.error = e;
                            env.hasError = true;
                        } finally{
                            _ts_dispose_resources(env);
                        }
                    });
                }
        }
    }
    function decode(value) {
        const [[data], ...asyncProps] = value;
        for (const value of asyncProps){
            const [key] = value;
            const decoded = decodeChunkDefinition(value);
            if (key === null) {
                return decoded;
            }
            data[key] = decoded;
        }
        return data;
    }
    const closeOrAbort = (reason)=>{
        const error = new StreamInterruptedError(reason);
        headDeferred?.reject(error);
        streamManager.cancelAll(error);
    };
    source.pipeTo(new WritableStream({
        write (chunkOrHead) {
            if (headDeferred) {
                const head = chunkOrHead;
                for (const [key, value] of Object.entries(chunkOrHead)){
                    const parsed = decode(value);
                    head[key] = parsed;
                }
                headDeferred.resolve(head);
                headDeferred = null;
                return;
            }
            const chunk = chunkOrHead;
            const [idx] = chunk;
            const controller = streamManager.getOrCreate(idx);
            controller.enqueue(chunk);
        },
        close: closeOrAbort,
        abort: closeOrAbort
    }), {
        signal: opts.abortController.signal
    }).catch((error)=>{
        opts.onError?.({
            error
        });
        closeOrAbort(error);
    });
    return [
        await headDeferred.promise,
        streamManager
    ];
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/isAbortError.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "isAbortError": (()=>isAbortError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-route] (ecmascript)");
;
function isAbortError(error) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(error) && error['name'] === 'AbortError';
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/tracked.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "isTrackedEnvelope": (()=>isTrackedEnvelope),
    "sse": (()=>sse),
    "tracked": (()=>tracked)
});
const trackedSymbol = Symbol();
/**
 * Produce a typed server-sent event message
 * @deprecated use `tracked(id, data)` instead
 */ function sse(event) {
    return tracked(event.id, event.data);
}
function isTrackedEnvelope(value) {
    return Array.isArray(value) && value[2] === trackedSymbol;
}
/**
 * Automatically track an event so that it can be resumed from a given id if the connection is lost
 */ function tracked(id, data) {
    if (id === '') {
        // This limitation could be removed by using different SSE event names / channels for tracked event and non-tracked event
        throw new Error('`id` must not be an empty string as empty string is the same as not setting the id at all');
    }
    return [
        id,
        data,
        trackedSymbol
    ];
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/withPing.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "PING_SYM": (()=>PING_SYM),
    "withPing": (()=>withPing)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$unpromise$2f$unpromise$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/vendor/unpromise/unpromise.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$asyncIterable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/asyncIterable.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/timerResource.mjs [app-route] (ecmascript)");
;
;
;
function _ts_add_disposable_resource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
function _ts_dispose_resources(env) {
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    return (_ts_dispose_resources = function _ts_dispose_resources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                            fail(e);
                            return next();
                        });
                    } else s |= 1;
                } catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    })(env);
}
const PING_SYM = Symbol('ping');
/**
 * Derives a new {@link AsyncGenerator} based of {@link iterable}, that yields {@link PING_SYM}
 * whenever no value has been yielded for {@link pingIntervalMs}.
 */ async function* withPing(iterable, pingIntervalMs) {
    const env = {
        stack: [],
        error: void 0,
        hasError: false
    };
    try {
        const iterator = _ts_add_disposable_resource(env, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$asyncIterable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["iteratorResource"])(iterable), true);
        ;
        // declaration outside the loop for garbage collection reasons
        let result;
        let nextPromise = iterator.next();
        while(true){
            const env = {
                stack: [],
                error: void 0,
                hasError: false
            };
            try {
                const pingPromise = _ts_add_disposable_resource(env, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timerResource"])(pingIntervalMs), false);
                ;
                result = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$unpromise$2f$unpromise$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Unpromise"].race([
                    nextPromise,
                    pingPromise.start()
                ]);
                if (result === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["disposablePromiseTimerResult"]) {
                    // cancelled
                    yield PING_SYM;
                    continue;
                }
                if (result.done) {
                    return result.value;
                }
                nextPromise = iterator.next();
                yield result.value;
                // free up reference for garbage collection
                result = null;
            } catch (e) {
                env.error = e;
                env.hasError = true;
            } finally{
                _ts_dispose_resources(env);
            }
        }
    } catch (e) {
        env.error = e;
        env.hasError = true;
    } finally{
        const result = _ts_dispose_resources(env);
        if (result) await result;
    }
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/sse.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "sseHeaders": (()=>sseHeaders),
    "sseStreamConsumer": (()=>sseStreamConsumer),
    "sseStreamProducer": (()=>sseStreamProducer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$unpromise$2f$unpromise$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/vendor/unpromise/unpromise.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$isAbortError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/isAbortError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$tracked$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/tracked.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$asyncIterable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/asyncIterable.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/disposable.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$readableStreamFrom$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/readableStreamFrom.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/timerResource.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$withPing$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/withPing.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
function _ts_add_disposable_resource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
function _ts_dispose_resources(env) {
    var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    return (_ts_dispose_resources = function _ts_dispose_resources(env) {
        function fail(e) {
            env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
            env.hasError = true;
        }
        var r, s = 0;
        function next() {
            while(r = env.stack.pop()){
                try {
                    if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                    if (r.dispose) {
                        var result = r.dispose.call(r.value);
                        if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                            fail(e);
                            return next();
                        });
                    } else s |= 1;
                } catch (e) {
                    fail(e);
                }
            }
            if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
            if (env.hasError) throw env.error;
        }
        return next();
    })(env);
}
const PING_EVENT = 'ping';
const SERIALIZED_ERROR_EVENT = 'serialized-error';
const CONNECTED_EVENT = 'connected';
/**
 *
 * @see https://html.spec.whatwg.org/multipage/server-sent-events.html
 */ function sseStreamProducer(opts) {
    const { serialize = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["identity"] } = opts;
    const ping = {
        enabled: opts.ping?.enabled ?? false,
        intervalMs: opts.ping?.intervalMs ?? 1000
    };
    const client = opts.client ?? {};
    if (ping.enabled && client.reconnectAfterInactivityMs && ping.intervalMs > client.reconnectAfterInactivityMs) {
        throw new Error(`Ping interval must be less than client reconnect interval to prevent unnecessary reconnection - ping.intervalMs: ${ping.intervalMs} client.reconnectAfterInactivityMs: ${client.reconnectAfterInactivityMs}`);
    }
    async function* generator() {
        yield {
            event: CONNECTED_EVENT,
            data: JSON.stringify(client)
        };
        let iterable = opts.data;
        if (opts.emitAndEndImmediately) {
            iterable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$asyncIterable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["takeWithGrace"])(iterable, {
                count: 1,
                gracePeriodMs: 1
            });
        }
        if (opts.maxDurationMs && opts.maxDurationMs > 0 && opts.maxDurationMs !== Infinity) {
            iterable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$asyncIterable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withMaxDuration"])(iterable, {
                maxDurationMs: opts.maxDurationMs
            });
        }
        if (ping.enabled && ping.intervalMs !== Infinity && ping.intervalMs > 0) {
            iterable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$withPing$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["withPing"])(iterable, ping.intervalMs);
        }
        // We need those declarations outside the loop for garbage collection reasons. If they were
        // declared inside, they would not be freed until the next value is present.
        let value;
        let chunk;
        for await (value of iterable){
            if (value === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$withPing$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PING_SYM"]) {
                yield {
                    event: PING_EVENT,
                    data: ''
                };
                continue;
            }
            chunk = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$tracked$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isTrackedEnvelope"])(value) ? {
                id: value[0],
                data: value[1]
            } : {
                data: value
            };
            chunk.data = JSON.stringify(serialize(chunk.data));
            yield chunk;
            // free up references for garbage collection
            value = null;
            chunk = null;
        }
    }
    async function* generatorWithErrorHandling() {
        try {
            yield* generator();
        } catch (cause) {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$isAbortError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAbortError"])(cause)) {
                // ignore abort errors, send any other errors
                return;
            }
            // `err` must be caused by `opts.data`, `JSON.stringify` or `serialize`.
            // So, a user error in any case.
            const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTRPCErrorFromUnknown"])(cause);
            const data = opts.formatError?.({
                error
            }) ?? null;
            yield {
                event: SERIALIZED_ERROR_EVENT,
                data: JSON.stringify(serialize(data))
            };
        }
    }
    const stream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$readableStreamFrom$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readableStreamFrom"])(generatorWithErrorHandling());
    return stream.pipeThrough(new TransformStream({
        transform (chunk, controller) {
            if ('event' in chunk) {
                controller.enqueue(`event: ${chunk.event}\n`);
            }
            if ('data' in chunk) {
                controller.enqueue(`data: ${chunk.data}\n`);
            }
            if ('id' in chunk) {
                controller.enqueue(`id: ${chunk.id}\n`);
            }
            if ('comment' in chunk) {
                controller.enqueue(`: ${chunk.comment}\n`);
            }
            controller.enqueue('\n\n');
        }
    }));
}
async function withTimeout(opts) {
    const env = {
        stack: [],
        error: void 0,
        hasError: false
    };
    try {
        const timeoutPromise = _ts_add_disposable_resource(env, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["timerResource"])(opts.timeoutMs), false);
        ;
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$unpromise$2f$unpromise$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Unpromise"].race([
            opts.promise,
            timeoutPromise.start()
        ]);
        if (res === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$timerResource$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["disposablePromiseTimerResult"]) {
            return await opts.onTimeout();
        }
        return res;
    } catch (e) {
        env.error = e;
        env.hasError = true;
    } finally{
        _ts_dispose_resources(env);
    }
}
/**
 * @see https://html.spec.whatwg.org/multipage/server-sent-events.html
 */ function sseStreamConsumer(opts) {
    const { deserialize = (v)=>v } = opts;
    let clientOptions = {};
    const signal = opts.signal;
    let _es = null;
    const createStream = ()=>new ReadableStream({
            async start (controller) {
                const [url, init] = await Promise.all([
                    opts.url(),
                    opts.init()
                ]);
                const eventSource = _es = new opts.EventSource(url, init);
                controller.enqueue({
                    type: 'connecting',
                    eventSource: _es,
                    event: null
                });
                eventSource.addEventListener(CONNECTED_EVENT, (_msg)=>{
                    const msg = _msg;
                    const options = JSON.parse(msg.data);
                    clientOptions = options;
                    controller.enqueue({
                        type: 'connected',
                        options,
                        eventSource
                    });
                });
                eventSource.addEventListener(SERIALIZED_ERROR_EVENT, (_msg)=>{
                    const msg = _msg;
                    controller.enqueue({
                        type: 'serialized-error',
                        error: deserialize(JSON.parse(msg.data)),
                        eventSource
                    });
                });
                eventSource.addEventListener(PING_EVENT, ()=>{
                    controller.enqueue({
                        type: 'ping',
                        eventSource
                    });
                });
                eventSource.addEventListener('error', (event)=>{
                    if (eventSource.readyState === EventSource.CLOSED) {
                        controller.error(event);
                    } else {
                        controller.enqueue({
                            type: 'connecting',
                            eventSource,
                            event
                        });
                    }
                });
                eventSource.addEventListener('message', (_msg)=>{
                    const msg = _msg;
                    const chunk = deserialize(JSON.parse(msg.data));
                    const def = {
                        data: chunk
                    };
                    if (msg.lastEventId) {
                        def.id = msg.lastEventId;
                    }
                    controller.enqueue({
                        type: 'data',
                        data: def,
                        eventSource
                    });
                });
                const onAbort = ()=>{
                    controller.close();
                    eventSource.close();
                };
                if (signal.aborted) {
                    onAbort();
                } else {
                    signal.addEventListener('abort', onAbort);
                }
            },
            cancel () {
                _es?.close();
            }
        });
    const getStreamResource = ()=>{
        let stream = createStream();
        let reader = stream.getReader();
        async function dispose() {
            await reader.cancel();
            _es = null;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeAsyncResource"])({
            read () {
                return reader.read();
            },
            async recreate () {
                await dispose();
                stream = createStream();
                reader = stream.getReader();
            }
        }, dispose);
    };
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["run"])(async function*() {
        const env = {
            stack: [],
            error: void 0,
            hasError: false
        };
        try {
            const stream = _ts_add_disposable_resource(env, getStreamResource(), true);
            ;
            while(true){
                let promise = stream.read();
                const timeoutMs = clientOptions.reconnectAfterInactivityMs;
                if (timeoutMs) {
                    promise = withTimeout({
                        promise,
                        timeoutMs,
                        onTimeout: async ()=>{
                            const res = {
                                value: {
                                    type: 'timeout',
                                    ms: timeoutMs,
                                    eventSource: _es
                                },
                                done: false
                            };
                            // Close and release old reader
                            await stream.recreate();
                            return res;
                        }
                    });
                }
                const result = await promise;
                if (result.done) {
                    return result.value;
                }
                yield result.value;
            }
        } catch (e) {
            env.error = e;
            env.hasError = true;
        } finally{
            const result = _ts_dispose_resources(env);
            if (result) await result;
        }
    });
}
const sseHeaders = {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache, no-transform',
    'X-Accel-Buffering': 'no',
    Connection: 'keep-alive'
};
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/transformer.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "defaultTransformer": (()=>defaultTransformer),
    "getDataTransformer": (()=>getDataTransformer),
    "transformResult": (()=>transformResult),
    "transformTRPCResponse": (()=>transformTRPCResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-route] (ecmascript)");
;
/**
 * @internal
 */ function getDataTransformer(transformer) {
    if ('input' in transformer) {
        return transformer;
    }
    return {
        input: transformer,
        output: transformer
    };
}
/**
 * @internal
 */ const defaultTransformer = {
    input: {
        serialize: (obj)=>obj,
        deserialize: (obj)=>obj
    },
    output: {
        serialize: (obj)=>obj,
        deserialize: (obj)=>obj
    }
};
function transformTRPCResponseItem(config, item) {
    if ('error' in item) {
        return {
            ...item,
            error: config.transformer.output.serialize(item.error)
        };
    }
    if ('data' in item.result) {
        return {
            ...item,
            result: {
                ...item.result,
                data: config.transformer.output.serialize(item.result.data)
            }
        };
    }
    return item;
}
/**
 * Takes a unserialized `TRPCResponse` and serializes it with the router's transformers
 **/ function transformTRPCResponse(config, itemOrItems) {
    return Array.isArray(itemOrItems) ? itemOrItems.map((item)=>transformTRPCResponseItem(config, item)) : transformTRPCResponseItem(config, itemOrItems);
}
// FIXME:
// - the generics here are probably unnecessary
// - the RPC-spec could probably be simplified to combine HTTP + WS
/** @internal */ function transformResultInner(response, transformer) {
    if ('error' in response) {
        const error = transformer.deserialize(response.error);
        return {
            ok: false,
            error: {
                ...response,
                error
            }
        };
    }
    const result = {
        ...response.result,
        ...(!response.result.type || response.result.type === 'data') && {
            type: 'data',
            data: transformer.deserialize(response.result.data)
        }
    };
    return {
        ok: true,
        result
    };
}
class TransformResultError extends Error {
    constructor(){
        super('Unable to transform response from server');
    }
}
/**
 * Transforms and validates that the result is a valid TRPCResponse
 * @internal
 */ function transformResult(response, transformer) {
    let result;
    try {
        // Use the data transformers on the JSON-response
        result = transformResultInner(response, transformer);
    } catch  {
        throw new TransformResultError();
    }
    // check that output of the transformers is a valid TRPCResponse
    if (!result.ok && (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(result.error.error) || typeof result.error.error['code'] !== 'number')) {
        throw new TransformResultError();
    }
    if (result.ok && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(result.result)) {
        throw new TransformResultError();
    }
    return result;
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/parseConnectionParams.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "parseConnectionParamsFromString": (()=>parseConnectionParamsFromString),
    "parseConnectionParamsFromUnknown": (()=>parseConnectionParamsFromUnknown)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-route] (ecmascript)");
;
;
function parseConnectionParamsFromUnknown(parsed) {
    try {
        if (parsed === null) {
            return null;
        }
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(parsed)) {
            throw new Error('Expected object');
        }
        const nonStringValues = Object.entries(parsed).filter(([_key, value])=>typeof value !== 'string');
        if (nonStringValues.length > 0) {
            throw new Error(`Expected connectionParams to be string values. Got ${nonStringValues.map(([key, value])=>`${key}: ${typeof value}`).join(', ')}`);
        }
        return parsed;
    } catch (cause) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: 'PARSE_ERROR',
            message: 'Invalid connection params shape',
            cause
        });
    }
}
function parseConnectionParamsFromString(str) {
    let parsed;
    try {
        parsed = JSON.parse(str);
    } catch (cause) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
            code: 'PARSE_ERROR',
            message: 'Not JSON-parsable query params',
            cause
        });
    }
    return parseConnectionParamsFromUnknown(parsed);
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/contentType.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getRequestInfo": (()=>getRequestInfo)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$parseConnectionParams$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/parseConnectionParams.mjs [app-route] (ecmascript)");
;
;
;
/**
 * Memoize a function that takes no arguments
 * @internal
 */ function memo(fn) {
    let promise = null;
    let value = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unsetMarker"];
    return {
        /**
     * Lazily read the value
     */ read: async ()=>{
            if (value !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unsetMarker"]) {
                return value;
            }
            if (promise === null) {
                // dedupes promises and catches errors
                promise = fn().catch((cause)=>{
                    if (cause instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]) {
                        throw cause;
                    }
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                        code: 'BAD_REQUEST',
                        message: cause instanceof Error ? cause.message : 'Invalid input',
                        cause
                    });
                });
            }
            value = await promise;
            promise = null;
            return value;
        },
        /**
     * Get an already stored result
     */ result: ()=>{
            return value !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["unsetMarker"] ? value : undefined;
        }
    };
}
const jsonContentTypeHandler = {
    isMatch (req) {
        return !!req.headers.get('content-type')?.startsWith('application/json');
    },
    parse (opts) {
        const { req } = opts;
        const isBatchCall = opts.searchParams.get('batch') === '1';
        const paths = isBatchCall ? opts.path.split(',') : [
            opts.path
        ];
        const getInputs = memo(async ()=>{
            let inputs = undefined;
            if (req.method === 'GET') {
                const queryInput = opts.searchParams.get('input');
                if (queryInput) {
                    inputs = JSON.parse(queryInput);
                }
            } else {
                inputs = await req.json();
            }
            if (inputs === undefined) {
                return {};
            }
            if (!isBatchCall) {
                return {
                    0: opts.router._def._config.transformer.input.deserialize(inputs)
                };
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(inputs)) {
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                    code: 'BAD_REQUEST',
                    message: '"input" needs to be an object when doing a batch call'
                });
            }
            const acc = {};
            for (const index of paths.keys()){
                const input = inputs[index];
                if (input !== undefined) {
                    acc[index] = opts.router._def._config.transformer.input.deserialize(input);
                }
            }
            return acc;
        });
        const calls = paths.map((path, index)=>{
            const procedure = opts.router._def.procedures[path] ?? null;
            return {
                path,
                procedure,
                getRawInput: async ()=>{
                    const inputs = await getInputs.read();
                    let input = inputs[index];
                    if (procedure?._def.type === 'subscription') {
                        const lastEventId = opts.headers.get('last-event-id') ?? opts.searchParams.get('lastEventId') ?? opts.searchParams.get('Last-Event-Id');
                        if (lastEventId) {
                            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(input)) {
                                input = {
                                    ...input,
                                    lastEventId: lastEventId
                                };
                            } else {
                                input ?? (input = {
                                    lastEventId: lastEventId
                                });
                            }
                        }
                    }
                    return input;
                },
                result: ()=>{
                    return getInputs.result()?.[index];
                }
            };
        });
        const types = new Set(calls.map((call)=>call.procedure?._def.type).filter(Boolean));
        /* istanbul ignore if -- @preserve */ if (types.size > 1) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: 'BAD_REQUEST',
                message: `Cannot mix procedure types in call: ${Array.from(types).join(', ')}`
            });
        }
        const type = types.values().next().value ?? 'unknown';
        const connectionParamsStr = opts.searchParams.get('connectionParams');
        const info = {
            isBatchCall,
            accept: req.headers.get('trpc-accept'),
            calls,
            type,
            connectionParams: connectionParamsStr === null ? null : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$parseConnectionParams$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["parseConnectionParamsFromString"])(connectionParamsStr),
            signal: req.signal
        };
        return info;
    }
};
const formDataContentTypeHandler = {
    isMatch (req) {
        return !!req.headers.get('content-type')?.startsWith('multipart/form-data');
    },
    parse (opts) {
        const { req } = opts;
        if (req.method !== 'POST') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: 'METHOD_NOT_SUPPORTED',
                message: 'Only POST requests are supported for multipart/form-data requests'
            });
        }
        const getInputs = memo(async ()=>{
            const fd = await req.formData();
            return fd;
        });
        return {
            accept: null,
            calls: [
                {
                    path: opts.path,
                    getRawInput: getInputs.read,
                    result: getInputs.result,
                    procedure: opts.router._def.procedures[opts.path] ?? null
                }
            ],
            isBatchCall: false,
            type: 'mutation',
            connectionParams: null,
            signal: req.signal
        };
    }
};
const octetStreamContentTypeHandler = {
    isMatch (req) {
        return !!req.headers.get('content-type')?.startsWith('application/octet-stream');
    },
    parse (opts) {
        const { req } = opts;
        if (req.method !== 'POST') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: 'METHOD_NOT_SUPPORTED',
                message: 'Only POST requests are supported for application/octet-stream requests'
            });
        }
        const getInputs = memo(async ()=>{
            return req.body;
        });
        return {
            calls: [
                {
                    path: opts.path,
                    getRawInput: getInputs.read,
                    result: getInputs.result,
                    procedure: opts.router._def.procedures[opts.path] ?? null
                }
            ],
            isBatchCall: false,
            accept: null,
            type: 'mutation',
            connectionParams: null,
            signal: req.signal
        };
    }
};
const handlers = [
    jsonContentTypeHandler,
    formDataContentTypeHandler,
    octetStreamContentTypeHandler
];
function getContentTypeHandler(req) {
    const handler = handlers.find((handler)=>handler.isMatch(req));
    if (handler) {
        return handler;
    }
    if (!handler && req.method === 'GET') {
        // fallback to JSON for get requests so GET-requests can be opened in browser easily
        return jsonContentTypeHandler;
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
        code: 'UNSUPPORTED_MEDIA_TYPE',
        message: req.headers.has('content-type') ? `Unsupported content-type "${req.headers.get('content-type')}` : 'Missing content-type header'
    });
}
function getRequestInfo(opts) {
    const handler = getContentTypeHandler(opts.req);
    return handler.parse(opts);
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/resolveResponse.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "resolveResponse": (()=>resolveResponse)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/observable/observable.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$getErrorShape$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/getErrorShape.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/error/TRPCError.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$jsonl$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/jsonl.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$sse$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/sse.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/transformer.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$contentType$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/contentType.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$getHTTPStatusCode$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/getHTTPStatusCode.mjs [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
;
function errorToAsyncIterable(err) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["run"])(async function*() {
        throw err;
    });
}
const TYPE_ACCEPTED_METHOD_MAP = {
    mutation: [
        'POST'
    ],
    query: [
        'GET'
    ],
    subscription: [
        'GET'
    ]
};
const TYPE_ACCEPTED_METHOD_MAP_WITH_METHOD_OVERRIDE = {
    // never allow GET to do a mutation
    mutation: [
        'POST'
    ],
    query: [
        'GET',
        'POST'
    ],
    subscription: [
        'GET',
        'POST'
    ]
};
function initResponse(initOpts) {
    const { ctx, info, responseMeta, untransformedJSON, errors = [], headers } = initOpts;
    let status = untransformedJSON ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$getHTTPStatusCode$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getHTTPStatusCode"])(untransformedJSON) : 200;
    const eagerGeneration = !untransformedJSON;
    const data = eagerGeneration ? [] : Array.isArray(untransformedJSON) ? untransformedJSON : [
        untransformedJSON
    ];
    const meta = responseMeta?.({
        ctx,
        info,
        paths: info?.calls.map((call)=>call.path),
        data,
        errors,
        eagerGeneration,
        type: info?.calls.find((call)=>call.procedure?._def.type)?.procedure?._def.type ?? 'unknown'
    }) ?? {};
    if (meta.headers) {
        if (meta.headers instanceof Headers) {
            for (const [key, value] of meta.headers.entries()){
                headers.append(key, value);
            }
        } else {
            /**
       * @deprecated, delete in v12
       */ for (const [key, value] of Object.entries(meta.headers)){
                if (Array.isArray(value)) {
                    for (const v of value){
                        headers.append(key, v);
                    }
                } else if (typeof value === 'string') {
                    headers.set(key, value);
                }
            }
        }
    }
    if (meta.status) {
        status = meta.status;
    }
    return {
        status
    };
}
function caughtErrorToData(cause, errorOpts) {
    const { router, req, onError } = errorOpts.opts;
    const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTRPCErrorFromUnknown"])(cause);
    onError?.({
        error,
        path: errorOpts.path,
        input: errorOpts.input,
        ctx: errorOpts.ctx,
        type: errorOpts.type,
        req
    });
    const untransformedJSON = {
        error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$getErrorShape$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getErrorShape"])({
            config: router._def._config,
            error,
            type: errorOpts.type,
            path: errorOpts.path,
            input: errorOpts.input,
            ctx: errorOpts.ctx
        })
    };
    const transformedJSON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transformTRPCResponse"])(router._def._config, untransformedJSON);
    const body = JSON.stringify(transformedJSON);
    return {
        error,
        untransformedJSON,
        body
    };
}
/**
 * Check if a value is a stream-like object
 * - if it's an async iterable
 * - if it's an object with async iterables or promises
 */ function isDataStream(v) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObject"])(v)) {
        return false;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAsyncIterable"])(v)) {
        return true;
    }
    return Object.values(v).some(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$jsonl$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isPromise"]) || Object.values(v).some(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAsyncIterable"]);
}
async function resolveResponse(opts) {
    const { router, req } = opts;
    const headers = new Headers([
        [
            'vary',
            'trpc-accept'
        ]
    ]);
    const config = router._def._config;
    const url = new URL(req.url);
    if (req.method === 'HEAD') {
        // can be used for lambda warmup
        return new Response(null, {
            status: 204
        });
    }
    const allowBatching = opts.allowBatching ?? opts.batching?.enabled ?? true;
    const allowMethodOverride = (opts.allowMethodOverride ?? false) && req.method === 'POST';
    const infoTuple = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["run"])(()=>{
        try {
            return [
                undefined,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$contentType$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRequestInfo"])({
                    req,
                    path: decodeURIComponent(opts.path),
                    router,
                    searchParams: url.searchParams,
                    headers: opts.req.headers
                })
            ];
        } catch (cause) {
            return [
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTRPCErrorFromUnknown"])(cause),
                undefined
            ];
        }
    });
    const ctxManager = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["run"])(()=>{
        let result = undefined;
        return {
            valueOrUndefined: ()=>{
                if (!result) {
                    return undefined;
                }
                return result[1];
            },
            value: ()=>{
                const [err, ctx] = result;
                if (err) {
                    throw err;
                }
                return ctx;
            },
            create: async (info)=>{
                if (result) {
                    throw new Error('This should only be called once - report a bug in tRPC');
                }
                try {
                    const ctx = await opts.createContext({
                        info
                    });
                    result = [
                        undefined,
                        ctx
                    ];
                } catch (cause) {
                    result = [
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTRPCErrorFromUnknown"])(cause),
                        undefined
                    ];
                }
            }
        };
    });
    const methodMapper = allowMethodOverride ? TYPE_ACCEPTED_METHOD_MAP_WITH_METHOD_OVERRIDE : TYPE_ACCEPTED_METHOD_MAP;
    /**
   * @deprecated
   */ const isStreamCall = req.headers.get('trpc-accept') === 'application/jsonl';
    const experimentalIterablesAndDeferreds = config.iterablesAndDeferreds ?? true;
    const experimentalSSE = config.sse?.enabled ?? true;
    try {
        const [infoError, info] = infoTuple;
        if (infoError) {
            throw infoError;
        }
        if (info.isBatchCall && !allowBatching) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: 'BAD_REQUEST',
                message: `Batching is not enabled on the server`
            });
        }
        /* istanbul ignore if -- @preserve */ if (isStreamCall && !info.isBatchCall) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                message: `Streaming requests must be batched (you can do a batch of 1)`,
                code: 'BAD_REQUEST'
            });
        }
        await ctxManager.create(info);
        const rpcCalls = info.calls.map(async (call)=>{
            const proc = call.procedure;
            try {
                if (opts.error) {
                    throw opts.error;
                }
                if (!proc) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                        code: 'NOT_FOUND',
                        message: `No procedure found on path "${call.path}"`
                    });
                }
                if (!methodMapper[proc._def.type].includes(req.method)) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                        code: 'METHOD_NOT_SUPPORTED',
                        message: `Unsupported ${req.method}-request to ${proc._def.type} procedure at path "${call.path}"`
                    });
                }
                if (proc._def.type === 'subscription') {
                    /* istanbul ignore if -- @preserve */ if (info.isBatchCall) {
                        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                            code: 'BAD_REQUEST',
                            message: `Cannot batch subscription calls`
                        });
                    }
                }
                const data = await proc({
                    path: call.path,
                    getRawInput: call.getRawInput,
                    ctx: ctxManager.value(),
                    type: proc._def.type,
                    signal: opts.req.signal
                });
                return [
                    undefined,
                    {
                        data
                    }
                ];
            } catch (cause) {
                const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTRPCErrorFromUnknown"])(cause);
                const input = call.result();
                opts.onError?.({
                    error,
                    path: call.path,
                    input,
                    ctx: ctxManager.valueOrUndefined(),
                    type: call.procedure?._def.type ?? 'unknown',
                    req: opts.req
                });
                return [
                    error,
                    undefined
                ];
            }
        });
        // ----------- response handlers -----------
        if (!info.isBatchCall) {
            const [call] = info.calls;
            const [error, result] = await rpcCalls[0];
            switch(info.type){
                case 'unknown':
                case 'mutation':
                case 'query':
                    {
                        // httpLink
                        headers.set('content-type', 'application/json');
                        if (isDataStream(result?.data)) {
                            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                                code: 'UNSUPPORTED_MEDIA_TYPE',
                                message: 'Cannot use stream-like response in non-streaming request - use httpBatchStreamLink'
                            });
                        }
                        const res = error ? {
                            error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$getErrorShape$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getErrorShape"])({
                                config,
                                ctx: ctxManager.valueOrUndefined(),
                                error,
                                input: call.result(),
                                path: call.path,
                                type: info.type
                            })
                        } : {
                            result: {
                                data: result.data
                            }
                        };
                        const headResponse = initResponse({
                            ctx: ctxManager.valueOrUndefined(),
                            info,
                            responseMeta: opts.responseMeta,
                            errors: error ? [
                                error
                            ] : [],
                            headers,
                            untransformedJSON: [
                                res
                            ]
                        });
                        return new Response(JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transformTRPCResponse"])(config, res)), {
                            status: headResponse.status,
                            headers
                        });
                    }
                case 'subscription':
                    {
                        // httpSubscriptionLink
                        const iterable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["run"])(()=>{
                            if (error) {
                                return errorToAsyncIterable(error);
                            }
                            if (!experimentalSSE) {
                                return errorToAsyncIterable(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                                    code: 'METHOD_NOT_SUPPORTED',
                                    message: 'Missing experimental flag "sseSubscriptions"'
                                }));
                            }
                            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObservable"])(result.data) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isAsyncIterable"])(result.data)) {
                                return errorToAsyncIterable(new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                                    message: `Subscription ${call.path} did not return an observable or a AsyncGenerator`,
                                    code: 'INTERNAL_SERVER_ERROR'
                                }));
                            }
                            const dataAsIterable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObservable"])(result.data) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["observableToAsyncIterable"])(result.data, opts.req.signal) : result.data;
                            return dataAsIterable;
                        });
                        const stream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$sse$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sseStreamProducer"])({
                            ...config.sse,
                            data: iterable,
                            serialize: (v)=>config.transformer.output.serialize(v),
                            formatError (errorOpts) {
                                const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTRPCErrorFromUnknown"])(errorOpts.error);
                                const input = call?.result();
                                const path = call?.path;
                                const type = call?.procedure?._def.type ?? 'unknown';
                                opts.onError?.({
                                    error,
                                    path,
                                    input,
                                    ctx: ctxManager.valueOrUndefined(),
                                    req: opts.req,
                                    type
                                });
                                const shape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$getErrorShape$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getErrorShape"])({
                                    config,
                                    ctx: ctxManager.valueOrUndefined(),
                                    error,
                                    input,
                                    path,
                                    type
                                });
                                return shape;
                            }
                        });
                        for (const [key, value] of Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$sse$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sseHeaders"])){
                            headers.set(key, value);
                        }
                        const headResponse = initResponse({
                            ctx: ctxManager.valueOrUndefined(),
                            info,
                            responseMeta: opts.responseMeta,
                            errors: [],
                            headers,
                            untransformedJSON: null
                        });
                        return new Response(stream, {
                            headers,
                            status: headResponse.status
                        });
                    }
            }
        }
        // batch response handlers
        if (info.accept === 'application/jsonl') {
            // httpBatchStreamLink
            headers.set('content-type', 'application/json');
            headers.set('transfer-encoding', 'chunked');
            const headResponse = initResponse({
                ctx: ctxManager.valueOrUndefined(),
                info,
                responseMeta: opts.responseMeta,
                errors: [],
                headers,
                untransformedJSON: null
            });
            const stream = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$jsonl$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jsonlStreamProducer"])({
                /**
         * Example structure for `maxDepth: 4`:
         * {
         *   // 1
         *   0: {
         *     // 2
         *     result: {
         *       // 3
         *       data: // 4
         *     }
         *   }
         * }
         */ maxDepth: experimentalIterablesAndDeferreds ? 4 : 3,
                data: rpcCalls.map(async (res)=>{
                    const [error, result] = await res;
                    const call = info.calls[0];
                    if (error) {
                        return {
                            error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$getErrorShape$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getErrorShape"])({
                                config,
                                ctx: ctxManager.valueOrUndefined(),
                                error,
                                input: call.result(),
                                path: call.path,
                                type: call.procedure?._def.type ?? 'unknown'
                            })
                        };
                    }
                    /**
           * Not very pretty, but we need to wrap nested data in promises
           * Our stream producer will only resolve top-level async values or async values that are directly nested in another async value
           */ const iterable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isObservable"])(result.data) ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$observable$2f$observable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["observableToAsyncIterable"])(result.data, opts.req.signal) : Promise.resolve(result.data);
                    return {
                        result: Promise.resolve({
                            data: iterable
                        })
                    };
                }),
                serialize: config.transformer.output.serialize,
                onError: (cause)=>{
                    opts.onError?.({
                        error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTRPCErrorFromUnknown"])(cause),
                        path: undefined,
                        input: undefined,
                        ctx: ctxManager.valueOrUndefined(),
                        req: opts.req,
                        type: info?.type ?? 'unknown'
                    });
                },
                formatError (errorOpts) {
                    const call = info?.calls[errorOpts.path[0]];
                    const error = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTRPCErrorFromUnknown"])(errorOpts.error);
                    const input = call?.result();
                    const path = call?.path;
                    const type = call?.procedure?._def.type ?? 'unknown';
                    // no need to call `onError` here as it will be propagated through the stream itself
                    const shape = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$getErrorShape$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getErrorShape"])({
                        config,
                        ctx: ctxManager.valueOrUndefined(),
                        error,
                        input,
                        path,
                        type
                    });
                    return shape;
                }
            });
            return new Response(stream, {
                headers,
                status: headResponse.status
            });
        }
        // httpBatchLink
        /**
     * Non-streaming response:
     * - await all responses in parallel, blocking on the slowest one
     * - create headers with known response body
     * - return a complete HTTPResponse
     */ headers.set('content-type', 'application/json');
        const results = (await Promise.all(rpcCalls)).map((res)=>{
            const [error, result] = res;
            if (error) {
                return res;
            }
            if (isDataStream(result.data)) {
                return [
                    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$TRPCError$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                        code: 'UNSUPPORTED_MEDIA_TYPE',
                        message: 'Cannot use stream-like response in non-streaming request - use httpBatchStreamLink'
                    }),
                    undefined
                ];
            }
            return res;
        });
        const resultAsRPCResponse = results.map(([error, result], index)=>{
            const call = info.calls[index];
            if (error) {
                return {
                    error: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$error$2f$getErrorShape$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getErrorShape"])({
                        config,
                        ctx: ctxManager.valueOrUndefined(),
                        error,
                        input: call.result(),
                        path: call.path,
                        type: call.procedure?._def.type ?? 'unknown'
                    })
                };
            }
            return {
                result: {
                    data: result.data
                }
            };
        });
        const errors = results.map(([error])=>error).filter(Boolean);
        const headResponse = initResponse({
            ctx: ctxManager.valueOrUndefined(),
            info,
            responseMeta: opts.responseMeta,
            untransformedJSON: resultAsRPCResponse,
            errors,
            headers
        });
        return new Response(JSON.stringify((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$transformer$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["transformTRPCResponse"])(config, resultAsRPCResponse)), {
            status: headResponse.status,
            headers
        });
    } catch (cause) {
        const [_infoError, info] = infoTuple;
        const ctx = ctxManager.valueOrUndefined();
        // we get here if
        // - batching is called when it's not enabled
        // - `createContext()` throws
        // - `router._def._config.transformer.output.serialize()` throws
        // - post body is too large
        // - input deserialization fails
        // - `errorFormatter` return value is malformed
        const { error, untransformedJSON, body } = caughtErrorToData(cause, {
            opts,
            ctx: ctxManager.valueOrUndefined(),
            type: info?.type ?? 'unknown'
        });
        const headResponse = initResponse({
            ctx,
            info,
            responseMeta: opts.responseMeta,
            untransformedJSON,
            errors: [
                error
            ],
            headers
        });
        return new Response(body, {
            status: headResponse.status,
            headers
        });
    }
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/rootConfig.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
/**
 * The default check to see if we're in a server
 */ __turbopack_esm__({
    "isServerDefault": (()=>isServerDefault)
});
const isServerDefault = "undefined" === 'undefined' || 'Deno' in window || // eslint-disable-next-line @typescript-eslint/dot-notation
globalThis.process?.env?.['NODE_ENV'] === 'test' || !!globalThis.process?.env?.['JEST_WORKER_ID'] || !!globalThis.process?.env?.['VITEST_WORKER_ID'];
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/adapters/fetch/fetchRequestHandler.mjs [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "fetchRequestHandler": (()=>fetchRequestHandler)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$resolveResponse$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/http/resolveResponse.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$rootConfig$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/rootConfig.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$vendor$2f$unpromise$2f$unpromise$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/vendor/unpromise/unpromise.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$stream$2f$utils$2f$disposable$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/stream/utils/disposable.mjs [app-route] (ecmascript)");
;
;
;
;
/**
 * If you're making an adapter for tRPC and looking at this file for reference, you should import types and functions from `@trpc/server` and `@trpc/server/http`
 *
 * @example
 * ```ts
 * import type { AnyTRPCRouter } from '@trpc/server'
 * import type { HTTPBaseHandlerOptions } from '@trpc/server/http'
 * ```
 */ // @trpc/server
const trimSlashes = (path)=>{
    path = path.startsWith('/') ? path.slice(1) : path;
    path = path.endsWith('/') ? path.slice(0, -1) : path;
    return path;
};
async function fetchRequestHandler(opts) {
    const resHeaders = new Headers();
    const createContext = async (innerOpts)=>{
        return opts.createContext?.({
            req: opts.req,
            resHeaders,
            ...innerOpts
        });
    };
    const url = new URL(opts.req.url);
    const pathname = trimSlashes(url.pathname);
    const endpoint = trimSlashes(opts.endpoint);
    const path = trimSlashes(pathname.slice(endpoint.length));
    return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$http$2f$resolveResponse$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["resolveResponse"])({
        ...opts,
        req: opts.req,
        createContext,
        path,
        error: null,
        onError (o) {
            opts?.onError?.({
                ...o,
                req: opts.req
            });
        },
        responseMeta (data) {
            const meta = opts.responseMeta?.(data);
            if (meta?.headers) {
                if (meta.headers instanceof Headers) {
                    for (const [key, value] of meta.headers.entries()){
                        resHeaders.append(key, value);
                    }
                } else {
                    /**
           * @deprecated, delete in v12
           */ for (const [key, value] of Object.entries(meta.headers)){
                        if (Array.isArray(value)) {
                            for (const v of value){
                                resHeaders.append(key, v);
                            }
                        } else if (typeof value === 'string') {
                            resHeaders.set(key, value);
                        }
                    }
                }
            }
            return {
                headers: resHeaders,
                status: meta?.status
            };
        }
    });
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/adapters/fetch/index.mjs [app-route] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
}}),
"[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/adapters/fetch/index.mjs [app-route] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$adapters$2f$fetch$2f$fetchRequestHandler$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/adapters/fetch/fetchRequestHandler.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$adapters$2f$fetch$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/adapters/fetch/index.mjs [app-route] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/route-modules/app-route/module.compiled.js [app-route] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            module.exports = __turbopack_require__("[externals]/ [external] (next/dist/compiled/next-server/app-route.runtime.dev.js, cjs)");
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/lib/patch-fetch.js [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "NEXT_PATCH_SYMBOL": (()=>NEXT_PATCH_SYMBOL),
    "createPatchedFetcher": (()=>createPatchedFetcher),
    "patchFetch": (()=>patchFetch),
    "validateRevalidate": (()=>validateRevalidate),
    "validateTags": (()=>validateTags)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/lib/trace/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/lib/trace/tracer.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/constants.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/app-render/dynamic-rendering.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/dynamic-rendering-utils.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$dedupe$2d$fetch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/lib/dedupe-fetch.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/response-cache/index.js [app-route] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/lib/scheduler.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/esm/server/response-cache/types.js [app-route] (ecmascript)");
;
;
;
;
;
;
;
;
const isEdgeRuntime = ("TURBOPACK compile-time value", "nodejs") === 'edge';
const NEXT_PATCH_SYMBOL = Symbol.for('next-patch');
function isFetchPatched() {
    return globalThis[NEXT_PATCH_SYMBOL] === true;
}
function validateRevalidate(revalidateVal, route) {
    try {
        let normalizedRevalidate = undefined;
        if (revalidateVal === false) {
            normalizedRevalidate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INFINITE_CACHE"];
        } else if (typeof revalidateVal === 'number' && !isNaN(revalidateVal) && revalidateVal > -1) {
            normalizedRevalidate = revalidateVal;
        } else if (typeof revalidateVal !== 'undefined') {
            throw new Error(`Invalid revalidate value "${revalidateVal}" on "${route}", must be a non-negative number or false`);
        }
        return normalizedRevalidate;
    } catch (err) {
        // handle client component error from attempting to check revalidate value
        if (err instanceof Error && err.message.includes('Invalid revalidate')) {
            throw err;
        }
        return undefined;
    }
}
function validateTags(tags, description) {
    const validTags = [];
    const invalidTags = [];
    for(let i = 0; i < tags.length; i++){
        const tag = tags[i];
        if (typeof tag !== 'string') {
            invalidTags.push({
                tag,
                reason: 'invalid type, must be a string'
            });
        } else if (tag.length > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAG_MAX_LENGTH"]) {
            invalidTags.push({
                tag,
                reason: `exceeded max length of ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAG_MAX_LENGTH"]}`
            });
        } else {
            validTags.push(tag);
        }
        if (validTags.length > __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NEXT_CACHE_TAG_MAX_ITEMS"]) {
            console.warn(`Warning: exceeded max tag count for ${description}, dropped tags:`, tags.slice(i).join(', '));
            break;
        }
    }
    if (invalidTags.length > 0) {
        console.warn(`Warning: invalid tags passed to ${description}: `);
        for (const { tag, reason } of invalidTags){
            console.log(`tag: "${tag}" ${reason}`);
        }
    }
    return validTags;
}
function trackFetchMetric(workStore, ctx) {
    var _workStore_requestEndedState;
    // If the static generation store is not available, we can't track the fetch
    if (!workStore) return;
    if ((_workStore_requestEndedState = workStore.requestEndedState) == null ? void 0 : _workStore_requestEndedState.ended) return;
    const isDebugBuild = (!!process.env.NEXT_DEBUG_BUILD || process.env.NEXT_SSG_FETCH_METRICS === '1') && workStore.isStaticGeneration;
    const isDevelopment = ("TURBOPACK compile-time value", "development") === 'development';
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    workStore.fetchMetrics ??= [];
    workStore.fetchMetrics.push({
        ...ctx,
        end: performance.timeOrigin + performance.now(),
        idx: workStore.nextFetchId || 0
    });
}
function createPatchedFetcher(originFetch, { workAsyncStorage, workUnitAsyncStorage }) {
    // Create the patched fetch function. We don't set the type here, as it's
    // verified as the return value of this function.
    const patched = async (input, init)=>{
        var _init_method, _init_next;
        let url;
        try {
            url = new URL(input instanceof Request ? input.url : input);
            url.username = '';
            url.password = '';
        } catch  {
            // Error caused by malformed URL should be handled by native fetch
            url = undefined;
        }
        const fetchUrl = (url == null ? void 0 : url.href) ?? '';
        const method = (init == null ? void 0 : (_init_method = init.method) == null ? void 0 : _init_method.toUpperCase()) || 'GET';
        // Do create a new span trace for internal fetches in the
        // non-verbose mode.
        const isInternal = (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next.internal) === true;
        const hideSpan = process.env.NEXT_OTEL_FETCH_DISABLED === '1';
        // We don't track fetch metrics for internal fetches
        // so it's not critical that we have a start time, as it won't be recorded.
        // This is to workaround a flaky issue where performance APIs might
        // not be available and will require follow-up investigation.
        const fetchStart = isInternal ? undefined : performance.timeOrigin + performance.now();
        const workStore = workAsyncStorage.getStore();
        const workUnitStore = workUnitAsyncStorage.getStore();
        // During static generation we track cache reads so we can reason about when they fill
        let cacheSignal = workUnitStore && workUnitStore.type === 'prerender' ? workUnitStore.cacheSignal : null;
        if (cacheSignal) {
            cacheSignal.beginRead();
        }
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getTracer"])().trace(isInternal ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextNodeServerSpan"].internalFetch : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["AppRenderSpan"].fetch, {
            hideSpan,
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$trace$2f$tracer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["SpanKind"].CLIENT,
            spanName: [
                'fetch',
                method,
                fetchUrl
            ].filter(Boolean).join(' '),
            attributes: {
                'http.url': fetchUrl,
                'http.method': method,
                'net.peer.name': url == null ? void 0 : url.hostname,
                'net.peer.port': (url == null ? void 0 : url.port) || undefined
            }
        }, async ()=>{
            var _getRequestMeta;
            // If this is an internal fetch, we should not do any special treatment.
            if (isInternal) {
                return originFetch(input, init);
            }
            // If the workStore is not available, we can't do any
            // special treatment of fetch, therefore fallback to the original
            // fetch implementation.
            if (!workStore) {
                return originFetch(input, init);
            }
            // We should also fallback to the original fetch implementation if we
            // are in draft mode, it does not constitute a static generation.
            if (workStore.isDraftMode) {
                return originFetch(input, init);
            }
            const isRequestInput = input && typeof input === 'object' && typeof input.method === 'string';
            const getRequestMeta = (field)=>{
                // If request input is present but init is not, retrieve from input first.
                const value = init == null ? void 0 : init[field];
                return value || (isRequestInput ? input[field] : null);
            };
            let finalRevalidate = undefined;
            const getNextField = (field)=>{
                var _init_next, _init_next1, _input_next;
                return typeof (init == null ? void 0 : (_init_next = init.next) == null ? void 0 : _init_next[field]) !== 'undefined' ? init == null ? void 0 : (_init_next1 = init.next) == null ? void 0 : _init_next1[field] : isRequestInput ? (_input_next = input.next) == null ? void 0 : _input_next[field] : undefined;
            };
            // RequestInit doesn't keep extra fields e.g. next so it's
            // only available if init is used separate
            let currentFetchRevalidate = getNextField('revalidate');
            const tags = validateTags(getNextField('tags') || [], `fetch ${input.toString()}`);
            const revalidateStore = workUnitStore && (workUnitStore.type === 'cache' || workUnitStore.type === 'prerender' || workUnitStore.type === 'prerender-ppr' || workUnitStore.type === 'prerender-legacy') ? workUnitStore : undefined;
            if (revalidateStore) {
                if (Array.isArray(tags)) {
                    // Collect tags onto parent caches or parent prerenders.
                    const collectedTags = revalidateStore.tags ?? (revalidateStore.tags = []);
                    for (const tag of tags){
                        if (!collectedTags.includes(tag)) {
                            collectedTags.push(tag);
                        }
                    }
                }
            }
            const implicitTags = !workUnitStore || workUnitStore.type === 'unstable-cache' ? [] : workUnitStore.implicitTags;
            // Inside unstable-cache we treat it the same as force-no-store on the
            // page.
            const pageFetchCacheMode = workUnitStore && workUnitStore.type === 'unstable-cache' ? 'force-no-store' : workStore.fetchCache;
            const isUsingNoStore = !!workStore.isUnstableNoStore;
            let currentFetchCacheConfig = getRequestMeta('cache');
            let cacheReason = '';
            let cacheWarning;
            if (typeof currentFetchCacheConfig === 'string' && typeof currentFetchRevalidate !== 'undefined') {
                // If the revalidate value conflicts with the cache value, we should warn the user and unset the conflicting values.
                const isConflictingRevalidate = currentFetchCacheConfig === 'force-cache' && currentFetchRevalidate === 0 || // revalidate: >0 or revalidate: false and cache: no-store
                currentFetchCacheConfig === 'no-store' && (currentFetchRevalidate > 0 || currentFetchRevalidate === false);
                if (isConflictingRevalidate) {
                    cacheWarning = `Specified "cache: ${currentFetchCacheConfig}" and "revalidate: ${currentFetchRevalidate}", only one should be specified.`;
                    currentFetchCacheConfig = undefined;
                    currentFetchRevalidate = undefined;
                }
            }
            const hasExplicitFetchCacheOptOut = currentFetchCacheConfig === 'no-cache' || currentFetchCacheConfig === 'no-store' || // the fetch isn't explicitly caching and the segment level cache config signals not to cache
            // note: `pageFetchCacheMode` is also set by being in an unstable_cache context.
            pageFetchCacheMode === 'force-no-store' || pageFetchCacheMode === 'only-no-store';
            // If no explicit fetch cache mode is set, but dynamic = `force-dynamic` is set,
            // we shouldn't consider caching the fetch. This is because the `dynamic` cache
            // is considered a "top-level" cache mode, whereas something like `fetchCache` is more
            // fine-grained. Top-level modes are responsible for setting reasonable defaults for the
            // other configurations.
            const noFetchConfigAndForceDynamic = !pageFetchCacheMode && !currentFetchCacheConfig && !currentFetchRevalidate && workStore.forceDynamic;
            if (// which will signal the cache to not revalidate
            currentFetchCacheConfig === 'force-cache' && typeof currentFetchRevalidate === 'undefined') {
                currentFetchRevalidate = false;
            } else if (// we shouldn't set the revalidate to 0 as it's overridden
            // by the cache context
            (workUnitStore == null ? void 0 : workUnitStore.type) !== 'cache' && (hasExplicitFetchCacheOptOut || noFetchConfigAndForceDynamic)) {
                currentFetchRevalidate = 0;
            }
            if (currentFetchCacheConfig === 'no-cache' || currentFetchCacheConfig === 'no-store') {
                cacheReason = `cache: ${currentFetchCacheConfig}`;
            }
            finalRevalidate = validateRevalidate(currentFetchRevalidate, workStore.route);
            const _headers = getRequestMeta('headers');
            const initHeaders = typeof (_headers == null ? void 0 : _headers.get) === 'function' ? _headers : new Headers(_headers || {});
            const hasUnCacheableHeader = initHeaders.get('authorization') || initHeaders.get('cookie');
            const isUnCacheableMethod = ![
                'get',
                'head'
            ].includes(((_getRequestMeta = getRequestMeta('method')) == null ? void 0 : _getRequestMeta.toLowerCase()) || 'get');
            /**
         * We automatically disable fetch caching under the following conditions:
         * - Fetch cache configs are not set. Specifically:
         *    - A page fetch cache mode is not set (export const fetchCache=...)
         *    - A fetch cache mode is not set in the fetch call (fetch(url, { cache: ... }))
         *      or the fetch cache mode is set to 'default'
         *    - A fetch revalidate value is not set in the fetch call (fetch(url, { revalidate: ... }))
         * - OR the fetch comes after a configuration that triggered dynamic rendering (e.g., reading cookies())
         *   and the fetch was considered uncacheable (e.g., POST method or has authorization headers)
         */ const hasNoExplicitCacheConfig = pageFetchCacheMode == undefined && // eslint-disable-next-line eqeqeq
            (currentFetchCacheConfig == undefined || // when considering whether to opt into the default "no-cache" fetch semantics,
            // a "default" cache config should be treated the same as no cache config
            currentFetchCacheConfig === 'default') && // eslint-disable-next-line eqeqeq
            currentFetchRevalidate == undefined;
            const autoNoCache = // eslint-disable-next-line eqeqeq
            hasNoExplicitCacheConfig && // we disable automatic no caching behavior during build time SSG so that we can still
            // leverage the fetch cache between SSG workers
            !workStore.isPrerendering || (hasUnCacheableHeader || isUnCacheableMethod) && revalidateStore && revalidateStore.revalidate === 0;
            if (hasNoExplicitCacheConfig && workUnitStore !== undefined && workUnitStore.type === 'prerender') {
                // If we have no cache config, and we're in Dynamic I/O prerendering, it'll be a dynamic call.
                // We don't have to issue that dynamic call.
                if (cacheSignal) {
                    cacheSignal.endRead();
                    cacheSignal = null;
                }
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, 'fetch()');
            }
            switch(pageFetchCacheMode){
                case 'force-no-store':
                    {
                        cacheReason = 'fetchCache = force-no-store';
                        break;
                    }
                case 'only-no-store':
                    {
                        if (currentFetchCacheConfig === 'force-cache' || typeof finalRevalidate !== 'undefined' && finalRevalidate > 0) {
                            throw new Error(`cache: 'force-cache' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-no-store'`);
                        }
                        cacheReason = 'fetchCache = only-no-store';
                        break;
                    }
                case 'only-cache':
                    {
                        if (currentFetchCacheConfig === 'no-store') {
                            throw new Error(`cache: 'no-store' used on fetch for ${fetchUrl} with 'export const fetchCache = 'only-cache'`);
                        }
                        break;
                    }
                case 'force-cache':
                    {
                        if (typeof currentFetchRevalidate === 'undefined' || currentFetchRevalidate === 0) {
                            cacheReason = 'fetchCache = force-cache';
                            finalRevalidate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INFINITE_CACHE"];
                        }
                        break;
                    }
                default:
            }
            if (typeof finalRevalidate === 'undefined') {
                if (pageFetchCacheMode === 'default-cache' && !isUsingNoStore) {
                    finalRevalidate = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INFINITE_CACHE"];
                    cacheReason = 'fetchCache = default-cache';
                } else if (pageFetchCacheMode === 'default-no-store') {
                    finalRevalidate = 0;
                    cacheReason = 'fetchCache = default-no-store';
                } else if (isUsingNoStore) {
                    finalRevalidate = 0;
                    cacheReason = 'noStore call';
                } else if (autoNoCache) {
                    finalRevalidate = 0;
                    cacheReason = 'auto no cache';
                } else {
                    // TODO: should we consider this case an invariant?
                    cacheReason = 'auto cache';
                    finalRevalidate = revalidateStore ? revalidateStore.revalidate : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INFINITE_CACHE"];
                }
            } else if (!cacheReason) {
                cacheReason = `revalidate: ${finalRevalidate}`;
            }
            if (// `revalidate: 0` values
            !(workStore.forceStatic && finalRevalidate === 0) && // we don't consider autoNoCache to switch to dynamic for ISR
            !autoNoCache && // If the revalidate value isn't currently set or the value is less
            // than the current revalidate value, we should update the revalidate
            // value.
            revalidateStore && finalRevalidate < revalidateStore.revalidate) {
                // If we were setting the revalidate value to 0, we should try to
                // postpone instead first.
                if (finalRevalidate === 0) {
                    if (workUnitStore && workUnitStore.type === 'prerender') {
                        if (cacheSignal) {
                            cacheSignal.endRead();
                            cacheSignal = null;
                        }
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, 'fetch()');
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["markCurrentScopeAsDynamic"])(workStore, workUnitStore, `revalidate: 0 fetch ${input} ${workStore.route}`);
                    }
                }
                // We only want to set the revalidate store's revalidate time if it
                // was explicitly set for the fetch call, i.e. currentFetchRevalidate.
                if (revalidateStore && currentFetchRevalidate === finalRevalidate) {
                    revalidateStore.revalidate = finalRevalidate;
                }
            }
            const isCacheableRevalidate = typeof finalRevalidate === 'number' && finalRevalidate > 0;
            let cacheKey;
            const { incrementalCache } = workStore;
            const requestStore = workUnitStore !== undefined && workUnitStore.type === 'request' ? workUnitStore : undefined;
            if (incrementalCache && (isCacheableRevalidate || (requestStore == null ? void 0 : requestStore.serverComponentsHmrCache))) {
                try {
                    cacheKey = await incrementalCache.generateCacheKey(fetchUrl, isRequestInput ? input : init);
                } catch (err) {
                    console.error(`Failed to generate cache key for`, input);
                }
            }
            const fetchIdx = workStore.nextFetchId ?? 1;
            workStore.nextFetchId = fetchIdx + 1;
            let handleUnlock = ()=>Promise.resolve();
            const doOriginalFetch = async (isStale, cacheReasonOverride)=>{
                const requestInputFields = [
                    'cache',
                    'credentials',
                    'headers',
                    'integrity',
                    'keepalive',
                    'method',
                    'mode',
                    'redirect',
                    'referrer',
                    'referrerPolicy',
                    'window',
                    'duplex',
                    // don't pass through signal when revalidating
                    ...isStale ? [] : [
                        'signal'
                    ]
                ];
                if (isRequestInput) {
                    const reqInput = input;
                    const reqOptions = {
                        body: reqInput._ogBody || reqInput.body
                    };
                    for (const field of requestInputFields){
                        // @ts-expect-error custom fields
                        reqOptions[field] = reqInput[field];
                    }
                    input = new Request(reqInput.url, reqOptions);
                } else if (init) {
                    const { _ogBody, body, signal, ...otherInput } = init;
                    init = {
                        ...otherInput,
                        body: _ogBody || body,
                        signal: isStale ? undefined : signal
                    };
                }
                // add metadata to init without editing the original
                const clonedInit = {
                    ...init,
                    next: {
                        ...init == null ? void 0 : init.next,
                        fetchType: 'origin',
                        fetchIdx
                    }
                };
                return originFetch(input, clonedInit).then(async (res)=>{
                    if (!isStale && fetchStart) {
                        trackFetchMetric(workStore, {
                            start: fetchStart,
                            url: fetchUrl,
                            cacheReason: cacheReasonOverride || cacheReason,
                            cacheStatus: finalRevalidate === 0 || cacheReasonOverride ? 'skip' : 'miss',
                            cacheWarning,
                            status: res.status,
                            method: clonedInit.method || 'GET'
                        });
                    }
                    if (res.status === 200 && incrementalCache && cacheKey && (isCacheableRevalidate || (requestStore == null ? void 0 : requestStore.serverComponentsHmrCache))) {
                        const normalizedRevalidate = finalRevalidate >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INFINITE_CACHE"] ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CACHE_ONE_YEAR"] : finalRevalidate;
                        const externalRevalidate = finalRevalidate >= __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$constants$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["INFINITE_CACHE"] ? false : finalRevalidate;
                        if (workUnitStore && workUnitStore.type === 'prerender') {
                            // We are prerendering at build time or revalidate time with dynamicIO so we need to
                            // buffer the response so we can guarantee it can be read in a microtask
                            const bodyBuffer = await res.arrayBuffer();
                            const fetchedData = {
                                headers: Object.fromEntries(res.headers.entries()),
                                body: Buffer.from(bodyBuffer).toString('base64'),
                                status: res.status,
                                url: res.url
                            };
                            // We can skip checking the serverComponentsHmrCache because we aren't in
                            // dev mode.
                            await incrementalCache.set(cacheKey, {
                                kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH,
                                data: fetchedData,
                                revalidate: normalizedRevalidate
                            }, {
                                fetchCache: true,
                                revalidate: externalRevalidate,
                                fetchUrl,
                                fetchIdx,
                                tags
                            });
                            await handleUnlock();
                            // We we return a new Response to the caller.
                            return new Response(bodyBuffer, {
                                headers: res.headers,
                                status: res.status,
                                statusText: res.statusText
                            });
                        } else {
                            // We are dynamically rendering including dev mode. We want to return
                            // the response to the caller as soon as possible because it might stream
                            // over a very long time.
                            res.clone().arrayBuffer().then(async (arrayBuffer)=>{
                                var _requestStore_serverComponentsHmrCache;
                                const bodyBuffer = Buffer.from(arrayBuffer);
                                const fetchedData = {
                                    headers: Object.fromEntries(res.headers.entries()),
                                    body: bodyBuffer.toString('base64'),
                                    status: res.status,
                                    url: res.url
                                };
                                requestStore == null ? void 0 : (_requestStore_serverComponentsHmrCache = requestStore.serverComponentsHmrCache) == null ? void 0 : _requestStore_serverComponentsHmrCache.set(cacheKey, fetchedData);
                                if (isCacheableRevalidate) {
                                    await incrementalCache.set(cacheKey, {
                                        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH,
                                        data: fetchedData,
                                        revalidate: normalizedRevalidate
                                    }, {
                                        fetchCache: true,
                                        revalidate: externalRevalidate,
                                        fetchUrl,
                                        fetchIdx,
                                        tags
                                    });
                                }
                            }).catch((error)=>console.warn(`Failed to set fetch cache`, input, error)).finally(handleUnlock);
                            return res;
                        }
                    }
                    // we had response that we determined shouldn't be cached so we return it
                    // and don't cache it. This also needs to unlock the cache lock we acquired.
                    await handleUnlock();
                    return res;
                });
            };
            let cacheReasonOverride;
            let isForegroundRevalidate = false;
            let isHmrRefreshCache = false;
            if (cacheKey && incrementalCache) {
                let cachedFetchData;
                if ((requestStore == null ? void 0 : requestStore.isHmrRefresh) && requestStore.serverComponentsHmrCache) {
                    cachedFetchData = requestStore.serverComponentsHmrCache.get(cacheKey);
                    isHmrRefreshCache = true;
                }
                if (isCacheableRevalidate && !cachedFetchData) {
                    handleUnlock = await incrementalCache.lock(cacheKey);
                    const entry = workStore.isOnDemandRevalidate ? null : await incrementalCache.get(cacheKey, {
                        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["IncrementalCacheKind"].FETCH,
                        revalidate: finalRevalidate,
                        fetchUrl,
                        fetchIdx,
                        tags,
                        softTags: implicitTags,
                        isFallback: false
                    });
                    if (hasNoExplicitCacheConfig) {
                        // We sometimes use the cache to dedupe fetches that do not specify a cache configuration
                        // In these cases we want to make sure we still exclude them from prerenders if dynamicIO is on
                        // so we introduce an artificial Task boundary here.
                        if (workUnitStore && workUnitStore.type === 'prerender') {
                            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$lib$2f$scheduler$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["waitAtLeastOneReactRenderTask"])();
                        }
                    }
                    if (entry) {
                        await handleUnlock();
                    } else {
                        // in dev, incremental cache response will be null in case the browser adds `cache-control: no-cache` in the request headers
                        cacheReasonOverride = 'cache-control: no-cache (hard refresh)';
                    }
                    if ((entry == null ? void 0 : entry.value) && entry.value.kind === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$response$2d$cache$2f$types$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["CachedRouteKind"].FETCH) {
                        // when stale and is revalidating we wait for fresh data
                        // so the revalidated entry has the updated data
                        if (workStore.isRevalidate && entry.isStale) {
                            isForegroundRevalidate = true;
                        } else {
                            if (entry.isStale) {
                                workStore.pendingRevalidates ??= {};
                                if (!workStore.pendingRevalidates[cacheKey]) {
                                    workStore.pendingRevalidates[cacheKey] = doOriginalFetch(true).catch(console.error).finally(()=>{
                                        workStore.pendingRevalidates ??= {};
                                        delete workStore.pendingRevalidates[cacheKey || ''];
                                    });
                                }
                            }
                            cachedFetchData = entry.value.data;
                        }
                    }
                }
                if (cachedFetchData) {
                    if (fetchStart) {
                        trackFetchMetric(workStore, {
                            start: fetchStart,
                            url: fetchUrl,
                            cacheReason,
                            cacheStatus: isHmrRefreshCache ? 'hmr' : 'hit',
                            cacheWarning,
                            status: cachedFetchData.status || 200,
                            method: (init == null ? void 0 : init.method) || 'GET'
                        });
                    }
                    const response = new Response(Buffer.from(cachedFetchData.body, 'base64'), {
                        headers: cachedFetchData.headers,
                        status: cachedFetchData.status
                    });
                    Object.defineProperty(response, 'url', {
                        value: cachedFetchData.url
                    });
                    return response;
                }
            }
            if (workStore.isStaticGeneration && init && typeof init === 'object') {
                const { cache } = init;
                // Delete `cache` property as Cloudflare Workers will throw an error
                if ("TURBOPACK compile-time falsy", 0) {
                    "TURBOPACK unreachable";
                }
                if (cache === 'no-store') {
                    // If enabled, we should bail out of static generation.
                    if (workUnitStore && workUnitStore.type === 'prerender') {
                        if (cacheSignal) {
                            cacheSignal.endRead();
                            cacheSignal = null;
                        }
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, 'fetch()');
                    } else {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["markCurrentScopeAsDynamic"])(workStore, workUnitStore, `no-store fetch ${input} ${workStore.route}`);
                    }
                }
                const hasNextConfig = 'next' in init;
                const { next = {} } = init;
                if (typeof next.revalidate === 'number' && revalidateStore && next.revalidate < revalidateStore.revalidate) {
                    if (next.revalidate === 0) {
                        // If enabled, we should bail out of static generation.
                        if (workUnitStore && workUnitStore.type === 'prerender') {
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$dynamic$2d$rendering$2d$utils$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["makeHangingPromise"])(workUnitStore.renderSignal, 'fetch()');
                        } else {
                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$dynamic$2d$rendering$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["markCurrentScopeAsDynamic"])(workStore, workUnitStore, `revalidate: 0 fetch ${input} ${workStore.route}`);
                        }
                    }
                    if (!workStore.forceStatic || next.revalidate !== 0) {
                        revalidateStore.revalidate = next.revalidate;
                    }
                }
                if (hasNextConfig) delete init.next;
            }
            // if we are revalidating the whole page via time or on-demand and
            // the fetch cache entry is stale we should still de-dupe the
            // origin hit if it's a cache-able entry
            if (cacheKey && isForegroundRevalidate) {
                const pendingRevalidateKey = cacheKey;
                workStore.pendingRevalidates ??= {};
                const pendingRevalidate = workStore.pendingRevalidates[pendingRevalidateKey];
                if (pendingRevalidate) {
                    const revalidatedResult = await pendingRevalidate;
                    return new Response(revalidatedResult.body, {
                        headers: revalidatedResult.headers,
                        status: revalidatedResult.status,
                        statusText: revalidatedResult.statusText
                    });
                }
                // We used to just resolve the Response and clone it however for
                // static generation with dynamicIO we need the response to be able to
                // be resolved in a microtask and Response#clone() will never have a
                // body that can resolve in a microtask in node (as observed through
                // experimentation) So instead we await the body and then when it is
                // available we construct manually cloned Response objects with the
                // body as an ArrayBuffer. This will be resolvable in a microtask
                // making it compatible with dynamicIO.
                const pendingResponse = doOriginalFetch(true, cacheReasonOverride);
                const nextRevalidate = pendingResponse.then(async (response)=>{
                    // Clone the response here. It'll run first because we attached
                    // the resolve before we returned below. We have to clone it
                    // because the original response is going to be consumed by
                    // at a later point in time.
                    const clonedResponse = response.clone();
                    return {
                        body: await clonedResponse.arrayBuffer(),
                        headers: clonedResponse.headers,
                        status: clonedResponse.status,
                        statusText: clonedResponse.statusText
                    };
                }).finally(()=>{
                    var _workStore_pendingRevalidates;
                    // If the pending revalidate is not present in the store, then
                    // we have nothing to delete.
                    if (!((_workStore_pendingRevalidates = workStore.pendingRevalidates) == null ? void 0 : _workStore_pendingRevalidates[pendingRevalidateKey])) {
                        return;
                    }
                    delete workStore.pendingRevalidates[pendingRevalidateKey];
                });
                // Attach the empty catch here so we don't get a "unhandled promise
                // rejection" warning
                nextRevalidate.catch(()=>{});
                workStore.pendingRevalidates[pendingRevalidateKey] = nextRevalidate;
                return pendingResponse;
            } else {
                return doOriginalFetch(false, cacheReasonOverride);
            }
        });
        if (cacheSignal) {
            try {
                return await result;
            } finally{
                if (cacheSignal) {
                    cacheSignal.endRead();
                }
            }
        }
        return result;
    };
    // Attach the necessary properties to the patched fetch function.
    // We don't use this to determine if the fetch function has been patched,
    // but for external consumers to determine if the fetch function has been
    // patched.
    patched.__nextPatched = true;
    patched.__nextGetStaticStore = ()=>workAsyncStorage;
    patched._nextOriginalFetch = originFetch;
    globalThis[NEXT_PATCH_SYMBOL] = true;
    return patched;
}
function patchFetch(options) {
    // If we've already patched fetch, we should not patch it again.
    if (isFetchPatched()) return;
    // Grab the original fetch function. We'll attach this so we can use it in
    // the patched fetch function.
    const original = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$lib$2f$dedupe$2d$fetch$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createDedupeFetch"])(globalThis.fetch);
    // Set the global fetch to the patched fetch.
    globalThis.fetch = createPatchedFetcher(original, options);
} //# sourceMappingURL=patch-fetch.js.map
}}),

};

//# sourceMappingURL=08b5e__pnpm_9b59bd._.js.map