import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
//import { EmployeeListComponent } from './employee-list/employee-list.component';
//import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeSErviceService } from './service/employee-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { LoginComponent } from './login/login.component';
import { HttpIntercepterBaicAuthService } from './service/http-intercepter-baic-auth.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    routingComponents,
    PageNotFoundComponent
    //EmployeeListComponent,
    //EmployeeDetailComponent,
    //LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [EmployeeSErviceService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepterBaicAuthService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
