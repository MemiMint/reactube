import { FC } from "react";
import { SidebarSection } from "../../types";
import { useNavigate } from "react-router";

export const Section: FC<{ section: SidebarSection }> = ({ section }) => {
  const navigate = useNavigate();

  return (
    <section className="mt-2 flex flex-col gap-4 pb-6 relative">
      {section.label && (
        <h3 className="text-base font-bold text-gray-600">{section.label}</h3>
      )}
      {section.items.map((item, index) => (
        <div
          onClick={() => navigate(item.href!)}
          key={index}
          className="cursor-pointer w-full flex items-center p-2 gap-6 hover:bg-gray-200 hover:rounded-md"
        >
          {item.icon}
          <p className="text-sm font-primary font-medium">{item.title}</p>
        </div>
      ))}

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full border-b border-gray-300" />
    </section>
  );
};
