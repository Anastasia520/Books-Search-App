import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../app/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPageComponent } from '../app/pages/search-page/search-page.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { bookReducer } from '../app/store/book/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from '../app/store/book/book.effects';
import { GoogleBooksService } from '../app/services/index';

import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [AppComponent, SearchPageComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({ bookState: bookReducer }),
    EffectsModule.forRoot([BookEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    OverlayModule,
  ],
  providers: [GoogleBooksService],
  bootstrap: [AppComponent],
})
export class AppModule {}
