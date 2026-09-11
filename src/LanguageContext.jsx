import React, {
  createContext,
  useContext,
  useMemo,
  useState,
} from "react";

const LanguageContext = createContext(null);

const translations = {
  // ======================================================
  // ENGLISH
  // ======================================================

  en: {
    languageName: "English",

    loginKicker: "SMART FARM PLANNING",
loginHero1: "Plan better.",
loginHero2: "Farm smarter.",
loginIntro:
  "Weather, crop planning, finance and farm records — brought together in one simple platform.",

welcomeBack: "Welcome back",
loginSubtitle: "Sign in to continue to Agri Fincaster.",

username: "Username",
enterUsername: "Enter your username",

password: "Password",
enterPassword: "Enter your password",

signIn: "Sign in",

newHere: "New here?",
createAccount: "Create account",

    home: "Home",
    weather: "Weather",
    crops: "Crops",
    finance: "Finance",
    marketplace: "Marketplace",
    reports: "Reports",
    notifications: "Notifications",
    signOut: "Sign out",
    language: "Language",

    backHome: "Back to Home",
    open: "Open",
    loading: "Loading...",
    save: "Save",
    saved: "Saved",
    delete: "Delete",
    close: "Close",
    location: "Location",

    farmDashboard: "FARM DASHBOARD",
    goodToSeeYou: "Good to see you",
    homeIntro:
      "Plan with weather, check crop viability, estimate production, track finances, exchange farm equipment and keep your reports together.",

    weatherText:
      "Search any Indian location and view a 7-day forecast.",

    cropPlanning: "Crop planning",
    cropPlanningText:
      "Check crop viability by location and season, then estimate production.",

    financeText:
      "Calculate revenue, expenses and expected net margin.",

    reportsText:
      "Review your saved crop estimates and farm history.",

    sharedLocation:
      "ONE LOCATION, SHARED ACROSS THE APP",

    noLocation:
      "No location selected yet",

    setLocation:
      "Set location",

    assistedAccess:
      "ASSISTED DIGITAL ACCESS",

    supportTitle:
      "Technology should assist the farmer, not become another barrier.",

    supportPara1:
      "AgriFincaster is designed to help farmers access weather information, crop-planning guidance, production estimates, financial tools and farm-equipment barter support.",

    supportPara2:
      "Farmers who are not comfortable using digital tools can use AgriFincaster with assistance from Panchayat officials, agriculture extension workers, Common Service Centres or other local support staff.",

    panchayatUse:
      "Suggested use at Panchayat level",

    panchayatText:
      "A local official can sit with the farmer, enter the farm location, crop, season, land area and other requirements, then explain the results in simple language so the farmer can make the final decision.",

    weatherKicker: "WEATHER & LOCATION",
    weatherTitle:
      "Know what's coming before you plan.",

    weatherIntro:
      "Search a location in India. Your selection is shared automatically with Crop Planning and is saved only for your account.",

    searchLocation:
      "Search village, town or city…",

    useCurrentLocation:
      "Use current location",

    selectLocation:
      "Select a location",

    forecastAppears:
      "Your forecast will appear here.",

    currentWeather: "NOW",
    feelsLike: "Feels like",
    humidity: "Humidity",
    wind: "Wind",
    sevenDayOutlook: "7-DAY OUTLOOK",
    forecast: "Forecast",
    rain: "rain",

    cropPlanningKicker:
      "CROP PLANNING",

    cropTitle:
      "Check crop viability before you plant.",

    cropIntro:
      "AgriFincaster checks whether the selected crop is suitable for your state and season before estimating expected production.",

    locationNotSet:
      "Location not set",

    inputs: "INPUTS",
    cropDetails: "Crop details",
    crop: "Crop",
    selectCrop: "Select crop",
    season: "Season",
    selectSeason: "Select season",
    landArea: "Land area (hectares)",
    checkViability: "Check viability",
    analysing: "Analysing…",

    cropAnalysisEmpty:
      "Your crop analysis will appear here.",

    cropAnalysisHelp:
      "Choose a crop, season and land area to begin.",

    cropViability:
      "CROP VIABILITY",

    highViability:
      "High viability",

    moderateViability:
      "Moderate viability",

    lowViability:
      "Low viability",

    productionEstimate:
      "PRODUCTION ESTIMATE",

    averageProductionEstimate:
      "AVERAGE PRODUCTION ESTIMATE",

    notRecommended:
      "Not recommended",

    lowEstimateMessage:
      "A production estimate is not shown because this crop has low viability for the selected location and season.",

    moderateEstimateMessage:
      "This is a conservative average estimate because this crop has moderate suitability for the selected location and season. Actual production may vary significantly.",

    assessment: "Assessment",
    method: "Method",
    saveReport: "Save report",
    savedToReports:
      "Saved to reports",

    farmerExchange:
      "FARMER EXCHANGE",

    barterTitle1:
      "Barter what you have.",

    barterTitle2:
      "Find what you need.",

    barterIntro:
      "Exchange farming tools, machinery, irrigation equipment, spare parts, seeds, storage supplies and other farm essentials directly with other farmers.",

    createBarterRequest:
      "Create Barter Request",

    publicMarketplace:
      "Marketplace",

    myBarterRequests:
      "My Barter Requests",

    activeRequests:
      "active requests",

    requests:
      "requests",

    searchMarketplace:
      "Search tools, equipment, supplies or location...",

    searchMyRequests:
      "Search your barter requests...",

    noBarterRequests:
      "No barter requests found.",

    noOwnBarterRequests:
      "You have no barter requests yet.",

    createFirstRequest:
      "Create the first request or search for something else.",

    createOwnRequest:
      "Create a request to offer farming equipment or supplies.",

    offeredBy: "OFFERED BY",
    iHave: "I HAVE",
    iNeed: "I NEED",
    condition: "CONDITION",

    yourBarterRequest:
      "Your barter request",

    makeCounterOffer:
      "Make Counter Offer",

    newRequest:
      "NEW REQUEST",

    createRequest:
      "Create a barter request",

    whatDoYouHave:
      "What do you have?",

    whatLookingFor:
      "What are you looking for?",

    contactDetails:
      "Contact details",

    description:
      "Description",

    publishRequest:
      "Publish Request",

    counterOffer:
      "COUNTER OFFER",

    theyWant:
      "THEY WANT",

    whatCanOffer:
      "What can you offer?",

    yourContactDetails:
      "Your contact details",

    sendCounterOffer:
      "Send Counter Offer",

    closeRequest:
      "Close Request",

    reopenRequest:
      "Reopen Request",

    matchedMessage:
      "This barter has been matched.",

    requestPublished:
      "Barter request published.",

    requestClosed:
      "Barter request closed.",

    requestReopened:
      "Barter request reopened.",

    requestDeleted:
      "Barter request deleted.",

    offerSent:
      "Counter offer sent.",

    notificationsKicker:
      "NOTIFICATIONS",

    barterActivity:
      "Your barter activity",

    barterActivityIntro:
      "Review counter offers and manage your barter requests.",

    noNotifications:
      "No notifications yet.",

    newOffersAppear:
      "New barter offers will appear here.",

    incomingCounterOffer:
      "COUNTER OFFER",

    accept: "Accept",
    decline: "Decline",

    matchedFarmerContact:
      "MATCHED FARMER CONTACT",

    barterPartnerContact:
      "BARTER PARTNER CONTACT",

    contactNotProvided:
      "Contact not provided",

    arrangeExchange:
      "Contact the farmer to arrange the exchange.",

    financeKicker: "FARM FINANCE",
    financeTitle:
      "Know your margin before you sell.",

    financeIntro:
      "Estimate revenue, net profit or loss, break-even price and operating margin.",

    budgetInputs: "BUDGET INPUTS",
    seasonEconomics: "Season economics",

    expectedCropPrice:
      "Expected crop price (₹ / kg)",

    expectedProduction:
      "Expected production (kg)",

    totalExpenses:
      "Total expenses (₹)",

    financeSummary:
      "FINANCE SUMMARY",

    expectedProfit:
      "Expected profit",

    expectedLoss:
      "Expected loss",

    revenue: "Revenue",
    expenses: "Expenses",
    margin: "Margin",

    breakEvenPrice:
      "Break-even price",

    financePlanningNote:
      "Use conservative price and production assumptions when planning. This calculator does not include taxes, loan interest or price volatility unless entered under expenses.",

    reportsKicker: "REPORTS",

    reportsPageTitle:
      "Your crop planning history, in one place.",

    reportsPageIntro:
      "Review saved production estimates and the location used for each report.",

    refresh: "Refresh",
    savedReports: "Saved reports",
    plannedArea: "Planned area",

    estimatedProduction:
      "Estimated production",

    loadingReports:
      "Loading reports…",

    noReports:
      "No saved reports yet.",

    noReportsHelp:
      "Create a crop estimate and save it to see it here.",

    reportHistory: "HISTORY",
    savedEstimates: "Saved estimates",
    reportDetail: "REPORT DETAIL",
    date: "Date",
    savedEstimate: "Saved estimate",
    reportsLoadError:
      "Could not load reports.",
  },

  // ======================================================
  // HINDI
  // ======================================================

  hi: {
    languageName: "हिंदी",
// HINDI
loginKicker: "स्मार्ट कृषि योजना",
loginHero1: "बेहतर योजना बनाइए।",
loginHero2: "समझदारी से खेती कीजिए।",
loginIntro:
  "मौसम, फसल योजना, वित्त और कृषि रिकॉर्ड — सब एक आसान प्लेटफ़ॉर्म पर।",

welcomeBack: "फिर से स्वागत है",
loginSubtitle:
  "Agri Fincaster जारी रखने के लिए साइन इन करें।",

username: "उपयोगकर्ता नाम",
enterUsername: "अपना उपयोगकर्ता नाम दर्ज करें",

password: "पासवर्ड",
enterPassword: "अपना पासवर्ड दर्ज करें",

signIn: "साइन इन",

newHere: "नए उपयोगकर्ता हैं?",
createAccount: "खाता बनाएँ",
    home: "होम",
    weather: "मौसम",
    crops: "फसलें",
    finance: "वित्त",
    marketplace: "विनिमय बाज़ार",
    reports: "रिपोर्ट्स",
    notifications: "सूचनाएँ",
    signOut: "साइन आउट",
    language: "भाषा",

    backHome: "होम पर वापस जाएँ",
    open: "खोलें",
    loading: "लोड हो रहा है...",
    save: "सहेजें",
    saved: "सहेजा गया",
    delete: "हटाएँ",
    close: "बंद करें",
    location: "स्थान",

    farmDashboard: "कृषि डैशबोर्ड",
    goodToSeeYou: "आपका स्वागत है",

    homeIntro:
      "मौसम देखें, फसल की उपयुक्तता जाँचें, उत्पादन का अनुमान लगाएँ, वित्त संभालें और कृषि उपकरणों का आदान-प्रदान करें।",

    weatherText:
      "भारत में किसी भी स्थान का 7-दिन का मौसम पूर्वानुमान देखें।",

    cropPlanning:
      "फसल योजना",

    cropPlanningText:
      "स्थान और मौसम के अनुसार फसल की उपयुक्तता जाँचें और उत्पादन का अनुमान देखें।",

    financeText:
      "आय, खर्च और अनुमानित लाभ की गणना करें।",

    reportsText:
      "अपनी सहेजी गई फसल रिपोर्ट और कृषि इतिहास देखें।",

    sharedLocation:
      "पूरे ऐप में एक ही स्थान का उपयोग",

    noLocation:
      "अभी कोई स्थान चुना नहीं गया",

    setLocation:
      "स्थान चुनें",

    assistedAccess:
      "सहायता के साथ डिजिटल उपयोग",

    supportTitle:
      "तकनीक किसान की मदद करे, बाधा न बने।",

    supportPara1:
      "AgriFincaster किसानों को मौसम, फसल योजना, उत्पादन अनुमान, वित्तीय उपकरण और कृषि उपकरण विनिमय की सुविधा देने के लिए बनाया गया है।",

    supportPara2:
      "जो किसान डिजिटल उपकरणों का उपयोग करने में सहज नहीं हैं, वे पंचायत अधिकारियों, कृषि विस्तार कर्मचारियों, कॉमन सर्विस सेंटर या अन्य स्थानीय सहायता कर्मियों की मदद से AgriFincaster का उपयोग कर सकते हैं।",

    panchayatUse:
      "पंचायत स्तर पर सुझाया गया उपयोग",

    panchayatText:
      "स्थानीय अधिकारी किसान के साथ बैठकर स्थान, फसल, मौसम, भूमि क्षेत्र और अन्य आवश्यक जानकारी दर्ज कर सकते हैं और परिणाम सरल भाषा में समझा सकते हैं।",

    weatherKicker:
      "मौसम और स्थान",

    weatherTitle:
      "योजना बनाने से पहले मौसम जानें।",

    weatherIntro:
      "भारत में अपना स्थान खोजें। चुना गया स्थान फसल योजना में भी उपयोग होगा और केवल आपके खाते के लिए सहेजा जाएगा।",

    searchLocation:
      "गाँव, शहर या कस्बा खोजें…",

    useCurrentLocation:
      "वर्तमान स्थान उपयोग करें",

    selectLocation:
      "स्थान चुनें",

    forecastAppears:
      "मौसम पूर्वानुमान यहाँ दिखाई देगा।",

    currentWeather: "अभी",
    feelsLike: "महसूस तापमान",
    humidity: "नमी",
    wind: "हवा",
    sevenDayOutlook:
      "7-दिन का पूर्वानुमान",
    forecast: "पूर्वानुमान",
    rain: "वर्षा",

    cropPlanningKicker:
      "फसल योजना",

    cropTitle:
      "बुवाई से पहले फसल की उपयुक्तता जाँचें।",

    cropIntro:
      "AgriFincaster आपके राज्य और मौसम के अनुसार फसल की उपयुक्तता जाँचता है और उसके बाद उत्पादन का अनुमान देता है।",

    locationNotSet:
      "स्थान चुना नहीं गया",

    inputs: "जानकारी",
    cropDetails: "फसल विवरण",
    crop: "फसल",
    selectCrop: "फसल चुनें",
    season: "मौसम",
    selectSeason: "मौसम चुनें",
    landArea: "भूमि क्षेत्र (हेक्टेयर)",
    checkViability: "उपयुक्तता जाँचें",
    analysing: "विश्लेषण हो रहा है…",

    cropAnalysisEmpty:
      "आपकी फसल का विश्लेषण यहाँ दिखाई देगा।",

    cropAnalysisHelp:
      "शुरू करने के लिए फसल, मौसम और भूमि क्षेत्र चुनें।",

    cropViability:
      "फसल उपयुक्तता",

    highViability:
      "उच्च उपयुक्तता",

    moderateViability:
      "मध्यम उपयुक्तता",

    lowViability:
      "कम उपयुक्तता",

    productionEstimate:
      "उत्पादन अनुमान",

    averageProductionEstimate:
      "औसत उत्पादन अनुमान",

    notRecommended:
      "अनुशंसित नहीं",

    lowEstimateMessage:
      "इस स्थान और मौसम के लिए फसल की उपयुक्तता कम है, इसलिए उत्पादन अनुमान नहीं दिखाया गया है।",

    moderateEstimateMessage:
      "यह एक सावधानीपूर्ण औसत अनुमान है। वास्तविक उत्पादन अलग हो सकता है।",

    assessment: "मूल्यांकन",
    method: "विधि",
    saveReport: "रिपोर्ट सहेजें",
    savedToReports:
      "रिपोर्ट में सहेजा गया",

    farmerExchange:
      "किसान विनिमय",

    barterTitle1:
      "जो आपके पास है उसका विनिमय करें।",

    barterTitle2:
      "जो चाहिए उसे पाएँ।",

    barterIntro:
      "कृषि उपकरण, मशीनरी, सिंचाई उपकरण, स्पेयर पार्ट्स, बीज और अन्य आवश्यक कृषि सामग्री का किसानों के बीच विनिमय करें।",

    createBarterRequest:
      "विनिमय अनुरोध बनाएँ",

    publicMarketplace:
      "विनिमय बाज़ार",

    myBarterRequests:
      "मेरे विनिमय अनुरोध",

    activeRequests:
      "सक्रिय अनुरोध",

    requests: "अनुरोध",

    searchMarketplace:
      "उपकरण, सामग्री या स्थान खोजें...",

    searchMyRequests:
      "अपने अनुरोध खोजें...",

    noBarterRequests:
      "कोई विनिमय अनुरोध नहीं मिला।",

    noOwnBarterRequests:
      "आपने अभी कोई विनिमय अनुरोध नहीं बनाया है।",

    createFirstRequest:
      "पहला अनुरोध बनाएँ या कुछ और खोजें।",

    createOwnRequest:
      "कृषि उपकरण या सामग्री के लिए नया अनुरोध बनाएँ।",

    offeredBy: "देने वाला",
    iHave: "मेरे पास है",
    iNeed: "मुझे चाहिए",
    condition: "स्थिति",

    yourBarterRequest:
      "आपका विनिमय अनुरोध",

    makeCounterOffer:
      "प्रति-प्रस्ताव दें",

    newRequest: "नया अनुरोध",
    createRequest:
      "विनिमय अनुरोध बनाएँ",

    whatDoYouHave:
      "आपके पास क्या है?",

    whatLookingFor:
      "आप क्या चाहते हैं?",

    contactDetails:
      "संपर्क विवरण",

    description:
      "विवरण",

    publishRequest:
      "अनुरोध प्रकाशित करें",

    counterOffer:
      "प्रति-प्रस्ताव",

    theyWant:
      "उन्हें चाहिए",

    whatCanOffer:
      "आप क्या दे सकते हैं?",

    yourContactDetails:
      "आपका संपर्क विवरण",

    sendCounterOffer:
      "प्रति-प्रस्ताव भेजें",

    closeRequest:
      "अनुरोध बंद करें",

    reopenRequest:
      "अनुरोध फिर खोलें",

    matchedMessage:
      "इस विनिमय का मिलान हो गया है।",

    requestPublished:
      "विनिमय अनुरोध प्रकाशित हुआ।",

    requestClosed:
      "विनिमय अनुरोध बंद कर दिया गया।",

    requestReopened:
      "विनिमय अनुरोध फिर खोला गया।",

    requestDeleted:
      "विनिमय अनुरोध हटा दिया गया।",

    offerSent:
      "प्रति-प्रस्ताव भेज दिया गया।",

    notificationsKicker:
      "सूचनाएँ",

    barterActivity:
      "आपकी विनिमय गतिविधि",

    barterActivityIntro:
      "प्रति-प्रस्ताव देखें और अपने विनिमय अनुरोध प्रबंधित करें।",

    noNotifications:
      "अभी कोई सूचना नहीं है।",

    newOffersAppear:
      "नए विनिमय प्रस्ताव यहाँ दिखाई देंगे।",

    incomingCounterOffer:
      "प्रति-प्रस्ताव",

    accept: "स्वीकार करें",
    decline: "अस्वीकार करें",

    matchedFarmerContact:
      "मिलान हुए किसान का संपर्क",

    barterPartnerContact:
      "विनिमय साथी का संपर्क",

    contactNotProvided:
      "संपर्क उपलब्ध नहीं",

    arrangeExchange:
      "विनिमय की व्यवस्था करने के लिए किसान से संपर्क करें।",

    financeKicker: "कृषि वित्त",
    financeTitle:
      "बेचने से पहले अपना लाभ जानें।",

    financeIntro:
      "आय, शुद्ध लाभ या हानि, ब्रेक-ईवन मूल्य और मार्जिन का अनुमान लगाएँ।",

    budgetInputs: "बजट जानकारी",
    seasonEconomics: "मौसम की अर्थव्यवस्था",

    expectedCropPrice:
      "अनुमानित फसल मूल्य (₹ / किलो)",

    expectedProduction:
      "अनुमानित उत्पादन (किलो)",

    totalExpenses:
      "कुल खर्च (₹)",

    financeSummary:
      "वित्त सारांश",

    expectedProfit:
      "अनुमानित लाभ",

    expectedLoss:
      "अनुमानित हानि",

    revenue: "आय",
    expenses: "खर्च",
    margin: "मार्जिन",
    breakEvenPrice:
      "ब्रेक-ईवन मूल्य",

    financePlanningNote:
      "योजना बनाते समय सावधानीपूर्ण मूल्य और उत्पादन अनुमान का उपयोग करें।",

    reportsKicker: "रिपोर्ट्स",

    reportsPageTitle:
      "आपकी फसल योजना का इतिहास एक ही जगह।",

    reportsPageIntro:
      "सहेजे गए उत्पादन अनुमान और उनके स्थान देखें।",

    refresh: "रीफ़्रेश",
    savedReports: "सहेजी गई रिपोर्ट",
    plannedArea: "योजना क्षेत्र",
    estimatedProduction:
      "अनुमानित उत्पादन",
    loadingReports:
      "रिपोर्ट लोड हो रही हैं…",
    noReports:
      "अभी कोई रिपोर्ट नहीं है।",
    noReportsHelp:
      "फसल का अनुमान बनाकर सहेजें।",
    reportHistory: "इतिहास",
    savedEstimates: "सहेजे गए अनुमान",
    reportDetail: "रिपोर्ट विवरण",
    date: "तारीख",
    savedEstimate: "सहेजा गया अनुमान",
    reportsLoadError:
      "रिपोर्ट लोड नहीं हो सकीं।",
  },

  // ======================================================
  // BENGALI
  // ======================================================

  bn: {
    languageName: "বাংলা",
    // BENGALI
loginKicker: "স্মার্ট কৃষি পরিকল্পনা",
loginHero1: "ভালোভাবে পরিকল্পনা করুন।",
loginHero2: "আরও বুদ্ধিমত্তার সঙ্গে চাষ করুন।",
loginIntro:
  "আবহাওয়া, ফসল পরিকল্পনা, অর্থনীতি এবং কৃষি রেকর্ড — সব এক সহজ প্ল্যাটফর্মে।",

welcomeBack: "আবার স্বাগতম",
loginSubtitle:
  "Agri Fincaster ব্যবহার চালিয়ে যেতে সাইন ইন করুন।",

username: "ব্যবহারকারীর নাম",
enterUsername: "আপনার ব্যবহারকারীর নাম লিখুন",

password: "পাসওয়ার্ড",
enterPassword: "আপনার পাসওয়ার্ড লিখুন",

signIn: "সাইন ইন",

newHere: "নতুন ব্যবহারকারী?",
createAccount: "অ্যাকাউন্ট তৈরি করুন",

    home: "হোম",
    weather: "আবহাওয়া",
    crops: "ফসল",
    finance: "অর্থনীতি",
    marketplace: "বিনিময় বাজার",
    reports: "রিপোর্ট",
    notifications: "বিজ্ঞপ্তি",
    signOut: "সাইন আউট",
    language: "ভাষা",

    backHome: "হোমে ফিরে যান",
    open: "খুলুন",
    loading: "লোড হচ্ছে...",
    save: "সংরক্ষণ করুন",
    saved: "সংরক্ষিত",
    delete: "মুছুন",
    close: "বন্ধ করুন",
    location: "অবস্থান",

    farmDashboard:
      "কৃষি ড্যাশবোর্ড",

    goodToSeeYou:
      "আপনাকে দেখে ভালো লাগছে",

    homeIntro:
      "আবহাওয়া দেখুন, ফসলের উপযুক্ততা যাচাই করুন, উৎপাদনের হিসাব করুন, আর্থিক পরিকল্পনা করুন এবং কৃষি সরঞ্জাম বিনিময় করুন।",

    weatherText:
      "ভারতের যেকোনো স্থানের ৭ দিনের আবহাওয়ার পূর্বাভাস দেখুন।",

    cropPlanning:
      "ফসল পরিকল্পনা",

    cropPlanningText:
      "স্থান ও মৌসুম অনুযায়ী ফসলের উপযুক্ততা যাচাই করে উৎপাদনের হিসাব দেখুন।",

    financeText:
      "আয়, খরচ এবং সম্ভাব্য লাভ হিসাব করুন।",

    reportsText:
      "সংরক্ষিত ফসলের হিসাব এবং কৃষি ইতিহাস দেখুন।",

    sharedLocation:
      "পুরো অ্যাপে একই অবস্থান ব্যবহার করা হবে",

    noLocation:
      "এখনও কোনো অবস্থান নির্বাচন করা হয়নি",

    setLocation:
      "অবস্থান নির্বাচন করুন",

    assistedAccess:
      "সহায়তাপ্রাপ্ত ডিজিটাল পরিষেবা",

    supportTitle:
      "প্রযুক্তি কৃষকের সহায়ক হোক, বাধা নয়।",

    supportPara1:
      "AgriFincaster কৃষকদের আবহাওয়ার তথ্য, ফসল পরিকল্পনা, উৎপাদনের হিসাব, আর্থিক সরঞ্জাম এবং কৃষি সরঞ্জাম বিনিময়ের সুবিধা দিতে তৈরি করা হয়েছে।",

    supportPara2:
      "যেসব কৃষক ডিজিটাল সরঞ্জাম ব্যবহারে স্বচ্ছন্দ নন, তাঁরা পঞ্চায়েত কর্মী, কৃষি সম্প্রসারণ কর্মী, কমন সার্ভিস সেন্টার বা অন্যান্য স্থানীয় সহায়তা কর্মীর সাহায্যে AgriFincaster ব্যবহার করতে পারেন।",

    panchayatUse:
      "পঞ্চায়েত স্তরে ব্যবহারের পরামর্শ",

    panchayatText:
      "স্থানীয় কর্মী কৃষকের সঙ্গে বসে অবস্থান, ফসল, মৌসুম, জমির পরিমাণ এবং অন্যান্য তথ্য লিখে ফলাফল সহজ ভাষায় বুঝিয়ে দিতে পারেন।",

    weatherKicker:
      "আবহাওয়া ও অবস্থান",

    weatherTitle:
      "পরিকল্পনার আগে আবহাওয়া জেনে নিন।",

    weatherIntro:
      "ভারতের একটি অবস্থান নির্বাচন করুন। এটি ফসল পরিকল্পনাতেও ব্যবহার হবে এবং শুধুমাত্র আপনার অ্যাকাউন্টে সংরক্ষিত থাকবে।",

    searchLocation:
      "গ্রাম, শহর বা এলাকা খুঁজুন…",

    useCurrentLocation:
      "বর্তমান অবস্থান ব্যবহার করুন",

    selectLocation:
      "একটি অবস্থান নির্বাচন করুন",

    forecastAppears:
      "আবহাওয়ার পূর্বাভাস এখানে দেখা যাবে।",

    currentWeather: "এখন",
    feelsLike: "অনুভূত তাপমাত্রা",
    humidity: "আর্দ্রতা",
    wind: "বাতাস",
    sevenDayOutlook:
      "৭ দিনের পূর্বাভাস",
    forecast: "পূর্বাভাস",
    rain: "বৃষ্টি",

    cropPlanningKicker:
      "ফসল পরিকল্পনা",

    cropTitle:
      "চাষের আগে ফসলের উপযুক্ততা যাচাই করুন।",

    cropIntro:
      "AgriFincaster আপনার রাজ্য ও মৌসুম অনুযায়ী ফসলের উপযুক্ততা যাচাই করে তারপর উৎপাদনের হিসাব দেয়।",

    locationNotSet:
      "অবস্থান নির্বাচন করা হয়নি",

    inputs: "তথ্য",
    cropDetails: "ফসলের বিবরণ",
    crop: "ফসল",
    selectCrop: "ফসল নির্বাচন করুন",
    season: "মৌসুম",
    selectSeason: "মৌসুম নির্বাচন করুন",
    landArea: "জমির পরিমাণ (হেক্টর)",
    checkViability:
      "উপযুক্ততা যাচাই করুন",
    analysing: "বিশ্লেষণ হচ্ছে…",

    cropAnalysisEmpty:
      "আপনার ফসল বিশ্লেষণ এখানে দেখা যাবে।",

    cropAnalysisHelp:
      "শুরু করতে ফসল, মৌসুম এবং জমির পরিমাণ নির্বাচন করুন।",

    cropViability:
      "ফসলের উপযুক্ততা",

    highViability:
      "উচ্চ উপযুক্ততা",

    moderateViability:
      "মাঝারি উপযুক্ততা",

    lowViability:
      "কম উপযুক্ততা",

    productionEstimate:
      "উৎপাদনের হিসাব",

    averageProductionEstimate:
      "গড় উৎপাদনের হিসাব",

    notRecommended:
      "প্রস্তাবিত নয়",

    lowEstimateMessage:
      "নির্বাচিত স্থান ও মৌসুমে এই ফসলের উপযুক্ততা কম হওয়ায় উৎপাদনের হিসাব দেখানো হচ্ছে না।",

    moderateEstimateMessage:
      "এটি একটি সতর্কতামূলক গড় হিসাব। প্রকৃত উৎপাদন ভিন্ন হতে পারে।",

    assessment: "মূল্যায়ন",
    method: "পদ্ধতি",
    saveReport:
      "রিপোর্ট সংরক্ষণ করুন",
    savedToReports:
      "রিপোর্টে সংরক্ষিত",

    farmerExchange:
      "কৃষক বিনিময়",

    barterTitle1:
      "আপনার যা আছে তা বিনিময় করুন।",

    barterTitle2:
      "আপনার যা দরকার তা খুঁজুন।",

    barterIntro:
      "কৃষি সরঞ্জাম, যন্ত্রপাতি, সেচ সরঞ্জাম, যন্ত্রাংশ, বীজ ও অন্যান্য প্রয়োজনীয় সামগ্রী কৃষকদের মধ্যে বিনিময় করুন।",

    createBarterRequest:
      "বিনিময় অনুরোধ তৈরি করুন",

    publicMarketplace:
      "বিনিময় বাজার",

    myBarterRequests:
      "আমার বিনিময় অনুরোধ",

    activeRequests:
      "সক্রিয় অনুরোধ",

    requests: "অনুরোধ",

    searchMarketplace:
      "সরঞ্জাম, সামগ্রী বা অবস্থান খুঁজুন...",

    searchMyRequests:
      "নিজের বিনিময় অনুরোধ খুঁজুন...",

    noBarterRequests:
      "কোনো বিনিময় অনুরোধ পাওয়া যায়নি।",

    noOwnBarterRequests:
      "আপনি এখনও কোনো বিনিময় অনুরোধ তৈরি করেননি।",

    createFirstRequest:
      "প্রথম অনুরোধ তৈরি করুন অথবা অন্য কিছু খুঁজুন।",

    createOwnRequest:
      "কৃষি সরঞ্জামের জন্য একটি অনুরোধ তৈরি করুন।",

    offeredBy:
      "প্রস্তাব করেছেন",

    iHave:
      "আমার কাছে আছে",

    iNeed:
      "আমার প্রয়োজন",

    condition:
      "অবস্থা",

    yourBarterRequest:
      "আপনার বিনিময় অনুরোধ",

    makeCounterOffer:
      "পাল্টা প্রস্তাব দিন",

    newRequest:
      "নতুন অনুরোধ",

    createRequest:
      "বিনিময় অনুরোধ তৈরি করুন",

    whatDoYouHave:
      "আপনার কাছে কী আছে?",

    whatLookingFor:
      "আপনি কী খুঁজছেন?",

    contactDetails:
      "যোগাযোগের তথ্য",

    description:
      "বিবরণ",

    publishRequest:
      "অনুরোধ প্রকাশ করুন",

    counterOffer:
      "পাল্টা প্রস্তাব",

    theyWant:
      "তাঁদের প্রয়োজন",

    whatCanOffer:
      "আপনি কী দিতে পারেন?",

    yourContactDetails:
      "আপনার যোগাযোগের তথ্য",

    sendCounterOffer:
      "পাল্টা প্রস্তাব পাঠান",

    closeRequest:
      "অনুরোধ বন্ধ করুন",

    reopenRequest:
      "অনুরোধ আবার চালু করুন",

    matchedMessage:
      "এই বিনিময়ের মিল হয়ে গেছে।",

    requestPublished:
      "বিনিময় অনুরোধ প্রকাশিত হয়েছে।",

    requestClosed:
      "বিনিময় অনুরোধ বন্ধ হয়েছে।",

    requestReopened:
      "বিনিময় অনুরোধ আবার চালু হয়েছে।",

    requestDeleted:
      "বিনিময় অনুরোধ মুছে দেওয়া হয়েছে।",

    offerSent:
      "পাল্টা প্রস্তাব পাঠানো হয়েছে।",

    notificationsKicker:
      "বিজ্ঞপ্তি",

    barterActivity:
      "আপনার বিনিময় কার্যকলাপ",

    barterActivityIntro:
      "পাল্টা প্রস্তাব দেখুন এবং বিনিময় অনুরোধ পরিচালনা করুন।",

    noNotifications:
      "এখনও কোনো বিজ্ঞপ্তি নেই।",

    newOffersAppear:
      "নতুন বিনিময় প্রস্তাব এখানে দেখা যাবে।",

    incomingCounterOffer:
      "পাল্টা প্রস্তাব",

    accept:
      "গ্রহণ করুন",

    decline:
      "প্রত্যাখ্যান করুন",

    matchedFarmerContact:
      "মিল হওয়া কৃষকের যোগাযোগ",

    barterPartnerContact:
      "বিনিময় সঙ্গীর যোগাযোগ",

    contactNotProvided:
      "যোগাযোগের তথ্য দেওয়া হয়নি",

    arrangeExchange:
      "বিনিময়ের ব্যবস্থা করতে কৃষকের সঙ্গে যোগাযোগ করুন।",

    financeKicker:
      "কৃষি অর্থনীতি",

    financeTitle:
      "বিক্রির আগে আপনার লাভ বুঝে নিন।",

    financeIntro:
      "আয়, লাভ বা ক্ষতি, সমতা মূল্য এবং মার্জিন হিসাব করুন।",

    budgetInputs:
      "বাজেট তথ্য",

    seasonEconomics:
      "মৌসুমের অর্থনীতি",

    expectedCropPrice:
      "সম্ভাব্য ফসল মূল্য (₹ / কেজি)",

    expectedProduction:
      "সম্ভাব্য উৎপাদন (কেজি)",

    totalExpenses:
      "মোট খরচ (₹)",

    financeSummary:
      "আর্থিক সারাংশ",

    expectedProfit:
      "সম্ভাব্য লাভ",

    expectedLoss:
      "সম্ভাব্য ক্ষতি",

    revenue: "আয়",
    expenses: "খরচ",
    margin: "মার্জিন",
    breakEvenPrice:
      "সমতা মূল্য",

    financePlanningNote:
      "পরিকল্পনার সময় সতর্ক মূল্য এবং উৎপাদন অনুমান ব্যবহার করুন।",

    reportsKicker:
      "রিপোর্ট",

    reportsPageTitle:
      "আপনার ফসল পরিকল্পনার ইতিহাস এক জায়গায়।",

    reportsPageIntro:
      "সংরক্ষিত উৎপাদন হিসাব ও ব্যবহৃত অবস্থান দেখুন।",

    refresh: "রিফ্রেশ",

    savedReports:
      "সংরক্ষিত রিপোর্ট",

    plannedArea:
      "পরিকল্পিত জমি",

    estimatedProduction:
      "আনুমানিক উৎপাদন",

    loadingReports:
      "রিপোর্ট লোড হচ্ছে…",

    noReports:
      "এখনও কোনো রিপোর্ট নেই।",

    noReportsHelp:
      "একটি ফসলের হিসাব তৈরি করে সংরক্ষণ করুন।",

    reportHistory:
      "ইতিহাস",

    savedEstimates:
      "সংরক্ষিত হিসাব",

    reportDetail:
      "রিপোর্টের বিবরণ",

    date: "তারিখ",
    savedEstimate:
      "সংরক্ষিত হিসাব",

    reportsLoadError:
      "রিপোর্ট লোড করা যায়নি।",
  },

  // ======================================================
  // KANNADA
  // ======================================================

  kn: {
    languageName: "ಕನ್ನಡ",
// KANNADA
loginKicker: "ಸ್ಮಾರ್ಟ್ ಕೃಷಿ ಯೋಜನೆ",
loginHero1: "ಉತ್ತಮವಾಗಿ ಯೋಜಿಸಿ.",
loginHero2: "ಚಾತುರ್ಯದಿಂದ ಕೃಷಿ ಮಾಡಿ.",
loginIntro:
  "ಹವಾಮಾನ, ಬೆಳೆ ಯೋಜನೆ, ಹಣಕಾಸು ಮತ್ತು ಕೃಷಿ ದಾಖಲೆಗಳು — ಎಲ್ಲವೂ ಒಂದೇ ಸರಳ ವೇದಿಕೆಯಲ್ಲಿ.",

welcomeBack: "ಮತ್ತೆ ಸ್ವಾಗತ",
loginSubtitle:
  "Agri Fincaster ಮುಂದುವರಿಸಲು ಸೈನ್ ಇನ್ ಮಾಡಿ.",

username: "ಬಳಕೆದಾರರ ಹೆಸರು",
enterUsername: "ನಿಮ್ಮ ಬಳಕೆದಾರರ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",

password: "ಪಾಸ್‌ವರ್ಡ್",
enterPassword: "ನಿಮ್ಮ ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ",

signIn: "ಸೈನ್ ಇನ್",

newHere: "ಹೊಸ ಬಳಕೆದಾರರೇ?",
createAccount: "ಖಾತೆ ರಚಿಸಿ",
    home: "ಮುಖಪುಟ",
    weather: "ಹವಾಮಾನ",
    crops: "ಬೆಳೆಗಳು",
    finance: "ಹಣಕಾಸು",
    marketplace: "ವಿನಿಮಯ ಮಾರುಕಟ್ಟೆ",
    reports: "ವರದಿಗಳು",
    notifications: "ಸೂಚನೆಗಳು",
    signOut: "ಸೈನ್ ಔಟ್",
    language: "ಭಾಷೆ",

    backHome: "ಮುಖಪುಟಕ್ಕೆ ಹಿಂತಿರುಗಿ",
    open: "ತೆರೆಯಿರಿ",
    loading: "ಲೋಡ್ ಆಗುತ್ತಿದೆ...",
    save: "ಉಳಿಸಿ",
    saved: "ಉಳಿಸಲಾಗಿದೆ",
    delete: "ಅಳಿಸಿ",
    close: "ಮುಚ್ಚಿ",
    location: "ಸ್ಥಳ",

    farmDashboard:
      "ಕೃಷಿ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",

    goodToSeeYou:
      "ನಿಮ್ಮನ್ನು ನೋಡಿ ಸಂತೋಷವಾಗಿದೆ",

    homeIntro:
      "ಹವಾಮಾನ ನೋಡಿ, ಬೆಳೆ ಸೂಕ್ತತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ, ಉತ್ಪಾದನೆ ಅಂದಾಜಿಸಿ, ಹಣಕಾಸು ನಿರ್ವಹಿಸಿ ಮತ್ತು ಕೃಷಿ ಉಪಕರಣಗಳನ್ನು ವಿನಿಮಯ ಮಾಡಿ.",

    weatherText:
      "ಭಾರತದ ಯಾವುದೇ ಸ್ಥಳದ 7 ದಿನಗಳ ಹವಾಮಾನ ಮುನ್ಸೂಚನೆಯನ್ನು ನೋಡಿ.",

    cropPlanning:
      "ಬೆಳೆ ಯೋಜನೆ",

    cropPlanningText:
      "ಸ್ಥಳ ಮತ್ತು ಹಂಗಾಮಿನ ಆಧಾರದ ಮೇಲೆ ಬೆಳೆ ಸೂಕ್ತತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ಉತ್ಪಾದನೆಯನ್ನು ಅಂದಾಜಿಸಿ.",

    financeText:
      "ಆದಾಯ, ವೆಚ್ಚ ಮತ್ತು ನಿರೀಕ್ಷಿತ ಲಾಭವನ್ನು ಲೆಕ್ಕ ಹಾಕಿ.",

    reportsText:
      "ಉಳಿಸಿದ ಬೆಳೆ ಅಂದಾಜುಗಳು ಮತ್ತು ಕೃಷಿ ಇತಿಹಾಸವನ್ನು ನೋಡಿ.",

    sharedLocation:
      "ಒಂದೇ ಸ್ಥಳವನ್ನು ಸಂಪೂರ್ಣ ಅಪ್ಲಿಕೇಶನ್‌ನಲ್ಲಿ ಬಳಸಲಾಗುತ್ತದೆ",

    noLocation:
      "ಇನ್ನೂ ಸ್ಥಳ ಆಯ್ಕೆ ಮಾಡಿಲ್ಲ",

    setLocation:
      "ಸ್ಥಳ ಆಯ್ಕೆ ಮಾಡಿ",

    assistedAccess:
      "ಸಹಾಯಿತ ಡಿಜಿಟಲ್ ಪ್ರವೇಶ",

    supportTitle:
      "ತಂತ್ರಜ್ಞಾನ ರೈತನಿಗೆ ಸಹಾಯ ಮಾಡಬೇಕು, ಅಡೆತಡೆಯಾಗಬಾರದು.",

    supportPara1:
      "AgriFincaster ರೈತರಿಗೆ ಹವಾಮಾನ ಮಾಹಿತಿ, ಬೆಳೆ ಯೋಜನೆ, ಉತ್ಪಾದನಾ ಅಂದಾಜು, ಹಣಕಾಸು ಸಾಧನಗಳು ಮತ್ತು ಕೃಷಿ ಉಪಕರಣ ವಿನಿಮಯ ಸಹಾಯ ನೀಡಲು ರೂಪಿಸಲಾಗಿದೆ.",

    supportPara2:
      "ಡಿಜಿಟಲ್ ಸಾಧನಗಳನ್ನು ಬಳಸಲು ಅನುಕೂಲವಿಲ್ಲದ ರೈತರು ಪಂಚಾಯತ್ ಅಧಿಕಾರಿಗಳು, ಕೃಷಿ ವಿಸ್ತರಣಾ ಸಿಬ್ಬಂದಿ ಅಥವಾ ಕಾಮನ್ ಸರ್ವಿಸ್ ಸೆಂಟರ್ ನೆರವಿನಿಂದ AgriFincaster ಬಳಸಬಹುದು.",

    panchayatUse:
      "ಪಂಚಾಯತ್ ಮಟ್ಟದಲ್ಲಿ ಶಿಫಾರಸು ಮಾಡಿದ ಬಳಕೆ",

    panchayatText:
      "ಸ್ಥಳೀಯ ಅಧಿಕಾರಿ ರೈತನೊಂದಿಗೆ ಕುಳಿತು ಸ್ಥಳ, ಬೆಳೆ, ಹಂಗಾಮು, ಭೂಮಿ ವಿಸ್ತೀರ್ಣ ಮತ್ತು ಅಗತ್ಯ ಮಾಹಿತಿಯನ್ನು ನಮೂದಿಸಿ ಫಲಿತಾಂಶವನ್ನು ಸರಳವಾಗಿ ವಿವರಿಸಬಹುದು.",

    weatherKicker:
      "ಹವಾಮಾನ ಮತ್ತು ಸ್ಥಳ",

    weatherTitle:
      "ಯೋಜನೆ ಮಾಡುವ ಮೊದಲು ಹವಾಮಾನ ತಿಳಿದುಕೊಳ್ಳಿ.",

    weatherIntro:
      "ಭಾರತದಲ್ಲಿನ ಸ್ಥಳವನ್ನು ಹುಡುಕಿ. ಆಯ್ಕೆ ಮಾಡಿದ ಸ್ಥಳವನ್ನು ಬೆಳೆ ಯೋಜನೆಯಲ್ಲಿಯೂ ಬಳಸಲಾಗುತ್ತದೆ.",

    searchLocation:
      "ಗ್ರಾಮ, ಪಟ್ಟಣ ಅಥವಾ ನಗರ ಹುಡುಕಿ…",

    useCurrentLocation:
      "ಪ್ರಸ್ತುತ ಸ್ಥಳ ಬಳಸಿ",

    selectLocation:
      "ಸ್ಥಳ ಆಯ್ಕೆ ಮಾಡಿ",

    forecastAppears:
      "ಹವಾಮಾನ ಮುನ್ಸೂಚನೆ ಇಲ್ಲಿ ಕಾಣುತ್ತದೆ.",

    currentWeather: "ಈಗ",
    feelsLike: "ಅನುಭವ ತಾಪಮಾನ",
    humidity: "ಆರ್ದ್ರತೆ",
    wind: "ಗಾಳಿ",
    sevenDayOutlook:
      "7 ದಿನಗಳ ಮುನ್ಸೂಚನೆ",
    forecast: "ಮುನ್ಸೂಚನೆ",
    rain: "ಮಳೆ",

    cropPlanningKicker:
      "ಬೆಳೆ ಯೋಜನೆ",

    cropTitle:
      "ಬಿತ್ತುವ ಮೊದಲು ಬೆಳೆ ಸೂಕ್ತತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ.",

    cropIntro:
      "AgriFincaster ನಿಮ್ಮ ರಾಜ್ಯ ಮತ್ತು ಹಂಗಾಮಿನ ಆಧಾರದ ಮೇಲೆ ಬೆಳೆ ಸೂಕ್ತತೆಯನ್ನು ಪರಿಶೀಲಿಸಿ ನಂತರ ಉತ್ಪಾದನೆಯನ್ನು ಅಂದಾಜಿಸುತ್ತದೆ.",

    locationNotSet:
      "ಸ್ಥಳ ಆಯ್ಕೆ ಮಾಡಿಲ್ಲ",

    inputs: "ಮಾಹಿತಿ",
    cropDetails: "ಬೆಳೆ ವಿವರಗಳು",
    crop: "ಬೆಳೆ",
    selectCrop: "ಬೆಳೆ ಆಯ್ಕೆ ಮಾಡಿ",
    season: "ಹಂಗಾಮು",
    selectSeason:
      "ಹಂಗಾಮು ಆಯ್ಕೆ ಮಾಡಿ",
    landArea:
      "ಭೂಮಿ ವಿಸ್ತೀರ್ಣ (ಹೆಕ್ಟೇರ್)",
    checkViability:
      "ಸೂಕ್ತತೆ ಪರಿಶೀಲಿಸಿ",
    analysing:
      "ವಿಶ್ಲೇಷಿಸಲಾಗುತ್ತಿದೆ…",

    cropAnalysisEmpty:
      "ನಿಮ್ಮ ಬೆಳೆ ವಿಶ್ಲೇಷಣೆ ಇಲ್ಲಿ ಕಾಣುತ್ತದೆ.",

    cropAnalysisHelp:
      "ಪ್ರಾರಂಭಿಸಲು ಬೆಳೆ, ಹಂಗಾಮು ಮತ್ತು ಭೂಮಿ ವಿಸ್ತೀರ್ಣ ಆಯ್ಕೆ ಮಾಡಿ.",

    cropViability:
      "ಬೆಳೆ ಸೂಕ್ತತೆ",

    highViability:
      "ಹೆಚ್ಚು ಸೂಕ್ತತೆ",

    moderateViability:
      "ಮಧ್ಯಮ ಸೂಕ್ತತೆ",

    lowViability:
      "ಕಡಿಮೆ ಸೂಕ್ತತೆ",

    productionEstimate:
      "ಉತ್ಪಾದನಾ ಅಂದಾಜು",

    averageProductionEstimate:
      "ಸರಾಸರಿ ಉತ್ಪಾದನಾ ಅಂದಾಜು",

    notRecommended:
      "ಶಿಫಾರಸು ಮಾಡಲಾಗುವುದಿಲ್ಲ",

    lowEstimateMessage:
      "ಈ ಬೆಳೆ ಆಯ್ಕೆ ಮಾಡಿದ ಸ್ಥಳ ಮತ್ತು ಹಂಗಾಮಿಗೆ ಕಡಿಮೆ ಸೂಕ್ತವಾಗಿರುವುದರಿಂದ ಉತ್ಪಾದನಾ ಅಂದಾಜು ತೋರಿಸಲಾಗುವುದಿಲ್ಲ.",

    moderateEstimateMessage:
      "ಇದು ಎಚ್ಚರಿಕೆಯ ಸರಾಸರಿ ಅಂದಾಜು. ನಿಜವಾದ ಉತ್ಪಾದನೆ ಬದಲಾಗಬಹುದು.",

    assessment: "ಮೌಲ್ಯಮಾಪನ",
    method: "ವಿಧಾನ",
    saveReport: "ವರದಿ ಉಳಿಸಿ",
    savedToReports:
      "ವರದಿಗೆ ಉಳಿಸಲಾಗಿದೆ",

    farmerExchange:
      "ರೈತರ ವಿನಿಮಯ",

    barterTitle1:
      "ನಿಮ್ಮಲ್ಲಿರುವುದನ್ನು ವಿನಿಮಯ ಮಾಡಿ.",

    barterTitle2:
      "ನಿಮಗೆ ಬೇಕಾದುದನ್ನು ಹುಡುಕಿ.",

    barterIntro:
      "ಕೃಷಿ ಉಪಕರಣಗಳು, ಯಂತ್ರೋಪಕರಣಗಳು, ನೀರಾವರಿ ಉಪಕರಣಗಳು, ಬೀಜಗಳು ಮತ್ತು ಇತರ ಅಗತ್ಯ ಸಾಮಗ್ರಿಗಳನ್ನು ರೈತರ ನಡುವೆ ವಿನಿಮಯ ಮಾಡಿ.",

    createBarterRequest:
      "ವಿನಿಮಯ ವಿನಂತಿ ರಚಿಸಿ",

    publicMarketplace:
      "ವಿನಿಮಯ ಮಾರುಕಟ್ಟೆ",

    myBarterRequests:
      "ನನ್ನ ವಿನಿಮಯ ವಿನಂತಿಗಳು",

    activeRequests:
      "ಸಕ್ರಿಯ ವಿನಂತಿಗಳು",

    requests: "ವಿನಂತಿಗಳು",

    searchMarketplace:
      "ಉಪಕರಣ, ಸಾಮಗ್ರಿ ಅಥವಾ ಸ್ಥಳ ಹುಡುಕಿ...",

    searchMyRequests:
      "ನಿಮ್ಮ ವಿನಂತಿಗಳನ್ನು ಹುಡುಕಿ...",

    noBarterRequests:
      "ಯಾವುದೇ ವಿನಿಮಯ ವಿನಂತಿಗಳು ಕಂಡುಬಂದಿಲ್ಲ.",

    noOwnBarterRequests:
      "ನೀವು ಇನ್ನೂ ಯಾವುದೇ ವಿನಿಮಯ ವಿನಂತಿ ರಚಿಸಿಲ್ಲ.",

    createFirstRequest:
      "ಮೊದಲ ವಿನಂತಿ ರಚಿಸಿ ಅಥವಾ ಮತ್ತೊಂದನ್ನು ಹುಡುಕಿ.",

    createOwnRequest:
      "ಕೃಷಿ ಉಪಕರಣ ಅಥವಾ ಸಾಮಗ್ರಿಗಾಗಿ ವಿನಂತಿ ರಚಿಸಿ.",

    offeredBy:
      "ನೀಡುತ್ತಿರುವವರು",

    iHave:
      "ನನ್ನ ಬಳಿ ಇದೆ",

    iNeed:
      "ನನಗೆ ಬೇಕು",

    condition:
      "ಸ್ಥಿತಿ",

    yourBarterRequest:
      "ನಿಮ್ಮ ವಿನಿಮಯ ವಿನಂತಿ",

    makeCounterOffer:
      "ಪ್ರತಿಪ್ರಸ್ತಾವನೆ ನೀಡಿ",

    newRequest:
      "ಹೊಸ ವಿನಂತಿ",

    createRequest:
      "ವಿನಿಮಯ ವಿನಂತಿ ರಚಿಸಿ",

    whatDoYouHave:
      "ನಿಮ್ಮ ಬಳಿ ಏನು ಇದೆ?",

    whatLookingFor:
      "ನೀವು ಏನು ಹುಡುಕುತ್ತಿದ್ದೀರಿ?",

    contactDetails:
      "ಸಂಪರ್ಕ ವಿವರಗಳು",

    description:
      "ವಿವರಣೆ",

    publishRequest:
      "ವಿನಂತಿ ಪ್ರಕಟಿಸಿ",

    counterOffer:
      "ಪ್ರತಿಪ್ರಸ್ತಾವನೆ",

    theyWant:
      "ಅವರಿಗೆ ಬೇಕು",

    whatCanOffer:
      "ನೀವು ಏನು ನೀಡಬಹುದು?",

    yourContactDetails:
      "ನಿಮ್ಮ ಸಂಪರ್ಕ ವಿವರಗಳು",

    sendCounterOffer:
      "ಪ್ರತಿಪ್ರಸ್ತಾವನೆ ಕಳುಹಿಸಿ",

    closeRequest:
      "ವಿನಂತಿ ಮುಚ್ಚಿ",

    reopenRequest:
      "ವಿನಂತಿ ಮತ್ತೆ ತೆರೆಯಿರಿ",

    matchedMessage:
      "ಈ ವಿನಿಮಯ ಹೊಂದಾಣಿಕೆಯಾಗಿದೆ.",

    requestPublished:
      "ವಿನಿಮಯ ವಿನಂತಿ ಪ್ರಕಟಿಸಲಾಗಿದೆ.",

    requestClosed:
      "ವಿನಿಮಯ ವಿನಂತಿ ಮುಚ್ಚಲಾಗಿದೆ.",

    requestReopened:
      "ವಿನಿಮಯ ವಿನಂತಿ ಮತ್ತೆ ತೆರೆಯಲಾಗಿದೆ.",

    requestDeleted:
      "ವಿನಿಮಯ ವಿನಂತಿ ಅಳಿಸಲಾಗಿದೆ.",

    offerSent:
      "ಪ್ರತಿಪ್ರಸ್ತಾವನೆ ಕಳುಹಿಸಲಾಗಿದೆ.",

    notificationsKicker:
      "ಸೂಚನೆಗಳು",

    barterActivity:
      "ನಿಮ್ಮ ವಿನಿಮಯ ಚಟುವಟಿಕೆ",

    barterActivityIntro:
      "ಪ್ರತಿಪ್ರಸ್ತಾವನೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ ಮತ್ತು ನಿಮ್ಮ ವಿನಿಮಯ ವಿನಂತಿಗಳನ್ನು ನಿರ್ವಹಿಸಿ.",

    noNotifications:
      "ಇನ್ನೂ ಯಾವುದೇ ಸೂಚನೆಗಳಿಲ್ಲ.",

    newOffersAppear:
      "ಹೊಸ ವಿನಿಮಯ ಆಫರ್‌ಗಳು ಇಲ್ಲಿ ಕಾಣಿಸುತ್ತವೆ.",

    incomingCounterOffer:
      "ಪ್ರತಿಪ್ರಸ್ತಾವನೆ",

    accept: "ಸ್ವೀಕರಿಸಿ",
    decline: "ನಿರಾಕರಿಸಿ",

    matchedFarmerContact:
      "ಹೊಂದಾಣಿಕೆಯಾದ ರೈತರ ಸಂಪರ್ಕ",

    barterPartnerContact:
      "ವಿನಿಮಯ ಪಾಲುದಾರರ ಸಂಪರ್ಕ",

    contactNotProvided:
      "ಸಂಪರ್ಕ ಮಾಹಿತಿ ನೀಡಿಲ್ಲ",

    arrangeExchange:
      "ವಿನಿಮಯ ವ್ಯವಸ್ಥೆ ಮಾಡಲು ರೈತರನ್ನು ಸಂಪರ್ಕಿಸಿ.",

    financeKicker:
      "ಕೃಷಿ ಹಣಕಾಸು",

    financeTitle:
      "ಮಾರಾಟಕ್ಕೂ ಮೊದಲು ನಿಮ್ಮ ಲಾಭ ತಿಳಿದುಕೊಳ್ಳಿ.",

    financeIntro:
      "ಆದಾಯ, ಲಾಭ ಅಥವಾ ನಷ್ಟ ಮತ್ತು ಬ್ರೇಕ್-ಈವನ್ ಬೆಲೆ ಅಂದಾಜಿಸಿ.",

    budgetInputs: "ಬಜೆಟ್ ಮಾಹಿತಿ",
    seasonEconomics:
      "ಹಂಗಾಮಿನ ಆರ್ಥಿಕತೆ",
    expectedCropPrice:
      "ನಿರೀಕ್ಷಿತ ಬೆಳೆ ಬೆಲೆ (₹ / ಕೆಜಿ)",
    expectedProduction:
      "ನಿರೀಕ್ಷಿತ ಉತ್ಪಾದನೆ (ಕೆಜಿ)",
    totalExpenses:
      "ಒಟ್ಟು ವೆಚ್ಚ (₹)",
    financeSummary:
      "ಹಣಕಾಸು ಸಾರಾಂಶ",
    expectedProfit:
      "ನಿರೀಕ್ಷಿತ ಲಾಭ",
    expectedLoss:
      "ನಿರೀಕ್ಷಿತ ನಷ್ಟ",
    revenue: "ಆದಾಯ",
    expenses: "ವೆಚ್ಚ",
    margin: "ಮಾರ್ಜಿನ್",
    breakEvenPrice:
      "ಬ್ರೇಕ್-ಈವನ್ ಬೆಲೆ",
    financePlanningNote:
      "ಯೋಜನೆ ಮಾಡುವಾಗ ಎಚ್ಚರಿಕೆಯ ಬೆಲೆ ಮತ್ತು ಉತ್ಪಾದನಾ ಅಂದಾಜು ಬಳಸಿ.",

    reportsKicker:
      "ವರದಿಗಳು",
    reportsPageTitle:
      "ನಿಮ್ಮ ಬೆಳೆ ಯೋಜನಾ ಇತಿಹಾಸ ಒಂದೇ ಸ್ಥಳದಲ್ಲಿ.",
    reportsPageIntro:
      "ಉಳಿಸಿದ ಉತ್ಪಾದನಾ ಅಂದಾಜುಗಳು ಮತ್ತು ಸ್ಥಳಗಳನ್ನು ಪರಿಶೀಲಿಸಿ.",
    refresh: "ರಿಫ್ರೆಶ್",
    savedReports:
      "ಉಳಿಸಿದ ವರದಿಗಳು",
    plannedArea:
      "ಯೋಜಿತ ವಿಸ್ತೀರ್ಣ",
    estimatedProduction:
      "ಅಂದಾಜು ಉತ್ಪಾದನೆ",
    loadingReports:
      "ವರದಿಗಳು ಲೋಡ್ ಆಗುತ್ತಿವೆ…",
    noReports:
      "ಇನ್ನೂ ವರದಿಗಳಿಲ್ಲ.",
    noReportsHelp:
      "ಬೆಳೆ ಅಂದಾಜು ರಚಿಸಿ ಉಳಿಸಿ.",
    reportHistory:
      "ಇತಿಹಾಸ",
    savedEstimates:
      "ಉಳಿಸಿದ ಅಂದಾಜುಗಳು",
    reportDetail:
      "ವರದಿ ವಿವರ",
    date: "ದಿನಾಂಕ",
    savedEstimate:
      "ಉಳಿಸಿದ ಅಂದಾಜು",
    reportsLoadError:
      "ವರದಿಗಳನ್ನು ಲೋಡ್ ಮಾಡಲು ಸಾಧ್ಯವಾಗಲಿಲ್ಲ.",
  },

  // ======================================================
  // TAMIL
  // ======================================================

  ta: {
    languageName: "தமிழ்",
// TAMIL
loginKicker: "ஸ்மார்ட் விவசாய திட்டமிடல்",
loginHero1: "சிறப்பாக திட்டமிடுங்கள்.",
loginHero2: "புத்திசாலித்தனமாக விவசாயம் செய்யுங்கள்.",
loginIntro:
  "வானிலை, பயிர் திட்டமிடல், நிதி மற்றும் விவசாய பதிவுகள் — அனைத்தும் ஒரே எளிய தளத்தில்.",

welcomeBack: "மீண்டும் வரவேற்கிறோம்",
loginSubtitle:
  "Agri Fincaster-ஐ தொடர உள்நுழையவும்.",

username: "பயனர் பெயர்",
enterUsername: "உங்கள் பயனர் பெயரை உள்ளிடவும்",

password: "கடவுச்சொல்",
enterPassword: "உங்கள் கடவுச்சொல்லை உள்ளிடவும்",

signIn: "உள்நுழை",

newHere: "புதிய பயனரா?",
createAccount: "கணக்கு உருவாக்கவும்",
    home: "முகப்பு",
    weather: "வானிலை",
    crops: "பயிர்கள்",
    finance: "நிதி",
    marketplace: "பரிமாற்ற சந்தை",
    reports: "அறிக்கைகள்",
    notifications: "அறிவிப்புகள்",
    signOut: "வெளியேறு",
    language: "மொழி",

    backHome:
      "முகப்பிற்கு திரும்பு",

    open: "திறக்கவும்",
    loading: "ஏற்றப்படுகிறது...",
    save: "சேமிக்கவும்",
    saved: "சேமிக்கப்பட்டது",
    delete: "நீக்கு",
    close: "மூடு",
    location: "இடம்",

    farmDashboard:
      "விவசாய டாஷ்போர்டு",

    goodToSeeYou:
      "உங்களை மீண்டும் சந்திப்பதில் மகிழ்ச்சி",

    homeIntro:
      "வானிலையை பார்க்கவும், பயிர் பொருத்தத்தை சரிபார்க்கவும், உற்பத்தியை மதிப்பிடவும், நிதியை நிர்வகிக்கவும் மற்றும் விவசாய உபகரணங்களை பரிமாறிக்கொள்ளவும்.",

    weatherText:
      "இந்தியாவின் எந்த இடத்திற்கும் 7 நாள் வானிலை முன்னறிவிப்பைப் பார்க்கவும்.",

    cropPlanning:
      "பயிர் திட்டமிடல்",

    cropPlanningText:
      "இடம் மற்றும் பருவத்தின் அடிப்படையில் பயிர் பொருத்தத்தை சரிபார்த்து உற்பத்தியை மதிப்பிடவும்.",

    financeText:
      "வருமானம், செலவுகள் மற்றும் எதிர்பார்க்கப்படும் லாபத்தை கணக்கிடுங்கள்.",

    reportsText:
      "சேமிக்கப்பட்ட பயிர் மதிப்பீடுகள் மற்றும் விவசாய வரலாற்றைப் பாருங்கள்.",

    sharedLocation:
      "ஒரே இடம் முழு பயன்பாட்டிலும் பயன்படுத்தப்படும்",

    noLocation:
      "இன்னும் இடம் தேர்வு செய்யப்படவில்லை",

    setLocation:
      "இடத்தை அமைக்கவும்",

    assistedAccess:
      "உதவியுடன் டிஜிட்டல் அணுகல்",

    supportTitle:
      "தொழில்நுட்பம் விவசாயிக்கு உதவ வேண்டும்; தடையாக இருக்கக்கூடாது.",

    supportPara1:
      "AgriFincaster விவசாயிகளுக்கு வானிலை தகவல், பயிர் திட்டமிடல், உற்பத்தி மதிப்பீடு, நிதி கருவிகள் மற்றும் விவசாய உபகரண பரிமாற்ற உதவியை வழங்க உருவாக்கப்பட்டுள்ளது.",

    supportPara2:
      "டிஜிட்டல் கருவிகளை பயன்படுத்துவதில் வசதியில்லாத விவசாயிகள் பஞ்சாயத்து அதிகாரிகள், வேளாண் விரிவாக்க பணியாளர்கள் அல்லது பொதுச் சேவை மையங்களின் உதவியுடன் AgriFincaster ஐ பயன்படுத்தலாம்.",

    panchayatUse:
      "பஞ்சாயத்து மட்டத்தில் பரிந்துரைக்கப்படும் பயன்பாடு",

    panchayatText:
      "உள்ளூர் அதிகாரி விவசாயியுடன் அமர்ந்து இடம், பயிர், பருவம், நில அளவு மற்றும் தேவையான தகவல்களை உள்ளிட்டு முடிவுகளை எளிய மொழியில் விளக்கலாம்.",

    weatherKicker:
      "வானிலை மற்றும் இடம்",

    weatherTitle:
      "திட்டமிடுவதற்கு முன் வானிலையை அறியுங்கள்.",

    weatherIntro:
      "இந்தியாவில் ஒரு இடத்தைத் தேர்ந்தெடுக்கவும். இது பயிர் திட்டமிடலிலும் பயன்படுத்தப்படும்.",

    searchLocation:
      "கிராமம், நகரம் அல்லது ஊரைத் தேடுங்கள்…",

    useCurrentLocation:
      "தற்போதைய இடத்தை பயன்படுத்தவும்",

    selectLocation:
      "ஒரு இடத்தைத் தேர்ந்தெடுக்கவும்",

    forecastAppears:
      "வானிலை முன்னறிவிப்பு இங்கே தோன்றும்.",

    currentWeather: "இப்போது",
    feelsLike:
      "உணரப்படும் வெப்பநிலை",
    humidity: "ஈரப்பதம்",
    wind: "காற்று",
    sevenDayOutlook:
      "7 நாள் முன்னறிவிப்பு",
    forecast: "முன்னறிவிப்பு",
    rain: "மழை",

    cropPlanningKicker:
      "பயிர் திட்டமிடல்",

    cropTitle:
      "விதைப்பதற்கு முன் பயிர் பொருத்தத்தை சரிபார்க்கவும்.",

    cropIntro:
      "AgriFincaster மாநிலம் மற்றும் பருவத்தின் அடிப்படையில் பயிரின் பொருத்தத்தை மதிப்பிட்டு பின்னர் உற்பத்தியை கணிக்கிறது.",

    locationNotSet:
      "இடம் அமைக்கப்படவில்லை",

    inputs: "உள்ளீடுகள்",
    cropDetails:
      "பயிர் விவரங்கள்",
    crop: "பயிர்",
    selectCrop:
      "பயிரை தேர்ந்தெடுக்கவும்",
    season: "பருவம்",
    selectSeason:
      "பருவத்தை தேர்ந்தெடுக்கவும்",
    landArea:
      "நில அளவு (ஹெக்டேர்)",
    checkViability:
      "பொருத்தத்தை சரிபார்க்கவும்",
    analysing:
      "பகுப்பாய்வு செய்யப்படுகிறது…",

    cropAnalysisEmpty:
      "உங்கள் பயிர் பகுப்பாய்வு இங்கே தோன்றும்.",

    cropAnalysisHelp:
      "தொடங்க பயிர், பருவம் மற்றும் நில அளவை தேர்ந்தெடுக்கவும்.",

    cropViability:
      "பயிர் பொருத்தம்",

    highViability:
      "உயர் பொருத்தம்",

    moderateViability:
      "மிதமான பொருத்தம்",

    lowViability:
      "குறைந்த பொருத்தம்",

    productionEstimate:
      "உற்பத்தி மதிப்பீடு",

    averageProductionEstimate:
      "சராசரி உற்பத்தி மதிப்பீடு",

    notRecommended:
      "பரிந்துரைக்கப்படவில்லை",

    lowEstimateMessage:
      "தேர்ந்தெடுக்கப்பட்ட இடம் மற்றும் பருவத்திற்கு பயிரின் பொருத்தம் குறைவாக இருப்பதால் உற்பத்தி மதிப்பீடு காட்டப்படவில்லை.",

    moderateEstimateMessage:
      "இது எச்சரிக்கையான சராசரி மதிப்பீடு. உண்மையான உற்பத்தி மாறுபடலாம்.",

    assessment: "மதிப்பீடு",
    method: "முறை",
    saveReport:
      "அறிக்கையை சேமிக்கவும்",
    savedToReports:
      "அறிக்கையில் சேமிக்கப்பட்டது",

    farmerExchange:
      "விவசாயி பரிமாற்றம்",

    barterTitle1:
      "உங்களிடம் இருப்பதை பரிமாறுங்கள்.",

    barterTitle2:
      "உங்களுக்கு தேவையானதை கண்டறியுங்கள்.",

    barterIntro:
      "விவசாய உபகரணங்கள், இயந்திரங்கள், பாசன உபகரணங்கள் மற்றும் பிற தேவையான பொருட்களை விவசாயிகளுடன் பரிமாறிக் கொள்ளுங்கள்.",

    createBarterRequest:
      "பரிமாற்ற கோரிக்கை உருவாக்கவும்",

    publicMarketplace:
      "பரிமாற்ற சந்தை",

    myBarterRequests:
      "எனது பரிமாற்ற கோரிக்கைகள்",

    activeRequests:
      "செயலில் உள்ள கோரிக்கைகள்",

    requests: "கோரிக்கைகள்",

    searchMarketplace:
      "உபகரணம், பொருள் அல்லது இடத்தைத் தேடுங்கள்...",

    searchMyRequests:
      "உங்கள் கோரிக்கைகளை தேடுங்கள்...",

    noBarterRequests:
      "பரிமாற்ற கோரிக்கைகள் இல்லை.",

    noOwnBarterRequests:
      "நீங்கள் இன்னும் எந்த பரிமாற்ற கோரிக்கையும் உருவாக்கவில்லை.",

    createFirstRequest:
      "முதல் கோரிக்கையை உருவாக்கவும்.",

    createOwnRequest:
      "விவசாய உபகரணத்திற்கான கோரிக்கையை உருவாக்கவும்.",

    offeredBy:
      "வழங்குபவர்",

    iHave:
      "என்னிடம் உள்ளது",

    iNeed:
      "எனக்கு தேவை",

    condition:
      "நிலை",

    yourBarterRequest:
      "உங்கள் பரிமாற்ற கோரிக்கை",

    makeCounterOffer:
      "மாற்று முன்மொழிவு செய்யவும்",

    newRequest:
      "புதிய கோரிக்கை",

    createRequest:
      "பரிமாற்ற கோரிக்கை உருவாக்கவும்",

    whatDoYouHave:
      "உங்களிடம் என்ன உள்ளது?",

    whatLookingFor:
      "நீங்கள் என்ன தேடுகிறீர்கள்?",

    contactDetails:
      "தொடர்பு விவரங்கள்",

    description:
      "விவரம்",

    publishRequest:
      "கோரிக்கையை வெளியிடவும்",

    counterOffer:
      "மாற்று முன்மொழிவு",

    theyWant:
      "அவர்களுக்கு தேவை",

    whatCanOffer:
      "நீங்கள் என்ன வழங்க முடியும்?",

    yourContactDetails:
      "உங்கள் தொடர்பு விவரங்கள்",

    sendCounterOffer:
      "மாற்று முன்மொழிவை அனுப்பவும்",

    closeRequest:
      "கோரிக்கையை மூடவும்",

    reopenRequest:
      "கோரிக்கையை மீண்டும் திறக்கவும்",

    matchedMessage:
      "இந்த பரிமாற்றம் பொருந்தியுள்ளது.",

    requestPublished:
      "பரிமாற்ற கோரிக்கை வெளியிடப்பட்டது.",

    requestClosed:
      "பரிமாற்ற கோரிக்கை மூடப்பட்டது.",

    requestReopened:
      "பரிமாற்ற கோரிக்கை மீண்டும் திறக்கப்பட்டது.",

    requestDeleted:
      "பரிமாற்ற கோரிக்கை நீக்கப்பட்டது.",

    offerSent:
      "மாற்று முன்மொழிவு அனுப்பப்பட்டது.",

    notificationsKicker:
      "அறிவிப்புகள்",

    barterActivity:
      "உங்கள் பரிமாற்ற செயல்பாடு",

    barterActivityIntro:
      "மாற்று முன்மொழிவுகளை பார்த்து கோரிக்கைகளை நிர்வகிக்கவும்.",

    noNotifications:
      "இன்னும் அறிவிப்புகள் இல்லை.",

    newOffersAppear:
      "புதிய பரிமாற்ற முன்மொழிவுகள் இங்கே தோன்றும்.",

    incomingCounterOffer:
      "மாற்று முன்மொழிவு",

    accept: "ஏற்கவும்",
    decline: "நிராகரிக்கவும்",

    matchedFarmerContact:
      "பொருந்திய விவசாயியின் தொடர்பு",

    barterPartnerContact:
      "பரிமாற்ற துணை தொடர்பு",

    contactNotProvided:
      "தொடர்பு விவரம் வழங்கப்படவில்லை",

    arrangeExchange:
      "பரிமாற்றத்தை ஏற்பாடு செய்ய விவசாயியை தொடர்பு கொள்ளுங்கள்.",

    financeKicker:
      "விவசாய நிதி",

    financeTitle:
      "விற்பனைக்கு முன் உங்கள் லாபத்தை அறியுங்கள்.",

    financeIntro:
      "வருமானம், லாபம் அல்லது இழப்பு மற்றும் சமநிலை விலையை கணக்கிடுங்கள்.",

    budgetInputs:
      "பட்ஜெட் தகவல்",

    seasonEconomics:
      "பருவ பொருளாதாரம்",

    expectedCropPrice:
      "எதிர்பார்க்கப்படும் பயிர் விலை (₹ / கிலோ)",

    expectedProduction:
      "எதிர்பார்க்கப்படும் உற்பத்தி (கிலோ)",

    totalExpenses:
      "மொத்த செலவுகள் (₹)",

    financeSummary:
      "நிதி சுருக்கம்",

    expectedProfit:
      "எதிர்பார்க்கப்படும் லாபம்",

    expectedLoss:
      "எதிர்பார்க்கப்படும் இழப்பு",

    revenue: "வருமானம்",
    expenses: "செலவுகள்",
    margin: "மார்ஜின்",

    breakEvenPrice:
      "சமநிலை விலை",

    financePlanningNote:
      "திட்டமிடும்போது பாதுகாப்பான விலை மற்றும் உற்பத்தி மதிப்பீடுகளை பயன்படுத்தவும்.",

    reportsKicker:
      "அறிக்கைகள்",

    reportsPageTitle:
      "உங்கள் பயிர் திட்டமிடல் வரலாறு ஒரே இடத்தில்.",

    reportsPageIntro:
      "சேமிக்கப்பட்ட உற்பத்தி மதிப்பீடுகள் மற்றும் இடங்களை பாருங்கள்.",

    refresh:
      "புதுப்பிக்கவும்",

    savedReports:
      "சேமித்த அறிக்கைகள்",

    plannedArea:
      "திட்டமிட்ட நிலம்",

    estimatedProduction:
      "மதிப்பிடப்பட்ட உற்பத்தி",

    loadingReports:
      "அறிக்கைகள் ஏற்றப்படுகின்றன…",

    noReports:
      "இன்னும் அறிக்கைகள் இல்லை.",

    noReportsHelp:
      "பயிர் மதிப்பீட்டை உருவாக்கி சேமிக்கவும்.",

    reportHistory:
      "வரலாறு",

    savedEstimates:
      "சேமித்த மதிப்பீடுகள்",

    reportDetail:
      "அறிக்கை விவரம்",

    date: "தேதி",

    savedEstimate:
      "சேமித்த மதிப்பீடு",

    reportsLoadError:
      "அறிக்கைகளை ஏற்ற முடியவில்லை.",
  },

  // ======================================================
  // TELUGU
  // ======================================================

  te: {
    languageName: "తెలుగు",
    // TELUGU
loginKicker: "స్మార్ట్ వ్యవసాయ ప్రణాళిక",
loginHero1: "మంచిగా ప్రణాళిక చేయండి.",
loginHero2: "తెలివిగా సాగు చేయండి.",
loginIntro:
  "వాతావరణం, పంట ప్రణాళిక, ఆర్థికం మరియు వ్యవసాయ రికార్డులు — అన్నీ ఒకే సులభమైన వేదికలో.",

welcomeBack: "మళ్లీ స్వాగతం",
loginSubtitle:
  "Agri Fincaster కొనసాగించడానికి సైన్ ఇన్ చేయండి.",

username: "వినియోగదారు పేరు",
enterUsername: "మీ వినియోగదారు పేరు నమోదు చేయండి",

password: "పాస్‌వర్డ్",
enterPassword: "మీ పాస్‌వర్డ్ నమోదు చేయండి",

signIn: "సైన్ ఇన్",

newHere: "కొత్త వినియోగదారా?",
createAccount: "ఖాతా సృష్టించండి",

    home: "హోమ్",
    weather: "వాతావరణం",
    crops: "పంటలు",
    finance: "ఆర్థికం",
    marketplace: "మార్పిడి మార్కెట్",
    reports: "నివేదికలు",
    notifications: "నోటిఫికేషన్లు",
    signOut: "సైన్ అవుట్",
    language: "భాష",

    backHome:
      "హోమ్‌కు తిరిగి వెళ్లండి",

    open: "తెరవండి",
    loading: "లోడ్ అవుతోంది...",
    save: "సేవ్ చేయండి",
    saved: "సేవ్ అయింది",
    delete: "తొలగించండి",
    close: "మూసివేయండి",
    location: "ప్రదేశం",

    farmDashboard:
      "వ్యవసాయ డ్యాష్‌బోర్డ్",

    goodToSeeYou:
      "మిమ్మల్ని మళ్లీ చూడటం ఆనందంగా ఉంది",

    homeIntro:
      "వాతావరణాన్ని చూడండి, పంట అనుకూలతను తనిఖీ చేయండి, ఉత్పత్తిని అంచనా వేయండి, ఆర్థికాన్ని నిర్వహించండి మరియు వ్యవసాయ పరికరాలను మార్పిడి చేసుకోండి.",

    weatherText:
      "భారతదేశంలోని ఏ ప్రాంతానికైనా 7 రోజుల వాతావరణ సూచన చూడండి.",

    cropPlanning:
      "పంట ప్రణాళిక",

    cropPlanningText:
      "ప్రాంతం మరియు సీజన్ ఆధారంగా పంట అనుకూలతను తనిఖీ చేసి ఉత్పత్తిని అంచనా వేయండి.",

    financeText:
      "ఆదాయం, ఖర్చులు మరియు అంచనా లాభాన్ని లెక్కించండి.",

    reportsText:
      "సేవ్ చేసిన పంట అంచనాలు మరియు వ్యవసాయ చరిత్రను చూడండి.",

    sharedLocation:
      "ఒకే ప్రదేశం మొత్తం యాప్‌లో ఉపయోగించబడుతుంది",

    noLocation:
      "ఇంకా ప్రదేశం ఎంపిక కాలేదు",

    setLocation:
      "ప్రదేశాన్ని ఎంచుకోండి",

    assistedAccess:
      "సహాయక డిజిటల్ యాక్సెస్",

    supportTitle:
      "సాంకేతికత రైతుకు సహాయం చేయాలి, అడ్డంకిగా మారకూడదు.",

    supportPara1:
      "AgriFincaster రైతులకు వాతావరణ సమాచారం, పంట ప్రణాళిక, ఉత్పత్తి అంచనాలు, ఆర్థిక సాధనాలు మరియు వ్యవసాయ పరికరాల మార్పిడి సహాయం అందించడానికి రూపొందించబడింది.",

    supportPara2:
      "డిజిటల్ సాధనాలను ఉపయోగించడంలో సౌకర్యంగా లేని రైతులు పంచాయతీ అధికారులు, వ్యవసాయ విస్తరణ సిబ్బంది లేదా కామన్ సర్వీస్ సెంటర్ల సహాయంతో AgriFincaster ఉపయోగించవచ్చు.",

    panchayatUse:
      "పంచాయతీ స్థాయిలో సూచించిన వినియోగం",

    panchayatText:
      "స్థానిక అధికారి రైతుతో కలిసి ప్రదేశం, పంట, సీజన్, భూమి విస్తీర్ణం మరియు అవసరమైన వివరాలను నమోదు చేసి ఫలితాలను సులభమైన భాషలో వివరించవచ్చు.",

    weatherKicker:
      "వాతావరణం మరియు ప్రదేశం",

    weatherTitle:
      "ప్రణాళికకు ముందు వాతావరణాన్ని తెలుసుకోండి.",

    weatherIntro:
      "భారతదేశంలో ఒక ప్రదేశాన్ని ఎంచుకోండి. ఇది పంట ప్రణాళికలో కూడా ఉపయోగించబడుతుంది.",

    searchLocation:
      "గ్రామం, పట్టణం లేదా నగరాన్ని వెతకండి…",

    useCurrentLocation:
      "ప్రస్తుత ప్రదేశాన్ని ఉపయోగించండి",

    selectLocation:
      "ప్రదేశాన్ని ఎంచుకోండి",

    forecastAppears:
      "వాతావరణ సూచన ఇక్కడ కనిపిస్తుంది.",

    currentWeather: "ఇప్పుడు",
    feelsLike:
      "అనుభూతి ఉష్ణోగ్రత",
    humidity: "తేమ",
    wind: "గాలి",
    sevenDayOutlook:
      "7 రోజుల సూచన",
    forecast: "సూచన",
    rain: "వర్షం",

    cropPlanningKicker:
      "పంట ప్రణాళిక",

    cropTitle:
      "విత్తే ముందు పంట అనుకూలతను తనిఖీ చేయండి.",

    cropIntro:
      "AgriFincaster రాష్ట్రం మరియు సీజన్ ఆధారంగా పంట అనుకూలతను తనిఖీ చేసి ఉత్పత్తిని అంచనా వేస్తుంది.",

    locationNotSet:
      "ప్రదేశం ఎంపిక కాలేదు",

    inputs: "ఇన్‌పుట్లు",
    cropDetails:
      "పంట వివరాలు",
    crop: "పంట",
    selectCrop:
      "పంటను ఎంచుకోండి",
    season: "సీజన్",
    selectSeason:
      "సీజన్‌ను ఎంచుకోండి",
    landArea:
      "భూమి విస్తీర్ణం (హెక్టార్లు)",
    checkViability:
      "అనుకూలతను తనిఖీ చేయండి",
    analysing:
      "విశ్లేషిస్తోంది…",

    cropAnalysisEmpty:
      "మీ పంట విశ్లేషణ ఇక్కడ కనిపిస్తుంది.",

    cropAnalysisHelp:
      "ప్రారంభించడానికి పంట, సీజన్ మరియు భూమి విస్తీర్ణాన్ని ఎంచుకోండి.",

    cropViability:
      "పంట అనుకూలత",

    highViability:
      "అధిక అనుకూలత",

    moderateViability:
      "మధ్యస్థ అనుకూలత",

    lowViability:
      "తక్కువ అనుకూలత",

    productionEstimate:
      "ఉత్పత్తి అంచనా",

    averageProductionEstimate:
      "సగటు ఉత్పత్తి అంచనా",

    notRecommended:
      "సిఫార్సు చేయబడలేదు",

    lowEstimateMessage:
      "ఎంచుకున్న ప్రదేశం మరియు సీజన్‌కు పంట అనుకూలత తక్కువగా ఉండటంతో ఉత్పత్తి అంచనా చూపబడదు.",

    moderateEstimateMessage:
      "ఇది జాగ్రత్తగా చేసిన సగటు అంచనా. వాస్తవ ఉత్పత్తి మారవచ్చు.",

    assessment: "మూల్యాంకనం",
    method: "పద్ధతి",
    saveReport:
      "నివేదికను సేవ్ చేయండి",
    savedToReports:
      "నివేదికలో సేవ్ అయింది",

    farmerExchange:
      "రైతుల మార్పిడి",

    barterTitle1:
      "మీ వద్ద ఉన్నదాన్ని మార్పిడి చేయండి.",

    barterTitle2:
      "మీకు కావలసినదాన్ని కనుగొనండి.",

    barterIntro:
      "వ్యవసాయ పరికరాలు, యంత్రాలు, నీటిపారుదల పరికరాలు మరియు ఇతర అవసరాలను రైతులతో మార్పిడి చేసుకోండి.",

    createBarterRequest:
      "మార్పిడి అభ్యర్థన సృష్టించండి",

    publicMarketplace:
      "మార్పిడి మార్కెట్",

    myBarterRequests:
      "నా మార్పిడి అభ్యర్థనలు",

    activeRequests:
      "సక్రియ అభ్యర్థనలు",

    requests:
      "అభ్యర్థనలు",

    searchMarketplace:
      "పరికరం, సామగ్రి లేదా ప్రదేశాన్ని వెతకండి...",

    searchMyRequests:
      "మీ అభ్యర్థనలను వెతకండి...",

    noBarterRequests:
      "మార్పిడి అభ్యర్థనలు లేవు.",

    noOwnBarterRequests:
      "మీరు ఇంకా మార్పిడి అభ్యర్థన సృష్టించలేదు.",

    createFirstRequest:
      "మొదటి అభ్యర్థనను సృష్టించండి.",

    createOwnRequest:
      "వ్యవసాయ పరికరాల కోసం అభ్యర్థన సృష్టించండి.",

    offeredBy:
      "అందిస్తున్న రైతు",

    iHave:
      "నా వద్ద ఉంది",

    iNeed:
      "నాకు కావాలి",

    condition:
      "స్థితి",

    yourBarterRequest:
      "మీ మార్పిడి అభ్యర్థన",

    makeCounterOffer:
      "ప్రతిపాదన చేయండి",

    newRequest:
      "కొత్త అభ్యర్థన",

    createRequest:
      "మార్పిడి అభ్యర్థన సృష్టించండి",

    whatDoYouHave:
      "మీ వద్ద ఏముంది?",

    whatLookingFor:
      "మీకు ఏమి కావాలి?",

    contactDetails:
      "సంప్రదింపు వివరాలు",

    description:
      "వివరణ",

    publishRequest:
      "అభ్యర్థనను ప్రచురించండి",

    counterOffer:
      "ప్రతిపాదన",

    theyWant:
      "వారికి కావాలి",

    whatCanOffer:
      "మీరు ఏమి ఇవ్వగలరు?",

    yourContactDetails:
      "మీ సంప్రదింపు వివరాలు",

    sendCounterOffer:
      "ప్రతిపాదన పంపండి",

    closeRequest:
      "అభ్యర్థన మూసివేయండి",

    reopenRequest:
      "అభ్యర్థన మళ్లీ తెరవండి",

    matchedMessage:
      "ఈ మార్పిడి సరిపోలింది.",

    requestPublished:
      "మార్పిడి అభ్యర్థన ప్రచురించబడింది.",

    requestClosed:
      "మార్పిడి అభ్యర్థన మూసివేయబడింది.",

    requestReopened:
      "మార్పిడి అభ్యర్థన మళ్లీ తెరవబడింది.",

    requestDeleted:
      "మార్పిడి అభ్యర్థన తొలగించబడింది.",

    offerSent:
      "ప్రతిపాదన పంపబడింది.",

    notificationsKicker:
      "నోటిఫికేషన్లు",

    barterActivity:
      "మీ మార్పిడి కార్యకలాపం",

    barterActivityIntro:
      "ప్రతిపాదనలను పరిశీలించి మీ అభ్యర్థనలను నిర్వహించండి.",

    noNotifications:
      "ఇంకా నోటిఫికేషన్లు లేవు.",

    newOffersAppear:
      "కొత్త మార్పిడి ప్రతిపాదనలు ఇక్కడ కనిపిస్తాయి.",

    incomingCounterOffer:
      "ప్రతిపాదన",

    accept: "అంగీకరించండి",
    decline: "తిరస్కరించండి",

    matchedFarmerContact:
      "సరిపోలిన రైతు సంప్రదింపు",

    barterPartnerContact:
      "మార్పిడి భాగస్వామి సంప్రదింపు",

    contactNotProvided:
      "సంప్రదింపు వివరాలు ఇవ్వలేదు",

    arrangeExchange:
      "మార్పిడి కోసం రైతును సంప్రదించండి.",

    financeKicker:
      "వ్యవసాయ ఆర్థికం",

    financeTitle:
      "అమ్మకానికి ముందు మీ లాభాన్ని తెలుసుకోండి.",

    financeIntro:
      "ఆదాయం, లాభం లేదా నష్టం మరియు బ్రేక్-ఈవెన్ ధరను అంచనా వేయండి.",

    budgetInputs:
      "బడ్జెట్ వివరాలు",

    seasonEconomics:
      "సీజన్ ఆర్థికం",

    expectedCropPrice:
      "అంచనా పంట ధర (₹ / కిలో)",

    expectedProduction:
      "అంచనా ఉత్పత్తి (కిలో)",

    totalExpenses:
      "మొత్తం ఖర్చులు (₹)",

    financeSummary:
      "ఆర్థిక సారాంశం",

    expectedProfit:
      "అంచనా లాభం",

    expectedLoss:
      "అంచనా నష్టం",

    revenue: "ఆదాయం",
    expenses: "ఖర్చులు",
    margin: "మార్జిన్",

    breakEvenPrice:
      "బ్రేక్-ఈవెన్ ధర",

    financePlanningNote:
      "ప్రణాళికలో జాగ్రత్తగా ధర మరియు ఉత్పత్తి అంచనాలను ఉపయోగించండి.",

    reportsKicker:
      "నివేదికలు",

    reportsPageTitle:
      "మీ పంట ప్రణాళిక చరిత్ర ఒకే చోట.",

    reportsPageIntro:
      "సేవ్ చేసిన ఉత్పత్తి అంచనాలు మరియు ప్రదేశాలను చూడండి.",

    refresh:
      "రిఫ్రెష్",

    savedReports:
      "సేవ్ చేసిన నివేదికలు",

    plannedArea:
      "ప్రణాళిక విస్తీర్ణం",

    estimatedProduction:
      "అంచనా ఉత్పత్తి",

    loadingReports:
      "నివేదికలు లోడ్ అవుతున్నాయి…",

    noReports:
      "ఇంకా నివేదికలు లేవు.",

    noReportsHelp:
      "పంట అంచనాను రూపొందించి సేవ్ చేయండి.",

    reportHistory:
      "చరిత్ర",

    savedEstimates:
      "సేవ్ చేసిన అంచనాలు",

    reportDetail:
      "నివేదిక వివరాలు",

    date: "తేదీ",

    savedEstimate:
      "సేవ్ చేసిన అంచనా",

    reportsLoadError:
      "నివేదికలను లోడ్ చేయలేకపోయాం.",
  },

  // ======================================================
  // MALAYALAM
  // ======================================================

  ml: {
    languageName: "മലയാളം",
// MALAYALAM
loginKicker: "സ്മാർട്ട് കൃഷി ആസൂത്രണം",
loginHero1: "മികച്ച രീതിയിൽ ആസൂത്രണം ചെയ്യൂ.",
loginHero2: "ബുദ്ധിപൂർവ്വം കൃഷി ചെയ്യൂ.",
loginIntro:
  "കാലാവസ്ഥ, വിള ആസൂത്രണം, ധനകാര്യം, കൃഷി രേഖകൾ — എല്ലാം ഒരൊറ്റ ലളിതമായ പ്ലാറ്റ്ഫോമിൽ.",

welcomeBack: "വീണ്ടും സ്വാഗതം",
loginSubtitle:
  "Agri Fincaster തുടരാൻ സൈൻ ഇൻ ചെയ്യുക.",

username: "ഉപയോക്തൃനാമം",
enterUsername: "നിങ്ങളുടെ ഉപയോക്തൃനാമം നൽകുക",

password: "പാസ്‌വേഡ്",
enterPassword: "നിങ്ങളുടെ പാസ്‌വേഡ് നൽകുക",

signIn: "സൈൻ ഇൻ",

newHere: "പുതിയ ഉപയോക്താവാണോ?",
createAccount: "അക്കൗണ്ട് സൃഷ്ടിക്കുക",
    home: "ഹോം",
    weather: "കാലാവസ്ഥ",
    crops: "വിളകൾ",
    finance: "ധനകാര്യം",
    marketplace: "വിനിമയ വിപണി",
    reports: "റിപ്പോർട്ടുകൾ",
    notifications: "അറിയിപ്പുകൾ",
    signOut: "സൈൻ ഔട്ട്",
    language: "ഭാഷ",

    backHome:
      "ഹോമിലേക്ക് മടങ്ങുക",

    open: "തുറക്കുക",
    loading: "ലോഡ് ചെയ്യുന്നു...",
    save: "സേവ് ചെയ്യുക",
    saved: "സേവ് ചെയ്തു",
    delete: "ഇല്ലാതാക്കുക",
    close: "അടയ്ക്കുക",
    location: "സ്ഥലം",

    farmDashboard:
      "കൃഷി ഡാഷ്ബോർഡ്",

    goodToSeeYou:
      "വീണ്ടും കാണാൻ സന്തോഷം",

    homeIntro:
      "കാലാവസ്ഥ പരിശോധിക്കുക, വിള അനുയോജ്യത പരിശോധിക്കുക, ഉൽപ്പാദനം കണക്കാക്കുക, ധനകാര്യങ്ങൾ നിയന്ത്രിക്കുക, കൃഷി ഉപകരണങ്ങൾ കൈമാറ്റം ചെയ്യുക.",

    weatherText:
      "ഇന്ത്യയിലെ ഏത് സ്ഥലത്തിന്റെയും 7 ദിവസത്തെ കാലാവസ്ഥ പ്രവചനം കാണുക.",

    cropPlanning:
      "വിള ആസൂത്രണം",

    cropPlanningText:
      "സ്ഥലവും സീസണും അടിസ്ഥാനമാക്കി വിള അനുയോജ്യത പരിശോധിച്ച് ഉൽപ്പാദനം കണക്കാക്കുക.",

    financeText:
      "വരുമാനം, ചെലവ്, പ്രതീക്ഷിക്കുന്ന ലാഭം എന്നിവ കണക്കാക്കുക.",

    reportsText:
      "സേവ് ചെയ്ത വിള കണക്കുകളും കൃഷി ചരിത്രവും കാണുക.",

    sharedLocation:
      "ഒരേ സ്ഥലം മുഴുവൻ ആപ്പിലും ഉപയോഗിക്കും",

    noLocation:
      "ഇനിയും സ്ഥലം തിരഞ്ഞെടുത്തിട്ടില്ല",

    setLocation:
      "സ്ഥലം തിരഞ്ഞെടുക്കുക",

    assistedAccess:
      "സഹായത്തോടെ ഡിജിറ്റൽ ആക്‌സസ്",

    supportTitle:
      "സാങ്കേതികവിദ്യ കർഷകനെ സഹായിക്കണം; തടസ്സമാകരുത്.",

    supportPara1:
      "AgriFincaster കർഷകർക്ക് കാലാവസ്ഥാ വിവരം, വിള ആസൂത്രണം, ഉൽപ്പാദന കണക്കുകൾ, ധനകാര്യ ഉപകരണങ്ങൾ, കൃഷി ഉപകരണ കൈമാറ്റം എന്നിവയിൽ സഹായം നൽകാനാണ് രൂപകൽപ്പന ചെയ്തിരിക്കുന്നത്.",

    supportPara2:
      "ഡിജിറ്റൽ ഉപകരണങ്ങൾ ഉപയോഗിക്കാൻ പരിചയമില്ലാത്ത കർഷകർ പഞ്ചായത്ത് ഉദ്യോഗസ്ഥർ, കൃഷി വിപുലീകരണ ജീവനക്കാർ അല്ലെങ്കിൽ കോമൺ സർവീസ് സെന്ററുകളുടെ സഹായത്തോടെ AgriFincaster ഉപയോഗിക്കാം.",

    panchayatUse:
      "പഞ്ചായത്ത് തലത്തിൽ നിർദേശിക്കുന്ന ഉപയോഗം",

    panchayatText:
      "പ്രാദേശിക ഉദ്യോഗസ്ഥൻ കർഷകനോടൊപ്പം ഇരുന്ന് സ്ഥലം, വിള, സീസൺ, ഭൂവിസ്തീർണ്ണം എന്നിവ നൽകുകയും ഫലം ലളിതമായി വിശദീകരിക്കുകയും ചെയ്യാം.",

    weatherKicker:
      "കാലാവസ്ഥയും സ്ഥലവും",

    weatherTitle:
      "ആസൂത്രണത്തിന് മുമ്പ് കാലാവസ്ഥ അറിയുക.",

    weatherIntro:
      "ഇന്ത്യയിൽ ഒരു സ്ഥലം തിരഞ്ഞെടുക്കുക. അത് വിള ആസൂത്രണത്തിലും ഉപയോഗിക്കും.",

    searchLocation:
      "ഗ്രാമം, പട്ടണം അല്ലെങ്കിൽ നഗരം തിരയുക…",

    useCurrentLocation:
      "നിലവിലെ സ്ഥലം ഉപയോഗിക്കുക",

    selectLocation:
      "സ്ഥലം തിരഞ്ഞെടുക്കുക",

    forecastAppears:
      "കാലാവസ്ഥ പ്രവചനം ഇവിടെ കാണാം.",

    currentWeather: "ഇപ്പോൾ",
    feelsLike:
      "അനുഭവപ്പെടുന്ന താപനില",
    humidity: "ആർദ്രത",
    wind: "കാറ്റ്",
    sevenDayOutlook:
      "7 ദിവസത്തെ പ്രവചനം",
    forecast: "പ്രവചനം",
    rain: "മഴ",

    cropPlanningKicker:
      "വിള ആസൂത്രണം",

    cropTitle:
      "കൃഷി തുടങ്ങുന്നതിന് മുമ്പ് വിള അനുയോജ്യത പരിശോധിക്കുക.",

    cropIntro:
      "AgriFincaster സംസ്ഥാനവും സീസണും അടിസ്ഥാനമാക്കി വിള അനുയോജ്യത പരിശോധിച്ച് ഉൽപ്പാദനം കണക്കാക്കുന്നു.",

    locationNotSet:
      "സ്ഥലം തിരഞ്ഞെടുത്തിട്ടില്ല",

    inputs: "വിവരങ്ങൾ",
    cropDetails:
      "വിള വിശദാംശങ്ങൾ",
    crop: "വിള",
    selectCrop:
      "വിള തിരഞ്ഞെടുക്കുക",
    season: "സീസൺ",
    selectSeason:
      "സീസൺ തിരഞ്ഞെടുക്കുക",
    landArea:
      "ഭൂവിസ്തീർണ്ണം (ഹെക്ടർ)",
    checkViability:
      "അനുയോജ്യത പരിശോധിക്കുക",
    analysing:
      "വിശകലനം ചെയ്യുന്നു…",

    cropAnalysisEmpty:
      "നിങ്ങളുടെ വിള വിശകലനം ഇവിടെ കാണാം.",

    cropAnalysisHelp:
      "വിള, സീസൺ, ഭൂവിസ്തീർണ്ണം എന്നിവ തിരഞ്ഞെടുക്കുക.",

    cropViability:
      "വിള അനുയോജ്യത",

    highViability:
      "ഉയർന്ന അനുയോജ്യത",

    moderateViability:
      "മിതമായ അനുയോജ്യത",

    lowViability:
      "കുറഞ്ഞ അനുയോജ്യത",

    productionEstimate:
      "ഉൽപ്പാദന കണക്ക്",

    averageProductionEstimate:
      "ശരാശരി ഉൽപ്പാദന കണക്ക്",

    notRecommended:
      "ശുപാർശ ചെയ്യുന്നില്ല",

    lowEstimateMessage:
      "തിരഞ്ഞെടുത്ത സ്ഥലത്തിനും സീസണിനും ഈ വിള അനുയോജ്യമല്ലാത്തതിനാൽ ഉൽപ്പാദന കണക്ക് കാണിക്കുന്നില്ല.",

    moderateEstimateMessage:
      "ഇത് സൂക്ഷ്മമായ ശരാശരി കണക്കാണ്. യഥാർത്ഥ ഉൽപ്പാദനം മാറാം.",

    assessment:
      "വിലയിരുത്തൽ",

    method:
      "രീതി",

    saveReport:
      "റിപ്പോർട്ട് സേവ് ചെയ്യുക",

    savedToReports:
      "റിപ്പോർട്ടിലേക്ക് സേവ് ചെയ്തു",

    farmerExchange:
      "കർഷക വിനിമയം",

    barterTitle1:
      "നിങ്ങളുടെ കൈവശമുള്ളത് കൈമാറ്റം ചെയ്യൂ.",

    barterTitle2:
      "നിങ്ങൾക്ക് വേണ്ടത് കണ്ടെത്തൂ.",

    barterIntro:
      "കൃഷി ഉപകരണങ്ങൾ, യന്ത്രങ്ങൾ, ജലസേചന ഉപകരണങ്ങൾ, വിത്തുകൾ എന്നിവ കർഷകരുമായി കൈമാറ്റം ചെയ്യുക.",

    createBarterRequest:
      "വിനിമയ അഭ്യർത്ഥന സൃഷ്ടിക്കുക",

    publicMarketplace:
      "വിനിമയ വിപണി",

    myBarterRequests:
      "എന്റെ വിനിമയ അഭ്യർത്ഥനകൾ",

    activeRequests:
      "സജീവ അഭ്യർത്ഥനകൾ",

    requests:
      "അഭ്യർത്ഥനകൾ",

    searchMarketplace:
      "ഉപകരണം, സാധനം അല്ലെങ്കിൽ സ്ഥലം തിരയുക...",

    searchMyRequests:
      "നിങ്ങളുടെ അഭ്യർത്ഥനകൾ തിരയുക...",

    noBarterRequests:
      "വിനിമയ അഭ്യർത്ഥനകളൊന്നുമില്ല.",

    noOwnBarterRequests:
      "നിങ്ങൾ ഇതുവരെ വിനിമയ അഭ്യർത്ഥന സൃഷ്ടിച്ചിട്ടില്ല.",

    createFirstRequest:
      "ആദ്യ അഭ്യർത്ഥന സൃഷ്ടിക്കുക.",

    createOwnRequest:
      "കൃഷി ഉപകരണത്തിനായി അഭ്യർത്ഥന സൃഷ്ടിക്കുക.",

    offeredBy:
      "നൽകുന്നത്",

    iHave:
      "എന്റെ കൈവശം",

    iNeed:
      "എനിക്ക് വേണം",

    condition:
      "അവസ്ഥ",

    yourBarterRequest:
      "നിങ്ങളുടെ വിനിമയ അഭ്യർത്ഥന",

    makeCounterOffer:
      "മറുപടി ഓഫർ നൽകുക",

    newRequest:
      "പുതിയ അഭ്യർത്ഥന",

    createRequest:
      "വിനിമയ അഭ്യർത്ഥന സൃഷ്ടിക്കുക",

    whatDoYouHave:
      "നിങ്ങളുടെ കൈവശം എന്തുണ്ട്?",

    whatLookingFor:
      "നിങ്ങൾക്ക് എന്താണ് വേണ്ടത്?",

    contactDetails:
      "ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ",

    description:
      "വിവരണം",

    publishRequest:
      "അഭ്യർത്ഥന പ്രസിദ്ധീകരിക്കുക",

    counterOffer:
      "മറുപടി ഓഫർ",

    theyWant:
      "അവർക്ക് വേണം",

    whatCanOffer:
      "നിങ്ങൾക്ക് എന്ത് നൽകാം?",

    yourContactDetails:
      "നിങ്ങളുടെ ബന്ധപ്പെടാനുള്ള വിവരങ്ങൾ",

    sendCounterOffer:
      "മറുപടി ഓഫർ അയയ്ക്കുക",

    closeRequest:
      "അഭ്യർത്ഥന അടയ്ക്കുക",

    reopenRequest:
      "അഭ്യർത്ഥന വീണ്ടും തുറക്കുക",

    matchedMessage:
      "ഈ വിനിമയം പൊരുത്തപ്പെട്ടു.",

    requestPublished:
      "വിനിമയ അഭ്യർത്ഥന പ്രസിദ്ധീകരിച്ചു.",

    requestClosed:
      "വിനിമയ അഭ്യർത്ഥന അടച്ചു.",

    requestReopened:
      "വിനിമയ അഭ്യർത്ഥന വീണ്ടും തുറന്നു.",

    requestDeleted:
      "വിനിമയ അഭ്യർത്ഥന ഇല്ലാതാക്കി.",

    offerSent:
      "മറുപടി ഓഫർ അയച്ചു.",

    notificationsKicker:
      "അറിയിപ്പുകൾ",

    barterActivity:
      "നിങ്ങളുടെ വിനിമയ പ്രവർത്തനം",

    barterActivityIntro:
      "മറുപടി ഓഫറുകൾ പരിശോധിച്ച് അഭ്യർത്ഥനകൾ നിയന്ത്രിക്കുക.",

    noNotifications:
      "ഇനിയും അറിയിപ്പുകളില്ല.",

    newOffersAppear:
      "പുതിയ വിനിമയ ഓഫറുകൾ ഇവിടെ കാണാം.",

    incomingCounterOffer:
      "മറുപടി ഓഫർ",

    accept: "സ്വീകരിക്കുക",
    decline: "നിരസിക്കുക",

    matchedFarmerContact:
      "പൊരുത്തപ്പെട്ട കർഷകന്റെ ബന്ധപ്പെടൽ",

    barterPartnerContact:
      "വിനിമയ പങ്കാളിയുടെ ബന്ധപ്പെടൽ",

    contactNotProvided:
      "ബന്ധപ്പെടാനുള്ള വിവരം നൽകിയിട്ടില്ല",

    arrangeExchange:
      "വിനിമയം ക്രമീകരിക്കാൻ കർഷകനെ ബന്ധപ്പെടുക.",

    financeKicker:
      "കൃഷി ധനകാര്യം",

    financeTitle:
      "വിൽക്കുന്നതിന് മുമ്പ് ലാഭം അറിയുക.",

    financeIntro:
      "വരുമാനം, ലാഭം അല്ലെങ്കിൽ നഷ്ടം, സമതുല്യ വില എന്നിവ കണക്കാക്കുക.",

    budgetInputs:
      "ബജറ്റ് വിവരങ്ങൾ",

    seasonEconomics:
      "സീസൺ സാമ്പത്തികം",

    expectedCropPrice:
      "പ്രതീക്ഷിക്കുന്ന വിള വില (₹ / കിലോ)",

    expectedProduction:
      "പ്രതീക്ഷിക്കുന്ന ഉൽപ്പാദനം (കിലോ)",

    totalExpenses:
      "ആകെ ചെലവ് (₹)",

    financeSummary:
      "ധനകാര്യ സംഗ്രഹം",

    expectedProfit:
      "പ്രതീക്ഷിക്കുന്ന ലാഭം",

    expectedLoss:
      "പ്രതീക്ഷിക്കുന്ന നഷ്ടം",

    revenue: "വരുമാനം",
    expenses: "ചെലവ്",
    margin: "മാർജിൻ",

    breakEvenPrice:
      "സമതുല്യ വില",

    financePlanningNote:
      "ആസൂത്രണത്തിനായി സൂക്ഷ്മമായ വിലയും ഉൽപ്പാദന കണക്കും ഉപയോഗിക്കുക.",

    reportsKicker:
      "റിപ്പോർട്ടുകൾ",

    reportsPageTitle:
      "നിങ്ങളുടെ വിള ആസൂത്രണ ചരിത്രം ഒരിടത്ത്.",

    reportsPageIntro:
      "സേവ് ചെയ്ത ഉൽപ്പാദന കണക്കുകളും സ്ഥലങ്ങളും കാണുക.",

    refresh:
      "പുതുക്കുക",

    savedReports:
      "സേവ് ചെയ്ത റിപ്പോർട്ടുകൾ",

    plannedArea:
      "ആസൂത്രിത ഭൂമി",

    estimatedProduction:
      "കണക്കാക്കിയ ഉൽപ്പാദനം",

    loadingReports:
      "റിപ്പോർട്ടുകൾ ലോഡ് ചെയ്യുന്നു…",

    noReports:
      "ഇനിയും റിപ്പോർട്ടുകളില്ല.",

    noReportsHelp:
      "വിള കണക്ക് സൃഷ്ടിച്ച് സേവ് ചെയ്യുക.",

    reportHistory:
      "ചരിത്രം",

    savedEstimates:
      "സേവ് ചെയ്ത കണക്കുകൾ",

    reportDetail:
      "റിപ്പോർട്ട് വിശദാംശം",

    date: "തീയതി",

    savedEstimate:
      "സേവ് ചെയ്ത കണക്ക്",

    reportsLoadError:
      "റിപ്പോർട്ടുകൾ ലോഡ് ചെയ്യാനായില്ല.",
  },
};

export const languageOptions = [
  { code: "en", label: "English" },
  { code: "hi", label: "हिंदी" },
  { code: "bn", label: "বাংলা" },
  { code: "kn", label: "ಕನ್ನಡ" },
  { code: "ta", label: "தமிழ்" },
  { code: "te", label: "తెలుగు" },
  { code: "ml", label: "മലയാളം" },
];

export function LanguageProvider({
  children,
}) {
  const [language, setLanguage] =
    useState(() => {
      const saved =
        localStorage.getItem(
          "agri-language"
        );

      return translations[saved]
        ? saved
        : "en";
    });

  const setLang = (lang) => {
    if (!translations[lang]) {
      return;
    }

    setLanguage(lang);

    localStorage.setItem(
      "agri-language",
      lang
    );

    document.documentElement.lang =
      lang;
  };

  const t = (
    key,
    fallback
  ) => {
    return (
      translations[language]?.[
        key
      ] ??
      translations.en?.[key] ??
      fallback ??
      key
    );
  };

  const value =
    useMemo(
      () => ({
        language,
        setLang,
        t,
        languageOptions,
      }),
      [language]
    );

  return (
    <LanguageContext.Provider
      value={value}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context =
    useContext(
      LanguageContext
    );

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider."
    );
  }

  return context;
}