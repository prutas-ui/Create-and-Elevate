# Create and Elevate – clothing shop (frontend only)

Open `index.html` in a browser (needs internet for Bootstrap and Google Fonts CDN links).

## Adding real photos
Every image slot tries a `.jpg` first and falls back to the illustrated `.svg` of the same name.
Drop your photos into `images/` with these exact names and they replace the illustrations automatically:

| File | Suggested photo | Ideal ratio |
|---|---|---|
| hero.jpg | Person in a graphic tee in front of graffiti wall | 4:3 |
| shop.jpg | Shop interior, clothing racks | 4:3 |
| feature.jpg | Featured tee, styled shot | 7:5 |
| tee-create.jpg, tee-elevate.jpg | Flat-lay tee shots | 1:1 |
| wall.jpg | Wide graffiti wall | 8:3 |
| product-1.jpg … product-8.jpg | One product each (see js/app.js) | 1:1 |

Free, licence-friendly sources: unsplash.com, pexels.com, pixabay.com
Search terms: "graffiti wall streetwear", "t-shirt flat lay", "clothing store interior", "folded tshirts".
Better still, photograph your own pieces.

## Files
- index.html – page structure (Bootstrap 5 grid, navbar, offcanvas cart)
- css/style.css – theme (teal palette, light/dark)
- js/app.js – product list, search, filter, sort, cart + newsletter saved in localStorage
