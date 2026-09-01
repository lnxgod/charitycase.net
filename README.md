# CharityCase.net

Static GitHub Pages replacement for the former Wix site.

## What is preserved

- All ten Wix blog posts and their legacy `/post/...` URLs
- Original post images stored in this repository
- NO STEP ON SNEK desktop, mobile, and remix games
- Map6/JB4 HTML log analyzer
- Cyber Security Companion embed
- Social links and PayPal donation link
- Legacy `/general-4`, `/general-4-1`, `/coming-soon-01`, and `/blank` routes

## Local preview

```sh
npm run build
npm run serve
```

Open <http://127.0.0.1:4173/>.

## Publishing

Publish the `docs` folder from the `main` branch with GitHub Pages. The `CNAME` file configures `charitycase.net` as the custom domain.

This repository is intentionally separate from the `moes` repository and does not change the Moe's site or domain.
