import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksChildComponent } from '../../components/smart/tasks-child/tasks-child.component';

const routes: Routes = [{ path: 'taskchild', component: TasksChildComponent }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TaskRoutingModule {}
