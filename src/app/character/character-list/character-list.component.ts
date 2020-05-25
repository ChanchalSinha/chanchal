import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface characterInterface {
  characterInfo: any,
  characterResult: any
}

@Component({
  selector: 'app-card-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})

export class CharacterListComponent implements OnInit {
  characters: characterInterface = Object.create(null);
  textValue: string = '';
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get('https://rickandmortyapi.com/api/character/').subscribe((result)=>{
      console.log('result is ', result);
      this.characters.characterInfo = result['info'];
      this.characters.characterResult = result['results'];
    });
  }

  viewEpisodes(character: any): void {
    console.log('clicked on View Episodes button', character);
    var episodeNumbers = character.episode.map(c=> c.substring(c.lastIndexOf('/') + 1 )).join(',');
    this.router.navigate([ 'episodes' ], { queryParams: { numbers: episodeNumbers }})
    .catch(error => console.log(error))

  }

  findCharacters(event: Event): void {
    let searchText = (<HTMLInputElement>event.target).value;
    // let searchText = this.textValue; // this can also be used if you are using ngmodelchnage in view/html page
    console.log('vale typed is ', searchText );
    this.http.get('https://rickandmortyapi.com/api/character/?name='+searchText).subscribe((result)=>{
      console.log('result is ', result);
      this.characters.characterInfo = result['info'];
      this.characters.characterResult = result['results'];
    });
  }
  
}

