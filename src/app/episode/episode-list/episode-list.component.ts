import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {
  episodes: Array<Object>;
  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    const episodeNumbers = this.route.snapshot.queryParams.numbers;
    this.http.get('https://rickandmortyapi.com/api/episode/'+episodeNumbers)
      .subscribe((result) => {
        console.log('resulting episodes are ', result);
        if (!Array.isArray(result)) {
          this.episodes = [ result ];
        } else {
          this.episodes = result;
        }        
      });
  }

}
