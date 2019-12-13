import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

    onepet:any;
    errors:any;
    likebutton:any;

    constructor(
        private _httpService: TaskService,
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit() {
        this.likebutton = true;
        this._route.params.subscribe(params => {
            this.getOnePet(params.id);
        })
    }

    getOnePet(id:number){
        let observable = this._httpService.getOnePet(id)
        observable.subscribe(data => {
            this.onepet = data['results'];
        });
    }

    likePet(){
        this.likebutton = null;
        this.onepet.likes++;
        let observable = this._httpService.updatePet(this.onepet._id, this.onepet)
        observable.subscribe(data => {
            if(data["results"]){

            }
            else if(data["errors"]){
                this.errors = [];
                for(let item in data["errors"]){
                    this.errors.push(data["errors"][item]);
                }
            }
            
        });
    }

    adoptPet(){
        let id = this.onepet._id;
        let observable = this._httpService.deletePet(id)
        observable.subscribe(data => {
            this._router.navigate(['pets'])
        });
    }


}
