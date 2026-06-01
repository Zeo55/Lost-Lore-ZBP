{
    name: 'soulleech',
    effectType: 'VolatileStatus',
    onStart(target, source) {
        this.add('-start', target, 'Soul Leech');
        this.effectState.source = source;
        this.effectState.target = target;
    },
    onTrapPokemon(pokemon) {
        if (!this.effectState.source || this.effectState.source.fainted) return;
        return true;
    },
    onTrapMove(pokemon) {
        return true;
    },
    onSwitchOut(pokemon) {
        if (pokemon === this.effectState.source) {
            if (this.effectState.target?.volatiles?.['soulleech']) {
                this.effectState.target.removeVolatile('soulleech');
                this.add('-end', this.effectState.target, 'Soul Leech');
            }
        }
    },
    onResidualOrder: 9,
    onResidual(target) {
        const source = this.effectState.source;
        if (!source || source.fainted || !target.hp) return;
        if (!source.isActive || !target.isActive) return;
        const damage = this.damage(target.baseMaxhp / 8, target);
        if (damage) {
            this.heal(damage, source);
        }
    },
    onEnd(target) {
        this.add('-end', target, 'Soul Leech');
    }
}