/**
 * Category Registry
 * =================
 * To add a new category:
 *   1. Create a new file in src/data/apps/ (e.g. "my-category.js")
 *   2. Export { apps, featureLabels, verdict } from it
 *   3. Import it here and add an entry to the categories array
 *
 * Categories with 0 apps are hidden from the homepage automatically.
 */

import {
  apps as audioVideoApps,
  featureLabels as audioVideoFeatures,
  verdict as audioVideoVerdict,
} from './apps/audio-video'

import {
  apps as serviceApps,
  featureLabels as serviceFeatures,
  verdict as serviceVerdict,
} from './apps/field-service'

import {
  apps as reportApps,
  featureLabels as reportFeatures,
  verdict as reportVerdict,
} from './apps/reports'

import {
  apps as meetingSchedulingApps,
  featureLabels as meetingSchedulingFeatures,
  verdict as meetingSchedulingVerdict,
} from './apps/meeting-scheduling'

import {
  apps as territoryApps,
  featureLabels as territoryFeatures,
  verdict as territoryVerdict,
} from './apps/territory'

const categories = [
  {
    id: 'audio-video',
    icon: '🎬',
    featureLabels: audioVideoFeatures,
    verdict: audioVideoVerdict,
    apps: audioVideoApps,
  },
  {
    id: 'field-service',
    icon: '📋',
    featureLabels: serviceFeatures,
    verdict: serviceVerdict,
    apps: serviceApps,
  },
  {
    id: 'reports',
    icon: '📊',
    featureLabels: reportFeatures,
    verdict: reportVerdict,
    apps: reportApps,
  },
  {
    id: 'meeting-scheduling',
    icon: '🗓️',
    featureLabels: meetingSchedulingFeatures,
    verdict: meetingSchedulingVerdict,
    apps: meetingSchedulingApps,
  },
  {
    id: 'territory',
    icon: '🗺️',
    featureLabels: territoryFeatures,
    verdict: territoryVerdict,
    apps: territoryApps,
  },
]

/**
 * Returns all categories, optionally filtering out empty ones.
 */
export function getCategories({ includeEmpty = false } = {}) {
  if (includeEmpty) return categories
  return categories.filter((cat) => cat.apps.length > 0)
}

/**
 * Returns a single category by its ID (always, even if empty).
 */
export function getCategoryById(id) {
  return categories.find((cat) => cat.id === id) || null
}

export default categories
