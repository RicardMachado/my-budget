import { Metadata } from 'next'

import BudgetTable from './budget-table'
import { ActionCard } from './action-card'
import { BookPlus, FileText, Users2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Orçamentos',
}

export default function NewBudget() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl sm:text-2xl font-bold tracking-tight">Cadastro</h1>
      <div className="grid grid-rows-1 sm:grid-cols-3 gap-4">
        <ActionCard
          title="Clientes"
          description="Cadastre um novo cliente em nosso sistema antes de gerar um orçamento"
          buttonName="Cadastrar"
        >
          <Users2 className="h-4 w-4 text-muted-foreground" />
        </ActionCard>

        <ActionCard
          title="Serviços"
          description="Cadastre um novo serviço em nosso sistema antes de gerar um orçamento"
          buttonName="Cadastrar"
        >
          <BookPlus className="h-4 w-4 text-muted-foreground" />
        </ActionCard>

        <ActionCard
          title="Novo Orçamento"
          description="Tudo Pronto... Vamos criar nosso orçamento"
          buttonName="Criar"
        >
          <FileText className="h-4 w-4 text-muted-foreground" />
        </ActionCard>
      </div>
      <BudgetTable />
    </div>
  )
}
