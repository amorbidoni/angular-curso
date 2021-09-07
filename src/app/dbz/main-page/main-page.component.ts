import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  nuevo: Personaje = {
    nombre: 'Maestro Splinter',
    poder: 1300,
  };

  constructor() {}
}

// cambiarNombre(event: any) {
//   console.log(event.target.value);
// }

// agregar(event: any) {
//   event.preventDefault();
//   console.log('hey');
// }
