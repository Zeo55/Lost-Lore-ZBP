{
	num: 2002,
	accuracy: true,
	basePower: 10,
	category: "Physical",
	isNonstandard: "Past",
	name: "Max Void",
	pp: 10,
	priority: 0,
	flags: {},
	isMax: true,
	self: {
		onHit(source) {
			if (!source.volatiles['dynamax']) return;
			for (const pokemon of source.alliesAndSelf()) {
				this.boost({spe: 1}, pokemon);
			}
		},
	},
	target: "adjacentFoe",
	type: "Shadow",
	contestType: "Cool",
	onEffectiveness(typeMod, target, type, move) {
		if (move.type !== 'Shadow') return;
		if (target.types.length > 1 && type === target.types[1]) {
			return 0;
		}
	}
}