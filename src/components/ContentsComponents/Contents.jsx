import Thumbnail from "./Thumbnail"

function Contents () {
    return (
        <main className="[grid-area:contents] grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 p-8 gap-5">
            <Thumbnail />
            <Thumbnail />
            <Thumbnail />

        </main>
    )
}

export default Contents
