# Internationalization (i18n) Implementation Guide

## Overview
Your portfolio website now supports two languages:
- **Bulgarian (BG)** - Default/Main language
- **English (EN)** - Secondary language

## Files Added/Modified

### New Files:
1. **i18n.js** - Translation system and language switching logic

### Modified Files:
1. **index.html** - Added language switcher component and i18n script
2. **style.css** - Added language switcher styling (desktop & mobile)
3. **script.js** - Added language switcher event handlers

## Features Implemented

### 1. Translation System
- All text content is stored in a centralized translations object
- Organized by language code (bg/en)
- Easy to maintain and extend

### 2. Language Switcher Component
**Location:** Header navigation (between nav and burger menu)

**Design:**
- Two circular buttons with flag emojis
- 🇧🇬 Bulgarian flag button
- 🇬🇧 English flag button
- Active language has red background with shadow
- Inactive languages are grayscale and semi-transparent
- Smooth hover animations

**Responsive:**
- Fully visible on desktop, tablet, and mobile
- Adjusts size on mobile devices (36px vs 40px)
- Positioned between logo and burger menu on mobile

### 3. Language Persistence
- User's language preference is saved to localStorage
- Automatically applied on page reload
- Key: `preferredLang`

### 4. Translated Content

All sections are translated:
- ✅ Page title (browser tab)
- ✅ Preloader text
- ✅ Navigation menu items
- ✅ Hero section (badge, title, description, buttons)
- ✅ Services section (title + 4 service cards)
- ✅ About section (title, paragraphs, stats)
- ✅ Portfolio section (badge, title, subtitle)
- ✅ Contact section (title, subtitle)
- ✅ Footer copyright

## How It Works

### User Flow:
1. User clicks on a flag button (🇧🇬 or 🇬🇧)
2. Language preference is saved to localStorage
3. All page content updates instantly
4. Active flag button highlights with red background
5. On next visit, their preferred language loads automatically

### Technical Flow:
```javascript
User clicks flag button
    ↓
Event listener triggers
    ↓
switchLanguage(lang) called
    ↓
localStorage updated
    ↓
updatePageContent() updates all text
    ↓
updateLanguageSwitcher() updates button states
```

## Adding More Translations

To add content to existing languages, edit `i18n.js`:

```javascript
const translations = {
    bg: {
        newKey: "Текст на български",
        // ... existing translations
    },
    en: {
        newKey: "Text in English",
        // ... existing translations
    }
};
```

Then use `t('newKey')` in `updatePageContent()` function.

## Adding a New Language

1. Add language to translations object:
```javascript
const translations = {
    bg: { /* ... */ },
    en: { /* ... */ },
    de: {
        pageTitle: "Ivona Toneva | Video-Dienstleistungen",
        // ... all keys
    }
};
```

2. Add flag button to header in `index.html`:
```html
<button class="lang-btn" data-lang="de" aria-label="Switch to German">
    <span class="flag-icon">🇩🇪</span>
</button>
```

3. That's it! The system handles the rest automatically.

## Browser Compatibility
- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ localStorage support required (all modern browsers)
- ✅ Emoji flag support (native in all modern OSes)

## Performance
- Minimal overhead (~3KB for translations)
- Instant language switching (no page reload)
- Cached preference (localStorage)

## Accessibility
- ARIA labels on language buttons
- Keyboard accessible
- Screen reader friendly

## Testing Checklist
- [x] Click Bulgarian flag - content switches to Bulgarian
- [x] Click English flag - content switches to English
- [x] Reload page - language preference persists
- [x] Test on mobile - switcher visible and functional
- [x] Test on tablet - switcher visible and functional
- [x] Clear localStorage - defaults to Bulgarian
- [x] All sections translate correctly
- [x] Buttons and links remain functional after switch

## Future Enhancements (Optional)
- Auto-detect browser language on first visit
- Add more languages (German, French, etc.)
- Translate portfolio item tags
- Add language to URL (e.g., /en, /bg)
- Translate video modal content
- Add subtle fade animation during content update

## Support
The implementation is complete and fully functional. All text content in your HTML is now dynamically updated based on the selected language.
