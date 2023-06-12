import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";

const MySelectedClasses = () => {
    const [studentSelectedClasses, setStudentSelectedClasses] = useState([]);

    const { user } = useContext(AuthContext);


    useEffect(() => {
        fetch(`http://localhost:5000/selectedClasses?email=${user?.email}`, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setStudentSelectedClasses(data))
    }, [user])

    return (
        <div>
            <h2>MySelectedClasses Page: {studentSelectedClasses.length}</h2>
        </div>
    );
};

export default MySelectedClasses;