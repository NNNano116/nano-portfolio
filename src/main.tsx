import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, Navigate } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import Main1 from './routes/Main1.tsx'

// 해시 라우팅: GitHub Pages 새로고침 404 회피(경로가 # 뒤에 있어 항상 index.html 서빙).
// 화면 추가 시 라우트를 확장한다. (docs/deploy.md §4, docs/project-init.md §4)
// main-1(3D 구체 물리 히어로)을 메인('/')으로 승격. 구 '/main-1' 링크는 '/'로 리다이렉트.
const router = createHashRouter([
  { path: '/', element: <Main1 /> },
  { path: '/main-1', element: <Navigate to="/" replace /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
