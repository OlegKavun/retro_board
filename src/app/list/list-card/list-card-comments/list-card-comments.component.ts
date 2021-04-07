import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-card-comments',
  templateUrl: './list-card-comments.component.html',
  styleUrls: ['./list-card-comments.component.scss']
})
export class ListCardCommentsComponent {
public value: string = ''
@Input() comments: string[]
@Input() cardId: number
@Output() addCommentEvent = new EventEmitter<string>() 

onChangeInput(value:string) {
  this.value = value
}

addComment() {
  this.addCommentEvent.emit(this.value)
  this.value = ''
}
}
