import { FC } from "react";

type SectionHeaderProps = {
  title: string;
  titleClass?: string;
  description?: string;
  descriptionClass?: string;
};

export const SectionHeader: FC<SectionHeaderProps> = ({
  title,
  titleClass,
  description,
  descriptionClass = "text-gray-500",
}) => {
  return (
    <div className="text-center">
      <h2
        className={`text-balance leading-relaxed font-primary text-4xl font-medium max-w-lg mx-auto ${titleClass}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`font-secondary font-medium mt-4 max-w-md mx-auto leading-relaxed whitespace-pre-line mb-6 ${descriptionClass}`}
        >
          {description}
        </p>
      )}
    </div>
  );
};
