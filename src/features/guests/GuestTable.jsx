import Menus from "../../ui/Menus";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import GuestRow from "./GuestRow";
import useGuests from "./useGuests";

function GuestTable({ guests, isLoadingGuests }) {
  if (isLoadingGuests) return <Spinner />;

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
          data={guests}
          render={(guest) => <GuestRow guest={guest} key={guest.id} />}
        />
      </Table>
    </Menus>
  );
}

export default GuestTable;
