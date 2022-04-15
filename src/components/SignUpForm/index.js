import React from "react";
import { useFormik } from "formik";
import SignupSchema from "./validations";
function SignUpForm() {
  const { handleSubmit, values, handleChange, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        name: "",
        surname: "",
        email: "",
        username: "",
        password: "",
        passwordConfirm: "",
        termsOfService: false,
      },
      validationSchema: SignupSchema,
      onSubmit: async (values, bag) => {
        try {
          // login(registerResponse);
          // history.push('/profile');
          console.log(values);
        } catch (e) {
          bag.setErrors({ general: e.response.data.message });
        }
      },
    });
  return (
    <form onSubmit={() => handleSubmit()} className="formSignUp">
      <div className="firstLine">
        <div style={{ height: "auto", width: "240px" }}>
          <label>İSİM</label>
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            name="name"
            id="name"
            placeholder="İsim giriniz"
          />

          <p className="error">{touched.name && errors.name}</p>
        </div>

        <div style={{ height: "auto", width: "270px" }}>
          <label>SOYİSİM</label>
          <input
            id="surname"
            name="surname"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Soyisim giriniz"
          />

          <p className="error">{touched.surname && errors.surname}</p>
        </div>
      </div>
      <div className="inputs">
        <div className="required">
          <label>E-posta</label>
          <input
            id="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="E-posta giriniz"
          />

          <p className="error">{touched.email && errors.email}</p>
        </div>
        <div className="required">
          <label>KULLANICI ADI</label>
          <input
            id="username"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Kullanıcı adını giriniz"
          />

          <p className="error">{touched.username && errors.username}</p>
        </div>
        
        <div className="required">
          <label>ŞİFRE</label>
          <input
            type={"password"}
            id="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Şifreni gir"
          ></input>
          <p className="error">{touched.password && errors.password}</p>
        </div>
        <div className="required">
          <label>ŞİFRENİ TEKRAR GİR</label>
          <input
            type={"password"}
            id="passwordConfirm"
            name="passwordConfirm"
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Şifreni doğrula"
          />
          <p className="error">
            {touched.passwordConfirm && errors.passwordConfirm}
          </p>
        </div>
        <div className="confirm required">
          <input
            name="termsOfService"
            id="termsOfService"
            onChange={handleChange}
            onBlur={handleBlur}
            type="checkbox"
          />
          <label>Sözleşmeyi kabul ediyorum.</label>
        </div>
        <p className="error">
          {touched.termsOfService && errors.termsOfService}
        </p>
      </div>

      <button onClick={handleSubmit} className="registerbutton" type="submit">
        KAYIT OL
      </button>
    </form>
  );
}

export default SignUpForm;
