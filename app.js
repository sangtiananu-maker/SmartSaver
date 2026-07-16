// ===== TRANSLATIONS =====
const TRANSLATIONS = {
  en: {
    // Header
    tabCompare: 'Compare Prices',
    tabDiscount: 'Discount Calc',
    // Compare Page
    compareSummarySubtitle: 'Best Choice Found',
    compareH2: 'Compare Product Prices',
    compareDesc: 'Fill in the price and quantity for each item. The cheapest product will highlight automatically.',
    addAnotherProduct: 'Add Another Product',
    clearAll: 'Clear All',
    clearCompareConfirm: 'Clear all product comparison inputs?',
    // Compare card labels
    labelPrice: 'Price',
    labelQuantity: 'Quantity',
    labelUnitPrice: 'Unit Price',
    labelBestValue: 'Best Value!',
    labelCheapest: '🏆 Cheapest',
    labelProductName: 'Product Name',
    labelProductDefault: 'Product',
    // Compare results
    resultBestChoice: '🏆 {name} is the best choice!',
    resultSavesAvg: 'Saves you an average of {pct}% on your purchase.',
    resultTie: '⚖️ Tie between {names}',
    resultTieSub: 'Both offer the exact same unit price value.',
    resultSavePct: 'Save {pct}%',
    // Discount Page
    labelOriginalTotal: 'Original Total',
    labelTotalSaved: 'Total Saved',
    labelHowMuch: 'How much did you actually pay?',
    labelPaidPrice: 'Paid price',
    discountH2: 'Allocate Discount Pro-Rata',
    discountDesc: 'Enter the full price of each item. The app will calculate the exact price you paid for each item based on your discount.',
    addAnotherItem: 'Add Another Item',
    clearDiscountConfirm: 'Clear all discount calculator inputs?',
    labelItemName: 'Item Name',
    labelFullPrice: 'Full Price',
    labelPaid: 'Paid',
    labelSaved: 'Saved {amount}',
    labelPaidGtFull: 'Paid > Full Price',
  },
  th: {
    // Header
    tabCompare: 'เปรียบราคา',
    tabDiscount: 'คำนวณส่วนลด',
    // Compare Page
    compareSummarySubtitle: 'พบตัวเลือกที่ดีที่สุด',
    compareH2: 'เปรียบเทียบราคาสินค้า',
    compareDesc: 'กรอกราคาและปริมาณของแต่ละสินค้า ระบบจะไฮไลต์สินค้าที่ถูกที่สุดโดยอัตโนมัติ',
    addAnotherProduct: 'เพิ่มสินค้า',
    clearAll: 'ล้างทั้งหมด',
    clearCompareConfirm: 'ล้างข้อมูลเปรียบราคาทั้งหมด?',
    // Compare card labels
    labelPrice: 'ราคา',
    labelQuantity: 'ปริมาณ',
    labelUnitPrice: 'ราคาต่อหน่วย',
    labelBestValue: 'คุ้มที่สุด!',
    labelCheapest: '🏆 ถูกที่สุด',
    labelProductName: 'ชื่อสินค้า',
    labelProductDefault: 'สินค้า',
    // Compare results
    resultBestChoice: '🏆 {name} ดีที่สุด!',
    resultSavesAvg: 'ประหยัดเฉลี่ย {pct}% จากตัวเลือกอื่น',
    resultTie: '⚖️ เท่ากันระหว่าง {names}',
    resultTieSub: 'ราคาต่อหน่วยเท่ากันทุกประการ',
    resultSavePct: 'ประหยัด {pct}%',
    // Discount Page
    labelOriginalTotal: 'ราคาเต็มรวม',
    labelTotalSaved: 'ส่วนลดรวม',
    labelHowMuch: 'คุณจ่ายเงินจริงเท่าไหร่?',
    labelPaidPrice: 'ราคาที่จ่าย',
    discountH2: 'แบ่งส่วนลดตามสัดส่วน',
    discountDesc: 'กรอกราคาเต็มของแต่ละสินค้า ระบบจะคำนวณราคาที่คุณจ่ายจริงสำหรับแต่ละชิ้น',
    addAnotherItem: 'เพิ่มสินค้า',
    clearDiscountConfirm: 'ล้างข้อมูลส่วนลดทั้งหมด?',
    labelItemName: 'ชื่อสินค้า',
    labelFullPrice: 'ราคาเต็ม',
    labelPaid: 'ราคาที่จ่าย',
    labelSaved: 'ประหยัด {amount}',
    labelPaidGtFull: 'จ่ายเกินราคาเต็ม',
  }
};

// ===== APP STATE =====
const state = {
  activeTab: 'compare',
  theme: 'light',
  lang: 'en',
  compareItems: [],
  discountItems: [],
  discountPaid: ''
};

// ===== HELPER: get translation =====
function t(key, vars) {
  const lang = state.lang || 'en';
  let str = (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) || TRANSLATIONS['en'][key] || key;
  if (vars) {
    Object.keys(vars).forEach(k => { str = str.replace(`{${k}}`, vars[k]); });
  }
  return str;
}

// ===== DEFAULT STRUCTURES =====
function createNewCompareItem(index) {
  return {
    id: 'comp_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
    name: '',
    price: '',
    quantity: ''
  };
}

function createNewDiscountItem(index) {
  return {
    id: 'disc_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
    name: '',
    fullPrice: ''
  };
}

// ===== LOAD / SAVE STATE =====
function loadState() {
  initializeDefaults();
  const savedState = localStorage.getItem('cheaper_discount_state');
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      state.activeTab = parsed.activeTab || 'compare';
      state.theme = parsed.theme || 'light';
      state.lang = parsed.lang || 'en';
    } catch (e) {
      console.error('Failed to parse localStorage state:', e);
    }
  }
}

function initializeDefaults() {
  state.compareItems = [createNewCompareItem(1), createNewCompareItem(2)];
  state.discountItems = [createNewDiscountItem(1), createNewDiscountItem(2)];
  state.discountPaid = '';
}

function saveState() {
  const stateToSave = {
    activeTab: state.activeTab,
    theme: state.theme,
    lang: state.lang
  };
  localStorage.setItem('cheaper_discount_state', JSON.stringify(stateToSave));
}

// ===== UI ELEMENT REFERENCES =====
const themeToggleBtn = document.getElementById('theme-toggle');
const langToggleBtn  = document.getElementById('lang-toggle');
const tabCompare     = document.getElementById('tab-compare');
const tabDiscount    = document.getElementById('tab-discount');
const comparePage    = document.getElementById('compare-page');
const discountPage   = document.getElementById('discount-page');

const compareListContainer = document.getElementById('compare-list');
const addCompareItemBtn    = document.getElementById('add-compare-item-btn');
const clearCompareBtn      = document.getElementById('clear-compare-btn');

const discountListContainer = document.getElementById('discount-list');
const addDiscountItemBtn    = document.getElementById('add-discount-item-btn');
const clearDiscountBtn      = document.getElementById('clear-discount-btn');
const discountPaidInput     = document.getElementById('discount-total-paid');

const compareSummaryCard  = document.getElementById('compare-summary-card');
const compareBestResult   = document.getElementById('compare-best-result');
const compareSavingsDetails = document.getElementById('compare-savings-details');
const compareSummarySubtitle = document.getElementById('compare-summary-subtitle');

const discountTotalOriginal = document.getElementById('discount-total-original');
const discountTotalSaved    = document.getElementById('discount-total-saved');
const discountPercentBadge  = document.getElementById('discount-percent-badge');

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  applyTheme();
  applyLang();
  applyTab();

  discountPaidInput.value = state.discountPaid;

  renderCompareList();
  renderDiscountList();
  calculateCompare();
  calculateDiscount();

  discountPaidInput.addEventListener('input', (e) => {
    state.discountPaid = e.target.value;
    saveState();
    calculateDiscount();
  });
});

// ===== THEME =====
themeToggleBtn.addEventListener('click', () => {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  applyTheme();
  saveState();
});

function applyTheme() {
  const isDark = state.theme === 'dark';
  if (isDark) {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  } else {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  }
  // Notify Android to update status bar icon tint
  if (window.AndroidBridge) {
    window.AndroidBridge.setDarkMode(isDark);
  }
}

// ===== LANGUAGE =====
langToggleBtn.addEventListener('click', () => {
  state.lang = state.lang === 'en' ? 'th' : 'en';
  applyLang();
  saveState();
});

function applyLang() {
  // Update language button label
  langToggleBtn.textContent = state.lang === 'en' ? 'TH' : 'EN';

  // Update static text nodes in the DOM
  document.querySelector('.tab-label[data-tab="compare"]').textContent = t('tabCompare');
  document.querySelector('.tab-label[data-tab="discount"]').textContent = t('tabDiscount');

  // Compare page
  document.getElementById('compare-h2').textContent = t('compareH2');
  document.getElementById('compare-desc').textContent = t('compareDesc');
  document.getElementById('add-compare-item-btn').querySelector('span').textContent = t('addAnotherProduct');
  document.getElementById('clear-compare-btn').textContent = t('clearAll');

  // Compare summary subtitle
  if (compareSummarySubtitle) compareSummarySubtitle.textContent = t('compareSummarySubtitle');

  // Discount page
  document.getElementById('discount-h2').textContent = t('discountH2');
  document.getElementById('discount-desc').textContent = t('discountDesc');
  document.getElementById('label-original-total').textContent = t('labelOriginalTotal');
  document.getElementById('label-total-saved').textContent = t('labelTotalSaved');
  document.getElementById('label-how-much').textContent = t('labelHowMuch');
  discountPaidInput.placeholder = t('labelPaidPrice');
  document.getElementById('add-discount-item-btn').querySelector('span').textContent = t('addAnotherItem');
  document.getElementById('clear-discount-btn').textContent = t('clearAll');

  // Re-render cards to update inner labels too
  renderCompareList();
  renderDiscountList();
  calculateCompare();
  calculateDiscount();
}

// ===== TAB NAVIGATION =====
tabCompare.addEventListener('click', () => switchTab('compare'));
tabDiscount.addEventListener('click', () => switchTab('discount'));

function switchTab(tabName) {
  state.activeTab = tabName;
  applyTab();
  saveState();
}

function applyTab() {
  if (state.activeTab === 'compare') {
    tabCompare.classList.add('active');
    tabDiscount.classList.remove('active');
    comparePage.classList.add('active');
    discountPage.classList.remove('active');
  } else {
    tabDiscount.classList.add('active');
    tabCompare.classList.remove('active');
    discountPage.classList.add('active');
    comparePage.classList.remove('active');
  }
}

// ===== FORMATTERS =====
function formatCurrency(val) {
  const num = parseFloat(val);
  if (isNaN(num)) return '0.00';
  return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatUnitPrice(val) {
  const num = parseFloat(val);
  if (isNaN(num) || !isFinite(num)) return '-';
  let decimals = 2;
  if (num < 0.01) decimals = 4;
  else if (num < 0.1) decimals = 3;
  return num.toFixed(decimals) + ' / unit/g/L/pcs';
}

// ===== COMPARE PAGE =====
function renderCompareList() {
  compareListContainer.innerHTML = '';
  state.compareItems.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'input-card';
    card.id = `card_${item.id}`;

    card.innerHTML = `
      <div class="card-header-row">
        <input type="text" class="card-title-field" value="${item.name}" placeholder="${t('labelProductName')}" data-id="${item.id}" data-field="name">
        ${state.compareItems.length > 2 ? `
          <button class="btn-remove-card" data-id="${item.id}" aria-label="Remove Product">
            <svg viewBox="0 0 24 24" width="20" height="20"><path fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        ` : ''}
      </div>
      <div class="input-row">
        <div class="input-group">
          <label class="field-label">${t('labelPrice')}</label>
          <input type="number" class="input-field compare-input" placeholder="0.00" value="${item.price}" min="0" step="any" inputmode="decimal" data-id="${item.id}" data-field="price">
        </div>
        <div class="input-group">
          <label class="field-label">${t('labelQuantity')}</label>
          <input type="number" class="input-field compare-input" placeholder="1" value="${item.quantity}" min="0.0001" step="any" inputmode="decimal" data-id="${item.id}" data-field="quantity">
        </div>
      </div>
      <div class="card-calculation-summary">
        <div>
          <div class="calc-unit-label">${t('labelUnitPrice')}</div>
          <div class="calc-unit-price" id="unit_price_${item.id}">-</div>
        </div>
        <div class="savings-label" id="savings_${item.id}"></div>
      </div>
    `;

    compareListContainer.appendChild(card);
  });

  compareListContainer.querySelectorAll('.btn-remove-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      state.compareItems = state.compareItems.filter(item => item.id !== id);
      saveState();
      renderCompareList();
      calculateCompare();
    });
  });

  compareListContainer.querySelectorAll('.compare-input, .card-title-field').forEach(input => {
    input.addEventListener('input', (e) => {
      const id = input.getAttribute('data-id');
      const field = input.getAttribute('data-field');
      const item = state.compareItems.find(x => x.id === id);
      if (item) {
        item[field] = e.target.value;
        saveState();
        calculateCompare();
      }
    });
  });
}

function calculateCompare() {
  const validItems = [];

  state.compareItems.forEach(item => {
    const price = parseFloat(item.price);
    const qty   = parseFloat(item.quantity);

    const cardEl = document.getElementById(`card_${item.id}`);
    if (cardEl) {
      cardEl.classList.remove('cheapest-highlight');
      const oldBadge = cardEl.querySelector('.best-value-badge');
      if (oldBadge) oldBadge.remove();
    }

    const unitPriceEl = document.getElementById(`unit_price_${item.id}`);
    const savingsEl   = document.getElementById(`savings_${item.id}`);
    if (unitPriceEl) unitPriceEl.innerText = '-';
    if (savingsEl)   savingsEl.innerText = '';

    if (!isNaN(price) && price > 0 && !isNaN(qty) && qty > 0) {
      const unitPrice = price / qty;
      validItems.push({ id: item.id, name: item.name || t('labelProductDefault'), price, qty, unitPrice });
      if (unitPriceEl) unitPriceEl.innerText = formatUnitPrice(unitPrice);
    }
  });

  if (validItems.length < 2) {
    compareSummaryCard.classList.add('hidden');
    return;
  }

  let cheapestValue = Infinity;
  validItems.forEach(item => { if (item.unitPrice < cheapestValue) cheapestValue = item.unitPrice; });

  const cheapestItems = validItems.filter(item => Math.abs(item.unitPrice - cheapestValue) < 0.00001);

  cheapestItems.forEach(ch => {
    const cardEl = document.getElementById(`card_${ch.id}`);
    if (cardEl) {
      cardEl.classList.add('cheapest-highlight');
      const badge = document.createElement('div');
      badge.className = 'best-value-badge';
      badge.innerText = t('labelBestValue');
      cardEl.appendChild(badge);
      const savingsEl = document.getElementById(`savings_${ch.id}`);
      if (savingsEl) savingsEl.innerText = t('labelCheapest');
    }
  });

  validItems.forEach(item => {
    const isCheapest = cheapestItems.some(ch => ch.id === item.id);
    if (!isCheapest) {
      const savingsPct = ((item.unitPrice - cheapestValue) / item.unitPrice) * 100;
      const savingsEl = document.getElementById(`savings_${item.id}`);
      if (savingsEl) {
        savingsEl.innerText = t('resultSavePct', { pct: savingsPct.toFixed(0) });
        savingsEl.style.color = 'var(--success)';
      }
    }
  });

  compareSummaryCard.classList.remove('hidden');
  if (cheapestItems.length === 1) {
    compareBestResult.innerText = t('resultBestChoice', { name: cheapestItems[0].name });
    const otherItems = validItems.filter(item => item.id !== cheapestItems[0].id);
    let avgSavings = 0;
    otherItems.forEach(item => { avgSavings += ((item.unitPrice - cheapestValue) / item.unitPrice) * 100; });
    avgSavings = avgSavings / otherItems.length;
    compareSavingsDetails.innerText = t('resultSavesAvg', { pct: avgSavings.toFixed(1) });
  } else {
    const names = cheapestItems.map(item => item.name).join(' & ');
    compareBestResult.innerText = t('resultTie', { names });
    compareSavingsDetails.innerText = t('resultTieSub');
  }
}

addCompareItemBtn.addEventListener('click', () => {
  state.compareItems.push(createNewCompareItem(state.compareItems.length + 1));
  saveState();
  renderCompareList();
  calculateCompare();
});

clearCompareBtn.addEventListener('click', () => {
  if (confirm(t('clearCompareConfirm'))) {
    state.compareItems = [createNewCompareItem(1), createNewCompareItem(2)];
    saveState();
    renderCompareList();
    calculateCompare();
  }
});

// ===== DISCOUNT PAGE =====
function renderDiscountList() {
  discountListContainer.innerHTML = '';
  state.discountItems.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'input-card discount-row-card';
    card.id = `disc_card_${item.id}`;

    card.innerHTML = `
      <div class="discount-item-inputs">
        <div class="input-group">
          <label class="field-label">${t('labelItemName')}</label>
          <input type="text" class="input-field card-title-field" style="height:44px; margin-left:0; width:100%; border:1px solid var(--border); background:var(--bg-input); padding-left:12px;" value="${item.name}" placeholder="${t('labelItemName')} ${index+1}" data-id="${item.id}" data-field="name">
        </div>
        <div class="input-group">
          <label class="field-label">${t('labelFullPrice')}</label>
          <input type="number" class="input-field discount-input" style="height:44px;" placeholder="0.00" value="${item.fullPrice}" min="0" step="any" inputmode="decimal" data-id="${item.id}" data-field="fullPrice">
        </div>
      </div>

      <div class="discount-price-output">
        <div class="discount-calculated-label">${t('labelPaid')}</div>
        <div class="discount-calculated-price" id="disc_out_price_${item.id}">-</div>
        <div class="discount-saving-subtext" id="disc_out_saved_${item.id}"></div>
      </div>

      ${state.discountItems.length > 2 ? `
        <button class="btn-remove-card" style="margin-left:8px;" data-id="${item.id}" aria-label="Remove Item">
          <svg viewBox="0 0 24 24" width="20" height="20"><path fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
      ` : ''}
    `;

    discountListContainer.appendChild(card);
  });

  discountListContainer.querySelectorAll('.btn-remove-card').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-id');
      state.discountItems = state.discountItems.filter(item => item.id !== id);
      saveState();
      renderDiscountList();
      calculateDiscount();
    });
  });

  discountListContainer.querySelectorAll('.discount-input, .card-title-field').forEach(input => {
    input.addEventListener('input', (e) => {
      const id = input.getAttribute('data-id');
      const field = input.getAttribute('data-field');
      const item = state.discountItems.find(x => x.id === id);
      if (item) {
        item[field] = e.target.value;
        saveState();
        calculateDiscount();
      }
    });
  });
}

function calculateDiscount() {
  let totalOriginalVal = 0;
  const validItems = [];

  state.discountItems.forEach(item => {
    const fullPrice = parseFloat(item.fullPrice);
    const outPriceEl = document.getElementById(`disc_out_price_${item.id}`);
    const outSavedEl = document.getElementById(`disc_out_saved_${item.id}`);
    if (outPriceEl) outPriceEl.innerText = '-';
    if (outSavedEl) outSavedEl.innerText = '';

    if (!isNaN(fullPrice) && fullPrice > 0) {
      totalOriginalVal += fullPrice;
      validItems.push({ id: item.id, fullPrice });
    }
  });

  discountTotalOriginal.innerText = formatCurrency(totalOriginalVal);

  const paidPrice = parseFloat(state.discountPaid);
  if (isNaN(paidPrice) || paidPrice < 0 || totalOriginalVal <= 0 || paidPrice > totalOriginalVal) {
    discountTotalSaved.innerText = '0.00';
    discountPercentBadge.classList.add('hidden');
    if (paidPrice > totalOriginalVal) {
      discountTotalSaved.innerText = t('labelPaidGtFull');
      discountTotalSaved.style.fontSize = '1.1rem';
    } else {
      discountTotalSaved.style.fontSize = '1.6rem';
    }
    return;
  }

  discountTotalSaved.style.fontSize = '1.6rem';
  const totalSavedVal = totalOriginalVal - paidPrice;
  discountTotalSaved.innerText = formatCurrency(totalSavedVal);

  const discountPercent = (totalSavedVal / totalOriginalVal) * 100;
  if (discountPercent > 0) {
    discountPercentBadge.innerText = `${discountPercent.toFixed(0)}% OFF`;
    discountPercentBadge.classList.remove('hidden');
  } else {
    discountPercentBadge.classList.add('hidden');
  }

  const discountRate = totalSavedVal / totalOriginalVal;
  validItems.forEach(item => {
    const savedForThis = item.fullPrice * discountRate;
    const paidForThis  = item.fullPrice - savedForThis;
    const outPriceEl = document.getElementById(`disc_out_price_${item.id}`);
    const outSavedEl = document.getElementById(`disc_out_saved_${item.id}`);
    if (outPriceEl) outPriceEl.innerText = formatCurrency(paidForThis);
    if (outSavedEl && savedForThis > 0) outSavedEl.innerText = t('labelSaved', { amount: formatCurrency(savedForThis) });
  });
}

addDiscountItemBtn.addEventListener('click', () => {
  state.discountItems.push(createNewDiscountItem(state.discountItems.length + 1));
  saveState();
  renderDiscountList();
  calculateDiscount();
});

clearDiscountBtn.addEventListener('click', () => {
  if (confirm(t('clearDiscountConfirm'))) {
    state.discountItems = [createNewDiscountItem(1), createNewDiscountItem(2)];
    state.discountPaid = '';
    discountPaidInput.value = '';
    saveState();
    renderDiscountList();
    calculateDiscount();
  }
});
