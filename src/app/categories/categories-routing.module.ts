import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SportsComponent } from './sports/sports.component';
import { HomeComponent } from './home/home.component';
import { CasinoComponent } from './casino/casino.component';
import { LiveBettingComponent } from './live-betting/live-betting.component';
import { ReferAFriendComponent } from './refer-a-friend/refer-a-friend.component';
import { HorseRacingComponent } from './horse-racing/horse-racing.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { HandiCapComponent } from './handi-cap/handi-cap.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { AllRulesComponent } from './all-rules/all-rules.component';
import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full'
  },
  {
    path: 'Home',
    component: HomeComponent
  },
  {
    path: 'Sports',
    component: SportsComponent
  },
  {
    path: 'Casino',
    component: CasinoComponent
  },
  {
    path: 'LiveBetting',
    component: LiveBettingComponent
  },
  {
    path: 'ReferAFriend',
    component: ReferAFriendComponent
  },
  {
    path: 'HorseRacing',
    component: HorseRacingComponent
  },
  {
    path: 'Promotion',
    component: PromotionsComponent
  },
  {
    path: 'HandiCap',
    component: HandiCapComponent
  },
  {
    path: 'HelpCenter',
    component: HelpCenterComponent
  },
  {
    path: 'AllRules',
    component: AllRulesComponent
  },
  {
    path: 'AboutUs',
    component: AboutUsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
