/* Lucide-style icons shared across the Inspire variations.
   Exposed on window.IWIcons as React components taking optional {size}. */
(function () {
  const h = React.createElement;
  function svg(paths, vb) {
    return function Icon({ size = 24, strokeWidth = 1.7, style, className }) {
      return h("svg", {
        width: size, height: size, viewBox: vb || "0 0 24 24", fill: "none",
        stroke: "currentColor", strokeWidth, strokeLinecap: "round",
        strokeLinejoin: "round", "aria-hidden": "true", style, className,
      }, paths.map((d, i) => h("path", { key: i, d })));
    };
  }
  function multi(children, vb) {
    return function Icon({ size = 24, strokeWidth = 1.7, style, className }) {
      return h("svg", {
        width: size, height: size, viewBox: vb || "0 0 24 24", fill: "none",
        stroke: "currentColor", strokeWidth, strokeLinecap: "round",
        strokeLinejoin: "round", "aria-hidden": "true", style, className,
      }, children.map((c, i) => h(c.t, { key: i, ...c.p })));
    };
  }

  window.IWIcons = {
    user: multi([{ t: "path", p: { d: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" } }, { t: "circle", p: { cx: 12, cy: 7, r: 4 } }]),
    heart: svg(["M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"]),
    users: multi([{ t: "path", p: { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" } }, { t: "circle", p: { cx: 9, cy: 7, r: 4 } }, { t: "path", p: { d: "M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" } }]),
    child: multi([{ t: "circle", p: { cx: 12, cy: 5, r: 2 } }, { t: "path", p: { d: "M12 7v6M9 21l3-4 3 4M6 11h12" } }]),
    clipboard: multi([{ t: "rect", p: { x: 8, y: 2, width: 8, height: 4, rx: 1 } }, { t: "path", p: { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2M9 12h6M9 16h4" } }]),
    compass: multi([{ t: "circle", p: { cx: 12, cy: 12, r: 10 } }, { t: "polygon", p: { points: "16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" } }]),
    sparkle: svg(["M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3Z"]),
    shield: multi([{ t: "path", p: { d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" } }, { t: "path", p: { d: "m9 12 2 2 4-4" } }]),
    check: svg(["M20 6 9 17l-5-5"]),
    mapPin: multi([{ t: "path", p: { d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" } }, { t: "circle", p: { cx: 12, cy: 10, r: 3 } }]),
    laptop: svg(["M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"]),
    phone: svg(["M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z"]),
    mail: multi([{ t: "rect", p: { x: 2, y: 4, width: 20, height: 16, rx: 2 } }, { t: "path", p: { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" } }]),
    calendar: multi([{ t: "rect", p: { x: 3, y: 4, width: 18, height: 18, rx: 2 } }, { t: "path", p: { d: "M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" } }]),
    leaf: svg(["M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z", "M2 21c0-3 1.85-5.36 5.08-6"]),
    arrowRight: svg(["M5 12h14M13 5l7 7-7 7"]),
    flower: multi([{ t: "circle", p: { cx: 12, cy: 12, r: 3 } }, { t: "path", p: { d: "M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5M12 7.5V9m0 6v1.5m4.5-4.5H15m-6 0H7.5" } }]),
    cloud: svg(["M17.5 19a4.5 4.5 0 1 0 0-9h-1.8A7 7 0 1 0 4 15.2"]),
    zap: svg(["M4 14h7l-1 8 10-12h-7l1-8-10 12Z"]),
    repeat: svg(["m17 2 4 4-4 4", "M3 11V9a4 4 0 0 1 4-4h14", "m7 22-4-4 4-4", "M21 13v2a4 4 0 0 1-4 4H3"]),
    sprout: svg(["M7 20h10", "M10 20c5.5-2.5.8-6.4 3-10", "M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8Z", "M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2Z"]),
    home: svg(["M3 10.2 12 3l9 7.2", "M5 9.5V21h14V9.5"]),
  };
})();
