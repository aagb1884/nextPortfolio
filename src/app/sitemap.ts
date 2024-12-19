import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://andrewblair.co.uk',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      images: ['https://www.dropbox.com/scl/fi/9sw4tmy8bmq17l24ihq1e/avatar_ab.png?rlkey=7p0inazbgfqkymlosot6gkmbh&st=jdlv72hp&dl=0']
    },
    {
        url: 'https://andrewblair.co.uk/blog',
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
        images: ['https://www.dropbox.com/scl/fi/9sw4tmy8bmq17l24ihq1e/avatar_ab.png?rlkey=7p0inazbgfqkymlosot6gkmbh&st=jdlv72hp&dl=0']
      },
    {
      url: 'https://andrewblair.co.uk/apps',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
      images: ['https://www.dropbox.com/scl/fi/9sw4tmy8bmq17l24ihq1e/avatar_ab.png?rlkey=7p0inazbgfqkymlosot6gkmbh&st=jdlv72hp&dl=0']
    },
    {
      url: 'https://andrewblair.co.uk/apps/eurovision-bingo',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
      images: ['https://www.dropbox.com/scl/fi/ilu2eonbn5wyw5t26mr88/eurovision_bingo_button.gif?rlkey=bxu6j31jb3q20msd0qd2wx87b&st=l3lkhovx&dl=0']
    },
    {
      url: 'https://andrewblair.co.uk/apps/big-finish-generator',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
      images: ['https://www.dropbox.com/scl/fi/mar2s0z1def688xvlr7x7/untempered_schism.gif?rlkey=bhdhomg2lpmzd9bbisc62oyb4&st=x7acezyx&dl=0']
    },
    {
      url: 'https://andrewblair.co.uk/credits',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
      images: ['https://www.dropbox.com/scl/fi/9sw4tmy8bmq17l24ihq1e/avatar_ab.png?rlkey=7p0inazbgfqkymlosot6gkmbh&st=jdlv72hp&dl=0']
    },
    
  ]
}