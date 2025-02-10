import { it, describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Reviews } from "./index";

type Author = {
  avatarURL: string;
  username: string;
  role?: string;
};
type Testimonial = {
  content: string;
  author: Author;
};

const TESTIMONIALS: Testimonial[] = [
  {
    content:
      "Reactube has completely changed the way I consume content. The experience is smooth, and the design is just amazing!",
    author: {
      avatarURL: "https://i.pravatar.cc/150?img=10",
      username: "Alex Johnson",
      role: "Content Creator",
    },
  },
  {
    content:
      "Finally, a video platform that truly values its users. No ads, no restrictions—just pure entertainment!",
    author: {
      avatarURL: "https://i.pravatar.cc/150?img=15",
      username: "Sophia Carter",
      role: "Tech Enthusiast",
    },
  },
  {
    content:
      "As a developer, I appreciate the attention to detail. Reactube is fast, well-designed, and just works perfectly!",
    author: {
      avatarURL: "https://i.pravatar.cc/150?img=22",
      username: "Michael Lee",
      role: "Software Engineer",
    },
  },
  {
    content:
      "The best part? No interruptions. I can watch my favorite content without dealing with annoying ads!",
    author: {
      avatarURL: "https://i.pravatar.cc/150?img=30",
      username: "Emily White",
      role: "Casual Viewer",
    },
  },
  {
    content:
      "I love how easy it is to upload and share content here. The community is growing, and it's exciting to be part of it!",
    author: {
      avatarURL: "https://i.pravatar.cc/150?img=42",
      username: "Daniel Robinson",
      role: "Vlogger",
    },
  },
];

describe("Reviews Section Component", () => {
  it("Should render the section title and description", () => {
    render(<Reviews />);

    // Verifica que el título del SectionHeader esté en el documento
    expect(screen.getByText("Don't trust us, trust them")).toBeInTheDocument();
    expect(
      screen.getByText(
        "See what our users are saying! Real stories from people who have experienced the power and simplicity of Reactube",
      ),
    ).toBeInTheDocument();
  });

  it("Should render all testimonials", () => {
    render(<Reviews />);

    // Verifica que todos los testimonios de TESTIMONIALS se rendericen
    TESTIMONIALS.forEach(({ content }) => {
      expect(screen.getByText(content)).toBeInTheDocument();
    });
  });

  it("Should render all authors with their roles", () => {
    render(<Reviews />);

    // Verifica que cada autor y su rol aparezcan
    TESTIMONIALS.forEach(({ author }) => {
      expect(screen.getByText(author.username)).toBeInTheDocument();
      if (author.role) {
        expect(screen.getByText(author.role)).toBeInTheDocument();
      }
    });

    // Verifica que se rendericen correctamente todas las imágenes de los autores
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(TESTIMONIALS.length);
  });
});
