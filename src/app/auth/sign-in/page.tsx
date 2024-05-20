'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import { Calculator } from 'lucide-react'
import { ThemeToggle } from '@/components/theme/theme-toggle'

const signInFormSchema = z.object({
  email: z.string().email(),
})

type SignInFormData = z.infer<typeof signInFormSchema>

export default function SignIn() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormData>()

  async function handleSignIn(data: SignInFormData) {
    try {
      console.log('data =>> ', data)
      // await authenticate({ email: data.email })

      // toast({
      //   title: 'Link enviado',
      //   description: 'Enviamos um link de autenticação para o seu e-mail.',
      // })

      router.push('/dashboard')
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description: 'Credenciais inválidas. Por favor, tente novamente.',
      })
    }
  }
  return (
    <div className="p-8">
      <div className="flex items-center gap-4 absolute right-8 top-8">
        <ThemeToggle />
        <Button variant="ghost" asChild>
          <Link href={'/auth/sign-up'}>Novo estabelecimento</Link>
        </Button>
      </div>
      <div className="w-[350px] flex flex-col justify-center gap-6">
        <div className="flex items-center justify-center gap-2 text-lg text-foreground">
          <Calculator className="h-5 w-5" />
          <span className="font-semibold">OrçaFácil</span>
        </div>
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar Painel
          </h1>
          <p className="text-sm text-muted-foreground">
            Gerencie seus orçamentos pelo painel do parceiro
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
          <div className="space-y-2">
            <Label htmlFor="email">E-mail cadastrado</Label>
            <Input id="email" type="email" {...register('email')} />
          </div>

          <Button className="w-full" type="submit" disabled={isSubmitting}>
            Acessar painel
          </Button>
        </form>
      </div>
    </div>
  )
}
