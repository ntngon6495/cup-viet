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

export const convertDate = (
	strDate,
	format = 'DD/MM/YYYY',
	opts
) => {
	if (!strDate) return '';
	let date = opts?.inputFormat
    ? Date(strDate, opts?.inputFormat)
    : Date(strDate);
	if (!date.isValid()) return false;

	//return date
	if (opts?.returnDate) return date;
	//return unix
	if (opts?.unix) return date.unix();
	//set utc
	if (opts?.utc) {
		date = date.utc();
	}

	return format ? date.format(format) : date.format();
};