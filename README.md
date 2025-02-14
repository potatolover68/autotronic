# autotronic.dunce.party

> so named because the first skin i made was an autotronic karambit

An interactive web viewer for CS:GO weapons in the style of a Trading Card.

this site's art is licensed under the [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
this sites code uses https://micku7zu.github.io/vanilla-tilt.js/ under the [MIT License](https://github.com/micku7zu/vanilla-tilt.js/blob/master/LICENSE)

the code is under the [AGPL v3](https://www.gnu.org/licenses/agpl-3.0.html) license

## Features

- Interactive 3D card tilt effect
- Weapon categorization and filtering
- Search functionality
- Compact view mode
- do not press f pls

## Card Creation Guide

### Tools Required

- Figma
- Blender (with csgoitem.blend)
- Image editing software for upscaling

### Card Creation Process

1. **Blender Setup**

   - Use csgoitem.blend to render your weapon images
   - weapons are exported with Source2Viewer as a gltf then imported into blender where it is manually lit and exported at high quality

2. **Figma Layout**

   ![screenshot](<dev/Screenshot 2025-02-13 173930.png>)

   - Create an outer frame of 450x630 pixels
   - Inside this, create Frame 1 at 300x420 pixels
   - Place your rendered weapon image inside the outer frame

3. **Image Export Process**
   1. Export Frame 1 (300x420)
   2. Upscale the exported image by 4x to achieve 1200x1680 final resolution
   3. This will be your final card image

### Card Design Specifications

- **Outer Frame**: Ax630 pixels

  - Used as the working area in Figma
  - Contains all design elements
  - A can be anything, as long as the inner frame is centered

- **Inner Frame (Frame 1)**: 300x420 pixels
  - Main card design area
  - Will be upscaled 4x for final output

### Adding New Cards

1. Create your card following the process above
2. Add the card information to `weapons.json`:

```json
{
  "name": "Weapon Name",
  "category": "Category",
  "image": "./assets/weapon_front.png",
  "image-alt": "Weapon Name Front",
  "card": "./assets/weapon_card.png",
  "card-alt": "Weapon Name Card",
  "link": "optional-steam-market-link"
}
```

## Development

### Setup

1. Clone the repository
2. Open `index.html` in a modern web browser
3. No build process required - it's pure HTML, CSS, and JavaScript

### File Structure

- `index.html` - Main application
- `weapons.json` - Weapon data and card information
- `assets/` - Contains all weapon images and cards
  - `fonts/` - IBM Plex Mono font files
  - `logo.svg` - dunce.party logo
  - `fire.webp`, `fire2.webp` - press f do discover whatever this is
