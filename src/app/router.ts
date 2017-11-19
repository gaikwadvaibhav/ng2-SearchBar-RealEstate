import { RouterModule, Routes } from '@angular/router'

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { SearchboxComponent } from "./searchbox/searchbox.component";
import { HomeComponent } from "./home/home.component";
import { SubmitpropertyComponent } from "./submitproperty/submitproperty.component";
import { ToppropertyComponent } from "./topproperty/topproperty.component";
import { AddPropertyComponent } from './add-property/add-property.component';


const routes: Routes = [
    { path: '', redirectTo:'/addproperty', pathMatch:'full' },
    { path: 'home', component: HomeComponent }, 
    { path: 'search', component: SearchboxComponent },    
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'topproperty', component: ToppropertyComponent},    
    { path: 'submitproperty', component: SubmitpropertyComponent },
    { path: 'addproperty', component: AddPropertyComponent}
    
    
    
  ];

  export const MyRoutingModule = RouterModule.forRoot(routes);