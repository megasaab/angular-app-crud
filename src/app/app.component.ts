import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Angular cards';
  Cards = [
    {label:'testing'}
  ]

  addCard(elem) {
    var newCard = {
      label: elem,
      text: 'angular mini card'
    };
   this.Cards.push(newCard)
  }

  deleteCard(card) {
    this.Cards= this.Cards.filter(el => el.label !== card.label)
  }
}
 
