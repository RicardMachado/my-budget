'use client'

import { AppWindow, Calculator, Plus, Menu } from 'lucide-react'

import { Separator } from './ui/separator'
import { AccountMenu } from './account-menu'
import { NavLink } from './nav-link'
import { ThemeToggle } from './theme/theme-toggle'
import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { useRouter } from 'next/navigation'

export function Header() {
  const router = useRouter()

  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <div className="flex items-center justify-center gap-2 text-lg text-foreground">
          <Calculator className="h-6 w-6" />
          <span className="font-semibold hidden md:flex">OrçaFácil</span>
        </div>

        <Separator orientation="vertical" className="h-6" />

        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem onClick={() => router.push('/dashboard')}>
                <AppWindow className="h-4 w-4 mr-2" />
                Dashboard
              </DropdownMenuItem>
              {/* <DropdownMenuItem
                onClick={() => router.push('/dashboard/cliente')}
              >
                <Building2 className="h-4 w-4 mr-2" />
                Clientes
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => router.push('/dashboard/services')}
              >
                <BookPlus className="h-4 w-4 mr-2" />
                Serviços
              </DropdownMenuItem> */}
              <DropdownMenuItem
                onClick={() => router.push('/dashboard/new-budget')}
              >
                <Plus className="h-4 w-4 mr-2" />
                Novo Orçamento
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="hidden md:flex">
          <nav className="flex items-center space-x-4 lg:space-x-6">
            <NavLink href={'/dashboard'}>
              <AppWindow className="h-4 w-4" />
              Dashboard
            </NavLink>

            {/* <NavLink href={'/dashboard/cliente'}>
              <Building2 className="h-4 w-4" />
              Clientes
            </NavLink>

            <NavLink href={'/dashboard/services'}>
              <BookPlus className="h-4 w-4" />
              Serviços
            </NavLink> */}

            <NavLink href={'/dashboard/new-budget'}>
              <Plus className="h-4 w-4" />
              Novo Orçamento
            </NavLink>
          </nav>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  )
}
