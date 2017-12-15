import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
  
  feeds: any[];
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.getNowPlayingFeed();
  }

  getNowPlayingFeed() {
    this.movieProvider.getNowPlaying().subscribe(
      success => {
        this.feeds = success.results;
      },
      error => {
        console.log(error);
      }
    );
  }
}
