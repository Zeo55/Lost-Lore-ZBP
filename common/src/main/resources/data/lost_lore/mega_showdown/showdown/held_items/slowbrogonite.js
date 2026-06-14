{
  name: "Slowbrogonite",
  spritenum: -620,
  megaStone: "Slowbro-Mega-Y",
  megaEvolves: ["Slowbro-Galar"],
  itemUser: ["Slowbro-Galar"],
  onTakeItem(item, source) {
    const name = source.species.name;
    const base = source.baseSpecies.baseSpecies;
    if (name === base) return false;
    if (item.megaEvolves?.includes(name)) return false;
    if (item.megaStone === name) return false;
    return true;
  },
  num: -760,
  gen: 6,
  isNonstandard: "Past"
}