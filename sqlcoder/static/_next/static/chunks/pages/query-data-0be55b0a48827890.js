(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [137], {
        81743: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    noSSR: function() {
                        return noSSR
                    },
                    default: function() {
                        return dynamic
                    }
                });
            let a = n(43709),
                o = (n(82684), a._(n(36586)));

            function convertModule(e) {
                return {
                    default: (null == e ? void 0 : e.default) || e
                }
            }

            function noSSR(e, t) {
                return delete t.webpack, delete t.modules, e(t)
            }

            function dynamic(e, t) {
                let n = o.default,
                    a = {
                        loading: e => {
                            let {
                                error: t,
                                isLoading: n,
                                pastDelay: a
                            } = e;
                            return null
                        }
                    };
                e instanceof Promise ? a.loader = () => e : "function" == typeof e ? a.loader = e : "object" == typeof e && (a = {
                    ...a,
                    ...e
                }), a = {
                    ...a,
                    ...t
                };
                let l = a.loader;
                return (a.loadableGenerated && (a = {
                    ...a,
                    ...a.loadableGenerated
                }, delete a.loadableGenerated), "boolean" != typeof a.ssr || a.ssr) ? n({
                    ...a,
                    loader: () => null != l ? l().then(convertModule) : Promise.resolve(convertModule(() => null))
                }) : (delete a.webpack, delete a.modules, noSSR(n, a))
            }("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        80805: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "LoadableContext", {
                enumerable: !0,
                get: function() {
                    return l
                }
            });
            let a = n(43709),
                o = a._(n(82684)),
                l = o.default.createContext(null)
        },
        36586: function(e, t, n) {
            "use strict";
            /**
            @copyright (c) 2017-present James Kyle <me@thejameskyle.com>
             MIT License
             Permission is hereby granted, free of charge, to any person obtaining
            a copy of this software and associated documentation files (the
            "Software"), to deal in the Software without restriction, including
            without limitation the rights to use, copy, modify, merge, publish,
            distribute, sublicense, and/or sell copies of the Software, and to
            permit persons to whom the Software is furnished to do so, subject to
            the following conditions:
             The above copyright notice and this permission notice shall be
            included in all copies or substantial portions of the Software.
             THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
            MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
            NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
            LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
            OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
            WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
            */
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return u
                }
            });
            let a = n(43709),
                o = a._(n(82684)),
                l = n(80805),
                r = [],
                i = [],
                s = !1;

            function load(e) {
                let t = e(),
                    n = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return n.promise = t.then(e => (n.loading = !1, n.loaded = e, e)).catch(e => {
                    throw n.loading = !1, n.error = e, e
                }), n
            }
            let LoadableSubscription = class LoadableSubscription {
                promise() {
                    return this._res.promise
                }
                retry() {
                    this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                        pastDelay: !1,
                        timedOut: !1
                    };
                    let {
                        _res: e,
                        _opts: t
                    } = this;
                    e.loading && ("number" == typeof t.delay && (0 === t.delay ? this._state.pastDelay = !0 : this._delay = setTimeout(() => {
                        this._update({
                            pastDelay: !0
                        })
                    }, t.delay)), "number" == typeof t.timeout && (this._timeout = setTimeout(() => {
                        this._update({
                            timedOut: !0
                        })
                    }, t.timeout))), this._res.promise.then(() => {
                        this._update({}), this._clearTimeouts()
                    }).catch(e => {
                        this._update({}), this._clearTimeouts()
                    }), this._update({})
                }
                _update(e) {
                    this._state = {
                        ...this._state,
                        error: this._res.error,
                        loaded: this._res.loaded,
                        loading: this._res.loading,
                        ...e
                    }, this._callbacks.forEach(e => e())
                }
                _clearTimeouts() {
                    clearTimeout(this._delay), clearTimeout(this._timeout)
                }
                getCurrentValue() {
                    return this._state
                }
                subscribe(e) {
                    return this._callbacks.add(e), () => {
                        this._callbacks.delete(e)
                    }
                }
                constructor(e, t) {
                    this._loadFn = e, this._opts = t, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
            };

            function Loadable(e) {
                return function(e, t) {
                    let n = Object.assign({
                            loader: null,
                            loading: null,
                            delay: 200,
                            timeout: null,
                            webpack: null,
                            modules: null
                        }, t),
                        a = null;

                    function init() {
                        if (!a) {
                            let t = new LoadableSubscription(e, n);
                            a = {
                                getCurrentValue: t.getCurrentValue.bind(t),
                                subscribe: t.subscribe.bind(t),
                                retry: t.retry.bind(t),
                                promise: t.promise.bind(t)
                            }
                        }
                        return a.promise()
                    }
                    if (!s) {
                        let e = n.webpack ? n.webpack() : n.modules;
                        e && i.push(t => {
                            for (let n of e)
                                if (t.includes(n)) return init()
                        })
                    }

                    function LoadableComponent(e, t) {
                        ! function() {
                            init();
                            let e = o.default.useContext(l.LoadableContext);
                            e && Array.isArray(n.modules) && n.modules.forEach(t => {
                                e(t)
                            })
                        }();
                        let r = o.default.useSyncExternalStore(a.subscribe, a.getCurrentValue, a.getCurrentValue);
                        return o.default.useImperativeHandle(t, () => ({
                            retry: a.retry
                        }), []), o.default.useMemo(() => {
                            var t;
                            return r.loading || r.error ? o.default.createElement(n.loading, {
                                isLoading: r.loading,
                                pastDelay: r.pastDelay,
                                timedOut: r.timedOut,
                                error: r.error,
                                retry: a.retry
                            }) : r.loaded ? o.default.createElement((t = r.loaded) && t.default ? t.default : t, e) : null
                        }, [e, r])
                    }
                    return LoadableComponent.preload = () => init(), LoadableComponent.displayName = "LoadableComponent", o.default.forwardRef(LoadableComponent)
                }(load, e)
            }

            function flushInitializers(e, t) {
                let n = [];
                for (; e.length;) {
                    let a = e.pop();
                    n.push(a(t))
                }
                return Promise.all(n).then(() => {
                    if (e.length) return flushInitializers(e, t)
                })
            }
            Loadable.preloadAll = () => new Promise((e, t) => {
                flushInitializers(r).then(e, t)
            }), Loadable.preloadReady = e => (void 0 === e && (e = []), new Promise(t => {
                let res = () => (s = !0, t());
                flushInitializers(i, e).then(res, res)
            })), window.__NEXT_PRELOADREADY = Loadable.preloadReady;
            let u = Loadable
        },
        51774: function(e, t, n) {
            e.exports = n(81743)
        },
        20328: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/query-data", function() {
                return n(81800)
            }])
        },
        31143: function(e, t, n) {
            "use strict";
            var a = n(28598),
                o = n(1887),
                l = n.n(o);
            t.Z = () => (0, a.jsxs)(l(), {
                children: [(0, a.jsx)("title", {
                    children: "Defog.ai - AI Assistant for Data Analysis"
                }), (0, a.jsx)("meta", {
                    name: "description",
                    content: "Train your AI data assistant on your own device"
                }), (0, a.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                }), (0, a.jsx)("link", {
                    rel: "icon",
                    href: "/favicon.ico"
                })]
            })
        },
        62429: function(e, t, n) {
            "use strict";
            var a = n(28598);
            n(82684);
            var o = n(79869),
                l = n(12691),
                r = n.n(l);
            t.Z = e => {
                let {
                    id: t,
                    children: n
                } = e, {
                    Content: l,
                    Sider: i
                } = o.Layout, s = [{
                    key: "manage-database",
                    title: "Manage Database",
                    icon: (0, a.jsx)(r(), {
                        href: "/extract-metadata",
                        children: "\uD83D\uDCBE 提取数据"
                    })
                }, {
                    key: "query-data",
                    title: "Query Data",
                    icon: (0, a.jsx)(r(), {
                        href: "/query-data",
                        children: "\uD83D\uDD0D 生成查询"
                    })
                }];
                return (0, a.jsx)(o.Layout, {
                    style: {
                        height: "100vh"
                    },
                    children: (0, a.jsxs)(l, {
                        children: [(0, a.jsx)(i, {
                            style: {
                                height: "100vh",
                                position: "fixed"
                            },
                            children: (0, a.jsx)(o.v2, {
                                style: {
                                    width: 200,
                                    paddingTop: "2em",
                                    paddingBottom: "2em"
                                },
                                mode: "inline",
                                selectedKeys: [t],
                                items: s
                            })
                        }), (0, a.jsx)("div", {
                            style: {
                                paddingLeft: 240,
                                paddingTop: 30,
                                backgroundColor: "#f5f5f5"
                            },
                            children: n
                        })]
                    })
                })
            }
        },
        81800: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(28598),
                o = n(82684),
                l = n(31143),
                r = n(62429),
                i = n(51774),
                s = n.n(i),
                u = n(26598);
            let d = s()(() => Promise.all([n.e(235), n.e(13), n.e(296), n.e(354), n.e(283)]).then(n.t.bind(n, 14979, 19)).then(e => e.AskDefogChat), {
                loadableGenerated: {
                    webpack: () => [14979]
                },
                ssr: !1
            });
            t.default = () => {
                let [e, t] = (0, o.useState)([]), [n, i] = (0, o.useState)(""), [s, c] = u.default.useNotification();
                return (0, o.useEffect)(() => {
                    fetch("http://localhost:1235/integration/get_tables_db_creds", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    }).then(e => e.json()).then(e => {
                        e.selected_tables && t(e.selected_tables), fetch("http://localhost:1235/get_device_type", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(e => e.json()).then(e => {
                            let t = e.device_type;
                            console.log(t), s.open({
                                message: "Note about performance",
                                description: "gpu" !== t ? "You are currently running SQLCoder on an Apple Silicon or CPU device. This will yield suboptimal results. For best results, use a GPU device or Defog.ai's Cloud Service." : "You are currently running SQLCoder on a GPU device. You should get decent performance as long as you define your metadata well and instruct the model. If you need more performance, you can use a model that is fine-tuned to your schema by contacting Defog.ai.",
                                duration: 5,
                                key: "Device Type"
                            })
                        })
                    })
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.Z, {}), c, (0, a.jsxs)(r.Z, {
                        id: "query-data",
                        children: [(0, a.jsx)("h1", {
                            children: "Query your database"
                        }), (0, a.jsxs)("p", {
                            children: ["Ask Defog questions about your data. You have selected the following tables: ", (0, a.jsx)("code", {
                                children: e.join(", ")
                            })]
                        }), (0, a.jsx)(d, {
                            maxWidth: "100%",
                            height: "80vh",
                            apiEndpoint: "http://localhost:1235/query",
                            buttonText: "Ask Defog",
                            darkMode: !1,
                            debugMode: !0
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [238, 774, 888, 179], function() {
            return e(e.s = 20328)
        }), _N_E = e.O()
    }
]);