import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Component } from '@angular/core';
import { MatSpinner } from '@angular/material/progress-spinner';
import * as constant from './shared/constant';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  overlayRef = this.overlay.create({
    hasBackdrop: true,
    positionStrategy: this.overlay
      .position().global().centerHorizontally().centerVertically()
  });

  constructor(
    private overlay: Overlay
  ) { }

  ngOnInit() {
    // // ローディング開始
    // this.overlayRef.attach(new ComponentPortal(MatSpinner));
    // setTimeout(() => {
    //   // ローディング終了
    //   this.overlayRef.detach();
    // }, 3000);
  }
}
