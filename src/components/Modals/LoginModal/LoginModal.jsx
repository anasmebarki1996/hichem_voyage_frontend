import Input from "components/UI/Input/Input";
import React from "react";
import Modal from "react-bootstrap/Modal";
import useForm from "./useForm";
import "./style.css";

const LoginModal = ({
  setToggleModalLogin,
  toggleModalLogin,
  showModalRegister,
}) => {
  const {
    formState,
    serverMessage,
    inputChangeHandler,
    inputBlurHandler,
    submitHandler,
    resetFormState,
  } = useForm(setToggleModalLogin);
  return (
    <Modal
      show={toggleModalLogin}
      onHide={() => setToggleModalLogin(false)}
      dialogClassName="custom-modal"
      aria-labelledby="example-custom-modal-styling-title"
      centered={true}
    >
      <Modal.Body>
        <div className="container">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitHandler();
            }}
          >
            <div className="d-flex justify-content-center p-3">
              <img src="./assets/img/logo/logo2.png" alt="logo" width="150" />
            </div>
            {serverMessage.error && (
              <div class="alert alert-danger" role="alert">
                {serverMessage.error}
              </div>
            )}
            <Input
              type="text"
              name="email"
              className="form-control"
              placeholder="adresse email ..."
              required={true}
              value={formState.inputValues.email}
              error={formState.inputHasErrors.email}
              onChange={(e) => {
                inputChangeHandler(
                  "email",
                  e.target.value,
                  formState.inputHasErrors.email,
                  formState.inputVisited.email
                );
              }}
              onBlur={() => inputBlurHandler("email")}
            />
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
            <button
              type="button"
              class="btn btn-success w-100"
              onClick={submitHandler}
            >
              Connexion
            </button>
          </form>
          <hr />
          <div className="text-center">
            Vous n'avez pas un compte ?{" "}
            <b onClick={showModalRegister} className="b-button ">
              Inscriez-vous
            </b>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default LoginModal;
