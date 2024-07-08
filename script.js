function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 59.33258, lng: 18.0649 },
    zoom: 12,
    mapId: "4fc65eb1725409dd",
  });

  const icon = {
    url: "images/marker.png",
    scaledSize: new google.maps.Size(55, 100),
  };

  const marker = new google.maps.Marker({
    map: map,
    position: { lat: 59.332585805600544, lng: 18.064583798565437 },
    title: "welcome",
    icon: icon,
  });
}
