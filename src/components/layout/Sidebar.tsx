// src/components/layout/Sidebar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Calendar, Music, MessageCircle } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import clsx from 'clsx'

const links = [
  { href: '/', icon: Home, label: 'Dashboard' },
  { href: '/schedules', icon: Calendar, label: 'Schedules' },
  { href: '/songs', icon: Music, label: 'Songs' },
  { href: '/messages', icon: MessageCircle, label: 'Messages' },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <TooltipProvider>
      <aside className="h-screen w-16 flex flex-col items-center bg-gray-100 dark:bg-gray-900 py-4 border-r border-gray-200 dark:border-gray-700">
        {links.map(({ href, icon: Icon, label }) => (
          <Tooltip key={href}>
            <TooltipTrigger asChild>
              <Link
                href={href}
                className={clsx(
                  'mb-4 p-2 rounded-lg transition-all hover:bg-gray-200 dark:hover:bg-gray-700',
                  pathname === href && 'bg-gray-300 dark:bg-gray-800'
                )}
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </aside>
    </TooltipProvider>
  )
}
