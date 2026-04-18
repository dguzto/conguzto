export interface ArticleData {
  slug: string;
  title: string;
  subtitle: string;
  industry: string;
  country: string;
  date: string;
  number: number;
  content: string;
}

export const articles: Record<string, ArticleData[]> = {
  es: [
    {
      slug: "payhawk",
      title: "Así haría crecer Payhawk",
      subtitle: "Gestión de gastos con IA que está creciendo en Europa. Qué haría yo para acelerar.",
      industry: "Spend management",
      country: "Bulgaria",
      date: "2026-04-24",
      number: 3,
      content: "*Artículo en desarrollo. Próximamente.*",
    },
    {
      slug: "lemlist",
      title: "Así haría crecer Lemlist",
      subtitle: "Una plataforma de sales engagement con un producto diferenciado y un canal de contenido que pocos aprovechan.",
      industry: "Sales engagement",
      country: "Francia",
      date: "2026-04-17",
      number: 2,
      content: "*Artículo en desarrollo. Próximamente.*",
    },
    {
      slug: "amenitiz",
      title: "Así haría crecer Amenitiz",
      subtitle: "Un SaaS hotelero con producto fuerte y marketing que no le hace justicia.",
      industry: "SaaS hotelero",
      country: "España",
      date: "2026-04-10",
      number: 1,
      content: `## El negocio en 90 segundos

Amenitiz es un SaaS todo-en-uno para hoteles independientes y pequeñas cadenas. Web, motor de reservas, channel manager, pagos. Fundado en Barcelona, presente en 8 países.

## Lo que ya funciona

1. **Producto sólido** — consolidar 5 herramientas en una es una propuesta clara.
2. **SEO en mercados secundarios** — dominan búsquedas en Francia e Italia.
3. **Pricing transparente** — los precios están en la web, sin "contacta con ventas".

## Los levers

### Messaging
El hero dice "the all-in-one" pero no dice para quién. Un hotelero independiente y una cadena de 20 propiedades tienen problemas distintos.

### Journey
La web tiene 3 CTAs compitiendo: demo, prueba gratis, y contacto. Hay que elegir uno.

### Retención
No hay contenido post-signup. El onboarding es un email de bienvenida y silencio.

## Movimiento #1

Si solo pudiera hacer una cosa esta semana: reescribir el hero para hablar del dolor del hotelero independiente, no de las features del producto.

## La lección

¿Tu web dice lo que haces o dice por qué le importa a tu cliente?`,
    },
  ],
  en: [
    {
      slug: "payhawk",
      title: "How I'd grow Payhawk",
      subtitle: "AI-powered spend management growing across Europe. What I'd do to accelerate.",
      industry: "Spend management",
      country: "Bulgaria",
      date: "2026-04-24",
      number: 3,
      content: "*Article in progress. Coming soon.*",
    },
    {
      slug: "lemlist",
      title: "How I'd grow Lemlist",
      subtitle: "A sales engagement platform with a differentiated product and an underused content channel.",
      industry: "Sales engagement",
      country: "France",
      date: "2026-04-17",
      number: 2,
      content: "*Article in progress. Coming soon.*",
    },
    {
      slug: "amenitiz",
      title: "How I'd grow Amenitiz",
      subtitle: "A hotel SaaS with a strong product and marketing that doesn't do it justice.",
      industry: "Hotel SaaS",
      country: "Spain",
      date: "2026-04-10",
      number: 1,
      content: `## The business in 90 seconds

Amenitiz is an all-in-one SaaS for independent hotels and small chains. Website, booking engine, channel manager, payments. Founded in Barcelona, operating in 8 countries.

## What already works

1. **Solid product** — consolidating 5 tools into one is a clear proposition.
2. **SEO in secondary markets** — they dominate searches in France and Italy.
3. **Transparent pricing** — prices are on the website, no "contact sales".

## The levers

### Messaging
The hero says "the all-in-one" but doesn't say for whom.

### Journey
The website has 3 competing CTAs: demo, free trial, and contact. Pick one.

### Retention
No post-signup content. Onboarding is a welcome email and silence.

## Move #1

If I could only do one thing this week: rewrite the hero to speak to the independent hotelier's pain, not the product's features.

## The lesson

Does your website say what you do, or does it say why your customer should care?`,
    },
  ],
};
