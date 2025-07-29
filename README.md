# Mechanical Engineer Portfolio

A modern, responsive portfolio website for a mechanical engineer built with React, TailwindCSS, and JavaScript. Features a sleek design with dark/light mode toggle and all the essential sections for showcasing engineering work.

## Features

- ✅ **Fully Responsive Design** - Works perfectly on all devices
- ✅ **Dark/Light Mode Toggle** - Persistent theme preference
- ✅ **Modern UI/UX** - Clean, professional design inspired by modern portfolios
- ✅ **Smooth Scrolling** - Navigation with smooth scroll animations
- ✅ **Interactive Components** - Hover effects and animations
- ✅ **Contact Form** - Functional contact form with validation
- ✅ **Download Resume** - Working resume download functionality
- ✅ **Skills with Progress Bars** - Visual representation of engineering skills
- ✅ **Project Showcase** - Featured projects with technology tags
- ✅ **Toolkit Section** - Engineering tools and services overview

## Sections

1. **Hero Section** - Eye-catching introduction with terminal-style display
2. **About** - Personal information and download resume button
3. **Skills** - Engineering skills with progress bars (CAD, FEA, MATLAB, etc.)
4. **Projects** - Featured engineering projects with descriptions
5. **Toolkit** - Engineering tools and services offered
6. **Contact** - Contact form and contact information

## Technologies Used

- **React 18** - Modern React with hooks
- **TailwindCSS** - Utility-first CSS framework
- **React Icons** - Beautiful icons from Feather Icons
- **JavaScript ES6+** - Modern JavaScript features
- **HTML5** - Semantic HTML structure
- **CSS3** - Custom animations and transitions

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mechanical-engineer-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the portfolio

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Customization

### Personal Information
Update the following files to customize the portfolio:

- `src/components/Hero.js` - Update name, title, and description
- `src/components/About.js` - Update personal information and resume content
- `src/components/Contact.js` - Update contact information and social links
- `src/components/Projects.js` - Add your own projects
- `src/components/Skills.js` - Update skills and proficiency levels

### Styling
- Modify `tailwind.config.js` for custom colors and themes
- Update `src/index.css` for custom CSS classes
- Adjust component styling in individual component files

### Images
Replace placeholder content with your own:
- Profile pictures
- Project screenshots
- Company logos
- Social media links

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation with dark mode toggle
│   ├── Hero.js            # Hero section with terminal display
│   ├── About.js           # About section with resume download
│   ├── Skills.js          # Skills with progress bars
│   ├── Projects.js        # Featured projects showcase
│   ├── Toolkit.js         # Engineering tools and services
│   └── Contact.js         # Contact form and information
├── App.js                 # Main app component
├── index.js               # React entry point
└── index.css              # Global styles and TailwindCSS
```

## Features in Detail

### Dark Mode Toggle
- Persistent theme preference using localStorage
- Smooth transitions between themes
- System preference detection

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Optimized navigation for mobile devices

### Contact Form
- Form validation
- Responsive design
- Success message handling
- Ready for backend integration

### Skills Section
- Visual progress bars
- Gradient color schemes
- Hover animations
- Additional skills grid

### Project Showcase
- Card-based layout
- Technology tags
- Demo and code links
- Responsive grid system

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size
- Lazy loading ready
- Efficient re-renders
- Smooth animations

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For questions or support, please open an issue on GitHub or contact the developer.

---

**Built with ❤️ using React and TailwindCSS** 