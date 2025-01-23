import Search from "../components/Search.component";
import List from "../components/List.component";
import Footer from "../components/Footer.component";
import "./Home.page.scss";
import { useEffect } from "react";

function Home() {
    useEffect(() => {
        const scrollPosition = sessionStorage.getItem("scrollPosition");
        if (scrollPosition) {
            window.scrollTo(0, parseInt(scrollPosition, 10));
        } else {
            window.scrollTo(0, 0);
        }
    }, []);

    const forwardHandler = () => {
        sessionStorage.setItem("scrollPosition", window.scrollY);
    };

    return (
        <>
            <header>
                <h1>Culinary Delights</h1>
                <Search />
            </header>
            <main>
                <List forwardHandler={forwardHandler} />
            </main>
            <Footer />
        </>
    );
}

export default Home;
