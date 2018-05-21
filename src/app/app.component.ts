import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

import { ConfigurationProvider } from '../config/configuration';
import { FeedPage } from './../pages/feed/feed';
import { IntroPage } from '../pages/intro/intro';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;;

  constructor(platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    configuration: ConfigurationProvider,
    private screenOrientation: ScreenOrientation) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      const config = configuration.getConfig();

      if (config.showSlide) {
        this.rootPage = IntroPage;
        configuration.setConfig(false);
      } else {
        this.rootPage = FeedPage;
      }

      statusBar.styleDefault();
      splashScreen.hide();
      // 
      // this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    });
  }
}
