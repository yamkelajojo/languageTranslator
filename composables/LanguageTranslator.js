// import { request } from "http";
// import { createRequire } from "module";

// export default class LanguageTranslator {
//   languageTranslator = null;
//   constructor() {
//     const LanguageTranslatorV3 = require("ibm-watson/language-translator/v3");
//     const { IamAuthenticator } = require("ibm-watson/auth");

//     this.languageTranslator = new LanguageTranslatorV3({
//       version: "2018-05-01",
//       authenticator: new IamAuthenticator({
//         apikey: "UVYvsPh8N1sGJbrsAuZX442CPSI0AkSffuB76MJ4o8v0",
//       }),
//       serviceUrl:
//         "https://api.au-syd.language-translator.watson.cloud.ibm.com/instances/e66e2e8b-479a-4133-b825-f7fedb5975a7",
//     });
//   }
//   getLanguages = async () => {
//     this.languageTranslator
//       .listLanguages()
//       .then((languages) => {
//         // console.log(JSON.stringify(languages, null, 2), "Dzowdzow");
//         return JSON.stringify(languages, null, 2);
//       })
//       .catch((err) => {
//         // console.log("error:", err);
//         return err;
//       });
//   };
// }

//-----------------------------------------
import LanguageTranslatorV3 from "ibm-watson/language-translator/v3";
import { IamAuthenticator } from "ibm-watson/auth";

// replace '{apikey}' and '{url}' with your IBM Watson Language Translator API credentials
const apiKey = "UVYvsPh8N1sGJbrsAuZX442CPSI0AkSffuB76MJ4o8v0";
const serviceUrl =
  "https://api.au-syd.language-translator.watson.cloud.ibm.com/instances/e66e2e8b-479a-4133-b825-f7fedb5975a7";

export class LanguageTranslator {
  constructor() {
    console.log("Constuctor");
    debugger;
    this.languageTranslator = new LanguageTranslatorV3({
      version: "2018-05-01",
      authenticator: new IamAuthenticator({
        apikey: apiKey,
      }),
      serviceUrl: serviceUrl,
    });
  }

  // function to list languages
  async listLanguages() {
    try {
      const languages = await this.languageTranslator.listLanguages();
      console.log(JSON.stringify(languages, null, 2), "ewe");
      return JSON.stringify(languages, null, 2);
    } catch (err) {
      console.log("error:", err);
      throw err;
    }
  }
}
