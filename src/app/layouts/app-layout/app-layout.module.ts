import { NgModule } from '@angular/core';

import { TopNavComponent } from 'src/app/components/top-nav/top-nav.component';
import { APP_ROUTES } from 'src/app/modules/router/app-routing.module';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { AppLayoutComponent } from './app-layout.component';

const declarations = [AppLayoutComponent, TopNavComponent];

@NgModule({
  declarations: [...declarations],
  imports: [SharedModule, APP_ROUTES],
  exports: [...declarations],
})
export class AppLayoutModule {}
