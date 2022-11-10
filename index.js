var guestPoints = 0;
var homePoints = 0;

var homePointsElement = document.getElementById("home_points")
homePointsElement.textContent = homePoints

var guestPointsElement = document.getElementById("guest_points")
guestPointsElement.textContent = guestPoints


function add1(points) {
    if (points == 'home_points'){
        homePoints += 1;
        homePointsElement.textContent = homePoints;
        console.log('homepoint added');
    }else{
        guestPoints += 1;
        guestPointsElement.textContent = guestPoints
        console.log('guestpoint added');

    }
}

function add2(points) {
    if (points == 'home_points'){
        homePoints += 2;
        homePointsElement.textContent = homePoints;
        console.log('homepoint added');
    }else{
        guestPoints += 2;
        guestPointsElement.textContent = guestPoints
        console.log('guestpoint added');

    }
}

function add3(points) {
    if (points == 'home_points'){
        homePoints += 3;
        homePointsElement.textContent = homePoints;
        console.log('homepoint added');
    }else{
        guestPoints += 3;
        guestPointsElement.textContent = guestPoints
        console.log('guestpoint added');

    }
}


document.getElementById('resetBtn').addEventListener('click', ()=>{
    guestPoints = 0;
    homePoints = 0;
    homePointsElement.textContent = homePoints;
    guestPointsElement.textContent = guestPoints;
});