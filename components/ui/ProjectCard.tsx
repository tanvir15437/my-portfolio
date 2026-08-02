import Image from "next/image";

type ProjectCardProps = {
    title: string;
    category: string;
    description: string;
    figma: string;
    image: string;
};

export default function ProjectCard({
    title,
    category,
    description,
    figma,
    image,
}: ProjectCardProps) {
    return (
        <div className="group overflow-hidden rounded-3xl border bg-white transition hover:-translate-y-2 hover:shadow-xl">

            <div className="relative h-64 bg-slate-100">

                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />

            </div>

            <div className="p-8">

                <p className="text-sm text-violet-600 mb-2">
                    {category}
                </p>

                <h3 className="h4 mb-3">
                    {title}
                </h3>

                <p className="body text-slate-600 mb-6">
                    {description}
                </p>

                <a
                    href={figma}
                    target="_blank"
                    className="font-semibold text-violet-600 hover:underline"
                >
                    View Figma →
                </a>

            </div>

        </div>
    );
}