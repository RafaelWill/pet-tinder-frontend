import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LayoutModule} from './layout/layout.module';
import { ProfileGalleryComponent } from './profile-gallery/profile-gallery.component';
import { HttpClientModule } from '@angular/common/http';
import { NameFilterPipePipe } from './pipes/name-filter/name-filter-pipe.pipe';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProfileGalleryComponent,
    NameFilterPipePipe
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
