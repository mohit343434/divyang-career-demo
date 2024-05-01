import { Link } from 'react-router-dom';
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import LayoutWraper from "@/src/layout/LayoutWraper"

const MoreFaq = () => {
  return (
    <div className='flex flex-col items-center gap-10 '>
    
     <LayoutWraper >
        <div className="flex flex-col items-center  px-5 py-5 md:px-48 md:py-20">
          <div className='text-center'>
          <h1 className="text-md p-2 ">FAQ's</h1>
          <p className="text-2xl font-medium text-center">
            Any questions? We're here to help
          </p>
          </div>
          <Tabs className="my-5 w-full p-5 " defaultValue={"adip"}>
            <TabsList className="w-full bg-transparent ">
              <TabsTrigger value="adip" className="md:text-xl mx-0 data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black">
                Assistance to Disabled Persons(ADIP)
              </TabsTrigger>
              <TabsTrigger value="udid-card" className="md:text-xl  data-[state=active]:border-b-2 data-[state=active]:border-black data-[state=active]:text-black">
                UDID card
              </TabsTrigger>
            </TabsList>
            <TabsContent value="adip" className="md:px-10">
              <Accordion type="single" collapsible className="w-full flex flex-col gap-4 ">
                <AccordionItem value="item-1" className=" py-5 text-slate-600">
                  <AccordionTrigger className="text-[18px] text-start ">
                    What is Scheme of Assistance to Disabled Persons for
                    Purchase/Fitting of Aids/Appliances ADIP scheme and how it
                    is helping empowering Divyangjan?
                  </AccordionTrigger>
                  <AccordionContent className=" text-base text-start font-extralight text-slate-500">
                    Under the ADIP Scheme, assistive devices are given to PwDs
                    with the aim to improve their independent functioning and to
                    arrest the extent of disability and occurrence of secondary
                    disability. The scheme also envisages conduct of corrective
                    surgery whenever required before providing an assistive
                    device. Detailed scheme can be downloaded from download
                    section on the homepage.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="py-5 text-slate-600">
                  <AccordionTrigger className="text-[18px] text-start ">
                    Who are eligible for getting benefit under the ADIP Scheme?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-start font-extralight text-slate-500">
                    A person with disabilities fulfilling the following
                    conditions would be eligible for assistance under ADIP
                    Scheme.
                    <br />
                    1. An Indian Citizen of any age.
                    <br />
                    2. Holds a 40% and above Disability Certificate (Benchmark
                    disability).
                    <br />
                    3. Having monthly income from all sources not exceeding
                    Rs.30,000/- per month.
                    <br />
                    4. In case of dependents, the income of parents/guardians
                    not exceeding Rs. 30,000/- per month.The amount of
                    assistance will be as follows:-
                    <br />
                    Total Income Amount of Assistance
                    <br />
                    Upto Rs. 22,500/- per month Full cost of aid/appliance
                    <br />
                    Rs.22,501/- to Rs. 30,000/- per month 50% of the cost of
                    aid/appliance
                    <br />
                    5. Not having received assistance during the last 3 years
                    for the same purpose from any source. However, for children
                    below 12 years of age, the minimum time of assistance is one
                    year.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="py-5 text-slate-600">
                  <AccordionTrigger className="text-[18px] text-start ">
                    What are the documents required ?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-start font-extralight text-slate-500">
                    1. Passport Size Photographs.
                    <br />
                    2. A copy of the disability certificate.
                    <br />
                    3. Address proof (copy of Aadhaar Card or/ Voter Id Card or/
                    Ration Card etc.)
                    <br />
                    4. A copy of Income Certificate.
                    <br />
                    5. An undertaking that he/she has not received the same aids
                    & assistive devices from any source during the last three
                    years.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
            <TabsContent value="udid-card" className="md:px-10">
              <Accordion type="single" collapsible className="w-full flex flex-col gap-4">
                <AccordionItem value="item-1" className="py-5 text-slate-600">
                  <AccordionTrigger className="text-[18px] text-start">
                    What is UDID card?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-start font-extralight text-slate-500">
                    UDID Card or Unique Disability Identity card is an
                    initiative by Government of India with a view of creating a
                    National Database for PwDs, and to issue a Unique Disability
                    Identity Card to each person with disabilities. This aims to
                    encourage transparency, eﬃciency and ease of delivering the
                    government beneﬁts to the person with disabilities, and to
                    ensure uniformity. This will help in stream-lining the
                    tracking of physical and ﬁnancial progress of beneﬁciary at
                    all levels of hierarchy of implementation – from village
                    level, block level, District level , State level and
                    National level.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2" className="py-5 text-slate-600">
                  <AccordionTrigger className="text-[18px] text-start">
                    Who can apply for UDID Card and where to apply for UDID
                    card?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-start font-extralight text-slate-500">
                    Any citizen of India with full/partial disability can apply
                    for UDID card at the website-
                    https://www.swavlambancard.gov.in/
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3" className="py-5 text-slate-600">
                  <AccordionTrigger className="text-[18px] text-start">
                  What should be the document size and format to be uploaded while applying in UDID portal for Disability certificate and UDID card?
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-start font-extralight text-slate-500">
                    A coloured photo, Disability Certiﬁcate (If already has) and
                    Address Proof.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
          <div className="p-6 flex flex-col items-center">
          <h1 className='text-2xl p-4'> Have a question not covered in the FAQ?</h1>
           <Link to='/contact'>
            <Button className="rounded-full bg-orange-500 hover:bg-orange-600 w-32 h-12 text-lg">
            Contact Us
           </Button>
          </Link>
          </div>
        </div>
      </LayoutWraper>
     
    </div>
  )
}

export default MoreFaq
