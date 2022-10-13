/// <reference types="astro/client" />

export type Config = {
	url: {
		tickets: {
			prefix: string;
			// suffix?: string
		};
		songList: string;
	};
};

export type Place = {
	city: string;
	date: string;
	fb: string;
	ticket: string;
	club: {
		name: string;
		link: string;
		http?: boolean;
		address: string;
		map: string;
	};
	position: {
		x: number;
		y: number;
	};
};
