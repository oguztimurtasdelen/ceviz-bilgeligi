import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "../app/components/home/home.component";
import { PageNotFoundComponent } from "../app/components/page-not-found/page-not-found.component";
import { FileUploadComponent } from "../app/components/file-upload/file-upload.component";
import { FileListComponent } from "../app/components/file-list/file-list.component";
import { PersonListComponent } from "../app/components/person-list/person-list.component";
import { PersonCreateComponent } from "../app/components/person-create/person-create.component";
import { ChartCompanyComponent } from "../app/components/chart-company/chart-company.component";
import { ChartDepartmentComponent } from "../app/components/chart-department/chart-department.component";
import { ChartPersonComponent } from "../app/components/chart-person/chart-person.component";
import { ReportsComponent } from "../app/components/reports/reports.component";

const routes: Routes = [
  {path: 'ana-sayfa', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'dosya-yukleme', component: FileUploadComponent},
  {path: 'dosya-listesi', component: FileListComponent},
  {path: 'kisi-listesi', component: PersonListComponent},
  {path: 'kisi-olustur', component: PersonCreateComponent},
  {path: 'grafikler/sirket', component: ChartCompanyComponent},
  {path: 'grafikler/departman', component: ChartDepartmentComponent},
  {path: 'grafikler/kisi', component: ChartPersonComponent},
  {path: 'rapor', component: ReportsComponent},

  {path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
