import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './pages/home/home.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ShippingDeliveryComponent } from './pages/shipping-delivery/shipping-delivery.component';
import { TermsConditionsComponent } from './pages/terms-conditions/terms-conditions.component';
import { CancellationRefundComponent } from './pages/cancellation-refund/cancellation-refund.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrivacyPolicyComponent,
    ShippingDeliveryComponent,
    TermsConditionsComponent,
    CancellationRefundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideClientHydration(withEventReplay()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'jason-institute-of-learnings',
        appId: '1:692801329333:web:7f4efc2551eff4dc55c6fc',
        storageBucket: 'jason-institute-of-learnings.firebasestorage.app',
        apiKey: 'AIzaSyCvRBTQVTjObVpZtuhyQim81zPlM07swas',
        authDomain: 'jason-institute-of-learnings.firebaseapp.com',
        messagingSenderId: '692801329333',
        measurementId: 'G-PDF97E8KL7',
      })
    ),
    provideFirestore(() => getFirestore()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
