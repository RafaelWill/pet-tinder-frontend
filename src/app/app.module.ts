import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LayoutModule} from './layout/layout.module';
import { ProfileGalleryComponent } from './profile-gallery/profile-gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { NameFilterPipePipe } from './pipes/name-filter/name-filter-pipe.pipe';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SetupDateComponent } from './setup-date/setup-date.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProfileGalleryComponent,
    NameFilterPipePipe,
    SetupDateComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
