{
    num: 2303,
    accuracy: 90,
    basePower: 0,
    category: "Status",
    name: "Soul Leech",
    pp: 10,
    priority: 0,
    flags: {protect: 1, reflectable: 1, mirror: 1, metronome: 1},
    onHit(target, source) {
        if (target.volatiles['soulleech']) return false;
        target.addVolatile('soulleech', source);
    },
    secondary: null,
    target: "allAdjacentFoes",
    type: "Dark",
    contestType: "Beautiful",
}