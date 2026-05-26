{
    name: "Film Script",
    num: 9983,
    rating: 5,
    flags: {},
    onModifyMove(move, source, target) {
        const heroPokemon = [
            'lucario',
            'lucariomega',
            'zoroark',
            'zoroarkhisui',
            'pikachu',
            'pikachuoriginal',
            'pikachuhoenn',
            'pikachusinnoh',
            'pikachuunova',
            'pikachukalos',
            'pikachualola',
            'pikachupartner',
            'pikachuworld',
            'landorus',
            'landorustherian',
            'garchomp',
            'garchompmega',
            'incineroar'
        ];
        if (target && heroPokemon.includes(target.species.id)) {
            move.ignoreImmunity = true;
        }
    },
    onBasePowerPriority: 20,
    onBasePower(basePower, source, target, move) {
        const heroPokemon = [
            'lucario',
            'lucariomega',
            'zoroark',
            'zoroarkhisui',
            'pikachu',
            'pikachuoriginal',
            'pikachuhoenn',
            'pikachusinnoh',
            'pikachuunova',
            'pikachukalos',
            'pikachualola',
            'pikachupartner',
            'pikachuworld',
            'landorus',
            'landorustherian',
            'garchomp',
            'garchompmega',
            'incineroar'
        ];
        if (!target || move.category === 'Status') return;
        if (heroPokemon.includes(target.species.id)) {
            this.add('-activate', source, 'ability: Film Script');
            this.boost({atk: 1, spa: 1, spe: 1}, source, null, true);
            return this.chainModify(2);
        }
    }
}