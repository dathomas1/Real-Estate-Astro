import { defineThemeConfig } from './src/utils/defineThemeConfig'

export default defineThemeConfig({
  name: 'Alyson Thomas of Premier Plus Realty',
  id: 'alyson-thomas-realty',
  seo: {
    title: 'Alyson Thomas of Premier Plus Realty',
    description:
      'Seller-focused real estate agent serving Sebring, Avon Park, Lake Placid, and Highlands County, Florida.',
    author: 'Alyson Thomas',
    image: '/images/alyson-thomas-headshot.jpg',
  },
  colors: {
    primary: '#1b3a5c',
    secondary: '#d4923a',
    neutral: '#ddd8d0',
    outline: '#1b3a5c',
  },
  navigation: {
    darkmode: false,
    items: [
      {
        type: 'link',
        label: 'Home',
        href: '/',
      },
      {
        type: 'link',
        label: 'Homes for Sale',
        href: '/homes-for-sale-sebring-fl/',
      },
      {
        type: 'link',
        label: 'Sell Your Home',
        href: '/sell-my-home-sebring-fl/',
      },
      {
        type: 'link',
        label: 'About',
        href: '/about/',
      },
      {
        type: 'link',
        label: 'Contact',
        href: '/contact/',
      },
    ],
  },
  socials: [],
})
