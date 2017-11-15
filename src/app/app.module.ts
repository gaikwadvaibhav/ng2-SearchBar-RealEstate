import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyRoutingModule } from './router';

import 'hammerjs';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import {MatStepperModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatRadioModule} from '@angular/material';




import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { SearchboxComponent } from './searchbox/searchbox.component';
import {MatSliderModule, MatFormFieldModule} from '@angular/material';
import { SubmitpropertyComponent } from './submitproperty/submitproperty.component';
import { ToppropertyComponent } from './topproperty/topproperty.component';
import { RegisterUserService } from './register/register-user.service';
import { HttpModule } from '@angular/http';
import { LoginServiceService } from './login/login-service.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SearchboxComponent,
    SubmitpropertyComponent,
    ToppropertyComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    NgbModule.forRoot(),
    FormsModule,
    HttpModule,
    MatSliderModule,
    MatSelectModule,
    ReactiveFormsModule,
    MyRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule

    
  ],
  providers: [RegisterUserService, LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
