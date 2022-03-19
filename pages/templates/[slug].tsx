import { ratingSchema } from '../../components/utils';
import Example from '../../components/Example/Example';
import { useState } from 'react';
import Link from 'next/link';
import { Col, Row } from '../../components/Grid';
import { DownloadIcon, PhotographIcon } from '@heroicons/react/outline';
import Crop from '../../components/icons/Crop';
import { Button } from '../../components/Button';
import Segmented from '../../components/Segmented';
import SegmentedButton from '../../components/SegmentedButton';
import { EditorContext, subject } from '../../components/Editor/EditorContext';

export default function Page() {
  const [activeSegmented, setActiveSegmented] = useState(2);
  return (
    <EditorContext.Provider value={subject}>
      <Row>
        <div className='basis-1/3'>
          <div className='rounded overflow-hidden shadow-lg bg-white h-full'>
            {/* <div className='mb-2 border-solid border-grey-light rounded border shadow-sm'> */}
            <div>
              <div className='bg-grey-lighter px-2 py-3 border-solid border-grey-light border-b'>
                <Button variant='dashed'>
                  <PhotographIcon className='h-5 w-5' />
                  <span className='hidden md:inline'>Upload Cover</span>
                </Button>
              </div>
              <div className='bg-grey-lighter px-2 py-3 border-solid border-grey-light border-b my-auto'>
                Export options
              </div>

              <div className='p-3 space-y-3'>
                <Segmented>
                  <SegmentedButton
                    active={activeSegmented === 1}
                    onClick={() => {
                      setActiveSegmented(1);
                    }}
                  >
                    PNG
                  </SegmentedButton>
                  <SegmentedButton
                    active={activeSegmented === 2}
                    onClick={() => {
                      setActiveSegmented(2);
                    }}
                  >
                    JPG
                  </SegmentedButton>
                </Segmented>

                <Segmented>
                  <SegmentedButton
                    active={activeSegmented === 1}
                    onClick={() => {
                      setActiveSegmented(1);
                    }}
                  >
                    1175x783
                  </SegmentedButton>
                  <SegmentedButton
                    active={activeSegmented === 2}
                    onClick={() => {
                      setActiveSegmented(2);
                    }}
                  >
                    1175x783
                  </SegmentedButton>
                  <SegmentedButton
                    active={activeSegmented === 3}
                    onClick={() => {
                      setActiveSegmented(3);
                    }}
                  >
                    1175x783
                  </SegmentedButton>
                </Segmented>

                <Button
                  variant='primary'
                  onClick={() => {
                    subject.next('png');
                  }}
                >
                  <DownloadIcon className='h-5 w-5' />
                  <span className='hidden md:inline'>Download</span>
                </Button>

                <Button variant='primary'>
                  <Crop className='h-5 w-5' /> <span className='hidden md:inline'>Crop image</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className='basis-2/3'>
          <div className='rounded overflow-hidden shadow-lg bg-white flex border-dotted'>
            <Example />
          </div>
          {/* <div className='mt-3'>
           
          </div> */}
        </div>
      </Row>
    </EditorContext.Provider>
  );
}

Page.layoutProps = {
  meta: {
    title: '3D mockup',
    description: ''
  },
  schema: ratingSchema({ ratingValue: '4.7', ratingCount: '16864' })
};

// <div class='flex justify-center'>
//                   <div>
//                     <div class='form-check'>
//                       <input
//                         class='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
//                         type='radio'
//                         name='flexRadioDefault'
//                         id='flexRadioDefault1'
//                       />
//                       <label
//                         class='form-check-label inline-block text-gray-800'
//                         for='flexRadioDefault1'
//                       >
//                         1175x783
//                       </label>
//                     </div>

//                     <div class='form-check'>
//                       <input
//                         class='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
//                         type='radio'
//                         name='flexRadioDefault'
//                         id='flexRadioDefault2'
//                         checked
//                       />
//                       <label
//                         class='form-check-label inline-block text-gray-800'
//                         for='flexRadioDefault2'
//                       >
//                         1200x800
//                       </label>
//                     </div>

//                     <div class='form-check'>
//                       <input
//                         class='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
//                         type='radio'
//                         name='flexRadioDefault'
//                         id='flexRadioDefault1'
//                       />
//                       <label
//                         class='form-check-label inline-block text-gray-800'
//                         for='flexRadioDefault1'
//                       >
//                         2400x1600
//                       </label>
//                     </div>

//                     <div class='form-check'>
//                       <input
//                         class='form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
//                         type='radio'
//                         name='flexRadioDefault'
//                         id='flexRadioDefault1'
//                       />
//                       <label
//                         class='form-check-label inline-block text-gray-800'
//                         for='flexRadioDefault1'
//                       >
//                         6000x4000
//                       </label>
//                     </div>
//                   </div>
//                 </div>
