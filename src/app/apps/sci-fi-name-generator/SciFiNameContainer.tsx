import { promises as fs } from "fs";
import SciFiNamePage from "./SciFiNamePage";
import styles from "@/app/styles/sciFiName.module.css";

export default async function SciFiNameContainer() {
  const file = await fs.readFile(
    process.cwd() + "/src/app/apps/sci-fi-name-generator/syllables.json",
    "utf8"
  );
  const data = JSON.parse(file);

  return (
    <div className={styles.sciFiContainer}>
      <SciFiNamePage syllables={data} />
    </div>
  );
}
