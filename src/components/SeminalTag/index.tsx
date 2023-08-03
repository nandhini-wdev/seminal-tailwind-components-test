import React from 'react';
import classNames from 'classnames';
import { truncateText } from '../../tools';
import '../../main.css'
export interface SeminalTagProps {
    label: string;
    size?: "sm" | "md" | "lg";
    color: "green" | "red" | "blue" | "black" | "yellow" | "orange" | "purple" | "fullBlack";
    Icon?: any;
    iconType?: "front" | "back";
    truncate?: boolean;    
    isFilled?: boolean;
    onClick?: () => void;
}

export const SeminalTag = ({
    size='lg', color, Icon, iconType, truncate, label, isFilled, onClick
}: SeminalTagProps ) => {
    const classes = classNames("inline-flex items-center rounded-full font-moderat-medium px-3 py-1", {
        'cursor-pointer': !!onClick,
        'text-xs': size === 'sm',
        'text-sm': size === 'md',
        'text-base': size === 'lg',
        'bg-primitive-green text-content-inverse-primary': color === 'green' && isFilled,
        'bg-primitive-red text-content-inverse-primary': color === 'red' && isFilled,
        'bg-primary text-content-inverse-primary': color === 'blue' && isFilled,
        'bg-background-teritary text-content-primary': color === 'black' && isFilled,
        'bg-primitive-yellow text-content-inverse-primary': color === 'yellow' && isFilled,
        'bg-primitive-orange text-content-inverse-primary': color === 'orange' && isFilled,
        'bg-primitive-purple text-content-inverse-primary': color === 'purple' && isFilled,
        'bg-background-inverse-primary text-content-inverse-primary': color === 'fullBlack' && isFilled,
        'text-primitive-green': color === 'green' && !isFilled,
        'text-primitive-red': color === 'red' && !isFilled,
        'text-primary': color === 'blue' && !isFilled,
        'text-content-primary': color === 'black' && !isFilled,
        'text-primitive-yellow': color === 'yellow' && !isFilled,
        'text-primitive-orange': color === 'orange' && !isFilled,
        'text-primitive-purple': color === 'purple' && !isFilled,
    })
  return (
    <div className={classes} onClick={onClick}>
       {iconType === 'front' && Icon && 
        <Icon 
          fontSize={(size === 'sm') ? 'xsmall': (size === 'lg') ? 'medium': 'small'}
          className='mr-2.5'
        /> 
       } 
      <div>
        {!!truncate ? truncateText(label, 13): label }
      </div>
       {iconType === 'back' && Icon && 
        <Icon 
          fontSize={(size === 'sm') ? 'xsmall': (size === 'lg') ? 'medium': 'small'}
          className='ml-2.5'
        /> 
       }
    </div>
  );
};