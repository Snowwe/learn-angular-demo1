import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TaskService } from 'src/app/services/tasks/task.service';
import { Router } from '@angular/router';
import { IClient } from '../../interfaces/client.interface';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent implements OnInit {
    user: IClient;
    pictureArray = [
        {
            user: null,
            name: 'Shiba Inu',
            picture: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        },
        {
            user: null,
            name: 'Border collie',
            picture:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Z1T_WD6xU0ay2oNGCXOt6xlSLjvRYZE1S0MGdvjkUvNOEsGOfw',
        },
        {
            user: null,
            name: 'Samoyed',
            picture:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhRlvRezeXcSZXSOQW_D0DRGXgOAhHPiC9iFLNDk3eDFpf8Cr6Hw',
        },
    ];

    constructor(private taskService: TaskService) {}

    ngOnInit() {}

    getTask(index: number): void {
        const id = '' + Math.floor(Math.random() * 20 + 1);
        this.pictureArray[index].user = this.taskService.getUser(id);
    }

    delete(index: number): void {
        this.pictureArray.splice(index, 1);
    }
}
