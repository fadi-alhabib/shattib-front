import { Link } from "..";

interface Props {
  title01?: string;
  title02?: string;
  title01Link?: string;
  title02Link?: string;
  endTitle?: string;
}

const SectionTitles = ({
  title01,
  title02,
  title01Link = "",
  title02Link = "",
  endTitle,
}: Props) => {
  return (
    <div className="flex gap-2">
      <Link to={title01Link}>
        <span className="text-gray-500">{title01}</span>
      </Link>
      {title02 ? <span className="text-gray-500">&gt;</span> : null}
      <Link to={title02Link}>
        <span className="text-gray-500">{title02}</span>
      </Link>
      {endTitle ? <span className="text-gray-500">&gt;</span> : null}
      <span className="font-bold">{endTitle}</span>
    </div>
  );
};

export default SectionTitles;
