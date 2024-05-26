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
import { AlertCircle } from 'lucide-react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const serviceRegistrationSchema = z.object({
  description: z.string().min(6),
  total: z.number(),
  cost: z.number().nullable(),
  gainPercentage: z.number().nullable(),
})

type ServiceRegistrationSchema = z.infer<typeof serviceRegistrationSchema>

export function ServiceRegistrationDialog() {
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
  } = useForm<ServiceRegistrationSchema>({
    resolver: zodResolver(serviceRegistrationSchema),
  })

  async function handleUpdateProfile(data: ServiceRegistrationSchema) {
    try {
      console.log('data =>> ', data)

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
        <DialogTitle>Cadastro de Produto e/ou Serviço</DialogTitle>
        <DialogDescription>
          Cadastre seu produto e/ou serviço para que suas informações apareçam
          no orçamento!
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 pb-12">
          <div className="flex flex-col items-start gap-4">
            <Label className="text-right" htmlFor="description">
              Descrição do Produto/Serviço
            </Label>
            <Input id="description" {...register('description')} />
          </div>

          <div className="flex sm:flex-row flex-col gap-4">
            <div className="flex flex-col items-start gap-4">
              <Label className="flex flex-row gap-2 text-right" htmlFor="total">
                <TooltipProvider>
                  <Tooltip>
                    Valor
                    <TooltipTrigger>
                      <AlertCircle className="w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Valor total com o produto e/ou serviços.</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input id="total" type="number" {...register('total')} />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label className="flex flex-row gap-2 text-right" htmlFor="cost">
                <TooltipProvider>
                  <Tooltip>
                    Custo
                    <TooltipTrigger>
                      <AlertCircle className="w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Custo com o produto e/ou serviços. Se não houver custo,
                        deixe este campo em branco.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input id="cost" type="number" {...register('cost')} />
            </div>
            <div className="flex flex-col items-start gap-4">
              <Label
                className="flex flex-row gap-2 text-right"
                htmlFor="gainPercentage"
              >
                <TooltipProvider>
                  <Tooltip>
                    % de ganho
                    <TooltipTrigger>
                      <AlertCircle className="w-4 h-4" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>
                        Percentual de ganho com o produto e/ou serviços. Se não
                        houver custo, deixe este campo em branco.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </Label>
              <Input
                id="gainPercentage"
                type="number"
                {...register('gainPercentage')}
              />
            </div>
          </div>
        </div>

        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button variant="success" type="submit" disabled={isSubmitting}>
            Cadastrar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
