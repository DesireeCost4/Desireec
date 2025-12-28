import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {


  titulos: string[] = [ 'Creative Tech', 'Fullstack',' Web & Systems ']; 
  textoAtual: string = '';
  intervalo: any;
  dark:boolean = false;


showRole = true;


  constructor() { }

  ngOnInit(): void {
    this.atualizarTitulo()
  }

darkMode(){
  this.dark = !this.dark
}

  atualizarTitulo() {
    let index = 0;
    this.intervalo = setInterval(() => {
      // some
      this.showRole = false;

      setTimeout(() => {
        index = (index + 1) % this.titulos.length;
        this.textoAtual = this.titulos[index];

        this.showRole = true;
      }, 400); 
    }, 2500);
  }

}

