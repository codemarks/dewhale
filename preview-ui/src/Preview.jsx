import { PlayCircle, Search, Video, Bell, Home, List, Clock, Eye, ThumbsUp, ThumbsDown, Share, Flag, MessageCircle } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import React from 'react';

export default function YouTubeClone() {
  return (
    (<div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-2 bg-red-600 text-white">
        <div className="flex items-center space-x-2">
          <PlayCircle className="w-8 h-8" />
          <span className="text-xl font-bold">YouTube</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-white text-gray-700 rounded px-2 py-1">
            <Input placeholder="Search" className="bg-transparent border-none" />
            <Button variant="ghost">
              <Search className="w-5 h-5" />
            </Button>
          </div>
          <Button variant="ghost">
            <Video className="w-6 h-6" />
          </Button>
          <Button variant="ghost">
            <Bell className="w-6 h-6" />
          </Button>
          <Avatar>
            <AvatarImage src="https://github.com/Yuyz0112.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </header>
      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-gray-100 p-4 hidden sm:block">
          <Button variant="ghost" className="flex items-center space-x-2 w-full justify-start">
            <Home className="w-6 h-6" />
            <span>Home</span>
          </Button>
          <Button variant="ghost" className="flex items-center space-x-2 w-full justify-start">
            <div className="w-6 h-6" />
            <span>Trending</span>
          </Button>
          <Button variant="ghost" className="flex items-center space-x-2 w-full justify-start">
            <List className="w-6 h-6" />
            <span>Subscriptions</span>
          </Button>
          <Button variant="ghost" className="flex items-center space-x-2 w-full justify-start">
            <Clock className="w-6 h-6" />
            <span>Library</span>
          </Button>
        </div>

        {/* Video Feed */}
        <div className="flex-1 p-4">
          <ScrollArea className="h-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.from({ length: 6 }, (_, index) => (
                <div key={index} className="bg-white rounded shadow">
                  <AspectRatio ratio={16 / 9}>
                    <img
                      src={`https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80&auto=format&fit=crop&h=150&ixid=${index}`}
                      alt="Video thumbnail"
                      className="rounded-t-md object-cover"
                    />
                  </AspectRatio>
                  <div className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Avatar>
                        <AvatarImage src={`https://i.pravatar.cc/150?img=${index + 1}`} />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Video Title {index + 1}</div>
                        <div className="text-gray-500 text-sm">Channel Name</div>
                      </div>
                    </div>
                    <div className="text-gray-600 text-sm">
                      <Eye className="inline-block mr-1" /> 1.4M views · 2 days ago
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
      {/* Video Detail */}
      <div className="bg-white p-4">
        <Tabs defaultValue="video" className="w-full">
          <TabsList>
            <TabsTrigger value="video">Video</TabsTrigger>
            <TabsTrigger value="comments">Comments</TabsTrigger>
          </TabsList>
          <TabsContent value="video" className="p-4">
            <AspectRatio ratio={16 / 9}>
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </AspectRatio>
            <div className="mt-4">
              <h2 className="text-2xl font-bold">Video Title</h2>
              <div className="flex items-center justify-between text-gray-600 text-sm mt-2">
                <div>
                  <Eye className="inline-block mr-1" /> 1.4M views · 2 days ago
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="ghost">
                    <ThumbsUp className="w-6 h-6" />
                    <span>123K</span>
                  </Button>
                  <Button variant="ghost">
                    <ThumbsDown className="w-6 h-6" />
                    <span>Dislike</span>
                  </Button>
                  <Button variant="ghost">
                    <Share className="w-6 h-6" />
                    <span>Share</span>
                  </Button>
                  <Button variant="ghost">
                    <div className="w-6 h-6" />
                    <span>Save</span>
                  </Button>
                  <Button variant="ghost">
                    <Flag className="w-6 h-6" />
                    <span>Report</span>
                  </Button>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Avatar>
                    <AvatarImage src="https://github.com/Yuyz0112.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">Channel Name</div>
                    <div className="text-gray-500 text-sm">1.4M subscribers</div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">
                  Published on 14th June 2021
                </p>
                <p className="mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                </p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="comments" className="p-4">
            <div className="flex items-start space-x-2 mb-4">
              <Avatar>
                <AvatarImage src="https://github.com/Yuyz0112.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="bg-gray-100 rounded p-2">
                  <div className="font-medium">User Name</div>
                  <p className="text-gray-600 text-sm">
                    This is a comment on the video.
                  </p>
                </div>
                <div className="flex items-center space-x-2 text-gray-500 text-sm mt-1">
                  <Button variant="ghost">
                    <ThumbsUp className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost">
                    <ThumbsDown className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost">
                    <MessageCircle className="w-4 h-4" />
                    <span>Reply</span>
                  </Button>
                </div>
              </div>
            </div>
            {/* Repeat for more comments */}
          </TabsContent>
        </Tabs>
      </div>
      {/* Footer */}
      <footer className="bg-gray-100 p-4 text-center text-sm text-gray-600">
        © 2021 YouTube Clone. All rights reserved.
      </footer>
    </div>)
  );
}