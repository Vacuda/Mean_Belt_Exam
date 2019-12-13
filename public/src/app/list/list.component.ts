import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    allpets:any;

    constructor(private _httpService: TaskService) { }

    ngOnInit() {
        this.getPets();
    }

    getPets(){
        let observable = this._httpService.getPets()
        observable.subscribe(data => {
            this.allpets = data['results'];
        });
    }



}
