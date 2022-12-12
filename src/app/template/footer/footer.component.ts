import { Component, OnInit } from '@angular/core';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions/ngx';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(private router: Router, public navCtrl: NavController, private nativePageTransitions: NativePageTransitions) { }

  ngOnInit() {}

  slidePage() {
    let options: NativeTransitionOptions = {
      direction: 'left',
      duration: 400,
      slowdownfactor: -1,
      iosdelay: 50
     };
 
    this.nativePageTransitions.slide(options);
    this.navCtrl.navigateForward('days-create');
  }


  telaSalvar(){
    this.router.navigate(['days-create',{SALVAR:true}])
  }
  
  flipPage() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
     };
 
    this.nativePageTransitions.flip(options);
    // this.navCtrl.navigateForward('days-create');
    this.router.navigate(['days-list']);
  }
 
  fadePage() {
    this.nativePageTransitions.fade(null);
    this.navCtrl.navigateForward('days-create');
  }
 
  curlPage() {
    let options: NativeTransitionOptions = {
      direction: 'up',
      duration: 600
     };
    this.nativePageTransitions.curl(options);
    this.navCtrl.navigateForward('days-create');
  }

}
