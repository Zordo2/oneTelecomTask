import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { PostListComponent } from 'src/app/core/components/post-list/post-list.component';
import { PostItemComponent } from 'src/app/core/components/post-item/post-item.component';

@NgModule({
  declarations: [PostListComponent, PostItemComponent],
  imports: [CommonModule, LandingRoutingModule, LandingRoutingModule],
})
export class LandingModule {}
