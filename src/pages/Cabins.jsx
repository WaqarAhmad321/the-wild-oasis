import Row from "../ui/Row";
import Heading from "../ui/Heading";
import CabinTable from "../features/cabins/CabinTable";
import AddCabin from "../features/cabins/AddCabin";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import useCabins from "../features/cabins/useCabins";

function Cabins() {
  const { cabins, isLoadingCabins } = useCabins();

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable cabins={cabins} />
        <AddCabin isLoadingCabins={isLoadingCabins} />
      </Row>
    </>
  );
}

export default Cabins;
