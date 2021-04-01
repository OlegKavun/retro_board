import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

export interface ListCard {
  id:number,
  list: string,
  text: string,
  isShowFullCard: boolean,
  comments: string[],
  likes: {
    isLiked: boolean,
    likeCount: number
  }
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit{
  public cards: ListCard[] = [
    {
      id:1,
      list: 'Went well',
      text:'BlaBlaBla',
      comments: ['This is bad code', 'Foooo', 'No patterns No patterns No patterns No patterns No patterns No patterns'],
      isShowFullCard: true,
      likes: {
        isLiked: false,
        likeCount: 20
      }
    },
    {
      id:2,
      list: 'To improve',
      text:'BlaBlaBla2',
      isShowFullCard: false,
      comments: ['This is bad code', 'Foooo'],
      likes: {
        isLiked: false,
        likeCount: 20
      }
    },
  ]

  ngOnInit() {
    this.cards = this.cards.filter(card => card.list == this.title)
  }

  @Input() title: string
  @Input() addMode: boolean
  @Input() cardColor: string
  @Output() showInputEvent = new EventEmitter<string>()

  showInput(value: string) {
    this.showInputEvent.emit(value)
  }

  checkWithTitle = (value: string) => value == this.title
  
  addNewCard(value: string) {
    this.cards = [...this.cards, {
      id:this.cards.length + Math.round(Math.random() * (1000 - 1)),
      list: this.title,
      text: value,
      isShowFullCard: false,
      comments: [],
      likes: {
        isLiked: false,
        likeCount: 0
      }
    }]

    this.showInputEvent.emit(this.title)
  }

  deleteCard(value: number) {
    this.cards = [...this.cards.filter( card => card.id !== value)]
  }

  onLike(value: number) {
    this.cards.forEach(card => {
      if (card.id == value) {
        const {isLiked, likeCount} = card.likes
          card.likes.likeCount = isLiked ? likeCount-1 : likeCount+1
          card.likes.isLiked = !isLiked
      }
    })
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
