# SEO architecture

Home → category → individual tool.

Examples:
- /text/remove-duplicate-lines/
- /developer/json-formatter/
- /image/jpg-to-webp/

Each tool page has a unique title, description and canonical URL.
The production build creates 100 tool pages + 3 category pages + home = 104 sitemap URLs.

The sitemap and SEO pages are generated automatically from `src/data/tools.js` during `npm run build`.
