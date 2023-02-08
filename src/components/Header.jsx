import "./Header.css";

export default function Header() {
    return (
        <header>


            <h1 className="Header-Title"><a href="/" alt="Ernest Panfiloff Home Page">Ernest Panfiloff</a></h1>
            <h1 className="Header-Title-Mobile">EP</h1>
            <nav className="Header-Links">
                {/* <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a> */}
            </nav>


        </header>
    );
}
