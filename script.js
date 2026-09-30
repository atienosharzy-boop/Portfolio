document.addEventListener('DOMContentLoaded', () => {
  const terminalForm = document.getElementById('terminal-form');
  const terminalInput = document.getElementById('terminal-input');
  const terminalBody = document.getElementById('terminal-body');

  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));
  }

  const commands = {
    'help': 'Commands: <span class="text-brand-accent">about</span>, <span class="text-brand-accent">skills</span>, <span class="text-brand-accent">projects</span>, <span class="text-brand-accent">articles</span>, <span class="text-brand-accent">contact</span>, <span class="text-brand-accent">resume</span>, <span class="text-brand-accent">socials</span>, <span class="text-brand-accent">whoami</span>, <span class="text-brand-accent">clear</span>',
    'about': 'Sharleen Atieno - Apprentice Software Developer @ Zone01 Kisumu. Focuses on Go, algorithm design, HTTP web servers, and modern frontend web builds.',
    'skills': 'Languages: Go (Golang), JavaScript, HTML5, CSS3/Tailwind<br>Tools: Git, GitHub, Gitea, Linux CLI, VS Code',
    'projects': 'Repositories: quizphoria, groupie-tracker, push-swap, ascii-art-web, go-reloaded',
    'articles': 'Read my tech write-ups on DEV.to: dev.to/sharzy_atieno_1d10b13f27f',
    'contact': 'Email: sharleatieno@gmail.com | GitHub: github.com/atienosharzy-boop',
    'resume': 'Download my CV: <a class="underline text-brand-accent" href="resume.pdf" download>resume.pdf</a> or <a class="underline text-brand-accent" href="cv.html" target="_blank">view online</a>',
    'socials': 'LinkedIn: linkedin.com/in/sharleen-precious-78aa22425<br>DEV.to: dev.to/sharzy_atieno_1d10b13f27f<br>X: x.com/SharleAtieno',
    'whoami': 'visitor - welcome to Sharleen\'s portfolio.',
    'clear': 'CLEAR'
  };

  function escapeHtml(str) {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  if (terminalForm) {
    terminalForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = terminalInput.value.trim().toLowerCase();
      if (!input) return;

      const userLine = document.createElement('div');
      userLine.innerHTML = `<span class="text-brand-accent font-bold">visitor@sharleatieno:~$</span> <span>${escapeHtml(input)}</span>`;
      terminalBody.appendChild(userLine);

      const responseLine = document.createElement('div');
      responseLine.className = 'text-slate-300 pl-4 border-l-2 border-brand-500/50 my-1.5';

      if (input === 'clear') {
        terminalBody.innerHTML = '';
      } else if (commands[input]) {
        responseLine.innerHTML = commands[input];
        terminalBody.appendChild(responseLine);
      } else {
        responseLine.innerHTML = `<span class="text-red-400">Command not found: '${escapeHtml(input)}'.</span> Type <span class="text-brand-accent">help</span> for a list of available commands.`;
        terminalBody.appendChild(responseLine);
      }

      terminalInput.value = '';
      terminalBody.scrollTop = terminalBody.scrollHeight;
    });
  }
});