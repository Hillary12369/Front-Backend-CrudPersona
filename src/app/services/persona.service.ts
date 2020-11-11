import { Injectable } from '@angular/core';
import {Persona} from '../models/persona';
import {Observable, Subscription, of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpRequest, HttpEvent} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private httpHearders = new HttpHeaders({ 'Content-Type': 'application/json'});
  private personaUrl :string = 'http://localhost:9090/persona';
  
  constructor(private http:HttpClient) {}
  
    getPersonas():Observable<Persona[]>{
    return this.http.get<Persona[]>(this.personaUrl+'/all');
   }
   addPersona(persona: Persona): Observable<number>{
     return this.http.post<number>(this.personaUrl+"/add", persona, {headers:this.httpHearders});
   }
   deletePersona(id: number):Observable<number>{
     return this.http.delete<number>(this.personaUrl+"/delete"+id, {headers:this.httpHearders});
   }
   updatePersona(persona: Persona):Observable<number>{
     return this.http.put<number>(`${this.personaUrl}/update/${persona.id_persona}`, persona,{headers:this.httpHearders});
   }
   getPersona(id:number):Observable<Object> {
    return this.http.get(`${this.personaUrl}/${id}`);
  }
}
