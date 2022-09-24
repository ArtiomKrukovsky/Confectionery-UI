import { IPie } from "../components/pies/api/models/pie";

export const PIES : IPie[] = [
    {
        id: 'bc7bc3ed-0b88-4019-aae9-59579b6a6713',
        name: 'Cheesecake',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        price: 20.5,
        imageUrl: 'https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg',
        maximumPortions: 10,
        minimumPortions: 4,
        ingredients: [
            {
                name: 'Milk',
                isAllergen: true,
                relativeAmount: 10
            }
        ]
    },
    {
        id: 'beba87bf-d11a-4f82-81e7-fe73e7289403',
        name: 'Apple pie',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        price: 45.5,
        imageUrl: 'https://www.chewoutloud.com/wp-content/uploads/2012/12/apple-pie-2.jpg',
        maximumPortions: 15,
        minimumPortions: 7,
        ingredients: [
            {
                name: 'Milk',
                isAllergen: true,
                relativeAmount: 10
            }
        ]
    },
]
