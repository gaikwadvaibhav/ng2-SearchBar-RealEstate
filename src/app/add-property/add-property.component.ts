import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Property } from './property-data';
import { PropertySerService } from './property-ser.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddPropertyComponent implements OnInit {
  one=true;
  two=false;
  three=false;
  four=false;
  five=false;

  constructor( private property: PropertySerService ) { }

  ngOnInit() {
  }


  onOne(myForm1){
    this.one=false;
    this.two=true;
    this.three=false;
    this.four=false;
    this.five=false;
    console.log(myForm1.value);
    var property1 : Property = new Property();
    property1.propertyPostedby = myForm1.value.propertyPostedby;
    property1.fullName = myForm1.value.fullName;
    property1.email = myForm1.value.email;
    property1.mobile = myForm1.value.mobile;
    property1.companyName = myForm1.value.companyName;
    property1.aboutBuilder = myForm1.value.aboutBuilder;  
    this.property.addProperty(property1).subscribe(res => console.log(res));
    
  }

  onTwo(myForm2){
    this.one=false;
    this.two=false;
    this.three=true;
    this.four=false;
    this.five=false;
    console.log(myForm2.value);
    var property2: Property = new Property();
    property2.propertyName = myForm2.value.propertyName;
    property2.propertyType = myForm2.value.propertyType;
    property2.aboutProperty = myForm2.value.aboutProperty;
    property2.state = myForm2.value.state;
    property2.city = myForm2.value.city;
    property2.locality = myForm2.value.locality;
    property2.address = myForm2.value.address;
    this.property.addProperty(property2).subscribe(res => console.log(res));
  }


  onThree(myForm3){
    this.one=false;
    this.two=false;
    this.three=false;
    this.four=true;
    this.five=false;
    console.log(myForm3.value);
     var property3 : Property = new Property();
     property3.selectAddProperty = myForm3.value.selectAddProperty
     property3.noOfFlats = myForm3.value.noOfFlats
     property3.availableFor = myForm3.value.availableFor
     property3.averageArea = myForm3.value.averageArea
     property3.startingPrice = myForm3.value.startingPrice
     property3.projectTotalTower = myForm3.value.projectTotalTower
     property3.projectTotalUnit = myForm3.value.projectTotalUnit
     property3.projectAvailableUnit = myForm3.value.projectAvailableUnit
     property3.projectLaunchDate = myForm3.value.projectLaunchDate;
     this.property.addProperty(property3).subscribe(res => console.log(res));
    }


  onFour(myForm4){
    this.one=false;
    this.two=false;
    this.three=false;
    this.four=false;
    this.five=true;
    console.log(myForm4.value);
    
  }

  

}
