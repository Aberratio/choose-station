import React, { useState, useEffect } from "react";

import { ProfileContainer, SiteContainer } from "./App.styled";
import { CriteriaForm } from "./components/CriteriaForm";
import ResultArray from "./components/ResultArray";
import { dataFromCSV } from "./data/fromUE";
import useValidate from "./hooks/useValidate";

function App() {
  const [carData, setCarData] = useState();
  const [isExcludingDisabled, setIsExcludingDisabled] = useState(false);
  const [csvArray, setCsvArray] = useState([]);
  const [preparedCsvArray, setPreparedCsvArray] = useState([]);
  const { validate } = useValidate(carData, csvArray, setPreparedCsvArray);

  useEffect(() => {
    setCsvArray(dataFromCSV);
  }, []);

  useEffect(() => {
    validate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carData, csvArray]);

  return (
    <SiteContainer>
      <ProfileContainer isExcludingDisabled={isExcludingDisabled}>
        <CriteriaForm
          carData={carData}
          setCarData={setCarData}
          setIsExcludingDisabled={setIsExcludingDisabled}
        />
        {preparedCsvArray && <ResultArray csvArray={preparedCsvArray} />}
      </ProfileContainer>
    </SiteContainer>
  );
}

export default App;
