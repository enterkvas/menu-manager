import { useState } from 'react'
import { useNavigate, useParams, useBlocker } from 'react-router-dom'
import { useMenus } from '@/entities/menu/model/useMenus'
import { MenuEditor } from '@/features/menu-editor/ui/MenuEditor'
import type { UpdateMenuData } from '@/entities/menu/types'

export function MenuEditorPage() {
  const { menuId } = useParams()

  const { menus, updateMenu } = useMenus()

  const navigate = useNavigate()

  const [isFormDirty, setIsFormDirty] = useState(false)

  const blocker = useBlocker(isFormDirty)

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
    if(isDirty) {
      const shouldDiscard = window.confirm(
        'You have unsaved changes. Leave without saving?'
      )
      if (!shouldDiscard) {
        return
      }
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
        <div
          className="
            fixed inset-0 z-50
            flex items-center justify-center
            bg-black/40
          "
        >
          <div
            className="
              w-full max-w-md
              rounded-lg
              bg-white
              p-6
              shadow-lg
            "
          >
            <p>You have unsaved changes.</p>
            <p>Are you sure you want to leave without saving?</p>

            <div
              className="
                mt-4
                flex
                justify-center
                gap-4
              "
            >
              <button
                type='button'
                className='
                  px-4
                  py-2
                  bg-gray-500
                  hover:bg-gray-600
                  rounded-md
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                '
                onClick={() => blocker.reset()}
              >
                Stay
              </button>

              <button
                type='button'
                className='
                  px-4
                  py-2
                  bg-red-500
                  hover:bg-red-600
                  rounded-md
                  text-sm
                  font-medium
                  text-white
                  transition-colors
                '
                onClick={() => blocker.proceed()}
              >
                Leave
              </button>
            </div>

          </div>
        </div>

      )}
    </>
  )
}