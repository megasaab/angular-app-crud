import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../models/models';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
})
export class CardComponentComponent implements OnInit {

  @Input()
  card: Card;

  constructor() { }

  ngOnInit(): void {
  }

}
