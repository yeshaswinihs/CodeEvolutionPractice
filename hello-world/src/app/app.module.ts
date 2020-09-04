import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeContactComponent } from './employee-contact/employee-contact.component';
import { EmployeeOverviewComponent } from './employee-overview/employee-overview.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { LoginComponent } from './login/login.component';
import { HttpIntercepterBaicAuthService } from './service/http-intercepter-baic-auth.service';
import { TestComponent } from './test/test.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    routingComponents,
    PageNotFoundComponent,
    EmployeeOverviewComponent,
    EmployeeContactComponent
    //EmployeeListComponent,
    //EmployeeDetailComponent,
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBaicAuthService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
