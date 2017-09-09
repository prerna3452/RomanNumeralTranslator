import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Roman Numeral Translator';
  numberEntered: number = null;
  check: boolean = false;
  error: string = "";


  displayValue: string = "";
  //function to convert the entered value into Roman format
  romanconvertion() {


    var temp = null;
    this.displayValue = "";
    temp = this.numberEntered;
    this.check = true;
    this.error = "";
    
    if (temp==null || temp=="")
      {
        this.check=false;
        this.error = "Please enter only Numeric Value"
      }
    else if (temp < 1 && temp!=null && temp!="" ) {

      this.check = false;
      this.error = "Number less than 1"
    }
    else if (temp > 3999) {

      this.check = false;
      this.error = "Number is greater than 3999";
    }
    else if (isNaN(temp)) {

      this.check = false;
      this.error = "Please enter only Numeric Value"
    }
    
    else {
      this.displayValue = "";
      this.check = true;
      while (temp >= 1000) {
        this.displayValue += "M";
        temp -= 1000;
      }
      while (temp >= 900) {
        this.displayValue += "CM";
        temp -= 900;
      }
      while (temp >= 500) {
        this.displayValue += "D";
        temp -= 500;
      }
      while (temp >= 400) {
        this.displayValue += "CD";
        temp -= 400;
      }
      while (temp >= 100) {
        this.displayValue += "C";
        temp -= 100;
      }
      while (temp >= 90) {
        this.displayValue += "XC";
        temp -= 90;
      }
      while (temp >= 50) {
        this.displayValue += "L";
        temp -= 50;
      }
      while (temp >= 40) {
        this.displayValue += "XL";
        temp -= 40;
      }
      while (temp >= 10) {
        this.displayValue += "X";
        temp -= 10;
      }
      while (temp >= 9) {
        this.displayValue += "IX";
        temp -= 9;
      }
      while (temp >= 5) {
        this.displayValue += "V";
        temp -= 5;
      }
      while (temp >= 4) {
        this.displayValue += "IV";
        temp -= 4;
      }
      while (temp >= 1) {
        this.displayValue += "I";
        temp -= 1;
      }
    }

  }
}
