import { About } from "./_components/about";
import { Education } from "./_components/education";
import { Experience } from "./_components/experience";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";

export default function Home() {
    return (
        <main>
            <Header />
            <About />
            <Experience />
            <Education />
            <Footer />
        </main>
    );
}
