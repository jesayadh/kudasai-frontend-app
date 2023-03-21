import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import AppLayout from '@/components/Layouts/AppLayout'

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <AppLayout
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Dashboard
                    </h2>
                }>
                <Head>
                    <title>Kudasai</title>
                </Head>

                <div className="relative flex items-top justify-center min-h-screen bg-gray-100 dark:bg-gray-900 sm:items-center sm:pt-0">
                    <div className="hidden fixed top-0 right-0 px-6 py-4 sm:block">
                        {user ? (
                            <Link
                                href="/dashboard"
                                className="ml-4 text-sm text-gray-700 underline">
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href="/login"
                                    className="text-sm text-gray-700 underline">
                                    Login
                                </Link>

                                <Link
                                    href="/register"
                                    className="ml-4 text-sm text-gray-700 underline">
                                    Register
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </AppLayout>
        </>
    )
}
