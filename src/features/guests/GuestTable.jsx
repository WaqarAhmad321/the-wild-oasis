import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import GuestRow from "./GuestRow";
import useGuests from "./useGuests";

function GuestTable({ search }) {
  const { isLoadingGuests, guests, count } = useGuests();

  const filteredGuests = guests?.filter((guest) =>
    search.toLowerCase() === ""
      ? guests
      : guest.fullName.toLowerCase().includes(search)
  );

  if (isLoadingGuests) return <Spinner />;

  if (!filteredGuests.length) return <Empty resource="guests" />;

  return (
    <Menus>
      <Table columns="1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header>
          <div>Guest Name</div>
          <div>Email</div>
          <div>Nationality</div>
          <div>National ID</div>
          <div></div>
        </Table.Header>
        <Table.Body
          data={filteredGuests}
          render={(guest) => <GuestRow guest={guest} key={guest.id} />}
        />

        <Table.Footer>
          <Pagination count={search === "" ? count : filteredGuests?.length} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default GuestTable;
