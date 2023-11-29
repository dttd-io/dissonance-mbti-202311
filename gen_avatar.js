// https://cdn.jsdelivr.net/gh/dttd-io/dissonance-mbti-202311/gen_avatar.js

const urlParams = new URLSearchParams(window.location.search)
const mbtiType = urlParams.get('mbti_type')
const gender = urlParams.get('gender')
const email = urlParams.get('eml')
const url = 'https://coh1c0iiff.execute-api.ap-southeast-1.amazonaws.com/Prod/t2i?mbtitype=' + mbtiType + '&gender=' + gender

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
var sd_response_meta = ''

console.log(mbtiType)

if (urlParams.has('img_url')) {
    console.log('Parameter "img_url" exists.')
    loadImage(urlParams.get('img_url'), $('#avatar-image'))
} else {
    console.log('Parameter "img_url" does not exist.')
    fetchData(url)
}

function fetchData(url) {
    fetch(url, {
        method: 'GET',
        //mode: 'cors',
        //signal: controller.signal,
        //headers: {
        //  'Content-Type': 'application/json',
        //  'Origin': 'https://test-20231014.webflow.io'
        //  }
    })
        .then((response) => response.json())
        .then((data) => {
            // Process the response data
            console.log('!!! Some data returned')
            console.log(data)
            const imageUrl = data.body.output[0]
            console.log(imageUrl)

            //  setTimeout(function() {
            // your code here
            //  var img = document.getElementById("avatar-image");
            //  img.src = imageUrl;
            //img.src = "https://d313xg4mt2ic8m.cloudfront.net/generations/0-0777e4a3-4369-4fa2-ad1e-be49c39a55a9.png"
            //  }, 5000);

            for (const key in data.body.meta) {
                if (data.body.meta.hasOwnProperty(key)) {
                    const value = encodeURIComponent(data.body.meta[key])
                    sd_response_meta += `${key}=${value}&`
                }
            }
            sd_response_meta = sd_response_meta.slice(0, -1)

            const imgElement = $('#avatar-image') // Ensure this is a jQuery object.
            loadImage(imageUrl, imgElement)
        })
        .catch((error) => {
            // Handle any errors
            console.error(error)
        })
}
// fetchData(url)

function loadImage(imageUrl, imgElement) {
    const image = new Image()
    image.onload = function () {
        // $(imgElement).hide().attr('src', imageUrl).fadeIn(10000)
        $(imgElement).fadeOut(3000, function () {
            // Fade out over 1000 milliseconds (1 second)
            $(this).attr('src', imageUrl).fadeIn(10000) // After fade-out, change the source and fade in
        })
    }
    image.onerror = function () {
        console.error('Failed to load image:', imageUrl)
        setTimeout(function () {
            loadImage(imageUrl, imgElement)
        }, 7000)
    }
    image.src = imageUrl // This will trigger the load event after the handlers are attached.
}

// Function to validate email
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

function handleCompletion() {
    var emailInput = document.getElementById('emailInput').value
    var imageUrl = document.getElementById('avatar-image').src
    if (validateEmail(emailInput)) {
        console.log('The email address is valid!')
        const url2 =
            'https://coh1c0iiff.execute-api.ap-southeast-1.amazonaws.com/Prod/complete?mbti_type=' +
            mbtiType +
            '&eml=' +
            emailInput +
            '&image_url=' +
            imageUrl +
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

        fetch(url2, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                // Process the response data
                console.log(data)
            })
            .catch((error) => {
                // Handle any errors
                console.error(error)
            })
    } else {
        alert('The email address is not valid!')
    }
}

// Event listener for the button click
// document.getElementById('validateButton').addEventListener('click', function () {
//     handleCompletion()
// })

// var input = document.getElementById('emailInput')
// input.onkeydown = function (event) {
//     if (event.keyCode === 13) {
//         event.preventDefault()
//         handleCompletion()
//     }
// }

const designData = {
    mbtiTypes: [
        {
            mbtiType: 'ISTJ',
            mbtiPersonality: 'The Library Dweller',
            mbtiDesc:
                "You've got more books than friends, and you're totally okay with that. Your idea of a wild night is reorganizing your bookshelf.",
            bgColor: '#222221',
        },
        {
            mbtiType: 'ISFJ',
            mbtiPersonality: 'The Mom Friend',
            mbtiDesc: "You're the one who always has a band-aid, a snack, and a comforting word. Your friends' problems? Consider them solved.",
            bgColor: '#0b1c3e',
        },
        {
            mbtiType: 'INFJ',
            mbtiPersonality: 'The Mystic',
            mbtiDesc:
                "You're so deep, you've got your own submarine. You're always pondering life's big questions, like \"Why are we here?\" and \"What's for dinner?\"",
            bgColor: '#f0cfd1',
        },
        {
            mbtiType: 'INTJ',
            mbtiPersonality: 'The Mastermind',
            mbtiDesc: 'You\'ve got a plan for everything, including world domination. Just kidding... or are we?"',
            bgColor: '#75147c',
        },
        {
            mbtiType: 'ISTP',
            mbtiPersonality: 'The Fixer',
            mbtiDesc: "Give you a paperclip and a piece of gum, and you'll build a rocket. You're always ready for an adventure, or a quick fix.",
            bgColor: '#a1b2bf',
        },
        {
            mbtiType: 'ISFP',
            mbtiPersonality: 'The Indie Artist',
            mbtiDesc:
                "You're so artsy, even your breakfast is a masterpiece. You've got more creativity in your pinky than most people have in their whole body.",
            bgColor: '#c0c0c0',
        },
        {
            mbtiType: 'INFP',
            mbtiPersonality: 'The Dreamy Poet',
            mbtiDesc: "You're always lost in your own world, and it's a pretty awesome place. You've got a heart as big as your imagination.",
            bgColor: '#31715d',
        },
        {
            mbtiType: 'INTP',
            mbtiPersonality: 'The Mad Scientist',
            mbtiDesc: "You're always cooking up new theories. You've got more ideas than you know what to do with, and they're all brilliant.",
            bgColor: '#aea2e8',
        },
        {
            mbtiType: 'ESTP',
            mbtiPersonality: 'The Adrenaline Junkie',
            mbtiDesc: "You're always on the go, seeking the next thrill. Life's a roller coaster, and you're in the front seat.",
            bgColor: '#4f9cbb',
        },
        {
            mbtiType: 'ESFP',
            mbtiPersonality: 'The "Life of the Party"',
            mbtiDesc: "You're always the center of attention, and you wouldn't have it any other way. You've got more energy than a double espresso.",
            bgColor: '#ad2c2b',
        },
        {
            mbtiType: 'ENFP',
            mbtiPersonality: 'The Social Butterfly',
            mbtiDesc:
                "You've never met a stranger, only friends you haven't made yet. You're always up for a good time, especially if it involves meeting new people.",
            bgColor: '#fced6b',
        },
        {
            mbtiType: 'ENTP',
            mbtiPersonality: 'The Debate Club President',
            mbtiDesc: "You love a good argument, but only for the intellectual stimulation. You've got a mind as sharp as a tack and twice as shiny.",
            bgColor: '#f2a93b',
        },
        {
            mbtiType: 'ESTJ',
            mbtiPersonality: 'The CEO',
            mbtiDesc: "You're always in charge, even when you're not. You've got more ambition than a rocket heading to Mars.",
            bgColor: '#4ba5a7',
        },
        {
            mbtiType: 'ESFJ',
            mbtiPersonality: 'The Host with the Most',
            mbtiDesc: "You're always throwing the best parties, and everyone's invited. You've got a heart as big as your guest list.",
            bgColor: '#26479a',
        },
        {
            mbtiType: 'ENFJ',
            mbtiPersonality: 'The Inspirational Coach',
            mbtiDesc:
                "You're always cheering people on, and you believe in them even when they don't. You've got more positivity than a motivational poster.",
            bgColor: '#b9b2a8',
        },
        {
            mbtiType: 'ENTJ',
            mbtiPersonality: 'The Chess Master',
            mbtiDesc: "You're always three steps ahead, and you've got a strategy for everything. You've got more moves than a chess grandmaster.",
            bgColor: '#36443c',
        },
    ],
}

let mbtiPersonality = ''
let mbtiDesc = ''
let bgColor = ''

// Function to find MBTI type and assign values to variables
function findAndAssignMBTIValues(myType) {
    const mbtiTypes = designData.mbtiTypes
    let foundType = mbtiTypes.find((type) => type.mbtiType === myType)

    if (foundType) {
        mbtiPersonality = foundType.mbtiPersonality
        mbtiDesc = foundType.mbtiDesc
        bgColor = foundType.bgColor

        console.log(`MBTI Type: ${myType}`)
        console.log(`Personality: ${mbtiPersonality}`)
        console.log(`Description: ${mbtiDesc}`)
        console.log(`Background Color: ${bgColor}`)
    } else {
        console.log('MBTI Type not found')
    }
}

findAndAssignMBTIValues(mbtiType)

document.addEventListener('DOMContentLoaded', (event) => {
    document.body.style.backgroundColor = bgColor
    document.getElementById('mbti-type').textContent = mbtiType
    document.getElementById('mbti-desc').textContent = mbtiDesc
    document.getElementById('mbti-personality').textContent = mbtiPersonality
})

// todo: add email handling
// todo: check if image url is provided, if yes, just display the image
