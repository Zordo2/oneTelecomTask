import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { ControlPostsComponent } from './components/control-posts/control-posts.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AllPostsComponent, ControlPostsComponent],
  imports: [CommonModule, FormsModule, PostRoutingModule],
})
export class PostModule {}
