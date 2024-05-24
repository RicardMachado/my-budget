import { Metadata } from 'next'
import { BudgetInCardNegotiation } from './budget-in-card-negotiation'
import { RunningBudgetCard } from './running-budget-card'
// import { CompletedBudgetCard } from './completed-budget-card'
// import { BudgetCanceledCard } from './budget-canceled-card'
import { BudgetStatusChart } from './ budget-status-chart'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
        Dashboard
      </h1>

      <div className="grid grid-rows-2 md:grid-cols-3 gap-4">
        <div className="grid grid-rows-2 md:col-span-2 gap-4">
          <BudgetInCardNegotiation />
          <RunningBudgetCard />
          {/* <CompletedBudgetCard /> */}
          {/* <BudgetCanceledCard /> */}
        </div>

        <div className="grid gap-4">
          <BudgetStatusChart />
        </div>
      </div>
    </div>
  )
}
