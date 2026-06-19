# TODO

## Fix Vercel 404 NOT_FOUND
- [ ] Identify which URL path is returning 404 in production (request URL in Network tab).
- [ ] Map that path to TanStack Start routes or to static files under `public/`.
- [ ] Fix route/static serving mismatch (likely `sitemap.xml` or a static asset path).
- [ ] Rebuild and redeploy to verify 404 is gone.

## Fix all remaining runtime errors
- [ ] Run `npm run build` locally and scan for warnings/errors.
- [ ] Search codebase for any hard-coded asset URLs not using imports or `public/`.
- [ ] Add/adjust `vercel.json` rewrites if needed for SPA/SSR routing.
- [ ] Verify pages (`/`, `/about`, `/services`, etc.) all return 200 on Vercel.
