'use client'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'

export type TNavLinkProps = {
  children?: React.ReactNode
} & LinkProps

export function NavLink(props: TNavLinkProps) {
  const pathname = usePathname()

  return (
    <Link
      {...props}
      data-current={pathname === props.href}
      // className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
    />
  )
}
