import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  name = ' Gustavo';
  age = 30;
  job = ' Programador';
  hobbies = [" Correr"," Jogar", " Estudar"];
  car = {
    name: "Polo",
    ano: "2019"
  };

}
