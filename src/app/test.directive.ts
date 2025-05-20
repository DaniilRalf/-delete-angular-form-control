import {Directive, ElementRef, Inject, Optional, Self} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ChildComponent} from './child/child.component';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(
    @Self() @Optional() @Inject(NG_VALUE_ACCESSOR) private accessor: ChildComponent[],
    @Self() @Optional() private elementRef:  ElementRef
  ) {
    console.log(this.accessor)
    console.log(this.elementRef)

    setTimeout(() => {
      this.accessor[0].writeValue('asd')
    }, 2000)
  }

}
