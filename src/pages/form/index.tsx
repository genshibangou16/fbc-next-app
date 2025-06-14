import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    confirmEmail: z.string().email("Invalid email address"),
    postalCode: z
      .string()
      .min(1, "Postal code is required")
      .regex(/^\d{7}$/, "Postal code must be 7 digits"),
    localSpecialtyName: z.string().min(1, "Local specialty is required"),
    localSpecialtyPrice: z.coerce
      .number()
      .min(1, "Price must be a positive number"),
  })
  .refine((data) => data.email === data.confirmEmail, {
    message: "Emails must match",
    path: ["confirmEmail"],
  });

type FormValues = z.infer<typeof schema>;

export default function FormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center gap-2 min-h-dvh pt-16 max-w-md mx-auto"
    >
      <input
        type="text"
        placeholder="Name"
        {...register("name")}
        className={`w-full p-2 border ${
          errors.name ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors.name && (
        <p className="text-red-500 mb-1">{errors.name.message}</p>
      )}
      <input
        type="email"
        placeholder="Email"
        {...register("email")}
        className={`w-full p-2  border ${
          errors.email ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      <input
        type="email"
        placeholder="Email confirmation"
        {...register("confirmEmail")}
        className={`w-full p-2  border ${
          errors.email ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors.confirmEmail && (
        <p className="text-red-500">{errors.confirmEmail.message}</p>
      )}
      <input
        type="text"
        placeholder="Postal Code (7 digits)"
        {...register("postalCode")}
        className={`w-full p-2  border ${
          errors.postalCode ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors.postalCode && (
        <p className="text-red-500">{errors.postalCode.message}</p>
      )}
      <input
        type="text"
        placeholder="Local Specialty Name"
        {...register("localSpecialtyName")}
        className={`w-full p-2  border ${
          errors.localSpecialtyName ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors.localSpecialtyName && (
        <p className="text-red-500">{errors.localSpecialtyName.message}</p>
      )}
      <input
        type="number"
        placeholder="Local Specialty Price (optional)"
        {...register("localSpecialtyPrice")}
        className={`w-full p-2  border ${
          errors.localSpecialtyPrice ? "border-red-500" : "border-gray-300"
        }`}
      />
      {errors.localSpecialtyPrice && (
        <p className="text-red-500">{errors.localSpecialtyPrice.message}</p>
      )}
      <button
        type="submit"
        className="w-full p-2 bg-blue-500 text-white hover:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}
