module.exports = function toReadable (number) {
	let Num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
	let res = Math.floor(Math.log(number));
	return (number / Math.pow(res).toFixed(2) + " " + Num[res])
}