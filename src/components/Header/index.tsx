import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaBars, FaTimes } from 'react-icons/fa'

import styles from './styles.module.css'

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Sobre', path: '/about' },
  { label: 'Skills', path: '/skills' }
]

export function Header () {
  const router = useRouter()
  const menu = useRef<HTMLUListElement>(null)

  const [menuOpen, setMenuOpen] = useState(false)
  const [menuBackground, setMenuBackground] = useState(false)

  function handleToggleMenu () {
    setMenuOpen(prev => !prev)
  }

  useEffect(() => {
    window.document.body.style.overflow = menuOpen ? 'hidden' : 'auto'
  }, [menuOpen])

  useEffect(() => {
    const onScroll = (e: Event) => {
      const window = e.currentTarget as Window

      if (window.scrollY === 0) {
        return setMenuBackground(false)
      }

      setMenuBackground(true)
    }

    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header id='mainheader' className={`fixed top-0 left-0 w-full h-16 flex px-4 z-10 ${menuBackground ? 'lg:bg-lg-gray-500-transparent' : ''}`}>
      <nav className={
				`
					h-screen
					w-[clamp(10rem,80vw,20rem)]
					backdrop-blur-lg
					bg-lg-gray-500-transparent
					text-white
					text-xl
					text-center
					px-4
					right-0
					absolute
					transition-transform
					${menuOpen ? 'translate-x-0' : 'translate-x-full'}

					lg:flex
					lg:items-center
					lg:justify-center
					lg:h-auto
					lg:w-full
					lg:bg-transparent
					lg:static
					lg:translate-x-0
					lg:text-base
					lg:transition-none
				`
				}
				ref={menu}>
				<button className='ml-auto h-16 flex items-center lg:hidden' type='button' onClick={handleToggleMenu} title='Close menu'>
					<FaTimes color='white' />
				</button>
        <ul className='lg:flex lg:gap-4'>
          {menuItems.map((item, index) => (
						<li key={index} className='mt-4 lg:mt-0'>
							<Link href={item.path} className={item.path === router.pathname ? styles['menu__item--active'] : styles.menu__item}>
								{item.label}
							</Link>
						</li>
          ))}
        </ul>
      </nav>
			<button className='ml-auto lg:hidden' type='button' onClick={handleToggleMenu} title='Open menu'>
				<FaBars color='white' />
			</button>
    </header>
  )
}
