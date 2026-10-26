// Function para i-load ang Google Font via JavaScript
function loadGoogleFont() {
  const preconnect1 = document.createElement('link');
  preconnect1.rel = 'preconnect';
  preconnect1.href = 'https://fonts.googleapis.com';
  document.head.appendChild(preconnect1);

  const preconnect2 = document.createElement('link');
  preconnect2.rel = 'preconnect';
  preconnect2.href = 'https://fonts.gstatic.com';
  preconnect2.crossOrigin = 'anonymous';
  document.head.appendChild(preconnect2);

  const fontLink = document.createElement('link');
  fontLink.rel = 'stylesheet';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Graduate&display=swap';
  document.head.appendChild(fontLink);
}

loadGoogleFont();

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }

  // Handle dropdown clicks on touch screens (supports nested submenus)
  const dropdownItems = document.querySelectorAll('.dropdown, .dropdown-submenu');
  dropdownItems.forEach(item => {
    item.addEventListener('click', (e) => {
      if (window.innerWidth <= 768) {
        e.stopPropagation();
        const menu = item.querySelector(':scope > .dropdown-menu');
        if (menu) {
          menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
        }
      }
    });
  });
});

function openModal(title) {
  alert(`Opening dashboard section: ${title}\n(Connect your Google Sheets / Apps Script backend endpoint here)`);
}

// FOR SPECIAL HEADER AND SPECIAL FOOTER
class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header class="site-header">
  <div class="header-container">
    
    <!-- 1. KALIWA: Dalawang Logo -->
    <div class="header-logos">
      <img 
        src="https://lh3.googleusercontent.com/d/1udkgGPC3lxVrZN3HNH7tVHiaYSXW_MZC" 
        alt="DepEd Antipolo Logo" 
        class="header-img"
      >
      <img 
        src="https://lh3.googleusercontent.com/d/1V2cjrlu-ANinM0Po_WBeNbiOvsACaYdl" 
        alt="SDO Antipolo Mathematics Dept" 
        class="header-img logo-larger"
      >
    </div>

    <!-- 2. GITNA: SDO Antipolo Titles -->
    <div class="header-titles">
      <h1>SDO ANTIPOLO: MATHEMATICS HUB</h1>
      <p class="subtitle">Centralized Mathematics Data and Resource Hub</p>
    </div>

    <!-- 3. KANAN: Facebook Icon + PST Clock -->
    <div class="header-right">
      <div class="social-bar">
        <a href="https://www.facebook.com/profile.php?id=61550963996069" target="_blank" aria-label="Facebook">
          <i class="fab fa-facebook"></i>
        </a>
      </div>
      
      <div class="pst-container">
        <div class="pst-widget">
          <div class="pst-label">Philippine Standard Time</div>
          <div id="pst-time" class="pst-time">00:00:00 AM</div>
          <div id="pst-date" class="pst-date">Monday, January 1, 2026</div>
        </div>
      </div>

    </div>
  </div>
</header>

  <!-- Navigation Bar -->
  <nav class="navbar">
    <div class="nav-container">
      <button class="nav-toggle" id="navToggle" aria-label="Toggle Navigation">
        <i class="fas fa-bars"></i>
      </button>
      <ul class="nav-menu" id="navMenu">
        <li><a href="index.html" class="active">Home</a></li>
        <li class="dropdown">
          <a href="#">LOCAL RMA <i class="fas fa-chevron-down"></i></a>
          <ul class="dropdown-menu">
            <li><a href="https://script.google.com/macros/s/AKfycbwG6IOhdD48BShok6TNzNmsvcxgS3SRSKxwK8x5Gy4jv66NUT3wA2TDe695c3qrNPJq/exec" target="_blank">Local RMA Schools</a></li>
            <li><a href="#">Emergent</a></li>
            <li><a href="#">RMA</a></li>
            <li><a href="https://docs.google.com/spreadsheets/d/1b1qSrRuIS5QK-gZrWPwaC-PVZsAGliNpDZjP6S97IZk" target="_blank">Dela Paz NHS</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#">ISSUANCES <i class="fas fa-chevron-down"></i></a>
          <ul class="dropdown-menu">
            <li><a href="mathlinks.html">Math Teachers' Reference Folders</a></li>
            <li><a href="https://script.google.com/a/macros/deped.gov.ph/s/AKfycbwjg3KdVkGZxju-CFqumNECin9GOczGHYA2rXL_x_jSJ9r5NqsQMeIrVDnCoO3LCvY/exec" target="_blank">SDO Antipolo Issuances</a></li>
            <li><a href="https://www.deped.gov.ph/deped-memorandum/" target="_blank">DepEd Memoranda</a></li>
            <li><a href="https://www.deped.gov.ph/deped-orders/" target="_blank">DepEd Orders</a></li>
          </ul>
        </li>
        <li class="dropdown">
          <a href="#">DOWNLOADS <i class="fas fa-chevron-down"></i></a>
          <ul class="dropdown-menu">
            <li><a href="https://bld.deped.gov.ph/submission" target="_blank">RMA Numeracy Submission</a></li>
            <li><a href="mathlinks.html">Math Links and Forms</a></li>
          </ul>
        </li>
        <li><a href="school.html">SCHOOL</a></li>
        <li><a href="index.html#facebook-section">FB Page</a></li>
        <li class="dropdown">
          <a href="#">LEARNING RESOURCES <i class="fas fa-chevron-down"></i></a>
          <ul class="dropdown-menu">
            <li><a href="sample-examinations.html" target="_blank">Sample Examinations (M365)</a></li>
            <li><a href="mfas-materials.html">MFAS Materials</a></li>
            <li><a href="rise-materials.html">RISE Materials (RMA Item Strengthening for Enhanced Mathematics Education)</a></li>
            
            <!-- ELLNA AND NAT RESOURCES SUBMENU -->
            <li class="dropdown-submenu">
              <a href="#">ELLNA AND NAT RESOURCES <i class="fas fa-chevron-right" style="float: right; margin-top: 3px;"></i></a>
              <ul class="dropdown-menu">
                <li><a href="https://drive.google.com/file/d/1rtsRW0p2w3M23YhHHoqUCV02LhEZqdw8/preview" target="_blank">ELLNA</a></li>
                <li><a href="https://drive.google.com/file/d/1jw_vkWnVtzh9SdV6vlLkuAL_q1TTe9ay/preview" target="_blank">NAT 6</a></li>
                <li><a href="https://drive.google.com/file/d/1Gz7RssNurqXFrsyQa7eMXhGCrkDWLbaF/preview" target="_blank">NAT 10</a></li>
                <li><a href="https://drive.google.com/file/d/1JFQnztUW8MeOtqjMPW-xgzgslkc6pSNo/preview" target="_blank">NAT 12</a></li>
                <li><a href="https://tinyurl.com/ELLNA-NAT6-Reviewers" target="_blank">ELLNA AND NAT REVIEWERS</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="contacts.html">Contact</a></li>
      </ul>
      
      <!-- Visitor Counter Widget -->
      <div class="visitor-counter-container">
        <div class="visitor-widget">
          <i class="fas fa-eye visitor-icon"></i>
          <div class="visitor-info">
            <span class="visitor-label">Total Visitors</span>
            <span id="visitor-count" class="visitor-count">
              <a href="https://www.hitwebcounter.com/" target="_blank" rel="noopener" title="Website">
                <img src="https://www.hitwebcounter.com/counter/counter.php?page=21513944&amp;style=0006&amp;nbdigits=6&amp;type=page" alt="Website" decoding="async" style="border:0;max-width:100%;height:auto;" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </nav>
  `;
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer class="site-footer">
    <div class="container footer-content">
      <p>&copy; 2026 by Math ICT | City Schools Division Office of Antipolo</p>
    </div>
  </footer>`;
  }
}

customElements.define('special-header', SpecialHeader);
customElements.define('special-footer', SpecialFooter);

function updatePST() {
  const now = new Date();
  const tz = 'Asia/Manila';
  
  const timeStr = now.toLocaleTimeString('en-US', { 
    timeZone: tz, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true 
  });
  const dateStr = now.toLocaleDateString('en-US', { 
    timeZone: tz, weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' 
  });

  document.getElementById('pst-time').textContent = timeStr;
  document.getElementById('pst-date').textContent = dateStr;
}

updatePST();
setInterval(updatePST, 1000);