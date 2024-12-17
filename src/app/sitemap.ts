import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://andrewblair.co.uk',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      images: ['/images/avatar_ab.png']
    },
    {
        url: 'https://andrewblair.co.uk/blog',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
        images: ['/images/avatar_ab.png']
      },
    {
      url: 'https://andrewblair.co.uk/apps',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
      images: ['/images/avatar_ab.png']
    },
    {
      url: 'https://andrewblair.co.uk/apps/eurovision-bingo',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
      images: ['/images/eurovision_bingo_button.gif']
    },
    {
      url: 'https://andrewblair.co.uk/apps/big-finish-generator',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
      images: ['/images/bigFinish/untempered_schism.gif']
    },
    {
      url: 'https://andrewblair.co.uk/credits',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
      images: ['/images/avatar_ab.png']
    },
    
  ]
}