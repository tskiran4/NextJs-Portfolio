import { Fragment } from "react";
import { twMerge } from "tailwind-merge";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CssIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import GithubIcon from "@/assets/icons/github.svg";

const iconMap = {
  JavaScript: JavascriptIcon,
  HTML5: HTMLIcon,
  CSS3: CssIcon,
  React: ReactIcon,
  Chrome: ChromeIcon,
  GitHub: GithubIcon,
};

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: {
    title: string;
  }[];
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div className={twMerge("flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]", className)}>
      <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", itemsWrapperClassName)}>
        {[...new Array(2)].fill(0).map((_, index) => (
          <Fragment key={index}>
            {items.map((item) => {
              const IconComponent = iconMap[item.title as keyof typeof iconMap];
              return (
                <div
                  key={item.title}
                  className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
                >
                  {IconComponent && <IconComponent width={24} height={24} />}
                  <span className="font-semibold">{item.title}</span>
                </div>
              );
            })}
          </Fragment>
        ))}
      </div>
    </div>
  );
};