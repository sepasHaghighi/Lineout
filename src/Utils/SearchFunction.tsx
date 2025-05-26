type Place = {
    name: string;
    distance: number;
    rate: number;
    description: string;
    type: string;
};

type Places = {
    [category: string]: Place[];
};

export default function searchFunction
    (places: Places, searchTerm: string): { [category: string]: Place }[]{
        const result = []
        for(const category in places){
            const match = places[category].find(place => place.name.toLowerCase().includes(searchTerm.toLowerCase()))
            if(match){
                result.push({[category] : match})
            }   
        } 
        return result
    }
