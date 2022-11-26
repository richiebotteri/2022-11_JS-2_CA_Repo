import { createRequest } from "./request-type/create-request.mjs";
import { deleteRequest } from "./request-type/delete-request.mjs";
import { getRequest } from "./request-type/get-request.mjs";
import { patchRequest } from "./request-type/patch-request.mjs";
import { putRequest } from "./request-type/put-request.mjs";

export function postRequests() {
   createRequest();
   deleteRequest();
   getRequest();
   patchRequest();
   putRequest();
}
