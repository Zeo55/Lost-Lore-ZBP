{
	num: 2005,
	accuracy: 100,
	basePower: 95,
	category: "Special",
	name: "Shadow Storm",
	pp: 5,
	priority: 0,
	flags: {protect: 1, metronome: 1},
	target: "allAdjacentFoes",
	type: "Shadow",
	contestType: "Tough",
	onEffectiveness(typeMod, target, type, move) {
		if (move.type !== 'Shadow') return;
		if (target.types.length > 1 && type === target.types[1]) {
			return 0;
		}
	}
}