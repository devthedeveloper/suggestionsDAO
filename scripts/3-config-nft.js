import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0xAD198ed72B1C99942587D0678930bcD65B4Dd9BF",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Suggestion Band",
        description: "This NFT will give you access to SuggestionDAO!",
        image: readFileSync("scripts/assets/544963B9-9164-4D88-9853-26B95ABB409D.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()