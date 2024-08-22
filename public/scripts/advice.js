// Sample advice data parsed from advice.txt
const adviceData = {
    "clear sky": {
      "Sun Protection": "Wear sunscreen, sunglasses, and a hat to protect from UV rays.",
      "Hydration": "Drink plenty of water, especially if spending time outdoors.",
      "Clothing": "Lightweight, light-colored clothing is best to stay cool."
    },
    "few clouds": {
      "Moderate Sun Protection": "UV rays can still reach you, so use sunscreen and sunglasses.",
      "Comfortable Clothing": "Wear layers in case the temperature changes.",
      "Outdoor Plans": "Great weather for outdoor activities, but be prepared for possible weather changes."
    },
    "broken clouds": {
      "Layering": "Wear layers to adjust to potential temperature changes.",
      "Outdoor Activities": "Check for updates as weather may change; have a backup plan."
    },
    "overcast clouds": {
      "Cooler Temperatures": "Expect cooler weather, so dress warmly.",
      "Vitamin D": "Less sunlight might mean less natural vitamin D; consider a supplement if needed.",
      "Mental Health": "Overcast skies can affect mood; plan activities that boost morale."
    },
    "mist": {
      "Driving": "Reduce speed and use low-beam headlights for better visibility.",
      "Clothing": "Wear moisture-wicking clothes if you're outside to stay dry.",
      "Humidity": "Hair and skin may feel more humid; consider anti-frizz products or light skincare."
    },
    "light rain": {
      "Umbrella/Raincoat": "Always carry an umbrella or wear a waterproof jacket.",
      "Footwear": "Waterproof boots or shoes with good grip are ideal to avoid slipping.",
      "Driving": "Increase braking distance and use headlights.",
      "Flooding": "Avoid walking or driving through flooded areas."
    },
    "moderate rain": {
      "Umbrella/Raincoat": "Always carry an umbrella or wear a waterproof jacket.",
      "Footwear": "Waterproof boots or shoes with good grip are ideal to avoid slipping.",
      "Driving": "Increase braking distance and use headlights.",
      "Flooding": "Avoid walking or driving through flooded areas."
    },
    "heavy rain": {
      "Umbrella/Raincoat": "Always carry an umbrella or wear a waterproof jacket.",
      "Footwear": "Waterproof boots or shoes with good grip are ideal to avoid slipping.",
      "Driving": "Increase braking distance and use headlights.",
      "Flooding": "Avoid walking or driving through flooded areas."
    },
    "thunderstorm": {
      "Seek Shelter": "Stay indoors or in a car during thunderstorms.",
      "Electronics": "Unplug devices to protect against power surges.",
      "Outdoor Safety": "Avoid open fields, tall trees, and bodies of water.",
      "Driving": "Pull over if visibility is poor; avoid touching metal objects."
    },
    "snow": {
      "Layer Up": "Wear thermal clothing, hats, gloves, and scarves.",
      "Footwear": "Wear boots with good traction to prevent slipping.",
      "Driving": "Drive slowly and keep a greater distance between vehicles.",
      "Shoveling": "Be cautious when shoveling snow; take breaks and avoid overexertion."
    },
    "fog": {
      "Driving": "Use fog lights or low beams; drive slowly and maintain distance.",
      "Walking/Cycling": "Wear reflective clothing and carry a flashlight.",
      "Navigation": "Use GPS or maps for orientation as visibility can be very low."
    },
    "haze": {
      "Driving": "Use fog lights or low beams; drive slowly and maintain distance.",
      "Walking/Cycling": "Wear reflective clothing and carry a flashlight.",
      "Navigation": "Use GPS or maps for orientation as visibility can be very low."
    }
  };
  
  // Function to get advice based on weather description
  export function getAdvice(weatherDescription) {
    const advice = adviceData[weatherDescription];
    if (advice) {
      const adviceKeys = Object.keys(advice);
      const randomKey = adviceKeys[Math.floor(Math.random() * adviceKeys.length)];
      return `${randomKey}: ${advice[randomKey]}`;
    } else {
      return "No advice available for this weather description.";
    }
  }

  