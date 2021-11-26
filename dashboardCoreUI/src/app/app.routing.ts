import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './components/login/login.component';
import { UsuarioComponent } from './components/usuario/usuario.component'
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { UsuariosService } from './services/usuarios.service';
import { ArticuloComponent } from './components/articulo/articulo.component';
import { CategoriaComponent } from './components/categoria/categoria.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
<<<<<<< HEAD
  // {
  //   path: 'listausuarios',
  //   redirectTo: '/listausuarios',
  //   pathMatch: 'full'
  // },
  /*
=======
  {
    path: 'dashboard',
    redirectTo:'/dashboard'
  },

>>>>>>> 49a289914197d7a4b9838be8d2a96bb2f2672c15
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'registeruser',
    component: RegisterComponent
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [

      {
        path: 'base',
        loadChildren: () => import('./views/base/base.module').then(m => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/chartjs/chartjs.module').then(m => m.ChartJSModule)
      },
      {
        path: 'listaproveedores',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/theme.module').then(m => m.ThemeModule)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/widgets.module').then(m => m.WidgetsModule)
      },
      {
        path: 'listausuarios',
        component: UsuarioComponent
      },
      {
        path: 'articulos',
        component: ArticuloComponent
      },
      {
        path: 'categorias',
        component: CategoriaComponent
      }

    ]
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
