export type SectionFormProps<T> = {
  state: T;
  updateState(updates: Partial<SectionFormProps<T>["state"]>): void;
};
