import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  email: Yup.string()
    .email("Email formatında hata var")
    .required("E-posta alanı zorunludur"),
  username: Yup.string().required("Kullanıcı Adı alanı zorunludur"),
  password: Yup.string().required("Şifre alanı zorunludur"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password")], "Şifreler uyuşmuyor")
    .required("Şifre tekrar alanı zorunludur"),
  termsOfService: Yup.boolean().oneOf([true], "Sözleşmeyi onaylayınız."),
});

export default SignupSchema;
