import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter = 0;
  updatedAt?: number;

  get offDecrease(): boolean {
    return this.counter <= 0;
  }

  increase(): void {
    this.updatedAt = Date.now();
    this.counter++
  }

  decrease(): void {
    this.counter--
  }

  clear(): void {
    this.counter = 0;
  }
}
