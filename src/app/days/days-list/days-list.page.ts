import { Component, OnInit } from '@angular/core';
import { Evento } from '../evento.model';
import { EventoService } from '../evento.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-days-list',
  templateUrl: './days-list.page.html',
  styleUrls: ['./days-list.page.scss'],
})
export class DaysListPage implements OnInit {

  eventos: Evento[];

  data: any;
  constructor(
    private service: EventoService,
    private router: Router
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.buscarEventos();
}

  // BUSCAR LISTA DE EVENTOS NA API
  buscarEventos(){

    this.service.read().subscribe(resp => {
      this.eventos = resp;
      this.eventos.reverse();
      this.eventos.forEach ((item, index)=>{
          const  dataHoje = new Date(),
          dateInicio = new Date(this.eventos[index].dataInicio),
          days = this.diferencaEntreDatas(dateInicio,dataHoje);
          this.eventos[index].dias = days;
      });
    });  

  }


  // DIFERENÇA ENTRE DIAS.
  diferencaEntreDatas(dateInicio, dateAtual) {
    const date1utc = Date.UTC(dateInicio.getFullYear(), dateInicio.getMonth(), dateInicio.getDate());
    const date2utc = Date.UTC(dateAtual.getFullYear(), dateAtual.getMonth(), dateAtual.getDate());
    var day = 1000*60*60*24;
    var retorno = (date2utc - date1utc)/day-1;
    if (retorno < 0 ){
      retorno = 0;
    }
    return retorno;
}

  
  getDifferenceInHours(date1, date2) {
    const diffInMs = Math.abs(date2 - date1);
    return diffInMs / (1000 * 60 * 60);
  }

  // NAVEGAÇÃO PARA TELA DE CREATE PASSANDO O SALVAR=FALSE PARA EDITAR
  editar(evento:Evento){
     this.router.navigate(['days-create',{SALVAR:false,id:evento.id,dias:evento.dias}]);
  }


}

