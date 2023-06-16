import { IComment } from './../../../../core/shared/models/comment.model';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateRequestService } from 'src/app/core/services/create-request.service';
import { environment } from 'src/environments/environment.development';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-control-comments',
  templateUrl: './control-comments.component.html',
  styleUrls: ['./control-comments.component.css']
})
export class ControlCommentsComponent {
  constructor(private _CreateRequestService:CreateRequestService, private _ActivatedRoute:ActivatedRoute){}
  comment: IComment = {
    postId: 0,
    id: 0,
    name: '',
    email:'',
    body: null,
  };
  readonly commentEndpoint = environment.baseUrl + 'comments/';
  commentId: number | null = null;
  ngOnInit() {
    console.log('fired');
    this._ActivatedRoute.queryParams.subscribe({
      next: (data) => {
        this.commentId = data['id'] || null;
        console.log(this.commentId);
        if (this.commentId) {
          this._CreateRequestService
            .get<IComment>(this.commentEndpoint + this.commentId)
            .subscribe({
              next: (comment) => {
                this.comment = comment;
              },
            });
        }
      },
    });
  }
  addComment(data: { postId: number; name: string; body: string }) {
    this._CreateRequestService.post<IComment>(this.commentEndpoint, data).subscribe({
      next: (comment) => {
        alert('comment created');
      },
    });
  }
  updateComment(id: number, data: IComment) {
    this._CreateRequestService.put<IComment>(this.commentEndpoint + id, data).subscribe({
      next: (comment) => {
        alert('comment updated');
      },
    });
  }
  onSubmit(f: NgForm) {
    if (f.invalid) return;
    this.commentId
      ? this.updateComment(this.commentId, f.value)
      : this.addComment({
          ...f.value,
          postId: 20,
        });
  }
}
