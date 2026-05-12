import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

import { MainLayout } from '../../shared/layouts/MainLayout'

import { LoginPage } from '../../pages/LoginPage/LoginPage'
import { MenusPage } from '../../pages/MenusPage/MenusPage'
import { MenuEditorPage } from '../../pages/MenuEditorPage/MenuEditorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <MenusPage />,
      },

      {
        path: 'login',
        element: <LoginPage />,
      },

      {
        path: 'menus/:menuId',
        element: <MenuEditorPage />,
      },
    ],
  },
])

export function Router() {
  return <RouterProvider router={router} />
}