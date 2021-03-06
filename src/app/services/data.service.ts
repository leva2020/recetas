import {Injectable} from '@angular/core';

@Injectable()
export class DataService {
  getRiches() {
    return {
      title: 'TRES RICHES',
      description: 'TRES LECHES',
      beneficts: [
        'De fácil uso, ayuda a mejorar  y facilitar la preparación de la receta.',
        'En empaque de 1 litro Tetra Pak',
        'Remojo ideal para una absorción perfecta.',
        'Facilita la preparación de recetas en casa.',
        'Clásico sabor y aroma de la mezcla tres leches tradicional.'
      ],
      life: '270 días en refrigeración (4-8ºC) o en un lugar fresco y seco por debajo de 25º',
      product_image: '/assets/images/photos/riches-caja.png',
      image: '/assets/images/photos/tres-riches.png',
    }
  }
  getRecipes() {
    return [
      {
        id: 'fresas',
        icon: '/assets/images/titles/gelatina.png',
        title_icon: 'DE FRESAS Y TRES LECHES',
        title: 'GELATINA DE FRESA Y TRES LECHES',
        image: '/assets/images/photos/gelatina.png',
        video: '1dk8fuhcGPg',
        ingredients: [
          '<strong>Para la gelatina Tres Riches®</strong>',
          '500gr de Jarabe Tres Riches® 1L',
          '8gr de gelatina sin sabor',
          '40gr de agua tibia para hidratar la gelatina Para la gelatina de fresa',
          '<strong>Para la gelatina de fresa</strong>',
          '30gr de agua tibia para hidratar la gelatina',
          '6gr de gelatina de fresa',
          '100gr de agua fría',
          '100gr de fresas en trozos'
        ],
        preparation: [
          'Hierve el <strong>Jarabe Tres Riches®</strong> con la gelatina sin sabor previamente hidratada.',
          'Vierte la mezcla en el molde ocupando 3⁄4 del recipiente y llevalo a refrigeración por 4 horas o hasta obtener una consistencia firme.',
          'Hierve una taza de agua y disuelve la gelatina de fresa. Luego, adiciona agua fría y retira del fuego.',
          'Vierte la mezcla sobre la gelatina de tres leches que adicionaste previamente en el molde, agrega fresas en rodajas y lleva nuevamente a refrigeración.',
          'Cuando la consistencia este firme, decora y <strong>distruta!</strong>'
        ],
        isCollapse: true
      },
      {
        id: '',
        icon: '/assets/images/titles/flan.png',
        title_icon: 'TRES LECHES',
        title: 'FLAN TRES LECHES',
        image: '/assets/images/photos/flan.png',
        video: 'cc9o7PED4j0',
        ingredients: [
          '1 Jarabe Tres Riches® 1L',
          '8 huevos',
          '15gr de esencia de vainilla',
          '100gr de azúcar refinada'
        ],
        preparation: [
          'Derrite el azúcar a fuego lento revolviendo de forma constante hasta obtener un caramelo y viértelo en el fondo de los moldes.',
          'Mezcla el <strong>Jarabe Tres Riches®</strong> junto con los huevos y la esencia de vainilla en una licuadora hasta homogenizar.',
          'Vierte la mezcla en los moldes',
          'hornea a baño María por aproximadamente 90 min a 140*C. Deja reposar la mezcla y luego lleva a refrigeración.',
          'Desmolda el flan, decora y <strong>disfruta!</strong>'
        ],
        isCollapse: true
      },
      {
        id: 'pannacota',
        icon: '/assets/images/titles/panacota.png',
        title_icon: 'TRES LECHES Y CHOCOLATE',
        title: 'PANNA COTA TRES LECHES Y CHOCOLATE',
        image: '/assets/images/photos/panacota.png',
        video: 'ESiB0tDtvpo',
        ingredients: [
          '<strong>Panna cotta de Chocolate Blanco</strong>',
          '200gr de Jarabe Tres Riches® 1L',
          '400gr Crema de Leche',
          '10gr de gelatina sin sabor',
          '50gr de agua para hidratar la gelatina',
          '120gr de chocolate blanco',
          '15gr de esencia de vainilla',
          '<strong>Panna cotta de Chocolate</strong>',
          '100gr de Jarabe Tres Riches® 1L',
          '200gr Crema de Leche',
          '5gr de gelatina sin sabor',
          '25gr de agua para hidratar la gelatina',
          '120gr de Crema de Avellanas'
        ],
        preparation: [
          'Mezcla a fuego medio el <strong>Jarabe Tres Riches®</strong> con la crema de leche hasta que hierva.',
          'Agrega a la mezcla la gelatina sin sabor previamente hidratada y el chocolate blanco.',
          'Adiciona la esencia de vainilla y revuelve hasta integrar. Luego vierte la mezcla en moldes hasta llenar 3⁄4 del recipiente y lleva a refrigeración por 2 horas.',
          'Repite todos los paso pero esta vez cambia el chocolate blanco por la crema de avellanas. Vierte la mezcla sobre la primera capa que adicionaste en el molde y lleva de nuevo a refrigeración por 2 horas más.',
          'Decora con los ingredients que desees y <strong>disfruta!</strong>'
        ],
        isCollapse: true
      },
      {
        id: '',
        icon: '/assets/images/titles/arroz-con.png',
        title_icon: 'TRES LECHES',
        title: 'ARROZ CON TRES LECHES',
        image: '/assets/images/photos/arroz-leche.png',
        video: 'z1BxTVpIPS4',
        ingredients: [
          '1 taza de arroz',
          '4 tazas de agua',
          '1 astilla de canela',
          '2 tazas Jarabe Tres Riches® 1L',
          'Canela al gusto para decoración',
          'Arándanos al gusto',
          'Hojas de menta'
        ],
        preparation: [
          'Hierbe el agua con las astillas de canela y agrega el arroz. Una vez éste el arroz en su punto, retira del fuego y deje reposar.',
          'Adiciona el <strong>Jarabe Tres Riches®</strong> y cocina a fuego lento mezclando de manera homogénea hasta obtener la consistencia deseada.',
          'Retira del fuego y deja reposar.',
          'Decora con fruta, canela en polvo o en astilla y/o menta y <strong>disfruta!</strong>'
        ],
        isCollapse: true
      },
      {
        id: '',
        icon: '/assets/images/titles/torta.png',
        title_icon: 'DE TRES LECHES',
        title: 'TORTA TRES RICHES',
        image: '/assets/images/photos/torta.png',
        video: '_NRIoraHvHk',
        ingredients: [
          '1 torta mediana',
          '400 gr de Jarabe Tres Riches® 1L',
          '100 gr de crema batida',
          'Cerezas para decoración',
          'Chocolate en polvo'
        ],
        preparation: [
          'Elige una torta mediana de tu preferencia y ubicarla en una bandeja de borde alto.',
          'Divídela en la mitad y con la primera capa crea un cordón de crema alrededor',
          'Agrega en el centro de la capa de torta la mitad del <strong>jarabe Tres Riches®</strong> y posteriormente, llenar el centro con más crema batida.',
          'Repite el anterior proceso agregando la segunda capa de la torta.',
          'Con la crema batida restante, cubre la torta siguiendo un estilo semi-decorado.',
          'Decora con rosetones de crema, chocolate en polvo y cerezas al gusto y <strong>disfruta!</strong>'
        ],
        isCollapse: true
      },
      {
        id: '',
        icon: '/assets/images/titles/paleta.png',
        title_icon: 'TRES LECHES Y FRUTOS ROJOS',
        title: 'PALETA TRES LECHES Y FRUTOS ROJOS',
        image: '/assets/images/photos/paleta.png',
        video: '',
        ingredients: [
          '500 gr Jarabe Tres Riches® 1L',
          '200 gr mermelada de mora',
          'Frutos Rojos: Cerezas, Arándanos, Frambuesas',
          'Moldes y palitos de paletas'
        ],
        preparation: [
          'Mezcla el <strong>Jarabe Tres Riches®</strong> con el relleno de mora y añade las frutas en trozos al gusto.',
          'Sirve en los moldes, agrégale los palillos y lleva a refrigeración por 2 horas.',
          'Cuando tenga una consistencia firme, retira de congelación, demolda y <strong>disfruta!</strong>',
        ],
        isCollapse: true
      },
      {
        id: '',
        icon: '/assets/images/titles/cremoso.png',
        title_icon: 'DE WHISKY',
        title: 'CREMOSO DE WHISKY',
        image: '/assets/images/photos/cremoso.png',
        video: '',
        ingredients: [
          '90 gr de Jarabe Tres Riches® 1L',
          '60 gr de Whisky',
          'Canela en polvo',
          '5 o 6 cubitos de hielo'
        ],
        preparation: [
          'Mezcla el <strong>Jarabe Tres Riches®</strong> y el Whisky en una licuadora y agrega hielo.',
          'Decora con canela el borde de la copa previamente humedecido.',
          'Vierte la mezcla en la copa y <strong>disfruta!</strong>',
        ],
        isCollapse: true
      },
      {
        id: '',
        icon: '/assets/images/titles/napoleon.png',
        title_icon: 'NAPOLEÓN',
        title: 'POSTRE NAPOLEÓN',
        image: '/assets/images/photos/napoleon.png',
        video: '',
        ingredients: [
          '1000gr de Jarabe Tres Riches® 1L',
          '70 gr Fécula de maíz',
          '100 gr de mantequilla',
          '120gr (1 Taco) Galletas Dulces'
        ],
        preparation: [
          'Hidrata la fécula con 1⁄4 del <strong>Jarabe Tres Riches®</strong>',
          'Pon en cocción el jarabe restante hasta alcanzar una temperatura de 90°C.',
          'Agrega la mezcla del paso 1 a la cocción del jarabe y deja cocinar por 5 minutos',
          'En una refractaria coloca una capa de galletas y luego una capa de la mezcla. Intercala hasta llenar todo el recipiente.',
          'Temina con una capa de la mezcla y decora al gusto con granola, chocolate o almendras fileteadas. <strong>Sirve y disfruta!</strong>'
        ],
        isCollapse: true
      },
      {
        id: '',
        icon: '/assets/images/titles/batido.png',
        title_icon: 'DE TRES LECHES',
        title: 'DULCE BATIDO DE TRES LECHES',
        image: '/assets/images/photos/batido.png',
        video: '',
        ingredients: [
          'Banano 1⁄2 unidad',
          '40 gr fresas frescas',
          '90 gr Jarabe Tres Riches® 1L',
          '5 o 6 cubos de hielo'
        ],
        preparation: [
          'Licua todos los ingredientes hasta obtener una textura homogénea',
          'Decora con fruta y <strong>disfruta!.</strong>',
        ],
        isCollapse: true
      },
    ]
  }
}
