import { Component, OnInit, Input } from '@angular/core';
import * as  moment from 'moment';
import { Router } from '@angular/router';
import { Character } from 'src/app/models/character';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.css']
})
export class CharacterCardComponent implements OnInit {
  @Input() character: Character;
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  viewEpisodes(character: any): void {
    var episodeNumbers = character.episode.map(c => c.substring(c.lastIndexOf('/') + 1 )).join(',');
    this.router.navigate([ 'episodes' ], { queryParams: { numbers: episodeNumbers }})
    .catch(error => console.log(error))

  }

  get createdDate(): string {

    return moment(this.character.created).fromNow();
  }

}
