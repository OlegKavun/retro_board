import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public lists = [
    {
      title:"Went well",
      addMode: false,
      color: 'rgb(58, 137, 211)'
    },
    {
      title:"To improve",
      addMode: false,
      color: 'rgb(196, 100, 87)'
    },
  ]

showInputForm(title: string) {
  this.lists.forEach(list => {
    if(list.title === title) {
      list.addMode = !list.addMode
    }
  })
}
}
