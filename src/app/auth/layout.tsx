import { Calculator } from 'lucide-react'
import { Toaster } from '@/components/ui/toaster'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen grid grid-cols-2 antialiased">
      <div className="h-full border-r border-foreground/5 bg-muted p-10 text-muted-foreground flex flex-col justify-between">
        <div className="flex items-center gap-3 text-lg text-foreground">
          <Calculator className="h-5 w-5" />
          <span className="font-semibold">OrçaFácil</span>
        </div>
        <footer className="text-sm">
          Painel do parceiro &copy; OrçaFácil - {new Date().getFullYear()}
        </footer>
      </div>

      <div className="relative flex flex-col items-center justify-center">
        {children}
        <Toaster />
      </div>
    </div>
  )
}
