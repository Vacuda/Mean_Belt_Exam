import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

    updatepet: any;
    errors:any;

    constructor(
        private _httpService: TaskService,
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.getOnePet(params.id);
        })
    }

    getOnePet(id:number){
        let observable = this._httpService.getOnePet(id)
        observable.subscribe(data => {
            this.updatepet = data['results'];
        });
    }

    updatePet(){
        let id = this.updatepet._id;
        let observable = this._httpService.updatePet(id, this.updatepet)
        observable.subscribe(data => {
            if(data["results"]){
                this.updatepet = {
                    name: "",
                    type: "",
                    description: "",
                    skill_1: "",
                    skill_2: "",
                    skill_3: "",
                }
                this._router.navigate(['pets/show/', id])
            }
            else if(data["errors"]){
                this.errors = [];
                for(let item in data["errors"]){
                    this.errors.push(data["errors"][item]);
                }
            }
            
        });
    }




}
