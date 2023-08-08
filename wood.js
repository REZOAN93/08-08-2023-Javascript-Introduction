function woodCalculator(chairQty, tableQty, bedQty) {
  const perChairWood = 3;
  const perTableWood = 5;
  const perBedWood = 10;

  const chairWood = chairQty * perChairWood;
  const tableWood = tableQty * perTableWood;
  const bedWood = bedQty * perBedWood;
  const totalWood = chairWood + tableWood + bedWood;
  return totalWood;
}

const mywood = woodCalculator(1, 4, 5);
console.log(mywood);
