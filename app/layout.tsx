import "styles/globals.css"
import "styles/utility.css"
import Navigation from "components/Navigation"

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
        <Navigation />
      </body>
    </html>
  )
}
