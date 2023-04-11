(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".van-checkbox-group--horizontal,.van-radio-group--horizontal{gap:10px 0;justify-content:flex-end}.field-switch .van-field__right-icon{height:24px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as R, ref as N, createVNode as d, mergeProps as r, Fragment as $, createTextVNode as Y, isVNode as E } from "vue";
import { Form as q, CellGroup as H, Button as T, Field as n, Popup as G, Cascader as B, Calendar as K, DatetimePicker as J, Picker as L, Stepper as Q, Uploader as W, Switch as X, RadioGroup as Z, Radio as f, CheckboxGroup as i, Checkbox as o } from "vant";
function _(y) {
  return typeof y == "function" || Object.prototype.toString.call(y) === "[object Object]" && !E(y);
}
const ae = /* @__PURE__ */ R({
  name: "FormGenerator",
  setup(y, {
    expose: V,
    attrs: x,
    slots: t,
    emit: P
  }) {
    const l = x, I = N(), h = {};
    return V(() => ({
      ...I.value,
      $refs: h
    })), () => {
      function U() {
        return d(q, r({
          class: "FormGenerator"
        }, l, {
          ref: I
        }), {
          default: () => [d(H, null, {
            default: () => [l.formOption.map((e) => {
              if (!(e.hasOwnProperty("show") && e.show === !1))
                return z(e);
            }), l.disabled === !0 || !l.onSubmit ? "" : t != null && t.default ? d($, null, [t.default()[0].children]) : d(T, {
              block: !0,
              type: "primary",
              "native-type": "submit"
            }, {
              default: () => [Y("提交")]
            })]
          })]
        });
      }
      function A(e, k) {
        var F;
        let b = k ? e.formItem.text : l.model[e.formItem.name];
        return d(n, r({
          "is-link": !0,
          readonly: !0,
          onClick: l.disabled ? () => "" : () => {
            e.showPopup = !0;
          },
          inputAlign: "right",
          modelValue: b,
          "onUpdate:modelValue": (j) => b = j
        }, e.formItem), {
          ...(F = e == null ? void 0 : e.formItem) == null ? void 0 : F.slots
        });
      }
      function D(e, k = "datetime") {
        let b;
        switch (k) {
          case "date":
            b = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
            break;
          case "datehour":
            b = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")} ${String(e.getHours()).padStart(2, "0")}`;
            break;
          case "year-month":
            b = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}`;
            break;
          case "month-day":
            b = `${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
            break;
          case "time":
            b = e;
            break;
          case "datetime":
            b = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")} ${String(e.getHours()).padStart(2, "0")}:${String(e.getMinutes()).padStart(2, "0")}:${String(e.getSeconds()).padStart(2, "0")}`;
            break;
        }
        return b;
      }
      function z(e) {
        var k, b, F, j, v;
        switch (h[e.formItem.name] = N(), e.type) {
          case "field":
            return d(n, r({
              ref: h[e.formItem.name],
              inputAlign: "right",
              modelValue: l.model[e.formItem.name],
              "onUpdate:modelValue": (u) => l.model[e.formItem.name] = u
            }, e.formItem, e.control), {
              ...(k = e == null ? void 0 : e.control) == null ? void 0 : k.slots
            });
          case "checkbox":
            return d(n, r({
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                let u;
                return d(i, r({
                  ref: h[e.formItem.name],
                  disabled: l.disabled,
                  direction: "horizontal",
                  modelValue: l.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => l.model[e.formItem.name] = a
                }, e == null ? void 0 : e.control), _(u = e.control.checkboxGroup.map((a) => d(o, r(a, {
                  name: a.value
                }), {
                  default: () => [a.label],
                  ...a == null ? void 0 : a.slots
                }))) ? u : {
                  default: () => [u]
                });
              }
            });
          case "radio":
            return d(n, r({
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                let u;
                return d(Z, r({
                  ref: h[e.formItem.name],
                  disabled: l.disabled,
                  direction: "horizontal",
                  modelValue: l.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => l.model[e.formItem.name] = a
                }, e == null ? void 0 : e.control), _(u = e.control.radioGroup.map((a) => d(f, r({
                  name: a.value
                }, a), {
                  default: () => [a.label],
                  ...a == null ? void 0 : a.slots
                }))) ? u : {
                  default: () => [u]
                });
              }
            });
          case "switch":
            return d(n, r({
              class: "field-switch",
              readonly: !0
            }, e.formItem), {
              "right-icon": () => {
                var u;
                return d(X, r({
                  ref: h[e.formItem.name],
                  disabled: l.disabled,
                  size: "24px",
                  modelValue: l.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => {
                    l.model[e.formItem.name] = a;
                  }
                }, e == null ? void 0 : e.control), {
                  ...(u = e == null ? void 0 : e.control) == null ? void 0 : u.slots
                });
              }
            });
          case "uploader":
            return d(n, r({
              readonly: !0,
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                var u;
                return d(W, r({
                  ref: h[e.formItem.name],
                  disabled: l.disabled,
                  modelValue: l.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => l.model[e.formItem.name] = a
                }, e == null ? void 0 : e.control), {
                  ...(u = e == null ? void 0 : e.control) == null ? void 0 : u.slots
                });
              }
            });
          case "stepper":
            return d(n, r({
              readonly: !0
            }, e.formItem), {
              "right-icon": () => d(Q, r({
                ref: h[e.formItem.name],
                disabled: l.disabled,
                "button-size": "21px",
                modelValue: l.model[e.formItem.name],
                "onUpdate:modelValue": (u) => l.model[e.formItem.name] = u
              }, e == null ? void 0 : e.control), null)
            });
          case "picker":
            return d($, null, [A(e, !0), d(G, r({
              show: e.showPopup,
              "onUpdate:show": (u) => e.showPopup = u,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var u;
                return [d(L, r({
                  ref: h[e.formItem.name],
                  modelValue: l.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => l.model[e.formItem.name] = a,
                  onCancel: () => {
                    e.showPopup = !1;
                  },
                  onConfirm: (a) => {
                    var c, s, w, S;
                    e.showPopup = !1, Array.isArray(a) ? (l.model[e.formItem.name] = a.reduce((g, m) => {
                      var C, M;
                      return g.push(typeof m == "object" ? m == null ? void 0 : m[((M = (C = e == null ? void 0 : e.control) == null ? void 0 : C.columnsFieldNames) == null ? void 0 : M.values) ?? "value"] : m), g;
                    }, []), e.formItem.text = a.map((g) => {
                      var m, C;
                      return typeof g == "object" ? g == null ? void 0 : g[((C = (m = e == null ? void 0 : e.control) == null ? void 0 : m.columnsFieldNames) == null ? void 0 : C.text) ?? "text"] : g;
                    }).join("/")) : (l.model[e.formItem.name] = a[((s = (c = e == null ? void 0 : e.control) == null ? void 0 : c.columnsFieldNames) == null ? void 0 : s.values) ?? "value"], e.formItem.text = a[((S = (w = e == null ? void 0 : e.control) == null ? void 0 : w.columnsFieldNames) == null ? void 0 : S.text) ?? "text"]);
                  }
                }, e.control), {
                  ...(u = e == null ? void 0 : e.control) == null ? void 0 : u.slots
                })];
              }
            })]);
          case "datetimePicker":
            return d($, null, [A(e), d(G, r({
              show: e.showPopup,
              "onUpdate:show": (u) => e.showPopup = u,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var u;
                return [d(J, r({
                  ref: h[e.formItem.name],
                  modelValue: l.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => l.model[e.formItem.name] = a,
                  onCancel: () => {
                    e.showPopup = !1;
                  },
                  onChange: (a) => {
                    var c;
                    l.model[e.formItem.name] = D(a, (c = e == null ? void 0 : e.control) == null ? void 0 : c.type);
                  },
                  onConfirm: (a) => {
                    var c;
                    e.showPopup = !1, l.model[e.formItem.name] = D(a, (c = e == null ? void 0 : e.control) == null ? void 0 : c.type);
                  }
                }, e.control), {
                  ...(u = e == null ? void 0 : e.control) == null ? void 0 : u.slots
                })];
              }
            })]);
          case "calendar":
            return d($, null, [A(e, ((b = e == null ? void 0 : e.control) == null ? void 0 : b.type) === "multiple"), d(K, r({
              ref: h[e.formItem.name],
              show: e.showPopup,
              "onUpdate:show": (u) => e.showPopup = u,
              "show-confirm": ((F = e == null ? void 0 : e.control) == null ? void 0 : F.type) === "multiple",
              onConfirm: (u) => {
                var c;
                e.showPopup = !1;
                const a = (s) => {
                  var w, S, g;
                  return `${(w = s == null ? void 0 : s.getFullYear) == null ? void 0 : w.call(s)}-${((S = s == null ? void 0 : s.getMonth) == null ? void 0 : S.call(s)) + 1}-${(g = s == null ? void 0 : s.getDate) == null ? void 0 : g.call(s)}`;
                };
                switch ((c = e == null ? void 0 : e.control) == null ? void 0 : c.type) {
                  case "multiple":
                    l.model[e.formItem.name] = u.reduce((s, w) => (s.push(a(w)), s), []), e.formItem.text = `选择了 ${u.length} 个日期`;
                    break;
                  case "range":
                    l.model[e.formItem.name] = `${a(u[0])}~${a(u[1])}`;
                    break;
                  default:
                    l.model[e.formItem.name] = a(u);
                    break;
                }
              }
            }, e.control), {
              ...(j = e == null ? void 0 : e.control) == null ? void 0 : j.slots
            })]);
          case "cascader":
            return d($, null, [A(e, !0), d(G, r({
              show: e.showPopup,
              "onUpdate:show": (u) => e.showPopup = u,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var u;
                return [d(B, r({
                  ref: h[e.formItem.name],
                  modelValue: l.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => l.model[e.formItem.name] = a,
                  onClose: () => {
                    e.showPopup = !1;
                  },
                  onFinish: (a) => {
                    e.showPopup = !1, l.model[e.formItem.name] = a.value, e.formItem.text = a.selectedOptions.map((c) => {
                      var s, w;
                      return c[((w = (s = e == null ? void 0 : e.control) == null ? void 0 : s.fieldNames) == null ? void 0 : w.text) ?? "text"];
                    }).join("/");
                  }
                }, e.control), {
                  ...(u = e == null ? void 0 : e.control) == null ? void 0 : u.slots
                })];
              }
            })]);
          case "slot":
            return d(n, r({
              readonly: !0,
              inputAlign: "right"
            }, e.formItem), {
              label: () => e.formItem.label ?? "",
              ...(v = e == null ? void 0 : e.control) == null ? void 0 : v.slots,
              input: () => {
                var u, a, c, s, w, S, g, m;
                return (a = (u = e == null ? void 0 : e.control) == null ? void 0 : u.slots) != null && a.input && typeof ((s = (c = e == null ? void 0 : e.control) == null ? void 0 : c.slots) == null ? void 0 : s.input) == "function" ? d($, null, [(g = (S = (w = e == null ? void 0 : e.control) == null ? void 0 : w.slots) == null ? void 0 : S.input) == null ? void 0 : g.call(S, {
                  form: l.model,
                  data: l.model[e.formItem.name]
                })]) : t[e.formItem.name] ? d($, null, [(m = t[e.formItem.name]) == null ? void 0 : m.call(t, {
                  form: l.model,
                  data: l.model[e.formItem.name]
                })]) : l.model[e.formItem.name];
              }
            });
        }
      }
      return U();
    };
  }
}), p = (y, V, x, t) => {
  if (!Array.isArray(y))
    return [];
  const P = [];
  let l = [];
  return t && (l = Object.keys(t)), y.forEach((I) => {
    let h = {
      label: typeof I == "string" ? I : I[V],
      value: typeof I == "string" ? I : I[x]
    };
    t && l.forEach((U) => {
      h[U] = I[U];
    }), P.push(h);
  }), P;
}, O = (y, V = []) => {
  const x = {
    field: "输入",
    stepper: "输入",
    picker: "选择",
    radio: "选择",
    checkbox: "选择",
    switch: "选择",
    datetimePicker: "选择",
    calendar: "选择",
    cascader: "选择",
    uploader: "上传",
    slot: ""
  };
  return y.forEach((t) => {
    const P = { required: !0, message: `请${x[t.type] || "完善"}${t.formItem.label || ""}`, trigger: "onChange" };
    if (!V.includes(t.formItem.name) && (t.formItem.required = !0, !["stepper", "switch"].includes(t.type))) {
      t.formItem.rules ? t.formItem.rules.unshift(P) : t.formItem.rules = [P];
      for (let l = 0; l < t.formItem.rules.length; l++) {
        let I = t.formItem.rules[l];
        I.message || (I.message = "格式有误");
      }
    }
  }), y;
}, ue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOption: p,
  setRequired: O
}, Symbol.toStringTag, { value: "Module" }));
export {
  ae as FormGenerator,
  ue as GeneratorUtils
};
//# sourceMappingURL=index.js.map
