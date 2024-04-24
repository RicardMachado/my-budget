import { AppWindow, BookPlus, Building2, Calculator, Plus } from 'lucide-react'

import { Separator } from './ui/separator'
import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Calculator className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink href={'/dashboard'}>
            <AppWindow className="h-4 w-4" />
            Dashboard
          </NavLink>

          <NavLink href={'/dashboard/cliente'}>
            <Building2 className="h-4 w-4" />
            Clientes
          </NavLink>

          <NavLink href={'/dashboard/services'}>
            <BookPlus className="h-4 w-4" />
            Serviços
          </NavLink>

          <NavLink href={'/dashboard/new-budget'}>
            <Plus className="h-4 w-4" />
            Novo Orçamento
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
