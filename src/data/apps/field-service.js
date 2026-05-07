/**
 * Field Service Apps
 *
 * Apps for tracking field service activity, managing return visits,
 * Bible studies, and personal ministry goals.
 *
 * To add a new app, append an object to the `apps` array following
 * the schema defined in src/data/schema.js.
 */

export const featureLabels = {
  timeTracking: 'Registro de horas',
  returnVisits: 'Gerenciamento de revisitas',
  bibleStudies: 'Acompanhamento de estudos bíblicos',
  monthlyReport: 'Geração de relatório mensal',
  goals: 'Metas pessoais',
  mapIntegration: 'Integração com mapas',
  cloudSync: 'Sincronização em nuvem',
}

export const verdict = {
  recommendedAppId: null,
  summary: '',
}

export const apps = []
