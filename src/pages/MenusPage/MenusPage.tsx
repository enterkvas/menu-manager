import { useState, useRef } from 'react'
import { MenuCard } from '@/entities/menu/MenuCard'
import { useMenus } from '@/entities/menu/model/useMenus'
import type { Menu } from '@/entities/menu/types'
import { Confirmation } from '@/shared/ui/confirmation/Confirmation'
import CreateMenuButton from '@/features/create-menu/ui/CreateMenuButton'
import CreateMenuModal from '@/features/create-menu/ui/CreateMenuModal'


export function MenusPage() {
  const { menus, createMenu, deleteMenu } = useMenus()
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [menuToDelete, setMenuToDelete] = useState<Menu | null>(null)
  const createButtonRef =
  useRef<HTMLButtonElement>(null)

  const handleCloseModal = () => {
    setIsCreateModalOpen(false)

    createButtonRef.current?.focus()
  }

  function handleDeleteRequest(id: string) {
    const menu = menus.find((menu) => menu.id === id)

    if (!menu) return

    setMenuToDelete(menu)
  }

  function handleConfirmDelete() {
    if (!menuToDelete) return

    deleteMenu(menuToDelete.id)
    setMenuToDelete(null)
  }

  function handleCancelDelete() {
    setMenuToDelete(null)
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold">Menus</h1>

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
        {menus.map((menu) => (
          <MenuCard
            key={menu.id}
            menu={menu}
            onDelete={handleDeleteRequest}
          />
        ))}
      </div>
      {isCreateModalOpen && (
        <CreateMenuModal
          onClose={handleCloseModal}
          onCreateMenu={createMenu}
        />
      )}
      {menuToDelete && (
        <Confirmation
          title="Delete menu?"
          description={`Are you sure you want to delete "${menuToDelete.name}"? This action cannot be undone.`}
          cancelLabel="Cancel"
          confirmLabel="Delete"
          onCancel={handleCancelDelete}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  )
}