import {
  Shield,
  Key,
  Activity,
  Filter,
  Megaphone,
  BarChart,
  Headset,
  AlertOctagon,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Target,
  ListTodo,
  Car,
  MessageCircle
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#2e3585] selection:text-white pb-20">
      {/* Header / Brand Identity */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-full border-2 border-[#e32526] bg-gradient-to-br from-slate-100 to-slate-300 shadow-inner">
              <Shield className="absolute text-[#2e3585] w-8 h-8" strokeWidth={1.5} />
              <Car className="absolute text-[#e32526] w-5 h-5 mt-1" strokeWidth={2} />
            </div>
            <div className="flex items-center tracking-tighter text-3xl font-extrabold">
              <span className="text-[#2e3585]">CONFI</span>
              <span className="text-[#e32526]">AUTO</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        {/* Intro */}
        <div className="mb-10">
          <p className="text-sm text-slate-500 mb-2 font-medium">
            AEG aqui. Segue a versão organizada, mais limpa e profissional:
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#2e3585] tracking-tight uppercase border-l-8 border-[#e32526] pl-6 py-2">
            DIAGNÓSTICO INICIAL —<br />
            <span className="text-[#e32526]">CONFIAUTO</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* 1. Acessos e Estrutura das Contas */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="bg-[#2e3585] px-6 py-4 flex items-center gap-3">
              <Key className="text-white w-6 h-6" />
              <h2 className="text-xl font-bold text-white">1. Acessos e Estrutura das Contas</h2>
            </div>
            <div className="p-6 flex-1 flex flex-col gap-6">
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Status dos acessos:</h3>
                <ul className="space-y-2">
                  {[
                    { name: 'Meta Ads', status: 'OK' },
                    { name: 'Google Ads', status: 'OK' },
                    { name: 'Analytics', status: 'OK' },
                    { name: 'GTM', status: 'OK' },
                    { name: 'CRM', status: '' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-center justify-between bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="font-medium text-slate-700">{item.name}:</span>
                      {item.status ? (
                        <span className="flex items-center gap-1 text-sm font-bold text-emerald-600 bg-emerald-100 px-2 py-1 rounded-md">
                          <CheckCircle2 className="w-4 h-4" /> {item.status}
                        </span>
                      ) : (
                        <span className="text-slate-400 text-sm italic">Pendente/Vazio</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <h3 className="text-sm font-bold text-amber-800 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Pontos de atenção:
                </h3>
                <p className="text-sm text-amber-900 mb-2 font-medium">Necessário revisar e remover acessos antigos:</p>
                <ul className="list-disc list-inside text-sm text-amber-800 space-y-1 ml-2">
                  <li>Robert Birschener</li>
                  <li>Filipe Gomes</li>
                  <li>Assessoria Gama</li>
                  <li>Alan Oliveira</li>
                  <li>Gabriel Lyra (Gestor de Tráfego)</li>
                </ul>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-auto">
                <h3 className="text-sm font-bold text-red-800 uppercase tracking-wider mb-1 flex items-center gap-2">
                  <AlertOctagon className="w-4 h-4" /> Risco identificado:
                </h3>
                <p className="text-sm text-red-700 font-medium">
                  Excesso de usuários pode comprometer segurança e organização das contas.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Estrutura Técnica de Tracking */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="bg-[#2e3585] px-6 py-4 flex items-center gap-3">
              <Activity className="text-white w-6 h-6" />
              <h2 className="text-xl font-bold text-white">2. Estrutura Técnica de Tracking</h2>
            </div>
            <div className="p-6 flex-1 flex flex-col gap-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="mt-0.5 w-2 h-2 rounded-full bg-[#e32526] shrink-0"></div>
                  <span className="text-slate-700 leading-tight">
                    <strong className="font-semibold">Pixel:</strong> instalado, porém sem atividade recente
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                  <div className="mt-0.5 w-2 h-2 rounded-full bg-[#2e3585] shrink-0"></div>
                  <span className="text-slate-700 leading-tight">
                    <strong className="font-semibold">GTM:</strong> instalado
                  </span>
                </li>
              </ul>

              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-auto">
                <h3 className="text-sm font-bold text-red-800 uppercase tracking-wider mb-1 flex items-center gap-2">
                  <Target className="w-4 h-4" /> Diagnóstico:
                </h3>
                <p className="text-sm text-red-700 font-medium">
                  O tracking não está confiável, o que pode estar gerando perda de dados de conversão.
                </p>
              </div>
            </div>
          </section>

          {/* 3. Jornada do Usuário (Funil) */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col lg:col-span-2 xl:col-span-1">
            <div className="bg-[#2e3585] px-6 py-4 flex items-center gap-3">
              <Filter className="text-white w-6 h-6" />
              <h2 className="text-xl font-bold text-white">3. Jornada do Usuário (Funil)</h2>
            </div>
            <div className="p-6 flex-1 flex flex-col gap-6">
              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Fluxo identificado:</h3>
                <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-[#2e3585]">
                  <span className="bg-indigo-50 px-3 py-1.5 rounded-md border border-indigo-100">Anúncio</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  <span className="bg-indigo-50 px-3 py-1.5 rounded-md border border-indigo-100">Landing Page</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                  <span className="bg-indigo-50 px-3 py-1.5 rounded-md border border-indigo-100">Formulário</span>
                  <ArrowRight className="w-4 h-4 text-[#e32526]" />
                  <span className="bg-red-100 text-[#e32526] px-3 py-1.5 rounded-md border border-red-200 font-bold">interrupção</span>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Problema identificado:</h3>
                <ul className="space-y-2">
                  {[
                    'O usuário acessa a landing page',
                    'Tenta preencher a cotação',
                    'Não consegue concluir'
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#e32526]"></div>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Página analisada:</h3>
                <a href="https://vendasconfiauto.snstech.com.br/order" target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline break-all bg-blue-50 p-3 rounded-lg border border-blue-100 block">
                  https://vendasconfiauto.snstech.com.br/order
                </a>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-auto">
                <h3 className="text-sm font-bold text-red-800 uppercase tracking-wider mb-1 flex items-center gap-2">
                  <Target className="w-4 h-4" /> Diagnóstico:
                </h3>
                <p className="text-sm text-red-700 font-medium">
                  Existe um ponto de quebra direto no formulário, causando perda de leads antes da conversão.
                </p>
              </div>
            </div>
          </section>

          {/* 4. Auditoria de Campanhas */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col lg:col-span-2">
            <div className="bg-[#2e3585] px-6 py-4 flex items-center gap-3">
              <Megaphone className="text-white w-6 h-6" />
              <h2 className="text-xl font-bold text-white">4. Auditoria de Campanhas</h2>
            </div>
            <div className="p-6 flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Meta Ads */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-bold text-[#2e3585] border-b-2 border-slate-100 pb-2">Meta Ads:</h3>
                <ul className="space-y-2 flex-1">
                  {[
                    'Estrutura analisada',
                    'Conjuntos de anúncios duplicados',
                    'Campanhas com aprendizado limitado',
                    'Custo por lead elevado',
                    'UTMs desorganizadas'
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#e32526] shrink-0"></div>
                      <span className="text-sm">{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-auto">
                  <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Diagnóstico:</h4>
                  <p className="text-sm text-amber-900 font-medium">
                    Campanhas rodando sem otimização e sem leitura clara de dados.
                  </p>
                </div>
              </div>

              {/* Google Ads */}
              <div className="flex flex-col gap-4">
                <h3 className="text-lg font-bold text-[#2e3585] border-b-2 border-slate-100 pb-2">Google Ads:</h3>
                <ul className="space-y-2 flex-1">
                  {[
                    'Estrutura mais organizada em comparação ao Meta',
                    'Custo elevado',
                    'Baixa clareza de performance'
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#2e3585] shrink-0"></div>
                      <span className="text-sm">{text}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-auto">
                  <h4 className="text-xs font-bold text-amber-800 uppercase tracking-wider mb-1">Diagnóstico:</h4>
                  <p className="text-sm text-amber-900 font-medium">
                    Apesar de melhor estruturado, ainda apresenta ineficiência.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Leitura de Métricas */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col">
            <div className="bg-[#2e3585] px-6 py-4 flex items-center gap-3">
              <BarChart className="text-white w-6 h-6" />
              <h2 className="text-xl font-bold text-white">5. Leitura de Métricas</h2>
            </div>
            <div className="p-6 flex-1 flex flex-col gap-6">
              <ul className="space-y-3">
                {[
                  'Não há métrica confiável de conversão',
                  'Volume de leads abaixo do esperado para o investimento',
                  'Custo por lead elevado'
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <div className="mt-1 w-2 h-2 rounded-full bg-[#e32526] shrink-0"></div>
                    <span className="text-slate-700 font-medium">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-auto">
                <h3 className="text-sm font-bold text-red-800 uppercase tracking-wider mb-1 flex items-center gap-2">
                  <Target className="w-4 h-4" /> Diagnóstico:
                </h3>
                <p className="text-sm text-red-700 font-medium">
                  Atualmente não há visibilidade real de resultado, apenas de investimento.
                </p>
              </div>
            </div>
          </section>

          {/* 6. Atendimento e Operação */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col lg:col-span-2 xl:col-span-2">
            <div className="bg-[#2e3585] px-6 py-4 flex items-center gap-3">
              <Headset className="text-white w-6 h-6" />
              <h2 className="text-xl font-bold text-white">6. Atendimento e Operação</h2>
            </div>
            <div className="p-6 flex-1 flex flex-col gap-6">
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 h-full">
                {/* Text Content */}
                <div className="flex flex-col gap-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { text: 'Cliente oculto realizado', type: 'success' },
                      { text: 'Tempo de resposta inadequado (> 1 hora)', type: 'error' },
                      { text: 'Abordagem inicial adequada', type: 'success' },
                      { text: 'Existe padrão de atendimento', type: 'success' },
                      { text: 'Podemos melhorar a cadência de tentativas', type: 'warning' }
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100">
                        {item.type === 'success' && <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />}
                        {item.type === 'error' && <AlertOctagon className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />}
                        {item.type === 'warning' && <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />}
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <h3 className="text-sm font-bold text-amber-800 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4" /> Ponto de atenção:
                    </h3>
                    <p className="text-sm text-amber-900 font-medium">
                      O lead não chega com consistência devido a falhas anteriores no funil.
                    </p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mt-auto">
                    <h3 className="text-sm font-bold text-blue-800 uppercase tracking-wider mb-1 flex items-center gap-2">
                      <Target className="w-4 h-4" /> Diagnóstico:
                    </h3>
                    <p className="text-sm text-blue-900 font-medium">
                      O problema principal não está no atendimento, mas sim nas etapas anteriores.
                    </p>
                  </div>
                </div>

                {/* Image Gallery / Chat Replicas */}
                <div className="flex flex-col overflow-hidden bg-slate-50 rounded-xl border border-slate-100 p-4">
                  <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <MessageCircle className="w-4 h-4" /> Evidências - Cliente Oculto
                  </h3>
                  <div className="flex overflow-x-auto gap-4 pb-4 snap-x" style={{ scrollbarWidth: 'thin' }}>
                    {[
                      {
                        contactName: "+55 27 98886-8331",
                        contactRole: "~consultora Maria Eduarda",
                        avatarColor: "bg-red-500",
                        messages: [
                          { text: "Olá Wayslanne, tudo bem?", time: "10:59", isSender: false },
                          { text: "▶ 🔘──────── 0:15", time: "11:00", isSender: false }
                        ]
                      },
                      {
                        contactName: "+55 27 99618-5071",
                        contactRole: "~Natieli consultora de vendas Confiauto",
                        avatarColor: "bg-orange-500",
                        messages: [
                          { text: "Eiii bom dia Jonas!!", time: "08:12", isSender: false },
                          { text: "Tudo bem?", time: "08:12", isSender: false },
                          { text: "Me chamo Natieli, sou consultora de vendas daqui da Confiauto", time: "08:12", isSender: false },
                          { text: "Gostaria de saber se o senhor é daqui do Espírito Santo", time: "08:12", isSender: false }
                        ]
                      },
                      {
                        contactName: "+55 27 99670-6971",
                        contactRole: "Conta comercial",
                        avatarColor: "bg-blue-500",
                        messages: [
                          { text: "Cota Online\nSEU NOME:\nJonas\nEMAIL:\njonas.work583@gmail.com\nSeu Whatsapp\n(81) 98979-7143\nTipo de Veículo\nMOTO\nMarca do veículo\nHONDA\nModelo do veículo\nXRE300\nAno do veículo\n2014\nSeu Estado\nPE\nMunicípio\nBelo Jardim", time: "21:50", isSender: true },
                          { text: "Bom dia!\nEstarei direcionando o seu contato para um de nossos consultores ☺️🚗", time: "08:09", isSender: false }
                        ]
                      },
                      {
                        contactName: "+55 27 99287-0159",
                        contactRole: "~Juliana Borges Consultora",
                        avatarColor: "bg-purple-500",
                        messages: [
                          { text: "Bom dia Jonas", time: "11:02", isSender: false },
                          { text: "Tudo bem com você?", time: "11:02", isSender: false },
                          { text: "▶ 🔘──────── 0:50", time: "11:03", isSender: false }
                        ]
                      },
                      {
                        contactName: "+55 27 99251-0527",
                        contactRole: "~Gustavo Consultor Confiauto",
                        avatarColor: "bg-emerald-500",
                        messages: [
                          { text: "Bom dia, Jonas! Tudo bem? 🤗🤝\nSou o Gustavo, Consultor da Confiauto.", time: "08:19", isSender: false },
                          { text: "Vi que você começou uma cotação no nosso site, mas acabou não finalizando... acontece!\nA boa notícia é que hoje estou com condições especiais pra deixar seu veículo 100% protegido, do jeitinho que você precisa.", time: "08:19", isSender: false },
                          { text: "Que tal a gente finalizar essa cotação rapidinho e garantir essa proteção pra você aqui na Confiauto? 🚗✨", time: "08:19", isSender: false },
                          { text: "Fico à disposição!", time: "08:19", isSender: false }
                        ]
                      }
                    ].map((chat, idx) => (
                      <div key={idx} className="flex flex-col w-72 h-[400px] border border-slate-200 rounded-xl overflow-hidden shrink-0 bg-[#efeae2] shadow-sm font-sans snap-center relative">
                        {/* Header */}
                        <div className="bg-white px-3 py-2 flex items-center gap-3 border-b border-slate-200 shrink-0 z-10">
                          <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-lg ${chat.avatarColor}`}>
                            {chat.contactName.charAt(1) === '5' ? chat.contactName.charAt(4) : chat.contactName.charAt(0)}
                          </div>
                          <div className="flex flex-col overflow-hidden">
                            <span className="text-sm font-semibold text-slate-800 leading-tight truncate">{chat.contactName}</span>
                            <span className="text-[11px] text-slate-500 leading-tight truncate">{chat.contactRole}</span>
                          </div>
                        </div>
                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2">
                          {/* Security Message */}
                          <div className="bg-[#ffeecd] text-[#544336] text-[11px] p-2 rounded-lg text-center mx-2 mb-2 shadow-sm">
                            🔒 As mensagens e ligações são protegidas com a criptografia de ponta a ponta.
                          </div>
                          
                          {chat.messages.map((msg, i) => (
                            <div key={i} className={`max-w-[85%] rounded-lg p-2 text-sm relative shadow-sm ${msg.isSender ? 'bg-[#d9fdd3] self-end rounded-tr-none' : 'bg-white self-start rounded-tl-none'}`}>
                              <p className="text-[#111b21] leading-snug whitespace-pre-wrap">{msg.text}</p>
                              <div className="text-[10px] text-[#667781] text-right mt-1">{msg.time} {msg.isSender && <span className="text-[#53bdeb]">✓✓</span>}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 mt-2 italic text-center">
                    * Deslize para ver as interações reais do cliente oculto.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 7. Problema Crítico Identificado */}
          <section className="bg-[#e32526] rounded-2xl shadow-lg border border-red-700 overflow-hidden flex flex-col text-white lg:col-span-2 xl:col-span-1 transform transition-transform hover:scale-[1.01]">
            <div className="px-6 py-5 flex items-center gap-3 border-b border-red-500/30">
              <AlertOctagon className="text-white w-7 h-7" />
              <h2 className="text-xl font-bold">7. Problema Crítico Identificado</h2>
            </div>
            <div className="p-6 flex-1 flex flex-col gap-6">
              <ul className="space-y-4">
                <li className="flex items-center gap-3 bg-red-800/40 p-4 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-white shrink-0"></div>
                  <span className="font-medium text-lg">Foram realizados 5 testes na landing page</span>
                </li>
                <li className="flex items-center gap-3 bg-red-800/40 p-4 rounded-xl">
                  <div className="w-2 h-2 rounded-full bg-white shrink-0"></div>
                  <span className="font-medium text-lg">Todos apresentaram o mesmo erro</span>
                </li>
              </ul>

              <div className="bg-white text-[#e32526] rounded-xl p-5 mt-auto shadow-inner">
                <h3 className="text-sm font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5" /> Conclusão:
                </h3>
                <p className="text-xl font-black leading-tight">
                  O formulário está impedindo a conversão dos leads.
                </p>
              </div>
            </div>
          </section>

          {/* Diagnóstico Final & Resumo Estratégico */}
          <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden flex flex-col lg:col-span-3 xl:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
              {/* Diagnóstico Final */}
              <div className="p-8 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-center">
                <h2 className="text-2xl font-extrabold text-[#2e3585] mb-4 flex items-center gap-2">
                  Diagnóstico Final
                </h2>
                <p className="text-slate-600 mb-6 text-lg">
                  A Confiauto está investindo em tráfego, porém:
                </p>
                <ul className="space-y-4">
                  {[
                    'Sem tracking funcional',
                    'Com falhas no funil',
                    'Perdendo leads antes da conversão'
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg font-medium text-slate-800">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-red-100 text-[#e32526] shrink-0">
                        <AlertTriangle className="w-4 h-4" />
                      </div>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resumo Estratégico */}
              <div className="p-8 bg-slate-50 flex flex-col justify-center">
                <h2 className="text-2xl font-extrabold text-[#2e3585] mb-4 flex items-center gap-2">
                  Resumo Estratégico
                </h2>
                <p className="text-slate-600 mb-6 text-lg">
                  O custo elevado por lead não é causado diretamente pelo tráfego, mas por:
                </p>
                <ul className="space-y-4">
                  {[
                    'Falha no formulário',
                    'Ausência de tracking confiável',
                    'Estrutura desorganizada'
                  ].map((text, i) => (
                    <li key={i} className="flex items-center gap-3 text-lg font-medium text-slate-800">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-100 text-amber-600 shrink-0">
                        <AlertOctagon className="w-4 h-4" />
                      </div>
                      {text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Prioridades Imediatas */}
          <section className="bg-[#2e3585] rounded-2xl shadow-lg border border-[#1e235e] overflow-hidden flex flex-col text-white lg:col-span-3 xl:col-span-1">
            <div className="px-6 py-5 flex items-center gap-3 border-b border-white/10">
              <ListTodo className="text-white w-7 h-7" />
              <h2 className="text-2xl font-bold">Prioridades Imediatas</h2>
            </div>
            <div className="p-6 flex-1 flex flex-col justify-center">
              <ol className="space-y-4">
                {[
                  'Corrigir o formulário da landing page',
                  'Reativar e validar Pixel e eventos',
                  'Ajustar UTMs',
                  'Organizar estrutura das campanhas',
                  'Validar integração com CRM'
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#e32526] text-white font-bold shrink-0 shadow-sm">
                      {i + 1}
                    </div>
                    <span className="font-semibold text-lg">{text}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
