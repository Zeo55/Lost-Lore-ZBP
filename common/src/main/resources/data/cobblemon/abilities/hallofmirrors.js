{
    name: "Hall of Mirrors",
    num: 9982,
    rating: 4,
    flags: {},

    onSourceHit(target, source, move) {
        if (source !== this.effectState.target) return;
        if (move.id !== "flashcannon") return;
        this.add('-ability', source, this.effect);
        this.boost({spd: -1}, target, source, null, true);
    }
}