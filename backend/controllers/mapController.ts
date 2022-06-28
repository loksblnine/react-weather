import {Request, Response} from "express";
import nodeGeocoder from 'node-geocoder';
import node_geocoder from 'node-geocoder';
import axios from 'axios';

let options = {
  provider: 'openstreetmap'
};
let geoCoder = nodeGeocoder(<node_geocoder.Options>options);

export const getWeather = async (req: Request, resp: Response) => {
  try {
    const {lat, lng} = req.body;
    const getDataByCoords = await geoCoder.reverse({lat: lat, lon: lng});
    const {data} = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(String(getDataByCoords[0].city))}&units=metric&appid=${process.env.APP_ID}`);
    resp.status(200).json(data);
  } catch (e: any) {
    console.log(e);
    resp.status(500).json("Something went wrong");
  }
};
