import { getColor } from "../utils/GetColor";
import { getRating } from "../utils/GetRating";

interface StrengthBarProps {
    strength: string;
}

export const StrengthBar = ({ strength }: StrengthBarProps) => {
    const barStyles = {
        width: `${getRating(strength) * 100}%`,
        backgroundColor: getColor(strength),
        height: '10px',
        borderRadius: '5px',
        transition: `width 0.5s ease, background-color 0.5s ease`
    }
    return (
        <>
            <div style={barStyles}></div>
        </>
    );
}

