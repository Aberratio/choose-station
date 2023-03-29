export const schema = {
  title: "Wyszukiwanie stacji paliw",
  description: "Wypełnij formularz i wciśnij przycisk 'Oblicz'",
  type: "object",
  required: ["fuelType", "burningInCity", "neededFuel"],
  properties: {
    fuelType: {
      type: "number",
      oneOf: [
        { const: 1, title: "ON" },
        { const: 2, title: "PB 95" },
        { const: 3, title: "PB 98" },
        { const: 4, title: "ON premium" },
        { const: 5, title: "PB premium" },
        { const: 6, title: "LPG" },
      ],
    },
    burningInCity: {
      type: "number",
    },
    neededFuel: {
      type: "number",
    },
    preferredStations: {
      type: "array",
      items: {
        type: "string",
        enum: [
          "ORLEN",
          "Shell",
          "AMIC",
          "OMEGA",
          "bp",
          "Pieprzyk",
          "Circle",
          "AVIA",
          "Transbud",
        ],
      },
      uniqueItems: true,
    },
    excludedStations: {
      type: "array",
      items: {
        type: "string",
        enum: [
          "ORLEN",
          "Shell",
          "AMIC",
          "OMEGA",
          "bp",
          "Pieprzyk",
          "Circle",
          "AVIA",
          "Transbud",
        ],
      },
      uniqueItems: true,
    },
  },
};

export const uiSchema = {
  fuelType: {
    "ui:title": "Rodzaj paliwa",
  },
  burningInCity: {
    "ui:title": " Średnie spalanie samochodu w mieście",
    "ui:description": "litry na 100 km",
  },
  neededFuel: {
    "ui:title": "Planowana ilość litrów paliwa do zatankowania",
  },
  preferredStations: {
    "ui:title": "Preferowane stacje",
    "ui:widget": "checkboxes",
    "ui:description": "Zaznacz stacje, które preferujesz",
    "ui:options": {
      inline: true,
    },
  },
  excludedStations: {
    "ui:title": "Wykluczone stacje",
    "ui:widget": "checkboxes",
    "ui:description": "Zaznacz stacje, na których nie chcesz tankować",
    "ui:options": {
      inline: true,
    },
  },
};
