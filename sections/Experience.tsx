import Container from "@/components/layout/Container";

export default function Experience() {
    return (
        <section
            id="experience"
            className="py-32"
        >
            <Container>

                <h2 className="h2 mb-16">
                    Experience
                </h2>

                <div className="border-l-2 border-violet-500 pl-8 space-y-12">

                    <div>

                        <h3 className="h4">
                            UI/UX Designer
                        </h3>

                        <p className="body-sm text-slate-500">
                            AdsFixter LLC
                        </p>

                    </div>

                    <div>

                        <h3 className="h4">
                            UI/UX Designer & Operation Executive
                        </h3>

                        <p className="body-sm text-slate-500">
                            SoftZen IT
                        </p>

                    </div>

                    <div>

                        <h3 className="h4">
                            Industrial Attachment
                        </h3>

                        <p className="body-sm text-slate-500">
                            SELISE Digital Platforms
                        </p>

                    </div>

                </div>

            </Container>
        </section>
    );
}