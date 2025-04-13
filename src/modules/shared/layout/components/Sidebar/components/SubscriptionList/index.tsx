import { FC } from "react";
import { SubscriptionItem } from "./components/SubscriptionItem";
import { SubscriptionItem as ISubscriptionItem } from "./types";

export const SubscriptionList: FC<{ subscriptions: ISubscriptionItem[] }> = (
  props,
) => {
  return (
    <div className="mt-2 relative pb-6">
      <h3 className="mb-2 text-base font-bold text-gray-600">Subscriptions</h3>
      <section
        style={{ overflowY: "auto" }}
        className="h-36 mt-2 flex flex-col gap-4"
      >
        {props.subscriptions.map((subscription, index) => {
          return <SubscriptionItem key={index} channel={subscription} />;
        })}
      </section>
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 w-full border-b border-gray-300" />
    </div>
  );
};
