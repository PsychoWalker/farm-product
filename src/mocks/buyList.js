const products = [
    {
        id: 0,
        title: 'Филе бедра цыплёнка',
        src: 'https://4.downloader.disk.yandex.ru/preview/07c3135df9dfaed614ae981cdabf61b07cb66f7a50f2ee23b964a91f9c70ac2a/inf/99F710eTGlH-5hEJgAc1a0hlBYw_m1VbZfBUOuH74R_SIcJScgfphPP5s0P9Ebyg5oaNxBUxHxzxLt12yB63UQ%3D%3D?uid=474972737&filename=meat-1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=474972737&tknv=v2&size=1920x931',
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
        src: 'https://1.downloader.disk.yandex.ru/preview/7b406f507adc8166423b4af2c4bc2838e9261e977e5a3142f3efad204ce676a3/inf/K0znsgu9QKiaWhTflzCjF5H-1MUodD9gWDAsIM5RaTgsQaWfma6FM5Z6vR8Fk5VV-QfKcvfpOntETXulVAGroQ%3D%3D?uid=474972737&filename=meat-2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=474972737&tknv=v2&size=1920x931',
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
        src: 'https://4.downloader.disk.yandex.ru/preview/07c3135df9dfaed614ae981cdabf61b07cb66f7a50f2ee23b964a91f9c70ac2a/inf/99F710eTGlH-5hEJgAc1a0hlBYw_m1VbZfBUOuH74R_SIcJScgfphPP5s0P9Ebyg5oaNxBUxHxzxLt12yB63UQ%3D%3D?uid=474972737&filename=meat-1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=474972737&tknv=v2&size=1920x931',
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
        src: 'https://1.downloader.disk.yandex.ru/preview/7b406f507adc8166423b4af2c4bc2838e9261e977e5a3142f3efad204ce676a3/inf/K0znsgu9QKiaWhTflzCjF5H-1MUodD9gWDAsIM5RaTgsQaWfma6FM5Z6vR8Fk5VV-QfKcvfpOntETXulVAGroQ%3D%3D?uid=474972737&filename=meat-2.png&disposition=inline&hash=&limit=0&content_type=image%2Fpng&owner_uid=474972737&tknv=v2&size=1920x931',
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
        src: 'https://4.downloader.disk.yandex.ru/preview/07c3135df9dfaed614ae981cdabf61b07cb66f7a50f2ee23b964a91f9c70ac2a/inf/99F710eTGlH-5hEJgAc1a0hlBYw_m1VbZfBUOuH74R_SIcJScgfphPP5s0P9Ebyg5oaNxBUxHxzxLt12yB63UQ%3D%3D?uid=474972737&filename=meat-1.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=474972737&tknv=v2&size=1920x931',
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

export default products;
