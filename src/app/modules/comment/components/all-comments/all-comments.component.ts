import { IComment } from './../../../../core/shared/models/comment.model';
import { Component } from '@angular/core';
import { CreateRequestService } from 'src/app/core/services/create-request.service';
import { environment } from 'src/environments/environment.development';
@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent {
  commentEndpoint = environment.baseUrl + 'comments/';
  comments!: IComment[];
  loading:boolean=false;
  // createReqService = inject(CreateRequestService);
  constructor(private _CreateRequestService:CreateRequestService ){}
  ngOnInit() {
    this.loading=true;
    this._CreateRequestService.get<IComment[]>(this.commentEndpoint).subscribe({
      next: (comments: IComment[]) => {
        this.loading=false;
        this.comments = comments;
      },
    });
  }
  onDeleteComment(id: number) {
    if (!confirm('comment will deleted ')) return;
    this._CreateRequestService.delete<any>(this.commentEndpoint + id).subscribe({
      next: (res) => {

        const index = this.comments.findIndex((comment) => comment.id == id);
        this.comments.splice(index, 1);
        alert('comment deleted');
      },
    });
  }
}


