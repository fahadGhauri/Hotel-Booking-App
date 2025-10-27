import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRows from "../../ui/FormRows";

import { useForm } from "react-hook-form";

import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {}, onCloseModel }) {
  //CreateCabin hook
  const { createCabin, isDelecting } = useCreateCabin();
  //EditCabin hook
  const { editCabin, isEditing } = useEditCabin();

  const isWorking = isDelecting || isEditing;
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;

  function Submit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModel?.();
          },
        }
      );
    else
      createCabin(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
            onCloseModel?.();
          },
        }
      );
  }
  return (
    <Form
      onSubmit={handleSubmit(Submit)}
      type={onCloseModel ? "model" : "regular"}
    >
      <FormRows label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required ",
          })}
        />
      </FormRows>

      <FormRows label="Max-Capacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          {...register("maxCapacity", {
            required: "This field is required ",
            min: {
              value: 1,
              message: "Çapacity should be at least 1",
            },
          })}
        />
      </FormRows>

      <FormRows label="Regular Price" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required ",
            min: {
              value: 1,
              message: "Çapacity should be at least 1",
            },
          })}
        />
      </FormRows>

      <FormRows label="Discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          disabled={isWorking}
          defaultValue={0}
          {...register("discount", {
            required: "This field is required ",
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than regular Price",
          })}
        />
      </FormRows>

      <FormRows
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          disabled={isWorking}
          {...register("description", {
            required: "This field is required ",
          })}
        />
      </FormRows>

      <FormRows label="Cabin photo">
        <FileInput
          id="image"
          accept="image/*"
          disabled={isWorking}
          {...register("image", {
            required: isEditSession ? false : "This field is required ",
          })}
        />
      </FormRows>

      <FormRows>
        {/* type is an HTML attribute! */}
        <Button
          variation="secondary"
          type="reset"
          onClick={() => onCloseModel?.()}
        >
          Cancel
        </Button>
        <Button disabled={isDelecting}>
          {isEditSession ? "Edit Cabin" : "Create new Cabin"}
        </Button>
      </FormRows>
    </Form>
  );
}

export default CreateCabinForm;
