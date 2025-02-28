import Link from 'next/link';

const CustomButton = ({ type, title }) => {
    return (
        <Link href="/aboutUs">
            <button
                type={type}
                className='bg-gradient-to-r from-DarkYellow to-MidYellow rounded-full shadow-xl px-7 py-2 text-sm text-white font-semibold hover:scale-110 inline-block transition-transform duration-200 hover:text-goldMid cursor-pointer'
            >
                {title}
            </button>
        </Link>
    );
};

export default CustomButton;
