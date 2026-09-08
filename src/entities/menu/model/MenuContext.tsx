import { createContext } from 'react'
import type { Menu, UpdateMenuData } from "../types"

export type MenuContextType = {
    menus: Menu[]
    createMenu: (
        name: string, 
        description: string
    ) => void
    updateMenu: (
        id: string,
        changes: UpdateMenuData
    ) => void
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined)