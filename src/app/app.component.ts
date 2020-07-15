import { Component } from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Angular cards';
  Cards = []
  inputNum = 5
  startIndex = 0;
  endIndex = 5;



  addCard(elem) {
    let uid = function() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
    var newCard = {
      label: elem,
      text: 'angular mini card',
      id: uid(),
    };
    if(elem !== ''){
      this.Cards.push(newCard)
      
    }
  
  }

  deleteCard(card) {
    this.Cards= this.Cards.filter(t => t.id !== card.id)
    console.log(card)
  }

  countEls(elem){
    this.inputNum= elem.value ? elem.value : this.inputNum
    this.endIndex = this.inputNum
    
  }

  getArrayFromNumber(len){
    if (len % this.inputNum == 0){
      return new Array(Math.round(len / this.inputNum))
    }else{
      return new Array(Math.round(len / this.inputNum) + 1)
    }
  }

  updateIndex(pageIndex){
    console.log(this.Cards.length, pageIndex)
    this.startIndex = pageIndex * this.inputNum;
    this.endIndex = this.startIndex + this.inputNum;
    if (this.endIndex > this.Cards.length){
      this.endIndex = this.Cards.length
    }
  }

}
 
