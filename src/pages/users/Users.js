import Card from "../../components/card/Card";
import {GridContainer} from "./Users.style"
import {getRandomUsers} from "../../api/user-repository";
import { useState, useEffect } from "react";

const Users = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        getRandomUsers().then(response => setUsers(response.data));
    }, []);

    if (!users) return null;

    return (
    <GridContainer>
        {users.map(user => {
            return <Card user={user} hover='on'/>
        })
        }
    </GridContainer>
    )
}

export default Users;