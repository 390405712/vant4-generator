const u = (s, l, a, e) => {
  if (!Array.isArray(s))
    return [];
  const o = [];
  let t = [];
  return e && (t = Object.keys(e)), s.forEach((r) => {
    let f = {
      label: typeof r == "string" ? r : r[l],
      value: typeof r == "string" ? r : r[a]
    };
    e && t.forEach((n) => {
      f[n] = r[n];
    }), o.push(f);
  }), o;
}, c = (s, l = []) => {
  const a = {
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
  return s.forEach((e) => {
    const o = { required: !0, message: `请${a[e.type] || "完善"}${e.formItem.label || ""}`, trigger: "onChange" };
    if (!l.includes(e.formItem.name) && (e.formItem.required = !0, !["stepper", "switch"].includes(e.type))) {
      e.formItem.rules ? e.formItem.rules.unshift(o) : e.formItem.rules = [o];
      for (let t = 0; t < e.formItem.rules.length; t++) {
        let r = e.formItem.rules[t];
        r.message || (r.message = "格式有误");
      }
    }
  }), s;
}, p = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getOption: u,
  setRequired: c
}, Symbol.toStringTag, { value: "Module" }));
export {
  u as g,
  c as s,
  p as u
};
//# sourceMappingURL=utils-03f79311.js.map
