import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Sidebar from './Sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import { MemoryRouter } from 'react-router-dom'

describe('Sidebar', () => {
  it('renders all navigation icons with tooltips', () => {
    render(
      <TooltipProvider>
        <MemoryRouter>
          <Sidebar />
        </MemoryRouter>
      </TooltipProvider>
    )

    const labels = ['Dashboard', 'Schedules', 'Songs', 'Messages']
    labels.forEach(label => {
      const link = screen.getByLabelText(label)
      expect(link).toBeInTheDocument()
    })
  })
})
