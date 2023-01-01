import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './components/error404/error404.component';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "auth/login",
    pathMatch: "full"
  },
  {
    path: "auth",
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: "panel",
    component: SkeletonComponent,
    children: [
      {
        path: "user",
        loadChildren: () => import('./modules/users/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./modules/users/admin/admin.module').then(m => m.AdminModule)
      }
    ]
  },
  {
    path: "**",
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
