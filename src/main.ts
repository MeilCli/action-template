import * as core from "@actions/core";
import { getOption } from "./option";

async function run() {
    try {
        const option = getOption();
        core.info("test");
    } catch (error) {
        if (error instanceof Error) {
            core.setFailed(error.message);
        }
    }
}

run();
