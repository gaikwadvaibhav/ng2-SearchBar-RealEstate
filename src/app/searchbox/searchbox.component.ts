import { Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {FormControl} from '@angular/forms';


const states = ['Achalpur', 'Aheri', 'Ahmednagar', 'Ahmedpur', 'Ajara', 'Akkalkot', 'Akola',
'Akole', 'Akot', 'Alibagh', 'Amagaon', 'Amalner', 'Ambad',
'Ambejogai', 'Pune', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
'Washington', 'West Virginia', 'Wisconsin', 'Belhe'];

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SearchboxComponent implements OnInit {
  toppings = new FormControl();
  
    toppingList = ['Owner', 'Builder', 'Dealer'];

    showtab=false;

  public model: any; 

  show=false;
  
  page = 1;
  currentPage= 1;
  
  property= false;

  // bgclr:boolean;
  
  doubleSlider1 = [80, 80];
   doubleSlider = [70, 70];
   state_default: boolean = true;

  rent;
  buy;
 
  constructor() {
     this.rent ='RENT'; 
 }

//  Onpagination(){
// this.bgclr=true;   // onclick change color
//  }
  onRent() {
    this.rent ='RENT';
  this.buy = null;
  
 }
  
  onBuy() {
    this.buy =' BUY ';
    this.rent = null;
  }


  ngOnInit() {
  }
 
  // showrent(){
  //   this.rent++;
  //   this.rentchange.emit(this.rent);
  // }

  OnType(){
    this.showtab = !this.showtab;
    this.show = false;
  }

  onCard(){
    this.show=!this.show;
    // this.property=false;
    this.showtab=false;
    
  }
  onCancel(){
    this.show=false;
  }
  OnProperty() {
    this.property = !this.property
    // this.show=false;
  }
  OnSearch(){
    this.show=false;
    // this.property=false;
  }
  OnCity(){
    this.show=false;
    // this.property=false;
  }

   
  formatter = (result: string) => result.toUpperCase();
  
    search = (text$: Observable<string>) =>
      text$
        .debounceTime(200)
        .distinctUntilChanged()
        .map(term => term === '' ? []
          : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10));
  

}