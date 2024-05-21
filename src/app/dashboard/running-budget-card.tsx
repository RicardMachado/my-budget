import { AlertOctagon } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MetricCardSkeleton } from './metric-card-skeleton'

const card = true

export function RunningBudgetCard() {
  return (
    <Card>
      <CardHeader className="flex-row items-center space-y-0 justify-between pb-2">
        <CardTitle className="text-base font-semibold">Em Execução</CardTitle>
        <AlertOctagon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {card ? (
          <>
            <span className="text-2xl font-bold tracking-tight text-amber-600">
              2
            </span>
            <p className="text-sm text-muted-foreground">Orçamentos</p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
