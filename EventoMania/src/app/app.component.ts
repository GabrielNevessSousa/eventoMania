import { Component, OnInit } from '@angular/core';
import { Evento } from './models/evento.model';
import data from '../assets/data.json';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  eventos: Evento[] = [];

  title = 'Eventos Proximos';
  tipo= 'Razzmatazz';

  date: Date = new Date(2023, 10, 19, 20, 12, 0);

  ngOnInit() {

    const json: any = data;

   
    this.eventos = json;

   
    this.eventos.map((value) => value.fecha = new Date(value.fecha));
  }

  esElMismoTipo(lista: Evento): boolean {
    return this.tipo == lista.direccion;
  }


  fechaFunc(): Date{

    return this.date;
  }

 }
