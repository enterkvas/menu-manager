import { useState, useRef } from 'react'
import { useNavigate, useParams, useBlocker } from 'react-router-dom'
import { useMenus } from '@/entities/menu/model/useMenus'
import { MenuEditor } from '@/features/menu-editor/ui/MenuEditor'
import type { UpdateMenuData } from '@/entities/menu/types'
import { Confirmation } from '@/shared/ui/confirmation/Confirmation'

export function MenuEditorPage() {
  const { menuId } = useParams()

  const { menus, updateMenu } = useMenus()

  const navigate = useNavigate()

  const [isFormDirty, setIsFormDirty] = useState(false)

  const skipBlockerRef = useRef(false)

  const [
    isCancelConfirmationOpen,
    setIsCancelConfirmationOpen,
  ] = useState(false)

  const blocker = useBlocker(() => {
    if (skipBlockerRef.current) {
      skipBlockerRef.current = false
      return false
    }

    return isFormDirty
  })

  const menu = menus.find((menu) => menu.id === menuId)

  if (!menu) {
    return <p>Menu not found</p>
  }

  const currentMenu = menu

  function onSave(changes: UpdateMenuData) {
    updateMenu(currentMenu.id, changes)
  }

  function onDirtyChange(isDirty: boolean) {
    setIsFormDirty(isDirty)
  }

  function onCancel(isDirty: boolean) {
    if (isDirty) {
      setIsCancelConfirmationOpen(true)
      return
    }

    navigate('/')
  }

  return (
    <>
      <MenuEditor
        menu={menu}
        onSave={onSave}
        onCancel={onCancel}
        onDirtyChange={onDirtyChange}
      />

      {blocker.state === 'blocked' && (
        <Confirmation
          title="Unsaved changes"
          description="Are you sure you want to leave without saving?"
          cancelLabel='Stay'
          confirmLabel='Leave'
          onCancel={() => blocker.reset()}
          onConfirm={() => blocker.proceed()}
        />
      )}

      {isCancelConfirmationOpen && (
        <Confirmation
          title="Unsaved changes"
          description="Leave without saving?"
          onCancel={() => setIsCancelConfirmationOpen(false)}
          onConfirm={() => {
            skipBlockerRef.current = true
            setIsCancelConfirmationOpen(false)
            navigate('/')
          }}
        />
      )}
    </>
  )
}