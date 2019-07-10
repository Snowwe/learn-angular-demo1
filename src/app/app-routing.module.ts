import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { CanActivateTasksGuard } from './can-activate-tasks.guard';
import { CanDeactivateTasksGuard } from './can-deactivate-tasks.guard';
import { AuthGuardCanLoadService } from './auth-guard-can-load.service';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    {
        path: 'tasks',
        component: TasksComponent,
        canActivate: [CanActivateTasksGuard],
        canDeactivate: [CanDeactivateTasksGuard],
    },
    { path: 'tasks', loadChildren: './pages/tasks/tasks.module#TasksModule', canLoad: [AuthGuardCanLoadService] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
