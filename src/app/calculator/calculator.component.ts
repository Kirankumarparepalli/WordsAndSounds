import { Component } from '@angular/core';
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'calculator-component',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
  providers: [CalculatorService]
})

export class CalculatorComponent {
  title: any;
  titleUrl: any;
  j: number;
  words = ['WHAT','WHY','HOW','WHO','WHERE','THIS','THAT','IS','I','MY','WE','THEY','THERE','THEN','HAVE','WAS','TO','DO','DID','WAS','NOT'];

  firstInputNumber: any;
  secondInputNumber: any;
  result: any;
  operation: any;

  maxLength: any;
  /**
  * @constructor: CalculatorService is getting injected
  */
  constructor(calculatorService: CalculatorService) {
    this.initializeValues();
  }

  initializeValues(){
    this.title = 'what';
    this.titleUrl ='sound';
    this.j=0;
    this.maxLength = this.words.length;
  }

  /*
    This function will call the service and populate the value in the result value
  */
  populateResults() {
  console.log('populateResults');
    if((this.maxLength - 1) > this.j){
        this.j=this.j+1;
        this.title = this.words[this.j];
        this.speakUp(this.title);
      }
  }

  /*
    This function will retain the state of the class level variables to their original state.
  */
  clearResults(){
    if(this.j >= 1){
      this.j=this.j-1;
      this.title = this.words[this.j];
      this.speakUp(this.title);
    }
  }

  speakUp(textValue){
    var msg = new SpeechSynthesisUtterance(textValue);
    window.speechSynthesis.speak(msg);
  }
}
