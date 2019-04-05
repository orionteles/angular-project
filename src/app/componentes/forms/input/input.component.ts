import { Component, forwardRef, ViewChild, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validator, FormControl } from '@angular/forms';

export const Input_VALUE_ACCESSOR : any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputComponent),
  multi: true,
};

export const Input_VALUE_VALIDATOR : any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => InputComponent),
  multi: true,
}

@Component({
  selector: 'form-input',
  providers: [Input_VALUE_ACCESSOR, Input_VALUE_VALIDATOR],
  templateUrl: './input.component.html',
})
export class InputComponent implements ControlValueAccessor, Validator {
  @ViewChild('myinput') input;
  @Input() title;
  @Input() required = false;
  @Input() fieldSize = 'medium';
  @Input() mascara;

  private innerValue: any = '';

  private onTouchedCallback: () => void = () => {};
  private onChangeCallback: (_: any) => void = () => {};

  constructor() {
  }

  get value(): any {
    return this.innerValue;
  };

  set value(v: any) {
    if (v !== this.innerValue) {
      this.innerValue = v;
      this.onChangeCallback(v);
    }
  }

  // ControlValueAccessor Interface
  writeValue(value: any) {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }

  // ControlValueAccessor Interface
  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  // ControlValueAccessor Interface
  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  // Validator Interface
  public validate(c: FormControl) {
    return this.input.errors;
  }
}
