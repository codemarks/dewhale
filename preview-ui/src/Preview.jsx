import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import React from 'react';

export default function FAQSection() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>What is your return policy?</AccordionTrigger>
          <AccordionContent>
            We accept returns within 30 days of purchase. Items must be in original condition and include all original packaging.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How do I track my order?</AccordionTrigger>
          <AccordionContent>
            Once your order has shipped, you will receive an email with a tracking number. You can use this number to track your order on the carrier's website.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Do you ship internationally?</AccordionTrigger>
          <AccordionContent>
            Yes, we ship to over 100 countries worldwide. Shipping costs will apply, and will be added at checkout.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>How can I contact customer service?</AccordionTrigger>
          <AccordionContent>
            Our customer service team is available Monday through Friday, 9am to 5pm PST. You can reach us at support@example.com or by calling 1-800-123-4567.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Do you offer gift wrapping?</AccordionTrigger>
          <AccordionContent>
            Yes, we offer gift wrapping for a small fee. You can select this option at checkout.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}