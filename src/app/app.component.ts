import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Listar Eventos', url: '/days-list', icon: 'card' },
    { title: 'Cadastrar', url: '/days-create', icon: 'card' },
    { title: 'Arquivados', url: '/days-arquivado', icon: 'archive' },
    { title: 'Sobre', url: 'sobre', icon: 'help-circle' },
  ];
  public labels = ['Gostou?'];
  constructor() {}
}
