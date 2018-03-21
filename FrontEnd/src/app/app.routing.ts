import { Routes } from "@angular/router";

import { TabGroupComponent } from "./tab-group/tab-group.component";

import { AuthGuard } from '../_guards/auth.guard'
import { HomeComponent } from "app/home/home.component";
import { MemberComponent } from "app/member/member.component";
import { RealTimeComponent } from "app/real-time/real-time.component";
import { HistoryComponent } from "app/history/history.component";

export const AppRoutes: Routes = [{
    path: 'main',
    component: HomeComponent,
    canActivate: [AuthGuard]
}, {
    path: 'member',
    component: MemberComponent
},
{
    path: 'RealTime',
    component: RealTimeComponent
},
{
    path: 'history',
    component: HistoryComponent
},
{
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
}, {
    path: '**',
    redirectTo: 'session/404'
}];