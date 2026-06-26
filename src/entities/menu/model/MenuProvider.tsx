import { type ReactNode, useState } from 'react'   
import { mockMenus } from '../mockData'
import { MenuContext } from './MenuContext'
import type { MenuContextType } from './MenuContext'
import type { Menu } from '../types'

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

    const value: MenuContextType = {
        menus,
        createMenu,
    }

    console.log('MenuProvider rendered')

    return (
        <MenuContext.Provider value={value}>
            {children}
        </MenuContext.Provider>
    )
}