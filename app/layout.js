import './globals.css'

export const metadata = {
  title: 'Next.js + Supabase Auth',
  description: 'Tela de login integrada ao Supabase',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
