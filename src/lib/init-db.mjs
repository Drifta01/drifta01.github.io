import fs from "fs/promises";
import path from "path";

const dbPath = path.join(process.cwd(), "src/lib/inventory.json");

async function setup() {
  try {
    const sampleItems = [
      {
        id: 1,
        name: "Resistor 10k Ohm",
        part_number: "R10K",
        quantity: 100,
        supplier: "DigiKey",
        cost: 0.05,
      },
      {
        id: 2,
        name: "Capacitor 100uF",
        part_number: "C100U",
        quantity: 50,
        supplier: "Mouser",
        cost: 0.1,
      },
      {
        id: 3,
        name: "LED - Red",
        part_number: "LEDR",
        quantity: 200,
        supplier: "Adafruit",
        cost: 0.02,
      },
      {
        id: 4,
        name: "Microcontroller ATmega328P",
        part_number: "ATM328",
        quantity: 25,
        supplier: "SparkFun",
        cost: 2.5,
      },
    ];

    await fs.writeFile(
      dbPath,
      JSON.stringify({ inventory: sampleItems }, null, 2),
    );
    console.log(`Database created at ${dbPath}`);
  } catch (err) {
    console.error("Failed to initialize database:", err);
  }
}

setup();
