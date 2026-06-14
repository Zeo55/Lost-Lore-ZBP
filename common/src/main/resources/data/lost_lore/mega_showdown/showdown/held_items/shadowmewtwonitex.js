{
  name: "Shadow Mewtwonite X",
  spritenum: 600,
  megaStone: "Mewtwo-Mega-SX",
  megaEvolves: ["Mewtwo-Shadow"],
  itemUser: ["Mewtwo-Shadow"],
  onTakeItem(item, source) {
    const name = source.species.name;
    const base = source.baseSpecies.baseSpecies;
    if (name === base) return false;
    if (item.megaEvolves?.includes(name)) return false;
    if (item.megaStone === name) return false;
    return true;
  },
  num: -662,
  gen: 6,
  isNonstandard: "Past"
}