/**
 * WOODEN TOYS ECOMMERCE - MAIN JAVASCRIPT
 * =======================================
 * Author: AI Assistant
 * Description: Main JavaScript file for Wooden Toys eCommerce website
 * Version: 1.0
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initMobileMenu();
    initProductCarousel();
    initTestimonialCarousel();
    initProductGallery();
    initQuantitySelectors();
    initAccordions();
    initFilters();
    initCart();
    initPopup();
    initWhatsAppButton();
    initTabSystem();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }
}

/**
 * Product Carousel
 * Converted to grid layout for featured products
 */
function initProductCarousel() {
    // The carousel functionality is disabled as we're using a grid layout instead
    // The CSS has been updated to display products in a 3x2 grid
    const productCarousel = document.querySelector('.product-carousel');
    
    if (productCarousel) {
        // Hide navigation buttons as they're no longer needed
        const prevButton = productCarousel.querySelector('.carousel-prev');
        const nextButton = productCarousel.querySelector('.carousel-next');
        
        if (prevButton) prevButton.style.display = 'none';
        if (nextButton) nextButton.style.display = 'none';
    }
}

/**
 * Testimonial Carousel
 */
function initTestimonialCarousel() {
    // Similar implementation as product carousel if needed
    // For simplicity, we can use the same carousel logic
}

/**
 * Product Gallery
 * For product detail page
 */
function initProductGallery() {
    const productGallery = document.querySelector('.product-gallery');
    
    if (productGallery) {
        const mainImage = productGallery.querySelector('.product-main-image');
        const thumbnails = productGallery.querySelectorAll('.product-thumbnail');
        
        if (!mainImage || thumbnails.length === 0) return;
        
        // Add click event to each thumbnail
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', function() {
                // Update main image source
                const newSrc = this.getAttribute('src');
                mainImage.setAttribute('src', newSrc);
                
                // Update active state
                thumbnails.forEach(thumb => thumb.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }
}

/**
 * Quantity Selectors
 * For product detail and cart pages
 */
function initQuantitySelectors() {
    const quantitySelectors = document.querySelectorAll('.quantity-selector');
    
    quantitySelectors.forEach(selector => {
        const minusBtn = selector.querySelector('.quantity-minus');
        const plusBtn = selector.querySelector('.quantity-plus');
        const input = selector.querySelector('.quantity-input');
        
        if (!minusBtn || !plusBtn || !input) return;
        
        minusBtn.addEventListener('click', function() {
            let value = parseInt(input.value, 10);
            value = isNaN(value) ? 1 : value;
            if (value > 1) {
                input.value = value - 1;
                // Trigger change event for cart updates
                input.dispatchEvent(new Event('change'));
            }
        });
        
        plusBtn.addEventListener('click', function() {
            let value = parseInt(input.value, 10);
            value = isNaN(value) ? 1 : value;
            input.value = value + 1;
            // Trigger change event for cart updates
            input.dispatchEvent(new Event('change'));
        });
        
        // Validate input on change
        input.addEventListener('change', function() {
            let value = parseInt(this.value, 10);
            if (isNaN(value) || value < 1) {
                this.value = 1;
            }
        });
    });
}

/**
 * Accordions
 * For FAQ and product details
 */
function initAccordions() {
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        
        if (!header) return;
        
        header.addEventListener('click', function() {
            // Toggle active class
            accordion.classList.toggle('active');
        });
    });
}

/**
 * Product Filters
 * For shop page
 */
function initFilters() {
    const filterForm = document.querySelector('.filter-form');
    const productGrid = document.querySelector('.product-grid');
    
    if (!filterForm || !productGrid) return;
    
    // Sample product data (would normally come from backend)
    const products = [
        {
            id: 1,
            name: 'Wooden Building Blocks',
            price: 1299,
            type: 'Blocks',
            ageGroup: '2-4',
            image: 'images/products/blocks.jpg'
        },
        {
            id: 2,
            name: 'Wooden Puzzle Set',
            price: 899,
            type: 'Puzzle',
            ageGroup: '4-6',
            image: 'images/products/puzzle.jpg'
        },
        {
            id: 3,
            name: 'Wooden Rocking Horse',
            price: 2499,
            type: 'Ride-on',
            ageGroup: '2-4',
            image: 'images/products/horse.jpg'
        },
        {
            id: 4,
            name: 'Wooden Stacking Rings',
            price: 699,
            type: 'Blocks',
            ageGroup: '0-2',
            image: 'images/products/rings.jpg'
        },
        {
            id: 5,
            name: 'Wooden Train Set',
            price: 1899,
            type: 'Blocks',
            ageGroup: '4-6',
            image: 'images/products/train.jpg'
        },
        {
            id: 6,
            name: 'Wooden Animal Puzzle',
            price: 799,
            type: 'Puzzle',
            ageGroup: '2-4',
            image: 'images/products/animal-puzzle.jpg'
        },
        {
            id: 7,
            name: 'Wooden Balance Board',
            price: 1499,
            type: 'Ride-on',
            ageGroup: '4-6',
            image: 'images/products/balance-board.jpg'
        },
        {
            id: 8,
            name: 'Wooden Alphabet Blocks',
            price: 999,
            type: 'Blocks',
            ageGroup: '2-4',
            image: 'images/products/alphabet-blocks.jpg'
        }
    ];
    
    // Filter change event
    filterForm.addEventListener('change', function() {
        // Get selected filters
        const selectedAgeGroups = Array.from(filterForm.querySelectorAll('input[name="age-group"]:checked')).map(input => input.value);
        const selectedTypes = Array.from(filterForm.querySelectorAll('input[name="toy-type"]:checked')).map(input => input.value);
        const minPrice = parseInt(filterForm.querySelector('#price-min').value, 10) || 0;
        const maxPrice = parseInt(filterForm.querySelector('#price-max').value, 10) || 10000;
        
        // Filter products
        const filteredProducts = products.filter(product => {
            // Check age group
            const ageGroupMatch = selectedAgeGroups.length === 0 || selectedAgeGroups.includes(product.ageGroup);
            
            // Check toy type
            const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(product.type);
            
            // Check price range
            const priceMatch = product.price >= minPrice && product.price <= maxPrice;
            
            return ageGroupMatch && typeMatch && priceMatch;
        });
        
        // Update product grid
        renderProducts(filteredProducts);
    });
    
    // Render products to grid
    function renderProducts(productsToRender) {
        // Clear product grid
        productGrid.innerHTML = '';
        
        if (productsToRender.length === 0) {
            productGrid.innerHTML = '<div class="no-products">No products found matching your criteria.</div>';
            return;
        }
        
        // Add products to grid
        productsToRender.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            // Format price
            const formattedPrice = (product.price / 100).toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR'
            });
            
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <div class="product-price">${formattedPrice}</div>
                    <div class="product-actions">
                        <button class="btn btn-sm" onclick="addToCart(${product.id})">Add to Cart</button>
                        <a href="product.html?id=${product.id}" class="btn btn-sm btn-secondary">View Details</a>
                    </div>
                </div>
            `;
            
            productGrid.appendChild(productCard);
        });
    }
    
    // Initial render
    renderProducts(products);
}

/**
 * Shopping Cart
 */
function initCart() {
    // Cart data structure
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Add to cart function (global scope for product buttons)
    window.addToCart = function(productId) {
        // Find product in cart
        const existingItem = cart.find(item => item.id === productId);
        
        if (existingItem) {
            // Increment quantity
            existingItem.quantity += 1;
        } else {
            // Add new item
            cart.push({
                id: productId,
                quantity: 1
            });
        }
        
        // Save cart to localStorage
        saveCart();
        
        // Update cart UI
        updateCartUI();
        
        // Show confirmation
        showToast('Product added to cart!');
    };
    
    // Remove from cart
    window.removeFromCart = function(productId) {
        cart = cart.filter(item => item.id !== productId);
        saveCart();
        updateCartUI();
    };
    
    // Update quantity
    window.updateCartQuantity = function(productId, quantity) {
        const item = cart.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            saveCart();
            updateCartUI();
        }
    };
    
    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    
    // Update cart UI
    function updateCartUI() {
        // Update cart count
        const cartCount = document.querySelector('.cart-count');
        if (cartCount) {
            const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
            cartCount.textContent = totalItems;
        }
        
        // Update cart page if on cart page
        const cartContainer = document.querySelector('.cart-container');
        if (cartContainer) {
            renderCart();
        }
    }
    
    // Render cart on cart page
    function renderCart() {
        const cartItemsContainer = document.querySelector('.cart-items');
        const cartSummary = document.querySelector('.cart-summary');
        
        if (!cartItemsContainer || !cartSummary) return;
        
        // Sample product data (would normally come from backend)
        const products = [
            { id: 1, name: 'Wooden Building Blocks', price: 1299, image: 'images/products/blocks.jpg' },
            { id: 2, name: 'Wooden Puzzle Set', price: 899, image: 'images/products/puzzle.jpg' },
            { id: 3, name: 'Wooden Rocking Horse', price: 2499, image: 'images/products/horse.jpg' },
            { id: 4, name: 'Wooden Stacking Rings', price: 699, image: 'images/products/rings.jpg' },
            { id: 5, name: 'Wooden Train Set', price: 1899, image: 'images/products/train.jpg' },
            { id: 6, name: 'Wooden Animal Puzzle', price: 799, image: 'images/products/animal-puzzle.jpg' },
            { id: 7, name: 'Wooden Balance Board', price: 1499, image: 'images/products/balance-board.jpg' },
            { id: 8, name: 'Wooden Alphabet Blocks', price: 999, image: 'images/products/alphabet-blocks.jpg' }
        ];
        
        // Clear cart items
        cartItemsContainer.innerHTML = '';
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<div class="empty-cart">Your cart is empty.</div>';
            cartSummary.innerHTML = '';
            return;
        }
        
        // Add cart items
        let subtotal = 0;
        
        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            if (!product) return;
            
            const itemTotal = product.price * item.quantity;
            subtotal += itemTotal;
            
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            
            // Format price
            const formattedPrice = (product.price / 100).toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR'
            });
            
            const formattedTotal = (itemTotal / 100).toLocaleString('en-IN', {
                style: 'currency',
                currency: 'INR'
            });
            
            cartItem.innerHTML = `
                <div class="cart-product">
                    <img src="${product.image}" alt="${product.name}" class="cart-product-image">
                    <div>
                        <h3 class="cart-product-title">${product.name}</h3>
                        <div class="cart-product-price">${formattedPrice}</div>
                    </div>
                </div>
                <div class="cart-quantity">
                    <button class="cart-quantity-btn" onclick="updateCartQuantity(${product.id}, ${item.quantity - 1})">-</button>
                    <input type="number" class="cart-quantity-input" value="${item.quantity}" min="1" onchange="updateCartQuantity(${product.id}, parseInt(this.value, 10))">
                    <button class="cart-quantity-btn" onclick="updateCartQuantity(${product.id}, ${item.quantity + 1})">+</button>
                </div>
                <div class="cart-item-total">${formattedTotal}</div>
                <div class="cart-remove" onclick="removeFromCart(${product.id})">×</div>
            `;
            
            cartItemsContainer.appendChild(cartItem);
        });
        
        // Update summary
        const shipping = subtotal > 50000 ? 0 : 9900; // Free shipping over ₹500
        const total = subtotal + shipping;
        
        // Format amounts
        const formattedSubtotal = (subtotal / 100).toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
        });
        
        const formattedShipping = (shipping / 100).toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
        });
        
        const formattedTotal = (total / 100).toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
        });
        
        cartSummary.innerHTML = `
            <div class="cart-summary-row">
                <span>Subtotal:</span>
                <span>${formattedSubtotal}</span>
            </div>
            <div class="cart-summary-row">
                <span>Shipping:</span>
                <span>${formattedShipping}</span>
            </div>
            <div class="cart-summary-row total">
                <span>Total:</span>
                <span>${formattedTotal}</span>
            </div>
            <a href="checkout.html" class="btn checkout-btn">Proceed to Checkout</a>
        `;
    }
    
    // Show toast notification
    function showToast(message) {
        // Create toast element if it doesn't exist
        let toast = document.querySelector('.toast');
        
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            document.body.appendChild(toast);
            
            // Add styles
            toast.style.position = 'fixed';
            toast.style.bottom = '20px';
            toast.style.left = '50%';
            toast.style.transform = 'translateX(-50%)';
            toast.style.backgroundColor = 'var(--accent-color)';
            toast.style.color = 'white';
            toast.style.padding = '10px 20px';
            toast.style.borderRadius = '4px';
            toast.style.zIndex = '1000';
            toast.style.opacity = '0';
            toast.style.transition = 'opacity 0.3s ease';
        }
        
        // Set message and show toast
        toast.textContent = message;
        toast.style.opacity = '1';
        
        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.style.opacity = '0';
        }, 3000);
    }
    
    // Initialize cart UI
    updateCartUI();
}

/**
 * Popup
 * For discount offer
 */
function initPopup() {
    // Check if popup has been shown before
    const popupShown = localStorage.getItem('popupShown');
    
    if (!popupShown) {
        // Create popup elements
        const popupOverlay = document.createElement('div');
        popupOverlay.className = 'popup-overlay';
        
        popupOverlay.innerHTML = `
            <div class="popup">
                <button class="popup-close">×</button>
                <h2 class="popup-title">Welcome to Wooden Toys!</h2>
                <div class="popup-content">
                    <p>Get ₹50 off your first order with code:</p>
                    <div class="discount-code">WELCOME50</div>
                    <button class="btn">Shop Now</button>
                </div>
            </div>
        `;
        
        // Add popup to body
        document.body.appendChild(popupOverlay);
        
        // Show popup after 2 seconds
        setTimeout(() => {
            popupOverlay.classList.add('active');
        }, 2000);
        
        // Close button event
        const closeButton = popupOverlay.querySelector('.popup-close');
        closeButton.addEventListener('click', function() {
            popupOverlay.classList.remove('active');
            
            // Remove popup after animation
            setTimeout(() => {
                popupOverlay.remove();
            }, 300);
            
            // Set flag in localStorage
            localStorage.setItem('popupShown', 'true');
        });
        
        // Shop now button event
        const shopButton = popupOverlay.querySelector('.btn');
        shopButton.addEventListener('click', function() {
            popupOverlay.classList.remove('active');
            
            // Remove popup after animation
            setTimeout(() => {
                popupOverlay.remove();
            }, 300);
            
            // Set flag in localStorage
            localStorage.setItem('popupShown', 'true');
            
            // Redirect to shop page
            window.location.href = 'shop.html';
        });
    }
}

/**
 * WhatsApp Button
 */
function initWhatsAppButton() {
    // Create WhatsApp button if it doesn't exist
    if (!document.querySelector('.whatsapp-btn')) {
        const whatsappBtn = document.createElement('a');
        whatsappBtn.className = 'whatsapp-btn';
        whatsappBtn.href = 'https://wa.me/919876543210'; // Replace with actual WhatsApp number
        whatsappBtn.target = '_blank';
        whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
        document.body.appendChild(whatsappBtn);
    }
}

/**
 * Tab System
 * For product details and other tabbed content
 */
function initTabSystem() {
    const tabContainers = document.querySelectorAll('.tabs-container');
    
    tabContainers.forEach(container => {
        const tabButtons = container.querySelectorAll('.tab-btn');
        const tabContents = container.querySelectorAll('.tab-content');
        
        if (tabButtons.length === 0 || tabContents.length === 0) return;
        
        // Add click event to each tab button
        tabButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Get tab ID
                const tabId = this.getAttribute('data-tab');
                
                // Remove active class from all buttons and contents
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                // Add active class to current button and content
                this.classList.add('active');
                container.querySelector(`.tab-content[data-tab="${tabId}"]`).classList.add('active');
            });
        });
        
        // Activate first tab by default
        tabButtons[0].click();
    });
}

/**
 * Helper Functions
 */

// Format price
function formatPrice(price) {
    return (price / 100).toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR'
    });
}

// Get URL parameter
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}