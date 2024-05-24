'use client'

import { Controller, useForm } from 'react-hook-form'
import { useSearchParams } from 'next/navigation'
import { z } from 'zod'

import { zodResolver } from '@hookform/resolvers/zod'
import { Search, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const budgetFiltersSchema = z.object({
  budgetId: z.string().optional(),
  customerName: z.string().optional(),
  status: z.string().optional(),
})

type BudgetFiltersSchema = z.infer<typeof budgetFiltersSchema>

export function BudgetTableFilter() {
  const searchParams = useSearchParams()

  const budgetId = searchParams.get('budgetId')
  const customerName = searchParams.get('customerName')
  const status = searchParams.get('status')

  const { control, register, handleSubmit, reset } =
    useForm<BudgetFiltersSchema>({
      resolver: zodResolver(budgetFiltersSchema),
      defaultValues: {
        budgetId: budgetId ?? '',
        customerName: customerName ?? '',
        status: status ?? 'all',
      },
    })

  function handleFilter({
    budgetId,
    customerName,
    status,
  }: BudgetFiltersSchema) {
    // setSearchParams((state) => {
    //   if (budgetId) {
    //     state.set('budgetId', budgetId)
    //   } else {
    //     state.delete('budgetId')
    //   }
    //   if (customerName) {
    //     state.set('customerName', customerName)
    //   } else {
    //     state.delete('customerName')
    //   }
    //   if (status) {
    //     state.set('status', status)
    //   } else {
    //     state.delete('status')
    //   }
    //   state.set('page', '1')
    //   return state
    // })
  }

  function handleRemoverFilter() {
    // setSearchParams((state) => {
    //   state.delete('orderId')
    //   state.delete('customerName')
    //   state.delete('status')
    //   state.set('page', '1')

    //   return state
    // })

    reset({
      budgetId: '',
      customerName: '',
      status: 'all',
    })
  }

  return (
    <form
      className="flex flex-col md:flex-row items-center gap-2"
      onSubmit={handleSubmit(handleFilter)}
    >
      <span className="text-sm font-semibold">Filtros</span>
      <Input
        placeholder="Referencia do Orçamento"
        className="h-8 md:w-auto"
        {...register('budgetId')}
      />

      <Input
        placeholder="Nome do cliente"
        className="h-8 md:w-[320px]"
        {...register('customerName')}
      />

      <Controller
        name="status"
        control={control}
        render={({ field: { name, onChange, value, disabled } }) => {
          return (
            <Select
              defaultValue="all"
              name={name}
              onValueChange={onChange}
              value={value}
              disabled={disabled}
            >
              <SelectTrigger className="h-8 md:w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos status</SelectItem>
                <SelectItem value="sent">Enviada</SelectItem>
                <SelectItem value="approved">Aprovada</SelectItem>
                <SelectItem value="running">Em Execução</SelectItem>
                <SelectItem value="completed">Concluída</SelectItem>
                <SelectItem value="canceled">Cancelada</SelectItem>
              </SelectContent>
            </Select>
          )
        }}
      />

      <div className="grid grid-cols-2 gap-2 w-full md:w-auto">
        <Button type="submit" variant="secondary" size="xs">
          <Search className="h-4 w-4 mr-2" />
          Filtrar
        </Button>

        <Button
          type="button"
          variant="outline"
          size="xs"
          onClick={handleRemoverFilter}
        >
          <X className="h-4 w-4 mr-2" />
          Remover filtros
        </Button>
      </div>
    </form>
  )
}
