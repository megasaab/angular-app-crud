import {Component, OnInit} from '@angular/core';
import { Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {Card} from '../../models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  edit = false;
  title = 'Angular cards';
  cards: Card[] = [];
  inputNum = 5;
  startIndex = 0;
  endIndex = 5;
  paginationList: Array<any> = new Array(1);

  // initialize temp array of 15 objects

  ngOnInit(): void {
    this.updatePagination();
  }

  // this methods creat logic for pagination

  updatePagination(): void {
    const round = Math.floor(this.cards.length / this.inputNum);
    if (this.cards.length % this.inputNum === 0) {
      this.paginationList = new Array(round);
    } else {
      this.paginationList = new Array(round + 1);
    }
  }

  updateEndIndex(): void {
    this.endIndex = Math.min(this.startIndex + this.inputNum, this.cards.length);
  }

  updateStartIndex(): void {
    const index = Math.floor(this.startIndex / this.inputNum);
    this.startIndex = this.inputNum * index;
  }

  // function adds new object
  addCard(cardName: string): void {

    const newCard = {
      label: cardName,
      text: 'angular mini card',
      id: String(this.cards.length + 1),
    };

    if (cardName !== '') {
      this.cards.push(newCard);
      this.updatePagination();
      this.updateEndIndex();
    }

  }

  // function for deleting card object

  deleteCard(card: Card): void {
    this.cards = this.cards.filter(item => item.id !== card.id);
    console.log(this.cards);
    this.updatePagination();
    this.updateStartIndex();
    this.updateEndIndex();
  }


  // function count elems on page

  countEls(elem: HTMLInputElement): void {
    this.inputNum = elem.value ? Number(elem.value) : this.inputNum;
    this.updatePagination();
    this.updateStartIndex();
    this.updateEndIndex();
  }

  // function which update pagination index

  updateIndex(pageIndex: number): void {
    this.startIndex = pageIndex * this.inputNum;
    this.updateEndIndex();
  }

}


