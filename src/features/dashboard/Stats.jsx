import Stat from "./Stat";
import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";

function Stats({ bookings, stays, confirmedStays }) {
  const numBookings = bookings?.length;

  return (
    <>
      <Stat
        title="Bookings"
        icon={HiOutlineBriefcase}
        color="blue"
        value={numBookings}
      />
      <Stat
        title="Sales"
        icon={HiOutlineBanknotes}
        color="green"
        value={numBookings}
      />
      <Stat
        title="Check ins"
        icon={HiOutlineCalendarDays}
        color="indigo"
        value={numBookings}
      />
      <Stat
        title="Occupancy rate"
        icon={HiOutlineChartBar}
        color="yellow"
        value={numBookings}
      />
    </>
  );
}

export default Stats;
