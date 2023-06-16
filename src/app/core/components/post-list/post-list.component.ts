import { Component, inject } from '@angular/core';
import { IPost } from '../../shared/models/post.model';
import { CreateRequestService } from '../../services/create-request.service';
import { environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent {
  loading = false;
  postEndpoint = environment.baseUrl + 'posts';
  posts!: IPost[];
  createReqService = inject(CreateRequestService);
  ngOnInit() {
    this.loading = true;
    this.createReqService.get<IPost[]>(this.postEndpoint).subscribe({
      next: (posts) => {
        this.loading = false;
        this.posts = posts;
        console.log(posts);
      },
      error: (err) => {},
    });
  }
}
