import { useParams } from "react-router-dom";

const RoomDettless = () => {
    const { id } = useParams();
    console.log(id);

    return (
        <div>
            dittless......................
        </div>
    );
};

export default RoomDettless;