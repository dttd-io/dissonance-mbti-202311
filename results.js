const urlParams = new URLSearchParams(window.location.search)
// document.getElementById('cktc-e').textContent = urlParams.get('e')
// document.getElementById('cktc-i').textContent = urlParams.get('i')
// document.getElementById('cktc-s').textContent = urlParams.get('s')
// document.getElementById('cktc-n').textContent = urlParams.get('n')
// document.getElementById('cktc-f').textContent = urlParams.get('f')
// document.getElementById('cktc-t').textContent = urlParams.get('t')
// document.getElementById('cktc-p').textContent = urlParams.get('p')
// document.getElementById('cktc-j').textContent = urlParams.get('j')
// console.log('!!! ' + urlParams.get('e'))

function calculateMBTI(e, i, n, s, t, f, j, p) {
    let mbti = ''

    mbti += e > i ? 'E' : 'I'
    mbti += n > s ? 'N' : 'S'
    mbti += t > f ? 'T' : 'F'
    mbti += j > p ? 'J' : 'P'

    return mbti
}

let eScore = urlParams.get('e')
let iScore = urlParams.get('i')
let nScore = urlParams.get('n')
let sScore = urlParams.get('s')
let tScore = urlParams.get('t')
let fScore = urlParams.get('f')
let jScore = urlParams.get('j')
let pScore = urlParams.get('p')

let allScoreStr =
    '&e=' + eScore + '&i=' + iScore + '&n=' + nScore + '&s=' + sScore + '&t=' + tScore + '&f=' + fScore + '&j=' + jScore + '&p=' + pScore

let userMBTI = calculateMBTI(eScore, iScore, nScore, sScore, tScore, fScore, jScore, pScore)
console.log(userMBTI) // Outputs: ENTJ

// document.getElementById('cktc-type').textContent = userMBTI
//document.getElementById('cktc-form-mbti-type').value = userMBTI;
//console.log(document.getElementById('cktc-form-mbti-type').value);
// const linkUrl = "/gen-avatar?mbtitype=" + userMBTI;

// document.getElementById('cktc-button-01').href = '/gen-avatar?mbtitype=' + userMBTI + '&gender=f' + allScoreStr
// document.getElementById('cktc-link-01').setAttribute('href', '/gen-avatar?mbtitype=' + userMBTI + '&gender=f' + allScoreStr)
// document.getElementById('cktc-button-01').innerHTML = 'Female'
// // console.log(linkUrl);

// document.getElementById('cktc-button-02').href = '/gen-avatar?mbtitype=' + userMBTI + '&gender=m' + allScoreStr
// document.getElementById('cktc-link-02').setAttribute('href', '/gen-avatar?mbtitype=' + userMBTI + '&gender=m' + allScoreStr)
// document.getElementById('cktc-button-02').innerHTML = 'Male'
// // console.log(linkUrl);

var gndr = '' // Declare gndr at the top of your script

function setUpEmailBlock() {
    console.log('setUpEmailBlock()')
    var emailBlock = document.getElementById('email-block')
    emailBlock.style.opacity = 1
    document.getElementById('validate-button').href = '/gen-avatar?mbtitype=' + userMBTI + gndr + allScoreStr
}

// When click on girl banner
document.getElementById('cktc-button-01').addEventListener('click', function () {
    // Set your variable here
    gndr = '&gender=f'
    console.log('Variable set to:', gndr) // For demonstration
    // alert(gndr)
    setUpEmailBlock()
})

document.getElementById('img-female').addEventListener('click', function () {
    // Set your variable here
    gndr = '&gender=f'
    console.log('Variable set to:', gndr) // For demonstration
    // alert(gndr) 
    setUpEmailBlock()
})
// When click on girl banner
document.getElementById('cktc-button-02').addEventListener('click', function () {
    // Set your variable here
    gndr = '&gender=m'
    console.log('Variable set to:', gndr) // For demonstration
    setUpEmailBlock()
})

document.getElementById('img-male').addEventListener('click', function () {
    // Set your variable here
    gndr = '&gender=m'
    console.log('Variable set to:', gndr) // For demonstration
    setUpEmailBlock()
})

// Event listener for the button click
document.getElementById('validate-button').addEventListener('click', function () {
    handleCompletion()
})

var input = document.getElementById('email-input')
input.onkeydown = function (event) {
    if (event.keyCode === 13) {
        event.preventDefault()
        handleCompletion()
    }
}

// Function to validate email
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

function handleCompletion() {
    var emailInput = document.getElementById('email-input').value
    if (validateEmail(emailInput)) {
        console.log('The email address is valid!')
        const url2 =
            'https://mbti-2-b78e9b5d46b6315c92f79a6a1347ef2b.webflow.io/gen-avatar?mbti_type=' +
            userMBTI +
            '&eml=' +
            emailInput +
            gndr +
            '&e=' +
            eScore +
            '&i=' +
            iScore +
            '&n=' +
            nScore +
            '&s=' +
            sScore +
            '&t=' +
            tScore +
            '&f=' +
            fScore +
            '&j=' +
            jScore +
            '&p=' +
            pScore
        console.log(url2)
        // alert(url2)

        window.location.href = url2 // Redirect to url2
    } else {
        alert('The email address is not valid!')
    }
}

document.getElementById('validate-button').addEventListener('click', handleCompletion)
