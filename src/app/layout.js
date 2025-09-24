import './globals.css'

export const metadata = {
  title: 'Mi App - Iniciar Sesión',
  description: 'Sistema de autenticación',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  )
}