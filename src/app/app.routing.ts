import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import{AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ProjectComponent} from './project/project.component';

export const appRoutes: Routes = [
  { path: 'projet/:projectName', component: ProjectComponent },
  { path: '', component: HomeComponent },
];


export const AppRouting = RouterModule.forRoot(appRoutes, {
  //enableTracing: true,
  preloadingStrategy: PreloadAllModules
});