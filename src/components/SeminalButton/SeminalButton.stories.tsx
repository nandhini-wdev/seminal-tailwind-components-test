import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {SeminalButton} from '.';
import { CheckCircleRounded, Search, ChevronLeft, ChevronRight, NotificationsNoneOutlined, DashboardOutlined } from '@mui/icons-material';


const meta = {
    title: 'Components/Seminal Button',
    component: SeminalButton,
    parameters: {
    },
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: { type: 'select' },
            options: ['lg', 'md', 'sm']
        },
        color: {
            control: { type: 'select' },
            options: ['primary', 'secondary', 'teritary', 'quaternary']
        },
        type: {
            control: { type: 'select' },
            options: ['circle', 'square']
        },
    },
} satisfies Meta<typeof SeminalButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Button Title',
        color: 'primary',
    },
}

/** Sizes we're using in Seminal Button */
export const Varients: Story = {
    ...Default,
    decorators: [
        (Story) => (
            <div className='inline-flex m-5'>
                <SeminalButton color='primary' className='mr-2'>
                    Primary
                </SeminalButton>{' '}
                <SeminalButton color='secondary' className='mr-2'>
                    Secondary
                </SeminalButton>{' '}
                <SeminalButton color='teritary' className='mr-2'>
                    Teritary
                </SeminalButton>{' '}
                <SeminalButton color='quaternary' className='mr-2'>
                    Quaternary
                </SeminalButton>{' '}
            </div>
        ),
    ],
};

/** Sizes we're using in Seminal Button */
export const Sizes: Story = {
    ...Default,
    decorators: [
        (Story) => (
            <div className='inline-flex'>
                <SeminalButton color='primary' className='mr-2'>
                    Large btn
                </SeminalButton>{' '}
                <SeminalButton color='secondary' size='md' className='mr-2'>
                    Medium btn
                </SeminalButton>{' '}
                <SeminalButton color='teritary' size='sm'>
                    Small Btn
                </SeminalButton>{' '}
            </div>
        ),
    ],
};

/** Seminal Button with Icons */
export const WithIcons: Story = {
    ...Default,
    decorators: [
        (Story) => (
            <>
                <div className='flex '>
                    <SeminalButton color='primary' className='mr-2' FrontIcon={CheckCircleRounded}>
                        Large btn
                    </SeminalButton>{' '}
                    <SeminalButton color='secondary' size='md' className='mr-2' FrontIcon={CheckCircleRounded}>
                        Medium btn
                    </SeminalButton>{' '}
                    <SeminalButton color='teritary' size='sm' className='mr-2' FrontIcon={CheckCircleRounded}>
                        Small Btn
                    </SeminalButton>{' '}
                    <SeminalButton color='quaternary' size='sm' FrontIcon={CheckCircleRounded}>
                        Small Btn
                    </SeminalButton>{' '}
                </div>
                <br/>
                <div className='flex'>
                    <SeminalButton color='primary' className='mr-2' BackIcon={Search}>
                        Large btn
                    </SeminalButton>{' '}
                    <SeminalButton color='secondary' size='md' className='mr-2' BackIcon={Search}>
                        Medium btn
                    </SeminalButton>{' '}
                    <SeminalButton color='teritary' size='sm' className='mr-2' BackIcon={Search}>
                        Small Btn
                    </SeminalButton>{' '}
                    <SeminalButton color='quaternary' size='sm' BackIcon={Search}>
                        Small Btn
                    </SeminalButton>{' '}
                </div>
                <br/>
                <div className='flex'>
                    <SeminalButton color='primary' className='mr-2' FrontIcon={ChevronLeft} BackIcon={ChevronRight}>
                        Large btn
                    </SeminalButton>{' '}
                    <SeminalButton color='secondary' size='md' className='mr-2' FrontIcon={ChevronLeft} BackIcon={ChevronRight}>
                        Medium btn
                    </SeminalButton>{' '}
                    <SeminalButton color='teritary' size='sm' className='mr-2' FrontIcon={ChevronLeft} BackIcon={ChevronRight}>
                        Small Btn
                    </SeminalButton>{' '}
                    <SeminalButton color='quaternary' size='sm' FrontIcon={ChevronLeft} BackIcon={ChevronRight}>
                        Small Btn
                    </SeminalButton>{' '}
                </div>
            </>
        ),
    ],
};

/** Seminal Button with IconOnly */
export const IconOnly: Story = {
    ...Default,
    decorators: [
        (Story) => (
            <>
                <div className='flex '>
                    <SeminalButton color='primary' className='mr-2' SingleIcon={DashboardOutlined} />{' '}
                    <SeminalButton color='secondary' size='md' className='mr-2' SingleIcon={DashboardOutlined} />{' '}
                    <SeminalButton color='teritary' size='sm' className='mr-2' SingleIcon={DashboardOutlined} />{' '}
                    <SeminalButton color='quaternary' size='sm' SingleIcon={DashboardOutlined} />{' '}
                </div>
                <br/>
                <div className='flex'>
                    <SeminalButton color='primary' className='mr-2' SingleIcon={NotificationsNoneOutlined} type='circle' />{' '}
                    <SeminalButton color='secondary' size='md' className='mr-2' SingleIcon={NotificationsNoneOutlined} type='circle' />{' '}
                    <SeminalButton color='teritary' size='sm' className='mr-2' SingleIcon={NotificationsNoneOutlined} type='circle' />{' '}
                    <SeminalButton color='quaternary' size='sm' SingleIcon={NotificationsNoneOutlined} type='circle' />{' '}
                </div>
            </>
        ),
    ],
};