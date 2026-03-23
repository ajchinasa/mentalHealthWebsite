import { FC } from "react";
import { Link } from "react-router-dom";
import { Icon } from "../core/Icon/Icon";

const DownloadButtons: FC<{
  className?: string;
}> = ({ className = "" }) => {
  return (
    <div className={`flex gap-2 mt-4 ${className}`}>
      <Link
        to="https://apps.apple.com/us/app/friendnpal/id6648793159"
        target="_blank"
      >
        <Icon
          name="AppStoreBadge"
          className="w-28 md:w-32 h-auto transform transition hover:scale-105"
        />
      </Link>
      <Link to="#">
        <Icon
          name="AndroidAppBadge"
          className="w-28 md:w-32 h-auto transform transition hover:scale-105"
        />
      </Link>
    </div>
  );
};

export default DownloadButtons;
