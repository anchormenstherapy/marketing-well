/* @ds-bundle: {"format":3,"namespace":"MarketingWellCoreDesignSystem_2f2c2c","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"LinkArrow","sourcePath":"components/buttons/LinkArrow.jsx"},{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Chip","sourcePath":"components/data-display/Chip.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"PillChoice","sourcePath":"components/forms/PillChoice.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/practice/Accordion.jsx"},{"name":"AreaCard","sourcePath":"components/practice/AreaCard.jsx"},{"name":"TherapistCard","sourcePath":"components/practice/TherapistCard.jsx"},{"name":"Eyebrow","sourcePath":"components/sections/Eyebrow.jsx"},{"name":"FlourishDivider","sourcePath":"components/sections/FlourishDivider.jsx"},{"name":"SectionHeading","sourcePath":"components/sections/SectionHeading.jsx"},{"name":"TrustBar","sourcePath":"components/sections/TrustBar.jsx"}],"sourceHashes":{"assets/image-slot.js":"cf5f1791dd04","components/buttons/Button.jsx":"392492b900eb","components/buttons/LinkArrow.jsx":"488f774cff46","components/data-display/Avatar.jsx":"598bf6e33b49","components/data-display/Badge.jsx":"e93fbfff7b62","components/data-display/Card.jsx":"6e062949d716","components/data-display/Chip.jsx":"6d15c175bfb7","components/forms/Input.jsx":"be3b58431bc9","components/forms/PillChoice.jsx":"037acc819ab2","components/forms/Textarea.jsx":"3c967df112fa","components/practice/Accordion.jsx":"3c36a6fe1ac1","components/practice/AreaCard.jsx":"77d1eca562c6","components/practice/TherapistCard.jsx":"ade89f90e9b5","components/sections/Eyebrow.jsx":"3489c4e8b364","components/sections/FlourishDivider.jsx":"04d50bd6d7cd","components/sections/SectionHeading.jsx":"1bed1decb13a","components/sections/TrustBar.jsx":"6942f9ae5b66","ui_kits/ck-mental-health/app.jsx":"8ddd56787802","ui_kits/inspire-wellness/app.jsx":"8a064616e582","ui_kits/still-standing/app.jsx":"376aec88f411"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MarketingWellCoreDesignSystem_2f2c2c = window.MarketingWellCoreDesignSystem_2f2c2c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// assets/image-slot.js
try { (() => {
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "assets/image-slot.js", error: String((e && e.message) || e) }); }

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  arrow = false,
  iconLeft = null,
  fullWidth = false,
  disabled = false,
  className = "",
  ...rest
}) {
  const cls = ["mwc-btn", `mwc-btn--${variant}`, size !== "md" ? `mwc-btn--${size}` : "", className].filter(Boolean).join(" ");
  const style = fullWidth ? {
    width: "100%"
  } : undefined;
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft, /*#__PURE__*/React.createElement("span", null, children), arrow ? /*#__PURE__*/React.createElement("svg", {
    className: "mwc-btn__arrow",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 5l7 7-7 7"
  })) : null);
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      className: cls,
      style: style,
      onClick: onClick
    }, rest), inner);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    style: style,
    onClick: onClick,
    disabled: disabled
  }, rest), inner);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/LinkArrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function LinkArrow({
  children,
  href = "#",
  accent = false,
  className = "",
  ...rest
}) {
  const cls = ["mwc-linkarrow", accent ? "mwc-linkarrow--accent" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", null, children), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })));
}
Object.assign(__ds_scope, { LinkArrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/LinkArrow.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Avatar({
  src,
  alt = "",
  initials,
  size = 48,
  className = "",
  ...rest
}) {
  const style = {
    width: size,
    height: size
  };
  if (src) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: alt,
      className: `mwc-avatar ${className}`,
      style: style
    }, rest));
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `mwc-avatar mwc-avatar--initials ${className}`,
    style: {
      ...style,
      fontSize: size * 0.4
    },
    "aria-label": alt
  }, rest), initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Badge({
  children,
  variant = "soft",
  dot = false,
  className = "",
  ...rest
}) {
  const cls = ["mwc-badge", variant === "accent" ? "mwc-badge--accent" : "", variant === "outline" ? "mwc-badge--outline" : "", dot ? "mwc-badge--dot" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  children,
  hover = false,
  padding = "md",
  as = "div",
  className = "",
  ...rest
}) {
  const Tag = as;
  const cls = ["mwc-card", hover ? "mwc-card--hover" : "", padding === "lg" ? "mwc-card--pad-lg" : "", padding === "none" ? "mwc-card--flush" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Chip({
  children,
  active = false,
  star = false,
  onClick,
  as = "button",
  className = "",
  ...rest
}) {
  const Tag = as;
  const cls = ["mwc-chip", star ? "mwc-chip--star" : "", className].filter(Boolean).join(" ");
  const props = as === "button" ? {
    type: "button",
    "aria-pressed": star ? true : active,
    onClick
  } : {
    onClick
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: cls
  }, props, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Chip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  error = false,
  id,
  className = "",
  ...rest
}) {
  const cls = ["mwc-input", error ? "mwc-input--error" : "", className].filter(Boolean).join(" ");
  const field = /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    className: cls
  }, rest));
  if (!label) return field;
  return /*#__PURE__*/React.createElement("label", {
    className: "mwc-field",
    htmlFor: id
  }, /*#__PURE__*/React.createElement("span", {
    className: "mwc-field__label"
  }, label), field);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/PillChoice.jsx
try { (() => {
function PillChoice({
  name,
  options = [],
  value,
  onChange,
  label,
  columns
}) {
  const style = columns ? {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, 1fr)`
  } : undefined;
  return /*#__PURE__*/React.createElement("div", {
    className: "mwc-field"
  }, label ? /*#__PURE__*/React.createElement("span", {
    className: "mwc-field__label"
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    className: "mwc-pillgroup",
    style: style,
    role: "radiogroup",
    "aria-label": label
  }, options.map(opt => {
    const o = typeof opt === "string" ? {
      value: opt,
      label: opt
    } : opt;
    return /*#__PURE__*/React.createElement("label", {
      key: o.value,
      className: "mwc-pill"
    }, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: name,
      value: o.value,
      checked: value === o.value,
      onChange: () => onChange && onChange(o.value)
    }), /*#__PURE__*/React.createElement("span", null, o.label));
  })));
}
Object.assign(__ds_scope, { PillChoice });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/PillChoice.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Textarea({
  label,
  error = false,
  id,
  className = "",
  rows = 4,
  ...rest
}) {
  const cls = ["mwc-textarea", error ? "mwc-textarea--error" : "", className].filter(Boolean).join(" ");
  const field = /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    rows: rows,
    className: cls
  }, rest));
  if (!label) return field;
  return /*#__PURE__*/React.createElement("label", {
    className: "mwc-field",
    htmlFor: id
  }, /*#__PURE__*/React.createElement("span", {
    className: "mwc-field__label"
  }, label), field);
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/practice/Accordion.jsx
try { (() => {
function Accordion({
  items = [],
  defaultOpen = 0
}) {
  const [open, setOpen] = React.useState(defaultOpen);
  return /*#__PURE__*/React.createElement("div", {
    className: "mwc-accordion"
  }, items.map((it, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "mwc-acc-item",
      "data-open": isOpen
    }, /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "mwc-acc-trigger",
      "aria-expanded": isOpen,
      onClick: () => setOpen(isOpen ? -1 : i)
    }, /*#__PURE__*/React.createElement("span", null, it.q), /*#__PURE__*/React.createElement("svg", {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M12 5v14M5 12h14"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "mwc-acc-panel"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mwc-acc-panel__inner"
    }, it.a)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/practice/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/practice/AreaCard.jsx
try { (() => {
function AreaCard({
  icon,
  title,
  description,
  linkLabel,
  href = "#",
  accentIcon = false
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "mwc-card mwc-card--hover",
    style: {
      display: "flex",
      flexDirection: "column"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: `mwc-medallion ${accentIcon ? "mwc-medallion--accent" : ""}`
  }, icon), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "21px",
      color: "var(--brand-strong)",
      margin: "0 0 8px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14.5px",
      color: "var(--text-soft)",
      lineHeight: 1.55,
      margin: 0
    }
  }, description), linkLabel ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: "16px"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.LinkArrow, {
    href: href
  }, linkLabel)) : null);
}
Object.assign(__ds_scope, { AreaCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/practice/AreaCard.jsx", error: String((e && e.message) || e) }); }

// components/practice/TherapistCard.jsx
try { (() => {
function TherapistCard({
  name,
  photo,
  credentials,
  specialties,
  primaryLabel = "Book Consult",
  secondaryLabel = "Learn More",
  onPrimary,
  onSecondary,
  hover = true
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: `mwc-therapist ${hover ? "mwc-therapist--hover" : ""}`
  }, /*#__PURE__*/React.createElement("img", {
    className: "mwc-therapist__photo",
    src: photo,
    alt: name
  }), /*#__PURE__*/React.createElement("div", {
    className: "mwc-therapist__body"
  }, /*#__PURE__*/React.createElement("h3", {
    className: "mwc-therapist__name"
  }, name), credentials ? /*#__PURE__*/React.createElement("p", {
    className: "mwc-therapist__cred"
  }, credentials) : null, specialties ? /*#__PURE__*/React.createElement("p", {
    className: "mwc-therapist__spec"
  }, specialties) : null, /*#__PURE__*/React.createElement("div", {
    className: "mwc-therapist__divider"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mwc-therapist__actions"
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "primary",
    size: "sm",
    onClick: onPrimary
  }, primaryLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    onClick: onSecondary
  }, secondaryLabel))));
}
Object.assign(__ds_scope, { TherapistCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/practice/TherapistCard.jsx", error: String((e && e.message) || e) }); }

// components/sections/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Eyebrow({
  children,
  className = "",
  ...rest
}) {
  return /*#__PURE__*/React.createElement("p", _extends({
    className: `mwc-eyebrow ${className}`
  }, rest), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/sections/FlourishDivider.jsx
try { (() => {
function FlourishDivider({
  width = 100,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 20",
    className: `mwc-flourish ${className}`,
    style: {
      width,
      ...style
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "0",
    y1: "10",
    x2: "35",
    y2: "10",
    stroke: "currentColor",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "10",
    r: "3",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "10",
    r: "1",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "65",
    y1: "10",
    x2: "100",
    y2: "10",
    stroke: "currentColor",
    strokeWidth: "1"
  }));
}
Object.assign(__ds_scope, { FlourishDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/FlourishDivider.jsx", error: String((e && e.message) || e) }); }

// components/sections/SectionHeading.jsx
try { (() => {
function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
  as = "h2",
  className = "",
  children
}) {
  const Title = as;
  const cls = ["mwc-secthead", center ? "mwc-secthead--center" : "", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", {
    className: cls
  }, eyebrow ? /*#__PURE__*/React.createElement("p", {
    className: "mwc-eyebrow"
  }, eyebrow) : null, /*#__PURE__*/React.createElement(Title, {
    className: "mwc-secthead__title"
  }, title), subtitle ? /*#__PURE__*/React.createElement("p", {
    className: "mwc-secthead__sub"
  }, subtitle) : null, children);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/sections/TrustBar.jsx
try { (() => {
function TrustBar({
  items = []
}) {
  const Check = () => /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }));
  return /*#__PURE__*/React.createElement("div", {
    className: "mwc-trustbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mwc-trustbar__inner"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "mwc-trustitem"
  }, it.icon || /*#__PURE__*/React.createElement(Check, null), /*#__PURE__*/React.createElement("span", null, typeof it === "string" ? it : it.label)))));
}
Object.assign(__ds_scope, { TrustBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/sections/TrustBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/ck-mental-health/app.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* CK Mental Health & Trauma Therapy Centre — UI kit (Sage theme)
   Faithful recreation of the marketingwell.ca/mockups/ck landing page,
   composed from Marketing Well Core components. */
const DS = window.MarketingWellCoreDesignSystem_2f2c2c;
const {
  Button,
  TrustBar,
  SectionHeading,
  AreaCard,
  TherapistCard,
  Card,
  Badge,
  Input,
  Textarea,
  PillChoice,
  LinkArrow,
  Eyebrow
} = DS;

/* ---- tiny inline Lucide-style icon set ---- */
const Ico = {
  phone: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"
  })),
  shield: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z"
  })),
  wave: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 17c2-3 4-3 6 0s4 3 6 0 4-3 6 0"
  })),
  sun: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v3M12 19v3M2 12h3M19 12h3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"
  })),
  spark: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6z"
  })),
  leaf: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 3c-4 0-7 3-7 7 0 8 10 11 10 11s0-3 1-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 4c-4 0-7 3-7 7s3 7 7 7c0-4 0-10 0-14z"
  })),
  drop: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2s7 7 7 12a7 7 0 1 1-14 0c0-5 7-12 7-12z"
  })),
  heart: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6.5 5 5 0 0 1 21.5 12C19 16.5 12 21 12 21z"
  })),
  pin: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "10",
    r: "3"
  }))
};
const LeafMark = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 32 32",
  width: "24",
  height: "24",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M16 4 C 9 9, 9 19, 16 28 C 23 19, 23 9, 16 4 Z",
  fill: light ? "#FEFAE0" : "#36453C"
}), /*#__PURE__*/React.createElement("path", {
  d: "M16 8 V 26",
  stroke: light ? "#36453C" : "#FEFAE0",
  strokeWidth: "1.2"
}));
const SPECIALIZATIONS = [{
  icon: Ico.shield,
  name: "Trauma & PTSD",
  desc: "Process and integrate difficult experiences safely."
}, {
  icon: Ico.wave,
  name: "Anxiety",
  desc: "Quiet the noise. Reclaim a steady nervous system."
}, {
  icon: Ico.sun,
  name: "Depression",
  desc: "Find traction and meaning when everything feels heavy."
}, {
  icon: Ico.spark,
  name: "ADHD",
  desc: "Tools for focus, executive function, and self-trust."
}, {
  icon: Ico.leaf,
  name: "Disordered Eating",
  desc: "A compassionate path to food and body peace."
}, {
  icon: Ico.drop,
  name: "Grief & Loss",
  desc: "Move through loss without going around it."
}, {
  icon: Ico.sun,
  name: "OCD",
  desc: "Evidence-based support for intrusive thoughts and rituals."
}, {
  icon: Ico.heart,
  name: "Relationships",
  desc: "For couples, families, and the connections that matter."
}];
const THERAPISTS = [{
  name: "Rebecca Attewell",
  photo: "../../assets/images/portrait-rebecca.webp",
  credentials: "Clinic Founder · RP",
  specialties: "Trauma · EMDR · Clinical supervision"
}, {
  name: "Kelsey Oswald-Bauer",
  photo: "../../assets/images/portrait-kelsey.webp",
  credentials: "Registered Psychotherapist",
  specialties: "Anxiety · Depression · ADHD"
}, {
  name: "Courtney Myers",
  photo: "../../assets/images/portrait-courtney.webp",
  credentials: "Registered Psychotherapist",
  specialties: "Grief · Relationships · OCD"
}];
function Header({
  onBook
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "ck-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-header__inner mw-wrap mw-wrap--wide"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    className: "ck-brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ck-brand__mark"
  }, /*#__PURE__*/React.createElement(LeafMark, null)), /*#__PURE__*/React.createElement("span", {
    className: "ck-brand__wm"
  }, /*#__PURE__*/React.createElement("b", null, "CK Mental Health"), /*#__PURE__*/React.createElement("small", null, "& Trauma Therapy Centre"))), /*#__PURE__*/React.createElement("nav", {
    className: "ck-nav"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#specializations"
  }, "Specializations"), /*#__PURE__*/React.createElement("a", {
    href: "#therapists"
  }, "Therapists"), /*#__PURE__*/React.createElement("a", {
    href: "#locations"
  }, "Locations"), /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    className: "ck-header__cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:5198097971",
    className: "ck-phone"
  }, Ico.phone, "519-809-7971"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    arrow: true,
    onClick: onBook
  }, "Book Now"))));
}
function Hero({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "ck-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-hero__inner mw-wrap mw-wrap--wide"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Chatham \xB7 Blenheim \xB7 Across Ontario"), /*#__PURE__*/React.createElement("h1", {
    className: "ck-hero__title"
  }, "A grounded space to ", /*#__PURE__*/React.createElement("em", null, "feel,"), " heal, and grow."), /*#__PURE__*/React.createElement("p", {
    className: "ck-hero__sub"
  }, "In-person & online therapy for individuals, couples, families & children in Chatham-Kent and across Ontario. A team of Registered Psychotherapists offering evidence-based, trauma-informed care."), /*#__PURE__*/React.createElement("div", {
    className: "ck-hero__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    arrow: true,
    onClick: onBook
  }, "Book your first session"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost-light",
    size: "lg",
    href: "#therapists"
  }, "Meet our therapists")), /*#__PURE__*/React.createElement("div", {
    className: "ck-hero__ribbon"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", null), " Free 15-min consultation"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", null), " Direct billing available"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("i", null), " Most clients seen within 1 week"))), /*#__PURE__*/React.createElement("div", {
    className: "ck-hero__curve",
    "aria-hidden": "true"
  }));
}
function Specializations() {
  return /*#__PURE__*/React.createElement("section", {
    id: "specializations",
    className: "mw-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "What we treat",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Treatment ", /*#__PURE__*/React.createElement("em", null, "specializations.")),
    subtitle: "Each of our therapists brings deep, evidence-based experience in specific areas of concern. Explore where you are \u2014 and find the support that fits."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ck-spec-grid"
  }, SPECIALIZATIONS.map(s => /*#__PURE__*/React.createElement(AreaCard, {
    key: s.name,
    icon: s.icon,
    title: s.name,
    description: s.desc,
    linkLabel: "Learn more"
  })))));
}
function Team({
  onBook
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "therapists",
    className: "mw-section ck-team"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "The team",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Care from ", /*#__PURE__*/React.createElement("em", null, "people who get it.")),
    subtitle: "Our team of Registered Psychotherapists brings warmth, lived experience, and rigorous training to every session."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ck-team__photo"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/team-group.webp",
    alt: "The CK Mental Health team"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ck-team__grid"
  }, THERAPISTS.map(t => /*#__PURE__*/React.createElement(TherapistCard, _extends({
    key: t.name
  }, t, {
    primaryLabel: "Book with",
    secondaryLabel: "Read bio",
    onPrimary: onBook
  }))))));
}
function Locations() {
  const loc = [{
    tag: "Main office",
    name: "Chatham",
    addr: "43 Victoria Avenue",
    postal: "N7L 2Z9",
    hours: "Mon–Fri · 8:30–7:00"
  }, {
    tag: "Satellite office",
    name: "Blenheim",
    addr: "2 Hyland Drive",
    postal: "N0P 1A0",
    hours: "Tue–Thu · 9:00–6:00"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "locations",
    className: "mw-section ck-loc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Visit us",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Two locations, ", /*#__PURE__*/React.createElement("em", null, "one community.")),
    subtitle: "We meet clients where they are \u2014 in our Chatham and Blenheim offices, online from anywhere in Ontario, or a flexible combination of both."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ck-loc__grid"
  }, loc.map(l => /*#__PURE__*/React.createElement(Card, {
    key: l.name,
    padding: "none",
    as: "article"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-loc__map"
  }, Ico.pin, /*#__PURE__*/React.createElement(Badge, {
    dot: true,
    className: "ck-loc__badge"
  }, l.tag)), /*#__PURE__*/React.createElement("div", {
    className: "ck-loc__body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-loc__head"
  }, /*#__PURE__*/React.createElement("h3", null, l.name), /*#__PURE__*/React.createElement("span", null, l.postal)), /*#__PURE__*/React.createElement("p", {
    className: "ck-loc__addr"
  }, l.addr), /*#__PURE__*/React.createElement("p", {
    className: "ck-loc__city"
  }, "Ontario"), /*#__PURE__*/React.createElement("dl", {
    className: "ck-loc__dl"
  }, /*#__PURE__*/React.createElement("dt", null, "Hours"), /*#__PURE__*/React.createElement("dd", null, l.hours), /*#__PURE__*/React.createElement("dt", null, "Parking"), /*#__PURE__*/React.createElement("dd", null, "Free on-site")), /*#__PURE__*/React.createElement("div", {
    className: "ck-loc__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "brand",
    size: "sm"
  }, "Get directions"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm"
  }, "Book here"))))))));
}
function Contact() {
  const [who, setWho] = React.useState("Myself");
  const [fmt, setFmt] = React.useState("Either");
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "mw-section ck-contact"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap ck-contact__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Get in touch"), /*#__PURE__*/React.createElement("h2", {
    className: "ck-contact__title"
  }, "Take the ", /*#__PURE__*/React.createElement("em", null, "first step.")), /*#__PURE__*/React.createElement("p", {
    className: "ck-contact__lead"
  }, "We're honored to accompany you on your healing journey. Our office secretary, Laura, will reach out within one business day to match you with a therapist."), /*#__PURE__*/React.createElement("div", {
    className: "ck-contact__rows"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-contact__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ck-contact__ico"
  }, Ico.phone), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ck-contact__k"
  }, "Phone"), /*#__PURE__*/React.createElement("a", {
    href: "tel:5198097971"
  }, "519-809-7971"))), /*#__PURE__*/React.createElement("div", {
    className: "ck-contact__row"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ck-contact__ico"
  }, Ico.heart), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ck-contact__k"
  }, "Typical reply"), /*#__PURE__*/React.createElement("p", null, "Within 1 business day"))))), /*#__PURE__*/React.createElement("form", {
    className: "ck-form",
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "ck-form__title"
  }, "Connect with a therapist"), /*#__PURE__*/React.createElement("div", {
    className: "ck-form__grid2"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "First name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Last name"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ck-form__grid2"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone",
    type: "tel"
  })), /*#__PURE__*/React.createElement(PillChoice, {
    label: "I'm looking for",
    name: "for",
    columns: 4,
    options: ["Myself", "A couple", "My family", "My child"],
    value: who,
    onChange: setWho
  }), /*#__PURE__*/React.createElement(PillChoice, {
    label: "Preferred format",
    name: "fmt",
    columns: 3,
    options: ["In-person", "Online", "Either"],
    value: fmt,
    onChange: setFmt
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "A bit about what's bringing you in",
    rows: 3,
    placeholder: "Describe what's bringing you to therapy\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    className: "ck-form__foot"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    type: "submit",
    arrow: true
  }, "Send message")), sent ? /*#__PURE__*/React.createElement("div", {
    className: "ck-form__ok"
  }, "\u2713 Thanks \u2014 Laura will be in touch within one business day.") : null)));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "ck-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap ck-footer__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-footer__brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ck-brand__mark"
  }, /*#__PURE__*/React.createElement(LeafMark, {
    light: true
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, "CK Mental Health"), /*#__PURE__*/React.createElement("p", null, "Trauma therapists in Chatham-Kent since 2020. Serving all of Ontario, in-person and online."))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Visit"), /*#__PURE__*/React.createElement("p", null, "Chatham \xB7 43 Victoria Ave"), /*#__PURE__*/React.createElement("p", null, "Blenheim \xB7 2 Hyland Drive")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Contact"), /*#__PURE__*/React.createElement("p", null, "519-809-7971"), /*#__PURE__*/React.createElement("p", null, "hello@ckmentalhealth.ca"))), /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap ck-footer__bar"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2020\u20132026 CK Mental Health & Trauma Therapy Centre."), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Accessibility \xB7 FAQ")));
}
function BookingModal({
  open,
  onClose
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "ck-modal",
    role: "dialog",
    "aria-modal": "true",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "ck-modal__panel",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "ck-modal__x",
    onClick: onClose,
    "aria-label": "Close"
  }, "\xD7"), /*#__PURE__*/React.createElement(Eyebrow, null, "Book a free consultation"), /*#__PURE__*/React.createElement("h3", {
    className: "ck-modal__title"
  }, "Let's find the right fit."), /*#__PURE__*/React.createElement("p", {
    className: "ck-modal__sub"
  }, "A free 15-minute call helps us match you with the right therapist. No pressure, no commitment."), /*#__PURE__*/React.createElement("div", {
    className: "ck-modal__opts"
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:5198097971",
    className: "ck-modal__opt"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ck-modal__oico"
  }, Ico.phone), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Call us \u2014 519-809-7971"), /*#__PURE__*/React.createElement("small", null, "Mon\u2013Fri \xB7 8:30 am \u2013 7:00 pm"))), /*#__PURE__*/React.createElement("a", {
    href: "#contact",
    onClick: onClose,
    className: "ck-modal__opt ck-modal__opt--ghost"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ck-modal__oico"
  }, Ico.heart), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", null, "Send a message"), /*#__PURE__*/React.createElement("small", null, "Laura replies within 1 business day"))))));
}
function App() {
  const [booking, setBooking] = React.useState(false);
  const book = () => setBooking(true);
  return /*#__PURE__*/React.createElement("div", {
    className: "theme-sage ck-app"
  }, /*#__PURE__*/React.createElement(Header, {
    onBook: book
  }), /*#__PURE__*/React.createElement(Hero, {
    onBook: book
  }), /*#__PURE__*/React.createElement("div", {
    className: "ck-trust"
  }, /*#__PURE__*/React.createElement(TrustBar, {
    items: ["Serving Ontario since 2020", "Chatham + Blenheim", "Registered Psychotherapists", "Direct billing available"]
  })), /*#__PURE__*/React.createElement(Specializations, null), /*#__PURE__*/React.createElement(Team, {
    onBook: book
  }), /*#__PURE__*/React.createElement(Locations, null), /*#__PURE__*/React.createElement(Contact, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(BookingModal, {
    open: booking,
    onClose: () => setBooking(false)
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/ck-mental-health/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/inspire-wellness/app.jsx
try { (() => {
/* Inspire Wellness Therapy — UI kit (Slate theme)
   Recreation of the base44 Inspire landing (EMDR/somatic style):
   centered editorial layout, Flourish dividers, soft radial glows. */
const DS = window.MarketingWellCoreDesignSystem_2f2c2c;
const {
  Button,
  SectionHeading,
  Card,
  Accordion,
  Avatar,
  Eyebrow,
  FlourishDivider
} = DS;
const PAINS = [{
  title: "The past keeps intruding",
  body: "Memories, images, or reactions surface when you least expect them — and they still carry the same charge."
}, {
  title: "Your body remembers",
  body: "Even when your mind has 'moved on,' your nervous system stays braced, tense, or on alert."
}, {
  title: "Talk therapy hasn't been enough",
  body: "You understand what happened — but understanding hasn't changed how it feels."
}, {
  title: "Beliefs that don't feel true",
  body: "\"I'm not safe.\" \"It was my fault.\" The thoughts persist even when you know better."
}];
const STEPS = [{
  n: "01",
  title: "A free discovery call",
  body: "We start with a relaxed 20-minute call to understand what's bringing you in and answer your questions."
}, {
  n: "02",
  title: "History & resourcing",
  body: "Your therapist builds a clear picture and equips you with grounding tools before any processing begins."
}, {
  n: "03",
  title: "Reprocessing",
  body: "Using bilateral stimulation, we help your brain reprocess the memories so they lose their grip."
}, {
  n: "04",
  title: "Integration",
  body: "We consolidate the shift, strengthen new beliefs, and make sure the change holds in daily life."
}];
const FAQS = [{
  q: "What exactly is EMDR?",
  a: "Eye Movement Desensitization and Reprocessing is a scientifically validated therapy that helps the brain reprocess distressing memories so they no longer hijack the present."
}, {
  q: "How long does it take?",
  a: "Healing doesn't have to take years. Many clients notice meaningful shifts within a handful of focused sessions, though it varies by person and history."
}, {
  q: "Is it covered by insurance?",
  a: "EMDR with our registered practitioners is covered by most extended health plans. We're happy to provide receipts for reimbursement."
}, {
  q: "Do you offer online sessions?",
  a: "Yes — EMDR is delivered in person in Calgary and online across Alberta, with the same proven protocol either way."
}];
function Header() {
  return /*#__PURE__*/React.createElement("header", {
    className: "iw-header"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap iw-header__inner"
  }, /*#__PURE__*/React.createElement("span", {
    className: "iw-brand"
  }, "Inspire Wellness Therapy"), /*#__PURE__*/React.createElement("nav", {
    className: "iw-menu"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#process"
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    href: "#team"
  }, "Therapists"), /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "FAQ")), /*#__PURE__*/React.createElement(Button, {
    variant: "brand",
    size: "sm"
  }, "Book a Discovery Call")));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "iw-hero"
  }, /*#__PURE__*/React.createElement("img", {
    className: "iw-hero__bg",
    src: "../../assets/images/hero-office.jpeg",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "iw-hero__scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap iw-hero__inner"
  }, /*#__PURE__*/React.createElement(FlourishDivider, {
    width: 60,
    style: {
      color: "#D1D0CA",
      marginBottom: "20px"
    }
  }), /*#__PURE__*/React.createElement(Eyebrow, null, "EMDR Therapy in Calgary & Across Alberta"), /*#__PURE__*/React.createElement("h1", {
    className: "iw-hero__title"
  }, "The past keeps living in your present. ", /*#__PURE__*/React.createElement("em", null, "EMDR can finally release it.")), /*#__PURE__*/React.createElement("p", {
    className: "iw-hero__sub"
  }, "EMDR is a scientifically validated therapy that helps your brain reprocess traumatic memories, so they stop running your life. Healing doesn't have to take years."), /*#__PURE__*/React.createElement(Button, {
    variant: "cream",
    size: "lg"
  }, "Book Your Free Discovery Call")));
}
function TrustSignals() {
  const items = [{
    k: "In-person in Calgary",
    s: "Dorchester Square · 1333 8 Street SW"
  }, {
    k: "Online across Alberta",
    s: null
  }, {
    k: "Covered by most extended health plans",
    s: null
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "iw-trust"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap iw-trust__inner"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "iw-trust__item",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "iw-trust__dot"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("b", null, it.k), it.s ? /*#__PURE__*/React.createElement("small", null, it.s) : null)))));
}
function PainPoints() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mw-section iw-pains"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iw-center"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "You're not imagining it"), /*#__PURE__*/React.createElement(FlourishDivider, {
    width: 100,
    style: {
      margin: "16px auto 18px"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    className: "mw-display-lg"
  }, "Your mind has moved on. Your body still ", /*#__PURE__*/React.createElement("em", null, "remembers."))), /*#__PURE__*/React.createElement("div", {
    className: "iw-pains__grid"
  }, PAINS.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "iw-pain__dot"
  }, /*#__PURE__*/React.createElement("span", null)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "21px",
      color: "var(--brand)",
      margin: "0 0 10px"
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15px",
      color: "color-mix(in srgb, var(--brand) 88%, transparent)",
      lineHeight: 1.75,
      margin: 0
    }
  }, p.body))))));
}
function Process() {
  return /*#__PURE__*/React.createElement("section", {
    id: "process",
    className: "mw-section iw-process"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iw-center"
  }, /*#__PURE__*/React.createElement(FlourishDivider, {
    width: 100,
    style: {
      margin: "0 auto 18px"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    className: "mw-display-lg"
  }, "What working together looks like"), /*#__PURE__*/React.createElement("p", {
    className: "iw-center__sub"
  }, "A clear, paced path \u2014 you're never doing more than you're ready for.")), /*#__PURE__*/React.createElement("div", {
    className: "iw-steps"
  }, STEPS.map(s => /*#__PURE__*/React.createElement("div", {
    className: "iw-step",
    key: s.n
  }, /*#__PURE__*/React.createElement("span", {
    className: "iw-step__n"
  }, s.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "22px",
      color: "var(--brand)",
      margin: "0 0 6px"
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "15.5px",
      color: "color-mix(in srgb, var(--brand) 88%, transparent)",
      lineHeight: 1.75,
      margin: 0
    }
  }, s.body)))))));
}
function Team() {
  const people = [{
    name: "Khanjan Pandya",
    photo: "../../assets/images/portrait-rebecca.webp",
    cred: "Registered Psychologist",
    fmt: "Online & In Person"
  }, {
    name: "Shaambhavi Sharma",
    photo: "../../assets/images/portrait-kelsey.webp",
    cred: "Registered Social Worker",
    fmt: "Online & In Person"
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "team",
    className: "mw-section iw-team"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iw-center"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Inspire Wellness Therapy"), /*#__PURE__*/React.createElement(FlourishDivider, {
    width: 100,
    style: {
      margin: "16px auto 18px"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    className: "mw-display-lg"
  }, "Meet your EMDR therapists"), /*#__PURE__*/React.createElement("p", {
    className: "iw-center__sub"
  }, "EMDR is delivered by experienced, fully credentialed practitioners who specialize in trauma-informed care.")), /*#__PURE__*/React.createElement("div", {
    className: "iw-team__grid"
  }, people.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.name,
    padding: "none"
  }, /*#__PURE__*/React.createElement("img", {
    className: "iw-team__photo",
    src: p.photo,
    alt: p.name
  }), /*#__PURE__*/React.createElement("div", {
    className: "iw-team__body"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "24px",
      color: "var(--brand)",
      margin: 0
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontWeight: 600,
      color: "var(--brand)",
      fontSize: "14px",
      margin: "6px 0 2px"
    }
  }, p.cred), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--brand)",
      fontSize: "14px",
      margin: "0 0 18px"
    }
  }, p.fmt), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    fullWidth: true
  }, "Book with ", p.name.split(" ")[0]))))), /*#__PURE__*/React.createElement("p", {
    className: "iw-note"
  }, "Portraits are placeholders \u2014 drop in real practitioner photos.")));
}
function Faq() {
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    className: "mw-section iw-faq"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap",
    style: {
      maxWidth: "760px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "iw-center"
  }, /*#__PURE__*/React.createElement(FlourishDivider, {
    width: 100,
    style: {
      margin: "0 auto 18px"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    className: "mw-display-lg"
  }, "Questions, answered")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "32px"
    }
  }, /*#__PURE__*/React.createElement(Accordion, {
    items: FAQS,
    defaultOpen: 0
  }))));
}
function FinalCta() {
  return /*#__PURE__*/React.createElement("section", {
    className: "iw-final"
  }, /*#__PURE__*/React.createElement("div", {
    className: "iw-final__fleuron iw-final__fleuron--tl",
    "aria-hidden": "true"
  }, "\u2766"), /*#__PURE__*/React.createElement("div", {
    className: "iw-final__fleuron iw-final__fleuron--br",
    "aria-hidden": "true"
  }, "\u2766"), /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap iw-final__inner"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Begin when you're ready"), /*#__PURE__*/React.createElement(FlourishDivider, {
    width: 100,
    style: {
      color: "#D1D0CA",
      margin: "16px auto 22px"
    }
  }), /*#__PURE__*/React.createElement("h2", {
    className: "iw-final__title"
  }, "Your healing can start ", /*#__PURE__*/React.createElement("em", null, "now.")), /*#__PURE__*/React.createElement("p", {
    className: "iw-final__sub"
  }, "Book a free discovery call and take the first step toward a life that's no longer run by the past."), /*#__PURE__*/React.createElement(Button, {
    variant: "cream",
    size: "lg"
  }, "Book Your Free Discovery Call"), /*#__PURE__*/React.createElement("p", {
    className: "iw-final__note"
  }, "Inspire Wellness Therapy \xB7 Calgary, AB")));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "iw-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap iw-center"
  }, /*#__PURE__*/React.createElement(FlourishDivider, {
    width: 80,
    style: {
      color: "var(--stone)",
      margin: "0 auto 22px"
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "26px",
      color: "var(--accent)",
      margin: 0
    }
  }, "Inspire Wellness Therapy"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      color: "var(--brand)",
      fontSize: "18px",
      margin: "8px 0 18px"
    }
  }, "Healing doesn't have to take years."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "color-mix(in srgb, var(--accent) 85%, transparent)",
      fontSize: "14px"
    }
  }, "hello@inspirewellnesstherapy.ca \xB7 Calgary, AB")));
}
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "theme-slate iw-app"
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(TrustSignals, null), /*#__PURE__*/React.createElement(PainPoints, null), /*#__PURE__*/React.createElement(Process, null), /*#__PURE__*/React.createElement(Team, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(FinalCta, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/inspire-wellness/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/still-standing/app.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Still Standing Therapy — UI kit (Teal theme)
   Recreation of the Still Standing "Warm Sanctuary" landing page. */
const DS = window.MarketingWellCoreDesignSystem_2f2c2c;
const {
  Button,
  TrustBar,
  SectionHeading,
  AreaCard,
  TherapistCard,
  Card,
  Chip,
  LinkArrow,
  Eyebrow,
  FlourishDivider
} = DS;
const I = {
  teens: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "7",
    r: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 21v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 3.1a3 3 0 0 1 0 5.8M22 21v-1a5 5 0 0 0-3-4.6"
  })),
  heart: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"
  })),
  home: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 10.5 12 3l9 7.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M5 9.5V21h14V9.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M9 21v-6h6v6"
  })),
  shield: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
  })),
  brain: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M17.5 19a4.5 4.5 0 0 0 1-8.9A6 6 0 0 0 6.3 9 4.5 4.5 0 0 0 7 18z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 13v5"
  })),
  leaf: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2.5 8.5-1 13a7 7 0 0 1-6 5z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 22c1.5-6 4-9 8-12"
  })),
  check: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  })),
  car: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 17h14M6 17V9l6-4 6 4v8"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9",
    cy: "13",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "15",
    cy: "13",
    r: "1"
  })),
  badge: /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "7",
    width: "18",
    height: "13",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
  }))
};
const AREAS = [{
  icon: I.teens,
  title: "Counselling for Teens",
  desc: "A safe, judgment-free space for young people navigating school, identity, anxiety, and big emotions."
}, {
  icon: I.heart,
  title: "LGBTQIA2S+",
  desc: "Affirming, inclusive support that honours your identity, relationships, and lived experience."
}, {
  icon: I.home,
  title: "Parenting & Family",
  desc: "Tools to ease conflict, rebuild connection, and navigate the hard parts of raising a family."
}, {
  icon: I.shield,
  title: "Trauma Counselling",
  desc: "Gentle, paced work — including EMDR — to help your nervous system feel safe again."
}, {
  icon: I.brain,
  title: "Anxiety & Depression",
  desc: "Practical, compassionate strategies to quiet the overwhelm and feel more like yourself."
}, {
  icon: I.leaf,
  title: "Grief & Loss",
  desc: "Space to honour what you've lost and find your footing again, at your own pace."
}];
const APPROACHES = ["EMDR", "Cognitive Behavioural Therapy", "Dialectical Behaviour Therapy", "Emotion-Focused Therapy", "Somatic & Nervous-System Work", "Internal Family Systems", "Mindfulness-Based", "Narrative Therapy"];
const TEAM = [{
  name: "Louise Rumble",
  photo: "../../assets/images/team-louise.jpeg",
  credentials: "Registered Clinical Counsellor",
  specialties: "Trauma · Anxiety · Life transitions"
}, {
  name: "Afton Schindel",
  photo: "../../assets/images/team-afton.jpeg",
  credentials: "Registered Clinical Counsellor",
  specialties: "Teens · Family · Self-esteem"
}, {
  name: "Allison Justason",
  photo: "../../assets/images/team-allison.jpeg",
  credentials: "Registered Clinical Counsellor",
  specialties: "Adults · Neurodivergence · Depression"
}, {
  name: "Veronica Morrow",
  photo: "../../assets/images/team-veronica.jpeg",
  credentials: "Registered Clinical Counsellor",
  specialties: "Grief · Relationships · EMDR"
}];
function Nav() {
  return /*#__PURE__*/React.createElement("header", {
    className: "ss-nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ss-nav__inner mw-wrap"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "ss-brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ss-brand__mark"
  }, "S"), /*#__PURE__*/React.createElement("span", {
    className: "ss-brand__wm"
  }, "Still Standing", /*#__PURE__*/React.createElement("small", null, "Therapy \xB7 Maple Ridge"))), /*#__PURE__*/React.createElement("nav", {
    className: "ss-menu"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#areas"
  }, "How We Help"), /*#__PURE__*/React.createElement("a", {
    href: "#team"
  }, "The Team"), /*#__PURE__*/React.createElement("a", {
    href: "#funding"
  }, "Coverage"), /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, "Contact")), /*#__PURE__*/React.createElement("span", {
    className: "ss-phone"
  }, "778.899.5716")));
}
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "ss-hero"
  }, /*#__PURE__*/React.createElement("img", {
    className: "ss-hero__bg",
    src: "../../assets/images/hero-office.jpeg",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "ss-hero__scrim"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap ss-hero__inner"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Registered Clinical Counsellors \xB7 Maple Ridge, BC"), /*#__PURE__*/React.createElement("h1", {
    className: "ss-hero__title"
  }, "Real support, right here when ", /*#__PURE__*/React.createElement("em", null, "life feels like too much")), /*#__PURE__*/React.createElement("p", {
    className: "ss-hero__sub"
  }, "Compassionate, evidence-based counselling for anxiety, trauma, grief, and life's hardest seasons \u2014 grounded in neuroscience and delivered by people who actually get it."), /*#__PURE__*/React.createElement("div", {
    className: "ss-hero__actions"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#contact"
  }, "Book a Free 15-Minute Consult"), /*#__PURE__*/React.createElement(Button, {
    variant: "cream",
    size: "lg",
    href: "#team"
  }, "Meet Our Therapists"))));
}
function Reassurance() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mw-section ss-reassure"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap ss-reassure__grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ss-reassure__img"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/counselling-session.jpeg",
    alt: "A counsellor with a client"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "You're not alone in this"), /*#__PURE__*/React.createElement("h2", {
    className: "mw-display-lg",
    style: {
      marginTop: "14px"
    }
  }, "Whatever you're carrying, ", /*#__PURE__*/React.createElement("span", {
    className: "mw-mark"
  }, "you don't have to carry it alone")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-soft)",
      fontSize: "17px",
      marginTop: "18px",
      lineHeight: 1.7
    }
  }, "Reaching out is hard. Maybe you've been holding it together for everyone else, or things have quietly gotten heavier than you expected. Wherever you are, our counsellors meet you there."), /*#__PURE__*/React.createElement("ul", {
    className: "ss-checklist"
  }, /*#__PURE__*/React.createElement("li", null, I.check, " Registered Clinical Counsellors you can trust"), /*#__PURE__*/React.createElement("li", null, I.check, " Evidence-based approaches, including EMDR"), /*#__PURE__*/React.createElement("li", null, I.check, " A free consult to find the right fit \u2014 before you commit")), /*#__PURE__*/React.createElement(LinkArrow, {
    href: "#team"
  }, "Meet the counsellors"))));
}
function Areas() {
  return /*#__PURE__*/React.createElement("section", {
    id: "areas",
    className: "mw-section ss-areas"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    center: true,
    eyebrow: "How we help",
    title: /*#__PURE__*/React.createElement(React.Fragment, null, "Counselling for ", /*#__PURE__*/React.createElement("em", null, "what you're going through")),
    subtitle: "Whether it surfaced recently or you've lived with it for years, our team supports a wide range of concerns for teens, adults, couples, and families."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ss-areas__grid"
  }, AREAS.map(a => /*#__PURE__*/React.createElement(AreaCard, {
    key: a.title,
    icon: a.icon,
    title: a.title,
    description: a.desc,
    linkLabel: `Explore ${a.title.split(" ")[0]}`
  })))));
}
function Approaches() {
  const [active, setActive] = React.useState({});
  return /*#__PURE__*/React.createElement("section", {
    className: "mw-section ss-approaches"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    center: true,
    eyebrow: "Grounded in evidence",
    title: "Approaches that actually work",
    subtitle: "We use proven, neuroscience-informed modalities \u2014 and tailor them to you, never the other way around."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ss-chips"
  }, APPROACHES.map((a, i) => i === 0 ? /*#__PURE__*/React.createElement(Chip, {
    key: a,
    star: true
  }, a) : /*#__PURE__*/React.createElement(Chip, {
    key: a,
    active: !!active[a],
    onClick: () => setActive(s => ({
      ...s,
      [a]: !s[a]
    }))
  }, a)))));
}
function Funding() {
  const cards = [{
    icon: I.shield,
    title: "Crime Victim Assistance (CVAP)",
    desc: "Approved counsellors for the B.C. CVAP. If you're a victim, family member, or witness to a crime, your full counselling fee may be covered."
  }, {
    icon: I.car,
    title: "ICBC Direct Billing",
    desc: "Injured in a motor-vehicle accident? Our counsellors are trained in accident-related trauma and bill ICBC directly — no upfront cost."
  }, {
    icon: I.badge,
    title: "EFAP / EAP",
    desc: "Many Employee & Family Assistance Programs let you choose your own counsellor. We work with most providers."
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "funding",
    className: "mw-section ss-funding"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    center: true,
    eyebrow: "Coverage & billing",
    title: "Therapy that may already be covered",
    subtitle: "Many clients pay little or nothing out of pocket. We bill these programs directly so you can focus on healing."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ss-fund__grid"
  }, cards.map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.title,
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mwc-medallion"
  }, c.icon), /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "20px",
      color: "var(--brand-strong)",
      margin: "0 0 10px"
    }
  }, c.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "14.5px",
      color: "var(--text-soft)",
      lineHeight: 1.6,
      margin: 0
    }
  }, c.desc))))));
}
function Team() {
  return /*#__PURE__*/React.createElement("section", {
    id: "team",
    className: "mw-section ss-team"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap"
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    center: true,
    eyebrow: "Meet the team",
    title: "Find the counsellor who fits",
    subtitle: "Every one of our Registered Clinical Counsellors offers a free 15-minute consult, so you can feel the fit before booking."
  }), /*#__PURE__*/React.createElement("div", {
    className: "ss-team__grid"
  }, TEAM.map(t => /*#__PURE__*/React.createElement(TherapistCard, _extends({
    key: t.name
  }, t, {
    primaryLabel: "Book Consult",
    secondaryLabel: "Learn More"
  }))))));
}
function CtaBand() {
  return /*#__PURE__*/React.createElement("section", {
    className: "mw-section ss-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    className: "ss-cta__title"
  }, "Ready to take the first step?"), /*#__PURE__*/React.createElement("p", {
    className: "ss-cta__sub"
  }, "Book a free 15-minute phone consultation. We'll talk about what's going on, answer your questions, and help you find the right counsellor \u2014 no pressure, no commitment."), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    href: "#contact"
  }, "Book a Free 15-Minute Consult"), /*#__PURE__*/React.createElement("p", {
    className: "ss-cta__contact"
  }, "Or call / text ", /*#__PURE__*/React.createElement("a", {
    href: "tel:7788995716"
  }, "778.899.5716"))));
}
function Location() {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "mw-section ss-loc"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap ss-loc__grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Visit us"), /*#__PURE__*/React.createElement("h2", {
    className: "mw-display-lg",
    style: {
      marginTop: "14px"
    }
  }, "Counselling in the heart of Maple Ridge"), /*#__PURE__*/React.createElement("dl", {
    className: "ss-loc__dl"
  }, /*#__PURE__*/React.createElement("dt", null, "Address"), /*#__PURE__*/React.createElement("dd", null, "300 \u2013 22420 Dewdney Trunk Road", /*#__PURE__*/React.createElement("br", null), "Maple Ridge, BC V2X 3J5"), /*#__PURE__*/React.createElement("dt", null, "Phone & Text"), /*#__PURE__*/React.createElement("dd", null, "778.899.5716"), /*#__PURE__*/React.createElement("dt", null, "Hours"), /*#__PURE__*/React.createElement("dd", null, "Mon \u2013 Fri \xB7 10:00 a.m. \u2013 5:00 p.m. \xB7 In-person & virtual")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "28px"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "brand",
    size: "lg"
  }, "Book a Free 15-Minute Consult"))), /*#__PURE__*/React.createElement("div", {
    className: "ss-loc__img"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/images/location.jpeg",
    alt: "The office"
  }))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "ss-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap ss-footer__top"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "ss-brand"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ss-brand__mark"
  }, "S"), /*#__PURE__*/React.createElement("span", {
    className: "ss-brand__wm",
    style: {
      color: "#fff"
    }
  }, "Still Standing")), /*#__PURE__*/React.createElement("p", null, "Registered Clinical Counsellors using neuroscience and evidence-based therapy to support the Maple Ridge community.")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Explore"), /*#__PURE__*/React.createElement("a", {
    href: "#areas"
  }, "How We Help"), /*#__PURE__*/React.createElement("a", {
    href: "#team"
  }, "The Team"), /*#__PURE__*/React.createElement("a", {
    href: "#funding"
  }, "Coverage"), /*#__PURE__*/React.createElement("a", {
    href: "#contact"
  }, "Contact")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h5", null, "Get in touch"), /*#__PURE__*/React.createElement("a", {
    href: "tel:7788995716"
  }, "778.899.5716"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "hello@stillstandingtherapy.ca"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "300 \u2013 22420 Dewdney Trunk Rd"))), /*#__PURE__*/React.createElement("div", {
    className: "mw-wrap ss-footer__bar"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Still Standing Therapy."), /*#__PURE__*/React.createElement("span", null, "CVAP & ICBC Direct Billing \xB7 Privacy \xB7 Accessibility")));
}
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "theme-teal ss-app"
  }, /*#__PURE__*/React.createElement(Nav, null), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(TrustBar, {
    items: ["Free 15-minute phone consult", "ICBC & CVAP direct billing", "In-person & virtual sessions", "Neuroscience-informed care"]
  }), /*#__PURE__*/React.createElement(Reassurance, null), /*#__PURE__*/React.createElement(Areas, null), /*#__PURE__*/React.createElement(Approaches, null), /*#__PURE__*/React.createElement(Funding, null), /*#__PURE__*/React.createElement(Team, null), /*#__PURE__*/React.createElement(CtaBand, null), /*#__PURE__*/React.createElement(Location, null), /*#__PURE__*/React.createElement(Footer, null));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/still-standing/app.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.LinkArrow = __ds_scope.LinkArrow;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.PillChoice = __ds_scope.PillChoice;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.AreaCard = __ds_scope.AreaCard;

__ds_ns.TherapistCard = __ds_scope.TherapistCard;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.FlourishDivider = __ds_scope.FlourishDivider;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.TrustBar = __ds_scope.TrustBar;

})();
