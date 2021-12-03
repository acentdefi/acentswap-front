import { MenuEntry } from 'acentswap-uikit-hwan'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://acentdefi.github.io/acentswap-interface/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://acentdefi.github.io/acentswap-interface/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Referrals',
    icon: 'ReferralIcon',
    href: '/referrals',
  },
  {
    label: 'Analytics',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://acentswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://acentswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://acentswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://acentswap.info/accounts',
      },
    ],
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Launchpad',
    icon: 'IfoIcon',
    href: '/launchpad',
  },
  {
    label: 'NFT Marketplace',
    icon: 'NftIcon',
    href: 'https://acentdefi.github.io/acentswap-front/nft-marketplace',
  },

  {
    label: 'Bridge',
    icon: 'BridgeIcon',
    href: 'http://3.34.52.239:3000',
  },

  {
    label: 'Acentchain',
    icon: 'ChainIcon',
    href: 'https://acentdefi.github.io/acentswap-front/acentchain',
  },

  {
    label: 'Stocks',
    icon: 'StockIcon',
    href: 'https://acentdefi.github.io/acentswap-front/stocks',
  },

  {
    label: 'Supply Chain',
    icon: 'SupplyChainIcon',
    href: 'https://acentdefi.github.io/acentswap-front/supplychain',
  },

  {
    label: 'Games',
    icon: 'NftIcon',
    href: 'https://acentdefi.github.io/acentswap-front/games',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Contact',
        href: 'https://acentdefi.github.io/acentswap-front/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://acentdefi.github.io/acentswap-frontg/#/acentswap.eth',
      },
      {
        label: 'Github',
        href: 'https://github.com/acentswap',
      },
      {
        label: 'Docs',
        href: 'https://acentdefi.github.io/acentswap-front.com',
      },
      {
        label: 'Blog',
        href: 'https://acentswap.medium.com',
      },
    ],
  },
]

export default config
