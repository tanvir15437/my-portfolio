import Container from "@/components/layout/Container";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FileText } from "lucide-react";

export default function Contact() {
    return (
        <section
            id="contact"
            className="py-32 bg-slate-50"
        >
            <Container>
                <div className="max-w-4xl mx-auto text-center">

                    <p className="text-violet-600 font-semibold uppercase tracking-widest">
                        CONTACT
                    </p>

                    <h2 className="h2 mt-4">
                        Let's build something meaningful together.
                    </h2>

                    <p className="body text-slate-600 mt-6 max-w-2xl mx-auto">
                        I'm currently open to Junior and Mid-Level UI/UX
                        Designer opportunities. If you think I'd be a good
                        fit for your team, let's connect.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">

                        <a
                            href="mailto:yourmail@gmail.com"
                            className="rounded-2xl border bg-white p-8 hover:shadow-lg transition"
                        >
                            <FaEnvelope className="mx-auto mb-4 text-3xl text-violet-600" />                            <p>Email</p>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/tarik23/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-2xl border bg-white p-8 hover:shadow-lg transition"
                        >
                            <FaLinkedin className="mx-auto mb-4 text-3xl text-violet-600" />                        </a>

                        <a
                            href="https://github.com/tanvir15437"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-2xl border bg-white p-8 hover:shadow-lg transition"
                        >
                            <FaGithub className="mx-auto mb-4 text-3xl text-violet-600" />                        </a>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-2xl border bg-white p-8 hover:shadow-lg transition"
                        >
                            <FileText className="mx-auto mb-4 text-violet-600" />                            <p>Resume</p>
                        </a>

                    </div>

                </div>
            </Container>
        </section>
    );
}