import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map, tap, startWith, switchAll } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CharacterService } from 'src/app/services/characters.service';
import { Characters } from 'src/app/models/characters';

@Component({
  selector: 'app-card-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})

export class CharacterListComponent implements OnInit {
  characters: Characters;
  textValue: string = '';
  loading$ = new BehaviorSubject<boolean>(true);
  form: FormGroup;
  constructor(private http: HttpClient, private router: Router, 
    private fb: FormBuilder, private characterService: CharacterService) { }

  get query() { return this.form.get('query'); }

  ngOnInit(): void {
    this.form = this.fb.group({
      query: null
    });

    this.query.valueChanges.pipe(
      startWith(''),
      tap(()=>this.loading$.next(true)),
      map(query=>this.characterService.getCharacters(query)),
      switchAll()
    ).subscribe(characters=> {
      this.characters = characters;
      this.loading$.next(false);
    })
  }
  
}

