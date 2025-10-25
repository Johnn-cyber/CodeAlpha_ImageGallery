
# Codealpha Image Gallery

A simple, responsive image gallery built with plain HTML, CSS and JavaScript. It demonstrates: category filtering, a lightbox popup with keyboard and button navigation, and a minimal layout for organizing photos by date.

## Features

- Category filters (All, Nature, Portrait) using buttons in the header.
- Click any thumbnail to open the lightbox popup.
- Keyboard navigation in popup: Left / Right arrows for previous/next, Escape to close.
- Next/previous buttons inside the popup for mouse navigation.
- Images are organized in blocks with date headings.

## Files

- `gallery.html` — Main HTML page. Contains the gallery grid, filter buttons, and popup markup.
- `styles.css` — Visual styling for the gallery layout and popup.
- `script.js` — JavaScript logic: filtering, lightbox behaviors, and keyboard navigation.
- `Images/` — Folder containing the image assets used by the gallery.

## Quick start

1. Open the project folder and simply open `gallery.html` in your browser (double-click or use "Open File" in your browser).

2. If you'd like to serve it from a local web server (recommended for consistent behavior across browsers), run a simple HTTP server from the project directory. With Python installed you can run:

```powershell
# from the project folder
python -m http.server 8000
# then open http://localhost:8000/gallery.html in your browser
```

## Usage

- Click any filter button (All, Nature, Potrait) to show only those images.
- Click a thumbnail to open the larger image in the lightbox.
- Use the left / right arrows or the on-screen arrows to navigate images.
- Press Escape or click the X button to close the popup.

Note: the filter button for the portrait category is spelled `potrait` in the markup — change the `data-category` values in `gallery.html` and the filter button `data-category` if you wish to standardize to `portrait`.

## Customization

- Add or remove images by placing files in `Images/` and adding/removing the corresponding `.image` blocks in `gallery.html`.
- To add a new category, set `data-category` on each `.image` container and add a button in the header with the same `data-category` value.
- Styling changes can be made in `styles.css`.
- The popup behavior and filtering logic live in `script.js` — you can extend it (captions, animations, lazy loading) from there.

## Accessibility & keyboard support

- The gallery supports keyboard navigation while the lightbox is open: ArrowLeft, ArrowRight, Escape.
- Consider adding ARIA attributes (role="dialog", aria-labels, and focus trapping) to the popup markup in `gallery.html` for improved screen-reader support.

## Troubleshooting

- If images don't appear, verify the `src` paths in `gallery.html` match the files in `Images/` (note case sensitivity in some environments).
- If the popup doesn't show, check that `script.js` is loaded (browser console for errors).

## Next steps / ideas

- Add dynamic thumbnail generation from a single JSON file.
- Add lazy-loading for large galleries (loading='lazy' or IntersectionObserver).
- Improve accessibility (focus management, ARIA roles, captions).

## License

Free to use and modify for personal and educational projects.