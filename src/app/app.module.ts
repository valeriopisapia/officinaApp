import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';

import { NguiMapModule} from '@ngui/map';

import { ApiService } from './providers/api.service';

import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { HeaderComponent } from './shared/header/header/header.component';
import { HighlightComponent } from './highlight/highlight/highlight.component';
import { SearchComponent } from './search/search/search.component';
import { ResultComponent } from './result/result/result.component';
import { RatingComponent } from './rating/rating/rating.component';
import { DetailComponent } from './detail/detail/detail.component';
import { CustomNameFilterPipe } from './pipes/custom-name-filter.pipe';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: ResultComponent },
  { path: 'detail/:id', component: DetailComponent } //TODO
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HighlightComponent,
    SearchComponent,
    ResultComponent,
    RatingComponent,
    DetailComponent,
    CustomNameFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyB_qdz8vD8SylSUA2Xd-RhGeDlt21mOMZU'})
  ],
  providers: [ApiService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
