import { useEffect, useState, useContext } from "react";
import { GlobalApplicationContext } from "@/context/global/GlobalApplicationContextProvider";

type Notification = {
    id: number;
    title: string;
    content: string;
    createdAt: string;
};

function Notifications() {
    {  /*  const [notifications, setNotifications] = useState<Notification[]>([]);
    const {
        state: { token },
    } = useContext(GlobalApplicationContext);

    useEffect(() => {
        fetch("/api/notifications", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => setNotifications(data))
            .catch((err) => console.error(err));
    }, [token]); */}

    return (
        { /*       <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Les courriers</h1>

            {notifications.length === 0 ? (
                <p>Aucun courrier</p>
            ) : (
                <ul>
                    {notifications.map((notif) => (
                        <li key={notif.id} className="border p-3 mb-2 rounded">
                            <h2 className="font-bold">{notif.title}</h2>
                            <p>{notif.content}</p>
                            <small className="text-gray-500">
                                {new Date(notif.createdAt).toLocaleString()}
                            </small>
                        </li>
                    ))}
                </ul>
            )}
        </div> */}
    );
}

export default Notifications;