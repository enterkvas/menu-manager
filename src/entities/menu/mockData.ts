import type { Menu } from './types'

export const mockMenus: Menu[] = [
  {
    id: crypto.randomUUID(),
    name: 'Breakfast Menu',
    description: 'Morning meals and coffee',
  },

  {
    id: crypto.randomUUID(),
    name: 'Lunch Menu',
    description: 'Burgers, salads and soups',
  },

  {
    id: crypto.randomUUID(),
    name: 'Dinner Menu',
    description: 'Steaks, pasta and wine',
  },
]