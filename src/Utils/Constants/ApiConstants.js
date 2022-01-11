export const PINCODE_TO_CITY_URL = "https://api.postalpincode.in/pincode/";

export const BASE_URL =
  "http://makeit.centralindia.cloudapp.azure.com:8080/api/v1/";
export const PRIMARY_API =
  "http://localhost:8080/api/v1/";
export const STORAGE_API = "http://localhost:3200/";
// export const BASE_URL =
//   "http://makeit.centralindia.cloudapp.azure.com:8080/api/v1/";
// export const STORAGE_API =
//   "http://makeit.centralindia.cloudapp.azure.com:8080/api/v1/";

export const AUTH_URL = PRIMARY_API + "auth/";
export const USER_URL = PRIMARY_API + "user/";
export const PRODUCT_URL = PRIMARY_API + "product/";

export const SIGNUP_URL = AUTH_URL + "signup";
export const LOGIN_URL = AUTH_URL + "login";
export const GET_USER_DATA = USER_URL + "getuserdata";
export const ADD_ADDESS_URL = USER_URL + "addAddress";
export const BECOME_A_SELLER_URL = USER_URL + "becomeaseller";
export const GET_CART_DATA = USER_URL + "getcart";
export const REMOVE_CART_ITEM = USER_URL + "removefromcart";
export const SEARCH_PRODUCTS = PRODUCT_URL + "atlassearch";
export const ADD_PRODUCT_URL = PRODUCT_URL + "addproduct";

export const UPLOAD_IMAGE_URL = STORAGE_API + "addImages";
