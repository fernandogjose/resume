"use client";
import useEmblaCarousel from "embla-carousel-react";
import {
    ChevronLeft,
    ChevronRight,
    MapPinned,
    Calendar,
    Building2,
} from "lucide-react";
import { title } from "process";

const jobs = [
    {
        title: "Senior Developer",
        company: "BMG Bank",
        location: "São Paulo, Brazil",
        date: "May 2024 - Present",
        descriptions: [
            "Involved from the beginning in the project to migrate the customer registration system to a new modern platform based on .NET 8, with a microservices architecture.",
            "Development of scalable solutions in C#, .NET Core and .NET 8, with Oracle database and React frontend.",
            "Implementation of microservices with asynchronous communication via Kafka and performance optimization with Redis, resulting in a 40% improvement in system response time.",
            "Application of DDD (Domain-Driven Design) architectural principles to ensure scalability, maintainability and robustness.",
            "Use of AWS services (Lambda, S3, CloudWatch) for cloud applications and containerization with Docker for efficient management of microservices.",
        ],
    },
    {
        title: "Senior Developer / Technical Lead",
        company: "Itaú Unibanco",
        location: "São Paulo, Brazil",
        date: "November 2019 – May 2024",
        descriptions: [
            "Worked for two years in the Solutions Architecture area, supporting several teams in creating robust, scalable architectures aligned with market best practices.",
            "Technical leadership in the development of projects in C#, .NET Core, Angular, SQL Server and PostgreSQL, ensuring high-performance and high-quality solutions.",
            "Development of a system in Python hosted on AWS Lambda, automating previously manual processes and significantly increasing operational efficiency.",
            "Training and qualification of a team of developers to become proficient in Python, accelerating the adoption of new technologies in the team.",
            "Responsible for the migration of a legacy system in VB6 to .NET 6, allowing for the continuity and evolution of the project.",
            "Integration of systems with AWS (Lambda, S3, CloudWatch) for the construction of high-performance cloud-native solutions.",
        ],
    },
    {
        title: "Senior Developer / Software Architect",
        company: "Avivatec",
        location: "São Paulo, Brazil",
        date: "September 2018 – November 2019",
        descriptions: [
            "Leadership of the company's main project from its conception to final delivery, being responsible for defining the software architecture and solution.",
            "Standardization of the architecture in all projects of the company, facilitating the understanding and maintenance of systems among developers.",
            "Development of solutions using C#, .NET Core, Angular and MongoDB, in addition to the implementation of messaging and the use of Redis to increase performance in the simultaneous processing of large volumes of files.",
            "Pioneering creation of a mobile application in Flutter, including training a team to continue the development of the application.",
            "Support and maintenance of existing systems developed in React.",
            "Direct monitoring with the Central Bank (BACEN) in the implementation of the project, ensuring the necessary approval for the operation of the system.",
            "Implementation of agile methodologies (Scrum) to optimize development and delivery processes.",
            "Pioneered the start of an automated testing project in Selenium, reducing regression testing time from 1–2 days with 2 QAs to just 2 hours automatically.",
        ],
    },
    {
        title: "Senior Developer",
        company: "Via Varejo",
        location: "São Paulo, Brazil",
        date: "March 2018 – December 2018",
        descriptions: [
            "Leadership of the team responsible for developing anti-fraud solutions using C#, .NET Core, Angular and SQL Server.",
            "Implementation of Event-Driven and microservices architecture to support the scalability and agility of solutions.",
            "Reduced and eliminated specific types of internal fraud through strategic implementations.",
            "Continuous collaboration with security teams to ensure the integrity and confidentiality of data processed in the anti-fraud system.",
        ],
    },
    {
        title: "Full Stack Developer",
        company: "Viajanet",
        location: "São Paulo, Brazil",
        date: "December 2014 – March 2018",
        descriptions: [
            "Development and maintenance of the portal www.viajanet.com.br, ensuring the stability, performance and usability of the site.",
            "Created a white-label system that increased revenue through partner reselling.",
            "Led the implementation of an internal CRM with cache strategies to improve responsiveness.",
            "Implemented payment security functionality using public/private keys for secure transactions.",
        ],
    },
    {
        title: "Freelancer – Online Betting System",
        company: "Portugal (Remote)",
        location: "Remote",
        date: "2021",
        descriptions: [
            "Collaborated with a Portugal-based team to develop an online betting system entirely in English.",
            "Contributed to backend development with Python (FastAPI) and frontend with React.",
            "Hosted on Azure with SQL Server for data and transaction management.",
            "Focused on real-time performance, security, and user experience.",
        ],
    },
    {
        title: "Freelancer",
        company: "CarsPremium",
        location: "São Paulo, Brazil",
        date: "2014",
        descriptions: [
            "Developed a complete website from scratch using C#, MVC, and SQL Server.",
            "Applied SEO best practices resulting in first-page Google ranking.",
            "Handled all aspects of the project, from information gathering to final deployment.",
        ],
    },
    {
        title: "Senior Developer",
        company: "FCamara",
        location: "São Paulo, Brazil",
        date: "2014",
        descriptions: [
            "Developed and maintained systems in C# for various client projects.",
            "Focused on building scalable and efficient backend solutions.",
        ],
    },
    {
        title: "Senior Developer",
        company: "Betboo",
        location: "São Paulo, Brazil",
        date: "2011 – 2014",
        descriptions: [
            "Developed solutions in C#, jQuery, and SQL Server for online gaming platforms.",
            "Worked on process optimization and system performance improvements.",
        ],
    },
    {
        title: "Full/Senior Developer",
        company: "Diebold",
        location: "São Paulo, Brazil",
        date: "2006 – 2011",
        descriptions: [
            "Developed banking automation and security systems using C#, jQuery, and SQL Server.",
        ],
    },
    {
        title: "Junior Developer",
        company: "Converge",
        location: "São Paulo, Brazil",
        date: "2005 – 2006",
        descriptions: [
            "Participated in the development of web platforms using Classic ASP.",
            "Contributed to the maintenance and evolution of early web solutions.",
        ],
    },
];

export function Experience() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: "start",
        slidesToScroll: 1,
        breakpoints: {
            "(min-width: 7680px)": { slidesToScroll: 3 },
        },
    });

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-white py-16">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 gap-12 items-center">
                    <h2 className="text-4xl font-bold">
                        Professional Experience
                    </h2>

                    <div className="relative">
                        <div className="overflow-hidden" ref={emblaRef}>
                            <div className="flex select-none ">
                                {jobs.map((job, jobIndex) => (
                                    <div
                                        key={jobIndex}
                                        className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3"
                                    >
                                        <article className="bg-[#1e293b] text-white rounded-2xl p6 space-y-4 h-full flex flex-col px-6 pt-6 pb-6">
                                            <div className="flex-1 flex items-start justify-between">
                                                <div className="flex gap-3">
                                                    <span className="text-3xl">
                                                        <Building2 className="mt-[6px]" />
                                                    </span>
                                                    <div>
                                                        <h3 className="font-bold text-xl my-1">
                                                            {job.company} |{" "}
                                                            {job.title}
                                                        </h3>
                                                        <ul className="text-gray-300 text-sm list-disc pl-5">
                                                            {job.descriptions.map(
                                                                (
                                                                    description,
                                                                    descriptionIndex
                                                                ) => (
                                                                    <li
                                                                        key={
                                                                            descriptionIndex
                                                                        }
                                                                        className="text-sm"
                                                                    >
                                                                        {
                                                                            description
                                                                        }
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-t border-gray-700 pt-4 flex items-center justify-between">
                                                <div className="flex items-center gap-2 text-sm">
                                                    <Calendar className="w-4 h-4" />
                                                    <span>{job.date}</span>
                                                </div>

                                                <div className="flex items-center gap-2 text-sm">
                                                    <MapPinned className="w-4 h-4" />
                                                    <span>{job.location}</span>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button className="left-3 z-10 absolute w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-lg -translate-y-1/2 -translate-x-1/2 top-1/2">
                            <ChevronLeft
                                onClick={scrollPrev}
                                className="w-6 h-6 text-gray-600"
                            />
                        </button>

                        <button className="-right-7 z-10 absolute w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-lg -translate-y-1/2 -translate-x-1/2 top-1/2">
                            <ChevronRight
                                onClick={scrollNext}
                                className="w-6 h-6 text-gray-600"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
