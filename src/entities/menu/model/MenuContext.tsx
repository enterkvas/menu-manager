import { createContext } from 'react'
import type { Menu } from '../types'

export type MenuContextType = {
    menus: Menu[]
    createMenu: (
        name: string, 
        description: string
    ) => void
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined)