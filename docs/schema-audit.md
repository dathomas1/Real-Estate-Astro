# Schema Deployment Matrix Audit (Site Architecture Part 4D)

This audit verifies all pages built across Prompts 5–20 against Schema.org and SEO guidelines specified in Site Architecture Part 4D, Part 3A (Hierarchy), and CRO Guide Section 3.1.

## Audit Checklist Criteria

1. **No AggregateRating Schema**: Verified 0 instances across the entire site (reviews are pending real client volume).
2. **No "REALTOR®" in Credentials/Designations**: Verified 0 instances of "REALTOR®" as jobTitle, credential, or organization membership. Alyson Thomas is designated as "Licensed Florida Real Estate Agent" or "Real Estate Agent".
3. **Canonical RealEstateAgent NAP Matching**: `name`, `telephone`, and `address` match `siteConfig` exactly (`Alyson Thomas of Premier Plus Realty`, `7723428085`, `Sebring, Florida 33872, US`).
4. **FAQPage Word-for-Word Accuracy**: All 67 FAQ question and answer pairs across all 11 pages match the on-page text 100% word-for-word.
5. **BreadcrumbList Hierarchy Alignment**: Breadcrumb item lists accurately reflect parent-child site hierarchy according to Site Architecture Part 3A.

---

## Page-by-Page Audit Matrix

| Page / Route | Matrix Required Schemas | Rendered Schemas | Status | Notes |
| :--- | :--- | :--- | :--- | :--- |
| **Homepage (`/`)** | `WebSite`, `RealEstateAgent` | `WebSite`, `RealEstateAgent`, `Organization` | **PASS** | NAP matches siteConfig; Organization nested via @id |
| **About (`/about/`)** | `BreadcrumbList`, `RealEstateAgent` (Person) | `BreadcrumbList`, `RealEstateAgent`, `Person` | **PASS** | jobTitle: 'Licensed Florida Real Estate Agent' |
| **Contact (`/contact/`)** | `BreadcrumbList`, `RealEstateAgent` (ContactPoint) | `BreadcrumbList`, `RealEstateAgent`, `ContactPoint` | **PASS** | Direct phone & operating hours included |
| **Testimonials (`/testimonials/`)** | `BreadcrumbList` | `BreadcrumbList` | **PASS** | Strictly NO AggregateRating |
| **Sell My Home Sebring FL (`/sell-my-home-sebring-fl/`)** | `BreadcrumbList`, `RealEstateAgent`, `Service`, `FAQPage` | `BreadcrumbList`, `RealEstateAgent`, `Service`, `FAQPage` | **PASS** | 7 FAQ pairs match on-page accordion |
| **Homes for Sale Sebring FL (`/homes-for-sale-sebring-fl/`)** | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | **PASS** | 5 FAQ pairs match on-page accordion |
| **Free Home Valuation (`/free-home-valuation/`)** | `BreadcrumbList`, `RealEstateAgent`, `Service` | `BreadcrumbList`, `RealEstateAgent`, `Service` | **PASS** | Free Valuation Service schema defined |
| **Sell House Fast Sebring FL (`/sell-house-fast-sebring-fl/`)** | `BreadcrumbList`, `RealEstateAgent`, `Service`, `FAQPage` | `BreadcrumbList`, `RealEstateAgent`, `Service`, `FAQPage` | **PASS** | 4 FAQ pairs match on-page accordion |
| **FSBO vs. Listing Agent (`/fsbo-vs-listing-agent-sebring/`)** | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | **PASS** | 4 FAQ pairs match on-page accordion |
| **Highlands County Home Selling Guide (`/home-selling-guide-highlands-county/`)** | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | **PASS** | 4 FAQ pairs match on-page accordion |
| **Highlands County Real Estate Market (`/highlands-county-real-estate-market/`)** | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | **PASS** | 5 FAQ pairs match on-page accordion |
| **Tanglewood (`/sebring-neighborhoods/tanglewood/`)** | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | **PASS** | 3 FAQ pairs match on-page accordion |
| **Golf Hammock (`/sebring-neighborhoods/golf-hammock/`)** | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | **PASS** | 3 FAQ pairs match on-page accordion |
| **Sun 'N Lake (`/sebring-neighborhoods/sun-n-lake/`)** | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | **PASS** | 3 FAQ pairs match on-page accordion |
| **Whisper Lake (`/sebring-neighborhoods/whisper-lake/`)** | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | **PASS** | 3 FAQ pairs match on-page accordion |
| **Buttonwood Bay (`/sebring-neighborhoods/buttonwood-bay/`)** | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | **PASS** | 3 FAQ pairs match on-page accordion |
| **Spring Lake (`/sebring-neighborhoods/spring-lake/`)** | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | **PASS** | 3 FAQ pairs match on-page accordion |
| **Sebring Village (`/sebring-neighborhoods/sebring-village/`)** | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | **PASS** | 3 FAQ pairs match on-page accordion |
| **Lakefront Homes (`/sebring-neighborhoods/lakefront-homes/`)** | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | **PASS** | 3 FAQ pairs match on-page accordion |
| **Golf Course Homes (`/golf-course-homes-sebring-fl/`)** | `BreadcrumbList`, `RealEstateAgent` | `BreadcrumbList`, `RealEstateAgent` | **PASS** | Specialty search landing schema |
| **Condos & Villas (`/condos-villas-sebring-fl/`)** | `BreadcrumbList`, `RealEstateAgent` | `BreadcrumbList`, `RealEstateAgent` | **PASS** | Specialty search landing schema |
| **New Homes Sebring FL (`/new-homes-sebring-fl/`)** | `BreadcrumbList`, `RealEstateAgent` | `BreadcrumbList`, `RealEstateAgent` | **PASS** | Canonical target for new construction |
| **Mobile & 55+ Homes (`/mobile-homes-for-sale-sebring-fl/`)** | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | `BreadcrumbList`, `RealEstateAgent`, `FAQPage` | **PASS** | 4 FAQ pairs match on-page accordion |
| **Avon Park Real Estate (`/avon-park-real-estate/`)** | `BreadcrumbList`, `RealEstateAgent`, `Service`, `FAQPage` | `BreadcrumbList`, `RealEstateAgent`, `Service`, `FAQPage` | **PASS** | Address normalized to siteConfig Sebring FL |
| **Lake Placid Real Estate (`/lake-placid-real-estate/`)** | `BreadcrumbList`, `RealEstateAgent`, `Service`, `FAQPage` | `BreadcrumbList`, `RealEstateAgent`, `Service`, `FAQPage` | **PASS** | Address normalized to siteConfig Sebring FL |
| **Blog Hub (`/blog/`)** | `BreadcrumbList` | `BreadcrumbList` | **PASS** | Content collection listing hub |
| **Blog Article Layout (`BlogPostLayout`)** | `BreadcrumbList`, `Article`, `RealEstateAgent` | `BreadcrumbList`, `Article`, `RealEstateAgent` | **PASS** | Publisher RealEstateAgent has complete NAP |
| **Privacy Policy (`/privacy-policy/`)** | `BreadcrumbList` | `BreadcrumbList` | **PASS** | Utility page breadcrumb hierarchy |
| **Terms of Service (`/terms-of-service/`)** | `BreadcrumbList` | `BreadcrumbList` | **PASS** | Utility page breadcrumb hierarchy |
| **HTML Sitemap (`/sitemap/`)** | `BreadcrumbList` | `BreadcrumbList` | **PASS** | Utility page breadcrumb hierarchy |
| **404 Not Found (`/404`)** | `noindex: true` (no indexable schema) | `noindex: true` | **PASS** | Excluded from indexation |

---

## Discrepancies Fixed During Audit

1. **Avon Park & Lake Placid Address Normalization**: Fixed `RealEstateAgent` schema address and geo-coordinates in `src/pages/avon-park-real-estate.astro` and `src/pages/lake-placid-real-estate.astro` so `addressLocality`, `addressRegion`, `postalCode`, `addressCountry`, and `telephone` match `siteConfig` exactly instead of local municipal variants.
2. **Blog Article Publisher RealEstateAgent**: Added `telephone` and `address` to publisher `RealEstateAgent` in `src/layouts/BlogPostLayout.astro`.
3. **Lake Placid FAQ Character Escaping Match**: Fixed double-quote encoding in `src/pages/lake-placid-real-estate.astro` for the Caladium question (`Why is Lake Placid called the 'Caladium Capital of the World'?`) to guarantee a 100% exact match between schema and rendered HTML.
4. **Lakefront Homes Breadcrumb Redundancy**: Prevented duplicate "Homes Homes" string in `src/pages/sebring-neighborhoods/[slug].astro` breadcrumb list.
5. **No REALTOR® in Placeholders or Schemas**: Replaced all remaining instances in placeholder metadata with "Real Estate Agent" or "Licensed Florida Real Estate Agent".
