import { Component } from '@angular/core';
import { LoginComponent } from './login.component';
import { NavComponent } from './nav.component';

@Component({
  selector: 'sensorseverywhere-header',
  directives: [LoginComponent, NavComponent],
  template: `<sensorseverywhere-nav>Something's out there.</sensorseverywhere-nav><sensorseverywhere-login></sensorseverywhere-login>`,
  styles: [require('./header.component.scss')]
})
export class HeaderComponent {
    
  constructor() {
    
  }
}
