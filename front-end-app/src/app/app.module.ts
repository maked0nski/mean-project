import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { MainComponent } from './component/main/main.component';
import { RegComponent } from './component/reg/reg.component';
import { AuthComponent } from './component/auth/auth.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomeComponent } from './component/home/home.component';
import { RouterModule, Routes} from "@angular/router";
import { FooterComponent } from './component/footer/footer.component';
import { FormsModule } from "@angular/forms";
import { CheckFormService } from "./service/check-form.service"

const appRoute: Routes = [
  {path: '', component:HomeComponent},
  {path: 'reg', component:RegComponent},
  {path: 'auth', component:AuthComponent},
  {path: 'dashboard', component:DashboardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    RegComponent,
    AuthComponent,
    DashboardComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    FormsModule
  ],
  providers: [
    CheckFormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
