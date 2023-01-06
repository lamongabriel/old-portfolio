import React, { ReactElement, useRef, useState } from 'react'

import { Box } from '../Box'
import { TabProps } from './Tab'

interface TabsProps {
  children: Array<ReactElement<TabProps>>
}

export function Tabs ({ children }: TabsProps) {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = React.Children.map(children, fn => (
    { title: fn.props.title, content: fn.props.children }
  ))

  const tabsRef = useRef<HTMLButtonElement[]>([])

  function setIndex (index: number) {
    const tab = tabsRef.current[index]
    if (tab) {
      tab.focus()
    }
  }

  function onKeyDown (event: React.KeyboardEvent) {
    const count = tabs.length

    const nextTab = () => setIndex((activeTab + 1) % count)
    const prevTab = () => setIndex((activeTab - 1 + count) % count)
    const firstTab = () => setIndex(0)
    const lastTab = () => setIndex(count - 1)

    switch (event.key) {
      case 'ArrowRight':
        nextTab()
        break
      case 'ArrowLeft':
        prevTab()
        break
      case 'Home':
        firstTab()
        break
      case 'End':
        lastTab()
        break
    }
  };

  return (
		<div className='my-6'>
			<div className='flex sm:gap-4 flex-col justify-start sm:flex-row mb-6' role="tablist" aria-orientation="horizontal">
				{tabs.map((tab, index) => {
				  const active = index === activeTab
				  return (
						<button
							id={`tab-id-${index}`}
							key={`tab-id-${index}`}

							role="tab"
							aria-controls={`panel-id-${index}`}
							aria-selected={activeTab === index}

							ref={(element) => { tabsRef.current.push(element as HTMLButtonElement) }}

							onClick={() => setActiveTab(index)}
							onFocus={() => setActiveTab(index)}
							onKeyDown={onKeyDown}

							className={`
								cursor-pointer
								hover:bg-[rgba(255,255,255,0.2)]
								transition-colors
								p-4
								${active ? 'text-lg-white-500' : 'text-gray-400'}
								`
							}
						>
							{tab.title}
						</button>
				  )
				})}
			</div>
			<Box className='tabpanel-wrapper'>
				<div role="tabpanel" aria-labelledby={`tab-id-${activeTab}`} id={`panel-id-${activeTab}`}>
					{tabs[activeTab].content}
				</div>
			</Box>
		</div>
  )
}
