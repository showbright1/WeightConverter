/**
 * Weight converter
 * Author: Suhas Bhosale (+91 8055 55 2554)
 * Convert weight from to kilograms, grams, pounds, ounces, stone
 */
var kgInput, gramsInput, poundsInput, ouncesInput, stoneInput;
var kg, grams, pounds, ounces, stone;

/**
 * Initialize the weight converter app
 */
function init() {
	getElements()
	addListeners()
}

/**
 * Get html elements
 */
function getElements() {
	kgInput = document.getElementById('kgInput')
	gramsInput = document.getElementById('gramsInput')
	poundsInput = document.getElementById('poundsInput')
	ouncesInput = document.getElementById('ouncesInput')
	stoneInput = document.getElementById('stoneInput')
}


/**
 * Add event listeners to the html elements
 */
function addListeners() {
	kgInput.addEventListener('input', onKgInput)
	gramsInput.addEventListener('input', onGramsInput)
	poundsInput.addEventListener('input', onPoundsInput)
	ouncesInput.addEventListener('input', onOuncesInput)
	stoneInput.addEventListener('input', onStoneInput)
}

/**
 * Remove event listeners from the html elements
 */
function removeListeners() {
	kgInput.removeEventListener('input', onKgInput)
	gramsInput.removeEventListener('input', onGramsInput)
	poundsInput.removeEventListener('input', onPoundsInput)
	ouncesInput.removeEventListener('input', onOuncesInput)
	stoneInput.removeEventListener('input', onStoneInput)
}

// Event handlers
function onKgInput(ev) {
	kg = ev.target.value
	convertWeight()
}

function onGramsInput(ev) {
	kg = ev.target.value / 1000
	convertWeight()
}

function onPoundsInput(ev) {
	kg = ev.target.value / 2.2046226218488
	convertWeight()
}

function onOuncesInput(ev) {
	kg = ev.target.value / 35.27396194958
	convertWeight()
}

function onStoneInput(ev) {
	kg = ev.target.value / 0.15747304441777
	convertWeight()
}

/**
 * Convert weight
 */
function convertWeight() {
	grams = kg * 1000
	pounds = kg * 2.2046226218488
	ounces = kg * 35.27396194958
	stone = kg * 0.15747304441777
	updateValues()
}

/**
 * Update values to the html elements
 */
function updateValues() {
	kgInput.value = kg
	gramsInput.value = grams
	poundsInput.value = pounds
	ouncesInput.value = ounces
	stoneInput.value = stone
}

/**
 * Destroy the weight converter app
 */
function destroy() {
	removeListeners()
}


// Add load and unload events for the weight converter app
window.onload = init
window.onunload = destroy
