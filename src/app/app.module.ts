import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes }   from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select'

import { NgApexchartsModule } from "ng-apexcharts";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { FileUploadComponent } from './components/file-upload/file-upload.component';
import { PersonListComponent } from './components/person-list/person-list.component';
import { PersonCreateComponent } from './components/person-create/person-create.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { ReportsComponent } from './components/reports/reports.component';
import { PrintComponent } from './components/print/print.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent,
    FileUploadComponent,
    PersonListComponent,
    PersonCreateComponent,
    GraphsComponent,
    ReportsComponent,
    PrintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatExpansionModule,
    MatTooltipModule,
    MatListModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([]),
    MatInputModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSnackBarModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,





    NgApexchartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {

  }
}
