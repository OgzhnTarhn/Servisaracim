// Admin Panel JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Login functionality
    const loginForm = document.getElementById('loginForm');
    const loginScreen = document.getElementById('loginScreen');
    const adminPanel = document.getElementById('adminPanel');
    
    // Sample user credentials
    const users = {
        'admin': 'admin123',
        'yonetici': 'yonetici123'
    };
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            if (users[username] && users[username] === password) {
                // Login successful
                loginScreen.classList.add('hidden');
                adminPanel.classList.remove('hidden');
                
                // Set current user
                document.getElementById('currentUserName').textContent = username.charAt(0).toUpperCase() + username.slice(1);
                
                // Load initial data
                loadDashboardData();
                loadServices();
                loadVehicles();
                loadTeam();
                loadBlog();
                loadFAQ();
                
                showNotification('Başarıyla giriş yapıldı!', 'success');
            } else {
                showNotification('Kullanıcı adı veya şifre hatalı!', 'error');
            }
        });
    }
    
    // Logout functionality
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            adminPanel.classList.add('hidden');
            loginScreen.classList.remove('hidden');
            document.getElementById('loginForm').reset();
            showNotification('Başarıyla çıkış yapıldı!', 'success');
        });
    }
    
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });
    
    // Theme toggle
    const themeToggle = document.getElementById('themeToggle');
    const darkIcon = document.getElementById('darkIcon');
    const lightIcon = document.getElementById('lightIcon');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-theme');
            darkIcon.classList.toggle('hidden');
            lightIcon.classList.toggle('hidden');
        });
    }
    
    // Form submissions
    setupFormSubmissions();
    
    // Initialize tooltips and other UI elements
    initializeUI();
});

// Show section function
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Show selected section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// Load dashboard data
function loadDashboardData() {
    // This would typically load data from a backend
    console.log('Dashboard data loaded');
}

// Load services
function loadServices() {
    const servicesList = document.getElementById('servicesList');
    if (!servicesList) return;
    
    const services = [
        {
            id: 1,
            title: 'Servis Kiralama',
            description: 'Düğün, nişan, kına, gezi gibi toplu yapılan etkinliklerde ulaşım ihtiyacınızı karşılamak için servis kiralama hizmetimizden yararlanabilirsiniz.',
            icon: 'fas fa-bus'
        },
        {
            id: 2,
            title: 'Minibüs Kiralama',
            description: 'Geniş iç hacme sahip minibüsler ile organizasyonlarınız için ulaşım problemlerini çözünüz.',
            icon: 'fas fa-van'
        },
        {
            id: 3,
            title: 'Otobüs Kiralama',
            description: 'Uzun yol yolculukları ve kalabalık organizasyonlarda ihtiyaç duyduğunuz otobüsleri dilediğiniz süre boyunca kiralayabilirsiniz.',
            icon: 'fas fa-bus-alt'
        }
    ];
    
    servicesList.innerHTML = services.map(service => `
        <div class="list-item">
            <div class="item-content">
                <div class="item-title">${service.title}</div>
                <div class="item-description">${service.description}</div>
            </div>
            <div class="item-actions">
                <button class="btn btn-warning btn-sm" onclick="editService(${service.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-danger btn-sm" onclick="deleteService(${service.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Load vehicles
function loadVehicles() {
    const vehiclesList = document.getElementById('vehiclesList');
    if (!vehiclesList) return;
    
    // Sample vehicles data
    window.vehicles = [
        {
            id: 1,
            name: 'Mercedes Sprinter',
            brand: 'Mercedes',
            model: 'Sprinter',
            year: 2022,
            capacity: 16,
            description: 'Sprinter, konforlu iç paneli ve akıllı asistanlarıyla her an güven veren profesyonel bir iş ortağı olmaya geliyor.',
            features: 'Klima, WiFi, USB şarj, Deri koltuk',
            price: 1500,
            image: null
        },
        {
            id: 2,
            name: 'Otokar Sultan S',
            brand: 'Otokar',
            model: 'Sultan S',
            year: 2021,
            capacity: 12,
            description: 'Her detayıyla şoförlerin ve yolcuların konforunu en üst seviyeye çıkarıyor.',
            features: 'Klima, Bluetooth, GPS',
            price: 1200,
            image: null
        },
        {
            id: 3,
            name: 'Mercedes Travego',
            brand: 'Mercedes',
            model: 'Travego',
            year: 2023,
            capacity: 18,
            description: 'Sürücünün konforu düşünülürken, rahat yolcu koltukları, güçlü kliması ile keyifli yolculuk.',
            features: 'Klima, WiFi, USB şarj, Deri koltuk, GPS',
            price: 1800,
            image: null
        }
    ];
    
    vehiclesList.innerHTML = vehicles.map(vehicle => `
        <div class="content-card">
            <div class="card-header">
                <h3 class="card-title">${vehicle.name}</h3>
                <div class="card-actions">
                    <button class="card-action-btn edit-btn" onclick="editVehicle(${vehicle.id})" title="Düzenle">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="card-action-btn delete-btn" onclick="deleteVehicle(${vehicle.id})" title="Sil">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="card-content">
                <p><strong>Marka/Model:</strong> ${vehicle.brand} ${vehicle.model} (${vehicle.year})</p>
                <p><strong>Kapasite:</strong> ${vehicle.capacity} kişi</p>
                <p>${vehicle.description}</p>
                <div class="card-meta">
                    <span><i class="fas fa-tag"></i> ₺${vehicle.price}/gün</span>
                    <span><i class="fas fa-cog"></i> ${vehicle.features}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Load team
function loadTeam() {
    const teamList = document.getElementById('teamList');
    if (!teamList) return;
    
    // Sample team data
    window.team = [
        {
            id: 1,
            name: 'Ahmet Yılmaz',
            role: 'Genel Müdür',
            description: '15 yıllık sektör deneyimi ile şirketimizin vizyonunu yönetmektedir.',
            experience: 15,
            email: 'ahmet@dugunservisi.com',
            phone: '0532 123 45 67',
            image: null
        },
        {
            id: 2,
            name: 'Fatma Demir',
            role: 'Operasyon Müdürü',
            description: 'Günlük operasyonları yöneterek müşteri memnuniyetini sağlamaktadır.',
            experience: 8,
            email: 'fatma@dugunservisi.com',
            phone: '0533 234 56 78',
            image: null
        },
        {
            id: 3,
            name: 'Mehmet Kaya',
            role: 'Filo Yöneticisi',
            description: 'Araç filomuzun bakım ve yönetiminden sorumludur.',
            experience: 12,
            email: 'mehmet@dugunservisi.com',
            phone: '0534 345 67 89',
            image: null
        }
    ];
    
    teamList.innerHTML = team.map(member => `
        <div class="content-card">
            <div class="card-header">
                <h3 class="card-title">${member.name}</h3>
                <div class="card-actions">
                    <button class="card-action-btn edit-btn" onclick="editTeamMember(${member.id})" title="Düzenle">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="card-action-btn delete-btn" onclick="deleteTeamMember(${member.id})" title="Sil">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
            <div class="card-content">
                <p><strong>Pozisyon:</strong> ${member.role}</p>
                <p>${member.description}</p>
                <div class="card-meta">
                    <span><i class="fas fa-calendar"></i> ${member.experience} yıl deneyim</span>
                    <span><i class="fas fa-envelope"></i> ${member.email}</span>
                    <span><i class="fas fa-phone"></i> ${member.phone}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Load blog
function loadBlog() {
    const blogList = document.getElementById('blogList');
    if (!blogList) return;
    
    const blogPosts = [
        {
            id: 1,
            title: 'Özel Turlar için Servis Kiralama',
            date: 'Nisan 3, 2024',
            excerpt: 'Özel turlarınız için profesyonel servis kiralama hizmetlerimiz hakkında detaylı bilgi alın.',
            image: 'blog-1.jpg'
        },
        {
            id: 2,
            title: 'İstanbul Servis Kiralama',
            date: 'Mart 14, 2024',
            excerpt: 'İstanbul\'un her noktasına güvenli ve konforlu ulaşım için servis kiralama seçeneklerimiz.',
            image: 'blog-2.jpg'
        },
        {
            id: 3,
            title: 'Gezi Tur Taşımacılığı',
            date: 'Şubat 16, 2024',
            excerpt: 'Gezi ve tur organizasyonlarınız için profesyonel taşımacılık çözümlerimiz.',
            image: 'blog-3.jpg'
        }
    ];
    
    blogList.innerHTML = blogPosts.map(post => `
        <div class="list-item">
            <div class="item-content">
                <div class="item-title">${post.title}</div>
                <div class="item-description">${post.date} - ${post.excerpt}</div>
            </div>
            <div class="item-actions">
                <button class="btn btn-warning btn-sm" onclick="editBlogPost(${post.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-danger btn-sm" onclick="deleteBlogPost(${post.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Load FAQ
function loadFAQ() {
    const faqList = document.getElementById('faqList');
    if (!faqList) return;
    
    const faqs = [
        {
            id: 1,
            question: 'Servis Kiralama Ücreti Ne Kadar?',
            answer: 'Servis kiralama ücreti ihtiyacınız olan aracın kapasitesine ve gidilecek güzergaha göre değişkenlik göstermektedir.'
        },
        {
            id: 2,
            question: 'Servis Kiralama Süresinde Bir Sınır Var mı?',
            answer: 'Servis kiralama süresinde herhangi bir süre sınırı bulunmamaktadır. İhtiyacınız olan süre kadar kiralama yapabilirsiniz.'
        },
        {
            id: 3,
            question: 'Kasko ve Sigorta Servis Kiralama Hizmeti İçerisine Dahil mi?',
            answer: 'Servis kiralama ücretlerimize tüm masraflar dahildir.'
        }
    ];
    
    faqList.innerHTML = faqs.map(faq => `
        <div class="list-item">
            <div class="item-content">
                <div class="item-title">${faq.question}</div>
                <div class="item-description">${faq.answer}</div>
            </div>
            <div class="item-actions">
                <button class="btn btn-warning btn-sm" onclick="editFAQ(${faq.id})">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-danger btn-sm" onclick="deleteFAQ(${faq.id})">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// Setup form submissions
function setupFormSubmissions() {
    // Hero form
    const heroForm = document.getElementById('heroForm');
    if (heroForm) {
        heroForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Hero bölümü başarıyla güncellendi!', 'success');
        });
    }
    
    // Contact form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('İletişim bilgileri başarıyla güncellendi!', 'success');
        });
    }
    
    // Settings form
    const settingsForm = document.getElementById('settingsForm');
    if (settingsForm) {
        settingsForm.addEventListener('submit', function(e) {
            e.preventDefault();
            showNotification('Site ayarları başarıyla güncellendi!', 'success');
        });
    }
}

// Add new functions
function addNewService() {
    showNotification('Yeni hizmet ekleme özelliği yakında eklenecek!', 'info');
}

function addNewVehicle() {
    showNotification('Yeni araç ekleme özelliği yakında eklenecek!', 'info');
}

function addNewTeamMember() {
    showNotification('Yeni ekip üyesi ekleme özelliği yakında eklenecek!', 'info');
}

function addNewBlogPost() {
    showNotification('Yeni blog yazısı ekleme özelliği yakında eklenecek!', 'info');
}

function addNewFAQ() {
    showNotification('Yeni SSS ekleme özelliği yakında eklenecek!', 'info');
}

// Modal Management
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        // Reset form
        const form = modal.querySelector('form');
        if (form) form.reset();
    }
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Edit functions
function editService(id) {
    // Load service data
    const service = services.find(s => s.id === id);
    if (service) {
        document.getElementById('editServiceName').value = service.name;
        document.getElementById('editServiceIcon').value = service.icon;
        document.getElementById('editServiceDescription').value = service.description;
        document.getElementById('editServiceLink').value = service.link;
        document.getElementById('editServiceFeatures').value = service.features || '';
        document.getElementById('editServicePrice').value = service.price || '';
        
        // Show current image if exists
        const currentImage = document.getElementById('currentServiceImage');
        if (service.image) {
            currentImage.innerHTML = `<img src="${service.image}" alt="${service.name}">`;
        } else {
            currentImage.innerHTML = '<p>Resim yok</p>';
        }
        
        // Set form action
        const form = document.getElementById('serviceEditForm');
        form.dataset.editId = id;
        
        openModal('serviceEditModal');
    }
}

function editVehicle(id) {
    // Load vehicle data
    const vehicle = vehicles.find(v => v.id === id);
    if (vehicle) {
        document.getElementById('editVehicleName').value = vehicle.name;
        document.getElementById('editVehicleBrand').value = vehicle.brand;
        document.getElementById('editVehicleModel').value = vehicle.model;
        document.getElementById('editVehicleYear').value = vehicle.year;
        document.getElementById('editVehicleCapacity').value = vehicle.capacity;
        document.getElementById('editVehicleDescription').value = vehicle.description;
        document.getElementById('editVehicleFeatures').value = vehicle.features || '';
        document.getElementById('editVehiclePrice').value = vehicle.price || '';
        
        // Show current image if exists
        const currentImage = document.getElementById('currentVehicleImage');
        if (vehicle.image) {
            currentImage.innerHTML = `<img src="${vehicle.image}" alt="${vehicle.name}">`;
        } else {
            currentImage.innerHTML = '<p>Resim yok</p>';
        }
        
        // Set form action
        const form = document.getElementById('vehicleEditForm');
        form.dataset.editId = id;
        
        openModal('vehicleEditModal');
    }
}

function editTeamMember(id) {
    // Load team member data
    const member = team.find(t => t.id === id);
    if (member) {
        document.getElementById('editTeamName').value = member.name;
        document.getElementById('editTeamRole').value = member.role;
        document.getElementById('editTeamDescription').value = member.description;
        document.getElementById('editTeamExperience').value = member.experience || '';
        document.getElementById('editTeamEmail').value = member.email || '';
        document.getElementById('editTeamPhone').value = member.phone || '';
        
        // Show current image if exists
        const currentImage = document.getElementById('currentTeamImage');
        if (member.image) {
            currentImage.innerHTML = `<img src="${member.image}" alt="${member.name}">`;
        } else {
            currentImage.innerHTML = '<p>Resim yok</p>';
        }
        
        // Set form action
        const form = document.getElementById('teamEditForm');
        form.dataset.editId = id;
        
        openModal('teamEditModal');
    }
}

function editBlogPost(id) {
    // Load blog post data
    const post = blogPosts.find(b => b.id === id);
    if (post) {
        document.getElementById('editBlogTitle').value = post.title;
        document.getElementById('editBlogExcerpt').value = post.excerpt;
        document.getElementById('editBlogContent').value = post.content;
        document.getElementById('editBlogDate').value = post.date;
        document.getElementById('editBlogAuthor').value = post.author;
        document.getElementById('editBlogCategory').value = post.category;
        
        // Show current image if exists
        const currentImage = document.getElementById('currentBlogImage');
        if (post.image) {
            currentImage.innerHTML = `<img src="${post.image}" alt="${post.title}">`;
        } else {
            currentImage.innerHTML = '<p>Resim yok</p>';
        }
        
        // Set form action
        const form = document.getElementById('blogEditForm');
        form.dataset.editId = id;
        
        openModal('blogEditModal');
    }
}

function editFAQ(id) {
    // Load FAQ data
    const faq = faqs.find(f => f.id === id);
    if (faq) {
        document.getElementById('editFaqQuestion').value = faq.question;
        document.getElementById('editFaqAnswer').value = faq.answer;
        document.getElementById('editFaqCategory').value = faq.category;
        document.getElementById('editFaqOrder').value = faq.order || 1;
        
        // Set form action
        const form = document.getElementById('faqEditForm');
        form.dataset.editId = id;
        
        openModal('faqEditModal');
    }
}

function editHero() {
    // Load hero data (you can store this in localStorage or a variable)
    const heroData = {
        title: 'Lüks Araçlar, Uygun Fiyat, Profesyonel Şoförler',
        subtitle: 'Deneyimli şoför kadromuz sayesinde her yere daha hızlı ulaşım sağlayın.',
        button1Text: 'Hemen Teklif Al',
        button1Link: '#teklif',
        button2Text: 'Hakkımızda',
        button2Link: 'hakkimizda.html'
    };
    
    document.getElementById('editHeroTitle').value = heroData.title;
    document.getElementById('editHeroSubtitle').value = heroData.subtitle;
    document.getElementById('editHeroButton1Text').value = heroData.button1Text;
    document.getElementById('editHeroButton1Link').value = heroData.button1Link;
    document.getElementById('editHeroButton2Text').value = heroData.button2Text;
    document.getElementById('editHeroButton2Link').value = heroData.button2Link;
    
    openModal('heroEditModal');
}

// Delete functions
function deleteService(id) {
    if (confirm('Bu hizmeti silmek istediğinizden emin misiniz?')) {
        showNotification(`Hizmet ${id} başarıyla silindi!`, 'success');
        loadServices(); // Reload the list
    }
}

function deleteVehicle(id) {
    if (confirm('Bu aracı silmek istediğinizden emin misiniz?')) {
        showNotification(`Araç ${id} başarıyla silindi!`, 'success');
        loadVehicles(); // Reload the list
    }
}

function deleteTeamMember(id) {
    if (confirm('Bu ekip üyesini silmek istediğinizden emin misiniz?')) {
        showNotification(`Ekip üyesi ${id} başarıyla silindi!`, 'success');
        loadTeam(); // Reload the list
    }
}

function deleteBlogPost(id) {
    if (confirm('Bu blog yazısını silmek istediğinizden emin misiniz?')) {
        showNotification(`Blog yazısı ${id} başarıyla silindi!`, 'success');
        loadBlog(); // Reload the list
    }
}

function deleteFAQ(id) {
    if (confirm('Bu SSS\'yi silmek istediğinizden emin misiniz?')) {
        showNotification(`SSS ${id} başarıyla silindi!`, 'success');
        loadFAQ(); // Reload the list
    }
}

// Form submission handlers
function setupFormSubmissions() {
    // Team edit form
    const teamEditForm = document.getElementById('teamEditForm');
    if (teamEditForm) {
        teamEditForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const editId = this.dataset.editId;
            
            // Update team member data
            const memberIndex = team.findIndex(t => t.id === parseInt(editId));
            if (memberIndex !== -1) {
                team[memberIndex] = {
                    ...team[memberIndex],
                    name: formData.get('name'),
                    role: formData.get('role'),
                    description: formData.get('description'),
                    experience: formData.get('experience'),
                    email: formData.get('email'),
                    phone: formData.get('phone')
                };
                
                // Handle image upload
                const imageFile = formData.get('image');
                if (imageFile && imageFile.size > 0) {
                    // In a real app, you would upload this to server
                    team[memberIndex].image = URL.createObjectURL(imageFile);
                }
                
                loadTeam(); // Reload the list
                closeModal('teamEditModal');
                showNotification('Ekip üyesi başarıyla güncellendi!', 'success');
            }
        });
    }
    
    // Vehicle edit form
    const vehicleEditForm = document.getElementById('vehicleEditForm');
    if (vehicleEditForm) {
        vehicleEditForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const editId = this.dataset.editId;
            
            // Update vehicle data
            const vehicleIndex = vehicles.findIndex(v => v.id === parseInt(editId));
            if (vehicleIndex !== -1) {
                vehicles[vehicleIndex] = {
                    ...vehicles[vehicleIndex],
                    name: formData.get('name'),
                    brand: formData.get('brand'),
                    model: formData.get('model'),
                    year: formData.get('year'),
                    capacity: formData.get('capacity'),
                    description: formData.get('description'),
                    features: formData.get('features'),
                    price: formData.get('price')
                };
                
                // Handle image upload
                const imageFile = formData.get('image');
                if (imageFile && imageFile.size > 0) {
                    vehicles[vehicleIndex].image = URL.createObjectURL(imageFile);
                }
                
                loadVehicles(); // Reload the list
                closeModal('vehicleEditModal');
                showNotification('Araç başarıyla güncellendi!', 'success');
            }
        });
    }
    
    // Blog edit form
    const blogEditForm = document.getElementById('blogEditForm');
    if (blogEditForm) {
        blogEditForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const editId = this.dataset.editId;
            
            // Update blog post data
            const postIndex = blogPosts.findIndex(b => b.id === parseInt(editId));
            if (postIndex !== -1) {
                blogPosts[postIndex] = {
                    ...blogPosts[postIndex],
                    title: formData.get('title'),
                    excerpt: formData.get('excerpt'),
                    content: formData.get('content'),
                    date: formData.get('date'),
                    author: formData.get('author'),
                    category: formData.get('category')
                };
                
                // Handle image upload
                const imageFile = formData.get('image');
                if (imageFile && imageFile.size > 0) {
                    blogPosts[postIndex].image = URL.createObjectURL(imageFile);
                }
                
                loadBlog(); // Reload the list
                closeModal('blogEditModal');
                showNotification('Blog yazısı başarıyla güncellendi!', 'success');
            }
        });
    }
    
    // FAQ edit form
    const faqEditForm = document.getElementById('faqEditForm');
    if (faqEditForm) {
        faqEditForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const editId = this.dataset.editId;
            
            // Update FAQ data
            const faqIndex = faqs.findIndex(f => f.id === parseInt(editId));
            if (faqIndex !== -1) {
                faqs[faqIndex] = {
                    ...faqs[faqIndex],
                    question: formData.get('question'),
                    answer: formData.get('answer'),
                    category: formData.get('category'),
                    order: formData.get('order')
                };
                
                loadFAQ(); // Reload the list
                closeModal('faqEditModal');
                showNotification('SSS başarıyla güncellendi!', 'success');
            }
        });
    }
    
    // Hero edit form
    const heroEditForm = document.getElementById('heroEditForm');
    if (heroEditForm) {
        heroEditForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            
            // Save hero data to localStorage
            const heroData = {
                title: formData.get('title'),
                subtitle: formData.get('subtitle'),
                button1Text: formData.get('button1Text'),
                button1Link: formData.get('button1Link'),
                button2Text: formData.get('button2Text'),
                button2Link: formData.get('button2Link')
            };
            
            localStorage.setItem('heroData', JSON.stringify(heroData));
            
            closeModal('heroEditModal');
            showNotification('Ana sayfa hero bölümü başarıyla güncellendi!', 'success');
        });
    }
    
    // Service edit form
    const serviceEditForm = document.getElementById('serviceEditForm');
    if (serviceEditForm) {
        serviceEditForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const editId = this.dataset.editId;
            
            // Update service data
            const serviceIndex = services.findIndex(s => s.id === parseInt(editId));
            if (serviceIndex !== -1) {
                services[serviceIndex] = {
                    ...services[serviceIndex],
                    name: formData.get('name'),
                    icon: formData.get('icon'),
                    description: formData.get('description'),
                    link: formData.get('link'),
                    features: formData.get('features'),
                    price: formData.get('price')
                };
                
                // Handle image upload
                const imageFile = formData.get('image');
                if (imageFile && imageFile.size > 0) {
                    services[serviceIndex].image = URL.createObjectURL(imageFile);
                }
                
                loadServices(); // Reload the list
                closeModal('serviceEditModal');
                showNotification('Hizmet başarıyla güncellendi!', 'success');
            }
        });
    }
}

// Initialize UI
function initializeUI() {
    // Add any additional UI initialization here
    console.log('UI initialized');
    
    // Setup form submissions
    setupFormSubmissions();
}

// Notification system
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background: #10b981;' : 
          type === 'error' ? 'background: #ef4444;' : 
          type === 'info' ? 'background: #3b82f6;' : 
          'background: #6b7280;'}
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Animate out and remove
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Export functions for global use
window.AdminPanel = {
    showSection,
    showNotification,
    loadServices,
    loadVehicles,
    loadTeam,
    loadBlog,
    loadFAQ
}; 