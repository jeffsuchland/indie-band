import './globals.css'

export const metadata = {
  title: 'The Wandering Echoes',
  description: 'Ethereal melodies for wandering souls - Indie Folk-Pop with elements of dream-pop and alternative rock.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-linen text-slate antialiased">
        <div className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  )
}
