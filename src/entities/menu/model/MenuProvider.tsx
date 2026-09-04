import { type ReactNode, useState } from 'react'   
import { mockMenus } from '../mockData'
import { MenuContext } from './MenuContext'
import type { MenuContextType } from './MenuContext'
import type { Menu, UpdateMenuData } from "../types"

export function MenuProvider({ children }: { children: ReactNode }) {
    const [menus, setMenus] = useState(mockMenus)

    function createMenu(name: string, description: string) {
        const newMenu: Menu = {
            id: crypto.randomUUID(),
            name,
            description,
        }

        setMenus((prev) => [...prev, newMenu])
    }

    function updateMenu(id: string, changes: UpdateMenuData) {
        setMenus((prev) => prev.map((menu) => (menu.id === id ? { ...menu, ...changes } : menu)))
    }

    const value: MenuContextType = {
        menus,
        createMenu,
        updateMenu,
    }

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    )
}