import { useParams } from 'react-router-dom'
import { useMenus } from '@/entities/menu/model/useMenus'

export function MenuEditorPage() {
  const { menuId } = useParams()

  const { menus } = useMenus()

  const menu = menus.find((menu) => menu.id === menuId) 
  
  if (!menu) {
    return <p>Menu not found</p>
  }

  return (
    <>
      <h1>{menu.name}</h1>
      <p>{menu.description}</p>
    </>
  )
}