{
	num: 2209,
	accuracy: 90,
	basePower: 130,
	category: "Special",
	name: "Unstable Surge",
	pp: 10,
	priority: 0,
	flags: {protect: 1, mirror: 1, gravity: 1, metronome: 1},
	hasCrashDamage: true,
	onMoveFail(target, source, move) {
		this.damage(source.baseMaxhp / 2, source, source, this.dex.conditions.get('Unstable Surge'));
	},
	secondary: null,
	target: "normal",
	type: "Crystal",
	contestType: "Beautiful",
}