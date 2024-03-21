import DashboardLink from "../components/DashboardLink";
import { BsFillHousesFill } from "react-icons/bs";
import { BsFillHouseAddFill } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { FaUserPlus } from "react-icons/fa6";
import { BiSolidCalculator } from "react-icons/bi";
import { GiTargetDummy } from "react-icons/gi";

function Dashboard() {
  return (
    <div>
      <div className="flex flex-col space-y-2">
        <DashboardLink name="Sites" path="/sites" count={6} icon={<BsFillHousesFill size={70} />} />

        <DashboardLink
          name="Create new Site"
          path="/sites/create"
          icon={<BsFillHouseAddFill size={70} />}
        />

        <DashboardLink
          name="Employees"
          path="/employees"
          count={127}
          icon={<FaUserGroup size={70} />}
        />

        <DashboardLink
          name="Add new Employee"
          path="/employees/create"
          icon={<FaUserPlus size={70} />}
        />

        <DashboardLink name="Payroll" path="/payroll" icon={<BiSolidCalculator size={70} />} />

        <DashboardLink name="Test Crud" path="/test" icon={<GiTargetDummy size={70} />} />
      </div>
    </div>
  );
}

export default Dashboard;
