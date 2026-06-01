{
    num: 10990,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Commandment",
    pp: 10,
    priority: 0,
    flags: {protect: 1, mirror: 1, metronome: 1},
    onHit(target, source) {
        const roll = this.random(3);

        if (roll === 0) {
            const healAmount = Math.floor(source.maxhp / 2);
            this.add('-activate', source, 'move: Commandment', '[msg]restoration');
            this.heal(healAmount, source);
        }

        else if (roll === 1) {
            this.add('-activate', source, 'move: Commandment', '[msg]fortification');
            this.boost({def: 1, spd: 1}, source);
        }

        else {
            this.add('-activate', source, 'move: Commandment', '[msg]judgement');
            this.boost({spa: 2}, source);
            source.addVolatile('focusenergy');
        }
    },

    secondary: null,
    target: "allAdjacentFoes",
    type: "Dark",
    zMove: {boost: {def: 1}},
    contestType: "Beautiful",
}