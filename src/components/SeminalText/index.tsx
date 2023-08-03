
import React, {useState} from 'react';
import classNames from 'classnames';
import { truncateText } from '../../tools';
import '../../main.css'

export interface SeminalTextProps {
    children: any;
    className?: string;
    type: 'display' | 'heading' | 'body' | 'caption' | 'label';
    size: 'xxs' | 'xs' | 'sm' | 'md' | 'lg';
    textTruncate?: number;
    readmore?: boolean; 
    onClick?: () => void;
}

export const SeminalText = ({
    type,
    size,
    textTruncate,
    readmore,
    onClick,
    ...rest
}: SeminalTextProps ) => {
  const [showText, setShowText] = useState(false);
    const classes = classNames(rest.className, {
        'cursor-pointer': !!onClick,
        // Display
        'text-[56px] leading-[76px] font-moderat-bold': type === 'display' && size === 'lg',
        'text-5xl leading-[64px] font-moderat-bold': type === 'display' && size === 'md',
        'text-[40px] leading-[56px] font-moderat-bold': type === 'display' && size === 'sm',
        // Heading
        'text-[32px] leading-[44px] font-moderat-bold': type === 'heading' && size === 'lg',
        'text-2xl text-2xl leading-9 font-moderat-bold': type === 'heading' && size === 'md',
        // Body
        'text-lg leading-7 font-moderat-light': type === 'body' && size === 'lg',
        'text-base leading-normal font-moderat-light': type === 'body' && size === 'md',
        'text-sm leading-tight font-moderat-light': type === 'body' && size === 'sm',
        'text-xs leading-none font-moderat-light': type === 'body' && size === 'xs',
        'text-[10px] leading-[14px] font-moderat-light': type === 'body' && size === 'xxs',        
        // caption        
        'text-lg leading-7 font-moderat-medium': type === 'caption' && size === 'lg',
        'text-base leading-normal font-moderat-medium': type === 'caption' && size === 'md',
        'text-sm leading-tight font-moderat-medium': type === 'caption' && size === 'sm',
        'text-xs leading-none font-moderat-medium': type === 'caption' && size === 'xs',
        // Label
        'text-lg leading-normal font-moderat-bold': type === 'label' && size === 'lg',
        'text-base leading-normal font-moderat-bold': type === 'label' && size === 'md',
        'text-sm leading-tight font-moderat-bold': type === 'label' && size === 'sm',
        'text-xs leading-none font-moderat-bold': type === 'label' && size === 'xs',
    })
  return (
    <div className={classes} onClick={() => onClick}>
      {!!textTruncate && !showText ? truncateText(rest.children, textTruncate) : rest.children}
      {!!readmore && !!textTruncate && rest.children?.toString().length > textTruncate && 
        <span className='cursor-pointer ml-2 underline' onClick={() =>setShowText(!showText)}>
          Read {showText ? 'Less': 'More'}
        </span>
      }
      </div>
  );
};
