// Application Data
const appData = {
  company: {
    name: "SUPREME HANDLOOM",
    establishedYear: "1967",
    tagline: "Authentic Handloom Textiles Since 1967",
    phone: "9119995353",
    address: "101/198 Beconganj Kanpur",
    experience: "58+ years"
  },
  products: [
    {
      id: 1,
      name: "Traditional Lungi",
      category: "Lungi",
      description: "Premium quality handwoven lungis in various colors and patterns",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      price: "₹150-300 per piece"
    },
    {
      id: 2,
      name: "Cotton Gamcha",
      category: "Gamcha",
      description: "Soft cotton gamchas for daily use, wholesale quantities available",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
      price: "₹80-150 per piece"
    },
    {
      id: 3,
      name: "Handloom Chadar",
      category: "Chadar",
      description: "Traditional handwoven chadars in various designs",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      price: "₹300-600 per piece"
    },
    {
      id: 4,
      name: "Cotton Bedsheet",
      category: "Bedsheet",
      description: "Pure cotton handloom bedsheets in single and double sizes",
      image: "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=400&h=300&fit=crop",
      price: "₹400-800 per piece"
    },
    {
      id: 5,
      name: "Woolen Blanket",
      category: "Blanket",
      description: "Warm handwoven blankets for winter season",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop",
      price: "₹800-1500 per piece"
    },
    {
      id: 6,
      name: "Suit Material",
      category: "Suit",
      description: "Premium handloom fabric for traditional suits",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop",
      price: "₹500-1200 per meter"
    }
  ],
  categories: ["Lungi", "Gamcha", "Chadar", "Bedsheet", "Blanket", "Suit"],
  socialMedia: {
    facebook: "#",
    instagram: "#", 
    linkedin: "#",
    whatsapp: "https://wa.me/919119995353"
  },
  adminCredentials: {
    username: "admin",
    password: "admin123"
  }
};

// Application State
let currentUser = null;
let currentUserType = null;
let customers = [];
let currentFilter = 'all';

// Global Functions (need to be available for HTML onclick handlers)
window.showLoginModal = function() {
    const modal = document.getElementById('loginModal');
    if (modal) {
        modal.classList.remove('hidden');
    }
};

window.showAdminModal = function() {
    const modal = document.getElementById('adminModal');
    if (modal) {
        modal.classList.remove('hidden');
    }
};

window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('hidden');
    }
};

window.showTab = function(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    const targetTab = document.getElementById(tabName + 'Tab');
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    // Add active class to clicked button
    event.target.classList.add('active');
};

window.logout = function() {
    currentUser = null;
    currentUserType = null;
    
    // Hide dashboards
    document.querySelectorAll('.dashboard').forEach(dashboard => {
        dashboard.classList.add('hidden');
    });
    
    // Show main content
    document.querySelectorAll('section, .footer').forEach(el => {
        el.style.display = '';
    });
    
    showNotification('Logged out successfully!', 'success');
};

window.scrollToProducts = function() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

window.editProduct = function(productId) {
    showNotification('Edit product functionality would open a form to modify product details.', 'info');
};

window.deleteProduct = function(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        showNotification('Product deleted successfully!', 'success');
    }
};

window.viewCustomer = function(customerId) {
    const customer = customers.find(c => c.id === customerId);
    if (customer) {
        alert(`Customer Details:\n\nCompany: ${customer.companyName}\nContact: ${customer.contactPerson}\nEmail: ${customer.email}\nPhone: ${customer.phone}\nCustomer ID: ${customer.customerId}`);
    }
};

window.showAddProductForm = function() {
    showNotification('Add product functionality would open a form to create new products.', 'info');
};

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded');
    initializeApp();
    setupEventListeners();
    loadProducts();
    setupGalleryAnimation();
    loadCustomers();
    
    // Show demo credentials after a delay
    setTimeout(() => {
        showNotification('Demo: Use "demo@example.com" / "demo123" for customer login. Admin: "admin" / "admin123"', 'info');
    }, 3000);
});

function initializeApp() {
    console.log('Initializing app...');
    
    // Hide all dashboards and modals initially
    const dashboards = document.querySelectorAll('.dashboard');
    const modals = document.querySelectorAll('.modal');
    
    dashboards.forEach(dashboard => dashboard.classList.add('hidden'));
    modals.forEach(modal => modal.classList.add('hidden'));
}

function setupEventListeners() {
    console.log('Setting up event listeners...');
    
    // Navigation
    setupSmoothScrolling();
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileMenu);
    }
    
    // Modal close buttons
    document.querySelectorAll('.close').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const modal = e.target.closest('.modal');
            if (modal) {
                modal.classList.add('hidden');
            }
        });
    });
    
    // Form submissions
    setupFormHandlers();
    
    // Product filters
    setupProductFilters();
    
    // Dashboard navigation
    setupDashboardNavigation();
    
    // Contact form
    setupContactForm();
}

function setupSmoothScrolling() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
    }
}

// Form Handlers
function setupFormHandlers() {
    console.log('Setting up form handlers...');
    
    // Customer Login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleCustomerLogin);
    }
    
    // Customer Registration
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleCustomerRegistration);
    }
    
    // Admin Login
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', handleAdminLogin);
    }
}

function handleCustomerLogin(e) {
    e.preventDefault();
    console.log('Handling customer login...');
    
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    // Find customer
    const customer = customers.find(c => 
        c.username === username || c.customerId === username
    );
    
    if (customer && customer.password === password) {
        currentUser = customer;
        currentUserType = 'customer';
        closeModal('loginModal');
        showCustomerDashboard();
        showNotification('Login successful!', 'success');
    } else {
        showNotification('Invalid credentials. Please try again.', 'error');
    }
}

function handleCustomerRegistration(e) {
    e.preventDefault();
    console.log('Handling customer registration...');
    
    const companyName = document.getElementById('companyName').value;
    const contactPerson = document.getElementById('contactPerson').value;
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    
    if (!companyName || !contactPerson || !email || !phone || !password) {
        showNotification('Please fill all fields', 'error');
        return;
    }
    
    // Generate unique customer ID
    const customerId = 'SH' + String(customers.length + 1001).padStart(4, '0');
    const username = email;
    
    const newCustomer = {
        id: customers.length + 1,
        customerId,
        username,
        companyName,
        contactPerson,
        email,
        phone,
        password,
        registrationDate: new Date().toISOString().split('T')[0],
        status: 'Active'
    };
    
    customers.push(newCustomer);
    
    showNotification(`Registration successful! Your Customer ID is: ${customerId}`, 'success');
    
    // Auto login
    currentUser = newCustomer;
    currentUserType = 'customer';
    closeModal('loginModal');
    showCustomerDashboard();
}

function handleAdminLogin(e) {
    e.preventDefault();
    console.log('Handling admin login...');
    
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;
    
    if (username === appData.adminCredentials.username && 
        password === appData.adminCredentials.password) {
        currentUser = { username: 'admin', name: 'Administrator' };
        currentUserType = 'admin';
        closeModal('adminModal');
        showAdminDashboard();
        showNotification('Admin login successful!', 'success');
    } else {
        showNotification('Invalid admin credentials!', 'error');
    }
}

// Dashboard Functions
function showCustomerDashboard() {
    console.log('Showing customer dashboard...');
    
    // Hide main content
    document.querySelectorAll('section, .footer').forEach(el => {
        el.style.display = 'none';
    });
    
    // Show customer dashboard
    const dashboard = document.getElementById('customerDashboard');
    dashboard.classList.remove('hidden');
    
    // Update user info
    const customerNameEl = document.getElementById('customerName');
    const customerIdEl = document.getElementById('customerIdDisplay');
    
    if (customerNameEl) {
        customerNameEl.textContent = currentUser.contactPerson || currentUser.companyName;
    }
    if (customerIdEl) {
        customerIdEl.value = currentUser.customerId;
    }
    
    // Load catalog
    loadCustomerCatalog();
    
    // Set active section
    showDashboardSection('catalog');
}

function showAdminDashboard() {
    console.log('Showing admin dashboard...');
    
    // Hide main content
    document.querySelectorAll('section, .footer').forEach(el => {
        el.style.display = 'none';
    });
    
    // Show admin dashboard
    const dashboard = document.getElementById('adminDashboard');
    dashboard.classList.remove('hidden');
    
    // Load admin data
    loadCustomersTable();
    loadAdminProducts();
    
    // Set active section
    showDashboardSection('overview');
}

function setupDashboardNavigation() {
    document.querySelectorAll('.menu-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            const section = link.getAttribute('data-section');
            showDashboardSection(section);
            
            // Update active state
            const parentSidebar = link.closest('.dashboard-sidebar');
            if (parentSidebar) {
                parentSidebar.querySelectorAll('.menu-link').forEach(l => l.classList.remove('active'));
            }
            link.classList.add('active');
        });
    });
}

function showDashboardSection(sectionName) {
    console.log('Showing dashboard section:', sectionName);
    
    // Hide all sections
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show selected section
    const targetSection = document.getElementById(sectionName + 'Section');
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Product Functions
function loadProducts() {
    console.log('Loading products...');
    
    const productGrid = document.getElementById('productGrid');
    if (!productGrid) return;
    
    productGrid.innerHTML = '';
    
    const filteredProducts = currentFilter === 'all' 
        ? appData.products 
        : appData.products.filter(product => product.category === currentFilter);
    
    filteredProducts.forEach(product => {
        const productCard = createProductCard(product);
        productGrid.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" alt="${product.name}" loading="lazy">
        </div>
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-price">${product.price}</div>
        </div>
    `;
    return card;
}

function setupProductFilters() {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            currentFilter = category;
            
            // Update active state
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Reload products
            loadProducts();
        });
    });
}

function loadCustomerCatalog() {
    console.log('Loading customer catalog...');
    
    const catalogGrid = document.getElementById('catalogGrid');
    if (!catalogGrid) return;
    
    catalogGrid.innerHTML = '';
    
    appData.products.forEach(product => {
        const catalogItem = document.createElement('div');
        catalogItem.className = 'catalog-item';
        catalogItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" loading="lazy">
            <div class="catalog-info">
                <h4>${product.name}</h4>
                <p>${product.description}</p>
                <div class="catalog-price">${product.price}</div>
            </div>
        `;
        catalogGrid.appendChild(catalogItem);
    });
}

function loadAdminProducts() {
    console.log('Loading admin products...');
    
    const adminProductsGrid = document.getElementById('adminProductsGrid');
    if (!adminProductsGrid) return;
    
    adminProductsGrid.innerHTML = '';
    
    appData.products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-price">${product.price}</div>
                <div class="product-actions" style="margin-top: 12px;">
                    <button class="btn btn--sm btn--primary" onclick="editProduct(${product.id})">Edit</button>
                    <button class="btn btn--sm btn--outline" onclick="deleteProduct(${product.id})">Delete</button>
                </div>
            </div>
        `;
        adminProductsGrid.appendChild(productCard);
    });
}

// Customer Management
function loadCustomers() {
    console.log('Loading customers...');
    
    // Initialize with some demo customers
    if (customers.length === 0) {
        customers = [
            {
                id: 1,
                customerId: 'SH1001',
                username: 'demo@example.com',
                companyName: 'ABC Textiles',
                contactPerson: 'John Doe',
                email: 'demo@example.com',
                phone: '9876543210',
                password: 'demo123',
                registrationDate: '2024-01-15',
                status: 'Active'
            },
            {
                id: 2,
                customerId: 'SH1002',
                username: 'xyz@trading.com',
                companyName: 'XYZ Trading',
                contactPerson: 'Jane Smith',
                email: 'xyz@trading.com',
                phone: '9876543211',
                password: 'xyz123',
                registrationDate: '2024-02-10',
                status: 'Active'
            }
        ];
    }
}

function loadCustomersTable() {
    console.log('Loading customers table...');
    
    const tableBody = document.getElementById('customersTableBody');
    if (!tableBody) return;
    
    tableBody.innerHTML = '';
    
    customers.forEach(customer => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${customer.customerId}</td>
            <td>${customer.companyName}</td>
            <td>${customer.contactPerson}<br><small>${customer.email}</small></td>
            <td><span class="status status--${customer.status === 'Active' ? 'success' : 'warning'}">${customer.status}</span></td>
            <td>
                <button class="btn btn--sm btn--outline" onclick="viewCustomer(${customer.id})">View</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

// Gallery Animation
function setupGalleryAnimation() {
    console.log('Setting up gallery animation...');
    
    const galleryTrack = document.getElementById('galleryTrack');
    if (!galleryTrack) return;
    
    // Duplicate gallery items for continuous scroll
    const items = galleryTrack.querySelectorAll('.gallery-item');
    items.forEach(item => {
        const clone = item.cloneNode(true);
        galleryTrack.appendChild(clone);
    });
}

// Contact Form
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showNotification('Thank you for your message! We will get back to you soon.', 'success');
            contactForm.reset();
        });
    }
}

// Utility Functions
function showNotification(message, type = 'info') {
    console.log('Showing notification:', message, type);
    
    // Remove existing notifications
    document.querySelectorAll('.notification').forEach(n => n.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    
    // Set background color based on type
    let bgColor = 'var(--color-info)';
    if (type === 'success') bgColor = 'var(--color-success)';
    if (type === 'error') bgColor = 'var(--color-error)';
    if (type === 'warning') bgColor = 'var(--color-warning)';
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 12px 20px;
        border-radius: 6px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        z-index: 10001;
        max-width: 400px;
        animation: slideIn 0.3s ease-out;
        font-size: 14px;
        line-height: 1.4;
    `;
    notification.textContent = message;
    
    // Add animation styles if not already added
    if (!document.getElementById('notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 4000);
}

// Handle clicks outside modals to close them
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        e.target.classList.add('hidden');
    }
});

// Handle escape key to close modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.add('hidden');
        });
    }
});