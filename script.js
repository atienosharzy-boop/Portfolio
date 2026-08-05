const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  const isDark = document.body.getAttribute('data-theme') === 'dark';
  
  if (isDark) {
    document.body.setAttribute('data-theme', 'light');
    toggleBtn.textContent = '🌙 Dark';
  } else {
    document.body.setAttribute('data-theme', 'dark');
    toggleBtn.textContent = '☀️ Light';
  }
});
