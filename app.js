// App State
const state = {
  activeTab: 'compare', // 'compare' or 'discount'
  theme: 'light',       // 'light' or 'dark'
  compareItems: [],
  discountItems: [],
  discountPaid: ''
};

// Default structures for new items
function createNewCompareItem(index) {
  return {
    id: 'comp_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
    name: `Product ${index}`,
    price: '',
    quantity: ''
  };
}

function createNewDiscountItem(index) {
  return {
    id: 'disc_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
    name: `Item ${index}`,
    fullPrice: ''
  };
}

// Load state from LocalStorage
function loadState() {
  initializeDefaults();
  const savedState = localStorage.getItem('cheaper_discount_state');
  if (savedState) {
    try {
      const parsed = JSON.parse(savedState);
      state.activeTab = parsed.activeTab || 'compare';
      state.theme = parsed.theme || 'light';
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

// Save state to LocalStorage
function saveState() {
  const stateToSave = {
    activeTab: state.activeTab,
    theme: state.theme
  };
  localStorage.setItem('cheaper_discount_state', JSON.stringify(stateToSave));
}

// UI Elements
const themeToggleBtn = document.getElementById('theme-toggle');
const tabCompare = document.getElementById('tab-compare');
const tabDiscount = document.getElementById('tab-discount');
const comparePage = document.getElementById('compare-page');
const discountPage = document.getElementById('discount-page');

const compareListContainer = document.getElementById('compare-list');
const addCompareItemBtn = document.getElementById('add-compare-item-btn');
const clearCompareBtn = document.getElementById('clear-compare-btn');

const discountListContainer = document.getElementById('discount-list');
const addDiscountItemBtn = document.getElementById('add-discount-item-btn');
const clearDiscountBtn = document.getElementById('clear-discount-btn');
const discountPaidInput = document.getElementById('discount-total-paid');

const compareSummaryCard = document.getElementById('compare-summary-card');
const compareBestResult = document.getElementById('compare-best-result');
const compareSavingsDetails = document.getElementById('compare-savings-details');

const discountTotalOriginal = document.getElementById('discount-total-original');
const discountTotalSaved = document.getElementById('discount-total-saved');
const discountPercentBadge = document.getElementById('discount-percent-badge');

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  applyTheme();
  applyTab();
  
  // Set paid input value
  discountPaidInput.value = state.discountPaid;

  renderCompareList();
  renderDiscountList();
  calculateCompare();
  calculateDiscount();

  // Listen for Paid Price Changes
  discountPaidInput.addEventListener('input', (e) => {
    state.discountPaid = e.target.value;
    saveState();
    calculateDiscount();
  });
});

// Theme Management
themeToggleBtn.addEventListener('click', () => {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  applyTheme();
  saveState();
});

function applyTheme() {
  if (state.theme === 'dark') {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
  } else {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
  }
}

// Tab Navigation
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

// Format Currency
function formatCurrency(val) {
  const num = parseFloat(val);
  if (isNaN(num)) return '0.00';
  return num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

// Smart Unit Price Formatter
function formatUnitPrice(val) {
  const num = parseFloat(val);
  if (isNaN(num) || !isFinite(num)) return '-';
  
  let decimals = 2;
  if (num < 0.01) decimals = 4;
  else if (num < 0.1) decimals = 3;
  
  return num.toFixed(decimals) + ' / unit/g/L/pcs';
}

// ================= PRICE COMPARE PAGE FUNCTIONS =================

function renderCompareList() {
  compareListContainer.innerHTML = '';
  state.compareItems.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'input-card';
    card.id = `card_${item.id}`;

    card.innerHTML = `
      <div class="card-header-row">
        <input type="text" class="card-title-field" value="${item.name}" placeholder="Product Name" data-id="${item.id}" data-field="name">
        ${state.compareItems.length > 2 ? `
          <button class="btn-remove-card" data-id="${item.id}" aria-label="Remove Product">
            <svg viewBox="0 0 24 24" width="20" height="20"><path fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" d="M18 6L6 18M6 6l12 12"/></svg>
          </button>
        ` : ''}
      </div>
      <div class="input-row">
        <div class="input-group">
          <label class="field-label">Price</label>
          <input type="number" class="input-field compare-input" placeholder="0.00" value="${item.price}" min="0" step="any" inputmode="decimal" data-id="${item.id}" data-field="price">
        </div>
        <div class="input-group">
          <label class="field-label">Quantity</label>
          <input type="number" class="input-field compare-input" placeholder="1" value="${item.quantity}" min="0.0001" step="any" inputmode="decimal" data-id="${item.id}" data-field="quantity">
        </div>
      </div>
      <div class="card-calculation-summary">
        <div>
          <div class="calc-unit-label">Unit Price</div>
          <div class="calc-unit-price" id="unit_price_${item.id}">-</div>
        </div>
        <div class="savings-label" id="savings_${item.id}"></div>
      </div>
    `;

    compareListContainer.appendChild(card);
  });

  // Attach card remove events
  compareListContainer.querySelectorAll('.btn-remove-card').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('data-id');
      state.compareItems = state.compareItems.filter(item => item.id !== id);
      saveState();
      renderCompareList();
      calculateCompare();
    });
  });

  // Attach input events
  compareListContainer.querySelectorAll('.compare-input, .card-title-field').forEach(input => {
    input.addEventListener('input', (e) => {
      const id = input.getAttribute('data-id');
      const field = input.getAttribute('data-field');
      const val = e.target.value;
      
      const item = state.compareItems.find(x => x.id === id);
      if (item) {
        item[field] = val;
        saveState();
        calculateCompare();
      }
    });
  });
}

function calculateCompare() {
  const validItems = [];

  // Parse inputs and find valid products
  state.compareItems.forEach(item => {
    const price = parseFloat(item.price);
    const qty = parseFloat(item.quantity);
    
    // Clear styles first
    const cardEl = document.getElementById(`card_${item.id}`);
    if (cardEl) {
      cardEl.classList.remove('cheapest-highlight');
      const oldBadge = cardEl.querySelector('.best-value-badge');
      if (oldBadge) oldBadge.remove();
    }
    
    const unitPriceEl = document.getElementById(`unit_price_${item.id}`);
    const savingsEl = document.getElementById(`savings_${item.id}`);
    if (unitPriceEl) unitPriceEl.innerText = '-';
    if (savingsEl) savingsEl.innerText = '';

    if (!isNaN(price) && price > 0 && !isNaN(qty) && qty > 0) {
      const unitPrice = price / qty;
      validItems.push({
        id: item.id,
        name: item.name || `Product`,
        price,
        qty,
        unitPrice
      });
      
      if (unitPriceEl) {
        unitPriceEl.innerText = formatUnitPrice(unitPrice);
      }
    }
  });

  if (validItems.length < 2) {
    compareSummaryCard.classList.add('hidden');
    return;
  }

  // Find cheapest unit price
  let cheapestValue = Infinity;
  validItems.forEach(item => {
    if (item.unitPrice < cheapestValue) {
      cheapestValue = item.unitPrice;
    }
  });

  // Identify all tied cheapest items
  const cheapestItems = validItems.filter(item => Math.abs(item.unitPrice - cheapestValue) < 0.00001);

  // Highlight cheapest
  cheapestItems.forEach(ch => {
    const cardEl = document.getElementById(`card_${ch.id}`);
    if (cardEl) {
      cardEl.classList.add('cheapest-highlight');
      
      // Inject Badge
      const badge = document.createElement('div');
      badge.className = 'best-value-badge';
      badge.innerText = 'Best Value!';
      cardEl.appendChild(badge);
      
      const savingsEl = document.getElementById(`savings_${ch.id}`);
      if (savingsEl) {
        savingsEl.innerText = '🏆 Cheapest';
      }
    }
  });

  // Calculate percentage savings for other items compared to the cheapest
  validItems.forEach(item => {
    const isCheapest = cheapestItems.some(ch => ch.id === item.id);
    if (!isCheapest) {
      // How much cheaper the cheapest is compared to this item:
      // (ThisUnitPrice - CheapestUnitPrice) / ThisUnitPrice * 100%
      const savingsPct = ((item.unitPrice - cheapestValue) / item.unitPrice) * 100;
      
      const savingsEl = document.getElementById(`savings_${item.id}`);
      if (savingsEl) {
        savingsEl.innerText = `Save ${savingsPct.toFixed(0)}%`;
        savingsEl.style.color = 'var(--success)';
      }
    }
  });

  // Show summary card at top
  compareSummaryCard.classList.remove('hidden');
  if (cheapestItems.length === 1) {
    compareBestResult.innerText = `🏆 ${cheapestItems[0].name || 'Product'} is the best choice!`;
    
    // Find average savings percentage compared to the other products
    const otherItems = validItems.filter(item => item.id !== cheapestItems[0].id);
    let avgSavings = 0;
    otherItems.forEach(item => {
      avgSavings += ((item.unitPrice - cheapestValue) / item.unitPrice) * 100;
    });
    avgSavings = avgSavings / otherItems.length;

    compareSavingsDetails.innerText = `Saves you an average of ${avgSavings.toFixed(1)}% on your purchase.`;
  } else {
    // Tie
    const names = cheapestItems.map(item => item.name).join(' & ');
    compareBestResult.innerText = `⚖️ Tie between ${names}`;
    compareSavingsDetails.innerText = `Both offer the exact same unit price value.`;
  }
}

// Add Compare item
addCompareItemBtn.addEventListener('click', () => {
  const index = state.compareItems.length + 1;
  state.compareItems.push(createNewCompareItem(index));
  saveState();
  renderCompareList();
  calculateCompare();
});

// Clear Compare items
clearCompareBtn.addEventListener('click', () => {
  if (confirm('Clear all product comparison inputs?')) {
    state.compareItems = [createNewCompareItem(1), createNewCompareItem(2)];
    saveState();
    renderCompareList();
    calculateCompare();
  }
});


// ================= DISCOUNT CALCULATION PAGE FUNCTIONS =================

function renderDiscountList() {
  discountListContainer.innerHTML = '';
  state.discountItems.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'input-card discount-row-card';
    card.id = `disc_card_${item.id}`;

    card.innerHTML = `
      <div class="discount-item-inputs">
        <div class="input-group">
          <label class="field-label">Item Name</label>
          <input type="text" class="input-field card-title-field" style="height:44px; margin-left:0; width:100%; border:1px solid var(--border); background:var(--bg-input); padding-left:12px;" value="${item.name}" placeholder="Item ${index+1}" data-id="${item.id}" data-field="name">
        </div>
        <div class="input-group">
          <label class="field-label">Full Price</label>
          <input type="number" class="input-field discount-input" style="height:44px;" placeholder="0.00" value="${item.fullPrice}" min="0" step="any" inputmode="decimal" data-id="${item.id}" data-field="fullPrice">
        </div>
      </div>
      
      <div class="discount-price-output">
        <div class="discount-calculated-label">Paid</div>
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

  // Attach card remove events
  discountListContainer.querySelectorAll('.btn-remove-card').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = btn.getAttribute('data-id');
      state.discountItems = state.discountItems.filter(item => item.id !== id);
      saveState();
      renderDiscountList();
      calculateDiscount();
    });
  });

  // Attach input events
  discountListContainer.querySelectorAll('.discount-input, .card-title-field').forEach(input => {
    input.addEventListener('input', (e) => {
      const id = input.getAttribute('data-id');
      const field = input.getAttribute('data-field');
      const val = e.target.value;

      const item = state.discountItems.find(x => x.id === id);
      if (item) {
        item[field] = val;
        saveState();
        calculateDiscount();
      }
    });
  });
}

function calculateDiscount() {
  let totalOriginalVal = 0;
  const validItems = [];

  // Parse items
  state.discountItems.forEach(item => {
    const fullPrice = parseFloat(item.fullPrice);
    
    // Clear UI outputs
    const outPriceEl = document.getElementById(`disc_out_price_${item.id}`);
    const outSavedEl = document.getElementById(`disc_out_saved_${item.id}`);
    if (outPriceEl) outPriceEl.innerText = '-';
    if (outSavedEl) outSavedEl.innerText = '';

    if (!isNaN(fullPrice) && fullPrice > 0) {
      totalOriginalVal += fullPrice;
      validItems.push({
        id: item.id,
        fullPrice
      });
    }
  });

  discountTotalOriginal.innerText = formatCurrency(totalOriginalVal);

  const paidPrice = parseFloat(state.discountPaid);
  if (isNaN(paidPrice) || paidPrice < 0 || totalOriginalVal <= 0 || paidPrice > totalOriginalVal) {
    // If paid price is empty or invalid, or paid price is greater than total full price
    discountTotalSaved.innerText = '0.00';
    discountPercentBadge.classList.add('hidden');
    
    // If paid is greater than total, show hint
    if (paidPrice > totalOriginalVal) {
      discountTotalSaved.innerText = 'Paid > Full Price';
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

  // Calculate pro-rata discounted price for each product
  const discountRate = totalSavedVal / totalOriginalVal; // proportion of price saved
  
  validItems.forEach(item => {
    const savedForThis = item.fullPrice * discountRate;
    const paidForThis = item.fullPrice - savedForThis;

    const outPriceEl = document.getElementById(`disc_out_price_${item.id}`);
    const outSavedEl = document.getElementById(`disc_out_saved_${item.id}`);

    if (outPriceEl) {
      outPriceEl.innerText = formatCurrency(paidForThis);
    }
    if (outSavedEl && savedForThis > 0) {
      outSavedEl.innerText = `Saved ${formatCurrency(savedForThis)}`;
    }
  });
}

// Add Discount item
addDiscountItemBtn.addEventListener('click', () => {
  const index = state.discountItems.length + 1;
  state.discountItems.push(createNewDiscountItem(index));
  saveState();
  renderDiscountList();
  calculateDiscount();
});

// Clear Discount items
clearDiscountBtn.addEventListener('click', () => {
  if (confirm('Clear all discount calculator inputs?')) {
    state.discountItems = [createNewDiscountItem(1), createNewDiscountItem(2)];
    state.discountPaid = '';
    discountPaidInput.value = '';
    saveState();
    renderDiscountList();
    calculateDiscount();
  }
});
