import "./App.css";
import Nav from "./component/Nav";
import Header from "./component/Header";
import AuthButton from "./component/AuthButton";
import Trending from "./component/Trending";

function App() {
    return (
        <div className="grid md:grid-cols-5">
            <Nav />
            <main className="px-12 py-6 md:col-span-4 bg-cyan-50">
                <AuthButton />
                <Header/>
                <Trending/>
            </main>
        </div>
    );
}

export default App;
