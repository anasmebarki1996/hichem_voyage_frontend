import Input from "components/UI/Input/Input";
import React from "react";
import useForm from "./useForm";
const UpdateInformations = () => {
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
        <h3>Informations personnelles</h3>
      </div>
      <div className="col-md-6">
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
      </div>
      <div className="col-md-6">
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
      </div>
      <div className="col-md-6">
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
      </div>
      <div className="col-md-6">
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
      </div>
      <div className="col-md-6">
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
      </div>
      <div className="col-md-12 text-right">
        <button className="btn btn-success" onClick={submitHandler}>
          Modifié les informations
        </button>
      </div>
    </div>
  );
};

export default UpdateInformations;
