import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";

import projects from "@/data/projects";

export default function Projects() {
    return (
        <section
            id="projects"
            className="py-32"
        >
            <Container>

                <SectionTitle
                    subtitle="PORTFOLIO"
                    title="Selected Projects"
                />

                <div className="grid lg:grid-cols-2 gap-8">

                    {projects.map((project) => (

                        <ProjectCard
                            key={project.title}
                            {...project}
                        />

                    ))}

                </div>

            </Container>
        </section>
    );
}