import {Injectable} from '@angular/core';

@Injectable()
export class DataService {
  getRecipes() {
    return [
      {
        title: 'GELATINA DE FRESA Y TRES LECHES',
        ingre: ['Gelatina de fresa 200 gr', 'Agua 100 gr'],
        prepa: ['ansdmanda', 'juiiji']
      },
      {
        title: 'FLAN TRES LECHES',
        ingre: ['Gelatina de fresa 200 gr', 'Agua 100 gr'],
        prepa: ['ansdmanda', 'juiiji']
      },
      {
        title: 'PANNACOTA TRES LECHES Y CHOCOLATE',
        ingre: ['Gelatina de fresa 200 gr', 'Agua 100 gr'],
        prepa: ['ansdmanda', 'juiiji']
      },
      {
        title: 'ARROZ CON TRES LECHES',
        ingre: ['Gelatina de fresa 200 gr', 'Agua 100 gr'],
        prepa: ['ansdmanda', 'juiiji']
      },
    ]
  }
}
