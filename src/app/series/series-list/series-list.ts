import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { Seriesserv } from '../seriesserv';

@Component({
  selector: 'app-series-list',
  templateUrl: './series-list.html',
  styleUrls: ['./series-list.css'],
  standalone: false
})
export class SeriesList implements OnInit {

  series: Serie[] = [];
  averageSeasons: number = 0;
  serieElegida?: Serie;

  constructor(private seriesserv: Seriesserv) { }

  ngOnInit(): void { 
    this.getSeriesList();
  }

  getSeriesList(): void {
    this.seriesserv.getSeries().subscribe(seriesApi => {
      this.series = seriesApi;
      this.promedioSeasons();
      if (this.series.length > 0) {
        this.elegida(this.series[0]!);
      }
    });
  }

  promedioSeasons(): void {
    if (this.series.length === 0) {
      this.averageSeasons = 0;
      return;
    }
    const totalSeasons = this.series.reduce((sum, serie) => sum + serie.seasons, 0);
    this.averageSeasons = totalSeasons / this.series.length;
  }

  elegida(serie: Serie): void {
    this.serieElegida = serie;
  }
}