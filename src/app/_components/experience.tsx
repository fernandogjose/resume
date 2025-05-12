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
        description: [
            "Involved from the beginning in the project to migrate the customer registration system to a new modern platform based on .NET 8, with a microservices architecture.",
            "Development of scalable solutions in C#, .NET Core and .NET 8, with Oracle database and React frontend.",
            "Implementation of microservices with asynchronous communication via Kafka and performance optimization with Redis, resulting in a 40% improvement in system response time.",
            "Application of DDD (Domain-Driven Design) architectural principles to ensure scalability, maintainability and robustness.",
            "Use of AWS services (Lambda, S3, CloudWatch) for cloud applications and containerization with Docker for efficient management of microservices.",
        ],
    },
];

export function Experience() {
    return (
        <section className="bg-white py-16">
            <div className="container px-4 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <h2 className="text-4xl font-bold mb-12">
                        Professional Experience
                    </h2>

                    <div className="relative"></div>
                </div>
            </div>
        </section>
    );
}
