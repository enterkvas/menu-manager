import { useParams } from 'react-router-dom'
import { useMenus } from '@/entities/menu/model/useMenus'

export function MenuEditorPage() {
  const { menuId } = useParams()

  const { menus } = useMenus()

  const menu = menus.find((menu) => menu.id === menuId) 
  
  return (
  <div>
    <h1>Menu Editor Page</h1>

    <p>Menu ID: {menuId}</p>
    <p>Menu Name: {menu?.name}</p>
    <p>Menu Description: {menu?.description}</p>
  </div>
)
}