class PlaceFinder {
  constructor() {
    const addressForm = document.querySelector("form");
    const locateUserBtn = document.getElementById("locate-btn");

    locateUserBtn.addEventListener("click", this.locateUserHandler);
    addressForm.addEventListener("submit", this.findAddressHandler);
  }

  locateUserHandler() {
    // navigator.geolocation? -> MDN geolocation
    if (!navigator.geolocation) {
      alert("位置情報が使えないよ。。");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (successResult) => {
        console.log(successResult);
        const coordinates = {
          lat: successResult.coords.latitude,
          lng: successResult.coords.longitude
        };
        console.log(coordinates);
      },
      (error) => {
        alert('位置情報が得られませんでした。手動入力してください。。');
      }
    );
  }

  findAddressHandler() {}
}

new PlaceFinder();
