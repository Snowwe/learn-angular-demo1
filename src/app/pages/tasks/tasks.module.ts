import { NgModule } from '@angular/core';
import { TaskRoutingModule } from './task.routing.module';
import { TasksChildComponent } from '../../components/smart/tasks-child/tasks-child.component';

@NgModule({
    declarations: [TasksChildComponent],
    imports: [TaskRoutingModule],
    providers: [],
})
export class TasksModule {}
