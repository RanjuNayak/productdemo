import { Routes,RouterModule, PreloadAllModules } from "@angular/router";
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddtaskComponent } from './taskdisplay/addtask/addtask.component';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { UserGuardService } from './userguard.service';
import { AppCustomerPreloader } from './app.customerpreloader';
import { AddtaskreactivedemoComponent } from './taskdisplay/addtaskreactivedemo/addtaskreactivedemo.component';
import { EdittaskreactivedemoComponent } from './taskdisplay/edittaskreactivedemo/edittaskreactivedemo.component';
import { TaskResolverService } from './task-resolver.service';
import { Task1Component } from './task1/task1.component';

const arr : Routes=[
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'addtask',component:AddtaskComponent},
  {path: 'addtask1',component:AddtaskreactivedemoComponent},
   {path:'task',component:TaskdisplayComponent},
  {path:'edittask/:Id',component:EdittaskComponent},
  {path:'edittaskreactive/:Id',component: EdittaskreactivedemoComponent},
  {path:'customer',data:{preload:true},loadChildren:'./customer/customer.module#CustomerModule'},
  {path:'user1',loadChildren:'./users/users.module#UsersModule'},
  {path: 'task1',resolve:{tdata:TaskResolverService},component:Task1Component},
  {path:'product',canLoad:[UserGuardService],loadChildren:'./productdisplay/product.module#ProductModule'},
  {path:'pagenotfound',component:PagenotfoundComponent},
  {path:'**',redirectTo:'/pagenotfound'}
];

export const routing=RouterModule.forRoot(arr,{preloadingStrategy:AppCustomerPreloader});
