{
    name: "Ancient Horrors",
    num: 2301,
    rating: 4.5,
    flags: {},
    onModifyMove(move, source) {
        if (!this.effectState.used && move.selfdestruct === "always") {
            move.selfdestruct = false;
        }
    },
    onAfterMove(source, target, move) {
        if (this.effectState.used) return;
        if (move.id === 'explosion' || move.id === 'selfdestruct') {
            this.effectState.used = true;
            this.add('-activate', source, 'ability: Ancient Horrors');
            const targetHP = Math.floor(source.maxhp / 10);
            if (source.hp > targetHP) {
                this.directDamage(source.hp - targetHP, source);
            }
        }
    }
}