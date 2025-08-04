import { Routes } from '@angular/router';
import { AdminComponent } from '../layouts/admin-layout/admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { EditNewsComponent } from './editNews/editNews.component';
import { Add_newsComponent } from './Add_news/Add_news.component';
export const dashboardRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
         {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path:"news",
        component:NewsComponent
      },
      {
        path:"news/edit/:id",
        component:EditNewsComponent
      },
      {
        path:"addnews",
        component:Add_newsComponent
      },
    ]
  },
];
