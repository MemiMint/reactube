import React, { FC } from "react";
import { SECTIONS } from "./sections";
import { Section } from "./components/Section";
import { SubscriptionList } from "./components/SubscriptionList";
import { FiSettings } from "react-icons/fi";
import { SubscriptionItem } from "./components/SubscriptionList/types";

export const SUBSCRIPTIONS: SubscriptionItem[] = [
  {
    channelName: "johndoe123",
    channelUrl: "https://i.pravatar.cc/150?img=1",
  },
  {
    channelName: "janedoe456",
    channelUrl: "https://i.pravatar.cc/150?img=2",
  },
  {
    channelName: "devMaster99",
    channelUrl: "https://i.pravatar.cc/150?img=3",
  },
  {
    channelName: "coder_girl",
    channelUrl: "https://i.pravatar.cc/150?img=4",
  },
  {
    channelName: "techWizard",
    channelUrl: "https://i.pravatar.cc/150?img=5",
  },
  {
    channelName: "johndoe123",
    channelUrl: "https://i.pravatar.cc/150?img=1",
  },
  {
    channelName: "janedoe456",
    channelUrl: "https://i.pravatar.cc/150?img=2",
  },
  {
    channelName: "devMaster99",
    channelUrl: "https://i.pravatar.cc/150?img=3",
  },
  {
    channelName: "coder_girl",
    channelUrl: "https://i.pravatar.cc/150?img=4",
  },
  {
    channelName: "techWizard",
    channelUrl: "https://i.pravatar.cc/150?img=5",
  },
];

export const Sidebar: FC<{ sidebarOpen?: boolean }> = (props) => {
  return (
    <aside
      style={{ overflowY: "scroll" }}
      className={`bg-white p-4 w-60 fixed md:static h-screen transition-transform ${
        props.sidebarOpen ? "translate-x-0" : "-translate-x-64"
      } md:translate-x-0`}
    >
      {SECTIONS.map((section, index) => {
        return <Section key={index} section={section} />;
      })}
      <SubscriptionList subscriptions={SUBSCRIPTIONS} />
      <div className="mb-8">
        <Section
          section={{ items: [{ title: "Settings", icon: <FiSettings /> }] }}
        />
      </div>
    </aside>
  );
};
