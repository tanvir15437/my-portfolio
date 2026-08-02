import Container from "@/components/layout/Container";

const skills = [
    "UI Design",
    "UX Design",
    "Wireframing",
    "Prototyping",
    "Design Systems",
    "Figma",
    "Framer",
    "User Research",
    "Usability Testing",
    "Interaction Design",
];

export default function Skills() {
    return (
        <section className="py-24">
            <Container>

                <h2 className="h2 mb-12">
                    Skills
                </h2>

                <div className="flex flex-wrap gap-4">

                    {skills.map((skill) => (

                        <div
                            key={skill}
                            className="rounded-full border border-slate-200 px-6 py-3"
                        >
                            {skill}
                        </div>

                    ))}

                </div>

            </Container>
        </section>
    );
}