import Search from "../components/Search.component";
import List from "../components/List.component";

function Home() {  
    return (
        <>
            <header>
                <h1>Culinary Delights</h1>
                <Search />
            </header>
            <main>
                <List />
            </main>
        </>
    );
}

export default Home;