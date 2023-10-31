import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Form from "../../ui/Form";
import { useForm } from "react-hook-form";
import useAddGuest from "./useAddGuest";
import useEditGuest from "./useEditGuest";

function CreateGuestForm({ guestToEdit = {}, onCloseModal }) {
  const { addGuest, isAddingGuest } = useAddGuest();
  const { editGuest, isEditing } = useEditGuest();

  const { id: editId, ...editValues } = guestToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  const onSubmitForm = (data) => {
    if (isEditSession)
      editGuest(
        { newGuestData: { ...data }, id: editId },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      addGuest(
        { ...data },
        {
          onSuccess: () => {
            reset();
            onCloseModal?.();
          },
        }
      );
  };

  const isWorking = isAddingGuest || isEditing;

  return (
    <Form
      onSubmit={handleSubmit(onSubmitForm)}
      type={onCloseModal ? "modal" : "regular"}>
      <FormRow label="Guest Name" error={errors?.fullName?.message}>
        <Input
          id="fullName"
          type="text"
          {...register("fullName", {
            required: "This field is required",
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="Email" error={errors?.email?.message}>
        <Input
          id="email"
          type="email"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email",
            },
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="Nationality" error={errors?.nationality?.message}>
        <Input
          id="nationality"
          type="text"
          {...register("nationality", {
            required: "This field is required",
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="National ID" error={errors?.nationalID?.message}>
        <Input
          id="nationalID"
          type="number"
          {...register("nationalID", {
            required: "This field is required",
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow>
        <Button
          $variation="secondary"
          type="reset"
          onClick={() => onCloseModal?.()}>
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit guest" : "Add guest"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateGuestForm;
