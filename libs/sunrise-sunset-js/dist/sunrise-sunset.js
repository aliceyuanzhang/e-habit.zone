var SunriseSunsetJS = function (t) {
    "use strict";
    var e = 90.8333;

    function n(t) {
        return Math.sin(2 * t * Math.PI / 360)
    }

    function a(t) {
        return 360 * Math.acos(t) / (2 * Math.PI)
    }

    function r(t) {
        return Math.cos(2 * t * Math.PI / 360)
    }

    function u(t, e) {
        var n = t % e;
        return n < 0 ? n + e : n
    }

    function i(t, e, i, o, M) {
        var h, c, f = function (t) {
                return Math.ceil((t.getTime() - new Date(t.getFullYear(), 0, 1).getTime()) / 864e5)
            }(M),
            s = e / 15,
            l = i ? f + (6 - s) / 24 : f + (18 - s) / 24,
            g = .9856 * l - 3.289,
            v = u(g + 1.916 * n(g) + .02 * n(2 * g) + 282.634, 360),
            P = .91764 * (h = v, Math.tan(2 * h * Math.PI / 360));
        c = u(c = 360 / (2 * Math.PI) * Math.atan(P), 360), c += 90 * Math.floor(v / 90) - 90 * Math.floor(c / 90), c /= 15;
        var D, I = .39782 * n(v),
            S = r((D = I, 360 * Math.asin(D) / (2 * Math.PI))),
            d = (r(o) - I * n(t)) / (S * r(t)),
            w = u((i ? 360 - a(d) : a(d)) / 15 + c - .06571 * l - 6.622 - e / 15, 24),
            T = Date.UTC(M.getFullYear(), M.getMonth(), M.getDate());
        return new Date(T + 36e5 * w)
    }
    return t.getSunrise = function (t, n, a) {
        return void 0 === a && (a = new Date), i(t, n, !0, e, a)
    }, t.getSunset = function (t, n, a) {
        return void 0 === a && (a = new Date), i(t, n, !1, e, a)
    }, Object.defineProperty(t, "__esModule", {
        value: !0
    }), t
}({});