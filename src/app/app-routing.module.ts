import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { CancellationRefundComponent } from './pages/cancellation-refund/cancellation-refund.component';
import { ShippingDeliveryComponent } from './pages/shipping-delivery/shipping-delivery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'terms-conditions', component: TermsConditionsComponent },
  { path: 'cancellation-refund', component: CancellationRefundComponent },
  { path: 'shipping-delivery', component: ShippingDeliveryComponent },
  { path: '**', redirectTo: '' }, // Redirect unknown routes to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
