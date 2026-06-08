{
	name: "Frosty Winds",
	num: 2102,
	rating: 3.5,
	flags: {},
	onBasePowerPriority: 19,
	onBasePower(basePower, attacker, defender, move) {
		if (move.flags['wind']) {
			return this.chainModify(1.5);
		}
	},
	onAnyModifyAccuracyPriority: -1,
    onAnyModifyAccuracy(accuracy, target, source, move) {
    	if (move.flags['wind']) {
    		return this.chainModify([4506, 4096]);
    	}
    }
}