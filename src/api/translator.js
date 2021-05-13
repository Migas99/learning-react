import axios from "axios";

// const key = "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM";
// const apiURL = "https://translation.google.apis.com";

const localApiURL = "http://localhost:3001";

// const axiosConfig = axios.create({
//   baseURL: localApiURL,
//   withCredentials: false,
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
//   },
// });

const customRequests = {};

customRequests.baseURL = localApiURL;

customRequests.languages = [
  { label: "Portuguese", value: "pt" },
  { label: "English", value: "en" },
  { label: "Afrikaans", value: "af" },
  { label: "Arabic", value: "ar" },
  { label: "Hindi", value: "hi" },
];

customRequests.translate = async (sentence, language) => {
  const { label } = customRequests.languages.find((lang) => {
    return lang.value === language;
  });

  return {
    data: {
      data: `Tried to translate: "${sentence}" to ${label}`,
    },
  };

  // return await axiosConfig.post("translate", {
  //   sentence: sentence,
  //   language: label,
  // });

  // return await axiosConfig.post(
  //   "/language/translate/v2",
  //   {},
  //   {
  //     params: {
  //       q: sentence,
  //       target: language,
  //       key: key,
  //     },
  //   }
  // );
};

export default customRequests;
