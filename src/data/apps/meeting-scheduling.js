/**
 * Meeting Scheduling Apps
 *
 * Apps for scheduling congregation meetings, assignments, public talks,
 * duties, field-service arrangements, public witnessing, and related workflows.
 */

export const featureLabels = {
  midweekSchedule: 'Agenda da reunião Vida e Ministério',
  weekendSchedule: 'Agenda da reunião do fim de semana',
  studentAssignments: 'Designações de estudantes',
  autoAssignMeetingParts: 'Auto-Assign para partes da reunião',
  assignmentNotifications: 'Notificações para designados',
  publicTalks: 'Discursos públicos locais e fora',
  fieldServiceSchedules: 'Agenda de serviço de campo',
  publicWitnessing: 'Testemunho público/carrinhos',
  dutiesCleaning: 'Deveres, limpeza e manutenção',
  territories: 'Territórios e mapas',
  reportsExports: 'Relatórios e exportações',
  importFromOtherApps: 'Importação de outros sistemas',
}

export const verdict = {
  recommendedAppIds: ['nw-scheduler', 'hourglass'],
  type: 'tie',
  summary:
    'Empate contextual: Hourglass é a opção mais acessível para uma congregação que quer começar rápido, com uso via navegador, apps móveis, notificações e custo baseado em donativos. NW Scheduler é a escolha mais prudente quando a prioridade é manter o núcleo administrativo em desktop/local, com menor dependência de nuvem e compartilhamento documentado com criptografia ponta a ponta. Como os dois cobrem bem agenda e designações, a decisão depende principalmente do peso dado a conveniência colaborativa versus controle local dos dados.',
}

export const apps = [
  {
    id: 'nw-scheduler',
    name: 'NW Scheduler',
    developer: 'New World Solutions Pty Ltd',
    website: 'https://nwscheduler.com/jw-christian-life-ministry-meeting-scheduler/',
    repository: null,
    platforms: ['windows', 'macos'],
    pricing: 'paid',
    description:
      'Programa desktop para Windows e macOS, com app companion NW Publisher para publicadores. Cobre Vida e Ministério, discursos públicos, serviço de campo, carrinhos, deveres, territórios, secretaria e outros fluxos congregacionais.',
    features: {
      midweekSchedule: true,
      weekendSchedule: true,
      studentAssignments: true,
      autoAssignMeetingParts: true,
      assignmentNotifications: true,
      publicTalks: true,
      fieldServiceSchedules: true,
      publicWitnessing: true,
      dutiesCleaning: true,
      territories: true,
      reportsExports: true,
      importFromOtherApps: true,
    },
    privacy: {
      dataCollection: 'minimal',
      openSource: false,
      offlineCapable: true,
    },
    details: [
      'O núcleo administrativo é um programa instalado localmente em Windows ou macOS; o app NW Publisher para iOS, Android e Amazon é complementar e depende da congregação usar NW Scheduler.',
      'A agenda da reunião Vida e Ministério inclui classes principal e auxiliar, Auto-Assign, estudante recomendado e histórico detalhado das partes.',
      'O escopo vai além de reuniões: secretaria, registros de publicadores, relatórios mensais, discursos públicos, grupos de serviço, carrinhos, territórios, limpeza, deveres, manutenção, visita do superintendente de circuito, quadro de informações, literatura e tarefas.',
      'O compartilhamento congregacional é opcional, desativado por padrão, e usa OAuth 2.0, TLS 1.2 e criptografia ponta a ponta com AES-256; as chaves ficam no dispositivo local segundo a documentação do fornecedor.',
      'A documentação informa que, por padrão, os dados ficam apenas no computador local e que desenvolvedores, administradores e suporte não conseguem ver ou editar dados da congregação.',
      'A página de registro informa teste gratuito de 60 dias e licenças anuais, incluindo Individual por US$ 12, Congregation Silver por US$ 29 e Congregation Gold por US$ 39 na data desta análise.',
      'O fornecedor declara que o programa não é oficial nem endossado pela organização, e que cada congregação deve fazer sua própria escolha.',
    ],
    pros: [
      'Modelo desktop/local favorece controle direto dos dados pela congregação.',
      'Conjunto muito amplo de módulos em um só programa.',
      'Recursos fortes de agenda: Auto-Assign, histórico de partes e múltiplas áreas congregacionais.',
      'Documentação extensa sobre criptografia, compartilhamento e retenção de dados.',
      'NW Publisher amplia o alcance para publicadores em iOS e Android.',
    ],
    cons: [
      'Não é uma solução web: o trabalho administrativo principal depende de instalação desktop.',
      'Licença anual paga após o período de teste.',
      'Fluxo mais pesado para congregações que querem colaboração imediata via navegador.',
      'Código-fonte não é aberto.',
    ],
    sources: [
      {
        label: 'Página oficial do NW Scheduler',
        url: 'https://nwscheduler.com/jw-christian-life-ministry-meeting-scheduler/',
      },
      {
        label: 'Registro e preços',
        url: 'https://nwscheduler.com/register-jw-scheduler/',
      },
      {
        label: 'Segurança e privacidade',
        url: 'https://nwscheduler.com/jw-scheduler-security-and-privacy/',
      },
      {
        label: 'NW Publisher App',
        url: 'https://nwscheduler.com/jw-scheduler-publisher-edition-app/',
      },
      {
        label: 'Comparação publicada pelo fornecedor',
        url: 'https://nwscheduler.com/compare-hourglass-app-with-jw-scheduler/',
      },
    ],
    lastReviewed: '2026-05-07',
  },
  {
    id: 'hourglass',
    name: 'Hourglass',
    iconSrc: '/app-icons/hourglass.jpg',
    developer: 'Congregation Software Foundation',
    website: 'https://www.hourglass-app.com',
    repository: null,
    platforms: ['web', 'android', 'ios'],
    pricing: 'donation',
    description:
      'Aplicação web para congregações com apps móveis para publicadores. Organiza publicadores, grupos, contatos, presença, territórios, agendas, designações, relatórios e notificações.',
    features: {
      midweekSchedule: true,
      weekendSchedule: true,
      studentAssignments: true,
      autoAssignMeetingParts: true,
      assignmentNotifications: true,
      publicTalks: true,
      fieldServiceSchedules: true,
      publicWitnessing: true,
      dutiesCleaning: true,
      territories: true,
      reportsExports: true,
      importFromOtherApps: true,
    },
    privacy: {
      dataCollection: 'moderate',
      openSource: false,
      offlineCapable: false,
    },
    details: [
      'O uso administrativo acontece pelo serviço web app.hourglass-app.com, com apps para iOS e Android; o app móvel exige convite da congregação para o primeiro acesso.',
      'A página oficial lista organização de publicadores, grupos, contatos de emergência, presença às reuniões e territórios, além de agendas de limpeza, serviço de campo, testemunho público, reuniões do meio e fim de semana, áudio/vídeo, indicadores e grupos de idioma.',
      'As designações podem notificar os designados imediatamente, com opção de aceitar ou recusar, e publicadores podem enviar relatórios de campo pelo celular.',
      'Hourglass declara importar dados de KHS, NW Scheduler ou TSWIN e exportar dados da congregação em PDF, DOCX, CSV ou JSON.',
      'A segurança documentada inclui criptografia em trânsito e em repouso, hospedagem redundante dedicada ao Hourglass e criptografia ponta a ponta opcional para dados pessoais.',
      'A política de privacidade informa uso de AWS, e-mail para usuários registrados, dados inseridos por representantes da congregação e ausência de processamento de pagamentos pelo próprio Hourglass.',
      'O FAQ orienta consultar as instruções da filial local para garantir que o uso do Hourglass esteja em conformidade com as orientações aplicáveis.',
      'O módulo SMPW separado cobre zonas, locais, publicadores, agendamento manual/automático/open-scheduling, Auto-Fill e comunicações por e-mail, SMS, WhatsApp e Signal; isso não foi tratado aqui como Auto-Assign geral para partes da reunião.',
      'O FAQ informa que não há pagamento obrigatório; o serviço é mantido por donativos voluntários.',
    ],
    pros: [
      'Funciona pelo navegador e reduz dependência de instalação desktop.',
      'Custo sem pagamento obrigatório, sustentado por donativos.',
      'Apps móveis oficiais nas lojas, com convite da congregação e notificações.',
      'Boa cobertura de agendas, relatórios, territórios e designações em uma interface centralizada.',
      'Importa dados de NW Scheduler, KHS e TSWIN e exporta em formatos úteis.',
    ],
    cons: [
      'Modelo web/cloud exige avaliação cuidadosa das orientações locais de proteção de dados.',
      'Criptografia ponta a ponta é descrita como recurso opcional, não como padrão obrigatório para todos os dados.',
      'Depende do serviço online para o uso principal.',
      'Código-fonte não é aberto.',
    ],
    sources: [
      {
        label: 'Site oficial do Hourglass',
        url: 'https://www.hourglass-app.com',
      },
      {
        label: 'Recursos',
        url: 'https://www.hourglass-app.com/en/features/',
      },
      {
        label: 'Segurança',
        url: 'https://www.hourglass-app.com/en/security/',
      },
      {
        label: 'Perguntas e respostas',
        url: 'https://www.hourglass-app.com/en/faq/',
      },
      {
        label: 'Política de privacidade',
        url: 'https://www.hourglass-app.com/en/privacy/',
      },
      {
        label: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.hourglass_app.hourglasstime',
      },
      {
        label: 'App Store',
        url: 'https://apps.apple.com/us/app/hourglass-time/id927752129',
      },
    ],
    lastReviewed: '2026-05-07',
  },
]
