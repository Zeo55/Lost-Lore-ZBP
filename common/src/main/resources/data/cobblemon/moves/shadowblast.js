{
	num: 9991,
	accuracy: 100,
	basePower: 80,
	category: "Physical",
	name: "Shadow Blast",
	pp: 5,
	priority: 0,
	flags: {protect: 1, distance: 1, metronome: 1, wind: 1},
	critRatio: 2,
	secondary: null,
	target: "any",
	type: "Shadow",
	contestType: "Cool",
	onEffectiveness(typeMod, target, type, move) {
		if (move.type !== 'Shadow') return;
		if (target.types.length > 1 && type === target.types[1]) {
			return 0;
		}
	}
}