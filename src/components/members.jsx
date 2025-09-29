import { useEffect, useState } from "react";
import api from "../axios";

export default function Members() {
    const [members, setMembers] = useState([]);

    useEffect(() => {
        api.get("/members").then(res => setMembers(res.data));
    }, []);

    return (
        <div className="flex flex-col gap-4 p-5 text-orange-500">
            <h1>Membros</h1>
            <ul>
                {members.map(member => (
                    <li key={member.id}>{member.name}</li>
                ))}
            </ul>
        </div>
    );
}