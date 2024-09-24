// import  { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';


export const mergeClass = (...inputs) => {
	return twMerge(clsx(inputs));
};

let timer;
export const debounce = (cb, timeout) => {
	timer && clearTimeout(timer);
	timer = setTimeout(
		() => {
			cb();
		},
		timeout || timeout === 0 ? timeout : 500
	);
};