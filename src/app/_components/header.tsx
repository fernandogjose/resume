import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import imgPerfil from "../../../public/foto-fe.png";

export function Header() {
    return (
        <section className="bg-[#E84C3D] text-white relative ovverflow-hidden">
            <div className="">
                <Image
                    src={imgPerfil}
                    alt="Fernando José"
                    fill
                    sizes="100vw"
                    quality={100}
                    priority
                    className="object-cover opacity-60 lg:hidden"
                />
                <div className="absolute inset-0 bg-black opacity-40 md:hidden"></div>
            </div>

            <div className="container mx-auto pt-16 pb-16 md:pb-0 relative">
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
                    <div className="space-y-6 ml-4">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10 ">
                            Full Stack Developer with 15+ years of experience
                            building scalable and modern solutions
                        </h1>

                        <p className="lg:text-lg">
                            Expert in C#, .NET, Python, React, Angular, and
                            Next.js. Skilled in developing high-performance
                            systems, microservices architectures, and
                            cloud-native applications with AWS and Azure.
                        </p>

                        <a
                            href="#"
                            className="bg-green-500 px-5 py-2 rounded-md font-semibold flex intems-center justify-center w-fit gap-2"
                        >
                            <WhatsappLogo className="w-5 h-5 mt-[3px]" />
                            Contato via WhatsApp
                        </a>

                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <a
                                    href="https://linkedin.com/in/fernandogjose"
                                    target="_blank"
                                >
                                    LinkedIn |
                                </a>
                                &nbsp;
                                <a
                                    href="https://github.com/fernandogjose"
                                    target="_blank"
                                >
                                    GitHub
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="hidden md:block h-full relative">
                        <Image
                            src={imgPerfil}
                            alt="Fernando José"
                            className="object-contain"
                            fill
                            sizes="(max-width: 768px) 0vw, 50vw)"
                            quality={100}
                            priority
                        />
                    </div>
                </article>
            </div>
        </section>
    );
}
