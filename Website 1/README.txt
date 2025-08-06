# Wooden Toys E-Commerce Website

## Overview
This is a responsive, modern, eco-friendly e-commerce website for a wooden toy business. The website is built using HTML, CSS, and JavaScript, with a focus on lead capture, product display, SEO, customer trust, and mobile-first commerce.

## File Structure
- `/index.html` - Home page
- `/shop.html` - Shop page with product listings
- `/product.html` - Product detail page
- `/about.html` - About Us page
- `/testimonials.html` - Customer testimonials page
- `/contact.html` - Contact page with form
- `/blog.html` - Blog page with articles
- `/faq.html` - Frequently Asked Questions page
- `/cart.html` - Shopping cart page
- `/checkout.html` - Checkout page
- `/policies.html` - Policies page (Privacy, Returns, Shipping, Terms)
- `/css/styles.css` - Main stylesheet
- `/js/scripts.js` - JavaScript functionality
- `/images/` - Directory for all images

## How to Use

### Viewing the Website
1. Simply open the `index.html` file in any modern web browser to view the website.
2. Navigate through the pages using the navigation menu.

### Modifying Content

#### Text Content
All text content can be edited directly in the HTML files. Look for the text between tags like `<p>`, `<h1>`, `<h2>`, etc.

Example:
```html
<p>This is sample text that you can edit.</p>
```

#### Images
1. Replace the placeholder images in the `/images/` directory with your own images.
2. Make sure to maintain the same file names or update the file paths in the HTML files.

Example image tag:
```html
<img src="images/products/wooden-blocks.jpg" alt="Wooden Building Blocks">
```

#### Colors and Styling
The website uses CSS variables for consistent styling. You can modify these variables in the `styles.css` file to change colors throughout the site.

Look for the `:root` section at the top of the CSS file:
```css
:root {
    --primary-color: #8B5A2B;
    --secondary-color: #D2B48C;
    /* more color variables */
}
```

### Adding Products
To add new products to the shop page:

1. In `shop.html`, find the product grid section.
2. Copy an existing product card and modify its content.

Example product card:
```html
<div class="product-card">
    <div class="product-image">
        <img src="images/products/new-product.jpg" alt="New Product Name">
        <div class="product-actions">
            <a href="product.html" class="quick-view">Quick View</a>
            <button class="add-to-cart">Add to Cart</button>
        </div>
    </div>
    <div class="product-info">
        <h3 class="product-title">New Product Name</h3>
        <div class="product-price">₹999</div>
    </div>
</div>
```

### Modifying the Navigation Menu
To update the navigation menu, edit the `<nav>` section in each HTML file:

```html
<nav>
    <button class="mobile-menu-toggle">
        <i class="fas fa-bars"></i>
    </button>
    
    <ul class="nav-menu">
        <li class="nav-item"><a href="index.html" class="nav-link">Home</a></li>
        <!-- Add or modify menu items here -->
    </ul>
</nav>
```

### Contact Form
The contact form in `contact.html` is set up for demonstration purposes. To make it functional, you'll need to:

1. Add a form action attribute with your form handling endpoint
2. Implement server-side processing or use a form service like Formspree

Example:
```html
<form class="contact-form" action="https://formspree.io/your-email@example.com" method="POST">
```

### Shopping Cart Functionality
The shopping cart uses JavaScript and localStorage to manage cart items. The core functionality is in `scripts.js`. To modify:

1. Find the cart-related functions in `scripts.js`
2. Update as needed for your specific requirements

## Browser Compatibility
This website is designed to work on modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Mobile Responsiveness
The website is fully responsive and optimized for:
- Desktop (1200px and above)
- Tablet (768px to 1199px)
- Mobile (below 768px)

## Additional Notes

### WhatsApp Integration
The WhatsApp button is linked to a sample number. Update it with your actual WhatsApp business number:

```html
<a href="https://wa.me/919876543210" class="whatsapp-btn" target="_blank">
```

### First-Visit Discount Popup
The popup is triggered on first visit using localStorage. You can modify the discount amount and appearance in both HTML and JavaScript.

### SEO
Each page includes meta tags for SEO. Update these with your specific keywords and descriptions:

```html
<meta name="description" content="Your description here">
```

### Icons
The website uses Font Awesome icons. You can replace or add icons by referencing the Font Awesome library.

## Need Help?
If you need assistance with customizing this website further, please contact a web developer or reach out to the creator of this template.