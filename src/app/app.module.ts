import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './firebase.credentials';
import { MovieListService } from '../services/movie-list/movie-list-service';
import { ToastService } from '../services/toast/toast.service';
import { MovieServiceProvider } from '../providers/movie-service/movie-service';
import { HttpModule } from '@angular/http';



@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieListService,
    ToastService,
    MovieServiceProvider
  ]
})
export class AppModule {}
