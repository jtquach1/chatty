(window.webpackJsonp = window.webpackJsonp || []).push([
    [0], {
        34: function(e, t, a) {
            e.exports = a(50)
        },
        49: function(e, t, a) {},
        50: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                r = a.n(n),
                c = a(31),
                s = a.n(c),
                i = a(9),
                l = a(10),
                o = a(12),
                u = a(11),
                m = a(13),
                h = a(24),
                p = a(16),
                b = a(4),
                d = a(20),
                g = a.n(d);
            a(39), a(41);
            g.a.initializeApp({
                apiKey: "AIzaSyBxkEuBeaA8YxgBzswaS3BqGmCdzYCGyXM",
                authDomain: "chatty-f1a62.firebaseapp.com",
                databaseURL: "https://chatty-f1a62.firebaseio.com"
            });
            var v = g.a.auth,
                f = g.a.database();
            var E = function() {
                return r.a.createElement("header", null, r.a.createElement("nav", {
                    className: "navbar navbar-expand-sm fixed-top navbar-light bg-light"
                }, r.a.createElement(b.b, {
                    className: "navbar-brand",
                    to: "/"
                }, "Chatty"), r.a.createElement("button", {
                    className: "navbar-toggler",
                    type: "button",
                    "data-toggle": "collapse",
                    "data-target": "#navbarNavAltMarkup",
                    "aria-controls": "navbarNavAltMarkup",
                    "aria-expanded": "false",
                    "aria-label": "Toggle navigation"
                }, r.a.createElement("span", {
                    className: "navbar-toggler-icon"
                })), r.a.createElement("div", {
                    className: "collapse navbar-collapse justify-content-end",
                    id: "navbarNavAltMarkup"
                }, v().currentUser ? r.a.createElement("div", {
                    className: "navbar-nav"
                }, r.a.createElement(b.b, {
                    className: "nav-item nav-link mr-3",
                    to: "/chat"
                }, "Profile"), r.a.createElement("button", {
                    className: "btn btn-primary mr-3",
                    onClick: function() {
                        return v().signOut()
                    }
                }, "Logout")) : r.a.createElement("div", {
                    className: "navbar-nav"
                }, r.a.createElement(b.b, {
                    className: "nav-item nav-link mr-3",
                    to: "/login"
                }, "Sign In"), r.a.createElement(b.b, {
                    className: "nav-item nav-link mr-3",
                    to: "/signup"
                }, "Sign Up")))))
            };
            var y = function() {
                    return r.a.createElement("footer", {
                        className: "pt-5"
                    }, r.a.createElement("div", {
                        className: "container text-center"
                    }, r.a.createElement("p", null, "\xa9 Chatty 2020.")))
                },
                N = function(e) {
                    function t() {
                        return Object(i.a)(this, t), Object(o.a)(this, Object(u.a)(t).apply(this, arguments))
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "render",
                        value: function() {
                            return r.a.createElement("div", {
                                className: "home"
                            }, r.a.createElement(E, null), r.a.createElement("section", null, r.a.createElement("div", {
                                className: "jumbotron jumbotron-fluid py-5"
                            }, r.a.createElement("div", {
                                className: "container text-center py-5"
                            }, r.a.createElement("h1", {
                                className: "display-4"
                            }, "Welcome to Chatty"), r.a.createElement("p", {
                                className: "lead"
                            }, "A great place to share your thoughts with friends"), r.a.createElement("div", {
                                className: "mt-4"
                            }, r.a.createElement(b.b, {
                                className: "btn btn-primary px-5 mr-3",
                                to: "/signup"
                            }, "Create New Account"), r.a.createElement(b.b, {
                                className: "btn px-5",
                                to: "/login"
                            }, "Login to Your Account"))))), r.a.createElement(y, null))
                        }
                    }]), t
                }(n.Component),
                S = a(3),
                w = a.n(S),
                j = a(8),
                O = a(5),
                k = function(e) {
                    function t(e) {
                        var a;
                        return Object(i.a)(this, t), (a = Object(o.a)(this, Object(u.a)(t).call(this, e))).state = {
                            user: v().currentUser,
                            chats: [],
                            content: "",
                            readError: null,
                            writeError: null,
                            loadingChats: !1
                        }, a.handleChange = a.handleChange.bind(Object(O.a)(a)), a.handleSubmit = a.handleSubmit.bind(Object(O.a)(a)), a.myRef = r.a.createRef(), a
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = Object(j.a)(w.a.mark(function e() {
                                var t, a = this;
                                return w.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            this.setState({
                                                readError: null,
                                                loadingChats: !0
                                            }), t = this.myRef.current;
                                            try {
                                                f.ref("chats").on("value", function(e) {
                                                    var n = [];
                                                    e.forEach(function(e) {
                                                        n.push(e.val())
                                                    }), n.sort(function(e, t) {
                                                        return e.timestamp - t.timestamp
                                                    }), a.setState({
                                                        chats: n
                                                    }), t.scrollBy(0, t.scrollHeight), a.setState({
                                                        loadingChats: !1
                                                    })
                                                })
                                            } catch (n) {
                                                this.setState({
                                                    readError: n.message,
                                                    loadingChats: !1
                                                })
                                            }
                                            case 3:
                                            case "end":
                                                return e.stop()
                                    }
                                }, e, this)
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "handleChange",
                        value: function(e) {
                            this.setState({
                                content: e.target.value
                            })
                        }
                    }, {
                        key: "handleSubmit",
                        value: function() {
                            var e = Object(j.a)(w.a.mark(function e(t) {
                                var a;
                                return w.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.preventDefault(), this.setState({
                                                writeError: null
                                            }), a = this.myRef.current, e.prev = 3, e.next = 6, f.ref("chats").push({
                                                content: this.state.content,
                                                timestamp: Date.now(),
                                                uid: this.state.user.uid
                                            });
                                        case 6:
                                            this.setState({
                                                content: ""
                                            }), a.scrollBy(0, a.scrollHeight), e.next = 13;
                                            break;
                                        case 10:
                                            e.prev = 10, e.t0 = e.catch(3), this.setState({
                                                writeError: e.t0.message
                                            });
                                        case 13:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [3, 10]
                                ])
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "formatTime",
                        value: function(e) {
                            var t = new Date(e);
                            return "".concat(t.getDate(), "/").concat(t.getMonth() + 1, "/").concat(t.getFullYear(), " ").concat(t.getHours(), ":").concat(t.getMinutes())
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this;
                            return r.a.createElement("div", null, r.a.createElement(E, null), r.a.createElement("div", {
                                className: "chat-area",
                                ref: this.myRef
                            }, this.state.loadingChats ? r.a.createElement("div", {
                                className: "spinner-border text-success",
                                role: "status"
                            }, r.a.createElement("span", {
                                className: "sr-only"
                            }, "Loading...")) : "", this.state.chats.map(function(t) {
                                return r.a.createElement("p", {
                                    key: t.timestamp,
                                    className: "chat-bubble " + (e.state.user.uid === t.uid ? "current-user" : "")
                                }, t.content, r.a.createElement("br", null), r.a.createElement("span", {
                                    className: "chat-time float-right"
                                }, e.formatTime(t.timestamp)))
                            })), r.a.createElement("form", {
                                onSubmit: this.handleSubmit,
                                className: "mx-3"
                            }, r.a.createElement("textarea", {
                                className: "form-control",
                                name: "content",
                                onChange: this.handleChange,
                                value: this.state.content
                            }), this.state.error ? r.a.createElement("p", {
                                className: "text-danger"
                            }, this.state.error) : null, r.a.createElement("button", {
                                type: "submit",
                                className: "btn btn-submit px-5 mt-4"
                            }, "Send")), r.a.createElement("div", {
                                className: "py-5 mx-3"
                            }, "Login in as: ", r.a.createElement("strong", {
                                className: "text-info"
                            }, this.state.user.email)))
                        }
                    }]), t
                }(n.Component),
                x = a(19);

            function C() {
                var e = new v.GoogleAuthProvider;
                return v().signInWithPopup(e)
            }

            function I() {
                var e = new v.GithubAuthProvider;
                return v().signInWithPopup(e)
            }
            var A = function(e) {
                    function t() {
                        var e;
                        return Object(i.a)(this, t), (e = Object(o.a)(this, Object(u.a)(t).call(this))).state = {
                            error: null,
                            email: "",
                            password: ""
                        }, e.handleChange = e.handleChange.bind(Object(O.a)(e)), e.handleSubmit = e.handleSubmit.bind(Object(O.a)(e)), e.googleSignIn = e.googleSignIn.bind(Object(O.a)(e)), e.githubSignIn = e.githubSignIn.bind(Object(O.a)(e)), e
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "handleChange",
                        value: function(e) {
                            this.setState(Object(x.a)({}, e.target.name, e.target.value))
                        }
                    }, {
                        key: "handleSubmit",
                        value: function() {
                            var e = Object(j.a)(w.a.mark(function e(t) {
                                return w.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.preventDefault(), this.setState({
                                                error: ""
                                            }), e.prev = 2, e.next = 5, a = this.state.email, n = this.state.password, v().createUserWithEmailAndPassword(a, n);
                                        case 5:
                                            e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(2), this.setState({
                                                error: e.t0.message
                                            });
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                    var a, n
                                }, e, this, [
                                    [2, 7]
                                ])
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "googleSignIn",
                        value: function() {
                            var e = Object(j.a)(w.a.mark(function e() {
                                return w.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, C();
                                        case 3:
                                            e.next = 8;
                                            break;
                                        case 5:
                                            e.prev = 5, e.t0 = e.catch(0), this.setState({
                                                error: e.t0.message
                                            });
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [0, 5]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "githubSignIn",
                        value: function() {
                            var e = Object(j.a)(w.a.mark(function e() {
                                return w.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, I();
                                        case 3:
                                            e.next = 9;
                                            break;
                                        case 5:
                                            e.prev = 5, e.t0 = e.catch(0), console.log(e.t0), this.setState({
                                                error: e.t0.message
                                            });
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [0, 5]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            return r.a.createElement("div", {
                                className: "container"
                            }, r.a.createElement("form", {
                                className: "mt-5 py-5 px-5",
                                onSubmit: this.handleSubmit
                            }, r.a.createElement("h1", null, "Sign Up to", r.a.createElement(b.b, {
                                className: "title ml-2",
                                to: "/"
                            }, "Chatty")), r.a.createElement("p", {
                                className: "lead"
                            }, "Fill in the form below to create an account."), r.a.createElement("div", {
                                className: "form-group"
                            }, r.a.createElement("input", {
                                className: "form-control",
                                placeholder: "Email",
                                name: "email",
                                type: "email",
                                onChange: this.handleChange,
                                value: this.state.email
                            })), r.a.createElement("div", {
                                className: "form-group"
                            }, r.a.createElement("input", {
                                className: "form-control",
                                placeholder: "Password",
                                name: "password",
                                onChange: this.handleChange,
                                value: this.state.password,
                                type: "password"
                            })), r.a.createElement("div", {
                                className: "form-group"
                            }, this.state.error ? r.a.createElement("p", {
                                className: "text-danger"
                            }, this.state.error) : null, r.a.createElement("button", {
                                className: "btn btn-primary px-5",
                                type: "submit"
                            }, "Sign up")), r.a.createElement("p", null, "You can also sign up with any of these services"), r.a.createElement("button", {
                                className: "btn btn-danger mr-2",
                                type: "button",
                                onClick: this.googleSignIn
                            }, "Sign up with Google"), r.a.createElement("button", {
                                className: "btn btn-secondary",
                                type: "button",
                                onClick: this.githubSignIn
                            }, "Sign up with GitHub"), r.a.createElement("hr", null), r.a.createElement("p", null, "Already have an account? ", r.a.createElement(b.b, {
                                to: "/login"
                            }, "Login"))))
                        }
                    }]), t
                }(n.Component),
                D = function(e) {
                    function t() {
                        var e;
                        return Object(i.a)(this, t), (e = Object(o.a)(this, Object(u.a)(t).call(this))).state = {
                            error: null,
                            email: "",
                            password: ""
                        }, e.handleChange = e.handleChange.bind(Object(O.a)(e)), e.handleSubmit = e.handleSubmit.bind(Object(O.a)(e)), e.googleSignIn = e.googleSignIn.bind(Object(O.a)(e)), e.githubSignIn = e.githubSignIn.bind(Object(O.a)(e)), e
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "handleChange",
                        value: function(e) {
                            this.setState(Object(x.a)({}, e.target.name, e.target.value))
                        }
                    }, {
                        key: "handleSubmit",
                        value: function() {
                            var e = Object(j.a)(w.a.mark(function e(t) {
                                return w.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return t.preventDefault(), this.setState({
                                                error: ""
                                            }), e.prev = 2, e.next = 5, a = this.state.email, n = this.state.password, v().signInWithEmailAndPassword(a, n);
                                        case 5:
                                            e.next = 10;
                                            break;
                                        case 7:
                                            e.prev = 7, e.t0 = e.catch(2), this.setState({
                                                error: e.t0.message
                                            });
                                        case 10:
                                        case "end":
                                            return e.stop()
                                    }
                                    var a, n
                                }, e, this, [
                                    [2, 7]
                                ])
                            }));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "googleSignIn",
                        value: function() {
                            var e = Object(j.a)(w.a.mark(function e() {
                                return w.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, C();
                                        case 3:
                                            e.next = 8;
                                            break;
                                        case 5:
                                            e.prev = 5, e.t0 = e.catch(0), this.setState({
                                                error: e.t0.message
                                            });
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [0, 5]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "githubSignIn",
                        value: function() {
                            var e = Object(j.a)(w.a.mark(function e() {
                                return w.a.wrap(function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, I();
                                        case 3:
                                            e.next = 8;
                                            break;
                                        case 5:
                                            e.prev = 5, e.t0 = e.catch(0), this.setState({
                                                error: e.t0.message
                                            });
                                        case 8:
                                        case "end":
                                            return e.stop()
                                    }
                                }, e, this, [
                                    [0, 5]
                                ])
                            }));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }()
                    }, {
                        key: "render",
                        value: function() {
                            return r.a.createElement("div", {
                                className: "container"
                            }, r.a.createElement("form", {
                                className: "mt-5 py-5 px-5",
                                autoComplete: "off",
                                onSubmit: this.handleSubmit
                            }, r.a.createElement("h1", null, "Login to", r.a.createElement(b.b, {
                                className: "title ml-2",
                                to: "/"
                            }, "Chatty")), r.a.createElement("p", {
                                className: "lead"
                            }, "Fill in the form below to login to your account."), r.a.createElement("div", {
                                className: "form-group"
                            }, r.a.createElement("input", {
                                className: "form-control",
                                placeholder: "Email",
                                name: "email",
                                type: "email",
                                onChange: this.handleChange,
                                value: this.state.email
                            })), r.a.createElement("div", {
                                className: "form-group"
                            }, r.a.createElement("input", {
                                className: "form-control",
                                placeholder: "Password",
                                name: "password",
                                onChange: this.handleChange,
                                value: this.state.password,
                                type: "password"
                            })), r.a.createElement("div", {
                                className: "form-group"
                            }, this.state.error ? r.a.createElement("p", {
                                className: "text-danger"
                            }, this.state.error) : null, r.a.createElement("button", {
                                className: "btn btn-primary px-5",
                                type: "submit"
                            }, "Login")), r.a.createElement("p", null, "You can also log in with any of these services"), r.a.createElement("button", {
                                className: "btn btn-danger mr-2",
                                type: "button",
                                onClick: this.googleSignIn
                            }, "Sign in with Google"), r.a.createElement("button", {
                                className: "btn btn-secondary",
                                type: "button",
                                onClick: this.githubSignIn
                            }, "Sign in with GitHub"), r.a.createElement("hr", null), r.a.createElement("p", null, "Don't have an account? ", r.a.createElement(b.b, {
                                to: "/signup"
                            }, "Sign up"))))
                        }
                    }]), t
                }(n.Component);
            a(49);

            function L(e) {
                var t = e.component,
                    a = e.authenticated,
                    n = Object(h.a)(e, ["component", "authenticated"]);
                return r.a.createElement(p.b, Object.assign({}, n, {
                    render: function(e) {
                        return !0 === a ? r.a.createElement(t, e) : r.a.createElement(p.a, {
                            to: {
                                pathname: "/login",
                                state: {
                                    from: e.location
                                }
                            }
                        })
                    }
                }))
            }

            function P(e) {
                var t = e.component,
                    a = e.authenticated,
                    n = Object(h.a)(e, ["component", "authenticated"]);
                return r.a.createElement(p.b, Object.assign({}, n, {
                    render: function(e) {
                        return !1 === a ? r.a.createElement(t, e) : r.a.createElement(p.a, {
                            to: "/chat"
                        })
                    }
                }))
            }
            var M = function(e) {
                    function t() {
                        var e;
                        return Object(i.a)(this, t), (e = Object(o.a)(this, Object(u.a)(t).call(this))).state = {
                            authenticated: !1,
                            loading: !0
                        }, e
                    }
                    return Object(m.a)(t, e), Object(l.a)(t, [{
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            v().onAuthStateChanged(function(t) {
                                t ? e.setState({
                                    authenticated: !0,
                                    loading: !1
                                }) : e.setState({
                                    authenticated: !1,
                                    loading: !1
                                })
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return !0 === this.state.loading ? r.a.createElement("div", {
                                className: "spinner-border text-success",
                                role: "status"
                            }, r.a.createElement("span", {
                                className: "sr-only"
                            }, "Loading...")) : r.a.createElement(b.a, null, r.a.createElement(p.d, null, r.a.createElement(p.b, {
                                exact: !0,
                                path: "/",
                                component: N
                            }), r.a.createElement(L, {
                                path: "/chat",
                                authenticated: this.state.authenticated,
                                component: k
                            }), r.a.createElement(P, {
                                path: "/signup",
                                authenticated: this.state.authenticated,
                                component: A
                            }), r.a.createElement(P, {
                                path: "/login",
                                authenticated: this.state.authenticated,
                                component: D
                            })))
                        }
                    }]), t
                }(n.Component),
                G = document.getElementById("root");
            s.a.render(r.a.createElement(M, null), G)
        }
    },
    [
        [34, 1, 2]
    ]
]);
//# sourceMappingURL=main.56208fa0.chunk.js.map