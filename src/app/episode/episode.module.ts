import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EpisodeListComponent } from './episode-list/episode-list.component';
import { EpisodeRoutingModule } from './episode-routing.module';



@NgModule({
  declarations: [EpisodeListComponent],
  imports: [
    CommonModule,
    EpisodeRoutingModule
  ]
})
export class EpisodeModule { }
