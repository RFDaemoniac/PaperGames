// uses imperative-html

var {div, span, p, img, br} = HTML;

function keyword(word) {
	return () => span({class: 'keyword'}, word);
}

function trigger(cause, effect) {
	return () => div({class: 'trigger'},
		span({class: 'cause'}, cause),
		span({class: 'effect'}, effect),
	);
}


function mode(data_root, {kind, name, image, stats = null, rules}) {
	let element = div({ class: 'card' },
		span({ class: 'name' }, name),
		img({ class: 'image', src: data_root + image }),
		div({ class: 'rules' }, rules),
		span({ class: ['kind', kind] }, kind),
	);

	if (stats != null) {
		applyToElement(element, 
			div({class : 'stats'},
				span({class : 'attack'}, stats[0]),
				span({class : 'defense'}, stats[1]),
			)
		);
	}
	return element;
}


function card(mode_a, mode_b) {
	return div({class : 'card-wrapper'},
		applyToElement(mode_a, {class: 'card top'}),
		applyToElement(mode_b, {class: 'card bottom'}),
	)
}

function make_set(data_root, cards_data, card_mode_pairs) {
	for (let pair of card_mode_pairs) {
		document.body.appendChild(
			card(mode(data_root, cards_data[pair[0]]),
				mode(data_root, cards_data[pair[1]]),
			)
		);
	}
}

