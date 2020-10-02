import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from '../app/helpers/fake-backend'
import { JwtInterceptor } from '../app/helpers/jwt.interceptor'
import {ErrorInterceptor} from '../app/helpers/error.interceptor'

import { appRoutingModule } from '../app/app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { AlertComponent } from './component/alert/alert.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { GmapComponent } from './components/gmap/gmap.component';

// google maps
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HomeComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent,
    GmapComponent,

  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyACORFebbkdHRhIAVMziiciKj_Ec8YXQrc'
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [
    AppComponent,
    TableComponent
  ],
  exports: [TableComponent],
})
export class AppModule { }
