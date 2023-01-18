import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const schema = yup.object().shape({
    firstName: yup.string().min(3).required("Nombre debe tener mínimo 3 caracteres"),
    lastName: yup.string().min(3).required("Apellido debe tener mínimo 3 caracteres"),
    email: yup.string().email().required("Introduce un email valido"),
    password: yup
    .string()
    .required('Please Enter your password')
    .matches(
      passwordRules,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
    ),
    confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
    edad: yup.string().min(2).required("Edad debe tener mínimo 2 caracteres")
  });


  export default schema