import { IProduct } from "../interface";

export const PRODUCT_MOCK: IProduct[] = [
  {
    title: "205 р. за 1 кг",
    id: 1,
    category: "Голень куриная",
    images: {
      main: "https://myasnoiprivoz.ru/uploads/63fb156246609/middle/438dce953605d9f26d4cc18d4337134f_16_37.jpg",
      all: [
        "https://myasnoiprivoz.ru/uploads/63fb156246609/middle/438dce953605d9f26d4cc18d4337134f_16_37.jpg",
        "https://ciplenok.com/content/uploads/images/cypljata-broylery-kobb-500.jpg",
        "https://agrovektor.com/uploads/gallery/13671/product/510541-0.jpg",
        "https://krasivosti.pro/uploads/posts/2021-12/1640259562_14-krasivosti-pro-p-tsiplyata-broileri-kobb-ptitsi-krasivo-fot-15.jpg",
      ],
    },
    seller: {
      name: "Размик",
      phone: "+9788828828",
      email: "razmik.unanyan@mail.ru",
    },
    tags: ["мясо", "годень", "курица"],
    descriptions:"Это нежное и сочное мясо на двух косточках. Куриная голень без кожи считается диетическим продуктом."
  },
  {
    title: "199 р. за 1 кг",
    id: 2,
    category: "Окорочка куриные ",
    images: {
      main: "https://myasnoiprivoz.ru/uploads/633453d239614/okorochka.webp",
      all: [
        "https://myasnoiprivoz.ru/uploads/633453d239614/okorochka.webp",
        "https://files.cmlt.ru/getUserImage?id=24454336",
        "https://44.img.avito.st/image/1/1.udFVw7a6FThjatc9K5XoqZFgEzzh4B365GARMOloFw.z8kQXOABHG6w015oDbmgtutUOMNQ0Ryf_QBxV3Uc6Cs",
      ],
    },
    seller: {
      name: "Размик",
      phone: "+9788828828",
      email: "razmik.unanyan@mail.ru",
    },
    tags: ["мясо", "окорочка", "курица"],
    descriptions:"Считается наименее полезной частью курицы. Вкус куриного окорочка зависит от способа приготовления. Отваренный без специй куриный окорок имеет нежный сочный вкус и нейтральный запах."
  },

  {
    title: "159 р. за 1 кг",
    id: 3,
    category: "Куриные крылья",
    images: {
      main: "https://myasnoiprivoz.ru/uploads/63f3058473517/middle/3_31_11.jpg",
      all: [
        "https://myasnoiprivoz.ru/uploads/63f3058473517/middle/3_31_11.jpg",
        "https://pro-kur.ru/wp-content/uploads/2021/03/cobb-500-broiler-16.jpg",
        "https://avamarket.com.ua/image/cache/catalog/image/catalog/blog/boleznikrossa.webp",
      ],
    },
    seller: {
      name: "Размик",
      phone: "+9788828828",
      email: "razmik.unanyan@mail.ru",
    },
    tags: ["мясо", "окорочка", "курица"],
    descriptions:"Это делают в месте, где плечевая кость соединяется с позвоночником. Крыло имеет три части: плечевая, локтевая часть и кисть. Отварные куриные крылышки нежные и сочные на вкус. Можно также их пожарить, сделав хрустящими, острыми и ароматными.",
  },

  {
    title: "269 р. за 1 кг",
    id: 4,
    category: "Грудка куриная без кожи",
    images: {
      main: "https://myasnoiprivoz.ru/uploads/63fb1d6060a4c/middle/shutterstock_283507391-scaled-1_50_50.jpg",
      all: [
        "https://myasnoiprivoz.ru/uploads/63fb1d6060a4c/middle/shutterstock_283507391-scaled-1_50_50.jpg",
        "https://files.cmlt.ru/getUserImage?id=24454336",
        "https://44.img.avito.st/image/1/1.udFVw7a6FThjatc9K5XoqZFgEzzh4B365GARMOloFw.z8kQXOABHG6w015oDbmgtutUOMNQ0Ryf_QBxV3Uc6Cs",
      ],
    },
    seller: {
      name: "Размик",
      phone: "+9788828828",
      email: "razmik.unanyan@mail.ru",
    },
    tags: ["мясо", "грудка", "курица"],
    descriptions:
      "Диетический продукт с минимальным содержанием жиров, подходит для детского питания. Мясо имеет светло-розовый цвет, при приготовлении становится белым."
  },
  {
    title: "400 р. за 1 кг",
    id: 5,
    category: "Курица домашняя",
    images: {
      main: "https://rassvetagro.ru/wp-content/uploads/2020/07/kurica-tushka.jpg",
      all: [
        "https://rassvetagro.ru/wp-content/uploads/2020/07/kurica-tushka.jpg",
        "https://nashe-vse.com/image/cache/000000582_tushka_tapaka-750x750.png",
      ],
    },
    seller: {
      name: "Размик",
      phone: "+9788828828",
      email: "razmik.unanyan@mail.ru",
    },
    tags: ["мясо", "кобб"],
    descriptions:
      "Кобб 500 — кросс бройлерного направления. Впервые вывели таких кур в Чехии, и в дальнейшем кроссы " +
      "этой разновидности приобрели популярность в самых разных странах, в том числе на просторах СНГ.",
  },
];
