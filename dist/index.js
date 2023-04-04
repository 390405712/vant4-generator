(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".van-checkbox-group--horizontal,.van-radio-group--horizontal{gap:10px 0;justify-content:flex-end}.field-switch .van-field__right-icon{height:24px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as z, ref as N, createVNode as d, mergeProps as t, Fragment as $, createTextVNode as _, isVNode as R } from "vue";
import { Form as H, CellGroup as B, Button as E, Field as y, Popup as U, Cascader as T, Calendar as q, DatetimePicker as J, Picker as K, Stepper as L, Uploader as Q, Switch as W, RadioGroup as X, Radio as Z, CheckboxGroup as f, Checkbox as i } from "vant";
import { u as ue } from "./utils-03f79311.js";
function j(k) {
  return typeof k == "function" || Object.prototype.toString.call(k) === "[object Object]" && !R(k);
}
const ee = /* @__PURE__ */ z({
  name: "FormGenerator",
  setup(k, {
    expose: M,
    attrs: n,
    slots: S,
    emit: p
  }) {
    const u = n, C = N(), I = {};
    return M(() => ({
      ...C.value,
      $refs: I
    })), () => {
      function v() {
        return d(H, t({
          class: "FormGenerator"
        }, u, {
          ref: C
        }), {
          default: () => [d(B, null, {
            default: () => [u.formOption.map((e) => {
              if (!(e.hasOwnProperty("show") && e.show === !1))
                return Y(e);
            }), u.disabled === !0 || !u.onSubmit ? "" : S != null && S.default ? d($, null, [S.default()[0].children]) : d(E, {
              block: !0,
              type: "primary",
              "native-type": "submit"
            }, {
              default: () => [_("提交")]
            })]
          })]
        });
      }
      function m(e, V) {
        var P;
        let h = V ? e.formItem.text : u.model[e.formItem.name];
        return d(y, t({
          "is-link": !0,
          readonly: !0,
          onClick: u.disabled ? () => "" : () => {
            e.showPopup = !0;
          },
          inputAlign: "right",
          modelValue: h,
          "onUpdate:modelValue": (F) => h = F
        }, e.formItem), {
          ...(P = e == null ? void 0 : e.formItem) == null ? void 0 : P.slots
        });
      }
      function G(e, V = "datetime") {
        let h;
        switch (V) {
          case "date":
            h = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
            break;
          case "datehour":
            h = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")} ${String(e.getHours()).padStart(2, "0")}`;
            break;
          case "year-month":
            h = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}`;
            break;
          case "month-day":
            h = `${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`;
            break;
          case "time":
            h = e;
            break;
          case "datetime":
            h = `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")} ${String(e.getHours()).padStart(2, "0")}:${String(e.getMinutes()).padStart(2, "0")}:${String(e.getSeconds()).padStart(2, "0")}`;
            break;
        }
        return h;
      }
      function Y(e) {
        var V, h, P, F, A;
        switch (I[e.formItem.name] = N(), e.type) {
          case "field":
            return d(y, t({
              ref: I[e.formItem.name],
              inputAlign: "right",
              modelValue: u.model[e.formItem.name],
              "onUpdate:modelValue": (a) => u.model[e.formItem.name] = a
            }, e.formItem, e.control), {
              ...(V = e == null ? void 0 : e.control) == null ? void 0 : V.slots
            });
          case "checkbox":
            return d(y, t({
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                let a;
                return d(f, t({
                  ref: I[e.formItem.name],
                  disabled: u.disabled,
                  direction: "horizontal",
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (l) => u.model[e.formItem.name] = l
                }, e == null ? void 0 : e.control), j(a = e.control.checkboxGroup.map((l) => d(i, t(l, {
                  name: l.value
                }), {
                  default: () => [l.label],
                  ...l == null ? void 0 : l.slots
                }))) ? a : {
                  default: () => [a]
                });
              }
            });
          case "radio":
            return d(y, t({
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                let a;
                return d(X, t({
                  ref: I[e.formItem.name],
                  disabled: u.disabled,
                  direction: "horizontal",
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (l) => u.model[e.formItem.name] = l
                }, e == null ? void 0 : e.control), j(a = e.control.radioGroup.map((l) => d(Z, t({
                  name: l.value
                }, l), {
                  default: () => [l.label],
                  ...l == null ? void 0 : l.slots
                }))) ? a : {
                  default: () => [a]
                });
              }
            });
          case "switch":
            return d(y, t({
              class: "field-switch",
              readonly: !0
            }, e.formItem), {
              "right-icon": () => {
                var a;
                return d(W, t({
                  ref: I[e.formItem.name],
                  disabled: u.disabled,
                  size: "24px",
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (l) => {
                    u.model[e.formItem.name] = l;
                  }
                }, e == null ? void 0 : e.control), {
                  ...(a = e == null ? void 0 : e.control) == null ? void 0 : a.slots
                });
              }
            });
          case "uploader":
            return d(y, t({
              readonly: !0,
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                var a;
                return d(Q, t({
                  ref: I[e.formItem.name],
                  disabled: u.disabled,
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (l) => u.model[e.formItem.name] = l
                }, e == null ? void 0 : e.control), {
                  ...(a = e == null ? void 0 : e.control) == null ? void 0 : a.slots
                });
              }
            });
          case "stepper":
            return d(y, t({
              readonly: !0
            }, e.formItem), {
              "right-icon": () => d(L, t({
                ref: I[e.formItem.name],
                disabled: u.disabled,
                "button-size": "21px",
                modelValue: u.model[e.formItem.name],
                "onUpdate:modelValue": (a) => u.model[e.formItem.name] = a
              }, e == null ? void 0 : e.control), null)
            });
          case "picker":
            return d($, null, [m(e, !0), d(U, t({
              show: e.showPopup,
              "onUpdate:show": (a) => e.showPopup = a,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var a;
                return [d(K, t({
                  ref: I[e.formItem.name],
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (l) => u.model[e.formItem.name] = l,
                  onCancel: () => {
                    e.showPopup = !1;
                  },
                  onConfirm: (l) => {
                    var c, s, g, w;
                    e.showPopup = !1, Array.isArray(l) ? (u.model[e.formItem.name] = l.reduce((r, b) => {
                      var x, D;
                      return r.push(typeof b == "object" ? b == null ? void 0 : b[((D = (x = e == null ? void 0 : e.control) == null ? void 0 : x.columnsFieldNames) == null ? void 0 : D.values) ?? "value"] : b), r;
                    }, []), e.formItem.text = l.map((r) => {
                      var b, x;
                      return typeof r == "object" ? r == null ? void 0 : r[((x = (b = e == null ? void 0 : e.control) == null ? void 0 : b.columnsFieldNames) == null ? void 0 : x.text) ?? "text"] : r;
                    }).join("/")) : (u.model[e.formItem.name] = l[((s = (c = e == null ? void 0 : e.control) == null ? void 0 : c.columnsFieldNames) == null ? void 0 : s.values) ?? "value"], e.formItem.text = l[((w = (g = e == null ? void 0 : e.control) == null ? void 0 : g.columnsFieldNames) == null ? void 0 : w.text) ?? "text"]);
                  }
                }, e.control), {
                  ...(a = e == null ? void 0 : e.control) == null ? void 0 : a.slots
                })];
              }
            })]);
          case "datetimePicker":
            return d($, null, [m(e), d(U, t({
              show: e.showPopup,
              "onUpdate:show": (a) => e.showPopup = a,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var a;
                return [d(J, t({
                  ref: I[e.formItem.name],
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (l) => u.model[e.formItem.name] = l,
                  onCancel: () => {
                    e.showPopup = !1;
                  },
                  onChange: (l) => {
                    var c;
                    u.model[e.formItem.name] = G(l, (c = e == null ? void 0 : e.control) == null ? void 0 : c.type);
                  },
                  onConfirm: (l) => {
                    var c;
                    e.showPopup = !1, u.model[e.formItem.name] = G(l, (c = e == null ? void 0 : e.control) == null ? void 0 : c.type);
                  }
                }, e.control), {
                  ...(a = e == null ? void 0 : e.control) == null ? void 0 : a.slots
                })];
              }
            })]);
          case "calendar":
            return d($, null, [m(e, ((h = e == null ? void 0 : e.control) == null ? void 0 : h.type) === "multiple"), d(q, t({
              ref: I[e.formItem.name],
              show: e.showPopup,
              "onUpdate:show": (a) => e.showPopup = a,
              "show-confirm": ((P = e == null ? void 0 : e.control) == null ? void 0 : P.type) === "multiple",
              onConfirm: (a) => {
                var c;
                e.showPopup = !1;
                const l = (s) => {
                  var g, w, r;
                  return `${(g = s == null ? void 0 : s.getFullYear) == null ? void 0 : g.call(s)}-${((w = s == null ? void 0 : s.getMonth) == null ? void 0 : w.call(s)) + 1}-${(r = s == null ? void 0 : s.getDate) == null ? void 0 : r.call(s)}`;
                };
                switch ((c = e == null ? void 0 : e.control) == null ? void 0 : c.type) {
                  case "multiple":
                    u.model[e.formItem.name] = a.reduce((s, g) => (s.push(l(g)), s), []), e.formItem.text = `选择了 ${a.length} 个日期`;
                    break;
                  case "range":
                    u.model[e.formItem.name] = `${l(a[0])}~${l(a[1])}`;
                    break;
                  default:
                    u.model[e.formItem.name] = l(a);
                    break;
                }
              }
            }, e.control), {
              ...(F = e == null ? void 0 : e.control) == null ? void 0 : F.slots
            })]);
          case "cascader":
            return d($, null, [m(e, !0), d(U, t({
              show: e.showPopup,
              "onUpdate:show": (a) => e.showPopup = a,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var a;
                return [d(T, t({
                  ref: I[e.formItem.name],
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (l) => u.model[e.formItem.name] = l,
                  onClose: () => {
                    e.showPopup = !1;
                  },
                  onFinish: (l) => {
                    e.showPopup = !1, u.model[e.formItem.name] = l.value, e.formItem.text = l.selectedOptions.map((c) => {
                      var s, g;
                      return c[((g = (s = e == null ? void 0 : e.control) == null ? void 0 : s.fieldNames) == null ? void 0 : g.text) ?? "text"];
                    }).join("/");
                  }
                }, e.control), {
                  ...(a = e == null ? void 0 : e.control) == null ? void 0 : a.slots
                })];
              }
            })]);
          case "slot":
            return d(y, t({
              readonly: !0,
              inputAlign: "right"
            }, e.formItem), {
              label: () => e.formItem.label ?? "",
              ...(A = e == null ? void 0 : e.control) == null ? void 0 : A.slots,
              input: () => {
                var a, l, c, s, g, w, r, b;
                return (l = (a = e == null ? void 0 : e.control) == null ? void 0 : a.slots) != null && l.input && typeof ((s = (c = e == null ? void 0 : e.control) == null ? void 0 : c.slots) == null ? void 0 : s.input) == "function" ? d($, null, [(r = (w = (g = e == null ? void 0 : e.control) == null ? void 0 : g.slots) == null ? void 0 : w.input) == null ? void 0 : r.call(w, {
                  form: u.model,
                  data: u.model[e.formItem.name]
                })]) : S[e.formItem.name] ? d($, null, [(b = S[e.formItem.name]) == null ? void 0 : b.call(S, {
                  form: u.model,
                  data: u.model[e.formItem.name]
                })]) : u.model[e.formItem.name];
              }
            });
        }
      }
      return v();
    };
  }
});
export {
  ee as FormGenerator,
  ue as GeneratorUtils
};
//# sourceMappingURL=index.js.map
