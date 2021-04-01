import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { ListCard } from './../list.component';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss']
})

export class ListCardComponent {
  @Input() card: ListCard
  @Output() deleteCardEvent = new EventEmitter<number>();
  @Output() pressLikeEvent = new EventEmitter<number>();

  deleteCard(value: number) {
    this.deleteCardEvent.emit(value)
  }

  pressLike(value: number) {
    this.pressLikeEvent.emit(value)
  }

  addCardComment(value: string) {
    this.card.comments.push(value)
  }
}
