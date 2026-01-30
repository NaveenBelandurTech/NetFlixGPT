export const LOGO = 'https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'

export const API_CONSTANT = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_TOKEN
  }
};

// This is the Base url to get the imdb api first is the image api second is the file size then the path
export const IMAGE_CDN = 'https://image.tmdb.org/t/p/w500/'


export const BG_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/c81956f1-5750-454c-9b3c-7a4d990d3d06/web/IN-en-20251208-TRIFECTA-perspective_d69f5f82-9a35-45d7-a7b6-9af6e0643bf5_large.jpg'

export const SupportedLanguage = [
  {
    indi: 'en',
    name: 'English',
  },
  {
    indi: 'kan',
    name: 'Kannada',
  },
  {
    indi: 'hi',
    name: 'Hindi',
  },
  {
    indi: 'es',
    name: 'Spanish',
  },
];



