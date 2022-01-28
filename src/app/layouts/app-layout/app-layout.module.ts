import { NgModule } from '@angular/core';
import { APP_ROUTES } from 'src/app/modules/router/app-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AppLayoutComponent } from './app-layout.component';

const declarations = [AppLayoutComponent];

@NgModule({
  declarations: [...declarations],
  imports: [
    SharedModule,
    APP_ROUTES
  ],
  exports: [...declarations]
})
export class AppLayoutModule { }
