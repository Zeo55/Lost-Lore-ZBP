{
	name: "Shadow Guard",
	num: 2002,
	rating: 5.0,
	flags: {},
	onSourceModifyDamage(damage, source, target, move) {
		if (target.hp >= target.maxhp) {
			this.debug('Shadow Guard weaken');
			return this.chainModify(0.5);
		}
	},
	onModifyDamage(damage, source, target, move) {
		if (source !== this.effectState.target) return;
		if (move.category === 'Status') return;
		if (move.type !== 'Flying' && move.type !== 'Psychic') return;
		return this.chainModify(1.5);
	}
}