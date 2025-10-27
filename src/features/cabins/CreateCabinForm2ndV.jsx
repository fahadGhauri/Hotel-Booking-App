// import Input from "../../ui/Input";
// import Form from "../../ui/Form";
// import Button from "../../ui/Button";
// import FileInput from "../../ui/FileInput";
// import Textarea from "../../ui/Textarea";
// import { useForm } from "react-hook-form";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import toast from "react-hot-toast";
// import { createCabin } from "../../services/apiCabins";
// import FormRows from "../../ui/FormRows";

// function CreateCabinForm() {
//   const { register, handleSubmit, reset, getValues, formState, isCreating } =
//     useForm();

//   const { errors } = formState;

//   const queryClint = useQueryClient();

//   const { mutate, isLoading: isDEl } = useMutation({
//     mutationFn: createCabin,
//     onSuccess: () => {
//       toast.success("New Cabin Created");
//       queryClint.invalidateQueries({
//         queryKey: ["cabin"],
//       });
//       reset();
//     },
//     onError: (err) => toast.error(err.message),
//   });

//   function Submit(data) {
//     mutate({ ...data, image: data.image[0] });
//   }
//   return (
//     <Form onSubmit={handleSubmit(Submit)}>
//       <FormRows label="Cabin name" error={errors?.name?.message}>
//         <Input
//           type="text"
//           id="name"
//           disabled={isCreating}
//           {...register("name", {
//             required: "This field is required ",
//           })}
//         />
//       </FormRows>

//       <FormRows label="Max-Capacity" error={errors?.maxCapacity?.message}>
//         <Input
//           type="number"
//           id="maxCapacity"
//           disabled={isCreating}
//           {...register("maxCapacity", {
//             required: "This field is required ",
//             min: {
//               value: 1,
//               message: "Çapacity should be at least 1",
//             },
//           })}
//         />
//       </FormRows>

//       <FormRows label="Regular Price" error={errors?.regularPrice?.message}>
//         <Input
//           type="number"
//           id="regularPrice"
//           disabled={isCreating}
//           {...register("regularPrice", {
//             required: "This field is required ",
//             min: {
//               value: 1,
//               message: "Çapacity should be at least 1",
//             },
//           })}
//         />
//       </FormRows>

//       <FormRows label="Discount" error={errors?.discount?.message}>
//         <Input
//           type="number"
//           id="discount"
//           disabled={isCreating}
//           defaultValue={0}
//           {...register("discount", {
//             required: "This field is required ",
//             validate: (value) =>
//               value <= getValues().regularPrice ||
//               "Discount should be less than regular Price",
//           })}
//         />
//       </FormRows>

//       <FormRows
//         label="Description for website"
//         error={errors?.description?.message}
//       >
//         <Textarea
//           type="number"
//           id="description"
//           defaultValue=""
//           disabled={isCreating}
//           {...register("description", {
//             required: "This field is required ",
//           })}
//         />
//       </FormRows>

//       <FormRows label="Cabin photo">
//         <FileInput
//           id="image"
//           accept="image/*"
//           disabled={isCreating}
//           {...register("image", {
//             required: "This field is required ",
//           })}
//         />
//       </FormRows>

//       <FormRows>
//         {/* type is an HTML attribute! */}
//         <Button variation="secondary" type="reset">
//           Cancel
//         </Button>
//         <Button disabled={isDEl}>Add Coloum</Button>
//       </FormRows>
//     </Form>
//   );
// }

// export default CreateCabinForm;
