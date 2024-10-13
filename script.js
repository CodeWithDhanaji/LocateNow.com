function getLocation() {
    const status = document.getElementById('status');
    const location = document.getElementById('location');

    if (!navigator.geolocation) {
        status.innerHTML = "Geolocation is not supported by your browser.";
        return;
    }

    status.innerHTML = "Locating...";
    
    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        status.innerHTML = '';
        location.innerHTML = `Latitude: ${latitude} <br> Longitude: ${longitude}`;
    }

    function error() {
        status.innerHTML = "Unable to retrieve your location.";
    }
}
