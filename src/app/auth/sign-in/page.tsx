'use client'

// import { Metadata } from 'next'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from '@/components/ui/use-toast'
import { useRouter, useSearchParams } from 'next/navigation'

// export const metadata: Metadata = {
//   title: 'Login',
// }

const signInFormSchema = z.object({
  email: z.string().email(),
})

type SignInFormData = z.infer<typeof signInFormSchema>

export default function SignIn() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

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
