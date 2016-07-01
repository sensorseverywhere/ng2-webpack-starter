import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'sensorseverywhere',
    template: require('./app.component.html'),
    styles: [require('./app.component.scss')],
    directives: [HeaderComponent]
})
export class AppComponent {
    
}