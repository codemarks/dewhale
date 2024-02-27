import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Terminal } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useState } from 'react';

export default function CodeToGifLandingPage() {
  const [code, setCode] = useState('// Your code here...');
  const [gifUrl, setGifUrl] = useState('https://via.placeholder.com/400x300');

  const handleCodeChange = (e) => setCode(e.target.value);
  const handleGenerateGif = () => {
    // Simulate gif generation
    setGifUrl('https://via.placeholder.com/400x300/000000/FFFFFF/?text=Generated+GIF');
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white p-4 shadow-md">
        <h1 className="text-xl font-bold">Code to GIF Maker</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <Alert>
            <Terminal className="h-4 w-4" />
            <AlertTitle>Get Started!</AlertTitle>
            <AlertDescription>
              Paste your code below and generate a GIF to share in presentations, blogs, or social media.
            </AlertDescription>
          </Alert>
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Paste Your Code</CardTitle>
            </CardHeader>
            <CardContent>
              <Textarea className="w-full h-64" value={code} onChange={handleCodeChange} />
            </CardContent>
            <CardFooter>
              <Button onClick={handleGenerateGif}>Generate GIF</Button>
            </CardFooter>
          </Card>
          <Tabs defaultValue="result" className="mt-6">
            <TabsList>
              <TabsTrigger value="result">Result</TabsTrigger>
              <TabsTrigger value="how-it-works">How It Works</TabsTrigger>
            </TabsList>
            <TabsContent value="result" className="mt-4">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={gifUrl}
                  alt="Generated GIF"
                  className="rounded-md object-cover"
                />
              </AspectRatio>
            </TabsContent>
            <TabsContent value="how-it-works" className="mt-4">
              <p>
                Our tool takes your code snippet, runs it in a virtual environment, and captures the output as a GIF.
                You can then download the GIF and use it wherever you like!
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="bg-white p-4 shadow-md">
        <p className="text-center text-sm text-gray-500">
          © 2023 Code to GIF Maker. All rights reserved.
        </p>
      </footer>
    </div>
  );
}