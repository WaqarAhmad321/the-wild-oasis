import { useState } from "react";
import AddGuest from "../features/guests/AddGuest";
import GuestTable from "../features/guests/GuestTable";
import useGuests from "../features/guests/useGuests";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import SearchBar from "../ui/SearchBar";

function Guests() {
  const { guests, isLoadingGuests } = useGuests();
  const [search, setSearch] = useState("");
  
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Guests</Heading>
        <SearchBar search={search} setSearch={setSearch} />
      </Row>

      <Row>
        <GuestTable
          search={search}
          guests={guests}
          isLoadingGuests={isLoadingGuests}
        />
        <AddGuest isLoadingGuests={isLoadingGuests} />
      </Row>
    </>
  );
}

export default Guests;
