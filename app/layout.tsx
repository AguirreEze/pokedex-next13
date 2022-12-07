import "styles/globals.css"
import "styles/utility.css"
import Navbar from "components/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className="d--flex fd--col jc--space-between">
        {children}
        <Navbar />
      </body>
    </html>
  )
}
