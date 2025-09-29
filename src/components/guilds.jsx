import { useEffect, useState } from "react";
import api from "../axios";

export default function Guilds() {
    const [guilds, setGuilds] = useState([]);

    useEffect(() => {
        api.get("/guilds").then(res => setGuilds(res.data));
    }, []);

    return (
        <div className="flex flex-col gap-4 p-5 text-orange-500">
            <h1>Guildas</h1>
            <ul>
                {guilds.map(guild => (
                    <li key={guild.id}>{guild.name}</li>
                ))}
            </ul>
        </div>
    );
}