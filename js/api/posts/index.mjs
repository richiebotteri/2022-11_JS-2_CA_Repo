import { deleteRequest } from "./request-type/delete-request.mjs";
import { getRequest } from "./request-type/get-request.mjs";
import { updateRequest } from "./request-type/update-request.mjs";

export function postRequests() {
   deleteRequest();
   getRequest();
   updateRequest();
}
