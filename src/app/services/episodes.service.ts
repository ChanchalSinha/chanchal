import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class EpisodesService {
    constructor(private http: HttpClient) {}

    public getEpisodes(query?: string): Observable<any> {
        if(!query) {
            return this.http.get<any>(`${environment.apiuri}/api/episode`)
        }
        return this.http.get<any>(`${environment.apiuri}/api/episode/${query}`)
    }
}