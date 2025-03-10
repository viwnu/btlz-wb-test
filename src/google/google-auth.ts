import { GoogleAuth } from "google-auth-library";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

export function GetGoogleAuth() {
    return new GoogleAuth({
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        credentials: getCredentials(),
    });
}

function getCredentials() {
    // Load client secrets from a local file.
    const content = fs.readFileSync(process.env.GOOGLE_APPLICATION_CREDENTIALS as string, { encoding: "utf8" });
    return JSON.parse(content.toString());
}
