import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {SeminalText} from '.';

const meta = {
    title: 'Components/Seminal Text',
    component: SeminalText,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: {type: 'select'},
            options: ['xxs', 'xs', 'sm', 'md', 'lg']
        },
        type: {
            control: {type: 'select'},
            options: ['display', 'heading', 'body', 'caption', 'label']
        },
    },
  } satisfies Meta<typeof SeminalText>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;

/** Seminal Text Component */
export const Default: Story = {
    args: {
        size: 'md',
        type: 'heading',
        children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Age, inquies, ista parva sunt.'
    },
}

export const Display: Story = {
  ...Default,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <SeminalText
          size='lg'
          type='display'
        >
          Seminal Display Large
        </SeminalText><br/>

        <SeminalText
          size='md'
          type='display'
        >
           Seminal Display Medium
        </SeminalText><br/>

        <SeminalText
          size='sm'
          type='display'
        >
           Seminal Display Small
        </SeminalText>
      </div>
    ),
  ],
}

export const Heading: Story = {
  ...Default,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <SeminalText
          size='lg'
          type='heading'
        >
          Seminal Heading Large
        </SeminalText><br/>

        <SeminalText
          size='md'
          type='heading'
        >
          Seminal Heading Medium
        </SeminalText><br/>
      </div>
    ),
  ],
}

export const Body: Story = {
  ...Default,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <SeminalText
          size='lg'
          type='body'
        >
          Seminal Body Large
        </SeminalText><br/>

        <SeminalText
          size='md'
          type='body'
        >
          Seminal Body Medium
        </SeminalText><br/>

        <SeminalText
          size='sm'
          type='body'
        >
          Seminal Body Small
        </SeminalText><br/>

        <SeminalText
          size='xs'
          type='body'
        >
          Seminal Body xsmall
        </SeminalText><br/>

        <SeminalText
          size='xxs'
          type='body'
        >
          Seminal Body xxsmall
        </SeminalText><br/>
      </div>
    ),
  ],
}

export const Caption: Story = {
  ...Default,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <SeminalText
          size='lg'
          type='caption'
        >
          Seminal Caption Large
        </SeminalText><br/>

        <SeminalText
          size='md'
          type='caption'
        >
          Seminal Caption Medium
        </SeminalText><br/>

        <SeminalText
          size='sm'
          type='caption'
        >
          Seminal Caption Small
        </SeminalText><br/>

        <SeminalText
          size='xs'
          type='caption'
        >
          Seminal Caption xsmall
        </SeminalText><br/>
      </div>
    ),
  ],
}

export const Label: Story = {
  ...Default,
  decorators: [
    (Story) => (
      <div style={{ margin: '3em' }}>
        <SeminalText
          size='lg'
          type='label'
        >
          Seminal Label Large
        </SeminalText><br/>

        <SeminalText
          size='md'
          type='label'
        >
          Seminal Label Medium
        </SeminalText><br/>

        <SeminalText
          size='sm'
          type='label'
        >
          Seminal Label Small
        </SeminalText><br/>

        <SeminalText
          size='xs'
          type='label'
        >
          Seminal Label xsmall
        </SeminalText><br/>
      </div>
    ),
  ],
}

/** Seminal Text Component with Text Truncate*/
export const TextTruncate: Story = {
  args: {
      size: 'md',
      type: 'body',
      children: 'Ut proverbia non nulla veriora sint quam vestra dogmata. Id et fieri posse et saepe esse factum et ad voluptates percipiendas maxime pertinere. Duo Reges: constructio interrete. Multoque hoc melius nos veriusque quam Stoici. Sed haec quidem liberius ab eo dicuntur et saepius. Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum. Hanc ergo intuens debet institutum illud quasi signum absolvere.',
      textTruncate: 125
  },
}

/** Seminal Text Component with Readmore*/
export const ReadMore: Story = {
  args: {
      size: 'md',
      type: 'body',
      children: 'Ut proverbia non nulla veriora sint quam vestra dogmata. Id et fieri posse et saepe esse factum et ad voluptates percipiendas maxime pertinere. Duo Reges: constructio interrete. Multoque hoc melius nos veriusque quam Stoici. Sed haec quidem liberius ab eo dicuntur et saepius. Ut enim consuetudo loquitur, id solum dicitur honestum, quod est populari fama gloriosum. Hanc ergo intuens debet institutum illud quasi signum absolvere.',
      textTruncate: 25,
      readmore: true
  },
}

/** Seminal Text Component with Onclik*/
export const Onclick: Story = {
  args: {
      size: 'md',
      type: 'body',
      children: 'Click Me!!!',
      onClick: () => alert('You Clicked Me!')
  },
}