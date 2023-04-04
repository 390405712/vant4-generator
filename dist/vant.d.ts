import type { FieldExpose } from 'vant/lib/field/types'
import type { CalendarExpose } from 'vant/lib/calendar/types'
import type { PickerExpose } from 'vant/lib/picker/types'
import type { CheckboxGroupExpose } from 'vant/lib/checkbox-group/types'
import type { DatetimePickerExpose, DatetimePickerColumnType, DatetimePickerType } from 'vant/lib/datetime-picker/types'
import type { UploaderExpose } from 'vant/lib/uploader/types'
import type { RadioProps, CheckboxProps } from 'vant';
import type { Ref } from 'vue'


type DatetimePickerProps = {
  title: string;
  loading: boolean
  readonly: boolean;
  allowHtml: boolean;
  itemHeight: {
    type: (number | string)[];
    default: number;
  };
  showToolbar: {
    type: boolean;
    default: true;
  };
  swipeDuration: (number | string)[]
  visibleItemCount: (number | string)[]
  cancelButtonText: string;
  confirmButtonText: string;
  filter: (type: string, values: string[]) => string[]
  columnsOrder: DatetimePickerColumnType[]
  formatter: (type: string, value: string) => string
  type: DatetimePickerType
  modelValue: Date;
  minDate: Date
  maxDate: Date
  minHour: number | string
  maxHour: number | string
  minMinute: number | string
  maxMinute: number | string
}

type FormEvents = {
  onSubmit?: ((...args: any[]) => any) | undefined | boolean;
  onFailed?: ((...args: any[]) => any) | undefined;
}

type FieldEvents = {
  modelValue?: string | number | Ref<string | number>
  onInput?: ((...args: any[]) => any) | undefined;
  onChange?: ((...args: any[]) => any) | undefined;
  onFocus?: ((...args: any[]) => any) | undefined;
  onBlur?: ((...args: any[]) => any) | undefined;
  onKeypress?: ((...args: any[]) => any) | undefined;
  onClear?: ((...args: any[]) => any) | undefined;
  onClick?: ((...args: any[]) => any) | undefined;
  onClickInput?: ((...args: any[]) => any) | undefined;
  onEndValidate?: ((...args: any[]) => any) | undefined;
  onStartValidate?: ((...args: any[]) => any) | undefined;
  onClickLeftIcon?: ((...args: any[]) => any) | undefined;
  onClickRightIcon?: ((...args: any[]) => any) | undefined;
  "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}

type CalendarEvents = {
  onOpen?: ((...args: any[]) => any) | undefined;
  onOpened?: ((...args: any[]) => any) | undefined;
  onClose?: ((...args: any[]) => any) | undefined;
  onClosed?: ((...args: any[]) => any) | undefined;
  onSelect?: ((...args: any[]) => any) | undefined;
  "onUpdate:show"?: ((...args: any[]) => any) | undefined;
  onConfirm?: ((...args: any[]) => any) | undefined;
  onClickSubtitle?: ((...args: any[]) => any) | undefined;
  onUnselect?: ((...args: any[]) => any) | undefined;
  onMonthShow?: ((...args: any[]) => any) | undefined;
  onOverRange?: ((...args: any[]) => any) | undefined;
}

type CascaderEvents = {
  onChange?: ((...args: any[]) => any) | undefined;
  "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
  onClose?: ((...args: any[]) => any) | undefined;
  onClickTab?: ((...args: any[]) => any) | undefined;
  onFinish?: ((...args: any[]) => any) | undefined;
}

type StepperEvents = {
  onFocus?: ((...args: any[]) => any) | undefined;
  onBlur?: ((...args: any[]) => any) | undefined;
  onChange?: ((...args: any[]) => any) | undefined;
  "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
  onPlus?: ((...args: any[]) => any) | undefined;
  onMinus?: ((...args: any[]) => any) | undefined;
  onOverlimit?: ((...args: any[]) => any) | undefined;
}

type PickerEvents = {
  onChange?: ((...args: any[]) => any) | undefined;
  onCancel?: ((...args: any[]) => any) | undefined;
  onConfirm?: ((...args: any[]) => any) | undefined;
}

type RadioGroupEvents = {
  onChange?: ((...args: any[]) => any) | undefined;
  "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}

type CheckboxGroupEvents = {
  onChange?: ((...args: any[]) => any) | undefined;
  "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}

type DatetimePickerEvents = {
  onCancel?: ((...args: any[]) => any) | undefined;
  onConfirm?: ((...args: any[]) => any) | undefined;
  onChange?: ((...args: any[]) => any) | undefined;
  "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}

type SwitchEvents = {
  onChange?: ((...args: any[]) => any) | undefined;
  onClick?: ((...args: any[]) => any) | undefined;
  "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}

type UploaderEvents = {
  "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
  onDelete?: ((...args: any[]) => any) | undefined;
  onOversize?: ((...args: any[]) => any) | undefined;
  onClickUpload?: ((...args: any[]) => any) | undefined;
  onClosePreview?: ((...args: any[]) => any) | undefined;
  onClickPreview?: ((...args: any[]) => any) | undefined;
}

type FieldSlots = {
  slots?: {
    label?: ((...args: any[]) => JSX.Element | string | void) | string
    input?: ((...args: any[]) => JSX.Element | string | void) | string
    'left-icon'?: ((...args: any[]) => JSX.Element | string | void) | string
    'right-icon'?: ((...args: any[]) => JSX.Element | string | void) | string
    button?: ((...args: any[]) => JSX.Element | string | void) | string
    'error-message'?: ((...args: any[]) => JSX.Element | string | void) | string
    extra?: ((...args: any[]) => JSX.Element | string | void) | string
  }
}

type PickerSlots = {
  slots?: {
    title?: ((...args: any[]) => JSX.Element | string | void) | string
    confirm?: ((...args: any[]) => JSX.Element | string | void) | string
    cancel?: ((...args: any[]) => JSX.Element | string | void) | string
    option?: ((...args: any[]) => JSX.Element | string | void) | string
    'columns-top'?: ((...args: any[]) => JSX.Element | string | void) | string
    'columns-bottom'?: ((...args: any[]) => JSX.Element | string | void) | string
  }
}

type CalendarSlots = {
  slots?: {
    title?: ((...args: any[]) => JSX.Element | string | void) | string
    subtitle?: ((...args: any[]) => JSX.Element | string | void) | string
    footer?: ((...args: any[]) => JSX.Element | string | void) | string
    'confirm-text'?: ((...args: any[]) => JSX.Element | string | void) | string
    'top-info'?: ((...args: any[]) => JSX.Element | string | void) | string
    'bottom-info'?: ((...args: any[]) => JSX.Element | string | void) | string
  }
}

type CascaderSlots = {
  slots?: {
    title?: ((...args: any[]) => JSX.Element | string | void) | string
    option?: ((...args: any[]) => JSX.Element | string | void) | string
    'options-top'?: ((...args: any[]) => JSX.Element | string | void) | string
    'options-bottom'?: ((...args: any[]) => JSX.Element | string | void) | string
  }
}

type DatetimePickerSlots = {
  slots?: {
    default?: ((...args: any[]) => JSX.Element | string | void) | string
    title?: ((...args: any[]) => JSX.Element | string | void) | string
    confirm?: ((...args: any[]) => JSX.Element | string | void) | string
    cancel?: ((...args: any[]) => JSX.Element | string | void) | string
    option?: ((...args: any[]) => JSX.Element | string | void) | string
    'columns-top'?: ((...args: any[]) => JSX.Element | string | void) | string
    'columns-bottom'?: ((...args: any[]) => JSX.Element | string | void) | string
  }
}

type SwitchSlots = {
  slots?: {
    node?: ((...args: any[]) => JSX.Element | string | void) | string
    background?: ((...args: any[]) => JSX.Element | string | void) | string
  }
}

type UploaderSlots = {
  slots?: {
    default?: ((...args: any[]) => JSX.Element | string | void) | string
    'preview-delete'?: ((...args: any[]) => JSX.Element | string | void) | string
    'preview-cover'?: ((...args: any[]) => JSX.Element | string | void) | string
  }
}

type Expose = Partial<FieldExpose & CalendarExpose & PickerExpose & CheckboxGroupExpose & DatetimePickerExpose & UploaderExpose>


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
