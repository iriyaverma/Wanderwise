// Mock data for different cities and travel styles
const mockItineraries = {
    paris: {
        coordinates: [48.8566, 2.3522],
        zoom: 12,
        activities: {
            adventure: [
                { name: "Eiffel Tower Climb", time: "9:00 AM", location: "Champ de Mars", coords: [48.8584, 2.2945], description: "Climb the iconic tower for breathtaking views" },
                { name: "Seine River Kayaking", time: "2:00 PM", location: "Pont Neuf", coords: [48.8566, 2.3410], description: "Paddle through the heart of Paris" },
                { name: "Montmartre Hiking", time: "5:00 PM", location: "Sacré-Cœur", coords: [48.8867, 2.3431], description: "Explore the artistic district on foot" },
                { name: "Night Bike Tour", time: "8:00 PM", location: "Louvre", coords: [48.8606, 2.3376], description: "Cycle through illuminated landmarks" }
            ],
            cultural: [
                { name: "Louvre Museum", time: "9:00 AM", location: "Rue de Rivoli", coords: [48.8606, 2.3376], description: "Explore world's largest art museum" },
                { name: "Notre-Dame Cathedral", time: "1:00 PM", location: "Île de la Cité", coords: [48.8530, 2.3499], description: "Gothic architecture masterpiece" },
                { name: "Musée d'Orsay", time: "3:30 PM", location: "Quai Anatole", coords: [48.8600, 2.3266], description: "Impressionist art collection" },
                { name: "Latin Quarter Walk", time: "7:00 PM", location: "Quartier Latin", coords: [48.8506, 2.3444], description: "Historic neighborhood exploration" }
            ],
            luxury: [
                { name: "Ritz Paris Spa", time: "10:00 AM", location: "Place Vendôme", coords: [48.8677, 2.3281], description: "Luxurious wellness experience" },
                { name: "Michelin Star Lunch", time: "1:00 PM", location: "Champs-Élysées", coords: [48.8698, 2.3076], description: "Fine dining experience" },
                { name: "Private Louvre Tour", time: "4:00 PM", location: "Louvre", coords: [48.8606, 2.3376], description: "Exclusive guided tour" },
                { name: "Seine Dinner Cruise", time: "8:00 PM", location: "Port de la Bourdonnais", coords: [48.8606, 2.2978], description: "Elegant evening cruise" }
            ],
            budget: [
                { name: "Free Walking Tour", time: "10:00 AM", location: "Place du Châtelet", coords: [48.8583, 2.3472], description: "Discover Paris with local guide" },
                { name: "Picnic at Luxembourg Gardens", time: "1:00 PM", location: "Luxembourg Gardens", coords: [48.8462, 2.3372], description: "Relaxing lunch in beautiful park" },
                { name: "Père Lachaise Cemetery", time: "4:00 PM", location: "Père Lachaise", coords: [48.8619, 2.3933], description: "Famous cemetery with notable graves" },
                { name: "Street Art Tour", time: "6:00 PM", location: "Belleville", coords: [48.8725, 2.3765], description: "Explore vibrant street art scene" }
            ]
        }
    },
    tokyo: {
        coordinates: [35.6762, 139.6503],
        zoom: 11,
        activities: {
            adventure: [
                { name: "Mount Fuji Day Trip", time: "6:00 AM", location: "Mount Fuji", coords: [35.3606, 138.7274], description: "Iconic mountain hiking adventure" },
                { name: "Robot Restaurant Show", time: "7:00 PM", location: "Shinjuku", coords: [35.6938, 139.7036], description: "Futuristic entertainment experience" },
                { name: "Shibuya Crossing Challenge", time: "5:00 PM", location: "Shibuya", coords: [35.6598, 139.7006], description: "Navigate the world's busiest crossing" },
                { name: "Tokyo Skytree", time: "2:00 PM", location: "Sumida", coords: [35.7101, 139.8107], description: "City's tallest observation tower" }
            ],
            cultural: [
                { name: "Senso-ji Temple", time: "9:00 AM", location: "Asakusa", coords: [35.7148, 139.7967], description: "Tokyo's oldest Buddhist temple" },
                { name: "Traditional Tea Ceremony", time: "2:00 PM", location: "Urasenke", coords: [35.6785, 139.7679], description: "Authentic Japanese tea experience" },
                { name: "Imperial Palace Gardens", time: "4:00 PM", location: "Imperial Palace", coords: [35.6852, 139.7528], description: "Historic palace grounds" },
                { name: "Kabuki Performance", time: "7:00 PM", location: "Ginza", coords: [35.6714, 139.7645], description: "Traditional Japanese theater" }
            ],
            luxury: [
                { name: "Park Hyatt Spa", time: "10:00 AM", location: "Shinjuku", coords: [35.6867, 139.6947], description: "World-class wellness retreat" },
                { name: "Sushi Jiro Omakase", time: "12:00 PM", location: "Ginza", coords: [35.6714, 139.7645], description: "Legendary sushi experience" },
                { name: "Private Tokyo Bay Cruise", time: "4:00 PM", location: "Tokyo Bay", coords: [35.6586, 139.7454], description: "Exclusive harbor tour" },
                { name: "Michelin Star Kaiseki", time: "8:00 PM", location: "Kyoboshi", coords: [35.6654, 139.7706], description: "Multi-course Japanese fine dining" }
            ],
            budget: [
                { name: "Tsukiji Outer Market", time: "8:00 AM", location: "Tsukiji", coords: [35.6654, 139.7706], description: "Fresh seafood and street food" },
                { name: "Ueno Park & Museums", time: "11:00 AM", location: "Ueno", coords: [35.7155, 139.7731], description: "Free park with cultural sites" },
                { name: "Harajuku Street Fashion", time: "3:00 PM", location: "Harajuku", coords: [35.6702, 139.7026], description: "Youth culture and fashion district" },
                { name: "Golden Gai Bar Hopping", time: "9:00 PM", location: "Shinjuku", coords: [35.6938, 139.7036], description: "Tiny bars in historic alley" }
            ]
        }
    },
    newyork: {
        coordinates: [40.7128, -74.0060],
        zoom: 11,
        activities: {
            adventure: [
                { name: "Central Park Bike Tour", time: "9:00 AM", location: "Central Park", coords: [40.7829, -73.9654], description: "Explore NYC's green heart on wheels" },
                { name: "Brooklyn Bridge Walk", time: "2:00 PM", location: "Brooklyn Bridge", coords: [40.7061, -73.9969], description: "Iconic bridge crossing experience" },
                { name: "High Line Park", time: "4:00 PM", location: "Meatpacking District", coords: [40.7480, -74.0048], description: "Elevated park on former railway" },
                { name: "Times Square Night", time: "8:00 PM", location: "Times Square", coords: [40.7580, -73.9855], description: "Neon-lit urban adventure" }
            ],
            cultural: [
                { name: "Metropolitan Museum", time: "10:00 AM", location: "Upper East Side", coords: [40.7794, -73.9632], description: "World-renowned art collection" },
                { name: "9/11 Memorial", time: "2:00 PM", location: "Financial District", coords: [40.7115, -74.0134], description: "Moving tribute and museum" },
                { name: "Broadway Show", time: "7:30 PM", location: "Theater District", coords: [40.7590, -73.9845], description: "World-class theatrical performance" },
                { name: "MoMA Visit", time: "4:00 PM", location: "Midtown", coords: [40.7614, -73.9776], description: "Modern art masterpieces" }
            ],
            luxury: [
                { name: "Central Park South Shopping", time: "10:00 AM", location: "Fifth Avenue", coords: [40.7677, -73.9715], description: "Luxury retail experience" },
                { name: "Le Bernardin Lunch", time: "1:00 PM", location: "Midtown West", coords: [40.7624, -73.9826], description: "Michelin-starred seafood" },
                { name: "Private Helicopter Tour", time: "4:00 PM", location: "West Side", coords: [40.7505, -74.0134], description: "Aerial city views" },
                { name: "Top of the Rock Sunset", time: "7:00 PM", location: "Rockefeller Center", coords: [40.7587, -73.9787], description: "Premium observation deck" }
            ],
            budget: [
                { name: "Staten Island Ferry", time: "9:00 AM", location: "Whitehall Terminal", coords: [40.7009, -74.0134], description: "Free Statue of Liberty views" },
                { name: "Food Truck Lunch", time: "12:30 PM", location: "Various locations", coords: [40.7505, -73.9934], description: "Authentic NYC street food" },
                { name: "Central Park Picnic", time: "3:00 PM", location: "Sheep Meadow", coords: [40.7756, -73.9754], description: "Relaxing park experience" },
                { name: "Free Summer Concert", time: "7:00 PM", location: "Bryant Park", coords: [40.7536, -73.9832], description: "Outdoor entertainment" }
            ]
        }
    }
};

let map;
let currentMarkers = [];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('planningForm');
    form.addEventListener('submit', handleFormSubmit);
});

function scrollToPlanner() {
    document.getElementById('plan').scrollIntoView({ behavior: 'smooth' });
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    const city = document.getElementById('citySelect').value;
    const style = document.getElementById('styleSelect').value;
    const budget = document.getElementById('budgetSelect').value;
    
    if (!city || !style || !budget) {
        alert('Please fill in all fields to generate your itinerary!');
        return;
    }
    
    // Show loading animation
    showLoadingAnimation();
    
    // Simulate API call delay
    setTimeout(() => {
        generateItinerary(city, style, budget);
    }, 1500);
}

function showLoadingAnimation() {
    const itinerarySection = document.getElementById('itinerary');
    itinerarySection.classList.remove('hidden');
    itinerarySection.scrollIntoView({ behavior: 'smooth' });
    
    const cardsContainer = document.getElementById('itineraryCards');
    cardsContainer.innerHTML = `
        <div class="text-center py-16">
            <div class="loading-spinner mb-4"></div>
            <h3 class="text-xl font-semibold text-teal-400 mb-2">Crafting Your Perfect Itinerary</h3>
            <p class="text-gray-400">Analyzing your preferences and finding the best experiences...</p>
        </div>
    `;
}

function generateItinerary(city, style, budget) {
    const cityData = mockItineraries[city];
    const activities = cityData.activities[style];
    
    // Update the itinerary cards
    displayItineraryCards(activities, city, style, budget);
    
    // Initialize and update the map
    initializeMap(cityData.coordinates, cityData.zoom);
    plotActivitiesOnMap(activities);
}

function displayItineraryCards(activities, city, style, budget) {
    const cardsContainer = document.getElementById('itineraryCards');
    const cityName = city.charAt(0).toUpperCase() + city.slice(1);
    const styleName = style.charAt(0).toUpperCase() + style.slice(1);
    
    let cardsHTML = `
        <div class="mb-8 p-6 bg-gradient-to-r from-teal-500/10 to-yellow-500/10 rounded-2xl border border-teal-500/20">
            <h3 class="text-2xl font-bold mb-2 text-teal-400">${cityName} ${styleName} Experience</h3>
            <p class="text-gray-300">Tailored for ${style} travelers • ${budget.replace('low', '$').replace('medium', '$$').replace('high', '$$$')} budget</p>
        </div>
    `;
    
    activities.forEach((activity, index) => {
        cardsHTML += `
            <div class="activity-card bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700 shadow-xl">
                <div class="flex items-start justify-between mb-4">
                    <div class="flex items-center space-x-3">
                        <div class="w-10 h-10 bg-gradient-to-r from-teal-500 to-yellow-500 rounded-full flex items-center justify-center text-slate-900 font-bold">
                            ${index + 1}
                        </div>
                        <div>
                            <h4 class="text-xl font-semibold text-gray-100">${activity.name}</h4>
                            <p class="text-teal-400 font-medium">${activity.time}</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <svg class="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                    </div>
                </div>
                <div class="border-l-4 border-teal-500 pl-4 ml-5">
                    <p class="text-gray-300 mb-2">${activity.description}</p>
                    <p class="text-sm text-gray-400">📍 ${activity.location}</p>
                </div>
            </div>
        `;
    });
    
    cardsContainer.innerHTML = cardsHTML;
}

function initializeMap(coordinates, zoom) {
    const mapContainer = document.getElementById('map');
    
    // Clear existing map if it exists
    if (map) {
        map.remove();
    }
    
    // Initialize new map
    map = L.map('map').setView(coordinates, zoom);
    
    // Add tile layer with dark theme
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(map);
}

function plotActivitiesOnMap(activities) {
    // Clear existing markers
    currentMarkers.forEach(marker => {
        map.removeLayer(marker);
    });
    currentMarkers = [];
    
    // Create custom icon
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `
            <div class="w-8 h-8 bg-gradient-to-r from-teal-500 to-yellow-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                <svg class="w-4 h-4 text-slate-900" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
            </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
    });
    
    // Add markers for each activity
    activities.forEach((activity, index) => {
        const marker = L.marker(activity.coords, { icon: customIcon })
            .addTo(map)
            .bindPopup(`
                <div class="p-3">
                    <h4 class="font-bold text-lg text-teal-400 mb-2">${activity.name}</h4>
                    <p class="text-yellow-400 font-semibold mb-2">${activity.time}</p>
                    <p class="text-gray-300 mb-2">${activity.description}</p>
                    <p class="text-sm text-gray-400">📍 ${activity.location}</p>
                </div>
            `);
        
        currentMarkers.push(marker);
    });
    
    // Fit map to show all markers
    if (currentMarkers.length > 0) {
        const group = new L.featureGroup(currentMarkers);
        map.fitBounds(group.getBounds().pad(0.1));
    }
}

// Add some interactive enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scroll for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Add intersection observer for navbar
    const navbar = document.querySelector('nav');
    const hero = document.querySelector('#home');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navbar.classList.remove('bg-slate-900');
                navbar.classList.add('bg-slate-900/95');
            } else {
                navbar.classList.remove('bg-slate-900/95');
                navbar.classList.add('bg-slate-900');
            }
        });
    });
    
    observer.observe(hero);
});
