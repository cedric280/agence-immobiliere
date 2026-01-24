// Navigation mobile
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.getElementById('nav-menu');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Fermer le menu mobile quand on clique sur un lien
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Smooth scrolling pour les liens d'ancrage
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animation des statistiques
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    
    stats.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const increment = target / 100;
        let current = 0;
        
        const updateStat = () => {
            if (current < target) {
                current += increment;
                stat.textContent = Math.ceil(current);
                setTimeout(updateStat, 20);
            } else {
                stat.textContent = target;
            }
        };
        
        updateStat();
    });
}

// Observer pour déclencher l'animation des stats
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateStats();
            statsObserver.unobserve(entry.target);
        }
    });
});

const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Données des biens immobiliers
const properties = [
    {
        id: 1,
        title: "Appartement moderne",
        location: "Paris 15ème",
        price: "450 000 €",
        type: "vente",
        bedrooms: 3,
        bathrooms: 2,
        surface: 85,
        image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Magnifique appartement entièrement rénové avec balcon et vue dégagée."
    },
    {
        id: 2,
        title: "Maison familiale",
        location: "Boulogne-Billancourt",
        price: "850 000 €",
        type: "vente",
        bedrooms: 5,
        bathrooms: 3,
        surface: 140,
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Belle maison de ville avec jardin, idéale pour une famille."
    },
    {
        id: 3,
        title: "Studio centre-ville",
        location: "Paris 6ème",
        price: "1 200 €/mois",
        type: "location",
        bedrooms: 1,
        bathrooms: 1,
        surface: 25,
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Studio lumineux en plein cœur de Saint-Germain-des-Prés."
    },
    {
        id: 4,
        title: "Appartement standing",
        location: "Neuilly-sur-Seine",
        price: "2 500 €/mois",
        type: "location",
        bedrooms: 4,
        bathrooms: 2,
        surface: 110,
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Appartement de standing avec terrasse et parking."
    },
    {
        id: 5,
        title: "Loft industriel",
        location: "Paris 11ème",
        price: "650 000 €",
        type: "vente",
        bedrooms: 2,
        bathrooms: 2,
        surface: 95,
        image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Loft atypique dans une ancienne usine rénovée."
    },
    {
        id: 6,
        title: "Duplex moderne",
        location: "Levallois-Perret",
        price: "1 800 €/mois",
        type: "location",
        bedrooms: 3,
        bathrooms: 2,
        surface: 80,
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
        description: "Duplex récent avec terrasse et proche métro."
    }
];

// Fonction pour créer une carte de propriété
function createPropertyCard(property) {
    const card = document.createElement('div');
    card.className = `property-card ${property.type}`;
    
    card.innerHTML = `
        <div class="property-image" style="background-image: url('${property.image}')">
            <div class="property-badge">${property.type === 'vente' ? 'À vendre' : 'À louer'}</div>
            <div class="property-price">${property.price}</div>
        </div>
        <div class="property-info">
            <h3 class="property-title">${property.title}</h3>
            <p class="property-location">
                <i class="fas fa-map-marker-alt"></i> ${property.location}
            </p>
            <div class="property-features">
                <div class="feature">
                    <i class="fas fa-bed"></i> ${property.bedrooms} ch.
                </div>
                <div class="feature">
                    <i class="fas fa-bath"></i> ${property.bathrooms} sdb
                </div>
                <div class="feature">
                    <i class="fas fa-ruler-combined"></i> ${property.surface} m²
                </div>
            </div>
            <p class="property-description">${property.description}</p>
        </div>
    `;
    
    return card;
}

// Fonction pour afficher les propriétés
function displayProperties(propertiesToShow = properties) {
    const grid = document.getElementById('properties-grid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    propertiesToShow.forEach(property => {
        const card = createPropertyCard(property);
        grid.appendChild(card);
    });
    
    // Animation d'apparition
    const cards = grid.querySelectorAll('.property-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
            card.style.transition = 'all 0.5s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Filtrage des propriétés
const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Mettre à jour les boutons actifs
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filtrer les propriétés
        const filter = button.getAttribute('data-filter');
        let filteredProperties;
        
        if (filter === 'all') {
            filteredProperties = properties;
        } else {
            filteredProperties = properties.filter(property => property.type === filter);
        }
        
        displayProperties(filteredProperties);
    });
});

// Initialiser l'affichage des propriétés
document.addEventListener('DOMContentLoaded', () => {
    displayProperties();
});

// Formulaire de recherche
const searchForm = document.getElementById('search-form');
if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const typeBien = document.getElementById('type-bien').value;
        const ville = document.getElementById('ville').value.toLowerCase();
        const prixMin = parseInt(document.getElementById('prix-min').value) || 0;
        const prixMax = parseInt(document.getElementById('prix-max').value) || Infinity;
        
        let filteredProperties = properties.filter(property => {
            // Filtrer par type
            if (typeBien && !property.title.toLowerCase().includes(typeBien)) {
                return false;
            }
            
            // Filtrer par ville
            if (ville && !property.location.toLowerCase().includes(ville)) {
                return false;
            }
            
            // Filtrer par prix
            const price = parseInt(property.price.replace(/[^0-9]/g, ''));
            if (price < prixMin || price > prixMax) {
                return false;
            }
            
            return true;
        });
        
        // Faire défiler vers la section des biens
        document.getElementById('biens').scrollIntoView({ behavior: 'smooth' });
        
        // Afficher les résultats après un court délai
        setTimeout(() => {
            displayProperties(filteredProperties);
            
            // Afficher un message si aucun résultat
            if (filteredProperties.length === 0) {
                const grid = document.getElementById('properties-grid');
                grid.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; padding: 2rem;">
                        <i class="fas fa-search" style="font-size: 3rem; color: #ccc; margin-bottom: 1rem;"></i>
                        <h3 style="color: #666;">Aucun bien trouvé</h3>
                        <p style="color: #999;">Essayez de modifier vos critères de recherche.</p>
                    </div>
                `;
            }
        }, 500);
    });
}

// Formulaire de contact
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupérer les données du formulaire
        const formData = {
            nom: document.getElementById('nom').value,
            email: document.getElementById('email').value,
            telephone: document.getElementById('telephone').value,
            sujet: document.getElementById('sujet').value,
            message: document.getElementById('message').value
        };
        
        // Simulation d'envoi
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.innerHTML = '<div class="loading"></div> Envoi en cours...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Réinitialiser le bouton
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Afficher un message de succès
            showNotification('Message envoyé avec succès ! Nous vous recontacterons rapidement.', 'success');
            
            // Réinitialiser le formulaire
            contactForm.reset();
        }, 2000);
    });
}

// Fonction pour afficher les notifications
function showNotification(message, type = 'info') {
    // Créer l'élément de notification
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;
    
    // Ajouter les styles si ils n'existent pas déjà
    if (!document.querySelector('#notification-styles')) {
        const styles = document.createElement('style');
        styles.id = 'notification-styles';
        styles.textContent = `
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                background: white;
                border-radius: 10px;
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
                z-index: 10000;
                transform: translateX(100%);
                transition: transform 0.3s ease;
                max-width: 400px;
                border-left: 4px solid #2c5aa0;
            }
            .notification.success {
                border-left-color: #28a745;
            }
            .notification.show {
                transform: translateX(0);
            }
            .notification-content {
                padding: 1rem;
                display: flex;
                align-items: center;
                gap: 0.5rem;
            }
            .notification-content i:first-child {
                color: #2c5aa0;
                font-size: 1.2rem;
            }
            .notification.success .notification-content i:first-child {
                color: #28a745;
            }
            .notification-content span {
                flex: 1;
                color: #333;
            }
            .notification-close {
                background: none;
                border: none;
                color: #999;
                cursor: pointer;
                padding: 0;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .notification-close:hover {
                color: #333;
            }
        `;
        document.head.appendChild(styles);
    }
    
    // Ajouter au DOM
    document.body.appendChild(notification);
    
    // Animer l'apparition
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    // Gérer la fermeture
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    });
    
    // Auto-fermeture après 5 secondes
    setTimeout(() => {
        if (document.body.contains(notification)) {
            notification.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(notification)) {
                    document.body.removeChild(notification);
                }
            }, 300);
        }
    }, 5000);
}

// Animation au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observer les éléments à animer
document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.service-card, .property-card, .contact-item');
    elementsToAnimate.forEach(el => observer.observe(el));
});

// Effet parallax léger sur le hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const speed = scrolled * 0.5;
        hero.style.transform = `translateY(${speed}px)`;
    }
});

// Navigation sticky avec effet
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scroll vers le bas
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scroll vers le haut
        navbar.style.transform = 'translateY(0)';
    }
    
    // Ajouter une classe pour le background
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// Ajouter les styles pour la navbar scrolled
const navStyles = document.createElement('style');
navStyles.textContent = `
    .navbar.scrolled {
        background: rgba(255, 255, 255, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
    }
`;
document.head.appendChild(navStyles);

// Lazy loading pour les images
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});

// Observer toutes les images avec data-src
document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
});

// Fonction utilitaire pour formater les prix
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// Gestion du thème sombre (optionnel)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('darkTheme', document.body.classList.contains('dark-theme'));
}

// Charger le thème sauvegardé
if (localStorage.getItem('darkTheme') === 'true') {
    document.body.classList.add('dark-theme');
}

// Optimisation des performances
window.addEventListener('load', () => {
    // Supprimer les animations sur les appareils moins performants
    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4) {
        document.body.classList.add('reduced-motion');
    }
});

// Error handling global
window.addEventListener('error', (e) => {
    console.error('Erreur détectée:', e.error);
    // En production, vous pourriez envoyer cette erreur à un service de monitoring
});

// Service worker pour le cache (PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}