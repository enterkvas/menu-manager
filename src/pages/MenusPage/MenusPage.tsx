import { useState, useRef } from 'react'

import { MenuCard } from '@/entities/menu/MenuCard'
import { mockMenus } from '@/entities/menu/mockData'

import CreateMenuButton from '@/features/create-menu/ui/CreateMenuButton'
import CreateMenuModal from '@/features/create-menu/ui/CreateMenuModal'
import type { Menu } from '@/entities/menu/types'

export function MenusPage() {
  const [menus, setMenus] = useState(mockMenus)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const createButtonRef =
  useRef<HTMLButtonElement>(null)

  const handleCreateMenu = (name: string, description: string) => {
    const newMenu: Menu = {
      id: crypto.randomUUID(),
      name,
      description,
    }
    
    setMenus((prev) => [...prev, newMenu])
  }

  const handleCloseModal = () => {
    setIsCreateModalOpen(false)
    
    createButtonRef.current?.focus()
  }

  return (
    <div>
      <h1>Menus</h1>

      <CreateMenuButton
        buttonRef={createButtonRef}
        onClick={() => setIsCreateModalOpen(true)}
      />

      <div
        style={{
          display: 'grid',
          gap: '16px',
          marginTop: '24px',
        }}
      >
        {menus.map(menu => (
          <MenuCard
            key={menu.id}
            menu={menu}
          />
        ))}
      </div>

      {isCreateModalOpen && (
        <CreateMenuModal 
          onClose={handleCloseModal}
          onCreateMenu={handleCreateMenu}
        />
      )}

    </div>
  )
}