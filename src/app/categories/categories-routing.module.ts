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
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { PrivacyAndPolicyComponent } from './privacy-and-policy/privacy-and-policy.component';
import { HelpCenterCategoryComponent } from './help-center-category/help-center-category.component';
import { PayoutPoliciesComponent } from './payout-policies/payout-policies.component';
import { DepositPoliciesComponent } from './deposit-policies/deposit-policies.component';
import { RollOverRulesComponent } from './roll-over-rules/roll-over-rules.component';
import { LiveBettingRulesComponent } from './live-betting-rules/live-betting-rules.component';
import { RacebookRulesComponent } from './racebook-rules/racebook-rules.component';
import { MarketingComponent } from './marketing/marketing.component';

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
    path: 'HelpCenter/:id',
    component: HelpCenterCategoryComponent
  },
  {
    path: 'AllRules',
    component: AllRulesComponent
  },
  {
    path: 'AboutUs',
    component: AboutUsComponent
  },
  {
    path: 'TermsAndConditions',
    component: TermsAndConditionsComponent
  },
  {
    path: 'PrivacyPolicy',
    component: PrivacyAndPolicyComponent
  },
  {
    path: 'PayOutPolicie',
    component: PayoutPoliciesComponent
  },
  {
    path: 'DepositPolicie',
    component: DepositPoliciesComponent
  },
  {
    path: 'RollOverRules',
    component: RollOverRulesComponent
  },
  {
    path: 'LiveBettingRules',
    component: LiveBettingRulesComponent
  },
  {
    path: 'RaceBookRules',
    component: RacebookRulesComponent
  },
  {
    path:'Marketing',
    component: MarketingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
