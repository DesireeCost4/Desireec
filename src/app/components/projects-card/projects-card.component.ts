import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-card',
  templateUrl: './projects-card.component.html',
  styleUrls: ['./projects-card.component.css']
})
export class ProjectsCardComponent implements OnInit {

  icon:string = 'https://github.com/user-attachments/assets/5d6d1550-b117-46c3-b332-c271894ecc66'
  title:string = 'Selectum '
  description:string = 'POO, Java, Backend, Estrutura.'
  project:string = 'https://my-space-brown.vercel.app/'
  

  constructor() { }

  ngOnInit(): void {
  }

}
