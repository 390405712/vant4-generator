import { Form, CellGroup, Button, Field, Calendar, Cascader, Popup, Checkbox, CheckboxGroup, Radio, RadioGroup, Switch, Picker, DatePicker, TimePicker, Stepper, Uploader } from 'vant'
import { defineComponent, ref } from 'vue'
import type { Ref } from 'vue'
import type { FormAttrs, FormOption, CheckboxGroup as CheckboxGroupType, RadioGroup as RadioGroupType } from './type'
import type { Expose } from './vant'
import type { DatePickerColumnType } from 'vant/lib/date-picker/DatePicker.d'
import type { CascaderOption } from 'vant/lib/cascader/types'
import type { PickerOption, PickerColumn, PickerFieldNames } from 'vant';
export default defineComponent({
  name: 'FormGenerator',
  setup(props, { expose, attrs, slots, emit }) {
    const _attrs = attrs as FormAttrs
    const RefFormGenerator = ref()
    const $refs: Record<string, Ref<Expose | undefined>> = {}
    expose(() => ({ ...RefFormGenerator.value, $refs }))
    return () => {
      function renderForm() {
        return (
          <Form class={`FormGenerator`} {..._attrs} ref={RefFormGenerator} >
            <CellGroup>
              {_attrs.formOption.map((formOption) => {
                if (!(formOption.hasOwnProperty('show') && formOption.show === false)) return renderControl(formOption)
              })}
              {_attrs.disabled === true || !_attrs.onSubmit
                ? ''
                : slots?.default
                  ? <>{slots.default()[0].children}</>
                  : <Button loading={_attrs.loading} block type="primary" native-type="submit">提交</Button>
              }
            </CellGroup>
          </Form >
        )
      }
      function renderField(formOption: FormOption & { showPopup?: boolean }, custom?: boolean) {
        let model = custom ? formOption.formItem.text : _attrs.model[formOption.formItem.name]
        return <Field is-link readonly onClick={_attrs.disabled ? () => '' : () => { formOption.showPopup = true }} inputAlign='right' v-model={model} v-slots={{ ...formOption?.formItem?.slots }} {...formOption.formItem} />
      }
      function renderControl(formOption: FormOption) {
        $refs[formOption.formItem.name] = ref()
        function getText(arr: PickerOption[], val: string, columnsFieldNames: PickerFieldNames, splice: boolean = false): any {
          if (!Array.isArray(arr)) return ''
          for (let index = 0; index < arr.length; index++) {
            const item = arr[index];
            if (item[columnsFieldNames?.value ?? 'value'] === val) return item[columnsFieldNames?.text ?? 'text'] || ''
            if ((item[columnsFieldNames?.children ?? 'children'] as PickerColumn[])?.length) {
              const text = getText(item[columnsFieldNames?.children ?? 'children'] as PickerColumn, val, columnsFieldNames, splice)
              if (text) {
                if (splice) return `${item[columnsFieldNames?.text ?? 'text']}/${text}`
                return text
              }
            }
          }
        }
        switch (formOption.type) {
          case 'field':
            return <Field ref={$refs[formOption.formItem.name]} inputAlign='right' v-model={_attrs.model[formOption.formItem.name]} {...formOption.formItem} {...formOption.control} v-slots={{ ...formOption?.control?.slots }} />
            break;
          case 'checkbox':
            return <Field inputAlign='right' {...formOption.formItem} v-slots={{
              input: () => (
                <CheckboxGroup ref={$refs[formOption.formItem.name]} disabled={_attrs.disabled} direction="horizontal" v-model={_attrs.model[formOption.formItem.name]} {...formOption?.control} >
                  {(formOption.control.checkboxGroup as CheckboxGroupType).map((controlOptionItem) => (
                    <Checkbox  {...controlOptionItem} name={controlOptionItem.value} v-slots={{ ...controlOptionItem?.slots }} >{controlOptionItem.label}</Checkbox>
                  ))}
                </CheckboxGroup>
              )
            }}>
            </Field>
            break;
          case 'radio':
            return <Field inputAlign='right' {...formOption.formItem} v-slots={{
              input: () => (
                <RadioGroup ref={$refs[formOption.formItem.name]} disabled={_attrs.disabled} direction="horizontal" v-model={_attrs.model[formOption.formItem.name]} {...formOption?.control} >
                  {(formOption.control.radioGroup as RadioGroupType).map((controlOptionItem) => (
                    <Radio name={controlOptionItem.value} v-slots={{ ...controlOptionItem?.slots }} {...controlOptionItem}>{controlOptionItem.label}</Radio>
                  ))}
                </RadioGroup>
              )
            }}>
            </Field>
            break;
          case 'switch':
            return <Field class="field-switch" readonly v-slots={{
              'right-icon': () => (
                <Switch ref={$refs[formOption.formItem.name]} disabled={_attrs.disabled} size="24px" modelValue={_attrs.model[formOption.formItem.name]} onUpdate: modelValue={(val) => { _attrs.model[formOption.formItem.name] = val }} {...formOption?.control} v-slots={{ ...formOption?.control?.slots }} />
              )
            }} {...formOption.formItem} >
            </Field>
            break;
          case 'uploader':
            return <Field readonly inputAlign='right' v-slots={{
              'input': () => (
                <Uploader ref={$refs[formOption.formItem.name]} disabled={_attrs.disabled} v-model={_attrs.model[formOption.formItem.name]} {...formOption?.control} v-slots={{ ...formOption?.control?.slots }} />
              )
            }} {...formOption.formItem} >
            </Field>
            break;
          case 'stepper':
            return <Field readonly v-slots={{
              'right-icon': () => (
                <Stepper ref={$refs[formOption.formItem.name]} disabled={_attrs.disabled} button-size="21px" v-model={_attrs.model[formOption.formItem.name]} {...formOption?.control} />
              )
            }} {...formOption.formItem} >
            </Field>
            break;
          case 'picker':
            if (!formOption.formItem.hasOwnProperty('text') && _attrs.model[formOption.formItem.name] && formOption?.control?.columns) {
              if (Array.isArray((formOption?.control?.columns as PickerOption[][])[0])) {
                formOption.formItem.text = (formOption?.control?.columns as PickerOption[][]).reduce((arr: string[], item: PickerOption[], index: number) => {
                  arr.push(item.find(i => i[formOption?.control?.columnsFieldNames?.value ?? 'value'] === _attrs.model[formOption.formItem.name]?.[index])?.[formOption?.control?.columnsFieldNames?.text ?? 'text'])
                  return arr
                }, []).join('/')
              } else if (Array.isArray(_attrs.model[formOption.formItem.name])) {
                formOption.formItem.text = _attrs.model[formOption.formItem.name].reduce((arr: string[], item: string) => {
                  arr.push(getText(formOption?.control?.columns as PickerOption[], item, formOption?.control?.columnsFieldNames as PickerFieldNames))
                  return arr
                }, []).join('/')
              } else {
                formOption.formItem.text = getText(formOption?.control?.columns as PickerOption[], _attrs.model[formOption.formItem.name], formOption?.control?.columnsFieldNames as PickerFieldNames)
              }
            }
            return <>
              {renderField(formOption, true)}
              <Popup v-model={[formOption.showPopup, 'show', ['']]} round position="bottom" {...formOption.popup}>
                <Picker ref={$refs[formOption.formItem.name]}
                  onCancel={() => { formOption.showPopup = false }}
                  onConfirm={(scope: { selectedOptions: Record<string, any>[], selectedValues: Record<string, any>[] }) => {
                    formOption.showPopup = false;
                    _attrs.model[formOption.formItem.name] = Array.isArray(scope.selectedValues) && scope.selectedValues.length === 1 ? scope.selectedValues[0] : scope.selectedValues;
                    formOption.formItem.text = scope.selectedOptions.map((item) => typeof item === 'object' ? item?.[formOption?.control?.columnsFieldNames?.text ?? 'text'] : item).join('/');
                  }}
                  v-slots={{ ...formOption?.control?.slots }}
                  {...formOption.control}
                />
              </Popup>
            </>
            break;
          case 'datePicker':
            return <>
              {renderField(formOption)}
              <Popup v-model={[formOption.showPopup, 'show', ['']]} round position="bottom" {...formOption.popup}>
                <DatePicker ref={$refs[formOption.formItem.name]}
                  onCancel={() => { formOption.showPopup = false }}
                  onConfirm={(scope: { selectedValues: string[], selectedOptions: { text: string, value: string }[], columnIndex: number, selectedIndexes: number[] }) => {
                    _attrs.model[formOption.formItem.name] = scope.selectedValues.join('-')
                    formOption.showPopup = false;
                  }}
                  v-slots={{ ...formOption?.control?.slots }}
                  {...formOption.control}
                />
              </Popup>
            </>
            break;
          case 'timePicker':
            return <>
              {renderField(formOption)}
              <Popup v-model={[formOption.showPopup, 'show', ['']]} round position="bottom" {...formOption.popup}>
                <TimePicker ref={$refs[formOption.formItem.name]}
                  onCancel={() => { formOption.showPopup = false }}
                  onConfirm={(scope: { selectedValues: string[], selectedOptions: { text: string, value: string }[], columnIndex: number, selectedIndexes: number[] }) => {
                    _attrs.model[formOption.formItem.name] = scope.selectedValues.join(':')
                    formOption.showPopup = false;
                  }}
                  v-slots={{ ...formOption?.control?.slots }}
                  {...formOption.control}
                />
              </Popup>
            </>
            break;
          case 'calendar':
            return <>
              {renderField(formOption, formOption?.control?.type === 'multiple')}
              <Calendar ref={$refs[formOption.formItem.name]} v-model={[formOption.showPopup, 'show', ['']]}
                show-confirm={formOption?.control?.type === 'multiple'}
                onConfirm={(value) => {
                  formOption.showPopup = false;
                  const formatDate = (date: Date) => `${date?.getFullYear?.()}-${String(date?.getMonth?.() + 1).padStart(2, '0')}-${String(date?.getDate?.()).padStart(2, '0')}`
                  switch (formOption?.control?.type) {
                    case 'multiple':
                      _attrs.model[formOption.formItem.name] = value.reduce((arr: string[], item: Date) => {
                        arr.push(formatDate(item))
                        return arr
                      }, [])
                      formOption.formItem.text = `选择了 ${value.length} 个日期`
                      break;
                    case 'range':
                      _attrs.model[formOption.formItem.name] = [formatDate(value[0]), formatDate(value[1])]
                      formOption.formItem.text = `${formatDate(value[0])}~${formatDate(value[1])}`
                      break;
                    default:
                      _attrs.model[formOption.formItem.name] = formatDate(value)
                      break;
                  }
                }}
                v-slots={{ ...formOption?.control?.slots }}
                {...formOption.control}
              />
            </>
            break;
          case 'cascader':
            if (_attrs.model[formOption.formItem.name]) {
              formOption.formItem.text = getText(formOption?.control?.options as CascaderOption[], _attrs.model[formOption.formItem.name], formOption?.control?.fieldNames as PickerFieldNames, true)
            }
            return <>
              {renderField(formOption, true)}
              <Popup v-model={[formOption.showPopup, 'show', ['']]} round position="bottom" {...formOption.popup}>
                <Cascader ref={$refs[formOption.formItem.name]} v-model={_attrs.model[formOption.formItem.name]}
                  onClose={() => { formOption.showPopup = false }}
                  onFinish={(scope: { value: string | number, selectedOptions: CascaderOption[] }) => {
                    formOption.showPopup = false;
                    _attrs.model[formOption.formItem.name] = scope.value;
                    formOption.formItem.text = scope.selectedOptions.map((item) => item[formOption?.control?.fieldNames?.text ?? 'text']).join('/');
                  }}
                  v-slots={{ ...formOption?.control?.slots }}
                  {...formOption.control}
                />
              </Popup>
            </>
            break;
          case 'slot':
            return <Field readonly inputAlign='right' v-slots={{
              label: () => formOption.formItem.label ?? '',
              ...formOption?.control?.slots,
              input: () => {
                if (formOption?.control?.slots?.input && typeof formOption?.control?.slots?.input === 'function') return <>{formOption?.control?.slots?.input?.({ form: _attrs.model, data: _attrs.model[formOption.formItem.name] })}</>
                if (slots[formOption.formItem.name]) return <>{slots[formOption.formItem.name]?.({ form: _attrs.model, data: _attrs.model[formOption.formItem.name] })}</>
                return _attrs.model[formOption.formItem.name]
              },
            }}
              {...formOption.formItem} />
            break;
        }
      };
      return (
        renderForm()
      )
    }
  },
})