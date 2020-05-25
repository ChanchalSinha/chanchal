import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailsComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    FormsModule
  ],
  exports: [
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
