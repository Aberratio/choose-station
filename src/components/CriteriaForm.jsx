import React from "react";
import validator from "@rjsf/validator-ajv8";
import Form from "@rjsf/mui";

import { schema, uiSchema } from "./schemas.js";
import { SubmitButton } from "./SubmitButton.jsx";

export const CriteriaForm = ({
  carData,
  setCarData,
  setIsExcludingDisabled,
}) => {
  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      formData={carData ? carData : {}}
      validator={validator}
      onChange={(data, id) => {
        if (id !== undefined) {
          if (data?.formData?.preferredStations?.length > 0) {
            setIsExcludingDisabled(true);
          } else {
            setIsExcludingDisabled(false);
          }

          if (
            data?.formData?.fuelType &&
            data?.formData?.burningInCity &&
            data?.formData?.neededFuel
          ) {
            setCarData(data.formData);
          }
        }
      }}
      onSubmit={(e) => setCarData(e.formData)}
    >
      <div>
        <SubmitButton type="submit">Oblicz</SubmitButton>
      </div>
    </Form>
  );
};
