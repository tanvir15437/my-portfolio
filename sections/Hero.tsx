import Button from "@/components/ui/Button";
import { SITE } from "@/constants/site";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-green-600 font-medium">
          Available for work
        </p>

        <h1 className="text-6xl font-bold mt-4">
          Hi, I'm {SITE.name}
        </h1>

        <p className="text-gray-600 text-lg mt-6 max-w-xl">
          {SITE.role}
        </p>

        <div className="flex gap-4 mt-10">

          <Button>
            View Projects
          </Button>

          <Button>
            Download Resume
          </Button>

        </div>

      </div>
    </section>
  );
}