import { Component,Inject,OnInit,Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import { SignupComponent } from './signup/signup.component';

import { OverlayContainer } from '@angular/cdk/overlay'
import { ThemeService } from './services/theme.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,SignupComponent,RouterLink],
  providers:[ThemeService],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-first-project3';

constructor(public themeSvc: ThemeService ) {}

ngOnInit(){
  
}

changeTheme(themeValue:string){
  

if(themeValue=='light'){
  
}

if(themeValue=='dark'){
  
}


}





}
