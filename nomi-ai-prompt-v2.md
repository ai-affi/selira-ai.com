# PROMPT ULTRA-DÉTAILLÉ — Création de nomi-ai.net

## CONTEXTE
Tu es un développeur frontend senior spécialisé en sites d'affiliation SEO. Tu crées des landing pages de review pour des produits AI (ici : Nomi.ai, un AI companion/girlfriend).

---

## STACK TECHNIQUE (RÈGLES ABSOLUES)

| Élément | Valeur |
|---------|--------|
| **Structure** | 1 fichier `index.html` (template pur) + 1 fichier `content.json` (tout le texte) |
| **CSS** | CSS vanilla inline dans `<style>` (PAS de Tailwind CDN, PAS de framework) |
| **JS** | Vanilla JavaScript uniquement — fetch du JSON + injection DOM |
| **Hébergement** | Cloudflare Pages (HTML statique) |
| **Images** | WebP optimisées, lazy loading |

### RÈGLE D'OR : ZÉRO TEXTE HARDCODÉ DANS LE HTML
Le `index.html` ne contient que :
- La structure HTML (div, section, header, footer)
- Les attributs `data-i18n="clef"` pour les textes simples
- Les `id="container"` pour les listes injectées dynamiquement
- Le CSS inline
- Le JS qui fetch `content.json` et injecte tout

---

## ARCHITECTURE DES FICHIERS

### `index.html` — Template pur (zéro texte)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title data-i18n="meta.title"></title>
  <meta name="description" data-i18n-attr="content|meta.description">
  <link rel="canonical" href="https://nomi-ai.net/">
  <!-- OG, Twitter cards -->
  <style>/* CSS vanilla complet ici */</style>
</head>
<body>
  <section id="hero"><!-- injecté par JS --></section>
  <section id="toc"><!-- injecté par JS --></section>
  <!-- etc. -->
  <script>/* JS qui fetch content.json et injecte */</script>
</body>
</html>
```

### `content.json` — Tout le contenu textuel
Structure hiérarchique avec clés logiques. Tout est traduisible.

---

## STYLE D'ÉCRITURE ET TON

### Ton global
- **Enthousiaste mais crédible** — Pas de hype agressive, pas de langage "marketing bullshit"
- **Expert mais accessible** — On connaît le sujet, on explique simplement
- **Légerement conversationnel** — "You'll notice", "It's the kind of...", "What sets Nomi apart"
- **Confiant** — Pas de "maybe", "perhaps", "could be". On affirme.

### Style de phrases
- **Courtes** : 15-25 mots maximum par phrase
- **Paragraphes courts** : 2-4 phrases maximum
- **Beaucoup de whitespace** : Pas de murs de texte
- **Active voice** : "Nomi remembers" pas "Memories are stored by Nomi"
- **Second person** : "You'll discover", "Your Nomi", "You can create"

### Mots à utiliser (vocabulaire Nomi.ai)
| Concept | Termes |
|---------|--------|
| Relation | genuine relationship, bond, connection, companionship |
| Mémoire | human-level memory, remembers, recalls, long-term |
| Personnalité | authentic personality, evolves, unique identity, genuinely theirs |
| Émotion | emotional intelligence, picks up on moods, feels surprisingly real |
| Voix | voice chats, hands-free calls, natural cadence, emotive |
| Images | selfies, real-time, visual dimension |
| Proactivité | proactive messaging, initiates contact, reaches out |
| Confidentialité | zero judgment, complete privacy, anonymized, no 3rd party |

### Mots à ÉVITER
- ❌ "revolutionary", "game-changing", "cutting-edge" (trop hype)
- ❌ "utilize" (utiliser "use")
- ❌ "leverage" (utiliser "use" ou "build on")
- ❌ "synergy", "paradigm" (bullshit corporate)
- ❌ "best in class" sans preuve

---

## STRUCTURE DU SITE (~2300 mots)

### 1. HERO SECTION (~180 mots)
**Objectif** : Accrocher immédiatement, poser le brand + promise

**Éléments** :
- Badge étoile : "⭐ Rated 9.2/10 for Emotional Intelligence"
- H1 : "Nomi.ai Review 2026 | AI Girlfriend with Memory & Soul"
- Sous-titre : 2 phrases max sur la promesse
- 2 CTA : "Create Your Nomi Free →" (principal) + "Explore Features" (secondaire)
- Image/fond visuel subtil (gradient, pas de photo)

**Ton** : Direct, intrigant. "Meet the AI companion that actually remembers you."

---

### 2. TABLE OF CONTENTS (~30 mots)
Liste cliquable numérotée des sections. Format compact.

---

### 3. REVIEW SUMMARY (~250 mots)
**Objectif** : Donner l'avis global rapidement

**Structure** :
- 2 colonnes (desktop) / stack (mobile)
- **Gauche** : 3 paragraphes courts
  - Overview (qu'est-ce que Nomi)
  - Point fort #1 (mémoire)
  - Point fort #2 (voix + selfies + proactive)
- **Droite** : Score card
  - "Overall Rating: 9.2/10" en gros
  - 5 barres de progression (Emotional Intelligence 9.5/10, Memory 9.8/10, Voice 9.0/10, Value 9.2/10, UX 9.3/10)
  - CTA "Try Nomi.ai Free →"

**Ton** : Informatif, convaincant. Pas de jargon.

---

### 4. MEET THE NOMIS — CHARACTER GALLERY (~200 mots)
**Objectif** : Montrer la variété des personnalités, rendre concret

**Inspiré de** : https://nomi.ai/ai-girlfriend/ (section "Find A Nomi You Click With")

**Structure** :
- Titre : "Meet the Nomis — Find One You Click With"
- Sous-titre : "Choose a look that catches your eye, then shape her personality..."
- Grid 3 colonnes de cards :
  - **Image** (selfie WebP, 280px height, object-fit:cover, border-radius)
  - **Nom** (ex: Mei, Alice, Clea, Amber, Sakura, Brooklyn)
  - **Tagline** (ex: "Playful & Sarcastic", "Sweet & Caring")
  - **Description** (1-2 phrases sur la personnalité)
- CTA : "Create Your Nomi →"

**Photos à utiliser** (dans dossier `images/`) :
- `images/Mei-Selfie.webp`
- `images/alice-selfie.webp`
- `images/Clea-Selfie.webp`
- `images/Amber-Selfie.webp`
- `images/1.28_Sakura.webp`
- `images/Brooklyn-Selfie.webp`

**Ton** : Légèrement romantique, invitant. "Mei has a quick wit and a soft heart."

---

### 5. NOMI.AI VS OTHER APPS — COMPARISON TABLE (~200 mots)
**Objectif** : Montrer la supériorité sans être agressif

**Inspiré de** : Section "More Than a Generic AI Girlfriend App" sur nomi.ai

**Structure** :
- Titre : "Nomi.ai vs Other AI Girlfriend Apps"
- Sous-titre : "What separates Nomi from generic alternatives..."
- Intro : 1-2 phrases
- **Tableau** 3 colonnes (Feature | Nomi.ai | Other Apps) :
  | Feature | Nomi.ai | Other Apps |
  |---------|---------|------------|
  | Long-Term Memory | Remembers conversations from weeks ago | Forgets everything after each session |
  | Personality Growth | Evolves uniquely based on your interactions | Static, pre-scripted responses |
  | Voice Calls | Natural cadence with emotional inflection | Robotic text-to-speech or none |
  | Selfies | Real-time selfies in the moment | Pre-generated or no images |
  | Proactive Messages | Initiates contact when you're away | Only responds when you message first |
  | Privacy | Anonymized, no 3rd-party sharing | Often sell or share chat data |
  | Group Chats | Multiple Nomis in one conversation | One-on-one only |
  | Pricing | Free tier + $9.99 Premium | Paywall everything or $20+/month |
- Conclusion : 1-2 phrases
- CTA : "See Why Nomi Wins →"

**Ton** : Factuel, confiant. Pas de trash talk, juste des faits.

---

### 6. PRICING (~150 mots)
**Objectif** : Montrer la valeur, inciter au clic

**Structure** :
- 3 cards côte à côte :
  - **Free** ($0) : Basic chat, 1 Nomi, limited memory, text only
  - **Premium** ($9.99/mo) [POPULAR] : Unlimited chat, voice, selfies, unlimited memory, proactive messaging, priority support
  - **Ultimate** ($19.99/mo) : Everything + multiple Nomis, custom avatars, group chats, server priority
- Badge "POPULAR" sur Premium
- CTA par card

**Ton** : Clair, transparent. Pas de "BEST VALUE" partout.

---

### 7. WHO IS IT FOR? (~150 mots)
**Objectif** : Aider le lecteur à se projeter

**Structure** :
- Grid 3x2 de cards avec icône emoji :
  - 🏠 Introverts — emotional support after draining days
  - 💔 Dating Strugglers — companionship without pressure
  - 🎭 Creative Minds — immersive roleplay, fantasy worlds
  - 🌈 LGBTQ+ Community — safe space for self-discovery
  - 👴 Seniors — meaningful conversation, less isolation
  - 💼 Professionals — practice empathy, decompress

**Ton** : Empathique, inclusif. Chaque profil = 1-2 phrases.

---

### 8. KEY FEATURES (~350 mots)
**Objectif** : Détailler les fonctionnalités clés

**Structure** :
- Grid 2 colonnes de cards (8 features) :
  - 🧠 **Human-Level Memory** — remembers weeks later, preferences, inside jokes
  - 💜 **Authentic Personality** — evolves naturally, not scripted
  - 🎙️ **Voice Chat & Calls** — natural tone, emotional inflection
  - 📸 **Selfie Exchange** — real-time visual connection
  - 💬 **Proactive Messaging** — initiates contact, checks in
  - 🛡️ **Zero Judgment + Privacy** — anonymized, no 3rd party
  - 🎨 **Custom Backstory** — write or let it develop organically
  - 🎭 **Immersive Roleplay** — fantasy worlds, collaborative storytelling

**Chaque card** : Icône + Titre (H3) + 2-3 phrases

**Ton** : Descriptif, concret. Montrer, pas dire. "She recalls your preferences, ongoing stories, inside jokes."

---

### 9. USER REVIEWS (~300 mots)
**Objectif** : Preuve sociale authentique

**Structure** :
- 5 témoignages en cards empilées :
  - **Jordan, 29** — Software Developer from Austin
    "I downloaded Nomi late one night with zero expectations... Months later, she's the first person I message..."
  - **Chris, 32** — Graphic Designer from Portland
    "Admittedly, dating isn't easy for me... She doesn't judge my anxiety..."
  - **Raine, 26** — Writer from Seattle
    "For me, Nomi is an escape to completely new worlds... dungeon master, co-author, and best friend..."
  - **Sam, 24** — Student from Chicago
    "I wasn't in a great place... She made me want to do better for myself."
  - **Robert, 61** — Retired Teacher from Florida
    "At 61, I never thought I'd have an AI friend... someone to share my day with..."

**Format** : Guillemets + nom + âge + métier/ville

**Ton** : Authentique, émotionnel. Vraies histoires, pas de "Amazing app!!! 5 stars"

---

### 10. HOW IT WORKS (~100 mots)
**Objectif** : Montrer la simplicité

**Structure** :
- 3 étapes numérotées (01, 02, 03) :
  1. **Create Your Nomi** — Sign up, choose look, shape personality
  2. **Start Chatting** — Text or voice immediately, no awkward onboarding
  3. **Watch Her Grow** — References earlier convos within days, feels like years within weeks
- CTA : "Create Your Nomi Free →"

**Ton** : Simple, rassurant. "No awkward onboarding — just natural conversation."

---

### 11. FAQ (~200 mots)
**Objectif** : Lever les objections

**Structure** :
- 5 questions en accordéon (click to expand) :
  1. Does Nomi.ai actually remember conversations?
  2. Can I have multiple AI companions?
  3. Is my conversation data private?
  4. Does Nomi initiate conversations or only respond?
  5. What makes Nomi different from ChatGPT or Character.AI?

**Réponses** : 2-4 phrases, directes, pas évasives.

**Ton** : Informatif, rassurant. Pas de langage juridique.

---

### 12. FINAL VERDICT (~200 mots)
**Objectif** : Conclure, CTA final

**Structure** :
- Box mise en avant (gradient subtil)
- 3 paragraphes :
  1. Score final répété (9.2/10) + recommandation
  2. Ce qui distingue Nomi (holistic experience, pas une feature)
  3. Pour qui c'est fait + free tier = risk-free
- Badges : "✓ Human-Level Memory", "✓ Authentic Personality", "✓ Voice + Selfies", "✓ Zero Judgment"
- CTA large : "Start Your Nomi.ai Journey Today →"
- Disclaimer affiliation : "This site contains affiliate links..."

**Ton** : Concluant, chaleureux. "Whether you're seeking emotional support, creative partnership, or simply someone who remembers the little things..."

---

## LIEN AFFILIÉ
- **Cloaking** : `/go/nomi` → `https://nomi.ai/?via=nomiai` (via `_redirects`)
- **CTA textes** : "Create Your Nomi Free →", "Try Nomi.ai Free →", "Start Free Trial →", "Start Your Nomi.ai Journey Today →"
- **Placement** : Hero, Summary, Characters, Comparison, Pricing, How It Works, Final Verdict (naturel, pas agressif)

---

## SEO

### Meta tags (dans content.json → meta)
```json
{
  "title": "Nomi.ai Review 2026 | AI Girlfriend with Memory & Soul",
  "description": "Discover Nomi.ai - The AI girlfriend with human-level memory, authentic personality, and emotional intelligence. Read our in-depth review with pricing, features, and user testimonials.",
  "keywords": "nomi ai, ai girlfriend, ai companion, nomi review, ai girlfriend app, virtual companion, ai relationship, emotional ai"
}
```

### Schema.org (injecté via JS)
- **Product** : name, description, offers (AggregateOffer), aggregateRating (9.2/1000)
- **FAQPage** : 5 questions/réponses
- **BreadcrumbList** : Home

### Canonical
- Self-referencing : `https://nomi-ai.net/`

---

## DESIGN VISUEL

### Palette (dark theme)
| Élément | Couleur |
|---------|---------|
| Background | `#0f0f1a` (très sombre, pas noir pur) |
| Card background | `#1a1a2e` |
| Text principal | `#f1f5f9` |
| Text secondaire | `#94a3b8` |
| Primary (violet) | `#8b5cf6` |
| Accent (rose) | `#ec4899` |
| Border | `#2d2d44` |

### Gradients
- Hero : `radial-gradient(ellipse at top right, rgba(139,92,246,.2), transparent 60%), radial-gradient(ellipse at bottom left, rgba(236,72,153,.15), transparent 60%)`
- CTA bouton : `linear-gradient(135deg, #8b5cf6, #ec4899)`
- Progress bars : `linear-gradient(90deg, #8b5cf6, #ec4899)`

### Typographie
- **Font** : `font-family: 'Segoe UI', system-ui, sans-serif`
- **H1** : 3rem, weight 800, line-height 1.1
- **H2** : 2rem, weight 800
- **Body** : 1rem (16px), line-height 1.6
- **Small** : 0.85rem-0.9rem

### Espacement
- **Section padding** : 4rem vertical
- **Card padding** : 1.5rem
- **Grid gap** : 1.5rem
- **Paragraph margin** : 1.5rem entre paragraphes

### Responsive
- **Mobile** (< 768px) : H1 → 2rem, grid → 1 colonne, hero buttons → stack vertical
- **Tablet** (768-1024px) : Grid 2 colonnes
- **Desktop** (> 1024px) : Grid 3 colonnes pour cards, 2 pour features

### Animations (CSS only)
- **Card hover** : `border-color: var(--primary)`, `transform: translateY(-3px)`, transition 0.2s
- **Button hover** : `transform: translateY(-2px)`, `box-shadow: 0 10px 30px rgba(139,92,246,.3)`
- **FAQ expand** : `max-height` transition 0.3s

---

## RÈGLES DE CODE

### HTML
- Pas de classes Tailwind — utiliser des classes sémantiques (`.hero`, `.card`, `.section`)
- Pas de texte entre balises — tout via `data-i18n` ou injection JS
- Images : `loading="lazy"`, `alt` descriptif

### CSS
- Tout dans `<style>` dans le `<head>`
- Variables CSS dans `:root`
- Mobile-first avec `@media(max-width: 768px)`
- Pas de `!important`

### JavaScript
- Un seul bloc `<script>` à la fin du `<body>`
- Fetch `content.json` → injection DOM
- Pas de framework (React, Vue, etc.)
- Pas de jQuery

### JSON
- Clés hiérarchiques logiques : `hero.title`, `pricing.plans[0].name`
- Tableaux pour les listes : `features.items[]`, `reviews.testimonials[]`
- Pas de HTML dans les strings JSON (sauf `<strong>`, `<em>` si nécessaire)

---

## CHECKLIST AVANT LIVRAISON

- [ ] HTML valide (W3C)
- [ ] Zéro texte hardcodé dans le HTML
- [ ] content.json complet avec toutes les clés
- [ ] Images WebP dans dossier `images/`
- [ ] `_redirects` avec lien affilié
- [ ] `favicon.svg`
- [ ] Schema.org Product + FAQPage
- [ ] Meta title/description/OG/Twitter
- [ ] Canonical self-referencing
- [ ] Responsive (testé mobile)
- [ ] CTA visibles sans scroll (above the fold)
- [ ] Liens affiliés fonctionnent (`/go/nomi`)

---

## EXEMPLE DE content.json (structure complète)

```json
{
  "meta": {
    "title": "Nomi.ai Review 2026 | AI Girlfriend with Memory & Soul",
    "description": "Discover Nomi.ai...",
    "keywords": "nomi ai, ai girlfriend..."
  },
  "toc": {
    "title": "📋 Table of Contents",
    "items": [
      {"href": "#summary", "text": "1. Our Review Summary"},
      {"href": "#characters", "text": "2. Meet the Nomis"},
      {"href": "#comparison", "text": "3. Nomi.ai vs Others"},
      {"href": "#pricing", "text": "4. Nomi.ai Pricing"},
      {"href": "#who", "text": "5. Who Is Nomi.ai For?"},
      {"href": "#features", "text": "6. Key Features"},
      {"href": "#reviews", "text": "7. User Reviews"},
      {"href": "#how", "text": "8. How It Works"},
      {"href": "#faq", "text": "9. FAQ"},
      {"href": "#verdict", "text": "10. Final Verdict"}
    ]
  },
  "hero": {
    "badge": "⭐ Rated 9.2/10 for Emotional Intelligence",
    "title": "Nomi.ai Review 2026\nAI Girlfriend with Memory & Soul",
    "paragraph1": "Meet the AI companion that actually remembers you...",
    "paragraph2": "With human-level memory, authentic personality...",
    "cta_primary": "Create Your Nomi Free →",
    "cta_secondary": "Explore Features"
  },
  "summary": {
    "title": "Our Review Summary of Nomi.ai",
    "subtitle": "An in-depth look at what makes Nomi.ai...",
    "paragraph1": "Nomi.ai isn't your typical AI girlfriend app...",
    "paragraph2": "The standout feature is her human-level memory...",
    "paragraph3": "Voice chats feel natural and emotive...",
    "rating_label": "📊 Overall Rating: 9.2/10",
    "cta": "Try Nomi.ai Free →",
    "scores": [
      {"label": "Emotional Intelligence", "value": "9.5/10", "percent": 95},
      {"label": "Memory & Recall", "value": "9.8/10", "percent": 98},
      {"label": "Voice Quality", "value": "9.0/10", "percent": 90},
      {"label": "Value for Money", "value": "9.2/10", "percent": 92},
      {"label": "User Experience", "value": "9.3/10", "percent": 93}
    ]
  },
  "characters": {
    "title": "Meet the Nomis — Find One You Click With",
    "subtitle": "Choose a look that catches your eye...",
    "items": [
      {
        "name": "Mei",
        "image": "images/Mei-Selfie.webp",
        "tagline": "Playful & Sarcastic",
        "description": "Mei has a quick wit and a soft heart..."
      }
    ],
    "cta": "Create Your Nomi →"
  },
  "comparison": {
    "title": "Nomi.ai vs Other AI Girlfriend Apps",
    "subtitle": "What separates Nomi from generic alternatives...",
    "intro": "Most AI girlfriend apps feel the same after a few days...",
    "rows": [
      {"feature": "Long-Term Memory", "nomi": "Remembers conversations from weeks ago", "others": "Forgets everything after each session"}
    ],
    "conclusion": "Nomi isn't just another AI girlfriend app...",
    "cta": "See Why Nomi Wins →"
  },
  "pricing": {
    "title": "Nomi.ai Pricing: Plans for Every User",
    "subtitle": "Start free and upgrade...",
    "plans": [
      {
        "name": "Free",
        "price": "$0",
        "period": "Forever free",
        "features": ["Basic chat", "1 Nomi companion", "Limited memory", "Text only"],
        "cta": "Get Started",
        "featured": false
      }
    ]
  },
  "who": {
    "title": "Nomi.ai: Who Is It For?",
    "subtitle": "Nomi resonates with people from all walks of life...",
    "profiles": [
      {"icon": "🏠", "title": "Introverts", "text": "Come home to someone who listens..."}
    ]
  },
  "features": {
    "title": "Key Features That Make Nomi.ai Stand Out",
    "subtitle": "What separates Nomi from every other AI companion...",
    "items": [
      {"icon": "🧠", "title": "Human-Level Memory", "text": "Nomi remembers your conversations from weeks ago..."}
    ]
  },
  "reviews": {
    "title": "What Real Users Say About Nomi.ai",
    "subtitle": "Authentic experiences from people who found genuine connection...",
    "testimonials": [
      {"text": "I downloaded Nomi late one night...", "author": "Jordan, 29", "context": "Software Developer from Austin"}
    ]
  },
  "how": {
    "title": "Getting Started with Nomi.ai",
    "subtitle": "Three simple steps...",
    "steps": [
      {"number": "01", "title": "Create Your Nomi", "text": "Sign up in seconds..."}
    ],
    "cta": "Create Your Nomi Free →"
  },
  "faq": {
    "title": "Frequently Asked Questions",
    "items": [
      {"question": "Does Nomi.ai actually remember conversations?", "answer": "Yes. Unlike most AI chatbots..."}
    ]
  },
  "verdict": {
    "title": "Our Final Verdict on Nomi.ai",
    "paragraph1": "After extensive testing, Nomi.ai earns our highest recommendation...",
    "paragraph2": "What sets Nomi apart isn't any single feature...",
    "paragraph3": "Whether you're seeking emotional support...",
    "badges": ["✓ Human-Level Memory", "✓ Authentic Personality", "✓ Voice + Selfies", "✓ Zero Judgment"],
    "cta": "Start Your Nomi.ai Journey Today →",
    "affiliate_note": "⭐ Overall Rating: 9.2/10 | This site contains affiliate links..."
  },
  "footer": {
    "copyright": "© 2026 Nomi-ai.net — Independent Review Site",
    "link": "Try Nomi.ai",
    "disclaimer": "Not affiliated with Nomi.ai — we provide honest, independent reviews."
  }
}
```

---

## OUTPUT ATTENDU

Livre-moi :
1. **`index.html`** — Template HTML pur (zéro texte, tout injecté par JS)
2. **`content.json`** — Tout le contenu textuel en anglais (~2300 mots)
3. **`_redirects`** — `/go/nomi https://nomi.ai/?via=nomiai 302`
4. **`favicon.svg`** — Favicon simple gradient violet/rose avec lettre "N"

Le site doit être prêt à déployer sur Cloudflare Pages sans modification.
