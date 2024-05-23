import { useForm } from 'react-hook-form'
import { DialogTitle } from '@radix-ui/react-dialog'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
} from './ui/dialog'
import { Button } from './ui/button'
import { Label } from './ui/label'
import { Input } from './ui/input'
// import { Textarea } from './ui/textarea'

import { toast } from './ui/use-toast'

const storeProfileSchema = z.object({
  companyName: z.string().min(6),
  email: z.string().email(),
  companyDocFiscal: z.string(),
  phone: z.string(),
})

type StoreProfileSchema = z.infer<typeof storeProfileSchema>

export function StoreProfileDialog() {
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
  } = useForm<StoreProfileSchema>({
    resolver: zodResolver(storeProfileSchema),
    defaultValues: {
      companyName: 'RM Soluções',
      email: 'contato@rmsoluçoes.com',
      companyDocFiscal: 'XXX. XXX/0001-XX',
      phone: '91 9999 9999',
    },
    // values: {
    //   name: managedRestaurant?.name ?? '',
    //   description: managedRestaurant?.description ?? '',
    // },
  })

  // function updateManagedRestaurantCache({
  //   name,
  //   description,
  // }: StoreProfileSchema) {
  //   const cached = queryClient.getQueryData<GetManagedRestaurantResponse>([
  //     'managedRestaurant',
  //   ])

  //   if (cached) {
  //     queryClient.setQueryData<GetManagedRestaurantResponse>(
  //       ['managedRestaurant'],
  //       {
  //         ...cached,
  //         name,
  //         description,
  //       },
  //     )
  //   }

  //   return { cached }
  // }

  // const { mutateAsync: updateProfileFn } = useMutation({
  //   mutationFn: updateProfile,
  //   onMutate({ name, description }) {
  //     const { cached } = updateManagedRestaurantCache({ name, description })
  //     return { previousProfile: cached }
  //   },
  //   onError(_, __, context) {
  //     if (context?.previousProfile) {
  //       updateManagedRestaurantCache(context.previousProfile)
  //     }
  //   },
  // })

  async function handleUpdateProfile(data: StoreProfileSchema) {
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
        <DialogTitle>Perfil da Empresa</DialogTitle>
        <DialogDescription>
          Atualize as informações do seu negocio visíveis ao seu cliente
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(handleUpdateProfile)}>
        <div className="space-y-4 pb-12">
          <div className="flex flex-col items-start gap-4">
            <Label className="text-right" htmlFor="companyName">
              Nome ou Razão Social *
            </Label>
            <Input id="companyName" {...register('companyName')} />
          </div>

          <div className="flex flex-col items-start gap-4">
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
          </div>
        </div>

        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button variant="ghost" type="button">
              Cancelar
            </Button>
          </DialogClose>
          <Button variant="success" type="submit" disabled={isSubmitting}>
            Salvar
          </Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
