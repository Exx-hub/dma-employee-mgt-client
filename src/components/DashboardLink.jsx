import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function DashboardLink({ name, path, icon, count = 0 }) {
  return (
    <Link
      to={path}
      className="bg-[#D25459]  p-4 flex justify-end items-center relative overflow-hidden"
    >
      <div className="w-20 absolute left-[-15px] top-[20px] text-white opacity-10">{icon}</div>
      <div className="text-white font-light text-lg">
        <p className="text-right text-2xl" style={{ visibility: count > 0 ? "visible" : "hidden" }}>
          {count}
        </p>
        <p>{name}</p>
      </div>
    </Link>
  );
}

export default DashboardLink;

DashboardLink.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
  icon: PropTypes.element,
  count: PropTypes.number,
};
