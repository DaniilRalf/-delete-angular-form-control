import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ChildComponent} from './child/child.component';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TestDirective} from './test.directive';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ChildComponent, ReactiveFormsModule, TestDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  value = 'test-1'

  control = new FormControl('control-1')

}
