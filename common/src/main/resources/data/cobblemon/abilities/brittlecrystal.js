{
	name: "Brittle Crystal",
	num: 2201,
	rating: 4,
	flags: {},
	onDamagingHitOrder: 1,
	onDamagingHit(damage, target, source, effect) {
		if (!damage) return;
		this.boost({def: -1, spe: 2}, target, target, null, true);
		this.damage(source.baseMaxhp / 8, source, target, null, true);
	}
}