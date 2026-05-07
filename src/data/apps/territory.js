/**
 * Territory Management Apps
 *
 * Apps for managing territory maps, assignments, records of coverage,
 * do-not-call lists, and territory distribution.
 *
 * To add a new app, append an object to the `apps` array following
 * the schema defined in src/data/schema.js.
 */

export const featureLabels = {
  mapView: 'Visualização interativa do mapa',
  assignments: 'Designação de territórios',
  coverageTracking: 'Acompanhamento da cobertura',
  doNotCall: 'Gerenciamento de não visitar',
  sharing: 'Compartilhamento por link',
  offlineAccess: 'Acesso offline',
  statistics: 'Estatísticas e relatórios',
}

export const verdict = {
  recommendedAppId: null,
  summary: '',
}

export const apps = []
