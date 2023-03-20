import Navigation2 from '@/components/Layouts/Navigation2'
import { useAuth } from '@/hooks/auth'
import Footer from '../Nav/footer'

const AppLayout = ({ children }) => {
    const { user } = useAuth({ middleware: 'auth' })

    return (
        <div className="min-h-screen bg-gray-100">
            <Navigation2 user={user} />

            {/* Page Content */}
            <main>{children}</main>

            <Footer />
        </div>
    )
}

export default AppLayout
