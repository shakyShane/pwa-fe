import {h} from 'preact';
import {Router} from 'preact-router';
import {Home} from "./routes/Home";
import {NotFound} from "./routes/NotFound";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";

export function Shell(props: {title: string}) {
    return (
        <div>
            <Header />
            <Router>
                <Home path="/"/>
                <NotFound default/>
            </Router>
            <Footer />
        </div>
    );
}
