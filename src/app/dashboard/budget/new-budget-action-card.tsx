import { FileText } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

import { NewBudgetDialog } from './new-budget-dialog'

export function NewBudgetActionCard() {
  return (
    <Dialog>
      <Card>
        <CardHeader className="flex-row items-center space-y-0 justify-between pb-2">
          <CardTitle className="text-base font-semibold">
            Novo Orçamento
          </CardTitle>
          <FileText className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="flex flex-col gap-4 items-center">
          <p className="text-sm text-muted-foreground">
            Tudo Pronto... Vamos criar nosso orçamento
          </p>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              Criar
            </Button>
          </DialogTrigger>
        </CardContent>
      </Card>
      <NewBudgetDialog />
    </Dialog>
  )
}
