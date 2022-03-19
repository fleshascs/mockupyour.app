// import DownloadRow from '../components/DownloadRow';
// import { RowThumbnail } from '../components/RowThumbnail';
import { ratingSchema } from '../../components/utils';
import Example from '../../components/Example/Example';
import { FC } from 'react';
import Link from 'next/link';
import { Col, Row } from '../../components/Grid';

interface CardProps {
  href: string;
}

const Card: FC<CardProps> = ({ href }) => {
  return (
    <Link href={href}>
      <a className='outline-none hover:border-amber-300 border-transparent border-2 hover:border-current hover:cursor-pointer'>
        <div className='max-w-sm rounded overflow-hidden shadow-lg bg-white'>
          <img
            // className='w-full'
            className='m-auto w-28'
            // src='https://v1.tailwindcss.com/img/card-top.jpg'
            src='https://mockuphone.com/static/images/devices/apple-iphone13mini-midnight-portrait.png'
            alt='Sunset in the mountains'
          />
          <div className='px-6 py-4'>
            <div className='font-bold text-xl mb-2'>iPhone 13 pro</div>
            <p className='text-gray-700 text-base'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
            </p>
          </div>
          <div className='px-6 pt-4 pb-2'>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #photography
            </span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #travel
            </span>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              #winter
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default function Page() {
  return (
    <>
      {/* <DownloadRow lazy={false} />

      <RowThumbnail
        alt='original cs 1.6 game'
        src={require('../images/game/header.jpg?resize&size=485')}
        webp={require('../images/game/header.jpg?resize&size=485&format=webp')}
      /> */}

      <h2 className='text-3xl pb-3'>Choose a template</h2>
      <div className='grid grid-cols-4 gap-4'>
        {Array.from({ length: 30 }, (_, i) => (
          <Card key={i} href='/templates/iphone-13-pro' />
        ))}
      </div>
      <Example />
    </>
  );
}

Page.layoutProps = {
  meta: {
    title: '3D mockup',
    description: ''
  },
  schema: ratingSchema({ ratingValue: '4.7', ratingCount: '16864' })
};
