# public/ — static assets

Everything in this folder is served from the site root.

## Placeholders to replace

- `headshot.jpg` — replace with your real headshot (square, ≥220px). Strip EXIF before committing: `exiftool -all= headshot.jpg`.
- `cv.pdf` — replace with your real CV. Recommend redacting phone/home address from the published copy.
- `projects/dexterous-grasping/thumb.jpg` — project thumbnail.
- `projects/dexterous-grasping/hero.mp4` — project hero video (optional; referenced from the project markdown). Add the file or remove the `hero_video` field from the markdown frontmatter.
- `publications/dex-video/thumb.jpg` — publication thumbnail.
- `blog/contact-simulation/cover.jpg` — blog post cover (optional).

The current placeholders are tiny grey rectangles; they're committed only so the
site renders without 404s during development.
