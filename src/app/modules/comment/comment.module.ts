import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentRoutingModule } from './comment-routing.module';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { ControlCommentsComponent } from './components/control-comments/control-comments.component';


@NgModule({
  declarations: [
    AllCommentsComponent,
    ControlCommentsComponent,
  ],
  imports: [
    CommonModule,
    CommentRoutingModule
  ]
})
export class CommentModule { }
