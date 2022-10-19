import Head from 'next/head'
import Link from 'next/link'
import { useContext } from 'react'
import { Store } from '../utils/Store'

export default function Layout({ title, children }) {
    const { state } = useContext(Store)
    const { cart } = state
    return(
        <>
        <Head>
            <title>{title ? title + ' - NextShop' : 'NextShop'}</title>
            <meta name='description' content='Nextjs Ecommerce' />
            <link rel='icon' href='/favicon.ico' />
        </Head>
        <div className="flex min-h-screen flex-col justify-between">
            <header>
            <nav className="flex h-12 items-center px-4 justify-between shadow-md bg-slate-200">
                <Link href="/">
                    <a className="text-lg font-bold">Nextshop</a>
                </Link>
                <div>
                <Link href="/profile">
                    <a className="p-2">Profile</a>
                </Link>
                <Link href="/cart">
                    <a className="p-2">
                        Cart
                        {cart.cartItems.length > 0 && (
                            <span className="ml-1 rounded-full bg-red-600 px-2 py-1 text-xs font-bold text-white">
                                {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                            </span>
                        )}
                        </a>
                </Link>
                <Link href="/login">
                    <a className="p-2">Login</a>
                </Link>
                
                </div>
            </nav>
            </header>
            <main className="container m-auto mt-4 px-4">{children}</main>
            <footer className="flex h-10 justify-center items-center shadow-inner bg-red-100">
                <p>Copyright &copy; 2022 NextShop</p>
            </footer>
        </div>
        </>
    )
}