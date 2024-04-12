import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from './ProductCard';
import { PRODUCT_1 } from '../../app/constants/temp';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProductCard> = {
  title: 'ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example: Story = {
  args: {
    price: PRODUCT_1.price,
    img: PRODUCT_1.img,
    name: PRODUCT_1.name,
    description: PRODUCT_1.description,
  },
};
