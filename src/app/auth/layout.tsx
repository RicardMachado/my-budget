import { Metadata } from 'next'
import { Calculator } from 'lucide-react'

import { Toaster } from '@/components/ui/toaster'

export const metadata: Metadata = {
  title: {
    template: '%s | OrçaFácil',
    default: 'Login',
  },
  description: 'Simplificando a forma que criar seu orçamento',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="min-h-screen grid grid-cols-2 antialiased">
      <div className="h-full border-r border-foreground/5 bg-muted p-16 text-muted-foreground flex flex-col justify-between">
        <div className="flex justify-center text-lg text-foreground">
          <Calculator className="h-[150px] w-[150px]" />
        </div>
        <div className="flex flex-col p-10 gap-4">
          <p className="text-2xl font-bold text-justify">
            Com o OrçaFácil, você tem o poder criar, gerência e enviar
            orçamentos personalizados para seus clientes com facilidade e
            eficiência.
          </p>
          <p className="text-2xl font-bold text-justify">
            Esteja você administrando uma pequena empresa ou trabalhando como
            autônomo, nossa plataforma intuitiva oferece todas as ferramentas
            necessárias para tornar o processo de orçamento rápido, preciso e
            profissional.
          </p>
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
