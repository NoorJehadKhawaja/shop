"use strict";
(self.webpackChunkcheckout_web = self.webpackChunkcheckout_web || []).push([
    [809],
    {
        416: (e, t, u) => {
            u.d(t, { Z: () => f });
            var c = u(59748),
                n = u(90506),
                r = u(41186),
                s = u(80669);
            function f(e) {
                !(function (e, t = []) {
                    const u = (0, c.useContext)(r.X),
                        f = (0, c.useRef)(),
                        o = () => {
                            f.current ? f.current.update(...t) : (f.current = e(u));
                        };
                    (0, n.t)(o, u[s.SB]), (0, c.useEffect)(o, [u, ...t]), (0, c.useEffect)(() => f.current?.remove, []);
                })((t) => t.addTitle(e), [e]);
            }
        },
    },
]);
