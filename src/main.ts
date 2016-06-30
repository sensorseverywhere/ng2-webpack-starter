import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';
 
import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import {AppComponent } from './components/app/app.component';


console.info(app.environment);
if(app.environment === 'production') {
    enableProdMode();    
}

bootstrap(AppComponent);