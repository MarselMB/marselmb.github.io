import type { Meta, StoryObj } from '@storybook/react';
import ProductCard from './ProductCard';
import img from './1.png';

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
    price: 1000,
    img: img,
    name: 'Lord 2024',
    description:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique atque ea quod? Tempore debitis consectetur repellendus minus quae deserunt voluptatibus velit provident nihil, eaque, eos officia a, autem at temporibus!',
  },
};
