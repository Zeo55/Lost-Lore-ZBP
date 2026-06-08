{
    name: "Hall of Mirrors",
    num: 2103,
    rating: 4,
    flags: {},
    onTryHit(target, source, move) {
        if (target !== this.effectState.target) return;
        if (this.randomChance(1, 10)) {
            this.add('-activate', target, 'ability: Hall of Mirrors');
            this.add('-miss', source, target);
            source.addVolatile('confusion');
            return null;
        }
    }
}