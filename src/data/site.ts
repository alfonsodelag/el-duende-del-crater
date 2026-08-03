export const siteConfig = {
  name: "El Duende del Cráter",
  location: "El Valle, Panamá",
  description:
    "Cervezas artesanales elaboradas en pequeños lotes en El Valle, Panamá. Descubre las creaciones, la historia y los próximos lanzamientos de El Duende del Cráter.",
  canonicalUrl: "https://elduendedelcrater.com/",
  whatsapp: "",
  instagram: "",
  email: "",
  logo: "/images/brand/duende-logo.png",
  heroImage: "/images/gallery/duende-beer.png",
  teamImage: "/images/gallery/duende-team.png",
  // TODO: completar WhatsApp, Instagram y email cuando el propietario los comparta.
};

export const navigation = [
  { label: "Cervezas", href: "#cervezas" },
  { label: "La leyenda", href: "#leyenda" },
  { label: "El brewer", href: "#brewer" },
  { label: "Dónde conseguirlas", href: "#donde" },
  { label: "Para negocios", href: "#negocios" },
  { label: "Contacto", href: "#contacto" },
] as const;

const personalWhatsappMessage = "Hola El Duende del Crater, quiero consultar disponibilidad de cervezas.";
const businessWhatsappMessage = "Hola El Duende del Crater, quiero informacion para un negocio o colaboracion.";
const whatsappBaseUrl = siteConfig.whatsapp ? `https://wa.me/${siteConfig.whatsapp}` : "#contacto";

export const whatsappLinks = {
  personal: siteConfig.whatsapp
    ? `${whatsappBaseUrl}?text=${encodeURIComponent(personalWhatsappMessage)}`
    : "#contacto",
  business: siteConfig.whatsapp
    ? `${whatsappBaseUrl}?text=${encodeURIComponent(businessWhatsappMessage)}`
    : "#contacto",
  // TODO: completar siteConfig.whatsapp para activar enlaces wa.me reales.
};

export const brewingSteps = [
  {
    title: "Idea",
    text: "Una receta empieza con una chispa: sabor, clima, antojo o una historia del cráter.",
  },
  {
    title: "Receta",
    text: "Malta, lúpulo y levadura se ajustan en pequeño formato antes de crecer el lote.",
  },
  {
    title: "Maceración",
    text: "El grano libera cuerpo y dulzor con paciencia, temperatura y atención al detalle.",
  },
  {
    title: "Hervido",
    text: "Aparecen amargor, aroma y carácter, sin convertir el proceso en teatro técnico.",
  },
  {
    title: "Fermentación",
    text: "La levadura hace su trabajo lento mientras el Duende se asoma a revisar.",
  },
  {
    title: "Envasado",
    text: "El lote queda listo para consulta, ferias, puntos de venta o próximos lanzamientos.",
  },
] as const;

export const socialTiles = [
  {
    label: "Feria",
    title: "El puesto del Duende",
    image: siteConfig.teamImage,
    alt: "Dos personas atendiendo el puesto de El Duende del Cráter en una feria",
  },
  {
    label: "Lote",
    title: "Cerveza servida en El Valle",
    image: siteConfig.heroImage,
    alt: "Vaso de cerveza artesanal frente a un jardín soleado",
  },
  {
    label: "Marca",
    title: "Emblema del cráter",
    image: siteConfig.logo,
    alt: "Logo redondo de El Duende del Cráter",
  },
] as const;
