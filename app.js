// Application Data with Enhanced Dashboard Data
const appData = {
  company: {
    name: "SUPREME HANDLOOM",
    establishedYear: "1967",
    tagline: "Authentic Handloom Textiles Since 1967",
    phone: "9119995353",
    address: "101/198 Beconganj Kanpur",
    experience: "58+ years"
  },
  dashboardData: {
    totalRevenue: 2847563,
    totalOrders: 1247,
    activeCustomers: 89,
    revenueGrowth: 12.5,
    orderGrowth: 8.3,
    customerGrowth: 15.2,
    monthlyRevenue: [
      {month: "Jan", revenue: 185000, orders: 95},
      {month: "Feb", revenue: 220000, orders: 108},
      {month: "Mar", revenue: 275000, orders: 125},
      {month: "Apr", revenue: 195000, orders: 89},
      {month: "May", revenue: 285000, orders: 132},
      {month: "Jun", revenue: 315000, orders: 145},
      {month: "Jul", revenue: 245000, orders: 118},
      {month: "Aug", revenue: 295000, orders: 135},
      {month: "Sep", revenue: 335000, orders: 152},
      {month: "Oct", revenue: 285000, orders: 128},
      {month: "Nov", revenue: 315000, orders: 148},
      {month: "Dec", revenue: 355000, orders: 165}
    ]
  },
  productLeaderboard: [
    {name: "Cotton Bedsheet", sales: 2847, revenue: 1893820, growth: 15.2, category: "Bedsheet"},
    {name: "Traditional Lungi", sales: 3256, revenue: 976800, growth: 12.8, category: "Lungi"},
    {name: "Woolen Blanket", sales: 892, revenue: 1248600, growth: -3.2, category: "Blanket"},
    {name: "Cotton Gamcha", sales: 4235, revenue: 635250, growth: 8.9, category: "Gamcha"},
    {name: "Handloom Chadar", sales: 1156, revenue: 578000, growth: 22.1, category: "Chadar"},
    {name: "Suit Material", sales: 567, revenue: 453600, growth: 5.7, category: "Suit"}
  ],
  customerLeaderboard: [
    {name: "Rajesh Textiles Pvt Ltd", orders: 156, revenue: 456789, gst: "22AAAAA0000A1Z5", growth: 18.5},
    {name: "Mumbai Wholesale Hub", orders: 134, revenue: 398456, gst: "27BBBBB1111B2Y4", growth: 12.3},
    {name: "Delhi Fashion Center", orders: 128, revenue: 356789, gst: "07CCCCC2222C3X3", growth: -2.1},
    {name: "Kolkata Handloom Co", orders: 98, revenue: 289456, gst: "19DDDDD3333D4W2", growth: 25.6},
    {name: "Chennai Textile Mart", orders: 87, revenue: 234567, gst: "33EEEEE4444E5V1", growth: 8.9}
  ],
  recentOrders: [
    {id: "SH-2025-001", customer: "Rajesh Textiles Pvt Ltd", product: "Cotton Bedsheet", quantity: 250, amount: 175000, status: "Delivered", date: "2025-08-20"},
    {id: "SH-2025-002", customer: "Mumbai Wholesale Hub", product: "Traditional Lungi", quantity: 500, amount: 125000, status: "Processing", date: "2025-08-21"},
    {id: "SH-2025-003", customer: "Delhi Fashion Center", product: "Woolen Blanket", quantity: 100, amount: 140000, status: "Shipped", date: "2025-08-19"},
    {id: "SH-2025-004", customer: "Kolkata Handloom Co", product: "Cotton Gamcha", quantity: 800, amount: 96000, status: "Confirmed", date: "2025-08-21"}
  ],
  products: [
    {
      id: 1,
      name: "Traditional Lungi",
      category: "Lungi",
      description: "Premium quality handwoven lungis in various colors and patterns",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      price: "₹150-300 per piece",
      minOrder: "100 pieces",
      stock: 2500,
      sold: 3256
    },
    {
      id: 2,
      name: "Cotton Gamcha",
      category: "Gamcha", 
      description: "Soft cotton gamchas for daily use, wholesale quantities available",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop",
      price: "₹80-150 per piece",
      minOrder: "200 pieces",
      stock: 3800,
      sold: 4235
    },
    {
      id: 3,
      name: "Handloom Chadar",
      category: "Chadar",
      description: "Traditional handwoven chadars in various designs",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop",
      price: "₹300-600 per piece",
      minOrder: "50 pieces",
      stock: 1200,
      sold: 1156
    },
    {
      id: 4,
      name: "Cotton Bedsheet",
      category: "Bedsheet",
      description: "Pure cotton handloom bedsheets in single and double sizes",
      image: "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?w=400&h=300&fit=crop",
      price: "₹400-800 per piece",
      minOrder: "25 pieces",
      stock: 1800,
      sold: 2847
    },
    {
      id: 5,
      name: "Woolen Blanket",
      category: "Blanket",
      description: "Warm handwoven blankets for winter season",
      image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=400&h=300&fit=crop",
      price: "₹800-1500 per piece",
      minOrder: "20 pieces",
      stock: 950,
      sold: 892
    },
    {
      id: 6,
      name: "Suit Material",
      category: "Suit",
      description: "Premium handloom fabric for traditional suits",
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=300&fit=crop",
      price: "₹500-1200 per meter",
      minOrder: "10 meters",
      stock: 450,
      sold: 567
    }
  ],
  categories: ["All", "Lungi", "Gamcha", "Chadar", "Bedsheet", "Blanket", "Suit"],
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
  }
};

// Application State
let currentUser = null;
let currentUserType = null;
let customers = [];
let currentFilter = 'all';
let charts = {};

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
    status: 'Active',
    revenue: 456789
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
    status: 'Active',
    revenue: 125000
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
    status: 'Active',
    revenue: 75000
  }
];

// Global Functions - Define and attach immediately
window.showLoginModal = function() {
  console.log('Opening login modal...');
  const modal = document.getElementById('loginModal');
  if (modal) {
    modal.classList.remove('hidden');
  } else {
    console.error('Login modal not found');
  }
};

window.showAdminModal = function() {
  console.log('Opening admin modal...');
  const modal = document.getElementById('adminModal');
  if (modal) {
    modal.classList.remove('hidden');
  } else {
    console.error('Admin modal not found');
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
  if (event && event.target) {
    event.target.classList.add('active');
  }
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
    const verificationStatus = customer.gstVerified ? 'Verified' : 'Pending Verification';
    alert(`Customer Details:\n\nCompany: ${customer.companyName}\nContact: ${customer.contactPerson}\nEmail: ${customer.email}\nPhone: ${customer.phone}\nCustomer ID: ${customer.customerId}\nGST Number: ${customer.gstNumber}\nVerification Status: ${verificationStatus}`);
  }
};

window.verifyCustomer = function(customerId) {
  const customer = customers.find(c => c.id === customerId);
  if (customer && !customer.gstVerified) {
    customer.gstVerified = true;
    customer.verificationDate = new Date().toISOString().split('T')[0];
    showNotification(`Customer ${customer.companyName} has been verified successfully!`, 'success');
    loadCustomersTable();
    loadPendingVerifications();
    updateStats();
    updateVerificationStats();
  }
};

window.rejectCustomer = function(customerId) {
  const customer = customers.find(c => c.id === customerId);
  if (customer && !customer.gstVerified) {
    customer.gstRejected = true;
    showNotification(`Customer ${customer.companyName} verification has been rejected.`, 'error');
    loadCustomersTable();
    loadPendingVerifications();
    updateStats();
    updateVerificationStats();
  }
};

window.showAddProductForm = function() {
  showNotification('Add product functionality would open a form to create new products.', 'info');
};

window.addCustomer = function() {
  showNotification('Add customer functionality would open a form to create new customers.', 'info');
};

window.exportReport = function() {
  showNotification('Export report functionality would generate and download business reports.', 'success');
};

window.refreshAnalytics = function() {
  showNotification('Analytics data refreshed successfully!', 'success');
  if (currentUserType === 'admin') {
    loadAnalyticsCharts();
  }
};

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
    }, 2000);
    
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

  // Add event listeners to dynamically created buttons
  setupDynamicEventListeners();
}

function setupDynamicEventListeners() {
  // Use event delegation for dynamically created buttons
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('login-to-view-btn')) {
      e.preventDefault();
      window.showLoginModal();
    }
  });
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
  
  console.log('Login attempt:', username);
  
  // Find customer
  const customer = customers.find(c => 
    c.email === username || c.customerId === username
  );
  
  if (customer && customer.password === password) {
    currentUser = customer;
    currentUserType = 'customer';
    window.closeModal('loginModal');
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
    status: 'Active',
    revenue: 0
  };
  
  customers.push(newCustomer);
  
  showNotification(`Registration successful! Your Customer ID is: ${customerId}. GST verification pending.`, 'success');
  
  // Auto login
  currentUser = newCustomer;
  currentUserType = 'customer';
  window.closeModal('loginModal');
  showCustomerDashboard();
}

function handleAdminLogin(e) {
  e.preventDefault();
  console.log('Handling admin login...');
  
  const username = document.getElementById('adminUsername').value;
  const password = document.getElementById('adminPassword').value;
  
  console.log('Admin login attempt:', username, password);
  
  if (username === appData.adminCredentials.username && 
      password === appData.adminCredentials.password) {
    currentUser = { username: 'admin', name: 'Administrator' };
    currentUserType = 'admin';
    window.closeModal('adminModal');
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
      message: 'Welcome! You can now view our wholesale prices.',
      type: 'success'
    };
  } else {
    return {
      message: 'Your GST number is under verification. Prices will be visible once verified.',
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
  if (dashboard) {
    dashboard.classList.remove('hidden');
    
    // Update user info and verification status
    updateCustomerDashboardInfo();
    
    // Load catalog with proper access control
    loadCustomerCatalog();
    
    // Set active section
    showDashboardSection('catalog');
  }
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
  if (dashboard) {
    dashboard.classList.remove('hidden');
    
    // Load admin data
    updateDashboardWidgets();
    updateStats();
    loadCustomersTable();
    loadPendingVerifications();
    loadAdminProducts();
    loadRecentOrders();
    updateVerificationStats();
    
    // Load charts after a short delay
    setTimeout(() => {
      initializeDashboardCharts();
    }, 200);
    
    // Set active section
    showAdminDashboardSection('overview');
  }
}

function updateDashboardWidgets() {
  // Update revenue widget
  const totalRevenueEl = document.getElementById('totalRevenue');
  if (totalRevenueEl) {
    totalRevenueEl.textContent = `₹${(appData.dashboardData.totalRevenue / 100000).toFixed(1)}L`;
  }

  // Update orders widget
  const totalOrdersEl = document.getElementById('totalOrders');
  if (totalOrdersEl) {
    totalOrdersEl.textContent = appData.dashboardData.totalOrders.toLocaleString();
  }

  // Update customers widget
  const activeCustomersEl = document.getElementById('activeCustomers');
  if (activeCustomersEl) {
    activeCustomersEl.textContent = appData.dashboardData.activeCustomers.toString();
  }

  // Update GST verified count
  const gstVerifiedEl = document.getElementById('gstVerified');
  if (gstVerifiedEl) {
    const verifiedCount = customers.filter(c => c.gstVerified).length;
    gstVerifiedEl.textContent = verifiedCount.toString();
  }
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

function updateVerificationStats() {
  const pendingCount = customers.filter(c => !c.gstVerified && !c.gstRejected).length;
  const verifiedCount = customers.filter(c => c.gstVerified).length;
  
  const pendingEl = document.getElementById('pendingCount');
  const verifiedEl = document.getElementById('verifiedCount');
  
  if (pendingEl) pendingEl.textContent = `${pendingCount} Pending`;
  if (verifiedEl) verifiedEl.textContent = `${verifiedCount} Verified`;
}

function setupDashboardNavigation() {
  // Customer dashboard navigation
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

  // Admin dashboard navigation
  document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      const section = link.getAttribute('data-section');
      showAdminDashboardSection(section);
      
      // Update active state
      const parentSidebar = link.closest('.admin-sidebar');
      if (parentSidebar) {
        parentSidebar.querySelectorAll('.nav-item').forEach(l => l.classList.remove('active'));
      }
      link.classList.add('active');
      
      // Load section-specific data
      if (section === 'leaderboard') {
        setTimeout(() => loadLeaderboards(), 100);
      } else if (section === 'analytics') {
        setTimeout(() => loadAnalyticsCharts(), 100);
      }
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

function showAdminDashboardSection(sectionName) {
  console.log('Showing admin dashboard section:', sectionName);
  
  // Hide all sections
  document.querySelectorAll('.admin-section').forEach(section => {
    section.classList.remove('active');
  });
  
  // Show selected section
  const targetSection = document.getElementById(sectionName + 'Section');
  if (targetSection) {
    targetSection.classList.add('active');
  }
}

// Chart Functions
function initializeDashboardCharts() {
  try {
    initializeRevenueChart();
    initializeOrdersChart();
  } catch (error) {
    console.error('Error initializing charts:', error);
  }
}

function initializeRevenueChart() {
  const ctx = document.getElementById('revenueChart');
  if (!ctx) return;

  try {
    if (charts.revenue) {
      charts.revenue.destroy();
    }

    charts.revenue = new Chart(ctx, {
      type: 'line',
      data: {
        labels: appData.dashboardData.monthlyRevenue.map(item => item.month),
        datasets: [{
          label: 'Revenue (₹)',
          data: appData.dashboardData.monthlyRevenue.map(item => item.revenue),
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          borderWidth: 3,
          tension: 0.4,
          pointRadius: 6,
          pointBackgroundColor: '#1FB8CD',
          pointBorderColor: '#ffffff',
          pointBorderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            titleColor: '#ffffff',
            bodyColor: '#ffffff',
            callbacks: {
              label: function(context) {
                return `Revenue: ₹${context.parsed.y.toLocaleString()}`;
              }
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return '₹' + (value / 1000) + 'k';
              }
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating revenue chart:', error);
  }
}

function initializeOrdersChart() {
  const ctx = document.getElementById('ordersChart');
  if (!ctx) return;

  try {
    if (charts.orders) {
      charts.orders.destroy();
    }

    charts.orders = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: appData.dashboardData.monthlyRevenue.map(item => item.month),
        datasets: [{
          label: 'Orders',
          data: appData.dashboardData.monthlyRevenue.map(item => item.orders),
          backgroundColor: '#FFC185',
          borderColor: '#D2BA4C',
          borderWidth: 1,
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating orders chart:', error);
  }
}

function loadAnalyticsCharts() {
  setTimeout(() => {
    try {
      initializeRevenueAnalyticsChart();
      initializeCategoryChart();
      initializeProductTrendsChart();
    } catch (error) {
      console.error('Error loading analytics charts:', error);
    }
  }, 100);
}

function initializeRevenueAnalyticsChart() {
  const ctx = document.getElementById('revenueAnalyticsChart');
  if (!ctx) return;

  try {
    if (charts.revenueAnalytics) {
      charts.revenueAnalytics.destroy();
    }

    charts.revenueAnalytics = new Chart(ctx, {
      type: 'line',
      data: {
        labels: appData.dashboardData.monthlyRevenue.map(item => item.month),
        datasets: [{
          label: 'Revenue',
          data: appData.dashboardData.monthlyRevenue.map(item => item.revenue),
          borderColor: '#5D878F',
          backgroundColor: 'rgba(93, 135, 143, 0.1)',
          borderWidth: 2,
          tension: 0.4,
          fill: true
        }, {
          label: 'Orders',
          data: appData.dashboardData.monthlyRevenue.map(item => item.orders * 2000),
          borderColor: '#B4413C',
          backgroundColor: 'rgba(180, 65, 60, 0.1)',
          borderWidth: 2,
          tension: 0.4,
          fill: false
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          intersect: false,
          mode: 'index'
        },
        plugins: {
          legend: {
            position: 'top'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating revenue analytics chart:', error);
  }
}

function initializeCategoryChart() {
  const ctx = document.getElementById('categoryChart');
  if (!ctx) return;

  try {
    if (charts.category) {
      charts.category.destroy();
    }

    const categoryData = appData.productLeaderboard.reduce((acc, product) => {
      acc[product.category] = (acc[product.category] || 0) + product.revenue;
      return acc;
    }, {});

    charts.category = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: Object.keys(categoryData),
        datasets: [{
          data: Object.values(categoryData),
          backgroundColor: ['#1FB8CD', '#FFC185', '#B4413C', '#5D878F', '#DB4545', '#D2BA4C']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'right'
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating category chart:', error);
  }
}

function initializeProductTrendsChart() {
  const ctx = document.getElementById('productTrendsChart');
  if (!ctx) return;

  try {
    if (charts.productTrends) {
      charts.productTrends.destroy();
    }

    charts.productTrends = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: appData.productLeaderboard.map(p => p.name),
        datasets: [{
          label: 'Growth %',
          data: appData.productLeaderboard.map(p => p.growth),
          backgroundColor: appData.productLeaderboard.map(p => p.growth > 0 ? '#10B981' : '#EF4444'),
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        indexAxis: 'y',
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            ticks: {
              callback: function(value) {
                return value + '%';
              }
            }
          }
        }
      }
    });
  } catch (error) {
    console.error('Error creating product trends chart:', error);
  }
}

function loadLeaderboards() {
  loadProductLeaderboard();
  loadCustomerLeaderboard();
}

function loadProductLeaderboard() {
  const container = document.getElementById('productLeaderboard');
  if (!container) return;

  container.innerHTML = '';

  appData.productLeaderboard.forEach((product, index) => {
    const item = document.createElement('div');
    item.className = 'leaderboard-item';
    
    const rankClass = index < 3 ? `leaderboard-rank--${index + 1}` : 'leaderboard-rank--other';
    const trendClass = product.growth > 0 ? 'trend-indicator--positive' : 'trend-indicator--negative';
    const trendIcon = product.growth > 0 ? 'fa-arrow-up' : 'fa-arrow-down';
    
    item.innerHTML = `
      <div class="leaderboard-rank ${rankClass}">${index + 1}</div>
      <div class="leaderboard-info">
        <div class="leaderboard-name">${product.name}</div>
        <div class="leaderboard-details">${product.sales} units sold</div>
        <div class="trend-indicator ${trendClass}">
          <i class="fas ${trendIcon}"></i> ${Math.abs(product.growth)}%
        </div>
      </div>
      <div class="leaderboard-value">
        <div class="leaderboard-primary">₹${(product.revenue / 100000).toFixed(1)}L</div>
        <div class="leaderboard-secondary">${product.category}</div>
      </div>
    `;
    
    container.appendChild(item);
  });
}

function loadCustomerLeaderboard() {
  const container = document.getElementById('customerLeaderboard');
  if (!container) return;

  container.innerHTML = '';

  appData.customerLeaderboard.forEach((customer, index) => {
    const item = document.createElement('div');
    item.className = 'leaderboard-item';
    
    const rankClass = index < 3 ? `leaderboard-rank--${index + 1}` : 'leaderboard-rank--other';
    const trendClass = customer.growth > 0 ? 'trend-indicator--positive' : 'trend-indicator--negative';
    const trendIcon = customer.growth > 0 ? 'fa-arrow-up' : 'fa-arrow-down';
    
    item.innerHTML = `
      <div class="leaderboard-rank ${rankClass}">${index + 1}</div>
      <div class="leaderboard-info">
        <div class="leaderboard-name">${customer.name}</div>
        <div class="leaderboard-details">${customer.orders} orders</div>
        <div class="trend-indicator ${trendClass}">
          <i class="fas ${trendIcon}"></i> ${Math.abs(customer.growth)}%
        </div>
      </div>
      <div class="leaderboard-value">
        <div class="leaderboard-primary">₹${(customer.revenue / 100000).toFixed(1)}L</div>
        <div class="leaderboard-secondary">${customer.gst}</div>
      </div>
    `;
    
    container.appendChild(item);
  });
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
    const productCard = createProductCard(product, false);
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
        <button class="btn btn--primary btn--sm login-to-view-btn">Login to View Prices</button>
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
          Stock: ${product.stock} | Sold: ${product.sold}
        </div>
        <div class="product-actions">
          <button class="btn btn--sm btn--primary" onclick="editProduct(${product.id})">
            <i class="fas fa-edit"></i> Edit
          </button>
          <button class="btn btn--sm btn--outline" onclick="deleteProduct(${product.id})">
            <i class="fas fa-trash"></i> Delete
          </button>
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
    
    const revenue = customer.revenue || 0;
    
    row.innerHTML = `
      <td>${customer.customerId}</td>
      <td>${customer.companyName}</td>
      <td>${customer.contactPerson}<br><small style="color: var(--color-text-secondary);">${customer.email}</small></td>
      <td>${customer.gstNumber}</td>
      <td>${statusBadge}</td>
      <td>₹${(revenue / 1000).toFixed(1)}k</td>
      <td>
        <button class="btn btn--sm btn--outline" onclick="viewCustomer(${customer.id})">
          <i class="fas fa-eye"></i> View
        </button>
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

function loadRecentOrders() {
  const container = document.getElementById('recentOrdersList');
  const countEl = document.getElementById('ordersCount');
  
  if (!container) return;
  
  if (countEl) {
    countEl.textContent = `${appData.recentOrders.length} Recent Orders`;
  }
  
  container.innerHTML = '';
  
  appData.recentOrders.forEach(order => {
    const orderItem = document.createElement('div');
    orderItem.className = 'order-item';
    
    let statusClass = 'status--info';
    if (order.status === 'Delivered') statusClass = 'status--success';
    else if (order.status === 'Processing') statusClass = 'status--warning';
    else if (order.status === 'Shipped') statusClass = 'status--info';
    
    orderItem.innerHTML = `
      <div class="order-info">
        <h4>${order.id}</h4>
        <p>${order.customer}</p>
        <div class="order-meta">
          <span class="status ${statusClass}">${order.status}</span>
          <span>${order.product} - ${order.quantity} units</span>
        </div>
        <div class="order-date">${order.date}</div>
      </div>
      <div class="order-amount">₹${order.amount.toLocaleString()}</div>
    `;
    
    container.appendChild(orderItem);
  });
}

// Gallery Animation
function setupGalleryAnimation() {
  console.log('Setting up gallery animation...');
  
  const galleryTrack = document.getElementById('galleryTrack');
  if (!galleryTrack) return;
  
  // Duplicate gallery items for continuous scroll
  const items = galleryTrack.querySelectorAll('.gallery-item');
  if (items.length > 0) {
    items.forEach(item => {
      const clone = item.cloneNode(true);
      galleryTrack.appendChild(clone);
    });
  }
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

// Cleanup charts on page unload
window.addEventListener('beforeunload', () => {
  Object.values(charts).forEach(chart => {
    if (chart) chart.destroy();
  });
});

console.log('App script loaded successfully!');