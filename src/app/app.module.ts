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

import { NouisliderModule } from 'ng2-nouislider';




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
import { AddPropertyComponent } from './add-property/add-property.component';
import { SlideCardsComponent } from './slide-cards/slide-cards.component';
import { PropertySerService } from './add-property/property-ser.service';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    SearchboxComponent,
    SubmitpropertyComponent,
    ToppropertyComponent,
    AddPropertyComponent,
    SlideCardsComponent
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
    MatRadioModule,
    NouisliderModule

    
  ],
  providers: [RegisterUserService, LoginServiceService,PropertySerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
