import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "../app/components/home/home.component";
import { PageNotFoundComponent } from "../app/components/page-not-found/page-not-found.component";
import { FileUploadComponent } from "../app/components/file-upload/file-upload.component";
import { PersonListComponent } from "../app/components/person-list/person-list.component";
import { PersonCreateComponent } from "../app/components/person-create/person-create.component";

const routes: Routes = [
  {path: 'ana-sayfa', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'dosya-yukleme', component: FileUploadComponent},
  {path: 'kisi-listesi', component: PersonListComponent},
  {path: 'kisi-olustur', component: PersonCreateComponent},


  {path: '**', pathMatch: 'full', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
