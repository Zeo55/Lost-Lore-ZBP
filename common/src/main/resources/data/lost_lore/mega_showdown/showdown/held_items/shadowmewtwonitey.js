{
  name: "Shadow Mewtwonite Y",
  spritenum: 601,
  megaStone: "Mewtwo-Mega-SY",
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
  num: -663,
  gen: 6,
  isNonstandard: "Past"
}