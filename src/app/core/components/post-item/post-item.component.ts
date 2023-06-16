import { Component, Input } from '@angular/core';
import { IPost } from '../../shared/models/post.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css'],
})
export class PostItemComponent {
  @Input('post') post!: IPost;
}
