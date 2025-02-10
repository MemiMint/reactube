import { FC } from "react";
import { SectionHeader } from "../SectionHeader";

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

const Author: FC<Author> = ({ avatarURL, username, role }) => {
  return (
    <div className="mt-4 flex items-center gap-2">
      <div className="w-10 h-10 rounded-full">
        <img className="w-full h-full rounded-full" src={avatarURL} />
      </div>
      <div>
        <p className="font-secondary font-bold text-sm">{username}</p>
        {role && <p className="font-secondary text-sm text-gray-500">{role}</p>}
      </div>
    </div>
  );
};

const TestimonialCard: FC<Testimonial> = ({ content, author }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
      <q className="font-primary font-medium text-gray-500">{content}</q>
      <Author {...author} />
    </div>
  );
};

const TestimonialList: FC<{ testimonials: Testimonial[] }> = ({
  testimonials,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          content={testimonial.content}
          author={testimonial.author}
        />
      ))}
    </div>
  );
};

export const Reviews = () => {
  return (
    <section className="min-h-screen py-12 bg-gray-200">
      <SectionHeader
        title="Don't trust us, trust them"
        description="See what our users are saying! Real stories from people who have experienced the power and simplicity of Reactube"
        descriptionClass="text-gray-500"
      />
      <TestimonialList testimonials={TESTIMONIALS} />
    </section>
  );
};
