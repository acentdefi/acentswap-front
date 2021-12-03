import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'AcentSwap',
  description:
    'The most popular AMM on BSC by user count! Earn ACENT through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by AcentSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://acentswap.com/images/hero.jpg',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | AcentSwap',
  },
  '/competition': {
    title: 'Trading Battle | AcentSwap',
  },
  '/prediction': {
    title: 'Prediction | AcentSwap',
  },
  '/farms': {
    title: 'Farms | AcentSwap',
  },
  '/pools': {
    title: 'Pools | AcentSwap',
  },
  '/lottery': {
    title: 'Lottery | AcentSwap',
  },
  '/collectibles': {
    title: 'Collectibles | AcentSwap',
  },
  '/ifo': {
    title: 'Initial Farm Offering | AcentSwap',
  },
  '/teams': {
    title: 'Leaderboard | AcentSwap',
  },
  '/profile/tasks': {
    title: 'Task Center | AcentSwap',
  },
  '/profile': {
    title: 'Your Profile | AcentSwap',
  },
}
