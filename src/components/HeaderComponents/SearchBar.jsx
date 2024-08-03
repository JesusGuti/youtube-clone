import SearchIcon from '@icons/SearchIcon' 

function SearchBar () {
    return (
        <section className="flex w-2/5 h-10">
            <input className="rounded-tl-2xl rounded-bl-2xl bg-zinc-950/70 p-4 border-2 border-zinc-600/50 :border-blue-500" type="text" placeholder="Buscar" />
            
            <button className="w-16 rounded-tr-2xl rounded-br-2xl bg-gray-700/50 flex items-center justify-center">
                <SearchIcon />
            </button>
        </section>
    )
}

export default SearchBar
