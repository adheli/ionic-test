import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { AboutPage } from './../about/about';
import { ProfilePage } from './../profile/profile';
import { SideMenuPage } from './side-menu';

@NgModule({
  declarations: [
    SideMenuPage,
    ProfilePage,
    AboutPage
  ],
  imports: [
    IonicPageModule.forChild(SideMenuPage),
    IonicPageModule.forChild(ProfilePage),
    IonicPageModule.forChild(AboutPage),
  ],
})
export class SideMenuPageModule {}
