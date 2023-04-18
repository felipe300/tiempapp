window.addEventListener('load', () => {
	let bigTemp = document.getElementById("bigTemp")
	bigTemp.innerHTML = (Math.random() * (40 - 2) + 2).toFixed(1)
})

function convert (el) {
	let bigTemp = document.getElementById("bigTemp")
	let bigC = document.getElementById("bigC")

	if (!el.checked) {
		bigTemp.innerHTML = ((bigTemp.innerHTML - 32) * 5 / 9).toFixed(1)
		bigC.innerHTML = '°C'
	} else {
		bigTemp.innerHTML = ((bigTemp.innerHTML * 9 / 5) + 32).toFixed(1)
		bigC.innerHTML = '°F'
	}
}