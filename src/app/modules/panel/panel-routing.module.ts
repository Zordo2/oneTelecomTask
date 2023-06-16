import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'posts',
    loadChildren: () => import('../post/post.module').then((m) => m.PostModule),
  },
  {
    path: 'comments',
    loadChildren: () => import('../comment/comment.module').then((m) => m.CommentModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelRoutingModule {}
