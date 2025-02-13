export const LOGO_URL = "https://occ-0-3647-3646.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"

export const API_OPTIONAS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_API_KEY
    }
  };

  export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/"

  export const SUPPORTED_LANGUAGE = [
    {identifire:"en",name:"English"},
    {identifire:"hindi",name:"Hindi"},
    {identifire:"spanish",name:"Spanish"},
  ]

  export const OPENAI_GPT_KEY = process.env.REACT_APP_OPENAI_GPT_KEY;
  