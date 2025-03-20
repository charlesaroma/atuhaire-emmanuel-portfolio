# Actor Portfolio Website Prompt

## **Project Overview**
**Website Name:** Atuhaire Emmanuel Abala - Official Portfolio  
**Objective:** Build a **modern, film-inspired** actor portfolio for **Atuhaire Emmanuel Abala**, an award-winning Ugandan actor, using **React (Vite) & Tailwind CSS v4**. The site should be sleek, cinematic, and easy to navigate.

## **Tech Stack**
- **Frontend:** React (Vite) - **No TypeScript, only JSX**
- **Styling:** Tailwind CSS **v4** with dynamic theme configuration
- **Animations:** Framer Motion for smooth effects
- **Icons & UI Components:** Lucide-react, shadcn/ui
- **Routing:** React Router
- **Performance:** Lazy loading, WebP images, minimal dependencies
- **Deployment:** Vercel or Netlify

## **Tailwind Theme Customization**
- Dynamic colors via `tailwind.config.js`
- Default **dark mode-first** design with easy toggling

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      colors: {
        primary: "#E50914", // Netflix Red (default, changeable)
        accent: "#222222",  // Dark background
        text: "#F5F5F5",    // Light text
      },
    },
  },
}
```

## **Site Structure & Features**
### 📌 **Home (Hero Section)**
- Full-screen **cinematic video** or **parallax scrolling**
- Animated **intro text**: "Atuhaire Emmanuel Abala - Award-winning actor from Uganda"
- "Enter" button with smooth transition

### 📌 **About Section**
- High-quality **profile image** with a filmstrip effect
- Animated **bio reveal**

### 📌 **Filmography & Portfolio**
- **Movies:** *Enkuba, When You Become Me, Jimbi, Blood Ransom, Chwezi Dynasty, Ethania*
- **TV Series:** *Kyaddala, Crossroads*
- Interactive **grid gallery with hover effects**

### 📌 **Gallery Section**
- **Masonry or grid layout** showcasing behind-the-scenes photos, red carpet events, and stills from films/TV series.
- **Lightbox feature** for enlarging images when clicked.
- **Category filters** (e.g., Behind the Scenes, Film Stills, Press & Media).
- **Smooth hover animations** for an immersive experience.

### 📌 **Showreel Section**
- **Cinema-themed video player**
- **Genre filter tabs** (Drama, Action, Comedy)

### 📌 **Awards & Press**
- **Carousel of testimonials & awards**
- Press reviews & magazine quotes

### 📌 **Contact & Booking**
- Integrated **calendar for scheduling**
- Contact form (Formspree/Nodemailer)
- **Social media & agent details**

## **Bonus Features**
✅ **Dark Mode First** with optional toggle  
✅ **Dynamic Tailwind Theme** (Easily customizable colors)  
✅ **3D Hover Effects** using Three.js  
✅ **Time-based Theme Change** (Background changes based on time of day)  

## **File Structure**
```
actor-portfolio/
│── public/
│   ├── assets/
│   │   ├── images/
│   │   ├── videos/
│   ├── index.html
│
│── src/
│   ├── components/
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Filmography.jsx
│   │   ├── Gallery.jsx
│   │   ├── Showreel.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Gallery.jsx
│   │   ├── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│
│── tailwind.config.js
│── vite.config.js
│── package.json
│── README.md
```

## **Development Priorities**
1️⃣ **Performance & Speed** - Optimized build with lazy loading  
2️⃣ **Cinematic Aesthetic** - Smooth animations, high-quality visuals  
3️⃣ **Mobile-First Design** - Fully responsive with touch gestures  
4️⃣ **SEO & Accessibility** - Optimized metadata, alt text, keyboard navigation  

---

### ✅ **Next Steps**
Would you like a **starter code setup** with Tailwind v4 and Vite? 🚀
