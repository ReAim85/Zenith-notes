import type { ReactElement } from "react";

interface SidebarComponentProps {
  text: string;
  icon: ReactElement;
  navigate?: ReactElement;
}

export const SidebarComponent = (props: SidebarComponentProps) => {
  return (
    <div
      id="Sidebar-component"
      className="flex items-center font-semibold text-xl text-gray-600 gap-3 cursor-pointer"
    >
      {props.icon}
      {props.text}
    </div>
  );
};
