import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {SeminalTag} from '.';
import { CheckCircleRounded } from '@mui/icons-material';

const meta = {
  title: 'Components/Seminal Tag',
  component: SeminalTag,
  parameters: {
  },
  tags: ['autodocs'],
  argTypes: {
    label: {control: 'text'},
  },
} satisfies Meta<typeof SeminalTag>;

export default meta;
type Story = StoryObj<typeof meta>;

/** A primary Button */
export const Default: Story = {
  args: {
    label: 'Tag Title',
    color: 'blue',
    isFilled: true,
  },
}

/** Varients we're using in Seminal */
export const Varients: Story = {
  args: {
    label: 'Tag Title',
    color: 'blue',
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <SeminalTag  color='green' label='Tag Title' isFilled />  {' '}
        <SeminalTag  color='red' label='Tag Title' isFilled/> {' '}
        <SeminalTag  color='blue' label='Tag Title' isFilled/> {' '}
        <SeminalTag  color='black' label='Tag Title' isFilled/> {' '}
        <SeminalTag  color='yellow' label='Tag Title' isFilled/> {' '}
        <SeminalTag  color='orange' label='Tag Title' isFilled/> {' '}
        <SeminalTag  color='purple' label='Tag Title' isFilled/> {' '}
        <br />{' '}
        <br />{' '}
        <br />{' '}
        <SeminalTag  color='green' label='Tag Title'/>  {' '}
        <SeminalTag  color='red' label='Tag Title' /> {' '}
        <SeminalTag  color='blue' label='Tag Title' /> {' '}
        <SeminalTag  color='black' label='Tag Title' /> {' '}
        <SeminalTag  color='yellow' label='Tag Title' /> {' '}
        <SeminalTag  color='orange' label='Tag Title' /> {' '}
        <SeminalTag  color='purple' label='Tag Title' /> {' '}
      </div>
    ),
  ],
};

/** Sizes we're using in Seminal */
export const Sizes: Story = {
  args: {
    label: 'Tag Title',
    color: 'blue',
  },
 
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <SeminalTag  color='green' label='Tag Title' isFilled size='lg'/>  {' '}
        <SeminalTag  color='red' label='Tag Title' isFilled size='md'/> {' '}
        <SeminalTag  color='blue' label='Tag Title' isFilled size='sm'/> {' '}
      </div>
    ),
  ],
};

export const WithIcons: Story = {
  args: {
    label: 'Tag Title',
    color: 'blue',
  },
 
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>        
        <SeminalTag 
          isFilled 
          size='lg'
          color='green'
          label='Tag Title'
          iconType='front'
          Icon={CheckCircleRounded}
        /> {' '}
        <SeminalTag 
          size='lg'
          color='red' 
          label='Tag Title' 
          iconType='front' 
          Icon={CheckCircleRounded}
        /> {' '}
        <br/> <br/>
        <SeminalTag 
          size='lg'
          color='yellow' 
          label='Tag Title' 
          isFilled 
          iconType='back' 
          Icon={CheckCircleRounded}
        /> {' '}
        <SeminalTag
          size='lg'
          color='purple' 
          label='Tag Title' 
          iconType='back' 
          Icon={CheckCircleRounded}
        /> {' '}
      </div>
    ),
  ],
};

/** Sizes we're using in Seminal Tag */
export const Truncate: Story = {
  args: {
    label: 'Very loooong Tag Title',
    color: 'blue',
    isFilled: true,
    size:'lg',
    truncate: true
  }
}

/** Onclick event in Seminal Tag */
export const Onclick: Story = {
  args: {
    label: 'Tag Title',
    color: 'purple',
    isFilled: true,
    size:'lg',
    onClick: () => alert('Tag Clicked!')
  }
}