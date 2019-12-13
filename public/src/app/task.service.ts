

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private _http: HttpClient) {}

    getPets(){
        return this._http.get('/api/pets');
    }

    getOnePet(id){
        return this._http.get(`/api/pet/${id}`);
    }

    createPet(data){
        return this._http.post('/api/pet/create', data);
    }

    deletePet(id){
        return this._http.delete(`/api/pet/destroy/${id}`);
    }

    updatePet(id, data){
        return this._http.put(`/api/pet/update/${id}`, data);
    }

    checkPet(name){
        return this._http.get(`/api/pet/check/${name}`);
    }

}