type Place = {
    name: string
    distance: number
    rate: number
    description: string
    type: string
}

type Places = {
    [category : string] : Place[]
}

export const places: Places = {
    restaurants: [
        {
            name: "Alfredo's",
            distance: 3,
            rate: 5,
            description: "Tucked away on a quiet street, Alfredo’s brings the warmth and charm of a traditional Italian trattoria to life. Known for its hand-rolled pasta, wood-fired pizzas, and rich, slow-cooked sauces, every dish is a tribute to time-honored family recipes.",
            type: "Cafe & Restaurant"
        },
        {
            name: 'Mirazur',
            distance: 5,
            rate: 4,
            description: "Tucked away on a quiet street, Alfredo’s brings the warmth and charm of a traditional Italian trattoria to life. Known for its hand-rolled pasta, wood-fired pizzas, and rich, slow-cooked sauces, every dish is a tribute to time-honored family recipes. The cozy, rustic interior—complete with exposed brick walls, candlelit tables, and soft jazz in the background—makes it perfect for both casual lunches and romantic dinners. ",
            type: "Cafe & Restaurant"
        },
        {
            name: 'Bergerito',
            distance: 12,
            rate: 3,
            description: "Tucked away on a quiet street, Alfredo’s brings the warmth and charm of a traditional Italian trattoria to life. Known for its hand-rolled pasta, wood-fired pizzas, and rich, slow-cooked sauces, every dish is a tribute to time-honored family recipes. The cozy, rustic interior—complete with exposed brick walls, candlelit tables, and soft jazz in the background—makes it perfect for both casual lunches and romantic dinners. ",
            type: "Cafe & Restaurant"
        },
    ],
    stores: [
        {
            name: "Wendy's",
            distance: 12,
            rate: 3,
            description: "Tucked away on a quiet street, Alfredo’s brings the warmth and charm of a traditional Italian trattoria to life. Known for its hand-rolled pasta, wood-fired pizzas, and rich, slow-cooked sauces, every dish is a tribute to time-honored family recipes. The cozy, rustic interior—complete with exposed brick walls, candlelit tables, and soft jazz in the background—makes it perfect for both casual lunches and romantic dinners. ",
            type: "Cafe & Restaurant"
        },
        {
            name: 'Moonlight',
            distance: 12,
            rate: 3,
            description: "Tucked away on a quiet street, Alfredo’s brings the warmth and charm of a traditional Italian trattoria to life. Known for its hand-rolled pasta, wood-fired pizzas, and rich, slow-cooked sauces, every dish is a tribute to time-honored family recipes. The cozy, rustic interior—complete with exposed brick walls, candlelit tables, and soft jazz in the background—makes it perfect for both casual lunches and romantic dinners. ",
            type: "Cafe & Restaurant"
        },
        {
            name: 'Sally',
            distance: 12,
            rate: 3,
            description: "Tucked away on a quiet street, Alfredo’s brings the warmth and charm of a traditional Italian trattoria to life. Known for its hand-rolled pasta, wood-fired pizzas, and rich, slow-cooked sauces, every dish is a tribute to time-honored family recipes. The cozy, rustic interior—complete with exposed brick walls, candlelit tables, and soft jazz in the background—makes it perfect for both casual lunches and romantic dinners. ",
            type: "Cafe & Restaurant"
        },
    ],
    healthcares: [
        {
            name: "St George",
            distance: 12,
            rate: 3,
            description: "Tucked away on a quiet street, Alfredo’s brings the warmth and charm of a traditional Italian trattoria to life. Known for its hand-rolled pasta, wood-fired pizzas, and rich, slow-cooked sauces, every dish is a tribute to time-honored family recipes. The cozy, rustic interior—complete with exposed brick walls, candlelit tables, and soft jazz in the background—makes it perfect for both casual lunches and romantic dinners. ",
            type: "Cafe & Restaurant"
        },
        {
            name: 'Ken Adams',
            distance: 12,
            rate: 3,
            description: "Tucked away on a quiet street, Alfredo’s brings the warmth and charm of a traditional Italian trattoria to life. Known for its hand-rolled pasta, wood-fired pizzas, and rich, slow-cooked sauces, every dish is a tribute to time-honored family recipes. The cozy, rustic interior—complete with exposed brick walls, candlelit tables, and soft jazz in the background—makes it perfect for both casual lunches and romantic dinners. ",
            type: "Cafe & Restaurant"
        },
        {
            name: 'Mortimor Uni',
            distance: 12,
            rate: 3,
            description: "Tucked away on a quiet street, Alfredo’s brings the warmth and charm of a traditional Italian trattoria to life. Known for its hand-rolled pasta, wood-fired pizzas, and rich, slow-cooked sauces, every dish is a tribute to time-honored family recipes. The cozy, rustic interior—complete with exposed brick walls, candlelit tables, and soft jazz in the background—makes it perfect for both casual lunches and romantic dinners. ",
            type: "Cafe & Restaurant"
        },
    ],
}