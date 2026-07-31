"use client";


import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { SITE } from "@/constants/site";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <Container>
        <div className="grid lg:grid-cols-2 items-center gap-16">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-blue-600 font-semibold">
              ● Available for work
            </p>

            <h1 className="mt-4 text-5xl lg:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-blue-600">
                {SITE.name}
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              UI/UX Designer passionate about creating clean,
              user-centered digital experiences and collaborating
              closely with developers.
            </p>

            <div className="mt-10 flex gap-4">
              <a href="#projects">
                <Button>View Projects</Button>
              </a>
              <a href={SITE.resume}>
                <Button variant="secondary">
                  Download Resume
                </Button>
              </a>
            </div>

            <div className="mt-10 flex items-center gap-5">
             <a href={SITE.github} target="_blank">
               <FaGithub className="h-6 w-6 transition hover:text-blue-600" />
             </a>

             <a href={SITE.linkedin} target="_blank">
               <FaLinkedin className="h-6 w-6 transition hover:text-blue-600" />
             </a>

             <a href={`mailto:${SITE.email}`}>
               <FaEnvelope className="h-6 w-6 transition hover:text-blue-600" />
             </a>
            </div>
          </motion.div>

          {/* Right Side */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src="/profile.png"
              alt="Profile"
              width={450}
              height={450}
              priority
              className="rounded-3xl object-cover shadow-2xl border-4 border-white"
            />
            <div className="absolute -bottom-6 -left-6 rounded-2xl bg-white p-4 shadow-xl">
              <p className="text-2xl font-bold">1+</p>
              <p className="text-sm text-slate-500">
                Years of Experience
              </p>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <p className="text-sm text-slate-500">
          Scroll Down
        </p>
      </div>
    </section>
  );
}