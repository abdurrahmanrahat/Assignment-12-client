import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useClass = () => {
    const { user } = useContext(AuthContext);

    const { refetch, isLoading, data: classes = [] } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes?email=${user?.email}`);
            return res.json();
        },
    })

    return [classes, refetch, isLoading];
};

export default useClass;