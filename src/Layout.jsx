import Contents from "@components/ContentsComponents/Contents"
import Header from "@components/HeaderComponents/Header"
import Menu from "@components/MenuComponents/Menu"

function Layout () {
    return (
        <section id="layout" className="relative h-screen w-screen">
            <Header />
            <Menu />
            <Contents />
        </section>
    )
}

export default Layout
