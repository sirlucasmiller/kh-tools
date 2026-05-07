/**
 * Audio & Video Apps
 *
 * Apps for managing meeting media, audio routing, video playback,
 * and similar tasks during congregation meetings.
 *
 * To add a new app, append an object to the `apps` array following
 * the schema defined in src/data/schema.js.
 */

export const featureLabels = {
  mediaImport: 'Importação de mídia do JW.org',
  videoPlayback: 'Reprodução de vídeo',
  imageDisplay: 'Exibição de imagens',
  audioRouting: 'Roteamento de áudio (Zoom/híbrido)',
  autoSchedule: 'Programação automática das reuniões',
  songSupport: 'Suporte a cânticos',
  pdfSupport: 'Apresentações em PDF',
  multiMonitor: 'Suporte a múltiplos monitores',
  yeartext: 'Exibição do texto do ano',
}

export const verdict = {
  recommendedAppId: null,
  summary: '',
}

export const apps = []
