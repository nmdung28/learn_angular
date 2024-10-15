import { ICategories } from "../types/categories"
import { Categories } from "./draft_data/categories"

export const convertCategories = (data: string) => {
    const findData = Categories.find(i => i.id === data)
    return { ...findData, label: findData?.name, value: findData?.id }
}

import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const forbidden = nameRe.test(control.value);
    return forbidden ? { forbiddenName: { value: control.value } } : null;
  };
}