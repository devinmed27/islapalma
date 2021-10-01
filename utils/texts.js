import article1Path from "../public/static/assets/article1.png";
import article2Path from "../public/static/assets/article2.png";
import article3Path from "../public/static/assets/article3.png";
import article4Path from "../public/static/assets/article4.png";
import icon1 from "../public/static/assets/user.png";
import icon2 from "../public/static/assets/fan.png";
import icon3 from "../public/static/assets/bath.png";
import icon4 from "../public/static/assets/eye.png";
import icon5 from "../public/static/assets/closet.png";
import icon6 from "../public/static/assets/bed.png";
import icon7 from "../public/static/assets/tv.png";
import bannerPath1 from "../public/static/assets/bannerRoom1.jpg";
import imgPath1 from "../public/static/assets/imgRoom1.jpg";
import bannerPath2 from "../public/static/assets/bannerRoom2.jpg";
import imgPath2 from "../public/static/assets/imgRoom2.jpg";
import bannerPath3 from "../public/static/assets/bannerRoom3.jpg";
import imgPath3 from "../public/static/assets/imgRoom3.jpg";
import bannerPath4 from "../public/static/assets/bannerRoom4.jpg";
import imgPath4 from "../public/static/assets/imgRoom4.jpg";
import bannerPath5 from "../public/static/assets/bannerRoom5.jpg";
import imgPath5 from "../public/static/assets/imgRoom5.jpg";
import icon2Path from "../public/static/assets/surf-icon.png";
import icon4Path from "../public/static/assets/sub-icon.png";
import icon3Path from "../public/static/assets/snorkel-icon.png";
import icon1Path from "../public/static/assets/trees-icon.png";
import icon5Path from "../public/static/assets/party-icon.png";
import card2Path from "../public/static/assets/surf.jpg";
import card4Path from "../public/static/assets/sub.jpg";
import card3Path from "../public/static/assets/snorkel.jpg";
import card1Path from "../public/static/assets/fla.jpg";
import card5Path from "../public/static/assets/party.jpg";
import card1PathP from "../public/static/assets/plan1-image.jpg";
import banner1Path from "../public/static/assets/plan1-banner.jpg";
import iconA1Path from "../public/static/assets/boat-icon.png";
import iconA2Path from "../public/static/assets/cocktail-icon.png";
import iconA3Path from "../public/static/assets/lunch-icon.png";
import iconA4Path from "../public/static/assets/natural-icon.png";
import pricePath from "../public/static/assets/money-icon.png";
import card2PathP from "../public/static/assets/plan2-image.jpg";
import banner2Path from "../public/static/assets/plan2-banner.jpg";
import card3PathP from "../public/static/assets/plan3-image.jpg";
import banner3Path from "../public/static/assets/plan3-banner.jpg";
import location_1 from "../public/static/assets/location-info.png";
import location_2 from "../public/static/assets/location-info2.jpg";
import birthday from "../public/static/assets/birthday.png";
import anniversary from "../public/static/assets/anniversary.png";

const homeTexts = [
  {
    title: "Naturaleza",
    text: "Tenemos el privilegio de ver avifauna en nuestra isla, disfruta de su variedad y los colores de las aves y vegetación",
    align: "center",
    imagePath: article1Path,
  },
  {
    title: "Experiencias",
    text: "Caminatas ecológicas, ejercicio al aire libre, buceo, Kayak y una exquisita gastronomía; son algunas de las experiencias que tenemos para ti.",
    align: "flex-end",
    imagePath: article2Path,
  },
  {
    title: "Playa",
    text: "Conéctate con tus sentidos, escucha los sonidos del mar y las aves, además disfruta de unos paisajes que no olvidarás.",
    align: "flex-start",
    imagePath: article3Path,
  },
  {
    title: "Privacidad",
    text: "Vive la experiencia de estar en una de las mejores playas privadas de nuestro país, brindándote tranquilidad y exclusividad.",
    align: "center",
    imagePath: article4Path,
  },
]

const dataRooms = [
  {
    title: "GARZAS",
    imgPath: imgPath1,
    bannerPath: bannerPath1,
    description:
      "Aquí encontraras un espacio de conexión con la naturaleza, con los que amas y contigo mismo. Este lugar esta diseñado para tu descanso y diversión con toda la magia que trae un ambiente caribeño.",
    features: [
      {
        iconPath: icon1,
        text: "Capacidad para 2 personas",
      },
      {
        iconPath: icon2,
        text: "Aire acondicionado - Ventilador (6 Pm- 6 Am)",
      },
      {
        iconPath: icon3,
        text: "Baño privado",
      },
      {
        iconPath: icon4,
        text: "Vista a la reserva ó al interior",
      },
      {
        iconPath: icon5,
        text: "Clóset",
      },
      {
        iconPath: icon6,
        text: "Cama doble ó cama Queen size",
      },
    ],
  },
  {
    title: "GAVIOTAS",
    imgPath: imgPath2,
    bannerPath: bannerPath2,
    description:
      "Hermosa y comoda habitacion dotada de todo lo que necesitas para un placido descanso en medio de la naturaleza, vén y disfruta de una experiencia inolvidables.",
    features: [
      {
        iconPath: icon1,
        text: "Capacidad para 2 personas",
      },
      {
        iconPath: icon2,
        text: "Aire acondicionado - Ventilador (6 Pm- 6 Am)",
      },
      {
        iconPath: icon3,
        text: "Baño privado",
      },
      {
        iconPath: icon4,
        text: "Vista al mar (muelle)",
      },
      {
        iconPath: icon7,
        text: "Tv satelital",
      },
      {
        iconPath: icon6,
        text: "Cama king",
      },
    ],
  },
  {
    title: "PELICANOS",
    imgPath: imgPath3,
    bannerPath: bannerPath3,
    description:
      "Aquí encontraras un espacio de conexión con la naturaleza, con los que amas y contigo mismo. Este lugar esta diseñado para tu descanso y diversión con toda la magia que trae un ambiente caribeño.",
    features: [
      {
        iconPath: icon1,
        text: "Capacidad para 3 personas",
      },
      {
        iconPath: icon2,
        text: "Aire acondicionado - Ventilador (6 Pm- 6 Am)",
      },
      {
        iconPath: icon3,
        text: "Baño privado",
      },
      {
        iconPath: icon4,
        text: "Vista a la reserva ó al interior",
      },
      {
        iconPath: icon5,
        text: "Clóset",
      },
      {
        iconPath: icon6,
        text: "Cama queen más una cama sencilla",
      },
    ],
  },
  {
    title: "GUACAMAYOS",
    imgPath: imgPath4,
    bannerPath: bannerPath4,
    description:
      "Vén y vive los mejores momentos al lado de los que amas. Drisfruta con tu familia  todas las maravillas que nos ofrece el mar.",
    features: [
      {
        iconPath: icon1,
        text: "Capacidad para 4 personas",
      },
      {
        iconPath: icon2,
        text: "Aire acondicionado - Ventilador (6 Pm- 6 Am)",
      },
      {
        iconPath: icon3,
        text: "Baño privado",
      },
      {
        iconPath: icon4,
        text: "Vista a la reserva ó al interior",
      },
      {
        iconPath: icon5,
        text: "Clóset",
      },
      {
        iconPath: icon6,
        text: "Cama queen y 2 camas sencillas",
      },
    ],
  },
  {
    title: "FLAMINGOS",
    imgPath: imgPath5,
    bannerPath: bannerPath5,
    description:
      "Aquí encontraras un espacio de conexión con la naturaleza, con los que amas y contigo mismo. Este lugar esta diseñado para tu descanso y diversión con toda la magia que trae un ambiente caribeño.",
    features: [
      {
        iconPath: icon1,
        text: "Capacidad para 5 personas",
      },
      {
        iconPath: icon2,
        text: "Aire acondicionado - Ventilador (6 Pm- 6 Am)",
      },
      {
        iconPath: icon3,
        text: "Baño privado",
      },
      {
        iconPath: icon4,
        text: "Vista a la reserva ó al interior",
      },
      {
        iconPath: icon5,
        text: "Clóset",
      },
      {
        iconPath: icon6,
        text: "Cama queen y 3 camas sencillas",
      },
    ],
  },
];

const cardsInfo = [
  {
    title: "AVENTURA EN EL BIO-PARQUE",
    text: "DISFURTARÁS UN RECORRIDO POR LA RESERVA DONDE PORDRÁS DISFRUTAR DE AVIVAMIENTO DE AVES, Y ANIMALES QUE HABITAN EN LA ISLA.",
    service: "SERVICIO GRATUITO, AGENDA TU CITA EN LA RECEPCIÓN",
    imagePath: card1Path,
    iconPath: icon1Path,
  },
  {
    title: "PADDLE O KAYAK",
    text: "UN EXCELENTE DEPORTE PARA PRACTICAR CARDIO Y DISFRUTAR DEL MAL. NO OLVIDES AGENDAR TEMPRANO EN LA PLAYA, PARA QUE TE ASIGNEN EL TIEMPO DE USO.",
    service: "SERVICIO GRATUITO, AGENDA TU CITA EN LA RECEPCIÓN",
    imagePath: card2Path,
    iconPath: icon2Path,
  },
  {
    title: "SNORKEL",
    text: "SI TE GUSTAN LOS DEPORTES ACUÁTICOS DE BAJO RIESGO, NO OLVIDES TRAER TU KIT DE SNORKERL, PARA QUE PUEDAS APRECIAL TODA LA VIDA SALVAJW QUE HABITA EN LA ISLA, YA QUE CONTAMOS CON UNA HERMOSA BARRERA CORALINA.",
    service: "SERVICIO GRATUITO",
    imagePath: card3Path,
    iconPath: icon3Path,
  },
  {
    title: "BUCEO",
    text: "DÍA COMPLETO DE PASEO POR EL ARCHIPIÉLAGO DE SAN BERNARDO CON INDUCCIÓN BÁSICA DE BUCEO Y 2 INMERSIONES EN PUNTOS DIFERENTES. DURACIÓN APROXIMADA 6 HORAS.",
    service: "SERVICIO CON COSTO ADICIONAL",
    imagePath: card4Path,
    iconPath: icon4Path,
  },
  {
    title: "CELEBRACIONES",
    text: "CONTAMOS CON DIRERENTES PAQUETES DE DECORACIONES PARA QUE SORPRENDAS EN TODA OCASIÓN A ESA PERSONA ESPECIAL.",
    service: "VER PAQUETES DE DECORACIÓN EN PLANES",
    imagePath: card5Path,
    iconPath: icon5Path,
  },
];

const cardsInfoP = [
  {
    title: "PASADÍA VIP",
    imagePath: card1PathP,
    bannerPath: banner1Path,
    subtitle: "Relaja tus sentidos y recupera tu energía",
    features: [
      {
        iconPath: iconA1Path,
        text: "Traslado náutico desde Tolú"
      },
      {
        iconPath: iconA2Path,
        text: "Cocktail de bienvenida"
      },
      {
        iconPath: iconA3Path,
        text: "Almuerzo Gourmet"
      },
      {
        iconPath: iconA4Path,
        text: "Visita al Bioparque"
      }
    ],
    description: "Disfruta de la playa de arena blanca y agua turquesa ideal para prácticas de snorkeling por sus paisajes submarinos la cual recomendamos no olvides en traer tu kit personal",
    info: "NO INCLUYE: Bebidas extras, servicio de kayak o paddle, traslados nauticos no especificados.",
    price1: 190000,
    price2: 145000,
    pricePath: pricePath
  },
  {
    title: "PLAN ENAMORADOS",
    imagePath: card2PathP,
    bannerPath: banner2Path,
    subtitle: "Descubriendo juntos lugares asombrosos",
    features: [
      {
        iconPath: iconA1Path,
        text: "Alojamiento habitación las garzas (1 noche)"
      },
      {
        iconPath: iconA2Path,
        text: "Cocktail de bienvenida"
      },
      {
        iconPath: iconA3Path,
        text: "Almuerzo, cena romantica y desayuno"
      },
      {
        iconPath: iconA4Path,
        text: "Disfrute de todas nuestas instalaciones"
      }
    ],
    description: "Disfruta de una velada romántica para dos en un espacio privado, con cena a la carta, botella de vino tinto o blanco y postre",
    info: "NO INCLUYE: Bebidas y alimentación extras, traslados náuticos ni activiades no especificadas.",
    price1: 1519000,
    price2: "",
    pricePath: pricePath
  },
  {
    title: "PLAN BODAS",
    imagePath: card3PathP,
    bannerPath: banner3Path,
    subtitle: "Sabemos de la importancia de esta fecha para ustedes es por ello que nos complace ofrecer nuestro servicio para el gran día",
    features: [
      {
        iconPath: "",
        text: "En Isla palma contamos con un ambiente romántico  diseñado para crear experiencias fascinantes e inolvidables y hacer realidad la boda que siempre soñaste."
      },
      {
        iconPath: "",
        text: "Déjate atrapar por la magia de Isla palma."
      },
      {
        iconPath: "",
        text: "*Solo aceptamos solicitudes de Bodas para temporada baja que comprende, no aplica para puentes festivos, Semana Santa y  después del 15 de Diciembre hasta el 16 de Enero."
      },
      {
        iconPath: "",
        text: "Contáctanos para más información."
      }
    ],
    description: "",
    info: "",
    price1: "",
    price2: "",
    pricePath: ""
  }
];

const cardsInfoP2 = [
  {
    title: "CUMPLEAÑOS",
    imagePath: birthday,
    description: "Por que los mejores momentos, merecen los mejores detalles. Por compras de paquete de cumpleaños (torta+ Champagne JP Chenet) te obsequiamos la decoracion de la mesa.",
    price1: 165000,
  },
  {
    title: "ANIVERSARIO",
    imagePath: anniversary,
    description: "Cena en un ambiente reservado para dos. Con la temática que desees (Aniversario, Cumpleaños, Pedida de Mano), tenemos un menú preparado a la Carta que podrás seleccionar dos platos principales, acompañado por una botella de Vino Tinto o Blanco (origen nacional) según selección, postre alusivo. Decoración en la habitación.",
    price1: 249900,
  },
];

const locationInfo = [
  {
    title: "Para los navegantes",
    imgPath: location_1,
    subtitle: "Desde Cartagena",
    texts: [
      {
        text:
          "Te recomendamos que la primera noche la tomes en Cartagena, ya que la salida a la Isla es temprano.",
      },
      {
        text: "Duración del trayecto: 2 horas 30 Min:",
      },
      {
        text: "Ubicación: Muelle de la Bodeguita.",
      },
      {
        text:
          "Hora: Debes presentarte a las 6:45 AM o 7:45 AM (dependiendo el dia de operacion, esa información se te brinda cuando realices la reserva con las especificaciones del servicio).",
      },
      {
        text:
          "Estos servicios se deben reservar como mínimo 72 horas antes de su llegada, ya que están sujetos a cupos limitados. Reservas: +57 304 3499318 - +57 302 3200353.",
      },
      {
        text: "Valor: $150.000 pesos por trayecto, por persona.",
      },
      {
        text:
          "** Recomendación reservar con anterioridad los dos trayectos, el pago de estos servicios es directamente con los operadores.",
      },
    ],
    titleSct2: "Desde Isla Palma a Tolú",
    textsSct2: [
      {
        text:
          "1. Salida de las lanchas 3:30 PM servicios todos los días valor $55.000 por persona.",
      },
      {
        text:
          "2. Salida especial 12:30 PM. Todos los días reserva con anterioridad cupos limitados comunícate 3126073492 - 318 2830001. Valor $60.000 por persona",
      },
      {
        text:
          "** Recomendación reservar con anterioridad los dos trayectos, el pago de estos servicios es directamente con los operadores.",
      },
    ],
  },
  {
    title: "Viaja por tierra hasta Tolú",
    imgPath: location_1,
    subtitle: "Desde Tolú",
    texts: [
      {
        text:
          "Se opera mínimo con 3 pasajeros, se combina este servicio con un traslado terrestre carros o vans con aire acondicionado y buen servicio. Recogida en los hoteles a partir de las 5:00 AM, turistas hospedados en Bocagrande, zona norte y centro histórico) (Duración 2 horas). Traslado terrestre hasta Tolú y luego transbordo en lancha de 30 min hasta Isla Palma.",
      },
    ],
    titleSct2: "Desde Montería o Corozal a Isla Palma",
    textsSct2: [
      {
        text:
          "Desde tu ciudad de origen puedes tomar un vuelo nacional o internacional hasta el aeropuerto de Montería ó Corozal.",
      },
      {
        text: "Traslado aeropuerto - Tolú: 3126073492 - 318 2830001.",
      },
      {
        text:
          "Montería a Tolú (duración trayecto 2 horas). Corozal a Tolú (duración trayecto 1h 30 m). Ten en cuenta estos trayectos para tu conexión con la lancha. Duración del trayecto náutico 40 minutos.",
      },
      {
        text:
          "Salida de las lanchas 8:30 AM servicios todos los días valor $55.000 por persona, existen diferentes opciones de club náuticos que te pueden brindar este servicio.",
      },
      {
        text:
          "Salida especial 10:30 AM. Todos los días reserva con anterioridad cupos limitados comunícate 3126073492 - 318 2830001. Valor $55.000 por persona.",
      },
      {
        text:
          " ** Recomendación reservar con anterioridad los dos trayectos, el pago de estos servicios es directamente con los operadores.",
      },
    ],
    titleSct3: "Desde Isla Palma a Tolú",
    textsSct3: [
      {
        text:
          "1. Salida de las lanchas 3:30 PM servicios todos los días valor $55.000 por persona.",
      },
      {
        text:
          "2. Salida especial 12:30 PM. Todos los días reserva con anterioridad cupos limitados comunícate 3126073492 - 318 2830001. Valor $60.000 por persona",
      },
      {
        text:
          "** Recomendación reservar con anterioridad los dos trayectos, el pago de estos servicios es directamente con los operadores.",
      },
    ],
  },
];

module.exports = { homeTexts, dataRooms, cardsInfo, cardsInfoP, locationInfo, cardsInfoP2 }