/**
 * Thanasree Construction & Valuers - Form Handling
 * Contact and Careers forms
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initCareersForm();
});

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn?.textContent;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    // Formspree - replace with your form ID
    const formData = new FormData(form);
    const action = form.getAttribute('action') || 'https://formspree.io/f/xpwnqjap';

    try {
      const response = await fetch(action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        showMessage(form, 'Thank you! Your enquiry has been sent successfully.');
      } else {
        showMessage(form, 'Something went wrong. Please try again or call us.', true);
      }
    } catch (err) {
      showMessage(form, 'Network error. Please try calling or WhatsApp.', true);
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText || 'Send Message';
    }
  });
}

function initCareersForm() {
  const form = document.getElementById('careers-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn?.textContent;

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Submitting...';
    }

    const formData = new FormData(form);
    const action = form.getAttribute('action') || 'https://formspree.io/f/xpwnqjap';

    try {
      const response = await fetch(action, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        form.reset();
        showMessage(form, 'Thank you! Your application has been submitted successfully.');
      } else {
        showMessage(form, 'Something went wrong. Please try again or apply via WhatsApp.', true);
      }
    } catch (err) {
      showMessage(form, 'Network error. Please try applying via WhatsApp.', true);
    }

    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.textContent = originalText || 'Submit Application';
    }
  });
}

function showMessage(form, message, isError = false) {
  let msgEl = form.parentElement.querySelector('.form-message');
  if (!msgEl) {
    msgEl = document.createElement('div');
    msgEl.className = 'form-message';
    form.parentElement.insertBefore(msgEl, form);
  }
  msgEl.textContent = message;
  msgEl.className = 'form-message ' + (isError ? 'error' : 'success');
  msgEl.style.display = 'block';

  setTimeout(() => {
    msgEl.style.display = 'none';
  }, 5000);
}
