import * as Yup from "yup";

export interface FormData {
  name: string;
  email: string;
}

// Form validation schema
export const formSchema = Yup.object().shape({
  name: Yup.string()
    .min(5, "Name must be at least 5 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
});
