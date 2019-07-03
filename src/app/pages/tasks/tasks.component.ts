import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { TaskService } from 'src/app/services/tasks/task.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TasksComponent implements OnInit {
    user;
    pictureArray = [
        {
            name: 'Shiba Inu',
            picture: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
        },
        {
            name: 'Border collie',
            picture:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_Z1T_WD6xU0ay2oNGCXOt6xlSLjvRYZE1S0MGdvjkUvNOEsGOfw',
        },
        {
            name: 'Samoyed',
            picture:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhRlvRezeXcSZXSOQW_D0DRGXgOAhHPiC9iFLNDk3eDFpf8Cr6Hw',
        },
    ];

    constructor(private taskService: TaskService, private router: Router) {}

    ngOnInit() {}

    getTask(i) {
        const id = '' + Math.floor(Math.random() * 20 + 1);
        this.pictureArray[i].user = this.taskService.getUser(id);
        console.log('I get information');
    }
    delete(index) {
        this.pictureArray.splice(index, 1);
        console.log(index);
    }
    goToMainPage() {
        this.router.navigate(['/home']);
    }
}
