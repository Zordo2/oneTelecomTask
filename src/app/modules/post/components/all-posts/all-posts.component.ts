import { Component, inject } from '@angular/core';
import { CreateRequestService } from 'src/app/core/services/create-request.service';
import { IPost } from 'src/app/core/shared/models/post.model';
import { environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css'],
})
export class AllPostsComponent {
  postEndpoint = environment.baseUrl + 'posts/';
  loading:boolean=false;
  posts!: IPost[];
  createReqService = inject(CreateRequestService);
  ngOnInit() {
    this.loading=true;
    this.createReqService.get<IPost[]>(this.postEndpoint).subscribe({
      next: (posts) => {
        this.loading=false;
        this.posts = posts;
      },
    });
  }
  onDeletePost(id: number) {
    if (!confirm('post will deleted ')) return;
    this.createReqService.delete<any>(this.postEndpoint + id).subscribe({
      next: (res) => {
        const index = this.posts.findIndex((post) => post.id == id);
        this.posts.splice(index, 1);
        alert('post deleted');
      },
    });
  }
}
