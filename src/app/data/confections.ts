import { IConfection } from "../components/confections/api/models/confection";

export const CONFECTIONS : IConfection[] = [
    {
        id: 'bc7bc3ed-0b88-4019-aae9-59579b6a6713',
        name: 'Чизкейк',
        description: 'Хрустящий кунжутно-лаймовый кранч.. Знакомы? Если нет, то пришло время познакомиться! Только будьте готовы, кранч будет не один. Вместе с ним на вашу вечеринку придут: шпинатный бисквит, пропитанный натуральным лаймовым сиропом, лаймовый ганаш на белом шоколаде и лучший сливочно-творожный крем в городе. Максимально натурально, исключительно вкусно!',
        price: 45.5,
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
        name: 'Морковный пирог',
        description: 'Богатырь нашей пекарни и весьма сытный торт! Настоящий морковный пирог с влажным пряным бисквитом, насыщенный вкусами специй и орехов, с прослойками творожного крема и «юбочкой» из грецкого ореха. Варианты дополнительного декора согласно сезона и доступных на момент заказа ягод. ',
        price: 70,
        imageUrl: 'https://embassy.by/assets/images/products/33/large/morkva-1.jpg',
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
    {
        id: 'fb1c68d5-6ca2-4af2-acbe-c0d9239c1248',
        name: 'Торт Медовик',
        description: 'Классический Медовик, сделанный в лучших традициях: ароматные коржи, пропитанные медом, с прослойками из натурального сметанно-сливочного крема. Он вам точно понравится — слово Кондитера!',
        price: 55,
        imageUrl: 'https://embassy.by/assets/images/products/27/large/dizayn-bez-nazvaniya-7.jpg',
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
    {
        id: '1448733f-cc7e-4653-a2ce-510bf92f2cd8',
        name: 'Торт Наполеон',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        price: 77,
        imageUrl: 'https://embassy.by/assets/images/products/67/large/naos.jpg',
        maximumPortions: 15,
        minimumPortions: 7,
        ingredients: [
            {
                name: 'Milk',
                isAllergen: true,
                relativeAmount: 10
            }
        ]
    }
    ,
    {
        id: '90452859-2d7f-4dfd-923b-1419bfaa3d3b',
        name: 'Торт Ангелы Черри',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        price: 85,
        imageUrl: 'https://embassy.by/assets/images/products/65/large/angela.jpg',
        maximumPortions: 15,
        minimumPortions: 7,
        ingredients: [
            {
                name: 'Milk',
                isAllergen: true,
                relativeAmount: 10
            }
        ]
    }
]
