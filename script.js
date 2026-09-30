document.addEventListener('DOMContentLoaded', () => {
  const terminalForm = document.getElementById('terminal-form');
  const terminalInput = document.getElementById('terminal-input');
  const terminalBody = document.getElementById('terminal-body');

  const commands = {
    'help': 'Commands: <span class="text-brand-accent">about</span>, <span class="text-brand-accent">skills</span>, <span class="text-brand-accent">projects</span>, <span class="text-brand-accent">articles</span>, <span class="text-brand-accent">contact</span>, <span class="text-brand-accent">clear</span>',
    'about': 'Sharleen Atieno - Apprentice Software Developer @ Zone01 Kisumu. Focuses on Go, algorithm design, HTTP web servers, and modern frontend web builds.',
    'skills': 'Languages: Go (Golang), JavaScript, HTML5, CSS3/Tailwind<br>Tools: Git, GitHub, Gitea, Linux CLI, VS Code',
    'projects': 'Repositories: quizphoria, groupie-tracker, push-swap, ascii-art-web, go-reloaded',
    'articles': 'Check out my recent tech write-ups on Dev.to and my software engineering logs.',
    'contact': 'Email: sharleatieno@gmail.com | GitHub: github.com/sharleatieno',
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

