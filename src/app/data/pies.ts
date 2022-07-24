import { IPie } from "../components/pies/api/models/pie";

export const PIES : IPie[] = [
    {
        id: 'bc7bc3ed-0b88-4019-aae9-59579b6a6713',
        name: 'Cheesecake',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        price: 20.5,
        maximumPortions: 10,
        minimumPortions: 4,
        ingredients: [
            {
                name: 'Milk',
                isAllergen: true,
                relativeAmount: 10
            }
        ]
    }
]
