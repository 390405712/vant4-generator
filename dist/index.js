(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".van-checkbox-group--horizontal,.van-radio-group--horizontal{gap:10px 0;justify-content:flex-end}.field-switch .van-field__right-icon{height:24px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as R, ref as _, createVNode as s, mergeProps as c, Fragment as g, createTextVNode as D, isVNode as E } from "vue";
import { Form as q, CellGroup as T, Button as M, Field as P, Popup as S, Cascader as v, Calendar as B, TimePicker as K, DatePicker as Y, Picker as H, Stepper as J, Uploader as L, Switch as Q, RadioGroup as W, Radio as X, CheckboxGroup as Z, Checkbox as f } from "vant";
function z(w) {
  return typeof w == "function" || Object.prototype.toString.call(w) === "[object Object]" && !E(w);
}
const ee = /* @__PURE__ */ R({
  name: "FormGenerator",
  setup(w, {
    expose: V,
    attrs: n,
    slots: r,
    emit: m
  }) {
    const u = n, h = _(), t = {};
    return V(() => ({
      ...h.value,
      $refs: t
    })), () => {
      function F() {
        return s(q, c({
          class: "FormGenerator"
        }, u, {
          ref: h
        }), {
          default: () => [s(T, null, {
            default: () => [u.formOption.map((e) => {
              if (!(e.hasOwnProperty("show") && e.show === !1))
                return N(e);
            }), u.disabled === !0 || !u.onSubmit ? "" : r != null && r.default ? s(g, null, [r.default()[0].children]) : s(M, {
              block: !0,
              type: "primary",
              "native-type": "submit"
            }, {
              default: () => [D("提交")]
            })]
          })]
        });
      }
      function x(e, j) {
        var C;
        let k = j ? e.formItem.text : u.model[e.formItem.name];
        return s(P, c({
          "is-link": !0,
          readonly: !0,
          onClick: u.disabled ? () => "" : () => {
            e.showPopup = !0;
          },
          inputAlign: "right",
          modelValue: k,
          "onUpdate:modelValue": (A) => k = A
        }, e.formItem), {
          ...(C = e == null ? void 0 : e.formItem) == null ? void 0 : C.slots
        });
      }
      function N(e) {
        var j, k, C, A, G;
        switch (t[e.formItem.name] = _(), e.type) {
          case "field":
            return s(P, c({
              ref: t[e.formItem.name],
              inputAlign: "right",
              modelValue: u.model[e.formItem.name],
              "onUpdate:modelValue": (l) => u.model[e.formItem.name] = l
            }, e.formItem, e.control), {
              ...(j = e == null ? void 0 : e.control) == null ? void 0 : j.slots
            });
          case "checkbox":
            return s(P, c({
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                let l;
                return s(Z, c({
                  ref: t[e.formItem.name],
                  disabled: u.disabled,
                  direction: "horizontal",
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => u.model[e.formItem.name] = a
                }, e == null ? void 0 : e.control), z(l = e.control.checkboxGroup.map((a) => s(f, c(a, {
                  name: a.value
                }), {
                  default: () => [a.label],
                  ...a == null ? void 0 : a.slots
                }))) ? l : {
                  default: () => [l]
                });
              }
            });
          case "radio":
            return s(P, c({
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                let l;
                return s(W, c({
                  ref: t[e.formItem.name],
                  disabled: u.disabled,
                  direction: "horizontal",
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => u.model[e.formItem.name] = a
                }, e == null ? void 0 : e.control), z(l = e.control.radioGroup.map((a) => s(X, c({
                  name: a.value
                }, a), {
                  default: () => [a.label],
                  ...a == null ? void 0 : a.slots
                }))) ? l : {
                  default: () => [l]
                });
              }
            });
          case "switch":
            return s(P, c({
              class: "field-switch",
              readonly: !0
            }, e.formItem), {
              "right-icon": () => {
                var l;
                return s(Q, c({
                  ref: t[e.formItem.name],
                  disabled: u.disabled,
                  size: "24px",
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => {
                    u.model[e.formItem.name] = a;
                  }
                }, e == null ? void 0 : e.control), {
                  ...(l = e == null ? void 0 : e.control) == null ? void 0 : l.slots
                });
              }
            });
          case "uploader":
            return s(P, c({
              readonly: !0,
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                var l;
                return s(L, c({
                  ref: t[e.formItem.name],
                  disabled: u.disabled,
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => u.model[e.formItem.name] = a
                }, e == null ? void 0 : e.control), {
                  ...(l = e == null ? void 0 : e.control) == null ? void 0 : l.slots
                });
              }
            });
          case "stepper":
            return s(P, c({
              readonly: !0
            }, e.formItem), {
              "right-icon": () => s(J, c({
                ref: t[e.formItem.name],
                disabled: u.disabled,
                "button-size": "21px",
                modelValue: u.model[e.formItem.name],
                "onUpdate:modelValue": (l) => u.model[e.formItem.name] = l
              }, e == null ? void 0 : e.control), null)
            });
          case "picker":
            return s(g, null, [x(e, !0), s(S, c({
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var l;
                return [s(H, c({
                  ref: t[e.formItem.name],
                  onCancel: () => {
                    e.showPopup = !1;
                  },
                  onConfirm: (a) => {
                    e.showPopup = !1, u.model[e.formItem.name] = Array.isArray(a.selectedValues) && a.selectedValues.length === 1 ? a.selectedValues[0] : a.selectedValues, e.formItem.text = a.selectedOptions.map((I) => {
                      var d, b;
                      return typeof I == "object" ? I == null ? void 0 : I[((b = (d = e == null ? void 0 : e.control) == null ? void 0 : d.columnsFieldNames) == null ? void 0 : b.text) ?? "text"] : I;
                    }).join("/");
                  }
                }, e.control), {
                  ...(l = e == null ? void 0 : e.control) == null ? void 0 : l.slots
                })];
              }
            })]);
          case "datePicker":
            return s(g, null, [x(e), s(S, c({
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var l;
                return [s(Y, c({
                  ref: t[e.formItem.name],
                  onCancel: () => {
                    e.showPopup = !1;
                  },
                  onConfirm: (a) => {
                    u.model[e.formItem.name] = a.selectedValues.join("-"), e.showPopup = !1;
                  }
                }, e.control), {
                  ...(l = e == null ? void 0 : e.control) == null ? void 0 : l.slots
                })];
              }
            })]);
          case "timePicker":
            return s(g, null, [x(e), s(S, c({
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var l;
                return [s(K, c({
                  ref: t[e.formItem.name],
                  onCancel: () => {
                    e.showPopup = !1;
                  },
                  onConfirm: (a) => {
                    u.model[e.formItem.name] = a.selectedValues.join(":"), e.showPopup = !1;
                  }
                }, e.control), {
                  ...(l = e == null ? void 0 : e.control) == null ? void 0 : l.slots
                })];
              }
            })]);
          case "calendar":
            return s(g, null, [x(e, ((k = e == null ? void 0 : e.control) == null ? void 0 : k.type) === "multiple"), s(B, c({
              ref: t[e.formItem.name],
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              "show-confirm": ((C = e == null ? void 0 : e.control) == null ? void 0 : C.type) === "multiple",
              onConfirm: (l) => {
                var I;
                e.showPopup = !1;
                const a = (d) => {
                  var b, y, U;
                  return `${(b = d == null ? void 0 : d.getFullYear) == null ? void 0 : b.call(d)}-${String(((y = d == null ? void 0 : d.getMonth) == null ? void 0 : y.call(d)) + 1).padStart(2, "0")}-${String((U = d == null ? void 0 : d.getDate) == null ? void 0 : U.call(d)).padStart(2, "0")}`;
                };
                switch ((I = e == null ? void 0 : e.control) == null ? void 0 : I.type) {
                  case "multiple":
                    u.model[e.formItem.name] = l.reduce((d, b) => (d.push(a(b)), d), []), e.formItem.text = `选择了 ${l.length} 个日期`;
                    break;
                  case "range":
                    u.model[e.formItem.name] = [a(l[0]), a(l[1])], e.formItem.text = `${a(l[0])}~${a(l[1])}`;
                    break;
                  default:
                    u.model[e.formItem.name] = a(l);
                    break;
                }
              }
            }, e.control), {
              ...(A = e == null ? void 0 : e.control) == null ? void 0 : A.slots
            })]);
          case "cascader":
            return s(g, null, [x(e, !0), s(S, c({
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var l;
                return [s(v, c({
                  ref: t[e.formItem.name],
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => u.model[e.formItem.name] = a,
                  onClose: () => {
                    e.showPopup = !1;
                  },
                  onFinish: (a) => {
                    e.showPopup = !1, u.model[e.formItem.name] = a.value, e.formItem.text = a.selectedOptions.map((I) => {
                      var d, b;
                      return I[((b = (d = e == null ? void 0 : e.control) == null ? void 0 : d.fieldNames) == null ? void 0 : b.text) ?? "text"];
                    }).join("/");
                  }
                }, e.control), {
                  ...(l = e == null ? void 0 : e.control) == null ? void 0 : l.slots
                })];
              }
            })]);
          case "slot":
            return s(P, c({
              readonly: !0,
              inputAlign: "right"
            }, e.formItem), {
              label: () => e.formItem.label ?? "",
              ...(G = e == null ? void 0 : e.control) == null ? void 0 : G.slots,
              input: () => {
                var l, a, I, d, b, y, U, $;
                return (a = (l = e == null ? void 0 : e.control) == null ? void 0 : l.slots) != null && a.input && typeof ((d = (I = e == null ? void 0 : e.control) == null ? void 0 : I.slots) == null ? void 0 : d.input) == "function" ? s(g, null, [(U = (y = (b = e == null ? void 0 : e.control) == null ? void 0 : b.slots) == null ? void 0 : y.input) == null ? void 0 : U.call(y, {
                  form: u.model,
                  data: u.model[e.formItem.name]
                })]) : r[e.formItem.name] ? s(g, null, [($ = r[e.formItem.name]) == null ? void 0 : $.call(r, {
                  form: u.model,
                  data: u.model[e.formItem.name]
                })]) : u.model[e.formItem.name];
              }
            });
        }
      }
      return F();
    };
  }
}), o = (w, V, n, r) => {
  if (!Array.isArray(w))
    return [];
  const m = [];
  let u = [];
  return r && (u = Object.keys(r)), w.forEach((h) => {
    let t = {
      label: typeof h == "string" ? h : h[V],
      value: typeof h == "string" ? h : h[n]
    };
    r && u.forEach((F) => {
      t[F] = h[F];
    }), m.push(t);
  }), m;
}, p = (w, V = []) => {
  const n = {
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
  return w.forEach((r) => {
    const m = { required: !0, message: `请${n[r.type] || "完善"}${r.formItem.label || ""}`, trigger: "onChange" };
    if (!V.includes(r.formItem.name) && (r.formItem.required = !0, !["stepper", "switch"].includes(r.type))) {
      r.formItem.rules ? r.formItem.rules.unshift(m) : r.formItem.rules = [m];
      for (let u = 0; u < r.formItem.rules.length; u++) {
        let h = r.formItem.rules[u];
        h.message || (h.message = "格式有误");
      }
    }
  }), w;
}, le = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOption: o,
  setRequired: p
}, Symbol.toStringTag, { value: "Module" }));
export {
  ee as FormGenerator,
  le as GeneratorUtils
};
//# sourceMappingURL=index.js.map
