let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")

let homeScore = 0
let guestScore = 0

function guestPlus1() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function guestPlus2() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function guestPlus3() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function homePlus1() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function homePlus2() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function homePlus3() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}