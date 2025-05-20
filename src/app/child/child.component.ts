import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR} from '@angular/forms';
import {noop} from 'rxjs';
import {TestDirective} from '../test.directive';

@Component({
  selector: 'app-child',
  imports: [
    FormsModule
  ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ChildComponent),
    multi: true
  }],
  hostDirectives: [
    TestDirective
  ]
})
export class ChildComponent implements ControlValueAccessor {

  onChange: (value: string) => void = noop
  onTouch: () => void = noop

  disabled = false;
  value = '';

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
