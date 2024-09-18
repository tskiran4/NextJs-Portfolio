import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/meme.png";
import Image from "next/image";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map2.png";
import smileMemoji from "@/assets/images/favicon.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolboxItems } from "@/components/ToolboxItems";

const toolboxItems = [
  {
    title: "JavaScript",
    iconType: <JavascriptIcon />,
  },
  {
    title: "HTML5",
    iconType: <HTMLIcon />,
  },
  {
    title: "CSS3",
    iconType: <CssIcon />,
  },
  {
    title: "React",
    iconType: <ReactIcon />,
  },
  {
    title: "Chrome",
    iconType: <ChromeIcon />,
  },
  {
    title: "GitHub",
    iconType: <GithubIcon />,
  },
];

const hobbies = [
  {
    title: "Guitar",
    emoji: "🎸",
    left: "5%",
    top: "5%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Hiking",
    emoji: "🥾",
    left: "35%",
    top: "40%",
  },
  {
    title: "Music",
    emoji: "🎵",
    left: "70%",
    top: "45%",
  },
  {
    title: "Cooking",
    emoji: "🧑‍🍳",
    left: "5%",
    top: "65%",
  },
  {
    title: "Creating",
    emoji: "🙌",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am and what I do"
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1 bg-gradient-to-bl from-white/0 to-white/40">
              <div className="w-60 mx-auto mt-8 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>

            <Card className="h-[320px]  md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="The technologies and tools I use to craft exception digital experiences"
                className=""
              />
              <ToolboxItems
                className=""
                items={toolboxItems}
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItems
                className="mt-6"
                items={toolboxItems}
                itemsWrapperClassName="animate-move-right [animation-duration:15s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the code"
                description="Explore my interests and hobbies beyond the digital realm"
                className="px-6 py-6"
              />

              <div className="relative inline-flex flex-wrap pl-5 gap-2">
                {hobbies.map((hobby) => (
                  // <div
                  //   key={hobby.title}
                  //   className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  //   style={{ left: hobby.left, top: hobby.top }}
                  // >
                  <div
                  key={hobby.title}
                  className="inline-flex  gap-2 px-6 bg-gradient-to-br from-white/90 to-white/90 rounded-full py-1.5 "
                >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-bottom"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r
              from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2
                after:-outline-offset-2 after:rounded-full after:outline-gray-950/30"
              >
                <Image src={smileMemoji} alt="me" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
