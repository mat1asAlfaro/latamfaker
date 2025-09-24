import { describe, it, expect } from "vitest"
import { createGenerator } from "../src"

describe("Phone generator", () => {
    it("generates a reproducible phone with seed", () => {
        const gen1 = createGenerator({ seed: globalThis.SEED })
        const gen2 = createGenerator({ seed: globalThis.SEED })

        expect(gen1.phone()).toEqual(gen2.phone())
    })
})