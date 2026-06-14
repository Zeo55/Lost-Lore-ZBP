{
  name: "Charizardite Y",
  spritenum: 586,
  megaStone: "Charizard-Mega-Y",
  megaEvolves: ["Charizard", "Charizard-Clone"],
  itemUser: ["Charizard"],
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