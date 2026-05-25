import bgImg from "../assets/imgs/hero/bgHeroLp.jpg";
import logo from "../assets/imgs/logo/logo.webp";
import { infos } from "./content";

const currentYear = new Date().getFullYear();

const contentLp01 = {
  infos: {
    title:
      "Consultoria Jurídica Preventiva e Estratégica | Cível, Família e Tributário",
    description:
      "Evite problemas jurídicos com consultoria especializada em Direito Cível, Família, Tributário, execuções, contratos, dívidas fiscais e isenção de imposto de renda.",
    keywords:
      "Evite problemas jurídicos com consultoria especializada em Direito Cível, Família, Tributário, execuções, contratos, dívidas fiscais e isenção de imposto de renda.",
  },
  hero: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "Logomarca",
    },
    textArea: {
      title: (
        <h1>
          Evite problemas jurídicos antes que eles prejudiquem sua vida ou seu
          patrimônio
        </h1>
      ),
      subtitle:
        "Com uma consultoria jurídica acessível, você pode prevenir conflitos, analisar processos já existentes e encontrar a melhor solução para proteger seus direitos nas áreas Cível, Família e Tributária.",
      buttonLabel: "Solicite sua consultoria agora",
      ctaButtonAriaLabel:
        "Botão para chamada de ação para contato pelo whatsapp",
    },
  },
  features: {
    sectionHeader: {
      miniTag: "CONSULTORIA JURÍDICA ESTRATÉGICA",
      title: "Resolva hoje para não sofrer amanhã",
    },
    cards: {
      card1: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-check-icon lucide-check"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ),
        title: "Consultoria em Direito de Família",
        description:
          "Orientação estratégica para divórcio, união estável, guarda de filhos, pensão alimentícia e resolução preventiva de conflitos familiares.",
      },
      card2: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-check-icon lucide-check"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ),
        title: "Consultoria em Direito Cível",
        description:
          "Análise e prevenção de problemas com contratos, locações, cobranças, execuções judiciais e desbloqueio de contas bancárias.",
      },
      card3: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-check-icon lucide-check"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ),
        title: "Consultoria Tributária e Regularização Fiscal",
        description:
          "Soluções para dívidas tributárias, execuções fiscais, IPTU, IPVA, taxas indevidas e estratégias jurídicas para proteção patrimonial.",
      },
      card4: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-check-icon lucide-check"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ),
        title: "Consultoria para Isenção e Restituição de Imposto de Renda",
        description:
          "Análise completa para verificar seu direito à isenção e restituição de valores pagos indevidamente por aposentados e pensionistas.",
      },
    },
  },
  about: {
    bgImg: bgImg,
    logo: {
      logoImg: logo,
      alt: "Logomarca",
    },
    sectionHeader: {
      miniTag: "CONSULTORIA JURÍDICA PREVENTIVA E ESTRATÉGICA",
      title: "Soluções jurídicas com segurança e eficiência",
    },
    paragraph: (
      <p>
        Muitas pessoas só procuram ajuda quando o problema já está avançado e os
        prejuízos já começaram. A consultoria jurídica preventiva permite
        antecipar riscos, corrigir falhas e tomar decisões com segurança antes
        que conflitos se tornem processos complexos e custosos.
        <br />
        <br />
        Se o problema já existe, realizamos uma análise completa para construir
        a melhor estratégia jurídica para o seu caso. Meu compromisso é oferecer
        orientação técnica, clareza e soluções eficazes para proteger seus
        interesses.
      </p>
    ),
    buttonLabel: "Solicite sua consultoria agora",
    ctaButtonAriaLabel: "Botão para chamada de ação para contato pelo whatsapp",
  },
  whyUs: {
    sectionHeader: {
      miniTag: "A ESCOLHA CERTA",
      title: "Por que nos escolher para cuidar do seu caso?",
    },
    cards: {
      card1: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-check-icon lucide-check"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ),
        title: "Análise detalhada e estratégica",
        description:
          "Cada situação exige atenção individualizada para identificar riscos e encontrar a melhor solução jurídica.",
      },
      card2: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-check-icon lucide-check"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ),
        title: "Atuação preventiva para evitar prejuízos",
        description:
          "Agimos com estratégia para impedir que pequenos problemas se transformem em grandes prejuízos financeiros e judiciais.",
      },
      card3: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-check-icon lucide-check"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ),
        title: "Atendimento próximo e personalizado",
        description:
          "Você recebe suporte direto, acompanhamento completo e orientação clara em cada etapa.",
      },
      card4: {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-check-icon lucide-check"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ),
        title: "Experiência que gera segurança",
        description:
          "Conhecimento técnico e atuação prática para conduzir seu caso com eficiência, proteção e resultado.",
      },
    },
  },
  form: {
    miniTag: "ORIENTAÇÃO GRATUITA",
    title: "Preencha e descubra seus direitos",
    subtitle:
      "Seus dados estão seguros e protegidos pela LGPD - Lei Geral de Proteção de Dados (13.709/2018)",
  },
  cta: {
    bgImg: bgImg,
    sectionHeader: {
      miniTag: "SEU DIREITO SEM COMPLICAÇÃO",
      title:
        "Uma consultoria acessível pode evitar grandes problemas no futuro",
      subtitle: (
        <p>
          Seja para prevenir conflitos, analisar um processo em andamento ou
          encontrar a melhor solução jurídica para questões familiares,
          patrimoniais, tributárias ou cíveis, agir cedo faz toda a diferença.
          <br />
          <br />
          Nossa atuação estratégica ajuda você a tomar decisões seguras, evitar
          prejuízos e proteger seus direitos com atendimento especializado e
          personalizado.
          <br />
          <br />
          Invista hoje em orientação jurídica e evite custos muito maiores
          amanhã.
        </p>
      ),
    },
    buttonLabel: "Falar com uma especialista agora",
    ctaButtonAriaLabel: "Botão para chamada de ação para contato pelo whatsapp",
  },
  contact: {
    card1: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-instagram"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
        </svg>
      ),
      title: "Instagram",
      description: `@${infos.instagramProfile}`,
    },
    card2: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-mail"
        >
          <rect width="20" height="16" x="2" y="4" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      ),
      title: "Email",
      description: `${infos.email}@${infos.domain}`,
    },
    card3: {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          fill="currentColor"
          className="bi bi-whatsapp"
          viewBox="0 0 16 16"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      ),
      title: "Whatsapp",
      description: `(${infos.phone.ddd}) ${infos.phone.firstPart}-${infos.phone.secondPart}`,
    },
  },
  footer: {
    copyrightLine: `© ${currentYear} ${infos.name}. Todos os direitos reservados.`,
    disclaimer: `Este site não é um produto Meta Platforms, Inc., Google LLC, tampouco oferece serviços públicos oficiais. ${infos.name} oferece serviços jurídicos privativos de advogado, de acordo com a legislação vigente e o Código de Ética e Disciplina da Ordem dos Advogados do Brasil.`,
  },
  links: {
    instagram: `https://www.instagram.com/${infos.instagramProfile}/`,
    ctaWhatsapp: `https://wa.me/+55${infos.phone.ddd}${infos.phone.firstPart}${infos.phone.secondPart}?text=${infos.whatsappDefaultMessage}`,
  },
};

export default contentLp01;
