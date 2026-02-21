# Portfolio Website - Refactored Structure

## 📁 Project Structure

```
src/
├── App.jsx                      # Main application component
├── components/                  # Reusable UI components
│   ├── Navigation.jsx          # Top navigation bar
│   ├── Hero.jsx                # Hero/landing section
│   ├── Projects.jsx            # Projects showcase section
│   ├── Experience.jsx          # Experience & education section
│   └── Contact.jsx             # Contact section
├── data/
│   └── portfolioData.js        # All portfolio data (projects, experience, education)
└── styles/
    └── sharedStyles.js         # Shared styling utilities
```

## 🎯 Component Breakdown

### **App.jsx**
- Main container component
- Handles scroll tracking and navigation state
- Orchestrates all sections

### **Navigation.jsx**
- Fixed navigation bar
- Mobile responsive menu
- Active section highlighting
- Props: `activeSection`, `isMenuOpen`, `setIsMenuOpen`, `scrollToSection`

### **Hero.jsx**
- Landing section with introduction
- Avatar, name, title, bio
- Social media links
- CTA button
- Props: `scrollToSection`

### **Projects.jsx**
- Grid display of projects
- Project cards with tags
- Links to GitHub and demos
- Props: `projects` (array from portfolioData.js)

### **Experience.jsx**
- Work experience timeline
- Education section
- Skill tags for each position
- Props: `experience`, `education` (arrays from portfolioData.js)

### **Contact.jsx**
- Contact section with email/LinkedIn links
- Footer with copyright and phone
- No props needed (static content)

## 📝 Data Management

All content is centralized in `data/portfolioData.js`:

```javascript
export const projectsData = [...];
export const experienceData = [...];
export const educationData = [...];
```

**Benefits:**
- Easy to update content without touching components
- Consistent data structure
- Can be easily replaced with API calls later

## 🎨 Styling Approach

Shared styles are in `styles/sharedStyles.js`:
- Common styles (sections, titles, tags, cards, buttons)
- Consistent design language
- Easy to maintain and update colors/spacing

Component-specific styles remain in each component file.

## 🔧 How to Update Content

### Update Projects
Edit `data/portfolioData.js` → `projectsData` array

### Update Experience
Edit `data/portfolioData.js` → `experienceData` array

### Update Education
Edit `data/portfolioData.js` → `educationData` array

### Update Personal Info
Edit the respective component files:
- Name/Title: `components/Hero.jsx`
- Contact info: `components/Contact.jsx`

## 🚀 Benefits of This Structure

1. **Maintainability**: Each component has a single responsibility
2. **Reusability**: Components can be easily reused or rearranged
3. **Scalability**: Easy to add new sections or features
4. **Readability**: Clear file structure and separation of concerns
5. **Data Management**: Centralized data makes updates simple
6. **Testing**: Individual components can be tested in isolation

## 📦 File Sizes (Approximate)

- App.jsx: ~100 lines (was ~675)
- Navigation.jsx: ~110 lines
- Hero.jsx: ~100 lines
- Projects.jsx: ~80 lines
- Experience.jsx: ~110 lines
- Contact.jsx: ~75 lines
- portfolioData.js: ~70 lines
- sharedStyles.js: ~90 lines

**Total: ~735 lines** (similar to original, but much more organized!)

## 🎯 Next Steps

1. Copy all files to your `src/` directory
2. Update imports in your index.js if needed
3. Test the application
4. Customize content in `portfolioData.js`
5. Deploy!

## 💡 Future Enhancements

Possible improvements:
- Add animations with Framer Motion
- Implement dark/light mode toggle
- Add a blog section
- Connect to a CMS for content management
- Add unit tests for components
- Implement lazy loading for sections
