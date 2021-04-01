import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { CreateNewInputComponent } from './list/create-new-input/create-new-input.component';
import { ListCardComponent } from './list/list-card/list-card.component';

import {MatIconModule} from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ListCardCommentsComponent } from './list/list-card/list-card-comments/list-card-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    CreateNewInputComponent,
    ListCardComponent,
    ListCardCommentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
