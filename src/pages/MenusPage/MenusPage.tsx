import { useState } from 'react'

import { MenuCard } from '@/entities/menu/MenuCard'
import { mockMenus } from '@/entities/menu/mockData'

import CreateMenuButton from '@/features/create-menu/ui/CreateMenuButton'
import CreateMenuModal from '@/features/create-menu/ui/CreateMenuModal'

export function MenusPage() {
  const [menus] = useState(mockMenus)

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)

  return (
    <div>
      <h1>Menus</h1>

      <CreateMenuButton
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
          onClose={() => setIsCreateModalOpen(false)}
        />
      )}

    </div>
  )
}