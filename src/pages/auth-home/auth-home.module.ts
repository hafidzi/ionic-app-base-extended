import { NgModule } from '@angular/core';
// import { IonicModule } from 'ionic-angular';
import { AuthHome } from './auth-home';

@NgModule({
  declarations: [
    AuthHome,
  ],
  imports: [
    // IonicPageModule.forChild(AuthHome),
  ],
  exports: [
    AuthHome
  ]
})
export class AuthHomeModule {}
