import { useQuery } from "@tanstack/react-query";
// import { useContext } from "react";
// import { AuthContext } from "../Provider/AuthProvider";


const useClass = () => {
    // const { user } = useContext(AuthContext);

    const { refetch, isLoading, data: classes = [] } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-lyart-xi.vercel.app/classes');
            return res.json();
        },
    })

    return [refetch, classes, isLoading];
};

export default useClass;