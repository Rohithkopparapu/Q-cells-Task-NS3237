import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OsiServiceService } from './osi-service.service';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PanelModule } from 'primeng/panel';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar'
import { DashboardComponent } from './dashboard/dashboard.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { WeatherComponent } from './weather/weather.component';
import { TabViewModule } from 'primeng/tabview'
import { DialogModule } from 'primeng/dialog'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    WeatherComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    CardModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    PasswordModule,
    BrowserAnimationsModule,
    PanelModule,
    SidebarModule,
    MenubarModule,
    HighchartsChartModule,
    TabViewModule,
    DialogModule
  ],
  providers: [OsiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
