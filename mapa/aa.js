// Crear el mapa
var map = L.map('map').setView([10, 10], 2); // Coordenadas centrales y nivel de zoom


// Añadir capa del mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);
	
	var customIcon = L.icon({
  iconUrl: 'aaa.png', // Reemplaza 'ruta_del_icono.png' con la ruta de tu icono personalizado
  iconSize: [32, 32], // Tamaño del icono
  iconAnchor: [16, 32] // Punto de anclaje del icono (ajustar según el diseño del ícono)
});

var markers = [];

// Añadir marcadores y guardarlos en el array
markers.push(L.marker([-54.8015, -68.3029], { icon: customIcon }).bindPopup("<b>Ushuaia-Tierra del Fuego</b><br><img src='ushuaia.jpeg' width='200px'>").openPopup().addTo(map));
markers.push(L.marker([26.820553, 30.802498], { icon: customIcon }).bindPopup("<b>Las piramides de Egipto-Egipto</b><br><img src='Egipto.jpg' width='200px'>").openPopup().addTo(map));
markers.push(L.marker([43.7230, 10.3966], { icon: customIcon }).bindPopup("<b>Torre Inclinada de Pisa-Italia</b><br><img src='torre inclinada de pisa.jpg' width='200px'>").openPopup().addTo(map));;
markers.push(L.marker([-23.7469, -65.5035], { icon: customIcon }).bindPopup("<b>Cerro de los 7 colores-Jujuy</b><br><img src='cerro 7 colores.jpg' width='200px'>").openPopup().addTo(map));
markers.push(L.marker([ 48.8583701, 2.2944813], { icon: customIcon }).bindPopup("<b>Torre Eiffel-Francia</b><br><img src='torre e.jpeg' width='200px'>").openPopup().addTo(map));
markers.push(L.marker([ 35.452828, 138.649635 ], { icon: customIcon }).bindPopup("<b>Aokigahara, el bosque de los suicidios-Japon</b><br><img src='bos.jpg' width='200px'>").openPopup().addTo(map));
markers.push(L.marker([ 47.9511, -124.385], { icon: customIcon }).bindPopup("<b>Forks-EE.UU</b><br><img src='forks.jpg' width='200px'>").openPopup().addTo(map));
markers.push(L.marker([43.935833, -120.575], { icon: customIcon }).bindPopup("<b>Oregon-EE.UU</b><br><img src='oregon.jpg' width='200px'>").openPopup().addTo(map));
markers.push(L.marker([ 51.50853, -0.12574], { icon: customIcon }).bindPopup("<b>Londres-Inglaterra</b><br><img src='londres.png' width='200px'>").openPopup().addTo(map));
markers.push(L.marker([-41.14557, -71.30822], { icon: customIcon }).bindPopup("<b>Bariloche-Rio Negro</b><br><img src='bariloche.jpg' width='200px'>").openPopup().addTo(map));
markers.push(L.marker([ 59.93863, 30.31413], { icon: customIcon }).bindPopup("<b>San Petersburgo-Rusia</b><br><img src='san petersburgo.jpeg' width='200px'>").openPopup().addTo(map));
markers.push(L.marker([37.9715141, 23.7266498463072], { icon: customIcon }).bindPopup("<b>Panteon Atenea-Grecia</b><br><img src='atenea.jpg' width='200px'>").openPopup().addTo(map));
markers.push(L.marker([51.208888888889, 3.2241666666667], { icon: customIcon }).bindPopup("<b>Brujas-Belgica</b><br><img src='brujas.jpg' width='200px'>").openPopup().addTo(map));
markers.push(L.marker([55.751999, 37.617734], { icon: customIcon }).bindPopup("<b>Kremlin-Rusia</b><br><img src='kremlin.jpg' width='200px'>").openPopup().addTo(map));
markers.push(L.marker([-13.163055555556, -72.545555555556 ], { icon: customIcon }).bindPopup("<b>Machu Picchu-Peru</b><br><img src='machu picchu.jpg' width='200px'>").openPopup().addTo(map));
markers.push(L.marker([27.1750151, 78.0421552], { icon: customIcon }).bindPopup("<b>Taj Mahal-India</b><br><img src='taj mahal.jpg' width='200px'>").openPopup().addTo(map));
markers.push(L.marker([5.500299, -61.999270], { icon: customIcon }).bindPopup("<b>Parque Nacional Canaima-Venezuela</b><br><img src='Canaima.jpeg' width='200px'>").openPopup().addTo(map));
//markers.push(L.marker([], { icon: customIcon }).bindPopup("").openPopup().addTo(map));


// Otros marcadores
// Puedes añadir más marcadores siguiendo el mismo formato que el de la Torre Inclinada de Pisa
// Ejemplo: var marker2 = L.marker([latitud, longitud]).addTo(map);
// marker2.bindPopup("<b>Nombre del lugar</b><br><img src='imagen.jpg' width='200px'>").openPopup();
