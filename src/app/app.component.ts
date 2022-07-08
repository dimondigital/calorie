import { Component } from '@angular/core';
import {PopupService} from "./shared/popup.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'calorie';

  constructor(private popup: PopupService) {
  }
}
