import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-6">

        <p className="text-blue-600 font-semibold">
          Available for work
        </p>

        <h1 className="text-6xl font-bold mt-4">
          Hi, I'm
          <span className="text-blue-600"> Tanvir</span>
        </h1>

        <p className="text-gray-600 text-lg mt-6 max-w-xl">
          UI/UX Designer focused on creating modern,
          user-friendly digital products and working
          closely with developers.
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