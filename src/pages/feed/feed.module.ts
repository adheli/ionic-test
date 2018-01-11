import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { FeedPage } from './feed';
import { MovieDetailsPage } from './../movie-details/movie-details';
import { MovieProvider } from '../../providers/movie/movie';

@NgModule({
  declarations: [
    FeedPage,
    MovieDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedPage),
    IonicPageModule.forChild(MovieDetailsPage),
  ],
  providers: [
    MovieProvider,
  ]
})
export class FeedPageModule {}
