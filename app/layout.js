
import Sidemenu from '@/components/Sidemenu'
import './globals.css'


export const metadata = {
  title: 'Twitter',
  description: 'A clone by Prince sing Nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body >
      <Sidemenu/>
      {children}
      </body>
    </html>
  )
}
