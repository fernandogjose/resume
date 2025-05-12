import Image from "next/image";
import about from "../../../public/about.png";

export function About() {
    return (
        <section className="py-16 bg-[FDF6ec]">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
                        <Image
                            src={about}
                            alt="Professional Summary"
                            fill
                            quality={100}
                            priority
                            className="object-cover hover:scale-110 duration-300"
                        />
                    </div>

                    <div>
                        <div className="space-y-6 mt-10">
                            <h2 className="text-4xl font-bold">
                                Professional Summary
                            </h2>
                            <p>
                                Professional with over 15 years of experience in
                                software development, with a strong focus on
                                Microsoft technologies (C#, .NET Core, .NET 8)
                                and AWS, in addition to knowledge in Python,
                                React and microservices architecture. Possesses
                                extensive experience in legacy system migration,
                                performance optimization and implementation of
                                scalable and highly available solutions.
                                Currently works as a senior developer and
                                technical lead, leading digital transformation
                                projects in large companies, including the
                                implementation of microservices-based solutions,
                                cloud computing and agile practices. Passionate
                                about teaching and empowering teams, promoting
                                the adoption of new technologies and best
                                practices in software development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
