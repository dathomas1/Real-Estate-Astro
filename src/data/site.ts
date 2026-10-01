export const siteConfig = {
  businessName: 'Alyson Thomas of Premier Plus Realty',
  brokerage: 'Premier Plus Realty',
  phone: '7723428085',
  phoneDisplay: '(772) 342-8085',
  address: {
    locality: 'Sebring',
    region: 'Florida',
    postalCode: '33872',
    country: 'US',
  },
  licenseNumber: '[LICENSE_NUMBER — PLACEHOLDER, REPLACE WITH REAL FL LICENSE #]',
  domain: 'https://alysonthomas.com',
  serviceAreas: ['Sebring', 'Avon Park', 'Lake Placid', 'Highlands County'],
  directoryLinks: {
    realtorDotCom: '[PLACEHOLDER — REALTOR.COM AGENT PROFILE URL]',
    myStateMLS: '[PLACEHOLDER — MYSTATEMLS PROFILE URL]',
  },
} as const;

export interface SiteInfo {
  name: string;
  agentName: string;
  brokerage: string;
  phone: string;
  formattedPhone: string;
  email: string;
  domain: string;
  license: string;
  address: {
    street: string;
    city: string;
    state: string;
    stateAbbr: string;
    zip: string;
    country: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  serviceAreas: string[];
  hours: {
    weekday: string;
    saturday: string;
    sunday: string;
  };
}

export interface Breakpoints {
  mobileMax: number;
  tabletMin: number;
  tabletMax: number;
  desktopMin: number;
  mobileMedia: string;
  tabletMedia: string;
  desktopMedia: string;
}

export const breakpoints: Breakpoints = {
  mobileMax: 767,
  tabletMin: 768,
  tabletMax: 1023,
  desktopMin: 1024,
  mobileMedia: '(max-width: 767px)',
  tabletMedia: '(min-width: 768px) and (max-width: 1023px)',
  desktopMedia: '(min-width: 1024px)',
};

// Aliased compatibility object to support existing component imports seamlessly
export const siteData: SiteInfo = {
  name: siteConfig.businessName,
  agentName: 'Alyson Thomas',
  brokerage: siteConfig.brokerage,
  phone: siteConfig.phone,
  formattedPhone: siteConfig.phoneDisplay,
  email: 'alyson@alysonthomas.com',
  domain: siteConfig.domain,
  license: `Licensed Florida Real Estate Agent — License #${siteConfig.licenseNumber} · ${siteConfig.brokerage}`,
  address: {
    street: '',
    city: siteConfig.address.locality,
    state: siteConfig.address.region,
    stateAbbr: 'FL',
    zip: siteConfig.address.postalCode,
    country: siteConfig.address.country,
  },
  geo: {
    latitude: 27.4956,
    longitude: -81.4412,
  },
  serviceAreas: [...siteConfig.serviceAreas],
  hours: {
    weekday: '8:00 AM - 7:00 PM',
    saturday: '9:00 AM - 5:00 PM',
    sunday: '1:00 PM - 5:00 PM',
  },
};
