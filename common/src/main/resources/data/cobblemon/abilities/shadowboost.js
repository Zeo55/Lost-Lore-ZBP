{
	onModifyDamage(damage, source, target, move) {
		let modifier = [4096, 4096];
		if (move && target.getMoveHitData(move).typeMod > 0) {
			modifier = this.chainModify([5120, 4096]);
		}
		if (move && move.type === "Psychic") {
			this.chainModify([6144, 4096]);
		}
		return modifier;
	},
	flags: {},
	name: "Shadow Boost",
	rating: 5.0,
	num: 9999,
}