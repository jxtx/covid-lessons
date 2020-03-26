# SARS-NCOV-2 / COVID-19 generated lectures

Framework to generate HTML, slides (HTML, pdf, images) and narrated videos 
(using ari) from markdown.

Markdown source files are in `src/*.md`.

Jake tasks exist to generate slides in html, pdf, image, and video. For example,
to generate from the markdown file `src/sars2-biology.md` run:

- HTML slides: `yarn rake dist/sars2-biology-slides.html`
- PDF slides: `yarn rake dist/sars2-biology-slides.pdf`
- Video: `yarn rake dist/sars2-biology-slides.mp4`

