import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from 'src/app/layouts/app-layout/app-layout.component';

const defaultRoute = 'home';

const routes: Routes = [
  {
    path: '**',
    redirectTo: defaultRoute
  },
  {
    path: '',
    redirectTo: defaultRoute,
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: defaultRoute,
        loadChildren: () => 
          import('./../../pages/home/home.module').then((m) => m.HomeModule)
      }
    ]
  }
];

export const APP_ROUTES = RouterModule.forRoot(routes, {useHash: true});
