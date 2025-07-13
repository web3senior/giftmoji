import Link from 'next/link'
import Image from 'next/image'
import Icon from '../helper/MaterialIcon'
import ConnectWallet from './ConnectWallet'
import CartButton from './CartButton'
import styles from './Header.module.scss'

export default function Header() {
  return (
    <>
      <header className={`${styles.header}`}>
        <ul className={`d-flex align-items-center justify-content-between`}>
          <li className={` d-flex align-items-end`}>
            <Link href={`/`} className={`${styles.logo} d-flex align-items-center justify-content-center`}>
              <figure className={`d-flex flex-row align-items-center`}>
                <Image src="/logo.svg" alt={`${process.env.NEXT_PUBLIC_NAME} Logo`} width={32} height={32} priority />
                <figcaption className={`d-flex flex-column align-items-start`}>
                  <h1>{process.env.NEXT_PUBLIC_NAME}</h1>
                  <small>{process.env.NEXT_PUBLIC_SLOGAN}</small>
                </figcaption>
              </figure>
            </Link>
          </li>
          <li className={` d-flex justify-content-end align-items-center`}>
            <ConnectWallet />
          </li>
        </ul>
      </header>
    </>
  )
}
