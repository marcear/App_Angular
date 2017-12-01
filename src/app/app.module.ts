import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { AppRoutingModule } from './/app-routing.module';
import { CampaignComponent } from './campaign/campaign.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component';
import { ListContentComponent } from './list-content/list-content.component';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CampaignFormComponent } from './campaign-form/campaign-form.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { HttpModule} from '@angular/http';
import { CalendarComponent} from "angular2-fullcalendar/src/calendar/calendar";
import { MatDialogContent, MAT_PLACEHOLDER_GLOBAL_OPTIONS, MatInputModule} from '@angular/material';
import { MatDialogModule} from '@angular/material/dialog';
import { DialogExampleComponent } from './dialog-example/dialog-example.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import {EventService} from './eventService';
import {CommonHelper} from "./commonHelper";
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material'; 
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


const appRoutes: Routes = [
  { path: '', redirectTo: '/campaigns', pathMatch: 'full' },
  { path: 'campaigns', component: CampaignComponent },
  { path: 'users', component: UsersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    SideNavigationComponent,
    CampaignComponent,
    SchedulerComponent,
    CalendarComponent,
    DialogExampleComponent,
    UsersComponent,
    HeaderToolbarComponent,
    ListContentComponent,
    CampaignFormComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    AppRoutingModule,
    RouterModule.forRoot( appRoutes),
    MatListModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
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
    EventService, CommonHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }

