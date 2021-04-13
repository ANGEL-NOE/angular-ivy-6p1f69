import { Component, OnInit } from '@angular/core';

@Component({
  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class ContadorComponent implements OnInit {

  constructor() { }

  numero:number = 0;
  sumar(){
    this.numero +=5;
  }

  restar(){
    this.numero -=5;
  }
  accionOperacion( valor:number ){
    this.numero +=valor;
  }
  
  ngOnInit(): void {
  }
}