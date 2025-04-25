import { StaticImageData } from 'next/image';

export type Development = {
    company: string;
    title: string;
    isProjectNew?: boolean;
    description: string;
    technologies: string[];
    image: StaticImageData;
    alt: string;
    colorCompany?: string;
    links?: {
        github?: string;
        page?: string;
    };
};