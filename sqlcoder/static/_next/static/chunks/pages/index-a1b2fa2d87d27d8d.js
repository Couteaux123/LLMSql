(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [405], {
        34376: function(e, t, n) {
            e.exports = n(84142)
        },
        75557: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return n(48591)
            }])
        },
        31143: function(e, t, n) {
            "use strict";
            var a = n(28598),
                i = n(1887),
                s = n.n(i);
            t.Z = () => (0, a.jsxs)(s(), {
                children: [(0, a.jsx)("title", {
                    children: "AI Assistant for SQL Data Analysis"
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
            var i = n(79869),
                s = n(12691),
                r = n.n(s);
            t.Z = e => {
                let {
                    id: t,
                    children: n
                } = e, {
                    Content: s,
                    Sider: o
                } = i.Layout, d = [{
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
                return (0, a.jsx)(i.Layout, {
                    style: {
                        height: "100vh"
                    },
                    children: (0, a.jsxs)(s, {
                        children: [(0, a.jsx)(o, {
                            style: {
                                height: "100vh",
                                position: "fixed"
                            },
                            children: (0, a.jsx)(i.v2, {
                                style: {
                                    width: 200,
                                    paddingTop: "2em",
                                    paddingBottom: "2em"
                                },
                                mode: "inline",
                                selectedKeys: [t],
                                items: d
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
        48591: function(e, t, n) {
            "use strict";
            n.r(t);
            var a = n(28598),
                i = n(82684),
                s = n(34376),
                r = n(31143),
                o = n(62429),
                d = n(79869);
            t.default = () => {
                let e = (0, s.useRouter)();
                return (0, i.useEffect)(() => {
                    setTimeout(() => {
                        fetch("http://localhost:1235/integration/get_tables_db_creds", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then(e => e.json()).then(t => {
                            t.tables && t.db_creds ? e.push("/query-data") : e.push("/extract-metadata")
                        })
                    }, 2e3)
                }, []), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.Z, {}), (0, a.jsxs)(o.Z, {
                        children: [(0, a.jsx)("h1", {
                            style: {
                                paddingBottom: "1em"
                            },
                            children: "Welcome to Defog!"
                        }), (0, a.jsxs)("h3", {
                            children: ["Please wait while we redirect you to the right page. Please refresh this page if nothing happens. ", (0, a.jsx)(d.yC, {})]
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [238, 774, 888, 179], function() {
            return e(e.s = 75557)
        }), _N_E = e.O()
    }
]);