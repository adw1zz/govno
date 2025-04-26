import Application from "./application.js";
import cc from "cc";

async function main() {
  try {
    const application = new Application();
    const engine = await import(cc);
    await application.init(engine);
    await application.start();
  } catch (err) {
    console.error(err);
  }
}

main();
