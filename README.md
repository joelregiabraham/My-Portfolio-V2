# Joel Regi Abraham - Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my experience as a Computer Science Honours student and full-stack developer.

## 🚀 Features

- **Modern Design**: Clean, minimalist design with smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Dark Mode**: Toggle between light and dark themes
- **Performance Optimized**: Static generation with Next.js
- **Accessible**: Semantic HTML and ARIA labels
- **SEO Friendly**: Meta tags and structured data

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **TypeScript**: Full type safety

## 📁 Project Structure

\`\`\`
joel-portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   ├── about-section.tsx
│   ├── contact-section.tsx
│   ├── experience-section.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── navbar.tsx
│   ├── projects-section.tsx
│   ├── skills-section.tsx
│   └── theme-toggle.tsx
├── lib/
│   └── utils.ts
└── public/
    └── resume.pdf (add your resume here)
\`\`\`

## 🚀 Getting Started

1. **Clone the repository**
   \`\`\`bash
   git clone <your-repo-url>
   cd joel-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Personal Information
Update the following files with your information:

- `components/hero-section.tsx` - Name, tagline, and social links
- `components/about-section.tsx` - Bio and background
- `components/projects-section.tsx` - Your projects
- `components/experience-section.tsx` - Work experience and education
- `components/contact-section.tsx` - Contact information

### Profile Image
Replace the placeholder image in `components/about-section.tsx`:
\`\`\`tsx
src="/your-profile-image.jpg" // Replace with your actual image
\`\`\`

### Resume
Add your resume PDF to the `public` folder as `resume.pdf`

### Contact Form
The contact form is set up with a basic structure. To make it functional:

1. **Using Formspree** (Recommended):
   - Sign up at [formspree.io](https://formspree.io)
   - Replace the form action in `components/contact-section.tsx`

2. **Using Netlify Forms**:
   - Add `netlify` attribute to the form
   - Deploy to Netlify

3. **Custom API Route**:
   - Create `app/api/contact/route.ts`
   - Implement your email sending logic

## 🌐 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Static Export
For static hosting:
\`\`\`bash
npm run build
\`\`\`

## 🎨 Customization Options

### Colors
Modify the color scheme in `app/globals.css` and `tailwind.config.ts`

### Animations
Add custom animations in `app/globals.css`

### Sections
Add or remove sections by modifying `app/page.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- High contrast support

## 🔧 Performance

- Static generation with Next.js
- Optimized images with Next.js Image component
- Minimal JavaScript bundle
- CSS optimization with Tailwind

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

Joel Regi Abraham
- Email: itzmejoels@gmail.com
- Phone: 579-985-8555
- LinkedIn: [linkedin.com/in/joel](https://linkedin.com/in/joel)
- GitHub: [github.com/joel](https://github.com/joel)

---

Built with ❤️ using Next.js and Tailwind CSS
