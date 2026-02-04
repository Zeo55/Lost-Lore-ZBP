{
  num: 999,
  accuracy: true,
  basePower: 200,
  category: "Physical",
  isNonstandard: "Past",
  name: "Kaiju Cataclysm",
  pp: 1,
  priority: 0,
  flags: {contact: 1, bypasssub: 1},
  isZ: "blacktyranitariumz",
  onHit() {
    this.field.clearTerrain();
  },
  onAfterSubDamage() {
    this.field.clearTerrain();
  },
  secondaries: [
    {
      chance: 100,
      volatileStatus: 'flinch',
    },
    {
      chance: 100,
      self: {
        boosts: {
          def: 1,
          spd: 1,
        },
      },
    },
  ],
  target: "allAdjacent",
  type: "Rock",
}