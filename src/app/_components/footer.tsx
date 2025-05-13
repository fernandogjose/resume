import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

export function Footer() {
    return (
        <section className="bg-[#E84c3d] py-16 text-white">
            <div className="container mx-auto px-4">
                <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5 items-center text-center">
                    <div>
                        <h3 className="text-2xl font-semibold mb-2">
                            Fernando Goncalves Jose
                        </h3>
                        <p className="mb-4">Full Stack & Back-End Developer</p>
                        <a
                            href={`https://wa.me/5511996747551?text=Hello Fernando! I found your portfolio and I'd like to talk to you.`}
                            target="_blank"
                            className="mx-auto bg-green-500 px-5 py-2 rounded-md font-semibold flex w-fit gap-2 "
                        >
                            <WhatsappLogo className="w-5 h-5 mt-[3px]" />
                            You can reach me on WhatsApp
                        </a>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Contact</h3>
                        <p>Email: fernandogjose@gmail.com</p>
                        <p>Phone: +55 11 996747551</p>
                        <p>Brazil - SP - Sao Paulo</p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">
                            Connect with me
                        </h3>
                        <a
                            href="https://linkedin.com/in/fernandogjose"
                            target="_blank"
                        >
                            LinkedIn |{" "}
                        </a>
                        <a
                            href="https://github.com/fernandogjose"
                            target="_blank"
                        >
                            GitHub
                        </a>
                    </div>
                </footer>
            </div>
        </section>
    );
}
