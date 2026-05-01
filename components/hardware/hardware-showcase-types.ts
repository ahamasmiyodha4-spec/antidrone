export type HardwareSpecRow = {
  label: string;
  value: string;
};

export type HardwareDeepSection = {
  id: string;
  title: string;
  rows: HardwareSpecRow[];
};

export type HardwareProduct = {
  id: string;
  tabLabel: string;
  assetLabel: string;
  specs: HardwareSpecRow[];
  deep: HardwareDeepSection[];
};

export type HardwareShowcaseProps = {
  items: HardwareProduct[];
  className?: string;
  heading?: string;
  defaultTab?: string;
};
