import fs from 'node:fs';
import path from 'node:path';

const outDir = path.resolve('src/assets/images/placeholders');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

function escapeXml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function generateSvg({
  width,
  height,
  title,
  tag = 'PHOTO PLACEHOLDER',
  subtitle = 'Sebring, FL · Premier Plus Realty',
  badgeColor = '#d4923a',
  badgeTextColor = '#122944',
  icon = 'camera',
}) {
  const cameraIcon = `
    <rect x="${width / 2 - 28}" y="${height / 2 - 70}" width="56" height="40" rx="8" fill="#1b3a5c" opacity="0.12" />
    <circle cx="${width / 2}" cy="${height / 2 - 50}" r="12" fill="#1b3a5c" opacity="0.4" />
    <circle cx="${width / 2}" cy="${height / 2 - 50}" r="6" fill="#ffffff" />
    <path d="M${width / 2 - 12} ${height / 2 - 76} L${width / 2 - 6} ${height / 2 - 82} L${width / 2 + 6} ${height / 2 - 82} L${width / 2 + 12} ${height / 2 - 76} Z" fill="#1b3a5c" opacity="0.3" />
  `;

  const portraitIcon = `
    <circle cx="${width / 2}" cy="${height / 2 - 80}" r="45" fill="#1b3a5c" opacity="0.15" />
    <circle cx="${width / 2}" cy="${height / 2 - 95}" r="22" fill="#1b3a5c" opacity="0.4" />
    <path d="M${width / 2 - 32} ${height / 2 - 55} Q${width / 2} ${height / 2 - 75} ${width / 2 + 32} ${height / 2 - 55} Z" fill="#1b3a5c" opacity="0.4" />
  `;

  const chosenIcon = icon === 'portrait' ? portraitIcon : cameraIcon;

  // Wrap title text if long
  const maxChars = Math.floor(width / 16);
  const words = title.split(' ');
  const lines = [];
  let currentLine = '';

  for (const word of words) {
    if ((currentLine + ' ' + word).trim().length > maxChars) {
      lines.push(currentLine.trim());
      currentLine = word;
    } else {
      currentLine = (currentLine + ' ' + word).trim();
    }
  }
  if (currentLine) lines.push(currentLine.trim());

  const titleSvgLines = lines
    .map((line, idx) => {
      const yOffset = height / 2 + (idx * 26) - ((lines.length - 1) * 13) + 10;
      return `<text x="${width / 2}" y="${yOffset}" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700" fill="#1b3a5c" text-anchor="middle">${escapeXml(line)}</text>`;
    })
    .join('\n');

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" width="${width}" height="${height}">
  <defs>
    <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fdfbf7"/>
      <stop offset="100%" stop-color="#ebe7de"/>
    </linearGradient>
    <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
      <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#d5cebe" stroke-width="0.5" stroke-opacity="0.5"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="url(#bgGrad)" />
  <rect width="${width}" height="${height}" fill="url(#grid)" />

  <!-- Outer & Inner Frame -->
  <rect x="12" y="12" width="${width - 24}" height="${height - 24}" rx="12" fill="none" stroke="#cbd5e1" stroke-width="2" />
  <rect x="20" y="20" width="${width - 40}" height="${height - 40}" rx="8" fill="none" stroke="#d4923a" stroke-width="1.5" stroke-dasharray="6,4" stroke-opacity="0.8" />

  <!-- Decorative Corner Accents -->
  <circle cx="28" cy="28" r="4" fill="#d4923a" opacity="0.6"/>
  <circle cx="${width - 28}" cy="28" r="4" fill="#d4923a" opacity="0.6"/>
  <circle cx="28" cy="${height - 28}" r="4" fill="#d4923a" opacity="0.6"/>
  <circle cx="${width - 28}" cy="${height - 28}" r="4" fill="#d4923a" opacity="0.6"/>

  <!-- Icon Slot -->
  ${chosenIcon}

  <!-- Tag Badge -->
  <g transform="translate(${width / 2}, ${height / 2 - 120})">
    <rect x="-140" y="-14" width="280" height="28" rx="6" fill="${badgeColor}" />
    <text x="0" y="5" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="800" letter-spacing="1.5" fill="${badgeTextColor}" text-anchor="middle">[${escapeXml(tag)}]</text>
  </g>

  <!-- Main Title Text Lines -->
  ${titleSvgLines}

  <!-- Subtitle -->
  <text x="${width / 2}" y="${height / 2 + lines.length * 15 + 40}" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600" fill="#64748b" text-anchor="middle">
    ${escapeXml(subtitle)}
  </text>

  <!-- Footer Authenticity / Slot Banner -->
  <g transform="translate(${width / 2}, ${height - 40})">
    <rect x="-170" y="-12" width="340" height="24" rx="4" fill="#1b3a5c" opacity="0.08" />
    <text x="0" y="4" font-family="system-ui, -apple-system, sans-serif" font-size="10" font-weight="700" fill="#1b3a5c" text-anchor="middle">
      AUTHENTIC LOCAL PHOTO PENDING · NO STOCK IMAGERY
    </text>
  </g>
</svg>`;
}

const placeholders = [
  // 1. Agent Portrait (800x1000)
  {
    fileName: 'alyson-thomas-portrait.svg',
    width: 800,
    height: 1000,
    tag: 'PHOTO PLACEHOLDER: AGENT PORTRAIT',
    title: 'Alyson Thomas, Real Estate Agent — Sebring, FL',
    subtitle: 'Premier Plus Realty · Highlands County Specialist',
    icon: 'portrait',
  },

  // 2. Listing Placeholders (600x400)
  {
    fileName: 'listing-golf-hammock-456-fairway-vista.svg',
    width: 600,
    height: 400,
    tag: 'PHOTO PLACEHOLDER: GOLF HAMMOCK',
    title: '456 Fairway Vista Dr, Sebring, FL',
    subtitle: '3 Bed · 2 Bath · 2,180 Sq Ft Fairway Pool Residence',
    icon: 'camera',
  },
  {
    fileName: 'listing-spring-lake-524-citrus-blossom.svg',
    width: 600,
    height: 400,
    tag: 'PHOTO PLACEHOLDER: SPRING LAKE',
    title: '524 Citrus Blossom Blvd, Sebring, FL',
    subtitle: 'New Construction 2026 CBS · 3 Bed · 2 Bath',
    icon: 'camera',
  },
  {
    fileName: 'listing-sun-n-lake-789-deer-run.svg',
    width: 600,
    height: 400,
    tag: 'PHOTO PLACEHOLDER: SUN \'N LAKE',
    title: '789 Deer Run Court, Sebring, FL',
    subtitle: 'Championship Golf Community Home · 3 Bed · 2 Bath',
    icon: 'camera',
  },
  {
    fileName: 'listing-sun-n-lake-412-fairway-breeze.svg',
    width: 600,
    height: 400,
    tag: 'PHOTO PLACEHOLDER: SUN \'N LAKE VILLA',
    title: '412 Fairway Breeze Court, Sebring, FL',
    subtitle: 'Maintenance-Free Fairway Villa · 2 Bed · 2 Bath',
    icon: 'camera',
  },
  {
    fileName: 'listing-tanglewood-123-whispering-palms.svg',
    width: 600,
    height: 400,
    tag: 'PHOTO PLACEHOLDER: TANGLEWOOD 55+',
    title: '123 Whispering Palms Way, Sebring, FL',
    subtitle: 'Premier 55+ Manufactured Home · Florida Room',
    icon: 'camera',
  },
  {
    fileName: 'listing-tanglewood-321-orange-blossom.svg',
    width: 600,
    height: 400,
    tag: 'PHOTO PLACEHOLDER: SOLD IN TANGLEWOOD',
    title: '321 Orange Blossom Blvd, Sebring, FL',
    subtitle: 'Sold at 102% List Price by Alyson Thomas',
    icon: 'camera',
  },
  {
    fileName: 'listing-default-sebring.svg',
    width: 600,
    height: 400,
    tag: 'PHOTO PLACEHOLDER: SEBRING LISTING',
    title: 'Curated Residential Property in Sebring, FL',
    subtitle: 'Highlands County Real Estate · Premier Plus Realty',
    icon: 'camera',
  },

  // 3. Neighborhood Detail Placeholders (1200x675)
  // Tanglewood
  {
    fileName: 'neighborhood-tanglewood-entrance.svg',
    width: 1200,
    height: 675,
    tag: 'PHOTO PLACEHOLDER: TANGLEWOOD ENTRANCE',
    title: 'Tanglewood Guarded Entryway & Tropical Boulevard',
    subtitle: 'Premier 55+ Gated Community · US-27 Sebring, FL',
    icon: 'camera',
  },
  {
    fileName: 'neighborhood-tanglewood-clubhouse.svg',
    width: 1200,
    height: 675,
    tag: 'PHOTO PLACEHOLDER: TANGLEWOOD CLUBHOUSE',
    title: 'Tanglewood Clubhouse, Heated Pool & Pickleball Courts',
    subtitle: 'Active Adult Amenities · Fitness Center & Recreation Complex',
    icon: 'camera',
  },
  // Golf Hammock
  {
    fileName: 'neighborhood-golf-hammock-fairway.svg',
    width: 1200,
    height: 675,
    tag: 'PHOTO PLACEHOLDER: GOLF HAMMOCK FAIRWAY',
    title: 'Golf Hammock Grand Live Oak Canopy & Fairway',
    subtitle: '18-Hole Championship Golf Enclave · Highlands County, FL',
    icon: 'camera',
  },
  {
    fileName: 'neighborhood-golf-hammock-clubhouse.svg',
    width: 1200,
    height: 675,
    tag: 'PHOTO PLACEHOLDER: GOLF HAMMOCK CLUBHOUSE',
    title: 'Golf Hammock Pro Shop & Clubhouse Restaurant',
    subtitle: 'Full Practice Facilities, Restaurant & Community Social Club',
    icon: 'camera',
  },
  // Sun 'N Lake
  {
    fileName: 'neighborhood-sun-n-lake-entrance.svg',
    width: 1200,
    height: 675,
    tag: 'PHOTO PLACEHOLDER: SUN \'N LAKE BOULEVARD',
    title: 'Sun \'N Lake Boulevard & Championship Deer Run Green',
    subtitle: 'Premier Golf & Recreation Community · 36 Championship Holes',
    icon: 'camera',
  },
  {
    fileName: 'neighborhood-sun-n-lake-clubhouse.svg',
    width: 1200,
    height: 675,
    tag: 'PHOTO PLACEHOLDER: ISLAND VIEW PAVILION',
    title: 'Island View Restaurant & Community Pool Pavilion',
    subtitle: 'Lakeside Dining, Olympic Swimming Pool & Tennis Complex',
    icon: 'camera',
  },
  // Whisper Lake
  {
    fileName: 'neighborhood-whisper-lake-waterfront.svg',
    width: 1200,
    height: 675,
    tag: 'PHOTO PLACEHOLDER: WHISPER LAKE WATERFRONT',
    title: 'Whisper Lake Waterfront & Fishing Pier',
    subtitle: 'Quiet 55+ Scenic Lakefront Community · Sebring, FL',
    icon: 'camera',
  },
  {
    fileName: 'neighborhood-whisper-lake-clubhouse.svg',
    width: 1200,
    height: 675,
    tag: 'PHOTO PLACEHOLDER: WHISPER LAKE CLUBHOUSE',
    title: 'Whisper Lake Clubhouse & Heated Pool',
    subtitle: 'Resident Recreation Hall, Shuffleboard & Social Gatherings',
    icon: 'camera',
  },
  // Buttonwood Bay
  {
    fileName: 'neighborhood-buttonwood-bay-marina.svg',
    width: 1200,
    height: 675,
    tag: 'PHOTO PLACEHOLDER: BUTTONWOOD BAY MARINA',
    title: 'Buttonwood Bay Marina, Boat Slips & Lake Josephine',
    subtitle: 'Resort 55+ Waterfront Enclave with Direct Lake Navigation',
    icon: 'camera',
  },
  {
    fileName: 'neighborhood-buttonwood-bay-clubhouse.svg',
    width: 1200,
    height: 675,
    tag: 'PHOTO PLACEHOLDER: BUTTONWOOD BAY CLUBHOUSE',
    title: 'Buttonwood Bay Waterfront Clubhouse & Heated Pool',
    subtitle: 'Recreation Center, Pickleball Courts & Lakeside Boardwalk',
    icon: 'camera',
  },
  // Spring Lake
  {
    fileName: 'neighborhood-spring-lake-ecopark.svg',
    width: 1200,
    height: 675,
    tag: 'PHOTO PLACEHOLDER: SPRING LAKE ECO-PARK',
    title: 'Spring Lake Eco-Park & Community Walking Trails',
    subtitle: 'Nature Preserves, Boardwalks & Dog Park in Southeastern Sebring',
    icon: 'camera',
  },
  {
    fileName: 'neighborhood-spring-lake-golf.svg',
    width: 1200,
    height: 675,
    tag: 'PHOTO PLACEHOLDER: SPRING LAKE GOLF',
    title: 'Fairway Greens at Spring Lake Golf Resort',
    subtitle: 'Scenic Resort Golf, Custom CBS Homes & Peaceful Acreage Lots',
    icon: 'camera',
  },
  // Sebring Village
  {
    fileName: 'neighborhood-sebring-village-entrance.svg',
    width: 1200,
    height: 675,
    tag: 'PHOTO PLACEHOLDER: SEBRING VILLAGE ENTRANCE',
    title: 'Sebring Village Entrance & Landscaped Welcome Garden',
    subtitle: 'Welcoming 55+ Manufactured Home Neighborhood · Sebring, FL',
    icon: 'camera',
  },
  {
    fileName: 'neighborhood-sebring-village-clubhouse.svg',
    width: 1200,
    height: 675,
    tag: 'PHOTO PLACEHOLDER: SEBRING VILLAGE CLUBHOUSE',
    title: 'Sebring Village Clubhouse, Heated Pool & Shuffleboard',
    subtitle: 'Community Activity Hall, Billiards & Year-Round Resident Events',
    icon: 'camera',
  },
  // Lakefront Homes
  {
    fileName: 'neighborhood-lakefront-lake-jackson.svg',
    width: 1200,
    height: 675,
    tag: 'PHOTO PLACEHOLDER: LAKE JACKSON SUNSET',
    title: 'Sunset over Lake Jackson with Private Boat Dock',
    subtitle: '3,200-Acre Freshwater Playground in the Heart of Sebring, FL',
    icon: 'camera',
  },
  {
    fileName: 'neighborhood-lakefront-lake-josephine.svg',
    width: 1200,
    height: 675,
    tag: 'PHOTO PLACEHOLDER: LAKE JOSEPHINE SHORELINE',
    title: 'Lakefront Residence Shoreline on Lake Josephine',
    subtitle: 'Tranquil Bass Fishing Waters & Custom Shoreline Estates',
    icon: 'camera',
  },

  // 4. Neighborhood Showcase Cards (600x375)
  {
    fileName: 'showcase-tanglewood.svg',
    width: 600,
    height: 375,
    tag: 'PHOTO PLACEHOLDER: TANGLEWOOD',
    title: 'Tanglewood 55+ Resort Community',
    subtitle: 'Gated Active Adult Living · Sebring, FL',
    icon: 'camera',
  },
  {
    fileName: 'showcase-golf-hammock.svg',
    width: 600,
    height: 375,
    tag: 'PHOTO PLACEHOLDER: GOLF HAMMOCK',
    title: 'Golf Hammock Fairway Estates',
    subtitle: 'Live Oaks & Championship Golf · Sebring, FL',
    icon: 'camera',
  },
  {
    fileName: 'showcase-sun-n-lake.svg',
    width: 600,
    height: 375,
    tag: 'PHOTO PLACEHOLDER: SUN \'N LAKE',
    title: 'Sun \'N Lake Golf Community',
    subtitle: '36 Championship Holes & Lake Views · Sebring, FL',
    icon: 'camera',
  },
  {
    fileName: 'showcase-whisper-lake.svg',
    width: 600,
    height: 375,
    tag: 'PHOTO PLACEHOLDER: WHISPER LAKE',
    title: 'Whisper Lake 55+ Waterfront Enclave',
    subtitle: 'Spring-Fed Lakefront & Clubhouse · Sebring, FL',
    icon: 'camera',
  },
  {
    fileName: 'showcase-buttonwood-bay.svg',
    width: 600,
    height: 375,
    tag: 'PHOTO PLACEHOLDER: BUTTONWOOD BAY',
    title: 'Buttonwood Bay Lake Josephine Marina',
    subtitle: 'Resort Amenities & Private Boat Docks · Sebring, FL',
    icon: 'camera',
  },
  {
    fileName: 'showcase-spring-lake.svg',
    width: 600,
    height: 375,
    tag: 'PHOTO PLACEHOLDER: SPRING LAKE',
    title: 'Spring Lake Golf & Custom CBS Homes',
    subtitle: 'Eco-Park, Golf & Spacious Acreage Lots · Sebring, FL',
    icon: 'camera',
  },
  {
    fileName: 'showcase-sebring-village.svg',
    width: 600,
    height: 375,
    tag: 'PHOTO PLACEHOLDER: SEBRING VILLAGE',
    title: 'Sebring Village Active 55+ Living',
    subtitle: 'Social Clubhouse, Pool & Shuffleboard · Sebring, FL',
    icon: 'camera',
  },
  {
    fileName: 'showcase-lakefront.svg',
    width: 600,
    height: 375,
    tag: 'PHOTO PLACEHOLDER: LAKEFRONT HOMES',
    title: 'Lake Jackson & Highlands Lakefront Living',
    subtitle: 'Private Docks, Boating & Waterfront Views · Sebring, FL',
    icon: 'camera',
  },
];

for (const p of placeholders) {
  const filePath = path.join(outDir, p.fileName);
  const svgContent = generateSvg(p);
  fs.writeFileSync(filePath, svgContent, 'utf8');
  console.log(`Generated: ${p.fileName}`);
}

console.log(`Successfully generated ${placeholders.length} SVG placeholder images.`);
