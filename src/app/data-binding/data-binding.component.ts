import { ParseSourceFile } from '@angular/compiler';
import { Target } from '@angular-devkit/architect';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://google.com.br'
  cursoAngular: boolean = false
  urlImage = 'https://picsum.photos/id/237/200/300';
  textoatual:string = ''
  textosalvo:string = ''
  mouseover: boolean = false
  textotwoway : string = 'abc'
  escolha: any = [{curso: 'SQL SERVER', semestre: 2}]

  valorinicial = 15




  pessoa: any = {
    nome: "adriano",
    idade: 33
  }

  getValor(){
    return 1
  }

  getCondition(){
    return true
  }

  botaoClicado(){
    alert('botao clicado')
  }

  keyuppress(event){
    this.textoatual = (<HTMLInputElement>event.target).value
  }

  Salvar(texto){
    this.textosalvo = texto

  }

  mouseOver(){
    this.mouseover = !this.mouseover
    console.log(this.mouseover)
  }

  alterouValor(event){
    console.log(event.valor)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
