import {Injectable} from '@angular/core';

@Injectable()
export class DataService {
  getRecipes() {
    return [
      {
        icon: '/assets/images/titles/gelatina.png',
        title_icon: 'DE FRESAS Y TRES LECHES',
        title: 'GELATINA DE FRESA Y TRES LECHES',
        image: '/assets/images/photos/tres-riches.png',
        video: '1dk8fuhcGPg',
        ingredients: [
          '500gr de Jarabe Tres Riches® 1L',
          '8gr de gelatina sin sabor',
          '40gr de agua tibia para hidratar la gelatina',
          '30gr de agua tibia para hidratar la gelatina',
          '6gr de gelatina de fresa',
          '00gr de agua fría',
          '100gr de fresas en trozos'
        ],
        preparation: ['ansdmanda', 'juiiji'],
        isCollapse: true
      },
      {
        icon: '/assets/images/titles/gelatina.png',
        title_icon: 'DE FRESAS Y TRES LECHES',
        title: 'FLAN TRES LECHES',
        image: '',
        ingredients: ['Gelatina de fresa 200 gr', 'Agua 100 gr'],
        preparation: ['ansdmanda', 'juiiji'],
        isCollapse: true
      },
      {
        icon: '/assets/images/titles/gelatina.png',
        title_icon: 'TRES LECHES Y CHOCOLATE',
        title: 'PANNA COTA TRES LECHES Y CHOCOLATE',
        image: '',
        ingredients: ['Gelatina de fresa 200 gr', 'Agua 100 gr'],
        preparation: ['ansdmanda', 'juiiji'],
        isCollapse: true
      },
      {
        icon: '/assets/images/titles/arroz-con.png',
        title_icon: 'DE FRESAS Y TRES LECHES',
        title: 'ARROZ CON TRES LECHES',
        image: '/assets/arroz-leche.png',
        video: '',
        ingredients: [
          '1 taza de arroz',
          '4 tazas de agua',
          '1 astilla de canela',
          '2 tazas Jarabe Tres Riches® 1L',
          'Canela al gusto para decoración',
          'Arándanos al gusto',
          'Hojas de menta'
        ],
        preparation: ['ansdmanda', 'juiiji'],
        isCollapse: true
      },
    ]
  }
}
