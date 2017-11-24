import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { AppRoutingModule } from './/app-routing.module';
import { CampaignComponent } from './campaign/campaign.component';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { HeaderToolbarComponent } from './header-toolbar/header-toolbar.component'

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
    UsersComponent,
    HeaderToolbarComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

