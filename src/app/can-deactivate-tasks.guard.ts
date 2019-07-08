import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { TasksComponent } from './pages/tasks/tasks.component';

@Injectable({
    providedIn: 'root',
})
export class CanDeactivateTasksGuard implements CanDeactivate<TasksComponent> {
    canDeactivate(
        component: TasksComponent,
        currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot,
        nextState: RouterStateSnapshot,
    ) {
        return window.confirm('Unsaved data detected. Want to exit?');
    }
}
