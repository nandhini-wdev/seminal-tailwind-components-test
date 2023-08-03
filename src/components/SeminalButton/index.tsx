import classNames from 'classnames';
import React from 'react';
import '../../main.css'

export interface SeminalButtonProps {
    children?: any;
    className?: string;
    size?: 'lg' | 'md' | 'sm';
    color: 'primary' | 'secondary' | 'teritary' | 'quaternary';
    type?: 'circle'| 'square'
    disabled?: boolean;
    loading?: boolean;
    FrontIcon?: any;
    BackIcon?: any;
    SingleIcon?: any;
    onClick?: () => void;
}

export const SeminalButton = ({
    size, color, onClick, children, className, disabled = false, loading, FrontIcon, BackIcon, SingleIcon, type
}: SeminalButtonProps) => {
    const classes = classNames('font-semibold inline-flex justify-center items-center', className, {
        'rounded-lg': type === 'square' || !type,
        'rounded-[36px]': type === 'circle',
        'cursor-not-allowed': disabled,
        'cursor-pointer': !!onClick,
        'text-sm px-4 py-2': size === 'sm',
        'text-base px-6 py-3': size === 'md',
        'text-lg px-10 py-4': (size === 'lg' || !size) && !SingleIcon,
        'w-14 h-14 p-4 ': !!SingleIcon,
        'bg-content-primary text-white hover:bg-content-secondary pressed:bg-content-teritary disabled:bg-background-teritary disabled:text-content-inverse-teritary': color === 'primary',
        'bg-primary text-white hover:bg-blue-hover pressed:bg-blue-pressed disabled:bg-background-teritary disabled:text-content-inverse-teritary': color === 'secondary',
        'bg-background-primary shadow text-black border border-border-primary hover:bg-background-secondary pressed:bg-background-teritary disabled:bg-background-teritary disabled:text-content-inverse-teritary': color === 'teritary',
        'transparent text-primary hover:bg-blue-light pressed:bg-blue-dark disabled:text-content-inverse-teritary': color === 'quaternary',
    })
    return (
        <div>
            <button className={classes} disabled={disabled} onClick={() => onClick}>
                {/* {!!loading && <SeminalSpinner size={16} />} */}
                {!SingleIcon && !!FrontIcon && <FrontIcon sx={{ width: size === 'sm' ? '20px' : size === 'md' ? '22px' : '24px' }} className='mr-2.5' />}
                {children}
                {!!SingleIcon && <SingleIcon />}
                {!SingleIcon && !!BackIcon && <BackIcon sx={{ width: size === 'sm' ? '20px' : size === 'md' ? '22px' : '24px' }} className='ml-2.5' />}
            </button>
        </div>
    );
};
