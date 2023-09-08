import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing.module';
import { SportsComponent } from './sports/sports.component';
import { HomeComponent } from './home/home.component';
import { CasinoComponent } from './casino/casino.component';
import { LiveBettingComponent } from './live-betting/live-betting.component';
import { HorseRacingComponent } from './horse-racing/horse-racing.component';
import { ReferAFriendComponent } from './refer-a-friend/refer-a-friend.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { HandiCapComponent } from './handi-cap/handi-cap.component';
import { HelpCenterComponent } from './help-center/help-center.component';
import { AllRulesComponent } from './all-rules/all-rules.component';
import { AboutUsComponent } from './about-us/about-us.component';


@NgModule({
  declarations: [
    SportsComponent,
    HomeComponent,
    CasinoComponent,
    LiveBettingComponent,
    HorseRacingComponent,
    ReferAFriendComponent,
    PromotionsComponent,
    HandiCapComponent,
    HelpCenterComponent,
    AllRulesComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule
  ]
})
export class CategoriesModule { }
