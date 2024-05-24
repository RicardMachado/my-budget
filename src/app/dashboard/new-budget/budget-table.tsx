'use client'
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Pagination } from '@/components/pagination'

import { BudgetTableRow } from './budget-table-row'
import { BudgetTableFilter } from './budget-table-filters'

const result = {
  budget: [
    {
      budgetId: '001',
      customerName: 'John Smith',
      createdAt: '2024-05-24',
      status: 'sent',
      total: 2800,
    },
    {
      budgetId: '002',
      customerName: 'John Doe',
      createdAt: '2024-05-23',
      status: 'approved',
      total: 1800,
    },
    {
      budgetId: '003',
      customerName: 'John OutraCoisa',
      createdAt: '2024-05-22',
      status: 'completed',
      total: 5800,
    },
  ],
}

export default function BudgetTable() {
  function handlePaginate() {}

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
        Listagem de Orçamentos
      </h1>
      <div className="space-y-2.5">
        <BudgetTableFilter />
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[64px]"></TableHead>
                <TableHead className="w-[140px]">Referencia</TableHead>
                <TableHead>Cliente</TableHead>
                <TableHead className="w-[180px]">Realizado há</TableHead>
                <TableHead className="w-[140px]">Status</TableHead>
                <TableHead className="w-[140px]">Total</TableHead>
                <TableHead className="w-[164px]"></TableHead>
                <TableHead className="w-[132px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {/* {isLoadingOrders && <OrderTableSkeleton />} */}

              {result &&
                result.budget.map((budget) => {
                  return (
                    <BudgetTableRow key={budget.budgetId} budget={budget} />
                  )
                })}
            </TableBody>
          </Table>
        </div>
        {result && (
          <Pagination
            pageIndex={0}
            perPage={1}
            totalCount={1}
            onPageChange={handlePaginate}
          />
        )}
      </div>
    </div>
  )
}
