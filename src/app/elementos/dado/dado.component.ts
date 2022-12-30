import { Component } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css']
})

export class DadoComponent {
  resultado: number;

  lanzar() {
    this.resultado = Math.floor(Math.random() * 6) + 1;

  }
  

}
