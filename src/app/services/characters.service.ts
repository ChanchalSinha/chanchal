import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class CharacterService {
    constructor(private http: HttpClient) {}

    public getCharacters(query?: string): Observable<any> {
        return this.http.get(`${environment.apiuri}/api/character${query ? `?name=${query}` : '' }`)
    }
}

