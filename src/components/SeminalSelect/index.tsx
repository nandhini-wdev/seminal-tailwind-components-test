import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import classNames from 'classnames';
import {SeminalText} from '../SeminalText';
import '../../main.css'

export interface Ioptions {
  value: string | number;
  label: string;
  img?: string;
};

export const _defaultOptions = {
  value: '',
  label: '',
  img: '',
};

export interface SeminalSelectProps {
  size?: 'lg' | 'md' | 'sm'
  options: Ioptions[];
  title?: string;
  placeholder?: string;
  required?: boolean;
  formatOptionLabel?: any;
  selectedValue?: string | string[];
  disabled?: boolean;
  clearable?: boolean;
  multi?: boolean;
  className?: string;
  imageOption?: boolean;
  customOption?: boolean;
  fixedMenu?: boolean;
  error?: boolean;
  disableItem?: string;
  isSearchable?: boolean;
  isLoading?: boolean;
  onSelect?: (p: any) => void;
  onInputChange?: (p: any) => void;
}

export const SeminalSelect = ({
  size = 'lg',
  options,
  title = '',
  placeholder,
  required = false,
  formatOptionLabel,
  selectedValue,
  disabled = false,
  clearable = false,
  multi,
  className,
  imageOption,
  customOption,
  fixedMenu,
  error = false,
  disableItem,
  isSearchable = true,
  isLoading = false,
  onSelect,
  onInputChange,
}: SeminalSelectProps) => {
  const [inputValue, setInputValue] = useState('');
  const [selected, setSelected] = useState<Ioptions | Ioptions[]>();
  
  useEffect(() => {
    // @ts-ignore
    !multi && selectedValue && setSelected(options?.find((option) => option.value === selectedValue) ?? '');
    if (multi && !!selectedValue && selectedValue.length > 0) {
      // @ts-ignore
      const multiSelectedValue = options?.filter((option: any) => {
        if (selectedValue.includes(option.value)) {
          return option;
        };
      });
      setSelected(multiSelectedValue);
    }
    if (multi && !!selectedValue && selectedValue.length <= 0) setSelected([]);
    // @ts-ignore
    if (!multi && !selectedValue) setSelected('');
  }, [selectedValue, options, multi]);

  const formatOptionLabelwithFlag = ({ label, value, img }: any) => {
    return (
      <div >
        {!!img && <></>
          // <Image
          //   src={img}
          //   alt='seminal-select-flag'
          //   width={24}
          //   height={18}
          //   className='seminal-select-flag'
          // />
        }
        <SeminalText type='label' size='md' className='mb-2'>{label}</SeminalText>
      </div>
    );
  };

  return (
    <div className='box-border'>
      {!!title &&
        <SeminalText size={size} type='label' className='mb-1'>
          {title}{required && <span className='text-red-500'>*</span>}
        </SeminalText>
      }
      <Select
        classNames={{
          container: () => 'border-0',
          control: ({ isDisabled, isFocused, }) =>
            classNames(
              'bg-white !rounded-[8px] !shadow-none border !border-border-primary content-center !cursor-pointer min-w-[510px] !hover:border-border-primary active:border-border-primary',
              size === 'lg' && 'px-3 py-3.5 h-14',
              size === 'md' && 'px-3 py-3 h-12',
              size === 'sm' && 'px-3 py-2 h-9',
              isFocused && 'border-border-primary',
              error && '!border-red-500'
            ),
          valueContainer: () => "!p-0",
          placeholder: () => classNames(
            '!text-content-teritary font-moderat-light',
            size === 'lg' && '!text-lg leading-7',
            size === 'md' && '!text-base leading-normal',
            size === 'sm' && '!text-sm leading-tight'
          ),
          indicatorSeparator: () => 'hidden',
          menu: () => '!rounded-[8px] max-h-[300px] ',
          menuList: () => '!m-0 !p-0 border-0',
          option: ({isDisabled, isSelected}) => classNames(
            '!m-0 hover:bg-background-secondary !cursor-pointer',
            size === 'lg' && '!p-3 !text-lg',
            size === 'md' && '!px-3 !py-3 !text-base',
            size === 'sm' && '!px-3 !py-2 !text-sm',
            isDisabled && '!bg-[rgb(246, 246, 246)]',
            isSelected && '!bg-[#dff7df63] !text-black',
          ),
          input: () => classNames(
            '!p-0 !m-0 font-moderat-light',
            size === 'lg' && '!text-lg leading-7',
            size === 'md' && '!text-base leading-normal',
            size === 'sm' && '!text-sm leading-tight'
          )
        }}
        placeholder={placeholder}
        options={options}
        onChange={(e: any, { action }) => {
          if (action === 'clear') !!onSelect && onSelect('');
          multi ? !!onSelect && onSelect(e.map((item: Ioptions) => item.value)) :
            !!onSelect && onSelect(e.value ?? '');
        }}
        inputValue={inputValue}
        onInputChange={(value) => {
          setInputValue(value);
          !!onInputChange && onInputChange(value);
        }}
        formatOptionLabel={!!imageOption ? formatOptionLabelwithFlag : !!customOption && formatOptionLabel ? formatOptionLabel : ''}
        value={selected}
        // @ts-ignore
        defaultValue={selected}
        isDisabled={!!disabled}
        isClearable={!!clearable}
        isMulti={multi}
        menuPosition={fixedMenu ? 'fixed' : 'absolute'}
        // @ts-ignore
        isOptionDisabled={(option) => option[disableItem ?? '']}
        isSearchable={!!isSearchable}
        isLoading={!!isLoading}
      />
    </div>
  );
};
