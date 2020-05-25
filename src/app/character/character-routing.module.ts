import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterDetailsComponent } from './character-details/character-details.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: CharacterListComponent
            },{
                path: ':id',
                component: CharacterDetailsComponent
            }
        ]
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'characters'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CharacterRoutingModule {

};