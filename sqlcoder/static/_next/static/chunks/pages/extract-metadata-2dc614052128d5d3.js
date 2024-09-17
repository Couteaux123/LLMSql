// 
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [99], {
        97362: function(e, t, a) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/extract-metadata", function() {
                return a(16334)
            }])
        },
        31143: function(e, t, a) {
            "use strict";
            var s = a(28598),
                n = a(1887),
                l = a.n(n);
            t.Z = () => (0, s.jsxs)(l(), {
                children: [(0, s.jsx)("title", {
                    children: "Defog.ai - AI Assistant for Data Analysis"
                }), (0, s.jsx)("meta", {
                    name: "description",
                    content: "Train your AI data assistant on your own device"
                }), (0, s.jsx)("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                }), (0, s.jsx)("link", {
                    rel: "icon",
                    href: "/favicon.ico"
                })]
            })
        },
        62429: function(e, t, a) {
            "use strict";
            var s = a(28598);
            a(82684);
            var n = a(79869),
                l = a(12691),
                d = a.n(l);
            t.Z = e => {
                let {
                    id: t,
                    children: a
                } = e, {
                    Content: l,
                    Sider: i
                } = n.Layout, r = [{
                    key: "manage-database",
                    title: "Manage Database",
                    icon: (0, s.jsx)(d(), {
                        href: "/extract-metadata",
                        children: "\uD83D\uDCBE 提取数据"
                    })
                }, {
                    key: "query-data",
                    title: "Query Data",
                    icon: (0, s.jsx)(d(), {
                        href: "/query-data",
                        children: "\uD83D\uDD0D 生成查询"
                    })
                }];
                return (0, s.jsx)(n.Layout, {
                    style: {
                        height: "100vh"
                    },
                    children: (0, s.jsxs)(l, {
                        children: [(0, s.jsx)(i, {
                            style: {
                                height: "100vh",
                                position: "fixed"
                            },
                            children: (0, s.jsx)(n.v2, {
                                style: {
                                    width: 200,
                                    paddingTop: "2em",
                                    paddingBottom: "2em"
                                },
                                mode: "inline",
                                selectedKeys: [t],
                                items: r
                            })
                        }), (0, s.jsx)("div", {
                            style: {
                                paddingLeft: 240,
                                paddingTop: 30,
                                backgroundColor: "#f5f5f5"
                            },
                            children: a
                        })]
                    })
                })
            }
        },
        16334: function(e, t, a) {
            "use strict";
            a.r(t);
            var s = a(28598),
                n = a(82684),
                l = a(31143),
                d = a(62429),
                i = a(79869);
            t.default = () => {
                let {
                    Option: e
                } = i.Select, [t, a] = (0, n.useState)("postgres"), [r, o] = (0, n.useState)({}), [c, h] = (0, n.useState)([]), [p, m] = (0, n.useState)(!1), [u, x] = (0, n.useState)([]), [y, b] = (0, n.useState)([]), [g] = i.l0.useForm(), getTables = async () => {
                    let e = await fetch("http://localhost:1235/integration/get_tables_db_creds", {
                            method: "POST"
                        }),
                        t = await e.json();
                    t.error || (console.log(t), a(t.db_type), o(t.db_creds), h(t.tables), b(t.selected_tables), g.setFieldsValue({
                        db_type: t.db_type,
                        ...t.db_creds,
                        db_tables: t.selected_tables
                    }))
                }, getMetadata = async () => {
                    let e = await fetch("http://localhost:1235/integration/get_metadata", {
                            method: "POST"
                        }),
                        t = await e.json();
                    t.error || x((null == t ? void 0 : t.metadata) || [])
                };
                (0, n.useEffect)(() => {
                    m(!0), getTables().then(() => {
                        getMetadata().then(() => {
                            m(!1)
                        })
                    })
                }, []);
                let j = {
                    postgres: ["host", "port", "user", "password", "database"],
                    redshift: ["host", "port", "user", "password", "database"],
                    snowflake: ["account", "warehouse", "user", "password"],
                    databricks: ["server_hostname", "access_token", "http_path", "schema"],
                    mysql: ["host","database","user","password"]
                };
                return (0, s.jsxs)(s.Fragment, {
                    children: [(0, s.jsx)(l.Z, {}), (0, s.jsxs)(d.Z, {
                        id: "manage-database",
                        userType: "admin",
                        children: [(0, s.jsx)("h1", {
                            style: {
                                paddingBottom: "1em"
                            },
                            children: "提取元数据"
                        }), (0, s.jsxs)(i.X2, {
                            type: "flex",
                            height: "100vh",
                            children: [(0, s.jsx)(i.JX, {
                                md: {
                                    span: 8
                                },
                                xs: {
                                    span: 24
                                },
                                children: (0, s.jsxs)("div", {
                                    children: [(0, s.jsxs)(i.l0, {
                                        name: "db_creds",
                                        form: g,
                                        labelCol: {
                                            span: 6
                                        },
                                        wrapperCol: {
                                            span: 18
                                        },
                                        style: {
                                            maxWidth: 400
                                        },
                                        disabled: p,
                                        onFinish: async e => {
                                            m(!0), e = {
                                                db_creds: e,
                                                db_type: e.db_type || t
                                            };
                                            let a = await fetch("http://localhost:1235/integration/generate_tables", {
                                                    method: "POST",
                                                    body: JSON.stringify(e)
                                                }),
                                                s = await a.json();
                                            h(s.tables), m(!1)
                                        },
                                        children: [(0, s.jsx)(i.l0.Item, {
                                            name: "db_type",
                                            label: "DB Type",
                                            children: (0, s.jsx)(i.Select, {
                                                style: {
                                                    width: "100%"
                                                },
                                                onChange: e => {
                                                    a(e)
                                                },
                                                options: ["databricks", "postgres", "redshift", "snowflake","mysql"].map(e => ({
                                                    value: e,
                                                    key: e,
                                                    label: e
                                                }))
                                            })
                                        }), void 0 !== j[t] && j[t].map(e => (0, s.jsx)(i.l0.Item, {
                                            label: e,
                                            name: e,
                                            children: (0, s.jsx)(i.II, {
                                                style: {
                                                    width: "100%"
                                                }
                                            })
                                        }, t + "_" + e)), (0, s.jsx)(i.l0.Item, {
                                            wrapperCol: {
                                                span: 24
                                            },
                                            children: (0, s.jsx)(i.zx, {
                                                type: "primary",
                                                style: {
                                                    width: "100%"
                                                },
                                                htmlType: "submit",
                                                children: "Get Tables"
                                            })
                                        })]
                                    }), c.length > 0 && (0, s.jsxs)(i.l0, {
                                        name: "db_tables",
                                        labelCol: {
                                            span: 8
                                        },
                                        wrapperCol: {
                                            span: 16
                                        },
                                        style: {
                                            maxWidth: 400
                                        },
                                        disabled: p,
                                        onFinish: async e => {
                                            m(!0);
                                            let t = await fetch("http://localhost:1235/integration/generate_metadata", {
                                                    method: "POST",
                                                    body: JSON.stringify({
                                                        tables: e.tables
                                                    })
                                                }),
                                                a = await t.json();
                                            m(!1), x((null == a ? void 0 : a.metadata) || [])
                                        },
                                        children: [(0, s.jsx)(i.l0.Item, {
                                            name: "tables",
                                            label: "Tables to index",
                                            value: y,
                                            children: (0, s.jsx)(i.Select, {
                                                mode: "multiple",
                                                style: {
                                                    width: "100%",
                                                    maxWidth: 400
                                                },
                                                placeholder: "Select tables to index",
                                                onChange: e => {
                                                    console.log(e), b(e)
                                                },
                                                children: c.map(t => (0, s.jsx)(e, {
                                                    value: t,
                                                    children: t
                                                }, t))
                                            })
                                        }), (0, s.jsx)(i.l0.Item, {
                                            wrapperCol: {
                                                span: 24
                                            },
                                            children: (0, s.jsx)(i.zx, {
                                                type: "primary",
                                                style: {
                                                    width: "100%",
                                                    maxWidth: 535
                                                },
                                                htmlType: "submit",
                                                children: "Extract Metadata"
                                            })
                                        })]
                                    })]
                                })
                            }), (0, s.jsxs)(i.JX, {
                                md: {
                                    span: 16
                                },
                                xs: {
                                    span: 24
                                },
                                style: {
                                    paddingRight: "2em",
                                    height: 600,
                                    overflowY: "scroll"
                                },
                                children: [u.length > 0 && (0, s.jsx)(i.zx, {
                                    type: "primary",
                                    style: {
                                        width: "100%",
                                        maxWidth: 535
                                    },
                                    disabled: p,
                                    loading: p,
                                    onClick: async () => {
                                        m(!0);
                                        let e = await fetch("http://localhost:1235/integration/update_metadata", {
                                                method: "POST",
                                                body: JSON.stringify({
                                                    metadata: u
                                                })
                                            }),
                                            t = await e.json();
                                        console.log(t), m(!1), void 0 !== t.suggested_joins && null !== t.suggested_joins && "" !== t.suggested_joins && (document.getElementById("allowed-joins").value = t.suggested_joins), i.yw.success("Metadata updated successfully!")
                                    },
                                    children: "Update metadata on server"
                                }), u.length > 0 ? (0, s.jsxs)(i.X2, {
                                    style: {
                                        marginTop: "1em",
                                        position: "sticky",
                                        top: 0,
                                        paddingBottom: "1em",
                                        paddingTop: "1em",
                                        backgroundColor: "white",
                                        zIndex: 100
                                    },
                                    children: [(0, s.jsx)(i.JX, {
                                        xs: {
                                            span: 24
                                        },
                                        md: {
                                            span: 4
                                        },
                                        style: {
                                            overflowWrap: "break-word"
                                        },
                                        children: (0, s.jsx)("b", {
                                            children: "Table Name"
                                        })
                                    }), (0, s.jsx)(i.JX, {
                                        xs: {
                                            span: 24
                                        },
                                        md: {
                                            span: 4
                                        },
                                        style: {
                                            overflowWrap: "break-word"
                                        },
                                        children: (0, s.jsx)("b", {
                                            children: "Column Name"
                                        })
                                    }), (0, s.jsx)(i.JX, {
                                        xs: {
                                            span: 24
                                        },
                                        md: {
                                            span: 4
                                        },
                                        style: {
                                            overflowWrap: "break-word"
                                        },
                                        children: (0, s.jsx)("b", {
                                            children: "Data Type"
                                        })
                                    }), (0, s.jsx)(i.JX, {
                                        xs: {
                                            span: 24
                                        },
                                        md: {
                                            span: 12
                                        },
                                        children: (0, s.jsx)("b", {
                                            children: "Description (Optional)"
                                        })
                                    })]
                                }) : null, u.length > 0 && u.map((e, t) => (0, s.jsxs)(i.X2, {
                                    style: {
                                        marginTop: "1em"
                                    },
                                    children: [(0, s.jsx)(i.JX, {
                                        xs: {
                                            span: 24
                                        },
                                        md: {
                                            span: 4
                                        },
                                        style: {
                                            overflowWrap: "break-word"
                                        },
                                        children: e.table_name
                                    }), (0, s.jsx)(i.JX, {
                                        xs: {
                                            span: 24
                                        },
                                        md: {
                                            span: 4
                                        },
                                        style: {
                                            overflowWrap: "break-word"
                                        },
                                        children: e.column_name
                                    }), (0, s.jsx)(i.JX, {
                                        xs: {
                                            span: 24
                                        },
                                        md: {
                                            span: 4
                                        },
                                        style: {
                                            overflowWrap: "break-word"
                                        },
                                        children: e.data_type
                                    }), (0, s.jsx)(i.JX, {
                                        xs: {
                                            span: 24
                                        },
                                        md: {
                                            span: 12
                                        },
                                        children: (0, s.jsx)(i.II.TextArea, {
                                            placeholder: "Description of what this column does",
                                            defaultValue: e.column_description || "",
                                            autoSize: {
                                                minRows: 2
                                            },
                                            onChange: e => {
                                                let a = [...u];
                                                a[t].column_description = e.target.value, x(a)
                                            }
                                        }, t)
                                    })]
                                }, t))]
                            })]
                        })]
                    })]
                })
            }
        }
    },
    function(e) {
        e.O(0, [238, 774, 888, 179], function() {
            return e(e.s = 97362)
        }), _N_E = e.O()
    }
]);