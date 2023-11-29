import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateBookingForm from "./CreateBookingForm";

function AddBooking() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="bookings-form">
          <Button>Make a booking</Button>
        </Modal.Open>

        <Modal.Window name="bookings-form">
          <CreateBookingForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddBooking;
