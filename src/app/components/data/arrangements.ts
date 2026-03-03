export interface Arrangement {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  tags: string[];
  flowers: string[];
  occasion: string[];
  colors: string[];
  date: string;
  featured: boolean;
  badge?: string;
}

export const arrangements: Arrangement[] = [
  {
    id: 1,
    name: "Bouquet Primavera Rosa",
    description:
      "Un exquisito bouquet de rosas rosadas y peonías, envuelto en papel kraft con cinta satinada dorada. Ideal para celebrar a esa mujer especial en su día. Incluye flores frescas de temporada y follaje verde premium.",
    price: 120000,
    images: [
      "https://images.unsplash.com/photo-1771134572111-967700a8bb31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1510826079925-c32e6673a0bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    tags: ["Rosas", "Cumpleaños", "Pastel", "Especial"],
    flowers: ["Rosas", "Peonías"],
    occasion: ["Cumpleaños", "Romance"],
    colors: ["Rosado", "Pastel"],
    date: "Día de la Mujer",
    featured: true,
    badge: "⭐ Más vendido",
  },
  {
    id: 2,
    name: "Elegancia Blanca Premium",
    description:
      "Arreglo de orquídeas blancas y rosas marfil sobre base de bambú verde. Un regalo atemporal que transmite pureza y sofisticación. Perfecto para condolencias, aniversarios o simplemente para sorprender.",
    price: 185000,
    images: [
      "https://images.unsplash.com/photo-1712629069699-86c8d9a06050?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1673277741752-4138d8a01c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    tags: ["Orquídeas", "Premium", "Blanco", "Aniversario"],
    flowers: ["Orquídeas"],
    occasion: ["Aniversario", "Condolencias"],
    colors: ["Blanco"],
    date: "Aniversario",
    featured: true,
    badge: "✨ Premium",
  },
  {
    id: 3,
    name: "Sol Radiante",
    description:
      "Alegre bouquet de girasoles frescos con ramas de eucalipto y flores silvestres amarillas. Transmite energía positiva y alegría. Presentado en papel de seda con lazo artesanal.",
    price: 85000,
    images: [
      "https://images.unsplash.com/photo-1760538021426-b7ecf5d2236c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    tags: ["Girasoles", "Cumpleaños", "Amarillo", "Alegre"],
    flowers: ["Girasoles"],
    occasion: ["Cumpleaños", "Gracias"],
    colors: ["Amarillo"],
    date: "Cumpleaños",
    featured: false,
  },
  {
    id: 4,
    name: "Jardín Pastel Mixto",
    description:
      "Mezcla armoniosa de flores de temporada en tonos pasteles: tulipanes, ranúnculos y campanillas. Un arreglo versátil, alegre y delicado que llena cualquier espacio de color y vida.",
    price: 95000,
    images: [
      "https://images.unsplash.com/photo-1618119089596-03403f29a6b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    tags: ["Mixtas", "Pastel", "Graduación", "Primavera"],
    flowers: ["Mixtas", "Tulipanes"],
    occasion: ["Graduación", "Cumpleaños"],
    colors: ["Pastel", "Multicolor"],
    date: "Día de la Mujer",
    featured: true,
    badge: "🌸 Mes de la Mujer",
  },
  {
    id: 5,
    name: "Amor Eterno Rojo",
    description:
      "Clásico e irresistible: 12 rosas rojas largas de tallo en presentación boutique con papel negro y lazo satinado rojo. El regalo perfecto para expresar amor profundo y pasión.",
    price: 145000,
    images: [
      "https://images.unsplash.com/photo-1771134571934-1bc0b0dd94e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    tags: ["Rosas", "Romance", "Rojo", "Amor"],
    flowers: ["Rosas"],
    occasion: ["Romance"],
    colors: ["Rojo"],
    date: "Amor y Amistad",
    featured: false,
  },
  {
    id: 6,
    name: "Serenidad Peonías",
    description:
      "Generoso bouquet de peonías rosadas con gypsophila y hojas de salvia. Elegante y romántico, ideal para regalar en el Día de la Madre o celebrar a alguien muy especial.",
    price: 160000,
    images: [
      "https://images.unsplash.com/photo-1510826079925-c32e6673a0bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1771134572111-967700a8bb31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    tags: ["Peonías", "Rosado", "Madre", "Elegante"],
    flowers: ["Peonías"],
    occasion: ["Romance", "Cumpleaños"],
    colors: ["Rosado"],
    date: "Día de la Madre",
    featured: true,
    badge: "💕 Favorito",
  },
  {
    id: 7,
    name: "Naturaleza Silvestre",
    description:
      "Composición artística con flores silvestres, ramas secas doradas y flores secas preservadas. Un arreglo bohemio y único que perdura en el tiempo como decoración.",
    price: 110000,
    images: [
      "https://images.unsplash.com/photo-1758749396186-b7f5ab9c3a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    tags: ["Mixtas", "Decoración", "Natural", "Rustico"],
    flowers: ["Mixtas"],
    occasion: ["Decoración", "Gracias"],
    colors: ["Multicolor"],
    date: "Cumpleaños",
    featured: false,
  },
  {
    id: 8,
    name: "Lujo en Blanco Total",
    description:
      "Arreglo de alto impacto visual: rosas blancas, lirios y callas en jarrón de cristal premium. Diseñado para espacios exclusivos o para regalar con toda la elegancia.",
    price: 250000,
    images: [
      "https://images.unsplash.com/photo-1673277741752-4138d8a01c7b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1712629069699-86c8d9a06050?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    ],
    tags: ["Rosas", "Blanco", "Premium", "Lujoso"],
    flowers: ["Rosas", "Orquídeas"],
    occasion: ["Aniversario", "Condolencias"],
    colors: ["Blanco"],
    date: "Aniversario",
    featured: false,
    badge: "💎 Exclusivo",
  },
];
