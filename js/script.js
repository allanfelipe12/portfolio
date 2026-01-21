// Detecta caminho correto da navbar dependendo da página
const navbarPath = window.location.pathname.includes("/pages/")
  ? "../components/navbar.html"
  : "./components/navbar.html";

// ===== CARREGAR NAVBAR =====
fetch(navbarPath)
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar-container').innerHTML = data;

    // ===== MENU MOBILE =====
    const menuToggle = document.querySelector('.hamburger');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
      menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.textContent =
          menuToggle.textContent === '☰' ? '✕' : '☰';
      });

      document.querySelectorAll('#nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
          menuToggle.textContent = '☰';
        });
      });
    }
  })
  .catch(err => console.error('Erro ao carregar a navbar:', err));



// components/button.js

// Seleciona onde você quer colocar o botão
// Por exemplo, dentro de um container com id="button-container"
const containers = document.querySelectorAll('.button-container');

containers.forEach(container => {
    fetch('./components/button.html')
        .then(response => response.text())
        .then(html => {
            container.innerHTML = html;

            // Se quiser adicionar um evento de clique
            const btn = container.querySelector('.reusable-button');
            btn.addEventListener('click', () => {
                alert('Você clicou no botão reutilizável!');
            });
        });
});


// ===============================
// TYPING EFFECT
// ===============================
const texts = [
  "HTML, CSS, JavaScript",
  "React.js, Bootstrap, SASS",
  "Node.js, Express, MongoDB",
  "Laravel,Vue.js, Angular",
  "Java, Spring Boot, Hibernate",
  "C#, PHP, .NET",
  "SQL, NoSQL, Firebase",
  "Git, GitHub, Docker",
  "AWS, Vercel, Netlify",
  "Linux, Bash, Terminal",
  "SEO, Analytics, SEMrush",
"Agile, Scrum, Kanban",
  "Illustrator, Photoshop, Adobe XD",
  "Figma, Canvas, Sketch",
  "WordPress, Wix, Magento",
  "Elementor, WPBakery, Divi Builder",
  "Tiny, Bling, Protheus",
  "RD Station, HubSpot, Mailchimp",
  "Word, Excel, PowerPoint"
];

const typingElement = document.getElementById("typing");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentText = texts[textIndex];

  if (typingElement) {
    if (!isDeleting) {
      typingElement.textContent = currentText.slice(0, charIndex++);
      if (charIndex > currentText.length) {
        setTimeout(() => (isDeleting = true), 1200);
      }
    } else {
      typingElement.textContent = currentText.slice(0, charIndex--);
      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }
  }

  setTimeout(typeEffect, isDeleting ? 50 : 90);
}
typeEffect();


// ===============================
// ANIMAÇÃO DOS NÚMEROS
// ===============================
const stats = document.querySelectorAll(".stat h3");

stats.forEach(stat => {
  const target = +stat.innerText.replace("+", "");
  let count = 0;

  const update = () => {
    if (count < target) {
      count++;
      stat.innerText = count + "+";
      requestAnimationFrame(update);
    }
  };

  update();
});


 //INICIALIZA O EMAILJS
(function () {
  emailjs.init("cqm6z7oFkfu8j_k9z");
})();

console.log("EmailJS OK:", emailjs);

const form = document.getElementById("contatoForm");
const statusMsg = document.getElementById("status");


form.addEventListener("submit", function (e) {
  e.preventDefault();

  statusMsg.textContent = "Enviando...";
  statusMsg.style.color = "#fff";

  emailjs.sendForm(
    "service_0ke9bf9",
    "template_4as4kuh",
    this
  )
  .then(() => {
    statusMsg.textContent = "Mensagem enviada com sucesso 🚀";
    statusMsg.style.color = "#2ecc71";
    form.reset();
  })
  .catch((error) => {
    console.error(error);
    statusMsg.textContent = "Erro ao enviar.";
    statusMsg.style.color = "red";
  });
});



