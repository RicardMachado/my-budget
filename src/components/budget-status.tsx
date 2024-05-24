export type BudgetStatus =
  | 'send'
  | 'approved'
  | 'running'
  | 'completed'
  | 'canceled'

interface BudgetStatusProps {
  status: BudgetStatus
}

const budgetStatusMap: Record<BudgetStatus, string> = {
  send: 'Enviada',
  approved: 'Aprovada',
  running: 'Em Execução',
  completed: 'Concluída',
  canceled: 'Cancelada',
}

export function BudgetStatus({ status }: BudgetStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'send' && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-slate-400"
        />
      )}
      {status === 'canceled' && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-rose-500"
        />
      )}
      {status === 'completed' && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-emerald-500"
        />
      )}
      {['approved', 'running'].includes(status) && (
        <span
          data-testid="badge"
          className="h-2 w-2 rounded-full bg-amber-500"
        />
      )}
      <span className="font-medium text-muted-foreground">
        {budgetStatusMap[status]}
      </span>
    </div>
  )
}
