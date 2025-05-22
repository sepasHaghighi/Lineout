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




    // { category: string; matches: Place[] }[] {
    //     const lowerTerm = searchTerm.toLowerCase();
    //     const result = [];
    
    //     for (const category in places) {
    //         const matches = places[category].filter(place =>
    //             place.name.toLowerCase().includes(lowerTerm) ||
    //             place.description.toLowerCase().includes(lowerTerm) ||
    //             place.type.toLowerCase().includes(lowerTerm)
    //         );
    
    //         if (matches.length > 0) {
    //             result.push({ category, matches });
    //         }
    //     }
    
    //     return result;
    // }