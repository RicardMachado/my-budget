'use client'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ToastAction } from '@/components/ui/toast'
import { toast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'

const signUpFormSchema = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpFormData = z.infer<typeof signUpFormSchema>

export default function SignUp() {
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpFormData>()

  function handleLogin(email: string) {
    router.push(`/auth/sign-in?email=${email}`)
  }

  async function handleSignUp(data: SignUpFormData) {
    try {
      console.log('data =>> ', data)
      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast({
        title: 'Cadastro',
        description: 'Cadastro realizado com sucesso!',
        action: (
          <ToastAction
            altText="Realizar login"
            onClick={() => handleLogin(data.email)}
          >
            Login
          </ToastAction>
        ),
      })
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Erro',
        description:
          'Erro ao realizar seu cadastro. Por favor, tente novamente.',
      })
    }
  }

  return (
    <div className="p-8">
      <Button variant="ghost" asChild className="absolute right-8 top-8">
        <Link href={'/auth/sign-in'}>Fazer login</Link>
      </Button>
      <div className="w-[350px] flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Criar conta grátis
          </h1>
          <p className="text-sm text-muted-foreground">
            Seja um parceiro e comece criar seus orçamentos personalizados em
            questão de minutos!
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
          <div className="space-y-2">
            <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
            <Input
              id="restaurantName"
              type="text"
              {...register('restaurantName')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="managerName">Seu nome</Label>
            <Input id="managerName" type="text" {...register('managerName')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Seu E-mail</Label>
            <Input id="email" type="email" {...register('email')} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Seu celular</Label>
            <Input id="phone" type="tel" {...register('phone')} />
          </div>

          <Button className="w-full" type="submit" disabled={isSubmitting}>
            Finalizar cadastro
          </Button>

          <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
            Ao continuar, você concorda com nossos
            <a className="underline underline-offset-4" href="">
              {' '}
              Termos de serviço
            </a>{' '}
            e
            <a className="underline underline-offset-4" href="">
              {' '}
              políticas de privacidade
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  )
}
