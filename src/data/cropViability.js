// ==========================================================
// AGRI FINCASTER - CROP VIABILITY ENGINE
// ==========================================================
//
// This is a planning suitability layer.
//
// It does NOT claim guaranteed agricultural performance.
// Actual results depend on district, soil, rainfall,
// irrigation, seed variety, weather and farm practices.
//
// Later this can be replaced/enhanced using the historical
// Government of India crop-production dataset.
// ==========================================================

const NORMALIZE = (value = "") =>
  value
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ");


// ==========================================================
// STATE CROP PROFILES
// ==========================================================
//
// high:
// crops commonly associated with this state.
//
// moderate:
// crops that can occur but are less broadly suitable.
//
// seasons:
// preferred/common growing seasons.
// ==========================================================

const STATE_PROFILES = {
  karnataka: {
    high: [
      "rice",
      "maize",
      "ragi",
      "jowar",
      "groundnut",
      "cotton(lint)",
      "sugarcane",
      "sunflower",
      "turmeric",
      "arecanut",
      "coconut",
      "black pepper",
      "banana",
      "onion",
    ],

    moderate: [
      "wheat",
      "soyabean",
      "arhar/tur",
      "cowpea(lobia)",
      "sesamum",
      "potato",
      "tobacco",
    ],
  },

  "west bengal": {
    high: [
      "rice",
      "jute",
      "potato",
      "maize",
      "mustard",
      "rapeseed & mustard",
      "sugarcane",
    ],

    moderate: [
      "wheat",
      "sesamum",
      "groundnut",
      "banana",
    ],
  },

  punjab: {
    high: [
      "wheat",
      "rice",
      "maize",
      "cotton(lint)",
      "sugarcane",
      "potato",
    ],

    moderate: [
      "mustard",
      "rapeseed & mustard",
      "sunflower",
    ],
  },

  haryana: {
    high: [
      "wheat",
      "rice",
      "bajra",
      "cotton(lint)",
      "mustard",
      "rapeseed & mustard",
      "sugarcane",
    ],

    moderate: [
      "maize",
      "gram",
      "barley",
    ],
  },

  maharashtra: {
    high: [
      "cotton(lint)",
      "soyabean",
      "jowar",
      "bajra",
      "sugarcane",
      "groundnut",
      "onion",
      "turmeric",
    ],

    moderate: [
      "rice",
      "maize",
      "wheat",
      "gram",
      "sunflower",
    ],
  },

  gujarat: {
    high: [
      "cotton(lint)",
      "groundnut",
      "bajra",
      "wheat",
      "mustard",
      "rapeseed & mustard",
      "sesamum",
    ],

    moderate: [
      "rice",
      "maize",
      "sugarcane",
      "potato",
    ],
  },

  rajasthan: {
    high: [
      "bajra",
      "wheat",
      "mustard",
      "rapeseed & mustard",
      "gram",
      "barley",
      "sesamum",
    ],

    moderate: [
      "cotton(lint)",
      "maize",
      "groundnut",
    ],
  },

  "uttar pradesh": {
    high: [
      "wheat",
      "rice",
      "sugarcane",
      "potato",
      "mustard",
      "rapeseed & mustard",
      "maize",
    ],

    moderate: [
      "gram",
      "bajra",
      "arhar/tur",
      "barley",
    ],
  },

  bihar: {
    high: [
      "rice",
      "wheat",
      "maize",
      "sugarcane",
      "potato",
    ],

    moderate: [
      "gram",
      "arhar/tur",
      "mustard",
      "rapeseed & mustard",
    ],
  },

  odisha: {
    high: [
      "rice",
      "groundnut",
      "maize",
      "sesamum",
      "turmeric",
    ],

    moderate: [
      "sugarcane",
      "arhar/tur",
      "cotton(lint)",
    ],
  },

  "andhra pradesh": {
    high: [
      "rice",
      "groundnut",
      "cotton(lint)",
      "maize",
      "sugarcane",
      "chillies",
      "dry chillies",
      "turmeric",
    ],

    moderate: [
      "sunflower",
      "sesamum",
      "banana",
    ],
  },

  telangana: {
    high: [
      "rice",
      "cotton(lint)",
      "maize",
      "arhar/tur",
      "groundnut",
      "turmeric",
    ],

    moderate: [
      "soyabean",
      "sesamum",
      "sunflower",
    ],
  },

  "tamil nadu": {
    high: [
      "rice",
      "sugarcane",
      "groundnut",
      "coconut",
      "banana",
      "turmeric",
      "cotton(lint)",
    ],

    moderate: [
      "maize",
      "ragi",
      "sesamum",
      "sunflower",
    ],
  },

  kerala: {
    high: [
      "coconut",
      "banana",
      "black pepper",
      "arecanut",
      "rice",
      "ginger",
      "turmeric",
      "cashewnut",
    ],

    moderate: [
      "groundnut",
    ],
  },

  "madhya pradesh": {
    high: [
      "soyabean",
      "wheat",
      "gram",
      "maize",
      "cotton(lint)",
      "mustard",
      "rapeseed & mustard",
    ],

    moderate: [
      "rice",
      "jowar",
      "arhar/tur",
    ],
  },

  assam: {
    high: [
      "rice",
      "jute",
      "banana",
      "sugarcane",
      "potato",
    ],

    moderate: [
      "maize",
      "mustard",
      "rapeseed & mustard",
    ],
  },
};


// ==========================================================
// SEASON PROFILES
// ==========================================================

const SEASON_PROFILES = {
  kharif: [
    "rice",
    "maize",
    "cotton(lint)",
    "jute",
    "soyabean",
    "groundnut",
    "bajra",
    "jowar",
    "ragi",
    "arhar/tur",
    "urad",
    "moong(green gram)",
    "sesamum",
    "sunflower",
  ],

  rabi: [
    "wheat",
    "barley",
    "gram",
    "mustard",
    "rapeseed & mustard",
    "potato",
    "coriander",
  ],

  zaid: [
    "maize",
    "groundnut",
    "sunflower",
    "moong(green gram)",
    "cowpea(lobia)",
  ],
};


// ==========================================================
// SPECIAL STRONG INCOMPATIBILITIES
// ==========================================================
//
// These are combinations that should strongly reduce
// suitability in the current planning model.
// ==========================================================

const LOW_VIABILITY_RULES = [
  {
    crop: "jute",
    states: [
      "karnataka",
      "rajasthan",
      "gujarat",
      "haryana",
      "punjab",
    ],
  },

  {
    crop: "coconut",
    states: [
      "punjab",
      "haryana",
      "rajasthan",
    ],
  },

  {
    crop: "black pepper",
    states: [
      "punjab",
      "haryana",
      "rajasthan",
    ],
  },

  {
    crop: "arecanut",
    states: [
      "punjab",
      "haryana",
      "rajasthan",
    ],
  },
];


// ==========================================================
// MAIN VIABILITY FUNCTION
// ==========================================================

export function evaluateCropViability({
  crop,
  state,
  season,
}) {
  const cropKey =
    NORMALIZE(crop);

  const stateKey =
    NORMALIZE(state);

  const seasonKey =
    NORMALIZE(season);

  if (
    !cropKey ||
    !stateKey ||
    !seasonKey
  ) {
    return {
      level: "unknown",
      score: null,
      label: "Insufficient data",
      message:
        "Choose a crop, season and location to check crop viability.",
      multiplier: 1,
    };
  }


  // --------------------------------------------------------
  // KNOWN LOW-SUITABILITY COMBINATIONS
  // --------------------------------------------------------

  const strongConflict =
    LOW_VIABILITY_RULES.find(
      (rule) =>
        NORMALIZE(rule.crop) ===
          cropKey &&
        rule.states.includes(
          stateKey
        )
    );

  if (strongConflict) {
    return {
      level: "low",
      score: 20,

      label:
        "Low viability",

      message:
        `${crop} is not commonly suited to ${state} under typical farming conditions. Consider another crop better established in this region.`,

      multiplier: 0.28,
    };
  }


  const profile =
    STATE_PROFILES[stateKey];

  const correctSeason =
    SEASON_PROFILES[
      seasonKey
    ]?.some(
      (item) =>
        NORMALIZE(item) ===
        cropKey
    );


  // --------------------------------------------------------
  // NO STATE PROFILE
  // --------------------------------------------------------

  if (!profile) {
    return {
      level:
        correctSeason
          ? "moderate"
          : "low",

      score:
        correctSeason
          ? 55
          : 35,

      label:
        correctSeason
          ? "Moderate viability"
          : "Low viability",

      message:
        correctSeason
          ? `${crop} matches the general ${season} season, but regional suitability data is limited for ${state}.`
          : `${crop} is not typically associated with the selected ${season} season.`,

      multiplier:
        correctSeason
          ? 0.78
          : 0.48,
    };
  }


  const highState =
    profile.high.some(
      (item) =>
        NORMALIZE(item) ===
        cropKey
    );

  const moderateState =
    profile.moderate.some(
      (item) =>
        NORMALIZE(item) ===
        cropKey
    );


  // --------------------------------------------------------
  // HIGH STATE + CORRECT SEASON
  // --------------------------------------------------------

  if (
    highState &&
    correctSeason
  ) {
    return {
      level: "high",
      score: 90,

      label:
        "High viability",

      message:
        `${crop} is well established in ${state} and fits the selected ${season} season.`,

      multiplier: 1,
    };
  }


  // --------------------------------------------------------
  // HIGH STATE BUT SEASON MISMATCH
  // --------------------------------------------------------

  if (
    highState &&
    !correctSeason
  ) {
    return {
      level: "moderate",
      score: 62,

      label:
        "Moderate viability",

      message:
        `${crop} is grown in ${state}, but ${season} may not be its strongest growing season.`,

      multiplier: 0.72,
    };
  }


  // --------------------------------------------------------
  // MODERATE STATE + CORRECT SEASON
  // --------------------------------------------------------

  if (
    moderateState &&
    correctSeason
  ) {
    return {
      level: "moderate",
      score: 65,

      label:
        "Moderate viability",

      message:
        `${crop} can be grown in parts of ${state}, although suitability varies by district and local conditions.`,

      multiplier: 0.76,
    };
  }


  // --------------------------------------------------------
  // MODERATE STATE + SEASON MISMATCH
  // --------------------------------------------------------

  if (moderateState) {
    return {
      level: "low",
      score: 42,

      label:
        "Low viability",

      message:
        `${crop} has limited suitability in ${state}, and the selected ${season} season may further reduce expected performance.`,

      multiplier: 0.52,
    };
  }


  // --------------------------------------------------------
  // NOT TYPICALLY ASSOCIATED WITH STATE
  // --------------------------------------------------------

  return {
    level: "low",
    score: 30,

    label:
      "Low viability",

    message:
      `${crop} is not commonly associated with commercial cultivation in ${state}. Check local agricultural guidance before planting.`,

    multiplier: 0.38,
  };
}