import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

type TActionCardProps = {
  title: string
  description: string
  children: React.ReactNode
  buttonName: string
}

export function ActionCard({
  title,
  description,
  children,
  buttonName,
}: TActionCardProps) {
  return (
    <Card>
      <CardHeader className="flex-row items-center space-y-0 justify-between pb-2">
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
        {children}
      </CardHeader>
      <CardContent className="flex flex-col gap-4 items-center">
        <p className="text-sm text-muted-foreground">{description}</p>
        <Button variant="outline" size="xs">
          {buttonName}
        </Button>
      </CardContent>
    </Card>
  )
}
