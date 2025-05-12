"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, School } from "lucide-react";
import { title } from "process";

const educations = [
    {
        title: "Certifications",
        descriptions: [
            {
                location: "São Paulo, Brazil",
                school: "Scrum.org",
                date: "2021",
                course: "PSM I - Professional Scrum Master",
            },
            {
                location: "São Paulo, Brazil",
                school: "Microsoft",
                date: "2021",
                course: "AZ-203 - Developing Solutions for Microsoft Azure",
            },
            {
                location: "São Paulo, Brazil",
                school: "FIAP",
                date: "2021",
                course: "AZ-400 - Microsoft Azure DevOps Solutions",
            },
        ],
    },
    {
        title: "Education",
        descriptions: [
            {
                location: "São Paulo, Brazil",
                school: "FIAP",
                date: "2019 - 2020",
                course: "MBA in Solution Architecture",
            },
            {
                location: "São Paulo, Brazil",
                school: "Paulista Business School",
                date: "2012 - 2013",
                course: "MBA in Project Management",
            },
            {
                location: "São Paulo, Brazil",
                school: "Faculdade Sumaré",
                date: "2000 - 2004",
                course: "Bachelor's Degree in Information Systems",
            },
        ],
    },
    {
        title: "Languages",
        descriptions: [
            {
                location: "São Paulo, Brazil",
                school: "Online Classes",
                date: "Ongoing",
                course: "English – Intermediate level with professional working proficiency",
            },
        ],
    },
];

export function Education() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
    });

    function scrollPrev() {
        emblaApi?.scrollPrev();
    }

    function scrollNext() {
        emblaApi?.scrollNext();
    }

    return (
        <section className="bg-[#FFD449] py-16">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 gap-12 items-center">
                    <h2 className="text-4xl font-bold text-center">
                        Education
                    </h2>

                    <div className="relative">
                        <div
                            className="overflow-hidden max-w-3xl mx-auto"
                            ref={emblaRef}
                        >
                            <div className="flex select-none ">
                                {educations.map((education, educationIndex) => (
                                    <div
                                        key={educationIndex}
                                        className="flex-[0_0_100%] min-w-0 px-3"
                                    >
                                        <article className="bg-[#1e293b] text-white rounded-2xl p6 space-y-4 h-full flex flex-col px-6 pt-6 pb-6">
                                            <div className="flex-1 flex items-start justify-between">
                                                <div className="flex gap-3">
                                                    <span className="text-3xl">
                                                        <School className="mt-[6px]" />
                                                    </span>
                                                    <div>
                                                        <h3 className="font-bold text-xl my-1">
                                                            {education.title}
                                                        </h3>
                                                        <ul className="text-gray-300 text-sm list-disc pl-5">
                                                            {education.descriptions.map(
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
                                                                            description.course
                                                                        }
                                                                    </li>
                                                                )
                                                            )}
                                                        </ul>
                                                    </div>
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
