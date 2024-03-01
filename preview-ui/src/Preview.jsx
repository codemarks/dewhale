import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import React from 'react';

const CookiePreferences = () => {
  return (
    <div className="flex flex-col items-start justify-center p-6 space-y-6 bg-white rounded shadow-md max-w-md mx-auto my-8">
      <h2 className="text-xl font-semibold">Cookie Preferences</h2>
      <div className="flex items-center w-full">
        <Label htmlFor="essential-cookies" className="flex-1">Essential Cookies</Label>
        <Switch id="essential-cookies" defaultChecked />
      </div>
      <div className="flex items-center w-full">
        <Label htmlFor="analytics-cookies" className="flex-1">Analytics Cookies</Label>
        <Switch id="analytics-cookies" />
      </div>
      <div className="flex items-center w-full">
        <Label htmlFor="marketing-cookies" className="flex-1">Marketing Cookies</Label>
        <Switch id="marketing-cookies" />
      </div>
      <div className="flex items-center w-full">
        <Label htmlFor="social-media-cookies" className="flex-1">Social Media Cookies</Label>
        <Switch id="social-media-cookies" />
      </div>
      <button className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Save Preferences
      </button>
    </div>
  );
};

export default CookiePreferences;