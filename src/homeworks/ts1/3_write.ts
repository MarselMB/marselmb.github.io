/**
 * Функции написанные здесь пригодятся на последующих уроках
 * С помощью этих функций мы будем добавлять элементы в список для проверки динамической загрузки
 * Поэтому в идеале чтобы функции возвращали случайные данные, но в то же время не абракадабру.
 * В целом сделайте так, как вам будет удобно.
 * */

/**
 * Нужно создать тип Category, он будет использоваться ниже.
 * Категория содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка, необязательно)
 *
 * Продукт (Product) содержит
 * - id (строка)
 * - name (строка)
 * - photo (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - oldPrice (число, необязательно)
 * - price (число)
 * - category (Категория)
 *
 * Операция (Operation) может быть либо тратой (Cost), либо доходом (Profit)
 *
 * Трата (Cost) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Cost')
 *
 * Доход (Profit) содержит
 * - id (строка)
 * - name (строка)
 * - desc (строка, необязательно)
 * - createdAt (строка)
 * - amount (число)
 * - category (Категория)
 * - type ('Profit')
 * */

import { v4 as uuidv4 } from 'uuid';
import { faker } from '@faker-js/faker';

interface ICategory {
  id: string;
  name: string;
  photo?: string;
}

interface IProduct extends Required<ICategory> {
  desc?: string;
  createdAt: string;
  oldPrice?: number;
  price: number;
  category: ICategory;
}

interface IOperation extends Omit<ICategory, 'photo'> {
  desc?: string;
  createdAt: string;
  amount: string;
  category: ICategory;
  type: 'Cost' | 'Profit';
}

interface IProductName {
  manufacturer: string;
  model: string;
}

const getRandomPhoto = (category: string): string => faker.image.urlLoremFlickr({ category });

const getRandomPrice = (): number => +faker.commerce.price({ min: 1000, max: 10000, dec: 0 });

const getRandomProductName = (): IProductName => ({
  manufacturer: faker.vehicle.manufacturer(),
  model: faker.vehicle.model(),
});

const getRandomDesc = () =>
  `fuel type: ${faker.vehicle.fuel()}, color: ${faker.vehicle.color()}, vehicle type: ${faker.vehicle.type()}`;

const getCategoryProduct = (manufacturer: string): ICategory => ({
  id: uuidv4(),
  name: manufacturer,
  photo: getRandomPhoto(manufacturer),
});

/**
 * Создает случайный продукт (Product).
 * Принимает дату создания (строка)
 * */
export const createRandomProduct = (createdAt: string): IProduct => {
  const { manufacturer, model } = getRandomProductName();

  return {
    id: uuidv4(),
    name: `${manufacturer} ${model}`,
    photo: getRandomPhoto('car'),
    desc: faker.datatype.boolean() ? getRandomDesc() : undefined,
    createdAt,
    oldPrice: faker.datatype.boolean() ? getRandomPrice() : undefined,
    price: getRandomPrice(),
    category: getCategoryProduct(manufacturer),
  };
};

/**
 * Создает случайную операцию (Operation).
 * Принимает дату создания (строка)
 * */
export const createRandomOperation = (createdAt: string): IOperation => {
  const { manufacturer, model } = getRandomProductName();

  return {
    id: uuidv4(),
    name: `${manufacturer} ${model}`,
    desc: faker.datatype.boolean() ? getRandomDesc() : undefined,
    createdAt,
    amount: `${getRandomPrice()}`,
    category: getCategoryProduct(manufacturer),
    type: faker.datatype.boolean() ? 'Cost' : 'Profit',
  };
};
