import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
export default function CookiePreferencesForm() {
  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white rounded-lg shadow-md">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Cookie Preferences</h2>
        <p className="text-sm text-gray-600">
          We use cookies to personalize content and ads, to provide social media features, and to analyze our traffic.
        </p>
      </div>
      <Separator />
      <div className="mt-4">
        <div className="flex justify-between items-center py-2">
          <div>
            <h3 className="font-medium">Essential Cookies</h3>
            <p className="text-xs text-gray-500">
              These cookies are necessary for the website to function and cannot be switched off in our systems.
            </p>
          </div>
          <Switch />
        </div>
        <Separator />
        <div className="flex justify-between items-center py-2">
          <div>
            <h3 className="font-medium">Performance Cookies</h3>
            <p className="text-xs text-gray-500">
              These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.
            </p>
          </div>
          <Switch />
        </div>
        <Separator />
        <div className="flex justify-between items-center py-2">
          <div>
            <h3 className="font-medium">Functional Cookies</h3>
            <p className="text-xs text-gray-500">
              These cookies enable the website to provide enhanced functionality and personalization.
            </p>
          </div>
          <Switch />
        </div>
        <Separator />
        <div className="flex justify-between items-center py-2">
          <div>
            <h3 className="font-medium">Targeting Cookies</h3>
            <p className="text-xs text-gray-500">
              These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant adverts on other sites.
            </p>
          </div>
          <Switch />
        </div>
      </div>
    </div>
  );
}