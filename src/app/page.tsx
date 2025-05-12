import { About } from "./_components/about";
import { Education } from "./_components/education";
import { Experience } from "./_components/experience";
import { Header } from "./_components/header";

export default function Home() {
    return (
        <main>
            <Header />
            <About />
            <Experience />
            <Education />
        </main>
    );
}
