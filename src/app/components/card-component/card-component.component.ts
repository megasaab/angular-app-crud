import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Card} from '../../../models/models';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
})
export class CardComponentComponent implements OnInit {

  @Input()
  card: Card;
  @Output()
  onDeleteCard = new EventEmitter<Card>();
  @Output()
  onEdit = new EventEmitter<string>();

  isEdit = false;
  input: string;

  constructor() { }

  ngOnInit(): void {
  }

  deleteCard(card: Card): void {
    this.onDeleteCard.emit(card);
  }

  showInput(): void {
    this.input = this.card.label;
    this.isEdit = true;
  }

  edit(): void {
   this.onEdit.emit(this.input);
   this.isEdit = false;
  }
}
