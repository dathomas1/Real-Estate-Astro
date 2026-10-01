export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  isCTA?: boolean;
}

export const primaryNav: NavItem[] = [
  {
    label: 'Homes for Sale',
    href: '/homes-for-sale-sebring-fl/',
    children: [
      { label: 'All Homes for Sale', href: '/homes-for-sale-sebring-fl/' },
      { label: 'Tanglewood', href: '/sebring-neighborhoods/tanglewood/' },
      { label: 'Golf Hammock', href: '/sebring-neighborhoods/golf-hammock/' },
      { label: 'Sun \'N Lake', href: '/sebring-neighborhoods/sun-n-lake/' },
      { label: 'Whisper Lake', href: '/sebring-neighborhoods/whisper-lake/' },
      { label: 'Buttonwood Bay', href: '/sebring-neighborhoods/buttonwood-bay/' },
      { label: 'Spring Lake', href: '/sebring-neighborhoods/spring-lake/' },
      { label: 'Sebring Village', href: '/sebring-neighborhoods/sebring-village/' },
      { label: 'Lakefront Homes', href: '/sebring-neighborhoods/lakefront-homes/' },
    ],
  },
  {
    label: 'Sell Your Home',
    href: '/sell-my-home-sebring-fl/',
    children: [
      { label: 'Sell My Home in Sebring', href: '/sell-my-home-sebring-fl/' },
      { label: 'Free Home Valuation', href: '/free-home-valuation/' },
      { label: 'Sell House Fast', href: '/sell-house-fast-sebring-fl/' },
      { label: 'FSBO vs. Listing Agent', href: '/fsbo-vs-listing-agent-sebring/' },
      { label: 'Home Selling Guide', href: '/home-selling-guide-highlands-county/' },
    ],
  },
  {
    label: 'Service Areas',
    href: '/homes-for-sale-sebring-fl/',
    children: [
      { label: 'Sebring Real Estate', href: '/homes-for-sale-sebring-fl/' },
      { label: 'Avon Park Real Estate', href: '/avon-park-real-estate/' },
      { label: 'Lake Placid Real Estate', href: '/lake-placid-real-estate/' },
      { label: 'Highlands County Real Estate', href: '/highlands-county-real-estate-market/' },
    ],
  },
  {
    label: 'About',
    href: '/about/',
  },
  {
    label: 'Blog',
    href: '/blog/',
  },
  {
    label: 'Contact',
    href: '/contact/',
  },
  {
    label: 'Free Home Valuation',
    href: '/free-home-valuation/',
    isCTA: true,
  },
];

export const footerNav = {
  neighborhoods: [
    { label: 'Tanglewood', href: '/sebring-neighborhoods/tanglewood/' },
    { label: 'Golf Hammock', href: '/sebring-neighborhoods/golf-hammock/' },
    { label: 'Sun \'N Lake', href: '/sebring-neighborhoods/sun-n-lake/' },
    { label: 'Whisper Lake', href: '/sebring-neighborhoods/whisper-lake/' },
    { label: 'Buttonwood Bay', href: '/sebring-neighborhoods/buttonwood-bay/' },
    { label: 'Spring Lake', href: '/sebring-neighborhoods/spring-lake/' },
    { label: 'Sebring Village', href: '/sebring-neighborhoods/sebring-village/' },
    { label: 'Lakefront Homes', href: '/sebring-neighborhoods/lakefront-homes/' },
  ],
  sellerResources: [
    { label: 'Sell My Home in Sebring', href: '/sell-my-home-sebring-fl/' },
    { label: 'Free Home Valuation', href: '/free-home-valuation/' },
    { label: 'Sell House Fast', href: '/sell-house-fast-sebring-fl/' },
    { label: 'FSBO vs. Listing Agent', href: '/fsbo-vs-listing-agent-sebring/' },
    { label: 'Home Selling Guide', href: '/home-selling-guide-highlands-county/' },
    { label: 'Client Testimonials', href: '/testimonials/' },
  ],
  serviceAreas: [
    { label: 'Sebring Real Estate', href: '/homes-for-sale-sebring-fl/' },
    { label: 'Avon Park Real Estate', href: '/avon-park-real-estate/' },
    { label: 'Lake Placid Real Estate', href: '/lake-placid-real-estate/' },
    { label: 'Highlands County Market', href: '/highlands-county-real-estate-market/' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '/privacy-policy/' },
    { label: 'Terms of Service', href: '/terms-of-service/' },
    { label: 'HTML Sitemap', href: '/sitemap/' },
  ],
};
