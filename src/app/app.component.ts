import { Component } from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  edit = false;
  title = 'Angular cards';
  Cards = []
  tempCards = 0
  inputNum: number = 5
  startIndex: number = 0;
  endIndex: number = 5;
  pagArray: Array<any> = new Array(1)

  // initialize temp array of 15 objects
  ngOnInit() {
    for (let i = 0; i < this.tempCards; i++) {
      this.Cards.push({
        id: String(i), label: 'label' + String(i), text: 'text'
      })
    }
    this._updatePagination()

  }
  //this methods creat logic for pagination
  _updatePagination() {
    let round = Math.floor(this.Cards.length / this.inputNum)
    if (this.Cards.length % this.inputNum === 0) {
      this.pagArray = new Array(round)
    } else {
      this.pagArray = new Array(round + 1)
    }
  }

  _updateEndIndex() {
    this.endIndex = Math.min(this.startIndex + this.inputNum, this.Cards.length)
  }

  _updateStartIndex() {
    let index = Math.floor(this.startIndex / this.inputNum)
    this.startIndex = this.inputNum * index
  }
  ///////////////////////////////////////////


  //function adds new object
  addCard(elem) {
    // function to generate new unique id for objects
    let uid = function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }

    var newCard = {
      label: elem,
      text: 'angular mini card',
      id: uid(),
    };
    if (elem !== '') {
      this.Cards.push(newCard)
      this._updatePagination()
      this._updateEndIndex()
    }

  }

  //funcrion for deleting card object
  deleteCard(card) {
    this.Cards = this.Cards.filter(t => t.id !== card.id)
    console.log(this.Cards)
    this._updatePagination()
    this._updateStartIndex()
    this._updateEndIndex()
  }
  //function calls input for edit title
  editCardTitle(InputCardLabel) {
    if (InputCardLabel.value != '') {

      InputCardLabel.style.opacity = '0'
      let index = this.Cards.findIndex(t => t.id === InputCardLabel.id)
      if (index != -1) {
        this.Cards[index].label = InputCardLabel.value
      }

      InputCardLabel.value = ''
    }

  }
  //function change inputs's opacity
  showInput(InputCardLabel,okayBtn) {
    InputCardLabel.style.opacity = '1'
    // okayBtn.style.opacity = '1'

  }

  //function count elems on page
  countEls(elem) {
    this.inputNum = elem.value ? parseInt(elem.value) : this.inputNum
    this._updatePagination()
    this._updateStartIndex()
    this._updateEndIndex()


  }

  //function which update pagination index
  updateIndex(pageIndex) {
    this.startIndex = pageIndex * this.inputNum;
    this._updateEndIndex()
  }



}


