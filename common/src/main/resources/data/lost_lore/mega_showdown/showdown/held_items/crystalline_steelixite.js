{
  name: "Crystalline Steelixite",
  spritenum: 621,
  megaStone: "Steelix-Crystal-Mega",
  megaEvolves: ["Steelix-Crystal"],
  itemUser: ["Steelix-Crystal"],
  onTakeItem(item, source) {
  	const name = source.species.name;
  	const base = source.baseSpecies.baseSpecies;
  	if (name === base) return false;
  	if (item.megaEvolves?.includes(name)) return false;
  	if (item.megaStone === name) return false;
  	return true;
  },
  num: 761,
  gen: 6,
  isNonstandard: "Past",
}