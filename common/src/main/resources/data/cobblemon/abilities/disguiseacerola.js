{
  name: "Disguise Acerola",
  rating: 3.5,
  num: 1401,
  flags: {
    failroleplay: 1,
    noreceiver: 1,
    noentrain: 1,
    notrace: 1,
    failskillswap: 1,
    cantsuppress: 1,
    breakable: 1,
    notransform: 1
  },
  onDamagePriority: 1,
  onDamage(damage, target, source, effect) {
    if (effect?.effectType === "Move" && ["mimikyu", "mimikyuacerola"].includes(target.species.id)) {
      this.add("-activate", target, "ability: Disguise Acerola");
      this.effectState.busted = true;
      return 0;
    }
  },
  onCriticalHit(target, source, move) {
    if (!target)
      return;
    if (!["mimikyu", "mimikyuacerola"].includes(target.species.id)) {
      return;
    }
    const hitSub = target.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
    if (hitSub)
      return;
    if (!target.runImmunity(move.type))
      return;
    return false;
  },
  onEffectiveness(typeMod, target, type, move) {
    if (!target || move.category === "Status")
      return;
    if (!["mimikyu", "mimikyuacerola"].includes(target.species.id)) {
      return;
    }
    const hitSub = target.volatiles["substitute"] && !move.flags["bypasssub"] && !(move.infiltrates && this.gen >= 6);
    if (hitSub)
      return;
    if (!target.runImmunity(move.type))
      return;
    return 0;
  },
  onUpdate(pokemon) {
    if (["mimikyu", "mimikyuacerola"].includes(pokemon.species.id) && this.effectState.busted) {
      const speciesid = pokemon.species.id === "mimikyutotem" ? "Mimikyu-Busted-Totem" : "Mimikyu-Busted";
      pokemon.formeChange(speciesid, this.effect, true);
      this.damage(pokemon.baseMaxhp / 8, pokemon, pokemon, this.dex.species.get(speciesid));
    }
  },
}