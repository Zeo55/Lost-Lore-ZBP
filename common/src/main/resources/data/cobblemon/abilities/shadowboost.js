{
    onBasePowerPriority: 20,
    onBasePower(basePower, source, target, move) {
        if (!move || move.category === 'Status') return;
        let mod = 1;
        if (target.getMoveHitData(move).typeMod > 0) {
            mod *= 1.25;
        }
        if (move.type === "Psychic") {
            mod *= 1.5;
        }
        if (mod !== 1) {
            return this.chainModify(mod);
        }
    },
    flags: {},
    name: "Shadow Boost",
    rating: 5.0,
    num: 9999,
}