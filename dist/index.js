(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".van-checkbox-group--horizontal,.van-radio-group--horizontal{gap:10px 0;justify-content:flex-end}.field-switch .van-field__right-icon{height:24px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { inject as Pt, getCurrentInstance as ze, onUnmounted as qt, computed as z, ref as L, reactive as Se, onMounted as ke, nextTick as ee, onActivated as Et, onDeactivated as it, isRef as Na, watch as U, provide as rt, unref as wt, isVNode as Ln, defineComponent as X, createVNode as r, watchEffect as La, mergeProps as K, onBeforeUnmount as ct, Transition as Hn, withDirectives as Le, vShow as Ke, Teleport as Ha, Fragment as Be, createTextVNode as Yn, createApp as Ya, onBeforeUpdate as ja, resolveDirective as Ua } from "vue";
import { u as $r } from "./utils-03f79311.js";
const ie = (e) => e != null, ot = (e) => typeof e == "function", Fe = (e) => e !== null && typeof e == "object", Jt = (e) => Fe(e) && ot(e.then) && ot(e.catch), Xe = (e) => Object.prototype.toString.call(e) === "[object Date]" && !Number.isNaN(e.getTime()), jn = (e) => typeof e == "number" || /^\d+(\.\d+)?$/.test(e), Wa = () => Ze ? /ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()) : !1;
function Ka() {
}
const oe = Object.assign, Ze = typeof window < "u";
function gn(e, t) {
  const n = t.split(".");
  let a = e;
  return n.forEach((i) => {
    var o;
    a = Fe(a) && (o = a[i]) != null ? o : "";
  }), a;
}
function he(e, t, n) {
  return t.reduce((a, i) => ((!n || e[i] !== void 0) && (a[i] = e[i]), a), {});
}
const St = (e) => Array.isArray(e) ? e : [e], ve = null, j = [Number, String], W = {
  type: Boolean,
  default: !0
}, me = (e) => ({
  type: e,
  required: !0
}), qe = () => ({
  type: Array,
  default: () => []
}), Qt = (e) => ({
  type: Number,
  default: e
}), te = (e) => ({
  type: j,
  default: e
}), O = (e) => ({
  type: String,
  default: e
});
var st = typeof window < "u";
function Ae(e) {
  return st ? requestAnimationFrame(e) : -1;
}
function at(e) {
  Ae(() => Ae(e));
}
var Xa = (e) => e === window, hn = (e, t) => ({
  top: 0,
  left: 0,
  right: e,
  bottom: t,
  width: e,
  height: t
}), Te = (e) => {
  const t = wt(e);
  if (Xa(t)) {
    const n = t.innerWidth, a = t.innerHeight;
    return hn(n, a);
  }
  return t != null && t.getBoundingClientRect ? t.getBoundingClientRect() : hn(0, 0);
};
function Ga(e = !1) {
  const t = L(e);
  return [t, (a = !t.value) => {
    t.value = a;
  }];
}
function Je(e) {
  const t = Pt(e, null);
  if (t) {
    const n = ze(), { link: a, unlink: i, internalChildren: o } = t;
    a(n), qt(() => i(n));
    const c = z(() => o.indexOf(n));
    return {
      parent: t,
      index: c
    };
  }
  return {
    parent: null,
    index: L(-1)
  };
}
function Za(e) {
  const t = [], n = (a) => {
    Array.isArray(a) && a.forEach((i) => {
      var o;
      Ln(i) && (t.push(i), (o = i.component) != null && o.subTree && (t.push(i.component.subTree), n(i.component.subTree.children)), i.children && n(i.children));
    });
  };
  return n(e), t;
}
var bn = (e, t) => {
  const n = e.indexOf(t);
  return n === -1 ? e.findIndex(
    (a) => t.key !== void 0 && t.key !== null && a.type === t.type && a.key === t.key
  ) : n;
};
function qa(e, t, n) {
  const a = Za(e.subTree.children);
  n.sort(
    (o, c) => bn(a, o.vnode) - bn(a, c.vnode)
  );
  const i = n.map((o) => o.proxy);
  t.sort((o, c) => {
    const f = i.indexOf(o), d = i.indexOf(c);
    return f - d;
  });
}
function Qe(e) {
  const t = Se([]), n = Se([]), a = ze();
  return {
    children: t,
    linkChildren: (o) => {
      rt(
        e,
        Object.assign(
          {
            link: (d) => {
              d.proxy && (n.push(d), t.push(d.proxy), qa(a, t, n));
            },
            unlink: (d) => {
              const s = n.indexOf(d);
              t.splice(s, 1), n.splice(s, 1);
            },
            children: t,
            internalChildren: n
          },
          o
        )
      );
    }
  };
}
function ut(e) {
  let t;
  ke(() => {
    e(), ee(() => {
      t = !0;
    });
  }), Et(() => {
    t && e();
  });
}
function _e(e, t, n = {}) {
  if (!st)
    return;
  const { target: a = window, passive: i = !1, capture: o = !1 } = n;
  let c = !1, f;
  const d = (h) => {
    if (c)
      return;
    const l = wt(h);
    l && !f && (l.addEventListener(e, t, {
      capture: o,
      passive: i
    }), f = !0);
  }, s = (h) => {
    if (c)
      return;
    const l = wt(h);
    l && f && (l.removeEventListener(e, t, o), f = !1);
  };
  qt(() => s(a)), it(() => s(a)), ut(() => d(a));
  let u;
  return Na(a) && (u = U(a, (h, l) => {
    s(l), d(h);
  })), () => {
    u == null || u(), s(a), c = !0;
  };
}
var ft, At;
function Ja() {
  if (!ft && (ft = L(0), At = L(0), st)) {
    const e = () => {
      ft.value = window.innerWidth, At.value = window.innerHeight;
    };
    e(), window.addEventListener("resize", e, { passive: !0 }), window.addEventListener("orientationchange", e, { passive: !0 });
  }
  return { width: ft, height: At };
}
var Qa = /scroll|auto|overlay/i, Un = st ? window : void 0;
function Oa(e) {
  return e.tagName !== "HTML" && e.tagName !== "BODY" && e.nodeType === 1;
}
function Wn(e, t = Un) {
  let n = e;
  for (; n && n !== t && Oa(n); ) {
    const { overflowY: a } = window.getComputedStyle(n);
    if (Qa.test(a))
      return n;
    n = n.parentNode;
  }
  return t;
}
function Kn(e, t = Un) {
  const n = L();
  return ke(() => {
    e.value && (n.value = Wn(e.value, t));
  }), n;
}
var vt;
function pa() {
  if (!vt && (vt = L("visible"), st)) {
    const e = () => {
      vt.value = document.hidden ? "hidden" : "visible";
    };
    e(), window.addEventListener("visibilitychange", e);
  }
  return vt;
}
var Xn = Symbol("van-field");
function Oe(e) {
  const t = Pt(Xn, null);
  t && !t.customValue.value && (t.customValue.value = e, U(e, () => {
    t.resetValidation(), t.validateWithTrigger("onChange");
  }));
}
function Bt(e) {
  const t = "scrollTop" in e ? e.scrollTop : e.pageYOffset;
  return Math.max(t, 0);
}
function xt(e, t) {
  "scrollTop" in e ? e.scrollTop = t : e.scrollTo(e.scrollX, t);
}
function Ot() {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}
function pt(e) {
  xt(window, e), xt(document.body, e);
}
function yn(e, t) {
  if (e === window)
    return 0;
  const n = t ? Bt(t) : Ot();
  return Te(e).top + n;
}
const el = Wa();
function Gn() {
  el && pt(Ot());
}
const tl = (e) => e.stopPropagation();
function ye(e, t) {
  (typeof e.cancelable != "boolean" || e.cancelable) && e.preventDefault(), t && tl(e);
}
function Ct(e) {
  const t = wt(e);
  if (!t)
    return !1;
  const n = window.getComputedStyle(t), a = n.display === "none", i = t.offsetParent === null && n.position !== "fixed";
  return a || i;
}
const { width: Vt, height: en } = Ja();
function ce(e) {
  if (ie(e))
    return jn(e) ? `${e}px` : String(e);
}
function _t(e) {
  if (ie(e)) {
    if (Array.isArray(e))
      return {
        width: ce(e[0]),
        height: ce(e[1])
      };
    const t = ce(e);
    return {
      width: t,
      height: t
    };
  }
}
function Zn(e) {
  const t = {};
  return e !== void 0 && (t.zIndex = +e), t;
}
let zt;
function nl() {
  if (!zt) {
    const e = document.documentElement, t = e.style.fontSize || window.getComputedStyle(e).fontSize;
    zt = parseFloat(t);
  }
  return zt;
}
function al(e) {
  return e = e.replace(/rem/g, ""), +e * nl();
}
function ll(e) {
  return e = e.replace(/vw/g, ""), +e * Vt.value / 100;
}
function ol(e) {
  return e = e.replace(/vh/g, ""), +e * en.value / 100;
}
function tn(e) {
  if (typeof e == "number")
    return e;
  if (Ze) {
    if (e.includes("rem"))
      return al(e);
    if (e.includes("vw"))
      return ll(e);
    if (e.includes("vh"))
      return ol(e);
  }
  return parseFloat(e);
}
const il = /-(\w)/g, qn = (e) => e.replace(il, (t, n) => n.toUpperCase()), rl = (e) => e.replace(/([A-Z])/g, "-$1").toLowerCase().replace(/^-/, "");
function De(e, t = 2) {
  let n = e + "";
  for (; n.length < t; )
    n = "0" + n;
  return n;
}
const be = (e, t, n) => Math.min(Math.max(e, t), n);
function wn(e, t, n) {
  const a = e.indexOf(t);
  return a === -1 ? e : t === "-" && a !== 0 ? e.slice(0, a) : e.slice(0, a + 1) + e.slice(a).replace(n, "");
}
function Ut(e, t = !0, n = !0) {
  t ? e = wn(e, ".", /\./g) : e = e.split(".")[0], n ? e = wn(e, "-", /-/g) : e = e.replace(/-/, "");
  const a = t ? /[^-0-9.]/g : /[^-0-9]/g;
  return e.replace(a, "");
}
function cl(e, t) {
  return Math.round((e + t) * 1e10) / 1e10;
}
const { hasOwnProperty: sl } = Object.prototype;
function ul(e, t, n) {
  const a = t[n];
  ie(a) && (!sl.call(e, n) || !Fe(a) ? e[n] = a : e[n] = Jn(Object(e[n]), a));
}
function Jn(e, t) {
  return Object.keys(t).forEach((n) => {
    ul(e, t, n);
  }), e;
}
var dl = {
  name: "姓名",
  tel: "电话",
  save: "保存",
  confirm: "确认",
  cancel: "取消",
  delete: "删除",
  loading: "加载中...",
  noCoupon: "暂无优惠券",
  nameEmpty: "请填写姓名",
  addContact: "添加联系人",
  telInvalid: "请填写正确的电话",
  vanCalendar: {
    end: "结束",
    start: "开始",
    title: "日期选择",
    weekdays: ["日", "一", "二", "三", "四", "五", "六"],
    monthTitle: (e, t) => `${e}年${t}月`,
    rangePrompt: (e) => `最多选择 ${e} 天`
  },
  vanCascader: {
    select: "请选择"
  },
  vanPagination: {
    prev: "上一页",
    next: "下一页"
  },
  vanPullRefresh: {
    pulling: "下拉即可刷新...",
    loosing: "释放即可刷新..."
  },
  vanSubmitBar: {
    label: "合计:"
  },
  vanCoupon: {
    unlimited: "无门槛",
    discount: (e) => `${e}折`,
    condition: (e) => `满${e}元可用`
  },
  vanCouponCell: {
    title: "优惠券",
    count: (e) => `${e}张可用`
  },
  vanCouponList: {
    exchange: "兑换",
    close: "不使用",
    enable: "可用",
    disabled: "不可用",
    placeholder: "输入优惠码"
  },
  vanAddressEdit: {
    area: "地区",
    postal: "邮政编码",
    areaEmpty: "请选择地区",
    addressEmpty: "请填写详细地址",
    postalEmpty: "邮政编码不正确",
    addressDetail: "详细地址",
    defaultAddress: "设为默认收货地址"
  },
  vanAddressList: {
    add: "新增地址"
  }
};
const Sn = L("zh-CN"), xn = Se({
  "zh-CN": dl
}), fl = {
  messages() {
    return xn[Sn.value];
  },
  use(e, t) {
    Sn.value = e, this.add({ [e]: t });
  },
  add(e = {}) {
    Jn(xn, e);
  }
};
var vl = fl;
function ml(e) {
  const t = qn(e) + ".";
  return (n, ...a) => {
    const i = vl.messages(), o = gn(i, t + n) || gn(i, n);
    return ot(o) ? o(...a) : o;
  };
}
function Wt(e, t) {
  return t ? typeof t == "string" ? ` ${e}--${t}` : Array.isArray(t) ? t.reduce(
    (n, a) => n + Wt(e, a),
    ""
  ) : Object.keys(t).reduce(
    (n, a) => n + (t[a] ? Wt(e, a) : ""),
    ""
  ) : "";
}
function gl(e) {
  return (t, n) => (t && typeof t != "string" && (n = t, t = ""), t = t ? `${e}__${t}` : e, `${t}${Wt(t, n)}`);
}
function Z(e) {
  const t = `van-${e}`;
  return [
    t,
    gl(t),
    ml(t)
  ];
}
const nn = "van-hairline", hl = `${nn}--surround`, Qn = `${nn}--top-bottom`, bl = `${nn}-unset--top-bottom`, He = "van-haptics-feedback", On = Symbol("van-form");
function dt(e, {
  args: t = [],
  done: n,
  canceled: a
}) {
  if (e) {
    const i = e.apply(null, t);
    Jt(i) ? i.then((o) => {
      o ? n() : a && a();
    }).catch(Ka) : i ? n() : a && a();
  } else
    n();
}
function ne(e) {
  return e.install = (t) => {
    const { name: n } = e;
    n && (t.component(n, e), t.component(qn(`-${n}`), e));
  }, e;
}
const pn = Symbol();
function an(e) {
  const t = Pt(pn, null);
  t && U(t, (n) => {
    n && e();
  });
}
const yl = (e, t) => {
  const n = L(), a = () => {
    n.value = Te(e).height;
  };
  return ke(() => {
    if (ee(a), t)
      for (let i = 1; i <= 3; i++)
        setTimeout(a, 100 * i);
  }), an(() => ee(a)), n;
};
function se(e) {
  const t = ze();
  t && oe(t.proxy, e);
}
const ln = {
  to: [String, Object],
  url: String,
  replace: Boolean
};
function ea({
  to: e,
  url: t,
  replace: n,
  $router: a
}) {
  e && a ? a[n ? "replace" : "push"](e) : t && (n ? location.replace(t) : location.href = t);
}
function ta() {
  const e = ze().proxy;
  return () => ea(e);
}
const [wl, Cn] = Z("badge"), Sl = {
  dot: Boolean,
  max: j,
  tag: O("div"),
  color: String,
  offset: Array,
  content: j,
  showZero: W,
  position: O("top-right")
};
var xl = X({
  name: wl,
  props: Sl,
  setup(e, {
    slots: t
  }) {
    const n = () => {
      if (t.content)
        return !0;
      const {
        content: c,
        showZero: f
      } = e;
      return ie(c) && c !== "" && (f || c !== 0 && c !== "0");
    }, a = () => {
      const {
        dot: c,
        max: f,
        content: d
      } = e;
      if (!c && n())
        return t.content ? t.content() : ie(f) && jn(d) && +d > f ? `${f}+` : d;
    }, i = z(() => {
      const c = {
        background: e.color
      };
      if (e.offset) {
        const [f, d] = e.offset;
        t.default ? (c.top = ce(d), typeof f == "number" ? c.right = ce(-f) : c.right = f.startsWith("-") ? f.replace("-", "") : `-${f}`) : (c.marginTop = ce(d), c.marginLeft = ce(f));
      }
      return c;
    }), o = () => {
      if (n() || e.dot)
        return r("div", {
          class: Cn([e.position, {
            dot: e.dot,
            fixed: !!t.default
          }]),
          style: i.value
        }, [a()]);
    };
    return () => {
      if (t.default) {
        const {
          tag: c
        } = e;
        return r(c, {
          class: Cn("wrapper")
        }, {
          default: () => [t.default(), o()]
        });
      }
      return o();
    };
  }
});
const na = ne(xl);
let aa = 2e3;
const Cl = () => ++aa, kl = (e) => {
  aa = e;
}, [la, Il] = Z("config-provider"), oa = Symbol(la), Tl = {
  tag: O("div"),
  zIndex: Number,
  themeVars: Object,
  iconPrefix: String
};
function Dl(e) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    t[`--van-${rl(n)}`] = e[n];
  }), t;
}
X({
  name: la,
  props: Tl,
  setup(e, {
    slots: t
  }) {
    const n = z(() => {
      if (e.themeVars)
        return Dl(e.themeVars);
    });
    return rt(oa, e), La(() => {
      e.zIndex !== void 0 && kl(e.zIndex);
    }), () => r(e.tag, {
      class: Il(),
      style: n.value
    }, {
      default: () => {
        var a;
        return [(a = t.default) == null ? void 0 : a.call(t)];
      }
    });
  }
});
const [$l, kn] = Z("icon"), Pl = (e) => e == null ? void 0 : e.includes("/"), El = {
  dot: Boolean,
  tag: O("i"),
  name: String,
  size: j,
  badge: j,
  color: String,
  badgeProps: Object,
  classPrefix: String
};
var Bl = X({
  name: $l,
  props: El,
  setup(e, {
    slots: t
  }) {
    const n = Pt(oa, null), a = z(() => e.classPrefix || (n == null ? void 0 : n.iconPrefix) || kn());
    return () => {
      const {
        tag: i,
        dot: o,
        name: c,
        size: f,
        badge: d,
        color: s
      } = e, u = Pl(c);
      return r(na, K({
        dot: o,
        tag: i,
        class: [a.value, u ? "" : `${a.value}-${c}`],
        style: {
          color: s,
          fontSize: ce(f)
        },
        content: d
      }, e.badgeProps), {
        default: () => {
          var h;
          return [(h = t.default) == null ? void 0 : h.call(t), u && r("img", {
            class: kn("image"),
            src: c
          }, null)];
        }
      });
    };
  }
});
const ge = ne(Bl), [Vl, lt] = Z("loading"), _l = Array(12).fill(null).map((e, t) => r("i", {
  class: lt("line", String(t + 1))
}, null)), Ml = r("svg", {
  class: lt("circular"),
  viewBox: "25 25 50 50"
}, [r("circle", {
  cx: "50",
  cy: "50",
  r: "20",
  fill: "none"
}, null)]), Rl = {
  size: j,
  type: O("circular"),
  color: String,
  vertical: Boolean,
  textSize: j,
  textColor: String
};
var Al = X({
  name: Vl,
  props: Rl,
  setup(e, {
    slots: t
  }) {
    const n = z(() => oe({
      color: e.color
    }, _t(e.size))), a = () => {
      var i;
      if (t.default)
        return r("span", {
          class: lt("text"),
          style: {
            fontSize: ce(e.textSize),
            color: (i = e.textColor) != null ? i : e.color
          }
        }, [t.default()]);
    };
    return () => {
      const {
        type: i,
        vertical: o
      } = e;
      return r("div", {
        class: lt([i, {
          vertical: o
        }]),
        "aria-live": "polite",
        "aria-busy": !0
      }, [r("span", {
        class: lt("spinner", i),
        style: n.value
      }, [i === "spinner" ? _l : Ml]), a()]);
    };
  }
});
const pe = ne(Al), [zl, Ye] = Z("button"), Fl = oe({}, ln, {
  tag: O("button"),
  text: String,
  icon: String,
  type: O("default"),
  size: O("normal"),
  color: String,
  block: Boolean,
  plain: Boolean,
  round: Boolean,
  square: Boolean,
  loading: Boolean,
  hairline: Boolean,
  disabled: Boolean,
  iconPrefix: String,
  nativeType: O("button"),
  loadingSize: j,
  loadingText: String,
  loadingType: String,
  iconPosition: O("left")
});
var Nl = X({
  name: zl,
  props: Fl,
  emits: ["click"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const a = ta(), i = () => n.loading ? n.loading() : r(pe, {
      size: e.loadingSize,
      type: e.loadingType,
      class: Ye("loading")
    }, null), o = () => {
      if (e.loading)
        return i();
      if (n.icon)
        return r("div", {
          class: Ye("icon")
        }, [n.icon()]);
      if (e.icon)
        return r(ge, {
          name: e.icon,
          class: Ye("icon"),
          classPrefix: e.iconPrefix
        }, null);
    }, c = () => {
      let s;
      if (e.loading ? s = e.loadingText : s = n.default ? n.default() : e.text, s)
        return r("span", {
          class: Ye("text")
        }, [s]);
    }, f = () => {
      const {
        color: s,
        plain: u
      } = e;
      if (s) {
        const h = {
          color: u ? s : "white"
        };
        return u || (h.background = s), s.includes("gradient") ? h.border = 0 : h.borderColor = s, h;
      }
    }, d = (s) => {
      e.loading ? ye(s) : e.disabled || (t("click", s), a());
    };
    return () => {
      const {
        tag: s,
        type: u,
        size: h,
        block: l,
        round: $,
        plain: k,
        square: b,
        loading: v,
        disabled: D,
        hairline: m,
        nativeType: y,
        iconPosition: w
      } = e, S = [Ye([u, h, {
        plain: k,
        block: l,
        round: $,
        square: b,
        loading: v,
        disabled: D,
        hairline: m
      }]), {
        [hl]: m
      }];
      return r(s, {
        type: y,
        class: S,
        style: f(),
        disabled: D,
        onClick: d
      }, {
        default: () => [r("div", {
          class: Ye("content")
        }, [w === "left" && o(), c(), w === "right" && o()])]
      });
    };
  }
});
const ia = ne(Nl), Ll = {
  show: Boolean,
  zIndex: j,
  overlay: W,
  duration: j,
  teleport: [String, Object],
  lockScroll: W,
  lazyRender: W,
  beforeClose: Function,
  overlayStyle: Object,
  overlayClass: ve,
  transitionAppear: Boolean,
  closeOnClickOverlay: W
};
function Hl(e, t) {
  return e > t ? "horizontal" : t > e ? "vertical" : "";
}
function Mt() {
  const e = L(0), t = L(0), n = L(0), a = L(0), i = L(0), o = L(0), c = L(""), f = () => c.value === "vertical", d = () => c.value === "horizontal", s = () => {
    n.value = 0, a.value = 0, i.value = 0, o.value = 0, c.value = "";
  };
  return {
    move: (l) => {
      const $ = l.touches[0];
      n.value = ($.clientX < 0 ? 0 : $.clientX) - e.value, a.value = $.clientY - t.value, i.value = Math.abs(n.value), o.value = Math.abs(a.value);
      const k = 10;
      (!c.value || i.value < k && o.value < k) && (c.value = Hl(i.value, o.value));
    },
    start: (l) => {
      s(), e.value = l.touches[0].clientX, t.value = l.touches[0].clientY;
    },
    reset: s,
    startX: e,
    startY: t,
    deltaX: n,
    deltaY: a,
    offsetX: i,
    offsetY: o,
    direction: c,
    isVertical: f,
    isHorizontal: d
  };
}
let et = 0;
const In = "van-overflow-hidden";
function Yl(e, t) {
  const n = Mt(), a = "01", i = "10", o = (u) => {
    n.move(u);
    const h = n.deltaY.value > 0 ? i : a, l = Wn(
      u.target,
      e.value
    ), { scrollHeight: $, offsetHeight: k, scrollTop: b } = l;
    let v = "11";
    b === 0 ? v = k >= $ ? "00" : "01" : b + k >= $ && (v = "10"), v !== "11" && n.isVertical() && !(parseInt(v, 2) & parseInt(h, 2)) && ye(u, !0);
  }, c = () => {
    document.addEventListener("touchstart", n.start), document.addEventListener("touchmove", o, { passive: !1 }), et || document.body.classList.add(In), et++;
  }, f = () => {
    et && (document.removeEventListener("touchstart", n.start), document.removeEventListener("touchmove", o), et--, et || document.body.classList.remove(In));
  }, d = () => t() && c(), s = () => t() && f();
  ut(d), it(s), ct(s), U(t, (u) => {
    u ? c() : f();
  });
}
function ra(e) {
  const t = L(!1);
  return U(
    e,
    (n) => {
      n && (t.value = n);
    },
    { immediate: !0 }
  ), (n) => () => t.value ? n() : null;
}
const [jl, Ul] = Z("overlay"), Wl = {
  show: Boolean,
  zIndex: j,
  duration: j,
  className: ve,
  lockScroll: W,
  lazyRender: W,
  customStyle: Object
};
var Kl = X({
  name: jl,
  props: Wl,
  setup(e, {
    slots: t
  }) {
    const n = L(), a = ra(() => e.show || !e.lazyRender), i = (c) => {
      e.lockScroll && ye(c, !0);
    }, o = a(() => {
      var c;
      const f = oe(Zn(e.zIndex), e.customStyle);
      return ie(e.duration) && (f.animationDuration = `${e.duration}s`), Le(r("div", {
        ref: n,
        style: f,
        class: [Ul(), e.className]
      }, [(c = t.default) == null ? void 0 : c.call(t)]), [[Ke, e.show]]);
    });
    return _e("touchmove", i, {
      target: n
    }), () => r(Hn, {
      name: "van-fade",
      appear: !0
    }, {
      default: o
    });
  }
});
const Xl = ne(Kl), Gl = oe({}, Ll, {
  round: Boolean,
  position: O("center"),
  closeIcon: O("cross"),
  closeable: Boolean,
  transition: String,
  iconPrefix: String,
  closeOnPopstate: Boolean,
  closeIconPosition: O("top-right"),
  safeAreaInsetTop: Boolean,
  safeAreaInsetBottom: Boolean
}), [Zl, Tn] = Z("popup");
var ql = X({
  name: Zl,
  inheritAttrs: !1,
  props: Gl,
  emits: ["open", "close", "opened", "closed", "keydown", "update:show", "click-overlay", "click-close-icon"],
  setup(e, {
    emit: t,
    attrs: n,
    slots: a
  }) {
    let i, o;
    const c = L(), f = L(), d = ra(() => e.show || !e.lazyRender), s = z(() => {
      const S = {
        zIndex: c.value
      };
      if (ie(e.duration)) {
        const P = e.position === "center" ? "animationDuration" : "transitionDuration";
        S[P] = `${e.duration}s`;
      }
      return S;
    }), u = () => {
      i || (i = !0, c.value = e.zIndex !== void 0 ? +e.zIndex : Cl(), t("open"));
    }, h = () => {
      i && dt(e.beforeClose, {
        done() {
          i = !1, t("close"), t("update:show", !1);
        }
      });
    }, l = (S) => {
      t("click-overlay", S), e.closeOnClickOverlay && h();
    }, $ = () => {
      if (e.overlay)
        return r(Xl, {
          show: e.show,
          class: e.overlayClass,
          zIndex: c.value,
          duration: e.duration,
          customStyle: e.overlayStyle,
          role: e.closeOnClickOverlay ? "button" : void 0,
          tabindex: e.closeOnClickOverlay ? 0 : void 0,
          onClick: l
        }, {
          default: a["overlay-content"]
        });
    }, k = (S) => {
      t("click-close-icon", S), h();
    }, b = () => {
      if (e.closeable)
        return r(ge, {
          role: "button",
          tabindex: 0,
          name: e.closeIcon,
          class: [Tn("close-icon", e.closeIconPosition), He],
          classPrefix: e.iconPrefix,
          onClick: k
        }, null);
    }, v = () => t("opened"), D = () => t("closed"), m = (S) => t("keydown", S), y = d(() => {
      var S;
      const {
        round: P,
        position: M,
        safeAreaInsetTop: I,
        safeAreaInsetBottom: C
      } = e;
      return Le(r("div", K({
        ref: f,
        style: s.value,
        role: "dialog",
        tabindex: 0,
        class: [Tn({
          round: P,
          [M]: M
        }), {
          "van-safe-area-top": I,
          "van-safe-area-bottom": C
        }],
        onKeydown: m
      }, n), [(S = a.default) == null ? void 0 : S.call(a), b()]), [[Ke, e.show]]);
    }), w = () => {
      const {
        position: S,
        transition: P,
        transitionAppear: M
      } = e, I = S === "center" ? "van-fade" : `van-popup-slide-${S}`;
      return r(Hn, {
        name: P || I,
        appear: M,
        onAfterEnter: v,
        onAfterLeave: D
      }, {
        default: y
      });
    };
    return U(() => e.show, (S) => {
      S && !i && (u(), n.tabindex === 0 && ee(() => {
        var P;
        (P = f.value) == null || P.focus();
      })), !S && i && (i = !1, t("close"));
    }), se({
      popupRef: f
    }), Yl(f, () => e.show && e.lockScroll), _e("popstate", () => {
      e.closeOnPopstate && (h(), o = !1);
    }), ke(() => {
      e.show && u();
    }), Et(() => {
      o && (t("update:show", !0), o = !1);
    }), it(() => {
      e.show && e.teleport && (h(), o = !0);
    }), rt(pn, () => e.show), () => e.teleport ? r(Ha, {
      to: e.teleport
    }, {
      default: () => [$(), w()]
    }) : r(Be, null, [$(), w()]);
  }
});
const Ge = ne(ql);
function kt(e) {
  if (!ie(e))
    return e;
  if (Array.isArray(e))
    return e.map((t) => kt(t));
  if (Fe(e)) {
    const t = {};
    return Object.keys(e).forEach((n) => {
      t[n] = kt(e[n]);
    }), t;
  }
  return e;
}
const Dn = 200, $n = 300, Jl = 15, [ca, Ft] = Z("picker-column");
function Ql(e) {
  const {
    transform: t
  } = window.getComputedStyle(e), n = t.slice(7, t.length - 1).split(", ")[5];
  return Number(n);
}
const sa = Symbol(ca), Nt = (e) => Fe(e) && e.disabled;
var Ol = X({
  name: ca,
  props: {
    textKey: me(String),
    readonly: Boolean,
    allowHtml: Boolean,
    className: ve,
    itemHeight: me(Number),
    defaultIndex: Qt(0),
    swipeDuration: me(j),
    initialOptions: qe(),
    visibleItemCount: me(j)
  },
  emits: ["change"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    let a, i, o, c, f;
    const d = L(), s = L(), u = Se({
      index: e.defaultIndex,
      offset: 0,
      duration: 0,
      options: kt(e.initialOptions)
    }), h = Mt(), l = () => u.options.length, $ = () => e.itemHeight * (+e.visibleItemCount - 1) / 2, k = (B) => {
      B = be(B, 0, l());
      for (let F = B; F < l(); F++)
        if (!Nt(u.options[F]))
          return F;
      for (let F = B - 1; F >= 0; F--)
        if (!Nt(u.options[F]))
          return F;
    }, b = (B, F) => {
      B = k(B) || 0;
      const E = -B * e.itemHeight, _ = () => {
        B !== u.index && (u.index = B, F && t("change", B));
      };
      a && E !== u.offset ? f = _ : _(), u.offset = E;
    }, v = (B) => {
      JSON.stringify(B) !== JSON.stringify(u.options) && (u.options = kt(B), b(e.defaultIndex));
    }, D = (B) => {
      a || e.readonly || (f = null, u.duration = Dn, b(B, !0));
    }, m = (B) => Fe(B) && e.textKey in B ? B[e.textKey] : B, y = (B) => be(Math.round(-B / e.itemHeight), 0, l() - 1), w = (B, F) => {
      const E = Math.abs(B / F);
      B = u.offset + E / 3e-3 * (B < 0 ? -1 : 1);
      const _ = y(B);
      u.duration = +e.swipeDuration, b(_, !0);
    }, S = () => {
      a = !1, u.duration = 0, f && (f(), f = null);
    }, P = (B) => {
      if (!e.readonly) {
        if (h.start(B), a) {
          const F = Ql(s.value);
          u.offset = Math.min(0, F - $()), i = u.offset;
        } else
          i = u.offset;
        u.duration = 0, o = Date.now(), c = i, f = null;
      }
    }, M = (B) => {
      if (e.readonly)
        return;
      h.move(B), h.isVertical() && (a = !0, ye(B, !0)), u.offset = be(i + h.deltaY.value, -(l() * e.itemHeight), e.itemHeight);
      const F = Date.now();
      F - o > $n && (o = F, c = u.offset);
    }, I = () => {
      if (e.readonly)
        return;
      const B = u.offset - c, F = Date.now() - o;
      if (F < $n && Math.abs(B) > Jl) {
        w(B, F);
        return;
      }
      const _ = y(u.offset);
      u.duration = Dn, b(_, !0), setTimeout(() => {
        a = !1;
      }, 0);
    }, C = () => {
      const B = {
        height: `${e.itemHeight}px`
      };
      return u.options.map((F, E) => {
        const _ = m(F), G = Nt(F), q = {
          role: "button",
          style: B,
          tabindex: G ? -1 : 0,
          class: Ft("item", {
            disabled: G,
            selected: E === u.index
          }),
          onClick: () => D(E)
        }, re = {
          class: "van-ellipsis",
          [e.allowHtml ? "innerHTML" : "textContent"]: _
        };
        return r("li", q, [n.option ? n.option(F) : r("div", re, null)]);
      });
    }, T = (B) => {
      const {
        options: F
      } = u;
      for (let E = 0; E < F.length; E++)
        if (m(F[E]) === B)
          return b(E);
    }, A = () => u.options[u.index], H = () => u.options.length;
    return b(u.index), Je(sa), se({
      state: u,
      setIndex: b,
      getValue: A,
      setValue: T,
      setOptions: v,
      hasOptions: H,
      stopMomentum: S
    }), U(() => e.initialOptions, v), U(() => e.defaultIndex, (B) => b(B)), _e("touchmove", M, {
      target: d
    }), () => r("div", {
      ref: d,
      class: [Ft(), e.className],
      onTouchstartPassive: P,
      onTouchend: I,
      onTouchcancel: I
    }, [r("ul", {
      ref: s,
      style: {
        transform: `translate3d(0, ${u.offset + $()}px, 0)`,
        transitionDuration: `${u.duration}ms`,
        transitionProperty: u.duration ? "all" : "none"
      },
      class: Ft("wrapper"),
      onTransitionend: S
    }, [C()])]);
  }
});
const [pl, $e, Pn] = Z("picker"), on = {
  title: String,
  loading: Boolean,
  readonly: Boolean,
  allowHtml: Boolean,
  itemHeight: te(44),
  showToolbar: W,
  swipeDuration: te(1e3),
  visibleItemCount: te(6),
  cancelButtonText: String,
  confirmButtonText: String
}, eo = oe({}, on, {
  columns: qe(),
  valueKey: String,
  defaultIndex: te(0),
  toolbarPosition: O("top"),
  columnsFieldNames: Object
});
var to = X({
  name: pl,
  props: eo,
  emits: ["confirm", "cancel", "change"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    process.env.NODE_ENV !== "production" && (n.default && console.warn('[Vant] Picker: "default" slot is deprecated, please use "toolbar" slot instead.'), e.valueKey && console.warn('[Vant] Picker: "valueKey" prop is deprecated, please use "columnsFieldNames" prop instead.'));
    const a = L(!1), i = L(), o = L([]), c = z(() => {
      const {
        columnsFieldNames: x
      } = e;
      return {
        text: (x == null ? void 0 : x.text) || e.valueKey || "text",
        values: (x == null ? void 0 : x.values) || "values",
        children: (x == null ? void 0 : x.children) || "children"
      };
    }), {
      children: f,
      linkChildren: d
    } = Qe(sa);
    d();
    const s = z(() => tn(e.itemHeight)), u = z(() => {
      const x = e.columns[0];
      if (typeof x == "object") {
        if (c.value.children in x)
          return "cascade";
        if (c.value.values in x)
          return "object";
      }
      return "plain";
    }), h = () => {
      var x;
      const V = [];
      let R = {
        [c.value.children]: e.columns
      };
      for (; R && R[c.value.children]; ) {
        const Q = R[c.value.children];
        let ae = (x = R.defaultIndex) != null ? x : +e.defaultIndex;
        for (; Q[ae] && Q[ae].disabled; )
          if (ae < Q.length - 1)
            ae++;
          else {
            ae = 0;
            break;
          }
        V.push({
          [c.value.values]: R[c.value.children],
          className: R.className,
          defaultIndex: ae
        }), R = Q[ae];
      }
      o.value = V;
    }, l = () => {
      const {
        columns: x
      } = e;
      u.value === "plain" ? o.value = [{
        [c.value.values]: x
      }] : u.value === "cascade" ? h() : o.value = x, a.value = o.value.some((V) => V[c.value.values] && V[c.value.values].length !== 0) || f.some((V) => V.hasOptions);
    }, $ = () => f.map((x) => x.state.index), k = (x, V) => {
      const R = f[x];
      R && (R.setOptions(V), a.value = !0);
    }, b = (x) => {
      let V = {
        [c.value.children]: e.columns
      };
      const R = $();
      for (let Q = 0; Q <= x; Q++)
        V = V[c.value.children][R[Q]];
      for (; V && V[c.value.children]; )
        x++, k(x, V[c.value.children]), V = V[c.value.children][V.defaultIndex || 0];
    }, v = (x) => f[x], D = (x) => {
      const V = v(x);
      if (V)
        return V.getValue();
    }, m = (x, V) => {
      const R = v(x);
      R && (R.setValue(V), u.value === "cascade" && b(x));
    }, y = (x) => {
      const V = v(x);
      if (V)
        return V.state.index;
    }, w = (x, V) => {
      const R = v(x);
      R && (R.setIndex(V), u.value === "cascade" && b(x));
    }, S = (x) => {
      const V = v(x);
      if (V)
        return V.state.options;
    }, P = () => f.map((x) => x.getValue()), M = (x) => {
      x.forEach((V, R) => {
        m(R, V);
      });
    }, I = (x) => {
      x.forEach((V, R) => {
        w(R, V);
      });
    }, C = (x) => {
      u.value === "plain" ? t(x, D(0), y(0)) : t(x, P(), $());
    }, T = (x) => {
      u.value === "cascade" && b(x), u.value === "plain" ? t("change", D(0), y(0)) : t("change", P(), x);
    }, A = () => {
      f.forEach((x) => x.stopMomentum()), C("confirm");
    }, H = () => C("cancel"), B = () => {
      if (n.title)
        return n.title();
      if (e.title)
        return r("div", {
          class: [$e("title"), "van-ellipsis"]
        }, [e.title]);
    }, F = () => {
      const x = e.cancelButtonText || Pn("cancel");
      return r("button", {
        type: "button",
        class: [$e("cancel"), He],
        onClick: H
      }, [n.cancel ? n.cancel() : x]);
    }, E = () => {
      const x = e.confirmButtonText || Pn("confirm");
      return r("button", {
        type: "button",
        class: [$e("confirm"), He],
        onClick: A
      }, [n.confirm ? n.confirm() : x]);
    }, _ = () => {
      if (e.showToolbar) {
        const x = n.toolbar || n.default;
        return r("div", {
          class: $e("toolbar")
        }, [x ? x() : [F(), B(), E()]]);
      }
    }, G = () => o.value.map((x, V) => {
      var R;
      return r(Ol, {
        textKey: c.value.text,
        readonly: e.readonly,
        allowHtml: e.allowHtml,
        className: x.className,
        itemHeight: s.value,
        defaultIndex: (R = x.defaultIndex) != null ? R : +e.defaultIndex,
        swipeDuration: e.swipeDuration,
        initialOptions: x[c.value.values],
        visibleItemCount: e.visibleItemCount,
        onChange: () => T(V)
      }, {
        option: n.option
      });
    }), q = (x) => {
      if (a.value) {
        const V = {
          height: `${s.value}px`
        }, R = {
          backgroundSize: `100% ${(x - s.value) / 2}px`
        };
        return [r("div", {
          class: $e("mask"),
          style: R
        }, null), r("div", {
          class: [bl, $e("frame")],
          style: V
        }, null)];
      }
    }, re = () => {
      const x = s.value * +e.visibleItemCount, V = {
        height: `${x}px`
      };
      return r("div", {
        ref: i,
        class: $e("columns"),
        style: V
      }, [G(), q(x)]);
    };
    return U(() => e.columns, l, {
      immediate: !0
    }), _e("touchmove", ye, {
      target: i
    }), se({
      confirm: A,
      getValues: P,
      setValues: M,
      getIndexes: $,
      setIndexes: I,
      getColumnIndex: y,
      setColumnIndex: w,
      getColumnValue: D,
      setColumnValue: m,
      getColumnValues: S,
      setColumnValues: k
    }), () => {
      var x, V;
      return r("div", {
        class: $e()
      }, [e.toolbarPosition === "top" ? _() : null, e.loading ? r(pe, {
        class: $e("loading")
      }, null) : null, (x = n["columns-top"]) == null ? void 0 : x.call(n), re(), (V = n["columns-bottom"]) == null ? void 0 : V.call(n), e.toolbarPosition === "bottom" ? _() : null]);
    };
  }
});
const rn = ne(to), [no, je] = Z("cell"), ua = {
  icon: String,
  size: String,
  title: j,
  value: j,
  label: j,
  center: Boolean,
  isLink: Boolean,
  border: W,
  required: Boolean,
  iconPrefix: String,
  valueClass: ve,
  labelClass: ve,
  titleClass: ve,
  titleStyle: null,
  arrowDirection: String,
  clickable: {
    type: Boolean,
    default: null
  }
}, ao = oe({}, ua, ln);
var lo = X({
  name: no,
  props: ao,
  setup(e, {
    slots: t
  }) {
    const n = ta(), a = () => {
      if (t.label || ie(e.label))
        return r("div", {
          class: [je("label"), e.labelClass]
        }, [t.label ? t.label() : e.label]);
    }, i = () => {
      if (t.title || ie(e.title))
        return r("div", {
          class: [je("title"), e.titleClass],
          style: e.titleStyle
        }, [t.title ? t.title() : r("span", null, [e.title]), a()]);
    }, o = () => {
      const d = t.value || t.default;
      if (d || ie(e.value)) {
        const u = t.title || ie(e.title);
        return r("div", {
          class: [je("value", {
            alone: !u
          }), e.valueClass]
        }, [d ? d() : r("span", null, [e.value])]);
      }
    }, c = () => {
      if (t.icon)
        return t.icon();
      if (e.icon)
        return r(ge, {
          name: e.icon,
          class: je("left-icon"),
          classPrefix: e.iconPrefix
        }, null);
    }, f = () => {
      if (t["right-icon"])
        return t["right-icon"]();
      if (e.isLink) {
        const d = e.arrowDirection && e.arrowDirection !== "right" ? `arrow-${e.arrowDirection}` : "arrow";
        return r(ge, {
          name: d,
          class: je("right-icon")
        }, null);
      }
    };
    return () => {
      var d, s;
      const {
        size: u,
        center: h,
        border: l,
        isLink: $,
        required: k
      } = e, b = (d = e.clickable) != null ? d : $, v = {
        center: h,
        required: k,
        clickable: b,
        borderless: !l
      };
      return u && (v[u] = !!u), r("div", {
        class: je(v),
        role: b ? "button" : void 0,
        tabindex: b ? 0 : void 0,
        onClick: n
      }, [c(), i(), o(), f(), (s = t.extra) == null ? void 0 : s.call(t)]);
    };
  }
});
const oo = ne(lo), [io, ro] = Z("form"), co = {
  colon: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  showError: Boolean,
  labelWidth: j,
  labelAlign: String,
  inputAlign: String,
  scrollToError: Boolean,
  validateFirst: Boolean,
  submitOnEnter: W,
  showErrorMessage: W,
  errorMessageAlign: String,
  validateTrigger: {
    type: [String, Array],
    default: "onBlur"
  }
};
var so = X({
  name: io,
  props: co,
  emits: ["submit", "failed"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      children: a,
      linkChildren: i
    } = Qe(On), o = (v) => v ? a.filter((D) => v.includes(D.name)) : a, c = (v) => new Promise((D, m) => {
      const y = [];
      o(v).reduce((S, P) => S.then(() => {
        if (!y.length)
          return P.validate().then((M) => {
            M && y.push(M);
          });
      }), Promise.resolve()).then(() => {
        y.length ? m(y) : D();
      });
    }), f = (v) => new Promise((D, m) => {
      const y = o(v);
      Promise.all(y.map((w) => w.validate())).then((w) => {
        w = w.filter(Boolean), w.length ? m(w) : D();
      });
    }), d = (v) => {
      const D = a.find((m) => m.name === v);
      return D ? new Promise((m, y) => {
        D.validate().then((w) => {
          w ? y(w) : m();
        });
      }) : Promise.reject();
    }, s = (v) => typeof v == "string" ? d(v) : e.validateFirst ? c(v) : f(v), u = (v) => {
      typeof v == "string" && (v = [v]), o(v).forEach((m) => {
        m.resetValidation();
      });
    }, h = () => a.reduce((v, D) => (v[D.name] = D.getValidationStatus(), v), {}), l = (v, D) => {
      a.some((m) => m.name === v ? (m.$el.scrollIntoView(D), !0) : !1);
    }, $ = () => a.reduce((v, D) => (v[D.name] = D.formValue.value, v), {}), k = () => {
      const v = $();
      s().then(() => t("submit", v)).catch((D) => {
        t("failed", {
          values: v,
          errors: D
        }), e.scrollToError && D[0].name && l(D[0].name);
      });
    }, b = (v) => {
      ye(v), k();
    };
    return i({
      props: e
    }), se({
      submit: k,
      validate: s,
      getValues: $,
      scrollToField: l,
      resetValidation: u,
      getValidationStatus: h
    }), () => {
      var v;
      return r("form", {
        class: ro(),
        onSubmit: b
      }, [(v = n.default) == null ? void 0 : v.call(n)]);
    };
  }
});
const uo = ne(so);
function da(e) {
  return Array.isArray(e) ? !e.length : e === 0 ? !1 : !e;
}
function fo(e, t) {
  if (da(e)) {
    if (t.required)
      return !1;
    if (t.validateEmpty === !1)
      return !0;
  }
  return !(t.pattern && !t.pattern.test(String(e)));
}
function vo(e, t) {
  return new Promise((n) => {
    const a = t.validator(e, t);
    if (Jt(a)) {
      a.then(n);
      return;
    }
    n(a);
  });
}
function En(e, t) {
  const { message: n } = t;
  return ot(n) ? n(e, t) : n || "";
}
function mo({ target: e }) {
  e.composing = !0;
}
function Bn({ target: e }) {
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
function go(e, t) {
  const n = Ot();
  e.style.height = "auto";
  let a = e.scrollHeight;
  if (Fe(t)) {
    const { maxHeight: i, minHeight: o } = t;
    i !== void 0 && (a = Math.min(a, i)), o !== void 0 && (a = Math.max(a, o));
  }
  a && (e.style.height = `${a}px`, pt(n));
}
function ho(e) {
  return e === "number" ? {
    type: "text",
    inputmode: "decimal"
  } : e === "digit" ? {
    type: "tel",
    inputmode: "numeric"
  } : { type: e };
}
function Pe(e) {
  return [...e].length;
}
function Lt(e, t) {
  return [...e].slice(0, t).join("");
}
let bo = 0;
function cn() {
  const e = ze(), { name: t = "unknown" } = (e == null ? void 0 : e.type) || {};
  return process.env.NODE_ENV === "test" ? t : `${t}-${++bo}`;
}
const [yo, xe] = Z("field"), wo = {
  id: String,
  name: String,
  leftIcon: String,
  rightIcon: String,
  autofocus: Boolean,
  clearable: Boolean,
  maxlength: j,
  formatter: Function,
  clearIcon: O("clear"),
  modelValue: te(""),
  inputAlign: String,
  placeholder: String,
  autocomplete: String,
  errorMessage: String,
  enterkeyhint: String,
  clearTrigger: O("focus"),
  formatTrigger: O("onChange"),
  error: {
    type: Boolean,
    default: null
  },
  disabled: {
    type: Boolean,
    default: null
  },
  readonly: {
    type: Boolean,
    default: null
  }
}, So = oe({}, ua, wo, {
  rows: j,
  type: O("text"),
  rules: Array,
  autosize: [Boolean, Object],
  labelWidth: j,
  labelClass: ve,
  labelAlign: String,
  showWordLimit: Boolean,
  errorMessageAlign: String,
  colon: {
    type: Boolean,
    default: null
  }
});
var xo = X({
  name: yo,
  props: So,
  emits: ["blur", "focus", "clear", "keypress", "click-input", "end-validate", "start-validate", "click-left-icon", "click-right-icon", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const a = cn(), i = Se({
      status: "unvalidated",
      focused: !1,
      validateMessage: ""
    }), o = L(), c = L(), f = L(), {
      parent: d
    } = Je(On), s = () => {
      var g;
      return String((g = e.modelValue) != null ? g : "");
    }, u = (g) => {
      if (ie(e[g]))
        return e[g];
      if (d && ie(d.props[g]))
        return d.props[g];
    }, h = z(() => {
      const g = u("readonly");
      if (e.clearable && !g) {
        const N = s() !== "", Y = e.clearTrigger === "always" || e.clearTrigger === "focus" && i.focused;
        return N && Y;
      }
      return !1;
    }), l = z(() => f.value && n.input ? f.value() : e.modelValue), $ = (g) => g.reduce((N, Y) => N.then(() => {
      if (i.status === "failed")
        return;
      let {
        value: J
      } = l;
      if (Y.formatter && (J = Y.formatter(J, Y)), !fo(J, Y)) {
        i.status = "failed", i.validateMessage = En(J, Y);
        return;
      }
      if (Y.validator)
        return da(J) && Y.validateEmpty === !1 ? void 0 : vo(J, Y).then((p) => {
          p && typeof p == "string" ? (i.status = "failed", i.validateMessage = p) : p === !1 && (i.status = "failed", i.validateMessage = En(J, Y));
        });
    }), Promise.resolve()), k = () => {
      i.status = "unvalidated", i.validateMessage = "";
    }, b = () => t("end-validate", {
      status: i.status
    }), v = (g = e.rules) => new Promise((N) => {
      k(), g ? (t("start-validate"), $(g).then(() => {
        i.status === "failed" ? (N({
          name: e.name,
          message: i.validateMessage
        }), b()) : (i.status = "passed", N(), b());
      })) : N();
    }), D = (g) => {
      if (d && e.rules) {
        const {
          validateTrigger: N
        } = d.props, Y = St(N).includes(g), J = e.rules.filter((p) => p.trigger ? St(p.trigger).includes(g) : Y);
        J.length && v(J);
      }
    }, m = (g) => {
      var N;
      const {
        maxlength: Y
      } = e;
      if (ie(Y) && Pe(g) > Y) {
        const J = s();
        if (J && Pe(J) === +Y)
          return J;
        const p = (N = o.value) == null ? void 0 : N.selectionEnd;
        if (i.focused && p) {
          const le = [...g], ue = le.length - +Y;
          return le.splice(p - ue, ue), le.join("");
        }
        return Lt(g, +Y);
      }
      return g;
    }, y = (g, N = "onChange") => {
      const Y = g;
      g = m(g);
      const J = Pe(Y) - Pe(g);
      if (e.type === "number" || e.type === "digit") {
        const le = e.type === "number";
        g = Ut(g, le, le);
      }
      let p = 0;
      if (e.formatter && N === e.formatTrigger) {
        const {
          formatter: le,
          maxlength: ue
        } = e;
        if (g = le(g), ie(ue) && Pe(g) > ue && (g = Lt(g, +ue)), o.value && i.focused) {
          const {
            selectionEnd: Ne
          } = o.value, mn = Lt(Y, Ne);
          p = Pe(le(mn)) - Pe(mn);
        }
      }
      if (o.value && o.value.value !== g)
        if (i.focused) {
          let {
            selectionStart: le,
            selectionEnd: ue
          } = o.value;
          if (o.value.value = g, ie(le) && ie(ue)) {
            const Ne = Pe(g);
            J ? (le -= J, ue -= J) : p && (le += p, ue += p), o.value.setSelectionRange(Math.min(le, Ne), Math.min(ue, Ne));
          }
        } else
          o.value.value = g;
      g !== e.modelValue && t("update:modelValue", g);
    }, w = (g) => {
      g.target.composing || y(g.target.value);
    }, S = () => {
      var g;
      return (g = o.value) == null ? void 0 : g.blur();
    }, P = () => {
      var g;
      return (g = o.value) == null ? void 0 : g.focus();
    }, M = () => {
      const g = o.value;
      e.type === "textarea" && e.autosize && g && go(g, e.autosize);
    }, I = (g) => {
      i.focused = !0, t("focus", g), ee(M), u("readonly") && S();
    }, C = (g) => {
      u("readonly") || (i.focused = !1, y(s(), "onBlur"), t("blur", g), D("onBlur"), ee(M), Gn());
    }, T = (g) => t("click-input", g), A = (g) => t("click-left-icon", g), H = (g) => t("click-right-icon", g), B = (g) => {
      ye(g), t("update:modelValue", ""), t("clear", g);
    }, F = z(() => {
      if (typeof e.error == "boolean")
        return e.error;
      if (d && d.props.showError && i.status === "failed")
        return !0;
    }), E = z(() => {
      const g = u("labelWidth");
      if (g)
        return {
          width: ce(g)
        };
    }), _ = (g) => {
      g.keyCode === 13 && (!(d && d.props.submitOnEnter) && e.type !== "textarea" && ye(g), e.type === "search" && S()), t("keypress", g);
    }, G = () => e.id || `${a}-input`, q = () => i.status, re = () => {
      const g = xe("control", [u("inputAlign"), {
        error: F.value,
        custom: !!n.input,
        "min-height": e.type === "textarea" && !e.autosize
      }]);
      if (n.input)
        return r("div", {
          class: g,
          onClick: T
        }, [n.input()]);
      const N = {
        id: G(),
        ref: o,
        name: e.name,
        rows: e.rows !== void 0 ? +e.rows : void 0,
        class: g,
        disabled: u("disabled"),
        readonly: u("readonly"),
        autofocus: e.autofocus,
        placeholder: e.placeholder,
        autocomplete: e.autocomplete,
        enterkeyhint: e.enterkeyhint,
        "aria-labelledby": e.label ? `${a}-label` : void 0,
        onBlur: C,
        onFocus: I,
        onInput: w,
        onClick: T,
        onChange: Bn,
        onKeypress: _,
        onCompositionend: Bn,
        onCompositionstart: mo
      };
      return e.type === "textarea" ? r("textarea", N, null) : r("input", K(ho(e.type), N), null);
    }, x = () => {
      const g = n["left-icon"];
      if (e.leftIcon || g)
        return r("div", {
          class: xe("left-icon"),
          onClick: A
        }, [g ? g() : r(ge, {
          name: e.leftIcon,
          classPrefix: e.iconPrefix
        }, null)]);
    }, V = () => {
      const g = n["right-icon"];
      if (e.rightIcon || g)
        return r("div", {
          class: xe("right-icon"),
          onClick: H
        }, [g ? g() : r(ge, {
          name: e.rightIcon,
          classPrefix: e.iconPrefix
        }, null)]);
    }, R = () => {
      if (e.showWordLimit && e.maxlength) {
        const g = Pe(s());
        return r("div", {
          class: xe("word-limit")
        }, [r("span", {
          class: xe("word-num")
        }, [g]), Yn("/"), e.maxlength]);
      }
    }, Q = () => {
      if (d && d.props.showErrorMessage === !1)
        return;
      const g = e.errorMessage || i.validateMessage;
      if (g) {
        const N = n["error-message"], Y = u("errorMessageAlign");
        return r("div", {
          class: xe("error-message", Y)
        }, [N ? N({
          message: g
        }) : g]);
      }
    }, ae = () => {
      const g = u("colon") ? ":" : "";
      if (n.label)
        return [n.label(), g];
      if (e.label)
        return r("label", {
          id: `${a}-label`,
          for: G()
        }, [e.label + g]);
    }, Me = () => [r("div", {
      class: xe("body")
    }, [re(), h.value && r(ge, {
      ref: c,
      name: e.clearIcon,
      class: xe("clear")
    }, null), V(), n.button && r("div", {
      class: xe("button")
    }, [n.button()])]), R(), Q()];
    return se({
      blur: S,
      focus: P,
      validate: v,
      formValue: l,
      resetValidation: k,
      getValidationStatus: q
    }), rt(Xn, {
      customValue: f,
      resetValidation: k,
      validateWithTrigger: D
    }), U(() => e.modelValue, () => {
      y(s()), k(), D("onChange"), ee(M);
    }), ke(() => {
      y(s(), e.formatTrigger), ee(M);
    }), _e("touchstart", B, {
      target: z(() => {
        var g;
        return (g = c.value) == null ? void 0 : g.$el;
      })
    }), () => {
      const g = u("disabled"), N = u("labelAlign"), Y = ae(), J = x();
      return r(oo, {
        size: e.size,
        icon: e.leftIcon,
        class: xe({
          error: F.value,
          disabled: g,
          [`label-${N}`]: N
        }),
        center: e.center,
        border: e.border,
        isLink: e.isLink,
        clickable: e.clickable,
        titleStyle: E.value,
        valueClass: xe("value"),
        titleClass: [xe("label", [N, {
          required: e.required
        }]), e.labelClass],
        arrowDirection: e.arrowDirection
      }, {
        icon: J ? () => J : null,
        title: Y ? () => Y : null,
        value: Me,
        extra: n.extra
      });
    };
  }
});
const Re = ne(xo);
function fa() {
  const e = Se({
    show: !1
  }), t = (i) => {
    e.show = i;
  }, n = (i) => {
    oe(e, i, { transitionAppear: !0 }), t(!0);
  }, a = () => t(!1);
  return se({ open: n, close: a, toggle: t }), {
    open: n,
    close: a,
    state: e,
    toggle: t
  };
}
function va(e) {
  const t = Ya(e), n = document.createElement("div");
  return document.body.appendChild(n), {
    instance: t.mount(n),
    unmount() {
      t.unmount(), document.body.removeChild(n);
    }
  };
}
let tt = 0;
function Co(e) {
  e ? (tt || document.body.classList.add("van-toast--unclickable"), tt++) : tt && (tt--, tt || document.body.classList.remove("van-toast--unclickable"));
}
const [ko, nt] = Z("toast"), Io = ["show", "overlay", "teleport", "transition", "overlayClass", "overlayStyle", "closeOnClickOverlay"], To = {
  icon: String,
  show: Boolean,
  type: O("text"),
  overlay: Boolean,
  message: j,
  iconSize: j,
  duration: Qt(2e3),
  position: O("middle"),
  teleport: [String, Object],
  className: ve,
  iconPrefix: String,
  transition: O("van-fade"),
  loadingType: String,
  forbidClick: Boolean,
  overlayClass: ve,
  overlayStyle: Object,
  closeOnClick: Boolean,
  closeOnClickOverlay: Boolean
};
var ma = X({
  name: ko,
  props: To,
  emits: ["update:show"],
  setup(e, {
    emit: t
  }) {
    let n, a = !1;
    const i = () => {
      const u = e.show && e.forbidClick;
      a !== u && (a = u, Co(a));
    }, o = (u) => t("update:show", u), c = () => {
      e.closeOnClick && o(!1);
    }, f = () => clearTimeout(n), d = () => {
      const {
        icon: u,
        type: h,
        iconSize: l,
        iconPrefix: $,
        loadingType: k
      } = e;
      if (u || h === "success" || h === "fail")
        return r(ge, {
          name: u || h,
          size: l,
          class: nt("icon"),
          classPrefix: $
        }, null);
      if (h === "loading")
        return r(pe, {
          class: nt("loading"),
          size: l,
          type: k
        }, null);
    }, s = () => {
      const {
        type: u,
        message: h
      } = e;
      if (ie(h) && h !== "")
        return u === "html" ? r("div", {
          key: 0,
          class: nt("text"),
          innerHTML: String(h)
        }, null) : r("div", {
          class: nt("text")
        }, [h]);
    };
    return U(() => [e.show, e.forbidClick], i), U(() => [e.show, e.type, e.message, e.duration], () => {
      f(), e.show && e.duration > 0 && (n = setTimeout(() => {
        o(!1);
      }, e.duration));
    }), ke(i), qt(i), () => r(Ge, K({
      class: [nt([e.position, {
        [e.type]: !e.icon
      }]), e.className],
      lockScroll: !1,
      onClick: c,
      onClosed: f,
      "onUpdate:show": o
    }, he(e, Io)), {
      default: () => [d(), s()]
    });
  }
});
const ga = {
  icon: "",
  type: "text",
  message: "",
  className: "",
  overlay: !1,
  onClose: void 0,
  onOpened: void 0,
  duration: 2e3,
  teleport: "body",
  iconSize: void 0,
  iconPrefix: void 0,
  position: "middle",
  transition: "van-fade",
  forbidClick: !1,
  loadingType: void 0,
  overlayClass: "",
  overlayStyle: void 0,
  closeOnClick: !1,
  closeOnClickOverlay: !1
};
let Ie = [], Rt = !1, It = oe({}, ga);
const Tt = /* @__PURE__ */ new Map();
function ha(e) {
  return Fe(e) ? e : {
    message: e
  };
}
function Do() {
  const {
    instance: e,
    unmount: t
  } = va({
    setup() {
      const n = L(""), {
        open: a,
        state: i,
        close: o,
        toggle: c
      } = fa(), f = () => {
        Rt && (Ie = Ie.filter((s) => s !== e), t());
      }, d = () => r(ma, K(i, {
        onClosed: f,
        "onUpdate:show": c
      }), null);
      return U(n, (s) => {
        i.message = s;
      }), ze().render = d, {
        open: a,
        clear: o,
        message: n
      };
    }
  });
  return e;
}
function $o() {
  if (!Ie.length || Rt) {
    const e = Do();
    Ie.push(e);
  }
  return Ie[Ie.length - 1];
}
function Ce(e = {}) {
  if (!Ze)
    return {};
  const t = $o(), n = ha(e);
  return t.open(oe({}, It, Tt.get(n.type || It.type), n)), t;
}
const sn = (e) => (t) => Ce(oe({
  type: e
}, ha(t)));
Ce.loading = sn("loading");
Ce.success = sn("success");
Ce.fail = sn("fail");
Ce.clear = (e) => {
  var t;
  Ie.length && (e ? (Ie.forEach((n) => {
    n.clear();
  }), Ie = []) : Rt ? (t = Ie.shift()) == null || t.clear() : Ie[0].clear());
};
function Po(e, t) {
  typeof e == "string" ? Tt.set(e, t) : oe(It, e);
}
Ce.setDefaultOptions = Po;
Ce.resetDefaultOptions = (e) => {
  typeof e == "string" ? Tt.delete(e) : (It = oe({}, ga), Tt.clear());
};
Ce.allowMultiple = (e = !0) => {
  Rt = e;
};
Ce.install = (e) => {
  e.use(ne(ma)), e.config.globalProperties.$toast = Ce;
};
const [Eo, Ht] = Z("switch"), Bo = {
  size: j,
  loading: Boolean,
  disabled: Boolean,
  modelValue: ve,
  activeColor: String,
  inactiveColor: String,
  activeValue: {
    type: ve,
    default: !0
  },
  inactiveValue: {
    type: ve,
    default: !1
  }
};
var Vo = X({
  name: Eo,
  props: Bo,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const a = () => e.modelValue === e.activeValue, i = () => {
      if (!e.disabled && !e.loading) {
        const c = a() ? e.inactiveValue : e.activeValue;
        t("update:modelValue", c), t("change", c);
      }
    }, o = () => {
      if (e.loading) {
        const c = a() ? e.activeColor : e.inactiveColor;
        return r(pe, {
          class: Ht("loading"),
          color: c
        }, null);
      }
      if (n.node)
        return n.node();
    };
    return Oe(() => e.modelValue), () => {
      var c;
      const {
        size: f,
        loading: d,
        disabled: s,
        activeColor: u,
        inactiveColor: h
      } = e, l = a(), $ = {
        fontSize: ce(f),
        backgroundColor: l ? u : h
      };
      return r("div", {
        role: "switch",
        class: Ht({
          on: l,
          loading: d,
          disabled: s
        }),
        style: $,
        tabindex: s ? void 0 : 0,
        "aria-checked": l,
        onClick: i
      }, [r("div", {
        class: Ht("node")
      }, [o()]), (c = n.background) == null ? void 0 : c.call(n)]);
    };
  }
});
const _o = ne(Vo), [ba, Mo] = Z("radio-group"), Ro = {
  disabled: Boolean,
  iconSize: j,
  direction: String,
  modelValue: ve,
  checkedColor: String
}, ya = Symbol(ba);
var Ao = X({
  name: ba,
  props: Ro,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      linkChildren: a
    } = Qe(ya), i = (o) => t("update:modelValue", o);
    return U(() => e.modelValue, (o) => t("change", o)), a({
      props: e,
      updateValue: i
    }), Oe(() => e.modelValue), () => {
      var o;
      return r("div", {
        class: Mo([e.direction]),
        role: "radiogroup"
      }, [(o = n.default) == null ? void 0 : o.call(n)]);
    };
  }
});
const zo = ne(Ao), un = {
  name: ve,
  shape: O("round"),
  disabled: Boolean,
  iconSize: j,
  modelValue: ve,
  checkedColor: String,
  labelPosition: String,
  labelDisabled: Boolean
};
var wa = X({
  props: oe({}, un, {
    bem: me(Function),
    role: String,
    parent: Object,
    checked: Boolean,
    bindGroup: W
  }),
  emits: ["click", "toggle"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const a = L(), i = (h) => {
      if (e.parent && e.bindGroup)
        return e.parent.props[h];
    }, o = z(() => i("disabled") || e.disabled), c = z(() => i("direction")), f = z(() => {
      const h = e.checkedColor || i("checkedColor");
      if (h && e.checked && !o.value)
        return {
          borderColor: h,
          backgroundColor: h
        };
    }), d = (h) => {
      const {
        target: l
      } = h, $ = a.value, k = $ === l || ($ == null ? void 0 : $.contains(l));
      !o.value && (k || !e.labelDisabled) && t("toggle"), t("click", h);
    }, s = () => {
      const {
        bem: h,
        shape: l,
        checked: $
      } = e, k = e.iconSize || i("iconSize");
      return r("div", {
        ref: a,
        class: h("icon", [l, {
          disabled: o.value,
          checked: $
        }]),
        style: {
          fontSize: ce(k)
        }
      }, [n.icon ? n.icon({
        checked: $,
        disabled: o.value
      }) : r(ge, {
        name: "success",
        style: f.value
      }, null)]);
    }, u = () => {
      if (n.default)
        return r("span", {
          class: e.bem("label", [e.labelPosition, {
            disabled: o.value
          }])
        }, [n.default()]);
    };
    return () => {
      const h = e.labelPosition === "left" ? [u(), s()] : [s(), u()];
      return r("div", {
        role: e.role,
        class: e.bem([{
          disabled: o.value,
          "label-disabled": e.labelDisabled
        }, c.value]),
        tabindex: o.value ? void 0 : 0,
        "aria-checked": e.checked,
        onClick: d
      }, [h]);
    };
  }
});
const [Fo, No] = Z("radio");
var Lo = X({
  name: Fo,
  props: un,
  emits: ["update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      parent: a
    } = Je(ya), i = () => (a ? a.props.modelValue : e.modelValue) === e.name, o = () => {
      a ? a.updateValue(e.name) : t("update:modelValue", e.name);
    };
    return () => r(wa, K({
      bem: No,
      role: "radio",
      parent: a,
      checked: i(),
      onToggle: o
    }, e), he(n, ["default", "icon"]));
  }
});
const Ho = ne(Lo), [Yo, fe, Ve] = Z("calendar"), jo = (e) => Ve("monthTitle", e.getFullYear(), e.getMonth() + 1);
function Kt(e, t) {
  const n = e.getFullYear(), a = t.getFullYear();
  if (n === a) {
    const i = e.getMonth(), o = t.getMonth();
    return i === o ? 0 : i > o ? 1 : -1;
  }
  return n > a ? 1 : -1;
}
function we(e, t) {
  const n = Kt(e, t);
  if (n === 0) {
    const a = e.getDate(), i = t.getDate();
    return a === i ? 0 : a > i ? 1 : -1;
  }
  return n;
}
const Dt = (e) => new Date(e), Vn = (e) => Array.isArray(e) ? e.map(Dt) : Dt(e);
function dn(e, t) {
  const n = Dt(e);
  return n.setDate(n.getDate() + t), n;
}
const Xt = (e) => dn(e, -1), Sa = (e) => dn(e, 1), Gt = () => {
  const e = new Date();
  return e.setHours(0, 0, 0, 0), e;
};
function Uo(e) {
  const t = e[0].getTime();
  return (e[1].getTime() - t) / (1e3 * 60 * 60 * 24) + 1;
}
function xa() {
  const e = L([]), t = [];
  return ja(() => {
    e.value = [];
  }), [e, (a) => (t[a] || (t[a] = (i) => {
    e.value[a] = i;
  }), t[a])];
}
const Ca = oe({}, on, {
  filter: Function,
  columnsOrder: Array,
  formatter: {
    type: Function,
    default: (e, t) => t
  }
}), ka = Object.keys(on);
function Ia(e, t) {
  if (e < 0)
    return [];
  const n = Array(e);
  let a = -1;
  for (; ++a < e; )
    n[a] = t(a);
  return n;
}
function Wo(e) {
  if (!e)
    return 0;
  for (; Number.isNaN(parseInt(e, 10)); )
    if (e.length > 1)
      e = e.slice(1);
    else
      return 0;
  return parseInt(e, 10);
}
const Zt = (e, t) => 32 - new Date(e, t - 1, 32).getDate(), Ta = (e, t) => {
  const n = [
    "setValues",
    "setIndexes",
    "setColumnIndex",
    "setColumnValue"
  ];
  return new Proxy(e, {
    get: (a, i) => n.includes(i) ? (...o) => {
      a[i](...o), t();
    } : a[i]
  });
}, [Ko] = Z("calendar-day");
var Xo = X({
  name: Ko,
  props: {
    item: me(Object),
    color: String,
    index: Number,
    offset: Qt(0),
    rowHeight: String
  },
  emits: ["click"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const a = z(() => {
      var d;
      const {
        item: s,
        index: u,
        color: h,
        offset: l,
        rowHeight: $
      } = e, k = {
        height: $
      };
      if (s.type === "placeholder")
        return k.width = "100%", k;
      if (u === 0 && (k.marginLeft = `${100 * l / 7}%`), h)
        switch (s.type) {
          case "end":
          case "start":
          case "start-end":
          case "multiple-middle":
          case "multiple-selected":
            k.background = h;
            break;
          case "middle":
            k.color = h;
            break;
        }
      return l + (((d = s.date) == null ? void 0 : d.getDate()) || 1) > 28 && (k.marginBottom = 0), k;
    }), i = () => {
      e.item.type !== "disabled" && t("click", e.item);
    }, o = () => {
      const {
        topInfo: d
      } = e.item;
      if (d || n["top-info"])
        return r("div", {
          class: fe("top-info")
        }, [n["top-info"] ? n["top-info"](e.item) : d]);
    }, c = () => {
      const {
        bottomInfo: d
      } = e.item;
      if (d || n["bottom-info"])
        return r("div", {
          class: fe("bottom-info")
        }, [n["bottom-info"] ? n["bottom-info"](e.item) : d]);
    }, f = () => {
      const {
        item: d,
        color: s,
        rowHeight: u
      } = e, {
        type: h,
        text: l
      } = d, $ = [o(), l, c()];
      return h === "selected" ? r("div", {
        class: fe("selected-day"),
        style: {
          width: u,
          height: u,
          background: s
        }
      }, [$]) : $;
    };
    return () => {
      const {
        type: d,
        className: s
      } = e.item;
      return d === "placeholder" ? r("div", {
        class: fe("day"),
        style: a.value
      }, null) : r("div", {
        role: "gridcell",
        style: a.value,
        class: [fe("day", d), s],
        tabindex: d === "disabled" ? void 0 : -1,
        onClick: i
      }, [f()]);
    };
  }
});
const [Go] = Z("calendar-month"), Zo = {
  date: me(Date),
  type: String,
  color: String,
  minDate: me(Date),
  maxDate: me(Date),
  showMark: Boolean,
  rowHeight: j,
  formatter: Function,
  lazyRender: Boolean,
  currentDate: [Date, Array],
  allowSameDay: Boolean,
  showSubtitle: Boolean,
  showMonthTitle: Boolean,
  firstDayOfWeek: Number
};
var qo = X({
  name: Go,
  props: Zo,
  emits: ["click", "update-height"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const [a, i] = Ga(), o = L(), c = L(), f = yl(c), d = z(() => jo(e.date)), s = z(() => ce(e.rowHeight)), u = z(() => {
      const T = e.date.getDay();
      return e.firstDayOfWeek ? (T + 7 - e.firstDayOfWeek) % 7 : T;
    }), h = z(() => Zt(e.date.getFullYear(), e.date.getMonth() + 1)), l = z(() => a.value || !e.lazyRender), $ = () => d.value, k = (T) => {
      const A = (H) => e.currentDate.some((B) => we(B, H) === 0);
      if (A(T)) {
        const H = Xt(T), B = Sa(T), F = A(H), E = A(B);
        return F && E ? "multiple-middle" : F ? "end" : E ? "start" : "multiple-selected";
      }
      return "";
    }, b = (T) => {
      const [A, H] = e.currentDate;
      if (!A)
        return "";
      const B = we(T, A);
      if (!H)
        return B === 0 ? "start" : "";
      const F = we(T, H);
      return e.allowSameDay && B === 0 && F === 0 ? "start-end" : B === 0 ? "start" : F === 0 ? "end" : B > 0 && F < 0 ? "middle" : "";
    }, v = (T) => {
      const {
        type: A,
        minDate: H,
        maxDate: B,
        currentDate: F
      } = e;
      if (we(T, H) < 0 || we(T, B) > 0)
        return "disabled";
      if (F === null)
        return "";
      if (Array.isArray(F)) {
        if (A === "multiple")
          return k(T);
        if (A === "range")
          return b(T);
      } else if (A === "single")
        return we(T, F) === 0 ? "selected" : "";
      return "";
    }, D = (T) => {
      if (e.type === "range") {
        if (T === "start" || T === "end")
          return Ve(T);
        if (T === "start-end")
          return `${Ve("start")}/${Ve("end")}`;
      }
    }, m = () => {
      if (e.showMonthTitle)
        return r("div", {
          class: fe("month-title")
        }, [d.value]);
    }, y = () => {
      if (e.showMark && l.value)
        return r("div", {
          class: fe("month-mark")
        }, [e.date.getMonth() + 1]);
    }, w = z(() => {
      const T = Math.ceil((h.value + u.value) / 7);
      return Array(T).fill({
        type: "placeholder"
      });
    }), S = z(() => {
      const T = [], A = e.date.getFullYear(), H = e.date.getMonth();
      for (let B = 1; B <= h.value; B++) {
        const F = new Date(A, H, B), E = v(F);
        let _ = {
          date: F,
          type: E,
          text: B,
          bottomInfo: D(E)
        };
        e.formatter && (_ = e.formatter(_)), T.push(_);
      }
      return T;
    }), P = z(() => S.value.filter((T) => T.type === "disabled")), M = (T, A) => {
      if (o.value) {
        const H = Te(o.value), B = w.value.length, E = (Math.ceil((A.getDate() + u.value) / 7) - 1) * H.height / B;
        xt(T, H.top + E + T.scrollTop - Te(T).top);
      }
    }, I = (T, A) => r(Xo, {
      item: T,
      index: A,
      color: e.color,
      offset: u.value,
      rowHeight: s.value,
      onClick: (H) => t("click", H)
    }, he(n, ["top-info", "bottom-info"])), C = () => r("div", {
      ref: o,
      role: "grid",
      class: fe("days")
    }, [y(), (l.value ? S : w).value.map(I)]);
    return se({
      getTitle: $,
      getHeight: () => f.value,
      setVisible: i,
      scrollToDate: M,
      disabledDays: P
    }), () => r("div", {
      class: fe("month"),
      ref: c
    }, [m(), C()]);
  }
});
const [Jo] = Z("calendar-header");
var Qo = X({
  name: Jo,
  props: {
    title: String,
    subtitle: String,
    showTitle: Boolean,
    showSubtitle: Boolean,
    firstDayOfWeek: Number
  },
  emits: ["click-subtitle"],
  setup(e, {
    slots: t,
    emit: n
  }) {
    const a = () => {
      if (e.showTitle) {
        const f = e.title || Ve("title"), d = t.title ? t.title() : f;
        return r("div", {
          class: fe("header-title")
        }, [d]);
      }
    }, i = (f) => n("click-subtitle", f), o = () => {
      if (e.showSubtitle) {
        const f = t.subtitle ? t.subtitle() : e.subtitle;
        return r("div", {
          class: fe("header-subtitle"),
          onClick: i
        }, [f]);
      }
    }, c = () => {
      const {
        firstDayOfWeek: f
      } = e, d = Ve("weekdays"), s = [...d.slice(f, 7), ...d.slice(0, f)];
      return r("div", {
        class: fe("weekdays")
      }, [s.map((u) => r("span", {
        class: fe("weekday")
      }, [u]))]);
    };
    return () => r("div", {
      class: fe("header")
    }, [a(), o(), c()]);
  }
});
const Oo = {
  show: Boolean,
  type: O("single"),
  title: String,
  color: String,
  round: W,
  readonly: Boolean,
  poppable: W,
  maxRange: te(null),
  position: O("bottom"),
  teleport: [String, Object],
  showMark: W,
  showTitle: W,
  formatter: Function,
  rowHeight: j,
  confirmText: String,
  rangePrompt: String,
  lazyRender: W,
  showConfirm: W,
  defaultDate: [Date, Array],
  allowSameDay: Boolean,
  showSubtitle: W,
  closeOnPopstate: W,
  showRangePrompt: W,
  confirmDisabledText: String,
  closeOnClickOverlay: W,
  safeAreaInsetTop: Boolean,
  safeAreaInsetBottom: W,
  minDate: {
    type: Date,
    validator: Xe,
    default: Gt
  },
  maxDate: {
    type: Date,
    validator: Xe,
    default: () => {
      const e = Gt();
      return new Date(e.getFullYear(), e.getMonth() + 6, e.getDate());
    }
  },
  firstDayOfWeek: {
    type: j,
    default: 0,
    validator: (e) => e >= 0 && e <= 6
  }
};
var po = X({
  name: Yo,
  props: Oo,
  emits: ["select", "confirm", "unselect", "month-show", "over-range", "update:show", "click-subtitle"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const a = (E, _ = e.minDate, G = e.maxDate) => we(E, _) === -1 ? _ : we(E, G) === 1 ? G : E, i = (E = e.defaultDate) => {
      const {
        type: _,
        minDate: G,
        maxDate: q,
        allowSameDay: re
      } = e;
      if (E === null)
        return E;
      const x = Gt();
      if (_ === "range") {
        Array.isArray(E) || (E = []);
        const V = a(E[0] || x, G, re ? q : Xt(q)), R = a(E[1] || x, re ? G : Sa(G));
        return [V, R];
      }
      return _ === "multiple" ? Array.isArray(E) ? E.map((V) => a(V)) : [a(x)] : ((!E || Array.isArray(E)) && (E = x), a(E));
    };
    let o;
    const c = L(), f = L(""), d = L(i()), [s, u] = xa(), h = z(() => e.firstDayOfWeek ? +e.firstDayOfWeek % 7 : 0), l = z(() => {
      const E = [], _ = new Date(e.minDate);
      _.setDate(1);
      do
        E.push(new Date(_)), _.setMonth(_.getMonth() + 1);
      while (Kt(_, e.maxDate) !== 1);
      return E;
    }), $ = z(() => {
      if (d.value) {
        if (e.type === "range")
          return !d.value[0] || !d.value[1];
        if (e.type === "multiple")
          return !d.value.length;
      }
      return !d.value;
    }), k = () => d.value, b = () => {
      const E = Bt(c.value), _ = E + o, G = l.value.map((R, Q) => s.value[Q].getHeight()), q = G.reduce((R, Q) => R + Q, 0);
      if (_ > q && E > 0)
        return;
      let re = 0, x;
      const V = [-1, -1];
      for (let R = 0; R < l.value.length; R++) {
        const Q = s.value[R];
        re <= _ && re + G[R] >= E && (V[1] = R, x || (x = Q, V[0] = R), s.value[R].showed || (s.value[R].showed = !0, t("month-show", {
          date: Q.date,
          title: Q.getTitle()
        }))), re += G[R];
      }
      l.value.forEach((R, Q) => {
        const ae = Q >= V[0] - 1 && Q <= V[1] + 1;
        s.value[Q].setVisible(ae);
      }), x && (f.value = x.getTitle());
    }, v = (E) => {
      Ae(() => {
        l.value.some((_, G) => Kt(_, E) === 0 ? (c.value && s.value[G].scrollToDate(c.value, E), !0) : !1), b();
      });
    }, D = () => {
      if (!(e.poppable && !e.show))
        if (d.value) {
          const E = e.type === "single" ? d.value : d.value[0];
          Xe(E) && v(E);
        } else
          Ae(b);
    }, m = () => {
      e.poppable && !e.show || (Ae(() => {
        o = Math.floor(Te(c).height);
      }), D());
    }, y = (E = i()) => {
      d.value = E, D();
    }, w = (E) => {
      const {
        maxRange: _,
        rangePrompt: G,
        showRangePrompt: q
      } = e;
      return _ && Uo(E) > _ ? (q && Ce(G || Ve("rangePrompt", _)), t("over-range"), !1) : !0;
    }, S = () => {
      var E;
      return t("confirm", (E = d.value) != null ? E : Vn(d.value));
    }, P = (E, _) => {
      const G = (q) => {
        d.value = q, t("select", Vn(q));
      };
      if (_ && e.type === "range" && !w(E)) {
        G([E[0], dn(E[0], +e.maxRange - 1)]);
        return;
      }
      G(E), _ && !e.showConfirm && S();
    }, M = (E, _, G) => {
      var q;
      return (q = E.find((re) => we(_, re.date) === -1 && we(re.date, G) === -1)) == null ? void 0 : q.date;
    }, I = z(() => s.value.reduce((E, _) => {
      var G, q;
      return E.push(...(q = (G = _.disabledDays) == null ? void 0 : G.value) != null ? q : []), E;
    }, [])), C = (E) => {
      if (e.readonly || !E.date)
        return;
      const {
        date: _
      } = E, {
        type: G
      } = e;
      if (G === "range") {
        if (!d.value) {
          P([_]);
          return;
        }
        const [q, re] = d.value;
        if (q && !re) {
          const x = we(_, q);
          if (x === 1) {
            const V = M(I.value, q, _);
            if (V) {
              const R = Xt(V);
              we(q, R) === -1 ? P([q, R]) : P([_]);
            } else
              P([q, _], !0);
          } else
            x === -1 ? P([_]) : e.allowSameDay && P([_, _], !0);
        } else
          P([_]);
      } else if (G === "multiple") {
        if (!d.value) {
          P([_]);
          return;
        }
        const q = d.value, re = q.findIndex((x) => we(x, _) === 0);
        if (re !== -1) {
          const [x] = q.splice(re, 1);
          t("unselect", Dt(x));
        } else
          e.maxRange && q.length >= e.maxRange ? Ce(e.rangePrompt || Ve("rangePrompt", e.maxRange)) : P([...q, _]);
      } else
        P(_, !0);
    }, T = (E) => t("update:show", E), A = (E, _) => {
      const G = _ !== 0 || !e.showSubtitle;
      return r(qo, K({
        ref: u(_),
        date: E,
        currentDate: d.value,
        showMonthTitle: G,
        firstDayOfWeek: h.value
      }, he(e, ["type", "color", "minDate", "maxDate", "showMark", "formatter", "rowHeight", "lazyRender", "showSubtitle", "allowSameDay"]), {
        onClick: C
      }), he(n, ["top-info", "bottom-info"]));
    }, H = () => {
      if (n.footer)
        return n.footer();
      if (e.showConfirm) {
        const E = n["confirm-text"], _ = $.value, G = _ ? e.confirmDisabledText : e.confirmText;
        return r(ia, {
          round: !0,
          block: !0,
          type: "danger",
          color: e.color,
          class: fe("confirm"),
          disabled: _,
          nativeType: "button",
          onClick: S
        }, {
          default: () => [E ? E({
            disabled: _
          }) : G || Ve("confirm")]
        });
      }
    }, B = () => r("div", {
      class: [fe("footer"), {
        "van-safe-area-bottom": e.safeAreaInsetBottom
      }]
    }, [H()]), F = () => r("div", {
      class: fe()
    }, [r(Qo, {
      title: e.title,
      subtitle: f.value,
      showTitle: e.showTitle,
      showSubtitle: e.showSubtitle,
      firstDayOfWeek: h.value,
      "onClick-subtitle": (E) => t("click-subtitle", E)
    }, he(n, ["title", "subtitle"])), r("div", {
      ref: c,
      class: fe("body"),
      onScroll: b
    }, [l.value.map(A)]), B()]);
    return U(() => e.show, m), U(() => [e.type, e.minDate, e.maxDate], () => y(i(d.value))), U(() => e.defaultDate, (E = null) => {
      d.value = E, D();
    }), se({
      reset: y,
      scrollToDate: v,
      getSelectedDate: k
    }), ut(m), () => e.poppable ? r(Ge, {
      show: e.show,
      class: fe("popup"),
      round: e.round,
      position: e.position,
      closeable: e.showTitle || e.showSubtitle,
      teleport: e.teleport,
      closeOnPopstate: e.closeOnPopstate,
      safeAreaInsetTop: e.safeAreaInsetTop,
      closeOnClickOverlay: e.closeOnClickOverlay,
      "onUpdate:show": T
    }, {
      default: F
    }) : F();
  }
});
const ei = ne(po), [ti, Ue] = Z("image"), ni = {
  src: String,
  alt: String,
  fit: String,
  position: String,
  round: Boolean,
  block: Boolean,
  width: j,
  height: j,
  radius: j,
  lazyLoad: Boolean,
  iconSize: j,
  showError: W,
  errorIcon: O("photo-fail"),
  iconPrefix: String,
  showLoading: W,
  loadingIcon: O("photo")
};
var ai = X({
  name: ti,
  props: ni,
  emits: ["load", "error"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const a = L(!1), i = L(!0), o = L(), {
      $Lazyload: c
    } = ze().proxy, f = z(() => {
      const b = {
        width: ce(e.width),
        height: ce(e.height)
      };
      return ie(e.radius) && (b.overflow = "hidden", b.borderRadius = ce(e.radius)), b;
    });
    U(() => e.src, () => {
      a.value = !1, i.value = !0;
    });
    const d = (b) => {
      i.value = !1, t("load", b);
    }, s = (b) => {
      a.value = !0, i.value = !1, t("error", b);
    }, u = (b, v, D) => D ? D() : r(ge, {
      name: b,
      size: e.iconSize,
      class: v,
      classPrefix: e.iconPrefix
    }, null), h = () => {
      if (i.value && e.showLoading)
        return r("div", {
          class: Ue("loading")
        }, [u(e.loadingIcon, Ue("loading-icon"), n.loading)]);
      if (a.value && e.showError)
        return r("div", {
          class: Ue("error")
        }, [u(e.errorIcon, Ue("error-icon"), n.error)]);
    }, l = () => {
      if (a.value || !e.src)
        return;
      const b = {
        alt: e.alt,
        class: Ue("img"),
        style: {
          objectFit: e.fit,
          objectPosition: e.position
        }
      };
      return e.lazyLoad ? Le(r("img", K({
        ref: o
      }, b), null), [[Ua("lazy"), e.src]]) : r("img", K({
        src: e.src,
        onLoad: d,
        onError: s
      }, b), null);
    }, $ = ({
      el: b
    }) => {
      const v = () => {
        b === o.value && i.value && d();
      };
      o.value ? v() : ee(v);
    }, k = ({
      el: b
    }) => {
      b === o.value && !a.value && s();
    };
    return c && Ze && (c.$on("loaded", $), c.$on("error", k), ct(() => {
      c.$off("loaded", $), c.$off("error", k);
    })), () => {
      var b;
      return r("div", {
        class: Ue({
          round: e.round,
          block: e.block
        }),
        style: f.value
      }, [l(), h(), (b = n.default) == null ? void 0 : b.call(n)]);
    };
  }
});
const Da = ne(ai);
function li(e, t, n) {
  let a = 0;
  const i = e.scrollLeft, o = n === 0 ? 1 : Math.round(n * 1e3 / 16);
  function c() {
    e.scrollLeft += (t - i) / o, ++a < o && Ae(c);
  }
  c();
}
function oi(e, t, n, a) {
  let i = Bt(e);
  const o = i < t, c = n === 0 ? 1 : Math.round(n * 1e3 / 16), f = (t - i) / c;
  function d() {
    i += f, (o && i > t || !o && i < t) && (i = t), xt(e, i), o && i < t || !o && i > t ? Ae(d) : a && Ae(a);
  }
  d();
}
function ii(e, t) {
  if (!Ze || !window.IntersectionObserver)
    return;
  const n = new IntersectionObserver(
    (o) => {
      t(o[0].intersectionRatio > 0);
    },
    { root: document.body }
  ), a = () => {
    e.value && n.observe(e.value);
  }, i = () => {
    e.value && n.unobserve(e.value);
  };
  it(i), ct(i), ut(a);
}
const [ri, ci] = Z("sticky"), si = {
  zIndex: j,
  position: O("top"),
  container: Object,
  offsetTop: te(0),
  offsetBottom: te(0)
};
var ui = X({
  name: ri,
  props: si,
  emits: ["scroll", "change"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const a = L(), i = Kn(a), o = Se({
      fixed: !1,
      width: 0,
      height: 0,
      transform: 0
    }), c = z(() => tn(e.position === "top" ? e.offsetTop : e.offsetBottom)), f = z(() => {
      const {
        fixed: h,
        height: l,
        width: $
      } = o;
      if (h)
        return {
          width: `${$}px`,
          height: `${l}px`
        };
    }), d = z(() => {
      if (!o.fixed)
        return;
      const h = oe(Zn(e.zIndex), {
        width: `${o.width}px`,
        height: `${o.height}px`,
        [e.position]: `${c.value}px`
      });
      return o.transform && (h.transform = `translate3d(0, ${o.transform}px, 0)`), h;
    }), s = (h) => t("scroll", {
      scrollTop: h,
      isFixed: o.fixed
    }), u = () => {
      if (!a.value || Ct(a))
        return;
      const {
        container: h,
        position: l
      } = e, $ = Te(a), k = Bt(window);
      if (o.width = $.width, o.height = $.height, l === "top")
        if (h) {
          const b = Te(h), v = b.bottom - c.value - o.height;
          o.fixed = c.value > $.top && b.bottom > 0, o.transform = v < 0 ? v : 0;
        } else
          o.fixed = c.value > $.top;
      else {
        const {
          clientHeight: b
        } = document.documentElement;
        if (h) {
          const v = Te(h), D = b - v.top - c.value - o.height;
          o.fixed = b - c.value < $.bottom && b > v.top, o.transform = D < 0 ? -D : 0;
        } else
          o.fixed = b - c.value < $.bottom;
      }
      s(k);
    };
    return U(() => o.fixed, (h) => t("change", h)), _e("scroll", u, {
      target: i,
      passive: !0
    }), ii(a, u), () => {
      var h;
      return r("div", {
        ref: a,
        style: f.value
      }, [r("div", {
        class: ci({
          fixed: o.fixed
        }),
        style: d.value
      }, [(h = n.default) == null ? void 0 : h.call(n)])]);
    };
  }
});
const di = ne(ui), [fi, _n] = Z("tab");
var vi = X({
  name: fi,
  props: {
    id: String,
    dot: Boolean,
    type: String,
    color: String,
    title: String,
    badge: j,
    shrink: Boolean,
    isActive: Boolean,
    disabled: Boolean,
    controls: String,
    scrollable: Boolean,
    activeColor: String,
    inactiveColor: String,
    showZeroBadge: W
  },
  setup(e, {
    slots: t
  }) {
    const n = z(() => {
      const i = {}, {
        type: o,
        color: c,
        disabled: f,
        isActive: d,
        activeColor: s,
        inactiveColor: u
      } = e;
      c && o === "card" && (i.borderColor = c, f || (d ? i.backgroundColor = c : i.color = c));
      const l = d ? s : u;
      return l && (i.color = l), i;
    }), a = () => {
      const i = r("span", {
        class: _n("text", {
          ellipsis: !e.scrollable
        })
      }, [t.title ? t.title() : e.title]);
      return e.dot || ie(e.badge) && e.badge !== "" ? r(na, {
        dot: e.dot,
        content: e.badge,
        showZero: e.showZeroBadge
      }, {
        default: () => [i]
      }) : i;
    };
    return () => r("div", {
      id: e.id,
      role: "tab",
      class: [_n([e.type, {
        grow: e.scrollable && !e.shrink,
        shrink: e.shrink,
        active: e.isActive,
        disabled: e.disabled
      }])],
      style: n.value,
      tabindex: e.disabled ? void 0 : e.isActive ? 0 : -1,
      "aria-selected": e.isActive,
      "aria-disabled": e.disabled || void 0,
      "aria-controls": e.controls
    }, [a()]);
  }
});
const [$a, mt] = Z("swipe"), mi = {
  loop: W,
  width: j,
  height: j,
  vertical: Boolean,
  autoplay: te(0),
  duration: te(500),
  touchable: W,
  lazyRender: Boolean,
  initialSwipe: te(0),
  indicatorColor: String,
  showIndicators: W,
  stopPropagation: W
}, Pa = Symbol($a);
var gi = X({
  name: $a,
  props: mi,
  emits: ["change"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const a = L(), i = L(), o = Se({
      rect: null,
      width: 0,
      height: 0,
      offset: 0,
      active: 0,
      swiping: !1
    }), c = Mt(), {
      children: f,
      linkChildren: d
    } = Qe(Pa), s = z(() => f.length), u = z(() => o[e.vertical ? "height" : "width"]), h = z(() => e.vertical ? c.deltaY.value : c.deltaX.value), l = z(() => o.rect ? (e.vertical ? o.rect.height : o.rect.width) - u.value * s.value : 0), $ = z(() => Math.ceil(Math.abs(l.value) / u.value)), k = z(() => s.value * u.value), b = z(() => (o.active + s.value) % s.value), v = z(() => {
      const x = e.vertical ? "vertical" : "horizontal";
      return c.direction.value === x;
    }), D = z(() => {
      const x = {
        transitionDuration: `${o.swiping ? 0 : e.duration}ms`,
        transform: `translate${e.vertical ? "Y" : "X"}(${o.offset}px)`
      };
      if (u.value) {
        const V = e.vertical ? "height" : "width", R = e.vertical ? "width" : "height";
        x[V] = `${k.value}px`, x[R] = e[R] ? `${e[R]}px` : "";
      }
      return x;
    }), m = (x) => {
      const {
        active: V
      } = o;
      return x ? e.loop ? be(V + x, -1, s.value) : be(V + x, 0, $.value) : V;
    }, y = (x, V = 0) => {
      let R = x * u.value;
      e.loop || (R = Math.min(R, -l.value));
      let Q = V - R;
      return e.loop || (Q = be(Q, l.value, 0)), Q;
    }, w = ({
      pace: x = 0,
      offset: V = 0,
      emitChange: R
    }) => {
      if (s.value <= 1)
        return;
      const {
        active: Q
      } = o, ae = m(x), Me = y(ae, V);
      if (e.loop) {
        if (f[0] && Me !== l.value) {
          const g = Me < l.value;
          f[0].setOffset(g ? k.value : 0);
        }
        if (f[s.value - 1] && Me !== 0) {
          const g = Me > 0;
          f[s.value - 1].setOffset(g ? -k.value : 0);
        }
      }
      o.active = ae, o.offset = Me, R && ae !== Q && t("change", b.value);
    }, S = () => {
      o.swiping = !0, o.active <= -1 ? w({
        pace: s.value
      }) : o.active >= s.value && w({
        pace: -s.value
      });
    }, P = () => {
      S(), c.reset(), at(() => {
        o.swiping = !1, w({
          pace: -1,
          emitChange: !0
        });
      });
    }, M = () => {
      S(), c.reset(), at(() => {
        o.swiping = !1, w({
          pace: 1,
          emitChange: !0
        });
      });
    };
    let I;
    const C = () => clearTimeout(I), T = () => {
      C(), e.autoplay > 0 && s.value > 1 && (I = setTimeout(() => {
        M(), T();
      }, +e.autoplay));
    }, A = (x = +e.initialSwipe) => {
      if (!a.value)
        return;
      const V = () => {
        var R, Q;
        if (!Ct(a)) {
          const ae = {
            width: a.value.offsetWidth,
            height: a.value.offsetHeight
          };
          o.rect = ae, o.width = +((R = e.width) != null ? R : ae.width), o.height = +((Q = e.height) != null ? Q : ae.height);
        }
        s.value && (x = Math.min(s.value - 1, x)), o.active = x, o.swiping = !0, o.offset = y(x), f.forEach((ae) => {
          ae.setOffset(0);
        }), T();
      };
      Ct(a) ? ee().then(V) : V();
    }, H = () => A(o.active);
    let B;
    const F = (x) => {
      e.touchable && (c.start(x), B = Date.now(), C(), S());
    }, E = (x) => {
      e.touchable && o.swiping && (c.move(x), v.value && (!e.loop && (o.active === 0 && h.value > 0 || o.active === s.value - 1 && h.value < 0) || (ye(x, e.stopPropagation), w({
        offset: h.value
      }))));
    }, _ = () => {
      if (!e.touchable || !o.swiping)
        return;
      const x = Date.now() - B, V = h.value / x;
      if ((Math.abs(V) > 0.25 || Math.abs(h.value) > u.value / 2) && v.value) {
        const Q = e.vertical ? c.offsetY.value : c.offsetX.value;
        let ae = 0;
        e.loop ? ae = Q > 0 ? h.value > 0 ? -1 : 1 : 0 : ae = -Math[h.value > 0 ? "ceil" : "floor"](h.value / u.value), w({
          pace: ae,
          emitChange: !0
        });
      } else
        h.value && w({
          pace: 0
        });
      o.swiping = !1, T();
    }, G = (x, V = {}) => {
      S(), c.reset(), at(() => {
        let R;
        e.loop && x === s.value ? R = o.active === 0 ? 0 : x : R = x % s.value, V.immediate ? at(() => {
          o.swiping = !1;
        }) : o.swiping = !1, w({
          pace: R - o.active,
          emitChange: !0
        });
      });
    }, q = (x, V) => {
      const R = V === b.value, Q = R ? {
        backgroundColor: e.indicatorColor
      } : void 0;
      return r("i", {
        style: Q,
        class: mt("indicator", {
          active: R
        })
      }, null);
    }, re = () => {
      if (n.indicator)
        return n.indicator({
          active: b.value,
          total: s.value
        });
      if (e.showIndicators && s.value > 1)
        return r("div", {
          class: mt("indicators", {
            vertical: e.vertical
          })
        }, [Array(s.value).fill("").map(q)]);
    };
    return se({
      prev: P,
      next: M,
      state: o,
      resize: H,
      swipeTo: G
    }), d({
      size: u,
      props: e,
      count: s,
      activeIndicator: b
    }), U(() => e.initialSwipe, (x) => A(+x)), U(s, () => A(o.active)), U(() => e.autoplay, T), U([Vt, en], H), U(pa(), (x) => {
      x === "visible" ? T() : C();
    }), ke(A), Et(() => A(o.active)), an(() => A(o.active)), it(C), ct(C), _e("touchmove", E, {
      target: i
    }), () => {
      var x;
      return r("div", {
        ref: a,
        class: mt()
      }, [r("div", {
        ref: i,
        style: D.value,
        class: mt("track", {
          vertical: e.vertical
        }),
        onTouchstartPassive: F,
        onTouchend: _,
        onTouchcancel: _
      }, [(x = n.default) == null ? void 0 : x.call(n)]), re()]);
    };
  }
});
const Ea = ne(gi), [hi, Mn] = Z("tabs");
var bi = X({
  name: hi,
  props: {
    count: me(Number),
    inited: Boolean,
    animated: Boolean,
    duration: me(j),
    swipeable: Boolean,
    lazyRender: Boolean,
    currentIndex: me(Number)
  },
  emits: ["change"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const a = L(), i = (f) => t("change", f), o = () => {
      var f;
      const d = (f = n.default) == null ? void 0 : f.call(n);
      return e.animated || e.swipeable ? r(Ea, {
        ref: a,
        loop: !1,
        class: Mn("track"),
        duration: +e.duration * 1e3,
        touchable: e.swipeable,
        lazyRender: e.lazyRender,
        showIndicators: !1,
        onChange: i
      }, {
        default: () => [d]
      }) : d;
    }, c = (f) => {
      const d = a.value;
      d && d.state.active !== f && d.swipeTo(f, {
        immediate: !e.inited
      });
    };
    return U(() => e.currentIndex, c), ke(() => {
      c(e.currentIndex);
    }), se({
      swipeRef: a
    }), () => r("div", {
      class: Mn("content", {
        animated: e.animated || e.swipeable
      })
    }, [o()]);
  }
});
const [Ba, gt] = Z("tabs"), yi = {
  type: O("line"),
  color: String,
  border: Boolean,
  sticky: Boolean,
  shrink: Boolean,
  active: te(0),
  duration: te(0.3),
  animated: Boolean,
  ellipsis: W,
  swipeable: Boolean,
  scrollspy: Boolean,
  offsetTop: te(0),
  background: String,
  lazyRender: W,
  lineWidth: j,
  lineHeight: j,
  beforeChange: Function,
  swipeThreshold: te(5),
  titleActiveColor: String,
  titleInactiveColor: String
}, Va = Symbol(Ba);
var wi = X({
  name: Ba,
  props: yi,
  emits: ["click", "change", "scroll", "disabled", "rendered", "click-tab", "update:active"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    var a, i;
    if (process.env.NODE_ENV !== "production") {
      const g = (i = (a = ze()) == null ? void 0 : a.vnode) == null ? void 0 : i.props;
      g && "onClick" in g && console.warn('[Vant] Tabs: "click" event is deprecated, using "click-tab" instead.'), g && "onDisabled" in g && console.warn('[Vant] Tabs: "disabled" event is deprecated, using "click-tab" instead.');
    }
    let o, c, f;
    const d = L(), s = L(), u = L(), h = L(), l = cn(), $ = Kn(d), [k, b] = xa(), {
      children: v,
      linkChildren: D
    } = Qe(Va), m = Se({
      inited: !1,
      position: "",
      lineStyle: {},
      currentIndex: -1
    }), y = z(() => v.length > e.swipeThreshold || !e.ellipsis || e.shrink), w = z(() => ({
      borderColor: e.color,
      background: e.background
    })), S = (g, N) => {
      var Y;
      return (Y = g.name) != null ? Y : N;
    }, P = z(() => {
      const g = v[m.currentIndex];
      if (g)
        return S(g, m.currentIndex);
    }), M = z(() => tn(e.offsetTop)), I = z(() => e.sticky ? M.value + o : 0), C = (g) => {
      const N = s.value, Y = k.value;
      if (!y.value || !N || !Y || !Y[m.currentIndex])
        return;
      const J = Y[m.currentIndex].$el, p = J.offsetLeft - (N.offsetWidth - J.offsetWidth) / 2;
      li(N, p, g ? 0 : +e.duration);
    }, T = () => {
      const g = m.inited;
      ee(() => {
        const N = k.value;
        if (!N || !N[m.currentIndex] || e.type !== "line" || Ct(d.value))
          return;
        const Y = N[m.currentIndex].$el, {
          lineWidth: J,
          lineHeight: p
        } = e, le = Y.offsetLeft + Y.offsetWidth / 2, ue = {
          width: ce(J),
          backgroundColor: e.color,
          transform: `translateX(${le}px) translateX(-50%)`
        };
        if (g && (ue.transitionDuration = `${e.duration}s`), ie(p)) {
          const Ne = ce(p);
          ue.height = Ne, ue.borderRadius = Ne;
        }
        m.lineStyle = ue;
      });
    }, A = (g) => {
      const N = g < m.currentIndex ? -1 : 1;
      for (; g >= 0 && g < v.length; ) {
        if (!v[g].disabled)
          return g;
        g += N;
      }
    }, H = (g, N) => {
      const Y = A(g);
      if (!ie(Y))
        return;
      const J = v[Y], p = S(J, Y), le = m.currentIndex !== null;
      m.currentIndex !== Y && (m.currentIndex = Y, N || C(), T()), p !== e.active && (t("update:active", p), le && t("change", p, J.title)), f && !e.scrollspy && pt(Math.ceil(yn(d.value) - M.value));
    }, B = (g, N) => {
      const Y = v.find((p, le) => S(p, le) === g), J = Y ? v.indexOf(Y) : 0;
      H(J, N);
    }, F = (g = !1) => {
      if (e.scrollspy) {
        const N = v[m.currentIndex].$el;
        if (N && $.value) {
          const Y = yn(N, $.value) - I.value;
          c = !0, oi($.value, Y, g ? 0 : +e.duration, () => {
            c = !1;
          });
        }
      }
    }, E = (g, N, Y) => {
      const {
        title: J,
        disabled: p
      } = v[N], le = S(v[N], N);
      p ? t("disabled", le, J) : (dt(e.beforeChange, {
        args: [le],
        done: () => {
          H(N), F();
        }
      }), t("click", le, J), ea(g)), t("click-tab", {
        name: le,
        title: J,
        event: Y,
        disabled: p
      });
    }, _ = (g) => {
      f = g.isFixed, t("scroll", g);
    }, G = (g) => {
      ee(() => {
        B(g), F(!0);
      });
    }, q = () => {
      for (let g = 0; g < v.length; g++) {
        const {
          top: N
        } = Te(v[g].$el);
        if (N > I.value)
          return g === 0 ? 0 : g - 1;
      }
      return v.length - 1;
    }, re = () => {
      if (e.scrollspy && !c) {
        const g = q();
        H(g);
      }
    }, x = () => v.map((g, N) => r(vi, K({
      key: g.id,
      id: `${l}-${N}`,
      ref: b(N),
      type: e.type,
      color: e.color,
      style: g.titleStyle,
      class: g.titleClass,
      shrink: e.shrink,
      isActive: N === m.currentIndex,
      controls: g.id,
      scrollable: y.value,
      activeColor: e.titleActiveColor,
      inactiveColor: e.titleInactiveColor,
      onClick: (Y) => E(g, N, Y)
    }, he(g, ["dot", "badge", "title", "disabled", "showZeroBadge"])), {
      title: g.$slots.title
    })), V = () => {
      if (e.type === "line" && v.length)
        return r("div", {
          class: gt("line"),
          style: m.lineStyle
        }, null);
    }, R = () => {
      var g, N, Y;
      const {
        type: J,
        border: p,
        sticky: le
      } = e, ue = [r("div", {
        ref: le ? void 0 : u,
        class: [gt("wrap"), {
          [Qn]: J === "line" && p
        }]
      }, [r("div", {
        ref: s,
        role: "tablist",
        class: gt("nav", [J, {
          shrink: e.shrink,
          complete: y.value
        }]),
        style: w.value,
        "aria-orientation": "horizontal"
      }, [(g = n["nav-left"]) == null ? void 0 : g.call(n), x(), V(), (N = n["nav-right"]) == null ? void 0 : N.call(n)])]), (Y = n["nav-bottom"]) == null ? void 0 : Y.call(n)];
      return le ? r("div", {
        ref: u
      }, [ue]) : ue;
    };
    U([() => e.color, Vt], T), U(() => e.active, (g) => {
      g !== P.value && B(g);
    }), U(() => v.length, () => {
      m.inited && (B(e.active), T(), ee(() => {
        C(!0);
      }));
    });
    const Q = () => {
      B(e.active, !0), ee(() => {
        m.inited = !0, u.value && (o = Te(u.value).height), C(!0);
      });
    }, ae = (g, N) => t("rendered", g, N);
    return se({
      resize: () => {
        T(), ee(() => {
          var g, N;
          return (N = (g = h.value) == null ? void 0 : g.swipeRef.value) == null ? void 0 : N.resize();
        });
      },
      scrollTo: G
    }), Et(T), an(T), ut(Q), _e("scroll", re, {
      target: $,
      passive: !0
    }), D({
      id: l,
      props: e,
      setLine: T,
      onRendered: ae,
      currentName: P,
      scrollIntoView: C
    }), () => r("div", {
      ref: d,
      class: gt([e.type])
    }, [e.sticky ? r(di, {
      container: d.value,
      offsetTop: M.value,
      onScroll: _
    }, {
      default: () => [R()]
    }) : R(), r(bi, {
      ref: h,
      count: v.length,
      inited: m.inited,
      animated: e.animated,
      duration: e.duration,
      swipeable: e.swipeable,
      lazyRender: e.lazyRender,
      currentIndex: m.currentIndex,
      onChange: H
    }, {
      default: () => {
        var g;
        return [(g = n.default) == null ? void 0 : g.call(n)];
      }
    })]);
  }
});
const Si = Symbol(), [xi, Ci] = Z("swipe-item");
var ki = X({
  name: xi,
  setup(e, {
    slots: t
  }) {
    let n;
    const a = Se({
      offset: 0,
      inited: !1,
      mounted: !1
    }), {
      parent: i,
      index: o
    } = Je(Pa);
    if (!i) {
      process.env.NODE_ENV !== "production" && console.error("[Vant] <SwipeItem> must be a child component of <Swipe>.");
      return;
    }
    const c = z(() => {
      const s = {}, {
        vertical: u
      } = i.props;
      return i.size.value && (s[u ? "height" : "width"] = `${i.size.value}px`), a.offset && (s.transform = `translate${u ? "Y" : "X"}(${a.offset}px)`), s;
    }), f = z(() => {
      const {
        loop: s,
        lazyRender: u
      } = i.props;
      if (!u || n)
        return !0;
      if (!a.mounted)
        return !1;
      const h = i.activeIndicator.value, l = i.count.value - 1, $ = h === 0 && s ? l : h - 1, k = h === l && s ? 0 : h + 1;
      return n = o.value === h || o.value === $ || o.value === k, n;
    }), d = (s) => {
      a.offset = s;
    };
    return ke(() => {
      ee(() => {
        a.mounted = !0;
      });
    }), se({
      setOffset: d
    }), () => {
      var s;
      return r("div", {
        class: Ci(),
        style: c.value
      }, [f.value ? (s = t.default) == null ? void 0 : s.call(t) : null]);
    };
  }
});
const _a = ne(ki), [Ii, Yt] = Z("tab"), Ti = oe({}, ln, {
  dot: Boolean,
  name: j,
  badge: j,
  title: String,
  disabled: Boolean,
  titleClass: ve,
  titleStyle: [String, Object],
  showZeroBadge: W
});
var Di = X({
  name: Ii,
  props: Ti,
  setup(e, {
    slots: t
  }) {
    const n = cn(), a = L(!1), {
      parent: i,
      index: o
    } = Je(Va);
    if (!i) {
      process.env.NODE_ENV !== "production" && console.error("[Vant] <Tab> must be a child component of <Tabs>.");
      return;
    }
    const c = () => {
      var u;
      return (u = e.name) != null ? u : o.value;
    }, f = () => {
      a.value = !0, i.props.lazyRender && ee(() => {
        i.onRendered(c(), e.title);
      });
    }, d = z(() => {
      const u = c() === i.currentName.value;
      return u && !a.value && f(), u;
    }), s = L(!d.value);
    return U(d, (u) => {
      u ? s.value = !1 : at(() => {
        s.value = !0;
      });
    }), U(() => e.title, () => {
      i.setLine(), i.scrollIntoView();
    }), rt(Si, d), () => {
      var u;
      const h = `${i.id}-${o.value}`, {
        animated: l,
        swipeable: $,
        scrollspy: k,
        lazyRender: b
      } = i.props;
      if (!t.default && !l)
        return;
      const v = k || d.value;
      if (l || $)
        return r(_a, {
          id: n,
          role: "tabpanel",
          class: Yt("panel-wrapper", {
            inactive: s.value
          }),
          tabindex: d.value ? 0 : -1,
          "aria-hidden": !d.value,
          "aria-labelledby": h
        }, {
          default: () => {
            var y;
            return [r("div", {
              class: Yt("panel")
            }, [(y = t.default) == null ? void 0 : y.call(t)])];
          }
        });
      const m = a.value || k || !b ? (u = t.default) == null ? void 0 : u.call(t) : null;
      return se({
        id: n
      }), Le(r("div", {
        id: n,
        role: "tabpanel",
        class: Yt("panel"),
        tabindex: v ? 0 : -1,
        "aria-labelledby": h
      }, [m]), [[Ke, v]]);
    };
  }
});
const $i = ne(Di), Pi = ne(wi), [Ei, Ee, Bi] = Z("cascader"), Vi = {
  title: String,
  options: qe(),
  closeable: W,
  swipeable: W,
  closeIcon: O("cross"),
  showHeader: W,
  modelValue: j,
  fieldNames: Object,
  placeholder: String,
  activeColor: String
};
var _i = X({
  name: Ei,
  props: Vi,
  emits: ["close", "change", "finish", "click-tab", "update:modelValue"],
  setup(e, {
    slots: t,
    emit: n
  }) {
    const a = L([]), i = L(0), {
      text: o,
      value: c,
      children: f
    } = oe({
      text: "text",
      value: "value",
      children: "children"
    }, e.fieldNames), d = (m, y) => {
      for (const w of m) {
        if (w[c] === y)
          return [w];
        if (w[f]) {
          const S = d(w[f], y);
          if (S)
            return [w, ...S];
        }
      }
    }, s = () => {
      const {
        options: m,
        modelValue: y
      } = e;
      if (y !== void 0) {
        const w = d(m, y);
        if (w) {
          let S = m;
          a.value = w.map((P) => {
            const M = {
              options: S,
              selected: P
            }, I = S.find((C) => C[c] === P[c]);
            return I && (S = I[f]), M;
          }), S && a.value.push({
            options: S,
            selected: null
          }), ee(() => {
            i.value = a.value.length - 1;
          });
          return;
        }
      }
      a.value = [{
        options: m,
        selected: null
      }];
    }, u = (m, y) => {
      if (m.disabled)
        return;
      if (a.value[y].selected = m, a.value.length > y + 1 && (a.value = a.value.slice(0, y + 1)), m[f]) {
        const P = {
          options: m[f],
          selected: null
        };
        a.value[y + 1] ? a.value[y + 1] = P : a.value.push(P), ee(() => {
          i.value++;
        });
      }
      const w = a.value.map((P) => P.selected).filter(Boolean);
      n("update:modelValue", m[c]);
      const S = {
        value: m[c],
        tabIndex: y,
        selectedOptions: w
      };
      n("change", S), m[f] || n("finish", S);
    }, h = () => n("close"), l = ({
      name: m,
      title: y
    }) => n("click-tab", m, y), $ = () => e.showHeader ? r("div", {
      class: Ee("header")
    }, [r("h2", {
      class: Ee("title")
    }, [t.title ? t.title() : e.title]), e.closeable ? r(ge, {
      name: e.closeIcon,
      class: [Ee("close-icon"), He],
      onClick: h
    }, null) : null]) : null, k = (m, y, w) => {
      const {
        disabled: S
      } = m, P = !!(y && m[c] === y[c]), M = m.color || (P ? e.activeColor : void 0), I = t.option ? t.option({
        option: m,
        selected: P
      }) : r("span", null, [m[o]]);
      return r("li", {
        role: "menuitemradio",
        class: [Ee("option", {
          selected: P,
          disabled: S
        }), m.className],
        style: {
          color: M
        },
        tabindex: S ? void 0 : P ? 0 : -1,
        "aria-checked": P,
        "aria-disabled": S || void 0,
        onClick: () => u(m, w)
      }, [I, P ? r(ge, {
        name: "success",
        class: Ee("selected-icon")
      }, null) : null]);
    }, b = (m, y, w) => r("ul", {
      role: "menu",
      class: Ee("options")
    }, [m.map((S) => k(S, y, w))]), v = (m, y) => {
      const {
        options: w,
        selected: S
      } = m, P = e.placeholder || Bi("select"), M = S ? S[o] : P;
      return r($i, {
        title: M,
        titleClass: Ee("tab", {
          unselected: !S
        })
      }, {
        default: () => {
          var I, C;
          return [(I = t["options-top"]) == null ? void 0 : I.call(t, {
            tabIndex: y
          }), b(w, S, y), (C = t["options-bottom"]) == null ? void 0 : C.call(t, {
            tabIndex: y
          })];
        }
      });
    }, D = () => r(Pi, {
      active: i.value,
      "onUpdate:active": (m) => i.value = m,
      shrink: !0,
      animated: !0,
      class: Ee("tabs"),
      color: e.activeColor,
      swipeable: e.swipeable,
      "onClick-tab": l
    }, {
      default: () => [a.value.map(v)]
    });
    return s(), U(() => e.options, s, {
      deep: !0
    }), U(() => e.modelValue, (m) => {
      m !== void 0 && a.value.map((w) => {
        var S;
        return (S = w.selected) == null ? void 0 : S[c];
      }).includes(m) || s();
    }), () => r("div", {
      class: Ee()
    }, [$(), D()]);
  }
});
const Mi = ne(_i), [Ri, Rn] = Z("cell-group"), Ai = {
  title: String,
  inset: Boolean,
  border: W
};
var zi = X({
  name: Ri,
  inheritAttrs: !1,
  props: Ai,
  setup(e, {
    slots: t,
    attrs: n
  }) {
    const a = () => {
      var o;
      return r("div", K({
        class: [Rn({
          inset: e.inset
        }), {
          [Qn]: e.border && !e.inset
        }]
      }, n), [(o = t.default) == null ? void 0 : o.call(t)]);
    }, i = () => r("div", {
      class: Rn("title", {
        inset: e.inset
      })
    }, [t.title ? t.title() : e.title]);
    return () => e.title || t.title ? r(Be, null, [i(), a()]) : a();
  }
});
const Fi = ne(zi), [Ma, Ni] = Z("checkbox-group"), Li = {
  max: j,
  disabled: Boolean,
  iconSize: j,
  direction: String,
  modelValue: qe(),
  checkedColor: String
}, Ra = Symbol(Ma);
var Hi = X({
  name: Ma,
  props: Li,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      children: a,
      linkChildren: i
    } = Qe(Ra), o = (f) => t("update:modelValue", f), c = (f = {}) => {
      typeof f == "boolean" && (f = {
        checked: f
      });
      const {
        checked: d,
        skipDisabled: s
      } = f, h = a.filter((l) => l.props.bindGroup ? l.props.disabled && s ? l.checked.value : d ?? !l.checked.value : !1).map((l) => l.name);
      o(h);
    };
    return U(() => e.modelValue, (f) => t("change", f)), se({
      toggleAll: c
    }), Oe(() => e.modelValue), i({
      props: e,
      updateValue: o
    }), () => {
      var f;
      return r("div", {
        class: Ni([e.direction])
      }, [(f = n.default) == null ? void 0 : f.call(n)]);
    };
  }
});
const [Yi, ji] = Z("checkbox"), Ui = oe({}, un, {
  bindGroup: W
});
var Wi = X({
  name: Yi,
  props: Ui,
  emits: ["change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const {
      parent: a
    } = Je(Ra), i = (f) => {
      const {
        name: d
      } = e, {
        max: s,
        modelValue: u
      } = a.props, h = u.slice();
      if (f)
        !(s && h.length >= s) && !h.includes(d) && (h.push(d), e.bindGroup && a.updateValue(h));
      else {
        const l = h.indexOf(d);
        l !== -1 && (h.splice(l, 1), e.bindGroup && a.updateValue(h));
      }
    }, o = z(() => a && e.bindGroup ? a.props.modelValue.indexOf(e.name) !== -1 : !!e.modelValue), c = (f = !o.value) => {
      a && e.bindGroup ? i(f) : t("update:modelValue", f);
    };
    return U(() => e.modelValue, (f) => t("change", f)), se({
      toggle: c,
      props: e,
      checked: o
    }), Oe(() => e.modelValue), () => r(wa, K({
      bem: ji,
      role: "checkbox",
      parent: a,
      checked: o.value,
      onToggle: c
    }, e), he(n, ["default", "icon"]));
  }
});
const Ki = ne(Wi), Xi = ne(Hi), [Gi] = Z("time-picker");
var fn = X({
  name: Gi,
  props: oe({}, Ca, {
    minHour: te(0),
    maxHour: te(23),
    minMinute: te(0),
    maxMinute: te(59),
    modelValue: String
  }),
  emits: ["confirm", "cancel", "change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const a = (k) => {
      const {
        minHour: b,
        maxHour: v,
        maxMinute: D,
        minMinute: m
      } = e;
      k || (k = `${De(b)}:${De(m)}`);
      let [y, w] = k.split(":");
      return y = De(be(+y, +b, +v)), w = De(be(+w, +m, +D)), `${y}:${w}`;
    }, i = L(), o = L(a(e.modelValue)), c = z(() => [{
      type: "hour",
      range: [+e.minHour, +e.maxHour]
    }, {
      type: "minute",
      range: [+e.minMinute, +e.maxMinute]
    }]), f = z(() => c.value.map(({
      type: k,
      range: b
    }) => {
      let v = Ia(b[1] - b[0] + 1, (D) => De(b[0] + D));
      return e.filter && (v = e.filter(k, v)), {
        type: k,
        values: v
      };
    })), d = z(() => f.value.map((k) => ({
      values: k.values.map((b) => e.formatter(k.type, b))
    }))), s = () => {
      const k = o.value.split(":"), b = [e.formatter("hour", k[0]), e.formatter("minute", k[1])];
      ee(() => {
        var v;
        (v = i.value) == null || v.setValues(b);
      });
    }, u = () => {
      const [k, b] = i.value.getIndexes(), [v, D] = f.value, m = v.values[k] || v.values[0], y = D.values[b] || D.values[0];
      o.value = a(`${m}:${y}`), s();
    }, h = () => t("confirm", o.value), l = () => t("cancel"), $ = () => {
      u(), ee(() => {
        ee(() => t("change", o.value));
      });
    };
    return ke(() => {
      s(), ee(u);
    }), U(d, s), U(() => [e.filter, e.maxHour, e.minMinute, e.maxMinute], u), U(() => e.minHour, () => {
      ee(u);
    }), U(o, (k) => t("update:modelValue", k)), U(() => e.modelValue, (k) => {
      k = a(k), k !== o.value && (o.value = k, s());
    }), se({
      getPicker: () => i.value && Ta(i.value, u)
    }), () => r(rn, K({
      ref: i,
      columns: d.value,
      onChange: $,
      onCancel: l,
      onConfirm: h
    }, he(e, ka)), n);
  }
});
const An = new Date().getFullYear(), [Zi] = Z("date-picker");
var vn = X({
  name: Zi,
  props: oe({}, Ca, {
    type: O("datetime"),
    modelValue: Date,
    minDate: {
      type: Date,
      default: () => new Date(An - 10, 0, 1),
      validator: Xe
    },
    maxDate: {
      type: Date,
      default: () => new Date(An + 10, 11, 31),
      validator: Xe
    }
  }),
  emits: ["confirm", "cancel", "change", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const a = (b) => {
      if (Xe(b)) {
        const v = be(b.getTime(), e.minDate.getTime(), e.maxDate.getTime());
        return new Date(v);
      }
    }, i = L(), o = L(a(e.modelValue)), c = (b, v) => {
      const D = e[`${b}Date`], m = D.getFullYear();
      let y = 1, w = 1, S = 0, P = 0;
      return b === "max" && (y = 12, w = Zt(v.getFullYear(), v.getMonth() + 1), S = 23, P = 59), v.getFullYear() === m && (y = D.getMonth() + 1, v.getMonth() + 1 === y && (w = D.getDate(), v.getDate() === w && (S = D.getHours(), v.getHours() === S && (P = D.getMinutes())))), {
        [`${b}Year`]: m,
        [`${b}Month`]: y,
        [`${b}Date`]: w,
        [`${b}Hour`]: S,
        [`${b}Minute`]: P
      };
    }, f = z(() => {
      const {
        maxYear: b,
        maxDate: v,
        maxMonth: D,
        maxHour: m,
        maxMinute: y
      } = c("max", o.value || e.minDate), {
        minYear: w,
        minDate: S,
        minMonth: P,
        minHour: M,
        minMinute: I
      } = c("min", o.value || e.minDate);
      let C = [{
        type: "year",
        range: [w, b]
      }, {
        type: "month",
        range: [P, D]
      }, {
        type: "day",
        range: [S, v]
      }, {
        type: "hour",
        range: [M, m]
      }, {
        type: "minute",
        range: [I, y]
      }];
      switch (e.type) {
        case "date":
          C = C.slice(0, 3);
          break;
        case "year-month":
          C = C.slice(0, 2);
          break;
        case "month-day":
          C = C.slice(1, 3);
          break;
        case "datehour":
          C = C.slice(0, 4);
          break;
      }
      if (e.columnsOrder) {
        const T = e.columnsOrder.concat(C.map((A) => A.type));
        C.sort((A, H) => T.indexOf(A.type) - T.indexOf(H.type));
      }
      return C;
    }), d = z(() => f.value.map(({
      type: b,
      range: v
    }) => {
      let D = Ia(v[1] - v[0] + 1, (m) => De(v[0] + m));
      return e.filter && (D = e.filter(b, D)), {
        type: b,
        values: D
      };
    })), s = z(() => d.value.map((b) => ({
      values: b.values.map((v) => e.formatter(b.type, v))
    }))), u = () => {
      const b = o.value || e.minDate, {
        formatter: v
      } = e, D = d.value.map((m) => {
        switch (m.type) {
          case "year":
            return v("year", `${b.getFullYear()}`);
          case "month":
            return v("month", De(b.getMonth() + 1));
          case "day":
            return v("day", De(b.getDate()));
          case "hour":
            return v("hour", De(b.getHours()));
          case "minute":
            return v("minute", De(b.getMinutes()));
          default:
            return "";
        }
      });
      ee(() => {
        var m;
        (m = i.value) == null || m.setValues(D);
      });
    }, h = () => {
      const {
        type: b
      } = e, v = i.value.getIndexes(), D = (C) => {
        let T = 0;
        d.value.forEach((H, B) => {
          C === H.type && (T = B);
        });
        const {
          values: A
        } = d.value[T];
        return Wo(A[v[T]]);
      };
      let m, y, w;
      b === "month-day" ? (m = (o.value || e.minDate).getFullYear(), y = D("month"), w = D("day")) : (m = D("year"), y = D("month"), w = b === "year-month" ? 1 : D("day"));
      const S = Zt(m, y);
      w = w > S ? S : w;
      let P = 0, M = 0;
      b === "datehour" && (P = D("hour")), b === "datetime" && (P = D("hour"), M = D("minute"));
      const I = new Date(m, y - 1, w, P, M);
      o.value = a(I);
    }, l = () => {
      t("update:modelValue", o.value), t("confirm", o.value);
    }, $ = () => t("cancel"), k = () => {
      h(), ee(() => {
        h(), ee(() => t("change", o.value));
      });
    };
    return ke(() => {
      u(), ee(h);
    }), U(s, u), U(o, (b, v) => t("update:modelValue", v ? b : null)), U(() => [e.filter, e.minDate, e.maxDate], () => {
      ee(h);
    }), U(() => e.modelValue, (b) => {
      var v;
      b = a(b), b && b.valueOf() !== ((v = o.value) == null ? void 0 : v.valueOf()) && (o.value = b);
    }), se({
      getPicker: () => i.value && Ta(i.value, h)
    }), () => r(rn, K({
      ref: i,
      columns: s.value,
      onChange: k,
      onCancel: $,
      onConfirm: l
    }, he(e, ka)), n);
  }
});
const [qi, Ji] = Z("datetime-picker"), Qi = Object.keys(fn.props), Oi = Object.keys(vn.props), pi = oe({}, fn.props, vn.props, {
  modelValue: [String, Date]
});
var er = X({
  name: qi,
  props: pi,
  setup(e, {
    attrs: t,
    slots: n
  }) {
    const a = L();
    return se({
      getPicker: () => {
        var i;
        return (i = a.value) == null ? void 0 : i.getPicker();
      }
    }), () => {
      const i = e.type === "time", o = i ? fn : vn, c = he(e, i ? Qi : Oi);
      return r(o, K({
        ref: a,
        class: Ji()
      }, c, t), n);
    };
  }
});
const tr = ne(er), zn = (e) => Math.sqrt((e[0].clientX - e[1].clientX) ** 2 + (e[0].clientY - e[1].clientY) ** 2), jt = Z("image-preview")[1];
var nr = X({
  props: {
    src: String,
    show: Boolean,
    active: Number,
    minZoom: me(j),
    maxZoom: me(j),
    rootWidth: me(Number),
    rootHeight: me(Number)
  },
  emits: ["scale", "close"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const a = Se({
      scale: 1,
      moveX: 0,
      moveY: 0,
      moving: !1,
      zooming: !1,
      imageRatio: 0,
      displayWidth: 0,
      displayHeight: 0
    }), i = Mt(), o = L(), c = z(() => {
      const {
        rootWidth: C,
        rootHeight: T
      } = e, A = T / C;
      return a.imageRatio > A;
    }), f = z(() => {
      const {
        scale: C,
        moveX: T,
        moveY: A,
        moving: H,
        zooming: B
      } = a, F = {
        transitionDuration: B || H ? "0s" : ".3s"
      };
      if (C !== 1) {
        const E = T / C, _ = A / C;
        F.transform = `scale(${C}, ${C}) translate(${E}px, ${_}px)`;
      }
      return F;
    }), d = z(() => {
      if (a.imageRatio) {
        const {
          rootWidth: C,
          rootHeight: T
        } = e, A = c.value ? T / a.imageRatio : C;
        return Math.max(0, (a.scale * A - C) / 2);
      }
      return 0;
    }), s = z(() => {
      if (a.imageRatio) {
        const {
          rootWidth: C,
          rootHeight: T
        } = e, A = c.value ? T : C * a.imageRatio;
        return Math.max(0, (a.scale * A - T) / 2);
      }
      return 0;
    }), u = (C) => {
      C = be(C, +e.minZoom, +e.maxZoom + 1), C !== a.scale && (a.scale = C, t("scale", {
        scale: C,
        index: e.active
      }));
    }, h = () => {
      u(1), a.moveX = 0, a.moveY = 0;
    }, l = () => {
      const C = a.scale > 1 ? 1 : 2;
      u(C), a.moveX = 0, a.moveY = 0;
    };
    let $, k, b, v, D, m, y;
    const w = (C) => {
      const {
        touches: T
      } = C, {
        offsetX: A
      } = i;
      i.start(C), $ = T.length, k = a.moveX, b = a.moveY, y = Date.now(), a.moving = $ === 1 && a.scale !== 1, a.zooming = $ === 2 && !A.value, a.zooming && (v = a.scale, D = zn(C.touches));
    }, S = (C) => {
      const {
        touches: T
      } = C;
      if (i.move(C), (a.moving || a.zooming) && ye(C, !0), a.moving) {
        const {
          deltaX: A,
          deltaY: H
        } = i, B = A.value + k, F = H.value + b;
        a.moveX = be(B, -d.value, d.value), a.moveY = be(F, -s.value, s.value);
      }
      if (a.zooming && T.length === 2) {
        const A = zn(T), H = v * A / D;
        u(H);
      }
    }, P = () => {
      if ($ > 1)
        return;
      const {
        offsetX: C,
        offsetY: T
      } = i, A = Date.now() - y, H = 250, B = 5;
      C.value < B && T.value < B && A < H && (m ? (clearTimeout(m), m = null, l()) : m = setTimeout(() => {
        t("close"), m = null;
      }, H));
    }, M = (C) => {
      let T = !1;
      (a.moving || a.zooming) && (T = !0, a.moving && k === a.moveX && b === a.moveY && (T = !1), C.touches.length || (a.zooming && (a.moveX = be(a.moveX, -d.value, d.value), a.moveY = be(a.moveY, -s.value, s.value), a.zooming = !1), a.moving = !1, k = 0, b = 0, v = 1, a.scale < 1 && h(), a.scale > e.maxZoom && (a.scale = +e.maxZoom))), ye(C, T), P(), i.reset();
    }, I = (C) => {
      const {
        naturalWidth: T,
        naturalHeight: A
      } = C.target;
      a.imageRatio = A / T;
    };
    return U(() => e.active, h), U(() => e.show, (C) => {
      C || h();
    }), _e("touchmove", S, {
      target: z(() => {
        var C;
        return (C = o.value) == null ? void 0 : C.$el;
      })
    }), () => {
      const C = {
        loading: () => r(pe, {
          type: "spinner"
        }, null)
      };
      return r(_a, {
        ref: o,
        class: jt("swipe-item"),
        onTouchstartPassive: w,
        onTouchend: M,
        onTouchcancel: M
      }, {
        default: () => [n.image ? r("div", {
          class: jt("image-wrap")
        }, [n.image({
          src: e.src
        })]) : r(Da, {
          src: e.src,
          fit: "contain",
          class: jt("image", {
            vertical: c.value
          }),
          style: f.value,
          onLoad: I
        }, C)]
      });
    };
  }
});
const [ar, We] = Z("image-preview"), lr = ["show", "transition", "overlayStyle", "closeOnPopstate"], or = {
  show: Boolean,
  loop: W,
  images: qe(),
  minZoom: te(1 / 3),
  maxZoom: te(3),
  overlay: W,
  closeable: Boolean,
  showIndex: W,
  className: ve,
  closeIcon: O("clear"),
  transition: String,
  beforeClose: Function,
  overlayClass: ve,
  overlayStyle: Object,
  swipeDuration: te(300),
  startPosition: te(0),
  showIndicators: Boolean,
  closeOnPopstate: W,
  closeIconPosition: O("top-right")
};
var Aa = X({
  name: ar,
  props: or,
  emits: ["scale", "close", "closed", "change", "update:show"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const a = L(), i = Se({
      active: 0,
      rootWidth: 0,
      rootHeight: 0
    }), o = () => {
      if (a.value) {
        const v = Te(a.value.$el);
        i.rootWidth = v.width, i.rootHeight = v.height, a.value.resize();
      }
    }, c = (v) => t("scale", v), f = (v) => t("update:show", v), d = () => {
      dt(e.beforeClose, {
        args: [i.active],
        done: () => f(!1)
      });
    }, s = (v) => {
      v !== i.active && (i.active = v, t("change", v));
    }, u = () => {
      if (e.showIndex)
        return r("div", {
          class: We("index")
        }, [n.index ? n.index({
          index: i.active
        }) : `${i.active + 1} / ${e.images.length}`]);
    }, h = () => {
      if (n.cover)
        return r("div", {
          class: We("cover")
        }, [n.cover()]);
    }, l = () => r(Ea, {
      ref: a,
      lazyRender: !0,
      loop: e.loop,
      class: We("swipe"),
      duration: e.swipeDuration,
      initialSwipe: e.startPosition,
      showIndicators: e.showIndicators,
      indicatorColor: "white",
      onChange: s
    }, {
      default: () => [e.images.map((v) => r(nr, {
        src: v,
        show: e.show,
        active: i.active,
        maxZoom: e.maxZoom,
        minZoom: e.minZoom,
        rootWidth: i.rootWidth,
        rootHeight: i.rootHeight,
        onScale: c,
        onClose: d
      }, {
        image: n.image
      }))]
    }), $ = () => {
      if (e.closeable)
        return r(ge, {
          role: "button",
          name: e.closeIcon,
          class: [We("close-icon", e.closeIconPosition), He],
          onClick: d
        }, null);
    }, k = () => t("closed"), b = (v, D) => {
      var m;
      return (m = a.value) == null ? void 0 : m.swipeTo(v, D);
    };
    return se({
      swipeTo: b
    }), ke(o), U([Vt, en], o), U(() => e.startPosition, (v) => s(+v)), U(() => e.show, (v) => {
      const {
        images: D,
        startPosition: m
      } = e;
      v ? (s(+m), ee(() => {
        o(), b(+m, {
          immediate: !0
        });
      })) : t("close", {
        index: i.active,
        url: D[i.active]
      });
    }), () => r(Ge, K({
      class: [We(), e.className],
      overlayClass: [We("overlay"), e.overlayClass],
      onClosed: k,
      "onUpdate:show": f
    }, he(e, lr)), {
      default: () => [$(), l(), u(), h()]
    });
  }
});
let yt;
const ir = {
  loop: !0,
  images: [],
  maxZoom: 3,
  minZoom: 1 / 3,
  onScale: void 0,
  onClose: void 0,
  onChange: void 0,
  teleport: "body",
  className: "",
  showIndex: !0,
  closeable: !1,
  closeIcon: "clear",
  transition: void 0,
  beforeClose: void 0,
  overlayStyle: void 0,
  overlayClass: void 0,
  startPosition: 0,
  swipeDuration: 300,
  showIndicators: !1,
  closeOnPopstate: !0,
  closeIconPosition: "top-right"
};
function rr() {
  ({
    instance: yt
  } = va({
    setup() {
      const {
        state: e,
        toggle: t
      } = fa(), n = () => {
        e.images = [];
      };
      return () => r(Aa, K(e, {
        onClosed: n,
        "onUpdate:show": t
      }), null);
    }
  }));
}
const $t = (e, t = 0) => {
  if (Ze)
    return yt || rr(), e = Array.isArray(e) ? {
      images: e,
      startPosition: t
    } : e, yt.open(oe({}, ir, e)), yt;
};
$t.Component = ne(Aa);
$t.install = (e) => {
  e.use($t.Component);
};
const [cr, ht] = Z("stepper"), sr = 200, ur = 600, bt = (e, t) => String(e) === String(t), dr = {
  min: te(1),
  max: te(1 / 0),
  name: te(""),
  step: te(1),
  theme: String,
  integer: Boolean,
  disabled: Boolean,
  showPlus: W,
  showMinus: W,
  showInput: W,
  longPress: W,
  allowEmpty: Boolean,
  modelValue: j,
  inputWidth: j,
  buttonSize: j,
  placeholder: String,
  disablePlus: Boolean,
  disableMinus: Boolean,
  disableInput: Boolean,
  beforeChange: Function,
  defaultValue: te(1),
  decimalLength: j
};
var fr = X({
  name: cr,
  props: dr,
  emits: ["plus", "blur", "minus", "focus", "change", "overlimit", "update:modelValue"],
  setup(e, {
    emit: t
  }) {
    const n = (I) => {
      const {
        min: C,
        max: T,
        allowEmpty: A,
        decimalLength: H
      } = e;
      return A && I === "" || (I = Ut(String(I), !e.integer), I = I === "" ? 0 : +I, I = Number.isNaN(I) ? +C : I, I = Math.max(Math.min(+T, I), +C), ie(H) && (I = I.toFixed(+H))), I;
    }, a = () => {
      var I;
      const C = (I = e.modelValue) != null ? I : e.defaultValue, T = n(C);
      return bt(T, e.modelValue) || t("update:modelValue", T), T;
    };
    let i;
    const o = L(), c = L(a()), f = z(() => e.disabled || e.disableMinus || c.value <= +e.min), d = z(() => e.disabled || e.disablePlus || c.value >= +e.max), s = z(() => ({
      width: ce(e.inputWidth),
      height: ce(e.buttonSize)
    })), u = z(() => _t(e.buttonSize)), h = () => {
      const I = n(c.value);
      bt(I, c.value) || (c.value = I);
    }, l = (I) => {
      e.beforeChange ? dt(e.beforeChange, {
        args: [I],
        done() {
          c.value = I;
        }
      }) : c.value = I;
    }, $ = () => {
      if (i === "plus" && d.value || i === "minus" && f.value) {
        t("overlimit", i);
        return;
      }
      const I = i === "minus" ? -e.step : +e.step, C = n(cl(+c.value, I));
      l(C), t(i);
    }, k = (I) => {
      const C = I.target, {
        value: T
      } = C, {
        decimalLength: A
      } = e;
      let H = Ut(String(T), !e.integer);
      if (ie(A) && H.includes(".")) {
        const F = H.split(".");
        H = `${F[0]}.${F[1].slice(0, +A)}`;
      }
      e.beforeChange ? C.value = String(c.value) : bt(T, H) || (C.value = H);
      const B = H === String(+H);
      l(B ? +H : H);
    }, b = (I) => {
      var C;
      e.disableInput ? (C = o.value) == null || C.blur() : t("focus", I);
    }, v = (I) => {
      const C = I.target, T = n(C.value);
      C.value = String(T), c.value = T, ee(() => {
        t("blur", I), Gn();
      });
    };
    let D, m;
    const y = () => {
      m = setTimeout(() => {
        $(), y();
      }, sr);
    }, w = () => {
      e.longPress && (D = !1, clearTimeout(m), m = setTimeout(() => {
        D = !0, $(), y();
      }, ur));
    }, S = (I) => {
      e.longPress && (clearTimeout(m), D && ye(I));
    }, P = (I) => {
      e.disableInput && ye(I);
    }, M = (I) => ({
      onClick: (C) => {
        ye(C), i = I, $();
      },
      onTouchstartPassive: () => {
        i = I, w();
      },
      onTouchend: S,
      onTouchcancel: S
    });
    return U(() => [e.max, e.min, e.integer, e.decimalLength], h), U(() => e.modelValue, (I) => {
      bt(I, c.value) || (c.value = n(I));
    }), U(c, (I) => {
      t("update:modelValue", I), t("change", I, {
        name: e.name
      });
    }), Oe(() => e.modelValue), () => r("div", {
      role: "group",
      class: ht([e.theme])
    }, [Le(r("button", K({
      type: "button",
      style: u.value,
      class: [ht("minus", {
        disabled: f.value
      }), {
        [He]: !f.value
      }],
      "aria-disabled": f.value || void 0
    }, M("minus")), null), [[Ke, e.showMinus]]), Le(r("input", {
      ref: o,
      type: e.integer ? "tel" : "text",
      role: "spinbutton",
      class: ht("input"),
      value: c.value,
      style: s.value,
      disabled: e.disabled,
      readonly: e.disableInput,
      inputmode: e.integer ? "numeric" : "decimal",
      placeholder: e.placeholder,
      "aria-valuemax": e.max,
      "aria-valuemin": e.min,
      "aria-valuenow": c.value,
      onBlur: v,
      onInput: k,
      onFocus: b,
      onMousedown: P
    }, null), [[Ke, e.showInput]]), Le(r("button", K({
      type: "button",
      style: u.value,
      class: [ht("plus", {
        disabled: d.value
      }), {
        [He]: !d.value
      }],
      "aria-disabled": d.value || void 0
    }, M("plus")), null), [[Ke, e.showPlus]])]);
  }
});
const vr = ne(fr), [mr, de, gr] = Z("uploader");
function Fn(e, t) {
  return new Promise((n) => {
    if (t === "file") {
      n();
      return;
    }
    const a = new FileReader();
    a.onload = (i) => {
      n(i.target.result);
    }, t === "dataUrl" ? a.readAsDataURL(e) : t === "text" && a.readAsText(e);
  });
}
function za(e, t) {
  return St(e).some((n) => n.file ? ot(t) ? t(n.file) : n.file.size > t : !1);
}
function hr(e, t) {
  const n = [], a = [];
  return e.forEach((i) => {
    za(i, t) ? a.push(i) : n.push(i);
  }), { valid: n, invalid: a };
}
const br = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i, yr = (e) => br.test(e);
function Fa(e) {
  return e.isImage ? !0 : e.file && e.file.type ? e.file.type.indexOf("image") === 0 : e.url ? yr(e.url) : typeof e.content == "string" ? e.content.indexOf("data:image") === 0 : !1;
}
var wr = X({
  props: {
    name: j,
    item: me(Object),
    index: Number,
    imageFit: String,
    lazyLoad: Boolean,
    deletable: Boolean,
    previewSize: [Number, String, Array],
    beforeDelete: Function
  },
  emits: ["delete", "preview"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const a = () => {
      const {
        status: s,
        message: u
      } = e.item;
      if (s === "uploading" || s === "failed") {
        const h = s === "failed" ? r(ge, {
          name: "close",
          class: de("mask-icon")
        }, null) : r(pe, {
          class: de("loading")
        }, null), l = ie(u) && u !== "";
        return r("div", {
          class: de("mask")
        }, [h, l && r("div", {
          class: de("mask-message")
        }, [u])]);
      }
    }, i = (s) => {
      const {
        name: u,
        item: h,
        index: l,
        beforeDelete: $
      } = e;
      s.stopPropagation(), dt($, {
        args: [h, {
          name: u,
          index: l
        }],
        done: () => t("delete")
      });
    }, o = () => t("preview"), c = () => {
      if (e.deletable && e.item.status !== "uploading") {
        const s = n["preview-delete"];
        return r("div", {
          role: "button",
          class: de("preview-delete", {
            shadow: !s
          }),
          tabindex: 0,
          "aria-label": gr("delete"),
          onClick: i
        }, [s ? s() : r(ge, {
          name: "cross",
          class: de("preview-delete-icon")
        }, null)]);
      }
    }, f = () => {
      if (n["preview-cover"]) {
        const {
          index: s,
          item: u
        } = e;
        return r("div", {
          class: de("preview-cover")
        }, [n["preview-cover"](oe({
          index: s
        }, u))]);
      }
    }, d = () => {
      const {
        item: s,
        lazyLoad: u,
        imageFit: h,
        previewSize: l
      } = e;
      return Fa(s) ? r(Da, {
        fit: h,
        src: s.content || s.url,
        class: de("preview-image"),
        width: Array.isArray(l) ? l[0] : l,
        height: Array.isArray(l) ? l[1] : l,
        lazyLoad: u,
        onClick: o
      }, {
        default: f
      }) : r("div", {
        class: de("file"),
        style: _t(e.previewSize)
      }, [r(ge, {
        class: de("file-icon"),
        name: "description"
      }, null), r("div", {
        class: [de("file-name"), "van-ellipsis"]
      }, [s.file ? s.file.name : s.url]), f()]);
    };
    return () => r("div", {
      class: de("preview")
    }, [d(), a(), c()]);
  }
});
const Sr = {
  name: te(""),
  accept: O("image/*"),
  capture: String,
  multiple: Boolean,
  disabled: Boolean,
  readonly: Boolean,
  lazyLoad: Boolean,
  maxCount: te(1 / 0),
  imageFit: O("cover"),
  resultType: O("dataUrl"),
  uploadIcon: O("photograph"),
  uploadText: String,
  deletable: W,
  afterRead: Function,
  showUpload: W,
  modelValue: qe(),
  beforeRead: Function,
  beforeDelete: Function,
  previewSize: [Number, String, Array],
  previewImage: W,
  previewOptions: Object,
  previewFullImage: W,
  maxSize: {
    type: [Number, String, Function],
    default: 1 / 0
  }
};
var xr = X({
  name: mr,
  props: Sr,
  emits: ["delete", "oversize", "click-upload", "close-preview", "click-preview", "update:modelValue"],
  setup(e, {
    emit: t,
    slots: n
  }) {
    const a = L(), i = [], o = (w = e.modelValue.length) => ({
      name: e.name,
      index: w
    }), c = () => {
      a.value && (a.value.value = "");
    }, f = (w) => {
      if (c(), za(w, e.maxSize))
        if (Array.isArray(w)) {
          const S = hr(w, e.maxSize);
          if (w = S.valid, t("oversize", S.invalid, o()), !w.length)
            return;
        } else {
          t("oversize", w, o());
          return;
        }
      w = Se(w), t("update:modelValue", [...e.modelValue, ...St(w)]), e.afterRead && e.afterRead(w, o());
    }, d = (w) => {
      const {
        maxCount: S,
        modelValue: P,
        resultType: M
      } = e;
      if (Array.isArray(w)) {
        const I = +S - P.length;
        w.length > I && (w = w.slice(0, I)), Promise.all(w.map((C) => Fn(C, M))).then((C) => {
          const T = w.map((A, H) => {
            const B = {
              file: A,
              status: "",
              message: ""
            };
            return C[H] && (B.content = C[H]), B;
          });
          f(T);
        });
      } else
        Fn(w, M).then((I) => {
          const C = {
            file: w,
            status: "",
            message: ""
          };
          I && (C.content = I), f(C);
        });
    }, s = (w) => {
      const {
        files: S
      } = w.target;
      if (e.disabled || !S || !S.length)
        return;
      const P = S.length === 1 ? S[0] : [].slice.call(S);
      if (e.beforeRead) {
        const M = e.beforeRead(P, o());
        if (!M) {
          c();
          return;
        }
        if (Jt(M)) {
          M.then((I) => {
            d(I || P);
          }).catch(c);
          return;
        }
      }
      d(P);
    };
    let u;
    const h = () => t("close-preview"), l = (w) => {
      if (e.previewFullImage) {
        const S = e.modelValue.filter(Fa), P = S.map((M) => (M.file && !M.url && M.status !== "failed" && (M.url = URL.createObjectURL(M.file), i.push(M.url)), M.url)).filter(Boolean);
        u = $t(oe({
          images: P,
          startPosition: S.indexOf(w),
          onClose: h
        }, e.previewOptions));
      }
    }, $ = () => {
      u && u.close();
    }, k = (w, S) => {
      const P = e.modelValue.slice(0);
      P.splice(S, 1), t("update:modelValue", P), t("delete", w, o(S));
    }, b = (w, S) => {
      const P = ["imageFit", "deletable", "previewSize", "beforeDelete"], M = oe(he(e, P), he(w, P, !0));
      return r(wr, K({
        item: w,
        index: S,
        onClick: () => t("click-preview", w, o(S)),
        onDelete: () => k(w, S),
        onPreview: () => l(w)
      }, he(e, ["name", "lazyLoad"]), M), he(n, ["preview-cover", "preview-delete"]));
    }, v = () => {
      if (e.previewImage)
        return e.modelValue.map(b);
    }, D = (w) => t("click-upload", w), m = () => {
      if (e.modelValue.length >= e.maxCount || !e.showUpload)
        return;
      const w = e.readonly ? null : r("input", {
        ref: a,
        type: "file",
        class: de("input"),
        accept: e.accept,
        capture: e.capture,
        multiple: e.multiple,
        disabled: e.disabled,
        onChange: s
      }, null);
      return n.default ? r("div", {
        class: de("input-wrapper"),
        onClick: D
      }, [n.default(), w]) : r("div", {
        class: de("upload", {
          readonly: e.readonly
        }),
        style: _t(e.previewSize),
        onClick: D
      }, [r(ge, {
        name: e.uploadIcon,
        class: de("upload-icon")
      }, null), e.uploadText && r("span", {
        class: de("upload-text")
      }, [e.uploadText]), w]);
    }, y = () => {
      a.value && !e.disabled && a.value.click();
    };
    return ct(() => {
      i.forEach((w) => URL.revokeObjectURL(w));
    }), se({
      chooseFile: y,
      closeImagePreview: $
    }), Oe(() => e.modelValue), () => r("div", {
      class: de()
    }, [r("div", {
      class: de("wrapper", {
        disabled: e.disabled
      })
    }, [v(), m()])]);
  }
});
const Cr = ne(xr);
function Nn(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ln(e);
}
const Ir = /* @__PURE__ */ X({
  name: "FormGenerator",
  setup(e, {
    expose: t,
    attrs: n,
    slots: a,
    emit: i
  }) {
    const o = n, c = L(), f = {};
    return t(() => ({
      ...c.value,
      $refs: f
    })), () => {
      function d() {
        return r(uo, K({
          class: "FormGenerator"
        }, o, {
          ref: c
        }), {
          default: () => [r(Fi, null, {
            default: () => [o.formOption.map((l) => {
              if (!(l.hasOwnProperty("show") && l.show === !1))
                return h(l);
            }), o.disabled === !0 || !o.onSubmit ? "" : a != null && a.default ? r(Be, null, [a.default()[0].children]) : r(ia, {
              block: !0,
              type: "primary",
              "native-type": "submit"
            }, {
              default: () => [Yn("提交")]
            })]
          })]
        });
      }
      function s(l, $) {
        var b;
        let k = $ ? l.formItem.text : o.model[l.formItem.name];
        return r(Re, K({
          "is-link": !0,
          readonly: !0,
          onClick: o.disabled ? () => "" : () => {
            l.showPopup = !0;
          },
          inputAlign: "right",
          modelValue: k,
          "onUpdate:modelValue": (v) => k = v
        }, l.formItem), {
          ...(b = l == null ? void 0 : l.formItem) == null ? void 0 : b.slots
        });
      }
      function u(l, $ = "datetime") {
        let k;
        switch ($) {
          case "date":
            k = `${l.getFullYear()}-${String(l.getMonth() + 1).padStart(2, "0")}-${String(l.getDate()).padStart(2, "0")}`;
            break;
          case "datehour":
            k = `${l.getFullYear()}-${String(l.getMonth() + 1).padStart(2, "0")}-${String(l.getDate()).padStart(2, "0")} ${String(l.getHours()).padStart(2, "0")}`;
            break;
          case "year-month":
            k = `${l.getFullYear()}-${String(l.getMonth() + 1).padStart(2, "0")}`;
            break;
          case "month-day":
            k = `${String(l.getMonth() + 1).padStart(2, "0")}-${String(l.getDate()).padStart(2, "0")}`;
            break;
          case "time":
            k = l;
            break;
          case "datetime":
            k = `${l.getFullYear()}-${String(l.getMonth() + 1).padStart(2, "0")}-${String(l.getDate()).padStart(2, "0")} ${String(l.getHours()).padStart(2, "0")}:${String(l.getMinutes()).padStart(2, "0")}:${String(l.getSeconds()).padStart(2, "0")}`;
            break;
        }
        return k;
      }
      function h(l) {
        var $, k, b, v, D;
        switch (f[l.formItem.name] = L(), l.type) {
          case "field":
            return r(Re, K({
              ref: f[l.formItem.name],
              inputAlign: "right",
              modelValue: o.model[l.formItem.name],
              "onUpdate:modelValue": (m) => o.model[l.formItem.name] = m
            }, l.formItem, l.control), {
              ...($ = l == null ? void 0 : l.control) == null ? void 0 : $.slots
            });
          case "checkbox":
            return r(Re, K({
              inputAlign: "right"
            }, l.formItem), {
              input: () => {
                let m;
                return r(Xi, K({
                  ref: f[l.formItem.name],
                  disabled: o.disabled,
                  direction: "horizontal",
                  modelValue: o.model[l.formItem.name],
                  "onUpdate:modelValue": (y) => o.model[l.formItem.name] = y
                }, l == null ? void 0 : l.control), Nn(m = l.control.checkboxGroup.map((y) => r(Ki, K(y, {
                  name: y.value
                }), {
                  default: () => [y.label],
                  ...y == null ? void 0 : y.slots
                }))) ? m : {
                  default: () => [m]
                });
              }
            });
          case "radio":
            return r(Re, K({
              inputAlign: "right"
            }, l.formItem), {
              input: () => {
                let m;
                return r(zo, K({
                  ref: f[l.formItem.name],
                  disabled: o.disabled,
                  direction: "horizontal",
                  modelValue: o.model[l.formItem.name],
                  "onUpdate:modelValue": (y) => o.model[l.formItem.name] = y
                }, l == null ? void 0 : l.control), Nn(m = l.control.radioGroup.map((y) => r(Ho, K({
                  name: y.value
                }, y), {
                  default: () => [y.label],
                  ...y == null ? void 0 : y.slots
                }))) ? m : {
                  default: () => [m]
                });
              }
            });
          case "switch":
            return r(Re, K({
              class: "field-switch",
              readonly: !0
            }, l.formItem), {
              "right-icon": () => {
                var m;
                return r(_o, K({
                  ref: f[l.formItem.name],
                  disabled: o.disabled,
                  size: "24px",
                  modelValue: o.model[l.formItem.name],
                  "onUpdate:modelValue": (y) => {
                    o.model[l.formItem.name] = y;
                  }
                }, l == null ? void 0 : l.control), {
                  ...(m = l == null ? void 0 : l.control) == null ? void 0 : m.slots
                });
              }
            });
          case "uploader":
            return r(Re, K({
              readonly: !0,
              inputAlign: "right"
            }, l.formItem), {
              input: () => {
                var m;
                return r(Cr, K({
                  ref: f[l.formItem.name],
                  disabled: o.disabled,
                  modelValue: o.model[l.formItem.name],
                  "onUpdate:modelValue": (y) => o.model[l.formItem.name] = y
                }, l == null ? void 0 : l.control), {
                  ...(m = l == null ? void 0 : l.control) == null ? void 0 : m.slots
                });
              }
            });
          case "stepper":
            return r(Re, K({
              readonly: !0
            }, l.formItem), {
              "right-icon": () => r(vr, K({
                ref: f[l.formItem.name],
                disabled: o.disabled,
                "button-size": "21px",
                modelValue: o.model[l.formItem.name],
                "onUpdate:modelValue": (m) => o.model[l.formItem.name] = m
              }, l == null ? void 0 : l.control), null)
            });
          case "picker":
            return r(Be, null, [s(l, !0), r(Ge, K({
              show: l.showPopup,
              "onUpdate:show": (m) => l.showPopup = m,
              round: !0,
              position: "bottom"
            }, l.popup), {
              default: () => {
                var m;
                return [r(rn, K({
                  ref: f[l.formItem.name],
                  modelValue: o.model[l.formItem.name],
                  "onUpdate:modelValue": (y) => o.model[l.formItem.name] = y,
                  onCancel: () => {
                    l.showPopup = !1;
                  },
                  onConfirm: (y) => {
                    var w, S, P, M;
                    l.showPopup = !1, Array.isArray(y) ? (o.model[l.formItem.name] = y.reduce((I, C) => {
                      var T, A;
                      return I.push(typeof C == "object" ? C == null ? void 0 : C[((A = (T = l == null ? void 0 : l.control) == null ? void 0 : T.columnsFieldNames) == null ? void 0 : A.values) ?? "value"] : C), I;
                    }, []), l.formItem.text = y.map((I) => {
                      var C, T;
                      return typeof I == "object" ? I == null ? void 0 : I[((T = (C = l == null ? void 0 : l.control) == null ? void 0 : C.columnsFieldNames) == null ? void 0 : T.text) ?? "text"] : I;
                    }).join("/")) : (o.model[l.formItem.name] = y[((S = (w = l == null ? void 0 : l.control) == null ? void 0 : w.columnsFieldNames) == null ? void 0 : S.values) ?? "value"], l.formItem.text = y[((M = (P = l == null ? void 0 : l.control) == null ? void 0 : P.columnsFieldNames) == null ? void 0 : M.text) ?? "text"]);
                  }
                }, l.control), {
                  ...(m = l == null ? void 0 : l.control) == null ? void 0 : m.slots
                })];
              }
            })]);
          case "datetimePicker":
            return r(Be, null, [s(l), r(Ge, K({
              show: l.showPopup,
              "onUpdate:show": (m) => l.showPopup = m,
              round: !0,
              position: "bottom"
            }, l.popup), {
              default: () => {
                var m;
                return [r(tr, K({
                  ref: f[l.formItem.name],
                  modelValue: o.model[l.formItem.name],
                  "onUpdate:modelValue": (y) => o.model[l.formItem.name] = y,
                  onCancel: () => {
                    l.showPopup = !1;
                  },
                  onChange: (y) => {
                    var w;
                    o.model[l.formItem.name] = u(y, (w = l == null ? void 0 : l.control) == null ? void 0 : w.type);
                  },
                  onConfirm: (y) => {
                    var w;
                    l.showPopup = !1, o.model[l.formItem.name] = u(y, (w = l == null ? void 0 : l.control) == null ? void 0 : w.type);
                  }
                }, l.control), {
                  ...(m = l == null ? void 0 : l.control) == null ? void 0 : m.slots
                })];
              }
            })]);
          case "calendar":
            return r(Be, null, [s(l, ((k = l == null ? void 0 : l.control) == null ? void 0 : k.type) === "multiple"), r(ei, K({
              ref: f[l.formItem.name],
              show: l.showPopup,
              "onUpdate:show": (m) => l.showPopup = m,
              "show-confirm": ((b = l == null ? void 0 : l.control) == null ? void 0 : b.type) === "multiple",
              onConfirm: (m) => {
                var w;
                l.showPopup = !1;
                const y = (S) => {
                  var P, M, I;
                  return `${(P = S == null ? void 0 : S.getFullYear) == null ? void 0 : P.call(S)}-${((M = S == null ? void 0 : S.getMonth) == null ? void 0 : M.call(S)) + 1}-${(I = S == null ? void 0 : S.getDate) == null ? void 0 : I.call(S)}`;
                };
                switch ((w = l == null ? void 0 : l.control) == null ? void 0 : w.type) {
                  case "multiple":
                    o.model[l.formItem.name] = m.reduce((S, P) => (S.push(y(P)), S), []), l.formItem.text = `选择了 ${m.length} 个日期`;
                    break;
                  case "range":
                    o.model[l.formItem.name] = `${y(m[0])}~${y(m[1])}`;
                    break;
                  default:
                    o.model[l.formItem.name] = y(m);
                    break;
                }
              }
            }, l.control), {
              ...(v = l == null ? void 0 : l.control) == null ? void 0 : v.slots
            })]);
          case "cascader":
            return r(Be, null, [s(l, !0), r(Ge, K({
              show: l.showPopup,
              "onUpdate:show": (m) => l.showPopup = m,
              round: !0,
              position: "bottom"
            }, l.popup), {
              default: () => {
                var m;
                return [r(Mi, K({
                  ref: f[l.formItem.name],
                  modelValue: o.model[l.formItem.name],
                  "onUpdate:modelValue": (y) => o.model[l.formItem.name] = y,
                  onClose: () => {
                    l.showPopup = !1;
                  },
                  onFinish: (y) => {
                    l.showPopup = !1, o.model[l.formItem.name] = y.value, l.formItem.text = y.selectedOptions.map((w) => {
                      var S, P;
                      return w[((P = (S = l == null ? void 0 : l.control) == null ? void 0 : S.fieldNames) == null ? void 0 : P.text) ?? "text"];
                    }).join("/");
                  }
                }, l.control), {
                  ...(m = l == null ? void 0 : l.control) == null ? void 0 : m.slots
                })];
              }
            })]);
          case "slot":
            return r(Re, K({
              readonly: !0,
              inputAlign: "right"
            }, l.formItem), {
              label: () => l.formItem.label ?? "",
              ...(D = l == null ? void 0 : l.control) == null ? void 0 : D.slots,
              input: () => {
                var m, y, w, S, P, M, I, C;
                return (y = (m = l == null ? void 0 : l.control) == null ? void 0 : m.slots) != null && y.input && typeof ((S = (w = l == null ? void 0 : l.control) == null ? void 0 : w.slots) == null ? void 0 : S.input) == "function" ? r(Be, null, [(I = (M = (P = l == null ? void 0 : l.control) == null ? void 0 : P.slots) == null ? void 0 : M.input) == null ? void 0 : I.call(M, {
                  form: o.model,
                  data: o.model[l.formItem.name]
                })]) : a[l.formItem.name] ? r(Be, null, [(C = a[l.formItem.name]) == null ? void 0 : C.call(a, {
                  form: o.model,
                  data: o.model[l.formItem.name]
                })]) : o.model[l.formItem.name];
              }
            });
        }
      }
      return d();
    };
  }
});
export {
  Ir as FormGenerator,
  $r as GeneratorUtils
};
//# sourceMappingURL=index.js.map
