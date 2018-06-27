export default {
  badgeCategory: [
    { cat:"purpose"},
    { cat:"storingDuration"},
    { cat:"dataSource"},
    { cat:"scale"},
    { cat:"techServices"}
  ],

  badge: [
    {
      badgeName: "storing1mth",
      imgURL: "/images/storingDuration/time1mth.png",
      descriptionProvider:
        "All of the collected user data is stored for 1 month",
      explanationUser: "All of the collected user data is stored for 1 month",
      badgeCategory: "storingDuration"
    },
    {
      badgeName: "storing1year",
      imgURL: "./images/storingDuration/time1yr.png",
      descriptionProvider:
        "All of the collected user data is stored for 1 year",
      explanationUser: "All of the collected user data is stored for 1 year",
      badgeCategory: "storingDuration"
    },
    {
      badgeName: "storingAccount",
      imgURL: "./images/storingDuration/timelim.png",
      descriptionProvider:
        "All of the collected user data is stored for as long as the account exists. Upon user-originated account deletion the before needed data has to be deleted instantaneously",
      explanationUser:
        "All of the collected user data is stored for as long as the account exists. Upon user-originated account deletion the before needed data will be deleted instantaneously",
      badgeCategory: "storingDuration"
    },
    {
      badgeName: "storingUnlimited",
      imgURL: "./images/storingDuration/timeinfinity.png",
      descriptionProvider:
        "All of the collected user data is stored for an unspecified period of time. If this is the case you are legally obligated by the GDPR to list the reasoning/criteria for storing specific data. We recommend linking to the specific passage in your TOS and showing it alongside the badges",
      explanationUser:
        "All of the collected user data is stored for a not further constrained period of time. However the service provider is legally obligated to list the criteria for storing specific data. Find out about our reasoning for storing duration.",
      badgeCategory: "storingDuration"
    },

    {
      badgeName: "feedback",
      imgURL: "",
      descriptionProvider:
        "User data is stored and analyzed to give the user feedback.",
      explanationUser: "",
      badgeCategory: "purpose"
    },
    {
      badgeName: "rating",
      imgURL: "x",
      descriptionProvider: "User data is processed to rate the users performance.",
      explanationUser: "",
      badgeCategory: "purpose"
    },
    {
      badgeName: "predictionTrends",
      imgURL: "x",
      descriptionProvider: "User data is processed to give the user a prediction based on past activity",
      explanationUser: "",
      badgeCategory: "purpose"
    },
    {
      badgeName: "recommendationAds",
      imgURL: "x",
      descriptionProvider: "User data is processed to personalize ads and recommendations based on the users personal preferences.",
      explanationUser: "",
      badgeCategory: "purpose"
    },
    {
      badgeName: "improveDevelopService",
      imgURL: "",
      descriptionProvider: "User data is processed to improve the providers services or develop entirely new services based on the users needs",
      explanationUser: "",
      badgeCategory: "purpose"
    },
    {
      badgeName: "improveSecurity",
      imgURL: "",
      descriptionProvider: "User data is processed to improve security",
      explanationUser: "",
      badgeCategory: "purpose"
    },
    {
      badgeName: "personalization",
      imgURL: "",
      descriptionProvider: "User data is processed to give the user a personalized version of the service",
      explanationUser: "",
      badgeCategory: "purpose"
    },

    {
      badgeName: "bigData",
      imgURL: "x",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "techServices"
    },
    {
      badgeName: "machineLearning",
      imgURL: "x",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "techServices"
    },
    {
      badgeName: "blockchain",
      imgURL: "x",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "techServices"
    },
    {
      badgeName: "manualProcessing",
      imgURL: "x",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "techServices"
    },
    {
      badgeName: "otherAutomatedProcessing",
      imgURL: "x",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "techServices"
    },
    {
      badgeName: "3rdPartyServices",
      imgURL: "x",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "techServices"
    },
    {
      badgeName: "cookies",
      imgURL: "",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "techServices"
    },
    
    {
      badgeName: "nrOfLogins",
      imgURL: "x",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "dataSource"
    },
    {
      badgeName: "onlineTime",
      imgURL: "x",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "dataSource"
    },
    {
      badgeName: "text",
      imgURL: "x",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "dataSource"
    },
    {
      badgeName: "querys",
      imgURL: "x",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "dataSource"
    },
    {
      badgeName: "videoInteraction",
      imgURL: "x",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "dataSource"
    },
    {
      badgeName: "whichServicesAreUsed",
      imgURL: "x",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "dataSource"
    },
    {
      badgeName: "deviceID",
      imgURL: "",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "dataSource"
    },
    {
      badgeName: "IPAdr",
      imgURL: "",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "dataSource"
    },
    {
      badgeName: "location",
      imgURL: "",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "dataSource"
    },
    {
      badgeName: "browserFingerprint",
      imgURL: "",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "dataSource"
    },
    {
      badgeName: "userSpecifiedData",
      imgURL: "",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "dataSource"
    },



    {
      badgeName: "3rdParty",
      imgURL: "",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "scale"
    },
    {
      badgeName: "comparisonToOthers",
      imgURL: "",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "scale"
    },
    {
      badgeName: "anonymization",
      imgURL: "",
      descriptionProvider: "",
      explanationUser: "",
      badgeCategory: "scale"
    }
  ]
};
