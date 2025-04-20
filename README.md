# Developer Portfolio

A modern, responsive developer portfolio website built with React, Vite, Tailwind CSS and more.

## Features

- Responsive design that works on all devices
- Modern UI with subtle animations
- Dynamic content loading from data files
- Contact form
- Resume section with education, experience, and certifications
- Projects showcase
- Skills section with progress bars

## Tech Stack

- **Build Tool**: Vite
- **Frontend Framework**: React with JavaScript
- **Styling**: Tailwind CSS (mobile-first workflow)
- **UI Components**: shadcn/ui-inspired components (JavaScript version)
- **Icons**: react-icons library
- **Animations**: Framer Motion for subtle transitions
- **Navigation**: Smooth scroll between sections

## Getting Started

### Prerequisites

- Node.js 14.x or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/vishalm263/vishhh916.git
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

1. Create a production build
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Preview the production build locally
   ```bash
   npm run preview
   # or
   yarn preview
   ```

## Customizing Your Portfolio

### Personal Information

Edit the data in `src/data/personal.js` to customize:
- Your name and job title
- Bio information
- Contact details
- Social media links

### Projects

Edit `src/data/projects.js` to add your own projects. Each project can include:
- Title and description
- Image
- Tags (technologies used)
- Links to source code and live demo

### Skills

Edit `src/data/skills.js` to showcase your skills with progress bars.

### Resume

Edit `src/data/resume.js` to update:
- Education history
- Work experience
- Certifications

## Deployment

### Deploying to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy with default settings (Vite should be auto-detected)

### Deploying to Netlify

1. Push your code to GitHub
2. Import your repository in Netlify
3. Set the build command to `npm run build` (or `yarn build`)
4. Set the publish directory to `dist`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/) (for inspiration)

## Working with Images

### Image Structure

The portfolio uses two types of image locations:

1. **Profile image**: Stored in `src/assets/profile.jpg` and imported directly in components
2. **Project images**: Stored in `public/images/` folder and referenced with paths like `/images/project1.jpg`

### Adding/Replacing Images

#### Profile Image

1. Place your profile photo in the `src/assets/` directory with the name `profile.jpg`
2. For best results, use a square image with dimensions of at least 400x400 pixels
3. If you want to use a different filename or format, update the import in `src/components/AboutSection.jsx`

#### Project Images

1. Place your project screenshots in the `public/images/` directory
2. Name them consistently (e.g., project1.jpg, project2.jpg, etc.)
3. For best results, use images with the same aspect ratio (16:9 recommended)
4. Update the image paths in `src/data/projects.js` to match your filenames

#### Background/Hero Image

1. To replace the hero background, add your image to `src/assets/` 
2. Update the path in `tailwind.config.js` under the `backgroundImage` section

### Image Optimization Tips

- Compress images before adding them to reduce loading time
- Use JPG for photos and PNG for images with transparency
- Recommended dimensions:
  - Profile photo: 400x400px (1:1 ratio)
  - Project screenshots: 1280x720px (16:9 ratio)
  - Background images: 1920x1080px or larger
