{
  name: "Venusaurite",
  spritenum: 586,
  megaStone: "Venusaur-Mega",
  megaEvolves: ["Venusaur", "Venusaur-Clone"],
  itemUser: ["Venusaur"],
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