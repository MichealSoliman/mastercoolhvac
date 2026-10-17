/**
 * MasterCool AC Services Instant Price Calculator (Native Vanilla JS)
 * شركة ماستر كوول لخدمات المكيفات بجدة - حاسبة أسعار التكييف الفورية
 */

document.addEventListener('DOMContentLoaded', function () {
    const calculatorContainer = document.getElementById('ac-calculator-widget');
    if (!calculatorContainer) return;

    // Pricing Matrix (Rates in SAR per unit)
    const pricingData = {
        cleaning: {
            name: "تنظيف وتعقيم بالجراب المعزول",
            baseRates: { split: 100, window: 80, floor: 150, duct: 250 },
            discounts: [
                { minQty: 1, maxQty: 2, discountRate: 0 },       // Standard
                { minQty: 3, maxQty: 5, discountRate: 0.15 },    // 15% discount for 3-5 units
                { minQty: 6, maxQty: 10, discountRate: 0.25 },   // 25% discount for 6-10 units
                { minQty: 11, maxQty: 999, discountRate: 0.35 }  // 35% discount for 11+ units
            ]
        },
        maintenance: {
            name: "فحص وصيانة وتغيير قطع غيار",
            baseRates: { split: 120, window: 90, floor: 180, duct: 300 },
            discounts: [
                { minQty: 1, maxQty: 2, discountRate: 0 },
                { minQty: 3, maxQty: 5, discountRate: 0.10 },
                { minQty: 6, maxQty: 999, discountRate: 0.20 }
            ]
        },
        installation: {
            name: "فك وتركيب ونقل المكيفات",
            baseRates: { split: 200, window: 120, floor: 250, duct: 450 },
            discounts: [
                { minQty: 1, maxQty: 2, discountRate: 0 },
                { minQty: 3, maxQty: 5, discountRate: 0.10 },
                { minQty: 6, maxQty: 999, discountRate: 0.20 }
            ]
        },
        freon: {
            name: "شحن غاز الفريون الأمريكي (R410A / R22)",
            baseRates: { split: 150, window: 120, floor: 200, duct: 350 },
            discounts: [
                { minQty: 1, maxQty: 2, discountRate: 0 },
                { minQty: 3, maxQty: 5, discountRate: 0.15 },
                { minQty: 6, maxQty: 999, discountRate: 0.25 }
            ]
        },
        duct: {
            name: "تنظيف وتعقيم مجاري الهواء (الدكت)",
            baseRates: { split: 250, window: 200, floor: 300, duct: 350 },
            discounts: [
                { minQty: 1, maxQty: 2, discountRate: 0 },
                { minQty: 3, maxQty: 5, discountRate: 0.15 },
                { minQty: 6, maxQty: 999, discountRate: 0.25 }
            ]
        }
    };

    // Render Widget HTML
    calculatorContainer.innerHTML = `
        <div class="bg-white rounded-3xl shadow-2xl border border-gray-100 p-6 md:p-10 max-w-4xl mx-auto my-8 font-sans">
            <div class="text-center mb-8">
                <span class="bg-blue-100 text-[#0679c3] px-4 py-1.5 rounded-full text-sm font-bold inline-block mb-3">
                    <i class="fas fa-calculator ml-1"></i> حاسبة التكلفة الفورية
                </span>
                <h3 class="text-2xl md:text-3xl font-extrabold text-gray-900">احسب تكلفة خدمة مكيفاتك بجدة في ثوانٍ</h3>
                <p class="text-gray-500 text-sm md:text-base mt-2">اختر نوع الخدمة ونوع المكيفات والعدد للحصول على خصم فوري يصل إلى 35%</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <!-- Step 1: Select Service -->
                <div>
                    <label class="block text-gray-700 font-bold mb-2 text-sm">1. اختر الخدمة المطلوب تنفيذها:</label>
                    <select id="calc-service" class="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-sm font-medium text-gray-800 focus:ring-2 focus:ring-[#0679c3] focus:outline-none transition">
                        <option value="cleaning">غسيل وتنظيف وتعقيم مكيفات</option>
                        <option value="maintenance">فحص وصيانة مكيفات</option>
                        <option value="installation">فك وتركيب ونقل مكيفات</option>
                        <option value="freon">شحن غاز الفريون الأصلي</option>
                        <option value="duct">تنظيف دكت وتكييف مركزي</option>
                    </select>
                </div>

                <!-- Step 2: Select AC Type -->
                <div>
                    <label class="block text-gray-700 font-bold mb-2 text-sm">2. اختر نوع جهاز التكييف:</label>
                    <select id="calc-type" class="w-full bg-gray-50 border border-gray-200 rounded-xl p-3.5 text-sm font-medium text-gray-800 focus:ring-2 focus:ring-[#0679c3] focus:outline-none transition">
                        <option value="split">مكيف سبليت (Split AC)</option>
                        <option value="window">مكيف شباك (Window AC)</option>
                        <option value="floor">مكيف دولابي / دولابي واقف</option>
                        <option value="duct">مكيف دكت / كونسيلد / مركزي</option>
                    </select>
                </div>

                <!-- Step 3: Select Quantity -->
                <div>
                    <label class="block text-gray-700 font-bold mb-2 text-sm">3. عدد أجهزة المكيفات:</label>
                    <div class="flex items-center bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                        <button id="calc-qty-minus" type="button" class="w-12 h-12 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold text-xl flex items-center justify-center transition">-</button>
                        <input id="calc-qty-input" type="number" value="3" min="1" max="50" class="w-full text-center bg-transparent font-extrabold text-lg text-gray-900 focus:outline-none">
                        <button id="calc-qty-plus" type="button" class="w-12 h-12 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold text-xl flex items-center justify-center transition">+</button>
                    </div>
                </div>
            </div>

            <!-- Price Output Box -->
            <div class="bg-gradient-to-br from-gray-900 to-[#003459] text-white p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
                <div class="text-center md:text-right">
                    <div class="text-gray-300 text-sm mb-1">التكلفة التقديرية الشاملة للخصم:</div>
                    <div class="flex items-baseline justify-center md:justify-start gap-2">
                        <span id="calc-total-price" class="text-4xl md:text-5xl font-black text-amber-400">0</span>
                        <span class="text-xl font-bold text-gray-200">ريال سعودي</span>
                    </div>
                    <div id="calc-discount-badge" class="text-xs text-green-400 font-semibold mt-2 hidden">
                        <i class="fas fa-tags ml-1"></i> تم تطبيق خصم المجموعة بنجاح!
                    </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                    <a id="calc-whatsapp-btn" href="#" target="_blank" class="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm">
                        <i class="fab fa-whatsapp text-lg"></i>
                        <span>احجز السعر عبر الواتساب</span>
                    </a>
                    <a href="tel:0561110020" class="bg-[#0679c3] hover:bg-blue-600 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 text-sm">
                        <i class="fas fa-phone-alt text-base"></i>
                        <span>اتصال مباشر 0561110020</span>
                    </a>
                </div>
            </div>
        </div>
    `;

    // Elements
    const serviceSelect = document.getElementById('calc-service');
    const typeSelect = document.getElementById('calc-type');
    const qtyInput = document.getElementById('calc-qty-input');
    const minusBtn = document.getElementById('calc-qty-minus');
    const plusBtn = document.getElementById('calc-qty-plus');
    const totalPriceEl = document.getElementById('calc-total-price');
    const discountBadge = document.getElementById('calc-discount-badge');
    const whatsappBtn = document.getElementById('calc-whatsapp-btn');

    // Calculation Logic
    function updateCalculation() {
        const serviceKey = serviceSelect.value;
        const typeKey = typeSelect.value;
        let qty = parseInt(qtyInput.value) || 1;

        if (qty < 1) { qty = 1; qtyInput.value = 1; }
        if (qty > 50) { qty = 50; qtyInput.value = 50; }

        const serviceInfo = pricingData[serviceKey];
        const baseRate = serviceInfo.baseRates[typeKey] || 100;
        const totalBase = baseRate * qty;

        // Find discount
        let discountRate = 0;
        for (let d of serviceInfo.discounts) {
            if (qty >= d.minQty && qty <= d.maxQty) {
                discountRate = d.discountRate;
                break;
            }
        }

        const finalTotal = Math.round(totalBase * (1 - discountRate));
        totalPriceEl.textContent = finalTotal;

        if (discountRate > 0) {
            discountBadge.classList.remove('hidden');
            discountBadge.innerHTML = `<i class="fas fa-tags ml-1"></i> مبروك! تم تطبيق خصم الكمية (${Math.round(discountRate * 100)}%)`;
        } else {
            discountBadge.classList.add('hidden');
        }

        // WhatsApp Link Generator
        const serviceName = serviceSelect.options[serviceSelect.selectedIndex].text;
        const typeName = typeSelect.options[typeSelect.selectedIndex].text;
        const msg = encodeURIComponent(`السلام عليكم، أود حجز خدمة ${serviceName} لنوع (${typeName}) لعدد (${qty}) مكيفات. السعر المحسوب بالحاسبة هو: ${finalTotal} ريال.`);
        whatsappBtn.href = `https://wa.me/966561110020?text=${msg}`;
    }

    // Event Listeners
    serviceSelect.addEventListener('change', updateCalculation);
    typeSelect.addEventListener('change', updateCalculation);
    qtyInput.addEventListener('input', updateCalculation);

    minusBtn.addEventListener('click', function () {
        let current = parseInt(qtyInput.value) || 1;
        if (current > 1) {
            qtyInput.value = current - 1;
            updateCalculation();
        }
    });

    plusBtn.addEventListener('click', function () {
        let current = parseInt(qtyInput.value) || 1;
        qtyInput.value = current + 1;
        updateCalculation();
    });

    // Initial Run
    updateCalculation();
});
