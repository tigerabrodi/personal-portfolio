import { v4 } from 'uuid'

export const projects = [
  {
    title: 'Shisui',
    description:
      'Become better than your past by regularly assessing yourself and holding yourself accountable.',
    demoSource: '/assets/shisui.mp4',
    sourceCodeLink: 'https://github.com/tigerabrodi/shisui',
    liveVersionLink: 'https://shisui.vercel.app/',
    id: v4(),
    ariaLabel: 'Show casing my project Shisui',
  },
  {
    title: 'Vinland Saga',
    description:
      'A platform where chefs can write their recipes and connect with each other.',
    demoSource: '/assets/vinland-saga.mp4',
    sourceCodeLink: 'https://github.com/tigerabrodi/vinland-saga',
    liveVersionLink: 'https://vinland-saga.vercel.app/',
    id: v4(),
    ariaLabel: 'Show casing my project Vinland Saga',
  },
  {
    title: 'Madara',
    description: 'A way for people to manage their tasks.',
    demoSource: '/assets/madara.mp4',
    sourceCodeLink: 'https://github.com/tigerabrodi/Madara',
    liveVersionLink: 'https://tigerabrodi-madara.netlify.app/',
    id: v4(),
    ariaLabel: 'Show casing my project Madara',
  },
  {
    title: 'Konoha',
    description: 'A simple way to search for Anime/Manga characters.',
    demoSource: '/assets/konoha.mp4',
    sourceCodeLink: 'https://github.com/tigerabrodi/konoha',
    liveVersionLink: 'https://tigerabrodi-konoha.netlify.app/',
    id: v4(),
    ariaLabel: 'Show casing my project Konoha',
  },
]
