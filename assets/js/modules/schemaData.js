// schemaData.js
// Injects LocalBusiness structured data into <head> for SEO.

export function injectSchemaData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Scoopy That Poopy",
    "image": "https://scoopythatpoopy.com/assets/images/social/socialPreview.jpg",
    "@id": "https://scoopythatpoopy.com/",
    "url": "https://scoopythatpoopy.com/",
    "telephone": "(702) 000-0000",
    "priceRange": "$",
    "serviceType": "Pet Waste Removal",
    "areaServed": "Las Vegas, NV",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Las Vegas",
      "addressRegion": "NV",
      "addressCountry": "US"
    },
    "description":
      "Scoopy That Poopy offers professional, affordable pet waste removal in Las Vegas.",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday"
        ],
        "opens": "08:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/scoopythatpoopy",
      "https://www.instagram.com/scoopythatpoopy"
    ]
  };

  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(schema, null, 2);
  document.head.appendChild(script);
}
