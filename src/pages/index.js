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

                    <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                        <div className="flex justify-center pt-8 sm:justify-start sm:pt-0">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-12 h-12 text-red-500">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
                                />
                            </svg>
                            <h1 className="ml-3 font-bold text-[34px] text-gray-900 dark:text-white">
                                Kudasai.ai
                            </h1>
                        </div>

                        <div className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div className="p-6">
                                    <div className="flex items-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            className="w-8 h-8 text-gray-500">
                                            <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>

                                        <div className="ml-4 text-lg leading-7 font-semibold">
                                            <p className="text-gray-900 dark:text-white">
                                                Documentation
                                            </p>
                                        </div>
                                    </div>

                                    <div className="ml-12">
                                        <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                            Kudasai has wonderful, thorough
                                            documentation covering every aspect
                                            of the framework. Whether you are
                                            new to the framework or have
                                            previous experience with Kudasai, we
                                            recommend reading all of the
                                            documentation from beginning to end.
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-t-0 md:border-l">
                                    <div className="flex items-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            className="w-8 h-8 text-gray-500">
                                            <path d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                                            <path d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>

                                        <div className="ml-4 text-lg leading-7 font-semibold">
                                            <p className="text-gray-900 dark:text-white">
                                                Kudasai
                                            </p>
                                        </div>
                                    </div>

                                    <div className="ml-12">
                                        <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                            Kudasai offers thousands of video
                                            tutorials on Kudasai, PHP, and
                                            JavaScript development. Check them
                                            out, see for yourself, and massively
                                            level up your development skills in
                                            the process.
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                                    <div className="flex items-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            className="w-8 h-8 text-gray-500">
                                            <path d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                        </svg>

                                        <div className="ml-4 text-lg leading-7 font-semibold">
                                            <p className="text-gray-900 dark:text-white">
                                                Kudasai News
                                            </p>
                                        </div>
                                    </div>

                                    <div className="ml-12">
                                        <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                            Kudasai News is a community driven
                                            portal and newsletter aggregating
                                            all of the latest and most important
                                            news in the Kudasai ecosystem,
                                            including new package releases and
                                            tutorials.
                                        </div>
                                    </div>
                                </div>

                                <div className="p-6 border-t border-gray-200 dark:border-gray-700 md:border-l">
                                    <div className="flex items-center">
                                        <svg
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            className="w-8 h-8 text-gray-500">
                                            <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>

                                        <div className="ml-4 text-lg leading-7 font-semibold text-gray-900 dark:text-white">
                                            Vibrant Ecosystem
                                        </div>
                                    </div>

                                    <div className="ml-12">
                                        <div className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
                                            Kudasai's robust library of
                                            first-party tools and libraries,
                                            such as help you take your projects
                                            to the next level. Pair them with
                                            powerful open source libraries like
                                            , and more.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    )
}
