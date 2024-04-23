import { Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export const metadata: Metadata = {
  title: 'Login',
}

export default function SignIn() {
  return (
    <div className="p-8">
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        <Link href={'/auth/sign-up'}>Novo estabelecimento</Link>
      </Button>
      <div className="w-[350px] flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar Painel
          </h1>
          <p className="text-sm text-muted-foreground">
            Gerencie seus orçamentos pelo painel do parceiro
          </p>
        </div>

        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail cadastrado</Label>
            <Input id="email" type="email" />
          </div>

          <Button className="w-full" type="submit">
            Acessar painel
          </Button>
        </form>
      </div>
    </div>
  )
}
