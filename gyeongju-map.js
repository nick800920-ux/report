(function () {
  "use strict";

  const days = [
    {
      id: 1,
      color: "#278052",
      stops: [
        ["경주역", 35.798523, 129.140071],
        ["대릉원·천마총", 35.838948, 129.211932],
        ["황리단길", 35.838899, 129.209800],
        ["첨성대", 35.834704, 129.218985],
        ["동궁과 월지", 35.834700, 129.226438]
      ]
    },
    {
      id: 2,
      color: "#2474a5",
      stops: [
        ["불국사", 35.788995, 129.330890],
        ["석굴암", 35.794803, 129.349195],
        ["경춘재", 35.786915, 129.326746],
        ["보문호", 35.844763, 129.277383],
        ["월정교", 35.829257, 129.218137]
      ]
    },
    {
      id: 3,
      color: "#8656ad",
      stops: [
        ["국립경주박물관", 35.828995, 129.227966],
        ["교촌마을", 35.831115, 129.214181],
        ["황리단길", 35.838899, 129.209800],
        ["경주역", 35.798523, 129.140071]
      ]
    }
  ];

  for (const day of days) {
    const link = document.getElementById(`directions-${day.id}`);
    if (link) {
      const names = day.stops.map(stop => stop[0]);
      const params = new URLSearchParams({
        api: "1",
        origin: names[0] + " 경주",
        destination: names[names.length - 1] + " 경주",
        waypoints: names.slice(1, -1).map(name => name + " 경주").join("|"),
        travelmode: "driving"
      });
      link.href = `https://www.google.com/maps/dir/?${params.toString()}`;
    }
  }

  if (!window.L) {
    document.querySelectorAll(".trip-map").forEach(node => {
      node.textContent = "지도를 불러오지 못했습니다. 아래 ‘실제 길찾기 열기’를 이용해 주세요.";
      node.style.padding = "20px";
    });
    return;
  }

  for (const day of days) {
    const map = L.map(`trip-map-${day.id}`, { scrollWheelZoom: false });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    const points = day.stops.map(stop => [stop[1], stop[2]]);
    L.polyline(points, {
      color: day.color,
      weight: 4,
      opacity: 0.85,
      dashArray: "8 7"
    }).addTo(map);

    day.stops.forEach((stop, index) => {
      const icon = L.divIcon({
        className: "",
        html: `<span class="map-stop" style="background:${day.color}">${index + 1}</span>`,
        iconSize: [28, 28],
        iconAnchor: [14, 14]
      });
      L.marker([stop[1], stop[2]], { icon })
        .bindPopup(`<strong>${index + 1}. ${stop[0]}</strong>`)
        .addTo(map);
    });
    map.fitBounds(points, { padding: [28, 28], maxZoom: 15 });
  }
})();
