module.exports = {

"[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/utils.ts
__turbopack_esm__({
    "addToEnd": (()=>addToEnd),
    "addToStart": (()=>addToStart),
    "ensureQueryFn": (()=>ensureQueryFn),
    "functionalUpdate": (()=>functionalUpdate),
    "hashKey": (()=>hashKey),
    "hashQueryKeyByOptions": (()=>hashQueryKeyByOptions),
    "isPlainArray": (()=>isPlainArray),
    "isPlainObject": (()=>isPlainObject),
    "isServer": (()=>isServer),
    "isValidTimeout": (()=>isValidTimeout),
    "keepPreviousData": (()=>keepPreviousData),
    "matchMutation": (()=>matchMutation),
    "matchQuery": (()=>matchQuery),
    "noop": (()=>noop),
    "partialMatchKey": (()=>partialMatchKey),
    "replaceData": (()=>replaceData),
    "replaceEqualDeep": (()=>replaceEqualDeep),
    "resolveEnabled": (()=>resolveEnabled),
    "resolveStaleTime": (()=>resolveStaleTime),
    "shallowEqualObjects": (()=>shallowEqualObjects),
    "skipToken": (()=>skipToken),
    "sleep": (()=>sleep),
    "timeUntilStale": (()=>timeUntilStale)
});
var isServer = "undefined" === "undefined" || "Deno" in globalThis;
function noop() {}
function functionalUpdate(updater, input) {
    return typeof updater === "function" ? updater(input) : updater;
}
function isValidTimeout(value) {
    return typeof value === "number" && value >= 0 && value !== Infinity;
}
function timeUntilStale(updatedAt, staleTime) {
    return Math.max(updatedAt + (staleTime || 0) - Date.now(), 0);
}
function resolveStaleTime(staleTime, query) {
    return typeof staleTime === "function" ? staleTime(query) : staleTime;
}
function resolveEnabled(enabled, query) {
    return typeof enabled === "function" ? enabled(query) : enabled;
}
function matchQuery(filters, query) {
    const { type = "all", exact, fetchStatus, predicate, queryKey, stale } = filters;
    if (queryKey) {
        if (exact) {
            if (query.queryHash !== hashQueryKeyByOptions(queryKey, query.options)) {
                return false;
            }
        } else if (!partialMatchKey(query.queryKey, queryKey)) {
            return false;
        }
    }
    if (type !== "all") {
        const isActive = query.isActive();
        if (type === "active" && !isActive) {
            return false;
        }
        if (type === "inactive" && isActive) {
            return false;
        }
    }
    if (typeof stale === "boolean" && query.isStale() !== stale) {
        return false;
    }
    if (fetchStatus && fetchStatus !== query.state.fetchStatus) {
        return false;
    }
    if (predicate && !predicate(query)) {
        return false;
    }
    return true;
}
function matchMutation(filters, mutation) {
    const { exact, status, predicate, mutationKey } = filters;
    if (mutationKey) {
        if (!mutation.options.mutationKey) {
            return false;
        }
        if (exact) {
            if (hashKey(mutation.options.mutationKey) !== hashKey(mutationKey)) {
                return false;
            }
        } else if (!partialMatchKey(mutation.options.mutationKey, mutationKey)) {
            return false;
        }
    }
    if (status && mutation.state.status !== status) {
        return false;
    }
    if (predicate && !predicate(mutation)) {
        return false;
    }
    return true;
}
function hashQueryKeyByOptions(queryKey, options) {
    const hashFn = options?.queryKeyHashFn || hashKey;
    return hashFn(queryKey);
}
function hashKey(queryKey) {
    return JSON.stringify(queryKey, (_, val)=>isPlainObject(val) ? Object.keys(val).sort().reduce((result, key)=>{
            result[key] = val[key];
            return result;
        }, {}) : val);
}
function partialMatchKey(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (a && b && typeof a === "object" && typeof b === "object") {
        return !Object.keys(b).some((key)=>!partialMatchKey(a[key], b[key]));
    }
    return false;
}
function replaceEqualDeep(a, b) {
    if (a === b) {
        return a;
    }
    const array = isPlainArray(a) && isPlainArray(b);
    if (array || isPlainObject(a) && isPlainObject(b)) {
        const aItems = array ? a : Object.keys(a);
        const aSize = aItems.length;
        const bItems = array ? b : Object.keys(b);
        const bSize = bItems.length;
        const copy = array ? [] : {};
        let equalItems = 0;
        for(let i = 0; i < bSize; i++){
            const key = array ? i : bItems[i];
            if ((!array && aItems.includes(key) || array) && a[key] === void 0 && b[key] === void 0) {
                copy[key] = void 0;
                equalItems++;
            } else {
                copy[key] = replaceEqualDeep(a[key], b[key]);
                if (copy[key] === a[key] && a[key] !== void 0) {
                    equalItems++;
                }
            }
        }
        return aSize === bSize && equalItems === aSize ? a : copy;
    }
    return b;
}
function shallowEqualObjects(a, b) {
    if (!b || Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    for(const key in a){
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}
function isPlainArray(value) {
    return Array.isArray(value) && value.length === Object.keys(value).length;
}
function isPlainObject(o) {
    if (!hasObjectPrototype(o)) {
        return false;
    }
    const ctor = o.constructor;
    if (ctor === void 0) {
        return true;
    }
    const prot = ctor.prototype;
    if (!hasObjectPrototype(prot)) {
        return false;
    }
    if (!prot.hasOwnProperty("isPrototypeOf")) {
        return false;
    }
    if (Object.getPrototypeOf(o) !== Object.prototype) {
        return false;
    }
    return true;
}
function hasObjectPrototype(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
}
function sleep(timeout) {
    return new Promise((resolve)=>{
        setTimeout(resolve, timeout);
    });
}
function replaceData(prevData, data, options) {
    if (typeof options.structuralSharing === "function") {
        return options.structuralSharing(prevData, data);
    } else if (options.structuralSharing !== false) {
        if ("TURBOPACK compile-time truthy", 1) {
            try {
                return replaceEqualDeep(prevData, data);
            } catch (error) {
                console.error(`Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${options.queryHash}]: ${error}`);
            }
        }
        return replaceEqualDeep(prevData, data);
    }
    return data;
}
function keepPreviousData(previousData) {
    return previousData;
}
function addToEnd(items, item, max = 0) {
    const newItems = [
        ...items,
        item
    ];
    return max && newItems.length > max ? newItems.slice(1) : newItems;
}
function addToStart(items, item, max = 0) {
    const newItems = [
        item,
        ...items
    ];
    return max && newItems.length > max ? newItems.slice(0, -1) : newItems;
}
var skipToken = Symbol();
function ensureQueryFn(options, fetchOptions) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (options.queryFn === skipToken) {
            console.error(`Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${options.queryHash}'`);
        }
    }
    if (!options.queryFn && fetchOptions?.initialPromise) {
        return ()=>fetchOptions.initialPromise;
    }
    if (!options.queryFn || options.queryFn === skipToken) {
        return ()=>Promise.reject(new Error(`Missing queryFn: '${options.queryHash}'`));
    }
    return options.queryFn;
}
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/hydration.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/hydration.ts
__turbopack_esm__({
    "defaultShouldDehydrateMutation": (()=>defaultShouldDehydrateMutation),
    "defaultShouldDehydrateQuery": (()=>defaultShouldDehydrateQuery),
    "dehydrate": (()=>dehydrate),
    "hydrate": (()=>hydrate)
});
function defaultTransformerFn(data) {
    return data;
}
function dehydrateMutation(mutation) {
    return {
        mutationKey: mutation.options.mutationKey,
        state: mutation.state,
        ...mutation.options.scope && {
            scope: mutation.options.scope
        },
        ...mutation.meta && {
            meta: mutation.meta
        }
    };
}
function dehydrateQuery(query, serializeData) {
    return {
        state: {
            ...query.state,
            ...query.state.data !== void 0 && {
                data: serializeData(query.state.data)
            }
        },
        queryKey: query.queryKey,
        queryHash: query.queryHash,
        ...query.state.status === "pending" && {
            promise: query.promise?.then(serializeData).catch((error)=>{
                if ("TURBOPACK compile-time truthy", 1) {
                    console.error(`A query that was dehydrated as pending ended up rejecting. [${query.queryHash}]: ${error}; The error will be redacted in production builds`);
                }
                return Promise.reject(new Error("redacted"));
            })
        },
        ...query.meta && {
            meta: query.meta
        }
    };
}
function defaultShouldDehydrateMutation(mutation) {
    return mutation.state.isPaused;
}
function defaultShouldDehydrateQuery(query) {
    return query.state.status === "success";
}
function dehydrate(client, options = {}) {
    const filterMutation = options.shouldDehydrateMutation ?? client.getDefaultOptions().dehydrate?.shouldDehydrateMutation ?? defaultShouldDehydrateMutation;
    const mutations = client.getMutationCache().getAll().flatMap((mutation)=>filterMutation(mutation) ? [
            dehydrateMutation(mutation)
        ] : []);
    const filterQuery = options.shouldDehydrateQuery ?? client.getDefaultOptions().dehydrate?.shouldDehydrateQuery ?? defaultShouldDehydrateQuery;
    const serializeData = options.serializeData ?? client.getDefaultOptions().dehydrate?.serializeData ?? defaultTransformerFn;
    const queries = client.getQueryCache().getAll().flatMap((query)=>filterQuery(query) ? [
            dehydrateQuery(query, serializeData)
        ] : []);
    return {
        mutations,
        queries
    };
}
function hydrate(client, dehydratedState, options) {
    if (typeof dehydratedState !== "object" || dehydratedState === null) {
        return;
    }
    const mutationCache = client.getMutationCache();
    const queryCache = client.getQueryCache();
    const deserializeData = options?.defaultOptions?.deserializeData ?? client.getDefaultOptions().hydrate?.deserializeData ?? defaultTransformerFn;
    const mutations = dehydratedState.mutations || [];
    const queries = dehydratedState.queries || [];
    mutations.forEach(({ state, ...mutationOptions })=>{
        mutationCache.build(client, {
            ...client.getDefaultOptions().hydrate?.mutations,
            ...options?.defaultOptions?.mutations,
            ...mutationOptions
        }, state);
    });
    queries.forEach(({ queryKey, state, queryHash, meta, promise })=>{
        let query = queryCache.get(queryHash);
        const data = state.data === void 0 ? state.data : deserializeData(state.data);
        if (query) {
            if (query.state.dataUpdatedAt < state.dataUpdatedAt) {
                const { fetchStatus: _ignored, ...serializedState } = state;
                query.setState({
                    ...serializedState,
                    data
                });
            }
        } else {
            query = queryCache.build(client, {
                ...client.getDefaultOptions().hydrate?.queries,
                ...options?.defaultOptions?.queries,
                queryKey,
                queryHash,
                meta
            }, // Reset fetch status to idle to avoid
            // query being stuck in fetching state upon hydration
            {
                ...state,
                data,
                fetchStatus: "idle"
            });
        }
        if (promise) {
            const initialPromise = Promise.resolve(promise).then(deserializeData);
            void query.fetch(void 0, {
                initialPromise
            });
        }
    });
}
;
 //# sourceMappingURL=hydration.js.map
}}),
"[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/subscribable.ts
__turbopack_esm__({
    "Subscribable": (()=>Subscribable)
});
var Subscribable = class {
    constructor(){
        this.listeners = /* @__PURE__ */ new Set();
        this.subscribe = this.subscribe.bind(this);
    }
    subscribe(listener) {
        this.listeners.add(listener);
        this.onSubscribe();
        return ()=>{
            this.listeners.delete(listener);
            this.onUnsubscribe();
        };
    }
    hasListeners() {
        return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
};
;
 //# sourceMappingURL=subscribable.js.map
}}),
"[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/onlineManager.ts
__turbopack_esm__({
    "OnlineManager": (()=>OnlineManager),
    "onlineManager": (()=>onlineManager)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-rsc] (ecmascript)");
;
;
var OnlineManager = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Subscribable"] {
    #online = true;
    #cleanup;
    #setup;
    constructor(){
        super();
        this.#setup = (onOnline)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isServer"] && window.addEventListener) {
                const onlineListener = ()=>onOnline(true);
                const offlineListener = ()=>onOnline(false);
                window.addEventListener("online", onlineListener, false);
                window.addEventListener("offline", offlineListener, false);
                return ()=>{
                    window.removeEventListener("online", onlineListener);
                    window.removeEventListener("offline", offlineListener);
                };
            }
            return;
        };
    }
    onSubscribe() {
        if (!this.#cleanup) {
            this.setEventListener(this.#setup);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#cleanup?.();
            this.#cleanup = void 0;
        }
    }
    setEventListener(setup) {
        this.#setup = setup;
        this.#cleanup?.();
        this.#cleanup = setup(this.setOnline.bind(this));
    }
    setOnline(online) {
        const changed = this.#online !== online;
        if (changed) {
            this.#online = online;
            this.listeners.forEach((listener)=>{
                listener(online);
            });
        }
    }
    isOnline() {
        return this.#online;
    }
};
var onlineManager = new OnlineManager();
;
 //# sourceMappingURL=onlineManager.js.map
}}),
"[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/thenable.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/thenable.ts
__turbopack_esm__({
    "pendingThenable": (()=>pendingThenable)
});
function pendingThenable() {
    let resolve;
    let reject;
    const thenable = new Promise((_resolve, _reject)=>{
        resolve = _resolve;
        reject = _reject;
    });
    thenable.status = "pending";
    thenable.catch(()=>{});
    function finalize(data) {
        Object.assign(thenable, data);
        delete thenable.resolve;
        delete thenable.reject;
    }
    thenable.resolve = (value)=>{
        finalize({
            status: "fulfilled",
            value
        });
        resolve(value);
    };
    thenable.reject = (reason)=>{
        finalize({
            status: "rejected",
            reason
        });
        reject(reason);
    };
    return thenable;
}
;
 //# sourceMappingURL=thenable.js.map
}}),
"[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/focusManager.ts
__turbopack_esm__({
    "FocusManager": (()=>FocusManager),
    "focusManager": (()=>focusManager)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-rsc] (ecmascript)");
;
;
var FocusManager = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Subscribable"] {
    #focused;
    #cleanup;
    #setup;
    constructor(){
        super();
        this.#setup = (onFocus)=>{
            if (!__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isServer"] && window.addEventListener) {
                const listener = ()=>onFocus();
                window.addEventListener("visibilitychange", listener, false);
                return ()=>{
                    window.removeEventListener("visibilitychange", listener);
                };
            }
            return;
        };
    }
    onSubscribe() {
        if (!this.#cleanup) {
            this.setEventListener(this.#setup);
        }
    }
    onUnsubscribe() {
        if (!this.hasListeners()) {
            this.#cleanup?.();
            this.#cleanup = void 0;
        }
    }
    setEventListener(setup) {
        this.#setup = setup;
        this.#cleanup?.();
        this.#cleanup = setup((focused)=>{
            if (typeof focused === "boolean") {
                this.setFocused(focused);
            } else {
                this.onFocus();
            }
        });
    }
    setFocused(focused) {
        const changed = this.#focused !== focused;
        if (changed) {
            this.#focused = focused;
            this.onFocus();
        }
    }
    onFocus() {
        const isFocused = this.isFocused();
        this.listeners.forEach((listener)=>{
            listener(isFocused);
        });
    }
    isFocused() {
        if (typeof this.#focused === "boolean") {
            return this.#focused;
        }
        return globalThis.document?.visibilityState !== "hidden";
    }
};
var focusManager = new FocusManager();
;
 //# sourceMappingURL=focusManager.js.map
}}),
"[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/retryer.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/retryer.ts
__turbopack_esm__({
    "CancelledError": (()=>CancelledError),
    "canFetch": (()=>canFetch),
    "createRetryer": (()=>createRetryer),
    "isCancelledError": (()=>isCancelledError)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/thenable.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
;
;
;
;
function defaultRetryDelay(failureCount) {
    return Math.min(1e3 * 2 ** failureCount, 3e4);
}
function canFetch(networkMode) {
    return (networkMode ?? "online") === "online" ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onlineManager"].isOnline() : true;
}
var CancelledError = class extends Error {
    constructor(options){
        super("CancelledError");
        this.revert = options?.revert;
        this.silent = options?.silent;
    }
};
function isCancelledError(value) {
    return value instanceof CancelledError;
}
function createRetryer(config) {
    let isRetryCancelled = false;
    let failureCount = 0;
    let isResolved = false;
    let continueFn;
    const thenable = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$thenable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["pendingThenable"])();
    const cancel = (cancelOptions)=>{
        if (!isResolved) {
            reject(new CancelledError(cancelOptions));
            config.abort?.();
        }
    };
    const cancelRetry = ()=>{
        isRetryCancelled = true;
    };
    const continueRetry = ()=>{
        isRetryCancelled = false;
    };
    const canContinue = ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["focusManager"].isFocused() && (config.networkMode === "always" || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onlineManager"].isOnline()) && config.canRun();
    const canStart = ()=>canFetch(config.networkMode) && config.canRun();
    const resolve = (value)=>{
        if (!isResolved) {
            isResolved = true;
            config.onSuccess?.(value);
            continueFn?.();
            thenable.resolve(value);
        }
    };
    const reject = (value)=>{
        if (!isResolved) {
            isResolved = true;
            config.onError?.(value);
            continueFn?.();
            thenable.reject(value);
        }
    };
    const pause = ()=>{
        return new Promise((continueResolve)=>{
            continueFn = (value)=>{
                if (isResolved || canContinue()) {
                    continueResolve(value);
                }
            };
            config.onPause?.();
        }).then(()=>{
            continueFn = void 0;
            if (!isResolved) {
                config.onContinue?.();
            }
        });
    };
    const run = ()=>{
        if (isResolved) {
            return;
        }
        let promiseOrValue;
        const initialPromise = failureCount === 0 ? config.initialPromise : void 0;
        try {
            promiseOrValue = initialPromise ?? config.fn();
        } catch (error) {
            promiseOrValue = Promise.reject(error);
        }
        Promise.resolve(promiseOrValue).then(resolve).catch((error)=>{
            if (isResolved) {
                return;
            }
            const retry = config.retry ?? (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isServer"] ? 0 : 3);
            const retryDelay = config.retryDelay ?? defaultRetryDelay;
            const delay = typeof retryDelay === "function" ? retryDelay(failureCount, error) : retryDelay;
            const shouldRetry = retry === true || typeof retry === "number" && failureCount < retry || typeof retry === "function" && retry(failureCount, error);
            if (isRetryCancelled || !shouldRetry) {
                reject(error);
                return;
            }
            failureCount++;
            config.onFail?.(failureCount, error);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["sleep"])(delay).then(()=>{
                return canContinue() ? void 0 : pause();
            }).then(()=>{
                if (isRetryCancelled) {
                    reject(error);
                } else {
                    run();
                }
            });
        });
    };
    return {
        promise: thenable,
        cancel,
        continue: ()=>{
            continueFn?.();
            return thenable;
        },
        cancelRetry,
        continueRetry,
        canStart,
        start: ()=>{
            if (canStart()) {
                run();
            } else {
                pause().then(run);
            }
            return thenable;
        }
    };
}
;
 //# sourceMappingURL=retryer.js.map
}}),
"[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/notifyManager.ts
__turbopack_esm__({
    "createNotifyManager": (()=>createNotifyManager),
    "notifyManager": (()=>notifyManager)
});
function createNotifyManager() {
    let queue = [];
    let transactions = 0;
    let notifyFn = (callback)=>{
        callback();
    };
    let batchNotifyFn = (callback)=>{
        callback();
    };
    let scheduleFn = (cb)=>setTimeout(cb, 0);
    const schedule = (callback)=>{
        if (transactions) {
            queue.push(callback);
        } else {
            scheduleFn(()=>{
                notifyFn(callback);
            });
        }
    };
    const flush = ()=>{
        const originalQueue = queue;
        queue = [];
        if (originalQueue.length) {
            scheduleFn(()=>{
                batchNotifyFn(()=>{
                    originalQueue.forEach((callback)=>{
                        notifyFn(callback);
                    });
                });
            });
        }
    };
    return {
        batch: (callback)=>{
            let result;
            transactions++;
            try {
                result = callback();
            } finally{
                transactions--;
                if (!transactions) {
                    flush();
                }
            }
            return result;
        },
        /**
     * All calls to the wrapped function will be batched.
     */ batchCalls: (callback)=>{
            return (...args)=>{
                schedule(()=>{
                    callback(...args);
                });
            };
        },
        schedule,
        /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */ setNotifyFunction: (fn)=>{
            notifyFn = fn;
        },
        /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */ setBatchNotifyFunction: (fn)=>{
            batchNotifyFn = fn;
        },
        setScheduler: (fn)=>{
            scheduleFn = fn;
        }
    };
}
var notifyManager = createNotifyManager();
;
 //# sourceMappingURL=notifyManager.js.map
}}),
"[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/removable.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/removable.ts
__turbopack_esm__({
    "Removable": (()=>Removable)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
;
var Removable = class {
    #gcTimeout;
    destroy() {
        this.clearGcTimeout();
    }
    scheduleGc() {
        this.clearGcTimeout();
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isValidTimeout"])(this.gcTime)) {
            this.#gcTimeout = setTimeout(()=>{
                this.optionalRemove();
            }, this.gcTime);
        }
    }
    updateGcTime(newGcTime) {
        this.gcTime = Math.max(this.gcTime || 0, newGcTime ?? (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isServer"] ? Infinity : 5 * 60 * 1e3));
    }
    clearGcTimeout() {
        if (this.#gcTimeout) {
            clearTimeout(this.#gcTimeout);
            this.#gcTimeout = void 0;
        }
    }
};
;
 //# sourceMappingURL=removable.js.map
}}),
"[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/query.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/query.ts
__turbopack_esm__({
    "Query": (()=>Query),
    "fetchState": (()=>fetchState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/retryer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/removable.js [app-rsc] (ecmascript)");
;
;
;
;
var Query = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Removable"] {
    #initialState;
    #revertState;
    #cache;
    #retryer;
    #defaultOptions;
    #abortSignalConsumed;
    constructor(config){
        super();
        this.#abortSignalConsumed = false;
        this.#defaultOptions = config.defaultOptions;
        this.setOptions(config.options);
        this.observers = [];
        this.#cache = config.cache;
        this.queryKey = config.queryKey;
        this.queryHash = config.queryHash;
        this.#initialState = getDefaultState(this.options);
        this.state = config.state ?? this.#initialState;
        this.scheduleGc();
    }
    get meta() {
        return this.options.meta;
    }
    get promise() {
        return this.#retryer?.promise;
    }
    setOptions(options) {
        this.options = {
            ...this.#defaultOptions,
            ...options
        };
        this.updateGcTime(this.options.gcTime);
    }
    optionalRemove() {
        if (!this.observers.length && this.state.fetchStatus === "idle") {
            this.#cache.remove(this);
        }
    }
    setData(newData, options) {
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["replaceData"])(this.state.data, newData, this.options);
        this.#dispatch({
            data,
            type: "success",
            dataUpdatedAt: options?.updatedAt,
            manual: options?.manual
        });
        return data;
    }
    setState(state, setStateOptions) {
        this.#dispatch({
            type: "setState",
            state,
            setStateOptions
        });
    }
    cancel(options) {
        const promise = this.#retryer?.promise;
        this.#retryer?.cancel(options);
        return promise ? promise.then(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]) : Promise.resolve();
    }
    destroy() {
        super.destroy();
        this.cancel({
            silent: true
        });
    }
    reset() {
        this.destroy();
        this.setState(this.#initialState);
    }
    isActive() {
        return this.observers.some((observer)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveEnabled"])(observer.options.enabled, this) !== false);
    }
    isDisabled() {
        if (this.getObserversCount() > 0) {
            return !this.isActive();
        }
        return this.options.queryFn === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skipToken"] || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
    }
    isStale() {
        if (this.state.isInvalidated) {
            return true;
        }
        if (this.getObserversCount() > 0) {
            return this.observers.some((observer)=>observer.getCurrentResult().isStale);
        }
        return this.state.data === void 0;
    }
    isStaleByTime(staleTime = 0) {
        return this.state.isInvalidated || this.state.data === void 0 || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["timeUntilStale"])(this.state.dataUpdatedAt, staleTime);
    }
    onFocus() {
        const observer = this.observers.find((x)=>x.shouldFetchOnWindowFocus());
        observer?.refetch({
            cancelRefetch: false
        });
        this.#retryer?.continue();
    }
    onOnline() {
        const observer = this.observers.find((x)=>x.shouldFetchOnReconnect());
        observer?.refetch({
            cancelRefetch: false
        });
        this.#retryer?.continue();
    }
    addObserver(observer) {
        if (!this.observers.includes(observer)) {
            this.observers.push(observer);
            this.clearGcTimeout();
            this.#cache.notify({
                type: "observerAdded",
                query: this,
                observer
            });
        }
    }
    removeObserver(observer) {
        if (this.observers.includes(observer)) {
            this.observers = this.observers.filter((x)=>x !== observer);
            if (!this.observers.length) {
                if (this.#retryer) {
                    if (this.#abortSignalConsumed) {
                        this.#retryer.cancel({
                            revert: true
                        });
                    } else {
                        this.#retryer.cancelRetry();
                    }
                }
                this.scheduleGc();
            }
            this.#cache.notify({
                type: "observerRemoved",
                query: this,
                observer
            });
        }
    }
    getObserversCount() {
        return this.observers.length;
    }
    invalidate() {
        if (!this.state.isInvalidated) {
            this.#dispatch({
                type: "invalidate"
            });
        }
    }
    fetch(options, fetchOptions) {
        if (this.state.fetchStatus !== "idle") {
            if (this.state.data !== void 0 && fetchOptions?.cancelRefetch) {
                this.cancel({
                    silent: true
                });
            } else if (this.#retryer) {
                this.#retryer.continueRetry();
                return this.#retryer.promise;
            }
        }
        if (options) {
            this.setOptions(options);
        }
        if (!this.options.queryFn) {
            const observer = this.observers.find((x)=>x.options.queryFn);
            if (observer) {
                this.setOptions(observer.options);
            }
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (!Array.isArray(this.options.queryKey)) {
                console.error(`As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']`);
            }
        }
        const abortController = new AbortController();
        const addSignalProperty = (object)=>{
            Object.defineProperty(object, "signal", {
                enumerable: true,
                get: ()=>{
                    this.#abortSignalConsumed = true;
                    return abortController.signal;
                }
            });
        };
        const fetchFn = ()=>{
            const queryFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureQueryFn"])(this.options, fetchOptions);
            const queryFnContext = {
                queryKey: this.queryKey,
                meta: this.meta
            };
            addSignalProperty(queryFnContext);
            this.#abortSignalConsumed = false;
            if (this.options.persister) {
                return this.options.persister(queryFn, queryFnContext, this);
            }
            return queryFn(queryFnContext);
        };
        const context = {
            fetchOptions,
            options: this.options,
            queryKey: this.queryKey,
            state: this.state,
            fetchFn
        };
        addSignalProperty(context);
        this.options.behavior?.onFetch(context, this);
        this.#revertState = this.state;
        if (this.state.fetchStatus === "idle" || this.state.fetchMeta !== context.fetchOptions?.meta) {
            this.#dispatch({
                type: "fetch",
                meta: context.fetchOptions?.meta
            });
        }
        const onError = (error)=>{
            if (!((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCancelledError"])(error) && error.silent)) {
                this.#dispatch({
                    type: "error",
                    error
                });
            }
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCancelledError"])(error)) {
                this.#cache.config.onError?.(error, this);
                this.#cache.config.onSettled?.(this.state.data, error, this);
            }
            this.scheduleGc();
        };
        this.#retryer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRetryer"])({
            initialPromise: fetchOptions?.initialPromise,
            fn: context.fetchFn,
            abort: abortController.abort.bind(abortController),
            onSuccess: (data)=>{
                if (data === void 0) {
                    if ("TURBOPACK compile-time truthy", 1) {
                        console.error(`Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`);
                    }
                    onError(new Error(`${this.queryHash} data is undefined`));
                    return;
                }
                try {
                    this.setData(data);
                } catch (error) {
                    onError(error);
                    return;
                }
                this.#cache.config.onSuccess?.(data, this);
                this.#cache.config.onSettled?.(data, this.state.error, this);
                this.scheduleGc();
            },
            onError,
            onFail: (failureCount, error)=>{
                this.#dispatch({
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                this.#dispatch({
                    type: "pause"
                });
            },
            onContinue: ()=>{
                this.#dispatch({
                    type: "continue"
                });
            },
            retry: context.options.retry,
            retryDelay: context.options.retryDelay,
            networkMode: context.options.networkMode,
            canRun: ()=>true
        });
        return this.#retryer.start();
    }
    #dispatch(action) {
        const reducer = (state)=>{
            switch(action.type){
                case "failed":
                    return {
                        ...state,
                        fetchFailureCount: action.failureCount,
                        fetchFailureReason: action.error
                    };
                case "pause":
                    return {
                        ...state,
                        fetchStatus: "paused"
                    };
                case "continue":
                    return {
                        ...state,
                        fetchStatus: "fetching"
                    };
                case "fetch":
                    return {
                        ...state,
                        ...fetchState(state.data, this.options),
                        fetchMeta: action.meta ?? null
                    };
                case "success":
                    return {
                        ...state,
                        data: action.data,
                        dataUpdateCount: state.dataUpdateCount + 1,
                        dataUpdatedAt: action.dataUpdatedAt ?? Date.now(),
                        error: null,
                        isInvalidated: false,
                        status: "success",
                        ...!action.manual && {
                            fetchStatus: "idle",
                            fetchFailureCount: 0,
                            fetchFailureReason: null
                        }
                    };
                case "error":
                    const error = action.error;
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isCancelledError"])(error) && error.revert && this.#revertState) {
                        return {
                            ...this.#revertState,
                            fetchStatus: "idle"
                        };
                    }
                    return {
                        ...state,
                        error,
                        errorUpdateCount: state.errorUpdateCount + 1,
                        errorUpdatedAt: Date.now(),
                        fetchFailureCount: state.fetchFailureCount + 1,
                        fetchFailureReason: error,
                        fetchStatus: "idle",
                        status: "error"
                    };
                case "invalidate":
                    return {
                        ...state,
                        isInvalidated: true
                    };
                case "setState":
                    return {
                        ...state,
                        ...action.state
                    };
            }
        };
        this.state = reducer(this.state);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.observers.forEach((observer)=>{
                observer.onQueryUpdate();
            });
            this.#cache.notify({
                query: this,
                type: "updated",
                action
            });
        });
    }
};
function fetchState(data, options) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canFetch"])(options.networkMode) ? "fetching" : "paused",
        ...data === void 0 && {
            error: null,
            status: "pending"
        }
    };
}
function getDefaultState(options) {
    const data = typeof options.initialData === "function" ? options.initialData() : options.initialData;
    const hasData = data !== void 0;
    const initialDataUpdatedAt = hasData ? typeof options.initialDataUpdatedAt === "function" ? options.initialDataUpdatedAt() : options.initialDataUpdatedAt : 0;
    return {
        data,
        dataUpdateCount: 0,
        dataUpdatedAt: hasData ? initialDataUpdatedAt ?? Date.now() : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: false,
        status: hasData ? "success" : "pending",
        fetchStatus: "idle"
    };
}
;
 //# sourceMappingURL=query.js.map
}}),
"[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/queryCache.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/queryCache.ts
__turbopack_esm__({
    "QueryCache": (()=>QueryCache)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/query.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-rsc] (ecmascript)");
;
;
;
;
var QueryCache = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Subscribable"] {
    constructor(config = {}){
        super();
        this.config = config;
        this.#queries = /* @__PURE__ */ new Map();
    }
    #queries;
    build(client, options, state) {
        const queryKey = options.queryKey;
        const queryHash = options.queryHash ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashQueryKeyByOptions"])(queryKey, options);
        let query = this.get(queryHash);
        if (!query) {
            query = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$query$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Query"]({
                cache: this,
                queryKey,
                queryHash,
                options: client.defaultQueryOptions(options),
                state,
                defaultOptions: client.getQueryDefaults(queryKey)
            });
            this.add(query);
        }
        return query;
    }
    add(query) {
        if (!this.#queries.has(query.queryHash)) {
            this.#queries.set(query.queryHash, query);
            this.notify({
                type: "added",
                query
            });
        }
    }
    remove(query) {
        const queryInMap = this.#queries.get(query.queryHash);
        if (queryInMap) {
            query.destroy();
            if (queryInMap === query) {
                this.#queries.delete(query.queryHash);
            }
            this.notify({
                type: "removed",
                query
            });
        }
    }
    clear() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                this.remove(query);
            });
        });
    }
    get(queryHash) {
        return this.#queries.get(queryHash);
    }
    getAll() {
        return [
            ...this.#queries.values()
        ];
    }
    find(filters) {
        const defaultedFilters = {
            exact: true,
            ...filters
        };
        return this.getAll().find((query)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["matchQuery"])(defaultedFilters, query));
    }
    findAll(filters = {}) {
        const queries = this.getAll();
        return Object.keys(filters).length > 0 ? queries.filter((query)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["matchQuery"])(filters, query)) : queries;
    }
    notify(event) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.listeners.forEach((listener)=>{
                listener(event);
            });
        });
    }
    onFocus() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                query.onFocus();
            });
        });
    }
    onOnline() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((query)=>{
                query.onOnline();
            });
        });
    }
};
;
 //# sourceMappingURL=queryCache.js.map
}}),
"[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/mutation.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/mutation.ts
__turbopack_esm__({
    "Mutation": (()=>Mutation),
    "getDefaultState": (()=>getDefaultState)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/retryer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/removable.js [app-rsc] (ecmascript)");
;
;
;
var Mutation = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$removable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Removable"] {
    #observers;
    #mutationCache;
    #retryer;
    constructor(config){
        super();
        this.mutationId = config.mutationId;
        this.#mutationCache = config.mutationCache;
        this.#observers = [];
        this.state = config.state || getDefaultState();
        this.setOptions(config.options);
        this.scheduleGc();
    }
    setOptions(options) {
        this.options = options;
        this.updateGcTime(this.options.gcTime);
    }
    get meta() {
        return this.options.meta;
    }
    addObserver(observer) {
        if (!this.#observers.includes(observer)) {
            this.#observers.push(observer);
            this.clearGcTimeout();
            this.#mutationCache.notify({
                type: "observerAdded",
                mutation: this,
                observer
            });
        }
    }
    removeObserver(observer) {
        this.#observers = this.#observers.filter((x)=>x !== observer);
        this.scheduleGc();
        this.#mutationCache.notify({
            type: "observerRemoved",
            mutation: this,
            observer
        });
    }
    optionalRemove() {
        if (!this.#observers.length) {
            if (this.state.status === "pending") {
                this.scheduleGc();
            } else {
                this.#mutationCache.remove(this);
            }
        }
    }
    continue() {
        return this.#retryer?.continue() ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
        this.execute(this.state.variables);
    }
    async execute(variables) {
        this.#retryer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$retryer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRetryer"])({
            fn: ()=>{
                if (!this.options.mutationFn) {
                    return Promise.reject(new Error("No mutationFn found"));
                }
                return this.options.mutationFn(variables);
            },
            onFail: (failureCount, error)=>{
                this.#dispatch({
                    type: "failed",
                    failureCount,
                    error
                });
            },
            onPause: ()=>{
                this.#dispatch({
                    type: "pause"
                });
            },
            onContinue: ()=>{
                this.#dispatch({
                    type: "continue"
                });
            },
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: ()=>this.#mutationCache.canRun(this)
        });
        const restored = this.state.status === "pending";
        const isPaused = !this.#retryer.canStart();
        try {
            if (!restored) {
                this.#dispatch({
                    type: "pending",
                    variables,
                    isPaused
                });
                await this.#mutationCache.config.onMutate?.(variables, this);
                const context = await this.options.onMutate?.(variables);
                if (context !== this.state.context) {
                    this.#dispatch({
                        type: "pending",
                        context,
                        variables,
                        isPaused
                    });
                }
            }
            const data = await this.#retryer.start();
            await this.#mutationCache.config.onSuccess?.(data, variables, this.state.context, this);
            await this.options.onSuccess?.(data, variables, this.state.context);
            await this.#mutationCache.config.onSettled?.(data, null, this.state.variables, this.state.context, this);
            await this.options.onSettled?.(data, null, variables, this.state.context);
            this.#dispatch({
                type: "success",
                data
            });
            return data;
        } catch (error) {
            try {
                await this.#mutationCache.config.onError?.(error, variables, this.state.context, this);
                await this.options.onError?.(error, variables, this.state.context);
                await this.#mutationCache.config.onSettled?.(void 0, error, this.state.variables, this.state.context, this);
                await this.options.onSettled?.(void 0, error, variables, this.state.context);
                throw error;
            } finally{
                this.#dispatch({
                    type: "error",
                    error
                });
            }
        } finally{
            this.#mutationCache.runNext(this);
        }
    }
    #dispatch(action) {
        const reducer = (state)=>{
            switch(action.type){
                case "failed":
                    return {
                        ...state,
                        failureCount: action.failureCount,
                        failureReason: action.error
                    };
                case "pause":
                    return {
                        ...state,
                        isPaused: true
                    };
                case "continue":
                    return {
                        ...state,
                        isPaused: false
                    };
                case "pending":
                    return {
                        ...state,
                        context: action.context,
                        data: void 0,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        isPaused: action.isPaused,
                        status: "pending",
                        variables: action.variables,
                        submittedAt: Date.now()
                    };
                case "success":
                    return {
                        ...state,
                        data: action.data,
                        failureCount: 0,
                        failureReason: null,
                        error: null,
                        status: "success",
                        isPaused: false
                    };
                case "error":
                    return {
                        ...state,
                        data: void 0,
                        error: action.error,
                        failureCount: state.failureCount + 1,
                        failureReason: action.error,
                        isPaused: false,
                        status: "error"
                    };
            }
        };
        this.state = reducer(this.state);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.#observers.forEach((observer)=>{
                observer.onMutationUpdate(action);
            });
            this.#mutationCache.notify({
                mutation: this,
                type: "updated",
                action
            });
        });
    }
};
function getDefaultState() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: false,
        status: "idle",
        variables: void 0,
        submittedAt: 0
    };
}
;
 //# sourceMappingURL=mutation.js.map
}}),
"[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/mutationCache.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/mutationCache.ts
__turbopack_esm__({
    "MutationCache": (()=>MutationCache)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/mutation.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/subscribable.js [app-rsc] (ecmascript)");
;
;
;
;
var MutationCache = class extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$subscribable$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Subscribable"] {
    constructor(config = {}){
        super();
        this.config = config;
        this.#mutations = /* @__PURE__ */ new Map();
        this.#mutationId = Date.now();
    }
    #mutations;
    #mutationId;
    build(client, options, state) {
        const mutation = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutation$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Mutation"]({
            mutationCache: this,
            mutationId: ++this.#mutationId,
            options: client.defaultMutationOptions(options),
            state
        });
        this.add(mutation);
        return mutation;
    }
    add(mutation) {
        const scope = scopeFor(mutation);
        const mutations = this.#mutations.get(scope) ?? [];
        mutations.push(mutation);
        this.#mutations.set(scope, mutations);
        this.notify({
            type: "added",
            mutation
        });
    }
    remove(mutation) {
        const scope = scopeFor(mutation);
        if (this.#mutations.has(scope)) {
            const mutations = this.#mutations.get(scope)?.filter((x)=>x !== mutation);
            if (mutations) {
                if (mutations.length === 0) {
                    this.#mutations.delete(scope);
                } else {
                    this.#mutations.set(scope, mutations);
                }
            }
        }
        this.notify({
            type: "removed",
            mutation
        });
    }
    canRun(mutation) {
        const firstPendingMutation = this.#mutations.get(scopeFor(mutation))?.find((m)=>m.state.status === "pending");
        return !firstPendingMutation || firstPendingMutation === mutation;
    }
    runNext(mutation) {
        const foundMutation = this.#mutations.get(scopeFor(mutation))?.find((m)=>m !== mutation && m.state.isPaused);
        return foundMutation?.continue() ?? Promise.resolve();
    }
    clear() {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.getAll().forEach((mutation)=>{
                this.remove(mutation);
            });
        });
    }
    getAll() {
        return [
            ...this.#mutations.values()
        ].flat();
    }
    find(filters) {
        const defaultedFilters = {
            exact: true,
            ...filters
        };
        return this.getAll().find((mutation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["matchMutation"])(defaultedFilters, mutation));
    }
    findAll(filters = {}) {
        return this.getAll().filter((mutation)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["matchMutation"])(filters, mutation));
    }
    notify(event) {
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.listeners.forEach((listener)=>{
                listener(event);
            });
        });
    }
    resumePausedMutations() {
        const pausedMutations = this.getAll().filter((x)=>x.state.isPaused);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>Promise.all(pausedMutations.map((mutation)=>mutation.continue().catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]))));
    }
};
function scopeFor(mutation) {
    return mutation.options.scope?.id ?? String(mutation.mutationId);
}
;
 //# sourceMappingURL=mutationCache.js.map
}}),
"[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/infiniteQueryBehavior.ts
__turbopack_esm__({
    "hasNextPage": (()=>hasNextPage),
    "hasPreviousPage": (()=>hasPreviousPage),
    "infiniteQueryBehavior": (()=>infiniteQueryBehavior)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
;
function infiniteQueryBehavior(pages) {
    return {
        onFetch: (context, query)=>{
            const options = context.options;
            const direction = context.fetchOptions?.meta?.fetchMore?.direction;
            const oldPages = context.state.data?.pages || [];
            const oldPageParams = context.state.data?.pageParams || [];
            let result = {
                pages: [],
                pageParams: []
            };
            let currentPage = 0;
            const fetchFn = async ()=>{
                let cancelled = false;
                const addSignalProperty = (object)=>{
                    Object.defineProperty(object, "signal", {
                        enumerable: true,
                        get: ()=>{
                            if (context.signal.aborted) {
                                cancelled = true;
                            } else {
                                context.signal.addEventListener("abort", ()=>{
                                    cancelled = true;
                                });
                            }
                            return context.signal;
                        }
                    });
                };
                const queryFn = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureQueryFn"])(context.options, context.fetchOptions);
                const fetchPage = async (data, param, previous)=>{
                    if (cancelled) {
                        return Promise.reject();
                    }
                    if (param == null && data.pages.length) {
                        return Promise.resolve(data);
                    }
                    const queryFnContext = {
                        queryKey: context.queryKey,
                        pageParam: param,
                        direction: previous ? "backward" : "forward",
                        meta: context.options.meta
                    };
                    addSignalProperty(queryFnContext);
                    const page = await queryFn(queryFnContext);
                    const { maxPages } = context.options;
                    const addTo = previous ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addToStart"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["addToEnd"];
                    return {
                        pages: addTo(data.pages, page, maxPages),
                        pageParams: addTo(data.pageParams, param, maxPages)
                    };
                };
                if (direction && oldPages.length) {
                    const previous = direction === "backward";
                    const pageParamFn = previous ? getPreviousPageParam : getNextPageParam;
                    const oldData = {
                        pages: oldPages,
                        pageParams: oldPageParams
                    };
                    const param = pageParamFn(options, oldData);
                    result = await fetchPage(oldData, param, previous);
                } else {
                    const remainingPages = pages ?? oldPages.length;
                    do {
                        const param = currentPage === 0 ? oldPageParams[0] ?? options.initialPageParam : getNextPageParam(options, result);
                        if (currentPage > 0 && param == null) {
                            break;
                        }
                        result = await fetchPage(result, param);
                        currentPage++;
                    }while (currentPage < remainingPages)
                }
                return result;
            };
            if (context.options.persister) {
                context.fetchFn = ()=>{
                    return context.options.persister?.(fetchFn, {
                        queryKey: context.queryKey,
                        meta: context.options.meta,
                        signal: context.signal
                    }, query);
                };
            } else {
                context.fetchFn = fetchFn;
            }
        }
    };
}
function getNextPageParam(options, { pages, pageParams }) {
    const lastIndex = pages.length - 1;
    return pages.length > 0 ? options.getNextPageParam(pages[lastIndex], pages, pageParams[lastIndex], pageParams) : void 0;
}
function getPreviousPageParam(options, { pages, pageParams }) {
    return pages.length > 0 ? options.getPreviousPageParam?.(pages[0], pages, pageParams[0], pageParams) : void 0;
}
function hasNextPage(options, data) {
    if (!data) return false;
    return getNextPageParam(options, data) != null;
}
function hasPreviousPage(options, data) {
    if (!data || !options.getPreviousPageParam) return false;
    return getPreviousPageParam(options, data) != null;
}
;
 //# sourceMappingURL=infiniteQueryBehavior.js.map
}}),
"[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
// src/queryClient.ts
__turbopack_esm__({
    "QueryClient": (()=>QueryClient)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/queryCache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/mutationCache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/focusManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/onlineManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/notifyManager.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/infiniteQueryBehavior.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
var QueryClient = class {
    #queryCache;
    #mutationCache;
    #defaultOptions;
    #queryDefaults;
    #mutationDefaults;
    #mountCount;
    #unsubscribeFocus;
    #unsubscribeOnline;
    constructor(config = {}){
        this.#queryCache = config.queryCache || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["QueryCache"]();
        this.#mutationCache = config.mutationCache || new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$mutationCache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MutationCache"]();
        this.#defaultOptions = config.defaultOptions || {};
        this.#queryDefaults = /* @__PURE__ */ new Map();
        this.#mutationDefaults = /* @__PURE__ */ new Map();
        this.#mountCount = 0;
    }
    mount() {
        this.#mountCount++;
        if (this.#mountCount !== 1) return;
        this.#unsubscribeFocus = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$focusManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["focusManager"].subscribe(async (focused)=>{
            if (focused) {
                await this.resumePausedMutations();
                this.#queryCache.onFocus();
            }
        });
        this.#unsubscribeOnline = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onlineManager"].subscribe(async (online)=>{
            if (online) {
                await this.resumePausedMutations();
                this.#queryCache.onOnline();
            }
        });
    }
    unmount() {
        this.#mountCount--;
        if (this.#mountCount !== 0) return;
        this.#unsubscribeFocus?.();
        this.#unsubscribeFocus = void 0;
        this.#unsubscribeOnline?.();
        this.#unsubscribeOnline = void 0;
    }
    isFetching(filters) {
        return this.#queryCache.findAll({
            ...filters,
            fetchStatus: "fetching"
        }).length;
    }
    isMutating(filters) {
        return this.#mutationCache.findAll({
            ...filters,
            status: "pending"
        }).length;
    }
    getQueryData(queryKey) {
        const options = this.defaultQueryOptions({
            queryKey
        });
        return this.#queryCache.get(options.queryHash)?.state.data;
    }
    ensureQueryData(options) {
        const cachedData = this.getQueryData(options.queryKey);
        if (cachedData === void 0) return this.fetchQuery(options);
        else {
            const defaultedOptions = this.defaultQueryOptions(options);
            const query = this.#queryCache.build(this, defaultedOptions);
            if (options.revalidateIfStale && query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveStaleTime"])(defaultedOptions.staleTime, query))) {
                void this.prefetchQuery(defaultedOptions);
            }
            return Promise.resolve(cachedData);
        }
    }
    getQueriesData(filters) {
        return this.#queryCache.findAll(filters).map(({ queryKey, state })=>{
            const data = state.data;
            return [
                queryKey,
                data
            ];
        });
    }
    setQueryData(queryKey, updater, options) {
        const defaultedOptions = this.defaultQueryOptions({
            queryKey
        });
        const query = this.#queryCache.get(defaultedOptions.queryHash);
        const prevData = query?.state.data;
        const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["functionalUpdate"])(updater, prevData);
        if (data === void 0) {
            return void 0;
        }
        return this.#queryCache.build(this, defaultedOptions).setData(data, {
            ...options,
            manual: true
        });
    }
    setQueriesData(filters, updater, options) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>this.#queryCache.findAll(filters).map(({ queryKey })=>[
                    queryKey,
                    this.setQueryData(queryKey, updater, options)
                ]));
    }
    getQueryState(queryKey) {
        const options = this.defaultQueryOptions({
            queryKey
        });
        return this.#queryCache.get(options.queryHash)?.state;
    }
    removeQueries(filters) {
        const queryCache = this.#queryCache;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            queryCache.findAll(filters).forEach((query)=>{
                queryCache.remove(query);
            });
        });
    }
    resetQueries(filters, options) {
        const queryCache = this.#queryCache;
        const refetchFilters = {
            type: "active",
            ...filters
        };
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            queryCache.findAll(filters).forEach((query)=>{
                query.reset();
            });
            return this.refetchQueries(refetchFilters, options);
        });
    }
    cancelQueries(filters = {}, cancelOptions = {}) {
        const defaultedCancelOptions = {
            revert: true,
            ...cancelOptions
        };
        const promises = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>this.#queryCache.findAll(filters).map((query)=>query.cancel(defaultedCancelOptions)));
        return Promise.all(promises).then(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]);
    }
    invalidateQueries(filters = {}, options = {}) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>{
            this.#queryCache.findAll(filters).forEach((query)=>{
                query.invalidate();
            });
            if (filters.refetchType === "none") {
                return Promise.resolve();
            }
            const refetchFilters = {
                ...filters,
                type: filters.refetchType ?? filters.type ?? "active"
            };
            return this.refetchQueries(refetchFilters, options);
        });
    }
    refetchQueries(filters = {}, options) {
        const fetchOptions = {
            ...options,
            cancelRefetch: options?.cancelRefetch ?? true
        };
        const promises = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$notifyManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notifyManager"].batch(()=>this.#queryCache.findAll(filters).filter((query)=>!query.isDisabled()).map((query)=>{
                let promise = query.fetch(void 0, fetchOptions);
                if (!fetchOptions.throwOnError) {
                    promise = promise.catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]);
                }
                return query.state.fetchStatus === "paused" ? Promise.resolve() : promise;
            }));
        return Promise.all(promises).then(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]);
    }
    fetchQuery(options) {
        const defaultedOptions = this.defaultQueryOptions(options);
        if (defaultedOptions.retry === void 0) {
            defaultedOptions.retry = false;
        }
        const query = this.#queryCache.build(this, defaultedOptions);
        return query.isStaleByTime((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["resolveStaleTime"])(defaultedOptions.staleTime, query)) ? query.fetch(defaultedOptions) : Promise.resolve(query.state.data);
    }
    prefetchQuery(options) {
        return this.fetchQuery(options).then(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]);
    }
    fetchInfiniteQuery(options) {
        options.behavior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["infiniteQueryBehavior"])(options.pages);
        return this.fetchQuery(options);
    }
    prefetchInfiniteQuery(options) {
        return this.fetchInfiniteQuery(options).then(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]).catch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["noop"]);
    }
    ensureInfiniteQueryData(options) {
        options.behavior = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$infiniteQueryBehavior$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["infiniteQueryBehavior"])(options.pages);
        return this.ensureQueryData(options);
    }
    resumePausedMutations() {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$onlineManager$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["onlineManager"].isOnline()) {
            return this.#mutationCache.resumePausedMutations();
        }
        return Promise.resolve();
    }
    getQueryCache() {
        return this.#queryCache;
    }
    getMutationCache() {
        return this.#mutationCache;
    }
    getDefaultOptions() {
        return this.#defaultOptions;
    }
    setDefaultOptions(options) {
        this.#defaultOptions = options;
    }
    setQueryDefaults(queryKey, options) {
        this.#queryDefaults.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashKey"])(queryKey), {
            queryKey,
            defaultOptions: options
        });
    }
    getQueryDefaults(queryKey) {
        const defaults = [
            ...this.#queryDefaults.values()
        ];
        let result = {};
        defaults.forEach((queryDefault)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["partialMatchKey"])(queryKey, queryDefault.queryKey)) {
                result = {
                    ...result,
                    ...queryDefault.defaultOptions
                };
            }
        });
        return result;
    }
    setMutationDefaults(mutationKey, options) {
        this.#mutationDefaults.set((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashKey"])(mutationKey), {
            mutationKey,
            defaultOptions: options
        });
    }
    getMutationDefaults(mutationKey) {
        const defaults = [
            ...this.#mutationDefaults.values()
        ];
        let result = {};
        defaults.forEach((queryDefault)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["partialMatchKey"])(mutationKey, queryDefault.mutationKey)) {
                result = {
                    ...result,
                    ...queryDefault.defaultOptions
                };
            }
        });
        return result;
    }
    defaultQueryOptions(options) {
        if (options._defaulted) {
            return options;
        }
        const defaultedOptions = {
            ...this.#defaultOptions.queries,
            ...this.getQueryDefaults(options.queryKey),
            ...options,
            _defaulted: true
        };
        if (!defaultedOptions.queryHash) {
            defaultedOptions.queryHash = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hashQueryKeyByOptions"])(defaultedOptions.queryKey, defaultedOptions);
        }
        if (defaultedOptions.refetchOnReconnect === void 0) {
            defaultedOptions.refetchOnReconnect = defaultedOptions.networkMode !== "always";
        }
        if (defaultedOptions.throwOnError === void 0) {
            defaultedOptions.throwOnError = !!defaultedOptions.suspense;
        }
        if (!defaultedOptions.networkMode && defaultedOptions.persister) {
            defaultedOptions.networkMode = "offlineFirst";
        }
        if (defaultedOptions.enabled !== true && defaultedOptions.queryFn === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skipToken"]) {
            defaultedOptions.enabled = false;
        }
        return defaultedOptions;
    }
    defaultMutationOptions(options) {
        if (options?._defaulted) {
            return options;
        }
        return {
            ...this.#defaultOptions.mutations,
            ...options?.mutationKey && this.getMutationDefaults(options.mutationKey),
            ...options,
            _defaulted: true
        };
    }
    clear() {
        this.#queryCache.clear();
        this.#mutationCache.clear();
    }
};
;
 //# sourceMappingURL=queryClient.js.map
}}),
"[project]/node_modules/.pnpm/@trpc+react-query@11.0.0-rc.648_@tanstack+react-query@5.61.4_react@18.3.1__@trpc+client@11.0._5k57w2tadf4jzgdl77fm5yaiue/node_modules/@trpc/react-query/dist/internals/getQueryKey.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getMutationKey": (()=>getMutationKey),
    "getMutationKeyInternal": (()=>getMutationKeyInternal),
    "getQueryKey": (()=>getQueryKey),
    "getQueryKeyInternal": (()=>getQueryKeyInternal)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/utils.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/utils.js [app-rsc] (ecmascript)");
;
;
/**
 * To allow easy interactions with groups of related queries, such as
 * invalidating all queries of a router, we use an array as the path when
 * storing in tanstack query.
 **/ function getQueryKeyInternal(path, input, type) {
    // Construct a query key that is easy to destructure and flexible for
    // partial selecting etc.
    // https://github.com/trpc/trpc/issues/3128
    // some parts of the path may be dot-separated, split them up
    const splitPath = path.flatMap((part)=>part.split('.'));
    if (!input && (!type || type === 'any')) {
        // this matches also all mutations (see `getMutationKeyInternal`)
        // for `utils.invalidate()` to match all queries (including vanilla react-query)
        // we don't want nested array if path is empty, i.e. `[]` instead of `[[]]`
        return splitPath.length ? [
            splitPath
        ] : [];
    }
    if (type === 'infinite' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$utils$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isObject"])(input) && ('direction' in input || 'cursor' in input)) {
        const { cursor: _, direction: __, ...inputWithoutCursorAndDirection } = input;
        return [
            splitPath,
            {
                input: inputWithoutCursorAndDirection,
                type: 'infinite'
            }
        ];
    }
    return [
        splitPath,
        {
            ...typeof input !== 'undefined' && input !== __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["skipToken"] && {
                input: input
            },
            ...type && type !== 'any' && {
                type: type
            }
        }
    ];
}
function getMutationKeyInternal(path) {
    return getQueryKeyInternal(path, undefined, 'any');
}
/**
 * Method to extract the query key for a procedure
 * @param procedureOrRouter - procedure or AnyRouter
 * @param input - input to procedureOrRouter
 * @param type - defaults to `any`
 * @see https://trpc.io/docs/v11/getQueryKey
 */ function getQueryKey(procedureOrRouter, ..._params) {
    const [input, type] = _params;
    // @ts-expect-error - we don't expose _def on the type layer
    const path = procedureOrRouter._def().path;
    const queryKey = getQueryKeyInternal(path, input, type ?? 'any');
    return queryKey;
}
/**
 * Method to extract the mutation key for a procedure
 * @param procedure - procedure
 * @see https://trpc.io/docs/v11/getQueryKey#mutations
 */ function getMutationKey(procedure) {
    // @ts-expect-error - we don't expose _def on the type layer
    const path = procedure._def().path;
    return getMutationKeyInternal(path);
}
;
}}),
"[project]/node_modules/.pnpm/@trpc+react-query@11.0.0-rc.648_@tanstack+react-query@5.61.4_react@18.3.1__@trpc+client@11.0._5k57w2tadf4jzgdl77fm5yaiue/node_modules/@trpc/react-query/dist/rsc.mjs [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "createHydrationHelpers": (()=>createHydrationHelpers)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import.mjs [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$react$2d$query$40$11$2e$0$2e$0$2d$rc$2e$648_$40$tanstack$2b$react$2d$query$40$5$2e$61$2e$4_react$40$18$2e$3$2e$1_$5f40$trpc$2b$client$40$11$2e$0$2e$_5k57w2tadf4jzgdl77fm5yaiue$2f$node_modules$2f40$trpc$2f$react$2d$query$2f$dist$2f$internals$2f$getQueryKey$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+react-query@11.0.0-rc.648_@tanstack+react-query@5.61.4_react@18.3.1__@trpc+client@11.0._5k57w2tadf4jzgdl77fm5yaiue/node_modules/@trpc/react-query/dist/internals/getQueryKey.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$createProxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@trpc+server@11.0.0-rc.648_typescript@5.7.2/node_modules/@trpc/server/dist/unstable-core-do-not-import/createProxy.mjs [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+query-core@5.61.4/node_modules/@tanstack/query-core/build/modern/hydration.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$61$2e$4_react$40$18$2e$3$2e$1$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$HydrationBoundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.61.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js [app-rsc] (ecmascript)");
;
;
;
;
/// <reference types="react/canary" />
const HELPERS = [
    'prefetch',
    'prefetchInfinite'
];
// ts-prune-ignore-next
/**
 * @note This requires `@tanstack/react-query@^5.49.0`
 * @note Make sure to have `dehydrate.serializeData` and `hydrate.deserializeData`
 * set to your data transformer in your `QueryClient` factory.
 * @example
 * ```ts
 * export const createQueryClient = () =>
 *   new QueryClient({
 *     defaultOptions: {
 *       dehydrate: {
 *         serializeData: transformer.serialize,
 *       },
 *       hydrate: {
 *         deserializeData: transformer.deserialize,
 *       },
 *     },
 *   });
 * ```
 */ function createHydrationHelpers(caller, getQueryClient) {
    const wrappedProxy = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$server$40$11$2e$0$2e$0$2d$rc$2e$648_typescript$40$5$2e$7$2e$2$2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$unstable$2d$core$2d$do$2d$not$2d$import$2f$createProxy$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createRecursiveProxy"])(async (opts)=>{
        const path = [
            ...opts.path
        ];
        const args = [
            ...opts.args
        ];
        const proc = path.reduce((acc, key)=>HELPERS.includes(key) ? acc : acc[key], caller);
        const input = args[0];
        const promise = proc(input);
        const helper = path.pop();
        if (helper === 'prefetch') {
            const args1 = args[1];
            return getQueryClient().prefetchQuery({
                ...args1,
                queryKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$react$2d$query$40$11$2e$0$2e$0$2d$rc$2e$648_$40$tanstack$2b$react$2d$query$40$5$2e$61$2e$4_react$40$18$2e$3$2e$1_$5f40$trpc$2b$client$40$11$2e$0$2e$_5k57w2tadf4jzgdl77fm5yaiue$2f$node_modules$2f40$trpc$2f$react$2d$query$2f$dist$2f$internals$2f$getQueryKey$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQueryKeyInternal"])(path, input, 'query'),
                queryFn: ()=>promise
            });
        }
        if (helper === 'prefetchInfinite') {
            const args1 = args[1];
            return getQueryClient().prefetchInfiniteQuery({
                ...args1,
                queryKey: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$trpc$2b$react$2d$query$40$11$2e$0$2e$0$2d$rc$2e$648_$40$tanstack$2b$react$2d$query$40$5$2e$61$2e$4_react$40$18$2e$3$2e$1_$5f40$trpc$2b$client$40$11$2e$0$2e$_5k57w2tadf4jzgdl77fm5yaiue$2f$node_modules$2f40$trpc$2f$react$2d$query$2f$dist$2f$internals$2f$getQueryKey$2e$mjs__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getQueryKeyInternal"])(path, input, 'infinite'),
                queryFn: ()=>promise,
                initialPageParam: args1?.initialCursor ?? null
            });
        }
        return promise;
    });
    function HydrateClient(props) {
        const dehydratedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$query$2d$core$40$5$2e$61$2e$4$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$hydration$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["dehydrate"])(getQueryClient());
        return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__.createElement(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$61$2e$4_react$40$18$2e$3$2e$1$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$HydrationBoundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["HydrationBoundary"], {
            state: dehydratedState
        }, props.children);
    }
    return {
        /***
     * Wrapped caller with prefetch helpers
     * Can be used as a regular [server-side caller](https://trpc.io/docs/server/server-side-calls)
     * or using prefetch helpers to put the promise into the QueryClient cache
     * @example
     * ```ts
     * const data = await trpc.post.get("postId");
     *
     * // or
     * void trpc.post.get.prefetch("postId");
     * ```
     */ trpc: wrappedProxy,
        /**
     * HoC to hydrate the query client for a client component
     * to pick up the prefetched promise and skip an initial
     * client-side fetch.
     * @example
     * ```tsx
     * // MyRSC.tsx
     * const MyRSC = ({ params }) => {
     *   void trpc.post.get.prefetch(params.postId);
     *
     *   return (
     *     <HydrateClient>
     *       <MyCC postId={params.postId} />
     *     </HydrateClient>
     *    );
     * };
     *
     * // MyCC.tsx
     * "use client"
     * const MyCC = ({ postId }) => {
     *   const { data: post } = trpc.post.get.useQuery(postId);
     *   return <div>{post.title}</div>;
     * };
     * ```
     */ HydrateClient
    };
}
;
}}),
"[project]/node_modules/.pnpm/@tanstack+react-query@5.61.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js (client proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "HydrationBoundary": (()=>HydrationBoundary)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const HydrationBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HydrationBoundary() from the server but HydrationBoundary is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@tanstack+react-query@5.61.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js <module evaluation>", "HydrationBoundary");
}}),
"[project]/node_modules/.pnpm/@tanstack+react-query@5.61.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js (client proxy)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "HydrationBoundary": (()=>HydrationBoundary)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.0.3_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const HydrationBoundary = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$0$2e$3_react$2d$dom$40$18$2e$3$2e$1_react$40$18$2e$3$2e$1_$5f$react$40$18$2e$3$2e$1$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call HydrationBoundary() from the server but HydrationBoundary is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/.pnpm/@tanstack+react-query@5.61.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js", "HydrationBoundary");
}}),
"[project]/node_modules/.pnpm/@tanstack+react-query@5.61.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$61$2e$4_react$40$18$2e$3$2e$1$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$HydrationBoundary$2e$js__$28$client__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.61.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js (client proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$61$2e$4_react$40$18$2e$3$2e$1$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$HydrationBoundary$2e$js__$28$client__proxy$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/@tanstack+react-query@5.61.4_react@18.3.1/node_modules/@tanstack/react-query/build/modern/HydrationBoundary.js (client proxy)");
;
__turbopack_export_namespace__(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$tanstack$2b$react$2d$query$40$5$2e$61$2e$4_react$40$18$2e$3$2e$1$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$HydrationBoundary$2e$js__$28$client__proxy$29$__);
}}),
"[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/double-indexed-kv.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DoubleIndexedKV": (()=>DoubleIndexedKV)
});
class DoubleIndexedKV {
    constructor(){
        this.keyToValue = new Map();
        this.valueToKey = new Map();
    }
    set(key, value) {
        this.keyToValue.set(key, value);
        this.valueToKey.set(value, key);
    }
    getByKey(key) {
        return this.keyToValue.get(key);
    }
    getByValue(value) {
        return this.valueToKey.get(value);
    }
    clear() {
        this.keyToValue.clear();
        this.valueToKey.clear();
    }
} //# sourceMappingURL=double-indexed-kv.js.map
}}),
"[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/registry.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Registry": (()=>Registry)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$double$2d$indexed$2d$kv$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/double-indexed-kv.js [app-rsc] (ecmascript)");
;
class Registry {
    constructor(generateIdentifier){
        this.generateIdentifier = generateIdentifier;
        this.kv = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$double$2d$indexed$2d$kv$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["DoubleIndexedKV"]();
    }
    register(value, identifier) {
        if (this.kv.getByValue(value)) {
            return;
        }
        if (!identifier) {
            identifier = this.generateIdentifier(value);
        }
        this.kv.set(identifier, value);
    }
    clear() {
        this.kv.clear();
    }
    getIdentifier(value) {
        return this.kv.getByValue(value);
    }
    getValue(identifier) {
        return this.kv.getByKey(identifier);
    }
} //# sourceMappingURL=registry.js.map
}}),
"[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/class-registry.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "ClassRegistry": (()=>ClassRegistry)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/registry.js [app-rsc] (ecmascript)");
;
class ClassRegistry extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Registry"] {
    constructor(){
        super((c)=>c.name);
        this.classToAllowedProps = new Map();
    }
    register(value, options) {
        if (typeof options === 'object') {
            if (options.allowProps) {
                this.classToAllowedProps.set(value, options.allowProps);
            }
            super.register(value, options.identifier);
        } else {
            super.register(value, options);
        }
    }
    getAllowedProps(value) {
        return this.classToAllowedProps.get(value);
    }
} //# sourceMappingURL=class-registry.js.map
}}),
"[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/util.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "find": (()=>find),
    "findArr": (()=>findArr),
    "forEach": (()=>forEach),
    "includes": (()=>includes)
});
function valuesOfObj(record) {
    if ('values' in Object) {
        // eslint-disable-next-line es5/no-es6-methods
        return Object.values(record);
    }
    const values = [];
    // eslint-disable-next-line no-restricted-syntax
    for(const key in record){
        if (record.hasOwnProperty(key)) {
            values.push(record[key]);
        }
    }
    return values;
}
function find(record, predicate) {
    const values = valuesOfObj(record);
    if ('find' in values) {
        // eslint-disable-next-line es5/no-es6-methods
        return values.find(predicate);
    }
    const valuesNotNever = values;
    for(let i = 0; i < valuesNotNever.length; i++){
        const value = valuesNotNever[i];
        if (predicate(value)) {
            return value;
        }
    }
    return undefined;
}
function forEach(record, run) {
    Object.entries(record).forEach(([key, value])=>run(value, key));
}
function includes(arr, value) {
    return arr.indexOf(value) !== -1;
}
function findArr(record, predicate) {
    for(let i = 0; i < record.length; i++){
        const value = record[i];
        if (predicate(value)) {
            return value;
        }
    }
    return undefined;
} //# sourceMappingURL=util.js.map
}}),
"[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/custom-transformer-registry.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "CustomTransformerRegistry": (()=>CustomTransformerRegistry)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/util.js [app-rsc] (ecmascript)");
;
class CustomTransformerRegistry {
    constructor(){
        this.transfomers = {};
    }
    register(transformer) {
        this.transfomers[transformer.name] = transformer;
    }
    findApplicable(v) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["find"])(this.transfomers, (transformer)=>transformer.isApplicable(v));
    }
    findByName(name) {
        return this.transfomers[name];
    }
} //# sourceMappingURL=custom-transformer-registry.js.map
}}),
"[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/is.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "isArray": (()=>isArray),
    "isBigint": (()=>isBigint),
    "isBoolean": (()=>isBoolean),
    "isDate": (()=>isDate),
    "isEmptyObject": (()=>isEmptyObject),
    "isError": (()=>isError),
    "isInfinite": (()=>isInfinite),
    "isMap": (()=>isMap),
    "isNaNValue": (()=>isNaNValue),
    "isNull": (()=>isNull),
    "isNumber": (()=>isNumber),
    "isPlainObject": (()=>isPlainObject),
    "isPrimitive": (()=>isPrimitive),
    "isRegExp": (()=>isRegExp),
    "isSet": (()=>isSet),
    "isString": (()=>isString),
    "isSymbol": (()=>isSymbol),
    "isTypedArray": (()=>isTypedArray),
    "isURL": (()=>isURL),
    "isUndefined": (()=>isUndefined)
});
const getType = (payload)=>Object.prototype.toString.call(payload).slice(8, -1);
const isUndefined = (payload)=>typeof payload === 'undefined';
const isNull = (payload)=>payload === null;
const isPlainObject = (payload)=>{
    if (typeof payload !== 'object' || payload === null) return false;
    if (payload === Object.prototype) return false;
    if (Object.getPrototypeOf(payload) === null) return true;
    return Object.getPrototypeOf(payload) === Object.prototype;
};
const isEmptyObject = (payload)=>isPlainObject(payload) && Object.keys(payload).length === 0;
const isArray = (payload)=>Array.isArray(payload);
const isString = (payload)=>typeof payload === 'string';
const isNumber = (payload)=>typeof payload === 'number' && !isNaN(payload);
const isBoolean = (payload)=>typeof payload === 'boolean';
const isRegExp = (payload)=>payload instanceof RegExp;
const isMap = (payload)=>payload instanceof Map;
const isSet = (payload)=>payload instanceof Set;
const isSymbol = (payload)=>getType(payload) === 'Symbol';
const isDate = (payload)=>payload instanceof Date && !isNaN(payload.valueOf());
const isError = (payload)=>payload instanceof Error;
const isNaNValue = (payload)=>typeof payload === 'number' && isNaN(payload);
const isPrimitive = (payload)=>isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);
const isBigint = (payload)=>typeof payload === 'bigint';
const isInfinite = (payload)=>payload === Infinity || payload === -Infinity;
const isTypedArray = (payload)=>ArrayBuffer.isView(payload) && !(payload instanceof DataView);
const isURL = (payload)=>payload instanceof URL; //# sourceMappingURL=is.js.map
}}),
"[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/pathstringifier.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "escapeKey": (()=>escapeKey),
    "parsePath": (()=>parsePath),
    "stringifyPath": (()=>stringifyPath)
});
const escapeKey = (key)=>key.replace(/\./g, '\\.');
const stringifyPath = (path)=>path.map(String).map(escapeKey).join('.');
const parsePath = (string)=>{
    const result = [];
    let segment = '';
    for(let i = 0; i < string.length; i++){
        let char = string.charAt(i);
        const isEscapedDot = char === '\\' && string.charAt(i + 1) === '.';
        if (isEscapedDot) {
            segment += '.';
            i++;
            continue;
        }
        const isEndOfSegment = char === '.';
        if (isEndOfSegment) {
            result.push(segment);
            segment = '';
            continue;
        }
        segment += char;
    }
    const lastSegment = segment;
    result.push(lastSegment);
    return result;
}; //# sourceMappingURL=pathstringifier.js.map
}}),
"[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/transformer.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "isInstanceOfRegisteredClass": (()=>isInstanceOfRegisteredClass),
    "transformValue": (()=>transformValue),
    "untransformValue": (()=>untransformValue)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/is.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/util.js [app-rsc] (ecmascript)");
;
;
function simpleTransformation(isApplicable, annotation, transform, untransform) {
    return {
        isApplicable,
        annotation,
        transform,
        untransform
    };
}
const simpleRules = [
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isUndefined"], 'undefined', ()=>null, ()=>undefined),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isBigint"], 'bigint', (v)=>v.toString(), (v)=>{
        if (typeof BigInt !== 'undefined') {
            return BigInt(v);
        }
        console.error('Please add a BigInt polyfill.');
        return v;
    }),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isDate"], 'Date', (v)=>v.toISOString(), (v)=>new Date(v)),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isError"], 'Error', (v, superJson)=>{
        const baseError = {
            name: v.name,
            message: v.message
        };
        superJson.allowedErrorProps.forEach((prop)=>{
            baseError[prop] = v[prop];
        });
        return baseError;
    }, (v, superJson)=>{
        const e = new Error(v.message);
        e.name = v.name;
        e.stack = v.stack;
        superJson.allowedErrorProps.forEach((prop)=>{
            e[prop] = v[prop];
        });
        return e;
    }),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isRegExp"], 'regexp', (v)=>'' + v, (regex)=>{
        const body = regex.slice(1, regex.lastIndexOf('/'));
        const flags = regex.slice(regex.lastIndexOf('/') + 1);
        return new RegExp(body, flags);
    }),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSet"], 'set', // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (v)=>[
            ...v.values()
        ], (v)=>new Set(v)),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isMap"], 'map', (v)=>[
            ...v.entries()
        ], (v)=>new Map(v)),
    simpleTransformation((v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNaNValue"])(v) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInfinite"])(v), 'number', (v)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isNaNValue"])(v)) {
            return 'NaN';
        }
        if (v > 0) {
            return 'Infinity';
        } else {
            return '-Infinity';
        }
    }, Number),
    simpleTransformation((v)=>v === 0 && 1 / v === -Infinity, 'number', ()=>{
        return '-0';
    }, Number),
    simpleTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isURL"], 'URL', (v)=>v.toString(), (v)=>new URL(v))
];
function compositeTransformation(isApplicable, annotation, transform, untransform) {
    return {
        isApplicable,
        annotation,
        transform,
        untransform
    };
}
const symbolRule = compositeTransformation((s, superJson)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSymbol"])(s)) {
        const isRegistered = !!superJson.symbolRegistry.getIdentifier(s);
        return isRegistered;
    }
    return false;
}, (s, superJson)=>{
    const identifier = superJson.symbolRegistry.getIdentifier(s);
    return [
        'symbol',
        identifier
    ];
}, (v)=>v.description, (_, a, superJson)=>{
    const value = superJson.symbolRegistry.getValue(a[1]);
    if (!value) {
        throw new Error('Trying to deserialize unknown symbol');
    }
    return value;
});
const constructorToName = [
    Int8Array,
    Uint8Array,
    Int16Array,
    Uint16Array,
    Int32Array,
    Uint32Array,
    Float32Array,
    Float64Array,
    Uint8ClampedArray
].reduce((obj, ctor)=>{
    obj[ctor.name] = ctor;
    return obj;
}, {});
const typedArrayRule = compositeTransformation(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isTypedArray"], (v)=>[
        'typed-array',
        v.constructor.name
    ], (v)=>[
        ...v
    ], (v, a)=>{
    const ctor = constructorToName[a[1]];
    if (!ctor) {
        throw new Error('Trying to deserialize unknown typed array');
    }
    return new ctor(v);
});
function isInstanceOfRegisteredClass(potentialClass, superJson) {
    if (potentialClass?.constructor) {
        const isRegistered = !!superJson.classRegistry.getIdentifier(potentialClass.constructor);
        return isRegistered;
    }
    return false;
}
const classRule = compositeTransformation(isInstanceOfRegisteredClass, (clazz, superJson)=>{
    const identifier = superJson.classRegistry.getIdentifier(clazz.constructor);
    return [
        'class',
        identifier
    ];
}, (clazz, superJson)=>{
    const allowedProps = superJson.classRegistry.getAllowedProps(clazz.constructor);
    if (!allowedProps) {
        return {
            ...clazz
        };
    }
    const result = {};
    allowedProps.forEach((prop)=>{
        result[prop] = clazz[prop];
    });
    return result;
}, (v, a, superJson)=>{
    const clazz = superJson.classRegistry.getValue(a[1]);
    if (!clazz) {
        throw new Error('Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564');
    }
    return Object.assign(Object.create(clazz.prototype), v);
});
const customRule = compositeTransformation((value, superJson)=>{
    return !!superJson.customTransformerRegistry.findApplicable(value);
}, (value, superJson)=>{
    const transformer = superJson.customTransformerRegistry.findApplicable(value);
    return [
        'custom',
        transformer.name
    ];
}, (value, superJson)=>{
    const transformer = superJson.customTransformerRegistry.findApplicable(value);
    return transformer.serialize(value);
}, (v, a, superJson)=>{
    const transformer = superJson.customTransformerRegistry.findByName(a[1]);
    if (!transformer) {
        throw new Error('Trying to deserialize unknown custom value');
    }
    return transformer.deserialize(v);
});
const compositeRules = [
    classRule,
    symbolRule,
    customRule,
    typedArrayRule
];
const transformValue = (value, superJson)=>{
    const applicableCompositeRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findArr"])(compositeRules, (rule)=>rule.isApplicable(value, superJson));
    if (applicableCompositeRule) {
        return {
            value: applicableCompositeRule.transform(value, superJson),
            type: applicableCompositeRule.annotation(value, superJson)
        };
    }
    const applicableSimpleRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["findArr"])(simpleRules, (rule)=>rule.isApplicable(value, superJson));
    if (applicableSimpleRule) {
        return {
            value: applicableSimpleRule.transform(value, superJson),
            type: applicableSimpleRule.annotation
        };
    }
    return undefined;
};
const simpleRulesByAnnotation = {};
simpleRules.forEach((rule)=>{
    simpleRulesByAnnotation[rule.annotation] = rule;
});
const untransformValue = (json, type, superJson)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArray"])(type)) {
        switch(type[0]){
            case 'symbol':
                return symbolRule.untransform(json, type, superJson);
            case 'class':
                return classRule.untransform(json, type, superJson);
            case 'custom':
                return customRule.untransform(json, type, superJson);
            case 'typed-array':
                return typedArrayRule.untransform(json, type, superJson);
            default:
                throw new Error('Unknown transformation: ' + type);
        }
    } else {
        const transformation = simpleRulesByAnnotation[type];
        if (!transformation) {
            throw new Error('Unknown transformation: ' + type);
        }
        return transformation.untransform(json, superJson);
    }
}; //# sourceMappingURL=transformer.js.map
}}),
"[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/accessDeep.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getDeep": (()=>getDeep),
    "setDeep": (()=>setDeep)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/is.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/util.js [app-rsc] (ecmascript)");
;
;
const getNthKey = (value, n)=>{
    const keys = value.keys();
    while(n > 0){
        keys.next();
        n--;
    }
    return keys.next().value;
};
function validatePath(path) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["includes"])(path, '__proto__')) {
        throw new Error('__proto__ is not allowed as a property');
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["includes"])(path, 'prototype')) {
        throw new Error('prototype is not allowed as a property');
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["includes"])(path, 'constructor')) {
        throw new Error('constructor is not allowed as a property');
    }
}
const getDeep = (object, path)=>{
    validatePath(path);
    for(let i = 0; i < path.length; i++){
        const key = path[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSet"])(object)) {
            object = getNthKey(object, +key);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isMap"])(object)) {
            const row = +key;
            const type = +path[++i] === 0 ? 'key' : 'value';
            const keyOfRow = getNthKey(object, row);
            switch(type){
                case 'key':
                    object = keyOfRow;
                    break;
                case 'value':
                    object = object.get(keyOfRow);
                    break;
            }
        } else {
            object = object[key];
        }
    }
    return object;
};
const setDeep = (object, path, mapper)=>{
    validatePath(path);
    if (path.length === 0) {
        return mapper(object);
    }
    let parent = object;
    for(let i = 0; i < path.length - 1; i++){
        const key = path[i];
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArray"])(parent)) {
            const index = +key;
            parent = parent[index];
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(parent)) {
            parent = parent[key];
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSet"])(parent)) {
            const row = +key;
            parent = getNthKey(parent, row);
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isMap"])(parent)) {
            const isEnd = i === path.length - 2;
            if (isEnd) {
                break;
            }
            const row = +key;
            const type = +path[++i] === 0 ? 'key' : 'value';
            const keyOfRow = getNthKey(parent, row);
            switch(type){
                case 'key':
                    parent = keyOfRow;
                    break;
                case 'value':
                    parent = parent.get(keyOfRow);
                    break;
            }
        }
    }
    const lastKey = path[path.length - 1];
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArray"])(parent)) {
        parent[+lastKey] = mapper(parent[+lastKey]);
    } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(parent)) {
        parent[lastKey] = mapper(parent[lastKey]);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSet"])(parent)) {
        const oldValue = getNthKey(parent, +lastKey);
        const newValue = mapper(oldValue);
        if (oldValue !== newValue) {
            parent.delete(oldValue);
            parent.add(newValue);
        }
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isMap"])(parent)) {
        const row = +path[path.length - 2];
        const keyToRow = getNthKey(parent, row);
        const type = +lastKey === 0 ? 'key' : 'value';
        switch(type){
            case 'key':
                {
                    const newKey = mapper(keyToRow);
                    parent.set(newKey, parent.get(keyToRow));
                    if (newKey !== keyToRow) {
                        parent.delete(keyToRow);
                    }
                    break;
                }
            case 'value':
                {
                    parent.set(keyToRow, mapper(parent.get(keyToRow)));
                    break;
                }
        }
    }
    return object;
}; //# sourceMappingURL=accessDeep.js.map
}}),
"[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/plainer.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "applyReferentialEqualityAnnotations": (()=>applyReferentialEqualityAnnotations),
    "applyValueAnnotations": (()=>applyValueAnnotations),
    "generateReferentialEqualityAnnotations": (()=>generateReferentialEqualityAnnotations),
    "walker": (()=>walker)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/is.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/pathstringifier.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$transformer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/transformer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/util.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$accessDeep$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/accessDeep.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
function traverse(tree, walker, origin = []) {
    if (!tree) {
        return;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArray"])(tree)) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forEach"])(tree, (subtree, key)=>traverse(subtree, walker, [
                ...origin,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePath"])(key)
            ]));
        return;
    }
    const [nodeValue, children] = tree;
    if (children) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forEach"])(children, (child, key)=>{
            traverse(child, walker, [
                ...origin,
                ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePath"])(key)
            ]);
        });
    }
    walker(nodeValue, origin);
}
function applyValueAnnotations(plain, annotations, superJson) {
    traverse(annotations, (type, path)=>{
        plain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$accessDeep$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setDeep"])(plain, path, (v)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$transformer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["untransformValue"])(v, type, superJson));
    });
    return plain;
}
function applyReferentialEqualityAnnotations(plain, annotations) {
    function apply(identicalPaths, path) {
        const object = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$accessDeep$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getDeep"])(plain, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePath"])(path));
        identicalPaths.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePath"]).forEach((identicalObjectPath)=>{
            plain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$accessDeep$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setDeep"])(plain, identicalObjectPath, ()=>object);
        });
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArray"])(annotations)) {
        const [root, other] = annotations;
        root.forEach((identicalPath)=>{
            plain = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$accessDeep$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["setDeep"])(plain, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["parsePath"])(identicalPath), ()=>plain);
        });
        if (other) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forEach"])(other, apply);
        }
    } else {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forEach"])(annotations, apply);
    }
    return plain;
}
const isDeep = (object, superJson)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(object) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArray"])(object) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isMap"])(object) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isSet"])(object) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$transformer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isInstanceOfRegisteredClass"])(object, superJson);
function addIdentity(object, path, identities) {
    const existingSet = identities.get(object);
    if (existingSet) {
        existingSet.push(path);
    } else {
        identities.set(object, [
            path
        ]);
    }
}
function generateReferentialEqualityAnnotations(identitites, dedupe) {
    const result = {};
    let rootEqualityPaths = undefined;
    identitites.forEach((paths)=>{
        if (paths.length <= 1) {
            return;
        }
        // if we're not deduping, all of these objects continue existing.
        // putting the shortest path first makes it easier to parse for humans
        // if we're deduping though, only the first entry will still exist, so we can't do this optimisation.
        if (!dedupe) {
            paths = paths.map((path)=>path.map(String)).sort((a, b)=>a.length - b.length);
        }
        const [representativePath, ...identicalPaths] = paths;
        if (representativePath.length === 0) {
            rootEqualityPaths = identicalPaths.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringifyPath"]);
        } else {
            result[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringifyPath"])(representativePath)] = identicalPaths.map(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["stringifyPath"]);
        }
    });
    if (rootEqualityPaths) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEmptyObject"])(result)) {
            return [
                rootEqualityPaths
            ];
        } else {
            return [
                rootEqualityPaths,
                result
            ];
        }
    } else {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEmptyObject"])(result) ? undefined : result;
    }
}
const walker = (object, identities, superJson, dedupe, path = [], objectsInThisPath = [], seenObjects = new Map())=>{
    const primitive = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPrimitive"])(object);
    if (!primitive) {
        addIdentity(object, path, identities);
        const seen = seenObjects.get(object);
        if (seen) {
            // short-circuit result if we've seen this object before
            return dedupe ? {
                transformedValue: null
            } : seen;
        }
    }
    if (!isDeep(object, superJson)) {
        const transformed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$transformer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformValue"])(object, superJson);
        const result = transformed ? {
            transformedValue: transformed.value,
            annotations: [
                transformed.type
            ]
        } : {
            transformedValue: object
        };
        if (!primitive) {
            seenObjects.set(object, result);
        }
        return result;
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["includes"])(objectsInThisPath, object)) {
        // prevent circular references
        return {
            transformedValue: null
        };
    }
    const transformationResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$transformer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["transformValue"])(object, superJson);
    const transformed = transformationResult?.value ?? object;
    const transformedValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArray"])(transformed) ? [] : {};
    const innerAnnotations = {};
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forEach"])(transformed, (value, index)=>{
        if (index === '__proto__' || index === 'constructor' || index === 'prototype') {
            throw new Error(`Detected property ${index}. This is a prototype pollution risk, please remove it from your object.`);
        }
        const recursiveResult = walker(value, identities, superJson, dedupe, [
            ...path,
            index
        ], [
            ...objectsInThisPath,
            object
        ], seenObjects);
        transformedValue[index] = recursiveResult.transformedValue;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArray"])(recursiveResult.annotations)) {
            innerAnnotations[index] = recursiveResult.annotations;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(recursiveResult.annotations)) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$util$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forEach"])(recursiveResult.annotations, (tree, key)=>{
                innerAnnotations[(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$pathstringifier$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["escapeKey"])(index) + '.' + key] = tree;
            });
        }
    });
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$is$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isEmptyObject"])(innerAnnotations) ? {
        transformedValue,
        annotations: !!transformationResult ? [
            transformationResult.type
        ] : undefined
    } : {
        transformedValue,
        annotations: !!transformationResult ? [
            transformationResult.type,
            innerAnnotations
        ] : innerAnnotations
    };
    if (!primitive) {
        seenObjects.set(object, result);
    }
    return result;
}; //# sourceMappingURL=plainer.js.map
}}),
"[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "SuperJSON": (()=>SuperJSON),
    "allowErrorProps": (()=>allowErrorProps),
    "default": (()=>SuperJSON),
    "deserialize": (()=>deserialize),
    "parse": (()=>parse),
    "registerClass": (()=>registerClass),
    "registerCustom": (()=>registerCustom),
    "registerSymbol": (()=>registerSymbol),
    "serialize": (()=>serialize),
    "stringify": (()=>stringify)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$class$2d$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/class-registry.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/registry.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$custom$2d$transformer$2d$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/custom-transformer-registry.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$plainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/superjson@2.2.1/node_modules/superjson/dist/plainer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$copy$2d$anything$40$3$2e$0$2e$5$2f$node_modules$2f$copy$2d$anything$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/copy-anything@3.0.5/node_modules/copy-anything/dist/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
class SuperJSON {
    /**
     * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
     */ constructor({ dedupe = false } = {}){
        this.classRegistry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$class$2d$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ClassRegistry"]();
        this.symbolRegistry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Registry"]((s)=>s.description ?? '');
        this.customTransformerRegistry = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$custom$2d$transformer$2d$registry$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CustomTransformerRegistry"]();
        this.allowedErrorProps = [];
        this.dedupe = dedupe;
    }
    serialize(object) {
        const identities = new Map();
        const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$plainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["walker"])(object, identities, this, this.dedupe);
        const res = {
            json: output.transformedValue
        };
        if (output.annotations) {
            res.meta = {
                ...res.meta,
                values: output.annotations
            };
        }
        const equalityAnnotations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$plainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["generateReferentialEqualityAnnotations"])(identities, this.dedupe);
        if (equalityAnnotations) {
            res.meta = {
                ...res.meta,
                referentialEqualities: equalityAnnotations
            };
        }
        return res;
    }
    deserialize(payload) {
        const { json, meta } = payload;
        let result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$copy$2d$anything$40$3$2e$0$2e$5$2f$node_modules$2f$copy$2d$anything$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["copy"])(json);
        if (meta?.values) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$plainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["applyValueAnnotations"])(result, meta.values, this);
        }
        if (meta?.referentialEqualities) {
            result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$superjson$40$2$2e$2$2e$1$2f$node_modules$2f$superjson$2f$dist$2f$plainer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["applyReferentialEqualityAnnotations"])(result, meta.referentialEqualities);
        }
        return result;
    }
    stringify(object) {
        return JSON.stringify(this.serialize(object));
    }
    parse(string) {
        return this.deserialize(JSON.parse(string));
    }
    registerClass(v, options) {
        this.classRegistry.register(v, options);
    }
    registerSymbol(v, identifier) {
        this.symbolRegistry.register(v, identifier);
    }
    registerCustom(transformer, name) {
        this.customTransformerRegistry.register({
            name,
            ...transformer
        });
    }
    allowErrorProps(...props) {
        this.allowedErrorProps.push(...props);
    }
}
SuperJSON.defaultInstance = new SuperJSON();
SuperJSON.serialize = SuperJSON.defaultInstance.serialize.bind(SuperJSON.defaultInstance);
SuperJSON.deserialize = SuperJSON.defaultInstance.deserialize.bind(SuperJSON.defaultInstance);
SuperJSON.stringify = SuperJSON.defaultInstance.stringify.bind(SuperJSON.defaultInstance);
SuperJSON.parse = SuperJSON.defaultInstance.parse.bind(SuperJSON.defaultInstance);
SuperJSON.registerClass = SuperJSON.defaultInstance.registerClass.bind(SuperJSON.defaultInstance);
SuperJSON.registerSymbol = SuperJSON.defaultInstance.registerSymbol.bind(SuperJSON.defaultInstance);
SuperJSON.registerCustom = SuperJSON.defaultInstance.registerCustom.bind(SuperJSON.defaultInstance);
SuperJSON.allowErrorProps = SuperJSON.defaultInstance.allowErrorProps.bind(SuperJSON.defaultInstance);
;
const serialize = SuperJSON.serialize;
const deserialize = SuperJSON.deserialize;
const stringify = SuperJSON.stringify;
const parse = SuperJSON.parse;
const registerClass = SuperJSON.registerClass;
const registerCustom = SuperJSON.registerCustom;
const registerSymbol = SuperJSON.registerSymbol;
const allowErrorProps = SuperJSON.allowErrorProps; //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/is-what@4.1.16/node_modules/is-what/dist/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "getType": (()=>getType),
    "isAnyObject": (()=>isAnyObject),
    "isArray": (()=>isArray),
    "isBlob": (()=>isBlob),
    "isBoolean": (()=>isBoolean),
    "isDate": (()=>isDate),
    "isEmptyArray": (()=>isEmptyArray),
    "isEmptyObject": (()=>isEmptyObject),
    "isEmptyString": (()=>isEmptyString),
    "isError": (()=>isError),
    "isFile": (()=>isFile),
    "isFullArray": (()=>isFullArray),
    "isFullObject": (()=>isFullObject),
    "isFullString": (()=>isFullString),
    "isFunction": (()=>isFunction),
    "isInstanceOf": (()=>isInstanceOf),
    "isMap": (()=>isMap),
    "isNaNValue": (()=>isNaNValue),
    "isNegativeNumber": (()=>isNegativeNumber),
    "isNull": (()=>isNull),
    "isNullOrUndefined": (()=>isNullOrUndefined),
    "isNumber": (()=>isNumber),
    "isObject": (()=>isObject),
    "isObjectLike": (()=>isObjectLike),
    "isOneOf": (()=>isOneOf),
    "isPlainObject": (()=>isPlainObject),
    "isPositiveNumber": (()=>isPositiveNumber),
    "isPrimitive": (()=>isPrimitive),
    "isPromise": (()=>isPromise),
    "isRegExp": (()=>isRegExp),
    "isSet": (()=>isSet),
    "isString": (()=>isString),
    "isSymbol": (()=>isSymbol),
    "isType": (()=>isType),
    "isUndefined": (()=>isUndefined),
    "isWeakMap": (()=>isWeakMap),
    "isWeakSet": (()=>isWeakSet)
});
function getType(payload) {
    return Object.prototype.toString.call(payload).slice(8, -1);
}
function isAnyObject(payload) {
    return getType(payload) === "Object";
}
function isArray(payload) {
    return getType(payload) === "Array";
}
function isBlob(payload) {
    return getType(payload) === "Blob";
}
function isBoolean(payload) {
    return getType(payload) === "Boolean";
}
function isDate(payload) {
    return getType(payload) === "Date" && !isNaN(payload);
}
function isEmptyArray(payload) {
    return isArray(payload) && payload.length === 0;
}
function isPlainObject(payload) {
    if (getType(payload) !== "Object") return false;
    const prototype = Object.getPrototypeOf(payload);
    return !!prototype && prototype.constructor === Object && prototype === Object.prototype;
}
function isEmptyObject(payload) {
    return isPlainObject(payload) && Object.keys(payload).length === 0;
}
function isEmptyString(payload) {
    return payload === "";
}
function isError(payload) {
    return getType(payload) === "Error" || payload instanceof Error;
}
function isFile(payload) {
    return getType(payload) === "File";
}
function isFullArray(payload) {
    return isArray(payload) && payload.length > 0;
}
function isFullObject(payload) {
    return isPlainObject(payload) && Object.keys(payload).length > 0;
}
function isString(payload) {
    return getType(payload) === "String";
}
function isFullString(payload) {
    return isString(payload) && payload !== "";
}
function isFunction(payload) {
    return typeof payload === "function";
}
function isType(payload, type) {
    if (!(type instanceof Function)) {
        throw new TypeError("Type must be a function");
    }
    if (!Object.prototype.hasOwnProperty.call(type, "prototype")) {
        throw new TypeError("Type is not a class");
    }
    const name = type.name;
    return getType(payload) === name || Boolean(payload && payload.constructor === type);
}
function isInstanceOf(value, classOrClassName) {
    if (typeof classOrClassName === "function") {
        for(let p = value; p; p = Object.getPrototypeOf(p)){
            if (isType(p, classOrClassName)) {
                return true;
            }
        }
        return false;
    } else {
        for(let p = value; p; p = Object.getPrototypeOf(p)){
            if (getType(p) === classOrClassName) {
                return true;
            }
        }
        return false;
    }
}
function isMap(payload) {
    return getType(payload) === "Map";
}
function isNaNValue(payload) {
    return getType(payload) === "Number" && isNaN(payload);
}
function isNumber(payload) {
    return getType(payload) === "Number" && !isNaN(payload);
}
function isNegativeNumber(payload) {
    return isNumber(payload) && payload < 0;
}
function isNull(payload) {
    return getType(payload) === "Null";
}
function isOneOf(a, b, c, d, e) {
    return (value)=>a(value) || b(value) || !!c && c(value) || !!d && d(value) || !!e && e(value);
}
function isUndefined(payload) {
    return getType(payload) === "Undefined";
}
const isNullOrUndefined = isOneOf(isNull, isUndefined);
function isObject(payload) {
    return isPlainObject(payload);
}
function isObjectLike(payload) {
    return isAnyObject(payload);
}
function isPositiveNumber(payload) {
    return isNumber(payload) && payload > 0;
}
function isSymbol(payload) {
    return getType(payload) === "Symbol";
}
function isPrimitive(payload) {
    return isBoolean(payload) || isNull(payload) || isUndefined(payload) || isNumber(payload) || isString(payload) || isSymbol(payload);
}
function isPromise(payload) {
    return getType(payload) === "Promise";
}
function isRegExp(payload) {
    return getType(payload) === "RegExp";
}
function isSet(payload) {
    return getType(payload) === "Set";
}
function isWeakMap(payload) {
    return getType(payload) === "WeakMap";
}
function isWeakSet(payload) {
    return getType(payload) === "WeakSet";
}
;
}}),
"[project]/node_modules/.pnpm/copy-anything@3.0.5/node_modules/copy-anything/dist/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "copy": (()=>copy)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$is$2d$what$40$4$2e$1$2e$16$2f$node_modules$2f$is$2d$what$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/is-what@4.1.16/node_modules/is-what/dist/index.js [app-rsc] (ecmascript)");
;
function assignProp(carry, key, newVal, originalObject, includeNonenumerable) {
    const propType = ({}).propertyIsEnumerable.call(originalObject, key) ? "enumerable" : "nonenumerable";
    if (propType === "enumerable") carry[key] = newVal;
    if (includeNonenumerable && propType === "nonenumerable") {
        Object.defineProperty(carry, key, {
            value: newVal,
            enumerable: false,
            writable: true,
            configurable: true
        });
    }
}
function copy(target, options = {}) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$is$2d$what$40$4$2e$1$2e$16$2f$node_modules$2f$is$2d$what$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArray"])(target)) {
        return target.map((item)=>copy(item, options));
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$is$2d$what$40$4$2e$1$2e$16$2f$node_modules$2f$is$2d$what$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isPlainObject"])(target)) {
        return target;
    }
    const props = Object.getOwnPropertyNames(target);
    const symbols = Object.getOwnPropertySymbols(target);
    return [
        ...props,
        ...symbols
    ].reduce((carry, key)=>{
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$is$2d$what$40$4$2e$1$2e$16$2f$node_modules$2f$is$2d$what$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isArray"])(options.props) && !options.props.includes(key)) {
            return carry;
        }
        const val = target[key];
        const newVal = copy(val, options);
        assignProp(carry, key, newVal, target, options.nonenumerable);
        return carry;
    }, {});
}
;
}}),
"[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/interopRequireDefault.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
"[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/typeof.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
function _typeof(o) {
    "@babel/helpers - typeof";
    return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
"[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/toPrimitive.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
var _typeof = __turbopack_require__("[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/typeof.js [app-rsc] (ecmascript)")["default"];
function toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
"[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/toPropertyKey.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
var _typeof = __turbopack_require__("[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/typeof.js [app-rsc] (ecmascript)")["default"];
var toPrimitive = __turbopack_require__("[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/toPrimitive.js [app-rsc] (ecmascript)");
function toPropertyKey(t) {
    var i = toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
"[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/defineProperty.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
var toPropertyKey = __turbopack_require__("[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/toPropertyKey.js [app-rsc] (ecmascript)");
function _defineProperty(e, r, t) {
    return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[r] = t, e;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
"[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/regeneratorRuntime.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
var _typeof = __turbopack_require__("[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/typeof.js [app-rsc] (ecmascript)")["default"];
function _regeneratorRuntime() {
    "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ 
    module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
        return e;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports;
    var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function(t, e, r) {
        t[e] = r.value;
    }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag";
    function define(t, e, r) {
        return Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), t[e];
    }
    try {
        define({}, "");
    } catch (t) {
        define = function define(t, e, r) {
            return t[e] = r;
        };
    }
    function wrap(t, e, r, n) {
        var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []);
        return o(a, "_invoke", {
            value: makeInvokeMethod(t, r, c)
        }), a;
    }
    function tryCatch(t, e, r) {
        try {
            return {
                type: "normal",
                arg: t.call(e, r)
            };
        } catch (t) {
            return {
                type: "throw",
                arg: t
            };
        }
    }
    e.wrap = wrap;
    var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var p = {};
    define(p, a, function() {
        return this;
    });
    var d = Object.getPrototypeOf, v = d && d(d(values([])));
    v && v !== r && n.call(v, a) && (p = v);
    var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
    function defineIteratorMethods(t) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(e) {
            define(t, e, function(t) {
                return this._invoke(e, t);
            });
        });
    }
    function AsyncIterator(t, e) {
        function invoke(r, o, i, a) {
            var c = tryCatch(t[r], t, o);
            if ("throw" !== c.type) {
                var u = c.arg, h = u.value;
                return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function(t) {
                    invoke("next", t, i, a);
                }, function(t) {
                    invoke("throw", t, i, a);
                }) : e.resolve(h).then(function(t) {
                    u.value = t, i(u);
                }, function(t) {
                    return invoke("throw", t, i, a);
                });
            }
            a(c.arg);
        }
        var r;
        o(this, "_invoke", {
            value: function value(t, n) {
                function callInvokeWithMethodAndArg() {
                    return new e(function(e, r) {
                        invoke(t, n, e, r);
                    });
                }
                return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
            }
        });
    }
    function makeInvokeMethod(e, r, n) {
        var o = h;
        return function(i, a) {
            if (o === f) throw Error("Generator is already running");
            if (o === s) {
                if ("throw" === i) throw a;
                return {
                    value: t,
                    done: !0
                };
            }
            for(n.method = i, n.arg = a;;){
                var c = n.delegate;
                if (c) {
                    var u = maybeInvokeDelegate(c, n);
                    if (u) {
                        if (u === y) continue;
                        return u;
                    }
                }
                if ("next" === n.method) n.sent = n._sent = n.arg;
                else if ("throw" === n.method) {
                    if (o === h) throw o = s, n.arg;
                    n.dispatchException(n.arg);
                } else "return" === n.method && n.abrupt("return", n.arg);
                o = f;
                var p = tryCatch(e, r, n);
                if ("normal" === p.type) {
                    if (o = n.done ? s : l, p.arg === y) continue;
                    return {
                        value: p.arg,
                        done: n.done
                    };
                }
                "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
            }
        };
    }
    function maybeInvokeDelegate(e, r) {
        var n = r.method, o = e.iterator[n];
        if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
        var i = tryCatch(o, e.iterator, r.arg);
        if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
        var a = i.arg;
        return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
    }
    function pushTryEntry(t) {
        var e = {
            tryLoc: t[0]
        };
        1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
    }
    function resetTryEntry(t) {
        var e = t.completion || {};
        e.type = "normal", delete e.arg, t.completion = e;
    }
    function Context(t) {
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ], t.forEach(pushTryEntry, this), this.reset(!0);
    }
    function values(e) {
        if (e || "" === e) {
            var r = e[a];
            if (r) return r.call(e);
            if ("function" == typeof e.next) return e;
            if (!isNaN(e.length)) {
                var o = -1, i = function next() {
                    for(; ++o < e.length;)if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
                    return next.value = t, next.done = !0, next;
                };
                return i.next = i;
            }
        }
        throw new TypeError(_typeof(e) + " is not iterable");
    }
    return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
        value: GeneratorFunctionPrototype,
        configurable: !0
    }), o(GeneratorFunctionPrototype, "constructor", {
        value: GeneratorFunction,
        configurable: !0
    }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
        var e = "function" == typeof t && t.constructor;
        return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
    }, e.mark = function(t) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
    }, e.awrap = function(t) {
        return {
            __await: t
        };
    }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function() {
        return this;
    }), e.AsyncIterator = AsyncIterator, e.async = function(t, r, n, o, i) {
        void 0 === i && (i = Promise);
        var a = new AsyncIterator(wrap(t, r, n, o), i);
        return e.isGeneratorFunction(r) ? a : a.next().then(function(t) {
            return t.done ? t.value : a.next();
        });
    }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function() {
        return this;
    }), define(g, "toString", function() {
        return "[object Generator]";
    }), e.keys = function(t) {
        var e = Object(t), r = [];
        for(var n in e)r.push(n);
        return r.reverse(), function next() {
            for(; r.length;){
                var t = r.pop();
                if (t in e) return next.value = t, next.done = !1, next;
            }
            return next.done = !0, next;
        };
    }, e.values = values, Context.prototype = {
        constructor: Context,
        reset: function reset(e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for(var r in this)"t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
        },
        stop: function stop() {
            this.done = !0;
            var t = this.tryEntries[0].completion;
            if ("throw" === t.type) throw t.arg;
            return this.rval;
        },
        dispatchException: function dispatchException(e) {
            if (this.done) throw e;
            var r = this;
            function handle(n, o) {
                return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
            }
            for(var o = this.tryEntries.length - 1; o >= 0; --o){
                var i = this.tryEntries[o], a = i.completion;
                if ("root" === i.tryLoc) return handle("end");
                if (i.tryLoc <= this.prev) {
                    var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc");
                    if (c && u) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    } else if (c) {
                        if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
                    } else {
                        if (!u) throw Error("try statement without catch or finally");
                        if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
                    }
                }
            }
        },
        abrupt: function abrupt(t, e) {
            for(var r = this.tryEntries.length - 1; r >= 0; --r){
                var o = this.tryEntries[r];
                if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                    var i = o;
                    break;
                }
            }
            i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
            var a = i ? i.completion : {};
            return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
        },
        complete: function complete(t, e) {
            if ("throw" === t.type) throw t.arg;
            return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
        },
        finish: function finish(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
            }
        },
        "catch": function _catch(t) {
            for(var e = this.tryEntries.length - 1; e >= 0; --e){
                var r = this.tryEntries[e];
                if (r.tryLoc === t) {
                    var n = r.completion;
                    if ("throw" === n.type) {
                        var o = n.arg;
                        resetTryEntry(r);
                    }
                    return o;
                }
            }
            throw Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(e, r, n) {
            return this.delegate = {
                iterator: values(e),
                resultName: r,
                nextLoc: n
            }, "next" === this.method && (this.arg = t), y;
        }
    }, e;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
"[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/regenerator/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
// TODO(Babel 8): Remove this file.
var runtime = __turbopack_require__("[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/regeneratorRuntime.js [app-rsc] (ecmascript)")();
module.exports = runtime;
// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    if (typeof globalThis === "object") {
        globalThis.regeneratorRuntime = runtime;
    } else {
        Function("r", "regeneratorRuntime = r")(runtime);
    }
}
}}),
"[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/asyncToGenerator.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
function asyncGeneratorStep(n, t, e, r, o, a, c) {
    try {
        var i = n[a](c), u = i.value;
    } catch (n) {
        return void e(n);
    }
    i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
    return function() {
        var t = this, e = arguments;
        return new Promise(function(r, o) {
            var a = n.apply(t, e);
            function _next(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
            }
            function _throw(n) {
                asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
            }
            _next(void 0);
        });
    };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
"[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/classCallCheck.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
"[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/createClass.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
var toPropertyKey = __turbopack_require__("[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/toPropertyKey.js [app-rsc] (ecmascript)");
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
"[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/assertThisInitialized.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
"[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
var _typeof = __turbopack_require__("[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/typeof.js [app-rsc] (ecmascript)")["default"];
var assertThisInitialized = __turbopack_require__("[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/assertThisInitialized.js [app-rsc] (ecmascript)");
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return assertThisInitialized(t);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
"[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/getPrototypeOf.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
function _getPrototypeOf(t) {
    return module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _getPrototypeOf(t);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
"[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/setPrototypeOf.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
function _setPrototypeOf(t, e) {
    return module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _setPrototypeOf(t, e);
}
module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
"[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/inherits.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
var setPrototypeOf = __turbopack_require__("[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/setPrototypeOf.js [app-rsc] (ecmascript)");
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && setPrototypeOf(t, e);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
"[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/isNativeFunction.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
function _isNativeFunction(t) {
    try {
        return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
        return "function" == typeof t;
    }
}
module.exports = _isNativeFunction, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
"[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (module.exports = _isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    }, module.exports.__esModule = true, module.exports["default"] = module.exports)();
}
module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
"[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/construct.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
var isNativeReflectConstruct = __turbopack_require__("[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/isNativeReflectConstruct.js [app-rsc] (ecmascript)");
var setPrototypeOf = __turbopack_require__("[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/setPrototypeOf.js [app-rsc] (ecmascript)");
function _construct(t, e, r) {
    if (isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [
        null
    ];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && setPrototypeOf(p, r.prototype), p;
}
module.exports = _construct, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
"[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/wrapNativeSuper.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
var getPrototypeOf = __turbopack_require__("[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/getPrototypeOf.js [app-rsc] (ecmascript)");
var setPrototypeOf = __turbopack_require__("[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/setPrototypeOf.js [app-rsc] (ecmascript)");
var isNativeFunction = __turbopack_require__("[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/isNativeFunction.js [app-rsc] (ecmascript)");
var construct = __turbopack_require__("[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/construct.js [app-rsc] (ecmascript)");
function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return module.exports = _wrapNativeSuper = function _wrapNativeSuper(t) {
        if (null === t || !isNativeFunction(t)) return t;
        if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== r) {
            if (r.has(t)) return r.get(t);
            r.set(t, Wrapper);
        }
        function Wrapper() {
            return construct(t, arguments, getPrototypeOf(this).constructor);
        }
        return Wrapper.prototype = Object.create(t.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), setPrototypeOf(Wrapper, t);
    }, module.exports.__esModule = true, module.exports["default"] = module.exports, _wrapNativeSuper(t);
}
module.exports = _wrapNativeSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
"[project]/node_modules/.pnpm/@babel+runtime@7.26.0/node_modules/@babel/runtime/helpers/extends.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
function _extends() {
    return module.exports = _extends = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : ("TURBOPACK unreachable", undefined), module.exports.__esModule = true, module.exports["default"] = module.exports, _extends.apply(null, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;
}}),
"[project]/node_modules/.pnpm/oidc-token-hash@5.0.3/node_modules/oidc-token-hash/lib/shake256.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const crypto = __turbopack_require__("[externals]/ [external] (crypto, cjs)");
const [major, minor] = process.version.substring(1).split('.').map((x)=>parseInt(x, 10));
const xofOutputLength = major > 12 || major === 12 && minor >= 8;
const shake256 = xofOutputLength && crypto.getHashes().includes('shake256');
module.exports = shake256;
}}),
"[project]/node_modules/.pnpm/oidc-token-hash@5.0.3/node_modules/oidc-token-hash/lib/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
const { strict: assert } = __turbopack_require__("[externals]/ [external] (assert, cjs)");
const { createHash } = __turbopack_require__("[externals]/ [external] (crypto, cjs)");
const { format } = __turbopack_require__("[externals]/ [external] (util, cjs)");
const shake256 = __turbopack_require__("[project]/node_modules/.pnpm/oidc-token-hash@5.0.3/node_modules/oidc-token-hash/lib/shake256.js [app-rsc] (ecmascript)");
let encode;
if (Buffer.isEncoding('base64url')) {
    encode = (input)=>input.toString('base64url');
} else {
    const fromBase64 = (base64)=>base64.replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
    encode = (input)=>fromBase64(input.toString('base64'));
}
/** SPECIFICATION
 * Its (_hash) value is the base64url encoding of the left-most half of the hash of the octets of
 * the ASCII representation of the token value, where the hash algorithm used is the hash algorithm
 * used in the alg Header Parameter of the ID Token's JOSE Header. For instance, if the alg is
 * RS256, hash the token value with SHA-256, then take the left-most 128 bits and base64url encode
 * them. The _hash value is a case sensitive string.
 */ /**
 * @name getHash
 * @api private
 *
 * returns the sha length based off the JOSE alg heade value, defaults to sha256
 *
 * @param token {String} token value to generate the hash from
 * @param alg {String} ID Token JOSE header alg value (i.e. RS256, HS384, ES512, PS256)
 * @param [crv] {String} For EdDSA the curve decides what hash algorithm is used. Required for EdDSA
 */ function getHash(alg, crv) {
    switch(alg){
        case 'HS256':
        case 'RS256':
        case 'PS256':
        case 'ES256':
        case 'ES256K':
            return createHash('sha256');
        case 'HS384':
        case 'RS384':
        case 'PS384':
        case 'ES384':
            return createHash('sha384');
        case 'HS512':
        case 'RS512':
        case 'PS512':
        case 'ES512':
            return createHash('sha512');
        case 'EdDSA':
            switch(crv){
                case 'Ed25519':
                    return createHash('sha512');
                case 'Ed448':
                    if (!shake256) {
                        throw new TypeError('Ed448 *_hash calculation is not supported in your Node.js runtime version');
                    }
                    return createHash('shake256', {
                        outputLength: 114
                    });
                default:
                    throw new TypeError('unrecognized or invalid EdDSA curve provided');
            }
        default:
            throw new TypeError('unrecognized or invalid JWS algorithm provided');
    }
}
function generate(token, alg, crv) {
    const digest = getHash(alg, crv).update(token).digest();
    return encode(digest.slice(0, digest.length / 2));
}
function validate(names, actual, source, alg, crv) {
    if (typeof names.claim !== 'string' || !names.claim) {
        throw new TypeError('names.claim must be a non-empty string');
    }
    if (typeof names.source !== 'string' || !names.source) {
        throw new TypeError('names.source must be a non-empty string');
    }
    assert(typeof actual === 'string' && actual, `${names.claim} must be a non-empty string`);
    assert(typeof source === 'string' && source, `${names.source} must be a non-empty string`);
    let expected;
    let msg;
    try {
        expected = generate(source, alg, crv);
    } catch (err) {
        msg = format('%s could not be validated (%s)', names.claim, err.message);
    }
    msg = msg || format('%s mismatch, expected %s, got: %s', names.claim, expected, actual);
    assert.equal(expected, actual, msg);
}
module.exports = {
    validate,
    generate
};
}}),
"[project]/node_modules/.pnpm/yallist@4.0.0/node_modules/yallist/iterator.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
module.exports = function(Yallist) {
    Yallist.prototype[Symbol.iterator] = function*() {
        for(let walker = this.head; walker; walker = walker.next){
            yield walker.value;
        }
    };
};
}}),
"[project]/node_modules/.pnpm/yallist@4.0.0/node_modules/yallist/yallist.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
module.exports = Yallist;
Yallist.Node = Node;
Yallist.create = Yallist;
function Yallist(list) {
    var self = this;
    if (!(self instanceof Yallist)) {
        self = new Yallist();
    }
    self.tail = null;
    self.head = null;
    self.length = 0;
    if (list && typeof list.forEach === 'function') {
        list.forEach(function(item) {
            self.push(item);
        });
    } else if (arguments.length > 0) {
        for(var i = 0, l = arguments.length; i < l; i++){
            self.push(arguments[i]);
        }
    }
    return self;
}
Yallist.prototype.removeNode = function(node) {
    if (node.list !== this) {
        throw new Error('removing node which does not belong to this list');
    }
    var next = node.next;
    var prev = node.prev;
    if (next) {
        next.prev = prev;
    }
    if (prev) {
        prev.next = next;
    }
    if (node === this.head) {
        this.head = next;
    }
    if (node === this.tail) {
        this.tail = prev;
    }
    node.list.length--;
    node.next = null;
    node.prev = null;
    node.list = null;
    return next;
};
Yallist.prototype.unshiftNode = function(node) {
    if (node === this.head) {
        return;
    }
    if (node.list) {
        node.list.removeNode(node);
    }
    var head = this.head;
    node.list = this;
    node.next = head;
    if (head) {
        head.prev = node;
    }
    this.head = node;
    if (!this.tail) {
        this.tail = node;
    }
    this.length++;
};
Yallist.prototype.pushNode = function(node) {
    if (node === this.tail) {
        return;
    }
    if (node.list) {
        node.list.removeNode(node);
    }
    var tail = this.tail;
    node.list = this;
    node.prev = tail;
    if (tail) {
        tail.next = node;
    }
    this.tail = node;
    if (!this.head) {
        this.head = node;
    }
    this.length++;
};
Yallist.prototype.push = function() {
    for(var i = 0, l = arguments.length; i < l; i++){
        push(this, arguments[i]);
    }
    return this.length;
};
Yallist.prototype.unshift = function() {
    for(var i = 0, l = arguments.length; i < l; i++){
        unshift(this, arguments[i]);
    }
    return this.length;
};
Yallist.prototype.pop = function() {
    if (!this.tail) {
        return undefined;
    }
    var res = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) {
        this.tail.next = null;
    } else {
        this.head = null;
    }
    this.length--;
    return res;
};
Yallist.prototype.shift = function() {
    if (!this.head) {
        return undefined;
    }
    var res = this.head.value;
    this.head = this.head.next;
    if (this.head) {
        this.head.prev = null;
    } else {
        this.tail = null;
    }
    this.length--;
    return res;
};
Yallist.prototype.forEach = function(fn, thisp) {
    thisp = thisp || this;
    for(var walker = this.head, i = 0; walker !== null; i++){
        fn.call(thisp, walker.value, i, this);
        walker = walker.next;
    }
};
Yallist.prototype.forEachReverse = function(fn, thisp) {
    thisp = thisp || this;
    for(var walker = this.tail, i = this.length - 1; walker !== null; i--){
        fn.call(thisp, walker.value, i, this);
        walker = walker.prev;
    }
};
Yallist.prototype.get = function(n) {
    for(var i = 0, walker = this.head; walker !== null && i < n; i++){
        // abort out of the list early if we hit a cycle
        walker = walker.next;
    }
    if (i === n && walker !== null) {
        return walker.value;
    }
};
Yallist.prototype.getReverse = function(n) {
    for(var i = 0, walker = this.tail; walker !== null && i < n; i++){
        // abort out of the list early if we hit a cycle
        walker = walker.prev;
    }
    if (i === n && walker !== null) {
        return walker.value;
    }
};
Yallist.prototype.map = function(fn, thisp) {
    thisp = thisp || this;
    var res = new Yallist();
    for(var walker = this.head; walker !== null;){
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.next;
    }
    return res;
};
Yallist.prototype.mapReverse = function(fn, thisp) {
    thisp = thisp || this;
    var res = new Yallist();
    for(var walker = this.tail; walker !== null;){
        res.push(fn.call(thisp, walker.value, this));
        walker = walker.prev;
    }
    return res;
};
Yallist.prototype.reduce = function(fn, initial) {
    var acc;
    var walker = this.head;
    if (arguments.length > 1) {
        acc = initial;
    } else if (this.head) {
        walker = this.head.next;
        acc = this.head.value;
    } else {
        throw new TypeError('Reduce of empty list with no initial value');
    }
    for(var i = 0; walker !== null; i++){
        acc = fn(acc, walker.value, i);
        walker = walker.next;
    }
    return acc;
};
Yallist.prototype.reduceReverse = function(fn, initial) {
    var acc;
    var walker = this.tail;
    if (arguments.length > 1) {
        acc = initial;
    } else if (this.tail) {
        walker = this.tail.prev;
        acc = this.tail.value;
    } else {
        throw new TypeError('Reduce of empty list with no initial value');
    }
    for(var i = this.length - 1; walker !== null; i--){
        acc = fn(acc, walker.value, i);
        walker = walker.prev;
    }
    return acc;
};
Yallist.prototype.toArray = function() {
    var arr = new Array(this.length);
    for(var i = 0, walker = this.head; walker !== null; i++){
        arr[i] = walker.value;
        walker = walker.next;
    }
    return arr;
};
Yallist.prototype.toArrayReverse = function() {
    var arr = new Array(this.length);
    for(var i = 0, walker = this.tail; walker !== null; i++){
        arr[i] = walker.value;
        walker = walker.prev;
    }
    return arr;
};
Yallist.prototype.slice = function(from, to) {
    to = to || this.length;
    if (to < 0) {
        to += this.length;
    }
    from = from || 0;
    if (from < 0) {
        from += this.length;
    }
    var ret = new Yallist();
    if (to < from || to < 0) {
        return ret;
    }
    if (from < 0) {
        from = 0;
    }
    if (to > this.length) {
        to = this.length;
    }
    for(var i = 0, walker = this.head; walker !== null && i < from; i++){
        walker = walker.next;
    }
    for(; walker !== null && i < to; i++, walker = walker.next){
        ret.push(walker.value);
    }
    return ret;
};
Yallist.prototype.sliceReverse = function(from, to) {
    to = to || this.length;
    if (to < 0) {
        to += this.length;
    }
    from = from || 0;
    if (from < 0) {
        from += this.length;
    }
    var ret = new Yallist();
    if (to < from || to < 0) {
        return ret;
    }
    if (from < 0) {
        from = 0;
    }
    if (to > this.length) {
        to = this.length;
    }
    for(var i = this.length, walker = this.tail; walker !== null && i > to; i--){
        walker = walker.prev;
    }
    for(; walker !== null && i > from; i--, walker = walker.prev){
        ret.push(walker.value);
    }
    return ret;
};
Yallist.prototype.splice = function(start, deleteCount, ...nodes) {
    if (start > this.length) {
        start = this.length - 1;
    }
    if (start < 0) {
        start = this.length + start;
    }
    for(var i = 0, walker = this.head; walker !== null && i < start; i++){
        walker = walker.next;
    }
    var ret = [];
    for(var i = 0; walker && i < deleteCount; i++){
        ret.push(walker.value);
        walker = this.removeNode(walker);
    }
    if (walker === null) {
        walker = this.tail;
    }
    if (walker !== this.head && walker !== this.tail) {
        walker = walker.prev;
    }
    for(var i = 0; i < nodes.length; i++){
        walker = insert(this, walker, nodes[i]);
    }
    return ret;
};
Yallist.prototype.reverse = function() {
    var head = this.head;
    var tail = this.tail;
    for(var walker = head; walker !== null; walker = walker.prev){
        var p = walker.prev;
        walker.prev = walker.next;
        walker.next = p;
    }
    this.head = tail;
    this.tail = head;
    return this;
};
function insert(self, node, value) {
    var inserted = node === self.head ? new Node(value, null, node, self) : new Node(value, node, node.next, self);
    if (inserted.next === null) {
        self.tail = inserted;
    }
    if (inserted.prev === null) {
        self.head = inserted;
    }
    self.length++;
    return inserted;
}
function push(self, item) {
    self.tail = new Node(item, self.tail, null, self);
    if (!self.head) {
        self.head = self.tail;
    }
    self.length++;
}
function unshift(self, item) {
    self.head = new Node(item, null, self.head, self);
    if (!self.tail) {
        self.tail = self.head;
    }
    self.length++;
}
function Node(value, prev, next, list) {
    if (!(this instanceof Node)) {
        return new Node(value, prev, next, list);
    }
    this.list = list;
    this.value = value;
    if (prev) {
        prev.next = this;
        this.prev = prev;
    } else {
        this.prev = null;
    }
    if (next) {
        next.prev = this;
        this.next = next;
    } else {
        this.next = null;
    }
}
try {
    // add if support for Symbol.iterator is present
    __turbopack_require__("[project]/node_modules/.pnpm/yallist@4.0.0/node_modules/yallist/iterator.js [app-rsc] (ecmascript)")(Yallist);
} catch (er) {}
}}),
"[project]/node_modules/.pnpm/lru-cache@6.0.0/node_modules/lru-cache/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
// A linked list to keep track of recently-used-ness
const Yallist = __turbopack_require__("[project]/node_modules/.pnpm/yallist@4.0.0/node_modules/yallist/yallist.js [app-rsc] (ecmascript)");
const MAX = Symbol('max');
const LENGTH = Symbol('length');
const LENGTH_CALCULATOR = Symbol('lengthCalculator');
const ALLOW_STALE = Symbol('allowStale');
const MAX_AGE = Symbol('maxAge');
const DISPOSE = Symbol('dispose');
const NO_DISPOSE_ON_SET = Symbol('noDisposeOnSet');
const LRU_LIST = Symbol('lruList');
const CACHE = Symbol('cache');
const UPDATE_AGE_ON_GET = Symbol('updateAgeOnGet');
const naiveLength = ()=>1;
// lruList is a yallist where the head is the youngest
// item, and the tail is the oldest.  the list contains the Hit
// objects as the entries.
// Each Hit object has a reference to its Yallist.Node.  This
// never changes.
//
// cache is a Map (or PseudoMap) that matches the keys to
// the Yallist.Node object.
class LRUCache {
    constructor(options){
        if (typeof options === 'number') options = {
            max: options
        };
        if (!options) options = {};
        if (options.max && (typeof options.max !== 'number' || options.max < 0)) throw new TypeError('max must be a non-negative number');
        // Kind of weird to have a default max of Infinity, but oh well.
        const max = this[MAX] = options.max || Infinity;
        const lc = options.length || naiveLength;
        this[LENGTH_CALCULATOR] = typeof lc !== 'function' ? naiveLength : lc;
        this[ALLOW_STALE] = options.stale || false;
        if (options.maxAge && typeof options.maxAge !== 'number') throw new TypeError('maxAge must be a number');
        this[MAX_AGE] = options.maxAge || 0;
        this[DISPOSE] = options.dispose;
        this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false;
        this[UPDATE_AGE_ON_GET] = options.updateAgeOnGet || false;
        this.reset();
    }
    // resize the cache when the max changes.
    set max(mL) {
        if (typeof mL !== 'number' || mL < 0) throw new TypeError('max must be a non-negative number');
        this[MAX] = mL || Infinity;
        trim(this);
    }
    get max() {
        return this[MAX];
    }
    set allowStale(allowStale) {
        this[ALLOW_STALE] = !!allowStale;
    }
    get allowStale() {
        return this[ALLOW_STALE];
    }
    set maxAge(mA) {
        if (typeof mA !== 'number') throw new TypeError('maxAge must be a non-negative number');
        this[MAX_AGE] = mA;
        trim(this);
    }
    get maxAge() {
        return this[MAX_AGE];
    }
    // resize the cache when the lengthCalculator changes.
    set lengthCalculator(lC) {
        if (typeof lC !== 'function') lC = naiveLength;
        if (lC !== this[LENGTH_CALCULATOR]) {
            this[LENGTH_CALCULATOR] = lC;
            this[LENGTH] = 0;
            this[LRU_LIST].forEach((hit)=>{
                hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key);
                this[LENGTH] += hit.length;
            });
        }
        trim(this);
    }
    get lengthCalculator() {
        return this[LENGTH_CALCULATOR];
    }
    get length() {
        return this[LENGTH];
    }
    get itemCount() {
        return this[LRU_LIST].length;
    }
    rforEach(fn, thisp) {
        thisp = thisp || this;
        for(let walker = this[LRU_LIST].tail; walker !== null;){
            const prev = walker.prev;
            forEachStep(this, fn, walker, thisp);
            walker = prev;
        }
    }
    forEach(fn, thisp) {
        thisp = thisp || this;
        for(let walker = this[LRU_LIST].head; walker !== null;){
            const next = walker.next;
            forEachStep(this, fn, walker, thisp);
            walker = next;
        }
    }
    keys() {
        return this[LRU_LIST].toArray().map((k)=>k.key);
    }
    values() {
        return this[LRU_LIST].toArray().map((k)=>k.value);
    }
    reset() {
        if (this[DISPOSE] && this[LRU_LIST] && this[LRU_LIST].length) {
            this[LRU_LIST].forEach((hit)=>this[DISPOSE](hit.key, hit.value));
        }
        this[CACHE] = new Map() // hash of items by key
        ;
        this[LRU_LIST] = new Yallist() // list of items in order of use recency
        ;
        this[LENGTH] = 0 // length of items in the list
        ;
    }
    dump() {
        return this[LRU_LIST].map((hit)=>isStale(this, hit) ? false : {
                k: hit.key,
                v: hit.value,
                e: hit.now + (hit.maxAge || 0)
            }).toArray().filter((h)=>h);
    }
    dumpLru() {
        return this[LRU_LIST];
    }
    set(key, value, maxAge) {
        maxAge = maxAge || this[MAX_AGE];
        if (maxAge && typeof maxAge !== 'number') throw new TypeError('maxAge must be a number');
        const now = maxAge ? Date.now() : 0;
        const len = this[LENGTH_CALCULATOR](value, key);
        if (this[CACHE].has(key)) {
            if (len > this[MAX]) {
                del(this, this[CACHE].get(key));
                return false;
            }
            const node = this[CACHE].get(key);
            const item = node.value;
            // dispose of the old one before overwriting
            // split out into 2 ifs for better coverage tracking
            if (this[DISPOSE]) {
                if (!this[NO_DISPOSE_ON_SET]) this[DISPOSE](key, item.value);
            }
            item.now = now;
            item.maxAge = maxAge;
            item.value = value;
            this[LENGTH] += len - item.length;
            item.length = len;
            this.get(key);
            trim(this);
            return true;
        }
        const hit = new Entry(key, value, len, now, maxAge);
        // oversized objects fall out of cache automatically.
        if (hit.length > this[MAX]) {
            if (this[DISPOSE]) this[DISPOSE](key, value);
            return false;
        }
        this[LENGTH] += hit.length;
        this[LRU_LIST].unshift(hit);
        this[CACHE].set(key, this[LRU_LIST].head);
        trim(this);
        return true;
    }
    has(key) {
        if (!this[CACHE].has(key)) return false;
        const hit = this[CACHE].get(key).value;
        return !isStale(this, hit);
    }
    get(key) {
        return get(this, key, true);
    }
    peek(key) {
        return get(this, key, false);
    }
    pop() {
        const node = this[LRU_LIST].tail;
        if (!node) return null;
        del(this, node);
        return node.value;
    }
    del(key) {
        del(this, this[CACHE].get(key));
    }
    load(arr) {
        // reset the cache
        this.reset();
        const now = Date.now();
        // A previous serialized cache has the most recent items first
        for(let l = arr.length - 1; l >= 0; l--){
            const hit = arr[l];
            const expiresAt = hit.e || 0;
            if (expiresAt === 0) // the item was created without expiration in a non aged cache
            this.set(hit.k, hit.v);
            else {
                const maxAge = expiresAt - now;
                // dont add already expired items
                if (maxAge > 0) {
                    this.set(hit.k, hit.v, maxAge);
                }
            }
        }
    }
    prune() {
        this[CACHE].forEach((value, key)=>get(this, key, false));
    }
}
const get = (self, key, doUse)=>{
    const node = self[CACHE].get(key);
    if (node) {
        const hit = node.value;
        if (isStale(self, hit)) {
            del(self, node);
            if (!self[ALLOW_STALE]) return undefined;
        } else {
            if (doUse) {
                if (self[UPDATE_AGE_ON_GET]) node.value.now = Date.now();
                self[LRU_LIST].unshiftNode(node);
            }
        }
        return hit.value;
    }
};
const isStale = (self, hit)=>{
    if (!hit || !hit.maxAge && !self[MAX_AGE]) return false;
    const diff = Date.now() - hit.now;
    return hit.maxAge ? diff > hit.maxAge : self[MAX_AGE] && diff > self[MAX_AGE];
};
const trim = (self)=>{
    if (self[LENGTH] > self[MAX]) {
        for(let walker = self[LRU_LIST].tail; self[LENGTH] > self[MAX] && walker !== null;){
            // We know that we're about to delete this one, and also
            // what the next least recently used key will be, so just
            // go ahead and set it now.
            const prev = walker.prev;
            del(self, walker);
            walker = prev;
        }
    }
};
const del = (self, node)=>{
    if (node) {
        const hit = node.value;
        if (self[DISPOSE]) self[DISPOSE](hit.key, hit.value);
        self[LENGTH] -= hit.length;
        self[CACHE].delete(hit.key);
        self[LRU_LIST].removeNode(node);
    }
};
class Entry {
    constructor(key, value, length, now, maxAge){
        this.key = key;
        this.value = value;
        this.length = length;
        this.now = now;
        this.maxAge = maxAge || 0;
    }
}
const forEachStep = (self, fn, node, thisp)=>{
    let hit = node.value;
    if (isStale(self, hit)) {
        del(self, node);
        if (!self[ALLOW_STALE]) hit = undefined;
    }
    if (hit) fn.call(thisp, hit.value, hit.key, self);
};
module.exports = LRUCache;
}}),
"[project]/node_modules/.pnpm/object-hash@2.2.0/node_modules/object-hash/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
'use strict';
var crypto = __turbopack_require__("[externals]/ [external] (crypto, cjs)");
/**
 * Exported function
 *
 * Options:
 *
 *  - `algorithm` hash algo to be used by this instance: *'sha1', 'md5'
 *  - `excludeValues` {true|*false} hash object keys, values ignored
 *  - `encoding` hash encoding, supports 'buffer', '*hex', 'binary', 'base64'
 *  - `ignoreUnknown` {true|*false} ignore unknown object types
 *  - `replacer` optional function that replaces values before hashing
 *  - `respectFunctionProperties` {*true|false} consider function properties when hashing
 *  - `respectFunctionNames` {*true|false} consider 'name' property of functions for hashing
 *  - `respectType` {*true|false} Respect special properties (prototype, constructor)
 *    when hashing to distinguish between types
 *  - `unorderedArrays` {true|*false} Sort all arrays before hashing
 *  - `unorderedSets` {*true|false} Sort `Set` and `Map` instances before hashing
 *  * = default
 *
 * @param {object} object value to hash
 * @param {object} options hashing options
 * @return {string} hash value
 * @api public
 */ exports = module.exports = objectHash;
function objectHash(object, options) {
    options = applyDefaults(object, options);
    return hash(object, options);
}
/**
 * Exported sugar methods
 *
 * @param {object} object value to hash
 * @return {string} hash value
 * @api public
 */ exports.sha1 = function(object) {
    return objectHash(object);
};
exports.keys = function(object) {
    return objectHash(object, {
        excludeValues: true,
        algorithm: 'sha1',
        encoding: 'hex'
    });
};
exports.MD5 = function(object) {
    return objectHash(object, {
        algorithm: 'md5',
        encoding: 'hex'
    });
};
exports.keysMD5 = function(object) {
    return objectHash(object, {
        algorithm: 'md5',
        encoding: 'hex',
        excludeValues: true
    });
};
// Internals
var hashes = crypto.getHashes ? crypto.getHashes().slice() : [
    'sha1',
    'md5'
];
hashes.push('passthrough');
var encodings = [
    'buffer',
    'hex',
    'binary',
    'base64'
];
function applyDefaults(object, sourceOptions) {
    sourceOptions = sourceOptions || {};
    // create a copy rather than mutating
    var options = {};
    options.algorithm = sourceOptions.algorithm || 'sha1';
    options.encoding = sourceOptions.encoding || 'hex';
    options.excludeValues = sourceOptions.excludeValues ? true : false;
    options.algorithm = options.algorithm.toLowerCase();
    options.encoding = options.encoding.toLowerCase();
    options.ignoreUnknown = sourceOptions.ignoreUnknown !== true ? false : true; // default to false
    options.respectType = sourceOptions.respectType === false ? false : true; // default to true
    options.respectFunctionNames = sourceOptions.respectFunctionNames === false ? false : true;
    options.respectFunctionProperties = sourceOptions.respectFunctionProperties === false ? false : true;
    options.unorderedArrays = sourceOptions.unorderedArrays !== true ? false : true; // default to false
    options.unorderedSets = sourceOptions.unorderedSets === false ? false : true; // default to false
    options.unorderedObjects = sourceOptions.unorderedObjects === false ? false : true; // default to true
    options.replacer = sourceOptions.replacer || undefined;
    options.excludeKeys = sourceOptions.excludeKeys || undefined;
    if (typeof object === 'undefined') {
        throw new Error('Object argument required.');
    }
    // if there is a case-insensitive match in the hashes list, accept it
    // (i.e. SHA256 for sha256)
    for(var i = 0; i < hashes.length; ++i){
        if (hashes[i].toLowerCase() === options.algorithm.toLowerCase()) {
            options.algorithm = hashes[i];
        }
    }
    if (hashes.indexOf(options.algorithm) === -1) {
        throw new Error('Algorithm "' + options.algorithm + '"  not supported. ' + 'supported values: ' + hashes.join(', '));
    }
    if (encodings.indexOf(options.encoding) === -1 && options.algorithm !== 'passthrough') {
        throw new Error('Encoding "' + options.encoding + '"  not supported. ' + 'supported values: ' + encodings.join(', '));
    }
    return options;
}
/** Check if the given function is a native function */ function isNativeFunction(f) {
    if (typeof f !== 'function') {
        return false;
    }
    var exp = /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i;
    return exp.exec(Function.prototype.toString.call(f)) != null;
}
function hash(object, options) {
    var hashingStream;
    if (options.algorithm !== 'passthrough') {
        hashingStream = crypto.createHash(options.algorithm);
    } else {
        hashingStream = new PassThrough();
    }
    if (typeof hashingStream.write === 'undefined') {
        hashingStream.write = hashingStream.update;
        hashingStream.end = hashingStream.update;
    }
    var hasher = typeHasher(options, hashingStream);
    hasher.dispatch(object);
    if (!hashingStream.update) {
        hashingStream.end('');
    }
    if (hashingStream.digest) {
        return hashingStream.digest(options.encoding === 'buffer' ? undefined : options.encoding);
    }
    var buf = hashingStream.read();
    if (options.encoding === 'buffer') {
        return buf;
    }
    return buf.toString(options.encoding);
}
/**
 * Expose streaming API
 *
 * @param {object} object  Value to serialize
 * @param {object} options  Options, as for hash()
 * @param {object} stream  A stream to write the serializiation to
 * @api public
 */ exports.writeToStream = function(object, options, stream) {
    if (typeof stream === 'undefined') {
        stream = options;
        options = {};
    }
    options = applyDefaults(object, options);
    return typeHasher(options, stream).dispatch(object);
};
function typeHasher(options, writeTo, context) {
    context = context || [];
    var write = function(str) {
        if (writeTo.update) {
            return writeTo.update(str, 'utf8');
        } else {
            return writeTo.write(str, 'utf8');
        }
    };
    return {
        dispatch: function(value) {
            if (options.replacer) {
                value = options.replacer(value);
            }
            var type = typeof value;
            if (value === null) {
                type = 'null';
            }
            //console.log("[DEBUG] Dispatch: ", value, "->", type, " -> ", "_" + type);
            return this['_' + type](value);
        },
        _object: function(object) {
            var pattern = /\[object (.*)\]/i;
            var objString = Object.prototype.toString.call(object);
            var objType = pattern.exec(objString);
            if (!objType) {
                objType = 'unknown:[' + objString + ']';
            } else {
                objType = objType[1]; // take only the class name
            }
            objType = objType.toLowerCase();
            var objectNumber = null;
            if ((objectNumber = context.indexOf(object)) >= 0) {
                return this.dispatch('[CIRCULAR:' + objectNumber + ']');
            } else {
                context.push(object);
            }
            if (typeof Buffer !== 'undefined' && Buffer.isBuffer && Buffer.isBuffer(object)) {
                write('buffer:');
                return write(object);
            }
            if (objType !== 'object' && objType !== 'function' && objType !== 'asyncfunction') {
                if (this['_' + objType]) {
                    this['_' + objType](object);
                } else if (options.ignoreUnknown) {
                    return write('[' + objType + ']');
                } else {
                    throw new Error('Unknown object type "' + objType + '"');
                }
            } else {
                var keys = Object.keys(object);
                if (options.unorderedObjects) {
                    keys = keys.sort();
                }
                // Make sure to incorporate special properties, so
                // Types with different prototypes will produce
                // a different hash and objects derived from
                // different functions (`new Foo`, `new Bar`) will
                // produce different hashes.
                // We never do this for native functions since some
                // seem to break because of that.
                if (options.respectType !== false && !isNativeFunction(object)) {
                    keys.splice(0, 0, 'prototype', '__proto__', 'constructor');
                }
                if (options.excludeKeys) {
                    keys = keys.filter(function(key) {
                        return !options.excludeKeys(key);
                    });
                }
                write('object:' + keys.length + ':');
                var self = this;
                return keys.forEach(function(key) {
                    self.dispatch(key);
                    write(':');
                    if (!options.excludeValues) {
                        self.dispatch(object[key]);
                    }
                    write(',');
                });
            }
        },
        _array: function(arr, unordered) {
            unordered = typeof unordered !== 'undefined' ? unordered : options.unorderedArrays !== false; // default to options.unorderedArrays
            var self = this;
            write('array:' + arr.length + ':');
            if (!unordered || arr.length <= 1) {
                return arr.forEach(function(entry) {
                    return self.dispatch(entry);
                });
            }
            // the unordered case is a little more complicated:
            // since there is no canonical ordering on objects,
            // i.e. {a:1} < {a:2} and {a:1} > {a:2} are both false,
            // we first serialize each entry using a PassThrough stream
            // before sorting.
            // also: we can’t use the same context array for all entries
            // since the order of hashing should *not* matter. instead,
            // we keep track of the additions to a copy of the context array
            // and add all of them to the global context array when we’re done
            var contextAdditions = [];
            var entries = arr.map(function(entry) {
                var strm = new PassThrough();
                var localContext = context.slice(); // make copy
                var hasher = typeHasher(options, strm, localContext);
                hasher.dispatch(entry);
                // take only what was added to localContext and append it to contextAdditions
                contextAdditions = contextAdditions.concat(localContext.slice(context.length));
                return strm.read().toString();
            });
            context = context.concat(contextAdditions);
            entries.sort();
            return this._array(entries, false);
        },
        _date: function(date) {
            return write('date:' + date.toJSON());
        },
        _symbol: function(sym) {
            return write('symbol:' + sym.toString());
        },
        _error: function(err) {
            return write('error:' + err.toString());
        },
        _boolean: function(bool) {
            return write('bool:' + bool.toString());
        },
        _string: function(string) {
            write('string:' + string.length + ':');
            write(string.toString());
        },
        _function: function(fn) {
            write('fn:');
            if (isNativeFunction(fn)) {
                this.dispatch('[native]');
            } else {
                this.dispatch(fn.toString());
            }
            if (options.respectFunctionNames !== false) {
                // Make sure we can still distinguish native functions
                // by their name, otherwise String and Function will
                // have the same hash
                this.dispatch("function-name:" + String(fn.name));
            }
            if (options.respectFunctionProperties) {
                this._object(fn);
            }
        },
        _number: function(number) {
            return write('number:' + number.toString());
        },
        _xml: function(xml) {
            return write('xml:' + xml.toString());
        },
        _null: function() {
            return write('Null');
        },
        _undefined: function() {
            return write('Undefined');
        },
        _regexp: function(regex) {
            return write('regex:' + regex.toString());
        },
        _uint8array: function(arr) {
            write('uint8array:');
            return this.dispatch(Array.prototype.slice.call(arr));
        },
        _uint8clampedarray: function(arr) {
            write('uint8clampedarray:');
            return this.dispatch(Array.prototype.slice.call(arr));
        },
        _int8array: function(arr) {
            write('uint8array:');
            return this.dispatch(Array.prototype.slice.call(arr));
        },
        _uint16array: function(arr) {
            write('uint16array:');
            return this.dispatch(Array.prototype.slice.call(arr));
        },
        _int16array: function(arr) {
            write('uint16array:');
            return this.dispatch(Array.prototype.slice.call(arr));
        },
        _uint32array: function(arr) {
            write('uint32array:');
            return this.dispatch(Array.prototype.slice.call(arr));
        },
        _int32array: function(arr) {
            write('uint32array:');
            return this.dispatch(Array.prototype.slice.call(arr));
        },
        _float32array: function(arr) {
            write('float32array:');
            return this.dispatch(Array.prototype.slice.call(arr));
        },
        _float64array: function(arr) {
            write('float64array:');
            return this.dispatch(Array.prototype.slice.call(arr));
        },
        _arraybuffer: function(arr) {
            write('arraybuffer:');
            return this.dispatch(new Uint8Array(arr));
        },
        _url: function(url) {
            return write('url:' + url.toString(), 'utf8');
        },
        _map: function(map) {
            write('map:');
            var arr = Array.from(map);
            return this._array(arr, options.unorderedSets !== false);
        },
        _set: function(set) {
            write('set:');
            var arr = Array.from(set);
            return this._array(arr, options.unorderedSets !== false);
        },
        _file: function(file) {
            write('file:');
            return this.dispatch([
                file.name,
                file.size,
                file.type,
                file.lastModfied
            ]);
        },
        _blob: function() {
            if (options.ignoreUnknown) {
                return write('[blob]');
            }
            throw Error('Hashing Blob objects is currently not supported\n' + '(see https://github.com/puleos/object-hash/issues/26)\n' + 'Use "options.replacer" or "options.ignoreUnknown"\n');
        },
        _domwindow: function() {
            return write('domwindow');
        },
        _bigint: function(number) {
            return write('bigint:' + number.toString());
        },
        /* Node.js standard native objects */ _process: function() {
            return write('process');
        },
        _timer: function() {
            return write('timer');
        },
        _pipe: function() {
            return write('pipe');
        },
        _tcp: function() {
            return write('tcp');
        },
        _udp: function() {
            return write('udp');
        },
        _tty: function() {
            return write('tty');
        },
        _statwatcher: function() {
            return write('statwatcher');
        },
        _securecontext: function() {
            return write('securecontext');
        },
        _connection: function() {
            return write('connection');
        },
        _zlib: function() {
            return write('zlib');
        },
        _context: function() {
            return write('context');
        },
        _nodescript: function() {
            return write('nodescript');
        },
        _httpparser: function() {
            return write('httpparser');
        },
        _dataview: function() {
            return write('dataview');
        },
        _signal: function() {
            return write('signal');
        },
        _fsevent: function() {
            return write('fsevent');
        },
        _tlswrap: function() {
            return write('tlswrap');
        }
    };
}
// Mini-implementation of stream.PassThrough
// We are far from having need for the full implementation, and we can
// make assumptions like "many writes, then only one final read"
// and we can ignore encoding specifics
function PassThrough() {
    return {
        buf: '',
        write: function(b) {
            this.buf += b;
        },
        end: function(b) {
            this.buf += b;
        },
        read: function() {
            return this.buf;
        }
    };
}
}}),
"[project]/node_modules/.pnpm/oauth@0.9.15/node_modules/oauth/lib/sha1.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
/*
 * A JavaScript implementation of the Secure Hash Algorithm, SHA-1, as defined
 * in FIPS 180-1
 * Version 2.2 Copyright Paul Johnston 2000 - 2009.
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for details.
 */ /*
 * Configurable variables. You may need to tweak these to be compatible with
 * the server-side, but the defaults work in most cases.
 */ var hexcase = 1; /* hex output format. 0 - lowercase; 1 - uppercase        */ 
var b64pad = "="; /* base-64 pad character. "=" for strict RFC compliance   */ 
/*
 * These are the functions you'll usually want to call
 * They take string arguments and return either hex or base-64 encoded strings
 */ function hex_sha1(s) {
    return rstr2hex(rstr_sha1(str2rstr_utf8(s)));
}
function b64_sha1(s) {
    return rstr2b64(rstr_sha1(str2rstr_utf8(s)));
}
function any_sha1(s, e) {
    return rstr2any(rstr_sha1(str2rstr_utf8(s)), e);
}
function hex_hmac_sha1(k, d) {
    return rstr2hex(rstr_hmac_sha1(str2rstr_utf8(k), str2rstr_utf8(d)));
}
function b64_hmac_sha1(k, d) {
    return rstr2b64(rstr_hmac_sha1(str2rstr_utf8(k), str2rstr_utf8(d)));
}
function any_hmac_sha1(k, d, e) {
    return rstr2any(rstr_hmac_sha1(str2rstr_utf8(k), str2rstr_utf8(d)), e);
}
/*
 * Perform a simple self-test to see if the VM is working
 */ function sha1_vm_test() {
    return hex_sha1("abc").toLowerCase() == "a9993e364706816aba3e25717850c26c9cd0d89d";
}
/*
 * Calculate the SHA1 of a raw string
 */ function rstr_sha1(s) {
    return binb2rstr(binb_sha1(rstr2binb(s), s.length * 8));
}
/*
 * Calculate the HMAC-SHA1 of a key and some data (raw strings)
 */ function rstr_hmac_sha1(key, data) {
    var bkey = rstr2binb(key);
    if (bkey.length > 16) bkey = binb_sha1(bkey, key.length * 8);
    var ipad = Array(16), opad = Array(16);
    for(var i = 0; i < 16; i++){
        ipad[i] = bkey[i] ^ 0x36363636;
        opad[i] = bkey[i] ^ 0x5C5C5C5C;
    }
    var hash = binb_sha1(ipad.concat(rstr2binb(data)), 512 + data.length * 8);
    return binb2rstr(binb_sha1(opad.concat(hash), 512 + 160));
}
/*
 * Convert a raw string to a hex string
 */ function rstr2hex(input) {
    try {
        hexcase;
    } catch (e) {
        hexcase = 0;
    }
    var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
    var output = "";
    var x;
    for(var i = 0; i < input.length; i++){
        x = input.charCodeAt(i);
        output += hex_tab.charAt(x >>> 4 & 0x0F) + hex_tab.charAt(x & 0x0F);
    }
    return output;
}
/*
 * Convert a raw string to a base-64 string
 */ function rstr2b64(input) {
    try {
        b64pad;
    } catch (e) {
        b64pad = '';
    }
    var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var output = "";
    var len = input.length;
    for(var i = 0; i < len; i += 3){
        var triplet = input.charCodeAt(i) << 16 | (i + 1 < len ? input.charCodeAt(i + 1) << 8 : 0) | (i + 2 < len ? input.charCodeAt(i + 2) : 0);
        for(var j = 0; j < 4; j++){
            if (i * 8 + j * 6 > input.length * 8) output += b64pad;
            else output += tab.charAt(triplet >>> 6 * (3 - j) & 0x3F);
        }
    }
    return output;
}
/*
 * Convert a raw string to an arbitrary string encoding
 */ function rstr2any(input, encoding) {
    var divisor = encoding.length;
    var remainders = Array();
    var i, q, x, quotient;
    /* Convert to an array of 16-bit big-endian values, forming the dividend */ var dividend = Array(Math.ceil(input.length / 2));
    for(i = 0; i < dividend.length; i++){
        dividend[i] = input.charCodeAt(i * 2) << 8 | input.charCodeAt(i * 2 + 1);
    }
    /*
   * Repeatedly perform a long division. The binary array forms the dividend,
   * the length of the encoding is the divisor. Once computed, the quotient
   * forms the dividend for the next step. We stop when the dividend is zero.
   * All remainders are stored for later use.
   */ while(dividend.length > 0){
        quotient = Array();
        x = 0;
        for(i = 0; i < dividend.length; i++){
            x = (x << 16) + dividend[i];
            q = Math.floor(x / divisor);
            x -= q * divisor;
            if (quotient.length > 0 || q > 0) quotient[quotient.length] = q;
        }
        remainders[remainders.length] = x;
        dividend = quotient;
    }
    /* Convert the remainders to the output string */ var output = "";
    for(i = remainders.length - 1; i >= 0; i--)output += encoding.charAt(remainders[i]);
    /* Append leading zero equivalents */ var full_length = Math.ceil(input.length * 8 / (Math.log(encoding.length) / Math.log(2)));
    for(i = output.length; i < full_length; i++)output = encoding[0] + output;
    return output;
}
/*
 * Encode a string as utf-8.
 * For efficiency, this assumes the input is valid utf-16.
 */ function str2rstr_utf8(input) {
    var output = "";
    var i = -1;
    var x, y;
    while(++i < input.length){
        /* Decode utf-16 surrogate pairs */ x = input.charCodeAt(i);
        y = i + 1 < input.length ? input.charCodeAt(i + 1) : 0;
        if (0xD800 <= x && x <= 0xDBFF && 0xDC00 <= y && y <= 0xDFFF) {
            x = 0x10000 + ((x & 0x03FF) << 10) + (y & 0x03FF);
            i++;
        }
        /* Encode output as utf-8 */ if (x <= 0x7F) output += String.fromCharCode(x);
        else if (x <= 0x7FF) output += String.fromCharCode(0xC0 | x >>> 6 & 0x1F, 0x80 | x & 0x3F);
        else if (x <= 0xFFFF) output += String.fromCharCode(0xE0 | x >>> 12 & 0x0F, 0x80 | x >>> 6 & 0x3F, 0x80 | x & 0x3F);
        else if (x <= 0x1FFFFF) output += String.fromCharCode(0xF0 | x >>> 18 & 0x07, 0x80 | x >>> 12 & 0x3F, 0x80 | x >>> 6 & 0x3F, 0x80 | x & 0x3F);
    }
    return output;
}
/*
 * Encode a string as utf-16
 */ function str2rstr_utf16le(input) {
    var output = "";
    for(var i = 0; i < input.length; i++)output += String.fromCharCode(input.charCodeAt(i) & 0xFF, input.charCodeAt(i) >>> 8 & 0xFF);
    return output;
}
function str2rstr_utf16be(input) {
    var output = "";
    for(var i = 0; i < input.length; i++)output += String.fromCharCode(input.charCodeAt(i) >>> 8 & 0xFF, input.charCodeAt(i) & 0xFF);
    return output;
}
/*
 * Convert a raw string to an array of big-endian words
 * Characters >255 have their high-byte silently ignored.
 */ function rstr2binb(input) {
    var output = Array(input.length >> 2);
    for(var i = 0; i < output.length; i++)output[i] = 0;
    for(var i = 0; i < input.length * 8; i += 8)output[i >> 5] |= (input.charCodeAt(i / 8) & 0xFF) << 24 - i % 32;
    return output;
}
/*
 * Convert an array of big-endian words to a string
 */ function binb2rstr(input) {
    var output = "";
    for(var i = 0; i < input.length * 32; i += 8)output += String.fromCharCode(input[i >> 5] >>> 24 - i % 32 & 0xFF);
    return output;
}
/*
 * Calculate the SHA-1 of an array of big-endian words, and a bit length
 */ function binb_sha1(x, len) {
    /* append padding */ x[len >> 5] |= 0x80 << 24 - len % 32;
    x[(len + 64 >> 9 << 4) + 15] = len;
    var w = Array(80);
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    var e = -1009589776;
    for(var i = 0; i < x.length; i += 16){
        var olda = a;
        var oldb = b;
        var oldc = c;
        var oldd = d;
        var olde = e;
        for(var j = 0; j < 80; j++){
            if (j < 16) w[j] = x[i + j];
            else w[j] = bit_rol(w[j - 3] ^ w[j - 8] ^ w[j - 14] ^ w[j - 16], 1);
            var t = safe_add(safe_add(bit_rol(a, 5), sha1_ft(j, b, c, d)), safe_add(safe_add(e, w[j]), sha1_kt(j)));
            e = d;
            d = c;
            c = bit_rol(b, 30);
            b = a;
            a = t;
        }
        a = safe_add(a, olda);
        b = safe_add(b, oldb);
        c = safe_add(c, oldc);
        d = safe_add(d, oldd);
        e = safe_add(e, olde);
    }
    return Array(a, b, c, d, e);
}
/*
 * Perform the appropriate triplet combination function for the current
 * iteration
 */ function sha1_ft(t, b, c, d) {
    if (t < 20) return b & c | ~b & d;
    if (t < 40) return b ^ c ^ d;
    if (t < 60) return b & c | b & d | c & d;
    return b ^ c ^ d;
}
/*
 * Determine the appropriate additive constant for the current iteration
 */ function sha1_kt(t) {
    return t < 20 ? 1518500249 : t < 40 ? 1859775393 : t < 60 ? -1894007588 : -899497514;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */ function safe_add(x, y) {
    var lsw = (x & 0xFFFF) + (y & 0xFFFF);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xFFFF;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */ function bit_rol(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
}
exports.HMACSHA1 = function(key, data) {
    return b64_hmac_sha1(key, data);
};
}}),
"[project]/node_modules/.pnpm/oauth@0.9.15/node_modules/oauth/lib/_utils.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
// Returns true if this is a host that closes *before* it ends?!?!
module.exports.isAnEarlyCloseHost = function(hostName) {
    return hostName && hostName.match(".*google(apis)?.com$");
};
}}),
"[project]/node_modules/.pnpm/oauth@0.9.15/node_modules/oauth/lib/oauth.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
var crypto = __turbopack_require__("[externals]/ [external] (crypto, cjs)"), sha1 = __turbopack_require__("[project]/node_modules/.pnpm/oauth@0.9.15/node_modules/oauth/lib/sha1.js [app-rsc] (ecmascript)"), http = __turbopack_require__("[externals]/ [external] (http, cjs)"), https = __turbopack_require__("[externals]/ [external] (https, cjs)"), URL = __turbopack_require__("[externals]/ [external] (url, cjs)"), querystring = __turbopack_require__("[externals]/ [external] (querystring, cjs)"), OAuthUtils = __turbopack_require__("[project]/node_modules/.pnpm/oauth@0.9.15/node_modules/oauth/lib/_utils.js [app-rsc] (ecmascript)");
exports.OAuth = function(requestUrl, accessUrl, consumerKey, consumerSecret, version, authorize_callback, signatureMethod, nonceSize, customHeaders) {
    this._isEcho = false;
    this._requestUrl = requestUrl;
    this._accessUrl = accessUrl;
    this._consumerKey = consumerKey;
    this._consumerSecret = this._encodeData(consumerSecret);
    if (signatureMethod == "RSA-SHA1") {
        this._privateKey = consumerSecret;
    }
    this._version = version;
    if (authorize_callback === undefined) {
        this._authorize_callback = "oob";
    } else {
        this._authorize_callback = authorize_callback;
    }
    if (signatureMethod != "PLAINTEXT" && signatureMethod != "HMAC-SHA1" && signatureMethod != "RSA-SHA1") throw new Error("Un-supported signature method: " + signatureMethod);
    this._signatureMethod = signatureMethod;
    this._nonceSize = nonceSize || 32;
    this._headers = customHeaders || {
        "Accept": "*/*",
        "Connection": "close",
        "User-Agent": "Node authentication"
    };
    this._clientOptions = this._defaultClientOptions = {
        "requestTokenHttpMethod": "POST",
        "accessTokenHttpMethod": "POST",
        "followRedirects": true
    };
    this._oauthParameterSeperator = ",";
};
exports.OAuthEcho = function(realm, verify_credentials, consumerKey, consumerSecret, version, signatureMethod, nonceSize, customHeaders) {
    this._isEcho = true;
    this._realm = realm;
    this._verifyCredentials = verify_credentials;
    this._consumerKey = consumerKey;
    this._consumerSecret = this._encodeData(consumerSecret);
    if (signatureMethod == "RSA-SHA1") {
        this._privateKey = consumerSecret;
    }
    this._version = version;
    if (signatureMethod != "PLAINTEXT" && signatureMethod != "HMAC-SHA1" && signatureMethod != "RSA-SHA1") throw new Error("Un-supported signature method: " + signatureMethod);
    this._signatureMethod = signatureMethod;
    this._nonceSize = nonceSize || 32;
    this._headers = customHeaders || {
        "Accept": "*/*",
        "Connection": "close",
        "User-Agent": "Node authentication"
    };
    this._oauthParameterSeperator = ",";
};
exports.OAuthEcho.prototype = exports.OAuth.prototype;
exports.OAuth.prototype._getTimestamp = function() {
    return Math.floor(new Date().getTime() / 1000);
};
exports.OAuth.prototype._encodeData = function(toEncode) {
    if (toEncode == null || toEncode == "") return "";
    else {
        var result = encodeURIComponent(toEncode);
        // Fix the mismatch between OAuth's  RFC3986's and Javascript's beliefs in what is right and wrong ;)
        return result.replace(/\!/g, "%21").replace(/\'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
    }
};
exports.OAuth.prototype._decodeData = function(toDecode) {
    if (toDecode != null) {
        toDecode = toDecode.replace(/\+/g, " ");
    }
    return decodeURIComponent(toDecode);
};
exports.OAuth.prototype._getSignature = function(method, url, parameters, tokenSecret) {
    var signatureBase = this._createSignatureBase(method, url, parameters);
    return this._createSignature(signatureBase, tokenSecret);
};
exports.OAuth.prototype._normalizeUrl = function(url) {
    var parsedUrl = URL.parse(url, true);
    var port = "";
    if (parsedUrl.port) {
        if (parsedUrl.protocol == "http:" && parsedUrl.port != "80" || parsedUrl.protocol == "https:" && parsedUrl.port != "443") {
            port = ":" + parsedUrl.port;
        }
    }
    if (!parsedUrl.pathname || parsedUrl.pathname == "") parsedUrl.pathname = "/";
    return parsedUrl.protocol + "//" + parsedUrl.hostname + port + parsedUrl.pathname;
};
// Is the parameter considered an OAuth parameter
exports.OAuth.prototype._isParameterNameAnOAuthParameter = function(parameter) {
    var m = parameter.match('^oauth_');
    if (m && m[0] === "oauth_") {
        return true;
    } else {
        return false;
    }
};
// build the OAuth request authorization header
exports.OAuth.prototype._buildAuthorizationHeaders = function(orderedParameters) {
    var authHeader = "OAuth ";
    if (this._isEcho) {
        authHeader += 'realm="' + this._realm + '",';
    }
    for(var i = 0; i < orderedParameters.length; i++){
        // Whilst the all the parameters should be included within the signature, only the oauth_ arguments
        // should appear within the authorization header.
        if (this._isParameterNameAnOAuthParameter(orderedParameters[i][0])) {
            authHeader += "" + this._encodeData(orderedParameters[i][0]) + "=\"" + this._encodeData(orderedParameters[i][1]) + "\"" + this._oauthParameterSeperator;
        }
    }
    authHeader = authHeader.substring(0, authHeader.length - this._oauthParameterSeperator.length);
    return authHeader;
};
// Takes an object literal that represents the arguments, and returns an array
// of argument/value pairs.
exports.OAuth.prototype._makeArrayOfArgumentsHash = function(argumentsHash) {
    var argument_pairs = [];
    for(var key in argumentsHash){
        if (argumentsHash.hasOwnProperty(key)) {
            var value = argumentsHash[key];
            if (Array.isArray(value)) {
                for(var i = 0; i < value.length; i++){
                    argument_pairs[argument_pairs.length] = [
                        key,
                        value[i]
                    ];
                }
            } else {
                argument_pairs[argument_pairs.length] = [
                    key,
                    value
                ];
            }
        }
    }
    return argument_pairs;
};
// Sorts the encoded key value pairs by encoded name, then encoded value
exports.OAuth.prototype._sortRequestParams = function(argument_pairs) {
    // Sort by name, then value.
    argument_pairs.sort(function(a, b) {
        if (a[0] == b[0]) {
            return a[1] < b[1] ? -1 : 1;
        } else return a[0] < b[0] ? -1 : 1;
    });
    return argument_pairs;
};
exports.OAuth.prototype._normaliseRequestParams = function(args) {
    var argument_pairs = this._makeArrayOfArgumentsHash(args);
    // First encode them #3.4.1.3.2 .1
    for(var i = 0; i < argument_pairs.length; i++){
        argument_pairs[i][0] = this._encodeData(argument_pairs[i][0]);
        argument_pairs[i][1] = this._encodeData(argument_pairs[i][1]);
    }
    // Then sort them #3.4.1.3.2 .2
    argument_pairs = this._sortRequestParams(argument_pairs);
    // Then concatenate together #3.4.1.3.2 .3 & .4
    var args = "";
    for(var i = 0; i < argument_pairs.length; i++){
        args += argument_pairs[i][0];
        args += "=";
        args += argument_pairs[i][1];
        if (i < argument_pairs.length - 1) args += "&";
    }
    return args;
};
exports.OAuth.prototype._createSignatureBase = function(method, url, parameters) {
    url = this._encodeData(this._normalizeUrl(url));
    parameters = this._encodeData(parameters);
    return method.toUpperCase() + "&" + url + "&" + parameters;
};
exports.OAuth.prototype._createSignature = function(signatureBase, tokenSecret) {
    if (tokenSecret === undefined) var tokenSecret = "";
    else tokenSecret = this._encodeData(tokenSecret);
    // consumerSecret is already encoded
    var key = this._consumerSecret + "&" + tokenSecret;
    var hash = "";
    if (this._signatureMethod == "PLAINTEXT") {
        hash = key;
    } else if (this._signatureMethod == "RSA-SHA1") {
        key = this._privateKey || "";
        hash = crypto.createSign("RSA-SHA1").update(signatureBase).sign(key, 'base64');
    } else {
        if (crypto.Hmac) {
            hash = crypto.createHmac("sha1", key).update(signatureBase).digest("base64");
        } else {
            hash = sha1.HMACSHA1(key, signatureBase);
        }
    }
    return hash;
};
exports.OAuth.prototype.NONCE_CHARS = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'
];
exports.OAuth.prototype._getNonce = function(nonceSize) {
    var result = [];
    var chars = this.NONCE_CHARS;
    var char_pos;
    var nonce_chars_length = chars.length;
    for(var i = 0; i < nonceSize; i++){
        char_pos = Math.floor(Math.random() * nonce_chars_length);
        result[i] = chars[char_pos];
    }
    return result.join('');
};
exports.OAuth.prototype._createClient = function(port, hostname, method, path, headers, sslEnabled) {
    var options = {
        host: hostname,
        port: port,
        path: path,
        method: method,
        headers: headers
    };
    var httpModel;
    if (sslEnabled) {
        httpModel = https;
    } else {
        httpModel = http;
    }
    return httpModel.request(options);
};
exports.OAuth.prototype._prepareParameters = function(oauth_token, oauth_token_secret, method, url, extra_params) {
    var oauthParameters = {
        "oauth_timestamp": this._getTimestamp(),
        "oauth_nonce": this._getNonce(this._nonceSize),
        "oauth_version": this._version,
        "oauth_signature_method": this._signatureMethod,
        "oauth_consumer_key": this._consumerKey
    };
    if (oauth_token) {
        oauthParameters["oauth_token"] = oauth_token;
    }
    var sig;
    if (this._isEcho) {
        sig = this._getSignature("GET", this._verifyCredentials, this._normaliseRequestParams(oauthParameters), oauth_token_secret);
    } else {
        if (extra_params) {
            for(var key in extra_params){
                if (extra_params.hasOwnProperty(key)) oauthParameters[key] = extra_params[key];
            }
        }
        var parsedUrl = URL.parse(url, false);
        if (parsedUrl.query) {
            var key2;
            var extraParameters = querystring.parse(parsedUrl.query);
            for(var key in extraParameters){
                var value = extraParameters[key];
                if (typeof value == "object") {
                    // TODO: This probably should be recursive
                    for(key2 in value){
                        oauthParameters[key + "[" + key2 + "]"] = value[key2];
                    }
                } else {
                    oauthParameters[key] = value;
                }
            }
        }
        sig = this._getSignature(method, url, this._normaliseRequestParams(oauthParameters), oauth_token_secret);
    }
    var orderedParameters = this._sortRequestParams(this._makeArrayOfArgumentsHash(oauthParameters));
    orderedParameters[orderedParameters.length] = [
        "oauth_signature",
        sig
    ];
    return orderedParameters;
};
exports.OAuth.prototype._performSecureRequest = function(oauth_token, oauth_token_secret, method, url, extra_params, post_body, post_content_type, callback) {
    var orderedParameters = this._prepareParameters(oauth_token, oauth_token_secret, method, url, extra_params);
    if (!post_content_type) {
        post_content_type = "application/x-www-form-urlencoded";
    }
    var parsedUrl = URL.parse(url, false);
    if (parsedUrl.protocol == "http:" && !parsedUrl.port) parsedUrl.port = 80;
    if (parsedUrl.protocol == "https:" && !parsedUrl.port) parsedUrl.port = 443;
    var headers = {};
    var authorization = this._buildAuthorizationHeaders(orderedParameters);
    if (this._isEcho) {
        headers["X-Verify-Credentials-Authorization"] = authorization;
    } else {
        headers["Authorization"] = authorization;
    }
    headers["Host"] = parsedUrl.host;
    for(var key in this._headers){
        if (this._headers.hasOwnProperty(key)) {
            headers[key] = this._headers[key];
        }
    }
    // Filter out any passed extra_params that are really to do with OAuth
    for(var key in extra_params){
        if (this._isParameterNameAnOAuthParameter(key)) {
            delete extra_params[key];
        }
    }
    if ((method == "POST" || method == "PUT") && post_body == null && extra_params != null) {
        // Fix the mismatch between the output of querystring.stringify() and this._encodeData()
        post_body = querystring.stringify(extra_params).replace(/\!/g, "%21").replace(/\'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A");
    }
    if (post_body) {
        if (Buffer.isBuffer(post_body)) {
            headers["Content-length"] = post_body.length;
        } else {
            headers["Content-length"] = Buffer.byteLength(post_body);
        }
    } else {
        headers["Content-length"] = 0;
    }
    headers["Content-Type"] = post_content_type;
    var path;
    if (!parsedUrl.pathname || parsedUrl.pathname == "") parsedUrl.pathname = "/";
    if (parsedUrl.query) path = parsedUrl.pathname + "?" + parsedUrl.query;
    else path = parsedUrl.pathname;
    var request;
    if (parsedUrl.protocol == "https:") {
        request = this._createClient(parsedUrl.port, parsedUrl.hostname, method, path, headers, true);
    } else {
        request = this._createClient(parsedUrl.port, parsedUrl.hostname, method, path, headers);
    }
    var clientOptions = this._clientOptions;
    if (callback) {
        var data = "";
        var self = this;
        // Some hosts *cough* google appear to close the connection early / send no content-length header
        // allow this behaviour.
        var allowEarlyClose = OAuthUtils.isAnEarlyCloseHost(parsedUrl.hostname);
        var callbackCalled = false;
        var passBackControl = function(response) {
            if (!callbackCalled) {
                callbackCalled = true;
                if (response.statusCode >= 200 && response.statusCode <= 299) {
                    callback(null, data, response);
                } else {
                    // Follow 301 or 302 redirects with Location HTTP header
                    if ((response.statusCode == 301 || response.statusCode == 302) && clientOptions.followRedirects && response.headers && response.headers.location) {
                        self._performSecureRequest(oauth_token, oauth_token_secret, method, response.headers.location, extra_params, post_body, post_content_type, callback);
                    } else {
                        callback({
                            statusCode: response.statusCode,
                            data: data
                        }, data, response);
                    }
                }
            }
        };
        request.on('response', function(response) {
            response.setEncoding('utf8');
            response.on('data', function(chunk) {
                data += chunk;
            });
            response.on('end', function() {
                passBackControl(response);
            });
            response.on('close', function() {
                if (allowEarlyClose) {
                    passBackControl(response);
                }
            });
        });
        request.on("error", function(err) {
            if (!callbackCalled) {
                callbackCalled = true;
                callback(err);
            }
        });
        if ((method == "POST" || method == "PUT") && post_body != null && post_body != "") {
            request.write(post_body);
        }
        request.end();
    } else {
        if ((method == "POST" || method == "PUT") && post_body != null && post_body != "") {
            request.write(post_body);
        }
        return request;
    }
    return;
};
exports.OAuth.prototype.setClientOptions = function(options) {
    var key, mergedOptions = {}, hasOwnProperty = Object.prototype.hasOwnProperty;
    for(key in this._defaultClientOptions){
        if (!hasOwnProperty.call(options, key)) {
            mergedOptions[key] = this._defaultClientOptions[key];
        } else {
            mergedOptions[key] = options[key];
        }
    }
    this._clientOptions = mergedOptions;
};
exports.OAuth.prototype.getOAuthAccessToken = function(oauth_token, oauth_token_secret, oauth_verifier, callback) {
    var extraParams = {};
    if (typeof oauth_verifier == "function") {
        callback = oauth_verifier;
    } else {
        extraParams.oauth_verifier = oauth_verifier;
    }
    this._performSecureRequest(oauth_token, oauth_token_secret, this._clientOptions.accessTokenHttpMethod, this._accessUrl, extraParams, null, null, function(error, data, response) {
        if (error) callback(error);
        else {
            var results = querystring.parse(data);
            var oauth_access_token = results["oauth_token"];
            delete results["oauth_token"];
            var oauth_access_token_secret = results["oauth_token_secret"];
            delete results["oauth_token_secret"];
            callback(null, oauth_access_token, oauth_access_token_secret, results);
        }
    });
};
// Deprecated
exports.OAuth.prototype.getProtectedResource = function(url, method, oauth_token, oauth_token_secret, callback) {
    this._performSecureRequest(oauth_token, oauth_token_secret, method, url, null, "", null, callback);
};
exports.OAuth.prototype.delete = function(url, oauth_token, oauth_token_secret, callback) {
    return this._performSecureRequest(oauth_token, oauth_token_secret, "DELETE", url, null, "", null, callback);
};
exports.OAuth.prototype.get = function(url, oauth_token, oauth_token_secret, callback) {
    return this._performSecureRequest(oauth_token, oauth_token_secret, "GET", url, null, "", null, callback);
};
exports.OAuth.prototype._putOrPost = function(method, url, oauth_token, oauth_token_secret, post_body, post_content_type, callback) {
    var extra_params = null;
    if (typeof post_content_type == "function") {
        callback = post_content_type;
        post_content_type = null;
    }
    if (typeof post_body != "string" && !Buffer.isBuffer(post_body)) {
        post_content_type = "application/x-www-form-urlencoded";
        extra_params = post_body;
        post_body = null;
    }
    return this._performSecureRequest(oauth_token, oauth_token_secret, method, url, extra_params, post_body, post_content_type, callback);
};
exports.OAuth.prototype.put = function(url, oauth_token, oauth_token_secret, post_body, post_content_type, callback) {
    return this._putOrPost("PUT", url, oauth_token, oauth_token_secret, post_body, post_content_type, callback);
};
exports.OAuth.prototype.post = function(url, oauth_token, oauth_token_secret, post_body, post_content_type, callback) {
    return this._putOrPost("POST", url, oauth_token, oauth_token_secret, post_body, post_content_type, callback);
};
/**
 * Gets a request token from the OAuth provider and passes that information back
 * to the calling code.
 *
 * The callback should expect a function of the following form:
 *
 * function(err, token, token_secret, parsedQueryString) {}
 *
 * This method has optional parameters so can be called in the following 2 ways:
 *
 * 1) Primary use case: Does a basic request with no extra parameters
 *  getOAuthRequestToken( callbackFunction )
 *
 * 2) As above but allows for provision of extra parameters to be sent as part of the query to the server.
 *  getOAuthRequestToken( extraParams, callbackFunction )
 *
 * N.B. This method will HTTP POST verbs by default, if you wish to override this behaviour you will
 * need to provide a requestTokenHttpMethod option when creating the client.
 *
 **/ exports.OAuth.prototype.getOAuthRequestToken = function(extraParams, callback) {
    if (typeof extraParams == "function") {
        callback = extraParams;
        extraParams = {};
    }
    // Callbacks are 1.0A related
    if (this._authorize_callback) {
        extraParams["oauth_callback"] = this._authorize_callback;
    }
    this._performSecureRequest(null, null, this._clientOptions.requestTokenHttpMethod, this._requestUrl, extraParams, null, null, function(error, data, response) {
        if (error) callback(error);
        else {
            var results = querystring.parse(data);
            var oauth_token = results["oauth_token"];
            var oauth_token_secret = results["oauth_token_secret"];
            delete results["oauth_token"];
            delete results["oauth_token_secret"];
            callback(null, oauth_token, oauth_token_secret, results);
        }
    });
};
exports.OAuth.prototype.signUrl = function(url, oauth_token, oauth_token_secret, method) {
    if (method === undefined) {
        var method = "GET";
    }
    var orderedParameters = this._prepareParameters(oauth_token, oauth_token_secret, method, url, {});
    var parsedUrl = URL.parse(url, false);
    var query = "";
    for(var i = 0; i < orderedParameters.length; i++){
        query += orderedParameters[i][0] + "=" + this._encodeData(orderedParameters[i][1]) + "&";
    }
    query = query.substring(0, query.length - 1);
    return parsedUrl.protocol + "//" + parsedUrl.host + parsedUrl.pathname + "?" + query;
};
exports.OAuth.prototype.authHeader = function(url, oauth_token, oauth_token_secret, method) {
    if (method === undefined) {
        var method = "GET";
    }
    var orderedParameters = this._prepareParameters(oauth_token, oauth_token_secret, method, url, {});
    return this._buildAuthorizationHeaders(orderedParameters);
};
}}),
"[project]/node_modules/.pnpm/oauth@0.9.15/node_modules/oauth/lib/oauth2.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
var querystring = __turbopack_require__("[externals]/ [external] (querystring, cjs)"), crypto = __turbopack_require__("[externals]/ [external] (crypto, cjs)"), https = __turbopack_require__("[externals]/ [external] (https, cjs)"), http = __turbopack_require__("[externals]/ [external] (http, cjs)"), URL = __turbopack_require__("[externals]/ [external] (url, cjs)"), OAuthUtils = __turbopack_require__("[project]/node_modules/.pnpm/oauth@0.9.15/node_modules/oauth/lib/_utils.js [app-rsc] (ecmascript)");
exports.OAuth2 = function(clientId, clientSecret, baseSite, authorizePath, accessTokenPath, customHeaders) {
    this._clientId = clientId;
    this._clientSecret = clientSecret;
    this._baseSite = baseSite;
    this._authorizeUrl = authorizePath || "/oauth/authorize";
    this._accessTokenUrl = accessTokenPath || "/oauth/access_token";
    this._accessTokenName = "access_token";
    this._authMethod = "Bearer";
    this._customHeaders = customHeaders || {};
    this._useAuthorizationHeaderForGET = false;
    //our agent
    this._agent = undefined;
};
// Allows you to set an agent to use instead of the default HTTP or
// HTTPS agents. Useful when dealing with your own certificates.
exports.OAuth2.prototype.setAgent = function(agent) {
    this._agent = agent;
};
// This 'hack' method is required for sites that don't use
// 'access_token' as the name of the access token (for requests).
// ( http://tools.ietf.org/html/draft-ietf-oauth-v2-16#section-7 )
// it isn't clear what the correct value should be atm, so allowing
// for specific (temporary?) override for now.
exports.OAuth2.prototype.setAccessTokenName = function(name) {
    this._accessTokenName = name;
};
// Sets the authorization method for Authorization header.
// e.g. Authorization: Bearer <token>  # "Bearer" is the authorization method.
exports.OAuth2.prototype.setAuthMethod = function(authMethod) {
    this._authMethod = authMethod;
};
// If you use the OAuth2 exposed 'get' method (and don't construct your own _request call )
// this will specify whether to use an 'Authorize' header instead of passing the access_token as a query parameter
exports.OAuth2.prototype.useAuthorizationHeaderforGET = function(useIt) {
    this._useAuthorizationHeaderForGET = useIt;
};
exports.OAuth2.prototype._getAccessTokenUrl = function() {
    return this._baseSite + this._accessTokenUrl; /* + "?" + querystring.stringify(params); */ 
};
// Build the authorization header. In particular, build the part after the colon.
// e.g. Authorization: Bearer <token>  # Build "Bearer <token>"
exports.OAuth2.prototype.buildAuthHeader = function(token) {
    return this._authMethod + ' ' + token;
};
exports.OAuth2.prototype._chooseHttpLibrary = function(parsedUrl) {
    var http_library = https;
    // As this is OAUth2, we *assume* https unless told explicitly otherwise.
    if (parsedUrl.protocol != "https:") {
        http_library = http;
    }
    return http_library;
};
exports.OAuth2.prototype._request = function(method, url, headers, post_body, access_token, callback) {
    var parsedUrl = URL.parse(url, true);
    if (parsedUrl.protocol == "https:" && !parsedUrl.port) {
        parsedUrl.port = 443;
    }
    var http_library = this._chooseHttpLibrary(parsedUrl);
    var realHeaders = {};
    for(var key in this._customHeaders){
        realHeaders[key] = this._customHeaders[key];
    }
    if (headers) {
        for(var key in headers){
            realHeaders[key] = headers[key];
        }
    }
    realHeaders['Host'] = parsedUrl.host;
    if (!realHeaders['User-Agent']) {
        realHeaders['User-Agent'] = 'Node-oauth';
    }
    if (post_body) {
        if (Buffer.isBuffer(post_body)) {
            realHeaders["Content-Length"] = post_body.length;
        } else {
            realHeaders["Content-Length"] = Buffer.byteLength(post_body);
        }
    } else {
        realHeaders["Content-length"] = 0;
    }
    if (access_token && !('Authorization' in realHeaders)) {
        if (!parsedUrl.query) parsedUrl.query = {};
        parsedUrl.query[this._accessTokenName] = access_token;
    }
    var queryStr = querystring.stringify(parsedUrl.query);
    if (queryStr) queryStr = "?" + queryStr;
    var options = {
        host: parsedUrl.hostname,
        port: parsedUrl.port,
        path: parsedUrl.pathname + queryStr,
        method: method,
        headers: realHeaders
    };
    this._executeRequest(http_library, options, post_body, callback);
};
exports.OAuth2.prototype._executeRequest = function(http_library, options, post_body, callback) {
    // Some hosts *cough* google appear to close the connection early / send no content-length header
    // allow this behaviour.
    var allowEarlyClose = OAuthUtils.isAnEarlyCloseHost(options.host);
    var callbackCalled = false;
    function passBackControl(response, result) {
        if (!callbackCalled) {
            callbackCalled = true;
            if (!(response.statusCode >= 200 && response.statusCode <= 299) && response.statusCode != 301 && response.statusCode != 302) {
                callback({
                    statusCode: response.statusCode,
                    data: result
                });
            } else {
                callback(null, result, response);
            }
        }
    }
    var result = "";
    //set the agent on the request options
    if (this._agent) {
        options.agent = this._agent;
    }
    var request = http_library.request(options);
    request.on('response', function(response) {
        response.on("data", function(chunk) {
            result += chunk;
        });
        response.on("close", function(err) {
            if (allowEarlyClose) {
                passBackControl(response, result);
            }
        });
        response.addListener("end", function() {
            passBackControl(response, result);
        });
    });
    request.on('error', function(e) {
        callbackCalled = true;
        callback(e);
    });
    if ((options.method == 'POST' || options.method == 'PUT') && post_body) {
        request.write(post_body);
    }
    request.end();
};
exports.OAuth2.prototype.getAuthorizeUrl = function(params) {
    var params = params || {};
    params['client_id'] = this._clientId;
    return this._baseSite + this._authorizeUrl + "?" + querystring.stringify(params);
};
exports.OAuth2.prototype.getOAuthAccessToken = function(code, params, callback) {
    var params = params || {};
    params['client_id'] = this._clientId;
    params['client_secret'] = this._clientSecret;
    var codeParam = params.grant_type === 'refresh_token' ? 'refresh_token' : 'code';
    params[codeParam] = code;
    var post_data = querystring.stringify(params);
    var post_headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    };
    this._request("POST", this._getAccessTokenUrl(), post_headers, post_data, null, function(error, data, response) {
        if (error) callback(error);
        else {
            var results;
            try {
                // As of http://tools.ietf.org/html/draft-ietf-oauth-v2-07
                // responses should be in JSON
                results = JSON.parse(data);
            } catch (e) {
                // .... However both Facebook + Github currently use rev05 of the spec
                // and neither seem to specify a content-type correctly in their response headers :(
                // clients of these services will suffer a *minor* performance cost of the exception
                // being thrown
                results = querystring.parse(data);
            }
            var access_token = results["access_token"];
            var refresh_token = results["refresh_token"];
            delete results["refresh_token"];
            callback(null, access_token, refresh_token, results); // callback results =-=
        }
    });
};
// Deprecated
exports.OAuth2.prototype.getProtectedResource = function(url, access_token, callback) {
    this._request("GET", url, {}, "", access_token, callback);
};
exports.OAuth2.prototype.get = function(url, access_token, callback) {
    if (this._useAuthorizationHeaderForGET) {
        var headers = {
            'Authorization': this.buildAuthHeader(access_token)
        };
        access_token = null;
    } else {
        headers = {};
    }
    this._request("GET", url, headers, "", access_token, callback);
};
}}),
"[project]/node_modules/.pnpm/oauth@0.9.15/node_modules/oauth/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
exports.OAuth = __turbopack_require__("[project]/node_modules/.pnpm/oauth@0.9.15/node_modules/oauth/lib/oauth.js [app-rsc] (ecmascript)").OAuth;
exports.OAuthEcho = __turbopack_require__("[project]/node_modules/.pnpm/oauth@0.9.15/node_modules/oauth/lib/oauth.js [app-rsc] (ecmascript)").OAuthEcho;
exports.OAuth2 = __turbopack_require__("[project]/node_modules/.pnpm/oauth@0.9.15/node_modules/oauth/lib/oauth2.js [app-rsc] (ecmascript)").OAuth2;
}}),
"[project]/node_modules/.pnpm/@panva+hkdf@1.2.1/node_modules/@panva/hkdf/dist/node/cjs/runtime/fallback.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const crypto_1 = __turbopack_require__("[externals]/ [external] (crypto, cjs)");
exports.default = (digest, ikm, salt, info, keylen)=>{
    const hashlen = parseInt(digest.substr(3), 10) >> 3 || 20;
    const prk = (0, crypto_1.createHmac)(digest, salt.byteLength ? salt : new Uint8Array(hashlen)).update(ikm).digest();
    const N = Math.ceil(keylen / hashlen);
    const T = new Uint8Array(hashlen * N + info.byteLength + 1);
    let prev = 0;
    let start = 0;
    for(let c = 1; c <= N; c++){
        T.set(info, start);
        T[start + info.byteLength] = c;
        T.set((0, crypto_1.createHmac)(digest, prk).update(T.subarray(prev, start + info.byteLength + 1)).digest(), start);
        prev = start;
        start += hashlen;
    }
    return T.slice(0, keylen);
};
}}),
"[project]/node_modules/.pnpm/@panva+hkdf@1.2.1/node_modules/@panva/hkdf/dist/node/cjs/runtime/hkdf.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const crypto = __turbopack_require__("[externals]/ [external] (crypto, cjs)");
const fallback_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/@panva+hkdf@1.2.1/node_modules/@panva/hkdf/dist/node/cjs/runtime/fallback.js [app-rsc] (ecmascript)");
let hkdf;
if (typeof crypto.hkdf === 'function' && !process.versions.electron) {
    hkdf = async (...args)=>new Promise((resolve, reject)=>{
            crypto.hkdf(...args, (err, arrayBuffer)=>{
                if (err) reject(err);
                else resolve(new Uint8Array(arrayBuffer));
            });
        });
}
exports.default = async (digest, ikm, salt, info, keylen)=>(hkdf || fallback_js_1.default)(digest, ikm, salt, info, keylen);
}}),
"[project]/node_modules/.pnpm/@panva+hkdf@1.2.1/node_modules/@panva/hkdf/dist/node/cjs/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = exports.hkdf = void 0;
const hkdf_js_1 = __turbopack_require__("[project]/node_modules/.pnpm/@panva+hkdf@1.2.1/node_modules/@panva/hkdf/dist/node/cjs/runtime/hkdf.js [app-rsc] (ecmascript)");
function normalizeDigest(digest) {
    switch(digest){
        case 'sha256':
        case 'sha384':
        case 'sha512':
        case 'sha1':
            return digest;
        default:
            throw new TypeError('unsupported "digest" value');
    }
}
function normalizeUint8Array(input, label) {
    if (typeof input === 'string') return new TextEncoder().encode(input);
    if (!(input instanceof Uint8Array)) throw new TypeError(`"${label}"" must be an instance of Uint8Array or a string`);
    return input;
}
function normalizeIkm(input) {
    const ikm = normalizeUint8Array(input, 'ikm');
    if (!ikm.byteLength) throw new TypeError(`"ikm" must be at least one byte in length`);
    return ikm;
}
function normalizeInfo(input) {
    const info = normalizeUint8Array(input, 'info');
    if (info.byteLength > 1024) {
        throw TypeError('"info" must not contain more than 1024 bytes');
    }
    return info;
}
function normalizeKeylen(input, digest) {
    if (typeof input !== 'number' || !Number.isInteger(input) || input < 1) {
        throw new TypeError('"keylen" must be a positive integer');
    }
    const hashlen = parseInt(digest.substr(3), 10) >> 3 || 20;
    if (input > 255 * hashlen) {
        throw new TypeError('"keylen" too large');
    }
    return input;
}
async function hkdf(digest, ikm, salt, info, keylen) {
    return (0, hkdf_js_1.default)(normalizeDigest(digest), normalizeIkm(ikm), normalizeUint8Array(salt, 'salt'), normalizeInfo(info), normalizeKeylen(keylen, digest));
}
exports.hkdf = hkdf;
exports.default = hkdf;
}}),
"[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/index.js [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({});
;
;
;
;
;
;
;
;
;
}}),
"[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/index.js [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/index.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/nil.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = '00000000-0000-0000-0000-000000000000';
}}),
"[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/regex.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
const __TURBOPACK__default__export__ = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
}}),
"[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/regex.js [app-rsc] (ecmascript)");
;
function validate(uuid) {
    return typeof uuid === 'string' && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$regex$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].test(uuid);
}
const __TURBOPACK__default__export__ = validate;
}}),
"[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/parse.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)");
;
function parse(uuid) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Invalid UUID');
    }
    let v;
    const arr = new Uint8Array(16); // Parse ########-....-....-....-............
    arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
    arr[1] = v >>> 16 & 0xff;
    arr[2] = v >>> 8 & 0xff;
    arr[3] = v & 0xff; // Parse ........-####-....-....-............
    arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
    arr[5] = v & 0xff; // Parse ........-....-####-....-............
    arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
    arr[7] = v & 0xff; // Parse ........-....-....-####-............
    arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
    arr[9] = v & 0xff; // Parse ........-....-....-....-############
    // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)
    arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
    arr[11] = v / 0x100000000 & 0xff;
    arr[12] = v >>> 24 & 0xff;
    arr[13] = v >>> 16 & 0xff;
    arr[14] = v >>> 8 & 0xff;
    arr[15] = v & 0xff;
    return arr;
}
const __TURBOPACK__default__export__ = parse;
}}),
"[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)");
;
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */ const byteToHex = [];
for(let i = 0; i < 256; ++i){
    byteToHex.push((i + 0x100).toString(16).substr(1));
}
function stringify(arr, offset = 0) {
    // Note: Be careful editing this code!  It's been tuned for performance
    // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
    const uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
    // of the following:
    // - One or more input array values don't map to a hex octet (leading to
    // "undefined" in the uuid)
    // - Invalid input values for the RFC `version` or `variant` fields
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Stringified UUID is invalid');
    }
    return uuid;
}
const __TURBOPACK__default__export__ = stringify;
}}),
"[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>rng)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (crypto, cjs)");
;
const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate
let poolPtr = rnds8Pool.length;
function rng() {
    if (poolPtr > rnds8Pool.length - 16) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].randomFillSync(rnds8Pool);
        poolPtr = 0;
    }
    return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
}}),
"[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/v1.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)"); // **`v1()` - Generate time-based UUID**
;
;
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;
let _clockseq; // Previous uuid creation time
let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details
function v1(options, buf, offset) {
    let i = buf && offset || 0;
    const b = buf || new Array(16);
    options = options || {};
    let node = options.node || _nodeId;
    let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
    // specified.  We do this lazily to minimize issues related to insufficient
    // system entropy.  See #189
    if (node == null || clockseq == null) {
        const seedBytes = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
        if (node == null) {
            // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
            node = _nodeId = [
                seedBytes[0] | 0x01,
                seedBytes[1],
                seedBytes[2],
                seedBytes[3],
                seedBytes[4],
                seedBytes[5]
            ];
        }
        if (clockseq == null) {
            // Per 4.2.2, randomize (14 bit) clockseq
            clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
        }
    } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
    // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
    // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
    // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
    let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
    // cycle to simulate higher resolution clock
    let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)
    const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression
    if (dt < 0 && options.clockseq === undefined) {
        clockseq = clockseq + 1 & 0x3fff;
    } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
    // time interval
    if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
        nsecs = 0;
    } // Per 4.2.1.2 Throw error if too many uuids are requested
    if (nsecs >= 10000) {
        throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    }
    _lastMSecs = msecs;
    _lastNSecs = nsecs;
    _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
    msecs += 12219292800000; // `time_low`
    const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
    b[i++] = tl >>> 24 & 0xff;
    b[i++] = tl >>> 16 & 0xff;
    b[i++] = tl >>> 8 & 0xff;
    b[i++] = tl & 0xff; // `time_mid`
    const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
    b[i++] = tmh >>> 8 & 0xff;
    b[i++] = tmh & 0xff; // `time_high_and_version`
    b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
    b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
    b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`
    b[i++] = clockseq & 0xff; // `node`
    for(let n = 0; n < 6; ++n){
        b[i + n] = node[n];
    }
    return buf || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(b);
}
const __TURBOPACK__default__export__ = v1;
}}),
"[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/v35.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "DNS": (()=>DNS),
    "URL": (()=>URL),
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/parse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
;
;
function stringToBytes(str) {
    str = unescape(encodeURIComponent(str)); // UTF8 escape
    const bytes = [];
    for(let i = 0; i < str.length; ++i){
        bytes.push(str.charCodeAt(i));
    }
    return bytes;
}
const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
function __TURBOPACK__default__export__(name, version, hashfunc) {
    function generateUUID(value, namespace, buf, offset) {
        if (typeof value === 'string') {
            value = stringToBytes(value);
        }
        if (typeof namespace === 'string') {
            namespace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(namespace);
        }
        if (namespace.length !== 16) {
            throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
        } // Compute hash of namespace and value, Per 4.3
        // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
        // hashfunc([...namespace, ... value])`
        let bytes = new Uint8Array(16 + value.length);
        bytes.set(namespace);
        bytes.set(value, namespace.length);
        bytes = hashfunc(bytes);
        bytes[6] = bytes[6] & 0x0f | version;
        bytes[8] = bytes[8] & 0x3f | 0x80;
        if (buf) {
            offset = offset || 0;
            for(let i = 0; i < 16; ++i){
                buf[offset + i] = bytes[i];
            }
            return buf;
        }
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(bytes);
    } // Function#name is not settable on some platforms (#270)
    try {
        generateUUID.name = name; // eslint-disable-next-line no-empty
    } catch (err) {} // For CommonJS default export support
    generateUUID.DNS = DNS;
    generateUUID.URL = URL;
    return generateUUID;
}
}}),
"[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/md5.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (crypto, cjs)");
;
function md5(bytes) {
    if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
    } else if (typeof bytes === 'string') {
        bytes = Buffer.from(bytes, 'utf8');
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('md5').update(bytes).digest();
}
const __TURBOPACK__default__export__ = md5;
}}),
"[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/v3.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/v35.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$md5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/md5.js [app-rsc] (ecmascript)");
;
;
const v3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])('v3', 0x30, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$md5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = v3;
}}),
"[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/rng.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
;
;
function v4(options, buf, offset) {
    options = options || {};
    const rnds = options.random || (options.rng || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$rng$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
    rnds[6] = rnds[6] & 0x0f | 0x40;
    rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided
    if (buf) {
        offset = offset || 0;
        for(let i = 0; i < 16; ++i){
            buf[offset + i] = rnds[i];
        }
        return buf;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(rnds);
}
const __TURBOPACK__default__export__ = v4;
}}),
"[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/sha1.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_import__("[externals]/ [external] (crypto, cjs)");
;
function sha1(bytes) {
    if (Array.isArray(bytes)) {
        bytes = Buffer.from(bytes);
    } else if (typeof bytes === 'string') {
        bytes = Buffer.from(bytes, 'utf8');
    }
    return __TURBOPACK__imported__module__$5b$externals$5d2f$__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash('sha1').update(bytes).digest();
}
const __TURBOPACK__default__export__ = sha1;
}}),
"[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/v5.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/v35.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$sha1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/sha1.js [app-rsc] (ecmascript)");
;
;
const v5 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v35$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])('v5', 0x50, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$sha1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]);
const __TURBOPACK__default__export__ = v5;
}}),
"[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/version.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)");
;
function version(uuid) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])(uuid)) {
        throw TypeError('Invalid UUID');
    }
    return parseInt(uuid.substr(14, 1), 16);
}
const __TURBOPACK__default__export__ = version;
}}),
"[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/index.js [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "NIL": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$nil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]),
    "parse": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]),
    "stringify": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]),
    "v1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]),
    "v3": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]),
    "v4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]),
    "v5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]),
    "validate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]),
    "version": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$nil$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/nil.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$parse$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/parse.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$stringify$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/stringify.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v1$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/v1.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v3$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/v3.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v4$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/v4.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$v5$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/v5.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/validate.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$version$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/version.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/index.js [app-rsc] (ecmascript) <locals>");
}}),
"[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, t: require } = __turbopack_context__;
{
__turbopack_esm__({
    "NIL": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["NIL"]),
    "parse": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["parse"]),
    "stringify": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["stringify"]),
    "v1": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["v1"]),
    "v3": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["v3"]),
    "v4": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["v4"]),
    "v5": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["v5"]),
    "validate": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["validate"]),
    "version": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["version"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/index.js [app-rsc] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$uuid$40$8$2e$3$2e$2$2f$node_modules$2f$uuid$2f$dist$2f$esm$2d$node$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_import__("[project]/node_modules/.pnpm/uuid@8.3.2/node_modules/uuid/dist/esm-node/index.js [app-rsc] (ecmascript) <exports>");
}}),
"[project]/node_modules/.pnpm/preact@10.24.3/node_modules/preact/dist/preact.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
var n, l, t, u, i, o, r, e, f, c, s, h, a = {}, p = [], v = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, y = Array.isArray;
function d(n, l) {
    for(var t in l)n[t] = l[t];
    return n;
}
function w(n) {
    n && n.parentNode && n.parentNode.removeChild(n);
}
function _(l, t, u) {
    var i, o, r, e = {};
    for(r in t)"key" == r ? i = t[r] : "ref" == r ? o = t[r] : e[r] = t[r];
    if (arguments.length > 2 && (e.children = arguments.length > 3 ? n.call(arguments, 2) : u), "function" == typeof l && null != l.defaultProps) for(r in l.defaultProps)void 0 === e[r] && (e[r] = l.defaultProps[r]);
    return g(l, e, i, o, null);
}
function g(n, u, i, o, r) {
    var e = {
        type: n,
        props: u,
        key: i,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        constructor: void 0,
        __v: null == r ? ++t : r,
        __i: -1,
        __u: 0
    };
    return null == r && null != l.vnode && l.vnode(e), e;
}
function x(n) {
    return n.children;
}
function m(n, l) {
    this.props = n, this.context = l;
}
function b(n, l) {
    if (null == l) return n.__ ? b(n.__, n.__i + 1) : null;
    for(var t; l < n.__k.length; l++)if (null != (t = n.__k[l]) && null != t.__e) return t.__e;
    return "function" == typeof n.type ? b(n) : null;
}
function k(n) {
    var l, t;
    if (null != (n = n.__) && null != n.__c) {
        for(n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++)if (null != (t = n.__k[l]) && null != t.__e) {
            n.__e = n.__c.base = t.__e;
            break;
        }
        return k(n);
    }
}
function S(n) {
    (!n.__d && (n.__d = !0) && i.push(n) && !C.__r++ || o !== l.debounceRendering) && ((o = l.debounceRendering) || r)(C);
}
function C() {
    var n, t, u, o, r, f, c, s;
    for(i.sort(e); n = i.shift();)n.__d && (t = i.length, o = void 0, f = (r = (u = n).__v).__e, c = [], s = [], u.__P && ((o = d({}, r)).__v = r.__v + 1, l.vnode && l.vnode(o), A(u.__P, o, r, u.__n, u.__P.namespaceURI, 32 & r.__u ? [
        f
    ] : null, c, null == f ? b(r) : f, !!(32 & r.__u), s), o.__v = r.__v, o.__.__k[o.__i] = o, F(c, o, s), o.__e != f && k(o)), i.length > t && i.sort(e));
    C.__r = 0;
}
function M(n, l, t, u, i, o, r, e, f, c, s) {
    var h, v, y, d, w, _ = u && u.__k || p, g = l.length;
    for(t.__d = f, P(t, l, _), f = t.__d, h = 0; h < g; h++)null != (y = t.__k[h]) && (v = -1 === y.__i ? a : _[y.__i] || a, y.__i = h, A(n, y, v, i, o, r, e, f, c, s), d = y.__e, y.ref && v.ref != y.ref && (v.ref && j(v.ref, null, y), s.push(y.ref, y.__c || d, y)), null == w && null != d && (w = d), 65536 & y.__u || v.__k === y.__k ? f = $(y, f, n) : "function" == typeof y.type && void 0 !== y.__d ? f = y.__d : d && (f = d.nextSibling), y.__d = void 0, y.__u &= -196609);
    t.__d = f, t.__e = w;
}
function P(n, l, t) {
    var u, i, o, r, e, f = l.length, c = t.length, s = c, h = 0;
    for(n.__k = [], u = 0; u < f; u++)null != (i = l[u]) && "boolean" != typeof i && "function" != typeof i ? (r = u + h, (i = n.__k[u] = "string" == typeof i || "number" == typeof i || "bigint" == typeof i || i.constructor == String ? g(null, i, null, null, null) : y(i) ? g(x, {
        children: i
    }, null, null, null) : void 0 === i.constructor && i.__b > 0 ? g(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : i).__ = n, i.__b = n.__b + 1, o = null, -1 !== (e = i.__i = I(i, t, r, s)) && (s--, (o = t[e]) && (o.__u |= 131072)), null == o || null === o.__v ? (-1 == e && h--, "function" != typeof i.type && (i.__u |= 65536)) : e !== r && (e == r - 1 ? h-- : e == r + 1 ? h++ : (e > r ? h-- : h++, i.__u |= 65536))) : i = n.__k[u] = null;
    if (s) for(u = 0; u < c; u++)null != (o = t[u]) && 0 == (131072 & o.__u) && (o.__e == n.__d && (n.__d = b(o)), z(o, o));
}
function $(n, l, t) {
    var u, i;
    if ("function" == typeof n.type) {
        for(u = n.__k, i = 0; u && i < u.length; i++)u[i] && (u[i].__ = n, l = $(u[i], l, t));
        return l;
    }
    n.__e != l && (l && n.type && !t.contains(l) && (l = b(n)), t.insertBefore(n.__e, l || null), l = n.__e);
    do {
        l = l && l.nextSibling;
    }while (null != l && 8 === l.nodeType)
    return l;
}
function I(n, l, t, u) {
    var i = n.key, o = n.type, r = t - 1, e = t + 1, f = l[t];
    if (null === f || f && i == f.key && o === f.type && 0 == (131072 & f.__u)) return t;
    if (u > (null != f && 0 == (131072 & f.__u) ? 1 : 0)) for(; r >= 0 || e < l.length;){
        if (r >= 0) {
            if ((f = l[r]) && 0 == (131072 & f.__u) && i == f.key && o === f.type) return r;
            r--;
        }
        if (e < l.length) {
            if ((f = l[e]) && 0 == (131072 & f.__u) && i == f.key && o === f.type) return e;
            e++;
        }
    }
    return -1;
}
function H(n, l, t) {
    "-" === l[0] ? n.setProperty(l, null == t ? "" : t) : n[l] = null == t ? "" : "number" != typeof t || v.test(l) ? t : t + "px";
}
function L(n, l, t, u, i) {
    var o;
    n: if ("style" === l) if ("string" == typeof t) n.style.cssText = t;
    else {
        if ("string" == typeof u && (n.style.cssText = u = ""), u) for(l in u)t && l in t || H(n.style, l, "");
        if (t) for(l in t)u && t[l] === u[l] || H(n.style, l, t[l]);
    }
    else if ("o" === l[0] && "n" === l[1]) o = l !== (l = l.replace(/(PointerCapture)$|Capture$/i, "$1")), l = l.toLowerCase() in n || "onFocusOut" === l || "onFocusIn" === l ? l.toLowerCase().slice(2) : l.slice(2), n.l || (n.l = {}), n.l[l + o] = t, t ? u ? t.t = u.t : (t.t = f, n.addEventListener(l, o ? s : c, o)) : n.removeEventListener(l, o ? s : c, o);
    else {
        if ("http://www.w3.org/2000/svg" == i) l = l.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if ("width" != l && "height" != l && "href" != l && "list" != l && "form" != l && "tabIndex" != l && "download" != l && "rowSpan" != l && "colSpan" != l && "role" != l && "popover" != l && l in n) try {
            n[l] = null == t ? "" : t;
            break n;
        } catch (n) {}
        "function" == typeof t || (null == t || !1 === t && "-" !== l[4] ? n.removeAttribute(l) : n.setAttribute(l, "popover" == l && 1 == t ? "" : t));
    }
}
function T(n) {
    return function(t) {
        if (this.l) {
            var u = this.l[t.type + n];
            if (null == t.u) t.u = f++;
            else if (t.u < u.t) return;
            return u(l.event ? l.event(t) : t);
        }
    };
}
function A(n, t, u, i, o, r, e, f, c, s) {
    var h, a, p, v, w, _, g, b, k, S, C, P, $, I, H, L, T = t.type;
    if (void 0 !== t.constructor) return null;
    128 & u.__u && (c = !!(32 & u.__u), r = [
        f = t.__e = u.__e
    ]), (h = l.__b) && h(t);
    n: if ("function" == typeof T) try {
        if (b = t.props, k = "prototype" in T && T.prototype.render, S = (h = T.contextType) && i[h.__c], C = h ? S ? S.props.value : h.__ : i, u.__c ? g = (a = t.__c = u.__c).__ = a.__E : (k ? t.__c = a = new T(b, C) : (t.__c = a = new m(b, C), a.constructor = T, a.render = N), S && S.sub(a), a.props = b, a.state || (a.state = {}), a.context = C, a.__n = i, p = a.__d = !0, a.__h = [], a._sb = []), k && null == a.__s && (a.__s = a.state), k && null != T.getDerivedStateFromProps && (a.__s == a.state && (a.__s = d({}, a.__s)), d(a.__s, T.getDerivedStateFromProps(b, a.__s))), v = a.props, w = a.state, a.__v = t, p) k && null == T.getDerivedStateFromProps && null != a.componentWillMount && a.componentWillMount(), k && null != a.componentDidMount && a.__h.push(a.componentDidMount);
        else {
            if (k && null == T.getDerivedStateFromProps && b !== v && null != a.componentWillReceiveProps && a.componentWillReceiveProps(b, C), !a.__e && (null != a.shouldComponentUpdate && !1 === a.shouldComponentUpdate(b, a.__s, C) || t.__v === u.__v)) {
                for(t.__v !== u.__v && (a.props = b, a.state = a.__s, a.__d = !1), t.__e = u.__e, t.__k = u.__k, t.__k.some(function(n) {
                    n && (n.__ = t);
                }), P = 0; P < a._sb.length; P++)a.__h.push(a._sb[P]);
                a._sb = [], a.__h.length && e.push(a);
                break n;
            }
            null != a.componentWillUpdate && a.componentWillUpdate(b, a.__s, C), k && null != a.componentDidUpdate && a.__h.push(function() {
                a.componentDidUpdate(v, w, _);
            });
        }
        if (a.context = C, a.props = b, a.__P = n, a.__e = !1, $ = l.__r, I = 0, k) {
            for(a.state = a.__s, a.__d = !1, $ && $(t), h = a.render(a.props, a.state, a.context), H = 0; H < a._sb.length; H++)a.__h.push(a._sb[H]);
            a._sb = [];
        } else do {
            a.__d = !1, $ && $(t), h = a.render(a.props, a.state, a.context), a.state = a.__s;
        }while (a.__d && ++I < 25)
        a.state = a.__s, null != a.getChildContext && (i = d(d({}, i), a.getChildContext())), k && !p && null != a.getSnapshotBeforeUpdate && (_ = a.getSnapshotBeforeUpdate(v, w)), M(n, y(L = null != h && h.type === x && null == h.key ? h.props.children : h) ? L : [
            L
        ], t, u, i, o, r, e, f, c, s), a.base = t.__e, t.__u &= -161, a.__h.length && e.push(a), g && (a.__E = a.__ = null);
    } catch (n) {
        if (t.__v = null, c || null != r) {
            for(t.__u |= c ? 160 : 128; f && 8 === f.nodeType && f.nextSibling;)f = f.nextSibling;
            r[r.indexOf(f)] = null, t.__e = f;
        } else t.__e = u.__e, t.__k = u.__k;
        l.__e(n, t, u);
    }
    else null == r && t.__v === u.__v ? (t.__k = u.__k, t.__e = u.__e) : t.__e = O(u.__e, t, u, i, o, r, e, c, s);
    (h = l.diffed) && h(t);
}
function F(n, t, u) {
    t.__d = void 0;
    for(var i = 0; i < u.length; i++)j(u[i], u[++i], u[++i]);
    l.__c && l.__c(t, n), n.some(function(t) {
        try {
            n = t.__h, t.__h = [], n.some(function(n) {
                n.call(t);
            });
        } catch (n) {
            l.__e(n, t.__v);
        }
    });
}
function O(t, u, i, o, r, e, f, c, s) {
    var h, p, v, d, _, g, x, m = i.props, k = u.props, S = u.type;
    if ("svg" === S ? r = "http://www.w3.org/2000/svg" : "math" === S ? r = "http://www.w3.org/1998/Math/MathML" : r || (r = "http://www.w3.org/1999/xhtml"), null != e) {
        for(h = 0; h < e.length; h++)if ((_ = e[h]) && "setAttribute" in _ == !!S && (S ? _.localName === S : 3 === _.nodeType)) {
            t = _, e[h] = null;
            break;
        }
    }
    if (null == t) {
        if (null === S) return document.createTextNode(k);
        t = document.createElementNS(r, S, k.is && k), c && (l.__m && l.__m(u, e), c = !1), e = null;
    }
    if (null === S) m === k || c && t.data === k || (t.data = k);
    else {
        if (e = e && n.call(t.childNodes), m = i.props || a, !c && null != e) for(m = {}, h = 0; h < t.attributes.length; h++)m[(_ = t.attributes[h]).name] = _.value;
        for(h in m)if (_ = m[h], "children" == h) ;
        else if ("dangerouslySetInnerHTML" == h) v = _;
        else if (!(h in k)) {
            if ("value" == h && "defaultValue" in k || "checked" == h && "defaultChecked" in k) continue;
            L(t, h, null, _, r);
        }
        for(h in k)_ = k[h], "children" == h ? d = _ : "dangerouslySetInnerHTML" == h ? p = _ : "value" == h ? g = _ : "checked" == h ? x = _ : c && "function" != typeof _ || m[h] === _ || L(t, h, _, m[h], r);
        if (p) c || v && (p.__html === v.__html || p.__html === t.innerHTML) || (t.innerHTML = p.__html), u.__k = [];
        else if (v && (t.innerHTML = ""), M(t, y(d) ? d : [
            d
        ], u, i, o, "foreignObject" === S ? "http://www.w3.org/1999/xhtml" : r, e, f, e ? e[0] : i.__k && b(i, 0), c, s), null != e) for(h = e.length; h--;)w(e[h]);
        c || (h = "value", "progress" === S && null == g ? t.removeAttribute("value") : void 0 !== g && (g !== t[h] || "progress" === S && !g || "option" === S && g !== m[h]) && L(t, h, g, m[h], r), h = "checked", void 0 !== x && x !== t[h] && L(t, h, x, m[h], r));
    }
    return t;
}
function j(n, t, u) {
    try {
        if ("function" == typeof n) {
            var i = "function" == typeof n.__u;
            i && n.__u(), i && null == t || (n.__u = n(t));
        } else n.current = t;
    } catch (n) {
        l.__e(n, u);
    }
}
function z(n, t, u) {
    var i, o;
    if (l.unmount && l.unmount(n), (i = n.ref) && (i.current && i.current !== n.__e || j(i, null, t)), null != (i = n.__c)) {
        if (i.componentWillUnmount) try {
            i.componentWillUnmount();
        } catch (n) {
            l.__e(n, t);
        }
        i.base = i.__P = null;
    }
    if (i = n.__k) for(o = 0; o < i.length; o++)i[o] && z(i[o], t, u || "function" != typeof n.type);
    u || w(n.__e), n.__c = n.__ = n.__e = n.__d = void 0;
}
function N(n, l, t) {
    return this.constructor(n, t);
}
function V(t, u, i) {
    var o, r, e, f;
    l.__ && l.__(t, u), r = (o = "function" == typeof i) ? null : i && i.__k || u.__k, e = [], f = [], A(u, t = (!o && i || u).__k = _(x, null, [
        t
    ]), r || a, a, u.namespaceURI, !o && i ? [
        i
    ] : r ? null : u.firstChild ? n.call(u.childNodes) : null, e, !o && i ? i : r ? r.__e : u.firstChild, o, f), F(e, t, f);
}
n = p.slice, l = {
    __e: function(n, l, t, u) {
        for(var i, o, r; l = l.__;)if ((i = l.__c) && !i.__) try {
            if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(n)), r = i.__d), null != i.componentDidCatch && (i.componentDidCatch(n, u || {}), r = i.__d), r) return i.__E = i;
        } catch (l) {
            n = l;
        }
        throw n;
    }
}, t = 0, u = function(n) {
    return null != n && null == n.constructor;
}, m.prototype.setState = function(n, l) {
    var t;
    t = null != this.__s && this.__s !== this.state ? this.__s : this.__s = d({}, this.state), "function" == typeof n && (n = n(d({}, t), this.props)), n && d(t, n), null != n && this.__v && (l && this._sb.push(l), S(this));
}, m.prototype.forceUpdate = function(n) {
    this.__v && (this.__e = !0, n && this.__h.push(n), S(this));
}, m.prototype.render = x, i = [], r = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n, l) {
    return n.__v.__b - l.__v.__b;
}, C.__r = 0, f = 0, c = T(!1), s = T(!0), h = 0, exports.Component = m, exports.Fragment = x, exports.cloneElement = function(l, t, u) {
    var i, o, r, e, f = d({}, l.props);
    for(r in l.type && l.type.defaultProps && (e = l.type.defaultProps), t)"key" == r ? i = t[r] : "ref" == r ? o = t[r] : f[r] = void 0 === t[r] && void 0 !== e ? e[r] : t[r];
    return arguments.length > 2 && (f.children = arguments.length > 3 ? n.call(arguments, 2) : u), g(l.type, f, i || l.key, o || l.ref, null);
}, exports.createContext = function(n, l) {
    var t = {
        __c: l = "__cC" + h++,
        __: n,
        Consumer: function(n, l) {
            return n.children(l);
        },
        Provider: function(n) {
            var t, u;
            return this.getChildContext || (t = new Set, (u = {})[l] = this, this.getChildContext = function() {
                return u;
            }, this.componentWillUnmount = function() {
                t = null;
            }, this.shouldComponentUpdate = function(n) {
                this.props.value !== n.value && t.forEach(function(n) {
                    n.__e = !0, S(n);
                });
            }, this.sub = function(n) {
                t.add(n);
                var l = n.componentWillUnmount;
                n.componentWillUnmount = function() {
                    t && t.delete(n), l && l.call(n);
                };
            }), n.children;
        }
    };
    return t.Provider.__ = t.Consumer.contextType = t;
}, exports.createElement = _, exports.createRef = function() {
    return {
        current: null
    };
}, exports.h = _, exports.hydrate = function n(l, t) {
    V(l, t, n);
}, exports.isValidElement = u, exports.options = l, exports.render = V, exports.toChildArray = function n(l, t) {
    return t = t || [], null == l || "boolean" == typeof l || (y(l) ? l.some(function(l) {
        n(l, t);
    }) : t.push(l)), t;
}; //# sourceMappingURL=preact.js.map
}}),
"[project]/node_modules/.pnpm/preact-render-to-string@5.2.3_preact@10.24.3/node_modules/preact-render-to-string/dist/commonjs.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
!function(e, t) {
    ("TURBOPACK compile-time truthy", 1) ? t(exports, __turbopack_require__("[project]/node_modules/.pnpm/preact@10.24.3/node_modules/preact/dist/preact.js [app-rsc] (ecmascript)")) : ("TURBOPACK unreachable", undefined);
}(this, function(e, t) {
    var r = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i, n = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/, o = /[\s\n\\/='"\0<>]/, i = /^xlink:?./, s = /["&<]/;
    function a(e) {
        if (!1 === s.test(e += "")) return e;
        for(var t = 0, r = 0, n = "", o = ""; r < e.length; r++){
            switch(e.charCodeAt(r)){
                case 34:
                    o = "&quot;";
                    break;
                case 38:
                    o = "&amp;";
                    break;
                case 60:
                    o = "&lt;";
                    break;
                default:
                    continue;
            }
            r !== t && (n += e.slice(t, r)), n += o, t = r + 1;
        }
        return r !== t && (n += e.slice(t, r)), n;
    }
    var l = function(e, t) {
        return String(e).replace(/(\n+)/g, "$1" + (t || "\t"));
    }, f = function(e, t, r) {
        return String(e).length > (t || 40) || !r && -1 !== String(e).indexOf("\n") || -1 !== String(e).indexOf("<");
    }, c = {}, u = /([A-Z])/g;
    function p(e) {
        var t = "";
        for(var n in e){
            var o = e[n];
            null != o && "" !== o && (t && (t += " "), t += "-" == n[0] ? n : c[n] || (c[n] = n.replace(u, "-$1").toLowerCase()), t = "number" == typeof o && !1 === r.test(n) ? t + ": " + o + "px;" : t + ": " + o + ";");
        }
        return t || void 0;
    }
    function d(e, t) {
        return Array.isArray(t) ? t.reduce(d, e) : null != t && !1 !== t && e.push(t), e;
    }
    function _() {
        this.__d = !0;
    }
    function v(e, t) {
        return {
            __v: e,
            context: t,
            props: e.props,
            setState: _,
            forceUpdate: _,
            __d: !0,
            __h: []
        };
    }
    function g(e, t) {
        var r = e.contextType, n = r && t[r.__c];
        return null != r ? n ? n.props.value : r.__ : t;
    }
    var h = [];
    function y(e, r, s, c, u, _) {
        if (null == e || "boolean" == typeof e) return "";
        if ("object" != typeof e) return a(e);
        var m = s.pretty, b = m && "string" == typeof m ? m : "\t";
        if (Array.isArray(e)) {
            for(var x = "", S = 0; S < e.length; S++)m && S > 0 && (x += "\n"), x += y(e[S], r, s, c, u, _);
            return x;
        }
        var k, w = e.type, C = e.props, O = !1;
        if ("function" == typeof w) {
            if (O = !0, !s.shallow || !c && !1 !== s.renderRootComponent) {
                if (w === t.Fragment) {
                    var j = [];
                    return d(j, e.props.children), y(j, r, s, !1 !== s.shallowHighOrder, u, _);
                }
                var A, F = e.__c = v(e, r);
                t.options.__b && t.options.__b(e);
                var T = t.options.__r;
                if (w.prototype && "function" == typeof w.prototype.render) {
                    var H = g(w, r);
                    (F = e.__c = new w(C, H)).__v = e, F._dirty = F.__d = !0, F.props = C, null == F.state && (F.state = {}), null == F._nextState && null == F.__s && (F._nextState = F.__s = F.state), F.context = H, w.getDerivedStateFromProps ? F.state = Object.assign({}, F.state, w.getDerivedStateFromProps(F.props, F.state)) : F.componentWillMount && (F.componentWillMount(), F.state = F._nextState !== F.state ? F._nextState : F.__s !== F.state ? F.__s : F.state), T && T(e), A = F.render(F.props, F.state, F.context);
                } else for(var M = g(w, r), L = 0; F.__d && L++ < 25;)F.__d = !1, T && T(e), A = w.call(e.__c, C, M);
                return F.getChildContext && (r = Object.assign({}, r, F.getChildContext())), t.options.diffed && t.options.diffed(e), y(A, r, s, !1 !== s.shallowHighOrder, u, _);
            }
            w = (k = w).displayName || k !== Function && k.name || function(e) {
                var t = (Function.prototype.toString.call(e).match(/^\s*function\s+([^( ]+)/) || "")[1];
                if (!t) {
                    for(var r = -1, n = h.length; n--;)if (h[n] === e) {
                        r = n;
                        break;
                    }
                    r < 0 && (r = h.push(e) - 1), t = "UnnamedComponent" + r;
                }
                return t;
            }(k);
        }
        var E, $, D = "<" + w;
        if (C) {
            var N = Object.keys(C);
            s && !0 === s.sortAttributes && N.sort();
            for(var P = 0; P < N.length; P++){
                var R = N[P], W = C[R];
                if ("children" !== R) {
                    if (!o.test(R) && (s && s.allAttributes || "key" !== R && "ref" !== R && "__self" !== R && "__source" !== R)) {
                        if ("defaultValue" === R) R = "value";
                        else if ("defaultChecked" === R) R = "checked";
                        else if ("defaultSelected" === R) R = "selected";
                        else if ("className" === R) {
                            if (void 0 !== C.class) continue;
                            R = "class";
                        } else u && i.test(R) && (R = R.toLowerCase().replace(/^xlink:?/, "xlink:"));
                        if ("htmlFor" === R) {
                            if (C.for) continue;
                            R = "for";
                        }
                        "style" === R && W && "object" == typeof W && (W = p(W)), "a" === R[0] && "r" === R[1] && "boolean" == typeof W && (W = String(W));
                        var q = s.attributeHook && s.attributeHook(R, W, r, s, O);
                        if (q || "" === q) D += q;
                        else if ("dangerouslySetInnerHTML" === R) $ = W && W.__html;
                        else if ("textarea" === w && "value" === R) E = W;
                        else if ((W || 0 === W || "" === W) && "function" != typeof W) {
                            if (!(!0 !== W && "" !== W || (W = R, s && s.xml))) {
                                D = D + " " + R;
                                continue;
                            }
                            if ("value" === R) {
                                if ("select" === w) {
                                    _ = W;
                                    continue;
                                }
                                "option" === w && _ == W && void 0 === C.selected && (D += " selected");
                            }
                            D = D + " " + R + '="' + a(W) + '"';
                        }
                    }
                } else E = W;
            }
        }
        if (m) {
            var I = D.replace(/\n\s*/, " ");
            I === D || ~I.indexOf("\n") ? m && ~D.indexOf("\n") && (D += "\n") : D = I;
        }
        if (D += ">", o.test(w)) throw new Error(w + " is not a valid HTML tag name in " + D);
        var U, V = n.test(w) || s.voidElements && s.voidElements.test(w), z = [];
        if ($) m && f($) && ($ = "\n" + b + l($, b)), D += $;
        else if (null != E && d(U = [], E).length) {
            for(var Z = m && ~D.indexOf("\n"), B = !1, G = 0; G < U.length; G++){
                var J = U[G];
                if (null != J && !1 !== J) {
                    var K = y(J, r, s, !0, "svg" === w || "foreignObject" !== w && u, _);
                    if (m && !Z && f(K) && (Z = !0), K) if (m) {
                        var Q = K.length > 0 && "<" != K[0];
                        B && Q ? z[z.length - 1] += K : z.push(K), B = Q;
                    } else z.push(K);
                }
            }
            if (m && Z) for(var X = z.length; X--;)z[X] = "\n" + b + l(z[X], b);
        }
        if (z.length || $) D += z.join("");
        else if (s && s.xml) return D.substring(0, D.length - 1) + " />";
        return !V || U || $ ? (m && ~D.indexOf("\n") && (D += "\n"), D = D + "</" + w + ">") : D = D.replace(/>$/, " />"), D;
    }
    var m = {
        shallow: !0
    };
    S.render = S;
    var b = function(e, t) {
        return S(e, t, m);
    }, x = [];
    function S(e, r, n) {
        r = r || {};
        var o, i = t.options.__s;
        return t.options.__s = !0, o = n && (n.pretty || n.voidElements || n.sortAttributes || n.shallow || n.allAttributes || n.xml || n.attributeHook) ? y(e, r, n) : j(e, r, !1, void 0), t.options.__c && t.options.__c(e, x), t.options.__s = i, x.length = 0, o;
    }
    function k(e, t) {
        return "className" === e ? "class" : "htmlFor" === e ? "for" : "defaultValue" === e ? "value" : "defaultChecked" === e ? "checked" : "defaultSelected" === e ? "selected" : t && i.test(e) ? e.toLowerCase().replace(/^xlink:?/, "xlink:") : e;
    }
    function w(e, t) {
        return "style" === e && null != t && "object" == typeof t ? p(t) : "a" === e[0] && "r" === e[1] && "boolean" == typeof t ? String(t) : t;
    }
    var C = Array.isArray, O = Object.assign;
    function j(e, r, i, s) {
        if (null == e || !0 === e || !1 === e || "" === e) return "";
        if ("object" != typeof e) return a(e);
        if (C(e)) {
            for(var l = "", f = 0; f < e.length; f++)l += j(e[f], r, i, s);
            return l;
        }
        t.options.__b && t.options.__b(e);
        var c = e.type, u = e.props;
        if ("function" == typeof c) {
            if (c === t.Fragment) return j(e.props.children, r, i, s);
            var p;
            p = c.prototype && "function" == typeof c.prototype.render ? function(e, r) {
                var n = e.type, o = g(n, r), i = new n(e.props, o);
                e.__c = i, i.__v = e, i.__d = !0, i.props = e.props, null == i.state && (i.state = {}), null == i.__s && (i.__s = i.state), i.context = o, n.getDerivedStateFromProps ? i.state = O({}, i.state, n.getDerivedStateFromProps(i.props, i.state)) : i.componentWillMount && (i.componentWillMount(), i.state = i.__s !== i.state ? i.__s : i.state);
                var s = t.options.__r;
                return s && s(e), i.render(i.props, i.state, i.context);
            }(e, r) : function(e, r) {
                var n, o = v(e, r), i = g(e.type, r);
                e.__c = o;
                for(var s = t.options.__r, a = 0; o.__d && a++ < 25;)o.__d = !1, s && s(e), n = e.type.call(o, e.props, i);
                return n;
            }(e, r);
            var d = e.__c;
            d.getChildContext && (r = O({}, r, d.getChildContext()));
            var _ = j(p, r, i, s);
            return t.options.diffed && t.options.diffed(e), _;
        }
        var h, y, m = "<";
        if (m += c, u) for(var b in h = u.children, u){
            var x = u[b];
            if (!("key" === b || "ref" === b || "__self" === b || "__source" === b || "children" === b || "className" === b && "class" in u || "htmlFor" === b && "for" in u || o.test(b))) {
                if (x = w(b = k(b, i), x), "dangerouslySetInnerHTML" === b) y = x && x.__html;
                else if ("textarea" === c && "value" === b) h = x;
                else if ((x || 0 === x || "" === x) && "function" != typeof x) {
                    if (!0 === x || "" === x) {
                        x = b, m = m + " " + b;
                        continue;
                    }
                    if ("value" === b) {
                        if ("select" === c) {
                            s = x;
                            continue;
                        }
                        "option" !== c || s != x || "selected" in u || (m += " selected");
                    }
                    m = m + " " + b + '="' + a(x) + '"';
                }
            }
        }
        var S = m;
        if (m += ">", o.test(c)) throw new Error(c + " is not a valid HTML tag name in " + m);
        var A = "", F = !1;
        if (y) A += y, F = !0;
        else if ("string" == typeof h) A += a(h), F = !0;
        else if (C(h)) for(var T = 0; T < h.length; T++){
            var H = h[T];
            if (null != H && !1 !== H) {
                var M = j(H, r, "svg" === c || "foreignObject" !== c && i, s);
                M && (A += M, F = !0);
            }
        }
        else if (null != h && !1 !== h && !0 !== h) {
            var L = j(h, r, "svg" === c || "foreignObject" !== c && i, s);
            L && (A += L, F = !0);
        }
        if (t.options.diffed && t.options.diffed(e), F) m += A;
        else if (n.test(c)) return S + " />";
        return m + "</" + c + ">";
    }
    S.shallowRender = b, e.default = S, e.render = S, e.renderToStaticMarkup = S, e.renderToString = S, e.shallowRender = b;
}); //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/preact-render-to-string@5.2.3_preact@10.24.3/node_modules/preact-render-to-string/dist/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
module.exports = __turbopack_require__("[project]/node_modules/.pnpm/preact-render-to-string@5.2.3_preact@10.24.3/node_modules/preact-render-to-string/dist/commonjs.js [app-rsc] (ecmascript)").default;
}}),
"[project]/node_modules/.pnpm/cookie@0.5.0/node_modules/cookie/index.js [app-rsc] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: require } = __turbopack_context__;
{
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */ 'use strict';
/**
 * Module exports.
 * @public
 */ exports.parse = parse;
exports.serialize = serialize;
/**
 * Module variables.
 * @private
 */ var __toString = Object.prototype.toString;
/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */ var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */ function parse(str, options) {
    if (typeof str !== 'string') {
        throw new TypeError('argument str must be a string');
    }
    var obj = {};
    var opt = options || {};
    var dec = opt.decode || decode;
    var index = 0;
    while(index < str.length){
        var eqIdx = str.indexOf('=', index);
        // no more cookie pairs
        if (eqIdx === -1) {
            break;
        }
        var endIdx = str.indexOf(';', index);
        if (endIdx === -1) {
            endIdx = str.length;
        } else if (endIdx < eqIdx) {
            // backtrack on prior semicolon
            index = str.lastIndexOf(';', eqIdx - 1) + 1;
            continue;
        }
        var key = str.slice(index, eqIdx).trim();
        // only assign once
        if (undefined === obj[key]) {
            var val = str.slice(eqIdx + 1, endIdx).trim();
            // quoted values
            if (val.charCodeAt(0) === 0x22) {
                val = val.slice(1, -1);
            }
            obj[key] = tryDecode(val, dec);
        }
        index = endIdx + 1;
    }
    return obj;
}
/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */ function serialize(name, val, options) {
    var opt = options || {};
    var enc = opt.encode || encode;
    if (typeof enc !== 'function') {
        throw new TypeError('option encode is invalid');
    }
    if (!fieldContentRegExp.test(name)) {
        throw new TypeError('argument name is invalid');
    }
    var value = enc(val);
    if (value && !fieldContentRegExp.test(value)) {
        throw new TypeError('argument val is invalid');
    }
    var str = name + '=' + value;
    if (null != opt.maxAge) {
        var maxAge = opt.maxAge - 0;
        if (isNaN(maxAge) || !isFinite(maxAge)) {
            throw new TypeError('option maxAge is invalid');
        }
        str += '; Max-Age=' + Math.floor(maxAge);
    }
    if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
            throw new TypeError('option domain is invalid');
        }
        str += '; Domain=' + opt.domain;
    }
    if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
            throw new TypeError('option path is invalid');
        }
        str += '; Path=' + opt.path;
    }
    if (opt.expires) {
        var expires = opt.expires;
        if (!isDate(expires) || isNaN(expires.valueOf())) {
            throw new TypeError('option expires is invalid');
        }
        str += '; Expires=' + expires.toUTCString();
    }
    if (opt.httpOnly) {
        str += '; HttpOnly';
    }
    if (opt.secure) {
        str += '; Secure';
    }
    if (opt.priority) {
        var priority = typeof opt.priority === 'string' ? opt.priority.toLowerCase() : opt.priority;
        switch(priority){
            case 'low':
                str += '; Priority=Low';
                break;
            case 'medium':
                str += '; Priority=Medium';
                break;
            case 'high':
                str += '; Priority=High';
                break;
            default:
                throw new TypeError('option priority is invalid');
        }
    }
    if (opt.sameSite) {
        var sameSite = typeof opt.sameSite === 'string' ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch(sameSite){
            case true:
                str += '; SameSite=Strict';
                break;
            case 'lax':
                str += '; SameSite=Lax';
                break;
            case 'strict':
                str += '; SameSite=Strict';
                break;
            case 'none':
                str += '; SameSite=None';
                break;
            default:
                throw new TypeError('option sameSite is invalid');
        }
    }
    return str;
}
/**
 * URL-decode string value. Optimized to skip native call when no %.
 *
 * @param {string} str
 * @returns {string}
 */ function decode(str) {
    return str.indexOf('%') !== -1 ? decodeURIComponent(str) : str;
}
/**
 * URL-encode value.
 *
 * @param {string} str
 * @returns {string}
 */ function encode(val) {
    return encodeURIComponent(val);
}
/**
 * Determine if value is a Date.
 *
 * @param {*} val
 * @private
 */ function isDate(val) {
    return __toString.call(val) === '[object Date]' || val instanceof Date;
}
/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */ function tryDecode(str, decode) {
    try {
        return decode(str);
    } catch (e) {
        return str;
    }
}
}}),
"[project]/node_modules/.pnpm/@auth+prisma-adapter@2.7.4_@prisma+client@5.22.0_prisma@5.22.0_/node_modules/@auth/prisma-adapter/index.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "PrismaAdapter": (()=>PrismaAdapter)
});
function PrismaAdapter(prisma) {
    const p = prisma;
    return {
        // We need to let Prisma generate the ID because our default UUID is incompatible with MongoDB
        createUser: ({ id, ...data })=>p.user.create(stripUndefined(data)),
        getUser: (id)=>p.user.findUnique({
                where: {
                    id
                }
            }),
        getUserByEmail: (email)=>p.user.findUnique({
                where: {
                    email
                }
            }),
        async getUserByAccount (provider_providerAccountId) {
            const account = await p.account.findUnique({
                where: {
                    provider_providerAccountId
                },
                select: {
                    user: true
                }
            });
            return account?.user ?? null;
        },
        updateUser: ({ id, ...data })=>p.user.update({
                where: {
                    id
                },
                ...stripUndefined(data)
            }),
        deleteUser: (id)=>p.user.delete({
                where: {
                    id
                }
            }),
        linkAccount: (data)=>p.account.create({
                data
            }),
        unlinkAccount: (provider_providerAccountId)=>p.account.delete({
                where: {
                    provider_providerAccountId
                }
            }),
        async getSessionAndUser (sessionToken) {
            const userAndSession = await p.session.findUnique({
                where: {
                    sessionToken
                },
                include: {
                    user: true
                }
            });
            if (!userAndSession) return null;
            const { user, ...session } = userAndSession;
            return {
                user,
                session
            };
        },
        createSession: (data)=>p.session.create(stripUndefined(data)),
        updateSession: (data)=>p.session.update({
                where: {
                    sessionToken: data.sessionToken
                },
                ...stripUndefined(data)
            }),
        deleteSession: (sessionToken)=>p.session.delete({
                where: {
                    sessionToken
                }
            }),
        async createVerificationToken (data) {
            const verificationToken = await p.verificationToken.create(stripUndefined(data));
            // @ts-expect-errors // MongoDB needs an ID, but we don't
            if (verificationToken.id) delete verificationToken.id;
            return verificationToken;
        },
        async useVerificationToken (identifier_token) {
            try {
                const verificationToken = await p.verificationToken.delete({
                    where: {
                        identifier_token
                    }
                });
                // @ts-expect-errors // MongoDB needs an ID, but we don't
                if (verificationToken.id) delete verificationToken.id;
                return verificationToken;
            } catch (error) {
                // If token already used/deleted, just return null
                // https://www.prisma.io/docs/reference/api-reference/error-reference#p2025
                if (error.code === "P2025") return null;
                throw error;
            }
        },
        async getAccount (providerAccountId, provider) {
            return p.account.findFirst({
                where: {
                    providerAccountId,
                    provider
                }
            });
        },
        async createAuthenticator (data) {
            return p.authenticator.create(stripUndefined(data));
        },
        async getAuthenticator (credentialID) {
            return p.authenticator.findUnique({
                where: {
                    credentialID
                }
            });
        },
        async listAuthenticatorsByUserId (userId) {
            return p.authenticator.findMany({
                where: {
                    userId
                }
            });
        },
        async updateAuthenticatorCounter (credentialID, counter) {
            return p.authenticator.update({
                where: {
                    credentialID
                },
                data: {
                    counter
                }
            });
        }
    };
}
/** @see https://www.prisma.io/docs/orm/prisma-client/special-fields-and-types/null-and-undefined */ function stripUndefined(obj) {
    const data = {};
    for(const key in obj)if (obj[key] !== undefined) data[key] = obj[key];
    return {
        data
    };
}
}}),

};

//# sourceMappingURL=08b5e__pnpm_54b9e8._.js.map