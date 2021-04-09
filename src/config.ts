export const clinicalTrialsUrl =
  "https://functions-hnf2-1-02.int-hn.nhn.no/api/v1/kliniskestudier";

export const episerverUrl = "http://localhost:51338/sokeside/snomed";

export const defaultBranch = "MAIN/SNOMEDCT-NO";

export const hosts = [
  "https://test.terminologi.ehelse.no",
  "https://qa.terminologi.ehelse.no",
  "https://terminologi.ehelse.no",

];

export const codeSystems = [
 /* {
    branch: "MAIN/ICPC-2",
    id: "450993002",
    title: "ICPC-2",
  },*/
  {
    branch: "MAIN/SNOMEDCT-NO/REFSET2",
    id: "816210007",
    title: "MedDRA",
  },
  {
    branch: "MAIN",
    id: "447562003",
    title: "ICD-10",
  },
  {
    branch: "MAIN/SNOMEDCT-NO/HELSEDIREKTORATET",
    id: "2041000202101",
    title: "ATC",
  }
];

export const referenceSets = [
  {
    id: "",
    title: "[Not specified]",
  },
  {
    id: "816210007",
    title: "MedDRA",
  },
];

export const limit = "10";

export const languages = ["nb-NO", "nb", "nn", "no"];
