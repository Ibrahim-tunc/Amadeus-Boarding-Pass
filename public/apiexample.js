getToken();
function getToken(){
    const url = "https://test.api.amadeus.com/v1/security/oauth2/token";
    $.ajax({  
        type: "POST",  
        url: url,
        dataType: "json",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        data: {
            "grant_type": "client_credentials",
            "client_id": "UdZ7kRNElGObfmqDuQ4mWb3xtiqL53X1",
            "client_secret": "jLF3fDZMKipztjAJ"
        },
        success: function(data, textStatus) {
            var token = data.access_token;
            getFlights(token);
        }
    });
} 
function getFlights(token){
    console.log(token) 
    $.ajax({  
        type: "GET",  
        url: "https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=SYD&destinationLocationCode=BKK&departureDate=2024-01-10&adults=1&nonStop=false&max=250",
        dataType: "json",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        success: function(data, textStatus) {
            console.log(data.data);
        }
    });
}
