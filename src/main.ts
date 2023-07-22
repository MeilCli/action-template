import * as core from "@actions/core";
import { getOption } from "./option";

async function run() {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const option = getOption();
    } catch (error) {
        if (error instanceof Error) {
            core.setFailed(error.message);
        }
    }
}

run();
