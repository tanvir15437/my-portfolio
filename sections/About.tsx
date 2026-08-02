import Container from "@/components/layout/Container";

export default function About() {
    return (
        <section id="about" className="py-32">
            <Container>
                <div className="max-w-3xl">

                    <p className="text-violet-600 font-semibold mb-4">
                        ABOUT ME
                    </p>

                    <h2 className="h2 mb-8">
                        Designing products that are simple,
                        functional and enjoyable to use.
                    </h2>

                    <p className="body text-slate-600">
                        I'm Tarikul Islam Tanvir, a UI/UX Designer with
                        nearly two years of design experience and
                        six months of industry experience.
                    </p>

                    <p className="body text-slate-600 mt-6">
                        I enjoy solving real user problems through
                        thoughtful design, collaborating closely with
                        developers, and continuously learning new
                        technologies that improve both design quality
                        and workflow.
                    </p>

                </div>
            </Container>
        </section>
    );
}