{
    onStart(pokemon) {
        this.add('-ability', pokemon, 'Shadow Pressure');
    },
    onDeductPP(target, source) {
        if (target.isAlly(source)) return;
        return 1;
    },
	onModifyDamage(damage, source, target, move) {
		if (source !== this.effectState.target) return;
		if (move.category === 'Status') return;
		if (move.type !== 'Flying' && move.type !== 'Psychic') return;
		return this.chainModify(1.5);
	},
	flags: {},
	name: "Shadow Pressure",
	rating: 4.5,
	num: 9998,
}