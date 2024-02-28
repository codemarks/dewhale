import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import React from 'react';

const FAQSection = () => {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="mb-6">
        <label htmlFor="search" className="sr-only">Search FAQs</label>
        <div className="flex items-center border rounded overflow-hidden">
          <span className="pl-3">
            <Search className="w-5 h-5 text-gray-500" />
          </span>
          <Input id="search" placeholder="Search for questions..." className="pl-2" />
        </div>
      </div>
      <Accordion type="multiple" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What are the shipping options available?</AccordionTrigger>
          <AccordionContent>
            We offer several shipping options to cater to your needs. These include standard shipping, which typically takes 3-5 business days, and expedited shipping for faster delivery within 1-2 business days. Shipping costs and delivery times may vary depending on your location. For more details, please visit our <a href="#" className="text-blue-600 hover:underline">Shipping Policy page</a>.
          </AccordionContent>
        </AccordionItem>
        {/* Repeat for each FAQ item */}
      </Accordion>
    </div>
  );
};

export default FAQSection;