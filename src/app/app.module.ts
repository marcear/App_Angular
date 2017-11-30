import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { HttpModule} from '@angular/http';
import { CalendarComponent} from "angular2-fullcalendar/src/calendar/calendar";
import { MatDialogContent, MAT_PLACEHOLDER_GLOBAL_OPTIONS, MatInputModule} from '@angular/material';
import { MatDialogModule} from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatButtonModule} from '@angular/material/button';
import {EventService} from './eventService';
import {CommonHelper} from "./commonHelper";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SchedulerComponent,
    CalendarComponent,
    DialogExampleComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    HttpModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    FlexLayoutModule,
    MatButtonModule,
    FormsModule
  ],
   entryComponents: [
     DialogExampleComponent
  ],
  providers: [
		{provide: MAT_PLACEHOLDER_GLOBAL_OPTIONS, useValue: {float: 'always'}},
    EventService, CommonHelper
	],
  bootstrap: [AppComponent]
})
export class AppModule { }

