import { FC } from "react";
import { Dropdown } from "../../../../../../shared/components/Dropdown";
import { transformToDropdownItems } from "../../../../../../shared/utils/transform-dropdown-items";
import {
  DAYS_OF_MONTH,
  MONTHS,
} from "../../../../../../shared/utils/time/constants";
import { generateYearRange } from "../../../../../../shared/utils/time/generate-year-range";
import { SectionFormProps } from "../../../../types";

type DateOfBirth = {
  day: string;
  month: string;
  year: string;
};

export const DateOfBirth: FC<SectionFormProps<DateOfBirth>> = ({
  state,
  updateState,
}) => (
  <div>
    <label className="font-primary block text-sm font-medium text-gray-900">
      Date of birth
    </label>
    <div className="mt-2 flex w-full items-center gap-6">
      <Dropdown
        placeholder="Day"
        name="day"
        value={state.day}
        onChange={(event) => updateState({ day: event.target.value })}
        items={transformToDropdownItems(DAYS_OF_MONTH)}
      />
      <Dropdown
        placeholder="Month"
        name="month"
        value={state.month}
        onChange={(event) => updateState({ month: event.target.value })}
        items={transformToDropdownItems(MONTHS)}
      />
      <Dropdown
        placeholder="Year"
        name="year"
        value={state.year}
        onChange={(event) => updateState({ year: event.target.value })}
        items={transformToDropdownItems(generateYearRange())}
      />
    </div>
  </div>
);
