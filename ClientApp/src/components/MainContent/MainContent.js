// Programmer: Amritpal Singh
// File Name: MainContent.js
// Date: 31 January 2022
// Descrition: This file is where main component exist of the web application




import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import PageHeading from '../PageHeading/PageHeading';
import './MainContent.css';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
// import {getAllPlants} from './../../redux/actions/plantActions'

function MainContent() {

    const [plants, setPlants] = useState(null);
    const [loading, setLoading] = useState(true);

    //I could have implmented redux but this seemed more easy than implementing redux here to I choosed not to implement redux
    //All the template for redux use is also setted up by me so anything I can implement redux
    const dispatch =  useDispatch();
    let now = new Date();
    // const plants = useSelector((state) => state.plants);


    function getAllPlants() {
        axios.get("api/Plants/GetPlants").then(
            result => {
                const response = result.data;
                setPlants(response);
                setLoading(false);
            }
            
        )
    }

    useEffect(() => {
        getAllPlants();
        // dispatch(getAllPlants());
    }, [now]);



    function waterPlants(id) {
        // get the button pressed plants details
        axios.get(`api/Plants/SinglePlant/${id}`).then(plant => {
            const response = plant.data;
            // checking what is button pressed for.....watering or for stopping watering ?
            if (document.getElementById(`button_${id}`).innerText === "Tap here to Stop Watering Plant") {
                setLoading(true);
                response.wateringStatus = false;
                response.wateringEndTiming = now.getTime();
                console.log('End Time :' + response.wateringEndTiming / 1000);
                // updating the palant details
                axios.put("api/Plants/UpdatePlantWateringStatus/" + id, response).then(result => {
                    getAllPlants();
                    setLoading(false);

                    //if watering of plant stopped very early prinitng error msg
                    if (((result.data.wateringEndTiming / 1000) - (result.data.wateringStartTiming / 1000)) < 10) {
                        document.getElementById(`errMsg_${id}`).innerText = 'Error: In order to water the plant please dont stop watering atleast for 10 seconds'
                        setTimeout(() => {
                            document.getElementById(`errMsg_${id}`).innerText = ''
                        }, 5000);
                    }
                    else {
                        // plant is now watered so disabling the water button for 30 seconds
                        document.getElementById(`button_${id}`).disabled = true;
                        setTimeout(() => {
                            document.getElementById(`button_${id}`).disabled = false;
                        }, 30000);
                    }

                    document.getElementById(`button_${id}`).innerText = "Tap here to the Water Plant";
                });
            }
            else {

                // starting the watering of plant
                document.getElementById(`button_${id}`).innerText = "Tap here to Stop Watering Plant";
                setLoading(true);
                response.wateringStatus = true;
                response.wateringStartTiming = now.getTime();
                axios.put("api/Plants/UpdatePlantWateringStatus/" + id, response).then(result => {
                    getAllPlants();
                    }
                );
            }
            setLoading(false);
        });
    }



    return (
        <main className="maincontent">
            <PageHeading />
            {loading ? (
                <Loader />
            ) : (
                <>
                    {
                        plants.map((plant) => (
                            <article key={plant.id} className={((!plant.wateringStatus) && (now.getTime() - plant.lastWateringSeason) / (60 * 60 * 1000)) >= 6 ? "plant_needWater" : ""}>
                                <div className='plants'>
                                    <figure className="plant__image">
                                        <img src='./Plant.svg' alt="Plant" loading="lazy" />
                                    </figure>
                                    <div className='plant__info'>
                                        <h1>{plant.name}</h1>
                                        <ul>
                                            <li><b>Watering Status:</b> <span> {plant.wateringStatus ? "Watering" : "Not Watering"}</span></li>
                                            <li><b>Last Watering Session:</b>
                                                <span>
                                                    {plant.lastWateringSeason ?
                                                        (
                                                            ((now.getTime() - plant.lastWateringSeason) / (1000 * 60)) >= 1 ?
                                                                (
                                                                    ((now.getTime() - plant.lastWateringSeason) / (60 * 60 * 1000)) >= 1 ? ` ${((now.getTime() - plant.lastWateringSeason) / (60 * 1000 * 60)).toFixed(1)} hrs ago` : ` ${((now.getTime() - plant.lastWateringSeason) / (60 * 1000)).toFixed(1)} min ago`
                                                                )
                                                                : ` ${((now.getTime() - plant.lastWateringSeason) / 1000).toFixed(0)} sec ago`
                                                        )
                                                        : " ----"}
                                                </span>
                                            </li>
                                            <li className={((!plant.wateringStatus) && (now.getTime() - plant.lastWateringSeason) / (60 * 60 * 1000)) >= 6 ? "waterPlantMsg" : "noMsg"} ><b>URGENTLY NEED WATER</b></li>
                                        </ul>
                                        <button id={`button_${plant.id}`} onClick={() => waterPlants(plant.id)}>{plant.wateringStatus ? "Tap here to Stop Watering Plant" : "Tap here to the Water Plant"}</button>
                                    </div>
                                </div>
                                <div className='errMsg' id={`errMsg_${plant.id}`}></div>
                            </article>
                        ))
                    }
                </>
            )}

        </main >
    );
}

export default MainContent;
