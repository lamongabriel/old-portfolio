import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from './styles.module.css'

const menuItems = [
  { label: 'Home', path: '/' },
  { label: 'Sobre', path: '/about' },
  { label: 'Certificados', path: '/certificates' },
  { label: 'Projetos', path: '/projects' }
]

export function Header () {
  const router = useRouter()

  return (
    <header className="fixed top-0 left-0 w-full h-16">
      <nav>
        <ul className="flex items-center justify-center gap-4 h-16 text-white">
          {menuItems.map((item, index) => (
						<li key={index}>
							<Link href={item.path} className={item.path === router.pathname ? styles['menu__item--active'] : styles.menu__item}>
								{item.label}
							</Link>
						</li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
