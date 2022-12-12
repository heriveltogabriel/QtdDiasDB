import { Injectable } from '@angular/core';
import { catchError,map } from 'rxjs/operators';
import { Observable,EMPTY } from 'rxjs';
import { Evento } from './evento.model';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular'
import { environment } from '../../../environment';

// import * as dotenv from 'dotenv'



;@Injectable({
  providedIn: 'root'
})

export class EventoService {
  
  
   baseUrl = "";

  constructor( 
    private http:HttpClient,
    private toastController:ToastController,
    
  ) {  
    //let hostIP = environment.ip;
    this.baseUrl = `//${environment.ip}:${environment.port}/${environment.context}`
    console.log("URL=",this.baseUrl);
  }

  // Create
  create(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.baseUrl,evento).pipe(
      map( (obj) => obj ),
      catchError (e => this.errorHandler(e))
    )
  }
  //Read
  read():Observable<Evento[]> {
    var headers = new Headers();
     headers.append('Access-Control-Allow-Origin' , '*');
     headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
     headers.append('Accept','application/json');
     headers.append('content-type','application/json');

    return this.http.get<Evento[]>(this.baseUrl+"?arquivado=false").pipe(
      map( (obj) => obj ),
      catchError (e => this.errorHandler(e))
    );
  } 
   //Read Arquivadas
   readArquivadas():Observable<Evento[]> {
    var headers = new Headers();
     headers.append('Access-Control-Allow-Origin' , '*');
     headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
     headers.append('Accept','application/json');
     headers.append('content-type','application/json');

    return this.http.get<Evento[]>(this.baseUrl+"?arquivado=true").pipe(
      map( (obj) => obj ),
      catchError (e => this.errorHandler(e))
    );
  } 
  //Update
  update(evento: Evento): Observable<Evento> {
    const url = `${this.baseUrl}/${evento.id}`
    return this.http.put<Evento>(url,evento).pipe(
      map( (obj) => obj ),
      catchError (e => this.errorHandler(e))
    );
  }
  //Delete
  delete(id: number): Observable<Evento> {
    const url = `${this.baseUrl}/${id}`
    return this.http.delete<Evento>(url).pipe(
      map( (obj) => obj ),
      catchError (e => this.errorHandler(e))
    );
  }

  //Buscar pelo ID
  readById(id: number):Observable<Evento> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Evento>(url).pipe(
      map( (obj) => obj ),
      catchError (e => this.errorHandler(e))
    );
  }

  // ERROR NA API 
  errorHandler (e: any): Observable<any>{
    this.msgToast("Erro! Verifique o Back-End","danger");
    return EMPTY
  }
  //MSG NA TELA (TOAST)
  async msgToast(msg,tipo) {
    const toast = await this.toastController.create({
      color: tipo,
      message: msg,
      duration: 1000,
      position: 'top'
    });
    toast.present();
  }

  


}