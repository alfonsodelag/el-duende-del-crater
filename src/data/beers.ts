export interface Beer {
  name: string;
  slug: string;
  style: string;
  shortDescription: string;
  story?: string;
  abv?: number;
  ibu?: number;
  tastingNotes?: string[];
  aromaNotes?: string[];
  pairings?: string[];
  formats?: string[];
  availability?: string;
  batch?: string;
  limitedEdition?: boolean;
  featured?: boolean;
  heroImage: string;
  labelImage?: string;
  accentColor?: string;
  orderUrl?: string;
}

export const beers: Beer[] = [
  {
    name: "DEMO Cráter Dorado",
    slug: "demo-crater-dorado",
    style: "Estilo por confirmar",
    shortDescription:
      "TODO: reemplazar con una cerveza real. Tarjeta demo para mostrar cómo vivirá el catálogo.",
    availability: "Datos oficiales pendientes",
    batch: "DEMO",
    limitedEdition: false,
    featured: true,
    heroImage: "",
    accentColor: "#f19d27",
  },
  {
    name: "DEMO Malta Traviesa",
    slug: "demo-malta-traviesa",
    style: "Estilo por confirmar",
    shortDescription:
      "TODO: reemplazar con nombre, estilo, notas y disponibilidad confirmadas por el brewer.",
    availability: "Consulta disponibilidad",
    batch: "DEMO",
    limitedEdition: true,
    featured: true,
    heroImage: "",
    accentColor: "#d1641a",
  },
  {
    name: "DEMO Niebla del Valle",
    slug: "demo-niebla-del-valle",
    style: "Estilo por confirmar",
    shortDescription:
      "TODO: añadir datos reales antes de publicar como producto oficial.",
    availability: "Puntos de venta por confirmar",
    batch: "DEMO",
    limitedEdition: false,
    featured: true,
    heroImage: "",
    accentColor: "#8e4525",
  },
] satisfies Beer[];

export const featuredBeers = beers.filter((beer) => beer.featured);
