import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './modules/core/core.module';
import { APP_ROUTES } from './modules/router/app-routing.module';
import { AppLayoutModule } from './layouts/app-layout/app-layout.module';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent
  ],
  imports: [
    CoreModule,
    AppLayoutModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
