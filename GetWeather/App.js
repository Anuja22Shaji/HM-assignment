import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

async function getWeather(city) {
  const apiKey = 'YOUR_API_KEY'; // Replace this with your actual API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const json = await response.json();

    const temperature = json.main.temp;
    return temperature;
  } catch (error) {
    console.error(error);
    return undefined;
  }
}

function WeatherApp() {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState('');

  const handleGetWeather = async () => {
    const temp = await getWeather(city);
    setTemperature(temp);
  };

  return (
    <View>
      <Text>Enter a city name:</Text>
      <TextInput value={city} onChangeText={setCity} />
      <Button title="Get weather" onPress={handleGetWeather} />
      {temperature ? <Text>{`Temperature: ${temperature}°C`}</Text> : null}
    </View>
  );
}

export default WeatherApp;