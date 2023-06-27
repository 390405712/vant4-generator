(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".van-checkbox-group--horizontal,.van-radio-group--horizontal{gap:10px 0;justify-content:flex-end}.field-switch .van-field__right-icon{height:24px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as T, ref as E, createVNode as s, mergeProps as c, Fragment as g, createTextVNode as M, isVNode as B } from "vue";
import { Form as K, CellGroup as Y, Button as H, Field as P, Popup as S, Cascader as J, Calendar as L, TimePicker as Q, DatePicker as W, Picker as X, Stepper as Z, Uploader as f, Switch as o, RadioGroup as p, Radio as i, CheckboxGroup as O, Checkbox as ee } from "vant";
function q(w) {
  return typeof w == "function" || Object.prototype.toString.call(w) === "[object Object]" && !B(w);
}
const de = /* @__PURE__ */ T({
  name: "FormGenerator",
  setup(w, {
    expose: V,
    attrs: x,
    slots: r,
    emit: m
  }) {
    const u = x, I = E(), t = {};
    return V(() => ({
      ...I.value,
      $refs: t
    })), () => {
      function j() {
        return s(K, c({
          class: "FormGenerator"
        }, u, {
          ref: I
        }), {
          default: () => [s(Y, null, {
            default: () => [u.formOption.map((e) => {
              if (!(e.hasOwnProperty("show") && e.show === !1))
                return v(e);
            }), u.disabled === !0 || !u.onSubmit ? "" : r != null && r.default ? s(g, null, [r.default()[0].children]) : s(H, {
              block: !0,
              type: "primary",
              "native-type": "submit"
            }, {
              default: () => [M("提交")]
            })]
          })]
        });
      }
      function k(e, n) {
        var U;
        let C = n ? e.formItem.text : u.model[e.formItem.name];
        return s(P, c({
          "is-link": !0,
          readonly: !0,
          onClick: u.disabled ? () => "" : () => {
            e.showPopup = !0;
          },
          inputAlign: "right",
          modelValue: C,
          "onUpdate:modelValue": (A) => C = A
        }, e.formItem), {
          ...(U = e == null ? void 0 : e.formItem) == null ? void 0 : U.slots
        });
      }
      function v(e) {
        var n, C, U, A, G, $, _, N, z, R;
        switch (t[e.formItem.name] = E(), e.type) {
          case "field":
            return s(P, c({
              ref: t[e.formItem.name],
              inputAlign: "right",
              modelValue: u.model[e.formItem.name],
              "onUpdate:modelValue": (l) => u.model[e.formItem.name] = l
            }, e.formItem, e.control), {
              ...(n = e == null ? void 0 : e.control) == null ? void 0 : n.slots
            });
          case "checkbox":
            return s(P, c({
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                let l;
                return s(O, c({
                  ref: t[e.formItem.name],
                  disabled: u.disabled,
                  direction: "horizontal",
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => u.model[e.formItem.name] = a
                }, e == null ? void 0 : e.control), q(l = e.control.checkboxGroup.map((a) => s(ee, c(a, {
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
                return s(p, c({
                  ref: t[e.formItem.name],
                  disabled: u.disabled,
                  direction: "horizontal",
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => u.model[e.formItem.name] = a
                }, e == null ? void 0 : e.control), q(l = e.control.radioGroup.map((a) => s(i, c({
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
                return s(o, c({
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
                return s(f, c({
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
              "right-icon": () => s(Z, c({
                ref: t[e.formItem.name],
                disabled: u.disabled,
                "button-size": "21px",
                modelValue: u.model[e.formItem.name],
                "onUpdate:modelValue": (l) => u.model[e.formItem.name] = l
              }, e == null ? void 0 : e.control), null)
            });
          case "picker":
            return !e.formItem.hasOwnProperty("text") && u.model[e.formItem.name] && ((C = e == null ? void 0 : e.control) != null && C.columns) && (e.formItem.text = ($ = ((U = e == null ? void 0 : e.control) == null ? void 0 : U.columns).find((l) => {
              var a, h;
              return l[((h = (a = e == null ? void 0 : e.control) == null ? void 0 : a.columnsFieldNames) == null ? void 0 : h.value) ?? "value"] === u.model[e.formItem.name];
            })) == null ? void 0 : $[((G = (A = e == null ? void 0 : e.control) == null ? void 0 : A.columnsFieldNames) == null ? void 0 : G.text) ?? "text"]), s(g, null, [k(e, !0), s(S, c({
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var l;
                return [s(X, c({
                  ref: t[e.formItem.name],
                  onCancel: () => {
                    e.showPopup = !1;
                  },
                  onConfirm: (a) => {
                    e.showPopup = !1, u.model[e.formItem.name] = Array.isArray(a.selectedValues) && a.selectedValues.length === 1 ? a.selectedValues[0] : a.selectedValues, e.formItem.text = a.selectedOptions.map((h) => {
                      var d, b;
                      return typeof h == "object" ? h == null ? void 0 : h[((b = (d = e == null ? void 0 : e.control) == null ? void 0 : d.columnsFieldNames) == null ? void 0 : b.text) ?? "text"] : h;
                    }).join("/");
                  }
                }, e.control), {
                  ...(l = e == null ? void 0 : e.control) == null ? void 0 : l.slots
                })];
              }
            })]);
          case "datePicker":
            return s(g, null, [k(e), s(S, c({
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var l;
                return [s(W, c({
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
            return s(g, null, [k(e), s(S, c({
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var l;
                return [s(Q, c({
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
            return s(g, null, [k(e, ((_ = e == null ? void 0 : e.control) == null ? void 0 : _.type) === "multiple"), s(L, c({
              ref: t[e.formItem.name],
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              "show-confirm": ((N = e == null ? void 0 : e.control) == null ? void 0 : N.type) === "multiple",
              onConfirm: (l) => {
                var h;
                e.showPopup = !1;
                const a = (d) => {
                  var b, y, F;
                  return `${(b = d == null ? void 0 : d.getFullYear) == null ? void 0 : b.call(d)}-${String(((y = d == null ? void 0 : d.getMonth) == null ? void 0 : y.call(d)) + 1).padStart(2, "0")}-${String((F = d == null ? void 0 : d.getDate) == null ? void 0 : F.call(d)).padStart(2, "0")}`;
                };
                switch ((h = e == null ? void 0 : e.control) == null ? void 0 : h.type) {
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
              ...(z = e == null ? void 0 : e.control) == null ? void 0 : z.slots
            })]);
          case "cascader":
            return s(g, null, [k(e, !0), s(S, c({
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var l;
                return [s(J, c({
                  ref: t[e.formItem.name],
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => u.model[e.formItem.name] = a,
                  onClose: () => {
                    e.showPopup = !1;
                  },
                  onFinish: (a) => {
                    e.showPopup = !1, u.model[e.formItem.name] = a.value, e.formItem.text = a.selectedOptions.map((h) => {
                      var d, b;
                      return h[((b = (d = e == null ? void 0 : e.control) == null ? void 0 : d.fieldNames) == null ? void 0 : b.text) ?? "text"];
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
              inputAlign: "right",
              modelValue: u.model[e.formItem.name],
              "onUpdate:modelValue": (l) => u.model[e.formItem.name] = l
            }, e.formItem), {
              label: () => e.formItem.label ?? "",
              ...(R = e == null ? void 0 : e.control) == null ? void 0 : R.slots,
              input: () => {
                var l, a, h, d, b, y, F, D;
                return (a = (l = e == null ? void 0 : e.control) == null ? void 0 : l.slots) != null && a.input && typeof ((d = (h = e == null ? void 0 : e.control) == null ? void 0 : h.slots) == null ? void 0 : d.input) == "function" ? s(g, null, [(F = (y = (b = e == null ? void 0 : e.control) == null ? void 0 : b.slots) == null ? void 0 : y.input) == null ? void 0 : F.call(y, {
                  form: u.model,
                  data: u.model[e.formItem.name]
                })]) : r[e.formItem.name] ? s(g, null, [(D = r[e.formItem.name]) == null ? void 0 : D.call(r, {
                  form: u.model,
                  data: u.model[e.formItem.name]
                })]) : u.model[e.formItem.name];
              }
            });
        }
      }
      return j();
    };
  }
}), le = (w, V, x, r) => {
  if (!Array.isArray(w))
    return [];
  const m = [];
  let u = [];
  return r && (u = Object.keys(r)), w.forEach((I) => {
    let t = {
      label: typeof I == "string" ? I : I[V],
      value: typeof I == "string" ? I : I[x]
    };
    r && u.forEach((j) => {
      t[j] = I[j];
    }), m.push(t);
  }), m;
}, ae = (w, V = []) => {
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
  return w.forEach((r) => {
    const m = { required: !0, message: `请${x[r.type] || "完善"}${r.formItem.label || ""}`, trigger: "onChange" };
    if (!V.includes(r.formItem.name) && (r.formItem.required = !0, !["stepper", "switch"].includes(r.type))) {
      r.formItem.rules ? r.formItem.rules.unshift(m) : r.formItem.rules = [m];
      for (let u = 0; u < r.formItem.rules.length; u++) {
        let I = r.formItem.rules[u];
        I.message || (I.message = "格式有误");
      }
    }
  }), w;
}, ce = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOption: le,
  setRequired: ae
}, Symbol.toStringTag, { value: "Module" }));
export {
  de as FormGenerator,
  ce as GeneratorUtils
};
//# sourceMappingURL=index.js.map
