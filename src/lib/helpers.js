// import  { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';


export const mergeClass = (...inputs) => {
	return twMerge(clsx(inputs));
};