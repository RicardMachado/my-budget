import { BookPlus } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { ServiceRegistrationDialog } from './service-registration-dialog'

export function ServiceActionCard() {
  return (
    <Dialog>
      <Card>
        <CardHeader className="flex-row items-center space-y-0 justify-between pb-2">
          <CardTitle className="text-base font-semibold">Serviços</CardTitle>
          <BookPlus className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent className="flex flex-col gap-4 items-center">
          <p className="text-sm text-muted-foreground">
            Cadastre um novo serviço em nosso sistema antes de gerar um
            orçamento
          </p>
          <DialogTrigger asChild>
            <Button variant="outline" size="xs">
              Cadastrar
            </Button>
          </DialogTrigger>
        </CardContent>
      </Card>
      <ServiceRegistrationDialog />
    </Dialog>
  )
}
