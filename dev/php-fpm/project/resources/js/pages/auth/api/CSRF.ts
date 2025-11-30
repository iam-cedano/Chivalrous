import axios from "axios";

async function getCSRFToken(): Promise<void> {
   return await axios.get('/sanctum/csrf-cookie');
}

export { getCSRFToken };