import {Directive, Inject, Self} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {ChildComponent} from './child/child.component';

@Directive({
  selector: '[appTest]'
})
export class TestDirective {

  constructor(
    @Self() @Inject(NG_VALUE_ACCESSOR) private accessor: ChildComponent[]
  ) {
    console.log(this.accessor)

    setTimeout(() => {
      this.accessor[0].writeValue('asd')
    }, 2000)
  }

}
