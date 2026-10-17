/**
 * Master Cool - Central Services Data & Dropdown Generator
 * إدارة خدمات ماستر كوول وحقن القائمة المنسدلة تلقائياً في النفبار
 */

const MASTERCOOL_SERVICES = [
    {
        id: "ac-cleaning",
        title: "غسيل وتنظيف المكيفات بجدة",
        shortTitle: "غسيل وتنظيف المكيفات",
        url: "/ac-cleaning-jeddah/",
        relativeUrl: "ac-cleaning-jeddah/",
        icon: "fa-solid fa-spray-can-sparkles",
        badge: "الأكثر طلباً",
        description: "تنظيف مكيفات السبليت والشباك بالجراب وضغط المياه العالي",
        gradient: "from-blue-600 to-cyan-500",
        bgLight: "bg-blue-50 text-blue-600"
    },
    {
        id: "ac-maintenance",
        title: "صيانة وإصلاح جميع المكيفات",
        shortTitle: "صيانة وتصليح المكيفات",
        url: "/ac-maintenance-in-jeddah/",
        relativeUrl: "ac-maintenance-in-jeddah/",
        icon: "fa-solid fa-screwdriver-wrench",
        badge: "ضمان معتمد",
        description: "إصلاح الأعطال والكمبروسر وتغيير قطع الغيار بقطع أصلية",
        gradient: "from-amber-500 to-orange-500",
        bgLight: "bg-amber-50 text-amber-600"
    },
    {
        id: "freon-charging",
        title: "شحن وتعبئة فريون المكيفات",
        shortTitle: "شحن وتعبئة الفريون",
        url: "/freon-charging-jeddah/",
        relativeUrl: "freon-charging-jeddah/",
        icon: "fa-solid fa-snowflake",
        badge: "غاز أمريكي R410A/R22",
        description: "فحص مواضع التسريب وإعادة تعبئة الفريون لزيادة قوة التبريد",
        gradient: "from-cyan-500 to-blue-600",
        bgLight: "bg-cyan-50 text-cyan-600"
    },
    {
        id: "ac-installation",
        title: "فك وتركيب ونقل المكيفات",
        shortTitle: "فك وتركيب المكيفات",
        url: "/ac-removal-installation-jeddah/",
        relativeUrl: "ac-removal-installation-jeddah/",
        icon: "fa-solid fa-truck-ramp-box",
        badge: "بدون تسريب فريون",
        description: "نقل وفك وتركيب المكيفات باحترافية كاملة وبدون أي تلفيات",
        gradient: "from-emerald-500 to-teal-600",
        bgLight: "bg-emerald-50 text-emerald-600"
    },
    {
        id: "duct-cleaning",
        title: "تنظيف دكت التكييف المركزي",
        shortTitle: "تنظيف دكت المركزي",
        url: "/duct-ac-cleaning-maintenance-jeddah/",
        relativeUrl: "duct-ac-cleaning-maintenance-jeddah/",
        icon: "fa-solid fa-fan",
        badge: "تعقيم ضد البكتيريا",
        description: "غسيل وتطهير مجاري الهواء للدكت والكونسيلد والمباني",
        gradient: "from-purple-600 to-indigo-600",
        bgLight: "bg-purple-50 text-purple-600"
    },
    {
        id: "split-ac-installation",
        title: "تركيب مكيفات سبليت بجدة",
        shortTitle: "تركيب مكيفات سبليت",
        url: "/split-ac-installation-jeddah/",
        relativeUrl: "split-ac-installation-jeddah/",
        icon: "fa-solid fa-screwdriver-wrench",
        badge: "تركيب احترافي وضمان",
        description: "تركيب جميع أنواع مكيفات السبليت بجدة بأيدي فنيين متخصصين مع اختبار التشغيل وضمان جودة التركيب.",
        gradient: "from-blue-600 to-cyan-600",
        bgLight: "bg-blue-50 text-blue-600"
    },
    {
        id: "split-ac-maintenance-jeddah",
        title: "صيانة مكيفات سبليت بجدة",
        shortTitle: "صيانة مكيفات سبليت",
        url: "/split-ac-maintenance-jeddah/",
        relativeUrl: "split-ac-maintenance-jeddah/",
        icon: "fa-solid fa-screwdriver-wrench",
        badge: "صيانة احترافية وضمان",
        description: "صيانة جميع أنواع مكيفات السبليت بجدة بأيدي فنيين متخصصين مع اختبار التشغيل وضمان جودة التركيب.",
        gradient: "from-blue-600 to-cyan-600",
        bgLight: "bg-blue-50 text-blue-600"
    },
    {
        id: "split-ac-weak-cooling-causes",
        title: "تنظيف مكيفات سبليت بجدة",
        shortTitle: "تنظيف  مكيفات سبليت",
        url: "/split-ac-weak-cooling-causes/",
        relativeUrl: "split-ac-weak-cooling-causes/",
        icon: "fa-solid fa-temperature-low",
        badge: "صيانة احترافية وضمان",
        description: "صيانة جميع أنواع مكيفات السبليت بجدة بأيدي فنيين متخصصين مع اختبار التشغيل وضمان جودة التركيب.",
        gradient: "from-blue-600 to-cyan-600",
        bgLight: "bg-blue-50 text-blue-600"
    },
    {
        id: "duct-installation-jeddah",
        title: "تركيب دكت تكييف بجدة",
        shortTitle: "تركيب دكت تكييف",
        url: "/duct-installation-jeddah/",
        relativeUrl: "duct-installation-jeddah/",
        icon: "fa-solid fa-wind",
        badge: "تركيب احترافي وضمان",
        description: "تركيب جميع أنواع دكت التكييف بجدة بأيدي فنيين متخصصين مع اختبار التشغيل وضمان جودة التركيب.",
        gradient: "from-blue-600 to-cyan-600",
        bgLight: "bg-blue-50 text-blue-600"
    },
    {
        id: "window-ac-installation-jeddah",
        title: "تركيب مكيف شباك بجدة",
        shortTitle: "تركيب مكيف شباك",
        url: "/window-ac-installation-jeddah/",
        relativeUrl: "window-ac-installation-jeddah/",
        icon: "fa-solid fa-window-maximize",
        badge: "تركيب احترافي وضمان",
        description: "تركيب جميع أنواع مكيفات الشباك بجدة بأيدي فنيين متخصصين مع اختبار التشغيل وضمان جودة التركيب.",
        gradient: "from-blue-600 to-cyan-600",
        bgLight: "bg-blue-50 text-blue-600"
    },
    {
        id: "ac-cleaning-prices-jeddah",
        title: "اسعار تنظيف المكيفات بجدة",
        shortTitle: "اسعار تنظيف المكيفات",
        url: "/ac-cleaning-prices-jeddah/",
        relativeUrl: "ac-cleaning-prices-jeddah/",
        icon: "fa-solid fa-window-maximize",
        badge: "تركيب احترافي وضمان",
        description: "اسعار تنظيف جميع أنواع المكيفات بجدة بأيدي فنيين متخصصين مع اختبار التشغيل وضمان جودة التركيب.",
        gradient: "from-blue-600 to-cyan-600",
        bgLight: "bg-blue-50 text-blue-600"

    },
    {
        id: "copper-piping-installation-jeddah",
        title: "تركيب مواسير نحاس مكيفات بجدة",
        shortTitle: "تركيب مواسير نحاس مكيفات",
        url: "/copper-piping-installation-jeddah/",
        relativeUrl: "copper-piping-installation-jeddah/",
        icon: "fa-solid fa-window-maximize",
        badge: "تركيب احترافي وضمان",
        description: "تركيب مواسير نحاس لجميع أنواع المكيفات بجدة بأيدي فنيين متخصصين مع اختبار التشغيل وضمان جودة التركيب.",
        gradient: "from-blue-600 to-cyan-600",
        bgLight: "bg-blue-50 text-blue-600"

    },
    {
        id: "all-services",
        title: "كافة خدمات التكييف بجدة",
        shortTitle: "عرض جميع الخدمات",
        url: "/services/",
        relativeUrl: "services/",
        icon: "fa-solid fa-grid-2-plus",
        badge: "تصفح الكتالوج",
        description: "استعرض قائمة كافة الخدمات المتاحة لدى شركة ماستر كوول",
        gradient: "from-indigo-600 to-blue-600",
        bgLight: "bg-indigo-50 text-indigo-600"
    },
];

// Helper to determine proper relative URL prefix based on current pathname
function getCorrectServiceUrl(service) {
    const currentPath = window.location.pathname;

    // Check if running on local file system protocol or domain root
    if (window.location.protocol === 'file:') {
        // Find how deep we are
        const inSubdir = currentPath.includes('/services/') ||
            currentPath.includes('/ac-cleaning-jeddah/') ||
            currentPath.includes('/ac-maintenance-in-jeddah/') ||
            currentPath.includes('/freon-charging-jeddah/') ||
            currentPath.includes('/ac-removal-installation-jeddah/') ||
            currentPath.includes('/duct-ac-cleaning-maintenance-jeddah/') ||
            currentPath.includes('/faq/') ||
            currentPath.includes('/about/') ||
            currentPath.includes('/contact/') ||
            currentPath.includes('/blog/');

        const prefix = inSubdir ? '../' : './';
        return prefix + service.relativeUrl + 'index.html';
    } else {
        return service.url;
    }
}

// Function to inject essential CSS styles for dropdown into document head dynamically
function injectDropdownStyles() {
    if (document.getElementById('mastercool-dropdown-styles')) return;
    const style = document.createElement('style');
    style.id = 'mastercool-dropdown-styles';
    style.textContent = `
        .services-dropdown-parent {
            position: relative !important;
        }
        .services-dropdown-parent:hover .services-dropdown-menu,
        .services-dropdown-parent.is-active .services-dropdown-menu,
        .services-dropdown-menu:hover {
            opacity: 1 !important;
            visibility: visible !important;
            transform: translateY(0) !important;
            pointer-events: auto !important;
        }
        .services-dropdown-parent:hover .fa-chevron-down,
        .services-dropdown-parent.is-active .fa-chevron-down {
            transform: rotate(180deg) !important;
        }
        .services-dropdown-menu {
            transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        .custom-dropdown-scrollbar::-webkit-scrollbar {
            width: 5px;
        }
        .custom-dropdown-scrollbar::-webkit-scrollbar-track {
            background: #f1f5f9;
            border-radius: 10px;
        }
        .custom-dropdown-scrollbar::-webkit-scrollbar-thumb {
            background: #0679c3;
            border-radius: 10px;
        }
        .custom-dropdown-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #0284c7;
        }
    `;
    (document.head || document.documentElement).appendChild(style);
}

// Function to initialize navbar dropdowns across all pages
function initServicesDropdown() {
    // Inject dynamic CSS to guarantee dropdown visibility regardless of Tailwind purge or missing stylesheets
    injectDropdownStyles();

    // 1. Desktop Nav "خدماتنا" link upgrade
    const navLinks = document.querySelectorAll('header nav a[href*="services"], nav a[href*="services"], .nav-link[href*="services"]');
    navLinks.forEach(link => {
        // Skip links that are buttons, in footer, or mobile menu
        if (link.closest('footer') || link.closest('#mobile-menu') || link.closest('.mobile-menu-container') || link.closest('#mobile-menu-container') || link.classList.contains('dual-button')) return;

        let parentContainer = link.closest('li');
        if (!parentContainer) {
            if (link.parentElement && link.parentElement.classList.contains('services-dropdown-parent')) {
                parentContainer = link.parentElement;
            } else {
                const wrapper = document.createElement('div');
                wrapper.className = 'services-dropdown-parent relative group inline-block';
                link.parentNode.insertBefore(wrapper, link);
                wrapper.appendChild(link);
                parentContainer = wrapper;
            }
        } else {
            parentContainer.classList.add('services-dropdown-parent', 'relative', 'group');
        }

        if (parentContainer && !parentContainer.dataset.dropdownInjected) {
            parentContainer.dataset.dropdownInjected = "true";

            // Add JS hover listeners as guaranteed fallback
            parentContainer.addEventListener('mouseenter', () => {
                parentContainer.classList.add('is-active');
            });
            parentContainer.addEventListener('mouseleave', () => {
                parentContainer.classList.remove('is-active');
            });

            // Upgrade link HTML to include dropdown arrow
            link.innerHTML = `
                <span class="relative z-10 flex items-center gap-1.5 cursor-pointer">
                    خدماتنا
                    <i class="fas fa-chevron-down text-xs transition-transform duration-300 group-hover:rotate-180 text-blue-500"></i>
                </span>
                <div class="nav-link-underline"></div>
            `;

            // Check if dropdown menu already exists inside parentContainer
            if (!parentContainer.querySelector('.services-dropdown-menu')) {
                const dropdownMenu = document.createElement('div');
                dropdownMenu.className = 'services-dropdown-menu absolute right-0 top-full pt-3 w-80 sm:w-84 opacity-0 invisible z-50 transform translate-y-2 pointer-events-none transition-all duration-300';

                let dropdownContent = `
                    <div class="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden ring-1 ring-black/5">
                        <!-- Header -->
                        <div class="bg-gradient-to-l from-[#0679c3] to-[#0284c7] px-4 py-3 flex items-center justify-between">
                            <span class="text-white font-bold text-sm">خدماتنا المتاحة بجدة</span>
                            <span class="text-[10px] bg-white/20 text-white font-bold px-2 py-0.5 rounded-full">
                                ${MASTERCOOL_SERVICES.length} خدمات
                            </span>
                        </div>

                        <!-- Scrollable Single Column List -->
                        <div class="p-2 bg-gray-50/50">
                            <div class="max-h-[280px] overflow-y-auto space-y-1.5 custom-dropdown-scrollbar pl-1">
                `;

                MASTERCOOL_SERVICES.forEach(svc => {
                    const finalUrl = getCorrectServiceUrl(svc);
                    dropdownContent += `
                        <a href="${finalUrl}" class="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white hover:bg-blue-50 border border-gray-100 hover:border-blue-200 transition-all duration-200 group/item shadow-2xs">
                            <span class="text-xs font-bold text-gray-700 group-hover/item:text-[#0679c3] transition-colors truncate">
                                ${svc.shortTitle || svc.title}
                            </span>
                            <i class="fas fa-chevron-left text-[10px] text-gray-300 group-hover/item:text-[#0679c3] group-hover/item:-translate-x-0.5 transition-all"></i>
                        </a>
                    `;
                });

                dropdownContent += `
                            </div>
                        </div>

                        <!-- Footer -->
                        <div class="bg-white border-t border-gray-100 p-2.5 text-center">
                            <a href="${getCorrectServiceUrl(MASTERCOOL_SERVICES.find(s => s.id === 'all-services') || MASTERCOOL_SERVICES[0])}" class="inline-flex items-center gap-1.5 text-xs font-bold text-[#0679c3] hover:text-blue-700 transition-colors">
                                <span>استعرض كافة التفاصيل والأسعار</span>
                                <i class="fas fa-arrow-left text-[10px]"></i>
                            </a>
                        </div>
                    </div>
                `;

                dropdownMenu.innerHTML = dropdownContent;
                parentContainer.appendChild(dropdownMenu);
            }
        }
    });

    // 2. Mobile drawer nav upgrade
    const mobileServicesLinks = document.querySelectorAll('#mobile-menu a[href*="services"], .mobile-menu-container a[href*="services"], #mobile-menu-container a[href*="services"]');
    mobileServicesLinks.forEach(mobileServicesLink => {
        const mobileContainer = mobileServicesLink.parentElement;
        if (mobileContainer && !mobileContainer.querySelector('.mobile-services-accordion')) {
            const accordionBtn = document.createElement('div');
            accordionBtn.className = 'mobile-services-toggle flex items-center justify-between py-2 border-b border-gray-100 cursor-pointer font-semibold text-gray-800 w-full';
            accordionBtn.innerHTML = `
                <span class="flex items-center gap-2">
                    <i class="fas fa-concierge-bell text-[#0679c3]"></i>
                    خدماتنا
                </span>
                <i class="fas fa-chevron-down text-xs text-gray-400 transition-transform duration-300"></i>
            `;

            const accordionContent = document.createElement('div');
            accordionContent.className = 'mobile-services-accordion hidden pr-4 pl-2 py-2 space-y-2 bg-gray-50/70 rounded-xl my-1 max-h-60 overflow-y-auto custom-dropdown-scrollbar';

            MASTERCOOL_SERVICES.forEach(svc => {
                const finalUrl = getCorrectServiceUrl(svc);
                accordionContent.innerHTML += `
                    <a href="${finalUrl}" class="flex items-center gap-3 py-2 px-3 rounded-lg text-sm text-gray-700 hover:text-[#0679c3] hover:bg-white transition-all">
                        <i class="${svc.icon} text-[#0679c3] text-base w-5 text-center"></i>
                        <span>${svc.shortTitle || svc.title}</span>
                    </a>
                `;
            });

            accordionBtn.addEventListener('click', () => {
                accordionContent.classList.toggle('hidden');
                accordionBtn.querySelector('i.fa-chevron-down')?.classList.toggle('rotate-180');
            });

            mobileServicesLink.replaceWith(accordionBtn);
            accordionBtn.after(accordionContent);
        }
    });
}

// Auto run when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initServicesDropdown);
} else {
    initServicesDropdown();
}
