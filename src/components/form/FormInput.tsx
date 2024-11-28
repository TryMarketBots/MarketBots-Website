import React from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import { CheckCircle } from 'lucide-react';
import type { FormField } from './types';

interface FormInputProps extends FormField {
  value: any;
  onChange: (name: string, value: any) => void;
  error?: string;
}

export default function FormInput({ 
  name,
  label,
  type,
  required,
  placeholder,
  options,
  helpText,
  value,
  onChange,
  error
}: FormInputProps) {
  const baseInputClasses = clsx(
    "w-full px-4 py-3 bg-[#1a1f3d] rounded-lg",
    "border transition-colors duration-200",
    "text-white placeholder-gray-400",
    "focus:outline-none focus:ring-2 focus:ring-blue-500",
    error 
      ? "border-red-500" 
      : "border-blue-500/20 focus:border-transparent"
  );

  const renderInput = () => {
    switch (type) {
      case 'select':
        return (
          <select
            name={name}
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
            className={baseInputClasses}
            required={required}
          >
            <option value="">{placeholder}</option>
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );

      case 'multiselect':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {options?.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => {
                  const newValue = Array.isArray(value) 
                    ? value.includes(option)
                      ? value.filter(v => v !== option)
                      : [...value, option]
                    : [option];
                  onChange(name, newValue);
                }}
                className={clsx(
                  "flex items-center p-4 rounded-lg text-left transition-colors duration-200",
                  Array.isArray(value) && value.includes(option)
                    ? "bg-blue-500 text-white"
                    : "bg-[#1a1f3d] text-gray-200 hover:bg-blue-500/20"
                )}
              >
                <CheckCircle 
                  className={clsx(
                    "w-5 h-5 mr-3 transition-opacity duration-200",
                    Array.isArray(value) && value.includes(option)
                      ? "opacity-100"
                      : "opacity-0"
                  )} 
                />
                {option}
              </button>
            ))}
          </div>
        );

      case 'checkbox':
        return (
          <label className="flex items-start cursor-pointer">
            <input
              type="checkbox"
              checked={value}
              onChange={(e) => onChange(name, e.target.checked)}
              className="mt-1.5 mr-3"
              required={required}
            />
            <span className="text-gray-200">{label}</span>
          </label>
        );

      default:
        return (
          <input
            type={type}
            name={name}
            value={value}
            onChange={(e) => onChange(name, e.target.value)}
            placeholder={placeholder}
            className={baseInputClasses}
            required={required}
          />
        );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-2"
    >
      {type !== 'checkbox' && (
        <label className="block text-gray-200 font-medium">
          {label}
          {!required && (
            <span className="text-gray-400 text-sm ml-2">(Optional)</span>
          )}
        </label>
      )}
      {renderInput()}
      {helpText && (
        <p className="text-gray-400 text-sm">{helpText}</p>
      )}
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </motion.div>
  );
}