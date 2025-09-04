import axios from "axios";
import { URL } from "@env";

export const apiClientes = axios.create({
    baseURL: URL
})