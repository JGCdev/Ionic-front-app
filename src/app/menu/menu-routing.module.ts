import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'app',
    component: MenuPage,
    children: [
      {
        path: 'inicio',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'personas',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../personas/personas.module').then(m => m.PersonasModule)
          }
        ]
      },
      {
        path: 'mensajes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../mensajes/mensajes.module').then(m => m.MensajesPageModule)
          }
        ]
      },
      {
        path: 'empresa',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../empresa/empresa.module').then(m => m.EmpresaPageModule)
          }
        ]
      },
      {
        path: 'personal',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../personal/personal.module').then(m => m.PersonalPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
