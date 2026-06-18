# 📄 `README.md`

```md
# 🌍 City Explorer Web Application

## 📌 Overview

City Explorer is a fully responsive web application built using **HTML, CSS, and vanilla JavaScript (ES Modules)**.  

It allows users to search for any city and view:
- Real-time weather information
- Basic city details
- Dynamic city images

The application demonstrates API integration, modular JavaScript architecture, and dynamic DOM manipulation.

---

## 🚀 Live Features

### 🔎 City Search
Users can search for any city (e.g., New York, London, Kampala).

### 🌦 Weather Information
Displays real-time weather data including:
- Temperature
- Weather conditions
- Humidity
- Wind speed

### 🌍 City Information
Displays additional city details such as:
- Country
- Population (when available via API)

### 🖼 City Images
Fetches and displays relevant images of the searched city using Unsplash API.

---

## 🧰 Technologies Used

- HTML5 (semantic structure)
- CSS3 (styling + animations)
- Vanilla JavaScript (ES Modules)
- Fetch API (async/await)

---

## 🌐 External APIs Used

1. **OpenWeatherMap API**  
   - Provides real-time weather data

2. **GeoDB Cities API**  
   - Provides city information (country, population)

3. **Unsplash API**  
   - Provides dynamic city images

---

## 📁 Project Structure

```

city-explorer/
│
├── index.html
│
├── css/
│   ├── styles.css
│   └── animations.css
│
├── js/
│   ├── weather.js
│   ├── cities.js
│   ├── images.js
│   ├── weatherCard.js
│   ├── cityCard.js
│   ├── dom.js
│   └── main.js

````

---

## 🧠 Key Concepts Demonstrated

### ✔ ES Modules
The project is organized into modular JavaScript files using `import/export` to improve maintainability and separation of concerns.

### ✔ Asynchronous Programming
Uses `async/await` with the Fetch API to handle external API requests.

### ✔ Dynamic DOM Manipulation
UI elements are generated dynamically based on API responses.

### ✔ Error Handling
Try/catch blocks are used to handle API failures and invalid user input.

---

## 🎨 CSS Features

- Responsive layout
- Card-based UI design
- Fade-in animations for dynamic content

---

## ♿ Accessibility Features

- Semantic HTML elements (`header`, `main`, `section`, `footer`)
- Form labels for inputs
- Accessible error messages using `role="alert"`
- Alt text for images

---

## 🔍 SEO Features

- Meta description included
- Proper heading structure (H1, H2)
- Mobile-friendly viewport settings

---

## ⚙️ How to Run the Project

1. Clone or download the repository
2. Open the project in VS Code
3. Use **Live Server** extension to run `index.html`
4. Enter a city name and search

---

## ⚠️ Important Notes

- Requires active API keys for:
  - OpenWeatherMap
  - GeoDB Cities
  - Unsplash (optional)
- Must be run using a local server (not by double-clicking HTML file)

---

## 🎯 Learning Outcomes

This project demonstrates:
- Working with external APIs
- Structuring a scalable JavaScript application
- DOM manipulation without frameworks
- Clean and maintainable code architecture
- Real-world web development practices

---

## 👨‍💻 Author

Developed as a final web development project to demonstrate proficiency in frontend development using HTML, CSS, and vanilla JavaScript.
```

---

