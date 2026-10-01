// Central registry of local image placeholders for Astro <Image /> components
// Strictly conforms to CRO Guide Section 3.1 & Site Architecture Part 4C
// Real photos do not exist yet — clearly labeled local SVGs prevent misleading stock imagery
// Alt text describes the authentic scene with specific Highlands County location.

import type { ImageMetadata } from 'astro';

// 1. Agent Portrait
import alysonThomasPortrait from '@assets/images/placeholders/alyson-thomas-portrait.svg';

// 2. Listing Placeholders (600x400)
import listingGolfHammock from '@assets/images/placeholders/listing-golf-hammock-456-fairway-vista.svg';
import listingSpringLake from '@assets/images/placeholders/listing-spring-lake-524-citrus-blossom.svg';
import listingSunNLakeDeerRun from '@assets/images/placeholders/listing-sun-n-lake-789-deer-run.svg';
import listingSunNLakeVilla from '@assets/images/placeholders/listing-sun-n-lake-412-fairway-breeze.svg';
import listingTanglewoodWhisperingPalms from '@assets/images/placeholders/listing-tanglewood-123-whispering-palms.svg';
import listingTanglewoodOrangeBlossom from '@assets/images/placeholders/listing-tanglewood-321-orange-blossom.svg';
import listingDefaultSebring from '@assets/images/placeholders/listing-default-sebring.svg';

// 3. Neighborhood Showcase Card Placeholders (600x375)
import showcaseTanglewood from '@assets/images/placeholders/showcase-tanglewood.svg';
import showcaseGolfHammock from '@assets/images/placeholders/showcase-golf-hammock.svg';
import showcaseSunNLake from '@assets/images/placeholders/showcase-sun-n-lake.svg';
import showcaseWhisperLake from '@assets/images/placeholders/showcase-whisper-lake.svg';
import showcaseButtonwoodBay from '@assets/images/placeholders/showcase-buttonwood-bay.svg';
import showcaseSpringLake from '@assets/images/placeholders/showcase-spring-lake.svg';
import showcaseSebringVillage from '@assets/images/placeholders/showcase-sebring-village.svg';
import showcaseLakefront from '@assets/images/placeholders/showcase-lakefront.svg';

// 4. Neighborhood Detail Widescreen Placeholders (1200x675)
import tanglewoodEntrance from '@assets/images/placeholders/neighborhood-tanglewood-entrance.svg';
import tanglewoodClubhouse from '@assets/images/placeholders/neighborhood-tanglewood-clubhouse.svg';
import golfHammockFairway from '@assets/images/placeholders/neighborhood-golf-hammock-fairway.svg';
import golfHammockClubhouse from '@assets/images/placeholders/neighborhood-golf-hammock-clubhouse.svg';
import sunNLakeEntrance from '@assets/images/placeholders/neighborhood-sun-n-lake-entrance.svg';
import sunNLakeClubhouse from '@assets/images/placeholders/neighborhood-sun-n-lake-clubhouse.svg';
import whisperLakeWaterfront from '@assets/images/placeholders/neighborhood-whisper-lake-waterfront.svg';
import whisperLakeClubhouse from '@assets/images/placeholders/neighborhood-whisper-lake-clubhouse.svg';
import buttonwoodBayMarina from '@assets/images/placeholders/neighborhood-buttonwood-bay-marina.svg';
import buttonwoodBayClubhouse from '@assets/images/placeholders/neighborhood-buttonwood-bay-clubhouse.svg';
import springLakeEcopark from '@assets/images/placeholders/neighborhood-spring-lake-ecopark.svg';
import springLakeGolf from '@assets/images/placeholders/neighborhood-spring-lake-golf.svg';
import sebringVillageEntrance from '@assets/images/placeholders/neighborhood-sebring-village-entrance.svg';
import sebringVillageClubhouse from '@assets/images/placeholders/neighborhood-sebring-village-clubhouse.svg';
import lakefrontLakeJackson from '@assets/images/placeholders/neighborhood-lakefront-lake-jackson.svg';
import lakefrontLakeJosephine from '@assets/images/placeholders/neighborhood-lakefront-lake-josephine.svg';

export interface PlaceholderImageItem {
  image: ImageMetadata;
  alt: string;
  width: number;
  height: number;
  label: string;
  caption: string;
}

export const agentPortraitPlaceholder: PlaceholderImageItem = {
  image: alysonThomasPortrait,
  alt: 'Portrait of Alyson Thomas, licensed real estate agent with Premier Plus Realty in Sebring, Florida',
  width: 800,
  height: 1000,
  label: '[PHOTO PLACEHOLDER: Alyson Thomas, Real Estate Agent — Sebring, FL]',
  caption: 'Professional portrait placeholder of Alyson Thomas representing Highlands County sellers and buyers.',
};

export const listingPlaceholdersByAddress: Record<string, PlaceholderImageItem> = {
  '456 Fairway Vista Dr': {
    image: listingGolfHammock,
    alt: 'Front exterior of a 3-bedroom fairway pool home in Golf Hammock, Sebring, Florida',
    width: 600,
    height: 400,
    label: '[PHOTO PLACEHOLDER: Fairway residence with pool in Golf Hammock, Sebring]',
    caption: 'Sample listing photography placeholder for single-family golf home in Golf Hammock.',
  },
  '524 Citrus Blossom Boulevard': {
    image: listingSpringLake,
    alt: 'Front exterior of a new construction CBS home in Spring Lake, Sebring, Florida',
    width: 600,
    height: 400,
    label: '[PHOTO PLACEHOLDER: New construction CBS home in Spring Lake, Sebring]',
    caption: 'Sample listing photography placeholder for custom 2026 build in Spring Lake.',
  },
  '789 Deer Run Court': {
    image: listingSunNLakeDeerRun,
    alt: 'Front exterior of a 3-bedroom single-family home near Deer Run Golf Course in Sun \'N Lake, Sebring, Florida',
    width: 600,
    height: 400,
    label: '[PHOTO PLACEHOLDER: Single-family golf community home in Sun \'N Lake, Sebring]',
    caption: 'Sample listing photography placeholder for single-family residence in Sun \'N Lake.',
  },
  '412 Fairway Breeze Court': {
    image: listingSunNLakeVilla,
    alt: 'Front exterior of a 2-bedroom maintenance-free golf villa in Sun \'N Lake, Sebring, Florida',
    width: 600,
    height: 400,
    label: '[PHOTO PLACEHOLDER: Fairway villa in Sun \'N Lake, Sebring]',
    caption: 'Sample listing photography placeholder for attached villa in Sun \'N Lake.',
  },
  '123 Whispering Palms Way': {
    image: listingTanglewoodWhisperingPalms,
    alt: 'Front exterior of a 2-bedroom manufactured home with Florida room in Tanglewood 55+ community, Sebring, Florida',
    width: 600,
    height: 400,
    label: '[PHOTO PLACEHOLDER: 55+ manufactured home in Tanglewood, Sebring]',
    caption: 'Sample listing photography placeholder for active adult home in Tanglewood.',
  },
  '321 Orange Blossom Blvd': {
    image: listingTanglewoodOrangeBlossom,
    alt: 'Front exterior of a sold home in Tanglewood, Sebring, Florida represented by Alyson Thomas',
    width: 600,
    height: 400,
    label: '[PHOTO PLACEHOLDER: Sold home in Tanglewood, Sebring]',
    caption: 'Sample listing photography placeholder of home sold at 102% of asking price.',
  },
};

export const defaultListingPlaceholder: PlaceholderImageItem = {
  image: listingDefaultSebring,
  alt: 'Front exterior of a residential home in Sebring, Highlands County, Florida',
  width: 600,
  height: 400,
  label: '[PHOTO PLACEHOLDER: Curated Residential Property in Sebring, FL]',
  caption: 'Sample listing photography placeholder representing Highlands County property.',
};

export const neighborhoodShowcasePlaceholders: Record<string, PlaceholderImageItem> = {
  'tanglewood': {
    image: showcaseTanglewood,
    alt: 'Gated entrance boulevard with tropical palms at Tanglewood 55+ community in Sebring, Florida',
    width: 600,
    height: 375,
    label: '[PHOTO PLACEHOLDER: Tanglewood 55+ Resort Community]',
    caption: 'Gated active adult enclave in Sebring, FL.',
  },
  'golf-hammock': {
    image: showcaseGolfHammock,
    alt: 'Championship fairway surrounded by grand live oaks in Golf Hammock, Sebring, Florida',
    width: 600,
    height: 375,
    label: '[PHOTO PLACEHOLDER: Golf Hammock Fairway Estates]',
    caption: 'Premier golf course neighborhood in Sebring, FL.',
  },
  'sun-n-lake': {
    image: showcaseSunNLake,
    alt: 'Manicured green and lake view at Sun \'N Lake Golf Club in Sebring, Florida',
    width: 600,
    height: 375,
    label: '[PHOTO PLACEHOLDER: Sun \'N Lake Golf Community]',
    caption: '36-hole championship golf community in Sebring, FL.',
  },
  'whisper-lake': {
    image: showcaseWhisperLake,
    alt: 'Scenic spring-fed freshwater lake and walking path in Whisper Lake 55+ community, Sebring, Florida',
    width: 600,
    height: 375,
    label: '[PHOTO PLACEHOLDER: Whisper Lake 55+ Waterfront Enclave]',
    caption: 'Tranquil 55+ lakeside neighborhood in Sebring, FL.',
  },
  'buttonwood-bay': {
    image: showcaseButtonwoodBay,
    alt: 'Resident marina boat docks and water access on Lake Josephine at Buttonwood Bay in Sebring, Florida',
    width: 600,
    height: 375,
    label: '[PHOTO PLACEHOLDER: Buttonwood Bay Lake Josephine Marina]',
    caption: 'Resort 55+ community with marina access to Lake Josephine.',
  },
  'spring-lake': {
    image: showcaseSpringLake,
    alt: 'Eco-Park boardwalk and custom residential streetscape in Spring Lake, Sebring, Florida',
    width: 600,
    height: 375,
    label: '[PHOTO PLACEHOLDER: Spring Lake Golf & Custom CBS Homes]',
    caption: 'Golf resort community with eco-park in southeastern Sebring, FL.',
  },
  'sebring-village': {
    image: showcaseSebringVillage,
    alt: 'Landscaped entryway and community recreation pavilion at Sebring Village 55+ in Sebring, Florida',
    width: 600,
    height: 375,
    label: '[PHOTO PLACEHOLDER: Sebring Village Active 55+ Living]',
    caption: 'Friendly 55+ manufactured home community in Sebring, FL.',
  },
  'lakefront-homes': {
    image: showcaseLakefront,
    alt: 'Residential shoreline and private dock on Lake Jackson at sunset in Sebring, Florida',
    width: 600,
    height: 375,
    label: '[PHOTO PLACEHOLDER: Lake Jackson & Highlands Lakefront Living]',
    caption: 'Freshwater lakefront properties across Highlands County, FL.',
  },
};

export const neighborhoodDetailPlaceholders: Record<string, [PlaceholderImageItem, PlaceholderImageItem]> = {
  'tanglewood': [
    {
      image: tanglewoodEntrance,
      alt: 'Guarded entrance gates and tropical landscaped boulevard at Tanglewood 55+ community in Sebring, Florida',
      width: 1200,
      height: 675,
      label: '[PHOTO PLACEHOLDER: Tanglewood Guarded Entryway & Tropical Boulevard]',
      caption: 'Placeholder for professional wide-angle capture of Tanglewood’s 24-hour guarded gatehouse and palm-lined boulevard.',
    },
    {
      image: tanglewoodClubhouse,
      alt: 'Active clubhouse, heated swimming pool, and regulation pickleball courts at Tanglewood in Sebring, Florida',
      width: 1200,
      height: 675,
      label: '[PHOTO PLACEHOLDER: Tanglewood Clubhouse, Heated Pool & Pickleball Courts]',
      caption: 'Placeholder for active resident amenity hub, featuring the heated Olympic pool and championship pickleball courts.',
    },
  ],
  'golf-hammock': [
    {
      image: golfHammockFairway,
      alt: 'Grand live oak canopy framing championship golf course fairways in Golf Hammock, Sebring, Florida',
      width: 1200,
      height: 675,
      label: '[PHOTO PLACEHOLDER: Golf Hammock Grand Live Oak Canopy & Fairway]',
      caption: 'Placeholder for scenic fairway view showcasing mature moss-draped live oaks and manicured fairways.',
    },
    {
      image: golfHammockClubhouse,
      alt: 'Golf Hammock pro shop, driving range, and clubhouse dining in Sebring, Florida',
      width: 1200,
      height: 675,
      label: '[PHOTO PLACEHOLDER: Golf Hammock Pro Shop & Clubhouse Restaurant]',
      caption: 'Placeholder for Golf Hammock community clubhouse, full-service pro shop, and dining terrace.',
    },
  ],
  'sun-n-lake': [
    {
      image: sunNLakeEntrance,
      alt: 'Sun \'N Lake Boulevard entrance and manicured green at Deer Run Golf Course in Sebring, Florida',
      width: 1200,
      height: 675,
      label: '[PHOTO PLACEHOLDER: Sun \'N Lake Boulevard & Championship Deer Run Green]',
      caption: 'Placeholder for iconic Sun ’N Lake Boulevard and view of the 18th hole on the championship Deer Run course.',
    },
    {
      image: sunNLakeClubhouse,
      alt: 'Island View Lakefront Restaurant and community swimming pool complex in Sun \'N Lake, Sebring, Florida',
      width: 1200,
      height: 675,
      label: '[PHOTO PLACEHOLDER: Island View Restaurant & Community Pool Pavilion]',
      caption: 'Placeholder for the Island View Restaurant, recreation complex, and zero-entry lagoon pool.',
    },
  ],
  'whisper-lake': [
    {
      image: whisperLakeWaterfront,
      alt: 'Private spring-fed waterfront and resident fishing pier at Whisper Lake 55+ community in Sebring, Florida',
      width: 1200,
      height: 675,
      label: '[PHOTO PLACEHOLDER: Whisper Lake Waterfront & Fishing Pier]',
      caption: 'Placeholder for tranquil lake view and private wooden fishing dock at Whisper Lake.',
    },
    {
      image: whisperLakeClubhouse,
      alt: 'Resident clubhouse, shuffleboard courts, and heated pool at Whisper Lake in Sebring, Florida',
      width: 1200,
      height: 675,
      label: '[PHOTO PLACEHOLDER: Whisper Lake Clubhouse & Heated Pool]',
      caption: 'Placeholder for Whisper Lake recreation hall, heated swimming pool, and shuffleboard pavilion.',
    },
  ],
  'buttonwood-bay': [
    {
      image: buttonwoodBayMarina,
      alt: 'Private marina docks and boat slips accessing Lake Josephine at Buttonwood Bay in Sebring, Florida',
      width: 1200,
      height: 675,
      label: '[PHOTO PLACEHOLDER: Buttonwood Bay Marina, Boat Slips & Lake Josephine]',
      caption: 'Placeholder for Buttonwood Bay private boat slips and deep-water canal leading to Lake Josephine.',
    },
    {
      image: buttonwoodBayClubhouse,
      alt: 'Waterfront recreation hall, swimming pool, and fishing boardwalk at Buttonwood Bay in Sebring, Florida',
      width: 1200,
      height: 675,
      label: '[PHOTO PLACEHOLDER: Buttonwood Bay Waterfront Clubhouse & Heated Pool]',
      caption: 'Placeholder for community center, heated outdoor pools, and resident activity courts.',
    },
  ],
  'spring-lake': [
    {
      image: springLakeEcopark,
      alt: 'Spring Lake Eco-Park nature boardwalk and walking trails surrounded by cypress preserves in Sebring, Florida',
      width: 1200,
      height: 675,
      label: '[PHOTO PLACEHOLDER: Spring Lake Eco-Park & Community Walking Trails]',
      caption: 'Placeholder for Spring Lake Eco-Park nature boardwalk and native Florida wetlands viewing platform.',
    },
    {
      image: springLakeGolf,
      alt: 'Scenic fairway approach and native pine trees at Spring Lake Golf Resort in Sebring, Florida',
      width: 1200,
      height: 675,
      label: '[PHOTO PLACEHOLDER: Fairway Greens at Spring Lake Golf Resort]',
      caption: 'Placeholder for golf course vistas and custom residential acreage homes in Spring Lake.',
    },
  ],
  'sebring-village': [
    {
      image: sebringVillageEntrance,
      alt: 'Landscaped welcome garden and entrance monument sign at Sebring Village 55+ community in Sebring, Florida',
      width: 1200,
      height: 675,
      label: '[PHOTO PLACEHOLDER: Sebring Village Entrance & Landscaped Welcome Garden]',
      caption: 'Placeholder for Sebring Village entrance sign and manicured welcome landscaping.',
    },
    {
      image: sebringVillageClubhouse,
      alt: 'Community social center, heated swimming pool, and shuffleboard pavilion at Sebring Village in Sebring, Florida',
      width: 1200,
      height: 675,
      label: '[PHOTO PLACEHOLDER: Sebring Village Clubhouse, Heated Pool & Shuffleboard]',
      caption: 'Placeholder for Sebring Village active recreation center, pool, and resident shuffleboard courts.',
    },
  ],
  'lakefront-homes': [
    {
      image: lakefrontLakeJackson,
      alt: 'Sunset panoramic view across Lake Jackson with private residential boat dock and boat lift in Sebring, Florida',
      width: 1200,
      height: 675,
      label: '[PHOTO PLACEHOLDER: Sunset over Lake Jackson with Private Boat Dock]',
      caption: 'Placeholder for panoramic Lake Jackson sunset with private dock and boat lift.',
    },
    {
      image: lakefrontLakeJosephine,
      alt: 'Lakeside shoreline, sand beach area, and private dock on Lake Josephine in Sebring, Florida',
      width: 1200,
      height: 675,
      label: '[PHOTO PLACEHOLDER: Lakefront Residence Shoreline on Lake Josephine]',
      caption: 'Placeholder for serene morning view over Lake Josephine from a private residential shoreline.',
    },
  ],
};
