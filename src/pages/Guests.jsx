import AddGuest from "../features/guests/AddGuest";
import GuestTable from "../features/guests/GuestTable";
import useGuests from "../features/guests/useGuests";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Guests() {
  const { guests, isLoadingGuests } = useGuests();

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Guests</Heading>
      </Row>

      <Row>
        <GuestTable guests={guests} isLoadingGuests={isLoadingGuests} />
        <AddGuest isLoadingGuests={isLoadingGuests} />
      </Row>
    </>
  );
}

export default Guests;
