{
	num: 10108,
	accuracy: true,
	basePower: 0,
	category: "Status",
	name: "Shiny Glare",
	pp: 5,
	priority: 0,
	flags: {reflectable: 1, mirror: 1, metronome: 1},
	onHit(target, source, move) {
		return target.addVolatile('trapped', source, move, 'trapper');
	},
	secondary: null,
	target: "normal",
	type: "Crystal",
	zMove: {boost: {def: 1}},
	contestType: "Beautiful",
}