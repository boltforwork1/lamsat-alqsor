# Image Organization Guide

This document outlines the folder structure for all website images organized by page.

## Folder Structure

```
public/
├─ images/
│  ├─ home/
│  ├─ about/
│  ├─ services/
│  ├─ projects/
│  └─ contact/
├─ logo.png (shared across all pages)
└─ ... (other files)
```

## Required Images by Page

### Home Page (`/images/home/`)
| File Name | Usage | Suggested Dimensions |
|-----------|-------|----------------------|
| `hero.png` | Full-screen hero background with scale animation | 1920×1080px (or wider) |
| `interior.png` | Interior works showcase in services section | 600×600px (square) |
| `gypsum.png` | Luxury gypsum service showcase | 600×600px (square) |
| `exterior.png` | Exterior works showcase | 600×600px (square) |
| `project1.png` | Featured project in about section (600×500px with hover grayscale effect) | 600×600px |
| `project2.png` | Featured project in portfolio grid (with hover zoom effect) | 600×600px |

### About Page (`/images/about/`)
| File Name | Usage | Suggested Dimensions |
|-----------|-------|----------------------|
| `hero.png` | About page hero/header background | 1920×1080px |
| `signature.png` | Main about section image with border overlay | 600×600px |

### Services Page (`/images/services/`)
| File Name | Usage | Suggested Dimensions |
|-----------|-------|----------------------|
| `interior.png` | Interior Works service section image | 800×600px |
| `gypsum.png` | Luxury Gypsum service section image | 800×600px |
| `exterior.png` | Exterior & Facade service section image | 800×600px |
| `paint.png` | Additional service showcase in grid | 800×600px |

### Projects Page (`/images/projects/`)
| File Name | Usage | Suggested Dimensions |
|-----------|-------|----------------------|
| `project-1.png` | Gallery project 1 (Royal Palace Hallway) | 600×675px |
| `project-2.png` | Gallery project 2 (Grand Dome Gypsum) | 600×675px |
| `project-3.png` | Gallery project 3 (Neoclassical Facade) | 600×675px |
| `project-4.png` | Gallery project 4 (Classic Bedroom) | 600×675px |
| `project-5.png` | Gallery project 5 (Victorian Living Room) | 600×675px |
| `project-6.png` | Gallery project 6 (Grand Villa Entrance) | 600×675px |

### Contact Page (`/images/contact/`)
Currently no images are used on the contact page.

## Image Upload Instructions

1. Create the following directories in the `public` folder:
   ```
   public/images/home/
   public/images/about/
   public/images/services/
   public/images/projects/
   public/images/contact/
   ```

2. Upload images to their respective folders following the file names listed above

3. Ensure images are optimized for web (JPG for photographs, PNG for graphics with transparency)

4. Images will be automatically served from the paths referenced in the component code

## Current Implementation

All page components have been updated to reference local image paths:
- **Home.tsx**: Uses `/images/home/*` paths
- **About.tsx**: Uses `/images/about/*` paths
- **Services.tsx**: Uses `/images/services/*` paths
- **Projects.tsx**: Uses `/images/projects/*` paths
- **Contact.tsx**: No image paths (form-based page)

## Image Features

Images on this site have the following effects applied:

1. **Hero Images**: Smooth zoom animation on page load
2. **Hover Effects**:
   - Grayscale filter on hover with transition to color
   - Scale/zoom on hover with transform effects
   - Border color transitions
3. **Filters**: Some images use grayscale effect that removes on hover

## Notes

- The `logo.png` file remains in the root `public` folder as it's used across all pages in the navigation
- All paths are relative to the `public` folder
- Image references use forward slashes (/) for cross-platform compatibility
- The folder structure enforces page isolation - each page only references its own images
