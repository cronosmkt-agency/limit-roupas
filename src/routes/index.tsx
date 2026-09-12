import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShoppingBag,
  Sparkles,
  CheckCircle2,
  Clock,
  MapPin,
  Phone,
  MessageCircle,
  ChevronDown,
  Star,
  ArrowRight,
  Menu,
  X,
  Send,
  Package,
  Truck,
  CreditCard,
  Crown,
  Heart,
  Eye,
  Check,
  Tag,
  Layers,
  Shirt
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LimitBoutiqueLandingPage,
});

export default function LimitBoutiqueLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);
  const [activeTab, setActiveTab] = useState<"todos" | "masculino" | "feminino" | "inverno" | "acessorios">("todos");

  // Form State - Malinha Condicional / Atendimento
  const [clientName, setClientName] = useState("");
  const [desiredCategory, setDesiredCategory] = useState("Moda Masculina Premium (Camisas / Polos / Calças)");
  const [clientSize, setClientSize] = useState("Tamanho M / Calça 40");
  const [serviceType, setServiceType] = useState("Malinha Condicional em Domicílio (Teresópolis)");
  const [notes, setNotes] = useState("");

  const phone = "552127421525";
  const phoneDisplay = "(21) 2742-1525";
  const address = "R. Duque de Caxias, 147 - Várzea, Teresópolis - RJ, 25953-390";
  const addressComplement = "Rua comercial charmosa e tradicional no coração da Várzea";
  const hours = "Segunda a Sábado das 09:00 às 18:00";

  const defaultWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Vim pelo site da Limit Boutique e gostaria de atendimento e informações sobre as coleções."
  )}`;

  const condicionalWhatsAppLink = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Olá! Gostaria de solicitar uma Malinha Condicional da Limit Boutique para provar looks em casa."
  )}`;

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Olá, Equipe Limit Boutique! Vim pelo site oficial da loja.

*Nome:* ${clientName || "Não informado"}
*Linha Desejada:* ${desiredCategory}
*Tamanho / Numeração:* ${clientSize}
*Modalidade:* ${serviceType}
${notes ? `*Preferências de Estilo:* ${notes}` : ""}

Gostaria de ver peças disponíveis e agendar o atendimento!`;

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const collections = [
    {
      id: "moda-masculina",
      category: "masculino",
      title: "Moda Masculina Premium",
      subtitle: "Casual Chic & Alfaiataria Nobre",
      desc: "Camisas sociais em puro linho e algodão egípcio, polos clássicas em algodão pima, calças de sarja, bermudas de alfaiataria e jeans de grifes consagradas com caimento milimétrico.",
      highlights: ["Tecidos nobres e respiráveis", "Modelagens slim e clássicas", "Peças duráveis para trabalho e eventos", "Marcas conceituadas do mercado"],
      badge: "Masculino",
      featured: true
    },
    {
      id: "moda-feminina",
      category: "feminino",
      title: "Moda Feminina Contemporânea",
      subtitle: "Elegância fluida e sofisticação",
      desc: "Vestidos fluidos, blazers de corte estruturado, calças pantalonas, camisas em viscose premium e conjuntos versáteis para reuniões de trabalho, jantares e passeios na serra.",
      highlights: ["Caimento impecável e acabamento luxuoso", "Cores e estampas da estação", "Versatilidade do dia à noite", "Curadoria exclusiva e atemporal"],
      badge: "Feminino",
      featured: true
    },
    {
      id: "inverno-serrano",
      category: "inverno",
      title: "Coleção Inverno Serrano & Casacos",
      subtitle: "Aquecimento sofisticado para Teresópolis",
      desc: "Casacos de lã batida, jaquetas corta-vento de grife, cardigãs, sobretudos e tricots pesados com tramas refinadas, combinando proteção térmica com estilo cosmopolita.",
      highlights: ["Lãs e tricots de alta gramatura", "Corta-ventos e jaquetas acolchoadas", "Design europeu contemporâneo", "Essencial para as noites da serra"],
      badge: "Inverno Serrano",
      featured: true
    },
    {
      id: "acessorios-grife",
      category: "acessorios",
      title: "Acessórios & Couro Legítimo",
      subtitle: "Os detalhes que definem a sua presença",
      desc: "Cintos masculinos e femininos em couro legítimo com fivelas nobres, carteiras compactas, bolsas estruturadas e calçados selecionados para arrematar o visual com personalidade.",
      highlights: ["Couro legítimo selecionado", "Metais com banho antiferrugem", "Durabilidade e requinte nos detalhes", "Presentes perfeitos e refinados"],
      badge: "Acessórios",
      featured: false
    },
    {
      id: "malinha-vip",
      category: "todos",
      title: "Serviço de Malinha Condicional",
      subtitle: "A boutique inteira na sua casa",
      desc: "Converse com nossas consultoras de moda pelo WhatsApp, escolha estilos e numerações e receba uma mala personalizada no seu endereço para provar com calma e ficar só com o que amar.",
      highlights: ["Prove sem pressa no seu espelho", "Combine com as roupas do seu closet", "Entrega rápida em Teresópolis", "Total conforto e privacidade"],
      badge: "Experiência VIP",
      featured: true
    }
  ];

  const filteredCollections = activeTab === "todos"
    ? collections
    : collections.filter(c => c.category === activeTab);

  const testimonials = [
    {
      name: "Marcelo M. Soares",
      role: "Local Guide · Google Maps",
      quote: "Boas marcas... ótimo atendimento... agilidade... fui muito bem atendido... A loja tem excelente variedade e peças que realmente duram anos no armário!",
      rating: 5,
      detail: "Cliente Satisfeito"
    },
    {
      name: "Gamer Mascarado",
      role: "Local Guide com 213 avaliações · Google Maps",
      quote: "Excelente loja com ótimas marcas de grife. E o atendimento é excelente! Recomendo a todos em Teresópolis que buscam roupas de bom gosto.",
      rating: 5,
      detail: "Avaliação 5 Estrelas"
    },
    {
      name: "Cliente Google",
      role: "Avaliação Verificada · Google Maps",
      quote: "Ótima localização na Duque de Caxias com variedade incrível de peças. O serviço de entrega e condicional facilita muito quem tem a rotina corrida!",
      rating: 5,
      detail: "Serviço Condicional"
    }
  ];

  const boutiqueBenefits = [
    {
      icon: Crown,
      title: "Curadoria Oficial de Grifes",
      desc: "Roupas e acessórios autênticos das marcas mais admiradas da moda nacional e internacional."
    },
    {
      icon: Package,
      title: "Malinha Condicional em Casa",
      desc: "Experimente com calma no conforto do seu quarto e combine com as roupas do seu closet."
    },
    {
      icon: Truck,
      title: "Entrega Rápida em Teresópolis",
      desc: "Agilidade no envio para seu endereço no mesmo dia por motoboy dedicado."
    },
    {
      icon: CreditCard,
      title: "Parcelamento Sem Juros",
      desc: "Facilidade de pagamento no cartão de crédito em até 6x sem acréscimo."
    }
  ];

  const condicionalSteps = [
    {
      step: "01",
      title: "Escolha pelo WhatsApp",
      desc: "Converse com nossas consultoras, indique seus gostos, cores favoritas e numeração de roupas e calçados."
    },
    {
      step: "02",
      title: "Preparamos sua Malinha",
      desc: "Montamos uma seleção exclusiva de looks, peças coordenadas e tamanhos exatos para você provar."
    },
    {
      step: "03",
      title: "Entrega no Seu Endereço",
      desc: "Enviamos a mala lacrada até a sua casa em Teresópolis com toda a comodidade e discrição."
    },
    {
      step: "04",
      title: "Fique com o que Amar",
      desc: "Experimente no seu tempo, devolva o que não servir e acerte apenas as peças que você escolheu levar."
    }
  ];

  const faqList = [
    {
      q: "Como funciona o serviço de Malinha Condicional?",
      a: "É muito simples: você nos chama no WhatsApp (21) 2742-1525, informa as peças de seu interesse e suas numerações. Nossa equipe prepara uma seleção personalizada e envia até sua casa em Teresópolis. Você tem até 24h para provar com calma e depois acertar apenas o que decidir ficar."
    },
    {
      q: "Quais marcas de grife encontro na Limit Boutique?",
      a: "Trabalhamos com uma curadoria refinada de grifes nacionais conceituadas de moda masculina e feminina, focando em marcas de alto padrão em camisaria, linho, jeanswear e tricots de inverno serrano."
    },
    {
      q: "Vocês realizam entregas em toda a cidade de Teresópolis?",
      a: "Sim! Atendemos entregas rápidas via portador/motoboy para todos os bairros de Teresópolis (Várzea, Alto, Comary, Agriões, Granja Guarani, etc.)."
    },
    {
      q: "Posso encomendar tamanhos ou modelos que acabaram na loja?",
      a: "Sim! Se você gostou de uma peça da coleção e precisa de uma numeração específica, nossas consultoras verificam com os fornecedores e encomendam para você com prioridade."
    },
    {
      q: "Onde fica a loja física da Limit Boutique?",
      a: "Estamos localizados na charmosa Rua Duque de Caxias, 147, no centro da Várzea em Teresópolis - RJ. Um ponto comercial tradicional, agradável e de fácil acesso."
    },
    {
      q: "Quais são as formas de pagamento aceitas?",
      a: "Aceitamos cartões de crédito (com parcelamento em até 6x sem juros), cartões de débito e PIX com desconto à vista."
    }
  ];

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 selection:bg-amber-100 selection:text-amber-900 pb-24 lg:pb-0">
      
      {/* 1. TOP BAR EDITORIAL */}
      <div className="border-b border-zinc-200 bg-[#0A0A0A] px-4 py-2 text-xs text-zinc-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="font-medium text-zinc-200 tracking-wide">
              Boutique de Grifes Multimarcas · R. Duque de Caxias, 147 (Várzea)
            </span>
          </div>
          <div className="hidden items-center gap-6 sm:flex">
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Clock className="h-3.5 w-3.5 text-[#D4AF37]" />
              Seg a Sáb: 09h às 18h
            </span>
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-1.5 font-bold text-[#D4AF37] hover:underline"
            >
              <Phone className="h-3.5 w-3.5" />
              {phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* 2. HEADER NAVBAR - SEM ÍCONE (APENAS O NOME DO CLIENTE) */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          
          {/* Brand Name ONLY - NO ICON AS REQUESTED */}
          <a href="#" className="flex flex-col">
            <span className="font-['Outfit',sans-serif] text-xl font-extrabold tracking-wider text-black sm:text-2xl uppercase">
              Limit <span className="font-light tracking-widest text-[#B48C56]">Boutique</span>
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-zinc-500 uppercase sm:text-xs">
              Grifes & Alta Moda Multimarcas · Duque de Caxias
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-7 md:flex">
            <a href="#colecoes" className="text-sm font-semibold text-zinc-700 transition hover:text-[#B48C56]">
              Coleções
            </a>
            <a href="#condicional" className="text-sm font-semibold text-zinc-700 transition hover:text-[#B48C56]">
              Malinha Condicional
            </a>
            <a href="#vantagens" className="text-sm font-semibold text-zinc-700 transition hover:text-[#B48C56]">
              Diferenciais
            </a>
            <a href="#avaliacoes" className="text-sm font-semibold text-zinc-700 transition hover:text-[#B48C56]">
              Depoimentos
            </a>
            <a href="#loja" className="text-sm font-semibold text-zinc-700 transition hover:text-[#B48C56]">
              A Loja
            </a>
            <a href="#faq" className="text-sm font-semibold text-zinc-700 transition hover:text-[#B48C56]">
              Dúvidas
            </a>
          </nav>

          {/* Right Action Button */}
          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#condicional"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0A0A0A] px-5 py-2.5 text-xs font-bold text-white shadow-md transition-all hover:bg-zinc-800 active:scale-95 uppercase tracking-wider"
            >
              <Package className="h-4 w-4 text-[#D4AF37]" />
              Pedir Malinha em Casa
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-800 md:hidden hover:bg-zinc-100 transition"
            aria-label="Abrir Menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5 text-black" /> : <Menu className="h-5 w-5 text-black" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="border-b border-zinc-200 bg-white px-6 py-6 md:hidden shadow-lg">
            <div className="flex flex-col gap-4">
              <a
                href="#colecoes"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-zinc-800 hover:text-[#B48C56]"
              >
                Coleções da Estação
              </a>
              <a
                href="#condicional"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-zinc-800 hover:text-[#B48C56]"
              >
                A Experiência da Malinha Condicional
              </a>
              <a
                href="#vantagens"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-zinc-800 hover:text-[#B48C56]"
              >
                Vantagens da Boutique
              </a>
              <a
                href="#avaliacoes"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-zinc-800 hover:text-[#B48C56]"
              >
                Avaliações de Clientes
              </a>
              <a
                href="#loja"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-zinc-800 hover:text-[#B48C56]"
              >
                Onde Fica na Duque de Caxias
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-zinc-800 hover:text-[#B48C56]"
              >
                Perguntas Frequentes
              </a>
              <a
                href={defaultWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#0A0A0A] py-3 text-sm font-bold text-white uppercase tracking-wider shadow-md"
              >
                <MessageCircle className="h-4 w-4 text-[#D4AF37]" />
                Atendimento no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. HERO SECTION */}
      <section className="relative overflow-hidden py-14 md:py-24 bg-gradient-to-b from-zinc-50 via-white to-[#FDFDFD]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            
            {/* Left Column */}
            <div className="lg:col-span-7 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-50/70 px-4 py-1.5 text-xs font-semibold text-amber-900">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                </div>
                <span className="font-bold">Avaliação 4,5 no Google Maps · Curadoria Oficial de Grifes</span>
              </div>

              <h1 className="mt-6 font-['Outfit',sans-serif] text-4xl font-extrabold tracking-tight text-black sm:text-5xl lg:text-6xl leading-[1.12]">
                A elegância das melhores grifes com a curadoria exclusiva da{" "}
                <span className="bg-gradient-to-r from-[#B48C56] via-[#D4AF37] to-[#8C6D3F] bg-clip-text text-transparent">
                  Limit Boutique.
                </span>
              </h1>

              <p className="mt-6 text-base leading-relaxed text-zinc-600 sm:text-lg">
                Não precisa descer a serra para se vestir bem. No centro da Várzea, na <strong className="text-zinc-900">Rua Duque de Caxias, 147</strong>, você encontra as marcas mais desejadas da moda masculina, feminina e casacos de inverno. Ou receba a nossa <strong className="text-zinc-900">Malinha Condicional</strong> para provar os looks com calma em casa.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                <a
                  href="#condicional"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#0A0A0A] px-7 py-4 text-base font-bold text-white shadow-xl transition-all hover:bg-zinc-800 active:scale-95 uppercase tracking-wider"
                >
                  <Package className="h-5 w-5 text-[#D4AF37]" />
                  Pedir Malinha Condicional
                </a>
                <a
                  href="#colecoes"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-7 py-4 text-base font-semibold text-zinc-800 shadow-sm transition-all hover:bg-zinc-50"
                >
                  Ver Coleções da Estação
                  <ArrowRight className="h-4 w-4 text-zinc-500" />
                </a>
              </div>

              {/* 3 Indicadores Rápidos */}
              <div className="mt-10 grid grid-cols-3 gap-3 border-t border-zinc-200 pt-6 text-left">
                <div className="rounded-xl border border-zinc-200 bg-white p-3.5 shadow-sm">
                  <span className="font-['Outfit',sans-serif] text-xl font-extrabold text-[#B48C56] sm:text-2xl block">
                    Grifes
                  </span>
                  <span className="text-[11px] font-medium leading-tight text-zinc-500 block mt-0.5">
                    Marcas Originais Selecionadas
                  </span>
                </div>
                <div className="rounded-xl border border-zinc-200 bg-white p-3.5 shadow-sm">
                  <span className="font-['Outfit',sans-serif] text-xl font-extrabold text-black sm:text-2xl block">
                    Em Casa
                  </span>
                  <span className="text-[11px] font-medium leading-tight text-zinc-500 block mt-0.5">
                    Malinha Condicional VIP
                  </span>
                </div>
                <div className="rounded-xl border border-zinc-200 bg-white p-3.5 shadow-sm">
                  <span className="font-['Outfit',sans-serif] text-xl font-extrabold text-[#B48C56] sm:text-2xl block">
                    Nº 147
                  </span>
                  <span className="text-[11px] font-medium leading-tight text-zinc-500 block mt-0.5">
                    Rua Duque de Caxias (Várzea)
                  </span>
                </div>
              </div>

            </div>

            {/* Right Column - Card de Estilo e Atendimento */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-zinc-200 bg-white p-7 shadow-xl">
                
                <div className="flex items-center justify-between border-b border-zinc-100 pb-5">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#B48C56]">
                      Boutique de Confiança
                    </span>
                    <h3 className="text-lg font-bold text-black mt-0.5">
                      Por que escolher a Limit?
                    </h3>
                  </div>
                  <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-[11px] font-bold text-amber-900">
                    Moda & Sofisticação
                  </span>
                </div>

                <div className="space-y-4 py-6">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900">Atendimento Consultivo e Ágil</h4>
                      <p className="text-xs leading-relaxed text-zinc-600 mt-0.5">
                        Nossa equipe conhece caimentos e tendências, indicando composições perfeitas para seu biotipo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900">Experimente Roupas no Seu Quarto</h4>
                      <p className="text-xs leading-relaxed text-zinc-600 mt-0.5">
                        Sem pressa, sem provadores apertados. A malinha condicional leva o shopping até você.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900">Casacos & Malhas Para o Clima da Serra</h4>
                      <p className="text-xs leading-relaxed text-zinc-600 mt-0.5">
                        Tricots encorpados e jaquetas de alta gramatura perfeitos para as noites frias de Teresópolis.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-50 border border-amber-200 text-amber-700">
                      <Check className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-zinc-900">Parcelamento em até 6x Sem Juros</h4>
                      <p className="text-xs leading-relaxed text-zinc-600 mt-0.5">
                        Facilidade no cartão para montar seu lookbook completo com as melhores marcas.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4 text-center">
                  <p className="text-xs text-zinc-600">
                    Quer ver os lançamentos da semana em primeira mão?
                  </p>
                  <a
                    href={defaultWhatsAppLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2.5 inline-flex items-center justify-center gap-2 w-full rounded-xl bg-[#0A0A0A] hover:bg-zinc-800 py-2.5 text-xs font-bold text-white transition shadow-sm"
                  >
                    <MessageCircle className="h-4 w-4 text-[#D4AF37]" />
                    Chamar Consultora de Estilo no WhatsApp
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. BARRA DE DIFERENCIAIS DA BOUTIQUE */}
      <section id="vantagens" className="border-y border-zinc-200 bg-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {boutiqueBenefits.map((b, idx) => {
              const BenefitIcon = b.icon;
              return (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-zinc-50/70 border border-zinc-200/80">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white border border-zinc-200 text-[#B48C56] shadow-sm">
                    <BenefitIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900">{b.title}</h4>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. A EXPERIÊNCIA DA MALINHA CONDICIONAL (SOLUÇÃO CENTRAL) */}
      <section id="condicional" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-50 px-4 py-1 text-xs font-bold uppercase tracking-wider text-amber-900">
              <Package className="h-3.5 w-3.5 text-[#B48C56]" />
              Conforto Total em Domicílio
            </span>
            <h2 className="mt-3 font-['Outfit',sans-serif] text-3xl font-extrabold text-black sm:text-4xl">
              Como Funciona a Malinha Condicional da Limit
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              Você não precisa perder tempo no trânsito ou se cansar em provadores. Receba uma mala com peças exclusivas na sua casa em 4 passos simples:
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {condicionalSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm hover:shadow-md transition group"
              >
                <span className="font-['Outfit',sans-serif] text-3xl font-black text-zinc-200 group-hover:text-[#B48C56]/40 transition absolute top-5 right-5">
                  {step.step}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-[#B48C56] font-bold text-sm border border-amber-200/60">
                  {idx + 1}
                </div>
                <h3 className="mt-5 text-base font-bold text-black">{step.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-zinc-600">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={condicionalWhatsAppLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0A0A0A] px-8 py-4 text-base font-bold text-white shadow-xl hover:bg-zinc-800 transition uppercase tracking-wider"
            >
              <Package className="h-5 w-5 text-[#D4AF37]" />
              Solicitar Minha Malinha Condicional no WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 6. VITRINE LOOKBOOK (COM ABAS/FILTROS DINÂMICOS) */}
      <section id="colecoes" className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B48C56]">
              Curadoria de Grifes
            </span>
            <h2 className="mt-2 font-['Outfit',sans-serif] text-3xl font-extrabold text-black sm:text-4xl">
              Coleções & Linhas da Estação
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              Peças selecionadas para valorizar o seu estilo em ocasiões formais ou momentos de lazer.
            </p>
          </div>

          {/* Abas */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {[
              { id: "todos", label: "Todas as Peças" },
              { id: "masculino", label: "Moda Masculina" },
              { id: "feminino", label: "Moda Feminina" },
              { id: "inverno", label: "Inverno Serrano" },
              { id: "acessorios", label: "Acessórios & Couro" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                  activeTab === tab.id
                    ? "bg-[#0A0A0A] text-white shadow-md"
                    : "border border-zinc-200 bg-white text-zinc-600 hover:text-black"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid de Coleções */}
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCollections.map((c) => (
              <div
                key={c.id}
                className={`flex flex-col justify-between rounded-3xl border p-7 transition-all bg-white ${
                  c.featured
                    ? "border-amber-300 shadow-lg ring-1 ring-amber-400/20"
                    : "border-zinc-200 shadow-sm"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-amber-50 border border-amber-200 px-3 py-1 text-xs font-bold text-amber-900">
                      {c.badge}
                    </span>
                    {c.featured && (
                      <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                        <CheckCircle2 className="h-3.5 w-3.5" /> Coleção Disponível
                      </span>
                    )}
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-black">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-xs font-semibold text-[#B48C56]">
                    {c.subtitle}
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-zinc-600">
                    {c.desc}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-zinc-100 pt-4">
                    {c.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-zinc-700">
                        <Check className="h-3.5 w-3.5 text-[#B48C56] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-100">
                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent(
                      `Olá! Gostaria de ver fotos e tamanhos disponíveis para a coleção: ${c.title} na Limit Boutique.`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between rounded-xl bg-zinc-50 hover:bg-[#0A0A0A] hover:text-white p-3 text-xs font-bold text-zinc-800 transition group border border-zinc-200"
                  >
                    <span>Consultar {c.badge} no WhatsApp</span>
                    <ArrowRight className="h-4 w-4 text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. MURAL DE DEPOIMENTOS REAIS DO GOOGLE MAPS */}
      <section id="avaliacoes" className="border-t border-zinc-200 bg-[#FDFDFD] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-1 text-amber-400">
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
              <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
            </div>
            <h2 className="mt-3 font-['Outfit',sans-serif] text-3xl font-extrabold text-black sm:text-4xl">
              Depoimentos de Nossos Clientes
            </h2>
            <p className="mt-2 text-sm text-[#B48C56] font-bold">
              Avaliações reais de agilidade e excelência no Google Maps
            </p>
            <p className="mt-1 text-xs text-zinc-500 italic">
              "Boas marcas, ótimo atendimento, agilidade e atendimento de primeira!"
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1 text-amber-400">
                      {[...Array(t.rating)].map((_, rIdx) => (
                        <Star key={rIdx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="rounded-full bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700">
                      Verificado
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-zinc-700 italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-8 border-t border-zinc-100 pt-4">
                  <span className="block text-sm font-bold text-black">
                    {t.name}
                  </span>
                  <span className="block text-xs text-zinc-500">
                    {t.role}
                  </span>
                  <span className="mt-1 block text-[11px] font-semibold text-[#B48C56]">
                    {t.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Banner de Atendimento WhatsApp */}
          <div className="mt-12 rounded-2xl border border-zinc-200 bg-white p-6 text-center sm:text-left sm:flex sm:items-center sm:justify-between sm:p-8 shadow-sm">
            <div>
              <h4 className="text-base font-bold text-black sm:text-lg">
                Procurando um look específico para evento ou casamento na serra?
              </h4>
              <p className="mt-1 text-xs text-zinc-600">
                Nossas consultoras montam sugestões em tempo real pelo WhatsApp com fotos das peças.
              </p>
            </div>
            <a
              href={defaultWhatsAppLink}
              target="_blank"
              rel="noreferrer"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 rounded-xl bg-[#0A0A0A] px-5 py-3 text-xs font-bold text-white transition hover:bg-zinc-800 shrink-0 shadow-md uppercase tracking-wider"
            >
              <MessageCircle className="h-4 w-4 text-[#D4AF37]" />
              Falar com Consultora de Estilo
            </a>
          </div>

        </div>
      </section>

      {/* 8. LOCALIZAÇÃO CHARMOSA NA DUQUE DE CAXIAS */}
      <section id="loja" className="py-20 md:py-28 bg-white border-t border-zinc-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            
            {/* Left Column */}
            <div className="lg:col-span-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B48C56]">
                Nossa Boutique Física
              </span>
              <h2 className="mt-2 font-['Outfit',sans-serif] text-3xl font-extrabold text-black sm:text-4xl">
                Rua Duque de Caxias, 147 — Várzea
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-700">
                A <strong className="text-black">Limit Boutique</strong> está localizada na charmosa e arborizada <strong className="text-black">Rua Duque de Caxias</strong>, um dos endereços de compras mais tradicionais e elegantes de Teresópolis.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                Um ambiente acolhedor, climatizado e com atendimento atencioso para você tomar um café e escolher suas roupas de grife com tranquilidade.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-[#B48C56] border border-amber-200">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-black">Endereço da Boutique</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">{address}</p>
                    <p className="text-[11px] font-semibold text-[#B48C56] mt-0.5">{addressComplement}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-[#B48C56] border border-amber-200">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-black">Horário de Atendimento</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">{hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-50 text-[#B48C56] border border-amber-200">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-black">Telefone Fixo / WhatsApp</h4>
                    <p className="text-xs text-zinc-600 mt-0.5">{phoneDisplay}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    "Limit R. Duque de Caxias 147 Várzea Teresópolis RJ"
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-5 py-3 text-xs font-bold text-zinc-800 hover:bg-zinc-50 transition shadow-sm"
                >
                  <MapPin className="h-4 w-4 text-[#B48C56]" />
                  Abrir Rota no Google Maps
                </a>
              </div>
            </div>

            {/* Right Column: Google Maps Embed */}
            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-xl">
                <div className="border-b border-zinc-100 bg-zinc-50 px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-zinc-300" />
                    <span className="h-3 w-3 rounded-full bg-zinc-300" />
                    <span className="h-3 w-3 rounded-full bg-zinc-300" />
                  </div>
                  <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider">
                    Duque de Caxias, 147 · Várzea
                  </span>
                </div>
                <div className="h-[340px] w-full bg-zinc-100">
                  <iframe
                    title="Mapa Limit Boutique"
                    src="https://maps.google.com/maps?q=Rua+Duque+de+Caxias,+147+-+V%C3%A1rzea,+Teres%C3%B3polis+-+RJ&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    className="h-full w-full border-0 contrast-105 opacity-95 hover:opacity-100 transition duration-300"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. SIMULADOR DE PEDIDO / MALINHA NO WHATSAPP */}
      <section className="border-t border-zinc-200 bg-[#FAF8F5] py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="rounded-3xl border border-zinc-200 bg-white p-7 sm:p-10 shadow-xl">
            
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-50 px-4 py-1 text-xs font-bold uppercase tracking-wider text-amber-900">
                <Package className="h-3.5 w-3.5 text-[#B48C56]" />
                Atendimento Rápido
              </span>
              <h2 className="mt-3 font-['Outfit',sans-serif] text-2xl font-extrabold text-black sm:text-3xl">
                Monte Seu Pedido ou Malinha Condicional
              </h2>
              <p className="mt-2 text-xs text-zinc-600 sm:text-sm">
                Indique suas preferências e receba a consultoria exclusiva das nossas vendedoras pelo WhatsApp:
              </p>
            </div>

            <form onSubmit={handleWhatsAppSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                    Seu Nome Completo:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Fernanda Lima"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-50/50 px-4 py-3 text-sm text-black placeholder:text-zinc-400 outline-none focus:border-[#B48C56] focus:ring-1 focus:ring-[#B48C56] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                    Linha Desejada:
                  </label>
                  <select
                    value={desiredCategory}
                    onChange={(e) => setDesiredCategory(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-50/50 px-4 py-3 text-sm text-black outline-none focus:border-[#B48C56] focus:ring-1 focus:ring-[#B48C56] transition"
                  >
                    <option value="Moda Masculina Premium (Camisas / Polos / Calças)">Moda Masculina Premium (Camisas / Polos / Calças)</option>
                    <option value="Moda Feminina Contemporânea (Vestidos / Alfaiataria)">Moda Feminina Contemporânea (Vestidos / Alfaiataria)</option>
                    <option value="Casacos de Inverno & Tricots Pesados">Casacos de Inverno & Tricots Pesados</option>
                    <option value="Acessórios & Couro Legítimo">Acessórios & Couro Legítimo</option>
                    <option value="Malinha Condicional Mista">Malinha Condicional Mista</option>
                  </select>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                    Seu Tamanho / Numeração:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Tamanho M / Calça 40"
                    value={clientSize}
                    onChange={(e) => setClientSize(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-50/50 px-4 py-3 text-sm text-black placeholder:text-zinc-400 outline-none focus:border-[#B48C56] focus:ring-1 focus:ring-[#B48C56] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                    Modalidade de Atendimento:
                  </label>
                  <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-50/50 px-4 py-3 text-sm text-black outline-none focus:border-[#B48C56] focus:ring-1 focus:ring-[#B48C56] transition"
                  >
                    <option value="Malinha Condicional em Domicílio (Teresópolis)">Malinha Condicional em Domicílio (Teresópolis)</option>
                    <option value="Experimentar na Loja Física (Duque de Caxias)">Experimentar na Loja Física (Duque de Caxias)</option>
                    <option value="Compra Rápida com Entrega via Motoboy">Compra Rápida com Entrega via Motoboy</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700">
                  Preferências de Estilo ou Cores (Opcional):
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Procuro camisa social para formatura em tons claros..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-zinc-300 bg-zinc-50/50 px-4 py-3 text-sm text-black placeholder:text-zinc-400 outline-none focus:border-[#B48C56] focus:ring-1 focus:ring-[#B48C56] transition"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0A0A0A] py-4 text-sm font-bold text-white shadow-xl hover:bg-zinc-800 transition active:scale-98 uppercase tracking-wider"
              >
                <Send className="h-4 w-4 text-[#D4AF37]" />
                Enviar Pedido no WhatsApp da Limit
              </button>

              <p className="text-center text-[11px] text-zinc-500">
                Atendimento rápido de segunda a sábado: {phoneDisplay}
              </p>
            </form>

          </div>
        </div>
      </section>

      {/* 10. FAQ ACCORDION */}
      <section id="faq" className="py-20 md:py-28 bg-white border-t border-zinc-200">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-[#B48C56]">
              Tire Suas Dúvidas
            </span>
            <h2 className="mt-2 font-['Outfit',sans-serif] text-3xl font-extrabold text-black sm:text-4xl">
              Perguntas Frequentes
            </h2>
            <p className="mt-3 text-base text-zinc-600">
              Informações sobre a malinha condicional, formas de pagamento e localização.
            </p>
          </div>

          <div className="mt-12 space-y-4">
            {faqList.map((item, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-50/50 shadow-sm transition-all"
              >
                <button
                  onClick={() => setFaqOpen(faqOpen === idx ? null : idx)}
                  className="flex w-full items-center justify-between p-5 text-left font-['Outfit',sans-serif] text-base font-bold text-black hover:text-[#B48C56] transition-colors"
                >
                  <span className="pr-4">{item.q}</span>
                  <ChevronDown
                    className={`h-4 w-4 text-[#B48C56] shrink-0 transition-transform duration-200 ${
                      faqOpen === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {faqOpen === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-zinc-600 border-t border-zinc-200/60 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 11. FOOTER - SEM ÍCONE */}
      <footer className="border-t border-zinc-200 bg-[#0A0A0A] text-white py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Coluna 1: Nome Sem Ícone */}
            <div>
              <span className="font-['Outfit',sans-serif] text-xl font-extrabold tracking-wider text-white block uppercase">
                Limit <span className="font-light tracking-widest text-[#D4AF37]">Boutique</span>
              </span>
              <span className="text-xs font-semibold text-zinc-400 block mt-0.5 uppercase tracking-wider">
                Grifes & Alta Moda Multimarcas
              </span>
              <p className="mt-3 text-xs leading-relaxed text-zinc-400">
                Curadoria exclusiva das melhores grifes masculinas, femininas e peças de inverno. Serviço de malinha condicional e atendimento na Duque de Caxias, 147.
              </p>
            </div>

            {/* Coluna 2: Endereço */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-[#D4AF37] uppercase">
                Onde Estamos
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-zinc-300">
                {address}
              </p>
              <p className="mt-1 text-xs text-[#D4AF37] font-medium">
                {addressComplement}
              </p>
            </div>

            {/* Coluna 3: Horários */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-[#D4AF37] uppercase">
                Horário da Loja
              </h4>
              <p className="mt-3 text-xs leading-relaxed text-zinc-300">
                Segunda a Sábado: 09:00 às 18:00
              </p>
              <p className="text-xs text-zinc-400 mt-1">
                Domingos: Fechado
              </p>
            </div>

            {/* Coluna 4: Contato */}
            <div>
              <h4 className="text-xs font-bold tracking-wider text-[#D4AF37] uppercase">
                Atendimento & Condicional
              </h4>
              <p className="mt-3 text-xs text-zinc-400">Telefone / WhatsApp:</p>
              <a
                href={defaultWhatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="mt-1 block text-sm font-bold text-[#D4AF37] hover:underline"
              >
                {phoneDisplay}
              </a>
              <p className="mt-1 text-[11px] text-emerald-400 font-medium">
                Entregas rápidas em Teresópolis
              </p>
            </div>

          </div>

          <div className="mt-12 border-t border-zinc-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-zinc-500">
            <span>
              © {new Date().getFullYear()} Limit Boutique · Todos os direitos reservados.
            </span>
            <span>
              Desenvolvido com excelência por Cronos Agency
            </span>
          </div>
        </div>
      </footer>

      {/* 12. BARRA FIXA FLUTUANTE INFERIOR MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-zinc-200 bg-white/95 backdrop-blur-md px-4 py-3 lg:hidden shadow-2xl">
        <div className="flex items-center gap-3">
          <a
            href={`tel:${phone}`}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-zinc-200 text-black bg-zinc-50"
            aria-label="Ligar para a Loja"
          >
            <Phone className="h-5 w-5 text-[#B48C56]" />
          </a>
          <a
            href={condicionalWhatsAppLink}
            target="_blank"
            rel="noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#0A0A0A] py-3 text-sm font-bold text-white shadow-md active:scale-98 uppercase tracking-wider"
          >
            <Package className="h-4 w-4 text-[#D4AF37]" />
            Pedir Malinha no WhatsApp
          </a>
        </div>
      </div>


      {/* BOTÃO FLUTUANTE WHATSAPP - FECHAR COMPRA DO SITE COM A CRONOS */}
      <a
        href="https://wa.me/5521964639999?text=Ol%C3%A1%21%20Vim%20pelo%20site%20da%20Limit%20Boutique%20e%20gostaria%20de%20ver%20como%20funciona%20para%20fechar%20a%20compra%20dele%20com%20voc%C3%AA."
        target="_blank"
        rel="noreferrer"
        className="group fixed bottom-20 lg:bottom-6 right-5 sm:right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/50 transition-all duration-300 hover:scale-110 hover:bg-emerald-600 active:scale-95"
        aria-label="Falar sobre a compra deste site no WhatsApp"
        title="Falar sobre a compra deste site"
      >
        <span className="absolute -inset-1 animate-ping rounded-full bg-emerald-400 opacity-30 pointer-events-none" />
        <span className="absolute right-16 hidden rounded-xl bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white whitespace-nowrap opacity-0 shadow-xl transition-opacity group-hover:opacity-100 lg:block pointer-events-none">
          Comprar este site
        </span>
        <MessageCircle className="relative h-7 w-7" />
      </a>
    </div>
  );
}
