import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateGuestForm from "./CreateGuestForm";

function AddGuest({ isLoadingGuests }) {
  if (!isLoadingGuests)
    return (
      <div>
        <Modal>
          <Modal.Open opens="guests-form">
            <Button>Add new Guest</Button>
          </Modal.Open>

          <Modal.Window name="guests-form">
            <CreateGuestForm />
          </Modal.Window>
        </Modal>
      </div>
    );
}

export default AddGuest;
