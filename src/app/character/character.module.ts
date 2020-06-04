import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './character-list/character-list.component';
import { CharacterRoutingModule } from './character-routing.module';
import { CharacterDetailsComponent } from './character-details/character-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CharacterCardComponent } from './character-card/character-card.component';

@NgModule({
  declarations: [
    CharacterListComponent,
    CharacterDetailsComponent,
    CharacterCardComponent
  ],
  imports: [
    CommonModule,
    CharacterRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    CharacterRoutingModule
  ]
})
export class CharacterModule { }
