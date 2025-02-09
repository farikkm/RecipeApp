import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Search() {
   return (
      <div className="wrapper container">
         <Header />
         <main className="main">
            <h1>Search Page</h1>
            <nav className="navbar navbar-light bg-light">
               <form className="form-inline" style={{width: '100%', padding: '0 15px', display: "flex", flexDirection: 'column', gap: '10px'}}>
                  <input className="form-control" style={{
                     width: '100%'
                  }} type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
               </form>
            </nav>
         </main>
         <Footer />
      </div>
   )
}