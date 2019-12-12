// OBECTIVE: 1.2 - Write code that interacts with UI control
(function () {
    console.log('getElementById', document.getElementById('first-heading').innerText)
    console.log('getElementByClassName', [...document.getElementsByClassName('headings')].map(item => item.innerText).join(', '))
    console.log('getElementByTagName', [...document.getElementsByTagName('h1')].map(item => item.innerText).join(', '))
    console.log('querySelector', document.querySelector('#first-heading').innerText)
    console.log('querySelectorAll', [...document.querySelectorAll('h1')].map(item => item.innerText).join(', '))

    // Add and remove elements
    // will remove in 3 seconds
    const changeTextInterval = setInterval(() => {
        const $counterElement = document.querySelector('#to-remove__counter')
        let value = parseInt($counterElement.innerText);
        $counterElement.innerText = --value

        if (value === 0) {
            clearInterval(changeTextInterval)
        }

    }, 1000)

    const removeTextTimeout = setTimeout(() => {
        document.querySelector('#to-remove').remove()

        clearTimeout(removeTextTimeout)
    }, 6000)

    // create elements
    const $newDiv = document.createElement('div')
    $newDiv.setAttribute('id', 'new-div')
    $newDiv.setAttribute('class', 'javascript-item')
    $newDiv.innerText = "Este item foi apendado via JS"

    document.body.appendChild($newDiv)

    // Childs
    const $body = document.body
    console.log('firstChild', $body.firstChild)
    console.log('lastChild', $body.lastChild)
    console.log('childNodes', $body.childNodes.length)
    console.log('hasChildNodes', $body.hasChildNodes())

    // Video control
    const $video = document.querySelector('#video')
    const $videoPause = document.querySelector('#video__control__pause')
    const $videoPlay = document.querySelector('#video__control__play')
    const $videoAdvance = document.querySelector('#video__control__advance')
    const $videoRewind = document.querySelector('#video__control__rewind')

    $videoPause.addEventListener('click', () => {
        $video.pause()
    })

    $videoPlay.addEventListener('click', () => {
        $video.play()
    })

    $videoAdvance.addEventListener('click', () => {
        $video.currentTime += 1
    })

    $videoRewind.addEventListener('click', () => {
        $video.currentTime -= 1
    })

    // Canvas
    const $canvas = document.querySelector('#canvas')
    const $canvasContext = $canvas.getContext('2d')

    $canvasContext.beginPath()
    $canvasContext.lineWidth = 1;
    $canvasContext.strokeStyle = '#000'

    let drawFirstLineCounter = 0
    let drawFirstLineAnguleCunter = 0
    $canvasContext.moveTo(0, 0) // x, y
    const $canvasFirstLineDrawInterval = setInterval(() => {
        $canvasContext.lineTo(drawFirstLineAnguleCunter, drawFirstLineCounter) // x, y
        $canvasContext.stroke()
        drawFirstLineCounter++
        drawFirstLineAnguleCunter++

        if (drawFirstLineCounter === 100) {
            clearInterval($canvasFirstLineDrawInterval)
        }
    }, 10)

    $canvasContext.beginPath()
    $canvasContext.lineWidth = 1;
    $canvasContext.strokeStyle = '#f00'
    let drawSecondLineCunter = 300
    let drawSecondLineAnguleCounter = 100
    const waitDrawFirstLine = setTimeout(() => {
        const $canvasSecondLineDrawInterval = setInterval(() => {
            $canvasContext.lineTo(drawSecondLineCunter, drawSecondLineAnguleCounter);
            $canvasContext.stroke()
            drawSecondLineCunter++
            drawSecondLineAnguleCounter--


            if (drawSecondLineAnguleCounter === 0) {
                clearInterval($canvasSecondLineDrawInterval)
            }
        }, 10)

        clearTimeout(waitDrawFirstLine);
    }, 2000)

    // Filled triangle
    // $canvasContext.beginPath();
    // $canvasContext.moveTo(25,25);
    // $canvasContext.lineTo(105,25);
    // $canvasContext.lineTo(25,105);
    // $canvasContext.fill();

    // Stroked triangle
    $canvasContext.beginPath();
    $canvasContext.moveTo(125, 125); // X,Y
    $canvasContext.lineTo(125, 45); // X,Y
    $canvasContext.lineTo(45, 125); // X,Y
    $canvasContext.closePath();
    $canvasContext.stroke();

    // SVG
    const $svgCircle = document.querySelector('#example-svg__circle')
    $svgCircle.addEventListener('mouseover', e => {
        e.target.style.fill = 'red'
    })
    $svgCircle.addEventListener('mouseout', e => {
        e.target.style.fill = 'green'
    })


    // Objective 1.3: Apply styling to HTML elements programmatically
    // Mesma coisa que:
    // e.target.style.fill = 'red'

    // transform
    // transform: scale(1);
    // transform: rotate(30deg);
    // transform: translateY(50px);
})()