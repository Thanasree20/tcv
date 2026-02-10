/**
 * Empanelment - Load and display banks/FIs from JSON
 */

const EMPANELMENT_FALLBACK = ["AADHAR HOUSING FINANCE LTD","AHAM HOUSING FINANCE LTD","AMBIT HOUSING FINANCE LTD","WONDER HOME FINANCE","ANNAPURNA FINANCIAL PVT LTD","ARKA FINCAP LIMITED","ASHOK LEYLAND FINANCE LTD","AVANSE FINANCIAL SERVICE","AXIS BANK","BAJAJ HOUSING FINANCE LTD","CATALYST FINANCIAL LTD","CATHOLIC SYRIAN BANK","CHOLAMANDALAM HOME FINANCE LTD","CITY UNION BANK","EQUITAS SMALL FINANCE BANK LTD","FEDBANK FINANCIAL SERVICE LTD","FINCARE SMALL FINANCE BANK","GODREJ CAPITAL LTD","HDB FINANCIAL SERVICE","HINDUJA HOUSING FINANCE LTD","ICICI HOME FINANCE LTD","IDFC FIRST BHARAT BANK","INCRED FINANCIAL SERVICE","INDIAN BANK","INDOSTAR HOME FINANCE LTD","INDUSIND BANK","JM FINANCE","JIO FINANCE LTD","KARUR VYSYA BANK","L&T FINANCE LTD","MAHINDRA HOME FINANCE LTD","MANAPURAM HOME FINANCE","MOTILAL OSWAL HOME FINANCE LTD","MUTHOOT HOME FINANCE LTD","NIDO HOME FINANCE LTD","PIRAMAL CAPITAL & HOUSING FINANCE LTD","PNB HOUSING FINANCE LTD","PRAYAAN CAPITAL PVT LTD","PROFECTUS CAPITAL PVT LTD","PUNJAB NATIONAL BANK","REAL TOUCH HOME FINANCIAL LTD","SMFG HOME FINANCE CO LTD","SOUTH INDIAN BANK","STATE BANK OF INDIA","SUNDARAM HOME FINANCE LTD","TRUHOME FINANCE LIMITED","UCO BANK","UGRO CAPITAL FINANCE LTD","UJJIVAN SMALL FINANCE BANK","UNITY SMALL FINANCE BANK","VERITAS HOUSING FINANCIAL LTD","VISTAAR FINANCIAL SERVICE"];

function renderEmpanelment(grid, institutions) {
  grid.removeAttribute('aria-busy');
  grid.innerHTML = '';

  institutions.forEach((name, index) => {
    const item = document.createElement('div');
    item.className = 'empanelment-item animate-on-scroll';
    item.textContent = name;
    grid.appendChild(item);
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  grid.querySelectorAll('.empanelment-item').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', async () => {
  const grid = document.getElementById('empanelment-grid');
  if (!grid) return;

  try {
    const response = await fetch('data/empanelment.json');
    if (response.ok) {
      const institutions = await response.json();
      renderEmpanelment(grid, institutions);
    } else {
      renderEmpanelment(grid, EMPANELMENT_FALLBACK);
    }
  } catch (err) {
    renderEmpanelment(grid, EMPANELMENT_FALLBACK);
  }
});
