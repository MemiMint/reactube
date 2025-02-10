import { FC } from "react";
import { SectionHeader } from "../SectionHeader";

type Feature = {
  unicode: string;
  title: string;
  description: string;
};

// Feature Data
const FEATURES: Feature[] = [
  {
    unicode: "🚀",
    title: "Speed Performance",
    description: "Playback without ads",
  },
  {
    unicode: "🎨",
    title: "Modern Design",
    description: "Intuitive and elegant interface",
  },
  {
    unicode: "🔄",
    title: "No Restrictions",
    description: "Upload content without limits",
  },
  {
    unicode: "🫂",
    title: "Community Interaction",
    description: "Features like comments and polls",
  },
];

const FeatureCard: FC<Feature> = ({ unicode, title, description }) => (
  <div className="bg-white rounded-md shadow-lg p-4">
    <span className="text-xl">{unicode}</span>
    <h4 className="mt-2 text-lg font-medium">{title}</h4>
    <p className="mt-2 text-lg font-medium text-gray-500">{description}</p>
  </div>
);

const FeatureList: FC<{ features: Feature[] }> = ({ features }) => (
  <div className="mt-18 px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {features.map((feature) => (
      <FeatureCard key={feature.title} {...feature} />
    ))}
  </div>
);

export const Features = () => (
  <section className="min-h-screen mt-16 py-12 bg-red-700">
    <SectionHeader
      title="Everything you want, Everything you need"
      description="Experience a seamless, modern, and powerful platform designed to give you everything you need and everything you want—effortlessly."
      titleClass="text-white"
      descriptionClass="text-white"
    />
    <FeatureList features={FEATURES} />
  </section>
);
