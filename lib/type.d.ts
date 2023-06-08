import type { Ref } from 'vue'
import type { FormExpose } from 'vant/lib/form/types'
import type {
  PopupProps,
  FormProps,
  FieldProps,
  RadioProps,
  DatePickerProps,
  TimePickerProps,
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
  FormEvents,
  FieldEvents,
  CalendarEvents,
  CascaderEvents,
  StepperEvents,
  PickerEvents,
  RadioGroupEvents,
  CheckboxGroupEvents,
  DatePickerEvents,
  TimePickerEvents,
  SwitchEvents,
  UploaderEvents,
  FieldSlots,
  PickerSlots,
  CalendarSlots,
  CascaderSlots,
  DatePickerSlots,
  TimePickerSlots,
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
export type RefFormGenerator = () => {
  $refs: Record<string, Ref<Expose | undefined>>
} & FormExpose

/**
 * @description: 表单生成配置
 * @param model 表单数据对象
 * @param formOption 表单生成配置
 */
export type FormAttrs<T = Record<string, any>> = {
  [key: string]: any
  model: T
  formOption: FormOption[]
} & Partial<FormProps> & FormEvents


/**
 * @description: formItem类型
 * @param name 表单item的key
 * @param style 行内样式
 * @param class 类名
 * @param text picker、calendar、cascader 文本值
 */
type FormItem = {
  // [key: string]: any
  name: string
  style?: any
  class?: any
  text?: string
}
/**
 * @description: control类型
 * @param style 行内样式
 * @param class 类名
 */
type Control = {
  style?: any
  class?: any
}

export type Field = {
  type: 'field'
  show?: boolean
  formItem: FormItem & Partial<Pick<FieldProps, 'name' | 'label' | 'rules' | 'required'>>
  control?: Control & Partial<Omit<FieldProps, 'modelValue' | 'rules'>> & FieldEvents & FieldSlots
}

export type Stepper = {
  type: "stepper"
  show?: boolean
  formItem: FormItem & Partial<FieldProps>
  control?: Control & Partial<StepperProps> & StepperEvents
}

export type Picker = {
  type: "picker"
  show?: boolean
  showPopup?: boolean
  formItem: FormItem & Partial<FieldProps>
  control?: Control & Partial<Omit<PickerProps, 'columns'>> & { columns: Ref<(PickerOption[] | PickerOption[][])> | (PickerOption | PickerColumn)[] } & PickerEvents & PickerSlots
  popup?: Partial<PopupProps>
}

export type RadioGroup = Array<{
  label?: string
  value: string,
  onClick?: ((...args: any[]) => any) | undefined;
  slots?: {
    default?: ((...args: any[]) => JSX.Element | string | void) | string
    icon?: ((...args: any[]) => JSX.Element | string | void) | string
  }
} & Partial<RadioProps>>

export type Radio = {
  type: "radio"
  show?: boolean
  formItem: FormItem & Partial<FieldProps>
  control: Control & Partial<RadioGroupProps> & RadioGroupEvents & {
    radioGroup: RadioGroup
  }
}

export type CheckboxGroup = Array<{
  label?: string
  value: string,
  onClick?: ((...args: any[]) => any) | undefined;
  slots?: {
    default?: ((...args: any[]) => JSX.Element | string | void) | string
    icon?: ((...args: any[]) => JSX.Element | string | void) | string
  }
} & Partial<CheckboxProps>>

export type Checkbox = {
  type: "checkbox"
  show?: boolean
  formItem: FormItem & Partial<FieldProps>
  control: Control & Partial<CheckboxGroupProps> & CheckboxGroupEvents & {
    checkboxGroup: CheckboxGroup
  }
}

export type Switch = {
  type: "switch"
  show?: boolean
  formItem: FormItem & Partial<FieldProps>
  control?: Control & Partial<SwitchProps> & SwitchEvents & SwitchSlots
}

export type DatePicker = {
  type: "datePicker"
  show?: boolean
  showPopup?: boolean
  formItem: FormItem & Partial<FieldProps>
  control?: Control & Partial<DatePickerProps> & DatePickerEvents & DatePickerSlots
  popup?: Partial<PopupProps>
}

export type TimePicker = {
  type: "timePicker"
  show?: boolean
  showPopup?: boolean
  formItem: FormItem & Partial<FieldProps>
  control?: Control & Partial<TimePickerProps> & TimePickerEvents & TimePickerSlots
  popup?: Partial<PopupProps>
}

export type Calendar = {
  type: "calendar"
  show?: boolean
  showPopup?: boolean
  formItem: FormItem & Partial<FieldProps>
  control?: Control & Partial<CalendarProps> & CalendarEvents & CalendarSlots
}

export type Cascader = {
  type: "cascader"
  show?: boolean
  showPopup?: boolean
  formItem: FormItem & Partial<FieldProps>
  control?: Control & Partial<Omit<CascaderProps, 'options'>> & { options: Ref<CascaderOption[]> | CascaderOption[] } & CascaderEvents & CascaderSlots
  popup?: Partial<PopupProps>
}

export type Uploader = {
  type: "uploader"
  show?: boolean
  formItem: FormItem & Partial<FieldProps>
  control?: Control & Partial<UploaderProps> & UploaderEvents & UploaderSlots
}

export type Slot = {
  type: "slot"
  show?: boolean
  formItem: FormItem & Partial<FieldProps>
  control?: {
    slots?: Record<string, ((...args: any[]) => JSX.Element | string | void) | string>
  }
}

/**
 * @description: 表单生成配置
 * @param type 表单控件类型
 * @param show 是否显示
 * @param formItem form下formItem属性
 * @param control 控件属性
 */
export type FormOption = Field | Stepper | Picker | Radio | Checkbox | Switch | DatePicker | TimePicker | Calendar | Cascader | Uploader | Slot
