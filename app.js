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
      price: "₹150-300 per piece",
      minOrder: "100 pieces"
    },
    {
      id: 2,
      name: "Cotton Gamcha",
      category: "Gamcha",
      description: "Soft cotton gamchas for daily use, wholesale quantities available",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
      price: "₹80-150 per piece",
      minOrder: "200 pieces"
    },
    {
      id: 3,
      name: "Handloom Chadar",
      category: "Chadar",
      description: "Traditional handwoven chadars in various designs",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      price: "₹300-600 per piece",
      minOrder: "50 pieces"
    },
    {
      id: 4,
      name: "Cotton Bedsheet",
      category: "Bedsheet",
      description: "Pure cotton handloom bedsheets in single and double sizes",
      image: "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=400&h=300&fit=crop",
      price: "₹400-800 per piece",
      minOrder: "25 pieces"
    },
    {
      id: 5,
      name: "Woolen Blanket",
      category: "Blanket",
      description: "Warm handwoven blankets for winter season",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop",
      price: "₹800-1500 per piece",
      minOrder: "20 pieces"
    },
    {
      id: 6,
      name: "Suit Material",
      category: "Suit",
      description: "Premium handloom fabric for traditional suits",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop",
      price: "₹500-1200 per meter",
      minOrder: "10 meters"
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
  },
  gstValidation: {
    pattern: "^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$",
    example: "22AAAAA0000A1Z5"
  },
  verificationMessages: {
    unregistered: "Please register with your GST number and log in to view wholesale prices",
    pendingVerification: "Your GST number is under verification. Prices will be visible once verified.",
    verified: "Welcome! You can now view our wholesale prices.",
    registerPrompt: "Register with GST to access wholesale prices"
  }
};

// Application State
let currentUser = null;
let currentUserType = null;
let customers = [];
let currentFilter = 'all';

// Initialize customers data immediately
customers = [
  {
    id: 1,
    customerId: 'SH1001',
    email: 'demo@example.com',
    companyName: 'ABC Textiles',
    contactPerson: 'John Doe',
    phone: '9876543210',
    password: 'demo123',
    gstNumber: '22AAAAA0000A1Z5',
    gstVerified: true,
    gstRejected: false,
    registrationDate: '2024-01-15',
    verificationDate: '2024-01-16',
    status: 'Active'
  },
  {
    id: 2,
    customerId: 'SH1002',
    email: 'xyz@trading.com',
    companyName: 'XYZ Trading',
    contactPerson: 'Jane Smith',
    phone: '9876543211',
    password: 'xyz123',
    gstNumber: '27BBBBB1111B2Z6',
    gstVerified: false,
    gstRejected: false,
    registrationDate: '2024-02-10',
    status: 'Active'
  },
  {
    id: 3,
    customerId: 'SH1003',
    email: 'test@company.com',
    companyName: 'Test Company',
    contactPerson: 'Mike Johnson',
    phone: '9876543212',
    password: 'test123',
    gstNumber: '29CCCCC2222C3Z7',
    gstVerified: false,
    gstRejected: true,
    registrationDate: '2024-02-20',
    status: 'Active'
  }
];

// Global Functions - Attach to window immediately
function showLoginModal() {
  const modal = document.getElementById('loginModal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function showAdminModal() {
  const modal = document.getElementById('adminModal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
  }
}

function showTab(tabName) {
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
}

function logout() {
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
}

function scrollToProducts() {
  const productsSection = document.getElementById('products');
  if (productsSection) {
    productsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

function editProduct(productId) {
  showNotification('Edit product functionality would open a form to modify product details.', 'info');
}

function deleteProduct(productId) {
  if (confirm('Are you sure you want to delete this product?')) {
    showNotification('Product deleted successfully!', 'success');
  }
}

function viewCustomer(customerId) {
  const customer = customers.find(c => c.id === customerId);
  if (customer) {
    const verificationStatus = customer.gstVerified ? 'Verified' : 'Pending Verification';
    alert(`Customer Details:\n\nCompany: ${customer.companyName}\nContact: ${customer.contactPerson}\nEmail: ${customer.email}\nPhone: ${customer.phone}\nCustomer ID: ${customer.customerId}\nGST Number: ${customer.gstNumber}\nVerification Status: ${verificationStatus}`);
  }
}

function verifyCustomer(customerId) {
  const customer = customers.find(c => c.id === customerId);
  if (customer && !customer.gstVerified) {
    customer.gstVerified = true;
    customer.verificationDate = new Date().toISOString().split('T')[0];
    showNotification(`Customer ${customer.companyName} has been verified successfully!`, 'success');
    loadCustomersTable();
    loadPendingVerifications();
    updateStats();
  }
}

function rejectCustomer(customerId) {
  const customer = customers.find(c => c.id === customerId);
  if (customer && !customer.gstVerified) {
    customer.gstRejected = true;
    showNotification(`Customer ${customer.companyName} verification has been rejected.`, 'error');
    loadCustomersTable();
    loadPendingVerifications();
    updateStats();
  }
}

function showAddProductForm() {
  showNotification('Add product functionality would open a form to create new products.', 'info');
}

// Attach global functions to window
window.showLoginModal = showLoginModal;
window.showAdminModal = showAdminModal;
window.closeModal = closeModal;
window.showTab = showTab;
window.logout = logout;
window.scrollToProducts = scrollToProducts;
window.editProduct = editProduct;
window.deleteProduct = deleteProduct;
window.viewCustomer = viewCustomer;
window.verifyCustomer = verifyCustomer;
window.rejectCustomer = rejectCustomer;
window.showAddProductForm = showAddProductForm;

// GST Validation Function
function validateGST(gstNumber) {
  const pattern = new RegExp(appData.gstValidation.pattern);
  return pattern.test(gstNumber);
}

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM Content Loaded - Initializing app...');
  
  try {
    initializeApp();
    setupEventListeners();
    loadProducts();
    setupGalleryAnimation();
    
    // Show demo credentials after a delay
    setTimeout(() => {
      showNotification('Demo: Use "demo@example.com" / "demo123" for verified customer login. Admin: "admin" / "admin123"', 'info');
    }, 3000);
    
    console.log('App initialized successfully');
  } catch (error) {
    console.error('Error initializing app:', error);
  }
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

  // GST input formatting
  const gstInput = document.getElementById('gstNumber');
  if (gstInput) {
    gstInput.addEventListener('input', formatGSTInput);
  }
}

function formatGSTInput(e) {
  let value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, '');
  e.target.value = value;
  
  // Real-time validation feedback
  const isValid = validateGST(value);
  
  // Remove existing validation classes
  e.target.classList.remove('valid', 'invalid');
  
  if (value.length > 0) {
    if (isValid && value.length === 15) {
      e.target.classList.add('valid');
    } else {
      e.target.classList.add('invalid');
    }
  }
}

function setupSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
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
    c.email === username || c.customerId === username
  );
  
  if (customer && customer.password === password) {
    currentUser = customer;
    currentUserType = 'customer';
    closeModal('loginModal');
    showCustomerDashboard();
    
    // Show verification status message
    const statusMessage = getVerificationMessage(customer);
    showNotification(statusMessage.message, statusMessage.type);
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
  const gstNumber = document.getElementById('gstNumber').value;
  
  if (!companyName || !contactPerson || !email || !phone || !password || !gstNumber) {
    showNotification('Please fill all fields', 'error');
    return;
  }
  
  // Validate GST number
  if (!validateGST(gstNumber)) {
    showNotification('Please enter a valid GST number (15-digit alphanumeric format)', 'error');
    return;
  }
  
  // Check if email or GST already exists
  const existingCustomer = customers.find(c => c.email === email || c.gstNumber === gstNumber);
  if (existingCustomer) {
    showNotification('Email or GST number already registered', 'error');
    return;
  }
  
  // Generate unique customer ID
  const customerId = 'SH' + String(customers.length + 1001).padStart(4, '0');
  
  const newCustomer = {
    id: customers.length + 1,
    customerId,
    companyName,
    contactPerson,
    email,
    phone,
    password,
    gstNumber,
    gstVerified: false,
    gstRejected: false,
    registrationDate: new Date().toISOString().split('T')[0],
    status: 'Active'
  };
  
  customers.push(newCustomer);
  
  showNotification(`Registration successful! Your Customer ID is: ${customerId}. GST verification pending.`, 'success');
  
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

function getVerificationMessage(customer) {
  if (customer.gstRejected) {
    return {
      message: 'Your GST verification was rejected. Please contact admin.',
      type: 'error'
    };
  } else if (customer.gstVerified) {
    return {
      message: appData.verificationMessages.verified,
      type: 'success'
    };
  } else {
    return {
      message: appData.verificationMessages.pendingVerification,
      type: 'warning'
    };
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
  
  // Update user info and verification status
  updateCustomerDashboardInfo();
  
  // Load catalog with proper access control
  loadCustomerCatalog();
  
  // Set active section
  showDashboardSection('catalog');
}

function updateCustomerDashboardInfo() {
  const customerNameEl = document.getElementById('customerName');
  const verificationStatusEl = document.getElementById('verificationStatus');
  
  if (customerNameEl) {
    customerNameEl.textContent = currentUser.contactPerson || currentUser.companyName;
  }
  
  if (verificationStatusEl) {
    const badgeClass = currentUser.gstVerified ? 'verified' : 
                      currentUser.gstRejected ? 'rejected' : 'pending';
    const statusText = currentUser.gstVerified ? 'GST Verified' : 
                      currentUser.gstRejected ? 'GST Rejected' : 'Pending Verification';
    
    verificationStatusEl.innerHTML = `<div class="verification-badge verification-badge--${badgeClass}">${statusText}</div>`;
  }
  
  // Update profile section
  updateProfileSection();
}

function updateProfileSection() {
  const profileElements = {
    profileCompanyName: currentUser.companyName,
    customerIdDisplay: currentUser.customerId,
    profileGstNumber: currentUser.gstNumber,
    profileContactPerson: currentUser.contactPerson
  };
  
  Object.entries(profileElements).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) {
      element.value = value || '';
    }
  });
  
  // Update verification status in profile
  const profileVerificationStatus = document.getElementById('profileVerificationStatus');
  if (profileVerificationStatus) {
    const badgeClass = currentUser.gstVerified ? 'verified' : 
                      currentUser.gstRejected ? 'rejected' : 'pending';
    const statusText = currentUser.gstVerified ? 'GST Verified' : 
                      currentUser.gstRejected ? 'GST Rejected' : 'Pending Verification';
    
    profileVerificationStatus.innerHTML = `<div class="verification-badge verification-badge--${badgeClass}">${statusText}</div>`;
  }
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
  updateStats();
  loadCustomersTable();
  loadPendingVerifications();
  loadAdminProducts();
  
  // Set active section
  showDashboardSection('overview');
}

function updateStats() {
  const totalCustomersEl = document.getElementById('totalCustomers');
  const verifiedCustomersEl = document.getElementById('verifiedCustomers');
  const pendingVerificationEl = document.getElementById('pendingVerification');
  
  const totalCustomers = customers.length;
  const verifiedCustomers = customers.filter(c => c.gstVerified).length;
  const pendingVerification = customers.filter(c => !c.gstVerified && !c.gstRejected).length;
  
  if (totalCustomersEl) totalCustomersEl.textContent = totalCustomers;
  if (verifiedCustomersEl) verifiedCustomersEl.textContent = verifiedCustomers;
  if (pendingVerificationEl) pendingVerificationEl.textContent = pendingVerification;
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
  
  // Load data if needed
  if (sectionName === 'verification' && currentUserType === 'admin') {
    loadPendingVerifications();
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
    const productCard = createProductCard(product, false); // false = not logged in as verified customer
    productGrid.appendChild(productCard);
  });
}

function createProductCard(product, showPrices = false) {
  const card = document.createElement('div');
  card.className = 'product-card';
  
  let priceContent;
  if (showPrices) {
    priceContent = `<div class="product-price">${product.price}</div>`;
  } else {
    priceContent = `
      <div class="price-placeholder">
        <div class="price-placeholder-text">Please register with your GST number and log in to view wholesale prices</div>
        <button class="btn btn--primary btn--sm login-to-view-btn" onclick="showLoginModal()">Login to View Prices</button>
      </div>
    `;
  }
  
  card.innerHTML = `
    <div class="product-image">
      <img src="${product.image}" alt="${product.name}" loading="lazy">
    </div>
    <div class="product-info">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      ${priceContent}
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
  const accessMessage = document.getElementById('catalogAccessMessage');
  
  if (!catalogGrid || !accessMessage) return;
  
  // Check if customer is verified
  const isVerified = currentUser && currentUser.gstVerified;
  
  if (!isVerified) {
    // Show access message for unverified customers
    const messageType = currentUser.gstRejected ? 'rejected' : 'pending';
    const messageText = currentUser.gstRejected ? 
      'Your GST verification was rejected. Please contact admin to resolve this issue.' :
      'Your GST number is under verification. Prices will be visible once verified by our admin team.';
    
    accessMessage.innerHTML = `
      <i class="fas fa-exclamation-triangle"></i>
      <h4>Price Access Restricted</h4>
      <p>${messageText}</p>
    `;
    accessMessage.classList.remove('hidden');
    catalogGrid.innerHTML = '';
    return;
  }
  
  // Hide access message and show products with prices
  accessMessage.classList.add('hidden');
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
        <div style="margin-top: 8px; font-size: 12px; color: var(--color-text-secondary);">
          Min Order: ${product.minOrder}
        </div>
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
        <div style="margin-top: 8px; font-size: 12px; color: var(--color-text-secondary);">
          Min Order: ${product.minOrder}
        </div>
        <div class="product-actions" style="margin-top: 12px;">
          <button class="btn btn--sm btn--primary" onclick="editProduct(${product.id})">Edit</button>
          <button class="btn btn--sm btn--outline" onclick="deleteProduct(${product.id})">Delete</button>
        </div>
      </div>
    `;
    adminProductsGrid.appendChild(productCard);
  });
}

function loadCustomersTable() {
  console.log('Loading customers table...');
  
  const tableBody = document.getElementById('customersTableBody');
  if (!tableBody) return;
  
  tableBody.innerHTML = '';
  
  customers.forEach(customer => {
    const row = document.createElement('tr');
    
    let statusBadge;
    if (customer.gstVerified) {
      statusBadge = `<span class="status status--success">Verified</span>`;
    } else if (customer.gstRejected) {
      statusBadge = `<span class="status status--error">Rejected</span>`;
    } else {
      statusBadge = `<span class="status status--warning">Pending</span>`;
    }
    
    row.innerHTML = `
      <td>${customer.customerId}</td>
      <td>${customer.companyName}</td>
      <td>${customer.contactPerson}<br><small>${customer.email}</small></td>
      <td>${customer.gstNumber}</td>
      <td>${statusBadge}</td>
      <td>
        <button class="btn btn--sm btn--outline" onclick="viewCustomer(${customer.id})">View</button>
      </td>
    `;
    tableBody.appendChild(row);
  });
}

function loadPendingVerifications() {
  console.log('Loading pending verifications...');
  
  const pendingContainer = document.getElementById('pendingVerifications');
  if (!pendingContainer) return;
  
  const pendingCustomers = customers.filter(c => !c.gstVerified && !c.gstRejected);
  
  pendingContainer.innerHTML = '';
  
  if (pendingCustomers.length === 0) {
    pendingContainer.innerHTML = `
      <div style="text-align: center; padding: 40px; color: var(--color-text-secondary);">
        <i class="fas fa-check-circle" style="font-size: 48px; margin-bottom: 16px; color: var(--color-success);"></i>
        <p>No pending verifications</p>
      </div>
    `;
    return;
  }
  
  pendingCustomers.forEach(customer => {
    const verificationItem = document.createElement('div');
    verificationItem.className = 'verification-item';
    verificationItem.innerHTML = `
      <div class="verification-header">
        <h4>${customer.companyName}</h4>
        <div class="verification-actions">
          <button class="btn btn--sm btn--primary" onclick="verifyCustomer(${customer.id})">
            <i class="fas fa-check"></i> Verify
          </button>
          <button class="btn btn--sm btn--outline" onclick="rejectCustomer(${customer.id})">
            <i class="fas fa-times"></i> Reject
          </button>
        </div>
      </div>
      <div class="verification-details">
        <div class="verification-detail">
          <label>Customer ID</label>
          <span>${customer.customerId}</span>
        </div>
        <div class="verification-detail">
          <label>Contact Person</label>
          <span>${customer.contactPerson}</span>
        </div>
        <div class="verification-detail">
          <label>Email</label>
          <span>${customer.email}</span>
        </div>
        <div class="verification-detail">
          <label>Phone</label>
          <span>${customer.phone}</span>
        </div>
        <div class="verification-detail">
          <label>GST Number</label>
          <span>${customer.gstNumber}</span>
        </div>
        <div class="verification-detail">
          <label>Registration Date</label>
          <span>${customer.registrationDate}</span>
        </div>
      </div>
    `;
    pendingContainer.appendChild(verificationItem);
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
      .form-control.valid {
        border-color: var(--color-success);
        box-shadow: 0 0 0 2px rgba(var(--color-success-rgb), 0.2);
      }
      .form-control.invalid {
        border-color: var(--color-error);
        box-shadow: 0 0 0 2px rgba(var(--color-error-rgb), 0.2);
      }
    `;
    document.head.appendChild(style);
  }
  
  document.body.appendChild(notification);
  
  // Auto remove after 5 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
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