import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-card-comments',
  templateUrl: './list-card-comments.component.html',
  styleUrls: ['./list-card-comments.component.scss']
})
export class ListCardCommentsComponent {
@Input() comments: string[]
@Input() cardId: number
@Output() addCommentEvent = new EventEmitter<string>() 

addComment(value: string) {
  this.addCommentEvent.emit(value)
}
}
