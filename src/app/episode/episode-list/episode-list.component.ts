import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { EpisodesService } from 'src/app/services/episodes.service';
import { Episodes } from 'src/app/models/episodes';


@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.css']
})
export class EpisodeListComponent implements OnInit {
  episodes: Episodes;
  loading$ = new BehaviorSubject<boolean>(true);
  constructor(private route: ActivatedRoute, private http: HttpClient, private episodesService: EpisodesService) { }

  ngOnInit(): void {
    const episodeNumbers = this.route.snapshot.queryParams.numbers;
    this.episodesService.getEpisodes(episodeNumbers)
      .subscribe((result) => {
        this.episodes = result;
        // if (!Array.isArray(result)) {
        //   this.episodes = [ result ];
        // } else {
        //   this.episodes = result;
        // }
        this.loading$.next(false);       
      });
  }

}
