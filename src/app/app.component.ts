import { Component } from '@angular/core';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  edit = false;
  title = 'Angular cards';
  Cards: Array<object> = []
  tempCards = 0
  inputNum: number = 5
  startIndex: number = 0;
  endIndex: number = 5;
  pagArray: Array<any> = new Array(1)

  // initialize temp array of 15 objects
  ngOnInit(){
    for (let i = 0; i < this.tempCards; i++){
      this.Cards.push({
        id: String(i), label: 'label' + String(i), text: 'text'
      })
    }
    this._updatePagination()
    
  }

  _updatePagination(){
    let round = Math.floor(this.Cards.length / this.inputNum)
    if (this.Cards.length % this.inputNum === 0){
      this.pagArray = new Array(round)
    }else{
      this.pagArray = new Array(round + 1)
    }
  }

  _updateEndIndex(){
    this.endIndex = Math.min(this.startIndex + this.inputNum, this.Cards.length)
  }

  _updateStartIndex(){
    let index = Math.floor(this.startIndex / this.inputNum)
    this.startIndex = this.inputNum * index
  }


  addCard(elem) {
    // function to generate new uid
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
      this._updatePagination()
      this._updateEndIndex()
    }
  
  }

  deleteCard(card) {
    this.Cards = this.Cards.filter(t => t.id !== card.id)
    this._updatePagination()
    this._updateStartIndex()
    this._updateEndIndex()
  }

  editCardTitle(InputCardLabel){
    InputCardLabel.style.opacity = '0'
    let index = this.Cards.findIndex(t => t.id === InputCardLabel.id)
    if (index != -1){
      this.Cards[index].label = InputCardLabel.value
    }

    InputCardLabel.value = ''

  }

  showInput(InputCardLabel,okayBtn) {
    InputCardLabel.style.opacity = '1'
    okayBtn.style.opacity = '1'
  }

  countEls(elem){
    this.inputNum = elem.value ? parseInt(elem.value) : this.inputNum
    this._updatePagination()
    this._updateStartIndex()
    this._updateEndIndex()

    
  }

  updateIndex(pageIndex){
    this.startIndex = pageIndex * this.inputNum;
    this._updateEndIndex()
  }


}

 
