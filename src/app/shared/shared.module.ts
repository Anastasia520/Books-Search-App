import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  LoaderComponent,
  CardComponent,
  SearchbarComponent,
} from './components';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';

@NgModule({
  declarations: [LoaderComponent, CardComponent, SearchbarComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterLink,
    CdkOverlayOrigin,
    CdkConnectedOverlay,
  ],
  exports: [LoaderComponent, CardComponent, SearchbarComponent],
  providers: [],
})
export class SharedModule {}
