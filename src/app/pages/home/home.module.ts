import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { HomeComponent } from './home.component';

const routes: Routes = [{path:'', component: HomeComponent}]

@NgModule({
  declarations: [HomeComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [SharedModule]
})
export class HomeModule { }
