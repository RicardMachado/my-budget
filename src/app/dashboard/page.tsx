import { Metadata } from 'next'
import { BudgetInCardNegotiation } from './budget-in-card-negotiation'
import { RunningBudgetCard } from './running-budget-card'
import { CompletedBudgetCard } from './completed-budget-card'
import { BudgetCanceledCard } from './budget-canceled-card'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <BudgetInCardNegotiation />
        <RunningBudgetCard />
        <CompletedBudgetCard />
        <BudgetCanceledCard />
      </div>
    </div>
  )
}
