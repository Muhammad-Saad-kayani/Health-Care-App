
import React, { useState } from 'react';
import Link from 'next/link';

export default function NavLinks({href , name}) {

    const [Modal , setModal] = useState(false)

    const handleModal = () => {
        setModal(true)
    }
  return (
    <>
    <Link
              href="{href}"
              // onMouseEnter={() => handleModalOpen('pharmacy')}
              // onMouseLeave={handleModalClose}
              className="text-blue-900 hover:underline"
              onClick={handleModal}
            >
              {name} 
            </Link>

            
                {Modal && 
                <div>
                    hi
                </div>
                }
                </>
  )
}
