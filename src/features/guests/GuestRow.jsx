import styled from "styled-components";

import { HiPencil, HiSquare2Stack, HiTrash } from "react-icons/hi2";

import Table from "../../ui/Table";
import Modal from "../../ui/Modal";
import Menus from "../../ui/Menus";
import useAddGuest from "./useAddGuest";
import useDeleteGuest from "./useDeleteGuest";
import CreateGuestForm from "./CreateGuestForm";
import ConfirmDelete from "../../ui/ConfirmDelete";

const Guest = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

function GuestRow({ guest }) {
  const { addGuest, isAddingGuest } = useAddGuest();
  const { deleteGuest, isDeleting } = useDeleteGuest();
  const { id: guestId, fullName, email, nationality, nationalID,  } = guest;

  function handleDuplicate() {
    addGuest({
      fullName,
      email,
      nationality,
      nationalID,
    });
  }

  return (
    <Table.Row>
      <Guest>{fullName}</Guest>
      <div>{email}</div>
      <div>{nationality}</div>
      <div>{nationalID}</div>

      <div>
        <Modal>
          <Menus.Menu>
            <Menus.Toggle id={guestId} />

            <Menus.List id={guestId}>
              <Menus.Button
                icon={<HiSquare2Stack />}
                onClick={handleDuplicate}
                disabled={isAddingGuest}>
                Duplicate
              </Menus.Button>

              <Modal.Open opens="edit">
                <Menus.Button icon={<HiPencil />}>Edit</Menus.Button>
              </Modal.Open>

              <Modal.Open opens="delete">
                <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
              </Modal.Open>
            </Menus.List>

            <Modal.Window name="edit">
              <CreateGuestForm guestToEdit={guest} />
            </Modal.Window>

            <Modal.Window name="delete">
              <ConfirmDelete
                resourceName="guest"
                onConfirm={() => deleteGuest(guestId)}
                disabled={isDeleting}
              />
            </Modal.Window>
          </Menus.Menu>
        </Modal>
      </div>
    </Table.Row>
  );
}

export default GuestRow;
