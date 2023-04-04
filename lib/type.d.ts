import type { Ref } from 'vue'
import type { FormExpose } from 'vant/lib/form/types'
import type {
  PopupProps,
  FormProps,
  FieldProps,
  RadioProps,
  CheckboxProps,
  CalendarProps,
  CascaderProps,
  StepperProps,
  PickerProps,
  RadioGroupProps,
  CheckboxGroupProps,
  SwitchProps,
  UploaderProps,
  CascaderOption,
  PickerOption,
  PickerColumn,
} from 'vant';
import type {
  DatetimePickerProps,
  FormEvents,
  FieldEvents,
  CalendarEvents,
  CascaderEvents,
  StepperEvents,
  PickerEvents,
  RadioGroupEvents,
  CheckboxGroupEvents,
  DatetimePickerEvents,
  SwitchEvents,
  UploaderEvents,
  FieldSlots,
  PickerSlots,
  CalendarSlots,
  CascaderSlots,
  DatetimePickerSlots,
  SwitchSlots,
  UploaderSlots,
  Expose,
  FormItem,
  Control,
} from './vant'

/**
 * @description: Form 方法
 * @param $refs 表单中所有控件expose内容的入口
 */
type RefFormGenerator = () => {
  $refs: Record<string, Ref<Expose | undefined>>
} & FormExpose

/**
 * @description: 表单生成配置
 * @param model 表单数据对象
 * @param formOption 表单生成配置
 */
type FormAttrs = {
  [key: string]: any
  model: Record<string, any>
  formOption: FormOption[]
} & Partial<FormProps> & FormEvents

/**
 * @description: 表单生成配置
 * @param type 表单控件类型
 * @param show 是否显示
 * @param formItem form下formItem属性
 * @param control 控件属性
 */
type FormOption = {
  type: 'field'
  show?: boolean
  formItem: FormItem & Partial<Pick<FieldProps, 'name' | 'label' | 'rules' | 'required'>>
  control?: Control & Partial<Omit<FieldProps, 'modelValue' | 'rules'>> & FieldEvents & FieldSlots
} | {
  type: "stepper"
  show?: boolean
  formItem: FormItem & Partial<FieldProps>
  control?: Control & Partial<StepperProps> & StepperEvents
} | {
  type: "picker"
  show?: boolean
  showPopup?: boolean
  formItem: FormItem & Partial<FieldProps>
  control?: Control & Partial<Omit<PickerProps, 'columns'>> & { columns: Ref<(PickerOption & PickerColumn)[]> | (PickerOption | PickerColumn)[] } & PickerEvents & PickerSlots
  popup?: Partial<PopupProps>
} | {
  type: "radio"
  show?: boolean
  formItem: FormItem & Partial<FieldProps>
  control: Control & Partial<RadioGroupProps> & RadioGroupEvents & {
    radioGroup: Array<{
      label?: string
      value: string,
      onClick?: ((...args: any[]) => any) | undefined;
      slots?: {
        default?: ((...args: any[]) => JSX.Element | string | void) | string
        icon?: ((...args: any[]) => JSX.Element | string | void) | string
      }
    } & Partial<RadioProps>>
  }
} | {
  type: "checkbox"
  show?: boolean
  formItem: FormItem & Partial<FieldProps>
  control: Control & Partial<CheckboxGroupProps> & CheckboxGroupEvents & {
    checkboxGroup: Array<{
      label?: string
      value: string,
      onClick?: ((...args: any[]) => any) | undefined;
      slots?: {
        default?: ((...args: any[]) => JSX.Element | string | void) | string
        icon?: ((...args: any[]) => JSX.Element | string | void) | string
      }
    } & Partial<CheckboxProps>>
  }
} | {
  type: "switch"
  show?: boolean
  formItem: FormItem & Partial<FieldProps>
  control?: Control & Partial<SwitchProps> & SwitchEvents & SwitchSlots
} | {
  type: "datetimePicker"
  show?: boolean
  showPopup?: boolean
  formItem: FormItem & Partial<FieldProps>
  control?: Control & Partial<DatetimePickerProps> & DatetimePickerEvents & DatetimePickerSlots
  popup?: Partial<PopupProps>
} | {
  type: "calendar"
  show?: boolean
  showPopup?: boolean
  formItem: FormItem & Partial<FieldProps>
  control?: Control & Partial<CalendarProps> & CalendarEvents & CalendarSlots
} | {
  type: "cascader"
  show?: boolean
  showPopup?: boolean
  formItem: FormItem & Partial<FieldProps>
  control?: Control & Partial<Omit<CascaderProps, 'options'>> & { options: Ref<CascaderOption[]> | CascaderOption[] } & CascaderEvents & CascaderSlots
  popup?: Partial<PopupProps>
} | {
  type: "uploader"
  show?: boolean
  formItem: FormItem & Partial<FieldProps>
  control?: Control & Partial<UploaderProps> & UploaderEvents & UploaderSlots
} | {
  type: "slot"
  show?: boolean
  formItem: FormItem & Partial<FieldProps>
  control?: {
    slots?: Record<string, ((...args: any[]) => JSX.Element | string | void) | string>
  }
}

export {
  RefFormGenerator,
  FormAttrs,
  FormOption,
}