import "./Header.css";

export default function Header() {
    return (
        <header>


            <h1 className="Header-Title"><a href="/" alt="Ernest Panfiloff Home Page">Ernestas Panfilovas</a></h1>
            <h1 className="Header-Title-Mobile">EP</h1>
            <nav className="Header-Links">
                <a href="https://medium.com/@ernestpanfiloff" target="_blank">Blog</a>
            </nav>


        </header>
    );
}
