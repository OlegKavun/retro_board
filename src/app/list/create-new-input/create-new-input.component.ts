import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-new-input',
  templateUrl: './create-new-input.component.html',
  styleUrls: ['./create-new-input.component.scss']
})

export class CreateNewInputComponent {
  @Output() addCardEvent = new EventEmitter<string>()

  addCard(value: string) {
    this.addCardEvent.emit(value)
  }
}
