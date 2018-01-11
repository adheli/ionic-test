import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { MovieProvider } from '../../providers/movie/movie';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { MovieDetailsPage } from '../movie-details/movie-details';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MovieProvider
  ]
})
export class FeedPage {

  movies: any[];
  loader: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider,
    private loadingCtrl: LoadingController) { }

  ionViewDidLoad() {
    this.getNowPlayingFeed();
  }

  private showLoading(): void {
    this.loader = this.loadingCtrl.create({ content: 'Carregando' });
    this.loader.present();
  }

  getNowPlayingFeed(): void {
    this.showLoading();

    this.movieProvider.getNowPlaying().subscribe(
      success => {
        this.movies = success.results;
        this.loader.dismiss();
      },
      error => {
        console.error(error);
        this.loader.dismiss();
      }
    );
  }

  doRefresh(refresher: any): void {
    this.getNowPlayingFeed();
    refresher.complete();
  }

  movieDetailed(movieId: number): void {
    this.navCtrl.push(MovieDetailsPage, { id: movieId });
  }
}
