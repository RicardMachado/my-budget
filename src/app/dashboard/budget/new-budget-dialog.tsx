'use client'
import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { toast } from '@/components/ui/use-toast'

const newBudgetSchema = z.object({
  companyName: z.string().min(6),
  email: z.string().email(),
  companyDocFiscal: z.string(),
  phone: z.string(),
})

type NewBudgetSchema = z.infer<typeof newBudgetSchema>

export function NewBudgetDialog() {
  // const queryClient = useQueryClient()

  // const { data: managedRestaurant } = useQuery({
  //   queryKey: ['managedRestaurant'],
  //   queryFn: getManagedRestaurant,
  //   staleTime: Infinity,
  // })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<NewBudgetSchema>({
    resolver: zodResolver(newBudgetSchema),
  })

  async function handleUpdateProfile(data: NewBudgetSchema) {
    try {
      console.log('data =>> ', data)
      // await updateProfileFn({
      //   name: data.name,
      //   description: data.description,
      // })

      toast({
        title: 'Sucesso',
        description: 'Perfil atualizado com sucesso',
      })
    } catch (err) {
      toast({
        title: 'Erro',
        description: 'Falha ao atualizar o perfil, tente novamente!',
      })
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Criar Orçamento</DialogTitle>
        <DialogDescription>Crie seu orçamento aqui!</DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 pb-12">
          <div className="flex flex-col items-start gap-4">
            <Label className="text-right" htmlFor="companyName">
              Selecione Cliente*
            </Label>
            <Input id="companyName" {...register('companyName')} />
          </div>

          {/* <div className="flex flex-col items-start gap-4">
            <Label className="text-right" htmlFor="email">
              E-mail *
            </Label>
            <Input id="email" {...register('email')} />
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col items-start gap-4">
              <Label className="text-right" htmlFor="companyDocFiscal">
                CNPJ ou CPF
              </Label>
              <Input id="companyDocFiscal" {...register('companyDocFiscal')} />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label className="text-right" htmlFor="phone">
                Telefone *
              </Label>
              <Input id="phone" {...register('phone')} />
            </div>
          </div> */}
        </div>

        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button variant="success" type="submit" disabled={isSubmitting}>
            Criar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
