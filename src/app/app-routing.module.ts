import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'characters'
  },
  {
    path: 'characters',
    loadChildren: () => import('./character/character.module').then(m => m.CharacterModule)
  },
  {
    path: 'episodes',
    loadChildren: () => import('./episode/episode.module').then(m => m.EpisodeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })]
})

export class AppRoutingModule { }
