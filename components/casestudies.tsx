import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { truncateText } from '@/lib/utils';

export default function CaseStudies() {

    const caseStudies = [
        {
            id: 1,
            title: 'Kimokouwa WIM/Static weigh station-Off 10km Namanga boarder post/Arusha Tanzania',
            description: 'Kimokouwa WIM/Static weigh station-Off 10km Namanga boarder post/Arusha Tanzania. AEA-Scope was electromechanical sub-contractor to supply and install 2units –22mx 3.5M Multdeck Static Weigbridges, 2 Units- WIM lanes, Configure and install weighbridge weighing and CCTV management software including GEPG-API',
            image: '/images/kimokouwa.jpeg',
            link: '/case-studies/case-study-1'
        },
        {
            id: 2,
            title: 'Tanroads group Axle weighers Project',
            description: 'AEA-Scope was to supply and install 5 Units 3.5M x 4.5M each per region, Configure and install weighbridge weighing management software including GEPG-API and integrate with Tanroads HQ',
            image: '/images/MIKESE.jpeg',
            link: '/case-studies/case-study-2'
        },
        {
            id: 3,
            title: 'Mikumi & Mikese Wim Lanes',
            description: 'AEA-Scope was to supply and install 3 WIM lanes 2 @ Mikumi & 1 at Mikes, Install fiber optic and power cable connecting to the existing weighing station, Construct Police booths & ISINC cages for both sites, Intergrade with Tanroads HQ using T-load platform',
            image: '/images/MIKUMI.jpg',
            link: '/case-studies/case-study-3'
        }
    ];

  return (
    <div className='bg-[url("/images/redbg.jpg")] bg-cover bg-center pb-8'>
        <div className='container mx-auto grid md:grid-cols-2 gap-6 px-6'>
            <div className=''>
                <h2 className='text-3xl font-bold text-yellow-300 mt-10'>Case Studies</h2>
                <p className='text-white md:text-4xl mt-4 text-2xl'>Explore our case studies to see how we have helped businesses like yours achieve their goals.</p>
                <div className='my-10 ml-0'>
                </div>
            </div>
        </div>
        <div className='container mx-auto grid md:grid-cols-3 gap-6 px-6 mb-10'>
            {caseStudies.map((caseStudy) => (
                <div key={caseStudy.id} className='bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300'>
                    <Image src={caseStudy.image} alt={caseStudy.title} width={500} height={300} className='w-full h-48 object-cover mb-4' />
                    <h3 className='text-xl font-bold text-primary mt-10'>{caseStudy.title}</h3>
                    <p className='text-gray-600 mt-4'>{truncateText(caseStudy.description, 150)}</p>
                    <Link href={caseStudy.link} className='text-primary hover:underline flex items-center gap-2 mt-4'>
                        Read More <ArrowRightIcon/>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}
