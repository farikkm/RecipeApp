interface Props {
   query: string
   setQuery: (query: string) => void
   handleSearch: (e: React.FormEvent) => void 
}

export default function SearchPanel({ query, setQuery, handleSearch }: Props) {
   return (
      <nav className="navbar navbar-light bg-light">
      <form
        className="form-inline"
        onSubmit={handleSearch}
        style={{
          width: "100%",
          padding: "0 15px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="form-control"
          style={{
            width: "100%",
          }}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
      </form>
    </nav>
   )
}