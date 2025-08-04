import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LifeInAswanComponent } from './pages/lifeInAswan/lifeInAswan.component';
import { NewsComponent } from './pages/News/News.component';
import { ClientComponent } from './layouts/client-layout/client/client.component';

export const routes: Routes = [
      {
        path:"",
       component:ClientComponent,
       children:[
         { path: '', redirectTo: 'home', pathMatch: 'full' },
         { path: 'home', component: HomeComponent },
          { path: 'lifeInAswan', component: LifeInAswanComponent },
          { path: 'News', component: NewsComponent },
       ]
    },
     
     {
      path:"admin",
      loadChildren:()=>import("./admin/dashboard.routes").then(m=>m.dashboardRoutes)
     }
];
