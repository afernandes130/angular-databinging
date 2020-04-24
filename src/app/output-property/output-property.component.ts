import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { outputPath } from 'node_modules_OLD/@angular-devkit/build-angular/test/utils';

@Component({
  selector: 'app-output',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valorinicial: number = 0
  @Output() mudouValor = new EventEmitter()
  @ViewChild('inputvariavel') inputvar : ElementRef
  
  incrementa(){
    this.inputvar.nativeElement.value++
    this.mudouValor.emit({valor: this.valorinicial})

  }

  decrementa(){
    this.inputvar.nativeElement.value--
    this.mudouValor.emit({valor: this.valorinicial})
  }

  constructor() { }

  ngOnInit(): void {
    
  }

}
