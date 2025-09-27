import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration(withEventReplay()), provideFirebaseApp(() => initializeApp({ projectId: "jason-institute-of-learnings", appId: "1:692801329333:web:7f4efc2551eff4dc55c6fc", storageBucket: "jason-institute-of-learnings.firebasestorage.app", apiKey: "AIzaSyCvRBTQVTjObVpZtuhyQim81zPlM07swas", authDomain: "jason-institute-of-learnings.firebaseapp.com", messagingSenderId: "692801329333", measurementId: "G-PDF97E8KL7" })), provideFirestore(() => getFirestore())],
  bootstrap: [AppComponent],
})
export class AppModule {}
