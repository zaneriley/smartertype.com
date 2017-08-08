window.__NEXT_REGISTER_PAGE("/post", function() {
  var comp = (module.exports = webpackJsonp(
    [4],
    {
      374: function(e, t, l) {
        e.exports = l(375);
      },
      375: function(e, t, l) {
        "use strict";
        function u(e) {
          return e && e.__esModule ? e : { default: e };
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var n = l(6),
          r = u(n),
          o = l(171),
          a = u(o);
        t.default = function(e) {
          return r.default.createElement(
            a.default,
            null,
            r.default.createElement("h1", null, e.url.query.title),
            r.default.createElement("p", null, "This is the blog post content.")
          );
        };
      }
    },
    [374]
  ));
  return { page: comp.default };
});
