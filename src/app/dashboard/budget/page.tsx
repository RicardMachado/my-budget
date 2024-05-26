import { Metadata } from 'next'

import BudgetTable from './budget-table'
import { CustomerActionCard } from './customer-action-card'
import { ServiceActionCard } from './service-action-card'
import { NewBudgetActionCard } from './new-budget-action-card'

export const metadata: Metadata = {
  title: 'Orçamentos',
}

export default function Budget() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Cadastro</h1>
      <div className="grid grid-rows-1 sm:grid-cols-3 gap-4">
        <CustomerActionCard />
        <ServiceActionCard />
        <NewBudgetActionCard />
      </div>
      <BudgetTable />
    </div>
  )
}
