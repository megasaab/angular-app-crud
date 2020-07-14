import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'Angular cards';
  Cards = []

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
   this.Cards.push(newCard)
  }

  deleteCard(card) {
    this.Cards= this.Cards.filter(t => t.id !== card.id)
    console.log(card)
  }


}
 
