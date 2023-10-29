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
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyAndPolicyComponent } from './privacy-and-policy/privacy-and-policy.component';
import { HelpCenterCategoryComponent } from './help-center-category/help-center-category.component';
import { DepositPoliciesComponent } from './deposit-policies/deposit-policies.component';
import { PayoutPoliciesComponent } from './payout-policies/payout-policies.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { RacebookRulesComponent } from './racebook-rules/racebook-rules.component';
import { LiveBettingRulesComponent } from './live-betting-rules/live-betting-rules.component';
import { RollOverRulesComponent } from './roll-over-rules/roll-over-rules.component';
import { MarketingComponent } from './marketing/marketing.component';


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
    AboutUsComponent,
    TermsAndConditionsComponent,
    PrivacyAndPolicyComponent,
    HelpCenterCategoryComponent,
    DepositPoliciesComponent,
    PayoutPoliciesComponent,
    RacebookRulesComponent,
    LiveBettingRulesComponent,
    RollOverRulesComponent,
    MarketingComponent
  ],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class CategoriesModule { }
