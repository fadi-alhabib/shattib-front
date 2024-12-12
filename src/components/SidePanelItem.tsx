interface Props {
  icon: string;
  children: string;
}

const SidePanelItem = ({ icon, children }: Props) => {
  return (
    <div className="flex gap-4">
      <img src={icon} alt="" />
      <span>{children}</span>
    </div>
  );
};

export default SidePanelItem;
