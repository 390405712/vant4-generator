import type { FormOption } from './type.d';
type option = {
    label: string;
    value: string;
};
/**
 * @description: 将对象数组转为控件所支持的字段
 * @param arr 原始list
 * @param label 赋值label的key名
 * @param value 赋值value的key名
 * @param custom 自定义需要合并的对象
 */
export declare const getOption: (arr: Record<string, string>[] | string[], label: string, value: string, custom?: {}) => option[];
/**
 * @description: 生成校验配置
 * @param formOption 表单配置 FormOption[]
 * @param omit 不需要验证的key  string[]
 * @return formOption
 */
export declare const setRequired: (formOption: FormOption[], omit?: string[]) => FormOption[];
export {};
