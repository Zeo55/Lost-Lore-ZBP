{
  name: "Blastoisinite",
  spritenum: 586,
  megaStone: "Blastoise-Mega",
  megaEvolves: ["Blastoise", "Blastoise-Clone"],
  itemUser: ["Blastoise"],
  onTakeItem(item, source) {
    const name = source.species.name;
    const base = source.baseSpecies.baseSpecies;
    if (name === base) return false;
    if (item.megaEvolves?.includes(name)) return false;
    if (item.megaStone === name) return false;
    return true;
  },
  num: 678,
  gen: 6,
  isNonstandard: "Past",
}