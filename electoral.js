var red = document.getElementsByTagName('path')
let classNames = ['redState', 'blueState']
let buttonClass = ['redButton', 'blueButton']
let redCount = 0
let blueCount = 0

var electoralVotes = [{state: "AL", votes: 9},
                {state: "AK", votes: 3},    
                {state: "AZ", votes: 11},
                {state: "AR", votes: 6},
                {state: "CA", votes: 55},
                {state: "CO", votes: 9},
                {state: "CT", votes: 7},
                {state: "DC", votes: 3},
                {state: "DE", votes: 3},
                {state: "FL", votes: 29},
                {state: "GA", votes: 16},
                {state: "HI", votes: 4},
                {state: "ID", votes: 4},
                {state: "IL", votes: 20},
                {state: "IN", votes: 11},
                {state: "IA", votes: 6},
                {state: "KS", votes: 6},
                {state: "KY", votes: 8},
                {state: "LA", votes: 8},
                {state: "ME", votes: 4}, //Not Split Yet
                {state: "MD", votes: 10},
                {state: "MA", votes: 11},
                {state: "MI", votes: 16},
                {state: "MN", votes: 10},
                {state: "MS", votes: 6},
                {state: "MO", votes: 10},
                {state: "MT", votes: 3},
                {state: "NE", votes: 5}, //Not Split Yet
                {state: "NV", votes: 6},
                {state: "NH", votes: 4},
                {state: "NJ", votes: 14},
                {state: "NM", votes: 5},
                {state: "NY", votes: 29},
                {state: "NC", votes: 15},
                {state: "ND", votes: 3},    
                {state: "OH", votes: 18},
                {state: "OK", votes: 7},
                {state: "OR", votes: 7},    
                {state: "PA", votes: 20},
                {state: "RI", votes: 4},
                {state: "SC", votes: 9},    
                {state: "SD", votes: 3},
                {state: "TN", votes: 11},
                {state: "TX", votes: 38},    
                {state: "UT", votes: 6},
                {state: "VT", votes: 3},
                {state: "VA", votes: 13},    
                {state: "WA", votes: 12},
                {state: "WV", votes: 5},
                {state: "WI", votes: 10},    
                {state: "WY", votes: 3}]

for(let i=0; i<red.length; i++){
    red[i].addEventListener('click', toggleRed)
}

function toggleRed() {
    if (this.classList == 'redState')
    {
        this.classList.remove('redState')
        color = 'blueState'
    }
    else if (this.classList == 'blueState')
    {
        this.classList.remove('blueState')
        color = 'state'
    }
    else
    {
        this.classList.remove('state')
        color = 'redState'
    }
    classNames.push(color)
    this.classList.add(color)
    
    if(this.getAttribute('id') == 'ME')
    {
        let button1 = document.getElementsByTagName('button')[0]
        let button2 = document.getElementsByTagName('button')[1]
        button1.classList.remove('redState')
        button2.classList.remove('redState')
        button1.classList.remove('blueState')
        button2.classList.remove('blueState')
        button1.classList.remove('state')
        button2.classList.remove('state')
        classNames.push(color)
        console.log(color)
        button1.classList.add(color)
        button2.classList.add(color)
    }

    if(this.getAttribute('id') == 'NE')
    {
        let button1 = document.getElementsByTagName('button')[2]
        let button2 = document.getElementsByTagName('button')[3]
        let button3 = document.getElementsByTagName('button')[4]
        button1.classList.remove('redState')
        button2.classList.remove('redState')
        button3.classList.remove('redState')
        button1.classList.remove('blueState')
        button2.classList.remove('blueState')
        button3.classList.remove('blueState')
        button1.classList.remove('state')
        button2.classList.remove('state')
        button3.classList.remove('state')
        classNames.push(color)
        console.log(color)
        button1.classList.add(color)
        button2.classList.add(color)
        button3.classList.add(color)
    }

    countRed()
    countBlue()
}

function countRed() {
    redCount = 0
    for(let i=0; i<red.length; i++){
        for(j in electoralVotes){
            if (red[i].getAttribute('class') == 'redState') {
                if (red[i].getAttribute('id') == electoralVotes[j]['state']) {
                    state = electoralVotes[j]['state']
                    redCount += electoralVotes[j]['votes']
                }  
            }  
        }
    }
    let row = document.getElementById('totalRow')
    let cell = document.getElementById('redTotal')
    cell.innerHTML = redCount
    row.insertBefore(cell, row.children[1]);
}

function countBlue() {
    blueCount = 0
    for(let i=0; i<red.length; i++){
        for(j in electoralVotes){
            if (red[i].getAttribute('class') == 'blueState') {
                if (red[i].getAttribute('id') == electoralVotes[j]['state']) {
                    state = electoralVotes[j]['state']
                    blueCount += electoralVotes[j]['votes']
                }  
            }  
        }
    }
    let row = document.getElementById('totalRow')
    let cell = document.getElementById('blueTotal')
    cell.innerHTML = blueCount
    row.appendChild(cell);
}

function buttonClick(buttonNum, abbrev) {
    let temp = document.getElementsByTagName('button')[buttonNum]
    let temp2 = document.getElementById(abbrev)

    if (temp.classList == 'redState')
    {
        temp.classList.remove('redState')
        color = 'blueState'
    }
    else if (temp.classList == 'blueState')
    {
        temp.classList.remove('blueState')
        color = 'state'
    }
    else
    {
        temp.classList.remove('state')
        color = 'redState'
    }
    classNames.push(color)
    temp.classList.add(color)

    if (temp.className != temp2.classList)
    {
        if(temp.className == 'redState')
        {
            if (blueCount != 0)
                blueCount--
            redCount++
        }

        else
        {
            blueCount++
            if (redCount != 0)
                redCount--
        }
        let row = document.getElementById('totalRow')
        let cell = document.getElementById('redTotal')
        cell.innerHTML = redCount
        row.appendChild(cell);
        row = document.getElementById('totalRow')
        cell = document.getElementById('blueTotal')
        cell.innerHTML = blueCount
        row.appendChild(cell);
    }
    else
    {
        countRed()
        countBlue()
    }
}