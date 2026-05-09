import { getCategoryById } from './categories'

const directoryEntries = [
  {
    id: 'solin',
    comparisonCategoryId: 'audio-video',
    iconSrc: '/app-icons/solin.png',
  },
  {
    id: 'meeting-media-manager',
    comparisonCategoryId: 'audio-video',
    iconSrc: '/app-icons/m3.svg',
  },
  {
    id: 'hourglass',
    comparisonCategoryId: 'meeting-scheduling',
    iconSrc: '/app-icons/hourglass.jpg',
  },
  {
    id: 'khs',
    name: 'KHS',
    iconSrc: '/app-icons/KHS.png',
    developer: 'Majestic Software',
    website: 'https://majesticsoftware.net/',
    repository: null,
    platforms: ['windows'],
    pricing: 'paid',
  },
  {
    id: 'meeting-schedule-assistant',
    name: 'Meeting Schedule Assistant',
    iconSrc: '/app-icons/msa.png',
    developer: 'Public Talk Software',
    website: 'https://www.publictalksoftware.co.uk/meeting-schedule-assistant/',
    repository: null,
    platforms: ['windows'],
    pricing: 'donation',
  },
  {
    id: 'onlym',
    name: 'OnlyM',
    iconSrc: '/app-icons/onlym.png',
    developer: 'Antony Corbett',
    website: 'https://github.com/AntonyCorbett/OnlyM/wiki',
    repository: 'https://github.com/AntonyCorbett/OnlyM',
    platforms: ['windows'],
    pricing: 'free',
  },
  {
    id: 'onlyt',
    name: 'OnlyT',
    iconSrc: '/app-icons/onlyt.png',
    developer: 'Antony Corbett',
    website: 'https://github.com/AntonyCorbett/OnlyT/wiki',
    repository: 'https://github.com/AntonyCorbett/OnlyT',
    platforms: ['windows'],
    pricing: 'free',
  },
]

function getComparedApp(entry) {
  if (!entry.comparisonCategoryId) {
    return null
  }

  const category = getCategoryById(entry.comparisonCategoryId)
  const app = category?.apps.find((candidate) => candidate.id === entry.id)

  if (!category || !app) {
    return null
  }

  return {
    app,
    category,
  }
}

export function getDirectoryApps() {
  return directoryEntries
    .map((entry) => {
      const compared = getComparedApp(entry)
      const app = compared?.app ?? {}

      return {
        ...app,
        ...entry,
        name: entry.name ?? app.name,
        developer: entry.developer ?? app.developer,
        description: entry.description ?? app.description,
        platforms: entry.platforms ?? app.platforms ?? [],
        comparison: compared
          ? {
              categoryId: compared.category.id,
              appId: app.id,
            }
          : null,
      }
    })
    .sort((first, second) => first.name.localeCompare(second.name))
}
