
let cards_data = {
	skeleton : {
		kind : 'monster',
		name : 'Skeleton',
		image : 'images/skeleton.jpg',
		stats : [3,1],
		rules : trigger(['when this is destroyed',],// keyword('destroyed')],
				'opponent may play this monster'),
	},
	demon_wisp : {
		kind : 'monster',
		name : 'Demon Wisp',
		image : 'images/demon_wisp.jpg',
		stats: [1,1],
		rules : trigger(['when this is ', keyword('destroyed')],
			['deal 2 ', keyword('damage'), ' to opponent']),
	},
}

let card_mode_pairs = [
	['skeleton', 'demon_wisp'],
]


let data_root = "./2022_KB18CardJam/";

make_set(data_root, cards_data, card_mode_pairs);


