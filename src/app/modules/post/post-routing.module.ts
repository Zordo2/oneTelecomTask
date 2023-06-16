import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { ControlPostsComponent } from './components/control-posts/control-posts.component';

const routes: Routes = [
  {
    path: 'all',
    component: AllPostsComponent,
  },
  {
    path: 'control',
    component: ControlPostsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
