(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".van-checkbox-group--horizontal,.van-radio-group--horizontal{gap:10px 0;justify-content:flex-end}.field-switch .van-field__right-icon{height:24px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as D, ref as S, createVNode as s, mergeProps as c, Fragment as m, createTextVNode as E, isVNode as q } from "vue";
import { Form as T, CellGroup as M, Button as B, Field as V, Popup as N, Cascader as K, Calendar as Y, TimePicker as H, DatePicker as J, Picker as L, Stepper as Q, Uploader as W, Switch as X, RadioGroup as Z, Radio as f, CheckboxGroup as o, Checkbox as p } from "vant";
function z(g) {
  return typeof g == "function" || Object.prototype.toString.call(g) === "[object Object]" && !q(g);
}
const ae = /* @__PURE__ */ D({
  name: "FormGenerator",
  setup(g, {
    expose: k,
    attrs: C,
    slots: r,
    emit: x
  }) {
    const a = C, I = S(), h = {};
    return k(() => ({
      ...I.value,
      $refs: h
    })), () => {
      function A() {
        return s(T, c({
          class: "FormGenerator"
        }, a, {
          ref: I
        }), {
          default: () => [s(M, null, {
            default: () => [a.formOption.map((e) => {
              if (!(e.hasOwnProperty("show") && e.show === !1))
                return R(e);
            }), a.disabled === !0 || !a.onSubmit ? "" : r != null && r.default ? s(m, null, [r.default()[0].children]) : s(B, {
              block: !0,
              type: "primary",
              "native-type": "submit"
            }, {
              default: () => [E("提交")]
            })]
          })]
        });
      }
      function F(e, G) {
        var j;
        let U = G ? e.formItem.text : a.model[e.formItem.name];
        return s(V, c({
          "is-link": !0,
          readonly: !0,
          onClick: a.disabled ? () => "" : () => {
            e.showPopup = !0;
          },
          inputAlign: "right",
          modelValue: U,
          "onUpdate:modelValue": ($) => U = $
        }, e.formItem), {
          ...(j = e == null ? void 0 : e.formItem) == null ? void 0 : j.slots
        });
      }
      function R(e) {
        var G, U, j, $, _;
        switch (h[e.formItem.name] = S(), e.type) {
          case "field":
            return s(V, c({
              ref: h[e.formItem.name],
              inputAlign: "right",
              modelValue: a.model[e.formItem.name],
              "onUpdate:modelValue": (l) => a.model[e.formItem.name] = l
            }, e.formItem, e.control), {
              ...(G = e == null ? void 0 : e.control) == null ? void 0 : G.slots
            });
          case "checkbox":
            return s(V, c({
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                let l;
                return s(o, c({
                  ref: h[e.formItem.name],
                  disabled: a.disabled,
                  direction: "horizontal",
                  modelValue: a.model[e.formItem.name],
                  "onUpdate:modelValue": (u) => a.model[e.formItem.name] = u
                }, e == null ? void 0 : e.control), z(l = e.control.checkboxGroup.map((u) => s(p, c(u, {
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
            return s(V, c({
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                let l;
                return s(Z, c({
                  ref: h[e.formItem.name],
                  disabled: a.disabled,
                  direction: "horizontal",
                  modelValue: a.model[e.formItem.name],
                  "onUpdate:modelValue": (u) => a.model[e.formItem.name] = u
                }, e == null ? void 0 : e.control), z(l = e.control.radioGroup.map((u) => s(f, c({
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
            return s(V, c({
              class: "field-switch",
              readonly: !0
            }, e.formItem), {
              "right-icon": () => {
                var l;
                return s(X, c({
                  ref: h[e.formItem.name],
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
            return s(V, c({
              readonly: !0,
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                var l;
                return s(W, c({
                  ref: h[e.formItem.name],
                  disabled: a.disabled,
                  modelValue: a.model[e.formItem.name],
                  "onUpdate:modelValue": (u) => a.model[e.formItem.name] = u
                }, e == null ? void 0 : e.control), {
                  ...(l = e == null ? void 0 : e.control) == null ? void 0 : l.slots
                });
              }
            });
          case "stepper":
            return s(V, c({
              readonly: !0
            }, e.formItem), {
              "right-icon": () => s(Q, c({
                ref: h[e.formItem.name],
                disabled: a.disabled,
                "button-size": "21px",
                modelValue: a.model[e.formItem.name],
                "onUpdate:modelValue": (l) => a.model[e.formItem.name] = l
              }, e == null ? void 0 : e.control), null)
            });
          case "picker":
            return s(m, null, [F(e, !0), s(N, c({
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var l;
                return [s(L, c({
                  ref: h[e.formItem.name],
                  modelValue: a.model[e.formItem.name],
                  "onUpdate:modelValue": (u) => a.model[e.formItem.name] = u,
                  onCancel: () => {
                    e.showPopup = !1;
                  },
                  onConfirm: (u) => {
                    var y, d, b, P;
                    e.showPopup = !1, Array.isArray(u) ? (a.model[e.formItem.name] = u.reduce((t, w) => {
                      var n, v;
                      return t.push(typeof w == "object" ? w == null ? void 0 : w[((v = (n = e == null ? void 0 : e.control) == null ? void 0 : n.columnsFieldNames) == null ? void 0 : v.values) ?? "value"] : w), t;
                    }, []), e.formItem.text = u.map((t) => {
                      var w, n;
                      return typeof t == "object" ? t == null ? void 0 : t[((n = (w = e == null ? void 0 : e.control) == null ? void 0 : w.columnsFieldNames) == null ? void 0 : n.text) ?? "text"] : t;
                    }).join("/")) : (a.model[e.formItem.name] = u[((d = (y = e == null ? void 0 : e.control) == null ? void 0 : y.columnsFieldNames) == null ? void 0 : d.values) ?? "value"], e.formItem.text = u[((P = (b = e == null ? void 0 : e.control) == null ? void 0 : b.columnsFieldNames) == null ? void 0 : P.text) ?? "text"]);
                  }
                }, e.control), {
                  ...(l = e == null ? void 0 : e.control) == null ? void 0 : l.slots
                })];
              }
            })]);
          case "datePicker":
            return s(m, null, [F(e), s(N, c({
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var l;
                return [s(J, c({
                  ref: h[e.formItem.name],
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
            return s(m, null, [F(e), s(N, c({
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var l;
                return [s(H, c({
                  ref: h[e.formItem.name],
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
            return s(m, null, [F(e, ((U = e == null ? void 0 : e.control) == null ? void 0 : U.type) === "multiple"), s(Y, c({
              ref: h[e.formItem.name],
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              "show-confirm": ((j = e == null ? void 0 : e.control) == null ? void 0 : j.type) === "multiple",
              onConfirm: (l) => {
                var y;
                e.showPopup = !1;
                const u = (d) => {
                  var b, P, t;
                  return `${(b = d == null ? void 0 : d.getFullYear) == null ? void 0 : b.call(d)}-${((P = d == null ? void 0 : d.getMonth) == null ? void 0 : P.call(d)) + 1}-${(t = d == null ? void 0 : d.getDate) == null ? void 0 : t.call(d)}`;
                };
                switch ((y = e == null ? void 0 : e.control) == null ? void 0 : y.type) {
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
              ...($ = e == null ? void 0 : e.control) == null ? void 0 : $.slots
            })]);
          case "cascader":
            return s(m, null, [F(e, !0), s(N, c({
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var l;
                return [s(K, c({
                  ref: h[e.formItem.name],
                  modelValue: a.model[e.formItem.name],
                  "onUpdate:modelValue": (u) => a.model[e.formItem.name] = u,
                  onClose: () => {
                    e.showPopup = !1;
                  },
                  onFinish: (u) => {
                    e.showPopup = !1, a.model[e.formItem.name] = u.value, e.formItem.text = u.selectedOptions.map((y) => {
                      var d, b;
                      return y[((b = (d = e == null ? void 0 : e.control) == null ? void 0 : d.fieldNames) == null ? void 0 : b.text) ?? "text"];
                    }).join("/");
                  }
                }, e.control), {
                  ...(l = e == null ? void 0 : e.control) == null ? void 0 : l.slots
                })];
              }
            })]);
          case "slot":
            return s(V, c({
              readonly: !0,
              inputAlign: "right"
            }, e.formItem), {
              label: () => e.formItem.label ?? "",
              ...(_ = e == null ? void 0 : e.control) == null ? void 0 : _.slots,
              input: () => {
                var l, u, y, d, b, P, t, w;
                return (u = (l = e == null ? void 0 : e.control) == null ? void 0 : l.slots) != null && u.input && typeof ((d = (y = e == null ? void 0 : e.control) == null ? void 0 : y.slots) == null ? void 0 : d.input) == "function" ? s(m, null, [(t = (P = (b = e == null ? void 0 : e.control) == null ? void 0 : b.slots) == null ? void 0 : P.input) == null ? void 0 : t.call(P, {
                  form: a.model,
                  data: a.model[e.formItem.name]
                })]) : r[e.formItem.name] ? s(m, null, [(w = r[e.formItem.name]) == null ? void 0 : w.call(r, {
                  form: a.model,
                  data: a.model[e.formItem.name]
                })]) : a.model[e.formItem.name];
              }
            });
        }
      }
      return A();
    };
  }
}), i = (g, k, C, r) => {
  if (!Array.isArray(g))
    return [];
  const x = [];
  let a = [];
  return r && (a = Object.keys(r)), g.forEach((I) => {
    let h = {
      label: typeof I == "string" ? I : I[k],
      value: typeof I == "string" ? I : I[C]
    };
    r && a.forEach((A) => {
      h[A] = I[A];
    }), x.push(h);
  }), x;
}, O = (g, k = []) => {
  const C = {
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
  return g.forEach((r) => {
    const x = { required: !0, message: `请${C[r.type] || "完善"}${r.formItem.label || ""}`, trigger: "onChange" };
    if (!k.includes(r.formItem.name) && (r.formItem.required = !0, !["stepper", "switch"].includes(r.type))) {
      r.formItem.rules ? r.formItem.rules.unshift(x) : r.formItem.rules = [x];
      for (let a = 0; a < r.formItem.rules.length; a++) {
        let I = r.formItem.rules[a];
        I.message || (I.message = "格式有误");
      }
    }
  }), g;
}, ue = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOption: i,
  setRequired: O
}, Symbol.toStringTag, { value: "Module" }));
export {
  ae as FormGenerator,
  ue as GeneratorUtils
};
//# sourceMappingURL=index.js.map
