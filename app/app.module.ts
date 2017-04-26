import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ZippyComponent } from './zippy.component';
import { FormsModule } from '@angular/forms'; 
import { ContactFormComponent} from './contact-form.component';
import {SubscribeComponent} from './subscribe-form.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ],
  declarations: [ 
    AppComponent ,
    ZippyComponent,
    ContactFormComponent,
    SubscribeComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
