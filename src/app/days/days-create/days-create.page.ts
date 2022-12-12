import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Evento } from '../evento.model';
import { EventoService } from '../evento.service';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-days-create',
  templateUrl: './days-create.page.html',
  styleUrls: ['./days-create.page.scss'],
})
export class DaysCreatePage implements OnInit {

  SALVAR = true;
  dias = 0;
  evento : Evento = {
    titulo: "",
    descricao: null, 
    dataInicio: new Date(),
    dataFinal: null,
    arquivado: false,
    dias:null,
  };

  constructor(
    private service: EventoService,
    public navCtrl: NavController,
    private router: ActivatedRoute, 
    private alertController: AlertController
    
  ) { }



  ngOnInit() {

    //Ler o parametro pra saber se a Ação é SALVAR ou não. 
    this.SALVAR = JSON.parse(this.router.snapshot.paramMap.get("SALVAR"));
    if(this.SALVAR == null ){
      this.SALVAR = true;
    }else{
      //Se SALVAR for false, é para editar, busca o evento pra edição. 
      if (!this.SALVAR ){
        this.buscar(JSON.parse(this.router.snapshot.paramMap.get("id")));
        this.dias =  (JSON.parse(this.router.snapshot.paramMap.get("dias")));
      }
    }  
  }

  //SALVAR 
  salvar():void{
    if (this.evento.titulo==null || this.evento.titulo==undefined || this.evento.titulo==""){
      this.service.msgToast("O Título é obrigatório!","warning");
    }else{
      this.service.create(this.evento).subscribe(() => {
          this.navCtrl.navigateForward("/days-list");
          this.service.msgToast("Cadastrado com sucesso!","success");
        },error =>{
          this.service.msgToast("Erro Cadastrando!, Verifique o Back-End","danger");
        })
    }
  }

  //EDITAR 
  editar(evento:Evento) {
    if (this.evento.titulo==null || this.evento.titulo==undefined || this.evento.titulo==""){
      this.service.msgToast("O Título é obrigatório!","warning");
    }else{
      this.service.update(evento).subscribe(() => {
          this.navCtrl.navigateForward("/days-list");
          this.service.msgToast("Alterado com sucesso!","success");
        },error =>{
          this.service.msgToast("Erro Alterando!, Verifique o Back-End","danger");
        })
    }
  }

  // BUSCAR 
  buscar(id: number){
    this.service.readById(id).subscribe(resp => {
      this.evento = resp;
      this.evento.dias = this.dias;
    },error =>{
      this.service.msgToast("Erro Selecionando!, Verifique o Back-End","danger");
    })
  }

  //EXCLUIR
  excluir(id:number){
      this.service.delete(id).subscribe(resp => {
        this.navCtrl.navigateForward("/days-list");
      },error =>{
        this.service.msgToast("Erro Excluíndo!, Verifique o Back-End","danger");
      })
  }

  //* CONFIMAR E EXCLUIR 
  async confirmaExcluir(evento:Evento) {
    const alert = await this.alertController.create({
      cssClass:'my-custom-class',
      header: 'Atenção!',
      subHeader: 'Deseja excluir a mermória ?  ',
      message: evento.titulo,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass:'my-custom-class',
          handler: (blah) => {                       
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            this.excluir(evento.id); 
          }
        }
      ]
    });

    await alert.present();
  }
  //ARQUIVAR - Altera os parâmetros dataFinal e arquivado e manda editar()
  arquivar(evento:Evento){
    this.evento.dataFinal = new Date();
    this.evento.arquivado = true;
    this.editar(evento);
  }



}
