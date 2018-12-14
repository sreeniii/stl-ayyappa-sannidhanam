import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule,
  MatSidenavModule, MatIconModule,
  MatListModule, MatGridListModule, MatCardModule,
  MatMenuModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataGridComponent } from './data-grid/data-grid.component';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';

const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'events', component: EventsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    DataGridComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
