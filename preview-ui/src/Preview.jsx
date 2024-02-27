import { Home, Code, Image, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { useState } from 'react';

export default function CodeToGifLandingPage() {
  const [code, setCode] = useState('// Your code here...');
  const [gifUrl, setGifUrl] = useState('https://via.placeholder.com/400x300');

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const generateGif = () => {
    // Simulate gif generation
    setGifUrl('https://via.placeholder.com/400x300/0000FF/808080?Text=Generated+Gif');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Home className="inline-block mr-2" /> Code to GIF Maker
        </h1>
        <Button variant="outline">Sign In</Button>
      </header>
      <main className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto">
          <Alert>
            <Code className="h-4 w-4" />
            <AlertTitle>Convert your code snippets into GIFs!</AlertTitle>
            <AlertDescription>
              Easily share your code snippets in a more engaging way.
            </AlertDescription>
          </Alert>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Enter Your Code</CardTitle>
                <CardDescription>
                  Paste your code snippet below and click "Generate" to create a GIF.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea value={code} onChange={handleCodeChange} className="w-full h-64" />
              </CardContent>
              <CardFooter>
                <Button onClick={generateGif}>Generate</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Your GIF</CardTitle>
                <CardDescription>
                  Preview and download your generated GIF.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={4 / 3}>
                  <img
                    src={gifUrl}
                    alt="Generated GIF"
                    className="rounded-md object-cover"
                  />
                </AspectRatio>
              </CardContent>
              <CardFooter>
                <Button variant="outline">Download</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <footer className="bg-white p-4 shadow-md text-center">
        Made with <Image className="inline-block mx-1" /> by Code to GIF Team
      </footer>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              <ArrowRight className="w-5 h-5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Go to top</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}