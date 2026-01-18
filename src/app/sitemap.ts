import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://andrewblair.co.uk",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
      images: [
        "https://andrewblair.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar_ab.d7ee2f77.png&amp;w=256&amp;q=75",
      ],
    },
    {
      url: "https://andrewblair.co.uk/blog",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [
        "https://andrewblair.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar_ab.d7ee2f77.png&amp;w=256&amp;q=75",
      ],
    },
    {
      url: "https://andrewblair.co.uk/apps",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
      images: [
        "https://andrewblair.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar_ab.d7ee2f77.png&amp;w=256&amp;q=75",
      ],
    },
    {
      url: "https://andrewblair.co.uk/apps/eurovision-bingo",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
      images: [
        "https://andrewblair.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Feurovision_bingo_button.f490ee4e.gif&amp;w=640&amp;q=75",
      ],
    },
    {
      url: "https://andrewblair.co.uk/apps/big-finish-generator",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
      images: [
        "https://andrewblair.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Funtempered_schism.7214938d.gif&amp;w=1080&amp;q=75",
      ],
    },
    {
      url: "https://andrewblair.co.uk/apps/sci-fi-name-generator",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
      images: [
        "https://andrewblair.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fscifinamegen.a7b2d54a.png&w=3840&q=75",
      ],
    },
    {
      url: "https://andrewblair.co.uk/apps/light",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
      images: [
        "https://andrewblair.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsad-light.5f6aeb92.png&w=1080&q=75",
      ],
    },
    {
      url: "https://andrewblair.co.uk/apps/drwhoquiz",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
      images: [
        "https://andrewblair.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FDoctor-Who-Quiz-Logo.db1551df.png&w=3840&q=75",
      ],
    },
    {
      url: "https://andrewblair.co.uk/apps/poetremixer",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
      images: [
        "https://andrewblair.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FpoetrRemixer.14b90c1e.png&w=1200&q=75",
      ],
    },
    {
      url: "https://andrewblair.co.uk/apps/rap-name-generator",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
      images: [
        "https://andrewblair.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frng.074bce04.png&w=1200&q=75",
      ],
    },
    {
      url: "https://andrewblair.co.uk/apps/wesley-snopes",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
      images: [
        "https://andrewblair.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbutton_wesley.adfd84a7.png&w=3840&q=75",
      ],
    },
    {
      url: "https://andrewblair.co.uk/credits",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
      images: [
        "https://andrewblair.co.uk/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar_ab.d7ee2f77.png&amp;w=256&amp;q=75",
      ],
    },
  ];
}
