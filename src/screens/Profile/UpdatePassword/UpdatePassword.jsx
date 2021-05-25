import Input from "components/UI/Input/Input";
import React from "react";
import useForm from "./useForm";
const UpdatePassword = () => {
  const {
    formState,
    inputBlurHandler,
    inputChangeHandler,
    submitHandler,
    resetFormState,
  } = useForm();
  return (
    <div className="row p-4">
      <div className="col-md-12 pb-3">
        <h3>Informations sécurisé</h3>
      </div>
      <div className="col-md-6">
        <Input
          type="password"
          name="password"
          className="form-control"
          placeholder="Mot de passe ..."
          required={true}
          value={formState.inputValues.password}
          error={formState.inputHasErrors.password}
          onChange={(e) => {
            inputChangeHandler(
              "password",
              e.target.value,
              formState.inputHasErrors.password,
              formState.inputVisited.password
            );
          }}
          onBlur={() => inputBlurHandler("password")}
        />
      </div>
      <div className="col-md-6">
        <Input
          type="password"
          name="password_confirm"
          className="form-control"
          placeholder="Confirmation de mot de passe ..."
          required={true}
          value={formState.inputValues.password_confirm}
          error={formState.inputHasErrors.password_confirm}
          onChange={(e) => {
            inputChangeHandler(
              "password_confirm",
              e.target.value,
              formState.inputHasErrors.password_confirm,
              formState.inputVisited.password_confirm
            );
          }}
          onBlur={() => inputBlurHandler("password_confirm")}
        />
      </div>
      <div className="col-md-12 text-right">
        <button className="btn btn-success" onClick={submitHandler}>
          Modifié le mot de passe
        </button>
      </div>
    </div>
  );
};

export default UpdatePassword;
