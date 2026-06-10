// js/components/main-header.js
class MainHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <header id="header">
      <div class="header-main">
          <div class="container header-flex">
              <a href="/" class="logo">
                  <img src="/assets/images/LOGO FUNDO TRANSPARENTE.png" alt="Edgeti Logo" />
              </a>
              
              <!-- MENU DESKTOP -->
              <nav class="nav-desktop">
                  <ul class="nav-list">
                      <li><a href="/">Home</a></li>
                      <li><a href="/quem-somos">Quem Somos</a></li>
                      
                      <!-- Item com Mega Menu -->
                      <li class="has-mega-menu">
                          <a href="/#servicos">Soluções ▾</a>
                          
                          <!-- Painel do Mega Menu -->
                          <div class="mega-menu">
                              <div class="mega-menu-grid">
                                  <a href="informatica-geral" class="mega-menu-card">
                                      <h4>Informática</h4>
                                      <p>Suporte ágil e eficiente para o dia a dia da sua empresa.</p>
                                  </a>
                                  <a href="redes-geral" class="mega-menu-card">
                                      <h4>Redes e Servidores</h4>
                                      <p>A base sólida para a conectividade do seu negócio.</p>
                                  </a>
                                  <a href="seguranca-geral" class="mega-menu-card">
                                      <h4>Segurança da Informação</h4>
                                      <p>Protegendo seu ativo mais valioso: seus dados.</p>
                                  </a>
                                  <a href="cloud-geral" class="mega-menu-card">
                                      <h4>Cloud (Nuvem)</h4>
                                      <p>Flexibilidade e escalabilidade para o futuro do negócio.</p>
                                  </a>
                                  <a href="suporte-tecnico-geral" class="mega-menu-card highlight-card">
                                      <h4>Suporte Técnico para Empresas</h4>
                                      <p>Suporte de ponta a ponta, sem o custo de uma equipe interna.</p>
                                  </a>
                              </div>
                          </div>
                      </li>
                      
                      <li><a href="blog" class="active">Blog</a></li>
                      <li><a href="/#vamos-conversar">Contato</a></li>
                      <li><a href="central-privacidade">Central de Privacidade</a></li>
                  </ul>
              </nav>
              
              <button id="btn-mobile" aria-label="Abrir Menu">
                  <i class="ph ph-list"></i>
              </button>
          </div>
      </div>
      
      <!-- MENU MOBILE -->
      <div id="menu-mobile" class="menu-mobile-container">
          <nav>
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/quem-somos">Quem Somos</a></li>
                  <li class="mobile-has-submenu">
                      <a href="/#servicos">Soluções</a>
                      <!-- Submenu Mobile -->
                      <ul class="mobile-submenu">
                          <li><a href="informatica-geral">- Informática</a></li>
                          <li><a href="redes-geral">- Redes e Servidores</a></li>
                          <li><a href="seguranca-geral">- Seguranca da Informação</a></li>
                          <li><a href="cloud-geral">- Cloud (Nuvem)</a></li>
                          <li><a href="suporte-tecnico-geral">- Suporte Técnico</a></li>
                      </ul>
                  </li>
                  <li><a href="blog">Blog</a></li>
                  <li><a href="/#vamos-conversar">Contato</a></li>
                  <li><a href="central-privacidade">Central de Privacidade</a></li>
              </ul>
          </nav>
      </div>
    </header>
    `;

    // Inicializa os seletores e eventos após renderizar o HTML acima
    this.initMenuMobile();
  }

  initMenuMobile() {
    const btnMobile = this.querySelector('#btn-mobile');
    const menuMobile = this.querySelector('#menu-mobile');
    const links = this.querySelectorAll('#menu-mobile a');

    if (btnMobile && menuMobile) {
      // Abre e fecha ao clicar no botão hambúrguer
      btnMobile.addEventListener('click', () => {
        menuMobile.classList.toggle('active');
        
        // Opcional: Altera o ícone de hambúrguer para um "X" quando ativo se o layout possuir a classe
        const icon = btnMobile.querySelector('i');
        if (icon) {
          icon.classList.toggle('ph-list');
          icon.classList.toggle('ph-x');
        }
      });

      // Fecha o menu automaticamente ao clicar em qualquer link (bom para links com âncoras como /#servicos)
      links.forEach(link => {
        link.addEventListener('click', () => {
          menuMobile.classList.remove('active');
          const icon = btnMobile.querySelector('i');
          if (icon) {
            icon.classList.add('ph-list');
            icon.classList.remove('ph-x');
          }
        });
      });
    }
  }
}

customElements.define('main-header', MainHeader);