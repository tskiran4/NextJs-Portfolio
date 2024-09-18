import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const skills = [
  {
    title: "Frontend Development",
    description: "Expertise in React, Next.js, and modern CSS frameworks to create responsive and interactive UI.",
    icon: "💻",
  },
  {
    title: "UI/UX Design",
    description: "Keen eye for design and user experience, creating intuitive and visually appealing interfaces.",
    icon: "🎨",
  },
  {
    title: "Performance Optimization",
    description: "Skilled in optimizing web applications for speed and efficiency, ensuring smooth user experiences.",
    icon: "⚡",
  },
  {
    title: "Responsive Design",
    description: "Creating websites that look great and function flawlessly across all devices and screen sizes.",
    icon: "📱",
  },
  {
    title: "API Integration",
    description: "Experienced in integrating various APIs and third-party services to enhance website functionality.",
    icon: "🔗",
  },
  {
    title: "Cross-Platform Development",
    description: "Proficient in developing applications that work seamlessly across multiple platforms and devices.",
    icon: "🌐",
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="My Expertise"
          title="What I Bring to the Table"
          description="Here are the key skills and services I offer to help bring your web projects to life."
        />
        <div className="mt-12 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          {skills.map((skill) => (
            <Card key={skill.title} className='p-6 hover:-translate-y-1 transition duration-300'>
              <div className="flex gap-4 items-center mb-4">
                <div className="text-4xl">{skill.icon}</div>
                <div className="font-semibold">{skill.title}</div>
              </div>
              <p className="text-sm">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};