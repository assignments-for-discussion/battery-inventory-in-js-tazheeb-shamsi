const assert = require("assert");

function countBatteriesByHealth(presentCapacities) {
  const ratedCapacity = 120;

 
  let healthy = 0;
  let exchange = 0;
  let failed = 0;

  for (const presentCapacity of presentCapacities) {
    const sohPercentage = (presentCapacity / ratedCapacity) * 100;

    // Classify the battery based on SoH
    if (sohPercentage > 80 && sohPercentage <= 100) {
      healthy++;
    } else if (sohPercentage >= 62 && sohPercentage <= 80) {
      exchange++;
    } else {
      failed++;
    }
  }

  // Return an object with counts
  return {
    healthy,
    exchange,
    failed,
  };
}

function testBucketingByHealth() {
  console.log("Counting batteries by SoH...");
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  const counts = countBatteriesByHealth(presentCapacities);
  assert.strictEqual(counts["healthy"], 2);
  assert.strictEqual(counts["exchange"], 3);
  assert.strictEqual(counts["failed"], 1);
  console.log("Done counting :)");
}

testBucketingByHealth();
