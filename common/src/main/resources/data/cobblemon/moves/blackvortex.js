{
	num: 9998,
	accuracy: true,
	basePower: 1,
	category: "Physical",
	isNonstandard: "Past",
	name: "Black Vortex",
	pp: 1,
	priority: 0,
	flags: {},
	isZ: "shadowiumz",
	secondary: null,
	target: "normal",
	type: "Shadow",
	contestType: "Cool",
	onEffectiveness(typeMod, target, type, move) {
		if (move.type !== 'Shadow') return;
		if (target.types.length > 1 && type === target.types[1]) {
			return 0;
		}
	}
}