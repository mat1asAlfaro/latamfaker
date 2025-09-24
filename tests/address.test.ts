import { describe, it, expect } from "vitest"
import { createGenerator } from "../src"

describe("Address generator", () => {
    it("generates a reproducible address with seed", () => {
        const gen1 = createGenerator({ seed: globalThis.SEED })
        const gen2 = createGenerator({ seed: globalThis.SEED })

        expect(gen1.address()).toEqual(gen2.address())
    })
})