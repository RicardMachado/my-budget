'use client'

import { useState } from 'react'
import { Search, X } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'
import { BudgetStatus } from '@/components/budget-status'
interface BudgetTableRowProps {
  budget: {
    budgetId: string
    customerName: string
    createdAt: string
    status: 'send' | 'approved' | 'running' | 'completed' | 'canceled'
    total: number
  }
}

export function BudgetTableRow({ budget }: BudgetTableRowProps) {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false)
  // const queryClient = useQueryClient()

  // function updateOrderStatusOnCache(orderId: string, status: OrderStatus) {
  //   const orderListCached = queryClient.getQueriesData<GetOrdersResponse>({
  //     queryKey: ['orders']
  //   })

  //   orderListCached.forEach(([ cacheKey, cacheData ]) => {
  //     if (!cacheData) {
  //       return
  //     }

  //     queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
  //       ...cacheData,
  //       orders: cacheData.orders.map(order => {
  //         if(order.orderId === orderId) {
  //           return { ...order, status}
  //         }
  //         return order
  //       })
  //     })
  //   })
  // }

  // const { mutateAsync: cancelOrderFn, isPending: isCancelingOrder } = useMutation({
  //   mutationFn: cancelOrder,
  //   async onSuccess(_, { orderId }) {
  //     updateOrderStatusOnCache(orderId, 'canceled')
  //   },
  // })

  // const { mutateAsync: approveOrderFn, isPending: isApprovingOrder } = useMutation({
  //   mutationFn: approveOrder,
  //   async onSuccess(_, { orderId }) {
  //     updateOrderStatusOnCache(orderId, 'processing')
  //   },
  // })

  // const { mutateAsync: dispatchOrderFn, isPending: isDispatchingOrder } = useMutation({
  //   mutationFn: dispatchOrder,
  //   async onSuccess(_, { orderId }) {
  //     updateOrderStatusOnCache(orderId, 'delivering')
  //   },
  // })

  // const { mutateAsync: deliverOrderFn, isPending: isDeliveringOrder } = useMutation({
  //   mutationFn: deliverOrder,
  //   async onSuccess(_, { orderId }) {
  //     updateOrderStatusOnCache(orderId, 'delivered')
  //   },
  // })

  return (
    <TableRow>
      <TableCell>
        <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              <Search className="h-3 w-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          {/* <OrderDetails orderId={order.orderId} open={isDetailsOpen} /> */}
        </Dialog>
      </TableCell>
      <TableCell className="font-mono text-sm font-medium">
        {budget.budgetId}
      </TableCell>
      <TableCell className="font-medium">{budget.customerName}</TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(budget.createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>
        <BudgetStatus status={budget.status} />
      </TableCell>
      <TableCell className="font-medium">
        {(budget.total / 100).toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell>
      <TableCell>
        botão de ação
        {/* {order.status === 'pending' && (
          <Button
            variant="outline"
            size="xs"
            onClick={() => approveOrderFn({ orderId: order.orderId })}
            disabled={isApprovingOrder}
          >
            <ArrowRight className="h-3 w-3 mr-3" />
            Aprovar
          </Button>
        )}

        {order.status === 'processing' && (
          <Button
            variant="outline"
            size="xs"
            onClick={() => dispatchOrderFn({ orderId: order.orderId })}
            disabled={isDispatchingOrder}
          >
            <ArrowRight className="h-3 w-3 mr-3" />
            Em entrega
          </Button>
        )}

        {order.status === 'delivering' && (
          <Button
            variant="outline"
            size="xs"
            onClick={() => deliverOrderFn({ orderId: order.orderId })}
            disabled={isDeliveringOrder}
          >
            <ArrowRight className="h-3 w-3 mr-3" />
            Entregue
          </Button>
        )} */}
      </TableCell>
      <TableCell>
        <Button
          variant="ghost"
          size="xs"
          // onClick={() => cancelOrderFn({ orderId: order.orderId })}
          onClick={() => {}}
          // disabled={
          //   !['pending', 'processing'].includes(order.status) ||
          //   isCancelingOrder
          // }
        >
          <X className="h-3 w-3 mr-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
