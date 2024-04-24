import { Building, ChevronDown, LogOut } from 'lucide-react'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center gap-2 select-none"
        >
          Configurações
          <ChevronDown className="w-4 h-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-72">
        <DropdownMenuLabel className="flex flex-col">
          <samp>Ricardo Machado</samp>
          <samp className="text-xs font-normal text-muted-foreground ">
            ricardo.machado10.rm@gmail.com
          </samp>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem
        // onClick={() => {}}
        >
          <Building className="w-4 h-4 mr-2" />
          <span>Perfil da Empresa</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-rose-500 dark:text-rose-400"
          // onClick={() => {}}
        >
          <LogOut className="w-4 h-4 mr-2" />
          <span>Sair</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
