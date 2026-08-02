"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { SITE } from "@/constants/site";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center bg-white pt-20"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Status Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              Available for Work
            </div>

            {/* Heading */}
            <h1 className="display-lg mb-6">
              Hi, I'm{" "}
              <span className="text-violet-600">{SITE.name}</span>
            </h1>

            {/* Description */}
            <p className="body-lg max-w-xl text-slate-600">
              I design clean, user-centred digital products that solve real
              problems. I enjoy collaborating closely with developers to turn
              thoughtful ideas into intuitive user experiences.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#projects">
                <Button>View Projects</Button>
              </a>

              <a
                href={SITE.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary">
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-10 flex items-center gap-6">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-violet-600"
              >
                <FaGithub size={22} />
              </a>

              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-violet-600"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="transition hover:text-violet-600"
              >
                <FaEnvelope size={22} />
              </a>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src="/profile.png"
              alt={SITE.name}
              width={430}
              height={430}
              priority
              className="rounded-[32px] border border-slate-200 object-cover shadow-[0_30px_70px_rgba(91,77,255,0.15)]"
            />

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-slate-200 bg-white px-6 py-4 shadow-xl">
              <p className="text-2xl font-bold text-violet-600">1</p>
              <p className="text-sm text-slate-500">
                Years of UI/UX Experience
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}