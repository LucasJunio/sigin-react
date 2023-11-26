import { useFormik } from "formik";
import * as yup from "yup";

type Signin = {
  email: string;
  password: string;
};

export const SigninFormik = () => {
  const validationSchema = yup.object({
    email: yup
      .string()
      .email("Não é um email valido")
      .required("O campo email é obrigatório"),
    password: yup.string().required("O campo senha é obrigatório"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async ({ email, password }: Signin) => {
      const body = {
        email,
        password,
      };
      console.log(body);
    },
  });

  return formik;
};
