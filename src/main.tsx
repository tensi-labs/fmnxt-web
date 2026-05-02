import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import 'antd/dist/reset.css'
import './index.css'
import App from './App.tsx'
import { BRAND } from './const/branding'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: BRAND.gold,
          colorLink: BRAND.gold,
          colorLinkHover: BRAND.goldDark,
          colorInfo: BRAND.gold,
          colorSuccess: '#15803d',
          colorText: '#111827',
          colorTextSecondary: '#6B7280',
          colorBgLayout: '#FFFFFF',
          borderRadius: 14,
          fontFamily: '"Plus Jakarta Sans", Inter, system-ui, sans-serif',
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ConfigProvider>
  </StrictMode>,
)
