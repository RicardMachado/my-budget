'use client'

import { ResponsiveContainer, Pie, PieChart, Cell } from 'recharts'
import { BarChart, Loader2 } from 'lucide-react'
import colors from 'tailwindcss/colors'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function BudgetStatusChart() {
  // const { data: popularProducts } = useQuery({
  //   queryKey: ['metrics', 'popular-products'],
  //   queryFn: GetPopularProducts
  // })

  const StatusBudget = [
    { status: 'Aprovadas', amount: 8 },
    { status: 'Em Execução', amount: 3 },
    { status: 'Concluídos', amount: 5 },
    { status: 'Cancelados', amount: 2 },
  ]

  const COLORS = [
    colors.sky[500],
    colors.amber[500],
    colors.emerald[500],
    colors.red[500],
  ]

  return (
    // <Card className="col-span-4">
    <Card>
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BarChart className="h-4 w-4 text-muted-foreground" />
            <CardTitle className="text-base font-medium">
              Orçamentos enviados
            </CardTitle>
          </div>
          <CardDescription className="text-2xl font-bold tracking-tight text-green-600">
            10
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        {StatusBudget ? (
          <ResponsiveContainer width="100%" height={240}>
            <PieChart style={{ fontSize: 12 }}>
              <Pie
                data={StatusBudget}
                dataKey="amount"
                nameKey="status"
                cx="50%"
                cy="50%"
                outerRadius={86}
                innerRadius={64}
                strokeWidth={8}
                labelLine={false}
                label={({
                  cx,
                  cy,
                  midAngle,
                  innerRadius,
                  outerRadius,
                  value,
                  index,
                }) => {
                  const RADIAN = Math.PI / 180
                  const radius = 12 + innerRadius + (outerRadius - innerRadius)
                  const x = cx + radius * Math.cos(-midAngle * RADIAN)
                  const y = cy + radius * Math.sin(-midAngle * RADIAN)

                  return (
                    <text
                      x={x}
                      y={y}
                      className="fill-muted-foreground text-xs"
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline="central"
                    >
                      {StatusBudget[index].status.length > 12
                        ? StatusBudget[index].status
                            .substring(0, 12)
                            .concat('...')
                        : StatusBudget[index].status}{' '}
                      ({value})
                    </text>
                  )
                }}
              >
                {StatusBudget.map((_, index) => {
                  return (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index]}
                      className="stroke-background hover:opacity-80"
                    />
                  )
                })}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-[240px] w-full items-center justify-center">
            <Loader2 className="h-8 w-8 text-muted-foreground animate-spin" />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
