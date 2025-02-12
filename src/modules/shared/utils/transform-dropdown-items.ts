import { DropdownItems } from "../components/Dropdown";

/**
 * Transforms an array of values into DropdownItems.
 *
 * Example:
 * ```
 * const numbers = [1, 2, 3];
 * transformToDropdownItems(numbers);
 * // [{ value: "1", description: "1" }, { value: "2", description: "2" }, { value: "3", description: "3" }]
 *
 * const users = [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }];
 * transformToDropdownItems(users, (user) => user.id, (user) => user.name);
 * // [{ value: "1", description: "Alice" }, { value: "2", description: "Bob" }]
 * ```
 */
export const transformToDropdownItems = <T>(
  items: T[],
  transformValue: (item: T) => string | number = String,
  transformDescription: (item: T) => string = String,
): DropdownItems[] =>
  items.map((item) => ({
    value: transformValue(item),
    description: transformDescription(item),
  }));
