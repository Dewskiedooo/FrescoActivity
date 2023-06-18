/**
 * Week 8 - Getting Values via JS
 * DEWEY C. FRESCO <dewey.fresco@cvsu.edu.ph>
 * June 18, 2023 
 */

// NEW ORDERS
async function getNewOrder(){
    //Get data from backend using get API
    const response = await fetch('http://localhost:8080/getvalue');

    //Convert the data to JSON Object
    const jsonData = await response.json();

    //Set the data in the html element
    document.getElementById("new_orders").innerHTML = jsonData.new_orders;
}

// BOUNCE RATE
async function getBounceRate(){
    //Get data from backend using get API
    const response = await fetch('http://localhost:8080/getvalue');

    //Convert the data to JSON Object
    const jsonData = await response.json();

    //Set the data in the html element
    document.getElementById("bounce_rate").innerHTML = jsonData.bounce_rate;
}

// USER COUNT
async function getUserCount(){
    //Get data from backend using get API
    const response = await fetch('http://localhost:8080/getvalue');

    //Convert the data to JSON Object
    const jsonData = await response.json();

    //Set the data in the html element
    document.getElementById("user_count").innerHTML = jsonData.user_count;
}

// UNIQUE VISITORS
async function getUniqueVisitors(){
    //Get data from backend using get API
    const response = await fetch('http://localhost:8080/getvalue');

    //Convert the data to JSON Object
    const jsonData = await response.json();

    //Set the data in the html element
    document.getElementById("unique_visitors").innerHTML = jsonData.unique_visitors;
}


/**
 * get data from the dashboard
 */

function getDashboardData(){
    //getting new orders
    getNewOrder()

    //getting bounce rate
    getBounceRate()

    //getting user count
    getUserCount()

    //getting unique visitors
    getUniqueVisitors()


}



window.onload = getDashboardData;
