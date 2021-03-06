const bohrRadius = 50;
const bohrRadiusDash = 150;

prob_1s = (r) => {
	return 2 * r/bohrRadius * Math.exp(-2 * r/bohrRadius);
}

prob_1s_dash = (r) => {
	return 2 * r/bohrRadiusDash * Math.exp(-2 * r/bohrRadiusDash);
}

prob_2s = (r) => {
	let temp = 0.399 * r/bohrRadius * (1 - r/(2* bohrRadius)) * Math.exp(-r/(2*bohrRadius));
	return temp*temp;
}

prob_2p = (r,alpha) => {
	if (alpha != undefined) {
		let temp = 0.099 * ((r* Math.cos(alpha))/bohrRadius) * Math.exp(-r/(2*bohrRadius));
		return temp*temp;
	} else {
		return prob_2p(r,0);
	}
}

let total_prob_2p = (r) => {
	let value = 0;
	for (let k=0; k<=Math.PI; k+= 0.1) {
		value += prob_2p(r,k);
	}
	return value;
}

let probability_matrix_1s = [];
let probability_matrix_1s_dash = [];
let probability_matrix_2s = [];
let probability_matrix_2p = [];

// for (let i=1; i<1600; i++) {
// 	let prob = prob_1s(i) * 5000;
// 	for (let j=0; j<prob; j++) {
// 		probability_matrix_1s.push(i);
// 	}

// 	let prob_dash = prob_1s_dash(i) * 5000;
// 	for (let j=0; j<prob_dash; j++) {
// 		probability_matrix_1s_dash.push(i);
// 	}

// 	let prob2s = prob_2s(i)*5000;
// 	for (let j=0; j<prob2s; j++) {
// 		probability_matrix_2s.push(i);
// 	}

// 	for (let alpha=-Math.PI; alpha<Math.PI; alpha+= 0.01) {
// 		let prob2p = prob_2p(i,alpha) * 50000;
// 		for (let j=0; j<prob2p; j++) {
// 			probability_matrix_2p.push({
// 				r: i,
// 				alpha: alpha
// 			});
// 		}
// 	}
// }

// for (let i=0; i<2500; i++) {
// 	let r = probability_matrix_1s[Math.floor((Math.random() * probability_matrix_1s.length))];
// 	let alpha = Math.random() * 2 *Math.PI;
// 	electrons_1s.push({
// 		r: r,
// 		alpha:alpha
// 	});

// 	let r_dash = probability_matrix_1s_dash[Math.floor((Math.random() * probability_matrix_1s_dash.length))];
// 	let alpha_dash = Math.random() * 2 *Math.PI;
// 	electrons_1s_dash.push({
// 		r: r_dash,
// 		alpha:alpha_dash
// 	});

// 	let r2 = probability_matrix_2s[Math.floor((Math.random() * probability_matrix_2s.length))];
// 	let alpha2 = Math.random() * 2 *Math.PI;
// 	electrons_2s.push({
// 		r: r2,
// 		alpha:alpha2
// 	});

// 	electrons_2p.push(probability_matrix_2p[Math.floor((Math.random() * probability_matrix_2p.length))]);
// }

let fn = (z,c1) => { 
	let c  = Math.sqrt(c1);
	let denom = 2 * bohrRadius * Math.log((z*0.099)/(bohrRadius*c));
	let cos_theta = z/denom;
	return Math.acos(cos_theta);
}

// function downloadObjectAsJson(exportObj, exportName) {
//     var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
//     var downloadAnchorNode = document.createElement('a');
//     downloadAnchorNode.setAttribute("href", dataStr);
//     downloadAnchorNode.setAttribute("download", exportName + ".json");
//     document.body.appendChild(downloadAnchorNode); // required for firefox
//     downloadAnchorNode.click();
//     downloadAnchorNode.remove();
// }
