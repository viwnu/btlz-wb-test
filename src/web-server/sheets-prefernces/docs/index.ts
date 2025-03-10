import { GetPreferncesDoc } from "./get-preferences.js";
import { UpdatePreferncesDoc } from "./update-preferences.js";

export const PreferencesPaths = {
    "/preferences": { ...UpdatePreferncesDoc, ...GetPreferncesDoc },
};
