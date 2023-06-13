(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".van-checkbox-group--horizontal,.van-radio-group--horizontal{gap:10px 0;justify-content:flex-end}.field-switch .van-field__right-icon{height:24px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as R, ref as S, createVNode as s, mergeProps as c, Fragment as g, createTextVNode as D, isVNode as E } from "vue";
import { Form as q, CellGroup as v, Button as T, Field as P, Popup as G, Cascader as M, Calendar as B, TimePicker as K, DatePicker as Y, Picker as H, Stepper as J, Uploader as L, Switch as Q, RadioGroup as W, Radio as X, CheckboxGroup as Z, Checkbox as f } from "vant";
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
    const a = n, h = S(), t = {};
    return V(() => ({
      ...h.value,
      $refs: t
    })), () => {
      function F() {
        return s(q, c({
          class: "FormGenerator"
        }, a, {
          ref: h
        }), {
          default: () => [s(v, null, {
            default: () => [a.formOption.map((e) => {
              if (!(e.hasOwnProperty("show") && e.show === !1))
                return N(e);
            }), a.disabled === !0 || !a.onSubmit ? "" : r != null && r.default ? s(g, null, [r.default()[0].children]) : s(T, {
              block: !0,
              type: "primary",
              "native-type": "submit"
            }, {
              default: () => [D("提交")]
            })]
          })]
        });
      }
      function k(e, j) {
        var C;
        let x = j ? e.formItem.text : a.model[e.formItem.name];
        return s(P, c({
          "is-link": !0,
          readonly: !0,
          onClick: a.disabled ? () => "" : () => {
            e.showPopup = !0;
          },
          inputAlign: "right",
          modelValue: x,
          "onUpdate:modelValue": (A) => x = A
        }, e.formItem), {
          ...(C = e == null ? void 0 : e.formItem) == null ? void 0 : C.slots
        });
      }
      function N(e) {
        var j, x, C, A, $;
        switch (t[e.formItem.name] = S(), e.type) {
          case "field":
            return s(P, c({
              ref: t[e.formItem.name],
              inputAlign: "right",
              modelValue: a.model[e.formItem.name],
              "onUpdate:modelValue": (l) => a.model[e.formItem.name] = l
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
                  disabled: a.disabled,
                  direction: "horizontal",
                  modelValue: a.model[e.formItem.name],
                  "onUpdate:modelValue": (u) => a.model[e.formItem.name] = u
                }, e == null ? void 0 : e.control), z(l = e.control.checkboxGroup.map((u) => s(f, c(u, {
                  name: u.value
                }), {
                  default: () => [u.label],
                  ...u == null ? void 0 : u.slots
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
                  disabled: a.disabled,
                  direction: "horizontal",
                  modelValue: a.model[e.formItem.name],
                  "onUpdate:modelValue": (u) => a.model[e.formItem.name] = u
                }, e == null ? void 0 : e.control), z(l = e.control.radioGroup.map((u) => s(X, c({
                  name: u.value
                }, u), {
                  default: () => [u.label],
                  ...u == null ? void 0 : u.slots
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
                  disabled: a.disabled,
                  size: "24px",
                  modelValue: a.model[e.formItem.name],
                  "onUpdate:modelValue": (u) => {
                    a.model[e.formItem.name] = u;
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
                  disabled: a.disabled,
                  modelValue: a.model[e.formItem.name],
                  "onUpdate:modelValue": (u) => a.model[e.formItem.name] = u
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
                disabled: a.disabled,
                "button-size": "21px",
                modelValue: a.model[e.formItem.name],
                "onUpdate:modelValue": (l) => a.model[e.formItem.name] = l
              }, e == null ? void 0 : e.control), null)
            });
          case "picker":
            return s(g, null, [k(e, !0), s(G, c({
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
                  onConfirm: (u) => {
                    e.showPopup = !1, a.model[e.formItem.name] = Array.isArray(u.selectedValues) && u.selectedValues.length === 1 ? u.selectedValues[0] : u.selectedValues, e.formItem.text = u.selectedOptions.map((I) => {
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
            return s(g, null, [k(e), s(G, c({
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
                  onConfirm: (u) => {
                    a.model[e.formItem.name] = u.selectedValues.join("-"), e.showPopup = !1;
                  }
                }, e.control), {
                  ...(l = e == null ? void 0 : e.control) == null ? void 0 : l.slots
                })];
              }
            })]);
          case "timePicker":
            return s(g, null, [k(e), s(G, c({
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
                  onConfirm: (u) => {
                    a.model[e.formItem.name] = u.selectedValues.join(":"), e.showPopup = !1;
                  }
                }, e.control), {
                  ...(l = e == null ? void 0 : e.control) == null ? void 0 : l.slots
                })];
              }
            })]);
          case "calendar":
            return s(g, null, [k(e, ((x = e == null ? void 0 : e.control) == null ? void 0 : x.type) === "multiple"), s(B, c({
              ref: t[e.formItem.name],
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              "show-confirm": ((C = e == null ? void 0 : e.control) == null ? void 0 : C.type) === "multiple",
              onConfirm: (l) => {
                var I;
                e.showPopup = !1;
                const u = (d) => {
                  var b, y, U;
                  return `${(b = d == null ? void 0 : d.getFullYear) == null ? void 0 : b.call(d)}-${((y = d == null ? void 0 : d.getMonth) == null ? void 0 : y.call(d)) + 1}-${(U = d == null ? void 0 : d.getDate) == null ? void 0 : U.call(d)}`;
                };
                switch ((I = e == null ? void 0 : e.control) == null ? void 0 : I.type) {
                  case "multiple":
                    a.model[e.formItem.name] = l.reduce((d, b) => (d.push(u(b)), d), []), e.formItem.text = `选择了 ${l.length} 个日期`;
                    break;
                  case "range":
                    a.model[e.formItem.name] = `${u(l[0])}~${u(l[1])}`;
                    break;
                  default:
                    a.model[e.formItem.name] = u(l);
                    break;
                }
              }
            }, e.control), {
              ...(A = e == null ? void 0 : e.control) == null ? void 0 : A.slots
            })]);
          case "cascader":
            return s(g, null, [k(e, !0), s(G, c({
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var l;
                return [s(M, c({
                  ref: t[e.formItem.name],
                  modelValue: a.model[e.formItem.name],
                  "onUpdate:modelValue": (u) => a.model[e.formItem.name] = u,
                  onClose: () => {
                    e.showPopup = !1;
                  },
                  onFinish: (u) => {
                    e.showPopup = !1, a.model[e.formItem.name] = u.value, e.formItem.text = u.selectedOptions.map((I) => {
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
              ...($ = e == null ? void 0 : e.control) == null ? void 0 : $.slots,
              input: () => {
                var l, u, I, d, b, y, U, _;
                return (u = (l = e == null ? void 0 : e.control) == null ? void 0 : l.slots) != null && u.input && typeof ((d = (I = e == null ? void 0 : e.control) == null ? void 0 : I.slots) == null ? void 0 : d.input) == "function" ? s(g, null, [(U = (y = (b = e == null ? void 0 : e.control) == null ? void 0 : b.slots) == null ? void 0 : y.input) == null ? void 0 : U.call(y, {
                  form: a.model,
                  data: a.model[e.formItem.name]
                })]) : r[e.formItem.name] ? s(g, null, [(_ = r[e.formItem.name]) == null ? void 0 : _.call(r, {
                  form: a.model,
                  data: a.model[e.formItem.name]
                })]) : a.model[e.formItem.name];
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
  let a = [];
  return r && (a = Object.keys(r)), w.forEach((h) => {
    let t = {
      label: typeof h == "string" ? h : h[V],
      value: typeof h == "string" ? h : h[n]
    };
    r && a.forEach((F) => {
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
      for (let a = 0; a < r.formItem.rules.length; a++) {
        let h = r.formItem.rules[a];
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
