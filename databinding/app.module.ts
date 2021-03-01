import { TwoWayBindComponent } from './twoWayBind.component';
import { EventBindComponent } from './eventBind.component';
import { InterpolationComponent } from './interpolation.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { PropertyBindComponent } from './propertBind.component';
import { ClassBindComponent } from './classBind.component';


@NgModule({
  declarations: [
    AppComponent,
    InterpolationComponent,
    PropertyBindComponent,
    ClassBindComponent,
    EventBindComponent,
    TwoWayBindComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
