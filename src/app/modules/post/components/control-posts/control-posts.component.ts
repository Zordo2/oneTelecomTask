import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CreateRequestService } from 'src/app/core/services/create-request.service';
import { IPost } from 'src/app/core/shared/models/post.model';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-control-posts',
  templateUrl: './control-posts.component.html',
  styleUrls: ['./control-posts.component.css'],
})
export class ControlPostsComponent {
  post: IPost = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };
  readonly postEndpoint = environment.baseUrl + 'posts/';
  postId: number | null = null;
  route = inject(ActivatedRoute);
  createReqService = inject(CreateRequestService);
  constructor() {}
  ngOnInit() {
    console.log('fired');
    this.route.queryParams.subscribe({
      next: (data) => {
        this.postId = data['id'] || null;
        console.log(this.postId);
        if (this.postId) {
          this.createReqService
            .get<IPost>(this.postEndpoint + this.postId)
            .subscribe({
              next: (post) => {
                this.post = post;
              },
            });
        }
      },
    });
  }
  addPost(data: { userId: number; title: string; body: string }) {
    this.createReqService.post<IPost>(this.postEndpoint, data).subscribe({
      next: (post) => {
        alert('post created');
      },
    });
  }
  updatePost(id: number, data: IPost) {
    this.createReqService.put<IPost>(this.postEndpoint + id, data).subscribe({
      next: (post) => {
        alert('post updated');
      },
    });
  }
  onSubmit(f: NgForm) {
    if (f.invalid) return;
    this.postId
      ? this.updatePost(this.postId, f.value)
      : this.addPost({
          ...f.value,
          userId: 20,
        });
  }
}
