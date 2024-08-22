import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import { getAdvice } from './public/scripts/advice.js';
import dotenv from 'dotenv';
dotenv.config();

// console.log(process.env);

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));

const APIkey = process.env.API_KEY;

app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
        const lat = parseFloat((Math.random() * 180) - 90).toFixed(6);
        const lon = parseFloat((Math.random() * 360) - 180).toFixed(6);
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`);
        
        const weather = result.data;
        const advice = getAdvice(weather.weather[0].description); 
        console.log(advice);
        res.render("index.ejs", { weather: weather ,advice: advice });
    } catch (error) {
        console.error(error);
        const alert = "Something went wrong";
        res.status(500).render("index.ejs" , {alert: alert});
    }
});
app.post("/geocoding", async (req, res) => {
    try {
        const location = req.body.location;
        const result1 = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${APIkey}`);
        
        if (result1.data.length === 0) {
            const alert = "Something went wrong";
            res.status(401).render("index.ejs" , {alert: alert});
        }
        
        const lat = result1.data[0].lat;
        const lon = result1.data[0].lon;
        const result = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`);
        
        const weather = result.data;
        const advice = getAdvice(weather.weather[0].description); 
        res.render("index.ejs", { weather: weather ,advice: advice });
    } catch (error) {
        console.error(error);
        const alert = "Something went wrong";
        res.status(500).render("index.ejs" , {alert: alert});
    }
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });