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
import { Calculator } from 'lucide-react'
import { ThemeToggle } from '@/components/theme/theme-toggle'

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
    <div>
      <div className="invisible sm:visible sm:flex sm:absolute sm:right-8 sm:top-8">
        <ThemeToggle />
      </div>
      <div className="w-[350px] flex flex-col justify-center gap-6 pb-8">
        <div className="flex justify-between">
          <div className="flex items-center justify-center gap-2 text-lg text-foreground">
            <Calculator className="h-5 w-5" />
            <span className="font-semibold">OrçaFácil</span>
          </div>
          <div className="visible sm:invisible">
            <ThemeToggle />
          </div>
        </div>
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

        <div className="flex flex-col gap-2 text-center">
          <p className="text-sm text-muted-foreground">
            Já tem cadastro na plataforma?
          </p>
          <Button variant="secondary" asChild>
            <Link href={'/auth/sign-in'}>Realizar Login</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
