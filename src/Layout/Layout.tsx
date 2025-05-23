import { Outlet } from "react-router-dom"
import { Suspense } from "react"

const Layout = () => {
    return (
        <>
        <header className="header">header</header>
        <main className="main">
            <Suspense fallback={'loading...'}>
                <Outlet/>
            </Suspense>
        </main>
        <footer className="footer">footer</footer>
        </>
    )
}

export default Layout