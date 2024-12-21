import { Card } from "@Shared/ui/card/Card";
import { Result } from "@StarshipsList/types/starship.types";

interface Props {
    starship: Result;
}

export function StarshipCard(props: Props) {
    const { starship } = props;

    return (
        <Card>
            <p className="text-[#818180] font-bold text-xl">{starship.name}</p>
            <span className="text-[#818180] font-medium text-base">{starship.model} </span>
        </Card>
    );
}
