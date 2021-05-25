import Input from "components/UI/Input/Input";
import React from "react";
import Modal from "react-bootstrap/Modal";
import useForm from "./useForm";
import "./style.css";

const RegisterModal = ({
  setToggleModalRegister,
  toggleModalRegister,
  showModalLogin,
}) => {
  const {
    formState,
    inputChangeHandler,
    inputBlurHandler,
    submitHandler,
    resetFormState,
  } = useForm(showModalLogin);
  return (
    <Modal
      show={toggleModalRegister}
      onHide={() => setToggleModalRegister(false)}
      dialogClassName="custom-modal"
      aria-labelledby="example-custom-modal-styling-title"
      centered={true}
    >
      <Modal.Body>
        <div className="container">
          <div className="d-flex justify-content-center p-3">
            <img src="./assets/img/logo/logo2.png" alt="logo" width="150" />
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              submitHandler();
            }}
          >
            <div className="w-100 justify-content-center"></div>
            <Input
              type="text"
              name="nom"
              className="form-control"
              placeholder="Nom ..."
              required={true}
              value={formState.inputValues.nom}
              error={formState.inputHasErrors.nom}
              onChange={(e) => {
                inputChangeHandler(
                  "nom",
                  e.target.value,
                  formState.inputHasErrors.nom,
                  formState.inputVisited.nom
                );
              }}
              onBlur={() => inputBlurHandler("nom")}
            />
            <Input
              type="text"
              name="prenom"
              className="form-control"
              placeholder="Prénom ..."
              required={true}
              value={formState.inputValues.prenom}
              error={formState.inputHasErrors.prenom}
              onChange={(e) => {
                inputChangeHandler(
                  "prenom",
                  e.target.value,
                  formState.inputHasErrors.prenom,
                  formState.inputVisited.prenom
                );
              }}
              onBlur={() => inputBlurHandler("prenom")}
            />
            <Input
              type="email"
              name="email"
              className="form-control"
              placeholder="Adresse email ..."
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
            <Input
              type="password"
              name="password_confirm"
              className="form-control"
              placeholder="Mot de passe de confirmation ..."
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
            <Input
              type="date"
              name="date_naissance"
              className="form-control"
              placeholder="Date de naissance ..."
              required={true}
              value={formState.inputValues.date_naissance}
              error={formState.inputHasErrors.date_naissance}
              onChange={(e) => {
                inputChangeHandler(
                  "date_naissance",
                  e.target.value,
                  formState.inputHasErrors.date_naissance,
                  formState.inputVisited.date_naissance
                );
              }}
              onBlur={() => inputBlurHandler("date_naissance")}
            />
            <Input
              type="text"
              name="num_tel"
              className="form-control"
              placeholder="Numéro de téléphone ..."
              required={true}
              value={formState.inputValues.num_tel}
              error={formState.inputHasErrors.num_tel}
              onChange={(e) => {
                inputChangeHandler(
                  "num_tel",
                  e.target.value,
                  formState.inputHasErrors.num_tel,
                  formState.inputVisited.num_tel
                );
              }}
              onBlur={() => inputBlurHandler("num_tel")}
            />
            <Input
              type="text"
              name="adresse"
              className="form-control"
              placeholder="Adresse ..."
              required={true}
              value={formState.inputValues.adresse}
              error={formState.inputHasErrors.adresse}
              onChange={(e) => {
                inputChangeHandler(
                  "adresse",
                  e.target.value,
                  formState.inputHasErrors.adresse,
                  formState.inputVisited.adresse
                );
              }}
              onBlur={() => inputBlurHandler("adresse")}
            />
            <button
              type="button"
              class="btn btn-success w-100"
              onClick={submitHandler}
            >
              Inscrire
            </button>
          </form>
          <hr />
          <div className="text-center">
            Vous avez déja un compte ?{" "}
            <b onClick={showModalLogin} className="b-button">
              Connexion
            </b>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default RegisterModal;
