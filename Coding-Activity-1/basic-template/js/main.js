console.log("Hello!  This is your javascript file."); 
let dumDate = new Date ()
dumDate.setDate()
let dummyArrayData = [
    {
        sleepQuality: 7,
        sleepLength: 7,
        journal: 'I had so much fun today!',
        hadFun: true,
        hadRelaxation: false,
        date: "Tue Sep 03 2024"
    },
    {
        sleepQuality: 4,
        sleepLength: 2,
        journal: 'I had so little fun today!',
        hadFun: false,
        hadRelaxation: false,
        date: "Mon Sep 02 2024"
    },
    {
        sleepQuality: 10,
        sleepLength: 8,
        journal: 'I had so much relaxation today!',
        hadFun: false,
        hadRelaxation: true,
        date: "Sun Sep 01 2024"
    },
    {
        sleepQuality: 10,
        sleepLength: 10,
        journal: 'I had so much fun and relaxation today!',
        hadFun: true,
        hadRelaxation: true,
        date: "Sat Sep 31 2024"
    }
];

let createNewEntry = ( sleepQuality, sleepLength, hadFun, hadRelaxation, journal ) => {
    if ( dummyArrayData.length === 4 ) {
        dummyArrayData.push({});
    }
    let date = new Date();

    let newEntry = document.getElementById('newEntry');

    if ( newEntry ) {
        newEntry.remove();
    }

    let todayEntry = { 
        date: date,
        sleepLength: Number(sleepLength.value),
        sleepQuality: Number(sleepQuality.value),
        hadFun: hadFun.value,
        hadRelaxation: hadRelaxation.value,
        journal: journal.value
    };

    let node = createElement( todayEntry );
    node.id = 'newEntry';
    let parentElement = document.getElementById( 'postedEntries' );
    dummyArrayData[4] = todayEntry;

    parentElement.prepend(node);
    addSVG( sleepLength.value ) 
    computeAvg();
}

let computeAvg = ( ) => {
    let sleepTotal = 0;
    let funTotal = 0;
    let relaxationTotal = 0;

    dummyArrayData.forEach( ( item ) => {
        sleepTotal += item.sleepLength 
        if ( item.hadFun === 'on' || item.hadFun  === true   ) {
            funTotal++
        } 
        if ( item.hadRelaxation === 'on' || item.hadRelaxation === true ) {
            relaxationTotal++
        } 
    } );

    let sleepAvg = sleepTotal / dummyArrayData.length;

    createAvgHtml(sleepAvg, funTotal, relaxationTotal, dummyArrayData.length);
};

let createAvgHtml = ( sleepAvg, funTotal, relaxationTotal, days ) =>  {
    let test = document.getElementById('avg')
    if ( test ) {
        test.remove();
    }
    const node = document.createElement( 'div' );
    node.id = 'avg';

    let sleep = document.createElement( 'p' );
    sleep.textContent = "Sleep Hours Average: " + sleepAvg;

    let fun = document.createElement( 'p' );
    fun.textContent = "Fun So Far: " + funTotal;

    let relaxation = document.createElement( 'p' );
    relaxation.textContent = "Relaxation So Far: " + relaxationTotal;

    let totalDaysCounted = document.createElement( 'p' );
    totalDaysCounted.textContent = "Total Days So Far: " + days;





    node.appendChild(sleep);
    node.appendChild(fun);
    node.appendChild(relaxation);
    node.appendChild(totalDaysCounted);

    let parentElement = document.getElementById('parentAvg');
    parentElement.appendChild(node);


    
}

let addSVG = ( sleepLength ) => {
    let svgParentElement = document.getElementById('svg');
    let dumBar = document.getElementById('test')
    let dumberBar = document.getElementById('dumb')
    if ( dumBar ) {
        dumBar.remove();
    }

    if ( dumberBar ) {
        dumberBar.remove();
    }
    // ChatGPT helped me with this to create the SVG and then prepend it
    // Needed to tweak it to be able to have it fit into my design
    const backgroundBar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    backgroundBar.setAttribute('x', '50');        // x-coordinate
    backgroundBar.setAttribute('y', '0');        // y-coordinate
    backgroundBar.setAttribute('width', '320');   // width of the rectangle
    backgroundBar.setAttribute('height', '20');  // height of the rectangle
    // backgroundBar.setAttribute('fill', '#66ff66'); // fill color
    backgroundBar.classList.add('background-bar');
    backgroundBar.id = 'dumb'
    const bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    // Set the attributes for the <rect> element
    bar.setAttribute('x', '50');        // x-coordinate
    bar.setAttribute('y', '0');        // y-coordinate
    let width = sleepLength * 40;
    bar.setAttribute('width', width);   // width of the rectangle
    bar.setAttribute('height', '20');  // height of the rectangle
    // bar.setAttribute('fill', '#66ff66'); // fill color
    bar.classList.add('bar');
    bar.id = 'test'
    

    // Append the <rect> element to the SVG
    svg.prepend(bar);
    svg.prepend(backgroundBar);
    
};

let submitCallback = ( event ) => {
    event.preventDefault();

    let sleepQuality = document.getElementById('sleepQuality');
    let sleepLength = document.getElementById('sleepLength');
    let hadFun = document.getElementById('fun');
    let hadRelaxation = document.getElementById('relaxing');
    let journal = document.getElementById('journalText');

    createNewEntry(sleepQuality, sleepLength, hadFun, hadRelaxation, journal);
}

const submitElement = document.getElementById('form');

submitElement.addEventListener("submit", submitCallback, false);

let createElement = ( entry ) => {
    const node = document.createElement( 'div' );
    node.classList.add( 'entry' );

    const sleepQualityNode = document.createElement( 'p' );
    sleepQualityNode.textContent = 'Sleep Quality: ' + entry.sleepQuality;

    const sleepLengthNode = document.createElement( 'p' );
    sleepLengthNode.textContent = 'Sleep Length: ' + entry.sleepLength;

    const relaxationNode = document.createElement( 'p' );
    relaxationNode.textContent = 'Had Relaxation: ' + entry.hadRelaxation;

    const funNode = document.createElement( 'p' );
    funNode.textContent = 'Had Fun: ' + entry.hadFun;

    const journalNode = document.createElement( 'p' );
    journalNode.textContent = entry.journal;


    const date = document.createElement( 'p' );
    date.textContent = "Date of Entry: " + entry.date;

    node.appendChild(date);
    node.appendChild(sleepQualityNode);
    node.appendChild(sleepLengthNode);
    node.appendChild(relaxationNode);
    node.appendChild(funNode);
    node.appendChild(journalNode);

    return node
}


let addDummyData = ( ) => {
    let parentElement = document.getElementById( 'postedEntries' );
    dummyArrayData.forEach( ( entry ) => {
        let node = createElement( entry );
        parentElement.appendChild(node)
    } )

    computeAvg()
}

addDummyData();