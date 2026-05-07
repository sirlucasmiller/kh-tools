/**
 * Reports & Administration Apps
 *
 * Apps for congregation reports, attendance tracking, publisher records,
 * and administrative workflows.
 *
 * To add a new app, append an object to the `apps` array following
 * the schema defined in src/data/schema.js.
 */

export const featureLabels = {
  publisherRecords: 'Registros de publicadores',
  attendanceTracking: 'Assistência às reuniões',
  monthlyReports: 'Relatórios mensais da congregação',
  yearlyStats: 'Estatísticas anuais',
  exportFormats: 'Exportação (PDF/Excel)',
  multiCongregation: 'Suporte a múltiplas congregações',
}

export const verdict = {
  recommendedAppId: null,
  summary: '',
}

export const apps = []
