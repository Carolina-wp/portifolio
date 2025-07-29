AOS.init();

// Loader com animação de fade-out
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');

  // Animação sequencial do texto do loader
  const loaderText = "Carregando portfólio...";
  const animatedTextContainer = document.createElement('div');
  animatedTextContainer.id = 'animated-text';

  // Criar spans para cada caractere
  loaderText.split('').forEach((char, i) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = `${i * 0.1}s`;
    animatedTextContainer.appendChild(span);
  });

  // Cursor piscante
  const cursor = document.createElement('span');
  cursor.classList.add('cursor');
  cursor.textContent = '|';
  animatedTextContainer.appendChild(cursor);

  // Limpa texto original e insere animação
  loader.innerHTML = '';
  loader.appendChild(animatedTextContainer);

  // Depois de 3 segundos, faz fade-out do loader
  setTimeout(() => {
    loader.classList.add('fade-out');
  }, 3000);

  setTimeout(() => {
    loader.style.display = 'none';
  }, 4000); // 1s após o fade-out

  // Inicializa ícones tema
  const iconMoon = document.getElementById('icon-moon');
  const iconSun = document.getElementById('icon-sun');
  const isDark = document.documentElement.classList.contains('dark');
  iconMoon.style.opacity = isDark ? '0' : '1';
  iconSun.style.opacity = isDark ? '1' : '0';
});

// Barra de progresso e header shrink
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById('progress-bar').style.width = scrollPercent + '%';

  const header = document.querySelector('header');
  if (scrollTop > 50) {
    header.classList.add('shrink');
  } else {
    header.classList.remove('shrink');
  }
});

// Toggle tema com persistência localStorage
const toggleBtn = document.getElementById('theme-toggle');
const iconMoon = document.getElementById('icon-moon');
const iconSun = document.getElementById('icon-sun');

// Aplica tema salvo no carregamento da página
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
    iconMoon.style.opacity = '0';
    iconSun.style.opacity = '1';
  } else {
    document.documentElement.classList.remove('dark');
    iconMoon.style.opacity = '1';
    iconSun.style.opacity = '0';
  }
});

// Evento do botão para alternar tema e salvar preferência
toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  const isDark = document.documentElement.classList.contains('dark');
  iconMoon.style.opacity = isDark ? '0' : '1';
  iconSun.style.opacity = isDark ? '1' : '0';

  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Validação simples do formulário
const form = document.querySelector('form');

if (form) {
  form.id = 'contact-form'; // garante o id para uso futuro

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('input[type="text"]').value.trim();
    const email = form.querySelector('input[type="email"]').value.trim();
    const message = form.querySelector('textarea').value.trim();

    if (!name || !email || !message) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    alert('Mensagem enviada com sucesso!');
    form.reset();
  });
}

feather.replace();
