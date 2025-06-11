import { atomWithStorage } from "jotai/utils";
import { createJSONStorage } from "jotai/utils";

const storage = createJSONStorage<string>(() => sessionStorage);
export const officeIdAtom = atomWithStorage<string>(
  "officeId",
  "130000",
  storage
); // Default to Tokyo
