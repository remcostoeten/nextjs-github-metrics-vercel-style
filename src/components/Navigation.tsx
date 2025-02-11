import React from "react";

const Navigation: React.FC = () => {
  const navItems = [
    { label: "Overview", active: true },
    { label: "Projects", active: false },
    { label: "Integrations", active: false },
    { label: "Activity", active: false },
    { label: "Domains", active: false },
    { label: "Usage", active: false },
    { label: "Settings", active: false },
  ];

  return (
    <nav className="flex justify-center items-center px-16 w-full text-sm whitespace-nowrap bg-blend-normal bg-white bg-opacity-0 text-zinc-500 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-4 justify-between pt-px pr-2 pb-0.5 bg-blend-normal max-md:flex-wrap">
        {navItems.map((item, index) => (
          <div
            key={index}
            className={`px-1 py-4 bg-blend-normal ${
              item.active ? "text-white" : ""
            }`}
          >
            {item.label}
            {item.active && (
              <div className="shrink-0 mt-4 h-px bg-white rounded bg-blend-normal" />
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
