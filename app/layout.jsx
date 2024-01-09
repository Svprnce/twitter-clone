
import Sidemenu from '@/components/Sidemenu'
import Profilemenu from '@/components/Profilebar'
import Subscribebar from '@/components/Subscribebar'
import Trendingbar from '@/components/trendingbar'
import Followbar from '@/components/Followbar'
import Searchbar from '@/components/Searchbar'
import './globals.css'


export const metadata = {
  title: 'Twitter',
  description: 'A clone by Prince sing Nextjs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <aside className='left_sidebar'>
          <Sidemenu />
          <Profilemenu />
        </aside>
        <main>
          {children}
        </main>
        {/* <aside className='right_sidebar'>
          <Searchbar />
          <Subscribebar />
          <Trendingbar />
          <Followbar />
        </aside> */}
      </body>
    </html>
  )
}
