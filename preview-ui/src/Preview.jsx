import { Home, Search, Video, Bell } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useState } from 'react';

export default function YouTubeHomepage() {
  const [searchQuery, setSearchQuery] = useState('');

  const videos = [
    { id: 1, title: "Learn React In 30 Minutes", views: "2.3M views", uploaded: "1 day ago", channel: "React Academy", channelImg: "https://github.com/Yuyz0112.png" },
    // ... more videos
  ];

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-white px-4 py-2 flex justify-between items-center shadow-md">
        <div className="flex items-center space-x-2">
          <Home className="w-6 h-6 text-gray-700" />
          <h1 className="text-xl font-bold">YouTube</h1>
        </div>
        <div className="flex items-center space-x-2">
          <Input placeholder="Search" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <Button variant="solid" className="px-4">
            <Search className="w-4 h-4" />
          </Button>
        </div>
        <div className="flex items-center space-x-4">
          <Video className="w-6 h-6 text-gray-700" />
          <Bell className="w-6 h-6 text-gray-700" />
          <Avatar>
            <AvatarImage src="https://github.com/Yuyz0112.png" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto">
        <ScrollArea className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded shadow p-4">
              <AspectRatio ratio={16 / 9} className="mb-2">
                <img
                  src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
                  alt={video.title}
                  className="rounded-md object-cover"
                />
              </AspectRatio>
              <div className="flex items-center space-x-2 mb-2">
                <Avatar>
                  <AvatarImage src={video.channelImg} />
                  <AvatarFallback>{video.channel[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-medium">{video.title}</h3>
                  <p className="text-sm text-gray-600">{video.channel}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500">{video.views} · {video.uploaded}</p>
            </div>
          ))}
        </ScrollArea>
      </main>
      <footer className="bg-white p-4 shadow-md">
        <p className="text-center text-sm text-gray-500">© 2021 YouTube, LLC</p>
      </footer>
    </div>
  );
}