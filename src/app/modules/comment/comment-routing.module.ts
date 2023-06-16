import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { ControlCommentsComponent } from './components/control-comments/control-comments.component';

const routes: Routes = [
  {
    path: 'all',
    component: AllCommentsComponent,
  },
  {
    path: 'control',
    component: ControlCommentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
