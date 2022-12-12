import { Component, OnInit } from '@angular/core';
import { EventoService } from '../evento.service';
import { Evento } from '../evento.model';

@Component({
  selector: 'app-days-arquivado',
  templateUrl: './days-arquivado.page.html',
  styleUrls: ['./days-arquivado.page.scss'],
})
export class DaysArquivadoPage implements OnInit {

  constructor(private service: EventoService,) { }

  eventos: Evento[];

  ngOnInit() {
    this.buscarArquivados();
  }

  // BUSCAR LISTA DE EVENTOS NA API
  buscarArquivados(){
  //Remove os que não estão arquivados
  this.service.readArquivadas().subscribe(resp => {
      resp.reverse();       
      this.eventos = resp;
    })  
  }


}
