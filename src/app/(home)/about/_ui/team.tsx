import { Button } from "@/components/ui/button";
import Image from "next/image";

const ZarpTeam = () => {
  return (
    <div
      className="bg-abyss min-h-screen text-white px-10 pt-24 hidden lg:block"
      id="team"
    >
      <section className="flex items-center justify-between border-b border-white pb-6 mb-10">
        <h1 className="font-machina text-6xl font-semibold">The Zarp Team</h1>

        <div className="flex gap-6 items-center justify-end" id="team-filter">
          <Button
            variant="link"
            className="hover:text-orange-400 text-white text-lg w-fit"
          >
            Engineering
          </Button>
          <Button
            variant="link"
            className="hover:text-orange-400 text-white text-lg w-fit"
          >
            Design
          </Button>
          <Button
            variant="link"
            className="hover:text-orange-400 text-white text-lg w-fit"
          >
            Relations
          </Button>
          <Button
            variant="link"
            className="hover:text-orange-400 text-white text-lg w-fit justify-end"
          >
            All
          </Button>
        </div>
      </section>
      <section
        id="team-list"
        className="grid grid-cols-6 2xl:grid-cols-7 gap-8"
      >
        <div className="w-full min-h-80 px-0.5 relative flex justify-center">
          <Image
            src="/owner.jpg"
            fill
            alt="Team members"
            className="max-h-72"
          />
          <span className="font-livret-sans absolute bottom-0.5">
            Abdullah Abdulfatah
          </span>
        </div>
        <div className="w-full min-h-80 px-0.5 relative flex justify-center">
          <Image
            src="/owner.jpg"
            fill
            alt="Team members"
            className="max-h-72"
          />
          <span className="font-livret-sans absolute bottom-0.5">
            Abdullah Abdulfatah
          </span>
        </div>
        <div className="w-full min-h-80 px-0.5 relative flex justify-center">
          <Image
            src="/owner.jpg"
            fill
            alt="Team members"
            className="max-h-72"
          />
          <span className="font-livret-sans absolute bottom-0.5">
            Abdullah Abdulfatah
          </span>
        </div>
        <div className="w-full min-h-80 px-0.5 relative flex justify-center">
          <Image
            src="/owner.jpg"
            fill
            alt="Team members"
            className="max-h-72"
          />
          <span className="font-livret-sans absolute bottom-0.5">
            Abdullah Abdulfatah
          </span>
        </div>
        <div className="w-full min-h-80 px-0.5 relative flex justify-center">
          <Image
            src="/owner.jpg"
            fill
            alt="Team members"
            className="max-h-72"
          />
          <span className="font-livret-sans absolute bottom-0.5">
            Abdullah Abdulfatah
          </span>
        </div>
        <div className="w-full min-h-80 px-0.5 relative flex justify-center">
          <Image
            src="/owner.jpg"
            fill
            alt="Team members"
            className="max-h-72"
          />
          <span className="font-livret-sans absolute bottom-0.5">
            Abdullah Abdulfatah
          </span>
        </div>
        <div className="w-full min-h-80 px-0.5 relative flex justify-center">
          <Image
            src="/owner.jpg"
            fill
            alt="Team members"
            className="max-h-72"
          />
          <span className="font-livret-sans absolute bottom-0.5">
            Abdullah Abdulfatah
          </span>
        </div>
      </section>
    </div>
  );
};

export default ZarpTeam;
