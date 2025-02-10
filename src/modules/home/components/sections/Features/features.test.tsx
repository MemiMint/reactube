import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import { Features } from "./index";

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

describe("Feature Section Component", () => {
  it("Should render the features section", () => {
    render(<Features />);

    expect(
      screen.getByText("Everything you want, Everything you need"),
    ).toBeInTheDocument();

    FEATURES.forEach((feature) => {
      expect(screen.getByText(feature.title)).toBeInTheDocument();
      expect(screen.getByText(feature.description)).toBeInTheDocument();
    });

    expect(screen.getAllByRole("heading", { level: 4 })).toHaveLength(
      FEATURES.length,
    );
  });
});
