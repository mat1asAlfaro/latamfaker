import { createGenerator } from "./src";

globalThis.SEED = 42;
globalThis.GEN = createGenerator({ seed: globalThis.SEED });