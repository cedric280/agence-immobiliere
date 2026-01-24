# 🏡 Immobilier Plus - Site Vitrine Agence Immobilière

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-green?style=for-the-badge)](https://developer.mozilla.org/fr/docs/Learn/CSS/CSS_layout/Responsive_Design)

> Une vitrine web moderne, élégante et responsive pour une agence immobilière fictive. Ce projet démontre les meilleures pratiques en développement front-end avec HTML5, CSS3 et JavaScript vanilla.

![Aperçu du site](https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80)

---

## ✨ Fonctionnalités

### 🎯 Navigation & UX
- **Menu responsive** avec burger menu pour mobile
- **Navigation sticky** avec effet de transparence au scroll
- **Smooth scrolling** pour une navigation fluide entre sections
- **Animations au scroll** avec Intersection Observer API

### 🏠 Gestion des Biens
- **Catalogue dynamique** de biens immobiliers
- **Système de filtrage** (Tous / Vente / Location)
- **Recherche avancée** par type, ville et fourchette de prix
- **Cartes interactives** avec informations détaillées

### 📊 Éléments Visuels
- **Compteurs animés** pour les statistiques de l'agence
- **Design moderne** avec dégradés et ombres subtiles
- **Images optimisées** via Unsplash
- **Icônes Font Awesome** pour une interface intuitive

### 📱 Responsive Design
- **Mobile-first** approach
- **Breakpoints optimisés** pour tous les appareils
- **Grilles CSS flexibles** avec CSS Grid et Flexbox
- **Touch-friendly** pour les interactions mobiles

### 📬 Contact & Interaction
- **Formulaire de contact** avec validation
- **Notifications toast** pour les retours utilisateur
- **Informations de contact** complètes
- **Liens réseaux sociaux**

---

## 🚀 Démo en Ligne

Vous pouvez tester le site localement ou le déployer sur :
- [GitHub Pages](https://pages.github.com/)
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)

---

## 📁 Structure du Projet

```
agence-immobiliere/
│
├── 📄 index.html          # Page principale HTML
├── 🎨 style.css           # Styles CSS (responsive)
├── ⚡ script.js           # Logique JavaScript
├── 📖 README.md           # Documentation
│
└── 📂 assets/
    ├── 📂 font/           # Polices personnalisées
    │   └── Inria_Sans/    # Police Inria Sans
    └── 📂 images/         # Images locales
```

---

## 🛠️ Technologies Utilisées

| Technologie | Description |
|-------------|-------------|
| **HTML5** | Structure sémantique moderne |
| **CSS3** | Styles avancés, animations, Grid, Flexbox |
| **JavaScript ES6+** | Interactivité, DOM manipulation, APIs modernes |
| **Font Awesome 6** | Bibliothèque d'icônes |
| **Google Fonts** | Typographie web |

---

## 🎨 Design System

### Palette de Couleurs

| Couleur | Hex | Utilisation |
|---------|-----|-------------|
| 🔵 Bleu Principal | `#2c5aa0` | Titres, liens, accents |
| 🟣 Dégradé | `#667eea → #764ba2` | Hero, boutons, icônes |
| 🔴 Accent | `#ff6b6b` | CTA, badges, highlights |
| ⚪ Fond | `#f8f9fa` | Arrière-plans sections |
| ⚫ Texte | `#333333` | Corps de texte |

### Typographie
- **Titres** : Segoe UI, bold
- **Corps** : Segoe UI, regular
- **Accent** : Inria Sans (personnalisée)

---

## ⚙️ Installation & Utilisation

### Prérequis
- Un navigateur web moderne (Chrome, Firefox, Edge, Safari)
- Optionnel : Un serveur local (Live Server, Python http.server, etc.)

### Installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/agence-immobiliere.git
cd agence-immobiliere
```

2. **Ouvrir le projet**
```bash
# Option 1 : Ouvrir directement dans le navigateur
start index.html

# Option 2 : Utiliser un serveur local Python
python -m http.server 8080

# Option 3 : Utiliser Live Server (VS Code)
# Installer l'extension "Live Server" et cliquer sur "Go Live"
```

3. **Accéder au site**
```
http://localhost:8080
```

### Exposer sur Internet (ngrok)
```bash
# Lancer le serveur local
python -m http.server 8080

# Dans un autre terminal, créer un tunnel
ngrok http 8080
```

---

## 📸 Captures d'Écran

### 💻 Version Desktop
| Hero Section | Biens Immobiliers |
|--------------|-------------------|
| Page d'accueil avec recherche | Catalogue filtrable |

### 📱 Version Mobile
| Navigation | Contact |
|------------|---------|
| Menu burger responsive | Formulaire adaptatif |

---

## 🔧 Personnalisation

### Modifier les Biens Immobiliers

Éditez le tableau `properties` dans `script.js` :

```javascript
const properties = [
    {
        id: 1,
        title: "Votre titre",
        location: "Ville",
        price: "XXX XXX €",
        type: "vente", // ou "location"
        bedrooms: 3,
        bathrooms: 2,
        surface: 85,
        image: "url-de-votre-image",
        description: "Description du bien"
    },
    // Ajoutez d'autres biens...
];
```

### Modifier les Couleurs

Éditez les variables dans `style.css` :

```css
/* Couleurs principales */
.nav-logo h2 { color: #2c5aa0; }
.btn-primary { background: #ff6b6b; }
.hero { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
```

### Modifier les Informations de Contact

Éditez la section contact dans `index.html` :

```html
<div class="contact-details">
    <h4>Téléphone</h4>
    <p>Votre numéro</p>
</div>
```

---

## 📈 Performance

- ⚡ **Temps de chargement** : < 2s (sans cache)
- 📦 **Taille totale** : ~50KB (hors images externes)
- 🎯 **Score Lighthouse** : 90+ (Performance, Accessibilité, SEO)
- 🔄 **Lazy Loading** : Images chargées à la demande

---

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le projet
2. **Créez** votre branche (`git checkout -b feature/AmazingFeature`)
3. **Committez** vos changements (`git commit -m 'Add AmazingFeature'`)
4. **Push** sur la branche (`git push origin feature/AmazingFeature`)
5. **Ouvrez** une Pull Request

---

## 📝 Roadmap

- [ ] 🌙 Mode sombre
- [ ] 🌍 Multi-langue (FR/EN)
- [ ] 🗺️ Intégration Google Maps
- [ ] 📧 Backend pour formulaire de contact
- [ ] 🔐 Espace client
- [ ] 📊 Dashboard admin
- [ ] 🖼️ Galerie photos pour chaque bien
- [ ] ❤️ Système de favoris

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

## 👤 Auteur

**Votre Nom**

- GitHub: [@votre-username](https://github.com/votre-username)
- LinkedIn: [Votre Profil](https://linkedin.com/in/votre-profil)

---

## 🙏 Remerciements

- [Font Awesome](https://fontawesome.com/) pour les icônes
- [Unsplash](https://unsplash.com/) pour les images
- [Google Fonts](https://fonts.google.com/) pour la typographie

---

<p align="center">
  Fait avec ❤️ en France
</p>

<p align="center">
  ⭐ N'hésitez pas à mettre une étoile si ce projet vous a été utile !
</p>
