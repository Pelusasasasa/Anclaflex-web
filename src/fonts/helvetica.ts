import localFont from 'next/font/local';

export const helvetica = localFont({
    src: [
        {
            path: '../../public/fonts/Helvetica-Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Helvetica-Regular.otf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../../public/fonts/Helvetica-Thin.otf',
            weight: '200',
            style: 'normal',
        },
    ],
    variable: '--font-helvetica',
    display: 'swap'
})