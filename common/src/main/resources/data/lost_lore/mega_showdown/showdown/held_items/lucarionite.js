{
  name: "Lucarionite",
  spritenum: 594,
  megaStone: "Lucario-Mega",
  megaEvolves: [
	"Lucario", 
	"Lucario-PMD-Scarf", 
	"Lucario-PSMD-Scarf", 
	"Lucario-Cafe-Costume", 
	"Lucario-Captain-Costume", 
	"Lucario-Chef-Costume", 
	"Lucario-Concert-Costume", 
	"Lucario-Costume_Party-Costume", 
	"Lucario-Holiday-Costume", 
	"Lucario-Martial_Arts-Costume" , 
	"Lucario-Ruins-Costume" , 
	"Lucario-Space-Costume"
  ],
  itemUser: ["Lucario"],
  onTakeItem(item, source) {
    const name = source.species.name;
    const base = source.baseSpecies.baseSpecies;
    if (name === base) return false;
    if (item.megaEvolves?.includes(name)) return false;
    if (item.megaStone === name) return false;
    return true;
  },
  num: 673,
  gen: 6,
  isNonstandard: "Past",
}
