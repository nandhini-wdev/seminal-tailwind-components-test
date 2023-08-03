import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {SeminalSelect} from '.';

const meta = {
  title: 'Components/Seminal Select',
  component: SeminalSelect,
  tags: ['autodocs'],
  argTypes: {
    options:{
      control:'object'
    }
  },
} satisfies Meta<typeof SeminalSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      {value: '1', label: 'Option 1'},
      {value: '2', label: 'Option 2'},
      {value: '3', label: 'Option 3'},
      {value: '4', label: 'Option 4'},
      {value: '5', label: 'Option 5'},
      {value: '6', label: 'Option 6'},
    ],
    selectedValue:'2'
  },
};

