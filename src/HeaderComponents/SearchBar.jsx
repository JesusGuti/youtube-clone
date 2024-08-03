import SearchIcon from '../icons/SearchIcon' 

function SearchBar () {
    return (
        <section className="flex w-2/4 h-10">
            <input className="flex-1 rounded-tl-2xl rounded-bl-2xl bg-transparent p-4 border-2 border-gray-700/50 :border-blue-500" type="text" placeholder="Buscar" />
            
            <button className="w-16 rounded-tr-2xl rounded-br-2xl bg-gray-700/50 flex items-center justify-center">
                <SearchIcon />
            </button>
        </section>
    )
}

export default SearchBar
