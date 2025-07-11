import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'issues',
    loadComponent: () =>
      import('./modules/issues/pages/issues-list-page/issues-list-page'),
  },
  {
    path: 'issue/:number',
    loadComponent: () => import('./modules/issues/pages/issue-page/issue-page'),
  },

  {
    path: '**',
    redirectTo: 'issues',
  },
];
