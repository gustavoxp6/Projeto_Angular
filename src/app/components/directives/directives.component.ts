import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-directives',
  standalone: true,
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
  imports: [CommonModule]
})
export class DirectivesComponent {
  size = 40;
  font = 'Arial';
  color = 'red';
  
  class = ['green-title', 'small-title'];
}
