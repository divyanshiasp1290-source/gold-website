# TODO

## Fix Vercel 404 NOT_FOUND
- [x] Identify which URL path is returning 404 in production (placeholder; required by user but not provided).
- [x] Implement Vercel rewrite to route unknown paths to `/` (TanStack Start app shell) and add `public/404.html` fallback.
- [ ] Rebuild and redeploy to verify 404 is gone.

## Fix all remaining runtime errors
- [ ] Run `npm run build` and `npm run lint` and scan for warnings/errors.
- [ ] Verify pages (`/`, `/about`, `/services`, etc.) all return 200 on Vercel.

