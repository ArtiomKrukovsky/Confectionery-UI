import { IConfection } from "../../components/confections/api/models/confection";

export const CONFECTIONS : IConfection[] = [
    {
        id: 'bc7bc3ed-0b88-4019-aae9-59579b6a6713',
        name: 'Чизкейк',
        description: 'Хрустящий кунжутно-лаймовый кранч.. Знакомы? Если нет, то пришло время познакомиться! Только будьте готовы, кранч будет не один. Вместе с ним на вашу вечеринку придут: шпинатный бисквит, пропитанный натуральным лаймовым сиропом, лаймовый ганаш на белом шоколаде и лучший сливочно-творожный крем в городе. Максимально натурально, исключительно вкусно!',
        price: 45.5,
        weight: 1100,
        isOrderCountLimited: false,
        minimumOrderCount: 1,
        isOutOfStock: false,
        pictures: [
            {
                id: '3f629c8b-92e0-408d-b9e5-d8ff0d55d8fa',
                shortName: 'Cheesecake',
                url: 'https://sugarspunrun.com/wp-content/uploads/2019/01/Best-Cheesecake-Recipe-2-1-of-1-4.jpg'
            }
        ]
    },
    {
        id: 'beba87bf-d11a-4f82-81e7-fe73e7289403',
        name: 'Морковный пирог',
        description: 'Богатырь нашей пекарни и весьма сытный торт! Настоящий морковный пирог с влажным пряным бисквитом, насыщенный вкусами специй и орехов, с прослойками творожного крема и «юбочкой» из грецкого ореха. Варианты дополнительного декора согласно сезона и доступных на момент заказа ягод. ',
        price: 60,
        weight: 1600,
        isOrderCountLimited: false,
        minimumOrderCount: 1,
        isOutOfStock: false,
        pictures: [
            {
                id: '906b6ab0-d74a-4829-b9b2-def3cefe07fa',
                shortName: 'Carrot cake',
                url: 'https://embassy.by/assets/images/products/33/large/morkva-1.jpg'
            }
        ]
    },
    {
        id: 'fb1c68d5-6ca2-4af2-acbe-c0d9239c1248',
        name: 'Торт Медовик',
        description: 'Классический Медовик, сделанный в лучших традициях: ароматные коржи, пропитанные медом, с прослойками из натурального сметанно-сливочного крема. Он вам точно понравится — слово Кондитера!',
        price: 55,
        weight: 1600,
        isOrderCountLimited: false,
        minimumOrderCount: 1,
        isOutOfStock: false,
        pictures: [
            {
                id: '9d14be24-b957-4cb8-987e-7e09408c97c9',
                shortName: 'Honey Cake',
                url: 'https://embassy.by/assets/images/products/27/large/dizayn-bez-nazvaniya-7.jpg'
            }
        ]
    },
    {
        id: '1448733f-cc7e-4653-a2ce-510bf92f2cd8',
        name: 'Торт Наполеон',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        price: 80,
        weight: 2000,
        isOrderCountLimited: false,
        minimumOrderCount: 1,
        isOutOfStock: false,
        pictures: [
            {
                id: 'b8ddfeb4-23b4-45ce-bb03-1eeb1d15e8e4',
                shortName: 'Napoleon Cake',
                url: 'https://embassy.by/assets/images/products/67/large/naos.jpg'
            }
        ]
    },
    {
        id: '90452859-2d7f-4dfd-923b-1419bfaa3d3b',
        name: 'Торт Ангелы Черри',
        description: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
        price: 85,
        weight: 1900,
        isOrderCountLimited: false,
        minimumOrderCount: 1,
        isOutOfStock: false,
        pictures: [
            {
                id: 'ac6c55ce-202a-4937-a990-b451cc659a2a',
                shortName: 'Cherry Angels Cake',
                url: 'https://embassy.by/assets/images/products/65/large/angela.jpg'
            }
        ]
    },
    {
        id: 'c54ecd44-9e87-4ca1-9262-f1fc9d4e2819',
        name: 'Меренговый рулет',
        description: 'i-Гоголь-Моголь или французская меренга. На вид десерт выглядит симпатичным, при этом он больше вкусный, чем красивый, представляете? Оказывает терапевтическое воздействие через удовлетворение потребности: «хочется чего-то вкусненького»',
        price: 55,
        weight: 1170,
        isOrderCountLimited: false,
        minimumOrderCount: 1,
        isOutOfStock: false,
        pictures: [
            {
                id: 'c9ae1824-352c-4be4-b8c1-205634909ae0',
                shortName: 'Meringue Roll',
                url: 'https://embassy.by/assets/images/products/56/large/dizayn-bez-nazvaniya.jpg'
            }
        ]
    },
    {
        id: '167fa5de-1853-4a06-b767-0a3cd8ae4f76',
        name: 'Картошка',
        description: 'Пирожное на основе шоколадного бисквита с марципаном, ванильного бисквита с добавлением шоколада, орехов и пасты «Пралине».',
        price: 7.6,
        weight: 150,
        isOrderCountLimited: true,
        minimumOrderCount: 4,
        isOutOfStock: false,
        pictures: [
            {
                id: 'fe1f2159-8204-469e-8459-55ab47ae6009',
                shortName: 'Potato Cake',
                url: 'https://brioche.by/sites/default/files/styles/prodteaser/public/product/%D0%BA%D0%B0%D1%80%D1%82%D0%BE%D1%85%D0%B0.jpg'
            }
        ]
    },
    {
        id: 'd5bfed98-88b2-4ed0-abb7-c789e22fd874',
        name: 'Тирамису',
        description: 'Печенье Савоярди, именуемое «дамским пальчиком» пропитанное кофе, под слоем воздушного маскарпоне',
        price: 10,
        weight: 250,
        isOrderCountLimited: true,
        minimumOrderCount: 4,
        isOutOfStock: false,
        pictures: [
            {
                id: '2ccb613a-574d-4632-bd55-6dcee6759661',
                shortName: 'Tiramisu',
                url: 'https://embassy.by/assets/images/products/47/large/tiramisu-1.jpg'
            }
        ]
    },
    {
        id: 'e71118f7-4ba2-4ac4-a8b5-88e79b17dc0c',
        name: 'Тарталетка «Монблан»',
        description: 'В основании тарталетки «Монблан» от Brioche Paris песочно-миндальное тесто, ванильный крем и свежая голубика.',
        price: 12,
        weight: 250,
        isOrderCountLimited: true,
        minimumOrderCount: 6,
        isOutOfStock: false,
        pictures: [
            {
                id: 'e78ae5a7-16ba-4bac-bd9f-5f314c6a03c1',
                shortName: 'Tartlet',
                url: 'https://brioche.by/sites/default/files/styles/prodteaser/public/product/21DF4E10-DF55-4B1D-9CE2-05F0C5589CB9-407-0000017741F5FA08.jpg'
            }
        ]
    }
]
