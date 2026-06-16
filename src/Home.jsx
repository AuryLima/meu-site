import Nullstack from 'nullstack'
import './Home.css'

class Home extends Nullstack {

  render() {
    return (
      <div>
        <header class="navbar">
          <div class="logo">Aury Abreu</div>
          <nav>
            <a href="#inicio">Início</a>
            <a href="#sobre">Sobre</a>
            <a href="#projetos">Projetos</a>
            <a href="#faq">FAQ</a>
            <a href="#contato">Contato</a>
          </nav>
        </header>

        <section class="hero" id="inicio">
          <p class="tag">&lt;/&gt;</p>

          <h1 class="nome">
            AURY
            <br />
            ABREU
          </h1>
          <p class="descricao">Desenvolvedor Full Stack</p>
          <p class="subdescricao">Transformando ideias em soluções através de código.</p>
          <div class="botoes">
            <a href="https://www.linkedin.com/in/auridinei/" class="btn-primary">
              Linkedin
            </a>
            <a href="https://github.com/AuryLima" class="btn-secondary">
              GitHub
            </a>
          </div>
        </section>

        <section class="sobre" id="sobre">
          <div class="sobre-container">
            <div class="sobre-texto">
              <h2>Sobre Mim</h2>
              <p>
                Olá! Sou Auridinei Abreu, mas pode me chamar de Aury. Sou uma pessoa com deficiência (PcD) que acredita
                que limitações físicas nunca definem o potencial de alguém e minha trajetória é a prova disso. Desde
                cedo, encontrei na tecnologia um universo sem barreiras, onde a criatividade e a lógica andam lado a
                lado. Atuo como desenvolvedor de software com domínio das principais tecnologias do mercado, construindo
                soluções robustas, escaláveis e acessíveis. Ao longo da minha carreira, trabalhei em projetos que vão de
                aplicações web modernas a sistemas back-end complexos, sempre buscando elevar a qualidade e a
                experiência do usuário final. Mais do que escrever código, acredito em construir pontes entre pessoas e
                tecnologia, entre necessidade e solução. Ser PcD me deu uma perspectiva única sobre acessibilidade e
                inclusão digital, temas que carrego com orgulho em cada projeto Minha história é feita de superação,
                aprendizado contínuo e paixão genuína por transformar ideias em realidade através do software.
              </p>
            </div>
          </div>
        </section>

        <section class="projetos" id="projetos">
          <div class="projetos-container">
            <h2>Projetos</h2>
            <div class="cards">
              <div class="card">
                <h3>📋 Gerenciador de Tarefas</h3>
                <p>Aplicação desenvolvida em Python para gerenciamento de tarefas utilizando listas e arquivos.</p>
                <a href="https://github.com/AuryLima/GERENCIADOR-TAREFA">Ver Projeto</a>
              </div>

              <div class="card">
                <h3>📈 Calculadora Financeira</h3>
                <p>Sistema para cálculos financeiros e simulações de investimentos desenvolvido em Python.</p>
                <a href="https://github.com/AuryLima/CALCULADORA-JUROS-SIMPLES">Ver Projeto</a>
              </div>
              <div class="card">
                <h3>💱 Conversor de Moedas</h3>
                <p>Site desenvolvido com Nullstack para apresentar minha trajetória e meus projetos.</p>
                <a href="https://github.com/AuryLima/CONVERSOR-DE-MOEDAS">Ver Projeto</a>
              </div>
            </div>
          </div>
        </section>
        <section class="tecnologias" id="tecnologias">
          <div class="tecnologias-container">
            <p class="sub">Tecnologias que domino</p>
            <h2>Tecnologias</h2>
            <div class="tech-grid">
              <div class="tech-card">🐍 Python</div>
              <div class="tech-card">🌐 HTML5</div>
              <div class="tech-card">🎨 CSS3</div>
              <div class="tech-card">⚡ JavaScript</div>
              <div class="tech-card">📂 Git</div>
              <div class="tech-card">🐙 GitHub</div>
              <div class="tech-card">🚀 Nullstack</div>
            </div>
          </div>
        </section>

        <section class="jornada" id="jornada">
          <div class="jornada-container">
            <h2>Minha Jornada</h2>
            <div class="timeline">
              <div class="timeline-item">
                <div class="ano">2025</div>
                <div class="conteudo">
                  <h3>Início dos Estudos</h3>
                  <p>Comecei meus estudos em programação, focando principalmente em lógica de programação e Python.</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="ano">2026</div>
                <div class="conteudo">
                  <h3>Primeiros Projetos</h3>
                  <p>
                    Desenvolvimento de aplicações em Python para praticar estruturas de dados, automação e resolução de
                    problemas.
                  </p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="ano">2026</div>
                <div class="conteudo">
                  <h3>Desenvolvimento Web</h3>
                  <p>Início da criação de aplicações web utilizando HTML, CSS, JavaScript, Git, GitHub e Nullstack.</p>
                </div>
              </div>
              <div class="timeline-item">
                <div class="ano">Objetivo</div>
                <div class="conteudo">
                  <h3>Carreira em TI</h3>
                  <p>
                    Evoluir constantemente como desenvolvedor, contribuir projetos relevantes e construir uma carreira
                    sólida na área de tecnologia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="faq" id="faq">
          <div class="faq-container">
            <h2>Perguntas Frequentes</h2>
            <div class="faq-item">
              <h3>Você está disponível para oportunidades na área de TI?</h3>
              <p>
                Sim. Estou em busca de oportunidades para desenvolver minhas habilidades e crescer profissionalmente.
              </p>
            </div>

            <div class="faq-item">
              <h3>Quais tecnologias você utiliza?</h3>
              <p>Atualmente estudo Python, HTML, CSS, JavaScript, Git, GitHub e Nullstack.</p>
            </div>

            <div class="faq-item">
              <h3>Como você aprende novas tecnologias?</h3>
              <p>Através de documentação oficial, cursos, prática constante e desenvolvimento de projetos.</p>
            </div>

            <div class="faq-item">
              <h3>Qual é seu principal objetivo profissional?</h3>
              <p>
                Construir uma carreira sólida em tecnologia, contribuindo projetos relevantes e evoluindo continuamente
                como desenvolvedor.
              </p>
            </div>
            <div class="faq-item">
              <h3>Você trabalha como freelancer?</h3>
              <p>Sim, atualmente essa é minha principal forma de atuação.</p>
            </div>
          </div>
        </section>

        <section class="contato" id="contato">
          <div class="contato-container">
            <h2>Contato</h2>
            <p class="contato-texto">
              Gostou dos meus projetos ou deseja entrar em contato? Fique à vontade para me encontrar através dos canais
              abaixo.
            </p>
            <div class="contato-links">
              <a href="https://github.com/AuryLima" target="_blank" rel="noopener noreferrer" class="contato-card">
                🐙 GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/auridinei/"
                target="_blank"
                rel="noopener noreferrer"
                class="contato-card"
              >
                💼 LinkedIn
              </a>
              <a href="mailto:auridineiabreu@gmail.com" class="contato-card">
                📧 E-mail
              </a>
            </div>
          </div>
        </section>

        <footer class="footer">
          <p>© 2026 Aury Abreu • Desenvolvido com Nullstack</p>
        </footer>
      </div>
    )
  }

}

export default Home
