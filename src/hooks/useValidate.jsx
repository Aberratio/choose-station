const sortStations = (a, b) => {
  if (a.neededFuelCosts < b.neededFuelCosts) {
    return -1;
  }
  if (a.neededFuelCosts > b.neededFuelCosts) {
    return 1;
  }
  if (a.allDistance < b.allDistance) {
    return -1;
  } else if (a.allDistance > b.allDistance) {
    return 1;
  }

  return 0;
};

const hasFuel = (station, fuelType) => {
  if (fuelType === 1) {
    return !!station.ONPrice;
  } else if (fuelType === 2) {
    return !!station.PB95Price;
  } else if (fuelType === 3) {
    return !!station.PB98Price;
  } else if (fuelType === 4) {
    return !!station.ONPremiumPrice;
  } else if (fuelType === 5) {
    return !!station.PBPremiumPrice;
  } else if (fuelType === 6) {
    return !!station.LPGPrice;
  }
};

const calculateCost = (station, fuelType) => {
  if (fuelType === 1) {
    return parseFloat(station.neededFuel) * parseFloat(station.ONPrice);
  } else if (fuelType === 2) {
    return parseFloat(station.neededFuel) * parseFloat(station.PB95Price);
  } else if (fuelType === 3) {
    return parseFloat(station.neededFuel) * parseFloat(station.PB98Price);
  } else if (fuelType === 4) {
    return parseFloat(station.neededFuel) * parseFloat(station.ONPremiumPrice);
  } else if (fuelType === 5) {
    return parseFloat(station.neededFuel) * parseFloat(station.PBPremiumPrice);
  } else if (fuelType === 6) {
    return parseFloat(station.neededFuel) * parseFloat(station.LPGPrice);
  }
};

const useValidate = (carData, csvArray, setPreparedCsvArray) => {
  const validate = () => {
    if (!csvArray || !carData) return;

    // Heuristic I - Filter out stations without needed fuel
    let filteredStations = csvArray.filter((station) =>
      hasFuel(station, carData.fuelType)
    );

    // Heuristic II - Choosse prefered stations
    if (carData?.preferredStations?.length > 0) {
      filteredStations = filteredStations.filter((station) =>
        carData.preferredStations.includes(station.company)
      );
    }
    // Heuristic III - Remove excluded stations
    else if (carData?.excludedStations?.length > 0) {
      filteredStations = filteredStations.filter(
        (station) => !carData.excludedStations.includes(station.company)
      );
    }

    // Calculate how much fuel it takes to get to a given station
    filteredStations = filteredStations.map((station) => {
      return {
        ...station,
        neededFuel: (
          parseFloat(carData.neededFuel) +
          (parseFloat(station.allDistance) / 100) *
            parseFloat(carData.burningInCity)
        ).toFixed(2),
      };
    });

    // Calculate how much it will cost to go to the station
    filteredStations = filteredStations.map((station) => {
      return {
        ...station,
        neededFuelCosts: calculateCost(station, carData.fuelType).toFixed(2),
      };
    });

    setPreparedCsvArray(filteredStations.sort(sortStations));
  };

  return { validate };
};
export default useValidate;
