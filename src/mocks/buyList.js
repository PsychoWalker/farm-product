const buyList = [
    {
        id: 0,
        title: 'Филе бедра цыплёнка',
        src: 'https://downloader.disk.yandex.ru/preview/753d52e0761d038b05bd8652fc0e1dcd1e64073baf89dd3d95c2a2b63f88133d/656880e1/99F710eTGlH-5hEJgAc1a0hlBYw_m1VbZfBUOuH74R_SIcJScgfphPP5s0P9Ebyg5oaNxBUxHxzxLt12yB63UQ%3D%3D?uid=0&filename=meat-1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
        price: '400',
        description: 'Филе бедра без кожи и кости. Птица содержится в свободных птичниках, выращивается на натуральных зерновых кормах, что влияет положительно на вкус мяса. Филейная часть бедра обладает насыщенным вкусом и мясным ароматом.',
        characteristic:
            {
                weight: ['700', '0,7 кг. (595-805 г.)'],
                term: '6 суток',
                pride: 'КОББ 500',
                locate: 'Тверская область'
            }
        ,
            properties: {
                energy: '135 ккал./565 кДж.',
                food: 'белки - 13,8 г., жиры - 8,7 г., углеводы - 0 г.; на 100 г.'
            }
    },
    {
        id: 1,
        title: 'Филе бедра гуся',
        src: 'https://downloader.disk.yandex.ru/preview/d2109df24b466ae7258b5ea54f224824d8f1671b5dd7d1820d9fe4105e660275/65688105/K0znsgu9QKiaWhTflzCjF5H-1MUodD9gWDAsIM5RaTgsQaWfma6FM5Z6vR8Fk5VV-QfKcvfpOntETXulVAGroQ%3D%3D?uid=0&filename=meat-2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1920x919',
        price: '500',
        description: 'Филе бедра гуся - это тонко нарезанный продукт, который понравится всем любителям сырокопченых продуктов. Необычный вкус, аппетитный аромат и тонкое послевкусия отличает сырокопченого гуся от других подобных продуктов.',
        characteristic:
            {
                weight: ['700', '0,7 кг. (595-805 г.)'],
                term: '5 суток',
                pride: 'ХРЯП 666',
                locate: 'Тверская область'
            }
        ,
        properties: {
            energy: '13 ккал./56 кДж.',
            food: 'белки - 13,8 г., мыши - 8,7 г., совы - 0 г.; на 100 г.'
        }
    },
    {
        id: 2,
        title: 'Мякоть бедра говяжья',
        src: 'https://downloader.disk.yandex.ru/preview/753d52e0761d038b05bd8652fc0e1dcd1e64073baf89dd3d95c2a2b63f88133d/656880e1/99F710eTGlH-5hEJgAc1a0hlBYw_m1VbZfBUOuH74R_SIcJScgfphPP5s0P9Ebyg5oaNxBUxHxzxLt12yB63UQ%3D%3D?uid=0&filename=meat-1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
        price: '700',
        description: 'Мякоть бедра говяжья - это тонко нарезанный продукт, который понравится всем любителям сырокопченых продуктов. Необычный вкус, аппетитный аромат и тонкое послевкусия отличает сырокопченого гуся от других подобных продуктов.',
        characteristic:
            {
                weight: ['1700', '1,7 кг. (1500-1900 г.)'],
                term: '5 суток',
                pride: 'ИЗЕККИИЛЬ 25/17',
                locate: 'Тверская область'
            }
        ,
        properties: {
            energy: '13 ккал./56 кДж.',
            food: 'белки - 113,8 г., мыши - 18,7 г., совы - 10 г.; на 100 г.'
        }
    },
    {
        id: 3,
        title: 'Грудка цыплёнка на кости',
        src: 'https://downloader.disk.yandex.ru/preview/753d52e0761d038b05bd8652fc0e1dcd1e64073baf89dd3d95c2a2b63f88133d/656880e1/99F710eTGlH-5hEJgAc1a0hlBYw_m1VbZfBUOuH74R_SIcJScgfphPP5s0P9Ebyg5oaNxBUxHxzxLt12yB63UQ%3D%3D?uid=0&filename=meat-1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=0&tknv=v2&size=2048x2048',
        price: '300',
        description: 'Мякоть бедра говяжья - это тонко нарезанный продукт, который понравится всем любителям сырокопченых продуктов. Необычный вкус, аппетитный аромат и тонкое послевкусия отличает сырокопченого гуся от других подобных продуктов.',
        characteristic:
            {
                weight: ['1700', '1,7 кг. (1500-1900 г.)'],
                term: '5 суток',
                pride: 'ИЗЕККИИЛЬ 25/17',
                locate: 'Тверская область'
            }
        ,
        properties: {
            energy: '13 ккал./56 кДж.',
            food: 'белки - 113,8 г., мыши - 18,7 г., совы - 10 г.; на 100 г.'
        }
    },
    {
        id: 4,
        title: 'Голень цыплёнка',
        src: 'https://downloader.disk.yandex.ru/preview/d2109df24b466ae7258b5ea54f224824d8f1671b5dd7d1820d9fe4105e660275/65688105/K0znsgu9QKiaWhTflzCjF5H-1MUodD9gWDAsIM5RaTgsQaWfma6FM5Z6vR8Fk5VV-QfKcvfpOntETXulVAGroQ%3D%3D?uid=0&filename=meat-2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=0&tknv=v2&size=1920x919',
        price: '500',
        description: 'Мякоть бедра говяжья - это тонко нарезанный продукт, который понравится всем любителям сырокопченых продуктов. Необычный вкус, аппетитный аромат и тонкое послевкусия отличает сырокопченого гуся от других подобных продуктов.',
        characteristic:
            {
                weight: ['1500', '1,5 кг. (1300-1700 г.)'],
                term: '5 суток',
                pride: 'ИЗЕККИИЛЬ 25/17',
                locate: 'Тверская область'
            }
        ,
        properties: {
            energy: '13 ккал./56 кДж.',
            food: 'белки - 113,8 г., мыши - 18,7 г., совы - 10 г.; на 100 г.'
        }
    }
]

export default buyList;
