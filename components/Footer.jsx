'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './Footer.module.scss'

const pages = [
  {
    name: `Emojis`,
    path: '',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M480-340q63 0 112-39t63-101h-83q-12 27-37 43.5T480-420q-30 0-55-16.5T388-480h-83q14 62 63 101t112 39ZM370-540q21 0 35.5-14.5T420-590q0-21-14.5-35.5T370-640q-21 0-35.5 14.5T320-590q0 21 14.5 35.5T370-540Zm220 0q21 0 35.5-14.5T640-590q0-21-14.5-35.5T590-640q-21 0-35.5 14.5T540-590q0 21 14.5 35.5T590-540ZM480-120l-58-50q-101-88-167-152T150-437q-39-51-54.5-94T80-620q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 89T810-437q-39 51-105 115T538-170l-58 50Z"/></svg>`,
    disabled: false
  },
  {
    name: `Inbox`,
    path: 'inbox',
    icon: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.30775 17.5C1.80258 17.5 1.375 17.325 1.025 16.975C0.675 16.625 0.5 16.1974 0.5 15.6923V2.30775C0.5 1.80258 0.675 1.375 1.025 1.025C1.375 0.675 1.80258 0.5 2.30775 0.5H15.6923C16.1974 0.5 16.625 0.675 16.975 1.025C17.325 1.375 17.5 1.80258 17.5 2.30775V15.6923C17.5 16.1974 17.325 16.625 16.975 16.975C16.625 17.325 16.1974 17.5 15.6923 17.5H2.30775ZM9 13.3078C9.63333 13.3078 10.2083 13.1244 10.725 12.7578C11.2417 12.3911 11.6 11.9078 11.8 11.3078H16V2.30775C16 2.21792 15.9712 2.14417 15.9135 2.0865C15.8558 2.02883 15.7821 2 15.6923 2H2.30775C2.21792 2 2.14417 2.02883 2.0865 2.0865C2.02883 2.14417 2 2.21792 2 2.30775V11.3078H6.2C6.4 11.9078 6.75833 12.3911 7.275 12.7578C7.79167 13.1244 8.36667 13.3078 9 13.3078ZM4.25 9.077H13.75V7.577H4.25V9.077ZM4.25 5.7885H13.75V4.2885H4.25V5.7885Z"/></svg>`,
    disabled: false
  },
  {
    name: `Leaderboard`,
    path: 'leaderboard',
    icon: `<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.88475 17.8408V6.84082H5.7115V17.8408H0.88475ZM7.4905 17.8408V0.84082H12.5095V17.8408H7.4905ZM14.2885 17.8408V8.84082H19.1152V17.8408H14.2885Z"/></svg>`,
    disabled: true
  },
   {
    name: `Profile`,
    path: 'user/profile',
    icon: `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.375 8.65894C7.275 8.65894 6.33333 8.26727 5.55 7.48394C4.76667 6.7006 4.375 5.75894 4.375 4.65894C4.375 3.55894 4.76667 2.61727 5.55 1.83394C6.33333 1.0506 7.275 0.658936 8.375 0.658936C9.475 0.658936 10.4167 1.0506 11.2 1.83394C11.9833 2.61727 12.375 3.55894 12.375 4.65894C12.375 5.75894 11.9833 6.7006 11.2 7.48394C10.4167 8.26727 9.475 8.65894 8.375 8.65894ZM0.375 16.6589V13.8589C0.375 13.2923 0.520833 12.7714 0.8125 12.2964C1.10417 11.8214 1.49167 11.4589 1.975 11.2089C3.00833 10.6923 4.05833 10.3048 5.125 10.0464C6.19167 9.7881 7.275 9.65894 8.375 9.65894C9.475 9.65894 10.5583 9.7881 11.625 10.0464C12.6917 10.3048 13.7417 10.6923 14.775 11.2089C15.2583 11.4589 15.6458 11.8214 15.9375 12.2964C16.2292 12.7714 16.375 13.2923 16.375 13.8589V16.6589H0.375Z"/></svg>`,
    disabled: false
  },
]

export default function Footer() {
  const pathname = usePathname()

  /**
   * Get the last visited page
   * @returns string
   */
  const getLastVisitedPage = async () => await JSON.parse(localStorage.getItem(`lastVisitedPage`))

  return (
    <footer className={`${styles.footer} rounded`}>
      <ul className={`d-flex flex-row aling-items-center justify-content-between`}>
        {pages && pages.filter(filterItem => !filterItem.disabled).map((link, i) => {
          return (
            <li key={i}>
              <Link href={`/${link.path}`} data-active={pathname === `/${link.path}` ? true : false}>
                <div className={`d-f-c`} dangerouslySetInnerHTML={{ __html: link.icon }} />
                <small>{link.name}</small>
              </Link>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}
