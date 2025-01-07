import { useEffect, useState } from "react";
import { game } from "../Games/GameCollections/GameCollectionsLogic"
import GameCollectionsDisplay from "../Games/GameCollections/GameCollectionsDisplay";
import axios from "axios";

function Home() {
    const [data, setData] = useState<game[]>([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8080/game`)
            .then((Response) => setData(Response.data))
            .catch((error) => console.error(error));
    }, [])

    return (
        <>
            <h1>Welcome To Board.up</h1>

            <div>
                <GameCollectionsDisplay 
                    data={data}
                />
            </div>
        </>
    )
}

export default Home