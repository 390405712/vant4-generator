(function(){ try {var elementStyle = document.createElement('style'); elementStyle.appendChild(document.createTextNode(".van-checkbox-group--horizontal,.van-radio-group--horizontal{gap:10px 0;justify-content:flex-end}.field-switch .van-field__right-icon{height:24px}")); document.head.appendChild(elementStyle);} catch(e) {console.error('vite-plugin-css-injected-by-js', e);} })();import { defineComponent as W, ref as J, createVNode as c, mergeProps as h, Fragment as P, createTextVNode as X, isVNode as Z } from "vue";
import { Form as F, CellGroup as N, Button as n, Field as V, Popup as z, Cascader as m, Calendar as f, TimePicker as p, DatePicker as i, Picker as o, Stepper as O, Uploader as ee, Switch as le, RadioGroup as ae, Radio as ue, CheckboxGroup as se, Checkbox as de } from "vant";
function L(y) {
  return typeof y == "function" || Object.prototype.toString.call(y) === "[object Object]" && !Z(y);
}
const Ie = /* @__PURE__ */ W({
  name: "FormGenerator",
  setup(y, {
    expose: C,
    attrs: U,
    slots: r,
    emit: k
  }) {
    const u = U, g = J(), I = {};
    return C(() => ({
      ...g.value,
      $refs: I
    })), () => {
      function G() {
        return c(F, h({
          class: "FormGenerator"
        }, u, {
          ref: g
        }), {
          default: () => [c(N, null, {
            default: () => [u.formOption.map((e) => {
              if (!(e.hasOwnProperty("show") && e.show === !1))
                return Q(e);
            }), u.disabled === !0 || !u.onSubmit ? "" : r != null && r.default ? c(P, null, [r.default()[0].children]) : c(n, {
              loading: u.loading,
              block: !0,
              type: "primary",
              "native-type": "submit"
            }, {
              default: () => [X("提交")]
            })]
          })]
        });
      }
      function j(e, A) {
        var $;
        let S = A ? e.formItem.text : u.model[e.formItem.name];
        return c(V, h({
          "is-link": !0,
          readonly: !0,
          onClick: u.disabled ? () => "" : () => {
            e.showPopup = !0;
          },
          inputAlign: "right",
          modelValue: S,
          "onUpdate:modelValue": (_) => S = _
        }, e.formItem), {
          ...($ = e == null ? void 0 : e.formItem) == null ? void 0 : $.slots
        });
      }
      function Q(e) {
        var S, $, _, R, v, D, E, T, q, M, B, K;
        I[e.formItem.name] = J();
        function A(l, a, d, s = !1) {
          var t;
          if (!Array.isArray(l))
            return "";
          for (let b = 0; b < l.length; b++) {
            const w = l[b];
            if (w[(d == null ? void 0 : d.value) ?? "value"] === a)
              return w[(d == null ? void 0 : d.text) ?? "text"] || "";
            if ((t = w[(d == null ? void 0 : d.children) ?? "children"]) != null && t.length) {
              const x = A(w[(d == null ? void 0 : d.children) ?? "children"], a, d, s);
              if (x)
                return s ? `${w[(d == null ? void 0 : d.text) ?? "text"]}/${x}` : x;
            }
          }
        }
        switch (e.type) {
          case "field":
            return c(V, h({
              ref: I[e.formItem.name],
              inputAlign: "right",
              modelValue: u.model[e.formItem.name],
              "onUpdate:modelValue": (l) => u.model[e.formItem.name] = l
            }, e.formItem, e.control), {
              ...(S = e == null ? void 0 : e.control) == null ? void 0 : S.slots
            });
          case "checkbox":
            return c(V, h({
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                let l;
                return c(se, h({
                  ref: I[e.formItem.name],
                  disabled: u.disabled,
                  direction: "horizontal",
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => u.model[e.formItem.name] = a
                }, e == null ? void 0 : e.control), L(l = e.control.checkboxGroup.map((a) => c(de, h(a, {
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
            return c(V, h({
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                let l;
                return c(ae, h({
                  ref: I[e.formItem.name],
                  disabled: u.disabled,
                  direction: "horizontal",
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => u.model[e.formItem.name] = a
                }, e == null ? void 0 : e.control), L(l = e.control.radioGroup.map((a) => c(ue, h({
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
            return c(V, h({
              class: "field-switch",
              readonly: !0
            }, e.formItem), {
              "right-icon": () => {
                var l;
                return c(le, h({
                  ref: I[e.formItem.name],
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
            return c(V, h({
              readonly: !0,
              inputAlign: "right"
            }, e.formItem), {
              input: () => {
                var l;
                return c(ee, h({
                  ref: I[e.formItem.name],
                  disabled: u.disabled,
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => u.model[e.formItem.name] = a
                }, e == null ? void 0 : e.control), {
                  ...(l = e == null ? void 0 : e.control) == null ? void 0 : l.slots
                });
              }
            });
          case "stepper":
            return c(V, h({
              readonly: !0
            }, e.formItem), {
              "right-icon": () => c(O, h({
                ref: I[e.formItem.name],
                disabled: u.disabled,
                "button-size": "21px",
                modelValue: u.model[e.formItem.name],
                "onUpdate:modelValue": (l) => u.model[e.formItem.name] = l
              }, e == null ? void 0 : e.control), null)
            });
          case "picker":
            return !e.formItem.hasOwnProperty("text") && u.model[e.formItem.name] && (($ = e == null ? void 0 : e.control) != null && $.columns) && (Array.isArray(((_ = e == null ? void 0 : e.control) == null ? void 0 : _.columns)[0]) ? e.formItem.text = ((R = e == null ? void 0 : e.control) == null ? void 0 : R.columns).reduce((l, a, d) => {
              var s, t, b;
              return l.push((b = a.find((w) => {
                var x, Y, H;
                return w[((Y = (x = e == null ? void 0 : e.control) == null ? void 0 : x.columnsFieldNames) == null ? void 0 : Y.value) ?? "value"] === ((H = u.model[e.formItem.name]) == null ? void 0 : H[d]);
              })) == null ? void 0 : b[((t = (s = e == null ? void 0 : e.control) == null ? void 0 : s.columnsFieldNames) == null ? void 0 : t.text) ?? "text"]), l;
            }, []).join("/") : Array.isArray(u.model[e.formItem.name]) ? e.formItem.text = u.model[e.formItem.name].reduce((l, a) => {
              var d, s;
              return l.push(A((d = e == null ? void 0 : e.control) == null ? void 0 : d.columns, a, (s = e == null ? void 0 : e.control) == null ? void 0 : s.columnsFieldNames)), l;
            }, []).join("/") : e.formItem.text = A((v = e == null ? void 0 : e.control) == null ? void 0 : v.columns, u.model[e.formItem.name], (D = e == null ? void 0 : e.control) == null ? void 0 : D.columnsFieldNames)), c(P, null, [j(e, !0), c(z, h({
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var l;
                return [c(o, h({
                  ref: I[e.formItem.name],
                  onCancel: () => {
                    e.showPopup = !1;
                  },
                  onConfirm: (a) => {
                    e.showPopup = !1, u.model[e.formItem.name] = Array.isArray(a.selectedValues) && a.selectedValues.length === 1 ? a.selectedValues[0] : a.selectedValues, e.formItem.text = a.selectedOptions.map((d) => {
                      var s, t;
                      return typeof d == "object" ? d == null ? void 0 : d[((t = (s = e == null ? void 0 : e.control) == null ? void 0 : s.columnsFieldNames) == null ? void 0 : t.text) ?? "text"] : d;
                    }).join("/");
                  }
                }, e.control), {
                  ...(l = e == null ? void 0 : e.control) == null ? void 0 : l.slots
                })];
              }
            })]);
          case "datePicker":
            return c(P, null, [j(e), c(z, h({
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var l;
                return [c(i, h({
                  ref: I[e.formItem.name],
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
            return c(P, null, [j(e), c(z, h({
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var l;
                return [c(p, h({
                  ref: I[e.formItem.name],
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
            return c(P, null, [j(e, ((E = e == null ? void 0 : e.control) == null ? void 0 : E.type) === "multiple"), c(f, h({
              ref: I[e.formItem.name],
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              "show-confirm": ((T = e == null ? void 0 : e.control) == null ? void 0 : T.type) === "multiple",
              onConfirm: (l) => {
                var d;
                e.showPopup = !1;
                const a = (s) => {
                  var t, b, w;
                  return `${(t = s == null ? void 0 : s.getFullYear) == null ? void 0 : t.call(s)}-${String(((b = s == null ? void 0 : s.getMonth) == null ? void 0 : b.call(s)) + 1).padStart(2, "0")}-${String((w = s == null ? void 0 : s.getDate) == null ? void 0 : w.call(s)).padStart(2, "0")}`;
                };
                switch ((d = e == null ? void 0 : e.control) == null ? void 0 : d.type) {
                  case "multiple":
                    u.model[e.formItem.name] = l.reduce((s, t) => (s.push(a(t)), s), []), e.formItem.text = `选择了 ${l.length} 个日期`;
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
              ...(q = e == null ? void 0 : e.control) == null ? void 0 : q.slots
            })]);
          case "cascader":
            return u.model[e.formItem.name] && (e.formItem.text = A((M = e == null ? void 0 : e.control) == null ? void 0 : M.options, u.model[e.formItem.name], (B = e == null ? void 0 : e.control) == null ? void 0 : B.fieldNames, !0)), c(P, null, [j(e, !0), c(z, h({
              show: e.showPopup,
              "onUpdate:show": (l) => e.showPopup = l,
              round: !0,
              position: "bottom"
            }, e.popup), {
              default: () => {
                var l;
                return [c(m, h({
                  ref: I[e.formItem.name],
                  modelValue: u.model[e.formItem.name],
                  "onUpdate:modelValue": (a) => u.model[e.formItem.name] = a,
                  onClose: () => {
                    e.showPopup = !1;
                  },
                  onFinish: (a) => {
                    e.showPopup = !1, u.model[e.formItem.name] = a.value, e.formItem.text = a.selectedOptions.map((d) => {
                      var s, t;
                      return d[((t = (s = e == null ? void 0 : e.control) == null ? void 0 : s.fieldNames) == null ? void 0 : t.text) ?? "text"];
                    }).join("/");
                  }
                }, e.control), {
                  ...(l = e == null ? void 0 : e.control) == null ? void 0 : l.slots
                })];
              }
            })]);
          case "slot":
            return c(V, h({
              readonly: !0,
              inputAlign: "right"
            }, e.formItem), {
              label: () => e.formItem.label ?? "",
              ...(K = e == null ? void 0 : e.control) == null ? void 0 : K.slots,
              input: () => {
                var l, a, d, s, t, b, w, x;
                return (a = (l = e == null ? void 0 : e.control) == null ? void 0 : l.slots) != null && a.input && typeof ((s = (d = e == null ? void 0 : e.control) == null ? void 0 : d.slots) == null ? void 0 : s.input) == "function" ? c(P, null, [(w = (b = (t = e == null ? void 0 : e.control) == null ? void 0 : t.slots) == null ? void 0 : b.input) == null ? void 0 : w.call(b, {
                  form: u.model,
                  data: u.model[e.formItem.name]
                })]) : r[e.formItem.name] ? c(P, null, [(x = r[e.formItem.name]) == null ? void 0 : x.call(r, {
                  form: u.model,
                  data: u.model[e.formItem.name]
                })]) : u.model[e.formItem.name];
              }
            });
        }
      }
      return G();
    };
  }
}), ce = (y, C, U, r) => {
  if (!Array.isArray(y))
    return [];
  const k = [];
  let u = [];
  return r && (u = Object.keys(r)), y.forEach((g) => {
    let I = {
      label: typeof g == "string" ? g : g[C],
      value: typeof g == "string" ? g : g[U]
    };
    r && u.forEach((G) => {
      I[G] = g[G];
    }), k.push(I);
  }), k;
}, he = (y, C = []) => {
  const U = {
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
  return y.forEach((r) => {
    const k = { required: !0, message: `请${U[r.type] || "完善"}${r.formItem.label || ""}`, trigger: "onChange" };
    if (!C.includes(r.formItem.name) && (r.formItem.required = !0, !["stepper", "switch"].includes(r.type))) {
      r.formItem.rules ? r.formItem.rules.unshift(k) : r.formItem.rules = [k];
      for (let u = 0; u < r.formItem.rules.length; u++) {
        let g = r.formItem.rules[u];
        g.message || (g.message = "格式有误");
      }
    }
  }), y;
}, be = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOption: ce,
  setRequired: he
}, Symbol.toStringTag, { value: "Module" }));
export {
  Ie as FormGenerator,
  be as GeneratorUtils
};
//# sourceMappingURL=index.js.map
