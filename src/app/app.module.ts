import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeesReportComponent } from './reports/employees-report/employees-report.component';
import { UsersReportComponent } from './reports/users-report/users-report.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReportsComponent } from './reports/reports.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersReportComponent,
    EmployeesReportComponent,
    HeaderComponent,
    FooterComponent,
    ReportsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
