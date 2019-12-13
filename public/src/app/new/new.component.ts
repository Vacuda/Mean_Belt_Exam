import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

    createpet:any;
    errors:any;

    constructor(
        private _httpService: TaskService,
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit() {
        this.createpet = {
            name: "",
            type: "",
            description: "",
            skill_1: "",
            skill_2: "",
            skill_3: "",
        }
    }

    // createPet(){
    //     this.errors = [];
    //     let observable1 = this._httpService.checkPet(this.createpet.name);
    //     observable1.subscribe(data => {
    //         console.log(data)
    //         if(data["results"]){
    //             console.log(data)
    //             let observable2 = this._httpService.createPet(this.createpet)
    //             observable2.subscribe(data => {
    //                 if(data["results"]){
    //                     this.createpet = {
    //                         name: "",
    //                         type: "",
    //                         description: "",
    //                         skill_1: "",
    //                         skill_2: "",
    //                         skill_3: "",
    //                     }
    //                     this._router.navigate(['pets'])
    //                 }
    //                 else if(data["errors"]){
    //                     for(let item in data["errors"]){
    //                         this.errors.push(data["errors"][item]);
    //                     }
    //                 }
    //             });       

    //         }
    //         else if(data["errors"]){
    //             console.log(data["results"])
    //             console.log("yesdysd;yf;sdfys;dy")
    //             this.errors.push({message: "There is already a pet by that name.  No duplicates!"});         
    //         }
           
    //     });
    // }















    createPet(){
        this.errors = null;
        let observable = this._httpService.createPet(this.createpet)
        observable.subscribe(data => {
            if(data["results"]){
                this.createpet = {
                    name: "",
                    type: "",
                    description: "",
                    skill_1: "",
                    skill_2: "",
                    skill_3: "",
                }
                this._router.navigate(['pets'])
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























    // createPet(){
        
    //     this.errors = [];
    //     let observable1 = this._httpService.checkPet(this.createpet.name);
    //     observable1.subscribe(data => {
    //         console.log(data)
    //         if(data["results"].length==0){
    //             console.log(data["results"])
    //             console.log("yesdysd;yf;sdfys;dy")
    //             this.errors.push({message: "There is already a pet by that name.  No duplicates!"});
    //         }
    //         if(data["results"]){
    //             console.log(data)
    //             let observable2 = this._httpService.createPet(this.createpet)
    //             observable2.subscribe(data => {
    //                 if(data["results"]){
    //                     this.createpet = {
    //                         name: "",
    //                         type: "",
    //                         description: "",
    //                         skill_1: "",
    //                         skill_2: "",
    //                         skill_3: "",
    //                     }
    //                     this._router.navigate(['pets'])
    //                 }
    //                 else if(data["errors"]){
    //                     for(let item in data["errors"]){
    //                         this.errors.push(data["errors"][item]);
    //                     }
    //                 }
    //             });       

    //         }
    //         else if(data["errors"]){
    //             console.log
    //             for(let item in data["errors"]){
    //                 this.errors.push(data["errors"][item]);
    //             }             
    //         }
           
    //     });
    // }

    

 


