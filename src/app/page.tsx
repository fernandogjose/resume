import { About } from "./_components/about";
import { Experience } from "./_components/experience";
import { Header } from "./_components/header";

export default function Home() {
    return (
        <main>
            <Header />
            <About />
            <Experience />
        </main>
    );
}
